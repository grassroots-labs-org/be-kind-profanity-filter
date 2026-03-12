/**
 * Arabic profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Arabic
 */
const arabicBadWords: Record<string, { s: number; c: number }> = {
  // Core vulgar words
  "كس": { s: 4, c: 4 }, // Pussy
  "كس أمك": { s: 4, c: 4 }, // Your mother's pussy
  "كس اختك": { s: 4, c: 4 }, // Your sister's pussy
  "زب": { s: 4, c: 4 }, // Dick
  "زبي": { s: 4, c: 4 }, // My dick
  "طيز": { s: 3, c: 4 }, // Ass
  "شرموطة": { s: 5, c: 4 }, // Whore (fem)
  "شرموط": { s: 5, c: 4 }, // Whore (masc)
  "قحبة": { s: 5, c: 4 }, // Whore / prostitute
  "عاهرة": { s: 5, c: 4 }, // Prostitute (fem)
  "عاهرات": { s: 5, c: 4 }, // Prostitutes (plural)
  "العاهرات": { s: 5, c: 4 }, // The prostitutes
  "ابن العاهرة": { s: 5, c: 4 }, // Son of a prostitute
  "ابن الشرموطة": { s: 5, c: 5 }, // Son of a whore
  "ابن القحبة": { s: 5, c: 5 }, // Son of a whore
  "ابن الكلب": { s: 3, c: 4 }, // Son of a dog

  // Insults
  "أحمق": { s: 1, c: 4 }, // Fool / idiot
  "حمقى": { s: 1, c: 4 }, // Fools (plural)
  "الأحمق": { s: 1, c: 4 }, // The fool
  "وغد": { s: 1, c: 4 }, // Scoundrel
  "أيها الوغد": { s: 1, c: 4 }, // You scoundrel
  "سافل": { s: 1, c: 4 }, // Lowlife
  "أيها الحقير": { s: 1, c: 4 }, // You despicable one
  "حثالة": { s: 1, c: 4 }, // Scum
  "حمار": { s: 3, c: 4 }, // Donkey / ass
  "كلب": { s: 1, c: 4 }, // Dog
  "يا ابن الحرام": { s: 3, c: 4 }, // You bastard
  "خول": { s: 1, c: 4 }, // Faggot (slur)
  "ديوث": { s: 1, c: 4 }, // Cuckold
  "عرص": { s: 1, c: 4 }, // Pimp
  "منيك": { s: 3, c: 5 }, // Fucker
  "متناك": { s: 3, c: 5 }, // Fucked

  // Curses
  "اللعنة": { s: 3, c: 4 }, // The curse / damn
  "اللعين": { s: 3, c: 4 }, // The cursed one
  "أيها اللعين": { s: 3, c: 4 }, // You cursed one
  "يلعن أبوك": { s: 1, c: 4 }, // Curse your father
  "يلعن دينك": { s: 3, c: 4 }, // Curse your religion
  "لعنة": { s: 3, c: 4 }, // Curse

  // Sexual
  "نيك": { s: 3, c: 5 }, // Fuck
  "سخيف": { s: 3, c: 4 }, // Ridiculous / lame
  "مارس الجنس مع": { s: 3, c: 4 }, // Have sex with
  "القذف": { s: 3, c: 4 }, // Ejaculation
  "الجنس": { s: 3, c: 4 }, // Sex
  "المواد الإباحية": { s: 3, c: 4 }, // Pornography
  "زنا": { s: 3, c: 4 }, // Adultery / fornication
  "لوطي": { s: 3, c: 4 }, // Sodomite

  // Slurs
  "الشاذ": { s: 5, c: 4 }, // The deviant / queer (slur)
  "الشواذ": { s: 5, c: 4 }, // The deviants (plural slur)
  "مثلي الجنس": { s: 5, c: 4 }, // Homosexual
  "زنجي": { s: 5, c: 4 }, // Negro (slur)
  "الزنوج": { s: 5, c: 4 }, // Negroes (slur)
  "نازي": { s: 5, c: 5 }, // Nazi

  // Body parts / functions (vulgar)
  "قضيب": { s: 4, c: 3 }, // Penis
  "مؤخرة": { s: 4, c: 3 }, // Buttocks
  "المؤخرات": { s: 4, c: 3 }, // Buttocks (plural)
  "خصية": { s: 4, c: 3 }, // Testicle
  "بول": { s: 4, c: 3 }, // Urine
  "تبول": { s: 4, c: 3 }, // Urination
  "خرا": { s: 4, c: 5 }, // Shit
  "القواد": { s: 4, c: 3 }, // The pimp
  "سادي": { s: 4, c: 3 }, // Sadistic

  // Egyptian / regional
  "أحا": { s: 3, c: 4 }, // Exclamation of disgust (Egyptian)
  "الكلبة": { s: 3, c: 4 }, // The bitch
  "الكلبات": { s: 3, c: 4 }, // The bitches

  // Egyptian dialect
  "ابن المتناكة": { s: 3, c: 5 }, // Son of the fucked one
  "يا خول": { s: 3, c: 4 }, // You faggot
  "شرموطة أمك": { s: 5, c: 4 }, // Your mother's a whore
  "كسمك": { s: 4, c: 4 }, // Your mother's pussy (abbreviated)
  "عرص ابن العرص": { s: 3, c: 4 }, // Pimp son of a pimp
  "ابن الوسخة": { s: 3, c: 4 }, // Son of the dirty one
  "يا واطي": { s: 3, c: 4 }, // You lowlife
  "يا وسخ": { s: 3, c: 4 }, // You filthy
  "ابن الشرشوحة": { s: 3, c: 4 }, // Son of a slut
  "متناكة": { s: 3, c: 5 }, // Fucked (fem)

  // Levantine dialect (Syrian/Lebanese/Palestinian/Jordanian)
  "كس إمك": { s: 4, c: 4 }, // Your mother's pussy
  "أيري فيك": { s: 4, c: 4 }, // My dick in you
  "أيري": { s: 4, c: 4 }, // My dick
  "روح إنتاك": { s: 3, c: 5 }, // Go get fucked
  "منيوك": { s: 3, c: 5 }, // Fucked (passive)
  "منيوكة": { s: 3, c: 5 }, // Fucked (fem)
  "كلب ابن الكلب": { s: 3, c: 4 }, // Dog son of a dog
  "يا حيوان": { s: 3, c: 4 }, // You animal
  "يلعن أبوك وأبو يلي خلفك": { s: 1, c: 4 }, // Curse your father and who bore you
  "زبالة": { s: 3, c: 4 }, // Garbage (insult)
  "يا قذر": { s: 3, c: 4 }, // You filthy

  // Gulf dialect (Saudi/UAE/Kuwait/Qatar)
  "ثور": { s: 1, c: 4 }, // Bull (stupid)
  "حمار ابن حمار": { s: 3, c: 4 }, // Donkey son of a donkey
  "يا تيس": { s: 1, c: 4 }, // You goat (stupid)
  "قواد": { s: 3, c: 4 }, // Pimp
  "معرص": { s: 3, c: 4 }, // Pimped out
  "ديوس": { s: 3, c: 4 }, // Cuckold (Gulf)
  "زق": { s: 3, c: 5 }, // Shit (Gulf)

  // Maghreb dialect (Morocco/Tunisia/Algeria)
  "نعل بوك": { s: 1, c: 4 }, // Curse your father
  "نيك موك": { s: 3, c: 5 }, // Fuck your mother
  "زمل": { s: 3, c: 4 }, // Faggot (Maghreb)
  "قحبة أمك": { s: 5, c: 4 }, // Your mother's a whore
  "تفو عليك": { s: 3, c: 4 }, // Spit on you
  "ولد الحرام": { s: 3, c: 4 }, // Illegitimate child
  "يا زنديق": { s: 3, c: 4 }, // You heretic

  // Iraqi dialect
  "ابن الگحبة": { s: 5, c: 5 }, // Son of a whore (Iraqi)
  "كحبة": { s: 5, c: 4 }, // Whore (Iraqi)
  "گواد": { s: 3, c: 4 }, // Pimp (Iraqi)
  "ابن الگلب": { s: 3, c: 4 }, // Son of a dog (Iraqi)
  "چلب": { s: 3, c: 4 }, // Dog (Iraqi)
  "بيض": { s: 4, c: 4 }, // Balls (Iraqi vulgar)
  "طرطور": { s: 3, c: 4 }, // Worthless person (Iraqi)
  "مقعد": { s: 3, c: 4 }, // Cripple (Iraqi insult)
  "چفخانة": { s: 3, c: 4 }, // Brothel (Iraqi)
  "يبن الگحبة": { s: 5, c: 5 }, // Son of a whore (Iraqi spoken)
  "عيني عينك": { s: 3, c: 4 }, // Shameless (Iraqi)

  // Egyptian dialect (additional)
  "عيل وسخ": { s: 3, c: 4 }, // Dirty kid
  "يا خرا": { s: 3, c: 5 }, // You shit
  "بقرة": { s: 3, c: 4 }, // Cow (insult)
  "يا حمارة": { s: 3, c: 4 }, // You donkey (fem)
  "أمك": { s: 3, c: 4 }, // Your mother (implied insult)
  "كسم": { s: 3, c: 4 }, // Kos om (abbreviated)
  "طيزك": { s: 3, c: 4 }, // Your ass
  "يا معفن": { s: 3, c: 4 }, // You rotten
  "يا زبالة": { s: 3, c: 4 }, // You trash
  "ابن الجزمة": { s: 3, c: 4 }, // Son of a shoe
  "يا جلدة": { s: 3, c: 4 }, // You (vulgar)
  "يا عبيط": { s: 1, c: 4 }, // You idiot
  "يا أهبل": { s: 1, c: 4 }, // You stupid
  "ابن أبوه": { s: 1, c: 4 }, // Son of his father (euphemism for bastard)
  "يا ابن اللبوة": { s: 3, c: 4 }, // Son of a lioness (vulgar context)
  "يا مجنون": { s: 3, c: 4 }, // You crazy
  "بتاع نسوان": { s: 3, c: 4 }, // Womanizer
  "يا كلبة": { s: 3, c: 4 }, // You bitch
  "يا ملعون": { s: 3, c: 4 }, // You cursed one
  "يا ابن الحيوانة": { s: 3, c: 4 }, // Son of an animal
  "حلق بره": { s: 3, c: 4 }, // Get lost
  "اتلم يا وسخ": { s: 3, c: 4 }, // Get away you filthy

  // Levantine dialect (additional)
  "طز": { s: 3, c: 4 }, // Screw it / damn
  "طز فيك": { s: 3, c: 4 }, // Screw you
  "روح انيك أمك": { s: 3, c: 5 }, // Go fuck your mother
  "يلعن ربك": { s: 3, c: 4 }, // Curse your god
  "يلعن عرضك": { s: 3, c: 4 }, // Curse your honor
  "يلعن روحك": { s: 3, c: 4 }, // Curse your soul
  "كس إختك": { s: 4, c: 4 }, // Your sister's pussy
  "أيري بتمك": { s: 4, c: 4 }, // My dick in your mouth
  "أيري بأمك": { s: 4, c: 4 }, // My dick in your mother
  "أيري بأختك": { s: 4, c: 4 }, // My dick in your sister
  "كل خرا": { s: 3, c: 5 }, // Eat shit
  "كل زق": { s: 3, c: 5 }, // Eat shit (variant)
  "شو هالحمار": { s: 3, c: 4 }, // What a donkey
  "روح انحاش": { s: 3, c: 4 }, // Get lost
  "بدي فشخك": { s: 3, c: 4 }, // I'll destroy you
  "فشخ": { s: 3, c: 4 }, // Destroy (vulgar)
  "منيوكين": { s: 3, c: 5 }, // Fucked (plural)
  "شلحة": { s: 3, c: 4 }, // Stripper/slut

  // Gulf dialect (additional)
  "يا حقير": { s: 3, c: 4 }, // You despicable
  "يا وضيع": { s: 3, c: 4 }, // You lowly
  "ابن الجلب": { s: 3, c: 4 }, // Son of a dog (Gulf variant)
  "يبن الجحش": { s: 3, c: 4 }, // Son of a donkey
  "خنيث": { s: 3, c: 4 }, // Effeminate (slur)
  "يا منيوك": { s: 3, c: 5 }, // You fucked
  "يا سفالة": { s: 3, c: 4 }, // You scum
  "مزين": { s: 3, c: 4 }, // Pimp (Gulf slang)
  "طابور": { s: 2, c: 3 }, // Queue (euphemism for gang activity)
  "يا فاجر": { s: 3, c: 4 }, // You immoral
  "يا نذل": { s: 3, c: 4 }, // You vile
  "عديم الشرف": { s: 3, c: 4 }, // Without honor
  "كلب ابن كلب": { s: 3, c: 4 }, // Dog son of dog (Gulf)
  "يا تافه": { s: 3, c: 4 }, // You worthless
  "يا زفت": { s: 3, c: 4 }, // You tar (insult)
  "يا قرد": { s: 3, c: 4 }, // You monkey

  // Maghreb dialect (additional)
  "نعل دين ممك": { s: 3, c: 4 }, // Curse your mother's religion
  "نعل بو ممك": { s: 1, c: 4 }, // Curse your mother's father
  "نعل دين بوك": { s: 1, c: 4 }, // Curse your father's religion
  "يا زعطوط": { s: 1, c: 4 }, // You fool (Maghreb)
  "يا كلاب": { s: 3, c: 4 }, // You dogs
  "يا حشايشي": { s: 3, c: 4 }, // You hashish smoker
  "زعري": { s: 3, c: 4 }, // Punk/thug (Maghreb)
  "نعل شيطانك": { s: 3, c: 4 }, // Curse your devil
  "يا بهيمة": { s: 3, c: 4 }, // You animal
  "متنيك": { s: 3, c: 5 }, // Fucked (Maghreb)
  "قحبة بنت قحبة": { s: 5, c: 4 }, // Whore daughter of whore

  // Standard Arabic insults (additional)
  "وقح": { s: 1, c: 4 }, // Rude / shameless
  "سفيه": { s: 1, c: 4 }, // Foolish / insolent
  "أبله": { s: 1, c: 4 }, // Idiot
  "غبي": { s: 1, c: 4 }, // Stupid
  "تافه": { s: 1, c: 4 }, // Worthless
  "نذل": { s: 1, c: 4 }, // Vile
  "خسيس": { s: 1, c: 4 }, // Mean / despicable
  "لئيم": { s: 1, c: 4 }, // Wretched
  "دنيء": { s: 1, c: 4 }, // Lowly
  "وضيع": { s: 1, c: 4 }, // Base / low
  "فاسق": { s: 1, c: 4 }, // Immoral / sinner
  "فاجر": { s: 1, c: 4 }, // Debauched
  "رذيل": { s: 1, c: 4 }, // Vile / abject
  "منحط": { s: 1, c: 4 }, // Degraded
  "ساقط": { s: 1, c: 4 }, // Fallen / degenerate
  "خائن": { s: 1, c: 4 }, // Traitor
  "جبان": { s: 1, c: 4 }, // Coward
  "نجس": { s: 1, c: 4 }, // Impure / filthy
  "قذر": { s: 1, c: 4 }, // Dirty
  "مقرف": { s: 1, c: 4 }, // Disgusting
  "حقير": { s: 1, c: 4 }, // Contemptible

  // Sexual terms (additional)
  "لواط": { s: 4, c: 4 }, // Sodomy
  "سحاق": { s: 4, c: 4 }, // Lesbianism (vulgar)
  "جماع": { s: 4, c: 4 }, // Intercourse
  "نكاح": { s: 4, c: 4 }, // Sexual intercourse (vulgar context)
  "فاحشة": { s: 4, c: 4 }, // Obscenity / fornication
  "زاني": { s: 4, c: 4 }, // Adulterer (masc)
  "زانية": { s: 4, c: 4 }, // Adulteress (fem)
  "داعرة": { s: 5, c: 4 }, // Prostitute
  "داعر": { s: 4, c: 4 }, // Debauched (masc)
  "بغي": { s: 5, c: 4 }, // Prostitute (classical)
  "مومس": { s: 5, c: 4 }, // Whore (formal)
  "فاسقة": { s: 4, c: 4 }, // Immoral woman

  // Romanized Arabic profanity (used online)
  "kos omak": { s: 4, c: 5 }, // Your mother's pussy
  "kos": { s: 4, c: 5 }, // Pussy
  "ibn el sharmouta": { s: 3, c: 4 }, // Son of a whore
  "ibn el sharmota": { s: 5, c: 5 }, // Son of a whore (variant)
  "ya kalb": { s: 3, c: 5 }, // You dog
  "ya hmar": { s: 3, c: 5 }, // You donkey
  "ya ibn el sharmouta": { s: 5, c: 5 }, // You son of a whore
  "ya ibn el kahba": { s: 5, c: 5 }, // You son of a whore
  "ya khara": { s: 3, c: 5 }, // You shit
  "telhas teezi": { s: 3, c: 5 }, // Lick my ass
  "airi feek": { s: 4, c: 5 }, // My dick in you
  "kol khara": { s: 3, c: 5 }, // Eat shit
  "ya ahbal": { s: 1, c: 5 }, // You idiot
  "ya wiskha": { s: 3, c: 5 }, // You filthy
  "ya sharmout": { s: 5, c: 5 }, // You male whore
  "ya sharmouta": { s: 5, c: 5 }, // You whore
  "ya manyak": { s: 3, c: 5 }, // You fucker
  "ya manyouk": { s: 3, c: 5 }, // You fucked
  "ya khawal": { s: 3, c: 5 }, // You faggot
  "ya zefer": { s: 3, c: 5 }, // You disgusting
  "ya zift": { s: 3, c: 5 }, // You tar
  "ibn el metnaka": { s: 3, c: 5 }, // Son of the fucked one
  "ya ebn el kahba": { s: 5, c: 5 }, // Son of a whore (variant)
  "neek": { s: 3, c: 5 }, // Fuck
  "nik": { s: 3, c: 5 }, // Fuck (variant)

  // Body parts vulgar (additional)
  "بظر": { s: 4, c: 3 }, // Clitoris
  "ثدي": { s: 4, c: 4 }, // Breast (vulgar context)
  "خصيتين": { s: 4, c: 3 }, // Testicles
  "شرج": { s: 4, c: 3 }, // Anus
  "فرج": { s: 4, c: 3 }, // Vulva
  "عورة": { s: 4, c: 3 }, // Private parts
  "حلمة": { s: 4, c: 3 }, // Nipple
  "بزاز": { s: 4, c: 4 }, // Breasts (vulgar)

  // Additional romanized Arabic profanity (online usage)
  "ayre": { s: 4, c: 5 }, // my dick
  "ayri": { s: 4, c: 5 }, // my dick (variant)
  "ayre feek": { s: 4, c: 5 }, // my dick in you
  "ayre fi teezak": { s: 4, c: 5 }, // my dick in your ass
  "teez": { s: 3, c: 5 }, // ass
  "teezak": { s: 3, c: 5 }, // your ass
  "teezi": { s: 3, c: 5 }, // my ass
  "zeb": { s: 4, c: 5 }, // dick
  "zebi": { s: 4, c: 3 }, // my dick
  "zebb": { s: 4, c: 5 }, // dick (variant)
  "sharmouta": { s: 5, c: 5 }, // whore
  "sharmout": { s: 5, c: 5 }, // male whore
  "sharmota": { s: 5, c: 5 }, // whore (variant)
  "ya kalb ibn kalb": { s: 3, c: 5 }, // you dog son of a dog
  "ya ibn sharmouta": { s: 5, c: 5 }, // you son of a whore
  "ibn sharmouta": { s: 5, c: 5 }, // son of a whore
  "kol khara wa moot": { s: 5, c: 5 }, // eat shit and die
  "koss": { s: 4, c: 5 }, // pussy (variant)
  "kos okhtak": { s: 4, c: 5 }, // your sister's pussy
  "ya wati": { s: 3, c: 5 }, // you lowlife
  "ya wisikh": { s: 3, c: 5 }, // you filthy
  "ya manyouka": { s: 3, c: 5 }, // you fucked (fem)
  "ya ibn il metnaka": { s: 3, c: 5 }, // you son of the fucked
  "ya kharouf": { s: 3, c: 5 }, // you sheep (insult)
  "ya dabbeh": { s: 1, c: 5 }, // you idiot/animal
  "tfeh alayk": { s: 3, c: 5 }, // spit on you
  "telhas": { s: 3, c: 5 }, // lick (vulgar)
  "inaal": { s: 3, c: 5 }, // curse
  "ina'al abouk": { s: 1, c: 5 }, // curse your father
  "ina'al deenak": { s: 3, c: 5 }, // curse your religion
  "ya zalameh": { s: 3, c: 5 }, // you man (condescending)
  "ya gazma": { s: 3, c: 5 }, // you shoe (insult)
  "ya ibn il gazma": { s: 3, c: 5 }, // son of a shoe
  "ya hayawan": { s: 3, c: 5 }, // you animal
  "ya kosomak": { s: 4, c: 5 }, // your mother's pussy
  "nikomak": { s: 3, c: 5 }, // fuck your mother (romanized)
  "ya gahba": { s: 5, c: 5 }, // you whore (romanized)
  "ya zebbala": { s: 3, c: 5 }, // you trash
  "ya ta3ban": { s: 3, c: 5 }, // you snake (insult)
  "ya thawr": { s: 1, c: 5 }, // you bull (stupid)
  "ya a3ma": { s: 3, c: 5 }, // you blind
  "ya atrash": { s: 3, c: 5 }, // you deaf (insult)
  "ya ma3tooh": { s: 3, c: 5 }, // you mentally deficient
  "manyak": { s: 3, c: 5 }, // fucker (romanized)
  "manyouk": { s: 3, c: 5 }, // fucked (romanized)
  "kis": { s: 4, c: 5 }, // pussy (romanized variant)
  "ya haiwan": { s: 3, c: 5 }, // you animal (variant)
  "wlad l7ram": { s: 3, c: 5 }, // children of sin (romanized Maghreb)
  "ta7an": { s: 3, c: 5 }, // to grind (sexual, vulgar)
  "zabour": { s: 4, c: 5 }, // penis (romanized Maghreb)

  // Iraqi dialect (additional)
  "ابن الچلب": { s: 3, c: 4 }, // son of a dog (Iraqi)
  "معيدي": { s: 1, c: 4 }, // stupid rural person (Iraqi insult)
  "بربوگ": { s: 1, c: 4 }, // stupid (Iraqi)
  "خنزير": { s: 3, c: 4 }, // pig (Iraqi insult)
  "ابن الخنزير": { s: 3, c: 4 }, // son of a pig
  "حرامي": { s: 3, c: 4 }, // thief (Iraqi)
  "ديّوث": { s: 3, c: 4 }, // cuckold (Iraqi emphasis)
  "معرس": { s: 3, c: 4 }, // pimped out (Iraqi)
  "ابن السرماية": { s: 3, c: 4 }, // son of poverty (Iraqi insult)
  "تيس": { s: 1, c: 4 }, // goat / stupid (Iraqi)
  "بعير": { s: 3, c: 4 }, // camel (Iraqi insult)
  "فدوة": { s: 3, c: 4 }, // disgusting (Iraqi slang)
  "زنخ": { s: 3, c: 4 }, // rancid / disgusting (Iraqi)
  "يبن القحبة": { s: 5, c: 5 }, // son of a whore (Iraqi spoken variant)
  "يابن الچلب": { s: 3, c: 4 }, // son of a dog (Iraqi variant)
  "گلب": { s: 3, c: 4 }, // dog (Iraqi variant spelling)
  "حيوان ابن حيوان": { s: 3, c: 4 }, // animal son of animal (Iraqi)
  "مسخرة": { s: 3, c: 4 }, // joke/mockery (Iraqi insult)
  "بغل": { s: 3, c: 4 }, // mule (Iraqi insult)
  "ابن البغل": { s: 3, c: 4 }, // son of a mule (Iraqi)
  "جاكوج": { s: 3, c: 4 }, // asshole (Iraqi slang)
  "خرب بيتك": { s: 3, c: 4 }, // may your house be destroyed (Iraqi)
  "يخرب بيتك": { s: 3, c: 4 }, // may god destroy your house (Iraqi)
  "ابن الحرام": { s: 3, c: 4 }, // bastard (Iraqi variant)
  "شلعوفة": { s: 1, c: 4 }, // ugly woman (Iraqi)

  // Saudi/Khaleeji (additional)
  "يا ثور": { s: 1, c: 4 }, // you bull (stupid)
  "يا خسيس": { s: 3, c: 4 }, // you despicable
  "يا سافل": { s: 3, c: 4 }, // you lowlife (Khaleeji)
  "يا ساقط": { s: 3, c: 4 }, // you degenerate (Khaleeji)
  "يا نجس": { s: 3, c: 4 }, // you impure (Khaleeji)
  "يا مخنث": { s: 3, c: 4 }, // you effeminate (Khaleeji slur)
  "يا عديم": { s: 3, c: 4 }, // you worthless (Khaleeji)
  "ابن الحمار": { s: 3, c: 4 }, // son of a donkey (Khaleeji)
  "يا جحش": { s: 3, c: 4 }, // you donkey (young)
  "ابن النعجة": { s: 3, c: 4 }, // son of a sheep (insult)
  "طق عشر": { s: 3, c: 5 }, // fuck off (Saudi slang)
  "لا أبوك": { s: 1, c: 4 }, // no father (Saudi insult)
  "يا مطوع": { s: 3, c: 4 }, // you religious zealot (Saudi derogatory)
  "يا بدوي": { s: 3, c: 4 }, // you bedouin (derogatory context)
  "يا خرفان": { s: 3, c: 4 }, // you sheep (plural, insult)
  "يلعن بوك": { s: 1, c: 4 }, // curse your father (Gulf)
  "يلعن بو أمك": { s: 1, c: 4 }, // curse your mother's father (Gulf)
  "أم الدحديرة": { s: 3, c: 4 }, // mother of rolling (Gulf insult)
  "يا معرص": { s: 3, c: 4 }, // you pimp (Gulf)
  "يا ديوث": { s: 3, c: 4 }, // you cuckold (Gulf)
  "يا جلد": { s: 3, c: 4 }, // you (vulgar, Gulf)
  "وجهك خرا": { s: 3, c: 5 }, // your face is shit (Gulf)
  "يا حمار": { s: 3, c: 4 }, // you donkey (Gulf)
  "يا بقر": { s: 3, c: 4 }, // you cow (Gulf)
  "ملعون الوالدين": { s: 3, c: 4 }, // cursed parents (Gulf)
  "يا سفيه": { s: 1, c: 4 }, // you foolish (Gulf)
  "يا ابن الجزمة": { s: 3, c: 4 }, // son of a shoe (Gulf variant)
  "خبل": { s: 3, c: 4 }, // crazy (Gulf)
  "يا خبل": { s: 3, c: 4 }, // you crazy (Gulf)
  "هبيلة": { s: 1, c: 4 }, // stupid woman (Gulf)
  "يا هبيل": { s: 1, c: 4 }, // you stupid (Gulf)

  // Yemeni profanity
  "يا مسخوط": { s: 3, c: 4 }, // you cursed one (Yemeni)
  "يا عكبري": { s: 3, c: 4 }, // you vile (Yemeni)
  "قرعة": { s: 3, c: 4 }, // bald (Yemeni insult)
  "يا مقرع": { s: 3, c: 4 }, // you bald one (Yemeni insult)
  "يا أخي شيطان": { s: 3, c: 4 }, // you brother of devil (Yemeni)
  "يا ابن الفاجرة": { s: 3, c: 4 }, // son of an immoral woman (Yemeni)
  "يا ملعون ابو ابوك": { s: 1, c: 4 }, // cursed be your grandfather (Yemeni)
  "ابن القبيحة": { s: 1, c: 4 }, // son of the ugly one (Yemeni)
  "عقبري": { s: 3, c: 4 }, // vile/evil (Yemeni variant)
  "يا مشخوط": { s: 3, c: 4 }, // you worthless (Yemeni)
  "يلعن تريبتك": { s: 3, c: 4 }, // curse your upbringing (Yemeni)
  "يا خابث": { s: 3, c: 4 }, // you malicious (Yemeni)
  "مخبل": { s: 3, c: 4 }, // crazy (Yemeni)
  "يا مخبل": { s: 3, c: 4 }, // you crazy (Yemeni)
  "شلّح": { s: 3, c: 4 }, // strip (Yemeni vulgar)
  "أمك هندية": { s: 5, c: 4 }, // your mother is Indian (Yemeni racist insult)

  // Sudanese profanity
  "يا كلب الزريبة": { s: 3, c: 4 }, // you dog of the pen (Sudanese)
  "يا ود الحرام": { s: 3, c: 4 }, // you child of sin (Sudanese)
  "يا ود الكلب": { s: 3, c: 4 }, // you son of a dog (Sudanese)
  "يا خواض": { s: 3, c: 4 }, // you faggot (Sudanese)
  "كُتر": { s: 3, c: 4 }, // ass (Sudanese)
  "أبو زبي": { s: 1, c: 4 }, // father of dick (Sudanese insult)
  "يا حشاش": { s: 3, c: 4 }, // you pothead (Sudanese)
  "يا ابو كرشة": { s: 3, c: 4 }, // you big-bellied (Sudanese)
  "يا جنجويدي": { s: 3, c: 4 }, // you Janjaweed (Sudanese derogatory)
  "يا عبد": { s: 5, c: 4 }, // you slave (Sudanese racist insult)
  "ابن الشيطانة": { s: 3, c: 4 }, // son of a she-devil (Sudanese)
  "كمكم": { s: 3, c: 4 }, // shut up (Sudanese vulgar)
  "يا نجاسة": { s: 3, c: 4 }, // you filth (Sudanese)

  // Libyan profanity
  "يا بن الكلبة": { s: 3, c: 4 }, // you son of a bitch (Libyan)
  "يا مزنوق": { s: 3, c: 4 }, // you desperate (Libyan insult)
  "يا حاسي": { s: 3, c: 4 }, // you drinker (Libyan insult)
  "نعل بو دينك": { s: 1, c: 4 }, // curse your religion's father (Libyan)
  "يا زربوط": { s: 3, c: 4 }, // you clumsy (Libyan)
  "يا خنفوس": { s: 3, c: 4 }, // you beetle (Libyan insult)
  "كلب بن كلب": { s: 3, c: 4 }, // dog son of dog (Libyan)
  "يا مرتد": { s: 3, c: 4 }, // you apostate (Libyan)
  "أزعر": { s: 3, c: 4 }, // thug (Libyan)
  "يا عاطل": { s: 3, c: 4 }, // you unemployed bum (Libyan)
  "يا بهلول": { s: 1, c: 4 }, // you clown/fool (Libyan)
  "يا معجب": { s: 3, c: 4 }, // you arrogant (Libyan)
  "يا طبل": { s: 1, c: 4 }, // you drum (Libyan insult for stupid)

  // Tunisian profanity (additional)
  "barcha": { s: 3, c: 4 }, // a lot (used in vulgar context)
  "kahba": { s: 3, c: 4 }, // whore (Tunisian)
  "zamel": { s: 3, c: 4 }, // faggot (Tunisian)
  "miboun": { s: 3, c: 4 }, // passive homosexual (Tunisian slur)
  "يا مبون": { s: 3, c: 4 }, // you passive homosexual (Tunisian)
  "barra nik omek": { s: 3, c: 5 }, // go fuck your mother (Tunisian)
  "barra": { s: 3, c: 4 }, // go away / get lost (Tunisian)
  "naek": { s: 3, c: 5 }, // fuck (Tunisian)
  "zebbi": { s: 4, c: 4 }, // my dick (Tunisian)
  "يا بهيم": { s: 3, c: 4 }, // you animal (Tunisian)
  "يا كبش": { s: 3, c: 4 }, // you ram (Tunisian insult)
  "يا حلوف": { s: 3, c: 4 }, // you pig (Tunisian)
  "يا كافر": { s: 3, c: 4 }, // you infidel (Tunisian)
  "حمار حاشاك": { s: 3, c: 4 }, // donkey, excuse me (Tunisian insult)
  "يا مسطول": { s: 3, c: 4 }, // you stoned/high (Tunisian)
  "بلا كرامة": { s: 3, c: 4 }, // without dignity (Tunisian insult)
  "يا فاسد": { s: 3, c: 4 }, // you corrupt (Tunisian)
  "عطري": { s: 3, c: 4 }, // promiscuous (Tunisian slang)

  // Moroccan Darija profanity
  "نعل": { s: 3, c: 4 }, // curse (Moroccan)
  "تبون": { s: 5, c: 5 }, // cunt (Moroccan)
  "تبون أمك": { s: 5, c: 5 }, // your mother's cunt (Moroccan)
  "زامل": { s: 3, c: 4 }, // faggot (Moroccan)
  "يا قواد": { s: 3, c: 4 }, // you pimp (Moroccan)
  "نعل ديالك": { s: 3, c: 4 }, // curse yours (Moroccan)
  "نيك أمك": { s: 3, c: 5 }, // fuck your mother (Moroccan)
  "يا بوزبال": { s: 1, c: 4 }, // you idiot (Moroccan)
  "يا معفون": { s: 3, c: 4 }, // you rotten (Moroccan)
  "سير تقود": { s: 3, c: 4 }, // go pimp (Moroccan insult)
  "ولد لقحبة": { s: 5, c: 5 }, // son of a whore (Moroccan)
  "بنت لقحبة": { s: 5, c: 4 }, // daughter of a whore (Moroccan)
  "يا مول الخنونة": { s: 3, c: 4 }, // you effeminate (Moroccan insult)
  "يا عيّاش": { s: 3, c: 4 }, // you degenerate (Moroccan)
  "يا شفار": { s: 3, c: 4 }, // you thief (Moroccan)
  "سير فحالك": { s: 3, c: 4 }, // get lost (Moroccan)
  "ما كاين والو": { s: 3, c: 4 }, // there's nothing (dismissive, Moroccan)
  "يا كرياني": { s: 3, c: 4 }, // you dirty/smelly (Moroccan)
  "يا مقطوع من شجرة": { s: 3, c: 4 }, // you cut from a tree (no family, Moroccan)

  // Algerian profanity
  "نعل بوك يخطيك": { s: 1, c: 4 }, // may your father's curse hit you (Algerian)
  "يا قواد ابن القواد": { s: 3, c: 4 }, // you pimp son of a pimp (Algerian)
  "نيك موك يا حمار": { s: 3, c: 5 }, // fuck your mother you donkey (Algerian)
  "يا حاشي": { s: 3, c: 4 }, // you worthless (Algerian)
  "روح تنيك": { s: 3, c: 5 }, // go get fucked (Algerian)
  "والو فيك": { s: 3, c: 4 }, // nothing in you (Algerian insult)
  "يا مجرور": { s: 3, c: 4 }, // you dragged (Algerian insult)
  "يا طحان": { s: 3, c: 4 }, // you grinder (sexual insult, Algerian)
  "يا كبران": { s: 1, c: 4 }, // you old fool (Algerian)
  "يا حقار": { s: 3, c: 4 }, // you contemptible (Algerian)
  "سكّت يا هبيل": { s: 1, c: 4 }, // shut up stupid (Algerian)
  "يا ماكلة الراس": { s: 3, c: 4 }, // you headache (Algerian insult)
  "يا بخيل": { s: 3, c: 4 }, // you miser (Algerian insult)

  // Compound phrases (additional)
  "يا ابن الستين كلب": { s: 3, c: 5 }, // you son of sixty dogs
  "يلعن ابو ابوك": { s: 1, c: 4 }, // curse your grandfather
  "يلعن سبع ارواح ابوك": { s: 1, c: 4 }, // curse seven souls of your father
  "يلعن ابوك على ابو ابوك": { s: 1, c: 4 }, // curse your father upon your grandfather
  "كس أمك على أمك": { s: 4, c: 5 }, // your mother's pussy upon your mother
  "أيري بكل عيلتك": { s: 4, c: 5 }, // my dick in your whole family
  "يلعن ابو هالجنسية": { s: 1, c: 4 }, // curse the father of this nationality
  "يا ابن ستين شرموطة": { s: 5, c: 5 }, // son of sixty whores
  "يا ابن ألف كلب": { s: 3, c: 5 }, // son of a thousand dogs
  "يلعن عرض أمك": { s: 3, c: 5 }, // curse your mother's honor
  "يلعن أبو أمك": { s: 1, c: 4 }, // curse your mother's father
  "كس أخت إلي خلفك": { s: 4, c: 5 }, // pussy of the sister of who bore you
  "أيري بأبوك وأبو أبوك": { s: 1, c: 4 }, // my dick in your father and grandfather
  "يلعن الساعة اللي اتولدت فيها": { s: 3, c: 5 }, // curse the hour you were born
  "يا ابن المية كلب": { s: 3, c: 5 }, // son of a hundred dogs
  "كسمك يابن الوسخة": { s: 4, c: 5 }, // your mother's pussy you son of filthy
  "أنيكك أنت وأمك": { s: 3, c: 5 }, // I'll fuck you and your mother
  "على كس أمك": { s: 4, c: 5 }, // upon your mother's pussy

  // Additional sexual terms in Arabic
  "مص": { s: 4, c: 4 }, // suck (sexual)
  "مصمص": { s: 4, c: 4 }, // suck (repeated, sexual)
  "لحس": { s: 4, c: 4 }, // lick (sexual)
  "ناكني": { s: 4, c: 5 }, // fuck me
  "انيكك": { s: 4, c: 5 }, // I'll fuck you
  "ناك": { s: 4, c: 5 }, // fucked
  "ينيك": { s: 4, c: 5 }, // fucks
  "نياكة": { s: 4, c: 5 }, // fucking (noun)
  "نيّاك": { s: 4, c: 5 }, // fucker (one who fucks a lot)
  "شهوة": { s: 4, c: 4 }, // lust
  "شبق": { s: 4, c: 4 }, // horny
  "عاهر": { s: 5, c: 4 }, // whore (masc)
  "مني": { s: 4, c: 4 }, // semen
  "اغتصاب": { s: 5, c: 5 }, // rape
  "تحرش": { s: 4, c: 4 }, // sexual harassment
  "متحرش": { s: 4, c: 4 }, // harasser
  "قواد أمك": { s: 4, c: 4 }, // your mother's pimp

  // Additional body part vulgarities
  "زبر": { s: 4, c: 3 }, // dick (variant)
  "أير": { s: 4, c: 3 }, // dick
  "كعب": { s: 4, c: 4 }, // penis (slang)
  "منقة": { s: 4, c: 4 }, // vagina (vulgar slang)
  "كساس": { s: 4, c: 4 }, // pussies (plural vulgar)
  "طياز": { s: 4, c: 4 }, // asses (plural vulgar)
  "بزازك": { s: 4, c: 4 }, // your breasts (vulgar)
  "بزازها": { s: 4, c: 4 }, // her breasts (vulgar)
  "طيزها": { s: 4, c: 4 }, // her ass (vulgar)
  "كسها": { s: 4, c: 4 }, // her pussy (vulgar)
  "زبه": { s: 4, c: 4 }, // his dick (vulgar)
  "زبره": { s: 4, c: 4 }, // his dick (vulgar variant)

  // Homophobic terms across dialects (additional)
  "لوطي ابن لوطي": { s: 5, c: 4 }, // sodomite son of sodomite
  "يا لوطي": { s: 5, c: 4 }, // you sodomite
  "مخنث": { s: 5, c: 4 }, // effeminate / transgender (slur)
  "شاذ جنسيا": { s: 5, c: 4 }, // sexually deviant
  "يا شاذ": { s: 5, c: 4 }, // you deviant
  "ممحون": { s: 5, c: 4 }, // horny / desperate (insult)
  "يا ممحون": { s: 5, c: 4 }, // you horny/desperate
  "بنوتي": { s: 5, c: 4 }, // girly boy (insult)
  "طنط": { s: 5, c: 4 }, // effeminate (Egyptian slur)
  "يا طنط": { s: 5, c: 4 }, // you effeminate (Egyptian)
  "خنيثة": { s: 5, c: 4 }, // effeminate woman / slur
  "عالمة": { s: 5, c: 4 }, // belly dancer (used as insult)
  "زوج مرات": { s: 5, c: 4 }, // husband of wives (insult for cuckold)

  // Religious insults
  "يلعن دين أمك": { s: 2, c: 3 }, // curse your mother's religion
  "يلعن الدين": { s: 2, c: 3 }, // curse the religion
  "يلعن دين ابوك": { s: 1, c: 4 }, // curse your father's religion
  "كافر ابن كافر": { s: 2, c: 3 }, // infidel son of infidel
  "يا ملحد": { s: 2, c: 3 }, // you atheist (used as insult)
  "يلعن دين ايلي خلفك": { s: 2, c: 3 }, // curse the religion of who bore you
  "ابن الحرام ابن الحرام": { s: 3, c: 4 }, // bastard son of bastard
  "يا مرتد ابن مرتد": { s: 2, c: 3 }, // you apostate son of apostate
  "يا كفّار": { s: 2, c: 3 }, // you infidels (plural insult)
  "يلعن دين هالدنيا": { s: 2, c: 3 }, // curse the religion of this world
  "يلعن الشيطان ابوك": { s: 1, c: 4 }, // may the devil curse your father
  "يا ابن ابليس": { s: 2, c: 3 }, // son of Satan
  "يا عدو الله": { s: 2, c: 3 }, // enemy of God

  // Internet abbreviations used in Arabic chat
  "كسمك ياخول": { s: 4, c: 3 }, // your mom's pussy you faggot
  "يبن الشرموطة": { s: 5, c: 5 }, // son of a whore (spoken/typed fast)
  "يبن المتناكة": { s: 3, c: 5 }, // son of the fucked one (spoken/typed fast)
  "يبن الوسخة": { s: 2, c: 3 }, // son of the dirty one (spoken/typed fast)
  "كسختك": { s: 4, c: 3 }, // your sister's pussy (abbreviated)
  "يبن الكلب": { s: 2, c: 3 }, // son of a dog (spoken/typed fast)
  "يبن الحرام": { s: 3, c: 4 }, // bastard (spoken/typed fast)
  "يبن الزنا": { s: 2, c: 3 }, // son of adultery (spoken/typed fast)
  "امك شرموطة": { s: 5, c: 4 }, // your mother is a whore (direct)
  "اختك شرموطة": { s: 5, c: 4 }, // your sister is a whore (direct)
  "ابوك قواد": { s: 1, c: 4 }, // your father is a pimp (direct)
  "كس اختك ع امك": { s: 4, c: 3 }, // your sister's pussy on your mother
  "يلعن كسمك": { s: 4, c: 3 }, // curse your mother's pussy

  // ========================================
  // === Franco-Arabic / Arabizi (Romanized with number substitutions) ===
  // ========================================
  "3ars": { s: 3, c: 5 }, // pimp (عرص)
  "7mar": { s: 3, c: 5 }, // donkey (حمار)
  "7ayawan": { s: 3, c: 5 }, // animal (حيوان)
  "7mara": { s: 3, c: 5 }, // female donkey (حمارة)
  "5awal": { s: 3, c: 5 }, // faggot (خول)
  "5ara": { s: 3, c: 5 }, // shit (خرا)
  "5aneeth": { s: 3, c: 5 }, // effeminate (خنيث)
  "5anzeer": { s: 3, c: 5 }, // pig (خنزير)
  "2a7a": { s: 3, c: 5 }, // exclamation of disgust (أحا)
  "kos 2omak": { s: 4, c: 5 }, // your mother's pussy
  "2eri": { s: 4, c: 5 }, // my dick (أيري)
  "2eri feek": { s: 4, c: 5 }, // my dick in you
  "2eri fi teezak": { s: 4, c: 5 }, // my dick in your ass
  "te7an": { s: 3, c: 5 }, // sexual grinding (طحن)
  "3abd": { s: 5, c: 5 }, // slave (عبد - racist)
  "za7af": { s: 3, c: 5 }, // creep (زحف)
  "zan2a": { s: 3, c: 5 }, // stinky (زنخة)
  "nayik": { s: 3, c: 5 }, // fucker (نايك)
  "nayika": { s: 3, c: 5 }, // fucker (fem)
  "sha5 5ara": { s: 3, c: 5 }, // shit person
  "ya 5awal": { s: 3, c: 5 }, // you faggot
  "ya 7ayawan": { s: 3, c: 5 }, // you animal
  "ya 7mar": { s: 3, c: 5 }, // you donkey
  "ya 5anzeer": { s: 3, c: 5 }, // you pig
  "ya 3ars": { s: 3, c: 5 }, // you pimp
  "5olo2": { s: 3, c: 5 }, // get lost (خلوق inverted as insult)
  "kos o5tak": { s: 4, c: 5 }, // your sister's pussy
  "ko55": { s: 4, c: 5 }, // pussy variant
  "3arsa": { s: 3, c: 5 }, // female pimp (عرصة)
  "m3arras": { s: 3, c: 5 }, // pimped out (معرص)
  "manyoo2": { s: 3, c: 5 }, // fucked (منيوك)
  "manyoo2a": { s: 3, c: 5 }, // fucked (fem)
  "5ayen": { s: 3, c: 5 }, // traitor (خاين)
  "met7arresh": { s: 3, c: 5 }, // harasser (متحرش)
  "e7'a": { s: 3, c: 5 }, // exclamation of disgust variant
  "ya 2a5oo": { s: 3, c: 5 }, // you brother (condescending)
  "ya ibn el 5ara": { s: 3, c: 5 }, // son of shit
  "ya ibn el 7mar": { s: 3, c: 5 }, // son of a donkey
  "ya ibn el 5anzeer": { s: 3, c: 5 }, // son of a pig
  "ibn 3ahira": { s: 5, c: 5 }, // son of a whore
  "ya zo2": { s: 3, c: 5 }, // you shit (Gulf)
  "ya fa7esh": { s: 3, c: 5 }, // you obscene
  "ya za3ran": { s: 3, c: 5 }, // you thug
  "ya sefla": { s: 3, c: 5 }, // you scum
  "ya wa6i": { s: 3, c: 5 }, // you lowlife
  "ya na3al": { s: 3, c: 5 }, // you curse
  "3an kos omak": { s: 4, c: 5 }, // upon your mother's pussy
  "ya 5anees": { s: 3, c: 5 }, // you effeminate (variant)

  // ========================================
  // === More Lebanese/Syrian Dialect ===
  // ========================================
  "انتاك": { s: 3, c: 5 }, // get fucked (Lebanese)
  "كس أختك يا ابن الشرموطة": { s: 5, c: 5 }, // your sister's pussy you son of a whore
  "يا ابن الملعون": { s: 3, c: 4 }, // son of the cursed
  "يا قليل الأدب": { s: 3, c: 4 }, // you ill-mannered
  "فشخة": { s: 3, c: 4 }, // destruction (vulgar)
  "ابن الحرام المتناك": { s: 3, c: 4 }, // bastard who got fucked
  "ابن الكلبة المتناكة": { s: 3, c: 5 }, // son of the fucked bitch
  "بدي أنيك عرضك": { s: 3, c: 5 }, // I'll fuck your honor
  "يا كلب الشارع": { s: 3, c: 4 }, // you street dog
  "يا حمار الشارع": { s: 3, c: 4 }, // you street donkey
  "يا وقح": { s: 3, c: 4 }, // you rude
  "يا قليل الحيا": { s: 3, c: 4 }, // you shameless
  "يا بلا كرامة": { s: 3, c: 4 }, // you without dignity
  "يا ابن الزنا المتناك": { s: 3, c: 5 }, // son of adultery who got fucked
  "روح كل خرا وموت": { s: 5, c: 5 }, // go eat shit and die
  "روح فشخ حالك": { s: 3, c: 4 }, // go destroy yourself
  "يا أجرب": { s: 3, c: 4 }, // you mangy

  // ========================================
  // === More Moroccan Darija ===
  // ========================================
  "نيك بوك": { s: 1, c: 4 }, // fuck your father (Moroccan)
  "زبي ف ممك": { s: 4, c: 4 }, // my dick in your mother (Moroccan)
  "كول تبون ممك": { s: 5, c: 5 }, // eat your mother's cunt (Moroccan)
  "ولد التبون": { s: 5, c: 5 }, // son of a cunt (Moroccan)
  "ولد الحشيش": { s: 3, c: 4 }, // son of hashish (Moroccan)
  "يا حمار ولد الحمار": { s: 3, c: 4 }, // you donkey son of donkey (Moroccan)
  "زبي فيك": { s: 4, c: 4 }, // my dick in you (Moroccan)
  "تبون اختك": { s: 5, c: 5 }, // your sister's cunt (Moroccan)
  "يا حلقوم": { s: 3, c: 4 }, // you throat (Moroccan insult)
  "يا كلب ولد الكلب": { s: 3, c: 4 }, // you dog son of dog (Moroccan)
  "يا زفت ولد الزفت": { s: 3, c: 4 }, // you tar son of tar (Moroccan)
  "سير تقود يا ولد القحبة": { s: 5, c: 5 }, // go pimp you son of a whore (Moroccan)
  "يا بغل ولد البغل": { s: 3, c: 4 }, // you mule son of a mule (Moroccan)

  // ========================================
  // === More Algerian Dialect ===
  // ========================================
  "نعل كوك": { s: 1, c: 4 }, // curse your father (Algerian variant)
  "يا حمار يتنيك": { s: 3, c: 5 }, // you donkey get fucked (Algerian)
  "روح يبان بوك": { s: 1, c: 4 }, // go show your father (Algerian insult)
  "يا ولد الزنية": { s: 3, c: 4 }, // you son of adultery (Algerian)
  "نعل ربك": { s: 3, c: 4 }, // curse your lord (Algerian)
  "يا قرعة": { s: 3, c: 4 }, // you bald (Algerian insult)
  "يا مهبول": { s: 3, c: 4 }, // you crazy (Algerian)
  "يا قواد يبن القواد": { s: 3, c: 4 }, // you pimp son of pimp (Algerian variant)
  "يا شيطان": { s: 3, c: 4 }, // you devil (Algerian)
  "يا فراخ": { s: 3, c: 4 }, // you chicken (Algerian insult)
  "يا حقار يبن الحقار": { s: 3, c: 4 }, // you contemptible son of contemptible (Algerian)
  "روح تنيك يا حمار": { s: 3, c: 5 }, // go get fucked donkey (Algerian)
  "نعل بو ممك يا قواد": { s: 1, c: 4 }, // curse your mother's father you pimp (Algerian)

  // ========================================
  // === More Tunisian Dialect ===
  // ========================================
  "يا كلب ابن الكلب": { s: 3, c: 4 }, // you dog son of a dog (Tunisian)
  "يا عفن": { s: 3, c: 4 }, // you rotten (Tunisian)
  "يا قحبة بنت القحبة": { s: 5, c: 4 }, // you whore daughter of whore (Tunisian)
  "بارّا تنيّك": { s: 3, c: 5 }, // go get fucked (Tunisian variant)
  "نعل بو زبك": { s: 1, c: 4 }, // curse your dick's father (Tunisian)
  "نعل دين بو ممك": { s: 1, c: 4 }, // curse your mother's father's religion (Tunisian)
  "يا خنزير ابن الخنزير": { s: 3, c: 4 }, // you pig son of pig (Tunisian)
  "يا متنيّك": { s: 3, c: 5 }, // you fucked one (Tunisian)
  "يا حقير ابن الحقير": { s: 3, c: 4 }, // you despicable son of despicable (Tunisian)
  "يا مسطول ابن المسطول": { s: 3, c: 4 }, // you stoned son of stoned (Tunisian)
  "كاهبة بنت الكاهبة": { s: 5, c: 4 }, // whore daughter of a whore (Tunisian variant)
  "بارّا روح": { s: 3, c: 4 }, // go away (Tunisian dismissive)
  "يا ابن الباطل": { s: 3, c: 4 }, // you son of falsehood (Tunisian)

  // ========================================
  // === More Egyptian Dialect ===
  // ========================================
  "يا ابن الوسخة المتناكة": { s: 3, c: 5 }, // son of the dirty fucked one (Egyptian)
  "يا ابن الشرشوحة المتناكة": { s: 3, c: 5 }, // son of the fucked slut (Egyptian)
  "كسمك يا خول": { s: 4, c: 4 }, // your mother's pussy you faggot (Egyptian)
  "يا خول ابن الخول": { s: 3, c: 4 }, // you faggot son of faggot (Egyptian)
  "يا عرص ابن العرص المتناك": { s: 3, c: 5 }, // you pimp son of the fucked pimp (Egyptian)
  "يا كسمك": { s: 4, c: 4 }, // your mother's pussy (Egyptian vocative)
  "يا متناك ابن المتناكة": { s: 3, c: 5 }, // you fucker son of the fucked (Egyptian)
  "يا جزمة قديمة": { s: 3, c: 4 }, // you old shoe (Egyptian insult)
  "عارف أمك كويس": { s: 3, c: 4 }, // I know your mother well (Egyptian innuendo)
  "يا ابن ستين في ستين": { s: 3, c: 4 }, // son of sixty times sixty (Egyptian)
  "يا ابن المية شرموطة": { s: 5, c: 4 }, // son of a hundred whores (Egyptian)
  "يا ابن الشريفة": { s: 3, c: 4 }, // son of the noble one (sarcastic, Egyptian)
  "يا ابن العيلة الوسخة": { s: 3, c: 4 }, // son of the dirty family (Egyptian)
  "يا أبو وش بايخ": { s: 3, c: 4 }, // you with the stale face (Egyptian)
  "يا ولاد الوسخة": { s: 3, c: 4 }, // you children of the dirty one (Egyptian)
  "يا ولاد الحرام الوسخين": { s: 3, c: 4 }, // you dirty bastards (Egyptian)

  // ========================================
  // === More Gulf/Khaleeji Dialect ===
  // ========================================
  "يا خنيث ابن الخنيث": { s: 3, c: 4 }, // you effeminate son of effeminate (Gulf)
  "يا مزين ابن المزين": { s: 3, c: 4 }, // you pimp son of pimp (Gulf)
  "يا ابن الثور": { s: 3, c: 4 }, // son of a bull (Gulf)
  "يا بغل ابن البغل": { s: 3, c: 4 }, // you mule son of mule (Gulf)
  "يا ابن التيس": { s: 3, c: 4 }, // son of a goat (Gulf)
  "يا ابن الخنزيرة": { s: 3, c: 4 }, // son of a sow (Gulf)
  "وجهك زق": { s: 3, c: 5 }, // your face is shit (Gulf)
  "يا صرصور": { s: 4, c: 4 }, // you cockroach (Gulf)
  "يا حشرة": { s: 3, c: 4 }, // you insect (Gulf)
  "يا نملة": { s: 3, c: 4 }, // you ant (Gulf insult)
  "لا شرف لك": { s: 3, c: 4 }, // you have no honor (Gulf)
  "يا عديم الأصل": { s: 3, c: 4 }, // you without origin (Gulf)
  "يا قليل الأصل": { s: 3, c: 4 }, // you of little origin (Gulf)
  "يا مغفل": { s: 1, c: 4 }, // you gullible fool (Gulf)
  "يا أبله ابن الأبله": { s: 1, c: 4 }, // you idiot son of idiot (Gulf)
  "أمك في الشارع": { s: 3, c: 4 }, // your mother in the street (Gulf)
  "أبوك ديوث": { s: 1, c: 4 }, // your father is a cuckold (Gulf)

  // ========================================
  // === More Iraqi Dialect ===
  // ========================================
  "يا ابن الگحبة المعرصة": { s: 5, c: 4 }, // son of the pimped whore (Iraqi)
  "يا چلب ابن الچلب": { s: 3, c: 4 }, // you dog son of dog (Iraqi)
  "يا بربوگ ابن البربوگ": { s: 1, c: 4 }, // you fool son of fool (Iraqi)
  "گحبة أمك ع أمك": { s: 5, c: 4 }, // your mother's whore upon your mother (Iraqi)
  "يخرب شرفك": { s: 3, c: 4 }, // may your honor be destroyed (Iraqi)
  "ابن السنين گلب": { s: 3, c: 4 }, // son of years of dogs (Iraqi)
  "يا ابن الطرطور": { s: 3, c: 4 }, // son of the worthless (Iraqi)
  "يا بعير ابن البعير": { s: 3, c: 4 }, // you camel son of camel (Iraqi)
  "يا معيدي ابن المعيدي": { s: 1, c: 4 }, // you fool son of fool (Iraqi)
  "يا ابن الحرامية": { s: 3, c: 4 }, // son of thieves (Iraqi)
  "كسمك يا ابن الگحبة": { s: 5, c: 5 }, // your mother's pussy son of whore (Iraqi)
  "يلعن بو جدك": { s: 1, c: 4 }, // curse your grandfather's father (Iraqi)
  "يا ابن السلبوطة": { s: 3, c: 4 }, // son of the slipper (Iraqi insult)

  // ========================================
  // === Omani Dialect ===
  // ========================================
  "يا خايس": { s: 3, c: 4 }, // you rotten (Omani)
  "يا معفن ابن المعفن": { s: 3, c: 4 }, // you rotten son of rotten (Omani)
  "يا بوعلم": { s: 1, c: 4 }, // you fool (Omani)
  "يا حيوان ابن الحيوان": { s: 3, c: 4 }, // you animal son of animal (Omani)
  "أمك زانية": { s: 3, c: 4 }, // your mother is an adulteress (Omani)
  "يا ابن الزانية": { s: 3, c: 4 }, // son of an adulteress (Omani)
  "يلعن دين ابو ابوك": { s: 1, c: 4 }, // curse your grandfather's religion (Omani)
  "يا سخيف ابن السخيف": { s: 3, c: 4 }, // you pathetic son of pathetic (Omani)

  // ========================================
  // === Bahraini Dialect ===
  // ========================================
  "يا بقر ابن البقر": { s: 3, c: 4 }, // you cow son of cow (Bahraini)
  "يا ثور ابن الثور": { s: 3, c: 4 }, // you bull son of bull (Bahraini)
  "يا تيس ابن التيس": { s: 3, c: 4 }, // you goat son of goat (Bahraini)
  "بو وجه خراب": { s: 3, c: 4 }, // with a ruined face (Bahraini)
  "يا خس": { s: 1, c: 4 }, // you lettuce (Bahraini insult for dumb)
  "يا ماعز": { s: 3, c: 4 }, // you goat (Bahraini)
  "يا عنز": { s: 3, c: 4 }, // you nanny goat (Bahraini insult)

  // ========================================
  // === Kuwaiti Dialect ===
  // ========================================
  "يا خوش زبالة": { s: 3, c: 4 }, // you are great garbage (Kuwaiti sarcasm)
  "يا ابن الخادمة": { s: 3, c: 4 }, // son of the maid (Kuwaiti classist insult)
  "يا حافي": { s: 3, c: 4 }, // you barefoot (Kuwaiti classist)
  "يا فقير ابن الفقير": { s: 3, c: 4 }, // you poor son of poor (Kuwaiti)
  "ملعون أبوك وأبو أبوك": { s: 1, c: 4 }, // cursed your father and grandfather (Kuwaiti)
  "يا ابن الزفت الأسود": { s: 3, c: 4 }, // son of black tar (Kuwaiti)
  "يا هبيل ابن الهبيل": { s: 1, c: 4 }, // you stupid son of stupid (Kuwaiti)
  "يا خبل ابن الخبل": { s: 3, c: 4 }, // you crazy son of crazy (Kuwaiti)

  // ========================================
  // === Mauritanian Dialect ===
  // ========================================
  "يا كافر ابن الكافر": { s: 3, c: 4 }, // you infidel son of infidel (Mauritanian)
  "يا زنجي ابن الزنجي": { s: 5, c: 4 }, // you negro son of negro (Mauritanian racist)
  "يا عبد ابن العبد": { s: 5, c: 4 }, // you slave son of slave (Mauritanian racist)
  "يا ولد الحرام المطرود": { s: 3, c: 4 }, // you expelled bastard (Mauritanian)

  // ========================================
  // === More Romanized Compound Phrases ===
  // ========================================
  "kos om el kol": { s: 4, c: 5 }, // everyone's mother's pussy
  "telhas kos omak": { s: 4, c: 5 }, // lick your mother's pussy
  "telhas teez omak": { s: 3, c: 5 }, // lick your mother's ass
  "ya ibn el 7aram": { s: 3, c: 5 }, // you bastard
  "ya ibn el gahba": { s: 5, c: 5 }, // you son of a whore
  "ya ibn el mara el wisikha": { s: 3, c: 5 }, // son of the dirty woman
  "kol 5ara w moot": { s: 5, c: 5 }, // eat shit and die
  "ya wlad el 7aram": { s: 3, c: 5 }, // you bastards
  "ayre b kos omak": { s: 4, c: 5 }, // my dick in your mother's pussy
  "ayre b teezak": { s: 4, c: 5 }, // my dick in your ass
  "a7a ya 5awal": { s: 3, c: 5 }, // disgust you faggot
  "ya ibn el metnaka el wisikha": { s: 3, c: 5 }, // son of the dirty fucked one
  "neek omak ya ibn el sharmouta": { s: 5, c: 5 }, // fuck your mother son of a whore
  "kos o5tak ya manyouk": { s: 4, c: 5 }, // your sister's pussy you fucked
  "rooh en2ebir": { s: 3, c: 5 }, // go get buried
  "rooh inteek": { s: 3, c: 5 }, // go get fucked
  "ya zalameh ibn el zalameh": { s: 3, c: 5 }, // you man son of man (condescending)
  "ya 7ayawan ibn el 7ayawan": { s: 3, c: 5 }, // you animal son of animal
  "kol zeg": { s: 3, c: 5 }, // eat shit (variant)
  "ya ibn el shar6an": { s: 3, c: 5 }, // son of the devil
  "ya khanzeera": { s: 3, c: 5 }, // you sow
  "ya 7mara bint el 7mara": { s: 3, c: 5 }, // you donkey daughter of donkey
  "ibn el 3ahira el metnaika": { s: 5, c: 5 }, // son of the fucked whore
  "ya zebi": { s: 4, c: 5 }, // you dick (Tunisian romanized)
  "ya t7in": { s: 3, c: 5 }, // you flour (sexual insult)
  "ya m7ayen": { s: 3, c: 5 }, // you cheater
  "ya zift ya zibele": { s: 3, c: 5 }, // you tar you trash
  "barra nik": { s: 3, c: 5 }, // go fuck (romanized Maghreb)
  "barra in3al bouk": { s: 1, c: 5 }, // go curse your father (romanized Maghreb)
  "zaml ibn el zaml": { s: 3, c: 5 }, // faggot son of faggot (romanized Maghreb)
  "t7an fi omak": { s: 3, c: 5 }, // grind in your mother (sexual, romanized)
  "nikomak ya 7mar": { s: 3, c: 5 }, // fuck your mother you donkey (romanized)

  // ========================================
  // === More Additional Sexual Terms ===
  // ========================================
  "نيكني يا زبي": { s: 4, c: 5 }, // fuck me my dick (vulgar phrase)
  "مصي زبي": { s: 4, c: 4 }, // suck my dick (fem command)
  "مصي أيري": { s: 4, c: 4 }, // suck my dick (variant)
  "نيك طيزك": { s: 4, c: 5 }, // fuck your ass
  "نيك كسك": { s: 4, c: 5 }, // fuck your pussy
  "حط زبي بكسك": { s: 4, c: 4 }, // put my dick in your pussy
  "حط أيري بطيزك": { s: 4, c: 4 }, // put my dick in your ass
  "بدي أنيك طيزك": { s: 4, c: 5 }, // I want to fuck your ass
  "بدي أنيك كسك": { s: 4, c: 5 }, // I want to fuck your pussy
  "شلحي هدومك": { s: 4, c: 4 }, // take off your clothes (fem)
  "يا بنت الشرموطة": { s: 5, c: 4 }, // daughter of a whore
  "بنت القحبة": { s: 5, c: 4 }, // daughter of a whore
  "بنت الكلب": { s: 4, c: 4 }, // daughter of a dog
  "بنت المتناكة": { s: 4, c: 5 }, // daughter of the fucked one
  "بنت الحرام": { s: 4, c: 4 }, // illegitimate daughter
  "يا حبلة": { s: 4, c: 4 }, // you pregnant (insult)
  "يا فاتحة": { s: 4, c: 4 }, // you open (sexual insult)
  "يا واسعة": { s: 4, c: 4 }, // you loose (sexual insult)
  "يا نجسة": { s: 4, c: 4 }, // you filthy (fem)
  "يا وسخة": { s: 4, c: 4 }, // you dirty (fem)
  "يا شريرة": { s: 4, c: 4 }, // you evil (fem)
  "يا لبوة": { s: 4, c: 4 }, // you lioness (sexual context)

  // ========================================
  // === EXPANSION: Egyptian dialect - extended ===
  // ========================================
  "ابن الشرموطة الوسخة": { s: 5, c: 4 }, // Son of the dirty whore (Egyptian)
  "يا ابن اللبوة الوسخة": { s: 3, c: 4 }, // Son of the dirty lioness (Egyptian)
  "كسم ابوك": { s: 1, c: 4 }, // Your father's pussy (Egyptian)
  "كسم اللي خلفك": { s: 4, c: 4 }, // Pussy of who bore you (Egyptian)
  "كسم اللي جابك": { s: 4, c: 4 }, // Pussy of who brought you (Egyptian)
  "يا ابن الوسخين": { s: 3, c: 4 }, // Son of dirty ones (Egyptian)
  "يا ابن المره الوسخة": { s: 3, c: 4 }, // Son of the dirty woman (Egyptian)
  "يا متناك يا وسخ": { s: 3, c: 5 }, // You fucker you dirty (Egyptian)
  "يا خنزيرة": { s: 3, c: 4 }, // You sow (Egyptian fem)
  "نيك أمك يا خول": { s: 3, c: 5 }, // Fuck your mother you faggot (Egyptian)
  "يا ابن المره المتناكة": { s: 3, c: 5 }, // Son of the fucked woman (Egyptian)
  "يا واد يا وسخ": { s: 3, c: 4 }, // You dirty boy (Egyptian)
  "يا واد يا ابن الوسخة": { s: 3, c: 4 }, // You boy son of the dirty one (Egyptian)
  "يا بنت الوسخة": { s: 3, c: 4 }, // You daughter of the dirty one (Egyptian)
  "يا بنت المتناكة": { s: 3, c: 5 }, // You daughter of the fucked one (Egyptian)
  "كسمك يا بنت الشرموطة": { s: 5, c: 4 }, // Your mom's pussy daughter of a whore (Egyptian)
  "يا متناكة يا وسخة": { s: 3, c: 5 }, // You fucked one you dirty (Egyptian fem)
  "يا شرموطة يا وسخة": { s: 5, c: 4 }, // You whore you dirty (Egyptian)
  "اقطع من هنا": { s: 3, c: 4 }, // Get out of here (Egyptian)
  "يا ابن الست": { s: 2, c: 3 }, // Son of the lady (Egyptian euphemism)
  "نيك امك يا ابن الشرموطة": { s: 5, c: 5 }, // Fuck your mother son of a whore (Egyptian)
  "يا ابن الأفعى": { s: 3, c: 4 }, // Son of the viper (Egyptian)
  "يا ملعون يا ابن الملعون": { s: 3, c: 4 }, // You cursed one son of the cursed (Egyptian)
  "يا حمار يا ابن الحمار": { s: 3, c: 4 }, // You donkey son of a donkey (Egyptian)
  "يا غبي يا ابن الغبي": { s: 1, c: 4 }, // You stupid son of stupid (Egyptian)
  "يا عبيط يا ابن العبيطة": { s: 1, c: 4 }, // You idiot son of the idiot (Egyptian)
  "يا أهبل يا ابن الهبلة": { s: 1, c: 4 }, // You stupid son of the stupid (Egyptian)
  "نيلة في ابوك": { s: 1, c: 4 }, // Indigo in your father (Egyptian curse)
  "نيلة فيك": { s: 3, c: 4 }, // Indigo in you (Egyptian curse)
  "اللهم اكفينا شرك": { s: 3, c: 4 }, // God protect us from your evil (Egyptian passive aggressive)
  "يا ابن دين الكلب": { s: 3, c: 4 }, // Son of the dog's religion (Egyptian)
  "يا بتاع كله": { s: 3, c: 4 }, // You of everything (Egyptian, implying promiscuity)
  "يا رخيصة": { s: 3, c: 4 }, // You cheap one (Egyptian fem)
  "يا رخيص": { s: 3, c: 4 }, // You cheap one (Egyptian masc)
  "يا قليلة الأدب": { s: 3, c: 4 }, // You ill-mannered (Egyptian fem)
  "يا قليل الأدب يا ابن المتناكة": { s: 3, c: 5 }, // You ill-mannered son of the fucked (Egyptian)
  "يا ابن الجزمة القديمة": { s: 3, c: 4 }, // Son of the old shoe (Egyptian)
  "يا ابن الشحاتة": { s: 3, c: 4 }, // Son of the beggar (Egyptian fem)
  "يا ابن الشحات": { s: 3, c: 4 }, // Son of the beggar (Egyptian masc)
  "يا ابن النيل": { s: 3, c: 4 }, // Son of the Nile (Egyptian sarcastic)
  "يا حيوانة": { s: 3, c: 4 }, // You animal (Egyptian fem)
  "يلعن ابو دينك": { s: 1, c: 4 }, // Curse your religion's father (Egyptian)
  "يلعن كسم دينك": { s: 4, c: 4 }, // Curse your religion's pussy (Egyptian)
  "كسمين أمك": { s: 4, c: 4 }, // Double pussy of your mother (Egyptian)
  "يا ابن التين": { s: 2, c: 3 }, // Son of figs (Egyptian euphemism for insult)
  "أختك شرموطة يا ابن الكلب": { s: 5, c: 4 }, // Your sister is a whore son of a dog (Egyptian)
  "كسمك على كسمك": { s: 4, c: 4 }, // Your mom's pussy upon your mom's pussy (Egyptian)
  "يا ابن الشلحة": { s: 3, c: 4 }, // Son of the stripper (Egyptian)

  // ========================================
  // === EXPANSION: Levantine dialect (Syrian) - extended ===
  // ========================================
  "روح لعند أمك": { s: 3, c: 4 }, // Go to your mother (Syrian dismissive)
  "يا ابن القحبة المنيوكة": { s: 5, c: 5 }, // Son of the fucked whore (Syrian)
  "أيري بكل خلقتك": { s: 4, c: 4 }, // My dick in your entire creation (Syrian)
  "أيري بعرضك": { s: 4, c: 4 }, // My dick in your honor (Syrian)
  "أيري بدينك": { s: 4, c: 4 }, // My dick in your religion (Syrian)
  "أيري بربك": { s: 4, c: 4 }, // My dick in your lord (Syrian)
  "أيري بأبوك وأمك": { s: 1, c: 4 }, // My dick in your father and mother (Syrian)
  "كس أمك وأم اللي خلفك": { s: 4, c: 4 }, // Your mother's pussy and who bore you's mother (Syrian)
  "يلعن عرض أمك وأبوك": { s: 3, c: 4 }, // Curse your parents' honor (Syrian)
  "يا مقطع من شجرة": { s: 3, c: 4 }, // You cut from a tree (Syrian, no family)
  "يا قليل الشرف": { s: 3, c: 4 }, // You of little honor (Syrian)
  "يا عديم الشرف والكرامة": { s: 3, c: 4 }, // You without honor and dignity (Syrian)
  "يا ابن الشرشوحة المنيوكة": { s: 3, c: 5 }, // Son of the fucked slut (Syrian)
  "يلعن روحك وروح اللي جابك": { s: 3, c: 4 }, // Curse your soul and who brought you (Syrian)
  "يا حيوان يا ابن الحيوان": { s: 3, c: 4 }, // You animal son of animal (Syrian)
  "روح انحاش من وجي": { s: 3, c: 4 }, // Get out of my face (Syrian)
  "يا كلب يا ابن الكلب": { s: 3, c: 4 }, // You dog son of a dog (Syrian)
  "يا مشلوح": { s: 3, c: 4 }, // You outcast (Syrian)
  "يا مرمي": { s: 3, c: 4 }, // You thrown away (Syrian)
  "يا قرد يا ابن القرد": { s: 3, c: 4 }, // You monkey son of monkey (Syrian)
  "بدي فشخ وجهك": { s: 3, c: 4 }, // I'll smash your face (Syrian)
  "بدي كسر خشمك": { s: 3, c: 4 }, // I'll break your nose (Syrian)
  "بدي فرمك": { s: 3, c: 4 }, // I'll grind you (Syrian)
  "بدي أنيك عيلتك": { s: 3, c: 5 }, // I'll fuck your family (Syrian)
  "يلعن اللي خلفك": { s: 3, c: 4 }, // Curse who bore you (Syrian)
  "يلعن أبو خلقتك": { s: 1, c: 4 }, // Curse the father of your creation (Syrian)
  "كل خرا وموت": { s: 5, c: 5 }, // Eat shit and die (Syrian)
  "يا ابن الستين شرموطة": { s: 5, c: 4 }, // Son of sixty whores (Syrian)
  "يا ابن الألف كلب": { s: 3, c: 4 }, // Son of a thousand dogs (Syrian)
  "يا زبالة الشوارع": { s: 3, c: 4 }, // You garbage of the streets (Syrian)
  "يا نفاية": { s: 3, c: 4 }, // You waste (Syrian)
  "يا قمامة": { s: 3, c: 4 }, // You garbage (Syrian)
  "وجهك زبالة": { s: 3, c: 4 }, // Your face is garbage (Syrian)
  "يا منيك أمك": { s: 3, c: 5 }, // You fucker of your mother (Syrian)

  // ========================================
  // === EXPANSION: Levantine dialect (Lebanese) - extended ===
  // ========================================
  "كس إمك يا ابن القحبة": { s: 5, c: 5 }, // Your mother's pussy son of a whore (Lebanese)
  "أيري فيك وبإمك": { s: 4, c: 4 }, // My dick in you and your mother (Lebanese)
  "روح ولك": { s: 3, c: 4 }, // Go already (Lebanese dismissive)
  "شو هالحمار هيدا": { s: 3, c: 4 }, // What a donkey this is (Lebanese)
  "طز فيك وبأهلك": { s: 3, c: 4 }, // Screw you and your family (Lebanese)
  "يلعن ابو ابوك على أبو جدك": { s: 1, c: 4 }, // Curse your grandfather's grandfather (Lebanese)
  "يا ابن اللقيطة": { s: 3, c: 4 }, // Son of the foundling/bastard (Lebanese)
  "يا لقيط": { s: 3, c: 4 }, // You foundling / bastard (Lebanese)
  "يا لقيطة": { s: 3, c: 4 }, // You foundling / bastard (Lebanese fem)
  "أيري بعين إمك": { s: 4, c: 4 }, // My dick in your mother's eye (Lebanese)
  "أيري بخشم ابوك": { s: 1, c: 4 }, // My dick in your father's nose (Lebanese)
  "أيري بسبع ارواح ابوك": { s: 1, c: 4 }, // My dick in seven souls of your father (Lebanese)
  "يا بلا تربية": { s: 3, c: 4 }, // You without upbringing (Lebanese)
  "يا قليل التربية": { s: 3, c: 4 }, // You of little upbringing (Lebanese)
  "يا بلا أخلاق": { s: 3, c: 4 }, // You without morals (Lebanese)
  "يا شلخت": { s: 3, c: 4 }, // You slut (Lebanese)
  "يا ناطرة عا الطريق": { s: 5, c: 4 }, // You waiting on the road (Lebanese, implying prostitute)
  "يا متل إمك": { s: 3, c: 4 }, // You like your mother (Lebanese insult)
  "يا بيّاع عرضو": { s: 3, c: 4 }, // You seller of your honor (Lebanese)
  "بدّي كسّرك": { s: 3, c: 4 }, // I'll break you (Lebanese)
  "بدّي فرمك فرم": { s: 3, c: 4 }, // I'll grind you thoroughly (Lebanese)
  "كس إمّك على إمّك": { s: 4, c: 4 }, // Your mom's pussy upon your mom (Lebanese)
  "كس أخت يلي خلفك": { s: 4, c: 4 }, // Sister's pussy of who bore you (Lebanese)
  "يا معفّن يا ابن المعفّن": { s: 3, c: 4 }, // You rotten son of rotten (Lebanese)
  "يا خرا ابن الخرا": { s: 3, c: 5 }, // You shit son of shit (Lebanese)

  // ========================================
  // === EXPANSION: Levantine dialect (Palestinian) - extended ===
  // ========================================
  "روح عن وجهي": { s: 3, c: 4 }, // Get out of my face (Palestinian)
  "يا ابن الملعونة": { s: 3, c: 4 }, // Son of the cursed one (Palestinian)
  "يا كلب الشوارع": { s: 3, c: 4 }, // You street dog (Palestinian)
  "يا حمار الحارة": { s: 3, c: 4 }, // You donkey of the neighborhood (Palestinian)
  "يلعن ابو تربيتك": { s: 1, c: 4 }, // Curse the father of your upbringing (Palestinian)
  "يلعن ابو هالوجه": { s: 1, c: 4 }, // Curse the father of this face (Palestinian)
  "يلعن ابو هالخلقة": { s: 1, c: 4 }, // Curse the father of this creation (Palestinian)
  "يا ابن الحرام يا منيوك": { s: 3, c: 4 }, // You bastard you fucked (Palestinian)
  "كس أمك يا ابن الكلب": { s: 4, c: 4 }, // Your mother's pussy son of a dog (Palestinian)
  "أيري فيك وبكل خلقتك": { s: 4, c: 4 }, // My dick in you and your creation (Palestinian)
  "يا سافل يا ابن السافل": { s: 3, c: 4 }, // You lowlife son of lowlife (Palestinian)
  "يا نذل يا ابن النذل": { s: 3, c: 4 }, // You vile son of vile (Palestinian)
  "يا ابن الفاسقة": { s: 3, c: 4 }, // Son of the immoral woman (Palestinian)
  "يا ابن المنيوكة الوسخة": { s: 3, c: 5 }, // Son of the dirty fucked one (Palestinian)
  "روح إنتاك يا حمار": { s: 3, c: 5 }, // Go get fucked you donkey (Palestinian)
  "يا ابن الغانية": { s: 3, c: 4 }, // Son of the courtesan (Palestinian)
  "يلعن ابو سلالتك": { s: 1, c: 4 }, // Curse the father of your lineage (Palestinian)
  "يا مش ابن ناس": { s: 3, c: 4 }, // You not a son of people (Palestinian, meaning low class)

  // ========================================
  // === EXPANSION: Levantine dialect (Jordanian) - extended ===
  // ========================================
  "يا زلمة الخايسة": { s: 3, c: 4 }, // You man of rotten (Jordanian)
  "يا ابن الكلبة العايرة": { s: 3, c: 4 }, // Son of the roaming bitch (Jordanian)
  "روح قصف بحرك": { s: 3, c: 4 }, // Go bomb your sea (Jordanian dismissive)
  "يا ابن القرمطية": { s: 3, c: 4 }, // Son of the Qarmatian (Jordanian insult)
  "يلعن بو سنسفيلك": { s: 3, c: 4 }, // Curse your ancestor (Jordanian)
  "يا ابن سبعين كلب": { s: 3, c: 4 }, // Son of seventy dogs (Jordanian)
  "يلعن ابو خلقتك": { s: 1, c: 4 }, // Curse your creation's father (Jordanian)
  "يا مخبول": { s: 3, c: 4 }, // You crazy (Jordanian)
  "يا مخبولة": { s: 3, c: 4 }, // You crazy (Jordanian fem)
  "يا ابن العاهر": { s: 5, c: 4 }, // Son of the whoremonger (Jordanian)
  "يا ابن الزنا المحصن": { s: 3, c: 4 }, // Son of married adultery (Jordanian)
  "يا أجرب يا ابن الأجرب": { s: 3, c: 4 }, // You mangy son of mangy (Jordanian)
  "يا ابن الفاجرة المنيوكة": { s: 3, c: 5 }, // Son of the fucked immoral (Jordanian)

  // ========================================
  // === EXPANSION: Gulf dialect (Saudi) - extended ===
  // ========================================
  "يا ابن الزنا": { s: 3, c: 4 }, // Son of adultery (Saudi)
  "يا ابن الحرام المعرص": { s: 3, c: 4 }, // You bastard pimp (Saudi)
  "يا ديوث يا ابن الديوث": { s: 3, c: 4 }, // You cuckold son of cuckold (Saudi)
  "يا خنيث يا ابن الخنيث": { s: 3, c: 4 }, // You effeminate son of effeminate (Saudi)
  "الله لا يوفقك": { s: 3, c: 4 }, // May God not grant you success (Saudi curse)
  "الله يلعنك": { s: 3, c: 4 }, // May God curse you (Saudi)
  "الله ياخذك": { s: 5, c: 5 }, // May God take you (Saudi death curse)
  "الله يسود وجهك": { s: 3, c: 4 }, // May God blacken your face (Saudi curse)
  "الله يقطع رزقك": { s: 3, c: 4 }, // May God cut your sustenance (Saudi curse)
  "الله يفضحك": { s: 3, c: 4 }, // May God expose you (Saudi curse)
  "الله ينتقم منك": { s: 3, c: 4 }, // May God take revenge on you (Saudi)
  "الله يذلك": { s: 3, c: 4 }, // May God humiliate you (Saudi)
  "الله يعميك": { s: 3, c: 4 }, // May God blind you (Saudi)
  "الله يشلك": { s: 3, c: 4 }, // May God paralyze you (Saudi)
  "يا ابن الستين في ستين": { s: 3, c: 4 }, // Son of sixty in sixty (Saudi)
  "يا قذر يا ابن القذر": { s: 3, c: 4 }, // You filthy son of filthy (Saudi)
  "يا وضيع يا ابن الوضيع": { s: 3, c: 4 }, // You lowly son of lowly (Saudi)
  "يا سفالة يا ابن السفالة": { s: 3, c: 4 }, // You scum son of scum (Saudi)
  "يلعن بو شنبك": { s: 1, c: 4 }, // Curse your mustache's father (Saudi)
  "طق عشر يا حمار": { s: 3, c: 5 }, // Fuck off you donkey (Saudi)
  "أمك تمشي في الشارع": { s: 3, c: 4 }, // Your mother walks the streets (Saudi)
  "أبوك ما له أصل": { s: 1, c: 4 }, // Your father has no origin (Saudi)
  "يا ابن اللقيط": { s: 3, c: 4 }, // Son of the foundling (Saudi)
  "يا ابن المسيار": { s: 3, c: 4 }, // Son of the temporary marriage (Saudi insult)
  "يا ابن الحرمة الوسخة": { s: 3, c: 4 }, // Son of the dirty woman (Saudi)
  "يا بربوق": { s: 1, c: 4 }, // You foolish (Saudi)
  "يا سخلة": { s: 1, c: 4 }, // You lamb (Saudi insult for stupid)
  "يا طرش بحر": { s: 3, c: 4 }, // You sea vomit (Saudi insult)

  // ========================================
  // === EXPANSION: Gulf dialect (Emirati) - extended ===
  // ========================================
  "يا ابن اللعبة": { s: 3, c: 4 }, // Son of the toy (Emirati insult)
  "يا هبيل يا ابن الهبيلة": { s: 1, c: 4 }, // You stupid son of the stupid (Emirati)
  "يا خبل يا ابن الخبلة": { s: 3, c: 4 }, // You crazy son of the crazy (Emirati)
  "يا مسخرة يا ابن المسخرة": { s: 3, c: 4 }, // You joke son of a joke (Emirati)
  "يا مغفل يا ابن المغفل": { s: 3, c: 4 }, // You gullible son of gullible (Emirati)
  "انطم": { s: 3, c: 4 }, // Shut up (Emirati)
  "سكر سالفتك": { s: 3, c: 4 }, // Shut your story (Emirati, shut up)
  "يا بو وجه": { s: 3, c: 4 }, // You with a face (Emirati shameless)
  "يا حافي يا ابن الحافي": { s: 3, c: 4 }, // You barefoot son of barefoot (Emirati)
  "يا ريال وسخ": { s: 3, c: 4 }, // You dirty man (Emirati)
  "يا حرمة وسخة": { s: 3, c: 4 }, // You dirty woman (Emirati)
  "يا ابن الهندية": { s: 5, c: 4 }, // Son of the Indian woman (Emirati racist)
  "يا عيل وسخ": { s: 3, c: 4 }, // You dirty kid (Emirati)
  "يا معرص يا ابن المعرص": { s: 3, c: 4 }, // You pimp son of pimp (Emirati)

  // ========================================
  // === EXPANSION: Gulf dialect (Qatari) - extended ===
  // ========================================
  "يا ابن الخبيثة": { s: 3, c: 4 }, // Son of the malicious (Qatari)
  "يا خبيث يا ابن الخبيث": { s: 3, c: 4 }, // You malicious son of malicious (Qatari)
  "يا تافه يا ابن التافه": { s: 3, c: 4 }, // You worthless son of worthless (Qatari)
  "يا فاشل يا ابن الفاشل": { s: 3, c: 4 }, // You failure son of failure (Qatari)
  "يا حقير يا ابن الحقير": { s: 3, c: 4 }, // You contemptible son of contemptible (Qatari)
  "يا نجس يا ابن النجس": { s: 3, c: 4 }, // You impure son of impure (Qatari)
  "يلعن بو وجهك": { s: 1, c: 4 }, // Curse your face's father (Qatari)
  "يلعن بو خلقتك": { s: 1, c: 4 }, // Curse your creation's father (Qatari)

  // ========================================
  // === EXPANSION: Iraqi dialect - extended ===
  // ========================================
  "يا ابن الچلب المعرص": { s: 3, c: 4 }, // Son of the pimped dog (Iraqi)
  "يا گحبة بنت الگحبة": { s: 5, c: 4 }, // You whore daughter of whore (Iraqi)
  "يخرب بيت ابوك": { s: 1, c: 4 }, // May your father's house be destroyed (Iraqi)
  "يخرب عرضك": { s: 3, c: 4 }, // May your honor be destroyed (Iraqi)
  "يخرب دينك": { s: 3, c: 4 }, // May your religion be destroyed (Iraqi)
  "يا ابن الفجرة": { s: 3, c: 4 }, // Son of the immoral one (Iraqi)
  "يا ابن الخبيثة العايرة": { s: 3, c: 4 }, // Son of the malicious wanderer (Iraqi)
  "يا بلاوي": { s: 3, c: 4 }, // You disasters (Iraqi insult)
  "يا سراي": { s: 3, c: 4 }, // You worthless (Iraqi)
  "يا لوطي يا ابن اللوطي": { s: 3, c: 4 }, // You sodomite son of sodomite (Iraqi)
  "يا معرس يا ابن المعرس": { s: 3, c: 4 }, // You pimped son of pimped (Iraqi)
  "كل خره يا ابن الچلب": { s: 3, c: 5 }, // Eat shit son of a dog (Iraqi)
  "يا بربوگ يا ابن البربوگ": { s: 1, c: 4 }, // You fool son of fool (Iraqi)
  "يا ابن البيض": { s: 4, c: 4 }, // Son of balls (Iraqi vulgar)
  "يا ابن الطرشي": { s: 3, c: 4 }, // Son of the pickles (Iraqi insult)
  "يا ابن الچفخانة": { s: 3, c: 4 }, // Son of the brothel (Iraqi)
  "گحبة أمك على جدك": { s: 1, c: 4 }, // Your mother's whore upon your grandfather (Iraqi)
  "يا ولد الحرام يا ابن الگحبة": { s: 3, c: 4 }, // You bastard son of a whore (Iraqi)
  "يا ابن الزاغرية": { s: 3, c: 4 }, // Son of the ululating one (Iraqi insult)
  "يا مسخوط من الله": { s: 3, c: 4 }, // You cursed by God (Iraqi)
  "الله يسلّط عليك": { s: 3, c: 4 }, // May God send upon you (Iraqi curse)
  "الله ياخذك مو ياخذ غيرك": { s: 5, c: 5 }, // May God take you not others (Iraqi death curse)
  "يا ابن السگنية": { s: 3, c: 4 }, // Son of the cigarette woman (Iraqi insult)
  "يا ابن الشارع": { s: 3, c: 4 }, // Son of the street (Iraqi)

  // ========================================
  // === EXPANSION: Moroccan Darija - extended ===
  // ========================================
  "نعل بو ممك على ممك": { s: 1, c: 4 }, // Curse your mother's father upon your mother (Moroccan)
  "نيك ممك يا ولد القحبة": { s: 5, c: 5 }, // Fuck your mother son of a whore (Moroccan)
  "سير تنيك يا ولد الحرام": { s: 3, c: 4 }, // Go get fucked bastard (Moroccan)
  "سير لعند ممك": { s: 3, c: 4 }, // Go to your mother (Moroccan dismissive)
  "زبي ف تبون ممك": { s: 5, c: 5 }, // My dick in your mother's cunt (Moroccan)
  "يا بوزبال ولد البوزبال": { s: 1, c: 4 }, // You idiot son of idiot (Moroccan)
  "يا حمار ولد الحمارة": { s: 3, c: 4 }, // You donkey son of donkey (Moroccan)
  "يا كلب ابن الكلبة": { s: 3, c: 4 }, // You dog son of bitch (Moroccan)
  "يا خنزير ولد الخنزيرة": { s: 3, c: 4 }, // You pig son of sow (Moroccan)
  "يا مقود ولد المقود": { s: 3, c: 4 }, // You pimped son of pimped (Moroccan)
  "يا ولد الزنا": { s: 3, c: 4 }, // You son of adultery (Moroccan)
  "يا ولد لقحبة الوسخة": { s: 5, c: 4 }, // Son of the dirty whore (Moroccan)
  "يا ولد لكلبة": { s: 3, c: 4 }, // Son of the bitch (Moroccan)
  "تبون اختك على ممك": { s: 5, c: 5 }, // Your sister's cunt upon your mother (Moroccan)
  "نعل بوك ع بو ممك": { s: 1, c: 4 }, // Curse your father upon your mother's father (Moroccan)
  "سير تقود يا حمار": { s: 3, c: 4 }, // Go pimp you donkey (Moroccan)
  "يا ماكيان": { s: 3, c: 4 }, // You chicken (Moroccan insult)
  "يا معجون": { s: 3, c: 4 }, // You paste (Moroccan insult for worthless)
  "يا ولد البرادة": { s: 3, c: 4 }, // Son of the fridge (Moroccan, meaning cold/heartless)
  "يا مسوس": { s: 3, c: 4 }, // You rotten (Moroccan)
  "يا زعطوط ولد الزعطوط": { s: 1, c: 4 }, // You fool son of fool (Moroccan)
  "يا شفّار ولد الشفّار": { s: 3, c: 4 }, // You thief son of thief (Moroccan)
  "يا عيّاش ولد العيّاش": { s: 3, c: 4 }, // You degenerate son of degenerate (Moroccan)
  "يا مقطوع من الدنيا": { s: 3, c: 4 }, // You cut from the world (Moroccan)
  "يا بلا أصل": { s: 3, c: 4 }, // You without origin (Moroccan)
  "يا بلا فصل": { s: 3, c: 4 }, // You without class (Moroccan)

  // ========================================
  // === EXPANSION: Algerian dialect - extended ===
  // ========================================
  "نعل بوك يا قواد ابن القواد": { s: 1, c: 4 }, // Curse your father pimp son of pimp (Algerian)
  "روح تنيك يا حمار ابن الحمار": { s: 3, c: 5 }, // Go get fucked donkey son of donkey (Algerian)
  "يا ولد الزنية المنيك": { s: 3, c: 5 }, // Son of fucked adultery (Algerian)
  "يا هبيل يبن الهبيلة": { s: 1, c: 4 }, // You stupid son of stupid (Algerian)
  "يا مجرور ولد المجرور": { s: 3, c: 4 }, // You dragged son of dragged (Algerian)
  "يا طحان ولد الطحانة": { s: 3, c: 4 }, // You grinder son of grinder (Algerian)
  "نعل ربك يا حقار": { s: 3, c: 4 }, // Curse your lord you contemptible (Algerian)
  "روح يبان بوك يا حمار": { s: 1, c: 4 }, // Go show your father you donkey (Algerian)
  "يا كلاب ولاد الكلاب": { s: 3, c: 4 }, // You dogs sons of dogs (Algerian)
  "نعل دين بو جدك": { s: 1, c: 4 }, // Curse your grandfather's father's religion (Algerian)
  "يا خنزير ابن الخنزيرة": { s: 3, c: 4 }, // You pig son of sow (Algerian)
  "يا ولد الحركية": { s: 3, c: 4 }, // Son of the collaborator (Algerian historical insult)
  "يا شيطان ولد الشيطان": { s: 3, c: 4 }, // You devil son of devil (Algerian)
  "يا فراخ ولد الفراخ": { s: 3, c: 4 }, // You chicken son of chicken (Algerian)
  "يا ناقص ولد الناقصة": { s: 3, c: 4 }, // You deficient son of deficient (Algerian)
  "يا مسخوط ولد المسخوط": { s: 3, c: 4 }, // You cursed son of cursed (Algerian)
  "يا سارق ولد السارقة": { s: 3, c: 4 }, // You thief son of thief (Algerian)
  "يا كذاب ولد الكذابة": { s: 3, c: 4 }, // You liar son of liar (Algerian)

  // ========================================
  // === EXPANSION: Tunisian dialect - extended ===
  // ========================================
  "بارّا تنيّك يا ولد القحبة": { s: 5, c: 5 }, // Go get fucked son of a whore (Tunisian)
  "نعل بو ممك يا مبون": { s: 1, c: 4 }, // Curse your mother's father you bottom (Tunisian)
  "يا حلوف ابن الحلوف": { s: 3, c: 4 }, // You pig son of pig (Tunisian)
  "يا كبش ابن الكبش": { s: 3, c: 4 }, // You ram son of ram (Tunisian)
  "يا زامل ولد الزامل": { s: 3, c: 4 }, // You faggot son of faggot (Tunisian)
  "يا مبون ولد المبون": { s: 3, c: 4 }, // You bottom son of bottom (Tunisian)
  "يا ملعون ولد الملعون": { s: 3, c: 4 }, // You cursed son of cursed (Tunisian)
  "يا فاسد ولد الفاسد": { s: 3, c: 4 }, // You corrupt son of corrupt (Tunisian)
  "يا مسطول ابن المسطولة": { s: 3, c: 4 }, // You stoned son of stoned (Tunisian)
  "يا حشايشي ابن الحشايشي": { s: 3, c: 4 }, // You pothead son of pothead (Tunisian)
  "بلا كرامة بلا راس": { s: 3, c: 4 }, // Without dignity without head (Tunisian)
  "يا ناقص عقل": { s: 3, c: 4 }, // You deficient mind (Tunisian)
  "يا ولد البور": { s: 3, c: 4 }, // Son of the wasteland (Tunisian insult)
  "يا مخنّث": { s: 3, c: 4 }, // You effeminate (Tunisian slur)
  "يا ولد الغجر": { s: 3, c: 4 }, // Son of the gypsies (Tunisian)

  // ========================================
  // === EXPANSION: Libyan dialect - extended ===
  // ========================================
  "يا بن الكلبة الوسخة": { s: 3, c: 4 }, // Son of the dirty bitch (Libyan)
  "يا مزنوق يبن المزنوقة": { s: 3, c: 4 }, // You desperate son of desperate (Libyan)
  "نعل بو دينك يا كلب": { s: 3, c: 4 }, // Curse your religion you dog (Libyan)
  "يا خنفوس ابن الخنفوس": { s: 3, c: 4 }, // You beetle son of beetle (Libyan)
  "يا زربوط يبن الزربوط": { s: 3, c: 4 }, // You clumsy son of clumsy (Libyan)
  "يا بهلول ابن البهلول": { s: 1, c: 4 }, // You fool son of fool (Libyan)
  "يا طبل ابن الطبل": { s: 3, c: 4 }, // You drum son of drum (Libyan)
  "يا أزعر ابن الأزعر": { s: 3, c: 4 }, // You thug son of thug (Libyan)
  "يا عاطل ابن العاطل": { s: 3, c: 4 }, // You bum son of bum (Libyan)
  "يا مرتد ابن المرتد": { s: 3, c: 4 }, // You apostate son of apostate (Libyan)
  "يا كلب الشط": { s: 3, c: 4 }, // You dog of the shore (Libyan)
  "يا مجنون ابن المجنونة": { s: 3, c: 4 }, // You crazy son of crazy (Libyan)
  "يا حيوان بلا عقل": { s: 3, c: 4 }, // You animal without brain (Libyan)
  "يلعن ابو ابوك يا كلب": { s: 1, c: 4 }, // Curse your grandfather you dog (Libyan)

  // ========================================
  // === EXPANSION: Sudanese dialect - extended ===
  // ========================================
  "يا ود الزنا": { s: 3, c: 4 }, // Son of adultery (Sudanese)
  "يا ود الشيطان": { s: 3, c: 4 }, // Son of devil (Sudanese)
  "يا ود الغابة": { s: 5, c: 4 }, // Son of the jungle (Sudanese racist insult)
  "يا كلب الحلة": { s: 3, c: 4 }, // You dog of the neighborhood (Sudanese)
  "يا خواض ابن الخواض": { s: 3, c: 4 }, // You faggot son of faggot (Sudanese)
  "يا حشاش ابن الحشاش": { s: 3, c: 4 }, // You pothead son of pothead (Sudanese)
  "يا جنجويدي ابن الجنجويدي": { s: 3, c: 4 }, // You Janjaweed son of Janjaweed (Sudanese)
  "يا نجاسة ابن النجاسة": { s: 3, c: 4 }, // You filth son of filth (Sudanese)
  "كمكم يا كلب": { s: 3, c: 4 }, // Shut up you dog (Sudanese)
  "يا فاسق ابن الفاسق": { s: 3, c: 4 }, // You sinner son of sinner (Sudanese)
  "يا ابن البقرة": { s: 3, c: 4 }, // Son of a cow (Sudanese)
  "يا ابن الدقيقة": { s: 3, c: 4 }, // Son of the minute (Sudanese insult)
  "يا زول وسخ": { s: 3, c: 4 }, // You dirty person (Sudanese)
  "يا زول خايس": { s: 3, c: 4 }, // You rotten person (Sudanese)
  "يلعن ديل اللي جابوك": { s: 3, c: 4 }, // Curse those who brought you (Sudanese)
  "يا ابن الكداب": { s: 3, c: 4 }, // Son of the liar (Sudanese)
  "يا ابن الحرامي": { s: 3, c: 4 }, // Son of the thief (Sudanese)

  // ========================================
  // === EXPANSION: Yemeni dialect - extended ===
  // ========================================
  "يا مسخوط من ربك": { s: 3, c: 4 }, // You cursed by your lord (Yemeni)
  "يا عكبري ابن العكبري": { s: 3, c: 4 }, // You vile son of vile (Yemeni)
  "يلعن تريبتك وتريبة ابوك": { s: 1, c: 4 }, // Curse your upbringing and your father's (Yemeni)
  "يا خابث ابن الخابث": { s: 3, c: 4 }, // You malicious son of malicious (Yemeni)
  "يا مخبل ابن المخبل": { s: 3, c: 4 }, // You crazy son of crazy (Yemeni)
  "يا ابن الفاجرة المسخوطة": { s: 3, c: 4 }, // Son of the cursed immoral (Yemeni)
  "يا ابن القبيحة المسخوطة": { s: 1, c: 4 }, // Son of the cursed ugly (Yemeni)
  "يا مشخوط ابن المشخوط": { s: 3, c: 4 }, // You worthless son of worthless (Yemeni)
  "يلعن ابو ابوك على ابو ابو ابوك": { s: 1, c: 4 }, // Curse grandfather upon great-grandfather (Yemeni)
  "يا ابن الشيطانة": { s: 3, c: 4 }, // Son of the she-devil (Yemeni)
  "يا ابن الزفتة": { s: 3, c: 4 }, // Son of the tar (Yemeni insult)
  "يا قليل الحيا ابن قليل الحيا": { s: 3, c: 4 }, // You shameless son of shameless (Yemeni)
  "يا كافر ابن الكافرة": { s: 3, c: 4 }, // You infidel son of infidel (Yemeni)

  // ========================================
  // === EXPANSION: More Franco-Arabic / Arabizi - extended ===
  // ========================================
  "ya 7mar ibn el 7mara": { s: 3, c: 4 }, // you donkey son of donkey
  "ya kalb ibn el kalba": { s: 3, c: 4 }, // you dog son of bitch
  "ya 5anzeer ibn el 5anzeera": { s: 3, c: 5 }, // you pig son of sow
  "kos omak ya ibn el 3ahira": { s: 5, c: 5 }, // your mother's pussy son of a whore
  "2eiri fi teezak ya 7ayawan": { s: 4, c: 4 }, // my dick in your ass you animal
  "ya za7af ibn el za7af": { s: 3, c: 4 }, // you creep son of creep
  "na3al abuk ya 5awal": { s: 1, c: 5 }, // curse your father you faggot
  "na3al dinak ya kalb": { s: 3, c: 5 }, // curse your religion you dog
  "barra nik omak ya 7mar": { s: 3, c: 5 }, // go fuck your mother you donkey
  "barra rooh ya zaml": { s: 3, c: 4 }, // go away you faggot
  "ya wlad el gahba": { s: 5, c: 4 }, // you sons of whores
  "ya wlad el 5ara": { s: 3, c: 5 }, // you sons of shit
  "ya wlad el kalba": { s: 3, c: 4 }, // you sons of a bitch
  "2eiri b kol 3ayltak": { s: 4, c: 5 }, // my dick in your whole family
  "n3al bo dinak ya 7ayawan": { s: 1, c: 5 }, // curse your religion's father you animal
  "ya tbon ommak": { s: 5, c: 5 }, // your mother's cunt (Moroccan romanized)
  "ya wled l9a7ba": { s: 5, c: 5 }, // son of a whore (Moroccan romanized)
  "sir t9awed ya 7mar": { s: 3, c: 4 }, // go pimp you donkey (Moroccan romanized)
  "na3al bo mmak ya zaml": { s: 1, c: 5 }, // curse your mother's father faggot (Maghreb romanized)
  "ya m3aras ibn el m3aras": { s: 3, c: 5 }, // you pimp son of pimp (romanized)
  "ya dayoos ibn el dayoos": { s: 3, c: 4 }, // you cuckold son of cuckold (romanized)
  "ya 5aneeth ibn el 5aneeth": { s: 3, c: 5 }, // you effeminate son of effeminate (romanized)
  "telhas teez omak ya ibn el sharmouta": { s: 5, c: 5 }, // lick your mom's ass son of whore
  "ayre b koss o5tak": { s: 4, c: 5 }, // my dick in your sister's pussy
  "ayre b 3ardhak": { s: 4, c: 5 }, // my dick in your honor
  "ayre b dinak": { s: 4, c: 4 }, // my dick in your religion
  "ayre b rabbak": { s: 4, c: 4 }, // my dick in your lord
  "kol 5ara w moot ya kalb": { s: 5, c: 5 }, // eat shit and die you dog
  "rooh enteek ya 7mar": { s: 3, c: 5 }, // go get fucked you donkey
  "ya manyouk ibn el manyouka": { s: 3, c: 5 }, // you fucked son of fucked
  "ya nayek omak": { s: 3, c: 5 }, // you fucker of your mother
  "nikomak ya wled l7ram": { s: 3, c: 4 }, // fuck your mother you bastard
  "ya zebbi f ommak": { s: 4, c: 4 }, // my dick in your mother (Tunisian romanized)
  "ya m3arras": { s: 3, c: 5 }, // you pimped (romanized)
  "ya miboun ibn el miboun": { s: 3, c: 4 }, // you bottom son of bottom (Tunisian romanized)
  "in3al abuk w abu abuk": { s: 1, c: 5 }, // curse your father and grandfather (romanized)
  "in3al 7 arwa7 abuk": { s: 1, c: 5 }, // curse seven souls of your father (romanized)
  "nik omak ya ibn el metnaka": { s: 3, c: 5 }, // fuck your mother son of fucked (romanized)
  "ya 3abd": { s: 5, c: 5 }, // you slave (racist romanized)
  "ya zeft ibn el zeft": { s: 3, c: 4 }, // you tar son of tar (romanized)
  "ya 5abees": { s: 3, c: 5 }, // you malicious (romanized)
  "ya fesid": { s: 3, c: 4 }, // you corrupt (romanized)
  "ya 5asis": { s: 3, c: 5 }, // you despicable (romanized)
  "ya la2eem": { s: 3, c: 4 }, // you wretched (romanized)
  "ya daeni2": { s: 3, c: 4 }, // you lowly (romanized)
  "ya fasiq": { s: 3, c: 4 }, // you sinner (romanized)
  "ya safel": { s: 3, c: 4 }, // you lowlife (romanized)
  "ya sa9et": { s: 3, c: 4 }, // you degenerate (romanized)
  "ya 5ayen ibn el 5ayen": { s: 3, c: 5 }, // you traitor son of traitor (romanized)
  "ya jaban": { s: 1, c: 4 }, // you coward (romanized)
  "ya najas": { s: 3, c: 4 }, // you impure (romanized)
  "ya mo2rif": { s: 3, c: 4 }, // you disgusting (romanized)
  "ya 7a9eer": { s: 3, c: 4 }, // you contemptible (romanized)
  "ya 3adeem el sharaf": { s: 3, c: 5 }, // you without honor (romanized)
  "ya mn7at": { s: 3, c: 4 }, // you degraded (romanized)
  "ya ratheel": { s: 3, c: 4 }, // you vile (romanized)

  // ========================================
  // === EXPANSION: More sexual terms across dialects ===
  // ========================================
  "انيكك يا بنت الكلب": { s: 4, c: 5 }, // I'll fuck you daughter of a dog
  "انيكك من وراك": { s: 4, c: 5 }, // I'll fuck you from behind
  "بدي أنيك طيزك يا شرموطة": { s: 5, c: 5 }, // I want to fuck your ass you whore
  "يا زاني يا ابن الزاني": { s: 4, c: 4 }, // You adulterer son of adulterer
  "يا زانية يا بنت الزانية": { s: 4, c: 4 }, // You adulteress daughter of adulteress
  "يا داعر يا ابن الداعر": { s: 4, c: 4 }, // You debauched son of debauched
  "يا داعرة يا بنت الداعرة": { s: 5, c: 4 }, // You prostitute daughter of prostitute
  "يا مومس يا بنت المومس": { s: 5, c: 4 }, // You whore daughter of whore
  "نيكني بالقوة": { s: 4, c: 5 }, // Fuck me by force
  "نيكها": { s: 4, c: 5 }, // Fuck her
  "نيكه": { s: 4, c: 5 }, // Fuck him
  "نيكهم": { s: 4, c: 5 }, // Fuck them
  "نيكوه": { s: 4, c: 5 }, // Fuck him (plural command)
  "نيكوها": { s: 4, c: 5 }, // Fuck her (plural command)
  "اتنيكي": { s: 4, c: 5 }, // Get fucked (fem command)
  "اتنيك": { s: 4, c: 5 }, // Get fucked (command)
  "يا بغل": { s: 1, c: 4 }, // You mule (stupid, vulgar)
  "يا حمارة ابن الحمارة": { s: 4, c: 4 }, // You donkey daughter of donkey
  "يا عاهرة ابن العاهر": { s: 5, c: 5 }, // You whore son of whoremonger
  "يا مني": { s: 4, c: 4 }, // You semen (extreme insult)
  "يا ابن المني": { s: 4, c: 4 }, // Son of semen (extreme insult)
  "بص زبي": { s: 4, c: 4 }, // Look at my dick (vulgar)
  "بوس زبي": { s: 4, c: 4 }, // Kiss my dick (vulgar)
  "بوس طيزي": { s: 4, c: 4 }, // Kiss my ass (vulgar)
  "تعالي مصي": { s: 4, c: 4 }, // Come suck (fem command)
  "تعالي نيكيني": { s: 4, c: 5 }, // Come fuck me (to fem)
  "يا نياكة": { s: 4, c: 5 }, // You fucker (fem form)
  "يا متحرش يا ابن المتحرش": { s: 4, c: 4 }, // You harasser son of harasser
  "يا مغتصب": { s: 5, c: 5 }, // You rapist
  "يا مغتصبة": { s: 5, c: 5 }, // You rapist (fem)
  "يا قحبة الحارة": { s: 5, c: 4 }, // You whore of the neighborhood
  "يا شرموطة الحارة": { s: 5, c: 4 }, // You whore of the neighborhood (variant)
  "يا عاهرة الشوارع": { s: 5, c: 4 }, // You whore of the streets
  "يا شرموطة الشوارع": { s: 5, c: 4 }, // You whore of the streets (variant)

  // ========================================
  // === EXPANSION: Religious insults - extended ===
  // ========================================
  "يلعن الله": { s: 2, c: 3 }, // Curse God (extreme blasphemy)
  "يلعن دينك ودين ابوك": { s: 1, c: 4 }, // Curse your religion and your father's
  "يلعن دينك ودين اللي خلفك": { s: 2, c: 3 }, // Curse your religion and who bore you
  "يلعن ربك وربّ أبوك": { s: 1, c: 4 }, // Curse your lord and your father's lord
  "يلعن ربك ورب اللي جابك": { s: 2, c: 3 }, // Curse your lord and the lord of who brought you
  "يلعن صليبك": { s: 2, c: 3 }, // Curse your cross
  "يلعن إنجيلك": { s: 2, c: 3 }, // Curse your Bible
  "يلعن قرآنك": { s: 2, c: 3 }, // Curse your Quran (extreme blasphemy)
  "يلعن مسجدك": { s: 2, c: 3 }, // Curse your mosque
  "يلعن كنيستك": { s: 2, c: 3 }, // Curse your church
  "يا كافر يا ملعون": { s: 2, c: 3 }, // You infidel you cursed
  "يا ملحد يا كلب": { s: 2, c: 3 }, // You atheist you dog
  "يا مرتد يا ابن الكلب": { s: 2, c: 3 }, // You apostate son of a dog
  "يا عدو الله وعدو الناس": { s: 2, c: 3 }, // Enemy of God and enemy of people
  "يلعن ابو دينك على ابو ابوك": { s: 1, c: 4 }, // Curse your religion's father upon your grandfather
  "يلعن سبع ارواح ابوك وامك": { s: 1, c: 4 }, // Curse seven souls of your father and mother
  "يلعن ابو الدين اللي دنتو": { s: 1, c: 4 }, // Curse the religion's father that you follow
  "يا ابن ابليس الرجيم": { s: 2, c: 3 }, // Son of the accursed Satan
  "يا صديق الشيطان": { s: 2, c: 3 }, // Friend of the devil
  "يا خادم ابليس": { s: 2, c: 3 }, // Servant of Satan
  "الله يحرقك بنار جهنم": { s: 2, c: 3 }, // May God burn you in hellfire
  "يروح عليك نار جهنم": { s: 2, c: 3 }, // May hellfire go upon you
  "يا ابن الملعون من الله": { s: 2, c: 3 }, // Son of the cursed by God
  "يا مطرود من رحمة الله": { s: 2, c: 3 }, // You expelled from God's mercy
  "يا ابن اللعينة": { s: 2, c: 3 }, // Son of the cursed one (fem)

  // ========================================
  // === EXPANSION: Scatological terms across dialects ===
  // ========================================
  "يا خرا بني آدم": { s: 3, c: 5 }, // You shit of humans
  "يا خرة": { s: 3, c: 5 }, // You (piece of) shit
  "يا ابن الخرا": { s: 3, c: 5 }, // Son of shit
  "يا بنت الخرا": { s: 3, c: 5 }, // Daughter of shit
  "ريحتك خرا": { s: 3, c: 5 }, // Your smell is shit
  "كل شي فيك خرا": { s: 3, c: 5 }, // Everything about you is shit
  "يا خراي": { s: 3, c: 5 }, // You my shit
  "يا براز": { s: 3, c: 4 }, // You feces
  "يا بول": { s: 3, c: 4 }, // You urine (insult)
  "يا ابن البول": { s: 3, c: 4 }, // Son of urine
  "يا ابن الخراي": { s: 3, c: 5 }, // Son of my shit
  "كل خرا وبلعه": { s: 3, c: 5 }, // Eat shit and swallow it
  "كل خرا يا ابن الكلب": { s: 3, c: 5 }, // Eat shit son of a dog
  "كل زق يا حمار": { s: 3, c: 5 }, // Eat shit you donkey
  "يا خراشي": { s: 3, c: 5 }, // You shitty person (Egyptian variant)
  "يا مخري": { s: 3, c: 5 }, // You my shit (Egyptian)
  "يا مبولجي": { s: 3, c: 4 }, // You pisser (Egyptian slang)
  "يا خراوي": { s: 3, c: 5 }, // You shitty (Gulf variant)

  // ========================================
  // === EXPANSION: Compound curse expressions ===
  // ========================================
  "الله يخرب بيتك": { s: 3, c: 5 }, // May God destroy your house
  "الله يخرب بيت ابوك": { s: 1, c: 4 }, // May God destroy your father's house
  "الله يخرب بيت اللي جابك": { s: 3, c: 5 }, // May God destroy the house of who brought you
  "الله يخرب بيت اللي خلفك": { s: 3, c: 5 }, // May God destroy the house of who bore you
  "الله يلعن ابوك وابو ابوك": { s: 1, c: 4 }, // May God curse your father and grandfather
  "الله يلعنك ويلعن اللي جابك": { s: 3, c: 5 }, // May God curse you and who brought you
  "الله يلعن يوم ما اتولدت": { s: 3, c: 5 }, // May God curse the day you were born
  "الله يلعن الساعة اللي اتولدت فيها": { s: 3, c: 5 }, // May God curse the hour you were born (variant)
  "الله لا يردك سالم": { s: 3, c: 5 }, // May God not return you safely
  "الله ينعل ابوك": { s: 1, c: 4 }, // May God curse your father
  "الله ينعل أمك": { s: 3, c: 5 }, // May God curse your mother
  "الله ينعل جدك": { s: 1, c: 4 }, // May God curse your grandfather
  "الله يحرقك": { s: 3, c: 5 }, // May God burn you
  "الله يحرق قبرك": { s: 3, c: 5 }, // May God burn your grave
  "الله يحرق أهلك": { s: 3, c: 5 }, // May God burn your family
  "الله يخذلك": { s: 3, c: 5 }, // May God forsake you
  "الله يمسخك": { s: 3, c: 5 }, // May God deform you
  "الله يعمي عينك": { s: 3, c: 5 }, // May God blind your eye
  "الله يقطع يدينك": { s: 3, c: 5 }, // May God cut your hands
  "الله يقطع رجلينك": { s: 3, c: 5 }, // May God cut your legs
  "الله يقطع لسانك": { s: 3, c: 5 }, // May God cut your tongue
  "الله يسلط عليك ناره": { s: 3, c: 5 }, // May God send his fire upon you
  "الله يجعلك عبرة": { s: 3, c: 5 }, // May God make you an example
  "الله يجيب في أيامك": { s: 3, c: 5 }, // May God bring calamity in your days
  "يا ابن الستين ألف كلب": { s: 3, c: 5 }, // Son of sixty thousand dogs
  "يا ابن المية ألف شرموطة": { s: 5, c: 5 }, // Son of a hundred thousand whores
  "يلعن سبعة أجيال من أهلك": { s: 3, c: 5 }, // Curse seven generations of your family
  "يلعن ابو ابو ابوك": { s: 1, c: 4 }, // Curse your great-grandfather
  "يلعن ابو خال أمك": { s: 1, c: 4 }, // Curse your mother's uncle's father
  "كس أمك وأم أمك وأم ابوك": { s: 1, c: 4 }, // Pussy of your mother, grandmother, and father's mother
  "أيري بكل شي اسمو أهلك": { s: 4, c: 5 }, // My dick in everything called your family
  "يلعن ابو كل حدا بعرفك": { s: 1, c: 4 }, // Curse the father of everyone who knows you
  "أيري فيك وبأبوك وبجدك": { s: 1, c: 4 }, // My dick in you, your father, and grandfather
  "كس أخت يلي جابك ويلي خلفك": { s: 4, c: 5 }, // Sister's pussy of who brought and bore you
  "يلعن ابوك على امك على جدك": { s: 1, c: 4 }, // Curse your father upon mother upon grandfather

  // ========================================
  // === EXPANSION: More Arabizi compound phrases ===
  // ========================================
  "kos omak w om omak": { s: 4, c: 5 }, // your mother's and grandmother's pussy
  "ayre fi abok w jaddak": { s: 1, c: 4 }, // my dick in your father and grandfather
  "ya ibn el sitteen alf kalb": { s: 3, c: 5 }, // son of sixty thousand dogs
  "in3al 7 ajyal min ahlak": { s: 3, c: 5 }, // curse seven generations of your family
  "alla yil3anak ya ibn el sharmouta": { s: 5, c: 5 }, // may God curse you son of a whore
  "alla yakhthak ya ibn el gahba": { s: 5, c: 5 }, // may God take you son of a whore
  "alla ya7re2ak ya kalb": { s: 3, c: 5 }, // may God burn you dog
  "alla yakhrib baytak": { s: 3, c: 5 }, // may God destroy your house
  "alla yi9ta3 rizqak": { s: 3, c: 5 }, // may God cut your sustenance
  "alla yifdha7ak": { s: 3, c: 5 }, // may God expose you
  "alla yi3meek": { s: 3, c: 5 }, // may God blind you
  "rooh in7ash ya 7ayawan": { s: 3, c: 5 }, // get lost you animal
  "ya ibn alf sharmoota": { s: 5, c: 5 }, // son of a thousand whores
  "kos omak 3a abok": { s: 1, c: 5 }, // your mother's pussy upon your father
  "ayre fi 3ardhak": { s: 4, c: 5 }, // my dick in your honor
  "ayre fi wejjak": { s: 4, c: 5 }, // my dick in your face
  "ayre fi timmak": { s: 4, c: 5 }, // my dick in your mouth
  "badi fash5ak": { s: 3, c: 5 }, // I'll destroy you (romanized Levantine)
  "badi kassirak": { s: 3, c: 5 }, // I'll break you (romanized)
  "badi ni2ak": { s: 3, c: 5 }, // I'll fuck you (romanized)
  "badi nayik 3ayiltak": { s: 3, c: 5 }, // I'll fuck your family (romanized)
  "kol zegg w moot": { s: 5, c: 5 }, // eat shit and die (romanized)
  "tfoo 3alayak": { s: 3, c: 5 }, // spit on you (romanized)
  "ya 3ayil wisi5": { s: 3, c: 5 }, // you dirty kid (romanized Egyptian)
  "ya wiski5 ya ibn el wis5a": { s: 3, c: 5 }, // you dirty son of the dirty (romanized)
  "ya mish ibn nas": { s: 3, c: 5 }, // you not a son of people (romanized)
  "ya abad abu abu abok": { s: 3, c: 5 }, // curse your ancestors (romanized)
  "ya 7awan": { s: 3, c: 5 }, // you animal (romanized abbreviated)
  "kos a5tak 3a omak": { s: 4, c: 5 }, // your sister's pussy upon your mother (romanized)
  "ya wled z zina": { s: 3, c: 5 }, // you son of adultery (romanized Maghreb)
  "ya wled l7aram l m9awed": { s: 3, c: 4 }, // you bastard pimp (romanized Maghreb)
  "tboun mok 3la mok": { s: 5, c: 5 }, // your mother's cunt upon mother (romanized Moroccan)
  "sir tni2 ya wled l9a7ba": { s: 5, c: 5 }, // go get fucked son of whore (romanized Moroccan)
  "ya ga7ba": { s: 5, c: 5 }, // you whore (romanized variant)
  "ya metnayik": { s: 3, c: 5 }, // you fucked (romanized Maghreb)
  "ya zamel wled el zamel": { s: 3, c: 5 }, // you faggot son of faggot (romanized Maghreb)
  "barra nik mo2ek": { s: 3, c: 5 }, // go fuck your mother (romanized Maghreb)
  "ya 7olof": { s: 3, c: 5 }, // you pig (romanized Tunisian)
  "ya mstoul": { s: 3, c: 5 }, // you stoned (romanized Tunisian)

  // ========================================
  // === EXPANSION: Additional insults across all dialects ===
  // ========================================
  "يا منافق": { s: 1, c: 4 }, // You hypocrite
  "يا منافقة": { s: 1, c: 4 }, // You hypocrite (fem)
  "يا كذاب": { s: 1, c: 4 }, // You liar
  "يا كذابة": { s: 1, c: 4 }, // You liar (fem)
  "يا خائن يا ابن الخائن": { s: 1, c: 4 }, // You traitor son of traitor
  "يا خائنة يا بنت الخائنة": { s: 1, c: 4 }, // You traitor daughter of traitor
  "يا غدار": { s: 1, c: 4 }, // You treacherous
  "يا غدارة": { s: 1, c: 4 }, // You treacherous (fem)
  "يا حرامي يا ابن الحرامي": { s: 1, c: 4 }, // You thief son of thief
  "يا حرامية يا بنت الحرامية": { s: 1, c: 4 }, // You thief daughter of thief
  "يا جبان يا ابن الجبان": { s: 1, c: 4 }, // You coward son of coward
  "يا جبانة يا بنت الجبانة": { s: 1, c: 4 }, // You coward daughter of coward
  "يا فاشل": { s: 1, c: 4 }, // You failure
  "يا فاشلة": { s: 1, c: 4 }, // You failure (fem)
  "يا أنجاس": { s: 1, c: 4 }, // You impure ones (plural)
  "يا أوساخ": { s: 1, c: 4 }, // You dirty ones (plural)
  "يا أوباش": { s: 1, c: 4 }, // You thugs (plural)
  "يا حثالة المجتمع": { s: 1, c: 4 }, // You dregs of society
  "يا نفاية المجتمع": { s: 1, c: 4 }, // You waste of society
  "يا قمامة المجتمع": { s: 1, c: 4 }, // You garbage of society
  "يا عالة على المجتمع": { s: 1, c: 4 }, // You burden on society
  "يا طفيلي": { s: 1, c: 4 }, // You parasite
  "يا طفيلية": { s: 1, c: 4 }, // You parasite (fem)
  "يا دودة": { s: 1, c: 4 }, // You worm
  "يا ابن الدودة": { s: 1, c: 4 }, // Son of a worm
  "يا حشرة يا ابن الحشرة": { s: 1, c: 4 }, // You insect son of insect
  "يا صرصور يا ابن الصرصور": { s: 4, c: 4 }, // You cockroach son of cockroach
  "يا عنكبوت": { s: 1, c: 4 }, // You spider (insult)
  "يا ثعبان": { s: 1, c: 4 }, // You snake
  "يا ثعبان يا ابن الثعبان": { s: 1, c: 4 }, // You snake son of snake
  "يا عقرب": { s: 1, c: 4 }, // You scorpion
  "يا عقرب يا ابن العقرب": { s: 1, c: 4 }, // You scorpion son of scorpion
  "يا كلب ابن الكلب المسعور": { s: 1, c: 4 }, // You dog son of rabid dog
  "يا حمار ابن الحمارة الوسخة": { s: 1, c: 4 }, // You donkey son of dirty donkey
  "يا بقرة يا بنت البقرة": { s: 1, c: 4 }, // You cow daughter of cow
  "يا ماعز يا ابن الماعز": { s: 1, c: 4 }, // You goat son of goat
  "يا جاموسة": { s: 1, c: 4 }, // You buffalo (fem insult)
  "يا ابن الجاموسة": { s: 1, c: 4 }, // Son of the buffalo
  "يا خروف": { s: 1, c: 4 }, // You sheep
  "يا ابن الخروفة": { s: 1, c: 4 }, // Son of the ewe
  "يا غراب": { s: 1, c: 4 }, // You crow (insult)
  "يا ابن الغراب": { s: 1, c: 4 }, // Son of the crow
  "يا ضبع": { s: 1, c: 4 }, // You hyena
  "يا ابن الضبع": { s: 1, c: 4 }, // Son of the hyena
  "يا قمل": { s: 1, c: 4 }, // You louse
  "يا ابن القملة": { s: 1, c: 4 }, // Son of the louse
  "يا بق": { s: 1, c: 4 }, // You bedbug
  "يا ذبابة": { s: 1, c: 4 }, // You fly
  "يا ابن الذبابة": { s: 1, c: 4 }, // Son of the fly
  "يا كتكوت": { s: 1, c: 4 }, // You chick (cowardly)
  "يا دجاجة": { s: 1, c: 4 }, // You chicken (cowardly)
  "يا ابن الدجاجة": { s: 1, c: 4 }, // Son of the chicken

  // ========================================
  // === EXPANSION: Insults about appearance/intelligence ===
  // ========================================
  "يا أعمى": { s: 1, c: 4 }, // You blind
  "يا أطرش": { s: 1, c: 4 }, // You deaf
  "يا أخرس": { s: 1, c: 4 }, // You mute (insult)
  "يا أعرج": { s: 1, c: 4 }, // You lame
  "يا أعور": { s: 1, c: 4 }, // You one-eyed
  "يا شحات": { s: 1, c: 4 }, // You beggar
  "يا شحاتة": { s: 1, c: 4 }, // You beggar (fem)
  "يا مسكين": { s: 1, c: 4 }, // You pitiful (condescending)
  "يا مسكينة": { s: 1, c: 4 }, // You pitiful (fem, condescending)
  "يا قبيح": { s: 1, c: 4 }, // You ugly
  "يا قبيحة": { s: 1, c: 4 }, // You ugly (fem)
  "يا دميم": { s: 1, c: 4 }, // You ugly (formal)
  "يا دميمة": { s: 1, c: 4 }, // You ugly (fem formal)
  "يا مشوه": { s: 1, c: 4 }, // You deformed
  "يا مشوهة": { s: 1, c: 4 }, // You deformed (fem)
  "يا سمين": { s: 1, c: 4 }, // You fat
  "يا سمينة": { s: 1, c: 4 }, // You fat (fem)
  "يا خنزير سمين": { s: 1, c: 4 }, // You fat pig
  "يا بقرة سمينة": { s: 1, c: 4 }, // You fat cow
  "يا هيكل عظمي": { s: 1, c: 4 }, // You skeleton
  "يا نحيف": { s: 1, c: 4 }, // You skinny (insult)
  "يا معتوه": { s: 1, c: 4 }, // You mentally deficient
  "يا معتوهة": { s: 1, c: 4 }, // You mentally deficient (fem)
  "يا مجنون يا ابن المجنونة": { s: 1, c: 4 }, // You crazy son of crazy
  "يا متخلف": { s: 5, c: 4 }, // You retarded (ableist)
  "يا متخلفة": { s: 5, c: 4 }, // You retarded (fem, ableist)
  "يا متخلف عقليا": { s: 5, c: 4 }, // You mentally retarded (ableist)
  "يا بليد": { s: 1, c: 4 }, // You dull/stupid
  "يا بليدة": { s: 1, c: 4 }, // You dull (fem)
  "يا غبي يا ابن الغبية": { s: 1, c: 4 }, // You stupid son of the stupid
  "يا جاهل": { s: 1, c: 4 }, // You ignorant
  "يا جاهلة": { s: 1, c: 4 }, // You ignorant (fem)
  "يا أمي": { s: 1, c: 4 }, // You illiterate
  "يا أمية": { s: 1, c: 4 }, // You illiterate (fem)
  "يا فارغ": { s: 1, c: 4 }, // You empty (insult)
  "يا فاضي": { s: 1, c: 4 }, // You empty/idle (insult)
  "يا ضايع": { s: 1, c: 4 }, // You lost (insult)
  "يا ضايعة": { s: 1, c: 4 }, // You lost (fem insult)
  "يا تايه": { s: 1, c: 4 }, // You wandering/lost (insult)

  // ========================================
  // === EXPANSION: More compound "son of" expressions ===
  // ========================================
  "ابن الزبالة": { s: 3, c: 5 }, // Son of garbage
  "ابن القمامة": { s: 3, c: 5 }, // Son of trash
  "ابن النفاية": { s: 3, c: 5 }, // Son of waste
  "ابن الحثالة": { s: 3, c: 5 }, // Son of dregs
  "ابن الوساخة": { s: 3, c: 5 }, // Son of filth
  "ابن الرذيلة": { s: 3, c: 5 }, // Son of vice
  "ابن الفاحشة": { s: 3, c: 5 }, // Son of obscenity
  "ابن المعصية": { s: 3, c: 5 }, // Son of sin
  "ابن الضلالة": { s: 3, c: 5 }, // Son of misguidance
  "ابن الجهالة": { s: 3, c: 5 }, // Son of ignorance
  "ابن الخطيئة": { s: 3, c: 5 }, // Son of sin (variant)
  "ابن البلوة": { s: 3, c: 5 }, // Son of calamity
  "ابن المصيبة": { s: 3, c: 5 }, // Son of disaster
  "ابن اللعنة": { s: 3, c: 5 }, // Son of the curse
  "ابن العار": { s: 3, c: 5 }, // Son of shame
  "ابن الفضيحة": { s: 3, c: 5 }, // Son of scandal
  "ابن العيب": { s: 3, c: 5 }, // Son of disgrace
  "ابن الذل": { s: 3, c: 5 }, // Son of humiliation
  "ابن الهوان": { s: 3, c: 5 }, // Son of degradation
  "بنت الزبالة": { s: 3, c: 5 }, // Daughter of garbage
  "بنت النفاية": { s: 3, c: 5 }, // Daughter of waste
  "بنت الوساخة": { s: 3, c: 5 }, // Daughter of filth
  "بنت الرذيلة": { s: 3, c: 5 }, // Daughter of vice
  "بنت الفاحشة": { s: 3, c: 5 }, // Daughter of obscenity
  "بنت اللعنة": { s: 3, c: 5 }, // Daughter of the curse
  "بنت العار": { s: 3, c: 5 }, // Daughter of shame
  "بنت الفضيحة": { s: 3, c: 5 }, // Daughter of scandal

  // ========================================
  // === EXPANSION: More body-related vulgarities ===
  // ========================================
  "كسك": { s: 4, c: 4 }, // Your pussy (to fem)
  "كسها واسع": { s: 4, c: 4 }, // Her pussy is wide
  "كسك واسع": { s: 4, c: 4 }, // Your pussy is wide
  "طيزك واسع": { s: 3, c: 4 }, // Your ass is wide
  "زبه كبير": { s: 4, c: 4 }, // His dick is big (vulgar context)
  "زبك صغير": { s: 4, c: 4 }, // Your dick is small
  "بلا زب": { s: 4, c: 4 }, // Without a dick
  "بلا كس": { s: 4, c: 4 }, // Without a pussy
  "بلا طيز": { s: 3, c: 4 }, // Without an ass
  "بلا خصي": { s: 4, c: 4 }, // Without balls
  "مبتور": { s: 3, c: 4 }, // Amputated / castrated (insult)
  "مخصي": { s: 3, c: 4 }, // Castrated (insult)
  "يا مبتور": { s: 3, c: 4 }, // You castrated (insult)
  "يا مخصي": { s: 3, c: 4 }, // You castrated one (insult)
  "يا عنين": { s: 3, c: 4 }, // You impotent
  "يا عاجز": { s: 3, c: 4 }, // You incapable / impotent
  "يا عاجزة": { s: 3, c: 4 }, // You incapable (fem)
  "يا بايخ": { s: 3, c: 4 }, // You stale / impotent (Egyptian)
  "يا بايخة": { s: 3, c: 4 }, // You stale (fem, Egyptian)
  "يا محروم": { s: 3, c: 4 }, // You deprived
  "يا محرومة": { s: 3, c: 4 }, // You deprived (fem)

  // ========================================
  // === EXPANSION: Evasion and internet spellings ===
  // ========================================
  "k0s": { s: 4, c: 5 }, // Pussy with zero
  "k0ss": { s: 4, c: 5 }, // Pussy variant
  "sh4rmouta": { s: 5, c: 5 }, // Whore with 4
  "sh4rmoot4": { s: 5, c: 5 }, // Whore with 4s
  "z3b": { s: 4, c: 5 }, // Dick with 3
  "z3bi": { s: 4, c: 5 }, // My dick with 3
  "t33z": { s: 3, c: 5 }, // Ass with 3s
  "7m4r": { s: 2, c: 5 }, // Donkey with 4
  "k4lb": { s: 2, c: 5 }, // Dog with 4
  "5nz33r": { s: 2, c: 5 }, // Pig with numbers
  "g47ba": { s: 5, c: 5 }, // Whore with numbers
  "ni2k": { s: 3, c: 5 }, // Fuck with 2
  "n33k": { s: 3, c: 5 }, // Fuck with 3s
  "m4ny4k": { s: 3, c: 5 }, // Fucker with 4s
  "5wal": { s: 2, c: 5 }, // Faggot with 5 (variant)
  "y4 k4lb": { s: 2, c: 5 }, // You dog with 4s
  "y4 7m4r": { s: 2, c: 5 }, // You donkey with 4s
  "y4 5nz33r": { s: 2, c: 5 }, // You pig with numbers
  "k0s 0m4k": { s: 4, c: 5 }, // Your mother's pussy with numbers
  "4yr3 f33k": { s: 4, c: 5 }, // My dick in you with numbers
  "t3lh4s t33zi": { s: 3, c: 5 }, // Lick my ass with numbers

  // ========================================
  // === EXPANSION: Additional romanized (no numbers) ===
  // ========================================
  "koss ommak": { s: 4, c: 5 }, // your mother's pussy (variant)
  "koss okhtak": { s: 4, c: 5 }, // your sister's pussy (variant)
  "ibn el sharmoota": { s: 5, c: 5 }, // son of a whore (variant)
  "ibn il kahba": { s: 5, c: 5 }, // son of a whore (variant)
  "ibn il metnaka": { s: 3, c: 5 }, // son of the fucked (variant)
  "ya ibn il wisikha": { s: 3, c: 5 }, // son of the dirty (variant)
  "ya ibn il kalba": { s: 3, c: 5 }, // son of a bitch (variant)
  "ya ibn il khanzeera": { s: 3, c: 5 }, // son of a sow (variant)
  "ya hayawana": { s: 3, c: 5 }, // you animal (fem)
  "ya zibala": { s: 3, c: 5 }, // you garbage
  "ya zebala": { s: 3, c: 5 }, // you garbage (variant)
  "ya nifaya": { s: 3, c: 5 }, // you waste
  "ya hathala": { s: 3, c: 5 }, // you dregs
  "rooh nimak": { s: 3, c: 5 }, // go to your mother (dismissive)
  "yel3an abook": { s: 1, c: 5 }, // curse your father (variant)
  "yel3an ommak": { s: 3, c: 5 }, // curse your mother (variant)
  "yel3an deenak": { s: 3, c: 5 }, // curse your religion (variant)
  "yel3an rabbak": { s: 3, c: 5 }, // curse your lord (variant)
  "ya ibn il laeema": { s: 3, c: 5 }, // son of the wretched (variant)
  "ya ibn il najas": { s: 3, c: 5 }, // son of the impure
  "ya ibn il fasid": { s: 3, c: 5 }, // son of the corrupt
  "ya iblis": { s: 3, c: 5 }, // you devil
  "ya shaytan": { s: 3, c: 5 }, // you Satan
  "ya la3een": { s: 3, c: 5 }, // you cursed (variant)
  "ya mal3oon": { s: 3, c: 5 }, // you cursed
  "ya mal3oona": { s: 3, c: 5 }, // you cursed (fem)
  "wlad il haram": { s: 3, c: 5 }, // children of sin
  "wlad il 3ahira": { s: 5, c: 5 }, // children of the whore
  "wlad il kalba": { s: 3, c: 5 }, // children of the bitch
  "wlad il sharmoota": { s: 5, c: 5 }, // children of the whore (variant)
  "kol taban": { s: 3, c: 5 }, // eat shit (Gulf variant)
  "boos teezi": { s: 3, c: 5 }, // kiss my ass
  "boos zibbi": { s: 4, c: 5 }, // kiss my dick
  "emshi min hina": { s: 3, c: 5 }, // leave from here
  "irhal ya kalb": { s: 3, c: 5 }, // leave you dog
  "ta3al hina ya hmar": { s: 3, c: 5 }, // come here you donkey
  "allah yer7amak... la2": { s: 3, c: 5 }, // may God have mercy... no (sarcastic curse)
  "omak shaklaha": { s: 3, c: 5 }, // your mother looks like (setup for insult)
  "abook shaklou": { s: 1, c: 5 }, // your father looks like (setup for insult)
  "wejjak zay teez": { s: 3, c: 5 }, // your face looks like an ass
  "wejjak zay il khara": { s: 3, c: 5 }, // your face looks like shit
  "wejjak zay il zeft": { s: 3, c: 5 }, // your face looks like tar
};

export default arabicBadWords;
