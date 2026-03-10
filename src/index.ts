// Language dictionaries imports
import englishBadWords from "./languages/english-words.ts";
import hindiBadWords from "./languages/hindi-words.ts";
import frenchBadWords from "./languages/french-words.ts";
import germanBadWords from "./languages/german-words.ts";
import spanishBadWords from "./languages/spanish-words.ts";
import bengaliBadWords from "./languages/bengali-words.ts";
import tamilBadWords from "./languages/tamil-words.ts";
import teluguBadWords from "./languages/telugu-words.ts";
import brazilianBadWords from "./languages/brazilian-words.ts";

// Advanced algorithm imports
import { AhoCorasick, Match as AhoMatch } from "./algos/aho-corasick.ts";
import { BloomFilter } from "./algos/bloom-filter.ts";
import { ContextAnalyzer, ContextPatternMatcher } from "./algos/context-patterns.ts";

// Export language dictionaries for direct access
export { default as englishBadWords } from "./languages/english-words.ts";
export { default as hindiBadWords } from "./languages/hindi-words.ts";
export { default as frenchBadWords } from "./languages/french-words.ts";
export { default as germanBadWords } from "./languages/german-words.ts";
export { default as spanishBadWords } from "./languages/spanish-words.ts";
export { default as bengaliBadWords } from "./languages/bengali-words.ts";
export { default as tamilBadWords } from "./languages/tamil-words.ts";
export { default as teluguBadWords } from "./languages/telugu-words.ts";
export { default as brazilianBadWords } from "./languages/brazilian-words.ts";

/**
 * Logger interface for AllProfanity library logging operations.
 *
 * @interface Logger
 * @description Provides a contract for logging implementations used by the AllProfanity library.
 * Implement this interface to provide custom logging behavior (e.g., logging to files, external services).
 *
 * @example
 * ```typescript
 * class CustomLogger implements Logger {
 *   info(message: string): void {
 *     // Custom info logging logic
 *   }
 *   warn(message: string): void {
 *     // Custom warning logging logic
 *   }
 *   error(message: string): void {
 *     // Custom error logging logic
 *   }
 * }
 * const filter = new AllProfanity({ logger: new CustomLogger() });
 * ```
 */
export interface Logger {
  /**
   * Log informational messages about normal operations.
   *
   * @param message - The informational message to log
   * @returns void
   */
  info(message: string): void;

  /**
   * Log warning messages about potential issues or deprecated usage.
   *
   * @param message - The warning message to log
   * @returns void
   */
  warn(message: string): void;

  /**
   * Log error messages about failures or critical issues.
   *
   * @param message - The error message to log
   * @returns void
   */
  error(message: string): void;
}

/**
 * Default console logger implementation for AllProfanity.
 *
 * @class ConsoleLogger
 * @implements {Logger}
 * @description Logs messages to the browser or Node.js console with an "[AllProfanity]" prefix.
 * This is the default logger used when no custom logger is provided.
 *
 * @internal
 */
class ConsoleLogger implements Logger {
  /**
   * Log informational messages to console.log with [AllProfanity] prefix.
   *
   * @param message - The message to log
   * @returns void
   */
  info(message: string): void {
    console.log(`[AllProfanity] ${message}`);
  }

  /**
   * Log warning messages to console.warn with [AllProfanity] prefix.
   *
   * @param message - The warning message to log
   * @returns void
   */
  warn(message: string): void {
    console.warn(`[AllProfanity] ${message}`);
  }

  /**
   * Log error messages to console.error with [AllProfanity] prefix.
   *
   * @param message - The error message to log
   * @returns void
   */
  error(message: string): void {
    console.error(`[AllProfanity] ${message}`);
  }
}

/**
 * Silent logger implementation that suppresses all log output.
 *
 * @class SilentLogger
 * @implements {Logger}
 * @description A no-op logger that discards all log messages. Used when `silent: true` is set
 * in AllProfanityOptions, or when you want to completely disable logging.
 *
 * @internal
 */
class SilentLogger implements Logger {
  /**
   * No-op implementation - messages are discarded.
   *
   * @param _message - The message (unused)
   * @returns void
   */
  info(_message: string): void {
    // Silent mode - no logging
  }

  /**
   * No-op implementation - warnings are discarded.
   *
   * @param _message - The warning message (unused)
   * @returns void
   */
  warn(_message: string): void {
    // Silent mode - no logging
  }

  /**
   * No-op implementation - errors are discarded.
   *
   * @param _message - The error message (unused)
   * @returns void
   */
  error(_message: string): void {
    // Silent mode - no logging
  }
}

/**
 * Configuration options for initializing an AllProfanity instance.
 *
 * @interface AllProfanityOptions
 * @description Comprehensive configuration object for customizing profanity detection behavior,
 * algorithm selection, performance optimizations, and logging.
 *
 * @example
 * ```typescript
 * const filter = new AllProfanity({
 *   languages: ['english', 'french'],
 *   enableLeetSpeak: true,
 *   strictMode: true,
 *   algorithm: {
 *     matching: 'hybrid',
 *     useBloomFilter: true
 *   },
 *   performance: {
 *     enableCaching: true,
 *     cacheSize: 500
 *   }
 * });
 * ```
 */
export interface AllProfanityOptions {
  /**
   * Array of language keys to load (e.g., 'english', 'hindi', 'french').
   * Available languages: english, hindi, french, german, spanish, bengali, tamil, telugu, brazilian.
   *
   * @default ['english', 'hindi'] (loaded by default in constructor)
   */
  languages?: string[];

  /**
   * Custom dictionaries to load in addition to built-in languages.
   * Key is the dictionary name, value is an array of words.
   *
   * @example
   * ```typescript
   * customDictionaries: {
   *   'gaming': ['noob', 'trash'],
   *   'custom': ['word1', 'word2']
   * }
   * ```
   */
  customDictionaries?: Record<string, string[]>;

  /**
   * Single character to use as replacement placeholder for profane characters.
   *
   * @default "*"
   */
  defaultPlaceholder?: string;

  /**
   * Enable detection and normalization of leet speak variations (e.g., "h3ll0" -> "hello").
   *
   * @default true
   */
  enableLeetSpeak?: boolean;

  /**
   * Enable case-sensitive matching. When false, all matching is done in lowercase.
   *
   * @default false
   */
  caseSensitive?: boolean;

  /**
   * Array of words to whitelist (never flag as profanity even if in dictionaries).
   *
   * @example ['hello', 'class', 'assignment']
   */
  whitelistWords?: string[];

  /**
   * Strict mode requires profanity to be surrounded by word boundaries (spaces, punctuation).
   * When false, profanity embedded in other words may be detected.
   *
   * @default false
   */
  strictMode?: boolean;

  /**
   * Allow detection of profanity as partial matches within larger words.
   * When true, "badword" will be detected in "mybadwordhere".
   *
   * @default false
   */
  detectPartialWords?: boolean;

  /**
   * Custom logger implementation for handling log messages.
   * If not provided, defaults to ConsoleLogger unless silent mode is enabled.
   */
  logger?: Logger;

  /**
   * Silent mode suppresses all logging output.
   * When true, uses SilentLogger to discard all log messages.
   *
   * @default false
   */
  silent?: boolean;

  /**
   * Advanced algorithm configuration for pattern matching strategies.
   */
  algorithm?: {
    /**
     * Primary matching algorithm to use.
     * - 'trie': Fast prefix tree matching (default, best for most use cases)
     * - 'aho-corasick': Multi-pattern matching (best for large dictionaries)
     * - 'hybrid': Combines Aho-Corasick with Bloom Filter (best for extreme performance)
     *
     * @default "trie"
     */
    matching?: "trie" | "aho-corasick" | "hybrid";

    /**
     * Enable Aho-Corasick automaton for multi-pattern matching.
     * Automatically enabled when matching is set to 'aho-corasick' or 'hybrid'.
     *
     * @default false
     */
    useAhoCorasick?: boolean;

    /**
     * Enable Bloom Filter for probabilistic quick rejection of non-profane text.
     * Automatically enabled when matching is set to 'hybrid'.
     *
     * @default false
     */
    useBloomFilter?: boolean;

    /**
     * Enable context analysis to reduce false positives based on surrounding words.
     *
     * @default false
     */
    useContextAnalysis?: boolean;
  };

