/**
 * computeEldPenalty — produces a weight from 1.0 (trust ELD) → 0.2 (ignore ELD)
 *
 * Three penalty axes chip away at the weight:
 *   1. ELD Entropy    — dominance ratio + spread + reliability
 *   2. Scrappiness    — romanized, SMS-abbreviated, vowel-starved, too few words
 *   3. Signature Miss — text lacks expected orthographic markers for detected language
 *
 * Final weight = clamp(1.0 - entropy_pen - scrappy_pen - signature_pen, 0.2, 1.0)
 */

// @ts-ignore
import { eld } from 'eld/small';

// ─── Language Family Clusters ────────────────────────────────────────────────
// Used to detect incoherent ELD results (romanized text produces random scatter)

const LANGUAGE_FAMILIES: Record<string, string[]> = {
  romance:      ['fr', 'ca', 'it', 'pt', 'es', 'ro', 'gl', 'oc'],
  germanic:     ['de', 'nl', 'da', 'no', 'sv', 'af', 'is', 'lb', 'en'],
  slavic:       ['ru', 'uk', 'bg', 'pl', 'cs', 'sk', 'hr', 'sr', 'sl', 'bs', 'mk'],
  uralic:       ['fi', 'hu', 'et'],
  turkic:       ['tr', 'az', 'uz', 'kk', 'ky', 'tk'],
  celtic:       ['cy', 'ga', 'gd', 'br'],
  baltic:       ['lt', 'lv'],
  semitic:      ['ar', 'he', 'mt'],
  indic:        ['hi', 'bn', 'mr', 'gu', 'pa', 'ne', 'si', 'ur'],
  dravidian:    ['ta', 'te', 'kn', 'ml'],
  sinitic:      ['zh'],
  japonic:      ['ja'],
  koreanic:     ['ko'],
  austronesian: ['tl', 'ms', 'id', 'mg', 'ceb', 'jv', 'su'],
  tai:          ['th', 'lo'],
};

const LANG_TO_FAMILY: Record<string, string> = {};
for (const [family, langs] of Object.entries(LANGUAGE_FAMILIES)) {
  for (const lang of langs) LANG_TO_FAMILY[lang] = family;
}

function analyzeCluster(scores: Record<string, number>): {
  uniqueFamilies: number;
  dominantFamilyCount: number;
  isCoherent: boolean;   // ≥3 of top-5 in same family
  isScattered: boolean;  // ≥4 unique families in top-5
} {
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const top5families = sorted.slice(0, 5).map(([l]) => LANG_TO_FAMILY[l] || 'unknown');
  const familyCounts: Record<string, number> = {};
  for (const f of top5families) familyCounts[f] = (familyCounts[f] || 0) + 1;
  const uniqueFamilies = Object.keys(familyCounts).length;
  const dominantFamilyCount = Math.max(0, ...Object.values(familyCounts));
  return {
    uniqueFamilies,
    dominantFamilyCount,
    isCoherent: dominantFamilyCount >= 3,
    isScattered: uniqueFamilies >= 4,
  };
}

// ─── Romanization Detection ──────────────────────────────────────────────────
// Detects Latin-script text that is actually a romanized form of a non-Latin language.
// ELD is fundamentally broken for these — it'll map Hindi to Norwegian, Arabic to Spanish, etc.

