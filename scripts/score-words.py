#!/usr/bin/env python3
"""
Score all words in english-primary-all-languages.ts with severity and certainty values.

Uses section headers and inline comments to determine scoring categories,
then applies the rubric rules programmatically.
"""

import re
import json
import os

SOURCE_FILE = os.path.join(os.path.dirname(__file__), '..', 'src', 'languages', 'english-primary-all-languages.ts')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'src', 'languages', 'scored', 'all-words-scored.json')

# Pattern to extract word and optional comment from lines like:
#   "fuck",  // some comment
#   "shit",
#   "hello" + " world",  // concatenated
WORD_LINE = re.compile(r'^\s*"([^"]*)"(?:\s*\+\s*"([^"]*)")*\s*,?\s*(?://\s*(.*))?$')
# Also handle lines with single quotes or template literals - but the file uses double quotes

def extract_entries(filepath):
    """Extract all word entries with their section context and inline comments."""
    entries = []
    current_language = "English"
    current_section = "general"

    with open(filepath, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            stripped = line.strip()

            # Track language sections
            lang_match = re.match(r'//\s*===\s*([A-Za-zÀ-ÿ/\s]+?)\s*=+', stripped)
            if lang_match:
                lang_name = lang_match.group(1).strip()
                # Only update language for major sections
                major_langs = ['English', 'German', 'French', 'Spanish', 'Brazilian Portuguese',
                              'Hindi', 'Hinglish', 'Tamil', 'Bengali', 'Telugu', 'Arabic',
                              'Chinese', 'Italian', 'Japanese', 'Korean', 'Russian',
                              'Spanish Spain Additional']
                for ml in major_langs:
                    if ml.lower() in lang_name.lower():
                        current_language = ml
                        break

            # Track sub-sections
            section_match = re.match(r'//\s*=*\s*(.*?)\s*=*$', stripped)
            if section_match and not stripped.startswith('"'):
                section_text = section_match.group(1).strip()
                if section_text and len(section_text) > 3:
                    current_section = section_text.lower()

            # Extract word entries
            if stripped.startswith('"'):
                # Extract inline comment first (so we can exclude it from word parsing)
                comment_match = re.search(r'//\s*(.*)', stripped)
                comment = comment_match.group(1).strip() if comment_match else ""

                # Get the part before any comment
                code_part = stripped[:comment_match.start()].strip() if comment_match else stripped

                # Handle both formats:
                #   Old: "word",
                #   New: "word": { s: X, c: Y },
                #   Concatenated: "H.u" + "re"
                parts = re.findall(r'"([^"]*)"', code_part)
                if parts:
                    word = ''.join(parts)

                    entries.append({
                        'word': word,
                        'language': current_language,
                        'section': current_section,
                        'comment': comment.lower(),
                        'line': line_num
                    })

    return entries


def is_obfuscation(word, comment):
    """Check if a word is an obfuscation/evasion attempt."""
    # Leet speak patterns
    leet_chars = set('01345$@!+')
    if any(c in leet_chars for c in word) and any(c.isalpha() for c in word):
        return True

    # Spaced out words (e.g., "f u c k")
    if re.match(r'^[a-zA-Z](\s[a-zA-Z]){2,}$', word):
        return True

    # Dot/dash separated (e.g., "f.u.c.k", "f-u-c-k")
    if re.match(r'^[a-zA-Z]([.\-_][a-zA-Z]){2,}$', word):
        return True

    # Symbol substitution patterns
    if re.search(r'[$@!#\*\+]', word) and any(c.isalpha() for c in word):
        return True

    # Comment says it's an evasion
    evasion_keywords = ['evasion', 'leetspeak', 'leet speak', 'leet', 'obfuscat',
                        'substitut', 'symbol', 'spaced', 'spacing', 'misspell',
                        'spelling variation', 'alternate spelling', 'filter evasion',
                        'character substitut', 'unicode', 'homoglyph', 'phonetic']
    if any(kw in comment for kw in evasion_keywords):
        return True

    return False


def is_evasion_section(section):
    """Check if the current section is about evasions/obfuscation."""
    evasion_sections = ['leetspeak', 'leet speak', 'character substitut', 'symbol',
                       'evasion', 'unicode', 'homoglyph', 'spacing evasion',
                       'phonetic evasion', 'misspelling', 'filter evasion',
                       'euphemistic spelling', 'abbreviation evasion',
                       'romanized', 'transliterat', 'keyboard']
    return any(kw in section for kw in evasion_sections)


def score_word(entry):
    """Score a single word entry based on rubric rules."""
    word = entry['word']
    lang = entry['language']
    section = entry['section']
    comment = entry['comment']
    word_lower = word.lower()

    # Default scores
    s = 3  # default severity
    c = 4  # default certainty

    # ============================================
    # OBFUSCATION DETECTION (always c:5)
    # ============================================
    obfuscated = is_obfuscation(word, comment) or is_evasion_section(section)

    # ============================================
    # SECTION-BASED SCORING
    # ============================================

    # Death threats / violence
    threat_keywords = ['threat', 'kill yourself', 'drink bleach', 'hang yourself',
                       'suicide', 'violence', 'death', 'die', 'murder', 'neck yourself',
                       'unalive', 'slit your', 'jump off']
    if any(kw in section for kw in ['violent', 'threat', 'death']):
        s = 5
        c = 5
    if any(kw in comment for kw in threat_keywords) or any(kw in word_lower for kw in ['kill yourself', 'drink bleach', 'hang yourself', 'neck yourself', 'go die', 'slit your wrist', 'eat a bullet', 'jump off a bridge', 'unalive']):
        s = 5
        c = 5

    # Racial/ethnic slurs
    elif any(kw in section for kw in ['racial', 'ethnic', 'slur']):
        s = 5
        c = 4
        if any(kw in comment for kw in ['always', 'no innocent', 'never legitimate', 'extreme']):
            c = 5

    # Homophobic/transphobic
    elif any(kw in section for kw in ['homophob', 'transphob']):
        s = 5
        c = 4
        if any(kw in comment for kw in ['always', 'no innocent', 'never legitimate']):
            c = 5

    # Ableist slurs
    elif any(kw in section for kw in ['ableist', 'disability']):
        s = 5
        c = 4

    # Misogynistic terms
    elif any(kw in section for kw in ['misogyn', 'sexist']):
        s = 3
        c = 4

    # Sexual acts
    elif any(kw in section for kw in ['sexual act', 'sexual term']):
        s = 4
        c = 4
        if any(kw in comment for kw in ['no innocent', 'explicit', 'always']):
            c = 5

    # Body parts (vulgar)
    elif any(kw in section for kw in ['body part', 'genitalia', 'genital']):
        s = 4
        c = 3
        if any(kw in comment for kw in ['vulgar', 'slang', 'informal']):
            c = 4

    # Drug-related
    elif 'drug' in section:
        s = 2
        c = 3

    # Religious/blasphemous
    elif any(kw in section for kw in ['religious', 'blasphemous', 'blasphemy']):
        s = 2
        c = 3
        if lang == 'Italian':
            s = 3
            c = 4

    # Scatological
    elif 'scatolog' in section:
        s = 3
        c = 4

    # Internet/modern slang
    elif any(kw in section for kw in ['internet', 'modern slang', 'youth slang', 'meme']):
        s = 2
        c = 3

    # General insults
    elif any(kw in section for kw in ['general insult', 'misc insult', 'other offensive', 'insult']):
        s = 1
        c = 4

    # Compound insults
    elif 'compound' in section:
        s = 3
        c = 5

    # Your mom/dad variants
    elif any(kw in section for kw in ['your mom', 'your dad', 'mom variant', 'dad variant']):
        s = 5
        c = 5

    # Caste slurs (Tamil/Telugu/Hindi/Bengali)
    elif 'caste' in section:
        s = 5
        c = 4

    # Criminal/prison slang
    elif any(kw in section for kw in ['criminal', 'prison']):
        s = 3
        c = 4

    # ============================================
    # COMMENT-BASED REFINEMENTS
    # ============================================

    # Comment keywords that indicate severity
    if any(kw in comment for kw in ['racial slur', 'ethnic slur', 'racist']):
        s = 5
    if any(kw in comment for kw in ['homophobic', 'transphobic', 'anti-gay', 'anti-trans']):
        s = 5
    if any(kw in comment for kw in ['ableist', 'disability slur']):
        s = 5
    if any(kw in comment for kw in ['dehumaniz', 'sub-human', 'subhuman']):
        s = 5
        c = 5
    if any(kw in comment for kw in ['pedophil', 'rape', 'rapist', 'incest', 'bestiality']):
        s = 5
        c = 5

    # Mild insult indicators
    if any(kw in comment for kw in ['idiot', 'fool', 'stupid', 'dumb', 'mild insult', 'mild']):
        if s > 1:
            s = 1

    # "Moderate" / euphemism indicators
    if any(kw in comment for kw in ['euphemism', 'euphemistic', 'mild swear', 'minced oath']):
        s = 2
        c = 3

    # ============================================
    # WORD-SPECIFIC OVERRIDES (English)
    # ============================================
    if lang == 'English':
        # s:5 definite words
        s5_c5 = {'cunt', 'nigger', 'nigga', 'kike', 'goatfucker', 'motherfucker',
                 'sisterfucker', 'cocksucker', 'cuntface', 'fuckface', 'dicksucker',
                 'cumguzzler', 'thundercunt', 'shitcunt', 'sandnigger', 'porch monkey',
                 'jungle bunny', 'tar baby', 'white trash', 'white power', 'sieg heil',
                 'neonazi', 'swastika', 'zipperhead', 'raghead', 'towelhead',
                 'camel jockey', 'curry muncher', 'spearchucker', 'window licker',
                 'pedophile', 'rapist', 'jailbait', 'milf', 'dilf', 'dildo',
                 # Homophobic/transphobic slurs
                 'bulldyke', 'shemale', 'he-she', 'heshe', 'ladyboy',
                 'tranny', 'trannie',
                 # Plurals of extreme slurs
                 'niggers', 'niggas', 'kikes', 'coons', 'cunts', 'faggots',
                 'spics', 'retards', 'trannies', 'whores',
                 # Death threat euphemisms
                 'unalive yourself', 'kys',
                 # Non-English "motherfucker" equivalents
                 'madarchod', 'bhenchod', 'hijo de puta', 'hurensohn',
                 'putain de merde', 'figlio di puttana'}
        s5_c4 = {'faggot', 'retard', 'retarded', 'spic', 'coon', 'whore',
                 # Homophobic slurs
                 'dyke', 'fag', 'poof', 'poofter', 'batty boy', 'battyboy',
                 'sodomite', 'nonce',
                 # Ableist
                 'spaz', 'spazz', 'mongoloid',
                 # Plurals
                 'fags', 'dykes', 'poofs', 'poofters', 'spazzes'}
        s5_c3 = {'chink', 'spastic'}
        s5_c2 = {'autistic', 'gay'}

        # s:4 words
        s4_c5 = {'blowjob', 'handjob', 'titties', 'ballsack', 'cumshot', 'jizz', 'cum',
                 'vag', 'doggy style', 'anal beads', 'bukkake', 'rimjob', 'cockplay',
                 'creampie', 'deepthroat', 'footjob', 'fisting', 'fleshlight', 'camgirl',
                 'squirt', 'grool', 'queef', 'anilingus'}
        s4_c4 = {'pussy', 'tits', 'beaner', 'pegging', 'masturbate', 'pornstar',
                 'stripper', 'buttplug', 'strapon', 'boobs', 'nipple', 'nipples'}
        s4_c3 = {'penis', 'vagina', 'vulva', 'clitoris', 'ejaculate', 'cock', 'erection',
                 'semen', 'orgasm', 'anal', 'fellatio', 'cunnilingus'}
        s4_c1 = {'dick', 'wang', 'cracker', 'booty', 'negro'}

        # s:3 words
        s3_c5 = {'fuck', 'shit', 'asshole', 'bullshit', 'horseshit', 'dipshit',
                 'orgy', 'bitchass', 'fuckboy', 'fuckface', 'sod off', 'stfu', 'gtfo', 'ffs'}
        s3_c4 = {'bitch', 'bastard', 'douchebag', 'wanker', 'horny', 'threesome',
                 'bondage', 'boner', 'slut', 'dominatrix', 'bollocks', 'pissed off',
                 'scumbag', 'sleazebag', 'shitty', 'bitchy', 'slutty', 'skanky',
                 'skank', 'jackass', 'smartass', 'dumbass', 'porn', 'hentai', 'smut', 'thot'}
        s3_c3 = {'ass', 'piss', 'sex', 'lusty'}
        s3_c4 |= {'erotic', 'sexy', 'kinky', 'missionary', 'balls'}
        s3_c3 |= {'moan', 'groan', 'hump', 'shaft'}
        s3_c2 = {'suck'}

        # s:2 words
        s2_c2 = {'hell', 'damn', 'bloody hell', 'freaking', 'frigging', 'frick',
                 'effing', 'fudge', 'wtf', 'lmao', 'fml', 'smh'}
        s2_c3 = {'bugger', 'goddamn', 'goddammit', 'damnit'}
        s2_c4 = {'crap', 'bloody hell'}

        # s:1 words
        s1_c4 = {'idiot', 'moron', 'jerk'}
        s1_c3 = {'stupid', 'loser', 'dumb', 'fool', 'dork', 'nerd'}
        s1_c2 = {'lame',
                 # Mild British insults
                 'muppet', 'plonker', 'pillock', 'wazzock', 'git', 'twit',
                 'pleb', 'numpty', 'berk', 'prat', 'tosser',
                 # Mild Australian insults
                 'drongo', 'bogan',
                 # Gaming/internet mild terms
                 'noob', 'camper', 'smurf', 'tryhard', 'scrub'}

        # Apply overrides
        if word_lower in s5_c5: s, c = 5, 5
        elif word_lower in s5_c4: s, c = 5, 4
        elif word_lower in s5_c3: s, c = 5, 3
        elif word_lower in s5_c2: s, c = 5, 2
        elif word_lower in s4_c5: s, c = 4, 5
        elif word_lower in s4_c4: s, c = 4, 4
        elif word_lower in s4_c3: s, c = 4, 3
        elif word_lower in s4_c1: s, c = 4, 1
        elif word_lower in s3_c5: s, c = 3, 5
        elif word_lower in s3_c4: s, c = 3, 4
        elif word_lower in s3_c3: s, c = 3, 3
        elif word_lower in s3_c2: s, c = 3, 2
        elif word_lower in s2_c4: s, c = 2, 4
        elif word_lower in s2_c3: s, c = 2, 3
        elif word_lower in s2_c2: s, c = 2, 2
        elif word_lower in s1_c4: s, c = 1, 4
        elif word_lower in s1_c3: s, c = 1, 3
        elif word_lower in s1_c2: s, c = 1, 2

        # English compound detection: words containing known profane roots
        compound_roots = {
            'fuck': (3, 5), 'shit': (3, 5), 'cunt': (5, 5), 'nigger': (5, 5),
            'nigga': (5, 5), 'fag': (5, 4), 'bitch': (3, 4), 'cock': (4, 3),
            'dick': (4, 3), 'ass': (3, 3), 'whore': (5, 4), 'slut': (3, 4),
            'cum': (4, 5), 'rape': (5, 5), 'piss': (3, 3), 'tit': (4, 4),
            'pussy': (4, 4), 'crap': (2, 4), 'wank': (3, 4), 'bollock': (3, 4),
            'jizz': (4, 5), 'twat': (4, 4), 'knob': (3, 3), 'douche': (3, 4),
            'tard': (5, 4), 'kike': (5, 5), 'spic': (5, 4), 'coon': (5, 4),
        }

        # Only apply compound detection if not already specifically scored
        if word_lower not in (s5_c5 | s5_c4 | s5_c3 | s5_c2 | s4_c5 | s4_c4 |
                              s4_c3 | s4_c1 | s3_c5 | s3_c4 | s3_c3 | s3_c2 |
                              s2_c4 | s2_c3 | s2_c2 | s1_c4 | s1_c3 | s1_c2):
            for root, (root_s, root_c) in compound_roots.items():
                if root in word_lower and word_lower != root:
                    s = max(s, root_s)
                    c = max(c, root_c)
                    break

    # ============================================
    # PLURAL DETECTION (inherit singular score)
    # ============================================
    if lang == 'English' and word_lower not in (s5_c5 | s5_c4 | s5_c3 | s5_c2 |
            s4_c5 | s4_c4 | s4_c3 | s4_c1 | s3_c5 | s3_c4 | s3_c3 | s3_c2 |
            s2_c4 | s2_c3 | s2_c2 | s1_c4 | s1_c3 | s1_c2):
        # Check if removing trailing 's', 'es', 'ies' yields a known word
        all_scored = {}
        for w_set, scores in [(s5_c5, (5,5)), (s5_c4, (5,4)), (s5_c3, (5,3)), (s5_c2, (5,2)),
                               (s4_c5, (4,5)), (s4_c4, (4,4)), (s4_c3, (4,3)), (s4_c1, (4,1)),
                               (s3_c5, (3,5)), (s3_c4, (3,4)), (s3_c3, (3,3)), (s3_c2, (3,2)),
                               (s2_c4, (2,4)), (s2_c3, (2,3)), (s2_c2, (2,2)),
                               (s1_c4, (1,4)), (s1_c3, (1,3)), (s1_c2, (1,2))]:
            for w in w_set:
                all_scored[w] = scores

        singular = None
        if word_lower.endswith('ies') and len(word_lower) > 4:
            singular = word_lower[:-3] + 'y'
        elif word_lower.endswith('es') and len(word_lower) > 3:
            singular = word_lower[:-2]
        elif word_lower.endswith('s') and len(word_lower) > 3:
            singular = word_lower[:-1]

        if singular and singular in all_scored:
            ps, pc = all_scored[singular]
            s = max(s, ps)
            c = max(c, pc)

    # ============================================
    # MISSPELLING / EVASION PATTERNS (c:5, inherit severity)
    # ============================================
    # Map misspellings to (base_severity, 5) — c is always 5 for evasion
    misspelling_scores = {
        'fcuk': 3, 'fking': 3, 'fck': 3, 'fk': 3, 'fuq': 3,
        'phuck': 3, 'phuk': 3, 'fuk': 3, 'fuc': 3,
        'sht': 3, 'sh1t': 3, 'shiit': 3, 'shyt': 3,
        'cnt': 5, 'kunt': 5, 'c0nt': 5,
        'n1gger': 5, 'nigg3r': 5, 'niqqa': 5,
        'wh0re': 5, 'h0e': 5, 'sl0t': 3,
        'b1tch': 3, 'bytch': 3, 'biatch': 3,
        'a$$': 3, 'azz': 3,
        'p3nis': 4, 'd1ck': 4, 'c0ck': 4,
        'pr0n': 3, 'p0rn': 3,
    }
    if word_lower in misspelling_scores:
        s = max(s, misspelling_scores[word_lower])
        c = 5  # misspellings are always intentional evasion

    # ============================================
    # NON-ENGLISH DEFAULTS BY COMMENT PATTERNS
    # ============================================
    if lang != 'English':
        # Common patterns in comments
        if any(kw in comment for kw in ['"fuck"', 'fuck', 'fucking']):
            s = max(s, 3)
            c = max(c, 5)
        if any(kw in comment for kw in ['"shit"', 'shit']):
            s = max(s, 3)
            c = max(c, 5)
        if any(kw in comment for kw in ['whore', 'prostitut']):
            s = max(s, 5)
            c = max(c, 4)
        if any(kw in comment for kw in ['"cunt"', 'cunt']):
            s = max(s, 5)
            c = max(c, 5)
        if any(kw in comment for kw in ['son of a whore', 'son of whore', 'hurensohn']):
            s = 5
            c = 5
        if any(kw in comment for kw in ['motherfuck', 'mother fuck', 'madarchod',
                                         'bhenchod', 'hijo de puta', 'figlio di puttana']):
            s = 5
            c = 5
        if any(kw in comment for kw in ['penis', 'dick', 'cock']):
            s = max(s, 4)
        if any(kw in comment for kw in ['vagina', 'pussy', 'vulva']):
            s = max(s, 4)
        if any(kw in comment for kw in ['testicle', 'balls', 'scrotum']):
            s = max(s, 4)
        if any(kw in comment for kw in ['ass', 'butt', 'anus', 'rectum']):
            s = max(s, 3)
        if any(kw in comment for kw in ['breast', 'boob', 'tit']):
            s = max(s, 4)
        if any(kw in comment for kw in ['idiot', 'fool', 'stupid', 'dumb', 'moron']):
            s = 1
            c = 4
        if any(kw in comment for kw in ['bastard']):
            s = 3
            c = 4
        if any(kw in comment for kw in ['damn', 'hell', 'curse']):
            if 'mild' in comment or 'common' in comment:
                s = 2
                c = 3
        if any(kw in comment for kw in ['nazi', 'fascist', 'hitler']):
            s = 5
            c = 5
        if any(kw in comment for kw in ['masturbat', 'jerk off', 'jack off']):
            s = 4
            c = 4
        if any(kw in comment for kw in ['oral sex', 'blowjob', 'blow job', 'fellatio']):
            s = 4
            c = 5
        if any(kw in comment for kw in ['intercourse', 'sex act', 'sexual act']):
            s = 4
            c = 4
        if any(kw in comment for kw in ['ugly', 'fat', 'coward', 'weakling', 'loser']):
            s = 1
            c = 4
        if any(kw in comment for kw in ['drunkard', 'drunk']):
            s = 1
            c = 3
        if any(kw in comment for kw in ['slang', 'informal', 'casual']):
            if s > 2:
                pass  # don't downgrade if already high from other rules
            else:
                c = min(c, 3)

    # ============================================
    # OBFUSCATION OVERRIDE (always c:5)
    # ============================================
    if obfuscated:
        c = 5

    # Clamp values
    s = max(1, min(5, s))
    c = max(1, min(5, c))

    return s, c


def main():
    print("Reading source file...")
    entries = extract_entries(SOURCE_FILE)
    print(f"Extracted {len(entries)} word entries")

    # Score all entries
    scored = {}
    lang_counts = {}
    for entry in entries:
        s, c = score_word(entry)
        scored[entry['word']] = {"s": s, "c": c}
        lang = entry['language']
        lang_counts[lang] = lang_counts.get(lang, 0) + 1

    print(f"\nLanguage distribution:")
    for lang, count in sorted(lang_counts.items(), key=lambda x: -x[1]):
        print(f"  {lang}: {count} words")

    # Score distribution
    print(f"\nSeverity distribution:")
    for sv in range(1, 6):
        count = sum(1 for v in scored.values() if v['s'] == sv)
        print(f"  s:{sv} = {count}")

    print(f"\nCertainty distribution:")
    for cv in range(1, 6):
        count = sum(1 for v in scored.values() if v['c'] == cv)
        print(f"  c:{cv} = {count}")

    # Tier distribution
    flag_count = 0
    allow_count = 0
    for v in scored.values():
        sv, cv = v['s'], v['c']
        if sv == 5 or (sv >= 4 and cv >= 2) or (sv == 3 and cv >= 3):
            flag_count += 1
        else:
            allow_count += 1
    print(f"\nTier distribution:")
    print(f"  Flag: {flag_count}")
    print(f"  Allow: {allow_count}")

    # Write output
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(scored, f, ensure_ascii=False, indent=2)

    print(f"\nWrote {len(scored)} scored entries to {OUTPUT_FILE}")


if __name__ == '__main__':
    main()