  /**
   * Bloom Filter configuration for probabilistic matching optimization.
   */
  bloomFilter?: {
    /**
     * Enable Bloom Filter.
     *
     * @default false
     */
    enabled?: boolean;

    /**
     * Expected number of items to be stored in the Bloom Filter.
     * Higher values increase memory usage but reduce false positive rate.
     *
     * @default 10000
     */
    expectedItems?: number;

    /**
     * Target false positive rate (probability of incorrectly identifying non-profanity as profanity).
     * Lower values increase memory usage but improve accuracy.
     *
     * @default 0.01 (1%)
     */
    falsePositiveRate?: number;
  };

  /**
   * Aho-Corasick automaton configuration for multi-pattern matching.
   */
  ahoCorasick?: {
    /**
     * Enable Aho-Corasick automaton.
     *
     * @default false
     */
    enabled?: boolean;

    /**
     * Pre-build the automaton during initialization.
     * When false, automaton is built lazily on first use.
     *
     * @default false
     */
    prebuild?: boolean;
  };

  /**
   * Context analysis configuration for reducing false positives.
   */
  contextAnalysis?: {
    /**
     * Enable context-aware profanity detection.
     *
     * @default false
     */
    enabled?: boolean;

    /**
     * Number of words before and after the detected word to analyze for context.
     *
     * @default 5
     */
    contextWindow?: number;

    /**
     * Languages to use for context analysis (e.g., ['en', 'es']).
     *
     * @default ['en']
     */
    languages?: string[];

    /**
     * Minimum confidence score (0-1) required to flag as profanity.
     * Higher values reduce false positives but may miss some profanity.
     *
     * @default 0.5
     */
    scoreThreshold?: number;
  };

  /**
   * Performance optimization configuration.
   */
  performance?: {
    /**
     * Maximum number of results to cache in LRU cache.
     *
     * @default 1000
     */
    cacheSize?: number;

    /**
     * Enable result caching to speed up repeated queries.
     * Stores detection results for previously seen text.
     *
     * @default false
     */
    enableCaching?: boolean;
  };
}

/**
 * Severity levels for profanity detection results.
 *
 * @enum {number}
 * @description Categorizes the severity of detected profanity based on the number
 * of unique words and total matches found in the text.
 *
 * @readonly
 * @example
 * ```typescript
 * const result = filter.detect("some text");
 * if (result.severity === ProfanitySeverity.EXTREME) {
 *   // Handle extreme profanity
 * }
 * ```
 */
export enum ProfanitySeverity {
  /** Mild profanity: 1 unique word or 1 total match */
  MILD = 1,

  /** Moderate profanity: 2 unique words or 2 total matches */
  MODERATE = 2,

  /** Severe profanity: 3 unique words or 3 total matches */
  SEVERE = 3,

  /** Extreme profanity: 4+ unique words or 5+ total matches */
  EXTREME = 4,
}

/**
 * Result object returned from profanity detection operations.
 *
 * @interface ProfanityDetectionResult
 * @description Contains comprehensive information about detected profanity including
 * what was found, where it was found, how severe it is, and a cleaned version of the text.
 *
 * @example
 * ```typescript
 * const result = filter.detect("This is a bad word");
 * console.log(result.hasProfanity); // true
 * console.log(result.detectedWords); // ['bad word']
 * console.log(result.cleanedText); // 'This is a *** ****'
 * console.log(result.severity); // ProfanitySeverity.MILD
 * console.log(result.positions); // [{ word: 'bad word', start: 10, end: 18 }]
 * ```
 */
export interface ProfanityDetectionResult {
  /**
   * Whether any profanity was detected in the text.
   *
   * @type {boolean}
   */
  hasProfanity: boolean;

  /**
   * Array of detected profane words/phrases as they appeared in the original text.
   * Includes case and formatting from the original text.
   *
   * @type {string[]}
   */
  detectedWords: string[];

  /**
   * The text with all profanity replaced by placeholder characters.
   * Each profane character is replaced with the configured placeholder (default: '*').
   *
   * @type {string}
   */
  cleanedText: string;

  /**
   * Severity level of detected profanity.
   *
   * @type {ProfanitySeverity}
   */
  severity: ProfanitySeverity;

  /**
   * Precise positions of each detected profane word in the original text.
   * Useful for highlighting or further processing.
   *
   * @type {Array<{ word: string; start: number; end: number }>}
   */
  positions: Array<{ word: string; start: number; end: number }>;
}

/**
 * Internal match result structure for efficient profanity matching and processing.
 *
 * @interface MatchResult
 * @description Used internally during the matching phase to track both the dictionary
 * word that was matched and the actual text that was found.
 *
 * @internal
 */
interface MatchResult {
  /** The dictionary word that was matched (normalized) */
  word: string;

  /** Start index of the match in the original text (0-based, inclusive) */
  start: number;

  /** End index of the match in the original text (0-based, exclusive) */
  end: number;

  /** The actual matched text from the original input (preserves case and formatting) */
  originalWord: string;
}

/**
 * Validates that an input is a non-empty string.
 *
 * @function validateString
 * @param {unknown} input - The value to validate
 * @param {string} paramName - Name of the parameter being validated (used in error messages)
 * @returns {string} The validated string
 * @throws {TypeError} If input is not a string
 *
 * @internal
 *
 * @example
 * ```typescript
 * const text = validateString(userInput, 'text');
 * // Returns userInput if it's a string, throws TypeError otherwise
 * ```
 */
function validateString(input: unknown, paramName: string): string {
  if (typeof input !== "string") {
    throw new TypeError(`${paramName} must be a string, got ${typeof input}`);
  }
  return input;
}

/**
 * Validates and filters a string array, removing non-string and empty items.
 *
 * @function validateStringArray
 * @param {unknown} input - The value to validate (expected to be an array)
 * @param {string} paramName - Name of the parameter being validated (used in error/warning messages)
 * @returns {string[]} Array of valid, non-empty strings
 * @throws {TypeError} If input is not an array
 *
 * @internal
 *
 * @example
 * ```typescript
 * const words = validateStringArray(['word1', '', 123, 'word2'], 'words');
 * // Returns: ['word1', 'word2']
 * // Logs warning: "Skipping non-string item in words: 123"
 * ```
 */
function validateStringArray(input: unknown, paramName: string): string[] {
  if (!Array.isArray(input)) {
    throw new TypeError(`${paramName} must be an array`);
  }
  return input.filter((item): item is string => {
    if (typeof item !== "string") {
      console.warn(`Skipping non-string item in ${paramName}: ${item}`);
      return false;
    }
    return item.trim().length > 0;
  });
}

/**
 * Trie (prefix tree) node for efficient pattern matching and word storage.
 *
 * @class TrieNode
 * @description Implements a trie data structure for O(m) time complexity word matching,
 * where m is the length of the word being searched. Each node represents a character
 * in the word, and paths from root to nodes with isEndOfWord=true represent complete words.
 *
 * @internal
 *
 * @example
 * ```typescript
 * const trie = new TrieNode();
 * trie.addWord('bad');
 * trie.addWord('badword');
 * const matches = trie.findMatches('badwords here', 0, false);
 * // Returns matches for 'bad' and 'badword'
 * ```
 */
class TrieNode {
  /** Map of characters to child nodes for fast lookups */
  private children: Map<string, TrieNode> = new Map();

  /** Flag indicating if this node represents the end of a complete word */
  private isEndOfWord: boolean = false;

  /** The complete word ending at this node (only set when isEndOfWord is true) */
  private word: string = "";

