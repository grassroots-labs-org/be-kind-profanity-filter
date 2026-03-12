# Profanity Scoring Rubric

Every word in the profanity filter is tagged with two dimensions: **certainty** (how likely is this word being used with bad intent?) and **severity** (how harmful is this word when used offensively?). Both are scored 1–5.

---

## Certainty (Intent Likelihood)

How confident are we that this word is being used inappropriately?

| Level | Label | Description | Examples |
|-------|-------|-------------|----------|
| **1** | Ambiguous | Common word or name that overlaps with profanity. Frequently used innocently. | wang, dick (name), con (Spanish), negro (Spanish for black), beaver, cracker, mick (name), spook (ghost), facial (skincare), hooker (fishing/rugby), nude (art), gringo, booty (treasure) |
| **2** | Uncommon | Can legitimately be used in good context but raises eyebrows. | autistic, gay, virgin, suck, hell, dike, queer (identity term), lesbian (identity), bi/bisexual (identity), transgender (identity), hardcore (music/gaming), escort (car model), swinger (playground), shag (carpet type), rubber (material), snatch (grab), screw (fastener), blow (wind), rack (storage), doggy (pet name), submissive (personality trait), intimate, passionate, desire, temptation, sensual |
| **3** | Suspicious | Low probability of innocent usage in most contexts (i.e. maybe an exception in medical context). | penis, vulva, vagina, cock, ass, piss, ejaculate, clitoris, rectum, semen, genitals, orgasm, intercourse, nude/nudity, butt, breast(s), nipple(s), naked, arousal, seduction, seduce, provocative, lust, chink (chink in the armor), spastic (medical in some regions), moan (halloween/sports), groan (halloween/general), hump (camel hump/speed bump), shaft (engineering/mining) |
| **4** | Almost certain | Extremely low probability of good-faith usage. | pansy, bitch, bastard, whore, slut, prick, beaner, skank, tosser, bellend, twat, bollocks, slag, wanker, horny, boner, threesome, hooker (prostitute), stripper, pornstar, pimp, hussy, trollop, slutty, skanky, thot, fag, dyke, poof, queer (as insult), topless, hentai, lolita, nympho, dominatrix, lesbo, homo, sissy, tramp, bimbo, floozy, incel, twerk, masturbate, porn, vibrator, sadism, fetish, pegging, chode, smut, grope, escort (sexual), bondage, buttplug, strapon, panties, busty, crap, redneck, whitey, bogan, retarded, crippled, midget, spic (spick and span fragment), faggot (archaic: bundle of sticks), coon (raccoon shorthand), sexy, kinky, erotic, missionary, balls |
| **5** | Definite | No legitimate usage in user-generated content. Should always be flagged. | cunt, goatfucker, motherfucker, sisterfucker, cocksucker, milf, dilf, dildo, most racial slurs (nigger, kike, gook, wetback, sandnigger, porch monkey, jungle bunny, tar baby, zipperhead, raghead, towelhead, camel jockey, curry muncher), death threats (kill yourself, drink bleach, hang yourself, neck yourself, eat a bullet), informal references to genitals (vag), compound slurs (cuntface, fuckface, dicksucker, cumguzzler, thundercunt), hate groups (KKK, neonazi, white power, sieg heil, 1488) |

### Certainty Special Rules

- **Obfuscation attempts** (leet speak, spacing): If a word is an obvious obfuscation attempt (e.g., `f u c k`, `sh1t`, `n4z1`), assign **c:5** regardless of the base word's certainty. Deliberate evasion signals clear intent.
- **Non-English cognates**: Score case-by-case. Words like `negro` (Spanish for black) or `con` (Spanish preposition) should be **c:1** despite being slurs in English. Words that are profane in their own language with no innocent meaning get standard scoring.
- **Racial slurs**: Case-by-case certainty. `nigger` → c:5 (never legitimate), `negro` → c:1 (common Spanish word), `coon` → c:4 (also a raccoon shorthand), `chink` → c:3 (chink in the armor), `spic` → c:4 (spick and span fragment).

---

## Severity (Harm Level)

How harmful or offensive is this word when used with bad intent?

