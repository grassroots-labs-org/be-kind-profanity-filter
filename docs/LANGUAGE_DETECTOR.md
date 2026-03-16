# Language Detector: Architecture & Design Decisions

## Table of Contents

1. [Overview](#overview)
2. [Why We Built Our Own](#why-we-built-our-own)
3. [Architecture](#architecture)
4. [Scoring Pipeline](#scoring-pipeline)
5. [Comparison with Statistical Approaches (ELD)](#comparison-with-statistical-approaches-eld)
6. [UTF-8 and Why It Matters](#utf-8-and-why-it-matters)
7. [Supported Languages](#supported-languages)
8. [Key Design Decisions](#key-design-decisions)
9. [Future: Corpus-Trained N-grams](#future-corpus-trained-n-grams)

---

## Overview

The language detector (`src/language-detector.ts`) identifies which languages are present in a given text. It's designed specifically for the profanity filter's use case: short, informal, often accent-stripped text from event descriptions, chat messages, and user-generated content.

It returns **all detected languages** with proportions and presence flags, supporting mixed-language and code-switched text (e.g., Spanglish, Hinglish, Japenglish).

```typescript
const result = detectLanguages("Hey amigo lets go to the fiesta tonight será muy divertido");
// → en(37.4%), es(36.1%), pt(13.7%) — both English and Spanish detected
```

---

## Why We Built Our Own

Existing language detectors like [ELD](https://github.com/nitotm/efficient-language-detector) use **byte-level n-gram frequency profiles** trained on massive corpora (60GB+). They're fast and accurate on well-formed text, but have critical weaknesses for our use case:

### The Diacritic Problem

Statistical byte-level detectors rely heavily on UTF-8 byte patterns from accented characters:

| Word | UTF-8 bytes | Signal |
|------|------------|--------|
| `très` | `74 72 C3 A8 73` | `C3 A8` (è) → strong French marker |
| `tres` | `74 72 65 73` | Pure ASCII → could be any Latin language |
| `café` | `63 61 66 C3 A9` | `C3 A9` (é) → French/Spanish signal |
| `cafe` | `63 61 66 65` | Pure ASCII → ambiguous |

Real-world users constantly drop diacritics:
- Phone keyboards without easy accent access
- Non-native keyboards
- Social media shorthand
- Laziness ("tres bien" instead of "très bien")

**A byte-level detector loses ALL language signal when accents are dropped.** Our word-level trie approach still matches `"tres"` against French/Spanish vocabulary even without the accent.

### The Mixed-Language Problem

Our users write code-switched text constantly:
- "Vamos to the store porque necesitamos milk" (Spanglish)
- "That ramen was oishii yesterday" (Japenglish)
- "Yaar this party is bahut crazy" (Hinglish)

We need to detect **multiple languages simultaneously** with proportions, not just pick the single best guess.

### The Romanization Problem

A huge amount of non-Latin text gets romanized:
- "konnichiwa genki desu ka" (Japanese)
- "annyeonghaseyo" (Korean)
- "marhaba kayf halak" (Arabic)
- "namaste aap kaise hain" (Hindi)

Byte-level detectors see only ASCII bytes here — zero signal. Our vocabulary tries contain romanized forms, so we detect these correctly.

---

## Architecture

The detector uses a **multi-layer additive scoring** pipeline, where each layer adds evidence for languages:

```
Input text
    │
    ├─ Split into words (Unicode-aware)
    │
    ├─ Per-word scoring (scoreWord):
    │   ├─ Layer 1: Unicode script detection (Cyrillic → ru, Hangul → ko, etc.)
    │   ├─ Layer 2: Vocabulary trie matching (word lookup with partial match scoring)
    │   ├─ Layer 3: N-gram pattern matching (bigrams + trigrams)
    │   ├─ Layer 4: Suffix matching (e.g., -ción → Spanish, -ment → French/English)
    │   ├─ Layer 5: Prefix matching (e.g., über- → German)
    │   ├─ CJK disambiguation (10+ chars, no kana → Chinese)
    │   └─ Guaranteed floors (unique script/vocab fingerprints → 1.0)
    │
    ├─ Aggregate word scores into language shares
    │   ├─ Bayesian prior adjustment
    │   ├─ Competitive cutoff (drop languages < 40% of top scorer per word)
    │   ├─ 100% match boost (exact trie matches get 2x share capture)
    │   └─ Top-N re-normalization (proportions sum to ~1.0)
    │
    └─ Output: [{ language, proportion, present }]
```

### Key Data Structures

- **Vocabulary Tries**: One trie per language, built from hand-curated word lists (~150-250 words per language). Supports partial matching (e.g., "thre" vs "three" = 0.8 match).
- **Script Ranges**: Unicode codepoint ranges mapped to languages. Cyrillic, Hangul, Devanagari, etc. provide definitive signal.
- **Diacritical Signals**: Specific accented characters mapped to languages (é → French/Spanish, ñ → Spanish, ß → German).
- **Tiered Bigrams/Trigrams**: Character patterns split into high-weight (diacritical, e.g., "ñe" for Spanish) and low-weight (plain Latin, e.g., "th" for English).
- **Suffix/Prefix Maps**: Word endings/beginnings with language weights.

---

## Scoring Pipeline

### Per-Word Scoring (`scoreWord`)

Each word is scored independently against all 17 languages. The score combines:

| Layer | Weight | What it does |
|-------|--------|-------------|
| Script detection | 1.0 | Count characters per Unicode script range, normalize by word length |
| Trie matching | 0.8 | Look up word in each language's vocabulary trie. Full match = 0.8, partial match = penalized |
| High-weight bigrams | 0.15 | Diacritical character pairs (ñe, ße, ão, etc.) |
| Low-weight bigrams | 0.03 | Plain Latin character pairs — less than trigrams to prevent noise |
| Trigrams | 0.2 | 3-character sequences characteristic of specific languages |
| Suffix matching | multiplier + additive | Word endings like -ción, -ment, -keit |
| Prefix matching | multiplier + additive | Word beginnings like über-, anti- |

Scores are normalized to 0–1, then guaranteed floors applied for unique fingerprints (e.g., Hangul characters → Korean = 1.0).

### Aggregation (`detectLanguages`)

1. **Competitive cutoff**: For each word, languages scoring below 40% of the top scorer are dropped. This prevents weak noise from diluting strong signals.

2. **100% match boost**: Languages with an exact trie match (score = 1.0) get their raw score doubled before share distribution. This ensures a vocabulary match captures majority share of that word.

3. **Share distribution**: Each word's score is distributed proportionally among surviving languages.

4. **Bayesian prior**: Optional prior weights can bias toward expected languages.

5. **Top-N re-normalization**: Final proportions are re-normalized among the top N languages to sum to ~1.0, preventing dilution across many weak candidates.

6. **Present filter**: Languages with `present >= 0.5` (indicating definitive script or vocabulary evidence) are always surfaced regardless of the `minConfidence` threshold.

---

## Comparison with Statistical Approaches (ELD)

[Efficient Language Detector (ELD)](https://github.com/nitotm/efficient-language-detector) is a well-regarded statistical detector. Understanding how it differs explains our design choices.

### How ELD Works

ELD uses **byte-level n-gram frequency profiles** with **multiplicative scoring**:

1. **Truncate** input to 1,000 bytes
2. **Extract** fixed-length byte slices (4 bytes in the small DB) at stride intervals
3. **Look up** each byte pattern in a pre-trained database
4. **Multiply** language scores: `langScore[lang] *= precomputed_weight`
5. **Highest product wins**

The pre-trained database was built from 60GB of text across 60 languages.

### Why Byte-Level N-grams Work

UTF-8 encodes characters as variable-width byte sequences:

| Script | Bytes/char | Example |
|--------|-----------|---------|
| ASCII (a-z) | 1 | `a` = `0x61` |
| Accented Latin (é, ñ, ß) | 2 | `é` = `0xC3 0xA9` |
| CJK, Devanagari, Korean | 3 | `你` = `0xE4 0xBD 0xA0` |
| Emoji | 4 | `😀` = `0xF0 0x9F 0x98 0x80` |

When ELD slices bytes into 4-byte windows, those windows naturally capture script-specific byte patterns:
- Bytes starting with `C3` → accented Latin (French, German, Spanish)
- Bytes starting with `D0-D3` → Cyrillic (Russian, Ukrainian)
- Bytes starting with `E4-E9` → CJK (Chinese, Japanese)

**Even slicing mid-character still carries signal** — the orphan bytes are script-specific.

### The Critical Tradeoff

| | ELD (Statistical) | Ours (Vocabulary + Multi-layer) |
|---|---|---|
| **Training** | 60GB corpus, pre-computed | Hand-curated word lists |
| **Scoring** | Multiplicative (log-likelihood) | Additive (weighted layers) |
| **Accent-stripped text** | Loses all signal | Still matches vocabulary |
| **Romanized text** | No signal (pure ASCII) | Matches romanized word lists |
| **Mixed languages** | Single best language | Multiple with proportions |
| **Short text** | Weaker (fewer n-grams) | Stronger (word-level matching) |
| **Well-formed native text** | Excellent (statistical strength) | Good (limited vocab size) |
| **Speed** | Very fast (hash lookups) | Fast (trie walks) |
| **Languages** | 60 | 17 |
| **Database size** | 2.8MB–30MB | ~50KB (embedded in source) |

**Our approach is better for**: informal text, social media, event descriptions, chat, accent-stripped input, romanized languages, mixed/code-switched text.

**ELD is better for**: formal documents, well-formed native-script text, broad language coverage.

---

## UTF-8 and Why It Matters

Understanding UTF-8 is essential for language detection. UTF-8 is a **variable-width** encoding:

```
Character: a     é         你            😀
Codepoint: U+61  U+E9      U+4F60        U+1F600
Bytes:     61    C3 A9     E4 BD A0      F0 9F 98 80
Count:     1     2         3             4
```

### How You Can Tell Byte Count from the First Byte

| Pattern | Bytes | Range |
|---------|-------|-------|
| `0xxxxxxx` | 1 | ASCII |
| `110xxxxx` | 2 | Accented Latin, Cyrillic, Arabic, Greek, Hebrew |
| `1110xxxx` | 3 | CJK, Hangul, Devanagari, Tamil, Thai |
| `11110xxx` | 4 | Emoji, rare CJK extensions |

Continuation bytes always match `10xxxxxx` — this is how parsers detect mid-character slicing (and why orphan bytes render as `�`).

### Why This Matters for Detection

- **Byte-level detectors** (like ELD) get free script fingerprinting from the byte patterns themselves, but lose signal when users strip diacritics (converting 2-byte `é` to 1-byte `e`)
- **Character-level detectors** (like ours) see `é` and `e` as different characters but can match both against vocabulary, and we have explicit diacritical signal maps for accent characters

---

## Supported Languages

| Code | Language | Script | Romanized Support |
|------|----------|--------|-------------------|
| `en` | English | Latin | — |
| `es` | Spanish | Latin | — |
| `fr` | French | Latin | — |
| `de` | German | Latin | — |
| `it` | Italian | Latin | — |
| `pt` | Portuguese | Latin | — |
| `nl` | Dutch | Latin | — |
| `tr` | Turkish | Latin | — |
| `ru` | Russian | Cyrillic | Yes (privet, spasibo) |
| `ar` | Arabic | Arabic | Yes (marhaba, shukran) |
| `zh` | Chinese | CJK | Yes (ni hao, xiexie) |
| `ja` | Japanese | CJK + Kana | Yes (konnichiwa, arigatou) |
| `ko` | Korean | Hangul | Yes (annyeonghaseyo) |
| `hi` | Hindi | Devanagari | Yes (namaste, dhanyavaad) |
| `bn` | Bengali | Bengali | Yes (ami bhalo achi) |
| `ta` | Tamil | Tamil | Yes (vanakkam, nandri) |
| `te` | Telugu | Telugu | Yes (namaskaram) |

---

## Key Design Decisions

### 1. Word-Level Matching Over Byte-Level

We chose word-level trie matching over byte-level n-grams because our input is frequently accent-stripped and romanized. The tradeoff is a smaller effective vocabulary, but much better resilience to informal text.

### 2. Tiered Bigram Weights

Bigrams are split into **high-weight** (containing diacritical characters like ñ, ß, ğ, ã) and **low-weight** (plain Latin). Low-weight bigrams score less than trigrams (0.03 vs 0.20) to prevent common Latin bigrams from creating noise across similar languages.

Previously, plain Latin bigrams like "al" were scoring Arabic on French words like "allé". The tiered system fixed this.

### 3. CJK Disambiguation

Chinese and Japanese share CJK ideograph characters. We disambiguate using:
- **Kana presence**: Hiragana/Katakana → definitely Japanese
- **Character count heuristic**: 10+ continuous CJK characters with no kana → likely Chinese (Chinese text runs continuous; Japanese almost always mixes in kana)

### 4. Competitive Cutoff

For each word, languages scoring below 40% of the top scorer are dropped. This prevents Latin-family dilution — without it, a clearly French word might split its score across French, Spanish, Italian, Portuguese, and English, giving none of them a strong proportion.

### 5. 100% Match Boost

When a word is an exact match in a vocabulary trie (score = 1.0), that language's raw score is doubled before share distribution. This ensures a definitive vocabulary match captures majority share of that word's allocation.

### 6. Present Field Preservation

Languages detected with high confidence (script detection or exact vocabulary match, `present >= 0.5`) are always surfaced in results regardless of the `minConfidence` threshold. This ensures that even one Japanese word in an English text will appear in results.

---

## Future: Corpus-Trained N-grams

While our current hand-curated vocabulary works well for informal text, we could significantly improve detection by training our own n-gram/suffix/prefix profiles on a large corpus. This would combine the strengths of both approaches:

### Planned Approach

1. **Corpus Collection**: Gather text samples per language (Wikipedia dumps, Common Crawl, OpenSubtitles — prioritizing informal/conversational text)

2. **N-gram Extraction**: Extract character-level (not byte-level) bigrams, trigrams, and 4-grams per language, preserving accent-stripped variants alongside accented forms

3. **TF-IDF Scoring**: Score each n-gram by how discriminating it is for its language (high frequency in one language, low in others)

4. **Suffix/Prefix Mining**: Automatically discover characteristic word endings/beginnings per language from the corpus, weighted by discrimination power

5. **Integration**: Replace hand-curated bigram/trigram/suffix/prefix lists with corpus-trained profiles while keeping the multi-layer additive architecture

### Why Character-Level, Not Byte-Level

We'd train on **character-level** n-grams (not byte-level like ELD) because:
- Character-level treats `e` and `é` as related but distinct signals
- We can generate accent-stripped variants during training so `"tres"` still carries French signal
- No mid-character slicing artifacts
- Compatible with our existing scoring pipeline

### Expected Improvements

- **Broader vocabulary coverage** without manually adding words
- **Better Latin-family disambiguation** from statistically-derived discriminating patterns
- **Automatic discovery** of language-specific patterns we might miss by hand
- **Confidence calibration** from real-world frequency data

This remains backward-compatible — the trie vocabulary, script detection, and CJK disambiguation layers continue working alongside corpus-trained n-grams.