  /**
   * Adds a word to the trie structure.
   *
   * @param {string} word - The word to add to the trie
   * @returns {void}
   *
   * @remarks
   * - Time Complexity: O(m) where m is the length of the word
   * - Space Complexity: O(m) in worst case when all characters are new
   * - Supports any Unicode characters
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('hello');
   * trie.addWord('world');
   * ```
   */
  addWord(word: string): void {
    let current: TrieNode = this;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      const nextNode = current.children.get(char);
      if (nextNode) {
        current = nextNode;
      }
    }
    current.isEndOfWord = true;
    current.word = word;
  }

  /**
   * Removes a word from the trie structure.
   *
   * @param {string} word - The word to remove from the trie
   * @returns {boolean} True if the word existed and was removed, false if word was not found
   *
   * @remarks
   * - Time Complexity: O(m) where m is the length of the word
   * - Also removes unnecessary nodes to keep the trie optimized
   * - Only removes the word marking; shared prefixes with other words are preserved
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('hello');
   * trie.removeWord('hello'); // Returns: true
   * trie.removeWord('world'); // Returns: false (word not in trie)
   * ```
   */
  removeWord(word: string): boolean {
    return this.removeHelper(word, 0);
  }

  /**
   * Recursive helper method for removing a word from the trie.
   *
   * @param {string} word - The word being removed
   * @param {number} index - Current character index in the word
   * @returns {boolean} True if this node should be deleted (has no children and is not end of another word)
   *
   * @internal
   */
  private removeHelper(word: string, index: number): boolean {
    if (index === word.length) {
      if (!this.isEndOfWord) return false;
      this.isEndOfWord = false;
      return this.children.size === 0;
    }

    const char = word[index];
    const node = this.children.get(char);

    if (!node) return false;

    const shouldDeleteChild = node.removeHelper(word, index + 1);

    if (shouldDeleteChild) {
      this.children.delete(char);
      return this.children.size === 0 && !this.isEndOfWord;
    }

    return false;
  }

  /**
   * Finds all word matches in text starting at a specific position.
   *
   * @param {string} text - The text to search for profanity
   * @param {number} startPos - The starting position (0-based index) in the text
   * @param {boolean} allowPartial - If true, finds partial matches within larger words
   * @returns {Array<{ word: string; start: number; end: number }>} Array of match objects with word and position info
   *
   * @remarks
   * - Time Complexity: O(k) where k is the length of the longest match from startPos
   * - Returns all valid words that can be formed starting from startPos
   * - When allowPartial is false, respects word boundaries
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('bad');
   * const matches = trie.findMatches('badword', 0, false);
   * // Returns: [{ word: 'bad', start: 0, end: 3 }]
   * ```
   */
  findMatches(
    text: string,
    startPos: number,
    allowPartial: boolean
  ): Array<{ word: string; start: number; end: number }> {
    const matches: Array<{ word: string; start: number; end: number }> = [];
    let current: TrieNode = this;
    let pos = startPos;

    while (pos < text.length) {
      const nextNode = current.children.get(text[pos]);
      if (!nextNode) break;
      current = nextNode;
      pos++;

      if (current.isEndOfWord) {
        if (!allowPartial) {
          const wordStart = startPos;
          const wordEnd = pos;

          matches.push({
            word: current.word,
            start: wordStart - startPos,
            end: wordEnd - startPos,
          });
        } else {
          matches.push({
            word: current.word,
            start: 0,
            end: pos - startPos,
          });
        }
      }
    }

    return matches;
  }

  /**
   * Clears all words from the trie, resetting it to empty state.
   *
   * @returns {void}
   *
   * @remarks
   * - Time Complexity: O(1) - clears the root node only (JavaScript GC handles children)
   * - Removes all stored words and resets the trie to initial state
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('hello');
   * trie.addWord('world');
   * trie.clear();
   * // Trie is now empty
   * ```
   */
  clear(): void {
    this.children.clear();
    this.isEndOfWord = false;
    this.word = "";
  }
}

/**
 * AllProfanity - Professional-grade multilingual profanity detection and filtering library.
 *
 * @class AllProfanity
 * @description A comprehensive, high-performance profanity filtering system supporting 9+ languages
 * with advanced features including leet speak detection, context analysis, multiple matching algorithms,
 * and customizable filtering options.
 *
 * @remarks
 * ### Features:
 * - **Multi-language Support**: English, Hindi, French, German, Spanish, Bengali, Tamil, Telugu, Brazilian Portuguese
 * - **Advanced Algorithms**: Trie, Aho-Corasick, Bloom Filter, and hybrid approaches
 * - **Leet Speak Detection**: Automatically normalizes and detects variations like "h3ll0"
 * - **Context Analysis**: Reduces false positives using surrounding word context
 * - **Performance**: Built-in caching and optimized data structures
 * - **Flexible**: Custom dictionaries, whitelisting, severity levels
 *
 * ### Default Behavior:
 * - Loads English and Hindi dictionaries by default
 * - Case-insensitive matching
 * - Leet speak detection enabled
 * - Uses Trie algorithm (fastest for most cases)
 *
 * @example
 * ```typescript
 * // Basic usage with default instance
 * import allProfanity from 'allprofanity';
 *
 * const result = allProfanity.detect("This is some bad text");
 * console.log(result.hasProfanity); // true
 * console.log(result.cleanedText); // "This is some *** text"
 * console.log(result.severity); // ProfanitySeverity.MILD
 * ```
 *
 * @example
 * ```typescript
 * // Advanced usage with custom configuration
 * import { AllProfanity, ProfanitySeverity } from 'allprofanity';
 *
 * const filter = new AllProfanity({
 *   languages: ['english', 'french', 'spanish'],
 *   enableLeetSpeak: true,
 *   strictMode: true,
 *   algorithm: {
 *     matching: 'hybrid',
 *     useBloomFilter: true
 *   },
 *   performance: {
 *     enableCaching: true,
 *     cacheSize: 500
 *   },
 *   whitelistWords: ['class', 'assignment']
 * });
 *
 * const text = "This text has some b@d w0rds";
 * const result = filter.detect(text);
 *
 * if (result.hasProfanity) {
 *   console.log(`Found ${result.detectedWords.length} profane words`);
 *   console.log(`Severity: ${ProfanitySeverity[result.severity]}`);
 *   console.log(`Cleaned: ${result.cleanedText}`);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Using individual methods
 * const filter = new AllProfanity();
 *
 * // Simple check
 * if (filter.check("some text")) {
 *   console.log("Contains profanity!");
 * }
 *
 * // Clean with custom placeholder
 * const cleaned = filter.clean("bad words here", "#");
 *
 * // Load additional languages
 * filter.loadLanguage('german');
 * filter.loadIndianLanguages(); // Loads hindi, bengali, tamil, telugu
 *
 * // Add custom words
 * filter.add(['customword1', 'customword2']);
 *
 * // Remove words
 * filter.remove(['someword']);
 *
 * // Whitelist words
 * filter.addToWhitelist(['class', 'assignment']);
 * ```
 *
 * @see {@link AllProfanityOptions} for all configuration options
 * @see {@link ProfanityDetectionResult} for detection result format
 * @see {@link ProfanitySeverity} for severity levels
 */
export class AllProfanity {
  private readonly profanityTrie: TrieNode = new TrieNode();
  private readonly whitelistSet: Set<string> = new Set();
  private readonly loadedLanguages: Set<string> = new Set();
  private readonly logger: Logger;

  private defaultPlaceholder: string = "*";
  private enableLeetSpeak: boolean = true;
  private caseSensitive: boolean = false;
  private strictMode: boolean = false;
  private detectPartialWords: boolean = false;

  private readonly availableLanguages: Record<string, string[]> = {
    english: englishBadWords || [],
    hindi: hindiBadWords || [],
    french: frenchBadWords || [],
    german: germanBadWords || [],
    spanish: spanishBadWords || [],
    bengali: bengaliBadWords || [],
    tamil: tamilBadWords || [],
    telugu: teluguBadWords || [],
    brazilian: brazilianBadWords || [],
  };

