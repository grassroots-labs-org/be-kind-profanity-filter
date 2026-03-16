/**
 * Experiment: detect romanized text by checking if ELD's top-N languages
 * form a coherent linguistic cluster or are scattered randomly.
 *
 * Hypothesis: real French text → top langs are Romance (fr, ca, it, pt, es, ro)
 *             real German text → top langs are Germanic (de, nl, da, no, sv)
 *             romanized Hindi → top langs are random (no, az, hr, ca, sl) — no cluster
 */

// @ts-ignore
import { eld } from 'eld/small';

// ── Language family clusters ─────────────────────────────────────────────────
// If most of the top-5 ELD results fall within a single family, the detection is coherent.
// If they're scattered across 3+ families, ELD is grasping at straws.

const LANGUAGE_FAMILIES: Record<string, string[]> = {
  romance:    ['fr', 'ca', 'it', 'pt', 'es', 'ro', 'gl', 'oc'],
  germanic:   ['de', 'nl', 'da', 'no', 'sv', 'af', 'is', 'lb'],
  slavic:     ['ru', 'uk', 'bg', 'pl', 'cs', 'sk', 'hr', 'sr', 'sl', 'bs', 'mk'],
  uralic:     ['fi', 'hu', 'et'],
  turkic:     ['tr', 'az', 'uz', 'kk', 'ky', 'tk'],
  celtic:     ['cy', 'ga', 'gd', 'br'],
  baltic:     ['lt', 'lv'],
  semitic:    ['ar', 'he', 'mt'],
  indic:      ['hi', 'bn', 'mr', 'gu', 'pa', 'ne', 'si', 'ur'],
  dravidian:  ['ta', 'te', 'kn', 'ml'],
  sinitic:    ['zh'],
  japonic:    ['ja'],
  koreanic:   ['ko'],
  austronesian: ['tl', 'ms', 'id', 'mg', 'ceb', 'jv', 'su'],
  tai:        ['th', 'lo'],
  english:    ['en'],  // English is Germanic but ELD treats it distinctly
};

// Invert: lang → family
const LANG_TO_FAMILY: Record<string, string> = {};
for (const [family, langs] of Object.entries(LANGUAGE_FAMILIES)) {
  for (const lang of langs) {
    LANG_TO_FAMILY[lang] = family;
  }
}

interface ClusterAnalysis {
  top5langs: string[];
  top5families: string[];
  uniqueFamilies: number;
  dominantFamily: string;
  dominantFamilyCount: number;  // how many of top-5 are in the dominant family
  coherenceRatio: number;       // dominantFamilyCount / top5 count
  isCoherent: boolean;          // >= 3 of top-5 in same family
  isScattered: boolean;         // 4+ unique families in top-5
}

function analyzeCluster(scores: Record<string, number>): ClusterAnalysis {
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const top5 = sorted.slice(0, 5);
  const top5langs = top5.map(([l]) => l);
  const top5families = top5langs.map(l => LANG_TO_FAMILY[l] || 'unknown');

  // Count families
  const familyCounts: Record<string, number> = {};
  for (const f of top5families) {
    familyCounts[f] = (familyCounts[f] || 0) + 1;
  }

  const uniqueFamilies = Object.keys(familyCounts).length;
  const [dominantFamily, dominantFamilyCount] = Object.entries(familyCounts)
    .sort(([, a], [, b]) => b - a)[0] || ['unknown', 0];

  return {
    top5langs,
    top5families,
    uniqueFamilies,
    dominantFamily,
    dominantFamilyCount,
    coherenceRatio: dominantFamilyCount / 5,
    isCoherent: dominantFamilyCount >= 3,
    isScattered: uniqueFamilies >= 4,
  };
}