| Level | Label | Description | Examples |
|-------|-------|-------------|----------|
| **1** | Mild | Common low-impact insults, widely normalized. | dumb, idiot, stupid, moron, loser, jerk, lame, dork, noob, fool, nerd, wimp, halfwit, numbskull, dimwit, twit, muppet, plonker, pillock, wazzock, drongo, pleb, git |
| **2** | Moderate | Vulgar, but extremely common in casual speech. | hell, damn, goddamn, goddammit, damnit, crap, bugger, bloody hell, freaking, frigging, frick, effing, fudge (as euphemism), sod, wtf, lmao, fml, smh |
| **3** | Strong | Intimate, pointing at something more concerning or commonly insulting/vulgar. | erotic, lusty, shit, asshole, ass, douchebag, wanker, sex, bastard, fuck, bitch, bullshit, horseshit, dipshit, scumbag, sleazebag, piss, pissed off, bollocks, sod off, shitty, bitchy, slutty, skanky, skank, jackass, smartass, dumbass, fatass, badass, kickass, stfu, gtfo, ffs, milf, dildo, bondage, boner, horny, threesome, orgy, dominatrix, kinky, porn, hentai, smut, thot, missionary, balls, moan, shaft, hump |
| **4** | Severe | Highly sexual, widely-known referencing intimate body parts or sexual acts directly. Racial slurs that are less common and appear more innocent. | penis, dick, vagina, vulva, clitoris, ejaculate, blowjob, handjob, cockplay, doggy style, anal beads, bukkake, rimjob, pegging, cracker, beaner, negro, cock, pussy, tits, titties, ballsack, cumshot, jizz, cum, semen, creampie, deepthroat, footjob, fisting, masturbate, orgasm, nipple(s), boobs, buttplug, strapon, fleshlight, camgirl, pornstar, stripper, hooker (prostitute), anal, fellatio, cunnilingus, anilingus, squirt, grool, queef |
| **5** | Extreme | Deeply personal, dehumanizing. Slurs targeting identity, groups related to racial, religious, or sexual violence, threats of violence. | KKK, cunt, fuck your mother, goatfucker, motherfucker, retard, retarded, faggot, nigger, nigga, kike, spic, chink, gook, wetback, tranny, kill yourself, drink bleach, hang yourself, cocksucker, cuntface, thundercunt, shitcunt, sandnigger, porch monkey, jungle bunny, tar baby, white trash, white power, sieg heil, 1488, neonazi, swastika, spearchucker, raghead, towelhead, camel jockey, curry muncher, window licker, spastic, pedophile, rapist, bestiality, incest, jailbait |

### Severity Special Rules

- **Death threats and violence incitement**: Always **s:5**. Includes `kill yourself`, `drink bleach`, `hang yourself`, `eat a bullet`, `neck yourself`, `unalive yourself`.
- **Racial/ethnic slurs**: Always **s:5**. Includes slurs targeting any race, ethnicity, or national origin.
- **Homophobic/transphobic slurs**: Always **s:5**. Includes `faggot`, `tranny`, `dyke` (when used as slur), etc.
- **Ableist slurs**: Always **s:5**. Includes `retard`, `spastic`, `window licker`, etc.
- **Body parts vs. acts**: Body parts (dick, vagina) are **s:4**; sexual acts (blowjob, handjob, doggy style) are **s:4**; kink behaviors (bondage) are **s:3**.
- **Less common racial slurs**: Words like `cracker`, `beaner`, `negro` are **s:4** — harmful but less universally recognized than s:5 slurs, or have legitimate non-English meanings.

---

## Filtering Tiers

Based on combined severity and certainty scores, words are either **flagged** or **allowed**:

| Tier | Condition | Action | Rationale |
|------|-----------|--------|-----------|
| **Flag** | s:5 (any certainty) | Always flag | Consequences of s:5 content getting through are too severe |
| **Flag** | s:4+ AND c:2+ | Flag | Highly sexual/severe content with reasonable certainty |
| **Flag** | s:3 AND c:3+ | Flag | Strong words with suspicious or higher certainty |
| **Allow** | Everything else | Pass through | Too mild, too ambiguous, or both |

### Tier Examples