  private readonly leetMappings: Map<string, string> = new Map([
    ["@", "a"],
    ["^", "a"],
    ["4", "a"],
    ["8", "b"],
    ["6", "b"],
    ["|3", "b"],
    ["(", "c"],
    ["<", "c"],
    ["©", "c"],
    ["|)", "d"],
    ["0", "o"],
    ["3", "e"],
    ["€", "e"],
    ["|=", "f"],
    ["ph", "f"],
    ["9", "g"],
    ["#", "h"],
    ["|-|", "h"],
    ["1", "i"],
    ["!", "i"],
    ["|", "i"],
    ["_|", "j"],
    ["¿", "j"],
    ["|<", "k"],
    ["1<", "k"],
    ["7", "l"],
    ["|\\/|", "m"],
    ["/\\/\\", "m"],
    ["|\\|", "n"],
    ["//", "n"],
    ["()", "o"],
    ["|*", "p"],
    ["|o", "p"],
    ["(_,)", "q"],
    ["()_", "q"],
    ["|2", "r"],
    ["12", "r"],
    ["5", "s"],
    ["$", "s"],
    ["z", "s"],
    ["7", "t"],
    ["+", "t"],
    ["†", "t"],
    ["|_|", "u"],
    ["(_)", "u"],
    ["v", "u"],
    ["\\/", "v"],
    ["|/", "v"],
    ["\\/\\/", "w"],
    ["vv", "w"],
    ["><", "x"],
    ["}{", "x"],
    ["`/", "y"],
    ["j", "y"],
    ["2", "z"],
    ["7_", "z"],
  ]);

  private readonly dynamicWords: Set<string> = new Set();

  // Advanced algorithms
  private ahoCorasickAutomaton: AhoCorasick | null = null;
  private bloomFilter: BloomFilter | null = null;
  private contextAnalyzer: ContextAnalyzer | null = null;
  private matchingAlgorithm: "trie" | "aho-corasick" | "hybrid" = "trie";
  private resultCache: Map<string, ProfanityDetectionResult> | null = null;

  /**
   * Creates a new AllProfanity instance with the specified configuration.
   *
   * @constructor
   * @param {AllProfanityOptions} [options] - Configuration options for profanity detection behavior
   *
   * @remarks
   * ### Default Initialization:
   * - Loads English and Hindi dictionaries automatically
   * - Enables leet speak detection
   * - Case-insensitive matching
   * - Uses Trie algorithm for pattern matching
   *
   * ### Performance Considerations:
   * - Initial load time depends on number of languages loaded
   * - Aho-Corasick automaton (if enabled) is built during construction
   * - Bloom Filter (if enabled) is populated during construction
   *
   * @throws {TypeError} If invalid options are provided
   *
   * @example
   * ```typescript
   * // Default instance
   * const filter = new AllProfanity();
   *
   * // Custom configuration
   * const filter = new AllProfanity({
   *   languages: ['english', 'french'],
   *   strictMode: true,
   *   defaultPlaceholder: '#',
   *   algorithm: { matching: 'hybrid' }
   * });
   *
   * // Silent mode (no logging)
   * const filter = new AllProfanity({ silent: true });
   * ```
   *
   * @see {@link AllProfanityOptions} for all available configuration options
   */
  constructor(options?: AllProfanityOptions) {
    // Use silent logger if silent mode is enabled, otherwise use provided logger or console logger
    this.logger = options?.logger || (options?.silent ? new SilentLogger() : new ConsoleLogger());

    if (options?.defaultPlaceholder !== undefined) {
      this.setPlaceholder(options.defaultPlaceholder);
    }

    this.enableLeetSpeak = options?.enableLeetSpeak ?? true;
    this.caseSensitive = options?.caseSensitive ?? false;
    this.strictMode = options?.strictMode ?? false;
    this.detectPartialWords = options?.detectPartialWords ?? false;

    if (options?.whitelistWords) {
      this.addToWhitelist(options.whitelistWords);
    }

    // Initialize advanced algorithms BEFORE loading dictionaries
    // so that words can be added to all data structures
    this.initializeAdvancedAlgorithms(options);

    this.loadLanguage("english");
    this.loadLanguage("hindi");

    if (options?.languages?.length) {
      options.languages.forEach((lang) => this.loadLanguage(lang));
    }

    if (options?.customDictionaries) {
      Object.entries(options.customDictionaries).forEach(([name, words]) => {
        this.loadCustomDictionary(name, words);
      });
    }
  }

  /**
   * Initialize advanced algorithms based on configuration
   */
  private initializeAdvancedAlgorithms(options?: AllProfanityOptions): void {
    // Set matching algorithm
    if (options?.algorithm?.matching) {
      this.matchingAlgorithm = options.algorithm.matching;
    }

    // Initialize Bloom Filter if enabled
    const bloomEnabled =
      options?.algorithm?.useBloomFilter ||
      options?.bloomFilter?.enabled ||
      this.matchingAlgorithm === "hybrid";

    if (bloomEnabled) {
      const expectedItems = options?.bloomFilter?.expectedItems || 10000;
      const falsePositiveRate = options?.bloomFilter?.falsePositiveRate || 0.01;
      this.bloomFilter = new BloomFilter(expectedItems, falsePositiveRate);
      this.logger.info(
        `Bloom Filter initialized with ${expectedItems} expected items and ${(
          falsePositiveRate * 100
        ).toFixed(2)}% false positive rate`
      );
    }

    // Initialize Aho-Corasick if enabled
    const ahoEnabled =
      options?.algorithm?.useAhoCorasick ||
      options?.ahoCorasick?.enabled ||
      this.matchingAlgorithm === "aho-corasick" ||
      this.matchingAlgorithm === "hybrid";

    if (ahoEnabled) {
      this.ahoCorasickAutomaton = new AhoCorasick([]);
      this.logger.info("Aho-Corasick automaton initialized");
    }

    // Initialize Context Analyzer if enabled
    const contextEnabled =
      options?.algorithm?.useContextAnalysis ||
      options?.contextAnalysis?.enabled;

    if (contextEnabled) {
      const contextLanguages =
        options?.contextAnalysis?.languages || ["en"];
      this.contextAnalyzer = new ContextAnalyzer(contextLanguages);

      if (options?.contextAnalysis?.contextWindow) {
        this.contextAnalyzer.setContextWindow(
          options.contextAnalysis.contextWindow
        );
      }

      this.logger.info(
        `Context Analyzer initialized for languages: ${contextLanguages.join(", ")}`
      );
    }

    // Initialize result cache if enabled
    if (options?.performance?.enableCaching) {
      const cacheSize = options.performance.cacheSize || 1000;
      this.resultCache = new Map();
      this.logger.info(`Result caching enabled with size limit: ${cacheSize}`);
    }
  }

  /**
   * Normalize leet speak to regular characters.
   * @param text - The input text.
   * @returns Normalized text.
   */
  private normalizeLeetSpeak(text: string): string {
    if (!this.enableLeetSpeak) return text;

    let normalized = text.toLowerCase();
    const sortedMappings = Array.from(this.leetMappings.entries()).sort(
      ([leetA], [leetB]) => leetB.length - leetA.length
    );
    for (const [leet, normal] of sortedMappings) {
      const regex = new RegExp(this.escapeRegex(leet), "g");
      normalized = normalized.replace(regex, normal);
    }
    return normalized;
  }

  /**
   * Escape regex special characters in a string.
   * @param str - The string to escape.
   * @returns The escaped string.
   */
  private escapeRegex(str: string): string {
    return str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  }

  /**
   * Check if a match is bounded by word boundaries (strict mode).
   * @param text - The text.
   * @param start - Start index.
   * @param end - End index.
   * @returns True if match is at word boundaries, false otherwise.
   */
  private hasWordBoundaries(text: string, start: number, end: number): boolean {
    if (!this.strictMode) return true;
    const beforeChar = start > 0 ? text[start - 1] : " ";
    const afterChar = end < text.length ? text[end] : " ";
    const wordBoundaryRegex = /[\s\p{P}\p{S}]/u;
    return (
      wordBoundaryRegex.test(beforeChar) && wordBoundaryRegex.test(afterChar)
    );
  }