// ── Test ─────────────────────────────────────────────────────────────────────
const cases = [
  // Clean Latin-script text (should be coherent)
  { label: 'FR clean', text: "La République française célèbre la fête nationale le quatorze juillet. Les citoyens défilent dans les rues décorées." },
  { label: 'DE clean', text: "Die Universität München bietet ausgezeichnete Studiengänge für Ingenieurwissenschaften." },
  { label: 'EN clean', text: "The university offers excellent engineering programs for international students from around the world." },
  { label: 'ES clean', text: "La universidad ofrece programas de ingeniería excelentes para estudiantes internacionales." },
  { label: 'IT clean', text: "L'università offre eccellenti programmi di ingegneria per studenti internazionali provenienti da tutto il mondo." },

  // Dropped diacritics (should still be fairly coherent)
  { label: 'FR no-acc', text: "La Republique francaise celebre la fete nationale le quatorze juillet. Les citoyens defilent dans les rues decorees." },
  { label: 'DE no-uml', text: "Die Universitat Munchen bietet ausgezeichnete Studiengange fur Ingenieurwissenschaften." },

  // SMS (might be scattered)
  { label: 'FR sms', text: "jsui alle a la bibli pr etudier, c tro dur mdr" },
  { label: 'EN sms', text: "omg u r so funny lol cant blv it tbh" },

  // Romanized non-Latin (should be VERY scattered)
  { label: 'HI roman', text: "mujhe bahut accha laga yeh dekhkar ki tum aa gaye" },
  { label: 'HI roman prof', text: "bhenchod madarchod saala kutta kamina" },
  { label: 'AR roman', text: "ana bahebak ya habibi, keefak el yom?" },
  { label: 'RU roman', text: "privet kak dela u tebya segodnya" },
  { label: 'JA roman', text: "watashi wa nihongo o benkyou shite imasu" },
  { label: 'KO roman', text: "annyeonghaseyo hangugeo-reul gongbu hago isseoyo" },
  { label: 'ZH pinyin', text: "wo shi zhongguo ren wo ai zhongguo" },
  { label: 'TR roman', text: "merhaba nasılsınız bugün hava çok güzel" },  // control: actual Turkish in Latin
  { label: 'HI roman 2', text: "kya haal hai bhai sab theek hai na" },
  { label: 'UR roman', text: "mera naam ali hai aur main karachi se hoon" },

  // Profanity
  { label: 'FR prof +', text: "putain de merde, va te faire enculé espèce de connard" },
  { label: 'FR prof -', text: "putain de merde, va te faire encule espece de connard" },
  { label: 'HI prof roman', text: "chutiya saala harami bhenchod madarchod" },

  // Single words
  { label: '1w: merde', text: "merde" },
  { label: '1w: fuck', text: "fuck" },
];

console.log('='.repeat(120));
console.log('Language Family Clustering Analysis');
console.log('='.repeat(120));
console.log(
  'Label'.padEnd(16),
  'ELD'.padEnd(4),
  '#Fam'.padStart(5),
  'Dom'.padEnd(14),
  'Cnt'.padStart(4),
  'Cohr'.padStart(5),
  'Coh?'.padEnd(5),
  'Scat?'.padEnd(6),
  'Top-5 → families',
);
console.log('-'.repeat(120));

for (const { label, text } of cases) {
  const result = eld.detect(text);
  const scores = result.getScores();
  const cluster = analyzeCluster(scores);

  const marker = cluster.isScattered ? '⚠️' : cluster.isCoherent ? '✓' : '~';

  console.log(
    label.padEnd(16),
    result.language.padEnd(4),
    String(cluster.uniqueFamilies).padStart(5),
    cluster.dominantFamily.padEnd(14),
    String(cluster.dominantFamilyCount).padStart(4),
    cluster.coherenceRatio.toFixed(2).padStart(5),
    (cluster.isCoherent ? 'yes' : 'NO').padEnd(5),
    (cluster.isScattered ? 'YES' : 'no').padEnd(6),
    `${marker} ${cluster.top5langs.join(',')} → ${cluster.top5families.join(',')}`,
  );
}
