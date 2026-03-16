/**
 * Prototype: detecting degraded text (abbreviations, dropped diacritics, romanization)
 * and applying confidence penalties to ELD scores.
 */

// @ts-ignore
import { eld } from 'eld/small';

// ── Diacritic maps per language ──────────────────────────────────────────────
// Expected diacritics for languages that use them heavily
const LANGUAGE_DIACRITICS: Record<string, { chars: RegExp; expectedDensity: number }> = {
  fr: { chars: /[àâæçéèêëïîôœùûüÿÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]/g, expectedDensity: 0.03 },
  de: { chars: /[äöüßÄÖÜ]/g, expectedDensity: 0.025 },
  es: { chars: /[áéíóúñüÁÉÍÓÚÑÜ¿¡]/g, expectedDensity: 0.025 },
  pt: { chars: /[àáâãçéêíóôõúÀÁÂÃÇÉÊÍÓÔÕÚ]/g, expectedDensity: 0.03 },
  tr: { chars: /[çğıöşüÇĞİÖŞÜ]/g, expectedDensity: 0.04 },
  ro: { chars: /[ăâîșțĂÂÎȘȚ]/g, expectedDensity: 0.02 },
  pl: { chars: /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, expectedDensity: 0.04 },
  cs: { chars: /[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/g, expectedDensity: 0.04 },
  vi: { chars: /[àáâãèéêìíòóôõùúýăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/g, expectedDensity: 0.08 },
};

// Languages that use non-Latin scripts natively
const NON_LATIN_LANGUAGES = new Set([
  'ar', 'bn', 'fa', 'he', 'hi', 'ja', 'ka', 'km', 'kn', 'ko',
  'ml', 'mr', 'my', 'ne', 'pa', 'ru', 'si', 'ta', 'te', 'th',
  'uk', 'ur', 'zh', 'el', 'bg', 'mk', 'sr', 'mn', 'am', 'gu',
]);

// ── Analysis functions ───────────────────────────────────────────────────────

interface TextAnalysis {
  avgWordLength: number;
  vowelRatio: number;        // vowels / total alpha chars
  diacriticDensity: number;  // diacritic chars / total alpha chars
  isLatinScript: boolean;    // is the text predominantly Latin?
  shortWordRatio: number;    // words <= 2 chars / total words
  scoreSpread: number;       // gap between #1 and #2 ELD score
  topScoreValue: number;     // the winning score
}

function analyzeText(text: string): TextAnalysis {
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const alphaOnly = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '');
  const latinChars = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '').length;
  const totalChars = text.replace(/[^a-zA-Z\u0080-\uFFFF]/g, '').length;

  const vowels = (alphaOnly.match(/[aeiouAEIOUàáâãäåæèéêëìíîïòóôõöùúûüýÿ]/g) || []).length;
  const diacritics = (text.match(/[À-ÿ\u0100-\u024F]/g) || []).length;

  const avgWordLength = words.length > 0
    ? words.reduce((sum, w) => sum + w.replace(/[^a-zA-ZÀ-ÿ]/g, '').length, 0) / words.length
    : 0;

  const shortWords = words.filter(w => w.replace(/[^a-zA-ZÀ-ÿ]/g, '').length <= 2).length;

  return {
    avgWordLength,
    vowelRatio: alphaOnly.length > 0 ? vowels / alphaOnly.length : 0,
    diacriticDensity: alphaOnly.length > 0 ? diacritics / alphaOnly.length : 0,
    isLatinScript: totalChars > 0 ? latinChars / totalChars > 0.8 : true,
    shortWordRatio: words.length > 0 ? shortWords / words.length : 0,
    scoreSpread: 0,  // filled in later
    topScoreValue: 0,
  };
}

// ── Confidence penalty system ────────────────────────────────────────────────

interface PenaltyBreakdown {
  diacriticPenalty: number;
  abbreviationPenalty: number;
  romanizationPenalty: number;
  ambiguityPenalty: number;
  totalPenalty: number;
  adjustedScore: number;
  flags: string[];
}