  /**
   * Determine if a match is a whole word.
   * @param text - The text.
   * @param start - Start index.
   * @param end - End index.
   * @returns True if whole word, false otherwise.
   */
  private isWholeWord(text: string, start: number, end: number): boolean {
    if (start !== 0 && /\w/.test(text[start - 1])) return false;
    if (end !== text.length && /\w/.test(text[end])) return false;
    return true;
  }

  /**
   * Check if a match is whitelisted.
   * @param word - Word from dictionary.
   * @param matchedText - Actual matched text.
   * @returns True if whitelisted, false otherwise.
   */
  private isWhitelistedMatch(word: string, matchedText: string): boolean {
    if (this.caseSensitive) {
      return this.whitelistSet.has(word) || this.whitelistSet.has(matchedText);
    } else {
      return (
        this.whitelistSet.has(word.toLowerCase()) ||
        this.whitelistSet.has(matchedText.toLowerCase())
      );
    }
  }

  /**
   * Remove overlapping matches, keeping only the longest at each start position.
   * @param matches - Array of match results.
   * @returns Deduplicated matches.
   */
  private deduplicateMatches(matches: MatchResult[]): MatchResult[] {
    const sorted = [...matches].sort((a, b) => {
      if (a.start !== b.start) return a.start - b.start;
      return b.end - a.end;
    });
    const result: MatchResult[] = [];
    let lastEnd = -1;
    for (const match of sorted) {
      if (match.start >= lastEnd) {
        result.push(match);
        lastEnd = match.end;
      }
    }
    return result;
  }

  /**
   * Use Aho-Corasick algorithm for pattern matching
   */
  private findMatchesWithAhoCorasick(
    searchText: string,
    originalText: string
  ): MatchResult[] {
    if (!this.ahoCorasickAutomaton) {
      return [];
    }

    const ahoMatches = this.ahoCorasickAutomaton.findAll(searchText);
    const results: MatchResult[] = [];

    for (const match of ahoMatches) {
      if (
        !this.detectPartialWords &&
        !this.isWholeWord(originalText, match.start, match.end)
      ) {
        continue;
      }

      const matchedText = originalText.substring(match.start, match.end);
      if (this.isWhitelistedMatch(match.pattern, matchedText)) {
        continue;
      }

      if (this.hasWordBoundaries(originalText, match.start, match.end)) {
        results.push({
          word: match.pattern,
          start: match.start,
          end: match.end,
          originalWord: matchedText,
        });
      }
    }

    return results;
  }

  /**
   * Hybrid approach: Aho-Corasick for fast matching, Bloom Filter for validation
   */
  private findMatchesHybrid(
    searchText: string,
    originalText: string
  ): MatchResult[] {
    // Use Aho-Corasick for primary matching if available
    if (this.ahoCorasickAutomaton) {
      const matches = this.findMatchesWithAhoCorasick(searchText, originalText);

      // If Bloom Filter is enabled, validate matches
      if (this.bloomFilter) {
        return matches.filter((match) =>
          this.bloomFilter!.mightContain(match.word)
        );
      }

      return matches;
    }

    // Fallback to Trie if Aho-Corasick not available
    const matches: MatchResult[] = [];
    this.findMatches(searchText, originalText, matches);

    // Validate with Bloom Filter if enabled
    if (this.bloomFilter) {
      return matches.filter((match) =>
        this.bloomFilter!.mightContain(match.word)
      );
    }

    return matches;
  }

  /**
   * Apply context analysis to filter false positives
   */
  private applyContextAnalysis(
    text: string,
    matches: MatchResult[],
    scoreThreshold: number = 0.5
  ): MatchResult[] {
    if (!this.contextAnalyzer) {
      return matches;
    }

    return matches.filter((match) => {
      const analysis = this.contextAnalyzer!.analyzeContext(
        text,
        match.start,
        match.end,
        match.word
      );

      // If score is above threshold, it's likely profanity
      return analysis.score >= scoreThreshold;
    });
  }

  /**
   * Detects profanity in the provided text and returns comprehensive analysis.
   *
   * @param {string} text - The text to analyze for profanity
   * @returns {ProfanityDetectionResult} Detailed detection result including matches, positions, severity, and cleaned text
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * ### Performance:
   * - Time Complexity: O(n*m) where n is text length, m is average word length in dictionary
   * - With Bloom Filter: O(n) average case (faster early rejection)
   * - With Caching: O(1) for repeated identical text
   *
   * ### Features:
   * - Detects leet speak variations (if enabled): "h3ll0" → "hello"
   * - Respects word boundaries (strict mode) or detects partial matches
   * - Returns exact positions for highlighting/masking
   * - Calculates severity based on match count and uniqueness
   *
   * ### Caching:
   * - Results are cached if `performance.enableCaching` is true
   * - Cache uses LRU eviction when size limit is reached
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   * const result = filter.detect("This has bad words");
   *
   * console.log(result.hasProfanity); // true
   * console.log(result.detectedWords); // ['bad']
   * console.log(result.cleanedText); // 'This has *** words'
   * console.log(result.severity); // ProfanitySeverity.MILD
   * console.log(result.positions); // [{ word: 'bad', start: 9, end: 12 }]
   * ```
   *
   * @example
   * ```typescript
   * // With leet speak detection
   * const filter = new AllProfanity({ enableLeetSpeak: true });
   * const result = filter.detect("st0p b3ing b@d");
   *
   * if (result.hasProfanity) {
   *   result.positions.forEach(pos => {
   *     console.log(`Found "${pos.word}" at position ${pos.start}-${pos.end}`);
   *   });
   * }
   * ```
   *
   * @see {@link ProfanityDetectionResult} for result structure
   * @see {@link ProfanitySeverity} for severity levels
   */
  detect(text: string): ProfanityDetectionResult {
    const validatedText = validateString(text, "text");
    if (validatedText.length === 0) {
      return {
        hasProfanity: false,
        detectedWords: [],
        cleanedText: validatedText,
        severity: ProfanitySeverity.MILD,
        positions: [],
      };
    }

    // Check cache first if enabled
    if (this.resultCache?.has(validatedText)) {
      return this.resultCache.get(validatedText)!;
    }

    let matches: MatchResult[] = [];
    const normalizedText = this.caseSensitive
      ? validatedText
      : validatedText.toLowerCase();

    // Choose matching algorithm based on configuration
    switch (this.matchingAlgorithm) {
      case "aho-corasick":
        matches = this.findMatchesWithAhoCorasick(normalizedText, validatedText);
        if (this.enableLeetSpeak) {
          const leetNormalized = this.normalizeLeetSpeak(normalizedText);
          if (leetNormalized !== normalizedText) {
            const leetMatches = this.findMatchesWithAhoCorasick(
              leetNormalized,
              validatedText
            );
            matches.push(...leetMatches);
          }
        }
        break;

      case "hybrid":
        matches = this.findMatchesHybrid(normalizedText, validatedText);
        if (this.enableLeetSpeak) {
          const leetNormalized = this.normalizeLeetSpeak(normalizedText);
          if (leetNormalized !== normalizedText) {
            const leetMatches = this.findMatchesHybrid(
              leetNormalized,
              validatedText
            );
            matches.push(...leetMatches);
          }
        }
        break;

      case "trie":
      default:
        this.findMatches(normalizedText, validatedText, matches);
        if (this.enableLeetSpeak) {
          const leetNormalized = this.normalizeLeetSpeak(normalizedText);
          if (leetNormalized !== normalizedText) {
            this.findMatches(leetNormalized, validatedText, matches);
          }
        }
        break;
    }

    // Apply context analysis if enabled
    if (this.contextAnalyzer) {
      matches = this.applyContextAnalysis(validatedText, matches);
    }

    const uniqueMatches = this.deduplicateMatches(matches);
    const detectedWords = uniqueMatches.map((m) => m.originalWord);
    const severity = this.calculateSeverity(uniqueMatches);
    const cleanedText = this.generateCleanedText(validatedText, uniqueMatches);

    const result: ProfanityDetectionResult = {
      hasProfanity: uniqueMatches.length > 0,
      detectedWords,
      cleanedText,
      severity,
      positions: uniqueMatches.map((m) => ({
        word: m.originalWord,
        start: m.start,
        end: m.end,
      })),
    };

    // Cache result if caching is enabled
    if (this.resultCache) {
      this.resultCache.set(validatedText, result);
      // Implement simple LRU by clearing cache when it gets too large
      if (this.resultCache.size > 1000) {
        const firstKey = this.resultCache.keys().next().value;
        if (firstKey !== undefined) {
          this.resultCache.delete(firstKey);
        }
      }
    }

    return result;
  }

