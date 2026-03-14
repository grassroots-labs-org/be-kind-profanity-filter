import { adjustCertaintyForLanguage } from "../src/innocence-scoring.js";
import type { InnocentEntry } from "../src/languages/innocent-words.js";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build a pre-computed amplified signal from word-level and document-level
 * language signals using 1.5:1 doc:word weighting.
 */
function buildAmplified(
  wordSignal: Record<string, number>,
  docSignal: Record<string, number>,
): Record<string, number> {
  const DOC_WEIGHT = 1.5;
  const WORD_WEIGHT = 1.0;
  const TOTAL = DOC_WEIGHT + WORD_WEIGHT; // 2.5

  const amplified: Record<string, number> = {};
  const allLangs = new Set([
    ...Object.keys(wordSignal),
    ...Object.keys(docSignal),
  ]);
  for (const lang of allLangs) {
    amplified[lang] =
      ((wordSignal[lang] ?? 0) * WORD_WEIGHT +
        (docSignal[lang] ?? 0) * DOC_WEIGHT) /
      TOTAL;
  }
  return amplified;
}

// ─────────────────────────────────────────────────────────────────────────────
// Fixtures — reusable innocent entries
// ─────────────────────────────────────────────────────────────────────────────

const SLUT_INNOCENT: InnocentEntry[] = [
  { language: "sv", meaning: "end/finish", dampeningFactor: 0.9 },
  { language: "da", meaning: "end/finish", dampeningFactor: 0.9 },
];

const BITE_INNOCENT: InnocentEntry[] = [
  { language: "en", meaning: "to use teeth", dampeningFactor: 0.9 },
];

const FART_INNOCENT: InnocentEntry[] = [
  { language: "sv", meaning: "speed", dampeningFactor: 0.9 },
  { language: "no", meaning: "speed", dampeningFactor: 0.9 },
  { language: "da", meaning: "speed", dampeningFactor: 0.9 },
];

const COCK_INNOCENT: InnocentEntry[] = [
  { language: "en", meaning: "rooster", dampeningFactor: 0.1 },
];

