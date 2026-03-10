// src/languages/telugu-words.ts

/**
 * Telugu profanity words list
 * Contains common profanities in both Telugu script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Telugu
 */
const teluguBadWords: string[] = [
  // ========================================
  // === Telugu Script Profanities ===
  // ========================================
  "పూకు", // Pooku (female genitalia)
  "దెంగు", // Dengu (f**k)
  "లంజ", // Lanja (prostitute)
  "మొడ్డ", // Modda (penis)
  "గుద్ద", // Gudda (buttocks)
  "సుల్లి", // Sulli (penis)
  "పీక", // Peeka (neck, used insultingly)
  "లవడా", // Lavada (penis)
  "బూతులు", // Boothulu (profanity)
  "దొంగ", // Donga (thief)
  "పిచ్చి", // Picchi (mad)
  "వెధవ", // Vedhava (widower, used as insult)
  "నీ అమ్మ", // Nee amma (your mother) - often start of insults
  "నీ అయ్య", // Nee ayya (your father) - often start of insults
  "నాకొడకా", // Nakodaka (my son, used as insult)
  "పుకు", // Alternate spelling of Pooku
  "దిమ్మ తిరిగే", // Dimma thirige (head-spinning insult)
  "రొట్ట", // Rotta (worthless person)
  "ఎర్రిపూకు", // Erri pooku (stupid)
  "దున్నపోతు", // Dunnapothu (buffalo, insulting)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  "pooku", // female genitalia
  "puku", // female genitalia (variant)
  "dengu", // f**k
  "dengey", // f**k off
  "lanja", // prostitute
  "modda", // penis
  "gudda", // buttocks
  "sulli", // penis
  "peeka", // neck (insult)
  "lavada", // penis
  "lavda", // penis (variant)
  "boothulu", // profanity/swear words
  "donga", // thief
  "picchi", // mad/crazy
  "vedhava", // widower (insult)
  "nee amma", // your mother (insult)
  "nee ayya", // your father (insult)
  "nakodaka", // my son (insult)
  "dimma thirige", // head-spinning (insult)
  "rotta", // worthless person
  "erri pooku", // stupid (vulgar)
  "dunnapothu", // buffalo (insult)

  // Common variations and combinations
  "pooku naakay", // Vulgar phrase
  "lanja kodaka", // Son of a prostitute
  "lanja koduku", // Son of a prostitute
  "lanja koodhu", // Similar to above
  "lanjakodaka", // son of a prostitute (compound)
  "modda gudu", // Vulgar phrase
  "dengina", // f**ked
  "doola", // penis (variant)
  "erri puku", // Stupid (vulgar)
  "erri pooka", // Stupid (vulgar)
  "erri vesi pooku", // stupid prostitute's genitalia
  "gajji puku", // Scabies (insulting)
  "gorre puku", // Sheep (insulting)
  "gudda debba", // Buttocks strike
  "howle", // Useless
  "modda gudishe", // Vulgar phrase
  "naa modda", // My penis
  "nee amma puku", // Your mother's (vulgar)
  "pichi puku", // Crazy (vulgar)
  "puklo na modda", // Vulgar phrase
  "sulli naaku", // Suck (vulgar)
  "sachinava", // Die

  // Common misspellings and variations
  "dengay", // f**k off (variant)
  "lanjodka", // son of a prostitute (variant)
  "lanjkodka", // son of a prostitute (variant)
  "pikandi", // penis (slang)
  "moddagudise", // vulgar compound
  "sullu", // penis (variant)
  "puuku", // female genitalia (variant)
  "gunda", // testicle (variant)
  "boothulu matalu", // Profane language
  "gadida", // Donkey (insult)
  "gadidapuk", // Combination insult
  "sanka", // Conch (used in "sanka naaku")
  "pukunakay", // pussy licker (compound)

  // Additional Telugu profanity
  "dengichukko", // Fuck yourself
  "nee amma dengu", // Fuck your mother
  "nee amma puku dengu", // Vulgar compound
  "lanja koduku batch", // Son of a whore batch
  "lanja munda", // Whore (variant)
  "lanjakodaka batch", // son of a whore batch (compound)
  "pooku dengu", // Fuck the pussy
  "modda nakku", // Suck the dick
  "gudda dengu", // Fuck the ass
  "sulli guddu", // Dick hit
  "naa sulli nakku", // Suck my dick
  "puku naaki", // Pussy licker
  "puku pulla", // Pussy worm
  "bhosdike", // Borrowed from Hindi
  "amma ni dengu", // Fuck your mother
  "ayya ni dengu", // Fuck your father
  "bokka", // Vagina (slang)
  "kukkala dengu", // Dog fucker
  "kukka", // Dog (insult)
  "veshya", // Prostitute
  "dhoola", // Dick (variant)
  "padda puku", // Vulgar compound

  // Telugu script additions
  "దెంగిచుక్కో", // Dengichukko (f**k yourself)
  "నీ అమ్మ దెంగు", // Nee amma dengu (f**k your mother)
  "లంజ ముండ", // Lanja munda (whore)
  "మొడ్డ నక్కు", // Modda nakku (suck the dick)
  "గుద్ద దెంగు", // Gudda dengu (f**k the ass)
  "నా సుల్లి నక్కు", // Naa sulli nakku (suck my dick)
  "కుక్క", // Kukka (dog insult)
  "వేశ్య", // Veshya (prostitute)
  "బొక్క", // Bokka (vagina slang)

  // More Telugu profanity - Roman script
  "aa puku dengu", // Fuck that pussy
  "andagadu", // Handsome (sarcastic insult)
  "atta puku", // Aunt's pussy
  "ayya gudda", // Father's ass
  "baadkow", // Scoundrel
  "banda", // Dick (slang)
  "bey lavada", // Hey dick
  "bey lanja", // Hey whore
  "bonda", // Testicle
  "bondalu", // Testicles
  "bonga", // Worthless
  "bottalu", // Ass cheeks
  "budda gudda", // Old ass
  "chakkinda", // Died
  "dagulbaji", // Cheat
  "dengi padu", // Get fucked and fall
  "dengipoddi", // Will fuck
  "denginchukko", // Get yourself fucked
  "donga lanja", // Thief whore
  "donga na kodaka", // Son of a thief
  "dunna modda", // Buffalo dick
  "erri lanja", // Stupid whore
  "erri modda", // Stupid dick
  "gadida gudda", // Donkey ass
  "gadida modda", // Donkey dick
  "gudda lo modda", // Dick in ass
  "gudda nakku", // Lick the ass
  "gudda puku", // Ass pussy
  "jutti", // Shoe (insult)
  "kukkala kodaka", // Dog's son
  "kukka lanja", // Dog whore
  "kukka puku", // Dog pussy
  "kuttha", // Dog (variant)
  "lanja batch", // Whore batch
  "lanja batta", // Whore child (variant)
  "lanja bavi", // Whore well (insult)
  "lanja puku", // Whore's pussy
  "lavada gadu", // Dick man
  "madda", // Dick (variant)
  "modda guddu", // Dick egg (insult)
  "modda meeda kurchundi", // Sat on the dick
  "moodu puku", // Close pussy (shut up)
  "moodu modda", // Close dick (shut up)
  "na puku", // My pussy
  "nakodaka dengey", // My son fuck off
  "nee amma gudda", // Your mother's ass
  "nee amma lanja", // Your mother the whore
  "nee amma modda", // Your mother's dick
  "nee ayya puku", // Your father's pussy
  "nee gudda dengu", // Fuck your ass
  "nee modda nakku", // Suck your dick
  "nee puku dengu", // Fuck your pussy
  "nee puku lo na modda", // My dick in your pussy
  "nee sulli chinchukko", // Tear your dick
  "noru muyyi", // Shut your mouth
  "padipoya", // Fell (insult)
  "pichi lanja", // Crazy whore
  "pichi puku gadu", // Crazy pussy man
  "pilli puku", // Cat pussy
  "podugu", // Worthless
  "pookulo modda", // Dick in pussy
  "puku gadu", // Pussy man
  "puku nakka", // Pussy licker
  "puku pandu", // Pussy fruit (insult)
  "ra lanja", // Come whore
  "sulli chinchukko", // Tear the dick
  "sulli nakki", // Dick licker
  "sanka naaluka", // Conch tongue (insult)
  "sanka naaku", // Lick the conch (vulgar)
  "vesi gudda", // Prostitute ass

  // More Telugu script additions
  "బండ", // Banda (dick slang)
  "బొండాలు", // Bondalu (testicles)
  "దెంగి పడు", // Dengi padu (get f**ked and fall)
  "దెంగించుక్కో", // Denginchukko (get yourself f**ked)
  "దొంగ లంజ", // Donga lanja (thief whore)
  "ఎర్రి లంజ", // Erri lanja (stupid whore)
  "గాడిద గుద్ద", // Gadida gudda (donkey ass)
  "గాడిద మొడ్డ", // Gadida modda (donkey dick)
  "గుద్ద లో మొడ్డ", // Gudda lo modda (dick in ass)
  "గుద్ద నక్కు", // Gudda nakku (lick the ass)
  "కుక్కల కొడక", // Kukkala kodaka (dog's son)
  "కుక్క లంజ", // Kukka lanja (dog whore)
  "లంజ పుకు", // Lanja puku (whore's pussy)
  "లవడ గాడు", // Lavada gadu (dick man)
  "మూడు పుకు", // Moodu puku (shut your pussy)
  "నీ అమ్మ గుద్ద", // Nee amma gudda (your mother's ass)
  "నీ అమ్మ లంజ", // Nee amma lanja (your mother the whore)
  "నీ గుద్ద దెంగు", // Nee gudda dengu (f**k your ass)
  "నీ పుకు దెంగు", // Nee puku dengu (f**k your pussy)
  "పిచ్చి లంజ", // Pichi lanja (crazy whore)
  "పూకులో మొడ్డ", // Pookulo modda (dick in pussy)
  "పుకు గాడు", // Puku gadu (pussy man)
  "వేశ్య గుద్ద", // Vesi gudda (prostitute's ass)
  "దగుల్బాజీ", // Dagulbaji (cheat)
  "బొత్తలు", // Bottalu (ass cheeks)

  // ========================================
  // === Extended Telugu Profanity (Roman) ===
  // ========================================
  "aa gudda dengu", // Fuck that ass
  "aa modda nakku", // Suck that dick
  "aa puku nakku", // Lick that pussy
  "amma gudda", // Mother's ass
  "amma lanja", // Mother whore
  "amma modda", // Mother's dick (absurd insult)
  "amma puku lo", // In mother's pussy
  "atta gudda dengu", // Aunt's ass fuck
  "atta modda", // Aunt's dick (absurd insult)
  "banda nakku", // Lick the dick
  "bey gudda", // Hey ass
  "bey modda", // Hey dick
  "bey puku", // Hey pussy
  "bonda guddu", // Testicle egg
  "bonda nakku", // Lick the testicle
  "bottala dengu", // Ass cheeks fuck
  "budda dengu", // Old fuck
  "budda lanja", // Old whore
  "budda puku", // Old pussy
  "chakkindi nee amma", // Your mother died
  "dani puku dengu", // Fuck her pussy
  "dengara", // Fucker (variant)
  "dengey donga", // Fuck off thief
  "dengey kukka", // Fuck off dog
  "dengey lanja", // Fuck off whore
  "dengey rotta", // Fuck off worthless
  "dengi dengi", // Fuck fuck (repeated emphasis)
  "dengichukuntav", // You'll get yourself fucked
  "denginchukuntav", // You'll get yourself fucked (variant)
  "dengipothav", // You'll get fucked
  "denguddi", // Will fuck
  "donga gudda", // Thief ass
  "donga modda", // Thief dick
  "donga puku", // Thief pussy
  "doola nakku", // Lick the dick (variant)
  "dunna gudda", // Buffalo ass
  "dunna lanja", // Buffalo whore
  "dunna puku", // Buffalo pussy
  "erri bokka", // Stupid hole
  "erri donga", // Stupid thief
  "erri gudda", // Stupid ass
  "erri kukka", // Stupid dog
  "erri modda gadu", // Stupid dick man
  "erri puku gadu", // Stupid pussy man
  "erri rotta", // Stupid worthless
  "erri vesi", // Stupid prostitute
  "gadida dengu", // Donkey fuck
  "gadida kukka", // Donkey dog
  "gadida lanja", // Donkey whore
  "gadida puku", // Donkey pussy
  "gorre gudda", // Sheep ass
  "gorre modda", // Sheep dick
  "gudda lo sulli", // Dick in ass
  "gudda meeda", // On the ass
  "gudda mukka", // Ass punch
  "gudda nalipey", // Press the ass
  "gudda pindi", // Ass mass (insult)
  "gudi dengu", // Temple fuck (extreme insult)
  "howle gadu", // Useless man
  "jutti lo dengu", // Fuck in the shoe
  "jutti meeda kurchundi", // Sat on the shoe
  "kukkala gudda", // Dog's ass
  "kukkala lanja", // Dog whore (variant)
  "kukkala modda", // Dog's dick
  "kukkala puku", // Dog's pussy
  "kukka batch", // Dog batch
  "kukka dengey", // Dog fuck off
  "kukka gudda", // Dog ass
  "kukka modda", // Dog dick
  "kukka puku dengey", // Dog pussy fuck off
  "kukka rotta", // Dog worthless
  "lamba modda", // Long dick
  "lamba sulli", // Long dick (variant)
  "lanja batch puku", // Whore batch pussy
  "lanja dengey", // Whore fuck off
  "lanja gudda", // Whore ass
  "lanja kodaka dengey", // Whore's son fuck off
  "lanja modda", // Whore's dick
  "lanja rotta", // Whore worthless
  "lavada batch", // Dick batch
  "lavada gudda", // Dick ass
  "lavada puku", // Dick pussy (compound)
  "madda gadu", // Dick man (variant)
  "modda batch", // Dick batch
  "modda kottey", // Dick hit
  "modda kurchundi", // Dick sat
  "modda meeda", // On the dick
  "modda mukka", // Dick punch
  "modda puku lo", // Dick in pussy
  "modda sulli", // Dick (compound)
  "na gudda dengu", // Fuck my ass (ironic)
  "na lanja", // My whore (possessive insult)
  "na modda meeda", // On my dick
  "na puku meeda", // On my pussy
  "na sulli meeda", // On my dick (variant)
  "nakodaka lanja", // My son whore (compound)
  "nee amma bokka", // Your mother's hole
  "nee amma dengey", // Fuck your mother off
  "nee amma puku nakku", // Lick your mother's pussy
  "nee amma sulli", // Your mother's dick
  "nee ayya dengey", // Fuck your father off
  "nee ayya gudda", // Your father's ass
  "nee ayya modda", // Your father's dick
  "nee ayya puku dengey", // Fuck your father's pussy
  "nee bokka dengu", // Fuck your hole
  "nee bonda", // Your testicle
  "nee bonda nakku", // Lick your testicle
  "nee gudda lo na modda", // My dick in your ass
  "nee gudda meeda", // On your ass
  "nee modda chinchey", // Tear your dick
  "nee puku lo na sulli", // My dick in your pussy
  "nee puku meeda", // On your pussy
  "nee sulli nakku", // Suck your dick
  "pichi gudda", // Crazy ass
  "pichi kukka", // Crazy dog
  "pichi modda", // Crazy dick
  "pichi rotta", // Crazy worthless
  "pichi vesi", // Crazy prostitute
  "pilli gudda", // Cat ass
  "pilli modda", // Cat dick (absurd insult)
  "pooku lo modda pettey", // Put dick in pussy
  "puku gudda", // Pussy ass
  "puku meeda", // On the pussy
  "puku modda", // Pussy dick (compound)
  "puku nakka gadu", // Pussy licker man
  "ra dengey", // Come and fuck off
  "ra kukka", // Come dog
  "ra lanja kodaka", // Come whore's son
  "ra modda", // Come dick
  "ra puku", // Come pussy
  "rotta gadu", // Worthless man
  "rotta lanja", // Worthless whore
  "rotta modda", // Worthless dick
  "rotta puku", // Worthless pussy
  "sachinav dengey", // Die and fuck off
  "sulli batch", // Dick batch
  "sulli guddu kottey", // Dick egg hit
  "sulli meeda", // On the dick
  "sulli puku", // Dick pussy
  "vesi batch", // Prostitute batch
  "vesi dengey", // Prostitute fuck off
  "vesi kukka", // Prostitute dog
  "vesi lanja", // Prostitute whore (redundant compound)
  "vesi modda", // Prostitute dick
  "vesi puku", // Prostitute pussy
  "vesi rotta", // Prostitute worthless

  // ========================================
  // === Hyderabadi Slang Profanity ===
  // ========================================
  "bey lavade", // Hey dick (Hyderabadi)
  "bey lanje", // Hey whore (Hyderabadi)
  "bol miya puku", // Say it pussy (Hyderabadi)
  "chal be dengey", // Go fuck off (Hyderabadi)
  "dengey chal", // Fuck off go (Hyderabadi)
  "haram ka pilla", // Illegitimate pup (Hyderabadi)
  "haramzada dengey", // Bastard fuck off (Hyderabadi)
  "janwar dengey", // Animal fuck off (Hyderabadi)
  "kameena dengey", // Scoundrel fuck off (Hyderabadi)
  "kya be lavade", // What dick (Hyderabadi)
  "kya be lanja", // What whore (Hyderabadi)
  "kya be puku", // What pussy (Hyderabadi)
  "miya gudda", // Muslim's ass (Hyderabadi slur)
  "nakhodha dengey", // My son fuck off (Hyderabadi variant)
  "nee abba puku", // Your father's pussy (Hyderabadi)
  "nee ammi puku", // Your mother's pussy (Hyderabadi)
  "nee ammi lanja", // Your mother whore (Hyderabadi)
  "oy lanja", // Hey whore (Hyderabadi)
  "oy puku", // Hey pussy (Hyderabadi)
  "poda lavade", // Get lost dick (Hyderabadi)
  "tera baap dengey", // Fuck your father (Hyderabadi)
  "tu lavada", // You dick (Hyderabadi)
  "tu lanja", // You whore (Hyderabadi)

  // ========================================
  // === Rayalaseema Dialect Profanity ===
  // ========================================
  "bayka dengu", // Wife fuck (Rayalaseema)
  "bayko puku", // Wife's pussy (Rayalaseema)
  "dengara saale", // Fucker bastard (Rayalaseema)
  "edava dengu", // Left fuck (Rayalaseema direction insult)
  "gadida na kodaka", // Donkey my son (Rayalaseema)
  "gudda poddu", // Ass poke (Rayalaseema)
  "lanjakodaka ra", // Come whore's son (Rayalaseema)
  "modda poddhu", // Dick poke (Rayalaseema)
  "na kodaka dengey", // My son fuck off (Rayalaseema)
  "nee talli dengu", // Fuck your mother (Rayalaseema)
  "nee talli puku", // Your mother's pussy (Rayalaseema)
  "noru pettuko", // Shut your mouth (Rayalaseema)
  "padha dengu", // Fart fuck (Rayalaseema)
  "puku poddhu", // Pussy poke (Rayalaseema)
  "rotta na kodaka", // Worthless my son (Rayalaseema)
  "sulli poddhu", // Dick poke (Rayalaseema variant)
  "talli dengey", // Mother fuck off (Rayalaseema)
  "talli modda", // Mother dick (Rayalaseema)

  // ========================================
  // === More Telugu Script Additions ===
  // ========================================
  "అమ్మ గుద్ద", // Amma gudda (mother's ass)
  "అమ్మ లంజ", // Amma lanja (mother whore)
  "అత్త గుద్ద దెంగు", // Atta gudda dengu (aunt's ass fuck)
  "బొండ నక్కు", // Bonda nakku (lick the testicle)
  "దాని పుకు దెంగు", // Dani puku dengu (fuck her pussy)
  "దెంగరా", // Dengara (fucker)
  "దెంగిపోత్తావ్", // Dengipothav (you'll get fucked)
  "దొంగ గుద్ద", // Donga gudda (thief ass)
  "దొంగ మొడ్డ", // Donga modda (thief dick)
  "దున్న గుద్ద", // Dunna gudda (buffalo ass)
  "దున్న లంజ", // Dunna lanja (buffalo whore)
  "ఎర్రి బొక్క", // Erri bokka (stupid hole)
  "ఎర్రి గుద్ద", // Erri gudda (stupid ass)
  "ఎర్రి కుక్క", // Erri kukka (stupid dog)
  "ఎర్రి మొడ్డ గాడు", // Erri modda gadu (stupid dick man)
  "ఎర్రి వేశ్య", // Erri vesi (stupid prostitute)
  "గాడిద దెంగు", // Gadida dengu (donkey fuck)
  "గాడిద లంజ", // Gadida lanja (donkey whore)
  "గాడిద పుకు", // Gadida puku (donkey pussy)
  "గొర్రె పుకు", // Gorre puku (sheep pussy)
  "గుద్ద ముక్క", // Gudda mukka (ass punch)
  "హౌలే గాడు", // Howle gadu (useless man)
  "కుక్క బ్యాచ్", // Kukka batch (dog batch)
  "కుక్క గుద్ద", // Kukka gudda (dog ass)
  "కుక్క మొడ్డ", // Kukka modda (dog dick)
  "కుక్క రొట్ట", // Kukka rotta (dog worthless)
  "లంబ మొడ్డ", // Lamba modda (long dick)
  "లంజ దెంగే", // Lanja dengey (whore fuck off)
  "లంజ గుద్ద", // Lanja gudda (whore ass)
  "లంజ మొడ్డ", // Lanja modda (whore's dick)
  "లంజ రొట్ట", // Lanja rotta (whore worthless)
  "లవడ బ్యాచ్", // Lavada batch (dick batch)
  "మద్ద గాడు", // Madda gadu (dick man)
  "మొడ్డ బ్యాచ్", // Modda batch (dick batch)
  "మొడ్డ కొట్టే", // Modda kottey (dick hit)
  "నా గుద్ద దెంగు", // Na gudda dengu (fuck my ass)
  "నా మొడ్డ మీద", // Na modda meeda (on my dick)
  "నీ అమ్మ బొక్క", // Nee amma bokka (your mother's hole)
  "నీ అమ్మ సుల్లి", // Nee amma sulli (your mother's dick)
  "నీ అయ్య గుద్ద", // Nee ayya gudda (your father's ass)
  "నీ అయ్య మొడ్డ", // Nee ayya modda (your father's dick)
  "నీ బొండ", // Nee bonda (your testicle)
  "నీ బొక్క దెంగు", // Nee bokka dengu (fuck your hole)
  "నీ గుద్ద మీద", // Nee gudda meeda (on your ass)
  "నీ పుకు మీద", // Nee puku meeda (on your pussy)
  "పిచ్చి గుద్ద", // Pichi gudda (crazy ass)
  "పిచ్చి కుక్క", // Pichi kukka (crazy dog)
  "పిచ్చి వేశ్య", // Pichi vesi (crazy prostitute)
  "పుకు గుద్ద", // Puku gudda (pussy ass)
  "పుకు నక్క గాడు", // Puku nakka gadu (pussy licker man)
  "రొట్ట గాడు", // Rotta gadu (worthless man)
  "రొట్ట లంజ", // Rotta lanja (worthless whore)
  "రొట్ట మొడ్డ", // Rotta modda (worthless dick)
  "సుల్లి బ్యాచ్", // Sulli batch (dick batch)
  "వేశ్య బ్యాచ్", // Vesi batch (prostitute batch)
  "వేశ్య కుక్క", // Vesi kukka (prostitute dog)
  "వేశ్య మొడ్డ", // Vesi modda (prostitute dick)
  "వేశ్య పుకు", // Vesi puku (prostitute pussy)
  "వేశ్య రొట్ట", // Vesi rotta (prostitute worthless)
  "నీ తల్లి దెంగు", // Nee talli dengu (fuck your mother - Rayalaseema)
  "నీ తల్లి పుకు", // Nee talli puku (your mother's pussy - Rayalaseema)
  "తల్లి దెంగే", // Talli dengey (mother fuck off - Rayalaseema)
  "తల్లి మొడ్డ", // Talli modda (mother dick - Rayalaseema)
  "నీ అమ్మి పుకు", // Nee ammi puku (your mother's pussy - Hyderabadi)
  "నీ అమ్మి లంజ", // Nee ammi lanja (your mother whore - Hyderabadi)
  "హరాం కా పిల్ల", // Haram ka pilla (illegitimate pup - Hyderabadi)

  // ========================================
  // === Telugu Internet Slang ===
  // ========================================
  "lkdk", // Lanja kodaka abbreviation
  "lk dengey", // Lanja kodaka dengey abbreviation
  "pkng", // Puku nakking abbreviation
  "mdda", // Modda abbreviation
  "gdda", // Gudda abbreviation
  "sllinku", // Sulli nakku abbreviation
  "dng", // Dengu abbreviation
  "erripku", // Erri puku abbreviation
  "lnja", // Lanja abbreviation
  "pku", // Puku abbreviation
  "dngchko", // Dengichukko abbreviation
  "nee amma dng", // Your mother dengu (texting)

  // ========================================
  // === More Romanized Telugu Profanity ===
  // ========================================
  "aa lanja dengu", // Fuck that whore
  "aa vesi puku", // That prostitute's pussy
  "akka puku dengu", // Sister's pussy fuck
  "akka gudda dengu", // Sister's ass fuck
  "akka modda", // Sister's dick (absurd insult)
  "akka lanja", // Sister whore
  "amma puku nakku", // Lick mother's pussy
  "atta lanja", // Aunt whore
  "atta dengu", // Aunt fuck
  "baadkow dengey", // Scoundrel fuck off
  "banda meeda kurchundi", // Sat on the dick (slang)
  "banda guddu", // Dick egg (insult variant)
  "banda nakki", // Dick licker
  "bey dengey ra", // Hey fuck off (variant)
  "bey puku gadi", // Hey pussy woman
  "bonda chinchey", // Tear the testicle
  "bonda guddu kottey", // Hit the testicle egg
  "bonda puku", // Testicle pussy (compound)
  "bottalu dengu", // Ass cheeks fuck (variant)
  "budda lanja dengey", // Old whore fuck off
  "chakkindi nee ayya", // Your father died
  "chinna modda gadu", // Small dick man
  "chinna puku gadu", // Small pussy man
  "dagulbaji dengey", // Cheat fuck off
  "dani gudda dengu", // Fuck her ass
  "dani modda nakku", // Lick her dick (absurd)
  "dani sulli", // Her dick (absurd insult)
  "dengara batch", // Fucker batch
  "dengara lanja", // Fucker whore
  "dengara rotta", // Fucker worthless
  "dengi dengi padey", // Fuck fuck and fall
  "dengi poddi batch", // Will fuck off batch
  "dengu dengu ra", // Fuck fuck come
  "donga lanja kodaka", // Thief whore's son
  "donga vesi", // Thief prostitute
  "doola batch", // Dick batch
  "doola guddu", // Dick egg
  "doola meeda", // On the dick (variant)
  "dunna modda gadu", // Buffalo dick man
  "dunna puku gadu", // Buffalo pussy man
  "erri lanja kodaka", // Stupid whore's son
  "erri puku batch", // Stupid pussy batch
  "erri sulli gadu", // Stupid dick man
  "gadida batch", // Donkey batch
  "gadida dengey batch", // Donkey fuck off batch
  "gadida lanja kodaka", // Donkey whore's son
  "gadida sulli", // Donkey dick
  "gorre dengu", // Sheep fuck
  "gorre lanja", // Sheep whore
  "gudda chinchey", // Tear the ass
  "gudda lo sulli pettey", // Put dick in ass
  "gudda nalipey ra", // Press the ass
  "gudda pindi batch", // Ass mass batch
  "gudi lo dengu", // Fuck in the temple
  "howle batch", // Useless batch
  "howle lanja", // Useless whore
  "jutti batch", // Shoe batch
  "kukkala batch dengey", // Dog batch fuck off
  "kukkala lanja dengey", // Dog whore fuck off
  "kukkala sulli", // Dog's dick
  "kukka puku batch", // Dog pussy batch
  "lamba sulli gadu", // Long dick man
  "lanja batta dengey", // Whore child fuck off
  "lanja batch dengey", // Whore batch fuck off
  "lanja puku dengey", // Whore's pussy fuck off
  "lavada batch dengey", // Dick batch fuck off
  "lavada dengey ra", // Dick fuck off
  "lavada gadu dengey", // Dick man fuck off
  "madda batch", // Dick batch (variant)
  "modda batch dengey", // Dick batch fuck off
  "modda gadu dengey", // Dick man fuck off
  "modda guddu batch", // Dick egg batch
  "modda meeda kurchundi batch", // Sat on dick batch
  "moodu gudda", // Close ass (shut up variant)
  "moodu modda ra", // Close dick (shut up)
  "na kodaka batch", // My son batch
  "na lanja batch", // My whore batch
  "nee amma lanja dengey", // Your mother whore fuck off
  "nee amma puku batch", // Your mother's pussy batch
  "nee amma puku lo na modda pettey", // Put my dick in your mother's pussy
  "nee amma sulli nakku ra", // Lick your mother's dick
  "nee ayya lanja", // Your father whore
  "nee ayya puku batch", // Your father's pussy batch
  "nee bokka batch", // Your hole batch
  "nee gudda lo na sulli pettey", // Put my dick in your ass
  "nee modda batch", // Your dick batch
  "nee puku batch", // Your pussy batch
  "nee sulli batch", // Your dick batch
  "pichi dengey", // Crazy fuck off
  "pichi lanja dengey", // Crazy whore fuck off
  "pichi modda batch", // Crazy dick batch
  "puku dengey ra", // Pussy fuck off
  "puku nakka batch", // Pussy licker batch
  "puku sulli batch", // Pussy dick batch
  "ra lanja batch", // Come whore batch
  "rotta batch dengey", // Worthless batch fuck off
  "sulli chinchukko batch", // Tear dick batch
  "vesi batch dengey", // Prostitute batch fuck off
  "vesi dengey ra", // Prostitute fuck off
  "vesi lanja batch", // Prostitute whore batch

  // ========================================
  // === Tenglish (Telugu-English Mix) Profanity ===
  // ========================================
  "fucking dengu", // Fucking fuck
  "bloody lanja", // Bloody whore
  "damn erri puku", // Damn stupid pussy
  "fucking modda", // Fucking dick
  "shit puku", // Shit pussy
  "asshole gudda", // Asshole ass (Tenglish)
  "bastard lanja kodaka", // Bastard whore's son
  "bitch lanja", // Bitch whore (Tenglish)
  "son of a lanja", // Son of a whore (Tenglish)
  "stupid erri puku", // Stupid stupid pussy (Tenglish)
  "shut up puku", // Shut up pussy (Tenglish)
  "fuck off dengey", // Fuck off fuck off (Tenglish)
  "die dengey", // Die fuck off (Tenglish)
  "ugly lanja", // Ugly whore (Tenglish)
  "cheap vesi", // Cheap prostitute (Tenglish)
  "dirty gudda", // Dirty ass (Tenglish)
  "loser rotta", // Loser worthless (Tenglish)
  "idiot erri puku gadu", // Idiot stupid pussy man (Tenglish)
  "useless rotta gadu", // Useless worthless man (Tenglish)
  "disgusting puku", // Disgusting pussy (Tenglish)
  "pathetic modda", // Pathetic dick (Tenglish)
  "bloody vesi", // Bloody prostitute (Tenglish)
  "fucking kukka", // Fucking dog (Tenglish)
  "go to hell dengey", // Go to hell fuck off (Tenglish)
  "mother fucker nee amma dengu", // Motherfucker (Tenglish)
  "bloody vedhava", // Bloody widower (Tenglish insult)
  "piece of shit rotta", // Piece of shit worthless (Tenglish)
  "dumbass erri puku", // Dumbass stupid pussy (Tenglish)
  "trash lanja", // Trash whore (Tenglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "lanja kodaka erri puku dengey", // Whore's son stupid pussy fuck off
  "kukka lanja kodaka dengey", // Dog whore's son fuck off
  "gadida lanja kodaka dengey", // Donkey whore's son fuck off
  "erri puku lanja kodaka batch", // Stupid pussy whore's son batch
  "nee amma puku dengu ra lanja kodaka", // Fuck your mother's pussy whore's son
  "nee gudda lo modda pettey lanja kodaka", // Put dick in your ass whore's son
  "kukka gudda batch dengey ra", // Dog ass batch fuck off
  "gadida modda gadu dengey ra", // Donkey dick man fuck off
  "pichi lanja kodaka dengey ra", // Crazy whore's son fuck off
  "rotta lanja kodaka batch", // Worthless whore's son batch
  "vesi kukka lanja batch dengey", // Prostitute dog whore batch fuck off
  "erri kukka gudda batch", // Stupid dog ass batch
  "nee amma nee ayya dengu batch", // Fuck your mother and father batch
  "sulli puku modda gudda batch", // Dick pussy all compound batch
  "dunna lanja kukka dengey", // Buffalo whore dog fuck off
  "nee talli puku dengu ra", // Fuck your mother's pussy (Rayalaseema intensified)

  // ========================================
  // === Coastal Andhra Dialect ===
  // ========================================
  "dengaraa batch", // Fucker batch (Coastal)
  "dengipoddi batch", // Will fuck batch (Coastal)
  "nee amma modda batch", // Your mother's dick batch (Coastal)
  "pooku gudishe batch", // Pussy mixing batch (Coastal)
  "sachinav batch", // Die batch (Coastal)
  "lanja dengey batch ra", // Whore fuck off batch (Coastal)
  "puku gadu batch ra", // Pussy man batch (Coastal)
  "nee amma puku gudishe", // Mix your mother's pussy (Coastal)
  "banda batch dengey ra", // Dick batch fuck off (Coastal)

  // ========================================
  // === Telangana Dialect ===
  // ========================================
  "nee amma dengu be", // Fuck your mother (Telangana)
  "lanjodka dengey be", // Whore's son fuck off (Telangana)
  "gudda lo modda be", // Dick in ass (Telangana)
  "puku nakku be", // Lick the pussy (Telangana)
  "erri puku gadu be", // Stupid pussy man (Telangana)
  "modda meeda be", // On the dick (Telangana)
  "dengey be rotta", // Fuck off worthless (Telangana)
  "kukka be dengey", // Dog fuck off (Telangana)
  "lanja be dengey", // Whore fuck off (Telangana)
  "dengara be batch", // Fucker batch (Telangana)

  // ========================================
  // === More Telugu Script Additions ===
  // ========================================
  "అక్క పుకు దెంగు", // Akka puku dengu (sister's pussy fuck)
  "అక్క లంజ", // Akka lanja (sister whore)
  "అత్త లంజ", // Atta lanja (aunt whore)
  "బండ నక్కి", // Banda nakki (dick licker)
  "బొండ చించే", // Bonda chinchey (tear testicle)
  "చిన్న మొడ్డ గాడు", // Chinna modda gadu (small dick man)
  "దాని గుద్ద దెంగు", // Dani gudda dengu (fuck her ass)
  "దెంగరా బ్యాచ్", // Dengara batch (fucker batch)
  "దెంగరా లంజ", // Dengara lanja (fucker whore)
  "దొంగ లంజ కొడక", // Donga lanja kodaka (thief whore's son)
  "ఎర్రి లంజ కొడక", // Erri lanja kodaka (stupid whore's son)
  "గాడిద బ్యాచ్", // Gadida batch (donkey batch)
  "గాడిద సుల్లి", // Gadida sulli (donkey dick)
  "గొర్రె దెంగు", // Gorre dengu (sheep fuck)
  "గుద్ద చించే", // Gudda chinchey (tear the ass)
  "హౌలే బ్యాచ్", // Howle batch (useless batch)
  "కుక్కల సుల్లి", // Kukkala sulli (dog's dick)
  "లంజ బ్యాచ్ దెంగే", // Lanja batch dengey (whore batch fuck off)
  "మూడు గుద్ద", // Moodu gudda (close ass)
  "నీ అమ్మ పుకు బ్యాచ్", // Nee amma puku batch (mother's pussy batch)
  "నీ బొక్క బ్యాచ్", // Nee bokka batch (your hole batch)
  "పిచ్చి దెంగే", // Pichi dengey (crazy fuck off)
  "పుకు దెంగే రా", // Puku dengey ra (pussy fuck off)
  "రొట్ట బ్యాచ్ దెంగే", // Rotta batch dengey (worthless batch fuck off)
  "సుల్లి చించుక్కో బ్యాచ్", // Sulli chinchukko batch (tear dick batch)
  "వేశ్య బ్యాచ్ దెంగే", // Vesi batch dengey (prostitute batch fuck off)
  "నీ అమ్మ నీ అయ్య దెంగు బ్యాచ్", // Nee amma nee ayya dengu batch (fuck mother and father)
  "దున్న లంజ కుక్క దెంగే", // Dunna lanja kukka dengey (buffalo whore dog fuck off)
  "నీ తల్లి పుకు దెంగు రా", // Nee talli puku dengu ra (fuck your mother's pussy)
  "దెంగరా బే బ్యాచ్", // Dengara be batch (fucker batch Telangana)
  "లంజోడ్క దెంగే బే", // Lanjodka dengey be (whore's son fuck off Telangana)
  "గుద్ద లో మొడ్డ బే", // Gudda lo modda be (dick in ass Telangana)
  "పుకు నక్కు బే", // Puku nakku be (lick pussy Telangana)

  // ========================================
  // === More Internet Slang ===
  // ========================================
  "lk batch dng", // Lanja kodaka batch dengey abbreviation
  "kk lk dng", // Kukka lanja kodaka dengey abbreviation
  "nee amma pk dng", // Nee amma puku dengu abbreviation
  "gdda dng ra", // Gudda dengu ra abbreviation
  "mdda btch", // Modda batch abbreviation
  "erripk btch", // Erri puku batch abbreviation
  "pk nk btch", // Puku nakka batch abbreviation
  "vsi dng ra", // Vesi dengey ra abbreviation
  "rttagdu", // Rotta gadu abbreviation
  "gdda nkku", // Gudda nakku abbreviation
  "pku gdu", // Puku gadu abbreviation
  "slli nkku", // Sulli nakku abbreviation
  "dng btch", // Dengu batch abbreviation
  "lnja btch dng", // Lanja batch dengey abbreviation

  // ========================================
  // === Extended Telugu Script Profanity ===
  // ========================================
  "పూకు నాకు రా", // Pooku naaku ra (lick pussy come)
  "మొడ్డ నాకు రా", // Modda naaku ra (lick dick come)
  "గుద్ద నాకు రా", // Gudda naaku ra (lick ass come)
  "సుల్లి నాకు రా", // Sulli naaku ra (lick dick come)
  "లంజ కొడక రా", // Lanja kodaka ra (whore's son come)
  "దెంగే రా కుక్క", // Dengey ra kukka (fuck off dog)
  "దెంగే రా లంజ కొడక", // Dengey ra lanja kodaka (fuck off whore's son)
  "నీ అమ్మ పూకు లో నా మొడ్డ", // Nee amma pooku lo na modda (my dick in mother's pussy)
  "నీ గుద్ద లో నా సుల్లి", // Nee gudda lo na sulli (my dick in your ass)
  "పూకు ఫాడతా", // Pooku faadata (I'll rip pussy)
  "గుద్ద ఫాడతా", // Gudda faadata (I'll rip ass)
  "మొడ్డ కొడతా", // Modda kodatha (I'll hit with dick)
  "సుల్లి కొడతా", // Sulli kodatha (I'll hit with dick variant)
  "తత్తలు తీస్తా", // Tattalu theestha (I'll pull balls)
  "బొండాలు తీస్తా", // Bondalu theestha (I'll pull testicles)
  "లంజ ముండ రా", // Lanja munda ra (whore come)
  "వేశ్య ముండ", // Veshya munda (prostitute whore)
  "దొంగ లంజ ముండ", // Donga lanja munda (thief whore)
  "ఎర్రి లంజ ముండ", // Erri lanja munda (stupid whore)
  "పిచ్చి లంజ ముండ", // Pichi lanja munda (crazy whore)
  "కుక్క లంజ ముండ", // Kukka lanja munda (dog whore)
  "గాడిద లంజ ముండ", // Gadida lanja munda (donkey whore)
  "దున్న లంజ ముండ", // Dunna lanja munda (buffalo whore)
  "గొర్రె లంజ ముండ", // Gorre lanja munda (sheep whore)
  "పిల్లి లంజ ముండ", // Pilli lanja munda (cat whore)
  "ఎద్దు పూకు", // Eddu pooku (ox pussy)
  "ఎద్దు గుద్ద", // Eddu gudda (ox ass)
  "ఎద్దు మొడ్డ", // Eddu modda (ox dick)
  "కోతి పూకు", // Kothi pooku (monkey pussy)
  "కోతి గుద్ద", // Kothi gudda (monkey ass)
  "కోతి మొడ్డ", // Kothi modda (monkey dick)
  "పాము పూకు", // Paamu pooku (snake pussy)
  "ఎలుక పూకు", // Eluka pooku (rat pussy)
  "ఎలుక గుద్ద", // Eluka gudda (rat ass)
  "కాకి పూకు", // Kaaki pooku (crow pussy)
  "పంది పూకు", // Pandi pooku (pig pussy)
  "పంది గుద్ద", // Pandi gudda (pig ass)
  "పంది మొడ్డ", // Pandi modda (pig dick)
  "గుడ్డ ముక్క", // Gudda mukka (ass piece)
  "పూకు ముక్క", // Pooku mukka (pussy piece)
  "మొడ్డ ముక్క", // Modda mukka (dick piece)
  "గాడిద పూకు గాడు", // Gadida pooku gadu (donkey pussy man)
  "దున్నపోతు పూకు", // Dunnapothu pooku (buffalo pussy)
  "నక్క పూకు", // Nakka pooku (fox pussy)
  "తోడేలు పూకు", // Thodelu pooku (wolf pussy)
  "నీ బొండాలు తీసేస్తా", // Nee bondalu theesestha (I'll rip your testicles)
  "నీ మొడ్డ కోస్తా", // Nee modda kostha (I'll cut your dick)
  "నీ పూకు కుడతా", // Nee pooku kudatha (I'll stitch your pussy)
  "నీ గుద్ద ఫాడతా", // Nee gudda faadata (I'll rip your ass)

  // ========================================
  // === Extended Romanized Telugu ===
  // ========================================
  "pooku naaku ra", // Lick pussy come
  "modda naaku ra", // Lick dick come
  "gudda naaku ra", // Lick ass come
  "sulli naaku ra", // Lick dick come variant
  "lanja kodaka ra dengey", // Whore's son come fuck off
  "dengey ra kukka lanja", // Fuck off dog whore
  "nee amma pooku lo na modda pettey", // My dick in your mother's pussy
  "pooku faadata", // I'll rip pussy
  "gudda faadata", // I'll rip ass
  "modda kodatha", // I'll hit with dick
  "sulli kodatha", // I'll hit with dick variant
  "tattalu theestha", // I'll pull balls
  "bondalu theestha", // I'll pull testicles
  "lanja munda ra", // Whore come
  "veshya munda", // Prostitute whore
  "donga lanja munda", // Thief whore
  "erri lanja munda", // Stupid whore
  "pichi lanja munda", // Crazy whore
  "kukka lanja munda", // Dog whore
  "gadida lanja munda", // Donkey whore
  "dunna lanja munda", // Buffalo whore
  "gorre lanja munda", // Sheep whore
  "pilli lanja munda", // Cat whore
  "eddu pooku", // Ox pussy
  "eddu gudda", // Ox ass
  "eddu modda", // Ox dick
  "kothi pooku", // Monkey pussy
  "kothi gudda", // Monkey ass
  "kothi modda", // Monkey dick
  "paamu pooku", // Snake pussy
  "eluka pooku", // Rat pussy
  "eluka gudda", // Rat ass
  "kaaki pooku", // Crow pussy
  "pandi pooku", // Pig pussy
  "pandi gudda", // Pig ass
  "pandi modda", // Pig dick
  "nakka pooku", // Fox pussy
  "thodelu pooku", // Wolf pussy
  "nee bondalu theesestha", // I'll rip your testicles
  "nee modda kostha", // I'll cut your dick
  "nee pooku kudatha", // I'll stitch your pussy
  "nee gudda faadata", // I'll rip your ass

  // ========================================
  // === Extended Hyderabadi Slang ===
  // ========================================
  "bey lavade chal", // Hey dick go (Hyderabadi)
  "bey lanje chal", // Hey whore go (Hyderabadi)
  "bol miya puku chal", // Say it pussy go (Hyderabadi)
  "chal be dengey lavade", // Go fuck off dick (Hyderabadi)
  "dengey chal lavade", // Fuck off go dick (Hyderabadi)
  "haram ka pilla dengey", // Illegitimate pup fuck off (Hyderabadi)
  "haramzada dengey chal", // Bastard fuck off go (Hyderabadi)
  "janwar dengey chal", // Animal fuck off go (Hyderabadi)
  "kameena dengey chal", // Scoundrel fuck off go (Hyderabadi)
  "kya be lavade chal", // What dick go (Hyderabadi)
  "kya be lanja chal", // What whore go (Hyderabadi)
  "kya be puku chal", // What pussy go (Hyderabadi)
  "miya gudda chal", // Muslim's ass go (Hyderabadi)
  "nakhodha dengey chal", // My son fuck off go (Hyderabadi)
  "nee abba puku dengey", // Your father's pussy fuck off (Hyderabadi)
  "nee ammi puku dengey", // Your mother's pussy fuck off (Hyderabadi)
  "nee ammi lanja dengey", // Your mother whore fuck off (Hyderabadi)
  "oy lanja dengey", // Hey whore fuck off (Hyderabadi)
  "oy puku dengey", // Hey pussy fuck off (Hyderabadi)
  "poda lavade chal", // Get lost dick go (Hyderabadi)
  "tera baap dengey chal", // Fuck your father go (Hyderabadi)
  "tu lavada dengey", // You dick fuck off (Hyderabadi)
  "tu lanja dengey", // You whore fuck off (Hyderabadi)
  "bey modda chal", // Hey dick go (Hyderabadi variant)
  "bey gudda chal", // Hey ass go (Hyderabadi)
  "oy modda chal", // Hey dick go (Hyderabadi variant)
  "kya be modda chal", // What dick go (Hyderabadi variant)
  "nakhodha gudda chal", // My son ass go (Hyderabadi)
  "haram ka pilla modda", // Illegitimate pup dick (Hyderabadi)
  "janwar modda", // Animal dick (Hyderabadi)
  "kameena modda", // Scoundrel dick (Hyderabadi)
  "haramzada modda", // Bastard dick (Hyderabadi)
  "teri maa dengey be", // Fuck your mother (Hyderabadi Hindi mix)
  "teri behen dengey be", // Fuck your sister (Hyderabadi Hindi mix)
  "tera baap lavada be", // Your father is a dick (Hyderabadi)
  "miya lanja be", // Muslim whore (Hyderabadi, offensive)
  "miya modda be", // Muslim dick (Hyderabadi)
  "biryani puku", // Biryani pussy (Hyderabadi cultural insult)
  "chai puku gadu", // Chai pussy man (Hyderabadi)
  "nakhodha lanja", // My son whore (Hyderabadi)

  // ========================================
  // === Extended Rayalaseema Dialect ===
  // ========================================
  "bayka dengu ra", // Wife fuck come (Rayalaseema)
  "bayko puku dengey", // Wife's pussy fuck off (Rayalaseema)
  "dengara saale dengey", // Fucker bastard fuck off (Rayalaseema)
  "gadida na kodaka dengey", // Donkey my son fuck off (Rayalaseema)
  "gudda poddu ra", // Ass poke come (Rayalaseema)
  "lanjakodaka ra dengey", // Come whore's son fuck off (Rayalaseema)
  "modda poddhu ra", // Dick poke come (Rayalaseema)
  "na kodaka dengey ra", // My son fuck off come (Rayalaseema)
  "nee talli dengu ra", // Fuck your mother come (Rayalaseema)
  "nee talli puku dengey", // Your mother's pussy fuck off (Rayalaseema)
  "noru pettuko dengey", // Shut mouth fuck off (Rayalaseema)
  "padha dengu ra", // Fart fuck come (Rayalaseema)
  "puku poddhu ra", // Pussy poke come (Rayalaseema)
  "rotta na kodaka dengey", // Worthless my son fuck off (Rayalaseema)
  "sulli poddhu ra", // Dick poke come (Rayalaseema)
  "talli dengey ra", // Mother fuck off come (Rayalaseema)
  "talli modda ra", // Mother dick come (Rayalaseema)
  "talli puku naaki dengey", // Lick mother's pussy fuck off (Rayalaseema)
  "nee talli gudda dengu", // Fuck your mother's ass (Rayalaseema)
  "nee talli lanja dengey", // Your mother whore fuck off (Rayalaseema)
  "nee talli modda nakku", // Lick your mother's dick (Rayalaseema)
  "akkada puku dengu", // Fuck that pussy (Rayalaseema)
  "ikkada gudda dengu", // Fuck this ass (Rayalaseema)
  "dengara rotta saale", // Fucker worthless bastard (Rayalaseema)

  // ========================================
  // === Extended Coastal Andhra Dialect ===
  // ========================================
  "dengaraa batch dengey", // Fucker batch fuck off (Coastal)
  "dengipoddi batch dengey", // Will fuck batch fuck off (Coastal)
  "nee amma modda batch dengey", // Your mother's dick batch fuck off (Coastal)
  "pooku gudishe batch dengey", // Pussy mixing batch fuck off (Coastal)
  "sachinav batch dengey ra", // Die batch fuck off come (Coastal)
  "lanja dengey batch ra dengey", // Whore fuck off batch come (Coastal)
  "puku gadu batch ra dengey", // Pussy man batch come fuck off (Coastal)
  "nee amma puku gudishe dengey", // Mix your mother's pussy fuck off (Coastal)
  "banda batch dengey ra dengey", // Dick batch fuck off (Coastal)
  "sulli puku batch dengey", // Dick pussy batch fuck off (Coastal)
  "gudda puku batch dengey", // Ass pussy batch fuck off (Coastal)
  "lamba modda gadu batch", // Long dick man batch (Coastal)
  "bonda batch dengey ra", // Testicle batch fuck off come (Coastal)
  "lavada batch dengey ra", // Dick batch fuck off come (Coastal)
  "doola batch dengey ra", // Dick batch fuck off come (Coastal variant)
  "kukka batch dengey ra", // Dog batch fuck off come (Coastal)
  "gadida batch dengey ra", // Donkey batch fuck off come (Coastal)
  "dunna batch dengey ra", // Buffalo batch fuck off come (Coastal)
  "gorre batch dengey ra", // Sheep batch fuck off come (Coastal)

  // ========================================
  // === Extended Telangana Dialect ===
  // ========================================
  "nee amma dengu be ra", // Fuck your mother (Telangana)
  "lanjodka dengey be ra", // Whore's son fuck off (Telangana)
  "gudda lo modda be ra", // Dick in ass (Telangana)
  "puku nakku be ra", // Lick the pussy (Telangana)
  "erri puku gadu be ra", // Stupid pussy man (Telangana)
  "modda meeda be ra", // On the dick (Telangana)
  "dengey be rotta ra", // Fuck off worthless (Telangana)
  "kukka be dengey ra", // Dog fuck off (Telangana)
  "lanja be dengey ra", // Whore fuck off (Telangana)
  "dengara be batch ra", // Fucker batch (Telangana)
  "gadida be dengey ra", // Donkey fuck off (Telangana)
  "dunna be dengey ra", // Buffalo fuck off (Telangana)
  "gorre be dengey ra", // Sheep fuck off (Telangana)
  "pichi be dengey ra", // Crazy fuck off (Telangana)
  "erri be dengey ra", // Stupid fuck off (Telangana)
  "rotta be dengey ra", // Worthless fuck off (Telangana)
  "nee amma lanja be ra", // Your mother whore (Telangana)
  "nee ayya puku be ra", // Your father's pussy (Telangana)
  "nee akka lanja be", // Your sister whore (Telangana)
  "nee talli lanja be", // Your mother whore (Telangana variant)
  "nee puku be ra dengey", // Your pussy fuck off (Telangana)
  "nee gudda be ra dengey", // Your ass fuck off (Telangana)
  "nee modda be ra dengey", // Your dick fuck off (Telangana)
  "nee sulli be ra dengey", // Your dick fuck off (Telangana variant)

  // ========================================
  // === Extended Tenglish Mix ===
  // ========================================
  "fucking dengu ra", // Fucking fuck come
  "bloody lanja dengey", // Bloody whore fuck off
  "damn erri puku dengey", // Damn stupid pussy fuck off
  "fucking modda dengey", // Fucking dick fuck off
  "shit puku dengey", // Shit pussy fuck off
  "asshole gudda dengey", // Asshole ass fuck off
  "bastard lanja kodaka dengey", // Bastard whore's son fuck off
  "bitch lanja dengey", // Bitch whore fuck off
  "son of a lanja dengey", // Son of a whore fuck off
  "stupid erri puku dengey", // Stupid stupid pussy fuck off
  "shut up puku dengey", // Shut up pussy fuck off
  "fuck off dengey ra", // Fuck off fuck off come
  "die dengey ra", // Die fuck off come
  "ugly lanja dengey", // Ugly whore fuck off
  "cheap vesi dengey", // Cheap prostitute fuck off
  "dirty gudda dengey", // Dirty ass fuck off
  "loser rotta dengey", // Loser worthless fuck off
  "trash lanja dengey", // Trash whore fuck off
  "garbage puku dengey", // Garbage pussy fuck off
  "noob erri puku dengey", // Noob stupid pussy fuck off (gaming)
  "toxic lanja kodaka", // Toxic whore's son (gaming)
  "cancer puku gadu", // Cancer pussy man (gaming)
  "feeder lanja kodaka", // Feeder whore's son (gaming)
  "bot erri puku", // Bot stupid pussy (gaming)
  "hacker dengey ra", // Hacker fuck off come (gaming)
  "camper erri puku", // Camper stupid pussy (gaming)
  "uninstall cheyyi dengey", // Uninstall do fuck off (gaming)
  "delete cheyyi dengey", // Delete do fuck off (gaming)
  "lag erri puku dengey", // Lag stupid pussy fuck off (gaming)
  "pro lanja kodaka", // Pro whore's son (gaming sarcastic)

  // ========================================
  // === Extended Threats (Telugu) ===
  // ========================================
  "nee pooku faadtha", // I'll rip your pussy
  "nee gudda faadtha", // I'll rip your ass
  "nee bondalu theestha", // I'll rip your testicles
  "nee tala pagiltha", // I'll crack your head
  "nee pallu raalta", // I'll break your teeth
  "nee elukalu visurtha", // I'll break your bones
  "kukkala ki vestha", // I'll throw to dogs
  "drain lo thostha", // I'll push in drain
  "gutter lo thostha", // I'll push in gutter
  "smaashaanaam lo vesthaa", // I'll leave you in cremation ground
  "brathikiundagane paathesthaa", // I'll bury alive
  "cheelchesthaa", // I'll rip apart
  "kolesthaa", // I'll kill
  "sachesthaa", // I'll make you die
  "chaavagodtha", // I'll beat to death
  "nee amma ni denguthaa", // I'll fuck your mother
  "nee akka ni denguthaa", // I'll fuck your sister
  "nee pellam ni denguthaa", // I'll fuck your wife
  "nee ayya ni denguthaa", // I'll fuck your father
  "nee vaamsham ni denguthaa", // I'll fuck your lineage

  // ========================================
  // === Telugu Threats - Script ===
  // ========================================
  "నీ పూకు ఫాడ్తా", // I'll rip your pussy
  "నీ గుద్ద ఫాడ్తా", // I'll rip your ass
  "నీ బొండాలు తీస్తా", // I'll rip your testicles
  "నీ తల పగిల్తా", // I'll crack your head
  "నీ పళ్ళు రాల్తా", // I'll break your teeth
  "నీ ఎలుకలు విసుర్తా", // I'll break your bones
  "కుక్కలకి వేస్తా", // I'll throw to dogs
  "డ్రెయిన్ లో తోస్తా", // I'll push in drain
  "కొలేస్తా", // I'll kill
  "చావగొడ్తా", // I'll beat to death
  "నీ అమ్మ ని దెంగుతా", // I'll fuck your mother
  "నీ అక్క ని దెంగుతా", // I'll fuck your sister
  "నీ పెళ్ళాం ని దెంగుతా", // I'll fuck your wife
  "నీ వంశం ని దెంగుతా", // I'll fuck your lineage

  // ========================================
  // === Extended Telugu Compound Insults ===
  // ========================================
  "lanja kodaka erri puku dengey ra batch", // Whore's son stupid pussy fuck off batch
  "kukka lanja kodaka dengey ra batch", // Dog whore's son fuck off batch
  "gadida lanja kodaka dengey ra batch", // Donkey whore's son fuck off batch
  "erri puku lanja kodaka batch dengey ra", // Stupid pussy whore's son batch fuck off
  "nee amma puku dengu ra lanja kodaka batch", // Fuck mother's pussy whore's son batch
  "nee gudda lo modda pettey ra lanja kodaka", // Put dick in ass whore's son
  "kukka gudda batch dengey ra lanja kodaka", // Dog ass batch fuck off whore's son
  "gadida modda gadu dengey ra batch", // Donkey dick man fuck off batch
  "pichi lanja kodaka dengey ra batch", // Crazy whore's son fuck off batch
  "rotta lanja kodaka batch dengey ra", // Worthless whore's son batch fuck off
  "vesi kukka lanja batch dengey ra", // Prostitute dog whore batch fuck off
  "erri kukka gudda batch dengey ra", // Stupid dog ass batch fuck off
  "dunna lanja kukka dengey ra batch", // Buffalo whore dog fuck off batch
  "nee talli puku dengu ra batch", // Fuck mother's pussy batch (Rayalaseema)
  "eddu modda gadu batch dengey", // Ox dick man batch fuck off
  "kothi puku gadu batch dengey", // Monkey pussy man batch fuck off
  "pandi modda gadu batch dengey", // Pig dick man batch fuck off
  "eluka gudda gadu batch dengey", // Rat ass man batch fuck off
  "kaaki puku gadu batch dengey", // Crow pussy man batch fuck off

  // ========================================
  // === Extended Telugu Scatological ===
  // ========================================
  "nee meedha ponguthaa", // I'll piss on you
  "nee moham meedha urutha", // I'll spit on your face
  "gu thinu ra", // Eat shit
  "gu lo dengu", // Fuck in shit
  "peethi thinu ra", // Eat feces
  "muthra thaagtaav", // You'll drink urine
  "gu kodaka", // Shit's son
  "peethi kodaka", // Feces' son
  "muthra kodaka", // Urine's son
  "padda pooku", // Fart pussy
  "padda gudda", // Fart ass
  "padda modda", // Fart dick
  "gu puku", // Shit pussy
  "gu gudda", // Shit ass
  "gu modda", // Shit dick
  "naali keeda", // Drain worm
  "gutter keeda", // Gutter worm
  "chetta puku", // Garbage pussy
  "chetta gudda", // Garbage ass
  "chetta modda", // Garbage dick
  "chetta lanja", // Garbage whore
  "chetta kodaka", // Garbage son
  "gu meedha dengey", // Fuck on shit
  "gu lo padey", // Fall in shit
  "gu lo sachipovey", // Die in shit

  // ========================================
  // === Extended Telugu Animal Insults ===
  // ========================================
  "eddu dengey", // Ox fuck off
  "eddu lanja", // Ox whore
  "eddu kodaka", // Ox's son
  "kothi dengey", // Monkey fuck off
  "kothi lanja", // Monkey whore
  "kothi kodaka", // Monkey's son
  "paamu dengey", // Snake fuck off
  "paamu lanja", // Snake whore
  "paamu kodaka", // Snake's son
  "eluka dengey", // Rat fuck off
  "eluka lanja", // Rat whore
  "eluka kodaka", // Rat's son
  "kaaki dengey", // Crow fuck off
  "kaaki lanja", // Crow whore
  "kaaki kodaka", // Crow's son
  "pandi dengey", // Pig fuck off
  "pandi lanja", // Pig whore
  "pandi kodaka", // Pig's son
  "nakka dengey", // Fox fuck off
  "nakka lanja", // Fox whore
  "nakka kodaka", // Fox's son
  "thodelu dengey", // Wolf fuck off
  "thodelu lanja", // Wolf whore
  "thodelu kodaka", // Wolf's son
  "pilli dengey", // Cat fuck off
  "pilli lanja", // Cat whore
  "pilli kodaka", // Cat's son
  "gorre kodaka", // Sheep's son
  "dunna kodaka", // Buffalo's son
  "gadida kodaka dengey", // Donkey's son fuck off
  "kukka kodaka dengey", // Dog's son fuck off
  "eddu batch dengey", // Ox batch fuck off
  "kothi batch dengey", // Monkey batch fuck off
  "pandi batch dengey", // Pig batch fuck off
  "paamu batch dengey", // Snake batch fuck off

  // ========================================
  // === Extended Telugu Evasion Spellings ===
  // ========================================
  "p00ku", // Pooku evasion
  "d3ngu", // Dengu evasion
  "l@nja", // Lanja evasion
  "m0dda", // Modda evasion
  "g0dda", // Gudda evasion
  "s0lli", // Sulli evasion
  "l@vada", // Lavada evasion
  "b0kka", // Bokka evasion
  "d3ngey", // Dengey evasion
  "v3si", // Vesi evasion
  "r0tta", // Rotta evasion
  "p1chi", // Pichi evasion
  "3rri", // Erri evasion
  "k0kka", // Kukka evasion
  "g@dida", // Gadida evasion
  "d0nna", // Dunna evasion
  "b@nda", // Banda evasion
  "b0nda", // Bonda evasion
  "lnjakodaka", // Lanja kodaka compound evasion
  "lnjamdda", // Lanja munda evasion
  "pkugadu", // Puku gadu compound evasion
  "mddagadu", // Modda gadu compound evasion
  "gddanakku", // Gudda nakku compound evasion
  "sllinakku", // Sulli nakku compound evasion

  // ========================================
  // === Extended Telugu Internet Slang ===
  // ========================================
  "lk btch dng ra", // Lanja kodaka batch dengey ra
  "kk lk dng ra", // Kukka lanja kodaka dengey ra
  "nee amma pk dng ra", // Nee amma puku dengu ra
  "gdda dng ra btch", // Gudda dengu ra batch
  "mdda btch dng ra", // Modda batch dengey ra
  "erripk btch dng ra", // Erri puku batch dengey ra
  "pk nk btch dng ra", // Puku nakka batch dengey ra
  "vsi dng ra btch", // Vesi dengey ra batch
  "rttagdu dng ra", // Rotta gadu dengey ra
  "gdda nkku ra btch", // Gudda nakku ra batch
  "pku gdu dng ra", // Puku gadu dengey ra
  "slli nkku ra btch", // Sulli nakku ra batch
  "dng btch ra", // Dengu batch ra
  "lnja btch dng ra", // Lanja batch dengey ra
  "lk mdda gdu btch", // Lanja kodaka modda gadu batch
  "kk gdda btch dng", // Kukka gudda batch dengey
  "gdda mdda btch ra", // Gadida modda batch ra
  "dnna pk btch dng", // Dunna puku batch dengey
  "grre lk btch dng", // Gorre lanja kodaka batch dengey
  "plli lk btch dng", // Pilli lanja kodaka batch dengey

  // ========================================
  // === Extended Telugu Caste/Religious Slurs ===
  // ========================================
  "maala", // Scheduled caste slur
  "madiga", // Scheduled caste slur
  "maala kodaka", // SC caste slur + son
  "madiga kodaka", // SC caste slur + son
  "maala lanja", // SC caste whore
  "madiga lanja", // SC caste whore
  "maala dengey", // SC caste fuck off
  "madiga dengey", // SC caste fuck off
  "erukala", // Nomadic caste slur
  "erukala kodaka", // Nomadic caste son
  "yanadi", // Tribal caste slur
  "yanadi kodaka", // Tribal caste son
  "chandala", // Outcast slur
  "chandala kodaka", // Outcast son
  "turka", // Muslim slur (Telugu)
  "turka kodaka", // Muslim slur son
  "turka dengey", // Muslim slur fuck off
  "turka lanja", // Muslim slur whore
  "vaadu maala", // He is SC (derogatory context)
  "vaadu madiga", // He is SC (derogatory context)
  "neech jathi", // Low caste
  "neech jathi kodaka", // Low caste son
  "neech jathi lanja", // Low caste whore
  "neech jathi dengey", // Low caste fuck off

  // ========================================
  // === More Extended Telugu Script ===
  // ========================================
  "మాల", // Maala (SC caste slur)
  "మాదిగ", // Madiga (SC caste slur)
  "మాల కొడక", // Maala kodaka (SC son)
  "మాదిగ కొడక", // Madiga kodaka (SC son)
  "మాల లంజ", // Maala lanja (SC whore)
  "మాదిగ లంజ", // Madiga lanja (SC whore)
  "తుర్క", // Turka (Muslim slur)
  "తుర్క కొడక", // Turka kodaka (Muslim slur son)
  "నీచ జాతి", // Neech jathi (low caste)
  "చండాల", // Chandala (outcast slur)
  "ఎద్దు దెంగే", // Eddu dengey (ox fuck off)
  "కోతి దెంగే", // Kothi dengey (monkey fuck off)
  "పంది దెంగే", // Pandi dengey (pig fuck off)
  "పాము దెంగే", // Paamu dengey (snake fuck off)
  "ఎలుక దెంగే", // Eluka dengey (rat fuck off)
  "నక్క దెంగే", // Nakka dengey (fox fuck off)
  "తోడేలు దెంగే", // Thodelu dengey (wolf fuck off)
  "పిల్లి దెంగే", // Pilli dengey (cat fuck off)
  "గు తిను రా", // Gu thinu ra (eat shit)
  "పీతి తిను రా", // Peethi thinu ra (eat feces)
  "ముత్ర తాగ్తావ్", // Muthra thaagtaav (drink urine)
  "నాలి కీడా", // Naali keeda (drain worm)
  "చెత్త పుకు", // Chetta puku (garbage pussy)
  "చెత్త గుద్ద", // Chetta gudda (garbage ass)
  "చెత్త మొడ్డ", // Chetta modda (garbage dick)
  "చెత్త లంజ", // Chetta lanja (garbage whore)
  "గు పుకు", // Gu puku (shit pussy)
  "గు గుద్ద", // Gu gudda (shit ass)
  "గు మొడ్డ", // Gu modda (shit dick)
  "గు కొడక", // Gu kodaka (shit's son)

  // ========================================
  // === Extended Telugu Body Part Combos ===
  // ========================================
  "pooku moham", // Pussy face
  "gudda moham", // Ass face
  "modda moham", // Dick face
  "sulli moham", // Dick face variant
  "pooku chettu", // Pussy tree (insult)
  "gudda chettu", // Ass tree (insult)
  "modda chettu", // Dick tree (insult)
  "pooku bandi", // Pussy cart (insult)
  "gudda bandi", // Ass cart (insult)
  "modda bandi", // Dick cart (insult)
  "pooku mudda", // Pussy lump
  "gudda mudda", // Ass lump
  "modda mudda", // Dick lump
  "pooku guddi", // Pussy egg
  "gudda guddi", // Ass egg
  "modda guddi", // Dick egg variant
  "pooku rotta", // Pussy worthless
  "modda rotta gadu dengey", // Dick worthless man fuck off
  "sulli rotta gadu dengey", // Dick worthless man fuck off variant
  "gudda rotta gadu dengey", // Ass worthless man fuck off
  "pooku rotta gadu dengey", // Pussy worthless man fuck off

  // ========================================
  // === More Extended Telugu Compounds ===
  // ========================================
  "nee amma ooru lanja", // Your mother is village whore
  "nee amma pacha vesi", // Your mother is total prostitute
  "nee akka ooru lanja", // Your sister is village whore
  "nee ayya puku gadu", // Your father is pussy man
  "nee vaamsam motham lanja kodakalu", // Your entire lineage whore's sons
  "nee kutumbam motham lanja mundalu", // Your entire family whore faces
  "nee amma ku modda naakudu theriyum", // Your mother only knows dick licking
  "nee akka ku gudda ivvudu theriyum", // Your sister only knows giving ass
  "nee amma ku kukka denguthadi", // Dogs fuck your mother
  "nee amma ku gadida denguthadi", // Donkeys fuck your mother
  "nee amma ku dunna denguthadi", // Buffaloes fuck your mother
  "nee amma ku gorre denguthadi", // Sheep fuck your mother
  "nee amma ku pandi denguthadi", // Pigs fuck your mother
  "nee amma ku kothi denguthadi", // Monkeys fuck your mother
  "nee amma ku eluka denguthadi", // Rats fuck your mother
  "nee amma ku paamu denguthadi", // Snakes fuck your mother
  "nee amma hijra", // Your mother is a eunuch
  "nee ayya hijra", // Your father is a eunuch
  "nee akka hijra", // Your sister is a eunuch
  "hijra lanja", // Eunuch whore
  "hijra puku", // Eunuch pussy
  "hijra modda", // Eunuch dick
  "hijra gudda", // Eunuch ass
  "napumsaka lanja", // Impotent whore
  "napumsaka dengey", // Impotent fuck off
  "napumsaka kodaka", // Impotent's son
  "kojja lanja", // Eunuch whore (slang)
  "kojja dengey", // Eunuch fuck off (slang)
  "kojja kodaka", // Eunuch's son (slang)
  "kojja puku", // Eunuch pussy (slang)
  "kojja modda", // Eunuch dick (slang)
  "kojja gudda", // Eunuch ass (slang)

  // ========================================
  // === More Extended Telugu Script ===
  // ========================================
  "నీ అమ్మ ఊరు లంజ", // Your mother village whore
  "నీ అమ్మ పచ్చ వేశ్య", // Your mother total prostitute
  "నీ అక్క ఊరు లంజ", // Your sister village whore
  "నీ వంశం మొత్తం లంజ కొడకలు", // Entire lineage whore's sons
  "నీ కుటుంబం మొత్తం లంజ ముండలు", // Entire family whore faces
  "నీ అమ్మ కు కుక్క దెంగుతది", // Dogs fuck your mother
  "నీ అమ్మ కు గాడిద దెంగుతది", // Donkeys fuck your mother
  "నీ అమ్మ కు దున్న దెంగుతది", // Buffaloes fuck your mother
  "నీ అమ్మ కు గొర్రె దెంగుతది", // Sheep fuck your mother
  "నీ అమ్మ కు పంది దెంగుతది", // Pigs fuck your mother
  "నీ అమ్మ కు కోతి దెంగుతది", // Monkeys fuck your mother
  "నీ అమ్మ హిజ్రా", // Your mother eunuch
  "నీ అయ్య హిజ్రా", // Your father eunuch
  "హిజ్రా లంజ", // Eunuch whore
  "హిజ్రా పుకు", // Eunuch pussy
  "హిజ్రా మొడ్డ", // Eunuch dick
  "హిజ్రా గుద్ద", // Eunuch ass
  "నపుంసక లంజ", // Impotent whore
  "నపుంసక దెంగే", // Impotent fuck off
  "కొజ్జ లంజ", // Eunuch whore (slang)
  "కొజ్జ దెంగే", // Eunuch fuck off (slang)
  "కొజ్జ కొడక", // Eunuch's son (slang)
  "కొజ్జ పుకు", // Eunuch pussy (slang)
  "కొజ్జ మొడ్డ", // Eunuch dick (slang)

  // ========================================
  // === More Extended Threat Compounds ===
  // ========================================
  "nee amma ni nee mundu denguthaa", // I'll fuck your mother in front of you
  "nee akka ni nee mundu denguthaa", // I'll fuck your sister in front of you
  "nee vaamsam azhinchisthaa", // I'll destroy your lineage
  "nee kutumbam azhinchisthaa", // I'll destroy your family
  "nee peru vini janalu tukkirtharu", // People will spit hearing your name
  "nee puku lo thee pettisthaa", // I'll set fire in your pussy
  "nee gudda lo thee pettisthaa", // I'll set fire in your ass
  "nee modda lo thee pettisthaa", // I'll set fire in your dick
  "nee puku lo mirchi pettisthaa", // I'll put chili in your pussy
  "nee gudda lo mirchi pettisthaa", // I'll put chili in your ass
  "nee modda ki rope katesthaa", // I'll tie rope to your dick
  "nee puku kududthaa", // I'll sew your pussy shut
  "nee gudda kududthaa", // I'll sew your ass shut
  "nee puku lo paamu vesthaa", // I'll put snake in your pussy
  "nee gudda lo paamu vesthaa", // I'll put snake in your ass
  "nee vaamsam thikkumuzhangu paduthundhi", // Your lineage will be humiliated
  "ninna kukkala ki vestha", // I'll feed you to dogs
  "ninna pandula ki vestha", // I'll feed you to pigs
  "ninna drain lo thostha", // I'll push you in drain
  "ninna gutter lo thostha", // I'll push you in gutter
  "ninna brathikiundaga paathestha", // I'll bury you alive
  "nee kutumbam motham denguthaa", // I'll fuck your entire family
  "nee vaamsam motham denguthaa", // I'll fuck your entire lineage
  "nee amma ni ooru motham denguthundhi", // The whole village fucks your mother
  "nee akka ni ooru motham denguthundhi", // The whole village fucks your sister
  "nee pellam ni ooru motham denguthundhi", // The whole village fucks your wife

  // ========================================
  // === More Extended Animal Compounds ===
  // ========================================
  "dunna lanja kodaka dengey ra batch", // Buffalo whore's son fuck off batch
  "gorre lanja kodaka dengey ra batch", // Sheep whore's son fuck off batch
  "pandi lanja kodaka dengey ra batch", // Pig whore's son fuck off batch
  "kothi lanja kodaka dengey ra batch", // Monkey whore's son fuck off batch
  "eluka lanja kodaka dengey ra batch", // Rat whore's son fuck off batch
  "paamu lanja kodaka dengey ra batch", // Snake whore's son fuck off batch
  "pilli lanja kodaka dengey ra batch", // Cat whore's son fuck off batch
  "eddu lanja kodaka dengey ra batch", // Ox whore's son fuck off batch
  "nakka lanja kodaka dengey ra batch", // Fox whore's son fuck off batch
  "kukka lanja munda dengey", // Dog whore face fuck off
  "gadida lanja munda dengey", // Donkey whore face fuck off
  "dunna lanja munda dengey", // Buffalo whore face fuck off
  "gorre lanja munda dengey", // Sheep whore face fuck off
  "pandi lanja munda dengey", // Pig whore face fuck off
  "kothi lanja munda dengey", // Monkey whore face fuck off
  "kukka vesi dengey ra", // Dog prostitute fuck off
  "gadida vesi dengey ra", // Donkey prostitute fuck off
  "dunna vesi dengey ra", // Buffalo prostitute fuck off
  "gorre vesi dengey ra", // Sheep prostitute fuck off
  "pandi vesi dengey ra", // Pig prostitute fuck off
  "kothi vesi dengey ra", // Monkey prostitute fuck off

  // ========================================
  // === More Extended Tenglish Gaming ===
  // ========================================
  "afk lanja kodaka", // AFK whore's son
  "report cheyyi lanja kodaka", // Report whore's son
  "mute cheyyi lanja kodaka", // Mute whore's son
  "feed chesthunnav lanja kodaka", // You're feeding whore's son
  "carry cheyyalev lanja kodaka", // Can't carry whore's son
  "int chesthunnav lanja kodaka", // You're inting whore's son
  "trash tier lanja kodaka", // Trash tier whore's son
  "bronze lanja kodaka", // Bronze whore's son (low rank)
  "iron lanja kodaka", // Iron whore's son (lowest rank)
  "hardstuck lanja kodaka", // Hardstuck whore's son
  "boosted lanja kodaka", // Boosted whore's son
  "smurf dengey ra", // Smurf fuck off
  "aim ledhu lanja kodaka", // No aim whore's son
  "game sense ledhu lanja kodaka", // No game sense whore's son
  "camping lanja kodaka dengey", // Camping whore's son fuck off
  "stream sniper dengey ra", // Stream sniper fuck off
  "gg lanja kodaka", // GG whore's son
  "ez lanja kodaka", // EZ whore's son
  "toxic erri puku", // Toxic stupid pussy
  "cancer erri puku", // Cancer stupid pussy
  "noob erri puku batch", // Noob stupid pussy batch
  "clutch cheyyi ra lanja kodaka", // Clutch it whore's son
  "uninstall cheyyi lanja kodaka", // Uninstall whore's son
  "delete cheyyi erri puku", // Delete stupid pussy

  // ========================================
  // === More Extended Compound Insults ===
  // ========================================
  "nee amma puku ooru lo motham teliyum", // Your mother's pussy is known in entire village
  "nee akka gudda ooru lo motham teliyum", // Your sister's ass is known in entire village
  "nee amma free dengu batch", // Your mother is a free fuck batch
  "nee akka free dengu batch", // Your sister is a free fuck batch
  "nee amma oka rupa ku denguthundhi", // Your mother fucks for one rupee
  "nee akka oka paisa ku denguthundhi", // Your sister fucks for one paisa
  "nee amma ku ekkada rate ledhu", // Your mother has no rate (worthless)
  "nee akka ku ekkada rate ledhu", // Your sister has no rate (worthless)
  "nee amma lanja profession", // Your mother's profession is whoring
  "nee akka modda naakudu profession", // Your sister's profession is dick licking
  "nee amma gudda ivvudu profession", // Your mother's profession is giving ass
  "nee vaamsam lo andaru lanjalu", // Everyone in your lineage are whores
  "nee kutumbam lo andaru lanja kodakalu", // Everyone in your family are whores' sons
  "nee amma ku naa modda nachindi", // Your mother liked my dick
  "nee akka ku naa sulli nachindi", // Your sister liked my dick
  "nee pellam ku naa banda nachindi", // Your wife liked my dick
  "nee amma naa daggariki vasthundhi", // Your mother comes to me
  "nee akka naa daggariki vasthundhi", // Your sister comes to me
  "nee pellam naa daggariki vasthundhi", // Your wife comes to me

  // ========================================
  // === Extended Telugu Script Insults ===
  // ========================================
  "నీ అమ్మ పూకు నాకుతాను", // I'll lick your mother's pussy
  "నీ అక్క పూకు నాకుతాను", // I'll lick your sister's pussy
  "నీ అమ్మ గుద్ద నాకుతాను", // I'll lick your mother's ass
  "నీ అక్క గుద్ద నాకుతాను", // I'll lick your sister's ass
  "నీ అమ్మ సొల్లు పిసుకుతాను", // I'll squeeze your mother's breasts
  "నీ అక్క సొల్లు పిసుకుతాను", // I'll squeeze your sister's breasts
  "నీ అమ్మ ని బోర్లా వేసి దెంగుతాను", // I'll fuck your mother face down
  "నీ అక్క ని బోర్లా వేసి దెంగుతాను", // I'll fuck your sister face down
  "నీ అమ్మ పూకులో చేయి పెడతాను", // I'll put my hand in your mother's pussy
  "నీ అమ్మ పూకులో కాలు పెడతాను", // I'll put my foot in your mother's pussy
  "నీ మొడ్డ కోస్తాను", // I'll cut your dick
  "నీ మొడ్డ విరుస్తాను", // I'll break your dick
  "నీ సుల్లి కోస్తాను", // I'll cut your dick (alt)
  "నీ సుల్లి విరుస్తాను", // I'll break your dick (alt)
  "నీ తట్టలు పిసుకుతాను", // I'll crush your balls
  "నీ తట్టలు కోస్తాను", // I'll cut your balls
  "నీ అమ్మ పూకు చీరుతాను", // I'll tear your mother's pussy
  "నీ అక్క పూకు చీరుతాను", // I'll tear your sister's pussy
  "నీ అమ్మ గుద్ద చీరుతాను", // I'll tear your mother's ass
  "నీ అక్క గుద్ద చీరుతాను", // I'll tear your sister's ass
  "లంజ కొడక నువ్వు", // Whore's son you are
  "లంజ కూతురు నువ్వు", // Whore's daughter you are
  "దొంగ లంజ కూతురు", // Thief whore's daughter
  "రంది కొడక నువ్వు", // Prostitute's son you are
  "బోగం కొడక నువ్వు", // Prostitute's son you are (alt)
  "వేశ్య కొడక నువ్వు", // Prostitute's son you are (formal)
  "నీ అమ్మ బజార్ లంజ", // Your mother is a market whore
  "నీ అక్క బజార్ లంజ", // Your sister is a market whore
  "నీ అమ్మ రోడ్ లంజ", // Your mother is a street whore
  "నీ అక్క రోడ్ లంజ", // Your sister is a street whore

  // ========================================
  // === Extended Romanized Telugu Insults ===
  // ========================================
  "nee amma puku naakuthaanu", // I'll lick your mother's pussy
  "nee akka puku naakuthaanu", // I'll lick your sister's pussy
  "nee amma gudda naakuthaanu", // I'll lick your mother's ass
  "nee akka gudda naakuthaanu", // I'll lick your sister's ass
  "nee amma sollu pisukuthaanu", // I'll squeeze your mother's breasts
  "nee akka sollu pisukuthaanu", // I'll squeeze your sister's breasts
  "nee amma ni borla vesi denguthaanu", // I'll fuck your mother face down
  "nee akka ni borla vesi denguthaanu", // I'll fuck your sister face down
  "nee amma pukulo cheyi pedathaanu", // I'll put hand in your mother's pussy
  "nee amma pukulo kaalu pedathaanu", // I'll put foot in your mother's pussy
  "nee modda kosthaanu", // I'll cut your dick
  "nee modda virusthaanu", // I'll break your dick
  "nee sulli kosthaanu", // I'll cut your dick (alt)
  "nee sulli virusthaanu", // I'll break your dick (alt)
  "nee tattalu pisukuthaanu", // I'll crush your balls
  "nee tattalu kosthaanu", // I'll cut your balls
  "nee amma puku cheeruthaanu", // I'll tear your mother's pussy
  "nee akka puku cheeruthaanu", // I'll tear your sister's pussy
  "nee amma gudda cheeruthaanu", // I'll tear your mother's ass
  "nee akka gudda cheeruthaanu", // I'll tear your sister's ass
  "lanja kodaka nuvvu", // Whore's son you are
  "lanja koothuru nuvvu", // Whore's daughter you are
  "donga lanja koothuru", // Thief whore's daughter
  "randi kodaka nuvvu", // Prostitute's son you are
  "bogam kodaka nuvvu", // Prostitute's son you are (alt)
  "veshya kodaka nuvvu", // Prostitute's son you are (formal)
  "nee amma bazaar lanja", // Your mother is a market whore
  "nee akka bazaar lanja", // Your sister is a market whore
  "nee amma road lanja", // Your mother is a street whore
  "nee akka road lanja", // Your sister is a street whore

  // ========================================
  // === Extended Hyderabadi Dialect ===
  // ========================================
  "tera maa ki chut re bhai", // Your mother's pussy dude (Hyderabadi)
  "tera baap ka lauda re", // Your father's dick dude (Hyderabadi)
  "nakko bol re lanja kodaka", // Don't talk whore's son (Hyderabadi)
  "chal be lanja kodaka", // Get lost whore's son (Hyderabadi)
  "kya re lanja kodaka", // What whore's son (Hyderabadi)
  "bol na re modda", // Talk dick (Hyderabadi)
  "ek number ka lanja kodaka", // Number one whore's son (Hyderabadi)
  "seedha kar nakko toh denguthaa", // Straighten up or I'll fuck you (Hyderabadi)
  "kyun re erri puku", // Why stupid pussy (Hyderabadi)
  "abbe lanja kodaka", // Hey whore's son (Hyderabadi)
  "abbe erri puku", // Hey stupid pussy (Hyderabadi)
  "abbe modda", // Hey dick (Hyderabadi)
  "abbe sulli", // Hey dick (Hyderabadi alt)
  "abbe gudda", // Hey ass (Hyderabadi)
  "ek dum lanja kodaka", // Absolute whore's son (Hyderabadi)
  "mast lanja kodaka", // Great whore's son (Hyderabadi)
  "kaminey lanja kodaka", // Bastard whore's son (Hyderabadi)
  "harami lanja kodaka", // Bastard whore's son (Hyderabadi alt)
  "jhatu lanja kodaka", // Pubic whore's son (Hyderabadi)
  "besharam lanja kodaka", // Shameless whore's son (Hyderabadi)

  // ========================================
  // === Extended Rayalaseema Dialect ===
  // ========================================
  "nee amma ni dengey ra", // Fuck your mother (Rayalaseema)
  "nee akka ni dengey ra", // Fuck your sister (Rayalaseema)
  "pooku naakara", // Lick pussy (Rayalaseema)
  "gudda dengara", // Fuck ass (Rayalaseema)
  "modda gutara", // Bite dick (Rayalaseema)
  "modda naakara", // Lick dick (Rayalaseema)
  "lanja mukham ra needi", // Your face is a whore's (Rayalaseema)
  "dengey pothunna ra", // I'm going to fuck (Rayalaseema)
  "dengey vastunna ra", // I'm coming to fuck (Rayalaseema)
  "puku nakki ra", // Lick pussy (Rayalaseema alt)
  "gudda nakki ra", // Lick ass (Rayalaseema alt)
  "sulli kottara", // Beat the dick (Rayalaseema)
  "banda kottara", // Beat the dick (Rayalaseema alt)
  "tattalu ottara", // Beat the balls (Rayalaseema)
  "nee amma pukulo na modda", // My dick in your mother's pussy (Rayalaseema)
  "nee akka pukulo na modda", // My dick in your sister's pussy (Rayalaseema)
  "nee amma guddalo na modda", // My dick in your mother's ass (Rayalaseema)
  "nee akka guddalo na modda", // My dick in your sister's ass (Rayalaseema)
  "pooku dengey ra", // Fuck off (Rayalaseema)
  "gudda dengey ra", // Fuck off (Rayalaseema alt)

  // ========================================
  // === Extended Coastal Andhra Dialect ===
  // ========================================
  "nee amma ni dengutha babu", // I'll fuck your mother (Coastal Andhra)
  "nee akka ni dengutha babu", // I'll fuck your sister (Coastal Andhra)
  "lanja kodaka vaadu", // He is whore's son (Coastal Andhra)
  "lanja mukham vaadu", // He has whore's face (Coastal Andhra)
  "erri puku vaadu", // He is stupid pussy (Coastal Andhra)
  "modda puku vaadu", // He is dick pussy (Coastal Andhra)
  "sulli naakayi vaadu", // He licked dick (Coastal Andhra)
  "gudda ichchinayi vaadu", // He gave his ass (Coastal Andhra)
  "puku ichchinayi vaadu", // He gave his pussy (Coastal Andhra)
  "lanja gadiki dengey", // Fuck to the whore (Coastal Andhra)
  "nee amma mee intlo andari ki denguthundhi", // Your mother fucks everyone in your house (Coastal Andhra)
  "nee akka mee intlo andari ki denguthundhi", // Your sister fucks everyone in your house (Coastal Andhra)
  "nee pellam mee intlo andari ki denguthundhi", // Your wife fucks everyone in your house (Coastal Andhra)
  "ooru lo andari modda nee amma naakindhi", // Your mother licked everyone's dick in village (Coastal Andhra)
  "ooru lo andari modda nee akka naakindhi", // Your sister licked everyone's dick in village (Coastal Andhra)
  "erri modda nuvvu", // Stupid dick you (Coastal Andhra)
  "erri gudda nuvvu", // Stupid ass you (Coastal Andhra)
  "erri sulli nuvvu", // Stupid dick you (Coastal Andhra alt)
  "erri lanja nuvvu", // Stupid whore you (Coastal Andhra)
  "erri donga nuvvu", // Stupid thief you (Coastal Andhra)

  // ========================================
  // === Extended Telangana Dialect ===
  // ========================================
  "nee amma ni denguthaa gani", // I'll fuck your mother (Telangana)
  "nee akka ni denguthaa gani", // I'll fuck your sister (Telangana)
  "lanja kodaka gani nuvvu", // Whore's son you (Telangana)
  "erri puku gani nuvvu", // Stupid pussy you (Telangana)
  "modda gani nuvvu", // Dick you (Telangana)
  "dengey gani", // Fuck off (Telangana)
  "puku gani nuvvu", // Pussy you (Telangana)
  "gudda gani nuvvu", // Ass you (Telangana)
  "nee amma ki denguthaa baiti", // I'll fuck your mother (Telangana female)
  "lanja baiti nuvvu", // Whore you (Telangana female)
  "puku baiti nuvvu", // Pussy you (Telangana female)
  "dengey baiti", // Fuck off (Telangana female)
  "erri puku baiti", // Stupid pussy (Telangana female)
  "modda naaku baiti", // Lick dick (Telangana female)
  "gudda ivvu baiti", // Give ass (Telangana female)

  // ========================================
  // === Extended Body Part Combos ===
  // ========================================
  "pedda puku vaadu", // Big pussy guy
  "chinna modda vaadu", // Small dick guy
  "pedda gudda vaadu", // Big ass guy
  "chinna sulli vaadu", // Small dick guy (alt)
  "vankara modda vaadu", // Crooked dick guy
  "potti modda vaadu", // Short dick guy
  "guddi modda vaadu", // Blind dick guy
  "mottam modda vaadu", // Bald dick guy
  "laaavu puku vaadi", // Fat pussy girl
  "chhinna puku vaadi", // Small pussy girl
  "veepu gudda vaadi", // Wide ass girl
  "pedda gudda vaadi", // Big ass girl
  "పెద్ద పూకు వాడు", // Big pussy guy (Telugu script)
  "చిన్న మొడ్డ వాడు", // Small dick guy (Telugu script)
  "పెద్ద గుద్ద వాడు", // Big ass guy (Telugu script)
  "చిన్న సుల్లి వాడు", // Small dick guy (Telugu script alt)
  "వంకర మొడ్డ వాడు", // Crooked dick guy (Telugu script)
  "పొట్టి మొడ్డ వాడు", // Short dick guy (Telugu script)

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "l4nj4", // Whore (evasion)
  "m0dd4", // Dick (evasion)
  "gudd4", // Ass (evasion)
  "sull1", // Dick (evasion)
  "3rr1 puku", // Stupid pussy (evasion)
  "l4nj4 k0d4k4", // Whore's son (evasion)
  "p00ku d3ng3y", // Pussy fuck off (evasion)
  "m0dd4 n44ku", // Lick dick (evasion)
  "gudd4 1vvu", // Give ass (evasion)
  "m@dda", // Dick (evasion)
  "p@@ku", // Pussy (evasion)
  "gudd@", // Ass (evasion)
  "d€ngey", // Fuck off (evasion)
  "sull!", // Dick (evasion)
  "err! puku", // Stupid pussy (evasion)
  "l@nja k0daka", // Whore's son (evasion)

  // ========================================
  // === Extended Emasculation/Impotence Insults ===
  // ========================================
  "నీ మొడ్డ లేవదు", // Your dick can't get up
  "నీ మొడ్డ పని చేయదు", // Your dick doesn't work
  "నీ మొడ్డ చచ్చింది", // Your dick died
  "నువ్వు నపుంసకుడివి", // You are impotent
  "నువ్వు హిజ్రా వి", // You are a hijra
  "నీ మొడ్డ పురుగు లాంటిది", // Your dick is like a worm
  "నీ మొడ్డ వేలు లాంటిది", // Your dick is like a finger
  "నీ మొడ్డ పుల్ల లాంటిది", // Your dick is like a stick
  "nee modda levadhu", // Your dick can't get up
  "nee modda pani cheyadhu", // Your dick doesn't work
  "nee modda chachchindhi", // Your dick died
  "nuvvu napunsakudivi", // You are impotent
  "nuvvu hijra vi", // You are a hijra
  "nee modda purugu laantidhi", // Your dick is like a worm
  "nee modda velu laantidhi", // Your dick is like a finger
  "nee modda pulla laantidhi", // Your dick is like a stick

  // ========================================
  // === Extended Scatological (Telugu) ===
  // ========================================
  "nee moham lo poyyisthaa", // I'll shit on your face
  "nee moham lo uthuruthaa", // I'll piss on your face
  "nee thindi lo poyyisthaa", // I'll shit in your food
  "nee thindi lo uthuruthaa", // I'll piss in your food
  "nee amma moham lo poyyisthaa", // I'll shit on your mother's face
  "nee akka moham lo poyyisthaa", // I'll shit on your sister's face
  "aavu peda vaadu", // Cow dung person
  "kukka peda vaadu", // Dog shit person
  "pandi peda vaadu", // Pig shit person
  "nee moham ki poyyi", // Shit to your face
  "nee moham ki mootram", // Piss to your face
  "poyyi thiney vaadu", // Shit eater
  "mootram thaagey vaadu", // Piss drinker
  "peeda thinney vaadu", // Fart sniffer
  "నీ మొహంలో పొయ్యిస్తా", // I'll shit on your face (script)
  "నీ మొహంలో ఉతురుతా", // I'll piss on your face (script)
  "నీ తిండిలో పొయ్యిస్తా", // I'll shit in your food (script)
  "నీ తిండిలో ఉతురుతా", // I'll piss in your food (script)
  "పొయ్యి తినే వాడు", // Shit eater (script)
  "మూత్రం తాగే వాడు", // Piss drinker (script)

  // ========================================
  // === Extended Animal Insults (Telugu) ===
  // ========================================
  "kukka dengey vaadu", // Dog fucker
  "pandi dengey vaadu", // Pig fucker
  "gadidha dengey vaadu", // Donkey fucker
  "meka dengey vaadu", // Goat fucker
  "aavu dengey vaadu", // Cow fucker
  "gurram dengey vaadu", // Horse fucker
  "kothi dengey vaadu", // Monkey fucker
  "eluka dengey vaadu", // Rat fucker
  "paamu dengey vaadu", // Snake fucker
  "kukka lanja kodaka", // Dog whore's son
  "pandi lanja kodaka", // Pig whore's son
  "gadidha lanja kodaka", // Donkey whore's son
  "meka lanja kodaka", // Goat whore's son
  "kothi lanja kodaka", // Monkey whore's son
  "kukka bachcha", // Dog's child
  "pandi bachcha", // Pig's child
  "gadidha bachcha", // Donkey's child
  "paamu bachcha", // Snake's child
  "eluka bachcha", // Rat's child
  "కుక్క దెంగే వాడు", // Dog fucker (script)
  "పంది దెంగే వాడు", // Pig fucker (script)
  "గాడిద దెంగే వాడు", // Donkey fucker (script)
  "మేక దెంగే వాడు", // Goat fucker (script)
  "ఆవు దెంగే వాడు", // Cow fucker (script)
  "గుర్రం దెంగే వాడు", // Horse fucker (script)
  "కోతి దెంగే వాడు", // Monkey fucker (script)

  // ========================================
  // === Extended Abuse Phrases (Telugu) ===
  // ========================================
  "nee jeevithaniki viluva ledhu", // Your life has no value
  "nuvvu puttakunda unte bagundedhi", // It'd be better if you weren't born
  "nee amma nee nanna ni eragadhu", // Your mother doesn't know your father
  "nee nanna evaro evariki teliyadhu", // Nobody knows who your father is
  "nee amma nee ni dustbin lo vesinattu", // Your mother threw you in dustbin
  "nee amma nee ni road meeda vesinattu", // Your mother threw you on the road
  "ninnu evaru kavaalanu koru", // Nobody wants you
  "nee moham chuste manushulu thukuthaaru", // People spit seeing your face
  "nee peru vinte manushulu navvuthaaru", // People laugh hearing your name
  "nee family lo andaru lanjalu", // Everyone in your family are whores
  "nee family lo andaru lanja kodakalu", // Everyone in your family are whore's sons
  "nee vaamsam lo andaru dengulodu", // Everyone in your lineage are fuckers
  "నీ జీవితానికి విలువ లేదు", // Your life has no value (script)
  "నువ్వు పుట్టకుండా ఉంటే బాగుండేది", // Better if you weren't born (script)
  "నీ అమ్మ నీ నాన్న ని ఎరగదు", // Your mother doesn't know your father (script)
  "నిన్ను ఎవరూ కావాలని కోరు", // Nobody wants you (script)
  "నీ మొహం చూస్తే మనుషులు తుక్కుతారు", // People spit seeing your face (script)
  "నీ పేరు వింటే మనుషులు నవ్వుతారు", // People laugh hearing your name (script)
  "నీ ఫ్యామిలీ లో అందరూ లంజలు", // Everyone in your family are whores (script)
  "నీ వంశంలో అందరూ లంజ కొడకలు", // Everyone in your lineage are whore's sons (script)

  // ========================================
  // === Extended Caste-Based Slurs (Telugu) ===
  // ========================================
  "maala lanja kodaka", // Mala (caste) whore's son
  "madiga lanja kodaka", // Madiga (caste) whore's son
  "chakali lanja kodaka", // Washerman (caste) whore's son
  "mangali lanja kodaka", // Barber (caste) whore's son
  "kummari lanja kodaka", // Potter (caste) whore's son
  "eenadi lanja kodaka", // Low-caste whore's son
  "dasari lanja kodaka", // Dasari (caste) whore's son
  "maala erri puku", // Mala stupid pussy
  "madiga erri puku", // Madiga stupid pussy
  "chakali erri puku", // Washerman stupid pussy
  "mangali erri puku", // Barber stupid pussy
  "keencha jaathi vaadu", // Low caste person
  "neecha jaathi vaadu", // Low caste person (alt)
  "మాల లంజ కొడక", // Mala whore's son (script)
  "మాదిగ లంజ కొడక", // Madiga whore's son (script)
  "చాకలి లంజ కొడక", // Washerman whore's son (script)
  "మంగలి లంజ కొడక", // Barber whore's son (script)
  "కీంచ జాతి వాడు", // Low caste person (script)
  "నీచ జాతి వాడు", // Low caste person (script alt)

  // ========================================
  // === Extended Internet/Gaming Telugu ===
  // ========================================
  "nuvvu noob erri puku batch ra", // You noob stupid pussy batch
  "nuvvu hacker lanja kodaka ra", // You hacker whore's son
  "nuvvu camper erri puku ra", // You camper stupid pussy
  "nuvvu feeder lanja kodaka ra", // You feeder whore's son
  "nuvvu troll erri puku ra", // You troll stupid pussy
  "nuvvu toxic lanja kodaka ra", // You toxic whore's son
  "nuvvu griefing erri puku ra", // You griefing stupid pussy
  "nuvvu afk lanja kodaka ra", // You AFK whore's son
  "nuvvu stream sniper erri puku ra", // You stream sniper stupid pussy
  "game vaddu dengey lanja kodaka", // Leave game whore's son
  "uninstall cheyyi ra erri modda", // Uninstall stupid dick
  "delete cheyyi ra erri modda", // Delete stupid dick
  "lag ki dengey ra", // Fuck the lag
  "ping ki dengey ra", // Fuck the ping
  "server ki dengey ra", // Fuck the server
];

export default teluguBadWords;
