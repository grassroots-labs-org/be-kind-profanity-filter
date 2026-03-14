/**
 * Innocence Scoring — adjusts profanity certainty based on cross-language context.
 *
 * When a word is profane in one language but innocent in another (e.g., "slut"
 * is profane in English but means "end" in Swedish), this module adjusts the
 * certainty score based on detected language signals.
 *
 * - Dampens certainty when the innocent language dominates the text context
 * - Boosts certainty when the profane language dominates
 * - Applies the word's dampeningFactor to control adjustment magnitude
 */

import type { InnocentEntry } from "./languages/innocent-words.js";

/**
 * Adjust a word's certainty score based on cross-language innocence data
 * and pre-computed amplified language signals.
 *
 * @param certainty     - Base certainty score (0-5)
 * @param profaneLanguage - ISO 639-1 code of the language where the word is profane
 * @param innocentEntries - Array of languages where the word is innocent
 * @param amplified     - Pre-computed weighted average of word + document language signals
 * @returns Adjusted certainty, clamped to [0, 5]
 */
export function adjustCertaintyForLanguage(
  certainty: number,
  profaneLanguage: string,
  innocentEntries: InnocentEntry[],
  amplified: Record<string, number>,
): number {
  // No innocent entries → no adjustment possible
  if (innocentEntries.length === 0) {
    return certainty;
  }

  const profaneAmp = amplified[profaneLanguage] ?? 0;

  // Find the strongest innocent signal among all innocent entries
  let bestInnocentAmp = 0;
  let bestEntry: InnocentEntry | null = null;
  for (const entry of innocentEntries) {
    const amp = amplified[entry.language] ?? 0;
    if (amp > bestInnocentAmp) {
      bestInnocentAmp = amp;
      bestEntry = entry;
    }
  }

  // Both signals below threshold → no meaningful signal to act on
  if (profaneAmp < 0.01 && bestInnocentAmp < 0.01) {
    return certainty;
  }

  let adjusted = certainty;

  if (bestInnocentAmp > profaneAmp && bestEntry) {
    // Innocent language dominates → dampen certainty
    adjusted = certainty * (1 - bestEntry.dampeningFactor * bestInnocentAmp);
  } else if (profaneAmp > bestInnocentAmp && bestEntry) {
    // Profane language dominates → boost certainty
    adjusted = certainty * (1 + bestEntry.dampeningFactor * profaneAmp);
  }
  // Equal signals → no change

  // Clamp to [0, 5]
  return Math.max(0, Math.min(5, adjusted));
}