function computePenalties(
  detectedLang: string,
  topScore: number,
  secondScore: number,
  analysis: TextAnalysis,
): PenaltyBreakdown {
  const flags: string[] = [];
  let diacriticPenalty = 0;
  let abbreviationPenalty = 0;
  let romanizationPenalty = 0;
  let ambiguityPenalty = 0;

  // 1. Diacritic penalty: Latin-script language detected but no/low diacritics
  const langDiacritics = LANGUAGE_DIACRITICS[detectedLang];
  if (langDiacritics && analysis.isLatinScript) {
    const ratio = analysis.diacriticDensity / langDiacritics.expectedDensity;
    if (ratio < 0.1) {
      // Almost no diacritics when we'd expect them
      diacriticPenalty = 0.08;
      flags.push('no-diacritics');
    } else if (ratio < 0.5) {
      diacriticPenalty = 0.04;
      flags.push('low-diacritics');
    }
  }

  // 2. Abbreviation penalty: short words + low vowel ratio
  if (analysis.avgWordLength < 3.5) {
    abbreviationPenalty += 0.10;
    flags.push('very-short-words');
  } else if (analysis.avgWordLength < 4.0) {
    abbreviationPenalty += 0.05;
    flags.push('short-words');
  }

  if (analysis.vowelRatio < 0.25) {
    abbreviationPenalty += 0.08;
    flags.push('vowel-starved');
  } else if (analysis.vowelRatio < 0.30) {
    abbreviationPenalty += 0.04;
    flags.push('low-vowels');
  }

  if (analysis.shortWordRatio > 0.5) {
    abbreviationPenalty += 0.05;
    flags.push('many-short-words');
  }

  // 3. Romanization penalty: detected language uses non-Latin script but text is Latin
  if (NON_LATIN_LANGUAGES.has(detectedLang) && analysis.isLatinScript) {
    romanizationPenalty = 0.15;
    flags.push('romanized');
  }

  // 4. Ambiguity penalty: top scores are bunched together
  const spread = topScore - secondScore;
  if (spread < 0.05) {
    ambiguityPenalty = 0.10;
    flags.push('ambiguous-top2');
  } else if (spread < 0.10) {
    ambiguityPenalty = 0.05;
    flags.push('narrow-spread');
  }

  const totalPenalty = Math.min(
    diacriticPenalty + abbreviationPenalty + romanizationPenalty + ambiguityPenalty,
    0.30, // cap total penalty
  );

  return {
    diacriticPenalty,
    abbreviationPenalty,
    romanizationPenalty,
    ambiguityPenalty,
    totalPenalty,
    adjustedScore: Math.max(0, topScore - totalPenalty),
    flags,
  };
}

// ── Test cases ───────────────────────────────────────────────────────────────

const testCases = [
  // Clean text (should have minimal penalties)
  { label: 'FR clean accented', text: "La République française célèbre la fête nationale le quatorze juillet." },
  { label: 'DE clean umlauts', text: "Die Universität München bietet ausgezeichnete Studiengänge für Ingenieurwissenschaften." },
  { label: 'EN clean', text: "The university offers excellent engineering programs for international students." },

  // Dropped diacritics (should get moderate penalty)
  { label: 'FR no accents', text: "La Republique francaise celebre la fete nationale le quatorze juillet." },
  { label: 'DE no umlauts', text: "Die Universitat Munchen bietet ausgezeichnete Studiengange fur Ingenieurwissenschaften." },

  // SMS / abbreviated (should get high penalty)
  { label: 'FR sms', text: "jsui alle a la bibli pr etudier, c tro dur mdr" },
  { label: 'FR sms 2', text: "pk tu repond pa? chui la dp 10min stp" },
  { label: 'DE sms', text: "bin grad an der uni, pruefung war krass alter" },
  { label: 'EN sms', text: "omg u r so funny lol cant blv it tbh" },

  // Romanized non-Latin (should get romanization penalty)
  { label: 'HI romanized', text: "mujhe bahut accha laga yeh dekhkar ki tum aa gaye" },
  { label: 'HI romanized profanity', text: "bhenchod madarchod saala kutta kamina" },
  { label: 'AR romanized', text: "ana bahebak ya habibi, keefak el yom?" },
  { label: 'JA romanized', text: "watashi wa nihongo o benkyou shite imasu" },
  { label: 'RU romanized', text: "privet kak dela u tebya segodnya" },
  { label: 'KO romanized', text: "annyeonghaseyo jeo-neun hangugeo-reul gongbu hago isseoyo" },

  // Profanity - clean vs degraded
  { label: 'FR profanity accented', text: "putain de merde, va te faire enculé espèce de connard" },
  { label: 'FR profanity no-accent', text: "putain de merde, va te faire encule espece de connard" },
  { label: 'DE profanity umlauts', text: "Scheiße, du Arschloch! Halt die Fresse, du Hürensohn!" },
  { label: 'DE profanity dropped', text: "Scheisse, du Arschloch! Halt die Fresse, du Hurensohn!" },

  // Short / single word edge cases
  { label: 'FR single accented', text: "français" },
  { label: 'FR single no-accent', text: "francais" },
  { label: 'DE single umlaut', text: "Universität" },
  { label: 'DE single no-umlaut', text: "Universitat" },
  { label: 'short merde', text: "merde" },
  { label: 'short Scheiße', text: "Scheiße" },

  // Mixed scripts (romanized + some native)
  { label: 'HI mixed', text: "yeh bahut अच्छा hai bhai" },
];