  /**
   * Main matching function, with whole-word logic.
   * @param searchText - The normalized text to search.
   * @param originalText - The original text.
   * @param matches - Array to collect matches.
   */
  private findMatches(
    searchText: string,
    originalText: string,
    matches: MatchResult[]
  ): void {
    for (let i = 0; i < searchText.length; i++) {
      const matchResults = this.profanityTrie.findMatches(
        searchText,
        i,
        this.detectPartialWords
      );
      for (const match of matchResults) {
        const start = i + match.start;
        const end = i + match.end;
        if (
          !this.detectPartialWords &&
          !this.isWholeWord(originalText, start, end)
        ) {
          continue;
        }
        const matchedText = originalText.substring(start, end);
        if (this.isWhitelistedMatch(match.word, matchedText)) {
          continue;
        }
        if (this.hasWordBoundaries(originalText, start, end)) {
          matches.push({
            word: match.word,
            start,
            end,
            originalWord: matchedText,
          });
        }
      }
    }
  }

  /**
   * Generate cleaned text by replacing profane words.
   * @param originalText - The original text.
   * @param matches - Array of matches.
   * @returns Cleaned text.
   */
  private generateCleanedText(
    originalText: string,
    matches: MatchResult[]
  ): string {
    if (matches.length === 0) return originalText;

    let result = originalText;
    const sortedMatches = [...this.deduplicateMatches(matches)].sort(
      (a, b) => b.start - a.start
    );

    for (const match of sortedMatches) {
      const replacement = this.defaultPlaceholder.repeat(
        match.originalWord.length
      );
      result =
        result.substring(0, match.start) +
        replacement +
        result.substring(match.end);
    }

    return result;
  }

  /**
   * Quick boolean check for profanity presence in text.
   *
   * @param {string} text - The text to check for profanity
   * @returns {boolean} True if profanity is detected, false otherwise
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * - Convenience method that internally calls `detect()` and returns only the boolean result
   * - For detailed information about matches, use `detect()` instead
   * - Results are cached if caching is enabled (same cache as `detect()`)
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   *
   * if (filter.check("This has bad words")) {
   *   console.log("Profanity detected!");
   * }
   *
   * // Quick validation
   * const isClean = !filter.check(userInput);
   * ```
   *
   * @see {@link detect} for detailed profanity analysis
   */
  check(text: string): boolean {
    return this.detect(text).hasProfanity;
  }

  /**
   * Cleans text by replacing profanity with a placeholder character.
   *
   * @param {string} text - The text to clean
   * @param {string} [placeholder] - Optional custom placeholder character (uses default if not provided)
   * @returns {string} The cleaned text with profanity replaced
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * ### Character-level Replacement:
   * - Each profane character is replaced individually
   * - "bad" with placeholder "*" becomes "***"
   * - Preserves text length and structure
   *
   * ### Placeholder Behavior:
   * - If no placeholder provided, uses the instance's default placeholder
   * - If placeholder provided, uses only the first character
   * - Empty placeholder throws error
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   *
   * // Using default placeholder (*)
   * const cleaned = filter.clean("This has bad words");
   * console.log(cleaned); // "This has *** *****"
   *
   * // Using custom placeholder
   * const cleaned = filter.clean("This has bad words", "#");
   * console.log(cleaned); // "This has ### #####"
   * ```
   *
   * @example
   * ```typescript
   * // Clean user-generated content for display
   * const userComment = "Some inappropriate words here";
   * const safeComment = filter.clean(userComment);
   * displayComment(safeComment);
   * ```
   *
   * @see {@link cleanWithPlaceholder} for word-level replacement
   * @see {@link setPlaceholder} to change default placeholder
   */
  clean(text: string, placeholder?: string): string {
    const detection = this.detect(text);

    if (!placeholder || placeholder === this.defaultPlaceholder) {
      return detection.cleanedText;
    }

    let result = text;
    const sortedPositions = [
      ...this.deduplicateMatches(
        detection.positions.map((p) => ({
          word: p.word,
          start: p.start,
          end: p.end,
          originalWord: text.substring(p.start, p.end),
        }))
      ),
    ].sort((a, b) => b.start - a.start);

    for (const pos of sortedPositions) {
      const originalWord = text.substring(pos.start, pos.end);
      const replacement = placeholder.repeat(originalWord.length);
      result =
        result.substring(0, pos.start) +
        replacement +
        result.substring(pos.end);
    }

    return result;
  }

  /**
   * Cleans text by replacing each profane word with a single placeholder string (word-level replacement).
   *
   * @param {string} text - The text to clean
   * @param {string} [placeholder="***"] - The placeholder string to use for each profane word
   * @returns {string} The cleaned text with each profane word replaced by the placeholder
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * ### Word-level Replacement:
   * - Each profane word is replaced with the entire placeholder string (not character-by-character)
   * - "bad words" with placeholder "***" becomes "*** ***"
   * - Does NOT preserve original text length
   *
   * ### Difference from `clean()`:
   * - `clean()`: Character-level replacement - "bad" becomes "***" (preserves length)
   * - `cleanWithPlaceholder()`: Word-level replacement - "bad" becomes "***" (fixed placeholder)
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   *
   * // Default placeholder (***) const text = "This has bad words";
   * const cleaned = filter.cleanWithPlaceholder(text);
   * console.log(cleaned); // "This has *** ***"
   *
   * // Custom placeholder
   * const cleaned2 = filter.cleanWithPlaceholder(text, "[CENSORED]");
   * console.log(cleaned2); // "This has [CENSORED] [CENSORED]"
   * ```
   *
   * @example
   * ```typescript
   * // Censoring chat messages
   * const message = "You are a badword and stupid";
   * const censored = filter.cleanWithPlaceholder(message, "[***]");
   * // Result: "You are a [***] and [***]"
   * ```
   *
   * @see {@link clean} for character-level replacement
   */
  cleanWithPlaceholder(text: string, placeholder: string = "***"): string {
    const detection = this.detect(text);
    if (detection.positions.length === 0) return text;

    let result = text;
    const sortedPositions = [
      ...this.deduplicateMatches(
        detection.positions.map((p) => ({
          word: p.word,
          start: p.start,
          end: p.end,
          originalWord: text.substring(p.start, p.end),
        }))
      ),
    ].sort((a, b) => b.start - a.start);

    for (const pos of sortedPositions) {
      if (!this.isWholeWord(result, pos.start, pos.end)) continue;
      result =
        result.substring(0, pos.start) +
        placeholder +
        result.substring(pos.end);
    }

    return result;
  }

  /**
   * Dynamically adds one or more words to the profanity filter at runtime.
   *
   * @param {string | string[]} word - A single word or array of words to add to the filter
   * @returns {void}
   *
   * @remarks
   * ### Behavior:
   * - Words are added to all active data structures (Trie, Aho-Corasick, Bloom Filter)
   * - Automatically normalizes words based on caseSensitive setting
   * - Skips whitelisted words
   * - Validates and filters out non-string or empty values
   * - Changes take effect immediately for subsequent detect/check/clean calls
   *
   * ### Use Cases:
   * - Adding context-specific profanity
   * - Building dynamic word lists from user reports
   * - Customizing filters for specific communities/applications
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   *
   * // Add single word
   * filter.add('newbadword');
   *
   * // Add multiple words
   * filter.add(['word1', 'word2', 'word3']);
   *
   * // Now these words will be detected
   * filter.check('newbadword'); // true
   * ```
   *
   * @example
   * ```typescript
   * // Add game-specific slang dynamically
   * const filter = new AllProfanity();
   * const gamingSlang = ['noob', 'trash', 'tryhard'];
   * filter.add(gamingSlang);
   *
   * const message = "You're such a noob";
   * console.log(filter.check(message)); // true
   * ```
   *
   * @see {@link remove} to remove words
   * @see {@link loadCustomDictionary} for loading named dictionaries
   */
  add(word: string | string[]): void {
    const words = Array.isArray(word) ? word : [word];
    const validatedWords = validateStringArray(words, "words to add");
    for (const w of validatedWords) {
      this.dynamicWords.add(w);
      this.addWordToTrie(w);
    }
  }