| Word | Score | Tier | Why |
|------|-------|------|-----|
| `nigger` | c:5/s:5 | Flag | s:5 → always flag |
| `kill yourself` | c:5/s:5 | Flag | s:5 → always flag |
| `cunt` | c:5/s:5 | Flag | s:5 → always flag |
| `negro` | c:1/s:4 | Allow | s:4 but c:1 → too ambiguous (Spanish for black; historical term) |
| `retard` | c:4/s:5 | Flag | s:5 → always flag |
| `chink` | c:3/s:5 | Flag | s:5 → always flag |
| `autistic` | c:2/s:5 | Flag | s:5 → always flag |
| `gay` | c:2/s:5 | Flag | s:5 → always flag |
| `blowjob` | c:5/s:4 | Flag | s:4 + c:5 → flag |
| `penis` | c:3/s:4 | Flag | s:4 + c:3 → flag |
| `pussy` | c:4/s:4 | Flag | s:4 + c:4 → flag |
| `cock` | c:3/s:4 | Flag | s:4 + c:3 → flag |
| `beaner` | c:4/s:4 | Flag | s:4 + c:4 → flag |
| `doggy style` | c:5/s:4 | Flag | s:4 + c:5 → flag |
| `bukkake` | c:5/s:4 | Flag | s:4 + c:5 → flag |
| `cracker` | c:1/s:4 | Allow | s:4 but c:1 → too ambiguous (food item) |
| `dick` | c:1/s:4 | Allow | s:4 but c:1 → too ambiguous (common name) |
| `wang` | c:1/s:4 | Allow | s:4 but c:1 → too ambiguous (surname) |
| `booty` | c:1/s:4 | Allow | s:4 but c:1 → too ambiguous (treasure) |
| `fuck` | c:5/s:3 | Flag | s:3 + c:5 → flag |
| `shit` | c:5/s:3 | Flag | s:3 + c:5 → flag |
| `asshole` | c:5/s:3 | Flag | s:3 + c:5 → flag |
| `bitch` | c:4/s:3 | Flag | s:3 + c:4 → flag |
| `horny` | c:4/s:3 | Flag | s:3 + c:4 → flag |
| `orgy` | c:5/s:3 | Flag | s:3 + c:5 → flag |
| `milf` | c:5/s:3 | Flag | s:3 + c:5 → flag |
| `ass` | c:3/s:3 | Flag | s:3 + c:3 → flag |
| `sex` | c:3/s:3 | Flag | s:3 + c:3 → flag |
| `piss` | c:3/s:3 | Flag | s:3 + c:3 → flag |
| `suck` | c:2/s:3 | Allow | s:3 but c:2 → too ambiguous ("this sucks") |
| `erotic` | c:4/s:3 | Flag | s:3 + c:4 → flag; sexual context |
| `sexy` | c:4/s:3 | Flag | s:3 + c:4 → flag; sexual context |
| `kinky` | c:4/s:3 | Flag | s:3 + c:4 → flag; sexual context |
| `balls` | c:4/s:3 | Flag | s:3 + c:4 → flag; sexual context |
| `moan` | c:3/s:3 | Flag | s:3 + c:3 → flag; halloween/sports usage possible but crosses threshold |
| `groan` | c:3/s:3 | Flag | s:3 + c:3 → flag; general usage possible but crosses threshold |
| `hump` | c:3/s:3 | Flag | s:3 + c:3 → flag; camel hump/speed bump usage but crosses threshold |
| `shaft` | c:3/s:3 | Flag | s:3 + c:3 → flag; engineering usage but crosses threshold |
| `hell` | c:2/s:2 | Allow | s:2 → passes through |
| `damn` | c:3/s:2 | Allow | s:2 → passes through |
| `crap` | c:4/s:2 | Allow | s:2 → passes through |
| `idiot` | c:4/s:1 | Allow | s:1 → passes through |
| `stupid` | c:3/s:1 | Allow | s:1 → passes through |

> **Note on s:5/c:1 words:** If any s:5 word has c:1 (e.g., `spastic` in medical contexts), it still flags because s:5 consequences are too severe. The low certainty is noted so reviewers can consider context.

---

## Combined Scoring Examples

### Mild Insults (s:1) → Allow
| Word | Certainty | Severity | Reasoning |
|------|-----------|----------|-----------|
| `idiot` | c:4 | s:1 | Almost always an insult; but a mild one |
| `stupid` | c:3 | s:1 | Could be used casually ("that's stupid"); low harm |
| `dumb` | c:3 | s:1 | Very common, low impact; also means "unable to speak" |
| `moron` | c:4 | s:1 | Almost always an insult; mild |
| `loser` | c:3 | s:1 | Could be used in gaming/sports context innocently |
| `jerk` | c:4 | s:1 | Almost always an insult; mild impact |
| `lame` | c:2 | s:1 | Often used casually ("that's lame"); also means limping |
| `noob` | c:3 | s:1 | Gaming insult; low severity |
| `fool` | c:3 | s:1 | Can be playful or literary; mild insult |
| `dork` | c:3 | s:1 | Mild, often affectionate insult |

