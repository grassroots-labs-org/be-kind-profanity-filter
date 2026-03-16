/**
 * Quick debug: what does ELD entropy actually look like across clean vs scrappy text?
 * Need to calibrate thresholds.
 */
// @ts-ignore
import { eld } from 'eld/small';

function normalizedEntropy(scores: Record<string, number>, topN: number): { entropy: number; vals: number[] } {
  const vals = Object.values(scores)
    .sort((a, b) => b - a)
    .slice(0, topN)
    .filter(v => v > 0);
  if (vals.length <= 1) return { entropy: 0, vals };
  const sum = vals.reduce((a, b) => a + b, 0);
  const probs = vals.map(v => v / sum);
  let entropy = 0;
  for (const p of probs) if (p > 0) entropy -= p * Math.log2(p);
  return { entropy: entropy / Math.log2(vals.length), vals };
}

const cases = [
  // Clean
  "La République française célèbre la fête nationale le quatorze juillet. Les citoyens défilent dans les rues décorées.",
  "Die Universität München bietet ausgezeichnete Studiengänge für Ingenieurwissenschaften.",
  "The university offers excellent engineering programs for international students.",
  // Degraded
  "La Republique francaise celebre la fete nationale le quatorze juillet.",
  "jsui alle a la bibli pr etudier, c tro dur mdr",
  "omg u r so funny lol cant blv it tbh",
  // Romanized
  "bhenchod madarchod saala kutta kamina",
  "privet kak dela u tebya segodnya",
  // Single word
  "merde",
  "Scheiße",
];

console.log('Entropy calibration (top-N = 3, 5, 8, all)\n');

for (const text of cases) {
  const result = eld.detect(text);
  const scores = result.getScores();
  const sorted = Object.entries(scores).sort(([, a], [, b]) => (b as number) - (a as number));
  const spread = (sorted[0]?.[1] as number) - (sorted[1]?.[1] as number);

  const e3 = normalizedEntropy(scores, 3);
  const e5 = normalizedEntropy(scores, 5);
  const e8 = normalizedEntropy(scores, 8);
  const eAll = normalizedEntropy(scores, 999);

  console.log(`"${text.slice(0, 60)}${text.length > 60 ? '...' : ''}"`);
  console.log(`  ELD: ${result.language} (${(sorted[0]?.[1] as number).toFixed(4)}) spread=${spread.toFixed(4)}`);
  console.log(`  Top 5: ${sorted.slice(0, 5).map(([l, s]) => `${l}=${(s as number).toFixed(3)}`).join(' ')}`);
  console.log(`  H(3)=${e3.entropy.toFixed(4)} H(5)=${e5.entropy.toFixed(4)} H(8)=${e8.entropy.toFixed(4)} H(all)=${eAll.entropy.toFixed(4)}`);

  // Try a different metric: coefficient of variation of top-5
  const top5 = sorted.slice(0, 5).map(([, s]) => s as number);
  const mean5 = top5.reduce((a, b) => a + b, 0) / top5.length;
  const std5 = Math.sqrt(top5.reduce((a, v) => a + (v - mean5) ** 2, 0) / top5.length);
  const cv5 = std5 / mean5;

  // Ratio: top / mean-of-rest
  const rest = top5.slice(1);
  const restMean = rest.reduce((a, b) => a + b, 0) / rest.length;
  const dominance = (top5[0] ?? 0) / (restMean || 1);

  console.log(`  CV(5)=${cv5.toFixed(4)} dominance=${dominance.toFixed(4)}`);
  console.log('');
}
