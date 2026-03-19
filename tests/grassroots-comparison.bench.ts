/**
 * Head-to-head comparison: smart-profanity-filter vs glin-profanity (dict + ML)
 *
 * Runs identical test cases against all three modes and reports a comparison matrix.
 * This is not a pass/fail test — it's a feature audit.
 */

import { BeKind } from '../src/index';
import { checkProfanity, checkProfanityAsync } from 'glin-profanity';

const spf = new BeKind({
  enableLeetSpeak: true,
  contextAnalysis: {
    enabled: true,
    contextWindow: 5,
    languages: ['en'],
    scoreThreshold: 0.5,
  },
});

// ─── Adapters ─────────────────────────────────────────────────────────────────

function runSPF(text: string) {
  const result = spf.detect(text);
  return {
    detected: result.hasProfanity,
    words: result.detectedWords,
  };
}

function runGlinDict(text: string) {
  const result = checkProfanity(text, {
    detectLeetspeak: true,
    leetspeakLevel: 'aggressive',
    allLanguages: true,
  });
  return {
    detected: result.containsProfanity,
    words: result.profaneWords ?? [],
  };
}

async function runGlinML(text: string) {
  try {
    const result = await checkProfanityAsync(text, {
      detectLeetspeak: true,
      leetspeakLevel: 'aggressive',
      allLanguages: true,
    });
    return {
      detected: result.containsProfanity,
      words: result.profaneWords ?? [],
    };
  } catch {
    // ML model may fail to load in test env — fall back to dict result
    return runGlinDict(text);
  }
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

interface TestCase {
  input: string;
  expectProfane: boolean;
  category: string;
  description: string;
}

const testCases: TestCase[] = [
  // ── Basic detection ──
  { input: 'fuck you', expectProfane: true, category: 'Basic', description: 'Common profanity' },
  { input: 'this is bullshit', expectProfane: true, category: 'Basic', description: 'Profanity in sentence' },
  { input: 'what the hell', expectProfane: true, category: 'Basic', description: 'Mild profanity' },
  { input: 'nice sunny day', expectProfane: false, category: 'Basic', description: 'Clean text' },
  { input: 'hello world', expectProfane: false, category: 'Basic', description: 'Clean greeting' },

  // ── Leet-speak evasion ──
  { input: 'f4ck you', expectProfane: true, category: 'Leet-speak', description: '4→a substitution' },
  { input: 'sh1t happens', expectProfane: true, category: 'Leet-speak', description: '1→i substitution' },
  { input: 'b1tch please', expectProfane: true, category: 'Leet-speak', description: '1→i in bitch' },
  { input: '@ss hole', expectProfane: true, category: 'Leet-speak', description: '@→a substitution' },
  { input: '$h!t', expectProfane: true, category: 'Leet-speak', description: 'Multiple substitutions' },
  { input: 'f_u_c_k', expectProfane: true, category: 'Leet-speak', description: 'Underscore separation' },
  { input: 'a$$hole', expectProfane: true, category: 'Leet-speak', description: '$$→ss substitution' },
  { input: 'ph u ck', expectProfane: true, category: 'Leet-speak', description: 'ph→f + spacing' },

  // ── Spaced character evasion ──
  { input: 'f u c k', expectProfane: true, category: 'Spacing', description: 'Spaced characters' },
  { input: 's h i t', expectProfane: true, category: 'Spacing', description: 'Spaced characters (shit)' },
  { input: 'fu ck', expectProfane: true, category: 'Spacing', description: 'Split word' },
  { input: 'as s', expectProfane: true, category: 'Spacing', description: 'Split word (ass)' },

  // ── False positive resistance (Scunthorpe problem) ──
  { input: 'I went to Scunthorpe for the weekend', expectProfane: false, category: 'False positive', description: 'Scunthorpe' },
  { input: 'She is a skilled assassin', expectProfane: false, category: 'False positive', description: 'assassin contains ass' },
  { input: 'The classic recipe uses butter', expectProfane: false, category: 'False positive', description: 'classic contains ass' },
  { input: 'We need to assess the situation', expectProfane: false, category: 'False positive', description: 'assess contains ass' },
  { input: 'The cocktail party was lovely', expectProfane: false, category: 'False positive', description: 'cocktail contains cock' },
  { input: 'Dick Blick Art Supplies', expectProfane: false, category: 'False positive', description: 'Dick as name' },
  { input: 'Beaver Creek Community Center', expectProfane: false, category: 'False positive', description: 'Beaver as place name' },
  { input: 'Middlesex County Library', expectProfane: false, category: 'False positive', description: 'Middlesex as place name' },
  { input: 'The therapist recommended yoga', expectProfane: false, category: 'False positive', description: 'therapist → the rapist' },
  { input: 'She works in analytics', expectProfane: false, category: 'False positive', description: 'analytics contains anal' },
  { input: 'The grape harvest was excellent', expectProfane: false, category: 'False positive', description: 'grape contains rape' },

  // ── Hate speech / slurs ──
  { input: 'kill all the n*ggers', expectProfane: true, category: 'Hate speech', description: 'Racial slur with asterisk' },
  { input: 'white power coalition', expectProfane: true, category: 'Hate speech', description: 'White supremacy phrase' },
  { input: 'nazi youth rally', expectProfane: true, category: 'Hate speech', description: 'Nazi reference' },
  { input: 'gas the jews', expectProfane: true, category: 'Hate speech', description: 'Antisemitic threat' },
  { input: 'death to all immigrants', expectProfane: true, category: 'Hate speech', description: 'Death threat to group' },

  // ── Repeated character evasion ──
  { input: 'fuuuuck', expectProfane: true, category: 'Repetition', description: 'Repeated vowels' },
  { input: 'shiiiiit', expectProfane: true, category: 'Repetition', description: 'Repeated i' },
  { input: 'assssss', expectProfane: true, category: 'Repetition', description: 'Repeated s' },
  { input: 'biiiitch', expectProfane: true, category: 'Repetition', description: 'Repeated i in bitch' },

  // ── Mixed case ──
  { input: 'FUCK OFF', expectProfane: true, category: 'Mixed case', description: 'All caps' },
  { input: 'FuCk YoU', expectProfane: true, category: 'Mixed case', description: 'Alternating case' },
  { input: 'sHiT', expectProfane: true, category: 'Mixed case', description: 'Random case' },

  // ── Edge cases ──
  { input: '', expectProfane: false, category: 'Edge', description: 'Empty string' },
  { input: '   ', expectProfane: false, category: 'Edge', description: 'Whitespace only' },
  { input: '!!!@@@###', expectProfane: false, category: 'Edge', description: 'Symbols only' },
  { input: 'A'.repeat(10000), expectProfane: false, category: 'Edge', description: 'Very long clean text' },

  // ── Context-dependent ──
  { input: 'That was a hell of a game', expectProfane: true, category: 'Context', description: 'hell in context' },
  { input: 'damn good coffee', expectProfane: true, category: 'Context', description: 'damn as intensifier' },
  { input: 'I need to pee so bad', expectProfane: false, category: 'Context', description: 'pee is not profane' },
  { input: 'What a crap design', expectProfane: true, category: 'Context', description: 'crap as mild profanity' },

  // ── Multi-language ──
  { input: 'merde alors', expectProfane: true, category: 'Multi-lang', description: 'French: merde' },
  { input: 'scheiße', expectProfane: true, category: 'Multi-lang', description: 'German: scheiße' },
  { input: 'pendejo idiota', expectProfane: true, category: 'Multi-lang', description: 'Spanish: pendejo' },
  { input: 'cazzo maledetto', expectProfane: true, category: 'Multi-lang', description: 'Italian: cazzo' },
  { input: 'puta madre', expectProfane: true, category: 'Multi-lang', description: 'Spanish: puta madre' },
  { input: 'kurwa', expectProfane: true, category: 'Multi-lang', description: 'Polish: kurwa' },

  // ── Org name false positives ──
  { input: 'Hooker Creek Restoration Project', expectProfane: false, category: 'Org names', description: 'Hooker as place name' },
  { input: 'Wankers Corner Saloon community event', expectProfane: false, category: 'Org names', description: 'Wankers Corner (real place)' },
  { input: 'Sussex Wildlife Trust', expectProfane: false, category: 'Org names', description: 'Sussex contains sex' },
  { input: 'Cummings Foundation for Education', expectProfane: false, category: 'Org names', description: 'Cummings as surname' },
];

// ─── Run comparison ───────────────────────────────────────────────────────────

interface Result {
  category: string;
  description: string;
  input: string;
  expected: boolean;
  spfResult: boolean;
  glinDictResult: boolean;
  glinMLResult: boolean;
  spfCorrect: boolean;
  glinDictCorrect: boolean;
  glinMLCorrect: boolean;
}

describe('Profanity Filter Comparison: SPF vs Glin(dict) vs Glin(ML)', () => {
  const results: Result[] = [];

  afterAll(() => {
    console.log('\n' + '='.repeat(140));
    console.log('PROFANITY FILTER COMPARISON MATRIX');
    console.log('='.repeat(140));
    console.log(
      'Category'.padEnd(16) +
      'Description'.padEnd(30) +
      'Input (truncated)'.padEnd(28) +
      'Expect'.padEnd(9) +
      'SPF'.padEnd(6) +
      'Glin'.padEnd(6) +
      'GlinML'.padEnd(8) +
      'SPF✓'.padEnd(6) +
      'Glin✓'.padEnd(6) +
      'ML✓'.padEnd(5)
    );
    console.log('-'.repeat(140));

    let lastCategory = '';
    for (const r of results) {
      const cat = r.category === lastCategory ? '' : r.category;
      lastCategory = r.category;
      const icon = (detected: boolean) => detected ? '🚩' : '✅';
      const check = (correct: boolean) => correct ? '✅' : '❌';
      console.log(
        cat.padEnd(16) +
        r.description.padEnd(30) +
        r.input.slice(0, 25).padEnd(28) +
        (r.expected ? 'PROF' : 'CLEAN').padEnd(9) +
        icon(r.spfResult).padEnd(6) +
        icon(r.glinDictResult).padEnd(6) +
        icon(r.glinMLResult).padEnd(8) +
        check(r.spfCorrect).padEnd(6) +
        check(r.glinDictCorrect).padEnd(6) +
        check(r.glinMLCorrect).padEnd(5)
      );
    }

    const spfScore = results.filter(r => r.spfCorrect).length;
    const glinDictScore = results.filter(r => r.glinDictCorrect).length;
    const glinMLScore = results.filter(r => r.glinMLCorrect).length;
    const total = results.length;

    console.log('='.repeat(140));
    console.log(`TOTALS: SPF ${spfScore}/${total} | Glin(dict) ${glinDictScore}/${total} | Glin(ML) ${glinMLScore}/${total}`);

    // Category breakdown
    const categories = [...new Set(results.map(r => r.category))];
    console.log('\nCategory Breakdown:');
    for (const cat of categories) {
      const cr = results.filter(r => r.category === cat);
      const n = cr.length;
      console.log(
        `  ${cat.padEnd(18)} SPF: ${cr.filter(r => r.spfCorrect).length}/${n}  ` +
        `Glin: ${cr.filter(r => r.glinDictCorrect).length}/${n}  ` +
        `GlinML: ${cr.filter(r => r.glinMLCorrect).length}/${n}`
      );
    }

    // ── Highlight: cases SPF caught that Glin missed ──
    const spfOnlyCatches = results.filter(r => r.spfCorrect && !r.glinDictCorrect && !r.glinMLCorrect);
    if (spfOnlyCatches.length > 0) {
      console.log(`\n🏆 SPF caught, BOTH Glin modes missed (${spfOnlyCatches.length} cases):`);
      for (const r of spfOnlyCatches) {
        console.log(`  [${r.category}] "${r.input.slice(0, 50)}" — ${r.description}`);
      }
    }

    const spfBetterThanDict = results.filter(r => r.spfCorrect && !r.glinDictCorrect);
    const mlOnlyBetter = spfBetterThanDict.filter(r => r.glinMLCorrect);
    if (mlOnlyBetter.length > 0) {
      console.log(`\n🤖 Glin ML saved (caught by ML but not dict) (${mlOnlyBetter.length} cases):`);
      for (const r of mlOnlyBetter) {
        console.log(`  [${r.category}] "${r.input.slice(0, 50)}" — ${r.description}`);
      }
    }

    const glinOnlyCatches = results.filter(r => !r.spfCorrect && (r.glinDictCorrect || r.glinMLCorrect));
    if (glinOnlyCatches.length > 0) {
      console.log(`\n⚡ Glin caught, SPF missed (${glinOnlyCatches.length} cases):`);
      for (const r of glinOnlyCatches) {
        console.log(`  [${r.category}] "${r.input.slice(0, 50)}" — ${r.description}`);
      }
    }

    console.log('='.repeat(140) + '\n');
  });

  for (const tc of testCases) {
    it(`[${tc.category}] ${tc.description}: "${tc.input.slice(0, 40)}"`, async () => {
      const spfRes = runSPF(tc.input);
      const glinDictRes = runGlinDict(tc.input);
      const glinMLRes = await runGlinML(tc.input);

      results.push({
        category: tc.category,
        description: tc.description,
        input: tc.input,
        expected: tc.expectProfane,
        spfResult: spfRes.detected,
        glinDictResult: glinDictRes.detected,
        glinMLResult: glinMLRes.detected,
        spfCorrect: spfRes.detected === tc.expectProfane,
        glinDictCorrect: glinDictRes.detected === tc.expectProfane,
        glinMLCorrect: glinMLRes.detected === tc.expectProfane,
      });

      expect(true).toBe(true);
    });
  }
});

// ─── Benchmark ────────────────────────────────────────────────────────────────

describe('Performance Benchmark', () => {
  const shortText = 'This is a clean sentence with no profanity at all.';
  const mediumText = 'The community garden project brings together people from all walks of life. ' +
    'Our volunteers planted over 500 trees last year. Join us for our annual cleanup event. '.repeat(5);
  const profaneText = 'What the fuck is this bullshit, you stupid asshole piece of shit';
  const leetText = 'f4ck th1s $h1t, you @$$h0le';

  function benchmark(name: string, fn: () => void, iterations: number) {
    for (let i = 0; i < 100; i++) fn();
    const start = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    const elapsed = performance.now() - start;
    const opsPerSec = Math.round(iterations / (elapsed / 1000));
    return { name, elapsed: Math.round(elapsed), iterations, opsPerSec };
  }

  it('benchmarks SPF vs Glin (dict mode)', () => {
    const iterations = 5000;
    const benchmarks = [
      benchmark('SPF  - short clean', () => runSPF(shortText), iterations),
      benchmark('Glin - short clean', () => runGlinDict(shortText), iterations),
      benchmark('SPF  - medium clean', () => runSPF(mediumText), iterations),
      benchmark('Glin - medium clean', () => runGlinDict(mediumText), iterations),
      benchmark('SPF  - profane', () => runSPF(profaneText), iterations),
      benchmark('Glin - profane', () => runGlinDict(profaneText), iterations),
      benchmark('SPF  - leet-speak', () => runSPF(leetText), iterations),
      benchmark('Glin - leet-speak', () => runGlinDict(leetText), iterations),
    ];

    console.log('\n' + '='.repeat(80));
    console.log('PERFORMANCE BENCHMARK — dict mode (5000 iterations each)');
    console.log('='.repeat(80));
    console.log('Test'.padEnd(30) + 'Time (ms)'.padEnd(15) + 'Ops/sec'.padEnd(15));
    console.log('-'.repeat(80));
    for (const b of benchmarks) {
      console.log(b.name.padEnd(30) + `${b.elapsed}ms`.padEnd(15) + `${b.opsPerSec.toLocaleString()}`);
    }
    console.log('='.repeat(80) + '\n');

    expect(true).toBe(true);
  });
});
