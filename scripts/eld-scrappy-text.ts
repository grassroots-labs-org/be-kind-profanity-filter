/**
 * isScrappyText — detects degraded/unreliable text for language detection.
 * When true, profanity filter should fallback to its own multi-language scoring
 * rather than trusting ELD's language routing.
 */

// @ts-ignore
import { eld } from 'eld/small';

// ── Diacritic expectations per language ──────────────────────────────────────
const DIACRITIC_LANGUAGES: Record<string, { pattern: RegExp; minDensity: number }> = {
  fr: { pattern: /[àâæçéèêëïîôœùûüÿ]/gi, minDensity: 0.02 },
  de: { pattern: /[äöüß]/gi, minDensity: 0.015 },
  es: { pattern: /[áéíóúñü¿¡]/gi, minDensity: 0.015 },
  pt: { pattern: /[àáâãçéêíóôõú]/gi, minDensity: 0.02 },
  tr: { pattern: /[çğıöşü]/gi, minDensity: 0.025 },
  ro: { pattern: /[ăâîșț]/gi, minDensity: 0.015 },
  pl: { pattern: /[ąćęłńóśźż]/gi, minDensity: 0.025 },
  cs: { pattern: /[áčďéěíňóřšťúůýž]/gi, minDensity: 0.03 },
  vi: { pattern: /[àáâãèéêìíòóôõùúýăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/g, minDensity: 0.06 },
};

export interface ScrappyTextResult {
  isScrappy: boolean;
  confidence: number;        // 0-1, how confident we are in ELD (lower = scrappier)
  flags: string[];
  eldLanguage: string;
  eldScore: number;
  recommendation: 'trust-eld' | 'fallback-own-scoring' | 'check-both';
}

export function isScrappyText(text: string): ScrappyTextResult {
  const result = eld.detect(text);
  const scores = result.getScores();
  const sorted = Object.entries(scores).sort(([, a], [, b]) => (b as number) - (a as number));

  const lang = result.language;
  const topScore = (sorted[0]?.[1] as number) ?? 0;
  const secondScore = (sorted[1]?.[1] as number) ?? 0;
  const spread = topScore - secondScore;
  const reliable = result.isReliable();

  const flags: string[] = [];
  let penaltySum = 0;

  // ── Text metrics ───────────────────────────────────────────────────────
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const alphaText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '');
  const alphaLen = alphaText.length;

  const avgWordLen = words.length > 0
    ? words.reduce((s, w) => s + w.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '').length, 0) / words.length
    : 0;

  const vowelCount = (alphaText.match(/[aeiouàáâãäåæèéêëìíîïòóôõöùúûüýÿ]/gi) || []).length;
  const vowelRatio = alphaLen > 0 ? vowelCount / alphaLen : 0;

  const shortWords = words.filter(w => w.replace(/[^a-zA-ZÀ-ÿ]/g, '').length <= 2).length;
  const shortWordRatio = words.length > 0 ? shortWords / words.length : 0;

  // ── 1. Too short for reliable detection ────────────────────────────────
  if (words.length <= 1) {
    penaltySum += 0.15;
    flags.push('single-word');
  } else if (words.length <= 3) {
    penaltySum += 0.08;
    flags.push('very-few-words');
  }

  // ── 2. Missing expected diacritics ─────────────────────────────────────
  const diacriticSpec = DIACRITIC_LANGUAGES[lang];
  if (diacriticSpec && alphaLen > 0) {
    const diacriticCount = (text.match(diacriticSpec.pattern) || []).length;
    const density = diacriticCount / alphaLen;
    if (density === 0) {
      penaltySum += 0.08;
      flags.push('zero-diacritics');
    } else if (density < diacriticSpec.minDensity * 0.5) {
      penaltySum += 0.04;
      flags.push('sparse-diacritics');
    }
  }

  // ── 3. Abbreviation signals ────────────────────────────────────────────
  if (avgWordLen < 3.5) {
    penaltySum += 0.10;
    flags.push('abbreviated');
  }
  if (vowelRatio < 0.25) {
    penaltySum += 0.08;
    flags.push('vowel-starved');
  }
  if (shortWordRatio > 0.5) {
    penaltySum += 0.05;
    flags.push('mostly-short-words');
  }

  // ── 4. ELD ambiguity ──────────────────────────────────────────────────
  if (spread < 0.03) {
    penaltySum += 0.12;
    flags.push('eld-coin-flip');
  } else if (spread < 0.08) {
    penaltySum += 0.06;
    flags.push('eld-narrow-spread');
  }

  if (!reliable) {
    penaltySum += 0.10;
    flags.push('eld-unreliable');
  }

  // ── 5. Low absolute ELD score ─────────────────────────────────────────
  if (topScore < 0.55) {
    penaltySum += 0.08;
    flags.push('eld-low-score');
  }

  // ── Compute confidence ─────────────────────────────────────────────────
  const totalPenalty = Math.min(penaltySum, 0.40);
  const confidence = Math.max(0, topScore - totalPenalty);

  // ── Decision thresholds ────────────────────────────────────────────────
  let recommendation: ScrappyTextResult['recommendation'];
  if (confidence >= 0.60) {
    recommendation = 'trust-eld';
  } else if (confidence >= 0.40) {
    recommendation = 'check-both';
  } else {
    recommendation = 'fallback-own-scoring';
  }

  return {
    isScrappy: confidence < 0.55,
    confidence,
    flags,
    eldLanguage: lang,
    eldScore: topScore,
    recommendation,
  };
}

