/**
 * Debug trigram hit rates for failing romanized cases vs real text
 */

// Copy the expanded trigram set
const LATIN_LANG_TRIGRAMS = new Set([
  'the', 'ing', 'and', 'her', 'hat', 'ent', 'ion', 'for', 'ter',
  'was', 'tha', 'ere', 'his', 'ith', 'ver', 'all', 'ati', 'not', 'are',
  'tio', 'com', 'men', 'pro', 'ess', 'ble', 'ive', 'ous', 'ght', 'ted',
  'les', 'que', 'est', 'des', 'ait', 'par', 'ous', 'ant', 'ent',
  'our', 'eme', 'ais', 'eur', 'ons', 'oir', 'ell', 'ien', 'uit',
  'con', 'nte', 'ado', 'mos', 'por', 'del', 'los', 'las', 'cion',
  'ara', 'ier', 'est', 'ien', 'aba', 'ero', 'ura', 'dad', 'mente',
  'ein', 'und', 'der', 'den', 'die', 'ich', 'sch', 'che', 'ung',
  'ber', 'aus', 'ach', 'eit', 'ier', 'auf', 'gen', 'ges', 'uch',
  'het', 'een', 'van', 'aar', 'oor', 'ijk', 'aar', 'erd',
  'ell', 'ato', 'che', 'per', 'con', 'tta', 'gli', 'nte', 'amo',
  'enz', 'ion', 'ria', 'ato', 'ita', 'ess', 'ere', 'tto',
  'lar', 'ler', 'bir', 'ara', 'eri', 'ini', 'rak', 'aki', 'yor',
  'mak', 'dir', 'ile', 'olu', 'ala', 'isi', 'dan', 'nin', 'lik',
  'nie', 'prz', 'rze', 'owa', 'nia', 'dzi', 'icz', 'ost', 'sta',
  'ych', 'ego', 'owe', 'wie', 'kie', 'eni', 'owy', 'ski',
  'att', 'och', 'som', 'med', 'har', 'kan', 'det', 'lig', 'nde',
  'ell', 'isk', 'nad', 'ska',
  'ang', 'kan', 'men', 'ber', 'ada', 'ung', 'ari', 'ata', 'per',
  'yan', 'ini', 'apa', 'ala', 'ran', 'aha', 'ika', 'ung',
  'ang', 'mga', 'ung', 'ala', 'ina', 'ata', 'aba', 'ara', 'isa',
  'ana', 'kwa', 'cha', 'mba', 'ata', 'ika', 'ali', 'eni', 'aji',
  'ina', 'ake', 'iki', 'ama', 'ish', 'afa',
  'are', 'rea', 'ent', 'ile', 'ate', 'ari', 'tat', 'lor',
]);

function analyzeTrigramHits(text: string): { hitRate: number; hits: number; total: number; hitExamples: string[]; missExamples: string[] } {
  const words = text.toLowerCase().split(/\s+/).filter(w => w.length >= 3);
  let hits = 0;
  let total = 0;
  const hitExamples: string[] = [];
  const missExamples: string[] = [];

  for (const word of words) {
    const clean = word.replace(/[^a-z]/g, '');
    for (let i = 0; i <= clean.length - 3; i++) {
      const tri = clean.slice(i, i + 3);
      total++;
      if (LATIN_LANG_TRIGRAMS.has(tri)) {
        hits++;
        if (hitExamples.length < 5) hitExamples.push(tri);
      } else {
        if (missExamples.length < 8) missExamples.push(tri);
      }
    }
  }

  return { hitRate: total > 0 ? hits / total : 0.5, hits, total, hitExamples, missExamples };
}

const cases = [
  // Failing romanized
  { label: 'HI roman prof', text: "bhenchod madarchod saala kutta kamina harami" },
  { label: 'UR roman prof', text: "harami kutta bhenchod gaandu saala kamina" },
  { label: 'ZH pinyin prof', text: "cao ni ma sha bi wang ba dan tamade gundan" },
  { label: 'TH roman', text: "sawadee krap sabai dee mai wan nee arai dee" },
  { label: 'TA roman', text: "vanakkam eppadi irukkinga naan nalla irukken nandri" },

  // Passing romanized (for comparison)
  { label: 'HI roman', text: "mujhe bahut accha laga yeh dekhkar ki tum aa gaye" },
  { label: 'RU roman', text: "privet kak dela u tebya segodnya vsyo horosho" },
  { label: 'JA roman', text: "watashi wa nihongo o benkyou shite imasu ganbatte" },
  { label: 'KO roman', text: "annyeonghaseyo hangugeo reul gongbu hago isseoyo" },

  // Real Latin text (should have HIGH hit rate)
  { label: 'EN normal', text: "The quick brown fox jumps over the lazy dog near the riverbank." },
  { label: 'EN casual', text: "hey guys just wanted to let you know the meeting is moved to three pm tomorrow" },
  { label: 'EN profanity', text: "what the fuck are you doing you stupid piece of shit" },
  { label: 'FR normal', text: "Nous avons passé une excellente soirée avec nos amis au restaurant." },
  { label: 'FR profanity', text: "putain de merde va te faire foutre espece de connard imbecile" },
  { label: 'DE normal', text: "Die Universität München bietet ausgezeichnete Studiengänge für internationale Studenten." },
  { label: 'ES profanity', text: "hijo de puta que mierda es esta pendejo cabron idiota" },
  { label: 'TR normal', text: "Universite uluslararasi ogrenciler icin mukemmel muhendislik programlari sunmaktadir bugun." },
  { label: 'ID normal', text: "Universitas ini menawarkan program teknik yang sangat baik untuk mahasiswa internasional." },
  { label: 'SW normal', text: "Chuo kikuu kinatoa programu bora za uhandisi kwa wanafunzi wa kimataifa kutoka ulimwenguni." },
  { label: 'EN yoga', text: "today we practiced pranayama and asana followed by shavasana and meditation" },
  { label: 'PL normal', text: "Uniwersytet oferuje doskonale programy inzynierskie dla studentow miedzynarodowych z calego swiata." },
];

console.log('Trigram Hit Rate Analysis\n');
console.log(
  'Label'.padEnd(18),
  'Rate'.padStart(6),
  'Hits'.padStart(5),
  'Total'.padStart(6),
  '  Hit examples'.padEnd(25),
  'Miss examples',
);
console.log('-'.repeat(110));

for (const { label, text } of cases) {
  const r = analyzeTrigramHits(text);
  console.log(
    label.padEnd(18),
    r.hitRate.toFixed(3).padStart(6),
    String(r.hits).padStart(5),
    String(r.total).padStart(6),
    `  ${r.hitExamples.join(',') || '(none)'}`.padEnd(25),
    r.missExamples.join(','),
  );
}