### Moderate Vulgar (s:2) → Allow
| Word | Certainty | Severity | Reasoning |
|------|-----------|----------|-----------|
| `hell` | c:2 | s:2 | Often used as exclamation; religious context |
| `damn` | c:3 | s:2 | Suspicious but could be innocent; mild swear |
| `bloody hell` | c:4 | s:2 | British profanity; moderate but common |
| `crap` | c:4 | s:2 | Almost always vulgar; mild profanity |
| `bugger` | c:3 | s:2 | British; can be mild exclamation |

### Strong / Vulgar / Sexual (s:3) → Flag (c:3+) or Allow (c:1-2)
| Word | Certainty | Severity | Tier | Reasoning |
|------|-----------|----------|------|-----------|
| `fuck` | c:5 | s:3 | Flag | Always profane, sexual in nature |
| `shit` | c:5 | s:3 | Flag | Always profane; strong vulgarity |
| `asshole` | c:5 | s:3 | Flag | Always vulgar; strong insult |
| `bitch` | c:4 | s:3 | Flag | Almost always vulgar; strong insult |
| `bastard` | c:4 | s:3 | Flag | Almost always vulgar; strong insult |
| `douchebag` | c:4 | s:3 | Flag | Almost always an insult; strong |
| `wanker` | c:4 | s:3 | Flag | British insult; strong vulgarity |
| `horny` | c:4 | s:3 | Flag | Almost always sexual; crude |
| `threesome` | c:4 | s:3 | Flag | Almost always sexual context |
| `bondage` | c:4 | s:3 | Flag | Rarely innocent; kink/fetish term |
| `boner` | c:4 | s:3 | Flag | Almost always sexual; crude |
| `slut` | c:4 | s:3 | Flag | Almost always derogatory |
| `orgy` | c:5 | s:3 | Flag | No innocent usage; sexual |
| `dominatrix` | c:4 | s:3 | Flag | Almost always sexual/kink context |
| `milf` | c:5 | s:3 | Flag | No innocent usage; sexual objectification |
| `dildo` | c:5 | s:3 | Flag | No innocent usage; sex toy |
| `bitchass` | c:5 | s:3 | Flag | Compound insult; always vulgar |
| `fuckboy` | c:5 | s:3 | Flag | Compound; always derogatory + sexual |
| `bollocks` | c:4 | s:3 | Flag | British; almost always vulgar |
| `pissed off` | c:4 | s:3 | Flag | Very common expression but vulgar |
| `sod off` | c:5 | s:3 | Flag | British; always an insult |
| `ass` | c:3 | s:3 | Flag | Can mean donkey; but c:3 crosses threshold |
| `lusty` | c:3 | s:3 | Flag | Archaic/literary use possible; but c:3 crosses threshold |
| `sex` | c:3 | s:3 | Flag | Could be biological; but c:3 crosses threshold |
| `piss` | c:3 | s:3 | Flag | Could be "pissed off"; but c:3 crosses threshold |
| `erotic` | c:4 | s:3 | Flag | High probability of sexual context |
| `sexy` | c:4 | s:3 | Flag | High probability of sexual context |
| `kinky` | c:4 | s:3 | Flag | High probability of sexual context |
| `moan` | c:3 | s:3 | Flag | Halloween/sports usage but crosses s:3+c:3 threshold |
| `groan` | c:3 | s:3 | Flag | General usage but crosses s:3+c:3 threshold |
| `hump` | c:3 | s:3 | Flag | Camel hump/speed bump but crosses s:3+c:3 threshold |
| `shaft` | c:3 | s:3 | Flag | Engineering term but crosses s:3+c:3 threshold |
| `missionary` | c:4 | s:3 | Flag | High probability of sexual context |
| `balls` | c:4 | s:3 | Flag | High probability of sexual context |
| `suck` | c:2 | s:3 | Allow | "This sucks" is very common innocent usage |

