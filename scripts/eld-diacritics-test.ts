/**
 * Quick exploration of ELD (Efficient Language Detector) behavior
 * with accented vs non-accented (lazy/dropped diacritic) text
 * Focus: French and German
 */

// @ts-ignore
import { eld } from 'eld/small';

interface EldResult {
  language: string;
  getScores: () => Record<string, number>;
  isReliable: () => boolean;
}

const testCases: { label: string; text: string }[] = [
  // === FRENCH ===
  // Properly accented French
  { label: 'FR accented (short)', text: "C'est une journée magnifique, n'est-ce pas?" },
  { label: 'FR no-accent (short)', text: "C'est une journee magnifique, n'est-ce pas?" },

  { label: 'FR accented (medium)', text: "Je suis allé à la bibliothèque pour étudier la littérature française. Les élèves préfèrent lire des œuvres classiques." },
  { label: 'FR no-accent (medium)', text: "Je suis alle a la bibliotheque pour etudier la litterature francaise. Les eleves preferent lire des oeuvres classiques." },

  { label: 'FR accented (long)', text: "La République française célèbre la fête nationale le quatorze juillet. Les citoyens défilent dans les rues décorées de drapeaux tricolores. Les enfants mangent des crêpes et des éclairs près de la cathédrale." },
  { label: 'FR no-accent (long)', text: "La Republique francaise celebre la fete nationale le quatorze juillet. Les citoyens defilent dans les rues decorees de drapeaux tricolores. Les enfants mangent des crepes et des eclairs pres de la cathedrale." },

  // French with partial accents (common in texting)
  { label: 'FR partial accents', text: "Je suis allé a la bibliotheque pour étudier la litterature francaise." },

  // French profanity - accented vs not
  { label: 'FR profanity accented', text: "putain de merde, va te faire enculé espèce de connard" },
  { label: 'FR profanity no-accent', text: "putain de merde, va te faire encule espece de connard" },

  // === GERMAN ===
  // Properly accented German (umlauts + ß)
  { label: 'DE umlauts (short)', text: "Über die Straße gehen die Mädchen zur Schülerin." },
  { label: 'DE no-umlauts (short)', text: "Ueber die Strasse gehen die Maedchen zur Schuelerin." },
  // German without umlauts - ae/oe/ue substitution
  { label: 'DE no-umlauts alt (short)', text: "Uber die Strasse gehen die Madchen zur Schulerin." },

  { label: 'DE umlauts (medium)', text: "Die Universität München bietet ausgezeichnete Studiengänge für Ingenieurwissenschaften. Die Prüfungen sind äußerst anspruchsvoll, aber die Qualität der Ausbildung ist hervorragend." },
  { label: 'DE no-umlauts (medium)', text: "Die Universitaet Muenchen bietet ausgezeichnete Studiengaenge fuer Ingenieurwissenschaften. Die Pruefungen sind aeusserst anspruchsvoll, aber die Qualitaet der Ausbildung ist hervorragend." },
  { label: 'DE dropped-umlauts (medium)', text: "Die Universitat Munchen bietet ausgezeichnete Studiengange fur Ingenieurwissenschaften. Die Prufungen sind ausserst anspruchsvoll, aber die Qualitat der Ausbildung ist hervorragend." },

  { label: 'DE umlauts (long)', text: "Während des Frühlings blühen die Bäume in den öffentlichen Gärten. Die Vögel singen fröhlich über den grünen Wiesen. Natürlich genießen die Bürger das schöne Wetter und spazieren gemütlich durch die Straßen." },
  { label: 'DE no-umlauts (long)', text: "Waehrend des Fruehlings bluehen die Baeume in den oeffentlichen Gaerten. Die Voegel singen froehlich ueber den gruenen Wiesen. Natuerlich geniessen die Buerger das schoene Wetter und spazieren gemuetlich durch die Strassen." },
  { label: 'DE dropped-umlauts (long)', text: "Wahrend des Fruhlings bluhen die Baume in den offentlichen Garten. Die Vogel singen frohlich uber den grunen Wiesen. Naturlich geniessen die Burger das schone Wetter und spazieren gemutlich durch die Strassen." },

  // German profanity
  { label: 'DE profanity umlauts', text: "Scheiße, du Arschloch! Halt die Fresse, du Hürensohn!" },
  { label: 'DE profanity no-umlauts', text: "Scheisse, du Arschloch! Halt die Fresse, du Huerensohn!" },
  { label: 'DE profanity dropped', text: "Scheisse, du Arschloch! Halt die Fresse, du Hurensohn!" },

  // === MIXED / EDGE CASES ===
  { label: 'FR very short', text: "merde" },
  { label: 'DE very short', text: "Scheiße" },
  { label: 'FR single word accented', text: "français" },
  { label: 'FR single word no-accent', text: "francais" },
  { label: 'DE single word umlaut', text: "Universität" },
  { label: 'DE single word no-umlaut', text: "Universitat" },

  // SMS/chat style
  { label: 'FR sms style', text: "jsui alle a la bibli pr etudier, c tro dur mdr" },
  { label: 'DE sms style', text: "bin grad an der uni, pruefung war krass alter" },
];