const HOOTERS_INNOCENT: InnocentEntry[] = [
  { language: "en", meaning: "owls/restaurant", dampeningFactor: 0.1 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Tests
// ─────────────────────────────────────────────────────────────────────────────

describe("adjustCertaintyForLanguage", () => {
  // ── Dampening: innocent language dominates ──────────────────────────────

  describe("dampening — innocent language dominates", () => {
    it("dampens 'slut' in Swedish text below c:3 threshold", () => {
      // Swedish dominates both word and doc signals
      const amplified = buildAmplified(
        { sv: 0.8, en: 0.1 },
        { sv: 0.85, en: 0.05 },
      );
      // profaneLanguage is "en" (English profanity), but Swedish signal is strongest
      const result = adjustCertaintyForLanguage(4, "en", SLUT_INNOCENT, amplified);
      expect(result).toBeLessThan(3);
    });

    it("dampens 'bite' in English text against French profanity", () => {
      // English dominates — "bite" is innocent in English
      const amplified = buildAmplified(
        { en: 0.9, fr: 0.05 },
        { en: 0.8, fr: 0.1 },
      );
      // profaneLanguage is "fr" (French profanity)
      const result = adjustCertaintyForLanguage(4, "fr", BITE_INNOCENT, amplified);
      expect(result).toBeLessThan(3);
    });

    it("dampens 'fart' in Scandinavian text against English profanity", () => {
      // Norwegian dominates
      const amplified = buildAmplified(
        { no: 0.7, en: 0.1 },
        { no: 0.75, en: 0.05 },
      );
      const result = adjustCertaintyForLanguage(4, "en", FART_INNOCENT, amplified);
      expect(result).toBeLessThan(3);
    });
  });

  // ── Boosting: profane language dominates ────────────────────────────────

  describe("boosting — profane language dominates", () => {
    it("boosts 'slut' in English text (clamped to 5)", () => {
      // English dominates — "slut" is profane in English
      const amplified = buildAmplified(
        { en: 0.9, sv: 0.05 },
        { en: 0.85, sv: 0.05 },
      );
      const result = adjustCertaintyForLanguage(4, "en", SLUT_INNOCENT, amplified);
      expect(result).toBeGreaterThanOrEqual(4);
      expect(result).toBeLessThanOrEqual(5);
    });

    it("boosts 'bite' in French text (clamped to 5)", () => {
      // French dominates — "bite" is profane in French
      const amplified = buildAmplified(
        { fr: 0.9, en: 0.05 },
        { fr: 0.85, en: 0.05 },
      );
      const result = adjustCertaintyForLanguage(4, "fr", BITE_INNOCENT, amplified);
      expect(result).toBeGreaterThanOrEqual(4);
      expect(result).toBeLessThanOrEqual(5);
    });
  });

  // ── Low dampeningFactor — dangerous dual-meaning words ─────────────────

  describe("low dampeningFactor — dangerous dual-meaning words", () => {
    it("'cock' (df: 0.1) barely adjusts even when English dominates innocently", () => {
      // Even with strong English signal, the low dampeningFactor means minimal change
      const amplified = buildAmplified(
        { en: 0.9 },
        { en: 0.85 },
      );
      // profaneLanguage is "en" too, so profane signal = innocent signal → no change
      // But let's test with a scenario where innocent signal is slightly stronger
      const amplifiedInnocent = buildAmplified(
        { en: 0.9, fr: 0.0 },
        { en: 0.85, fr: 0.0 },
      );
      // Use "fr" as profane language so English is the innocent signal
      const result = adjustCertaintyForLanguage(4, "fr", COCK_INNOCENT, amplifiedInnocent);
      // With df=0.1, dampening should be very small: 4 * (1 - 0.1 * ~0.86) ≈ 4 * 0.914 ≈ 3.66
      expect(result).toBeGreaterThan(3.5);
      expect(result).toBeLessThan(4);
    });

    it("'hooters' (df: 0.1) barely adjusts even when English dominates innocently", () => {
      const amplified = buildAmplified(
        { en: 0.9, fr: 0.0 },
        { en: 0.85, fr: 0.0 },
      );
      const result = adjustCertaintyForLanguage(4, "fr", HOOTERS_INNOCENT, amplified);
      expect(result).toBeGreaterThan(3.5);
      expect(result).toBeLessThan(4);
    });
  });

  // ── Edge cases ─────────────────────────────────────────────────────────

  describe("edge cases", () => {
    it("no signal → no change", () => {
      const amplified = buildAmplified({}, {});
      const result = adjustCertaintyForLanguage(3, "en", SLUT_INNOCENT, amplified);
      expect(result).toBe(3);
    });

    it("below 0.01 threshold → no change", () => {
      const amplified = buildAmplified(
        { en: 0.005, sv: 0.003 },
        { en: 0.005, sv: 0.003 },
      );
      const result = adjustCertaintyForLanguage(3, "en", SLUT_INNOCENT, amplified);
      expect(result).toBe(3);
    });

    it("equal signal → no change", () => {
      const amplified = buildAmplified(
        { en: 0.5, sv: 0.5 },
        { en: 0.5, sv: 0.5 },
      );
      const result = adjustCertaintyForLanguage(3, "en", SLUT_INNOCENT, amplified);
      expect(result).toBe(3);
    });

    it("clamped to max 5", () => {
      // Huge profane signal to trigger boost
      const amplified: Record<string, number> = { en: 1.0, sv: 0.0 };
      const result = adjustCertaintyForLanguage(5, "en", SLUT_INNOCENT, amplified);
      expect(result).toBe(5);
    });

    it("clamped to min 0", () => {
      // Huge innocent signal to dampen to below 0
      const amplified: Record<string, number> = { sv: 1.0, en: 0.0 };
      const result = adjustCertaintyForLanguage(1, "en", SLUT_INNOCENT, amplified);
      expect(result).toBeGreaterThanOrEqual(0);
    });

    it("multiple innocent entries → strongest signal wins", () => {
      // "fart" has entries for sv, no, da — use the one with highest amplified signal
      const amplified = buildAmplified(
        { no: 0.1, sv: 0.8, da: 0.05, en: 0.02 },
        { no: 0.05, sv: 0.85, da: 0.02, en: 0.01 },
      );
      const result = adjustCertaintyForLanguage(4, "en", FART_INNOCENT, amplified);
      // Swedish signal is strongest among innocent entries
      // Should dampen significantly with df=0.9
      expect(result).toBeLessThan(2);
    });

    it("empty innocent entries → no change", () => {
      const amplified = buildAmplified(
        { en: 0.9 },
        { en: 0.85 },
      );
      const result = adjustCertaintyForLanguage(4, "en", [], amplified);
      expect(result).toBe(4);
    });
  });
});