### Intimate Body Parts / Sexual Acts / Less Common Slurs (s:4) → Flag (c:2+) or Allow (c:1)
| Word | Certainty | Severity | Tier | Reasoning |
|------|-----------|----------|------|-----------|
| `dick` | c:1 | s:4 | Allow | Common name (Dick Cheney); too ambiguous |
| `wang` | c:1 | s:4 | Allow | Common surname; too ambiguous |
| `cracker` | c:1 | s:4 | Allow | Food item; too ambiguous |
| `booty` | c:1 | s:4 | Allow | Common word for treasure/loot; too ambiguous |
| `negro` | c:1 | s:4 | Allow | Spanish for black; historical term; too ambiguous |
| `cock` | c:3 | s:4 | Flag | Can mean rooster; but s:4 + c:3 crosses threshold |
| `penis` | c:3 | s:4 | Flag | Could appear in medical context; intimate body part |
| `vagina` | c:3 | s:4 | Flag | Could appear in medical context; intimate body part |
| `vulva` | c:3 | s:4 | Flag | Medical term; intimate body part |
| `clitoris` | c:3 | s:4 | Flag | Medical term; intimate body part |
| `ejaculate` | c:3 | s:4 | Flag | Medical term; highly sexual |
| `erection` | c:3 | s:4 | Flag | Medical term; highly sexual |
| `beaner` | c:4 | s:4 | Flag | Less common racial slur; almost always derogatory |
| `pussy` | c:4 | s:4 | Flag | Can mean cat; almost always sexual/vulgar |
| `tits` | c:4 | s:4 | Flag | Rarely innocent (bird species); usually sexual |
| `pegging` | c:4 | s:4 | Flag | Almost always sexual context; rarely innocent |
| `blowjob` | c:5 | s:4 | Flag | No innocent usage; direct sexual act |
| `handjob` | c:5 | s:4 | Flag | No innocent usage; direct sexual act |
| `titties` | c:5 | s:4 | Flag | No innocent usage; sexualized body part |
| `ballsack` | c:5 | s:4 | Flag | No innocent usage; intimate body part |
| `cumshot` | c:5 | s:4 | Flag | No innocent usage; explicit sexual act |
| `jizz` | c:5 | s:4 | Flag | No innocent usage; sexual fluid |
| `vag` | c:5 | s:4 | Flag | Informal genital reference; no innocent usage |
| `doggy style` | c:5 | s:4 | Flag | No innocent usage; sexual position |
| `anal beads` | c:5 | s:4 | Flag | No innocent usage; sexual object |
| `bukkake` | c:5 | s:4 | Flag | No innocent usage; explicit sexual act |
| `rimjob` | c:5 | s:4 | Flag | No innocent usage; sexual act |
| `cockplay` | c:5 | s:4 | Flag | No innocent usage; sexual act |

### Extreme / Dehumanizing / Slurs (s:5) → Flag (all)
| Word | Certainty | Severity | Reasoning |
|------|-----------|----------|-----------|
| `cunt` | c:5 | s:5 | Always profane, deeply offensive |
| `nigger` | c:5 | s:5 | Never legitimate in user content; extreme harm |
| `faggot` | c:4 | s:5 | Can mean bundle of sticks (archaic); almost always a slur |
| `retard` | c:4 | s:5 | Was medical term decades ago; now always ableist slur |
| `kike` | c:5 | s:5 | No innocent usage; antisemitic slur |
| `spic` | c:4 | s:5 | Could be "spick and span" fragment; usually a slur |
| `chink` | c:3 | s:5 | "Chink in the armor" is legitimate; extreme harm as slur |
| `tranny` | c:5 | s:5 | No innocent usage; transphobic slur |
| `whore` | c:4 | s:5 | Rarely used innocently; deeply dehumanizing |
| `autistic` | c:2 | s:5 | Legitimate medical term; deeply personal as insult |
| `gay` | c:2 | s:5 | Legitimate identity term; weaponized as slur |
| `coon` | c:4 | s:5 | Could mean raccoon; extreme harm as racial slur |
| `goatfucker` | c:5 | s:5 | No innocent usage; extreme compound slur |
| `motherfucker` | c:5 | s:5 | No innocent usage; extreme compound insult |
| `fuck your mother` | c:5 | s:5 | No innocent usage; extreme compound insult |
| `porch monkey` | c:5 | s:5 | No innocent usage; racial slur |
| `white trash` | c:5 | s:5 | No innocent usage; classist/racial slur |
| `spastic` | c:3 | s:5 | Medical term in some regions; ableist slur |
| `window licker` | c:5 | s:5 | No innocent usage; ableist slur |
| `nazi` | c:5 | s:5 | No legitimate casual usage; hate ideology |
| `KKK` | c:5 | s:5 | No innocent usage; white supremacist organization |
| `white power` | c:5 | s:5 | No innocent usage; white supremacist slogan |
| `sieg heil` | c:5 | s:5 | No innocent usage; Nazi salute |
| `1488` | c:5 | s:5 | No innocent usage; white supremacist code |