  /**
   * Dynamically removes one or more words from the profanity filter at runtime.
   *
   * @param {string | string[]} word - A single word or array of words to remove from the filter
   * @returns {void}
   *
   * @remarks
   * ### Behavior:
   * - Removes words from all active data structures (Trie, dynamic words set)
   * - Normalizes words based on caseSensitive setting before removal
   * - Only removes dynamically added words, not words from loaded language dictionaries
   * - Changes take effect immediately for subsequent detect/check/clean calls
   *
   * ### Important Notes:
   * - Cannot remove words from built-in language dictionaries
   * - To exclude dictionary words, use `addToWhitelist()` instead
   * - Validates and filters out non-string or empty values
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   *
   * // Add then remove a word
   * filter.add('tempword');
   * filter.check('tempword'); // true
   *
   * filter.remove('tempword');
   * filter.check('tempword'); // false
   *
   * // Remove multiple words
   * filter.remove(['word1', 'word2']);
   * ```
   *
   * @example
   * ```typescript
   * // Managing custom word list
   * const filter = new AllProfanity();
   * filter.add(['custom1', 'custom2', 'custom3']);
   *
   * // Later, remove one that's no longer needed
   * filter.remove('custom2');
   * ```
   *
   * @see {@link add} to add words
   * @see {@link addToWhitelist} to exclude dictionary words without removing them
   */
  remove(word: string | string[]): void {
    const words = Array.isArray(word) ? word : [word];
    const validatedWords = validateStringArray(words, "words to remove");
    for (const w of validatedWords) {
      const normalizedWord = this.caseSensitive ? w : w.toLowerCase();
      this.profanityTrie.removeWord(normalizedWord);
      this.dynamicWords.delete(w);
    }
  }

  /**
   * Add words to the whitelist.
   * @param words - Words to whitelist.
   */
  addToWhitelist(words: string[]): void {
    const validatedWords = validateStringArray(words, "whitelist words");
    for (const word of validatedWords) {
      const normalizedWord = this.caseSensitive ? word : word.toLowerCase();
      this.whitelistSet.add(normalizedWord);
    }
  }

  /**
   * Remove words from the whitelist.
   * @param words - Words to remove from whitelist.
   */
  removeFromWhitelist(words: string[]): void {
    const validatedWords = validateStringArray(words, "whitelist words");
    for (const word of validatedWords) {
      const normalizedWord = this.caseSensitive ? word : word.toLowerCase();
      this.whitelistSet.delete(normalizedWord);
    }
  }

  /**
   * Check if a word is whitelisted.
   * @param word - The word to check.
   * @returns True if whitelisted, false otherwise.
   */
  private isWhitelisted(word: string): boolean {
    const normalizedWord = this.caseSensitive ? word : word.toLowerCase();
    return this.whitelistSet.has(normalizedWord);
  }

  /**
   * Loads a built-in language dictionary into the profanity filter.
   *
   * @param {string} language - The language key to load (case-insensitive)
   * @returns {boolean} True if language was loaded successfully, false if not found or already loaded
   *
   * @remarks
   * ### Available Languages:
   * - `'english'` - English profanity words
   * - `'hindi'` - Hindi profanity words
   * - `'french'` - French profanity words
   * - `'german'` - German profanity words
   * - `'spanish'` - Spanish profanity words
   * - `'bengali'` - Bengali profanity words
   * - `'tamil'` - Tamil profanity words
   * - `'telugu'` - Telugu profanity words
   * - `'brazilian'` - Brazilian Portuguese profanity words
   *
   * ### Behavior:
   * - Language keys are case-insensitive
   * - Loading is idempotent - calling multiple times for same language is safe
   * - Returns true if language loaded successfully or was already loaded
   * - Returns false if language not found
   * - Logs success/failure messages (unless silent mode enabled)
   * - Words are added to all active data structures
   *
   * ### Default Languages:
   * English and Hindi are loaded automatically in the constructor
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   *
   * // Load additional languages
   * filter.loadLanguage('french');
   * filter.loadLanguage('spanish');
   *
   * // Case-insensitive
   * filter.loadLanguage('GERMAN'); // Works
   *
   * // Check if loaded
   * console.log(filter.getLoadedLanguages()); // ['english', 'hindi', 'french', 'spanish', 'german']
   * ```
   *
   * @example
   * ```typescript
   * // Load all Indian languages at once
   * const filter = new AllProfanity();
   * filter.loadIndianLanguages();
   * ```
   *
   * @see {@link loadLanguages} to load multiple languages at once
   * @see {@link loadIndianLanguages} for convenience method
   * @see {@link getAvailableLanguages} to see all available languages
   * @see {@link getLoadedLanguages} to see currently loaded languages
   */
  loadLanguage(language: string): boolean {
    if (!language || typeof language !== "string") {
      this.logger.warn(`Invalid language parameter: ${language}`);
      return false;
    }

    const langKey = language.toLowerCase().trim();

    if (this.loadedLanguages.has(langKey)) {
      return true;
    }

    const words = this.availableLanguages[langKey];
    if (!words || words.length === 0) {
      this.logger.warn(`Language '${language}' not found or empty`);
      return false;
    }

    try {
      let addedCount = 0;
      for (const word of words) {
        if (this.addWordToTrie(word)) {
          addedCount++;
        }
      }

      this.loadedLanguages.add(langKey);
      this.logger.info(
        `Loaded ${addedCount} words from ${language} dictionary`
      );
      return true;
    } catch (error) {
      this.logger.error(`Failed to load language ${language}: ${error}`);
      return false;
    }
  }

  /**
   * Load multiple language dictionaries.
   * @param languages - Array of languages to load.
   * @returns Number of successfully loaded languages.
   */
  loadLanguages(languages: string[]): number {
    const validatedLanguages = validateStringArray(languages, "languages");
    return validatedLanguages.reduce((count, lang) => {
      return this.loadLanguage(lang) ? count + 1 : count;
    }, 0);
  }

  /**
   * Load all supported Indian languages.
   * @returns Number of loaded Indian languages.
   */
  loadIndianLanguages(): number {
    const indianLanguages = ["hindi", "bengali", "tamil", "telugu"];
    return this.loadLanguages(indianLanguages);
  }

