#!/usr/bin/env node
/**
 * Script to add likelihood (l) scores to all word entries in english-primary-all-languages.ts
 *
 * l = estimated likelihood of encountering this word WITHIN its own language (1-10).
 * This is independent of the language's overall prevalence on the platform — that's
 * handled separately via LANGUAGE_FREQUENCY_WEIGHT in the filter code.
 *
 * Likelihood scale (1-10):
 *   l:10 = Universal within the language — the #1 most common profanity
 *   l:9  = Extremely common — top-tier profanity everyone knows
 *   l:8  = Very common — well-known profanity, standard slurs
 *   l:7  = Common — secondary profanity, well-known compounds
 *   l:6  = Moderately common — recognized terms, standard compounds
 *   l:5  = Average — typical profanity list entry
 *   l:4  = Below average — less common compounds, specific insults
 *   l:3  = Uncommon — evasion variants, regional slang
 *   l:2  = Rare — heavy evasion, niche dialects, obscure terms
 *   l:1  = Extremely rare — exotic evasions, homoglyphs, single chars
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = resolve(
  __dirname,
  "../src/languages/english-primary-all-languages.ts"
);

const content = readFileSync(filePath, "utf-8");
const lines = content.split("\n");

// ── Tier 1: Core profanity in their language — l:10 ──
// These are the most universally encountered words
const TIER_10: Set<string> = new Set([
  // English
  "fuck", "fucking", "fucked", "fucker", "fuckers", "fucks",
  "shit", "shitty", "shits", "shitting",
  "bitch", "bitches",
  "ass", "asshole",
  "damn",
  "crap",
  "dick",
  "cock",
  "pussy",
  "cunt",
  "bastard",
  "whore",
  "slut",
  "piss", "pissed",
  "bullshit",
  "motherfucker", "motherfucking",
  "nigger", "nigga",
  "faggot", "fag",
  "retard", "retarded",
]);

// ── Tier 2: Extremely common — l:9 ──
const TIER_9: Set<string> = new Set([
  "bitching", "assholes", "motherfuckers",
  "dammit", "damnit", "crappy",
  "dicks", "cocks", "pussies", "cunts", "bastards",
  "whores", "sluts", "pissing",
  "wtf", "stfu", "lmfao",
  "niggers", "niggas", "faggots", "fags", "retards",
  "shithead", "fuckboy", "fuckface", "dickhead",
  "asshat", "dumbass", "jackass", "dumbfuck",
  "cocksucker", "dipshit",
  "blowjob", "porn", "porno",
  "rape", "rapist",
]);

// ── Tier 3: Very common — l:8 ──
const TIER_8: Set<string> = new Set([
  "anal", "anus", "arsehole", "ballsack", "balls",
  "boner", "boob", "boobs", "bollocks",
  "butthole", "cum", "cumshot", "dildo",
  "douchebag", "douche",
  "goddamn", "handjob", "horny",
  "jerkoff", "jizz",
  "kike", "kikes",
  "masturbate", "masturbation",
  "milf", "orgasm", "orgy",
  "pedo", "pedophile", "penis",
  "pervert", "pornography",
  "queer", "raped", "raping",
  "skank", "suck", "sucks", "sucking",
  "tits", "titties", "twat",
  "vagina", "wank", "wanker",
  "chink", "gook", "coon",
  "dyke", "tranny", "beaner",
  "wetback", "spic", "cracker",
  "kys", "gtfo",
  "shitface", "shitfaced", "shitstain",
  "fuckhead", "fuckwit", "fuckwad",
  "dickface", "dickwad", "dickweed",
  "asswipe", "assclown",
  "bitchass", "clusterfuck",
  "gangbang", "deepthroat",
]);

// ── Tier 4: Common — l:7 ──
const TIER_7: Set<string> = new Set([
  "cameltoe", "circlejerk", "cocksuckers",
  "cumming", "cums", "cunnilingus",
  "dildos", "douchebags",
  "ejaculate", "ejaculation", "erection",
  "fellatio", "fisting", "footjob",
  "goatse", "goddamnit",
  "jackoff", "honky", "honkey",
  "masturbating", "mofo",
  "penises", "perverts",
  "queef", "rimjob", "scrotum", "semen",
  "sexist", "skanks", "smegma",
  "sodomize", "sodomy", "spics",
  "titty", "twats",
  "viagra", "vibrator", "vulva", "wankers", "wanking",
  "apeshit", "fatass", "kickass",
  "lameass", "lazyass", "smartass",
  "cockhead", "cockface",
  "assbag", "badass",
  "chinks", "gooks", "coons", "crackers",
  "dykes", "trannies", "beaners",
  "spooks",
]);

// ── Section-based likelihood within any language ──
// These modifiers represent how common a *type* of entry is within its language.
// Core profanities are the most common; evasion variants are least common.
interface SectionRule {
  pattern: RegExp;
  modifier: number; // added to default base of 5
}

const SECTION_RULES: SectionRule[] = [
  // Core profanities — most commonly encountered within any language
  { pattern: /Core Profanities|Core.*Genitalia/i, modifier: +3 },
  { pattern: /Variations.*Related/i, modifier: +2 },
  // Standard content categories — average encounter rate
  { pattern: /Compound|COMPOUND/i, modifier: 0 },
  { pattern: /SLUR|Slur/i, modifier: +1 },
  { pattern: /Sexual|SEXUAL/i, modifier: 0 },
  { pattern: /INSULT|Insult/i, modifier: 0 },
  { pattern: /THREAT|Threat|VIOLENT|Violence/i, modifier: 0 },
  { pattern: /Hate|HATE/i, modifier: +1 },
  { pattern: /INTERNET|GAMING|SLANG|Internet|Gaming|Slang/i, modifier: 0 },
  { pattern: /Mild|MILD|Contextually/i, modifier: +1 },
  { pattern: /SCATOLOGICAL|Scatological/i, modifier: 0 },
  { pattern: /Body Part|BODY PART/i, modifier: 0 },
  { pattern: /Appearance|Behavioral/i, modifier: 0 },
  { pattern: /MOM|DAD/i, modifier: 0 },
  { pattern: /Misogynistic/i, modifier: 0 },
  { pattern: /Homophobic|Transphobic/i, modifier: 0 },
  { pattern: /Youth|Street/i, modifier: 0 },
  // Evasion patterns — less commonly encountered (people do use them, but rarer)
  { pattern: /LEETSPEAK|LEET\s*SPEAK|Leet/i, modifier: -2 },
  { pattern: /HOMOGLYPH|UNICODE/i, modifier: -4 },
  { pattern: /SPACING|SEPARATOR|PUNCTUATION/i, modifier: -2 },
  { pattern: /EVASION|Evasion/i, modifier: -2 },
  { pattern: /MISSPELLING/i, modifier: -1 },
  { pattern: /SYMBOL.HEAVY/i, modifier: -3 },
  { pattern: /Spelling Evasion/i, modifier: -2 },
  // Dialect-specific — less commonly encountered even within the language
  { pattern: /Dialect|DIALECT|Austrian|Swiss|Bavarian|Saxon|Berlin|Swabian|Ruhrpott|Plattdeutsch|Franconian|Low German/i, modifier: -2 },
  { pattern: /Quebec|Joual|Belgian|African|Verlan|Antillean|Caribbean|Reunion/i, modifier: -1 },
  { pattern: /Mexican|Argentine|Colombian|Cuban|Puerto Rican|Dominican|Ecuadorian|Bolivian|Paraguayan|Canary|Galician|Central American|Uruguayan|Rioplatense/i, modifier: -1 },
  // Verb conjugations, diminutives — slightly less common
  { pattern: /Verb Conjugation|Diminutive|Augmentative/i, modifier: -1 },
  { pattern: /Rhyming|Wordplay/i, modifier: -1 },
  // Abbreviations
  { pattern: /ABBREVIATION|Abbreviation|ACRONYM/i, modifier: -1 },
  // Religious
  { pattern: /Religious|RELIGIOUS/i, modifier: -1 },
  // Drug-related
  { pattern: /DRUG/i, modifier: -1 },
  // Batch sections (later batches tend to be less common)
  { pattern: /BATCH\s*2[89]|BATCH\s*3[0-8]/i, modifier: -1 },
  // Regional terms
  { pattern: /Regional/i, modifier: -1 },
  // Extended/Expanded sections — less common variants
  { pattern: /Extended|Expanded/i, modifier: -1 },
  // Disability/Ableist
  { pattern: /Disability|Ableist/i, modifier: -1 },
];

// ── Language → ISO 639-1 code mapping ──
const LANGUAGE_CODES: Record<string, string> = {
  english: "en",
  german: "de",
  french: "fr",
  spanish: "es",
  korean: "ko",
  tamil: "ta",
  telugu: "te",
  hindi: "hi",
  hinglish: "hi",  // Hinglish is Hindi-English mix, tag as Hindi
  chinese: "zh",
  japanese: "ja",
  russian: "ru",
  arabic: "ar",
  bengali: "bn",
  brazilian: "pt",
  italian: "it",
};

// ── Process the file ──
let currentLanguage = "english";
let currentSectionModifier: number | null = null;

const outputLines: string[] = [];

for (const line of lines) {
  // Detect language headers: "// === English ==="
  const langMatch = line.match(/\/\/\s*===+\s*(English|German|French|Spanish|Korean|Tamil|Telugu|Hindi|Hinglish|Chinese|Japanese|Russian|Arabic|Bengali|Brazilian|Italian)\s*===+/i);
  if (langMatch) {
    currentLanguage = langMatch[1].toLowerCase();
    currentSectionModifier = null;
    outputLines.push(line);
    continue;
  }

  // Detect section headers: "// ===== ... ====="
  // Must have actual text between the === markers, not just more = signs
  const sectionMatch = line.match(/\/\/\s*===+\s*([^=\s].+?)\s*===*/);
  if (sectionMatch && !langMatch) {
    const sectionName = sectionMatch[1];
    currentSectionModifier = null;

    // Find the first matching section rule
    for (const rule of SECTION_RULES) {
      if (rule.pattern.test(sectionName)) {
        currentSectionModifier = rule.modifier;
        break;
      }
    }

    outputLines.push(line);
    continue;
  }

  // Detect word entries — handles old format { s: N, c: N } and new { severity: N, ... }
  const wordMatch = line.match(/^(\s*)"(.+?)"\s*:\s*\{\s*(?:s|severity):\s*(\d+)\s*,\s*(?:c|certainty):\s*(\d+)(?:\s*,\s*(?:l|likelihood):\s*\d+)?(?:\s*,\s*(?:lang|language):\s*"[^"]*")?\s*\}(,?)(\s*(?:\/\/.*)?)$/);
  if (wordMatch) {
    const [, indent, word, sStr, cStr, comma, comment] = wordMatch;
    const s = parseInt(sStr);
    const c = parseInt(cStr);
    const wordLower = word.toLowerCase();

    // Determine likelihood (within-language encounter rate)
    let l: number;

    if (TIER_10.has(wordLower)) {
      l = 10;
    } else if (TIER_9.has(wordLower)) {
      l = 9;
    } else if (TIER_8.has(wordLower)) {
      l = 8;
    } else if (TIER_7.has(wordLower)) {
      l = 7;
    } else {
      // Default base: 5 (average encounter rate within the language)
      const base = 5;

      // Apply section modifier
      l = base + (currentSectionModifier ?? 0);

      // ── Additional heuristics ──

      // Very long compound words (20+ chars) are rarer even within language
      if (word.length >= 20) {
        l -= 1;
      }

      // Words with numbers/symbols = evasion variants (rare encounter)
      if (/[0-9@$!#]/.test(word)) {
        l -= 2;
      }

      // Multi-word phrases (contain spaces) — slightly less common
      if (word.includes(" ")) {
        l -= 1;
      }

      // Single character entries — extremely rare encounter
      if (word.length === 1) {
        l = 1;
      }

      // Two-char entries — rare
      if (word.length === 2) {
        l -= 1;
      }

      // High severity + certainty words that aren't in explicit tiers
      // are still notable within their language
      if (s === 5 && c === 5 && l < 5) {
        l = Math.max(l, 5);
      }
    }

    // Clamp to 1-10
    l = Math.max(1, Math.min(10, l));

    // Get language code
    const lang = LANGUAGE_CODES[currentLanguage] || "en";

    // Rebuild the line with full descriptive field names
    outputLines.push(`${indent}"${word}": { severity: ${s}, certainty: ${c}, likelihood: ${l}, language: "${lang}" }${comma}${comment}`);
    continue;
  }

  // Pass through all other lines unchanged
  outputLines.push(line);
}

// Update the type annotation at the top of the file
const output = outputLines.join("\n").replace(
  /Record<string, \{[^}]+\}>/,
  "Record<string, { severity: number; certainty: number; likelihood: number; language: string }>"
);

writeFileSync(filePath, output, "utf-8");

// Count entries per likelihood
const counts: Record<number, number> = {};
for (let i = 1; i <= 10; i++) counts[i] = 0;
for (const line of outputLines) {
  const m = line.match(/likelihood:\s*(\d+)/);
  if (m) counts[parseInt(m[1])]++;
}

console.log("Likelihood distribution (within-language encounter rate):");
for (const [l, count] of Object.entries(counts)) {
  console.log(`  l:${l.padStart(2)} = ${String(count).padStart(5)} words`);
}
console.log(`  Total: ${Object.values(counts).reduce((a, b) => a + b, 0)} words`);