// ── Demo ─────────────────────────────────────────────────────────────────────
const cases = [
  // Clean — should trust ELD
  { label: 'FR clean', text: "La République française célèbre la fête nationale le quatorze juillet." },
  { label: 'DE clean', text: "Die Universität München bietet ausgezeichnete Studiengänge." },
  { label: 'EN clean', text: "The university offers excellent engineering programs." },

  // Dropped diacritics — check both
  { label: 'FR no accents', text: "La Republique francaise celebre la fete nationale le quatorze juillet." },
  { label: 'DE no umlauts', text: "Die Universitat Munchen bietet ausgezeichnete Studiengange." },

  // SMS/abbreviated — fallback
  { label: 'FR sms', text: "jsui alle a la bibli pr etudier, c tro dur mdr" },
  { label: 'FR sms 2', text: "pk tu repond pa? chui la dp 10min stp" },
  { label: 'EN sms', text: "omg u r so funny lol cant blv it tbh" },
  { label: 'DE sms', text: "bin grad an der uni, pruefung war krass alter" },

  // Romanized — fallback
  { label: 'HI roman', text: "mujhe bahut accha laga yeh dekhkar ki tum aa gaye" },
  { label: 'HI roman prof', text: "bhenchod madarchod saala kutta kamina" },
  { label: 'AR roman', text: "ana bahebak ya habibi, keefak el yom?" },
  { label: 'RU roman', text: "privet kak dela u tebya segodnya" },

  // Short / single word — scrappy
  { label: 'short merde', text: "merde" },
  { label: 'short Scheiße', text: "Scheiße" },
  { label: 'FR word', text: "français" },
  { label: 'FR word noAcc', text: "francais" },

  // Profanity — mixed
  { label: 'FR prof acc', text: "putain de merde, va te faire enculé espèce de connard" },
  { label: 'FR prof noAcc', text: "putain de merde, va te faire encule espece de connard" },
  { label: 'DE prof uml', text: "Scheiße, du Arschloch! Halt die Fresse, du Hürensohn!" },
  { label: 'DE prof drop', text: "Scheisse, du Arschloch! Halt die Fresse, du Hurensohn!" },

  // Real-world event descriptions (the actual use case)
  { label: 'FR event clean', text: "Rejoignez-nous pour une soirée exceptionnelle de musique française au théâtre municipal." },
  { label: 'FR event noAcc', text: "Rejoignez-nous pour une soiree exceptionnelle de musique francaise au theatre municipal." },
  { label: 'DE event clean', text: "Kommen Sie zu unserem jährlichen Straßenfest mit Bratwürsten und Bier in der Altstadt." },
  { label: 'DE event noAcc', text: "Kommen Sie zu unserem jahrlichen Strassenfest mit Bratwursten und Bier in der Altstadt." },
];

console.log('='.repeat(105));
console.log('isScrappyText Results');
console.log('='.repeat(105));
console.log(
  'Label'.padEnd(18),
  'Scrappy'.padEnd(8),
  'Conf'.padStart(6),
  'ELD'.padEnd(4),
  'Score'.padStart(7),
  ' Recommendation'.padEnd(22),
  'Flags',
);
console.log('-'.repeat(105));

for (const { label, text } of cases) {
  const r = isScrappyText(text);
  console.log(
    label.padEnd(18),
    (r.isScrappy ? 'YES' : 'no').padEnd(8),
    r.confidence.toFixed(3).padStart(6),
    r.eldLanguage.padEnd(4),
    r.eldScore.toFixed(4).padStart(7),
    ` ${r.recommendation}`.padEnd(22),
    r.flags.join(', ') || '(clean)',
  );
}
