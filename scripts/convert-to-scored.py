#!/usr/bin/env python3
"""
Convert english-primary-all-languages.ts from string[] to Record<string, {s: number, c: number}>
using scores from all-words-scored.json.

Preserves comments and section headers.
"""

import re
import json
import os

SOURCE_FILE = os.path.join(os.path.dirname(__file__), '..', 'src', 'languages', 'english-primary-all-languages.ts')
SCORES_FILE = os.path.join(os.path.dirname(__file__), '..', 'src', 'languages', 'scored', 'all-words-scored.json')
OUTPUT_FILE = SOURCE_FILE  # overwrite in place

# Load scores
with open(SCORES_FILE, 'r', encoding='utf-8') as f:
    scores = json.load(f)

print(f"Loaded {len(scores)} scored entries")

# Read source file
with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

output_lines = []
converted = 0
missing = 0

for i, line in enumerate(lines):
    stripped = line.strip()

    # Replace the type declaration
    if stripped.startswith('const allLanguagesBadWords: string[]'):
        output_lines.append(line.replace(
            'const allLanguagesBadWords: string[]',
            'const allLanguagesBadWords: Record<string, { s: number; c: number }>'
        ))
        continue

    if stripped.startswith('const allLanguagesBadWords ='):
        output_lines.append(line.replace(
            'const allLanguagesBadWords = [',
            'const allLanguagesBadWords: Record<string, { s: number; c: number }> = {'
        ).replace(
            'const allLanguagesBadWords: string[] = [',
            'const allLanguagesBadWords: Record<string, { s: number; c: number }> = {'
        ))
        continue

    # Match the opening array bracket line
    if 'const allLanguagesBadWords' in stripped:
        # Handle multi-format declarations
        new_line = line.replace('string[]', 'Record<string, { s: number; c: number }>')
        new_line = new_line.replace('= [', '= {')
        output_lines.append(new_line)
        continue

    # Replace closing bracket
    if stripped == '];':
        output_lines.append(line.replace('];', '};'))
        continue

    # Handle word entries: "word", // comment  →  "word": { s: X, c: Y }, // comment
    # Also handle concatenated strings: "H.u" + "re", // comment
    if stripped.startswith('"'):
        # Extract all quoted parts (handles concatenation)
        parts = re.findall(r'"([^"]*)"', stripped)
        if parts:
            word = ''.join(parts)

            # Get score
            score = scores.get(word)
            if score:
                s_val = score['s']
                c_val = score['c']
                converted += 1
            else:
                # Default fallback
                s_val = 3
                c_val = 4
                missing += 1

            # Extract comment if any
            comment_match = re.search(r'//\s*(.*)', stripped)
            comment = f" // {comment_match.group(1)}" if comment_match else ""

            # Get indentation
            indent = len(line) - len(line.lstrip())
            indent_str = line[:indent]

            # Build the new line - use the original quoted form for concatenated strings
            if '+' in stripped and len(parts) > 1:
                # Reconstruct concatenated key
                key_parts = ' + '.join(f'"{p}"' for p in parts)
                output_lines.append(f'{indent_str}[{key_parts}]: {{ s: {s_val}, c: {c_val} }},{comment}\n')
            else:
                output_lines.append(f'{indent_str}"{word}": {{ s: {s_val}, c: {c_val} }},{comment}\n')
            continue

    # Pass through everything else (comments, blank lines, etc.)
    output_lines.append(line)

# Write output
with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.writelines(output_lines)

print(f"Converted {converted} entries, {missing} missing scores (defaulted to s:3/c:4)")
print(f"Written to {OUTPUT_FILE}")