// Common Latin trigrams in the major Latin-script language families.
// Romanized text from non-Latin languages will have a very different trigram profile.
// Common trigrams across all major Latin-script languages.
// If text has a very low hit rate against this set, it's likely not a
// natural Latin-script language (i.e. it's romanized non-Latin).
const LATIN_LANG_TRIGRAMS = new Set([
  // English
  'the', 'ing', 'and', 'her', 'hat', 'ent', 'ion', 'for', 'ter',
  'was', 'tha', 'ere', 'his', 'ith', 'ver', 'all', 'ati', 'not', 'are',
  'tio', 'com', 'men', 'pro', 'ess', 'ble', 'ive', 'ous', 'ght', 'ted',
  // French
  'les', 'que', 'est', 'des', 'ait', 'par', 'ant',
  'our', 'eme', 'ais', 'eur', 'ons', 'oir', 'ell', 'ien', 'uit',
  // Spanish / Portuguese
  'con', 'nte', 'ado', 'mos', 'por', 'del', 'los', 'las',
  'ier', 'aba', 'ero', 'ura', 'dad',
  // German
  'ein', 'und', 'der', 'den', 'die', 'ich', 'sch', 'che', 'ung',
  'ber', 'aus', 'ach', 'eit', 'auf', 'gen', 'ges', 'uch',
  // Dutch
  'het', 'een', 'van', 'aar', 'oor', 'ijk', 'erd',
  // Italian
  'ato', 'per', 'tta', 'gli', 'amo',
  'enz', 'ria', 'ita', 'ere', 'tto',
  // Turkish
  'lar', 'ler', 'bir', 'eri', 'ini', 'rak', 'aki', 'yor',
  'mak', 'dir', 'ile', 'olu', 'isi', 'dan', 'nin', 'lik',
  // Polish
  'nie', 'prz', 'rze', 'owa', 'nia', 'dzi', 'icz', 'ost', 'sta',
  'ych', 'ego', 'owe', 'wie', 'kie', 'eni', 'owy', 'ski',
  // Swedish / Norwegian / Danish
  'att', 'och', 'som', 'med', 'har', 'kan', 'det', 'lig', 'nde',
  'isk', 'nad', 'ska',
  // Indonesian / Malay
  'ang', 'kan', 'ber', 'ada', 'ari', 'ata',
  'yan', 'ini', 'apa', 'ran', 'aha', 'ika',
  // Tagalog
  'mga', 'ina', 'aba', 'isa',
  // Swahili
  'kwa', 'cha', 'mba', 'ali', 'aji',
  'ake', 'iki', 'ama', 'ish', 'afa',
  // Romanian
  'rea', 'ile', 'ate', 'tat', 'lor',
]);

interface RomanizationResult {
  isRomanized: boolean;
  confidence: number;  // 0 = definitely native Latin, 1 = definitely romanized
  signals: string[];
}

function isRomanized(
  text: string,
  eldLang: string,
  eldTopScore: number,
  eldReliable: boolean,
  cluster: { isScattered: boolean; isCoherent: boolean; uniqueFamilies: number },
): RomanizationResult {
  const signals: string[] = [];
  let score = 0;

  const words = text.split(/\s+/).filter(w => w.length > 0);
  const alphaText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F\u0370-\uFFFF]/g, '');
  const latinText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '');
  const isLatinScript = alphaText.length > 0 ? latinText.length / alphaText.length > 0.85 : true;

  // Not Latin script at all → can't be romanized
  if (!isLatinScript) {
    return { isRomanized: false, confidence: 0, signals: ['native-script'] };
  }

  // Too few words — ELD scatters naturally on short input, don't call it romanized
  if (words.length <= 3) {
    return { isRomanized: false, confidence: 0, signals: ['too-short'] };
  }

  // Signal 1: ELD's top-5 are incoherent
  // Scatter alone is suspicious but not proof — English casual text can scatter too.
  if (cluster.isScattered) {
    score += 0.25;
    signals.push('family-scatter');
  } else if (!cluster.isCoherent) {
    score += 0.15;
    signals.push('family-incoherent');
  }

  // Signal 2: ELD mapped to a language that is ELD's "garbage bin"
  // Only Yoruba — ELD's favorite dumping ground for unrecognizable Latin text.
  // Do NOT include real Latin-script languages (Tagalog, Malay, Swahili, etc.)
  const ELD_GARBAGE_LANGS = new Set(['yo', 'hmn']);
  if (ELD_GARBAGE_LANGS.has(eldLang)) {
    score += 0.25;
    signals.push('eld-garbage-lang');
  }

  // Signal 3: ELD's absolute score is low — no language fits well
  if (eldTopScore < 0.45) {
    score += 0.20;
    signals.push('very-low-eld');
  } else if (eldTopScore < 0.60) {
    score += 0.10;
    signals.push('low-eld');
  }

  // Signal 4: ELD says unreliable
  if (!eldReliable) {
    score += 0.10;
    signals.push('eld-unreliable');
  }

  // Signal 5: Latin trigram miss rate — romanized text uses unusual trigram combos
  // e.g. "bhenchod" → "bhe", "hen", "enc" — none common in Latin languages
  const trigramWords = text.toLowerCase().split(/\s+/).filter(w => w.length >= 3);
  if (trigramWords.length >= 3) {
    let trigramHits = 0;
    let trigramTotal = 0;
    for (const word of trigramWords) {
      const clean = word.replace(/[^a-z]/g, '');
      for (let i = 0; i <= clean.length - 3; i++) {
        trigramTotal++;
        if (LATIN_LANG_TRIGRAMS.has(clean.slice(i, i + 3))) trigramHits++;
      }
    }
    const hitRate = trigramTotal > 0 ? trigramHits / trigramTotal : 0.5;
    if (hitRate < 0.05) {
      score += 0.20;
      signals.push('zero-trigram-hits');
    } else if (hitRate < 0.12) {
      score += 0.10;
      signals.push('low-trigram-hits');
    }
  }

  const confidence = Math.min(1.0, score);
  return {
    isRomanized: confidence >= 0.40,
    confidence,
    signals,
  };
}