// ── Run ──────────────────────────────────────────────────────────────────────

console.log('='.repeat(110));
console.log('ELD Confidence Penalty Analysis');
console.log('='.repeat(110));

const COL = { label: 30, det: 4, raw: 7, adj: 7, pen: 7, flags: 40 };

console.log(
  'Label'.padEnd(COL.label),
  'Det'.padEnd(COL.det),
  'Raw'.padStart(COL.raw),
  'Adj'.padStart(COL.adj),
  'Pen'.padStart(COL.pen),
  '  Flags',
);
console.log('-'.repeat(110));

for (const { label, text } of testCases) {
  const result = eld.detect(text);
  const scores = result.getScores();
  const sorted = Object.entries(scores).sort(([, a], [, b]) => (b as number) - (a as number));

  const detectedLang = result.language;
  const topScore = sorted[0]?.[1] as number ?? 0;
  const secondScore = sorted[1]?.[1] as number ?? 0;

  const analysis = analyzeText(text);
  const penalties = computePenalties(detectedLang, topScore, secondScore, analysis);

  const reliable = result.isReliable();

  console.log(
    label.padEnd(COL.label),
    detectedLang.padEnd(COL.det),
    topScore.toFixed(4).padStart(COL.raw),
    penalties.adjustedScore.toFixed(4).padStart(COL.adj),
    `-${penalties.totalPenalty.toFixed(2)}`.padStart(COL.pen),
    ` ${penalties.flags.length > 0 ? penalties.flags.join(', ') : '(clean)'}`,
  );
}

console.log('');
console.log('='.repeat(110));
console.log('DETAILED BREAKDOWN');
console.log('='.repeat(110));

for (const { label, text } of testCases) {
  const result = eld.detect(text);
  const scores = result.getScores();
  const sorted = Object.entries(scores).sort(([, a], [, b]) => (b as number) - (a as number));

  const topScore = sorted[0]?.[1] as number ?? 0;
  const secondScore = sorted[1]?.[1] as number ?? 0;

  const analysis = analyzeText(text);
  const penalties = computePenalties(result.language, topScore, secondScore, analysis);

  console.log(`\n[${label}] "${text.slice(0, 70)}${text.length > 70 ? '...' : ''}"`);
  console.log(`  ELD: ${result.language} (${topScore.toFixed(4)}) | #2: ${sorted[1]?.[0]}(${secondScore.toFixed(4)}) | spread: ${(topScore - secondScore).toFixed(4)}`);
  console.log(`  Text stats: avgWord=${analysis.avgWordLength.toFixed(1)} vowelRatio=${analysis.vowelRatio.toFixed(3)} diacriticDensity=${analysis.diacriticDensity.toFixed(4)} shortWordRatio=${analysis.shortWordRatio.toFixed(2)} latin=${analysis.isLatinScript}`);
  console.log(`  Penalties: diacritic=${penalties.diacriticPenalty.toFixed(2)} abbrev=${penalties.abbreviationPenalty.toFixed(2)} romanize=${penalties.romanizationPenalty.toFixed(2)} ambiguity=${penalties.ambiguityPenalty.toFixed(2)} → total=${penalties.totalPenalty.toFixed(2)}`);
  console.log(`  Final: ${topScore.toFixed(4)} - ${penalties.totalPenalty.toFixed(2)} = ${penalties.adjustedScore.toFixed(4)} [${penalties.flags.join(', ') || 'clean'}]`);
}