### Death Threats & Violence (always s:5/c:5) → Flag
| Word | Certainty | Severity | Reasoning |
|------|-----------|----------|-----------|
| `kill yourself` | c:5 | s:5 | Death threat; always flagged |
| `drink bleach` | c:5 | s:5 | Violent threat disguised as suggestion |
| `hang yourself` | c:5 | s:5 | Suicide incitement |
| `eat a bullet` | c:5 | s:5 | Violent threat |
| `neck yourself` | c:5 | s:5 | Suicide incitement |
| `unalive yourself` | c:5 | s:5 | Euphemistic suicide incitement |
| `go die` | c:5 | s:5 | Direct death wish |
| `slit your wrists` | c:5 | s:5 | Suicide incitement |
| `jump off a bridge` | c:5 | s:5 | Suicide incitement |

### Obfuscation Attempts (always c:5, inherit base severity)
| Word | Certainty | Severity | Tier | Reasoning |
|------|-----------|----------|------|-----------|
| `f u c k` | c:5 | s:3 | Flag | Spaced obfuscation; s:3 + c:5 → flag |
| `sh1t` | c:5 | s:3 | Flag | Leet speak; s:3 + c:5 → flag |
| `b i t c h` | c:5 | s:3 | Flag | Spaced obfuscation; s:3 + c:5 → flag |
| `a$$` | c:5 | s:3 | Flag | Symbol substitution; s:3 + c:5 → flag |
| `ph uck` | c:5 | s:3 | Flag | Phonetic obfuscation; s:3 + c:5 → flag |
| `fü ck` | c:5 | s:3 | Flag | Unicode obfuscation; s:3 + c:5 → flag |
| `n4z1` | c:5 | s:5 | Flag | Leet speak; s:5 → always flag |
| `c u n t` | c:5 | s:5 | Flag | Spaced obfuscation; s:5 → always flag |
| `n1gg3r` | c:5 | s:5 | Flag | Leet speak; s:5 → always flag |

### Non-English Examples
| Word | Language | Certainty | Severity | Tier | Reasoning |
|------|----------|-----------|----------|------|-----------|
| `putain` | French | c:5 | s:3 | Flag | Always vulgar; French equivalent of "fuck/whore" |
| `merde` | French | c:5 | s:3 | Flag | Always vulgar; French "shit" |
| `Scheiße` | German | c:5 | s:3 | Flag | German "shit"; common swear |
| `chingada` | Spanish | c:5 | s:3 | Flag | Mexican Spanish; sexual profanity |
| `씨발 (ssibal)` | Korean | c:5 | s:3 | Flag | Korean "fuck"; always profane |
| `くそ (kuso)` | Japanese | c:4 | s:3 | Flag | "Shit/damn"; very common casual swear |
| `Hurensohn` | German | c:5 | s:5 | Flag | "Son of a whore"; extreme compound insult |
| `puta` | Spanish | c:4 | s:5 | Flag | "Whore"; extreme even if mild in some dialects |
| `mierda` | Spanish | c:5 | s:3 | Flag | Spanish "shit"; common swear |
| `Rassenschande` | German | c:5 | s:5 | Flag | Nazi racial purity term; extreme hate speech |

---

## Non-English Word Guidelines

Apply the same rubric with cultural context:

- Words that are unambiguously profane in their source language get standard scoring (e.g., French `putain` → c:5/s:3, German `Hurensohn` → c:5/s:5)
- Words with innocent meanings in other languages score lower certainty (e.g., `bite` in French means penis but is also an English word → c:1 in the English list)
- When cultural nuance is unclear, default to **c:4/s:3** and flag
- Language-specific agents should have native-level understanding of which words have dual meanings

---

## Data Structure

Words are stored as a map from word string to metadata:

```typescript
type WordMetadata = {
  s: number; // severity 1-5
  c: number; // certainty 1-5
};

const words: Record<string, WordMetadata> = {
  "fuck": { s: 3, c: 5 },
  "cunt": { s: 5, c: 5 },
  "dick": { s: 4, c: 1 },
  "idiot": { s: 1, c: 4 },
  // ...
};
```

Consumers can filter using the built-in tier logic or raw metadata:

```typescript
// Default: uses tier rules (s:5 any c, s:4+ c:2+, s:3 c:3+)
const result = filter.check(text);
// result.flagged: boolean

// Custom thresholds
filter.check(text, { minSeverity: 3, minCertainty: 3 });

// Get raw metadata for custom logic
const results = filter.scan(text);
// results.matches[0].severity, results.matches[0].certainty
```
