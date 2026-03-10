/**
 * Arabic profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Arabic
 */
const arabicBadWords = [
  // Core vulgar words
  "كس", // Pussy
  "كس أمك", // Your mother's pussy
  "كس اختك", // Your sister's pussy
  "زب", // Dick
  "زبي", // My dick
  "طيز", // Ass
  "شرموطة", // Whore (fem)
  "شرموط", // Whore (masc)
  "قحبة", // Whore / prostitute
  "عاهرة", // Prostitute (fem)
  "عاهرات", // Prostitutes (plural)
  "العاهرات", // The prostitutes
  "ابن العاهرة", // Son of a prostitute
  "ابن الشرموطة", // Son of a whore
  "ابن القحبة", // Son of a whore
  "ابن الكلب", // Son of a dog

  // Insults
  "أحمق", // Fool / idiot
  "حمقى", // Fools (plural)
  "الأحمق", // The fool
  "وغد", // Scoundrel
  "أيها الوغد", // You scoundrel
  "سافل", // Lowlife
  "أيها الحقير", // You despicable one
  "حثالة", // Scum
  "حمار", // Donkey / ass
  "كلب", // Dog
  "يا ابن الحرام", // You bastard
  "خول", // Faggot (slur)
  "ديوث", // Cuckold
  "عرص", // Pimp
  "منيك", // Fucker
  "متناك", // Fucked

  // Curses
  "اللعنة", // The curse / damn
  "اللعين", // The cursed one
  "أيها اللعين", // You cursed one
  "يلعن أبوك", // Curse your father
  "يلعن دينك", // Curse your religion
  "لعنة", // Curse

  // Sexual
  "نيك", // Fuck
  "سخيف", // Ridiculous / lame
  "مارس الجنس مع", // Have sex with
  "القذف", // Ejaculation
  "الجنس", // Sex
  "المواد الإباحية", // Pornography
  "زنا", // Adultery / fornication
  "لوطي", // Sodomite

  // Slurs
  "الشاذ", // The deviant / queer (slur)
  "الشواذ", // The deviants (plural slur)
  "مثلي الجنس", // Homosexual
  "زنجي", // Negro (slur)
  "الزنوج", // Negroes (slur)
  "نازي", // Nazi

  // Body parts / functions (vulgar)
  "قضيب", // Penis
  "مؤخرة", // Buttocks
  "المؤخرات", // Buttocks (plural)
  "خصية", // Testicle
  "بول", // Urine
  "تبول", // Urination
  "خرا", // Shit
  "القواد", // The pimp
  "سادي", // Sadistic

  // Egyptian / regional
  "أحا", // Exclamation of disgust (Egyptian)
  "الكلبة", // The bitch
  "الكلبات", // The bitches

  // Egyptian dialect
  "ابن المتناكة", // Son of the fucked one
  "يا خول", // You faggot
  "شرموطة أمك", // Your mother's a whore
  "كسمك", // Your mother's pussy (abbreviated)
  "عرص ابن العرص", // Pimp son of a pimp
  "ابن الوسخة", // Son of the dirty one
  "يا واطي", // You lowlife
  "يا وسخ", // You filthy
  "ابن الشرشوحة", // Son of a slut
  "متناكة", // Fucked (fem)

  // Levantine dialect (Syrian/Lebanese/Palestinian/Jordanian)
  "كس إمك", // Your mother's pussy
  "أيري فيك", // My dick in you
  "أيري", // My dick
  "روح إنتاك", // Go get fucked
  "منيوك", // Fucked (passive)
  "منيوكة", // Fucked (fem)
  "كلب ابن الكلب", // Dog son of a dog
  "يا حيوان", // You animal
  "يلعن أبوك وأبو يلي خلفك", // Curse your father and who bore you
  "زبالة", // Garbage (insult)
  "يا قذر", // You filthy

  // Gulf dialect (Saudi/UAE/Kuwait/Qatar)
  "ثور", // Bull (stupid)
  "حمار ابن حمار", // Donkey son of a donkey
  "يا تيس", // You goat (stupid)
  "قواد", // Pimp
  "معرص", // Pimped out
  "ديوس", // Cuckold (Gulf)
  "زق", // Shit (Gulf)

  // Maghreb dialect (Morocco/Tunisia/Algeria)
  "نعل بوك", // Curse your father
  "نيك موك", // Fuck your mother
  "زمل", // Faggot (Maghreb)
  "قحبة أمك", // Your mother's a whore
  "تفو عليك", // Spit on you
  "ولد الحرام", // Illegitimate child
  "يا زنديق", // You heretic

  // Iraqi dialect
  "ابن الگحبة", // Son of a whore (Iraqi)
  "كحبة", // Whore (Iraqi)
  "گواد", // Pimp (Iraqi)
  "ابن الگلب", // Son of a dog (Iraqi)
  "چلب", // Dog (Iraqi)
  "بيض", // Balls (Iraqi vulgar)
  "طرطور", // Worthless person (Iraqi)
  "مقعد", // Cripple (Iraqi insult)
  "چفخانة", // Brothel (Iraqi)
  "يبن الگحبة", // Son of a whore (Iraqi spoken)
  "عيني عينك", // Shameless (Iraqi)

  // Egyptian dialect (additional)
  "عيل وسخ", // Dirty kid
  "يا خرا", // You shit
  "بقرة", // Cow (insult)
  "يا حمارة", // You donkey (fem)
  "أمك", // Your mother (implied insult)
  "كسم", // Kos om (abbreviated)
  "طيزك", // Your ass
  "يا معفن", // You rotten
  "يا زبالة", // You trash
  "ابن الجزمة", // Son of a shoe
  "يا جلدة", // You (vulgar)
  "يا عبيط", // You idiot
  "يا أهبل", // You stupid
  "ابن أبوه", // Son of his father (euphemism for bastard)
  "يا ابن اللبوة", // Son of a lioness (vulgar context)
  "يا مجنون", // You crazy
  "بتاع نسوان", // Womanizer
  "يا كلبة", // You bitch
  "يا ملعون", // You cursed one
  "يا ابن الحيوانة", // Son of an animal
  "حلق بره", // Get lost
  "اتلم يا وسخ", // Get away you filthy

  // Levantine dialect (additional)
  "طز", // Screw it / damn
  "طز فيك", // Screw you
  "روح انيك أمك", // Go fuck your mother
  "يلعن ربك", // Curse your god
  "يلعن عرضك", // Curse your honor
  "يلعن روحك", // Curse your soul
  "كس إختك", // Your sister's pussy
  "أيري بتمك", // My dick in your mouth
  "أيري بأمك", // My dick in your mother
  "أيري بأختك", // My dick in your sister
  "كل خرا", // Eat shit
  "كل زق", // Eat shit (variant)
  "شو هالحمار", // What a donkey
  "روح انحاش", // Get lost
  "بدي فشخك", // I'll destroy you
  "فشخ", // Destroy (vulgar)
  "منيوكين", // Fucked (plural)
  "شلحة", // Stripper/slut

  // Gulf dialect (additional)
  "يا حقير", // You despicable
  "يا وضيع", // You lowly
  "ابن الجلب", // Son of a dog (Gulf variant)
  "يبن الجحش", // Son of a donkey
  "خنيث", // Effeminate (slur)
  "يا منيوك", // You fucked
  "يا سفالة", // You scum
  "مزين", // Pimp (Gulf slang)
  "طابور", // Queue (euphemism for gang activity)
  "يا فاجر", // You immoral
  "يا نذل", // You vile
  "عديم الشرف", // Without honor
  "كلب ابن كلب", // Dog son of dog (Gulf)
  "يا تافه", // You worthless
  "يا زفت", // You tar (insult)
  "يا قرد", // You monkey

  // Maghreb dialect (additional)
  "نعل دين ممك", // Curse your mother's religion
  "نعل بو ممك", // Curse your mother's father
  "نعل دين بوك", // Curse your father's religion
  "يا زعطوط", // You fool (Maghreb)
  "يا كلاب", // You dogs
  "يا حشايشي", // You hashish smoker
  "زعري", // Punk/thug (Maghreb)
  "نعل شيطانك", // Curse your devil
  "يا بهيمة", // You animal
  "متنيك", // Fucked (Maghreb)
  "قحبة بنت قحبة", // Whore daughter of whore

  // Standard Arabic insults (additional)
  "وقح", // Rude / shameless
  "سفيه", // Foolish / insolent
  "أبله", // Idiot
  "غبي", // Stupid
  "تافه", // Worthless
  "نذل", // Vile
  "خسيس", // Mean / despicable
  "لئيم", // Wretched
  "دنيء", // Lowly
  "وضيع", // Base / low
  "فاسق", // Immoral / sinner
  "فاجر", // Debauched
  "رذيل", // Vile / abject
  "منحط", // Degraded
  "ساقط", // Fallen / degenerate
  "خائن", // Traitor
  "جبان", // Coward
  "نجس", // Impure / filthy
  "قذر", // Dirty
  "مقرف", // Disgusting
  "حقير", // Contemptible

  // Sexual terms (additional)
  "لواط", // Sodomy
  "سحاق", // Lesbianism (vulgar)
  "جماع", // Intercourse
  "نكاح", // Sexual intercourse (vulgar context)
  "فاحشة", // Obscenity / fornication
  "زاني", // Adulterer (masc)
  "زانية", // Adulteress (fem)
  "داعرة", // Prostitute
  "داعر", // Debauched (masc)
  "بغي", // Prostitute (classical)
  "مومس", // Whore (formal)
  "فاسقة", // Immoral woman

  // Romanized Arabic profanity (used online)
  "kos omak", // Your mother's pussy
  "kos", // Pussy
  "ibn el sharmouta", // Son of a whore
  "ibn el sharmota", // Son of a whore (variant)
  "ya kalb", // You dog
  "ya hmar", // You donkey
  "ya ibn el sharmouta", // You son of a whore
  "ya ibn el kahba", // You son of a whore
  "ya khara", // You shit
  "telhas teezi", // Lick my ass
  "airi feek", // My dick in you
  "kol khara", // Eat shit
  "ya ahbal", // You idiot
  "ya wiskha", // You filthy
  "ya sharmout", // You male whore
  "ya sharmouta", // You whore
  "ya manyak", // You fucker
  "ya manyouk", // You fucked
  "ya khawal", // You faggot
  "ya zefer", // You disgusting
  "ya zift", // You tar
  "ibn el metnaka", // Son of the fucked one
  "ya ebn el kahba", // Son of a whore (variant)
  "neek", // Fuck
  "nik", // Fuck (variant)

  // Body parts vulgar (additional)
  "بظر", // Clitoris
  "ثدي", // Breast (vulgar context)
  "خصيتين", // Testicles
  "شرج", // Anus
  "فرج", // Vulva
  "عورة", // Private parts
  "حلمة", // Nipple
  "بزاز", // Breasts (vulgar)

  // Additional romanized Arabic profanity (online usage)
  "ayre", // my dick
  "ayri", // my dick (variant)
  "ayre feek", // my dick in you
  "ayre fi teezak", // my dick in your ass
  "teez", // ass
  "teezak", // your ass
  "teezi", // my ass
  "zeb", // dick
  "zebi", // my dick
  "zebb", // dick (variant)
  "sharmouta", // whore
  "sharmout", // male whore
  "sharmota", // whore (variant)
  "ya kalb ibn kalb", // you dog son of a dog
  "ya ibn sharmouta", // you son of a whore
  "ibn sharmouta", // son of a whore
  "kol khara wa moot", // eat shit and die
  "koss", // pussy (variant)
  "kos okhtak", // your sister's pussy
  "ya wati", // you lowlife
  "ya wisikh", // you filthy
  "ya manyouka", // you fucked (fem)
  "ya ibn il metnaka", // you son of the fucked
  "ya kharouf", // you sheep (insult)
  "ya dabbeh", // you idiot/animal
  "tfeh alayk", // spit on you
  "telhas", // lick (vulgar)
  "inaal", // curse
  "ina'al abouk", // curse your father
  "ina'al deenak", // curse your religion
  "ya zalameh", // you man (condescending)
  "ya gazma", // you shoe (insult)
  "ya ibn il gazma", // son of a shoe
  "ya hayawan", // you animal
  "ya kosomak", // your mother's pussy
  "nikomak", // fuck your mother (romanized)
  "ya gahba", // you whore (romanized)
  "ya zebbala", // you trash
  "ya ta3ban", // you snake (insult)
  "ya thawr", // you bull (stupid)
  "ya a3ma", // you blind
  "ya atrash", // you deaf (insult)
  "ya ma3tooh", // you mentally deficient
  "manyak", // fucker (romanized)
  "manyouk", // fucked (romanized)
  "kis", // pussy (romanized variant)
  "ya haiwan", // you animal (variant)
  "wlad l7ram", // children of sin (romanized Maghreb)
  "ta7an", // to grind (sexual, vulgar)
  "zabour", // penis (romanized Maghreb)

  // Iraqi dialect (additional)
  "ابن الچلب", // son of a dog (Iraqi)
  "معيدي", // stupid rural person (Iraqi insult)
  "بربوگ", // stupid (Iraqi)
  "خنزير", // pig (Iraqi insult)
  "ابن الخنزير", // son of a pig
  "حرامي", // thief (Iraqi)
  "ديّوث", // cuckold (Iraqi emphasis)
  "معرس", // pimped out (Iraqi)
  "ابن السرماية", // son of poverty (Iraqi insult)
  "تيس", // goat / stupid (Iraqi)
  "بعير", // camel (Iraqi insult)
  "فدوة", // disgusting (Iraqi slang)
  "زنخ", // rancid / disgusting (Iraqi)
  "يبن القحبة", // son of a whore (Iraqi spoken variant)
  "يابن الچلب", // son of a dog (Iraqi variant)
  "گلب", // dog (Iraqi variant spelling)
  "حيوان ابن حيوان", // animal son of animal (Iraqi)
  "مسخرة", // joke/mockery (Iraqi insult)
  "بغل", // mule (Iraqi insult)
  "ابن البغل", // son of a mule (Iraqi)
  "جاكوج", // asshole (Iraqi slang)
  "خرب بيتك", // may your house be destroyed (Iraqi)
  "يخرب بيتك", // may god destroy your house (Iraqi)
  "ابن الحرام", // bastard (Iraqi variant)
  "شلعوفة", // ugly woman (Iraqi)

  // Saudi/Khaleeji (additional)
  "يا ثور", // you bull (stupid)
  "يا خسيس", // you despicable
  "يا سافل", // you lowlife (Khaleeji)
  "يا ساقط", // you degenerate (Khaleeji)
  "يا نجس", // you impure (Khaleeji)
  "يا مخنث", // you effeminate (Khaleeji slur)
  "يا عديم", // you worthless (Khaleeji)
  "ابن الحمار", // son of a donkey (Khaleeji)
  "يا جحش", // you donkey (young)
  "ابن النعجة", // son of a sheep (insult)
  "طق عشر", // fuck off (Saudi slang)
  "لا أبوك", // no father (Saudi insult)
  "يا مطوع", // you religious zealot (Saudi derogatory)
  "يا بدوي", // you bedouin (derogatory context)
  "يا خرفان", // you sheep (plural, insult)
  "يلعن بوك", // curse your father (Gulf)
  "يلعن بو أمك", // curse your mother's father (Gulf)
  "أم الدحديرة", // mother of rolling (Gulf insult)
  "يا معرص", // you pimp (Gulf)
  "يا ديوث", // you cuckold (Gulf)
  "يا جلد", // you (vulgar, Gulf)
  "وجهك خرا", // your face is shit (Gulf)
  "يا حمار", // you donkey (Gulf)
  "يا بقر", // you cow (Gulf)
  "ملعون الوالدين", // cursed parents (Gulf)
  "يا سفيه", // you foolish (Gulf)
  "يا ابن الجزمة", // son of a shoe (Gulf variant)
  "خبل", // crazy (Gulf)
  "يا خبل", // you crazy (Gulf)
  "هبيلة", // stupid woman (Gulf)
  "يا هبيل", // you stupid (Gulf)

  // Yemeni profanity
  "يا مسخوط", // you cursed one (Yemeni)
  "يا عكبري", // you vile (Yemeni)
  "قرعة", // bald (Yemeni insult)
  "يا مقرع", // you bald one (Yemeni insult)
  "يا أخي شيطان", // you brother of devil (Yemeni)
  "يا ابن الفاجرة", // son of an immoral woman (Yemeni)
  "يا ملعون ابو ابوك", // cursed be your grandfather (Yemeni)
  "ابن القبيحة", // son of the ugly one (Yemeni)
  "عقبري", // vile/evil (Yemeni variant)
  "يا مشخوط", // you worthless (Yemeni)
  "يلعن تريبتك", // curse your upbringing (Yemeni)
  "يا خابث", // you malicious (Yemeni)
  "مخبل", // crazy (Yemeni)
  "يا مخبل", // you crazy (Yemeni)
  "شلّح", // strip (Yemeni vulgar)
  "أمك هندية", // your mother is Indian (Yemeni racist insult)

  // Sudanese profanity
  "يا كلب الزريبة", // you dog of the pen (Sudanese)
  "يا ود الحرام", // you child of sin (Sudanese)
  "يا ود الكلب", // you son of a dog (Sudanese)
  "يا خواض", // you faggot (Sudanese)
  "كُتر", // ass (Sudanese)
  "أبو زبي", // father of dick (Sudanese insult)
  "يا حشاش", // you pothead (Sudanese)
  "يا ابو كرشة", // you big-bellied (Sudanese)
  "يا جنجويدي", // you Janjaweed (Sudanese derogatory)
  "يا عبد", // you slave (Sudanese racist insult)
  "ابن الشيطانة", // son of a she-devil (Sudanese)
  "كمكم", // shut up (Sudanese vulgar)
  "يا نجاسة", // you filth (Sudanese)

  // Libyan profanity
  "يا بن الكلبة", // you son of a bitch (Libyan)
  "يا مزنوق", // you desperate (Libyan insult)
  "يا حاسي", // you drinker (Libyan insult)
  "نعل بو دينك", // curse your religion's father (Libyan)
  "يا زربوط", // you clumsy (Libyan)
  "يا خنفوس", // you beetle (Libyan insult)
  "كلب بن كلب", // dog son of dog (Libyan)
  "يا مرتد", // you apostate (Libyan)
  "أزعر", // thug (Libyan)
  "يا عاطل", // you unemployed bum (Libyan)
  "يا بهلول", // you clown/fool (Libyan)
  "يا معجب", // you arrogant (Libyan)
  "يا طبل", // you drum (Libyan insult for stupid)

  // Tunisian profanity (additional)
  "barcha", // a lot (used in vulgar context)
  "kahba", // whore (Tunisian)
  "zamel", // faggot (Tunisian)
  "miboun", // passive homosexual (Tunisian slur)
  "يا مبون", // you passive homosexual (Tunisian)
  "barra nik omek", // go fuck your mother (Tunisian)
  "barra", // go away / get lost (Tunisian)
  "naek", // fuck (Tunisian)
  "zebbi", // my dick (Tunisian)
  "يا بهيم", // you animal (Tunisian)
  "يا كبش", // you ram (Tunisian insult)
  "يا حلوف", // you pig (Tunisian)
  "يا كافر", // you infidel (Tunisian)
  "حمار حاشاك", // donkey, excuse me (Tunisian insult)
  "يا مسطول", // you stoned/high (Tunisian)
  "بلا كرامة", // without dignity (Tunisian insult)
  "يا فاسد", // you corrupt (Tunisian)
  "عطري", // promiscuous (Tunisian slang)

  // Moroccan Darija profanity
  "نعل", // curse (Moroccan)
  "تبون", // cunt (Moroccan)
  "تبون أمك", // your mother's cunt (Moroccan)
  "زامل", // faggot (Moroccan)
  "يا قواد", // you pimp (Moroccan)
  "نعل ديالك", // curse yours (Moroccan)
  "نيك أمك", // fuck your mother (Moroccan)
  "يا بوزبال", // you idiot (Moroccan)
  "يا معفون", // you rotten (Moroccan)
  "سير تقود", // go pimp (Moroccan insult)
  "ولد لقحبة", // son of a whore (Moroccan)
  "بنت لقحبة", // daughter of a whore (Moroccan)
  "يا مول الخنونة", // you effeminate (Moroccan insult)
  "يا عيّاش", // you degenerate (Moroccan)
  "يا شفار", // you thief (Moroccan)
  "سير فحالك", // get lost (Moroccan)
  "ما كاين والو", // there's nothing (dismissive, Moroccan)
  "يا كرياني", // you dirty/smelly (Moroccan)
  "يا مقطوع من شجرة", // you cut from a tree (no family, Moroccan)

  // Algerian profanity
  "نعل بوك يخطيك", // may your father's curse hit you (Algerian)
  "يا قواد ابن القواد", // you pimp son of a pimp (Algerian)
  "نيك موك يا حمار", // fuck your mother you donkey (Algerian)
  "يا حاشي", // you worthless (Algerian)
  "روح تنيك", // go get fucked (Algerian)
  "والو فيك", // nothing in you (Algerian insult)
  "يا مجرور", // you dragged (Algerian insult)
  "يا طحان", // you grinder (sexual insult, Algerian)
  "يا كبران", // you old fool (Algerian)
  "يا حقار", // you contemptible (Algerian)
  "سكّت يا هبيل", // shut up stupid (Algerian)
  "يا ماكلة الراس", // you headache (Algerian insult)
  "يا بخيل", // you miser (Algerian insult)

  // Compound phrases (additional)
  "يا ابن الستين كلب", // you son of sixty dogs
  "يلعن ابو ابوك", // curse your grandfather
  "يلعن سبع ارواح ابوك", // curse seven souls of your father
  "يلعن ابوك على ابو ابوك", // curse your father upon your grandfather
  "كس أمك على أمك", // your mother's pussy upon your mother
  "أيري بكل عيلتك", // my dick in your whole family
  "يلعن ابو هالجنسية", // curse the father of this nationality
  "يا ابن ستين شرموطة", // son of sixty whores
  "يا ابن ألف كلب", // son of a thousand dogs
  "يلعن عرض أمك", // curse your mother's honor
  "يلعن أبو أمك", // curse your mother's father
  "كس أخت إلي خلفك", // pussy of the sister of who bore you
  "أيري بأبوك وأبو أبوك", // my dick in your father and grandfather
  "يلعن الساعة اللي اتولدت فيها", // curse the hour you were born
  "يا ابن المية كلب", // son of a hundred dogs
  "كسمك يابن الوسخة", // your mother's pussy you son of filthy
  "أنيكك أنت وأمك", // I'll fuck you and your mother
  "على كس أمك", // upon your mother's pussy

  // Additional sexual terms in Arabic
  "مص", // suck (sexual)
  "مصمص", // suck (repeated, sexual)
  "لحس", // lick (sexual)
  "ناكني", // fuck me
  "انيكك", // I'll fuck you
  "ناك", // fucked
  "ينيك", // fucks
  "نياكة", // fucking (noun)
  "نيّاك", // fucker (one who fucks a lot)
  "شهوة", // lust
  "شبق", // horny
  "عاهر", // whore (masc)
  "مني", // semen
  "اغتصاب", // rape
  "تحرش", // sexual harassment
  "متحرش", // harasser
  "قواد أمك", // your mother's pimp

  // Additional body part vulgarities
  "زبر", // dick (variant)
  "أير", // dick
  "كعب", // penis (slang)
  "منقة", // vagina (vulgar slang)
  "كساس", // pussies (plural vulgar)
  "طياز", // asses (plural vulgar)
  "بزازك", // your breasts (vulgar)
  "بزازها", // her breasts (vulgar)
  "طيزها", // her ass (vulgar)
  "كسها", // her pussy (vulgar)
  "زبه", // his dick (vulgar)
  "زبره", // his dick (vulgar variant)

  // Homophobic terms across dialects (additional)
  "لوطي ابن لوطي", // sodomite son of sodomite
  "يا لوطي", // you sodomite
  "مخنث", // effeminate / transgender (slur)
  "شاذ جنسيا", // sexually deviant
  "يا شاذ", // you deviant
  "ممحون", // horny / desperate (insult)
  "يا ممحون", // you horny/desperate
  "بنوتي", // girly boy (insult)
  "طنط", // effeminate (Egyptian slur)
  "يا طنط", // you effeminate (Egyptian)
  "خنيثة", // effeminate woman / slur
  "عالمة", // belly dancer (used as insult)
  "زوج مرات", // husband of wives (insult for cuckold)

  // Religious insults
  "يلعن دين أمك", // curse your mother's religion
  "يلعن الدين", // curse the religion
  "يلعن دين ابوك", // curse your father's religion
  "كافر ابن كافر", // infidel son of infidel
  "يا ملحد", // you atheist (used as insult)
  "يلعن دين ايلي خلفك", // curse the religion of who bore you
  "ابن الحرام ابن الحرام", // bastard son of bastard
  "يا مرتد ابن مرتد", // you apostate son of apostate
  "يا كفّار", // you infidels (plural insult)
  "يلعن دين هالدنيا", // curse the religion of this world
  "يلعن الشيطان ابوك", // may the devil curse your father
  "يا ابن ابليس", // son of Satan
  "يا عدو الله", // enemy of God

  // Internet abbreviations used in Arabic chat
  "كسمك ياخول", // your mom's pussy you faggot
  "يبن الشرموطة", // son of a whore (spoken/typed fast)
  "يبن المتناكة", // son of the fucked one (spoken/typed fast)
  "يبن الوسخة", // son of the dirty one (spoken/typed fast)
  "كسختك", // your sister's pussy (abbreviated)
  "يبن الكلب", // son of a dog (spoken/typed fast)
  "يبن الحرام", // bastard (spoken/typed fast)
  "يبن الزنا", // son of adultery (spoken/typed fast)
  "امك شرموطة", // your mother is a whore (direct)
  "اختك شرموطة", // your sister is a whore (direct)
  "ابوك قواد", // your father is a pimp (direct)
  "كس اختك ع امك", // your sister's pussy on your mother
  "يلعن كسمك", // curse your mother's pussy

  // ========================================
  // === Franco-Arabic / Arabizi (Romanized with number substitutions) ===
  // ========================================
  "3ars", // pimp (عرص)
  "7mar", // donkey (حمار)
  "7ayawan", // animal (حيوان)
  "7mara", // female donkey (حمارة)
  "5awal", // faggot (خول)
  "5ara", // shit (خرا)
  "5aneeth", // effeminate (خنيث)
  "5anzeer", // pig (خنزير)
  "2a7a", // exclamation of disgust (أحا)
  "kos 2omak", // your mother's pussy
  "2eri", // my dick (أيري)
  "2eri feek", // my dick in you
  "2eri fi teezak", // my dick in your ass
  "te7an", // sexual grinding (طحن)
  "3abd", // slave (عبد - racist)
  "za7af", // creep (زحف)
  "zan2a", // stinky (زنخة)
  "nayik", // fucker (نايك)
  "nayika", // fucker (fem)
  "sha5 5ara", // shit person
  "ya 5awal", // you faggot
  "ya 7ayawan", // you animal
  "ya 7mar", // you donkey
  "ya 5anzeer", // you pig
  "ya 3ars", // you pimp
  "5olo2", // get lost (خلوق inverted as insult)
  "kos o5tak", // your sister's pussy
  "ko55", // pussy variant
  "3arsa", // female pimp (عرصة)
  "m3arras", // pimped out (معرص)
  "manyoo2", // fucked (منيوك)
  "manyoo2a", // fucked (fem)
  "5ayen", // traitor (خاين)
  "met7arresh", // harasser (متحرش)
  "e7'a", // exclamation of disgust variant
  "ya 2a5oo", // you brother (condescending)
  "ya ibn el 5ara", // son of shit
  "ya ibn el 7mar", // son of a donkey
  "ya ibn el 5anzeer", // son of a pig
  "ibn 3ahira", // son of a whore
  "ya zo2", // you shit (Gulf)
  "ya fa7esh", // you obscene
  "ya za3ran", // you thug
  "ya sefla", // you scum
  "ya wa6i", // you lowlife
  "ya na3al", // you curse
  "3an kos omak", // upon your mother's pussy
  "ya 5anees", // you effeminate (variant)

  // ========================================
  // === More Lebanese/Syrian Dialect ===
  // ========================================
  "انتاك", // get fucked (Lebanese)
  "كس أختك يا ابن الشرموطة", // your sister's pussy you son of a whore
  "يا ابن الملعون", // son of the cursed
  "يا قليل الأدب", // you ill-mannered
  "فشخة", // destruction (vulgar)
  "ابن الحرام المتناك", // bastard who got fucked
  "ابن الكلبة المتناكة", // son of the fucked bitch
  "بدي أنيك عرضك", // I'll fuck your honor
  "يا كلب الشارع", // you street dog
  "يا حمار الشارع", // you street donkey
  "يا وقح", // you rude
  "يا قليل الحيا", // you shameless
  "يا بلا كرامة", // you without dignity
  "يا ابن الزنا المتناك", // son of adultery who got fucked
  "روح كل خرا وموت", // go eat shit and die
  "روح فشخ حالك", // go destroy yourself
  "يا أجرب", // you mangy

  // ========================================
  // === More Moroccan Darija ===
  // ========================================
  "نيك بوك", // fuck your father (Moroccan)
  "زبي ف ممك", // my dick in your mother (Moroccan)
  "كول تبون ممك", // eat your mother's cunt (Moroccan)
  "ولد التبون", // son of a cunt (Moroccan)
  "ولد الحشيش", // son of hashish (Moroccan)
  "يا حمار ولد الحمار", // you donkey son of donkey (Moroccan)
  "زبي فيك", // my dick in you (Moroccan)
  "تبون اختك", // your sister's cunt (Moroccan)
  "يا حلقوم", // you throat (Moroccan insult)
  "يا كلب ولد الكلب", // you dog son of dog (Moroccan)
  "يا زفت ولد الزفت", // you tar son of tar (Moroccan)
  "سير تقود يا ولد القحبة", // go pimp you son of a whore (Moroccan)
  "يا بغل ولد البغل", // you mule son of a mule (Moroccan)

  // ========================================
  // === More Algerian Dialect ===
  // ========================================
  "نعل كوك", // curse your father (Algerian variant)
  "يا حمار يتنيك", // you donkey get fucked (Algerian)
  "روح يبان بوك", // go show your father (Algerian insult)
  "يا ولد الزنية", // you son of adultery (Algerian)
  "نعل ربك", // curse your lord (Algerian)
  "يا قرعة", // you bald (Algerian insult)
  "يا مهبول", // you crazy (Algerian)
  "يا قواد يبن القواد", // you pimp son of pimp (Algerian variant)
  "يا شيطان", // you devil (Algerian)
  "يا فراخ", // you chicken (Algerian insult)
  "يا حقار يبن الحقار", // you contemptible son of contemptible (Algerian)
  "روح تنيك يا حمار", // go get fucked donkey (Algerian)
  "نعل بو ممك يا قواد", // curse your mother's father you pimp (Algerian)

  // ========================================
  // === More Tunisian Dialect ===
  // ========================================
  "يا كلب ابن الكلب", // you dog son of a dog (Tunisian)
  "يا عفن", // you rotten (Tunisian)
  "يا قحبة بنت القحبة", // you whore daughter of whore (Tunisian)
  "بارّا تنيّك", // go get fucked (Tunisian variant)
  "نعل بو زبك", // curse your dick's father (Tunisian)
  "نعل دين بو ممك", // curse your mother's father's religion (Tunisian)
  "يا خنزير ابن الخنزير", // you pig son of pig (Tunisian)
  "يا متنيّك", // you fucked one (Tunisian)
  "يا حقير ابن الحقير", // you despicable son of despicable (Tunisian)
  "يا مسطول ابن المسطول", // you stoned son of stoned (Tunisian)
  "كاهبة بنت الكاهبة", // whore daughter of a whore (Tunisian variant)
  "بارّا روح", // go away (Tunisian dismissive)
  "يا ابن الباطل", // you son of falsehood (Tunisian)

  // ========================================
  // === More Egyptian Dialect ===
  // ========================================
  "يا ابن الوسخة المتناكة", // son of the dirty fucked one (Egyptian)
  "يا ابن الشرشوحة المتناكة", // son of the fucked slut (Egyptian)
  "كسمك يا خول", // your mother's pussy you faggot (Egyptian)
  "يا خول ابن الخول", // you faggot son of faggot (Egyptian)
  "يا عرص ابن العرص المتناك", // you pimp son of the fucked pimp (Egyptian)
  "يا كسمك", // your mother's pussy (Egyptian vocative)
  "يا متناك ابن المتناكة", // you fucker son of the fucked (Egyptian)
  "يا جزمة قديمة", // you old shoe (Egyptian insult)
  "عارف أمك كويس", // I know your mother well (Egyptian innuendo)
  "يا ابن ستين في ستين", // son of sixty times sixty (Egyptian)
  "يا ابن المية شرموطة", // son of a hundred whores (Egyptian)
  "يا ابن الشريفة", // son of the noble one (sarcastic, Egyptian)
  "يا ابن العيلة الوسخة", // son of the dirty family (Egyptian)
  "يا أبو وش بايخ", // you with the stale face (Egyptian)
  "يا ولاد الوسخة", // you children of the dirty one (Egyptian)
  "يا ولاد الحرام الوسخين", // you dirty bastards (Egyptian)

  // ========================================
  // === More Gulf/Khaleeji Dialect ===
  // ========================================
  "يا خنيث ابن الخنيث", // you effeminate son of effeminate (Gulf)
  "يا مزين ابن المزين", // you pimp son of pimp (Gulf)
  "يا ابن الثور", // son of a bull (Gulf)
  "يا بغل ابن البغل", // you mule son of mule (Gulf)
  "يا ابن التيس", // son of a goat (Gulf)
  "يا ابن الخنزيرة", // son of a sow (Gulf)
  "وجهك زق", // your face is shit (Gulf)
  "يا صرصور", // you cockroach (Gulf)
  "يا حشرة", // you insect (Gulf)
  "يا نملة", // you ant (Gulf insult)
  "لا شرف لك", // you have no honor (Gulf)
  "يا عديم الأصل", // you without origin (Gulf)
  "يا قليل الأصل", // you of little origin (Gulf)
  "يا مغفل", // you gullible fool (Gulf)
  "يا أبله ابن الأبله", // you idiot son of idiot (Gulf)
  "أمك في الشارع", // your mother in the street (Gulf)
  "أبوك ديوث", // your father is a cuckold (Gulf)

  // ========================================
  // === More Iraqi Dialect ===
  // ========================================
  "يا ابن الگحبة المعرصة", // son of the pimped whore (Iraqi)
  "يا چلب ابن الچلب", // you dog son of dog (Iraqi)
  "يا بربوگ ابن البربوگ", // you fool son of fool (Iraqi)
  "گحبة أمك ع أمك", // your mother's whore upon your mother (Iraqi)
  "يخرب شرفك", // may your honor be destroyed (Iraqi)
  "ابن السنين گلب", // son of years of dogs (Iraqi)
  "يا ابن الطرطور", // son of the worthless (Iraqi)
  "يا بعير ابن البعير", // you camel son of camel (Iraqi)
  "يا معيدي ابن المعيدي", // you fool son of fool (Iraqi)
  "يا ابن الحرامية", // son of thieves (Iraqi)
  "كسمك يا ابن الگحبة", // your mother's pussy son of whore (Iraqi)
  "يلعن بو جدك", // curse your grandfather's father (Iraqi)
  "يا ابن السلبوطة", // son of the slipper (Iraqi insult)

  // ========================================
  // === Omani Dialect ===
  // ========================================
  "يا خايس", // you rotten (Omani)
  "يا معفن ابن المعفن", // you rotten son of rotten (Omani)
  "يا بوعلم", // you fool (Omani)
  "يا حيوان ابن الحيوان", // you animal son of animal (Omani)
  "أمك زانية", // your mother is an adulteress (Omani)
  "يا ابن الزانية", // son of an adulteress (Omani)
  "يلعن دين ابو ابوك", // curse your grandfather's religion (Omani)
  "يا سخيف ابن السخيف", // you pathetic son of pathetic (Omani)

  // ========================================
  // === Bahraini Dialect ===
  // ========================================
  "يا بقر ابن البقر", // you cow son of cow (Bahraini)
  "يا ثور ابن الثور", // you bull son of bull (Bahraini)
  "يا تيس ابن التيس", // you goat son of goat (Bahraini)
  "بو وجه خراب", // with a ruined face (Bahraini)
  "يا خس", // you lettuce (Bahraini insult for dumb)
  "يا ماعز", // you goat (Bahraini)
  "يا عنز", // you nanny goat (Bahraini insult)

  // ========================================
  // === Kuwaiti Dialect ===
  // ========================================
  "يا خوش زبالة", // you are great garbage (Kuwaiti sarcasm)
  "يا ابن الخادمة", // son of the maid (Kuwaiti classist insult)
  "يا حافي", // you barefoot (Kuwaiti classist)
  "يا فقير ابن الفقير", // you poor son of poor (Kuwaiti)
  "ملعون أبوك وأبو أبوك", // cursed your father and grandfather (Kuwaiti)
  "يا ابن الزفت الأسود", // son of black tar (Kuwaiti)
  "يا هبيل ابن الهبيل", // you stupid son of stupid (Kuwaiti)
  "يا خبل ابن الخبل", // you crazy son of crazy (Kuwaiti)

  // ========================================
  // === Mauritanian Dialect ===
  // ========================================
  "يا كافر ابن الكافر", // you infidel son of infidel (Mauritanian)
  "يا زنجي ابن الزنجي", // you negro son of negro (Mauritanian racist)
  "يا عبد ابن العبد", // you slave son of slave (Mauritanian racist)
  "يا ولد الحرام المطرود", // you expelled bastard (Mauritanian)

  // ========================================
  // === More Romanized Compound Phrases ===
  // ========================================
  "kos om el kol", // everyone's mother's pussy
  "telhas kos omak", // lick your mother's pussy
  "telhas teez omak", // lick your mother's ass
  "ya ibn el 7aram", // you bastard
  "ya ibn el gahba", // you son of a whore
  "ya ibn el mara el wisikha", // son of the dirty woman
  "kol 5ara w moot", // eat shit and die
  "ya wlad el 7aram", // you bastards
  "ayre b kos omak", // my dick in your mother's pussy
  "ayre b teezak", // my dick in your ass
  "a7a ya 5awal", // disgust you faggot
  "ya ibn el metnaka el wisikha", // son of the dirty fucked one
  "neek omak ya ibn el sharmouta", // fuck your mother son of a whore
  "kos o5tak ya manyouk", // your sister's pussy you fucked
  "rooh en2ebir", // go get buried
  "rooh inteek", // go get fucked
  "ya zalameh ibn el zalameh", // you man son of man (condescending)
  "ya 7ayawan ibn el 7ayawan", // you animal son of animal
  "kol zeg", // eat shit (variant)
  "ya ibn el shar6an", // son of the devil
  "ya khanzeera", // you sow
  "ya 7mara bint el 7mara", // you donkey daughter of donkey
  "ibn el 3ahira el metnaika", // son of the fucked whore
  "ya zebi", // you dick (Tunisian romanized)
  "ya t7in", // you flour (sexual insult)
  "ya m7ayen", // you cheater
  "ya zift ya zibele", // you tar you trash
  "barra nik", // go fuck (romanized Maghreb)
  "barra in3al bouk", // go curse your father (romanized Maghreb)
  "zaml ibn el zaml", // faggot son of faggot (romanized Maghreb)
  "t7an fi omak", // grind in your mother (sexual, romanized)
  "nikomak ya 7mar", // fuck your mother you donkey (romanized)

  // ========================================
  // === More Additional Sexual Terms ===
  // ========================================
  "نيكني يا زبي", // fuck me my dick (vulgar phrase)
  "مصي زبي", // suck my dick (fem command)
  "مصي أيري", // suck my dick (variant)
  "نيك طيزك", // fuck your ass
  "نيك كسك", // fuck your pussy
  "حط زبي بكسك", // put my dick in your pussy
  "حط أيري بطيزك", // put my dick in your ass
  "بدي أنيك طيزك", // I want to fuck your ass
  "بدي أنيك كسك", // I want to fuck your pussy
  "شلحي هدومك", // take off your clothes (fem)
  "يا بنت الشرموطة", // daughter of a whore
  "بنت القحبة", // daughter of a whore
  "بنت الكلب", // daughter of a dog
  "بنت المتناكة", // daughter of the fucked one
  "بنت الحرام", // illegitimate daughter
  "يا حبلة", // you pregnant (insult)
  "يا فاتحة", // you open (sexual insult)
  "يا واسعة", // you loose (sexual insult)
  "يا نجسة", // you filthy (fem)
  "يا وسخة", // you dirty (fem)
  "يا شريرة", // you evil (fem)
  "يا لبوة", // you lioness (sexual context)

  // ========================================
  // === EXPANSION: Egyptian dialect - extended ===
  // ========================================
  "ابن الشرموطة الوسخة", // Son of the dirty whore (Egyptian)
  "يا ابن اللبوة الوسخة", // Son of the dirty lioness (Egyptian)
  "كسم ابوك", // Your father's pussy (Egyptian)
  "كسم اللي خلفك", // Pussy of who bore you (Egyptian)
  "كسم اللي جابك", // Pussy of who brought you (Egyptian)
  "يا ابن الوسخين", // Son of dirty ones (Egyptian)
  "يا ابن المره الوسخة", // Son of the dirty woman (Egyptian)
  "يا متناك يا وسخ", // You fucker you dirty (Egyptian)
  "يا خنزيرة", // You sow (Egyptian fem)
  "نيك أمك يا خول", // Fuck your mother you faggot (Egyptian)
  "يا ابن المره المتناكة", // Son of the fucked woman (Egyptian)
  "يا واد يا وسخ", // You dirty boy (Egyptian)
  "يا واد يا ابن الوسخة", // You boy son of the dirty one (Egyptian)
  "يا بنت الوسخة", // You daughter of the dirty one (Egyptian)
  "يا بنت المتناكة", // You daughter of the fucked one (Egyptian)
  "كسمك يا بنت الشرموطة", // Your mom's pussy daughter of a whore (Egyptian)
  "يا متناكة يا وسخة", // You fucked one you dirty (Egyptian fem)
  "يا شرموطة يا وسخة", // You whore you dirty (Egyptian)
  "اقطع من هنا", // Get out of here (Egyptian)
  "يا ابن الست", // Son of the lady (Egyptian euphemism)
  "نيك امك يا ابن الشرموطة", // Fuck your mother son of a whore (Egyptian)
  "يا ابن الأفعى", // Son of the viper (Egyptian)
  "يا ملعون يا ابن الملعون", // You cursed one son of the cursed (Egyptian)
  "يا حمار يا ابن الحمار", // You donkey son of a donkey (Egyptian)
  "يا غبي يا ابن الغبي", // You stupid son of stupid (Egyptian)
  "يا عبيط يا ابن العبيطة", // You idiot son of the idiot (Egyptian)
  "يا أهبل يا ابن الهبلة", // You stupid son of the stupid (Egyptian)
  "نيلة في ابوك", // Indigo in your father (Egyptian curse)
  "نيلة فيك", // Indigo in you (Egyptian curse)
  "اللهم اكفينا شرك", // God protect us from your evil (Egyptian passive aggressive)
  "يا ابن دين الكلب", // Son of the dog's religion (Egyptian)
  "يا بتاع كله", // You of everything (Egyptian, implying promiscuity)
  "يا رخيصة", // You cheap one (Egyptian fem)
  "يا رخيص", // You cheap one (Egyptian masc)
  "يا قليلة الأدب", // You ill-mannered (Egyptian fem)
  "يا قليل الأدب يا ابن المتناكة", // You ill-mannered son of the fucked (Egyptian)
  "يا ابن الجزمة القديمة", // Son of the old shoe (Egyptian)
  "يا ابن الشحاتة", // Son of the beggar (Egyptian fem)
  "يا ابن الشحات", // Son of the beggar (Egyptian masc)
  "يا ابن النيل", // Son of the Nile (Egyptian sarcastic)
  "يا حيوانة", // You animal (Egyptian fem)
  "يلعن ابو دينك", // Curse your religion's father (Egyptian)
  "يلعن كسم دينك", // Curse your religion's pussy (Egyptian)
  "كسمين أمك", // Double pussy of your mother (Egyptian)
  "يا ابن التين", // Son of figs (Egyptian euphemism for insult)
  "أختك شرموطة يا ابن الكلب", // Your sister is a whore son of a dog (Egyptian)
  "كسمك على كسمك", // Your mom's pussy upon your mom's pussy (Egyptian)
  "يا ابن الشلحة", // Son of the stripper (Egyptian)

  // ========================================
  // === EXPANSION: Levantine dialect (Syrian) - extended ===
  // ========================================
  "روح لعند أمك", // Go to your mother (Syrian dismissive)
  "يا ابن القحبة المنيوكة", // Son of the fucked whore (Syrian)
  "أيري بكل خلقتك", // My dick in your entire creation (Syrian)
  "أيري بعرضك", // My dick in your honor (Syrian)
  "أيري بدينك", // My dick in your religion (Syrian)
  "أيري بربك", // My dick in your lord (Syrian)
  "أيري بأبوك وأمك", // My dick in your father and mother (Syrian)
  "كس أمك وأم اللي خلفك", // Your mother's pussy and who bore you's mother (Syrian)
  "يلعن عرض أمك وأبوك", // Curse your parents' honor (Syrian)
  "يا مقطع من شجرة", // You cut from a tree (Syrian, no family)
  "يا قليل الشرف", // You of little honor (Syrian)
  "يا عديم الشرف والكرامة", // You without honor and dignity (Syrian)
  "يا ابن الشرشوحة المنيوكة", // Son of the fucked slut (Syrian)
  "يلعن روحك وروح اللي جابك", // Curse your soul and who brought you (Syrian)
  "يا حيوان يا ابن الحيوان", // You animal son of animal (Syrian)
  "روح انحاش من وجي", // Get out of my face (Syrian)
  "يا كلب يا ابن الكلب", // You dog son of a dog (Syrian)
  "يا مشلوح", // You outcast (Syrian)
  "يا مرمي", // You thrown away (Syrian)
  "يا قرد يا ابن القرد", // You monkey son of monkey (Syrian)
  "بدي فشخ وجهك", // I'll smash your face (Syrian)
  "بدي كسر خشمك", // I'll break your nose (Syrian)
  "بدي فرمك", // I'll grind you (Syrian)
  "بدي أنيك عيلتك", // I'll fuck your family (Syrian)
  "يلعن اللي خلفك", // Curse who bore you (Syrian)
  "يلعن أبو خلقتك", // Curse the father of your creation (Syrian)
  "كل خرا وموت", // Eat shit and die (Syrian)
  "يا ابن الستين شرموطة", // Son of sixty whores (Syrian)
  "يا ابن الألف كلب", // Son of a thousand dogs (Syrian)
  "يا زبالة الشوارع", // You garbage of the streets (Syrian)
  "يا نفاية", // You waste (Syrian)
  "يا قمامة", // You garbage (Syrian)
  "وجهك زبالة", // Your face is garbage (Syrian)
  "يا منيك أمك", // You fucker of your mother (Syrian)

  // ========================================
  // === EXPANSION: Levantine dialect (Lebanese) - extended ===
  // ========================================
  "كس إمك يا ابن القحبة", // Your mother's pussy son of a whore (Lebanese)
  "أيري فيك وبإمك", // My dick in you and your mother (Lebanese)
  "روح ولك", // Go already (Lebanese dismissive)
  "شو هالحمار هيدا", // What a donkey this is (Lebanese)
  "طز فيك وبأهلك", // Screw you and your family (Lebanese)
  "يلعن ابو ابوك على أبو جدك", // Curse your grandfather's grandfather (Lebanese)
  "يا ابن اللقيطة", // Son of the foundling/bastard (Lebanese)
  "يا لقيط", // You foundling / bastard (Lebanese)
  "يا لقيطة", // You foundling / bastard (Lebanese fem)
  "أيري بعين إمك", // My dick in your mother's eye (Lebanese)
  "أيري بخشم ابوك", // My dick in your father's nose (Lebanese)
  "أيري بسبع ارواح ابوك", // My dick in seven souls of your father (Lebanese)
  "يا بلا تربية", // You without upbringing (Lebanese)
  "يا قليل التربية", // You of little upbringing (Lebanese)
  "يا بلا أخلاق", // You without morals (Lebanese)
  "يا شلخت", // You slut (Lebanese)
  "يا ناطرة عا الطريق", // You waiting on the road (Lebanese, implying prostitute)
  "يا متل إمك", // You like your mother (Lebanese insult)
  "يا بيّاع عرضو", // You seller of your honor (Lebanese)
  "بدّي كسّرك", // I'll break you (Lebanese)
  "بدّي فرمك فرم", // I'll grind you thoroughly (Lebanese)
  "كس إمّك على إمّك", // Your mom's pussy upon your mom (Lebanese)
  "كس أخت يلي خلفك", // Sister's pussy of who bore you (Lebanese)
  "يا معفّن يا ابن المعفّن", // You rotten son of rotten (Lebanese)
  "يا خرا ابن الخرا", // You shit son of shit (Lebanese)

  // ========================================
  // === EXPANSION: Levantine dialect (Palestinian) - extended ===
  // ========================================
  "روح عن وجهي", // Get out of my face (Palestinian)
  "يا ابن الملعونة", // Son of the cursed one (Palestinian)
  "يا كلب الشوارع", // You street dog (Palestinian)
  "يا حمار الحارة", // You donkey of the neighborhood (Palestinian)
  "يلعن ابو تربيتك", // Curse the father of your upbringing (Palestinian)
  "يلعن ابو هالوجه", // Curse the father of this face (Palestinian)
  "يلعن ابو هالخلقة", // Curse the father of this creation (Palestinian)
  "يا ابن الحرام يا منيوك", // You bastard you fucked (Palestinian)
  "كس أمك يا ابن الكلب", // Your mother's pussy son of a dog (Palestinian)
  "أيري فيك وبكل خلقتك", // My dick in you and your creation (Palestinian)
  "يا سافل يا ابن السافل", // You lowlife son of lowlife (Palestinian)
  "يا نذل يا ابن النذل", // You vile son of vile (Palestinian)
  "يا ابن الفاسقة", // Son of the immoral woman (Palestinian)
  "يا ابن المنيوكة الوسخة", // Son of the dirty fucked one (Palestinian)
  "روح إنتاك يا حمار", // Go get fucked you donkey (Palestinian)
  "يا ابن الغانية", // Son of the courtesan (Palestinian)
  "يلعن ابو سلالتك", // Curse the father of your lineage (Palestinian)
  "يا مش ابن ناس", // You not a son of people (Palestinian, meaning low class)

  // ========================================
  // === EXPANSION: Levantine dialect (Jordanian) - extended ===
  // ========================================
  "يا زلمة الخايسة", // You man of rotten (Jordanian)
  "يا ابن الكلبة العايرة", // Son of the roaming bitch (Jordanian)
  "روح قصف بحرك", // Go bomb your sea (Jordanian dismissive)
  "يا ابن القرمطية", // Son of the Qarmatian (Jordanian insult)
  "يلعن بو سنسفيلك", // Curse your ancestor (Jordanian)
  "يا ابن سبعين كلب", // Son of seventy dogs (Jordanian)
  "يلعن ابو خلقتك", // Curse your creation's father (Jordanian)
  "يا مخبول", // You crazy (Jordanian)
  "يا مخبولة", // You crazy (Jordanian fem)
  "يا ابن العاهر", // Son of the whoremonger (Jordanian)
  "يا ابن الزنا المحصن", // Son of married adultery (Jordanian)
  "يا أجرب يا ابن الأجرب", // You mangy son of mangy (Jordanian)
  "يا ابن الفاجرة المنيوكة", // Son of the fucked immoral (Jordanian)

  // ========================================
  // === EXPANSION: Gulf dialect (Saudi) - extended ===
  // ========================================
  "يا ابن الزنا", // Son of adultery (Saudi)
  "يا ابن الحرام المعرص", // You bastard pimp (Saudi)
  "يا ديوث يا ابن الديوث", // You cuckold son of cuckold (Saudi)
  "يا خنيث يا ابن الخنيث", // You effeminate son of effeminate (Saudi)
  "الله لا يوفقك", // May God not grant you success (Saudi curse)
  "الله يلعنك", // May God curse you (Saudi)
  "الله ياخذك", // May God take you (Saudi death curse)
  "الله يسود وجهك", // May God blacken your face (Saudi curse)
  "الله يقطع رزقك", // May God cut your sustenance (Saudi curse)
  "الله يفضحك", // May God expose you (Saudi curse)
  "الله ينتقم منك", // May God take revenge on you (Saudi)
  "الله يذلك", // May God humiliate you (Saudi)
  "الله يعميك", // May God blind you (Saudi)
  "الله يشلك", // May God paralyze you (Saudi)
  "يا ابن الستين في ستين", // Son of sixty in sixty (Saudi)
  "يا قذر يا ابن القذر", // You filthy son of filthy (Saudi)
  "يا وضيع يا ابن الوضيع", // You lowly son of lowly (Saudi)
  "يا سفالة يا ابن السفالة", // You scum son of scum (Saudi)
  "يلعن بو شنبك", // Curse your mustache's father (Saudi)
  "طق عشر يا حمار", // Fuck off you donkey (Saudi)
  "أمك تمشي في الشارع", // Your mother walks the streets (Saudi)
  "أبوك ما له أصل", // Your father has no origin (Saudi)
  "يا ابن اللقيط", // Son of the foundling (Saudi)
  "يا ابن المسيار", // Son of the temporary marriage (Saudi insult)
  "يا ابن الحرمة الوسخة", // Son of the dirty woman (Saudi)
  "يا بربوق", // You foolish (Saudi)
  "يا سخلة", // You lamb (Saudi insult for stupid)
  "يا طرش بحر", // You sea vomit (Saudi insult)

  // ========================================
  // === EXPANSION: Gulf dialect (Emirati) - extended ===
  // ========================================
  "يا ابن اللعبة", // Son of the toy (Emirati insult)
  "يا هبيل يا ابن الهبيلة", // You stupid son of the stupid (Emirati)
  "يا خبل يا ابن الخبلة", // You crazy son of the crazy (Emirati)
  "يا مسخرة يا ابن المسخرة", // You joke son of a joke (Emirati)
  "يا مغفل يا ابن المغفل", // You gullible son of gullible (Emirati)
  "انطم", // Shut up (Emirati)
  "سكر سالفتك", // Shut your story (Emirati, shut up)
  "يا بو وجه", // You with a face (Emirati shameless)
  "يا حافي يا ابن الحافي", // You barefoot son of barefoot (Emirati)
  "يا ريال وسخ", // You dirty man (Emirati)
  "يا حرمة وسخة", // You dirty woman (Emirati)
  "يا ابن الهندية", // Son of the Indian woman (Emirati racist)
  "يا عيل وسخ", // You dirty kid (Emirati)
  "يا معرص يا ابن المعرص", // You pimp son of pimp (Emirati)

  // ========================================
  // === EXPANSION: Gulf dialect (Qatari) - extended ===
  // ========================================
  "يا ابن الخبيثة", // Son of the malicious (Qatari)
  "يا خبيث يا ابن الخبيث", // You malicious son of malicious (Qatari)
  "يا تافه يا ابن التافه", // You worthless son of worthless (Qatari)
  "يا فاشل يا ابن الفاشل", // You failure son of failure (Qatari)
  "يا حقير يا ابن الحقير", // You contemptible son of contemptible (Qatari)
  "يا نجس يا ابن النجس", // You impure son of impure (Qatari)
  "يلعن بو وجهك", // Curse your face's father (Qatari)
  "يلعن بو خلقتك", // Curse your creation's father (Qatari)

  // ========================================
  // === EXPANSION: Iraqi dialect - extended ===
  // ========================================
  "يا ابن الچلب المعرص", // Son of the pimped dog (Iraqi)
  "يا گحبة بنت الگحبة", // You whore daughter of whore (Iraqi)
  "يخرب بيت ابوك", // May your father's house be destroyed (Iraqi)
  "يخرب عرضك", // May your honor be destroyed (Iraqi)
  "يخرب دينك", // May your religion be destroyed (Iraqi)
  "يا ابن الفجرة", // Son of the immoral one (Iraqi)
  "يا ابن الخبيثة العايرة", // Son of the malicious wanderer (Iraqi)
  "يا بلاوي", // You disasters (Iraqi insult)
  "يا سراي", // You worthless (Iraqi)
  "يا لوطي يا ابن اللوطي", // You sodomite son of sodomite (Iraqi)
  "يا معرس يا ابن المعرس", // You pimped son of pimped (Iraqi)
  "كل خره يا ابن الچلب", // Eat shit son of a dog (Iraqi)
  "يا بربوگ يا ابن البربوگ", // You fool son of fool (Iraqi)
  "يا ابن البيض", // Son of balls (Iraqi vulgar)
  "يا ابن الطرشي", // Son of the pickles (Iraqi insult)
  "يا ابن الچفخانة", // Son of the brothel (Iraqi)
  "گحبة أمك على جدك", // Your mother's whore upon your grandfather (Iraqi)
  "يا ولد الحرام يا ابن الگحبة", // You bastard son of a whore (Iraqi)
  "يا ابن الزاغرية", // Son of the ululating one (Iraqi insult)
  "يا مسخوط من الله", // You cursed by God (Iraqi)
  "الله يسلّط عليك", // May God send upon you (Iraqi curse)
  "الله ياخذك مو ياخذ غيرك", // May God take you not others (Iraqi death curse)
  "يا ابن السگنية", // Son of the cigarette woman (Iraqi insult)
  "يا ابن الشارع", // Son of the street (Iraqi)

  // ========================================
  // === EXPANSION: Moroccan Darija - extended ===
  // ========================================
  "نعل بو ممك على ممك", // Curse your mother's father upon your mother (Moroccan)
  "نيك ممك يا ولد القحبة", // Fuck your mother son of a whore (Moroccan)
  "سير تنيك يا ولد الحرام", // Go get fucked bastard (Moroccan)
  "سير لعند ممك", // Go to your mother (Moroccan dismissive)
  "زبي ف تبون ممك", // My dick in your mother's cunt (Moroccan)
  "يا بوزبال ولد البوزبال", // You idiot son of idiot (Moroccan)
  "يا حمار ولد الحمارة", // You donkey son of donkey (Moroccan)
  "يا كلب ابن الكلبة", // You dog son of bitch (Moroccan)
  "يا خنزير ولد الخنزيرة", // You pig son of sow (Moroccan)
  "يا مقود ولد المقود", // You pimped son of pimped (Moroccan)
  "يا ولد الزنا", // You son of adultery (Moroccan)
  "يا ولد لقحبة الوسخة", // Son of the dirty whore (Moroccan)
  "يا ولد لكلبة", // Son of the bitch (Moroccan)
  "تبون اختك على ممك", // Your sister's cunt upon your mother (Moroccan)
  "نعل بوك ع بو ممك", // Curse your father upon your mother's father (Moroccan)
  "سير تقود يا حمار", // Go pimp you donkey (Moroccan)
  "يا ماكيان", // You chicken (Moroccan insult)
  "يا معجون", // You paste (Moroccan insult for worthless)
  "يا ولد البرادة", // Son of the fridge (Moroccan, meaning cold/heartless)
  "يا مسوس", // You rotten (Moroccan)
  "يا زعطوط ولد الزعطوط", // You fool son of fool (Moroccan)
  "يا شفّار ولد الشفّار", // You thief son of thief (Moroccan)
  "يا عيّاش ولد العيّاش", // You degenerate son of degenerate (Moroccan)
  "يا مقطوع من الدنيا", // You cut from the world (Moroccan)
  "يا بلا أصل", // You without origin (Moroccan)
  "يا بلا فصل", // You without class (Moroccan)

  // ========================================
  // === EXPANSION: Algerian dialect - extended ===
  // ========================================
  "نعل بوك يا قواد ابن القواد", // Curse your father pimp son of pimp (Algerian)
  "روح تنيك يا حمار ابن الحمار", // Go get fucked donkey son of donkey (Algerian)
  "يا ولد الزنية المنيك", // Son of fucked adultery (Algerian)
  "يا هبيل يبن الهبيلة", // You stupid son of stupid (Algerian)
  "يا مجرور ولد المجرور", // You dragged son of dragged (Algerian)
  "يا طحان ولد الطحانة", // You grinder son of grinder (Algerian)
  "نعل ربك يا حقار", // Curse your lord you contemptible (Algerian)
  "روح يبان بوك يا حمار", // Go show your father you donkey (Algerian)
  "يا كلاب ولاد الكلاب", // You dogs sons of dogs (Algerian)
  "نعل دين بو جدك", // Curse your grandfather's father's religion (Algerian)
  "يا خنزير ابن الخنزيرة", // You pig son of sow (Algerian)
  "يا ولد الحركية", // Son of the collaborator (Algerian historical insult)
  "يا شيطان ولد الشيطان", // You devil son of devil (Algerian)
  "يا فراخ ولد الفراخ", // You chicken son of chicken (Algerian)
  "يا ناقص ولد الناقصة", // You deficient son of deficient (Algerian)
  "يا مسخوط ولد المسخوط", // You cursed son of cursed (Algerian)
  "يا سارق ولد السارقة", // You thief son of thief (Algerian)
  "يا كذاب ولد الكذابة", // You liar son of liar (Algerian)

  // ========================================
  // === EXPANSION: Tunisian dialect - extended ===
  // ========================================
  "بارّا تنيّك يا ولد القحبة", // Go get fucked son of a whore (Tunisian)
  "نعل بو ممك يا مبون", // Curse your mother's father you bottom (Tunisian)
  "يا حلوف ابن الحلوف", // You pig son of pig (Tunisian)
  "يا كبش ابن الكبش", // You ram son of ram (Tunisian)
  "يا زامل ولد الزامل", // You faggot son of faggot (Tunisian)
  "يا مبون ولد المبون", // You bottom son of bottom (Tunisian)
  "يا ملعون ولد الملعون", // You cursed son of cursed (Tunisian)
  "يا فاسد ولد الفاسد", // You corrupt son of corrupt (Tunisian)
  "يا مسطول ابن المسطولة", // You stoned son of stoned (Tunisian)
  "يا حشايشي ابن الحشايشي", // You pothead son of pothead (Tunisian)
  "بلا كرامة بلا راس", // Without dignity without head (Tunisian)
  "يا ناقص عقل", // You deficient mind (Tunisian)
  "يا ولد البور", // Son of the wasteland (Tunisian insult)
  "يا مخنّث", // You effeminate (Tunisian slur)
  "يا ولد الغجر", // Son of the gypsies (Tunisian)

  // ========================================
  // === EXPANSION: Libyan dialect - extended ===
  // ========================================
  "يا بن الكلبة الوسخة", // Son of the dirty bitch (Libyan)
  "يا مزنوق يبن المزنوقة", // You desperate son of desperate (Libyan)
  "نعل بو دينك يا كلب", // Curse your religion you dog (Libyan)
  "يا خنفوس ابن الخنفوس", // You beetle son of beetle (Libyan)
  "يا زربوط يبن الزربوط", // You clumsy son of clumsy (Libyan)
  "يا بهلول ابن البهلول", // You fool son of fool (Libyan)
  "يا طبل ابن الطبل", // You drum son of drum (Libyan)
  "يا أزعر ابن الأزعر", // You thug son of thug (Libyan)
  "يا عاطل ابن العاطل", // You bum son of bum (Libyan)
  "يا مرتد ابن المرتد", // You apostate son of apostate (Libyan)
  "يا كلب الشط", // You dog of the shore (Libyan)
  "يا مجنون ابن المجنونة", // You crazy son of crazy (Libyan)
  "يا حيوان بلا عقل", // You animal without brain (Libyan)
  "يلعن ابو ابوك يا كلب", // Curse your grandfather you dog (Libyan)

  // ========================================
  // === EXPANSION: Sudanese dialect - extended ===
  // ========================================
  "يا ود الزنا", // Son of adultery (Sudanese)
  "يا ود الشيطان", // Son of devil (Sudanese)
  "يا ود الغابة", // Son of the jungle (Sudanese racist insult)
  "يا كلب الحلة", // You dog of the neighborhood (Sudanese)
  "يا خواض ابن الخواض", // You faggot son of faggot (Sudanese)
  "يا حشاش ابن الحشاش", // You pothead son of pothead (Sudanese)
  "يا جنجويدي ابن الجنجويدي", // You Janjaweed son of Janjaweed (Sudanese)
  "يا نجاسة ابن النجاسة", // You filth son of filth (Sudanese)
  "كمكم يا كلب", // Shut up you dog (Sudanese)
  "يا فاسق ابن الفاسق", // You sinner son of sinner (Sudanese)
  "يا ابن البقرة", // Son of a cow (Sudanese)
  "يا ابن الدقيقة", // Son of the minute (Sudanese insult)
  "يا زول وسخ", // You dirty person (Sudanese)
  "يا زول خايس", // You rotten person (Sudanese)
  "يلعن ديل اللي جابوك", // Curse those who brought you (Sudanese)
  "يا ابن الكداب", // Son of the liar (Sudanese)
  "يا ابن الحرامي", // Son of the thief (Sudanese)

  // ========================================
  // === EXPANSION: Yemeni dialect - extended ===
  // ========================================
  "يا مسخوط من ربك", // You cursed by your lord (Yemeni)
  "يا عكبري ابن العكبري", // You vile son of vile (Yemeni)
  "يلعن تريبتك وتريبة ابوك", // Curse your upbringing and your father's (Yemeni)
  "يا خابث ابن الخابث", // You malicious son of malicious (Yemeni)
  "يا مخبل ابن المخبل", // You crazy son of crazy (Yemeni)
  "يا ابن الفاجرة المسخوطة", // Son of the cursed immoral (Yemeni)
  "يا ابن القبيحة المسخوطة", // Son of the cursed ugly (Yemeni)
  "يا مشخوط ابن المشخوط", // You worthless son of worthless (Yemeni)
  "يلعن ابو ابوك على ابو ابو ابوك", // Curse grandfather upon great-grandfather (Yemeni)
  "يا ابن الشيطانة", // Son of the she-devil (Yemeni)
  "يا ابن الزفتة", // Son of the tar (Yemeni insult)
  "يا قليل الحيا ابن قليل الحيا", // You shameless son of shameless (Yemeni)
  "يا كافر ابن الكافرة", // You infidel son of infidel (Yemeni)

  // ========================================
  // === EXPANSION: More Franco-Arabic / Arabizi - extended ===
  // ========================================
  "ya 7mar ibn el 7mara", // you donkey son of donkey
  "ya kalb ibn el kalba", // you dog son of bitch
  "ya 5anzeer ibn el 5anzeera", // you pig son of sow
  "kos omak ya ibn el 3ahira", // your mother's pussy son of a whore
  "2eiri fi teezak ya 7ayawan", // my dick in your ass you animal
  "ya za7af ibn el za7af", // you creep son of creep
  "na3al abuk ya 5awal", // curse your father you faggot
  "na3al dinak ya kalb", // curse your religion you dog
  "barra nik omak ya 7mar", // go fuck your mother you donkey
  "barra rooh ya zaml", // go away you faggot
  "ya wlad el gahba", // you sons of whores
  "ya wlad el 5ara", // you sons of shit
  "ya wlad el kalba", // you sons of a bitch
  "2eiri b kol 3ayltak", // my dick in your whole family
  "n3al bo dinak ya 7ayawan", // curse your religion's father you animal
  "ya tbon ommak", // your mother's cunt (Moroccan romanized)
  "ya wled l9a7ba", // son of a whore (Moroccan romanized)
  "sir t9awed ya 7mar", // go pimp you donkey (Moroccan romanized)
  "na3al bo mmak ya zaml", // curse your mother's father faggot (Maghreb romanized)
  "ya m3aras ibn el m3aras", // you pimp son of pimp (romanized)
  "ya dayoos ibn el dayoos", // you cuckold son of cuckold (romanized)
  "ya 5aneeth ibn el 5aneeth", // you effeminate son of effeminate (romanized)
  "telhas teez omak ya ibn el sharmouta", // lick your mom's ass son of whore
  "ayre b koss o5tak", // my dick in your sister's pussy
  "ayre b 3ardhak", // my dick in your honor
  "ayre b dinak", // my dick in your religion
  "ayre b rabbak", // my dick in your lord
  "kol 5ara w moot ya kalb", // eat shit and die you dog
  "rooh enteek ya 7mar", // go get fucked you donkey
  "ya manyouk ibn el manyouka", // you fucked son of fucked
  "ya nayek omak", // you fucker of your mother
  "nikomak ya wled l7ram", // fuck your mother you bastard
  "ya zebbi f ommak", // my dick in your mother (Tunisian romanized)
  "ya m3arras", // you pimped (romanized)
  "ya miboun ibn el miboun", // you bottom son of bottom (Tunisian romanized)
  "in3al abuk w abu abuk", // curse your father and grandfather (romanized)
  "in3al 7 arwa7 abuk", // curse seven souls of your father (romanized)
  "nik omak ya ibn el metnaka", // fuck your mother son of fucked (romanized)
  "ya 3abd", // you slave (racist romanized)
  "ya zeft ibn el zeft", // you tar son of tar (romanized)
  "ya 5abees", // you malicious (romanized)
  "ya fesid", // you corrupt (romanized)
  "ya 5asis", // you despicable (romanized)
  "ya la2eem", // you wretched (romanized)
  "ya daeni2", // you lowly (romanized)
  "ya fasiq", // you sinner (romanized)
  "ya safel", // you lowlife (romanized)
  "ya sa9et", // you degenerate (romanized)
  "ya 5ayen ibn el 5ayen", // you traitor son of traitor (romanized)
  "ya jaban", // you coward (romanized)
  "ya najas", // you impure (romanized)
  "ya mo2rif", // you disgusting (romanized)
  "ya 7a9eer", // you contemptible (romanized)
  "ya 3adeem el sharaf", // you without honor (romanized)
  "ya mn7at", // you degraded (romanized)
  "ya ratheel", // you vile (romanized)

  // ========================================
  // === EXPANSION: More sexual terms across dialects ===
  // ========================================
  "انيكك يا بنت الكلب", // I'll fuck you daughter of a dog
  "انيكك من وراك", // I'll fuck you from behind
  "بدي أنيك طيزك يا شرموطة", // I want to fuck your ass you whore
  "يا زاني يا ابن الزاني", // You adulterer son of adulterer
  "يا زانية يا بنت الزانية", // You adulteress daughter of adulteress
  "يا داعر يا ابن الداعر", // You debauched son of debauched
  "يا داعرة يا بنت الداعرة", // You prostitute daughter of prostitute
  "يا مومس يا بنت المومس", // You whore daughter of whore
  "نيكني بالقوة", // Fuck me by force
  "نيكها", // Fuck her
  "نيكه", // Fuck him
  "نيكهم", // Fuck them
  "نيكوه", // Fuck him (plural command)
  "نيكوها", // Fuck her (plural command)
  "اتنيكي", // Get fucked (fem command)
  "اتنيك", // Get fucked (command)
  "يا بغل", // You mule (stupid, vulgar)
  "يا حمارة ابن الحمارة", // You donkey daughter of donkey
  "يا عاهرة ابن العاهر", // You whore son of whoremonger
  "يا مني", // You semen (extreme insult)
  "يا ابن المني", // Son of semen (extreme insult)
  "بص زبي", // Look at my dick (vulgar)
  "بوس زبي", // Kiss my dick (vulgar)
  "بوس طيزي", // Kiss my ass (vulgar)
  "تعالي مصي", // Come suck (fem command)
  "تعالي نيكيني", // Come fuck me (to fem)
  "يا نياكة", // You fucker (fem form)
  "يا متحرش يا ابن المتحرش", // You harasser son of harasser
  "يا مغتصب", // You rapist
  "يا مغتصبة", // You rapist (fem)
  "يا قحبة الحارة", // You whore of the neighborhood
  "يا شرموطة الحارة", // You whore of the neighborhood (variant)
  "يا عاهرة الشوارع", // You whore of the streets
  "يا شرموطة الشوارع", // You whore of the streets (variant)

  // ========================================
  // === EXPANSION: Religious insults - extended ===
  // ========================================
  "يلعن الله", // Curse God (extreme blasphemy)
  "يلعن دينك ودين ابوك", // Curse your religion and your father's
  "يلعن دينك ودين اللي خلفك", // Curse your religion and who bore you
  "يلعن ربك وربّ أبوك", // Curse your lord and your father's lord
  "يلعن ربك ورب اللي جابك", // Curse your lord and the lord of who brought you
  "يلعن صليبك", // Curse your cross
  "يلعن إنجيلك", // Curse your Bible
  "يلعن قرآنك", // Curse your Quran (extreme blasphemy)
  "يلعن مسجدك", // Curse your mosque
  "يلعن كنيستك", // Curse your church
  "يا كافر يا ملعون", // You infidel you cursed
  "يا ملحد يا كلب", // You atheist you dog
  "يا مرتد يا ابن الكلب", // You apostate son of a dog
  "يا عدو الله وعدو الناس", // Enemy of God and enemy of people
  "يلعن ابو دينك على ابو ابوك", // Curse your religion's father upon your grandfather
  "يلعن سبع ارواح ابوك وامك", // Curse seven souls of your father and mother
  "يلعن ابو الدين اللي دنتو", // Curse the religion's father that you follow
  "يا ابن ابليس الرجيم", // Son of the accursed Satan
  "يا صديق الشيطان", // Friend of the devil
  "يا خادم ابليس", // Servant of Satan
  "الله يحرقك بنار جهنم", // May God burn you in hellfire
  "يروح عليك نار جهنم", // May hellfire go upon you
  "يا ابن الملعون من الله", // Son of the cursed by God
  "يا مطرود من رحمة الله", // You expelled from God's mercy
  "يا ابن اللعينة", // Son of the cursed one (fem)

  // ========================================
  // === EXPANSION: Scatological terms across dialects ===
  // ========================================
  "يا خرا بني آدم", // You shit of humans
  "يا خرة", // You (piece of) shit
  "يا ابن الخرا", // Son of shit
  "يا بنت الخرا", // Daughter of shit
  "ريحتك خرا", // Your smell is shit
  "كل شي فيك خرا", // Everything about you is shit
  "يا خراي", // You my shit
  "يا براز", // You feces
  "يا بول", // You urine (insult)
  "يا ابن البول", // Son of urine
  "يا ابن الخراي", // Son of my shit
  "كل خرا وبلعه", // Eat shit and swallow it
  "كل خرا يا ابن الكلب", // Eat shit son of a dog
  "كل زق يا حمار", // Eat shit you donkey
  "يا خراشي", // You shitty person (Egyptian variant)
  "يا مخري", // You my shit (Egyptian)
  "يا مبولجي", // You pisser (Egyptian slang)
  "يا خراوي", // You shitty (Gulf variant)

  // ========================================
  // === EXPANSION: Compound curse expressions ===
  // ========================================
  "الله يخرب بيتك", // May God destroy your house
  "الله يخرب بيت ابوك", // May God destroy your father's house
  "الله يخرب بيت اللي جابك", // May God destroy the house of who brought you
  "الله يخرب بيت اللي خلفك", // May God destroy the house of who bore you
  "الله يلعن ابوك وابو ابوك", // May God curse your father and grandfather
  "الله يلعنك ويلعن اللي جابك", // May God curse you and who brought you
  "الله يلعن يوم ما اتولدت", // May God curse the day you were born
  "الله يلعن الساعة اللي اتولدت فيها", // May God curse the hour you were born (variant)
  "الله لا يردك سالم", // May God not return you safely
  "الله ينعل ابوك", // May God curse your father
  "الله ينعل أمك", // May God curse your mother
  "الله ينعل جدك", // May God curse your grandfather
  "الله يحرقك", // May God burn you
  "الله يحرق قبرك", // May God burn your grave
  "الله يحرق أهلك", // May God burn your family
  "الله يخذلك", // May God forsake you
  "الله يمسخك", // May God deform you
  "الله يعمي عينك", // May God blind your eye
  "الله يقطع يدينك", // May God cut your hands
  "الله يقطع رجلينك", // May God cut your legs
  "الله يقطع لسانك", // May God cut your tongue
  "الله يسلط عليك ناره", // May God send his fire upon you
  "الله يجعلك عبرة", // May God make you an example
  "الله يجيب في أيامك", // May God bring calamity in your days
  "يا ابن الستين ألف كلب", // Son of sixty thousand dogs
  "يا ابن المية ألف شرموطة", // Son of a hundred thousand whores
  "يلعن سبعة أجيال من أهلك", // Curse seven generations of your family
  "يلعن ابو ابو ابوك", // Curse your great-grandfather
  "يلعن ابو خال أمك", // Curse your mother's uncle's father
  "كس أمك وأم أمك وأم ابوك", // Pussy of your mother, grandmother, and father's mother
  "أيري بكل شي اسمو أهلك", // My dick in everything called your family
  "يلعن ابو كل حدا بعرفك", // Curse the father of everyone who knows you
  "أيري فيك وبأبوك وبجدك", // My dick in you, your father, and grandfather
  "كس أخت يلي جابك ويلي خلفك", // Sister's pussy of who brought and bore you
  "يلعن ابوك على امك على جدك", // Curse your father upon mother upon grandfather

  // ========================================
  // === EXPANSION: More Arabizi compound phrases ===
  // ========================================
  "kos omak w om omak", // your mother's and grandmother's pussy
  "ayre fi abok w jaddak", // my dick in your father and grandfather
  "ya ibn el sitteen alf kalb", // son of sixty thousand dogs
  "in3al 7 ajyal min ahlak", // curse seven generations of your family
  "alla yil3anak ya ibn el sharmouta", // may God curse you son of a whore
  "alla yakhthak ya ibn el gahba", // may God take you son of a whore
  "alla ya7re2ak ya kalb", // may God burn you dog
  "alla yakhrib baytak", // may God destroy your house
  "alla yi9ta3 rizqak", // may God cut your sustenance
  "alla yifdha7ak", // may God expose you
  "alla yi3meek", // may God blind you
  "rooh in7ash ya 7ayawan", // get lost you animal
  "ya ibn alf sharmoota", // son of a thousand whores
  "kos omak 3a abok", // your mother's pussy upon your father
  "ayre fi 3ardhak", // my dick in your honor
  "ayre fi wejjak", // my dick in your face
  "ayre fi timmak", // my dick in your mouth
  "badi fash5ak", // I'll destroy you (romanized Levantine)
  "badi kassirak", // I'll break you (romanized)
  "badi ni2ak", // I'll fuck you (romanized)
  "badi nayik 3ayiltak", // I'll fuck your family (romanized)
  "kol zegg w moot", // eat shit and die (romanized)
  "tfoo 3alayak", // spit on you (romanized)
  "ya 3ayil wisi5", // you dirty kid (romanized Egyptian)
  "ya wiski5 ya ibn el wis5a", // you dirty son of the dirty (romanized)
  "ya mish ibn nas", // you not a son of people (romanized)
  "ya abad abu abu abok", // curse your ancestors (romanized)
  "ya 7awan", // you animal (romanized abbreviated)
  "kos a5tak 3a omak", // your sister's pussy upon your mother (romanized)
  "ya wled z zina", // you son of adultery (romanized Maghreb)
  "ya wled l7aram l m9awed", // you bastard pimp (romanized Maghreb)
  "tboun mok 3la mok", // your mother's cunt upon mother (romanized Moroccan)
  "sir tni2 ya wled l9a7ba", // go get fucked son of whore (romanized Moroccan)
  "ya ga7ba", // you whore (romanized variant)
  "ya metnayik", // you fucked (romanized Maghreb)
  "ya zamel wled el zamel", // you faggot son of faggot (romanized Maghreb)
  "barra nik mo2ek", // go fuck your mother (romanized Maghreb)
  "ya 7olof", // you pig (romanized Tunisian)
  "ya mstoul", // you stoned (romanized Tunisian)

  // ========================================
  // === EXPANSION: Additional insults across all dialects ===
  // ========================================
  "يا منافق", // You hypocrite
  "يا منافقة", // You hypocrite (fem)
  "يا كذاب", // You liar
  "يا كذابة", // You liar (fem)
  "يا خائن يا ابن الخائن", // You traitor son of traitor
  "يا خائنة يا بنت الخائنة", // You traitor daughter of traitor
  "يا غدار", // You treacherous
  "يا غدارة", // You treacherous (fem)
  "يا حرامي يا ابن الحرامي", // You thief son of thief
  "يا حرامية يا بنت الحرامية", // You thief daughter of thief
  "يا جبان يا ابن الجبان", // You coward son of coward
  "يا جبانة يا بنت الجبانة", // You coward daughter of coward
  "يا فاشل", // You failure
  "يا فاشلة", // You failure (fem)
  "يا أنجاس", // You impure ones (plural)
  "يا أوساخ", // You dirty ones (plural)
  "يا أوباش", // You thugs (plural)
  "يا حثالة المجتمع", // You dregs of society
  "يا نفاية المجتمع", // You waste of society
  "يا قمامة المجتمع", // You garbage of society
  "يا عالة على المجتمع", // You burden on society
  "يا طفيلي", // You parasite
  "يا طفيلية", // You parasite (fem)
  "يا دودة", // You worm
  "يا ابن الدودة", // Son of a worm
  "يا حشرة يا ابن الحشرة", // You insect son of insect
  "يا صرصور يا ابن الصرصور", // You cockroach son of cockroach
  "يا عنكبوت", // You spider (insult)
  "يا ثعبان", // You snake
  "يا ثعبان يا ابن الثعبان", // You snake son of snake
  "يا عقرب", // You scorpion
  "يا عقرب يا ابن العقرب", // You scorpion son of scorpion
  "يا كلب ابن الكلب المسعور", // You dog son of rabid dog
  "يا حمار ابن الحمارة الوسخة", // You donkey son of dirty donkey
  "يا بقرة يا بنت البقرة", // You cow daughter of cow
  "يا ماعز يا ابن الماعز", // You goat son of goat
  "يا جاموسة", // You buffalo (fem insult)
  "يا ابن الجاموسة", // Son of the buffalo
  "يا خروف", // You sheep
  "يا ابن الخروفة", // Son of the ewe
  "يا غراب", // You crow (insult)
  "يا ابن الغراب", // Son of the crow
  "يا ضبع", // You hyena
  "يا ابن الضبع", // Son of the hyena
  "يا قمل", // You louse
  "يا ابن القملة", // Son of the louse
  "يا بق", // You bedbug
  "يا ذبابة", // You fly
  "يا ابن الذبابة", // Son of the fly
  "يا كتكوت", // You chick (cowardly)
  "يا دجاجة", // You chicken (cowardly)
  "يا ابن الدجاجة", // Son of the chicken

  // ========================================
  // === EXPANSION: Insults about appearance/intelligence ===
  // ========================================
  "يا أعمى", // You blind
  "يا أطرش", // You deaf
  "يا أخرس", // You mute (insult)
  "يا أعرج", // You lame
  "يا أعور", // You one-eyed
  "يا شحات", // You beggar
  "يا شحاتة", // You beggar (fem)
  "يا مسكين", // You pitiful (condescending)
  "يا مسكينة", // You pitiful (fem, condescending)
  "يا قبيح", // You ugly
  "يا قبيحة", // You ugly (fem)
  "يا دميم", // You ugly (formal)
  "يا دميمة", // You ugly (fem formal)
  "يا مشوه", // You deformed
  "يا مشوهة", // You deformed (fem)
  "يا سمين", // You fat
  "يا سمينة", // You fat (fem)
  "يا خنزير سمين", // You fat pig
  "يا بقرة سمينة", // You fat cow
  "يا هيكل عظمي", // You skeleton
  "يا نحيف", // You skinny (insult)
  "يا معتوه", // You mentally deficient
  "يا معتوهة", // You mentally deficient (fem)
  "يا مجنون يا ابن المجنونة", // You crazy son of crazy
  "يا متخلف", // You retarded (ableist)
  "يا متخلفة", // You retarded (fem, ableist)
  "يا متخلف عقليا", // You mentally retarded (ableist)
  "يا بليد", // You dull/stupid
  "يا بليدة", // You dull (fem)
  "يا غبي يا ابن الغبية", // You stupid son of the stupid
  "يا جاهل", // You ignorant
  "يا جاهلة", // You ignorant (fem)
  "يا أمي", // You illiterate
  "يا أمية", // You illiterate (fem)
  "يا فارغ", // You empty (insult)
  "يا فاضي", // You empty/idle (insult)
  "يا ضايع", // You lost (insult)
  "يا ضايعة", // You lost (fem insult)
  "يا تايه", // You wandering/lost (insult)

  // ========================================
  // === EXPANSION: More compound "son of" expressions ===
  // ========================================
  "ابن الزبالة", // Son of garbage
  "ابن القمامة", // Son of trash
  "ابن النفاية", // Son of waste
  "ابن الحثالة", // Son of dregs
  "ابن الوساخة", // Son of filth
  "ابن الرذيلة", // Son of vice
  "ابن الفاحشة", // Son of obscenity
  "ابن المعصية", // Son of sin
  "ابن الضلالة", // Son of misguidance
  "ابن الجهالة", // Son of ignorance
  "ابن الخطيئة", // Son of sin (variant)
  "ابن البلوة", // Son of calamity
  "ابن المصيبة", // Son of disaster
  "ابن اللعنة", // Son of the curse
  "ابن العار", // Son of shame
  "ابن الفضيحة", // Son of scandal
  "ابن العيب", // Son of disgrace
  "ابن الذل", // Son of humiliation
  "ابن الهوان", // Son of degradation
  "بنت الزبالة", // Daughter of garbage
  "بنت النفاية", // Daughter of waste
  "بنت الوساخة", // Daughter of filth
  "بنت الرذيلة", // Daughter of vice
  "بنت الفاحشة", // Daughter of obscenity
  "بنت اللعنة", // Daughter of the curse
  "بنت العار", // Daughter of shame
  "بنت الفضيحة", // Daughter of scandal

  // ========================================
  // === EXPANSION: More body-related vulgarities ===
  // ========================================
  "كسك", // Your pussy (to fem)
  "كسها واسع", // Her pussy is wide
  "كسك واسع", // Your pussy is wide
  "طيزك واسع", // Your ass is wide
  "زبه كبير", // His dick is big (vulgar context)
  "زبك صغير", // Your dick is small
  "بلا زب", // Without a dick
  "بلا كس", // Without a pussy
  "بلا طيز", // Without an ass
  "بلا خصي", // Without balls
  "مبتور", // Amputated / castrated (insult)
  "مخصي", // Castrated (insult)
  "يا مبتور", // You castrated (insult)
  "يا مخصي", // You castrated one (insult)
  "يا عنين", // You impotent
  "يا عاجز", // You incapable / impotent
  "يا عاجزة", // You incapable (fem)
  "يا بايخ", // You stale / impotent (Egyptian)
  "يا بايخة", // You stale (fem, Egyptian)
  "يا محروم", // You deprived
  "يا محرومة", // You deprived (fem)

  // ========================================
  // === EXPANSION: Evasion and internet spellings ===
  // ========================================
  "k0s", // Pussy with zero
  "k0ss", // Pussy variant
  "sh4rmouta", // Whore with 4
  "sh4rmoot4", // Whore with 4s
  "z3b", // Dick with 3
  "z3bi", // My dick with 3
  "t33z", // Ass with 3s
  "7m4r", // Donkey with 4
  "k4lb", // Dog with 4
  "5nz33r", // Pig with numbers
  "g47ba", // Whore with numbers
  "ni2k", // Fuck with 2
  "n33k", // Fuck with 3s
  "m4ny4k", // Fucker with 4s
  "5wal", // Faggot with 5 (variant)
  "y4 k4lb", // You dog with 4s
  "y4 7m4r", // You donkey with 4s
  "y4 5nz33r", // You pig with numbers
  "k0s 0m4k", // Your mother's pussy with numbers
  "4yr3 f33k", // My dick in you with numbers
  "t3lh4s t33zi", // Lick my ass with numbers

  // ========================================
  // === EXPANSION: Additional romanized (no numbers) ===
  // ========================================
  "koss ommak", // your mother's pussy (variant)
  "koss okhtak", // your sister's pussy (variant)
  "ibn el sharmoota", // son of a whore (variant)
  "ibn il kahba", // son of a whore (variant)
  "ibn il metnaka", // son of the fucked (variant)
  "ya ibn il wisikha", // son of the dirty (variant)
  "ya ibn il kalba", // son of a bitch (variant)
  "ya ibn il khanzeera", // son of a sow (variant)
  "ya hayawana", // you animal (fem)
  "ya zibala", // you garbage
  "ya zebala", // you garbage (variant)
  "ya nifaya", // you waste
  "ya hathala", // you dregs
  "rooh nimak", // go to your mother (dismissive)
  "yel3an abook", // curse your father (variant)
  "yel3an ommak", // curse your mother (variant)
  "yel3an deenak", // curse your religion (variant)
  "yel3an rabbak", // curse your lord (variant)
  "ya ibn il laeema", // son of the wretched (variant)
  "ya ibn il najas", // son of the impure
  "ya ibn il fasid", // son of the corrupt
  "ya iblis", // you devil
  "ya shaytan", // you Satan
  "ya la3een", // you cursed (variant)
  "ya mal3oon", // you cursed
  "ya mal3oona", // you cursed (fem)
  "wlad il haram", // children of sin
  "wlad il 3ahira", // children of the whore
  "wlad il kalba", // children of the bitch
  "wlad il sharmoota", // children of the whore (variant)
  "kol taban", // eat shit (Gulf variant)
  "boos teezi", // kiss my ass
  "boos zibbi", // kiss my dick
  "emshi min hina", // leave from here
  "irhal ya kalb", // leave you dog
  "ta3al hina ya hmar", // come here you donkey
  "allah yer7amak... la2", // may God have mercy... no (sarcastic curse)
  "omak shaklaha", // your mother looks like (setup for insult)
  "abook shaklou", // your father looks like (setup for insult)
  "wejjak zay teez", // your face looks like an ass
  "wejjak zay il khara", // your face looks like shit
  "wejjak zay il zeft", // your face looks like tar
];

export default arabicBadWords;