// ─── Language Signature Definitions ──────────────────────────────────────────

interface LanguageSignature {
  pattern: RegExp;
  minDensity: number;
  type: 'diacritic' | 'script';
}

const SIGNATURES: Record<string, LanguageSignature> = {
  // Diacritic languages (Latin script + expected accents)
  fr: { pattern: /[àâæçéèêëïîôœùûüÿ]/gi,   minDensity: 0.020, type: 'diacritic' },
  de: { pattern: /[äöüß]/gi,                  minDensity: 0.015, type: 'diacritic' },
  es: { pattern: /[áéíóúñü¿¡]/gi,            minDensity: 0.015, type: 'diacritic' },
  pt: { pattern: /[àáâãçéêíóôõú]/gi,         minDensity: 0.020, type: 'diacritic' },
  tr: { pattern: /[çğıöşü]/gi,               minDensity: 0.025, type: 'diacritic' },
  ro: { pattern: /[ăâîșț]/gi,                minDensity: 0.015, type: 'diacritic' },
  pl: { pattern: /[ąćęłńóśźż]/gi,            minDensity: 0.025, type: 'diacritic' },
  cs: { pattern: /[áčďéěíňóřšťúůýž]/gi,      minDensity: 0.030, type: 'diacritic' },
  vi: { pattern: /[àáâãèéêìíòóôõùúýăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/g, minDensity: 0.060, type: 'diacritic' },
  sv: { pattern: /[åäö]/gi,                   minDensity: 0.010, type: 'diacritic' },
  da: { pattern: /[æøå]/gi,                   minDensity: 0.010, type: 'diacritic' },
  no: { pattern: /[æøå]/gi,                   minDensity: 0.010, type: 'diacritic' },
  hu: { pattern: /[áéíóöőúüű]/gi,            minDensity: 0.030, type: 'diacritic' },

  // Non-Latin script languages
  zh: { pattern: /[\u4e00-\u9fff\u3400-\u4dbf]/g,         minDensity: 0.50, type: 'script' },
  ja: { pattern: /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff]/g, minDensity: 0.30, type: 'script' },
  ko: { pattern: /[\uac00-\ud7af\u1100-\u11ff]/g,         minDensity: 0.30, type: 'script' },
  ar: { pattern: /[\u0600-\u06ff\u0750-\u077f]/g,         minDensity: 0.50, type: 'script' },
  fa: { pattern: /[\u0600-\u06ff\u0750-\u077f]/g,         minDensity: 0.50, type: 'script' },
  he: { pattern: /[\u0590-\u05ff]/g,                       minDensity: 0.50, type: 'script' },
  hi: { pattern: /[\u0900-\u097f]/g,                       minDensity: 0.40, type: 'script' },
  bn: { pattern: /[\u0980-\u09ff]/g,                       minDensity: 0.40, type: 'script' },
  ta: { pattern: /[\u0b80-\u0bff]/g,                       minDensity: 0.40, type: 'script' },
  te: { pattern: /[\u0c00-\u0c7f]/g,                       minDensity: 0.40, type: 'script' },
  th: { pattern: /[\u0e00-\u0e7f]/g,                       minDensity: 0.40, type: 'script' },
  ru: { pattern: /[\u0400-\u04ff]/g,                       minDensity: 0.50, type: 'script' },
  uk: { pattern: /[\u0400-\u04ff]/g,                       minDensity: 0.50, type: 'script' },
  bg: { pattern: /[\u0400-\u04ff]/g,                       minDensity: 0.50, type: 'script' },
  el: { pattern: /[\u0370-\u03ff]/g,                       minDensity: 0.40, type: 'script' },
  ka: { pattern: /[\u10a0-\u10ff]/g,                       minDensity: 0.40, type: 'script' },
  gu: { pattern: /[\u0a80-\u0aff]/g,                       minDensity: 0.40, type: 'script' },
  pa: { pattern: /[\u0a00-\u0a7f]/g,                       minDensity: 0.40, type: 'script' },
  mr: { pattern: /[\u0900-\u097f]/g,                       minDensity: 0.40, type: 'script' },
  ml: { pattern: /[\u0d00-\u0d7f]/g,                       minDensity: 0.40, type: 'script' },
  kn: { pattern: /[\u0c80-\u0cff]/g,                       minDensity: 0.40, type: 'script' },
  my: { pattern: /[\u1000-\u109f]/g,                       minDensity: 0.40, type: 'script' },
};

