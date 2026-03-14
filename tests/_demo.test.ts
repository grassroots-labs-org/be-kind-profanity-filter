import { detectLanguages } from "../src/language-detector.ts";

test("demo — new proportion + present model", () => {
  const texts = [
    // Japenglish
    "That was すごい amazing desu ne",
    "Let's go to カラオケ tonight it'll be fun",
    "OMG this ラーメン is so oishii",

    // Hinglish
    "Yaar ये तो बहुत cool है",
    "Bhai bahut accha khana tha, thanks for dinner",

    // Korean + English
    "오빠 is so cool and 대박",
    "I love 한국어 very much",
    "This 김치 is spicier than I expected",

    // Chinese + English
    "Let us eat 拉面 for dinner tonight",
    "I need to practice my 中文 more",

    // Russian + English
    "Hello привет everyone мир",
    "That was очень interesting lecture today",

    // Arabic + English
    "The food was حرام and totally not okay",

    // German + English
    "This Straße is really long wow",
    "Das ist Scheiße und totally unfair",

    // Spanish + English
    "Vamos al store para comprar groceries mañana",

    // Pure languages
    "The quick brown fox jumps over the lazy dog",
    "こんにちは世界、今日はいい天気ですね",
    "안녕하세요 오늘 날씨가 좋네요",

    // Multi-script
    "Hello こんにちは 안녕하세요 Привет",

    // Accent-stripped Turkish (lazy diacritics)
    "gurultu cok buyuk",
    // Proper Turkish with accents
    "gürültü çok büyük",
    // Accent-stripped French
    "ecole tres difficile etudiant",
    // Accent-stripped Spanish
    "manana esta bien aqui tambien",
  ];

  console.log("\n=== PROPORTION + PRESENT MODEL ===\n");
  for (const t of texts) {
    const r = detectLanguages(t);
    const langs = r.languages.map((l: any) =>
      `${l.language}(present:${l.present} prop:${l.proportion} words:${l.wordCount})`
    ).join(", ");
    console.log(`"${t}"`);
    console.log(`  total:${r.totalWords} → ${langs}\n`);
  }
});
