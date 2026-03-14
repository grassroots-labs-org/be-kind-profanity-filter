/**
 * End-to-end integration tests for the innocence scoring system.
 *
 * These tests exercise the full detect() pipeline — dictionary lookup, language
 * detection, innocence scoring, and severity classification — to verify that
 * cross-language collision words are correctly handled based on language context.
 *
 * Key constraints:
 * - The "all" dictionary (english-primary-all-languages.ts) is the only one loaded
 *   by default. French-only words like "bite" are NOT available unless French is
 *   explicitly loaded, and even then the availableLanguages map may not include them.
 * - The ELD language detector has limited Scandinavian language support — Swedish
 *   text is often classified as German or English, which limits dampening effectiveness
 *   for Swedish collision words like "slut".
 * - Words with same profane and innocent language (e.g., "ass" en→en, "cock" en→en)
 *   produce equal profane/innocent amplified signals, resulting in no adjustment.
 */

import { AllProfanity, WordSeverity } from "../src/index.js";
import type { ScoredWord } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Find a specific word's ScoredWord entry in the detect() result. */
function findScoredWord(
  scoredWords: ScoredWord[],
  word: string,
): ScoredWord | undefined {
  return scoredWords.find(
    (sw) => sw.word.toLowerCase() === word.toLowerCase(),
  );
}