// ─── Types ───────────────────────────────────────────────────────────────────

export interface EldPenaltyResult {
  /** 1.0 = fully trust ELD, 0.2 = barely trust it */
  weight: number;
  eldLanguage: string;
  eldTopScore: number;

  entropyPenalty: number;   // max 0.35
  scrappyPenalty: number;   // max 0.25
  signaturePenalty: number; // max 0.15

  flags: string[];
}

// ─── Core ────────────────────────────────────────────────────────────────────

export function computeEldPenalty(text: string): EldPenaltyResult {
  const result = eld.detect(text);
  const scores: Record<string, number> = result.getScores();
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);

  const lang = result.language;
  const topScore = sorted[0]?.[1] ?? 0;
  const secondScore = sorted[1]?.[1] ?? 0;
  const spread = topScore - secondScore;
  const reliable = result.isReliable();

  // Dominance: how much does #1 stand above the rest of the top-5?
  const top5 = sorted.slice(0, 5).map(([, s]) => s);
  const rest = top5.slice(1);
  const restMean = rest.length > 0 ? rest.reduce((a, b) => a + b, 0) / rest.length : 0;
  const dominance = restMean > 0 ? topScore / restMean : 10; // high if no competition

  const flags: string[] = [];

  // ── Text metrics ───────────────────────────────────────────────────────
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const alphaText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F\u0370-\uFFFF]/g, '');
  const alphaLen = alphaText.length;
  const latinText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '');
  const latinLen = latinText.length;
  const isLatin = alphaLen > 0 ? latinLen / alphaLen > 0.8 : true;

  const avgWordLen = words.length > 0
    ? words.reduce((s, w) => s + w.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F\u0370-\uFFFF]/g, '').length, 0) / words.length
    : 0;

  const vowelCount = (latinText.match(/[aeiouàáâãäåæèéêëìíîïòóôõöùúûüýÿ]/gi) || []).length;
  const vowelRatio = latinLen > 0 ? vowelCount / latinLen : 0.4;

  const shortWords = words.filter(w => w.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '').length <= 2).length;
  const shortWordRatio = words.length > 0 ? shortWords / words.length : 0;

  // ═══════════════════════════════════════════════════════════════════════
  // AXIS 1: ELD ENTROPY — how decisive is the detection?       (max 0.35)
  //
  // Based on calibration:
  //   Clean FR/DE → dominance 1.65-1.70, spread 0.26-0.28
  //   Clean EN    → dominance 1.17,      spread 0.11
  //   Dropped acc → dominance 1.18,      spread 0.08
  //   SMS         → dominance 1.06-1.16, spread 0.02-0.04
  //   Romanized   → dominance 1.06-1.26, spread 0.02-0.09
  //   Single word → dominance 1.06-1.08, spread 0.003-0.01
  // ═══════════════════════════════════════════════════════════════════════
  let entropyPenalty = 0;

  // Dominance: top score vs field — the primary ELD confidence signal
  if (dominance < 1.08) {
    entropyPenalty += 0.15;
    flags.push('entropy:flat');
  } else if (dominance < 1.20) {
    entropyPenalty += 0.08;
    flags.push('entropy:bunched');
  } else if (dominance < 1.35) {
    entropyPenalty += 0.03;
    flags.push('entropy:moderate');
  }
  // dominance >= 1.35 → clear winner, no penalty

  // Spread: gap between #1 and #2 — catches near-ties
  if (spread < 0.015) {
    entropyPenalty += 0.12;
    flags.push('spread:coin-flip');
  } else if (spread < 0.05) {
    entropyPenalty += 0.06;
    flags.push('spread:tight');
  } else if (spread < 0.10) {
    entropyPenalty += 0.02;
    flags.push('spread:narrow');
  }

  // ELD's own reliability flag
  if (!reliable) {
    entropyPenalty += 0.05;
    flags.push('eld:unreliable');
  }

  // Low absolute score — ELD itself isn't confident in any language
  // Clean text: 0.77-0.86, degraded: 0.60-0.75, junk: 0.35-0.55
  if (topScore < 0.45) {
    entropyPenalty += 0.10;
    flags.push('entropy:low-score');
  } else if (topScore < 0.60) {
    entropyPenalty += 0.05;
    flags.push('entropy:weak-score');
  }

  // Language family coherence — the strongest romanization signal
  // Real text: top-5 cluster in 1-2 families (romance, germanic, etc.)
  // Romanized: top-5 scatter across 4-5 unrelated families
  const cluster = analyzeCluster(scores);
  if (cluster.isScattered) {
    entropyPenalty += 0.15;
    flags.push('entropy:scattered');
  } else if (!cluster.isCoherent) {
    entropyPenalty += 0.08;
    flags.push('entropy:incoherent');
  }

  entropyPenalty = Math.min(entropyPenalty, 0.35);

  // ═══════════════════════════════════════════════════════════════════════
  // AXIS 2: SCRAPPINESS — is the text degraded?                (max 0.25)
  // ═══════════════════════════════════════════════════════════════════════
  let scrappyPenalty = 0;

  // Too few words for n-gram context
  if (words.length === 1) {
    scrappyPenalty += 0.10;
    flags.push('scrappy:single-word');
  } else if (words.length <= 3) {
    scrappyPenalty += 0.05;
    flags.push('scrappy:few-words');
  }

  // Abbreviation: short avg word length
  if (avgWordLen < 3.0) {
    scrappyPenalty += 0.10;
    flags.push('scrappy:heavy-abbrev');
  } else if (avgWordLen < 3.8) {
    scrappyPenalty += 0.05;
    flags.push('scrappy:mild-abbrev');
  }

  // Vowel starvation (SMS drops vowels)
  if (isLatin && vowelRatio < 0.20) {
    scrappyPenalty += 0.08;
    flags.push('scrappy:vowel-starved');
  } else if (isLatin && vowelRatio < 0.28) {
    scrappyPenalty += 0.03;
    flags.push('scrappy:low-vowels');
  }

  // Dominated by tiny words
  if (shortWordRatio > 0.55) {
    scrappyPenalty += 0.05;
    flags.push('scrappy:tiny-words');
  }

  // Romanization: detected non-Latin language but text is Latin
  const sig = SIGNATURES[lang];
  if (sig?.type === 'script' && isLatin) {
    scrappyPenalty += 0.10;
    flags.push('scrappy:romanized');
  }

  // Note: "unlikely language" detection is now handled by isRomanized()

  scrappyPenalty = Math.min(scrappyPenalty, 0.25);

  // ═══════════════════════════════════════════════════════════════════════
  // AXIS 3: SIGNATURE MISMATCH                                (max 0.15)
  // Minor penalty — orthographic markers missing for detected language
  // ═══════════════════════════════════════════════════════════════════════
  let signaturePenalty = 0;

  if (sig && alphaLen > 0) {
    const sigMatches = (text.match(sig.pattern) || []).length;
    const density = sigMatches / alphaLen;
    const ratio = sig.minDensity > 0 ? density / sig.minDensity : 1;

    if (sig.type === 'diacritic') {
      // Diacritics absent: minor — text is still the same language, just lazy typing
      if (ratio === 0) {
        signaturePenalty = 0.06;
        flags.push('sig:zero-diacritics');
      } else if (ratio < 0.4) {
        signaturePenalty = 0.03;
        flags.push('sig:sparse-diacritics');
      }
    } else if (sig.type === 'script') {
      // Wrong script entirely: strong signal ELD guessed wrong
      if (ratio === 0) {
        signaturePenalty = 0.15;
        flags.push('sig:wrong-script');
      } else if (ratio < 0.3) {
        signaturePenalty = 0.10;
        flags.push('sig:mixed-script');
      }
    }
  }

  signaturePenalty = Math.min(signaturePenalty, 0.15);

  // ═══════════════════════════════════════════════════════════════════════
  // ROMANIZATION — when ELD is confidently wrong, nuke the weight
  //
  // isRomanized() returns a confidence 0-1 that text is a Latin
  // transliteration of a non-Latin language. When confident, we multiply
  // the penalty to brutally drive weight toward 0.2.
  // ═══════════════════════════════════════════════════════════════════════
  const roman = isRomanized(text, lang, topScore, reliable, cluster);

  let romanizationMultiplier = 1.0;
  if (roman.isRomanized) {
    flags.push(...roman.signals.map(s => `roman:${s}`));
    if (roman.confidence >= 0.70) {
      romanizationMultiplier = 3.0;  // nuke — drives to 0.2
      flags.push('ROMANIZED:certain');
    } else if (roman.confidence >= 0.50) {
      romanizationMultiplier = 2.2;
      flags.push('ROMANIZED:likely');
    } else {
      romanizationMultiplier = 1.6;
      flags.push('ROMANIZED:possible');
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // FINAL WEIGHT
  // ═══════════════════════════════════════════════════════════════════════
  const rawPenalty = entropyPenalty + scrappyPenalty + signaturePenalty;
  const totalPenalty = rawPenalty * romanizationMultiplier;
  const weight = Math.max(0.2, Math.min(1.0, 1.0 - totalPenalty));

  return {
    weight,
    eldLanguage: lang,
    eldTopScore: topScore,
    entropyPenalty,
    scrappyPenalty,
    signaturePenalty,
    flags,
  };
}

// ─── Demo ────────────────────────────────────────────────────────────────────
const cases: { label: string; text: string }[] = [
  // Clean, well-formed text
  { label: 'FR clean', text: "La République française célèbre la fête nationale le quatorze juillet. Les citoyens défilent dans les rues décorées." },
  { label: 'DE clean', text: "Die Universität München bietet ausgezeichnete Studiengänge für Ingenieurwissenschaften. Die Prüfungen sind äußerst anspruchsvoll." },
  { label: 'EN clean', text: "The university offers excellent engineering programs for international students from around the world." },
  { label: 'ES clean', text: "La universidad ofrece programas de ingeniería excelentes para estudiantes internacionales." },

  // Dropped diacritics
  { label: 'FR no-acc', text: "La Republique francaise celebre la fete nationale le quatorze juillet. Les citoyens defilent dans les rues decorees." },
  { label: 'DE no-uml', text: "Die Universitat Munchen bietet ausgezeichnete Studiengange fur Ingenieurwissenschaften. Die Prufungen sind ausserst anspruchsvoll." },
  { label: 'ES no-acc', text: "La universidad ofrece programas de ingenieria excelentes para estudiantes internacionales." },
  { label: 'FR partial', text: "La République francaise celebre la fête nationale le quatorze juillet." },

  // SMS / abbreviated
  { label: 'FR sms', text: "jsui alle a la bibli pr etudier, c tro dur mdr" },
  { label: 'FR sms 2', text: "pk tu repond pa? chui la dp 10min stp" },
  { label: 'DE sms', text: "bin grad an der uni pruefung war krass alter" },
  { label: 'EN sms', text: "omg u r so funny lol cant blv it tbh" },
  { label: 'EN sms 2', text: "whr r u?? im @ the prk w/ jess n tom lol" },

  // Romanized non-Latin — should ALL be brutally penalized
  { label: 'HI roman', text: "mujhe bahut accha laga yeh dekhkar ki tum aa gaye" },
  { label: 'HI roman prof', text: "bhenchod madarchod saala kutta kamina" },
  { label: 'HI roman 2', text: "kya haal hai bhai sab theek hai na" },
  { label: 'HI roman 3', text: "aaj mausam bahut achha hai bahar chalte hain" },
  { label: 'UR roman', text: "mera naam ali hai aur main karachi se hoon" },
  { label: 'UR roman prof', text: "harami kutta bhenchod gaandu saala" },
  { label: 'AR roman', text: "ana bahebak ya habibi, keefak el yom?" },
  { label: 'AR roman 2', text: "shukran jazeelan ya sadeeqi kayf halak alyawm" },
  { label: 'AR roman prof', text: "ya ibn el sharmouta kess ommak ya kalb" },
  { label: 'RU roman', text: "privet kak dela u tebya segodnya" },
  { label: 'RU roman 2', text: "ya khochu poyti v magazin kupit khleb i moloko" },
  { label: 'RU roman prof', text: "blyad suka idi nahui pizdec mudak" },
  { label: 'JA roman', text: "watashi wa nihongo o benkyou shite imasu" },
  { label: 'JA roman 2', text: "kyou wa totemo ii tenki desu ne sampo shimashou" },
  { label: 'KO roman', text: "annyeonghaseyo hangugeo-reul gongbu hago isseoyo" },
  { label: 'KO roman 2', text: "oneul nalssiga joeyo sancheck halkka yo" },
  { label: 'ZH pinyin', text: "wo shi zhongguo ren wo ai zhongguo" },
  { label: 'ZH pinyin 2', text: "jintian tianqi hen hao women yiqi qu gongyuan ba" },
  { label: 'ZH pinyin prof', text: "cao ni ma sha bi wang ba dan tamade" },
  { label: 'TH roman', text: "sawadee krap sabai dee mai wan nee arai di" },
  { label: 'BN roman', text: "amar naam rahim ami dhaka theke eshechi" },
  { label: 'TA roman', text: "vanakkam eppadi irukkinga naan nalla irukken" },

  // Single / very short
  { label: '1w: merde', text: "merde" },
  { label: '1w: Scheiße', text: "Scheiße" },
  { label: '1w: français', text: "français" },
  { label: '1w: fuck', text: "fuck" },
  { label: '2w: tu sucks', text: "tu sucks" },
  { label: '3w: das ist gut', text: "das ist gut" },

  // Profanity: clean vs degraded
  { label: 'FR prof +acc', text: "putain de merde, va te faire enculé espèce de connard" },
  { label: 'FR prof -acc', text: "putain de merde, va te faire encule espece de connard" },
  { label: 'DE prof +uml', text: "Scheiße, du Arschloch! Halt die Fresse, du Hürensohn!" },
  { label: 'DE prof -uml', text: "Scheisse, du Arschloch! Halt die Fresse, du Hurensohn!" },

  // Real event descriptions
  { label: 'FR event +', text: "Rejoignez-nous pour une soirée exceptionnelle de musique française au théâtre municipal. Venez nombreux!" },
  { label: 'FR event -', text: "Rejoignez-nous pour une soiree exceptionnelle de musique francaise au theatre municipal. Venez nombreux!" },
  { label: 'DE event +', text: "Kommen Sie zu unserem jährlichen Straßenfest mit Bratwürsten und Bier in der wunderschönen Altstadt." },
  { label: 'DE event -', text: "Kommen Sie zu unserem jahrlichen Strassenfest mit Bratwursten und Bier in der wunderschonen Altstadt." },

  // Mixed / edge
  { label: 'HI mixed', text: "yeh bahut अच्छा hai bhai" },
  { label: 'ZH pinyin', text: "wo shi zhongguo ren wo ai zhongguo" },
  { label: 'ZH actual', text: "我是中国人我爱中国" },
  { label: 'JA actual', text: "私は日本語を勉強しています" },
];

// ── Output ───────────────────────────────────────────────────────────────────
const C = { l: 16, w: 6, e: 6, s: 6, m: 6, eld: 4, sc: 7 };

console.log('='.repeat(115));
console.log('computeEldPenalty — Weight: 1.0 (trust ELD) → 0.2 (fallback to own scoring)');
console.log('='.repeat(115));
console.log(
  'Label'.padEnd(C.l),
  'Wt'.padStart(C.w),
  'Entr'.padStart(C.e),
  'Scrp'.padStart(C.s),
  'Sig'.padStart(C.m),
  'ELD'.padEnd(C.eld),
  'Score'.padStart(C.sc),
  '  Flags',
);
console.log('-'.repeat(115));

for (const { label, text } of cases) {
  const r = computeEldPenalty(text);

  let tier: string;
  if (r.weight >= 0.85) tier = '██';
  else if (r.weight >= 0.65) tier = '▓▓';
  else if (r.weight >= 0.45) tier = '░░';
  else tier = '  ';

  console.log(
    label.padEnd(C.l),
    `${tier}${r.weight.toFixed(2)}`.padStart(C.w + 2),
    r.entropyPenalty.toFixed(2).padStart(C.e),
    r.scrappyPenalty.toFixed(2).padStart(C.s),
    r.signaturePenalty.toFixed(2).padStart(C.m),
    r.eldLanguage.padEnd(C.eld),
    r.eldTopScore.toFixed(4).padStart(C.sc),
    ` ${r.flags.join(', ') || '—'}`,
  );
}

// ── Histogram ────────────────────────────────────────────────────────────────
console.log('');
console.log('='.repeat(115));
console.log('Weight Distribution');
console.log('='.repeat(115));

const buckets = [
  { min: 0.85, max: 1.01, label: '0.85-1.00 ██ TRUST ELD      — use ELD language for word list selection' },
  { min: 0.65, max: 0.85, label: '0.65-0.84 ▓▓ LEAN ELD       — ELD language primary, also check "all" list' },
  { min: 0.45, max: 0.65, label: '0.45-0.64 ░░ CHECK BOTH     — run ELD lang + "all" list, merge results' },
  { min: 0.20, max: 0.45, label: '0.20-0.44    OWN SCORING    — ignore ELD, scan against full word list' },
];

for (const bucket of buckets) {
  const matching = cases.filter(c => {
    const w = computeEldPenalty(c.text).weight;
    return w >= bucket.min && w < bucket.max;
  });
  console.log(`\n  ${bucket.label} (${matching.length})`);
  for (const m of matching) {
    const r = computeEldPenalty(m.text);
    console.log(`    ${m.label.padEnd(18)} → ${r.eldLanguage} (w=${r.weight.toFixed(2)})`);
  }
}