console.log('='.repeat(100));
console.log('ELD Diacritics Test — French & German');
console.log('='.repeat(100));
console.log('');

for (const { label, text } of testCases) {
  const result: EldResult = eld.detect(text);
  const scores = result.getScores();

  // Get top 5 scores
  const topScores = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const detected = result.language;
  const reliable = result.isReliable();

  // Determine expected language from label
  const expected = label.startsWith('FR') ? 'fr' : label.startsWith('DE') ? 'de' : '??';
  const match = detected === expected ? '✓' : '✗';

  console.log(`${match} [${label}]`);
  console.log(`  Text: "${text.slice(0, 80)}${text.length > 80 ? '...' : ''}"`);
  console.log(`  Detected: ${detected} | Expected: ${expected} | Reliable: ${reliable}`);
  console.log(`  Top scores: ${topScores.map(([lang, score]) => `${lang}=${score.toFixed(4)}`).join(', ')}`);

  // If accented vs non-accented pair, show score delta
  console.log('');
}

// === Score comparison summary ===
console.log('='.repeat(100));
console.log('SUMMARY: Score deltas (accented vs non-accented)');
console.log('='.repeat(100));

const pairs = [
  ['FR accented (short)', 'FR no-accent (short)'],
  ['FR accented (medium)', 'FR no-accent (medium)'],
  ['FR accented (long)', 'FR no-accent (long)'],
  ['FR profanity accented', 'FR profanity no-accent'],
  ['DE umlauts (short)', 'DE no-umlauts (short)'],
  ['DE umlauts (short)', 'DE no-umlauts alt (short)'],
  ['DE umlauts (medium)', 'DE no-umlauts (medium)'],
  ['DE umlauts (medium)', 'DE dropped-umlauts (medium)'],
  ['DE umlauts (long)', 'DE no-umlauts (long)'],
  ['DE umlauts (long)', 'DE dropped-umlauts (long)'],
  ['DE profanity umlauts', 'DE profanity no-umlauts'],
  ['DE profanity umlauts', 'DE profanity dropped'],
];

for (const [accLabel, noAccLabel] of pairs) {
  const accCase = testCases.find(t => t.label === accLabel)!;
  const noAccCase = testCases.find(t => t.label === noAccLabel)!;

  const accResult: EldResult = eld.detect(accCase.text);
  const noAccResult: EldResult = eld.detect(noAccCase.text);

  const expected = accLabel.startsWith('FR') ? 'fr' : 'de';

  const accScore = accResult.getScores()[expected] ?? 0;
  const noAccScore = noAccResult.getScores()[expected] ?? 0;
  const delta = noAccScore - accScore;
  const pctChange = accScore > 0 ? ((delta / accScore) * 100).toFixed(1) : 'N/A';

  console.log(`  ${accLabel} vs ${noAccLabel}`);
  console.log(`    ${expected} score: ${accScore.toFixed(4)} → ${noAccScore.toFixed(4)} (Δ ${delta > 0 ? '+' : ''}${delta.toFixed(4)}, ${pctChange}%)`);
  console.log(`    Detected: ${accResult.language} → ${noAccResult.language}`);
  console.log('');
}