  /**
   * Loads a custom dictionary of profane words with a specific name.
   *
   * @param {string} name - Unique name/identifier for this custom dictionary
   * @param {string[]} words - Array of profane words to add to the dictionary
   * @returns {void}
   *
   * @throws {TypeError} If name is not a string or words is not an array
   *
   * @remarks
   * ### Behavior:
   * - Creates a new named dictionary or overwrites existing one with same name
   * - Validates and filters out non-string and empty values from words array
   * - Words are added to all active data structures (Trie, Aho-Corasick, Bloom Filter)
   * - Dictionary name is converted to lowercase for storage
   * - Logs count of loaded words (unless silent mode enabled)
   *
   * ### Use Cases:
   * - Domain-specific profanity (gaming, medical, legal, etc.)
   * - Organization-specific word lists
   * - Temporary or context-dependent filters
   * - Testing and development
   *
   * @example
   * ```typescript
   * const filter = new AllProfanity();
   *
   * // Load gaming-specific slang
   * filter.loadCustomDictionary('gaming', [
   *   'noob',
   *   'scrub',
   *   'tryhard',
   *   'trash'
   * ]);
   *
   * // Load company-specific terms
   * filter.loadCustomDictionary('company', [
   *   'competitor1',
   *   'bannedTerm1',
   *   'inappropriateJargon'
   * ]);
   *
   * console.log(filter.check('You are such a noob')); // true
   * ```
   *
   * @example
   * ```typescript
   * // Load from external source
   * const filter = new AllProfanity();
   *
   * async function loadExternalDictionary() {
   *   const response = await fetch('https://example.com/custom-words.json');
   *   const customWords = await response.json();
   *   filter.loadCustomDictionary('external', customWords);
   * }
   * ```
   *
   * @see {@link add} for adding individual words dynamically
   * @see {@link loadLanguage} for loading built-in language dictionaries
   */
  loadCustomDictionary(name: string, words: string[]): void {
    validateString(name, "dictionary name");
    const validatedWords = validateStringArray(
      words,
      "custom dictionary words"
    );

    if (validatedWords.length === 0) {
      this.logger.warn(`Custom dictionary '${name}' contains no valid words`);
      return;
    }

    try {
      let addedCount = 0;
      for (const word of validatedWords) {
        if (this.addWordToTrie(word)) {
          addedCount++;
        }
      }

      this.availableLanguages[name.toLowerCase()] = validatedWords;
      this.loadedLanguages.add(name.toLowerCase());

      this.logger.info(
        `Loaded ${addedCount} words from custom dictionary '${name}'`
      );
    } catch (error) {
      this.logger.error(`Failed to load custom dictionary ${name}: ${error}`);
    }
  }

  /**
   * Add a single word to the trie.
   * @param word - The word to add.
   * @returns True if added, false otherwise.
   */
  private addWordToTrie(word: string): boolean {
    if (!word || typeof word !== "string" || word.trim().length === 0) {
      return false;
    }

    const normalizedWord = this.caseSensitive
      ? word.trim()
      : word.trim().toLowerCase();

    if (this.isWhitelisted(normalizedWord)) {
      return false;
    }

    // Add to Trie (always used as fallback)
    this.profanityTrie.addWord(normalizedWord);

    // Add to Bloom Filter if enabled
    if (this.bloomFilter) {
      this.bloomFilter.add(normalizedWord);
    }

    // Add to Aho-Corasick automaton if enabled
    if (this.ahoCorasickAutomaton) {
      this.ahoCorasickAutomaton.addPattern(normalizedWord);
    }

    return true;
  }

  /**
   * Calculate severity from matches.
   * @param matches - Array of matches.
   * @returns Severity level.
   */
  private calculateSeverity(matches: MatchResult[]): ProfanitySeverity {
    if (matches.length === 0) return ProfanitySeverity.MILD;

    const uniqueWords = new Set(matches.map((m) => m.word)).size;
    const totalMatches = matches.length;

    if (totalMatches >= 5 || uniqueWords >= 4) return ProfanitySeverity.EXTREME;
    if (totalMatches >= 3 || uniqueWords >= 3) return ProfanitySeverity.SEVERE;
    if (totalMatches >= 2 || uniqueWords >= 2)
      return ProfanitySeverity.MODERATE;
    return ProfanitySeverity.MILD;
  }

  /**
   * Clear all loaded dictionaries and dynamic words.
   */
  clearList(): void {
    this.profanityTrie.clear();
    this.loadedLanguages.clear();
    this.dynamicWords.clear();
  }

  /**
   * Set the placeholder character for filtered words.
   * @param placeholder - The placeholder character.
   */
  setPlaceholder(placeholder: string): void {
    validateString(placeholder, "placeholder");

    if (placeholder.length === 0) {
      throw new Error("Placeholder cannot be empty");
    }

    this.defaultPlaceholder = placeholder.charAt(0);
  }

  /**
   * Get the list of loaded languages.
   * @returns Array of loaded language keys.
   */
  getLoadedLanguages(): string[] {
    return Array.from(this.loadedLanguages);
  }

  /**
   * Get the list of available built-in languages.
   * @returns Array of available language keys.
   */
  getAvailableLanguages(): string[] {
    return Object.keys(this.availableLanguages);
  }

  /**
   * Get the current configuration of the profanity filter.
   * @returns Partial configuration object.
   */
  getConfig(): Partial<AllProfanityOptions> {
    return {
      defaultPlaceholder: this.defaultPlaceholder,
      enableLeetSpeak: this.enableLeetSpeak,
      caseSensitive: this.caseSensitive,
      strictMode: this.strictMode,
      detectPartialWords: this.detectPartialWords,
      languages: this.getLoadedLanguages(),
      whitelistWords: Array.from(this.whitelistSet),
    };
  }

  /**
   * Rebuild the profanity trie from loaded dictionaries and dynamic words.
   */
  private rebuildTrie(): void {
    this.profanityTrie.clear();
    for (const lang of this.loadedLanguages) {
      const words = this.availableLanguages[lang] || [];
      for (const word of words) {
        this.addWordToTrie(word);
      }
    }
    for (const word of this.dynamicWords) {
      this.addWordToTrie(word);
    }
  }

  /**
   * Update configuration options for the profanity filter.
   * @param options - Partial configuration object.
   */
  updateConfig(options: Partial<AllProfanityOptions>): void {
    let rebuildNeeded = false;
    if (options.defaultPlaceholder !== undefined) {
      this.setPlaceholder(options.defaultPlaceholder);
    }
    if (options.enableLeetSpeak !== undefined) {
      this.enableLeetSpeak = options.enableLeetSpeak;
    }
    if (
      options.caseSensitive !== undefined &&
      options.caseSensitive !== this.caseSensitive
    ) {
      this.caseSensitive = options.caseSensitive;
      rebuildNeeded = true;
    }
    if (options.strictMode !== undefined) {
      this.strictMode = options.strictMode;
    }
    if (options.detectPartialWords !== undefined) {
      this.detectPartialWords = options.detectPartialWords;
    }
    if (options.whitelistWords) {
      this.addToWhitelist(options.whitelistWords);
    }
    if (rebuildNeeded) {
      this.rebuildTrie();
    }
  }

  /**
   * Create an AllProfanity instance from a configuration object.
   * @param config - Configuration object
   * @returns A new AllProfanity instance
   */
  static fromConfig(config: AllProfanityOptions | any): AllProfanity {
    const options: AllProfanityOptions = {};

    if (config.algorithm) options.algorithm = config.algorithm;
    if (config.bloomFilter) options.bloomFilter = config.bloomFilter;
    if (config.ahoCorasick) options.ahoCorasick = config.ahoCorasick;
    if (config.contextAnalysis) options.contextAnalysis = config.contextAnalysis;
    if (config.performance) options.performance = config.performance;

    if (config.profanityDetection) {
      options.enableLeetSpeak = config.profanityDetection.enableLeetSpeak;
      options.caseSensitive = config.profanityDetection.caseSensitive;
      options.strictMode = config.profanityDetection.strictMode;
      options.detectPartialWords = config.profanityDetection.detectPartialWords;
      options.defaultPlaceholder = config.profanityDetection.defaultPlaceholder;
    }

    if (config.enableLeetSpeak !== undefined) options.enableLeetSpeak = config.enableLeetSpeak;
    if (config.caseSensitive !== undefined) options.caseSensitive = config.caseSensitive;
    if (config.strictMode !== undefined) options.strictMode = config.strictMode;
    if (config.detectPartialWords !== undefined) options.detectPartialWords = config.detectPartialWords;
    if (config.defaultPlaceholder !== undefined) options.defaultPlaceholder = config.defaultPlaceholder;
    if (config.languages) options.languages = config.languages;
    if (config.whitelistWords) options.whitelistWords = config.whitelistWords;
    if (config.customDictionaries) options.customDictionaries = config.customDictionaries;
    if (config.logger) options.logger = config.logger;

    return new AllProfanity(options);
  }
}

/**
 * Singleton instance of AllProfanity with default configuration.
 */
const allProfanity = new AllProfanity();
export default allProfanity;