/** Find a ScoredWord where the detected word contains the target word. */
function findScoredWordContaining(
  scoredWords: ScoredWord[],
  word: string,
): ScoredWord | undefined {
  return scoredWords.find(
    (sw) => sw.word.toLowerCase().includes(word.toLowerCase()),
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Swedish collision words — innocence scoring behavior
// ─────────────────────────────────────────────────────────────────────────────

describe("Swedish collision words — innocence scoring behavior", () => {
  let filter: AllProfanity;

  beforeAll(() => {
    filter = new AllProfanity({ silent: true });
  });

  it("'slut' is detected in Swedish text (word-level signal alone insufficient to dampen)", () => {
    // Swedish text where "slut" means "end/finish"
    // The language detector does not reliably identify Swedish at the document level
    // (it often classifies it as German), so the Swedish word-level signal alone
    // cannot overcome the English profane signal from the document context.
    const text =
      "Programmet börjar klockan åtta och tar slut vid tio på kvällen. " +
      "Vi hoppas att alla har det bra och njuter av evenemanget till slut.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut");

    // "slut" is detected — it's in the "all" dictionary with s:3 c:4
    expect(slutWord).toBeDefined();
    // The innocence scoring runs but Swedish signal is too weak at doc level
    // to dampen below the flag threshold (c < 3 for s:3)
    expect(slutWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("'hell' in Swedish/Norwegian text stays AMBIVALENT (already below flag threshold)", () => {
    // "hell" has s:2, c:2 in the dictionary — below any flag threshold
    // (s:3 c:3+, s:4+ c:2+, s:5 any c), so it's always AMBIVALENT regardless
    // of innocence scoring
    const text =
      "Du har verkligen hell i att hitta en så bra lägenhet. " +
      "Med lite hell kan vi vinna matchen ikväll.";
    const result = filter.detect(text);
    const hellWord = findScoredWord(result.scoredWords, "hell");

    if (hellWord) {
      expect(hellWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
    // If "hell" doesn't appear in scoredWords at all, that's also acceptable
    // as it's below all flag thresholds
  });

  it("'bra' in Swedish text is AMBIVALENT (collision word with low severity)", () => {
    // "bra" is in the all-dictionary and in innocent-words with sv dampening
    const text =
      "Programmet börjar klockan åtta och tar slut vid tio på kvällen. " +
      "Vi hoppas att alla har det bra och njuter av evenemanget till slut.";
    const result = filter.detect(text);
    const braWord = findScoredWord(result.scoredWords, "bra");

    if (braWord) {
      // "bra" has a low score in the dictionary, so it should be AMBIVALENT
      expect(braWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. English dual-meaning words — same profane/innocent language
// ─────────────────────────────────────────────────────────────────────────────

describe("English dual-meaning words — same profane and innocent language", () => {
  let filter: AllProfanity;

  beforeAll(() => {
    filter = new AllProfanity({ silent: true });
  });

  it("'ass' with en→en collision: profane/innocent signals cancel out, stays PROFANE", () => {
    // "ass" is profane in English (s:3 c:3) and innocent in English (donkey, df:0.15)
    // Since profaneLanguage="en" and innocentLanguage="en", amplified signals are equal
    // → no adjustment occurs → certainty stays at 3 → flags at s:3 c:3+
    const text = "Get your ass over here right now, you idiot.";
    const result = filter.detect(text);
    const assWord = findScoredWord(result.scoredWords, "ass");

    expect(assWord).toBeDefined();
    expect(assWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("'cock' with en→en collision: profane/innocent signals cancel out, stays PROFANE", () => {
    // "cock" is profane in English (s:4 c:3) and innocent in English (rooster, df:0.1)
    // Same-language collision → no adjustment → flags at s:4+ c:2+
    const text = "She couldn't stop talking about his cock all night long.";
    const result = filter.detect(text);
    const cockWord = findScoredWord(result.scoredWords, "cock");

    expect(cockWord).toBeDefined();
    expect(cockWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("'ass' in animal context still flags due to en→en collision (no dampening possible)", () => {
    // Even when "ass" is used innocently (donkey), the en→en collision means
    // profaneAmp == innocentAmp → no adjustment → stays PROFANE
    const text =
      "The donkey, also known as an ass, is a domesticated member of the horse family.";
    const result = filter.detect(text);
    const assWord = findScoredWord(result.scoredWords, "ass");

    if (assWord) {
      // Same-language collision prevents dampening even in innocent context
      expect(assWord.severity).toBe(WordSeverity.PROFANE);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. English profanity still flagged correctly
// ─────────────────────────────────────────────────────────────────────────────

describe("English profanity still flagged correctly despite innocence system", () => {
  let filter: AllProfanity;

  beforeAll(() => {
    filter = new AllProfanity({ silent: true });
  });

  it("'slut' in English profane context is PROFANE (detected as part of multi-word match)", () => {
    // When "slut" appears alongside other profane words, the filter may detect
    // multi-word phrases (e.g., "dirty slut") rather than standalone "slut"
    const text =
      "You dirty slut, get out of here. " +
      "Nobody wants to see your face around this neighborhood.";
    const result = filter.detect(text);

    // May match as "dirty slut" (multi-word) or standalone "slut"
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");

    expect(slutWord).toBeDefined();
    expect(slutWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("standalone 'slut' in English text is PROFANE", () => {
    const text = "That person is a slut and everyone knows it.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");

    expect(slutWord).toBeDefined();
    expect(slutWord!.severity).toBe(WordSeverity.PROFANE);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Regression — existing profanity detection unaffected
// ─────────────────────────────────────────────────────────────────────────────

describe("Regression — existing profanity detection unaffected by innocence scoring", () => {
  let filter: AllProfanity;

  beforeAll(() => {
    filter = new AllProfanity({ silent: true });
  });

  it("English profanity 'fuck' is detected and scored as PROFANE", () => {
    const result = filter.detect("What the fuck is going on here?");

    expect(result.hasProfanity).toBe(true);
    expect(
      result.detectedWords.some((w) => w.toLowerCase().includes("fuck")),
    ).toBe(true);

    const fuckWord = findScoredWord(result.scoredWords, "fuck") ??
      findScoredWordContaining(result.scoredWords, "fuck");
    expect(fuckWord).toBeDefined();
    expect(fuckWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("English profanity 'shit' is detected and scored as PROFANE", () => {
    // "shit" may be detected as part of a multi-word phrase like "piece of shit"
    const result = filter.detect("This is a piece of shit product.");

    expect(result.hasProfanity).toBe(true);
    const shitWord = findScoredWord(result.scoredWords, "shit") ??
      findScoredWordContaining(result.scoredWords, "shit");
    expect(shitWord).toBeDefined();
    expect(shitWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("clean text produces no profanity detection", () => {
    const result = filter.detect(
      "Join us for a wonderful community gathering at the local park this Saturday. " +
      "We will have food, music, and games for the whole family.",
    );

    expect(result.hasProfanity).toBe(false);
    expect(result.detectedWords).toHaveLength(0);
    expect(result.scoredWords).toHaveLength(0);
  });

  it("clean text with common words does not false-positive", () => {
    const result = filter.detect(
      "The therapist suggested we discuss the problem. " +
      "She will assess the situation carefully.",
    );

    expect(result.hasProfanity).toBe(false);
    expect(result.scoredWords).toHaveLength(0);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. Innocence scoring entry point — word score and innocent entries interaction
// ─────────────────────────────────────────────────────────────────────────────

describe("Innocence scoring integration — word score and innocent entries", () => {
  let filter: AllProfanity;

  beforeAll(() => {
    filter = new AllProfanity({ silent: true });
  });

  it("'slut' has a word score with language 'en' in the dictionary", () => {
    const score = filter.getWordScore("slut");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(3);
    expect(score!.certainty).toBe(4);
    expect(score!.language).toBe("en");
  });

  it("'ass' has a word score with language 'en' in the dictionary", () => {
    const score = filter.getWordScore("ass");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(3);
    expect(score!.certainty).toBe(3);
    expect(score!.language).toBe("en");
  });

  it("'cock' has a word score with language 'en' in the dictionary", () => {
    const score = filter.getWordScore("cock");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(4);
    expect(score!.certainty).toBe(3);
    expect(score!.language).toBe("en");
  });

  it("'hell' has a word score below all flag thresholds", () => {
    const score = filter.getWordScore("hell");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(2);
    expect(score!.certainty).toBe(2);
    // s:2 c:2 does not meet any flag threshold
    const shouldFlag =
      score!.severity === 5 ||
      (score!.severity >= 4 && score!.certainty >= 2) ||
      (score!.severity === 3 && score!.certainty >= 3);
    expect(shouldFlag).toBe(false);
  });

  it("innocence scoring does not affect words without innocent entries", () => {
    // "fuck" has no entry in innocent-words.ts, so the innocence path is skipped
    const result = filter.detect("What the fuck happened yesterday?");
    const fuckWord = findScoredWord(result.scoredWords, "fuck") ??
      findScoredWordContaining(result.scoredWords, "fuck");
    expect(fuckWord).toBeDefined();
    expect(fuckWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("innocence scoring does not affect words without word scores in the dictionary", () => {
    // Words loaded from non-"all" dictionaries don't have wordScores entries
    // so the innocence scoring path is never reached for them
    const filter2 = new AllProfanity({ languages: ["french"], silent: true });
    // "merde" IS in the all-dictionary, so it should have a word score
    const merdeScore = filter2.getWordScore("merde");
    // "bite" is NOT in the all-dictionary, so it should NOT have a word score
    const biteScore = filter2.getWordScore("bite");
    expect(merdeScore).not.toBeNull();
    expect(biteScore).toBeNull();
  });
});
