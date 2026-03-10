// src/hindi-words.ts

/**
 * Hindi/Hinglish profanity words list
 * Contains common profanities in both Devanagari and Roman scripts
 * ⚠️ Warning: This file contains explicit language in Hindi
 */
const hindiBadWords: string[] = [
  "bc", // Abbreviation for behenchod
  "mc", // Abbreviation for madarchod
  // ========================================
  // === Original Seed Words ===
  // ========================================
  // Roman script Hindi/Hinglish profanities
  "behen chod", // Sister fucker
  "behenchod", // Sister fucker
  "bhenchod", // Sister fucker
  "bakchod", // Bullshitter
  "chutiya", // Idiot / Fool (vulgar)
  "chutiyapa", // Idiocy / Foolishness (vulgar)
  "gandu", // Asshole
  "gaandu", // Asshole
  "harami", // Bastard
  "haramzada", // Bastard (born of sin)
  "kutta", // Dog (insult)
  "kutte", // Dogs (insult)
  "kamina", // Scoundrel
  "lund", // Penis (vulgar)
  "lauda", // Penis (vulgar)
  "loda", // Penis (vulgar)
  "randi", // Prostitute
  "saala", // Brother-in-law (used as insult: bastard)
  "madarchod", // Motherfucker
  "chod", // Fuck
  "chodu", // Fucker / Idiot

  // Devanagari script profanities
  "भड़वा", // Pimp
  "भोसड़ी", // Vagina (extremely vulgar)
  "बहन चोद", // Sister fucker
  "भेन चोद", // Sister fucker
  "चूतिया", // Idiot / Fool (vulgar)
  "हरामी", // Bastard
  "हरामज़ादा", // Bastard (born of sin)
  "कमीना", // Scoundrel
  "लंड", // Penis (vulgar)
  "लौड़ा", // Penis (vulgar)
  "रंडी", // Prostitute
  "साला", // Brother-in-law (used as insult)
  "मादरचोद", // Motherfucker

  // Common misspellings and variations (Original)
  "bhnchd", // Abbreviation/Variation of behenchod
  "behanchod", // Sister fucker (variant)
  "bhanchod", // Sister fucker (variant)
  "bhen chod", // Sister fucker (variant)
  "chutia", // Idiot (variant spelling)
  "rendi", // Prostitute (variant)
  "maderchod", // Motherfucker (variant)
  "madarchood", // Motherfucker (variant)
  "madarjaat", // Motherfucker's kind
  "gandoo", // Asshole (variant)

  // ========================================
  // === Expanded List (Roman Script) ===
  // ========================================

  // --- Variations of 'Behenchod' ---
  "behanchood", // Sister fucker (variant)
  "behenchood", // Sister fucker (variant)
  "bhenchood", // Sister fucker (variant)
  "bhainchod", // Sister fucker (variant)
  "bhain chood", // Sister fucker (variant)
  "bahenchod", // Sister fucker (variant)
  "behnchod", // Sister fucker (variant)
  "behncod", // Sister fucker (variant)
  "behn chod", // Sister fucker (variant)
  "bhen cod", // Sister fucker (variant)
  "bhen chood", // Sister fucker (variant)
  "bahanchod", // Sister fucker (variant)
  "bhenco", // Sister fucker (shortened)
  "bhencho", // Sister fucker (shortened)
  "b c", // Abbreviation for behenchod
  "be si", // Phonetic abbreviation for BC
  "bee see", // Phonetic abbreviation for BC
  "behenkechodo", // Compound: sister fuckers
  "bhenkelode", // Compound: sister's dicks
  "bkl", // Abbreviation for Behen ke Lode
  "bahan chod", // Sister fucker (variant)
  "bahan ke", // Sister's... (start of insult)

  // --- Variations of 'Madarchod' ---
  "madar chod", // Motherfucker (variant)
  "madarchodd", // Motherfucker (variant)
  "madarchoddd", // Motherfucker (variant)
  "madar chood", // Motherfucker (variant)
  "madrchod", // Motherfucker (variant)
  "madarchud", // Motherfucker (variant)
  "mader chod", // Motherfucker (variant)
  "maderchood", // Motherfucker (variant)
  "modarchod", // Motherfucker (variant)
  "mother chod", // Motherfucker (Hinglish)
  "motherchodd", // Motherfucker (Hinglish variant)
  "mother fucker", // English, but used in Hinglish context
  "maachod", // Motherfucker (shortened)
  "maa chod", // Motherfucker (shortened)
  "ma chod", // Motherfucker (shortened)
  "maa chood", // Motherfucker (variant)
  "m c", // Abbreviation for madarchod
  "em cee", // Phonetic abbreviation for MC
  "em see", // Phonetic abbreviation for MC
  "madarjaad", // Motherfucker's kind (variant)
  "madarzaat", // Motherfucker's kind (variant)
  "madarjatt", // Motherfucker's kind (variant)
  "madarchom", // Slang/Typo for madarchod
  "teri maa chod", // Compound: fuck your mother
  "teri ma ki chut", // Compound: your mother's vagina

  // --- Variations of 'Chutiya' ---
  "chutiyaa", // Idiot (variant)
  "chutiye", // Idiot (vocative)
  "chuthiya", // Idiot (variant)
  "chutya", // Idiot (variant)
  "chutiyaap", // Idiocy (variant)
  "chutiyap", // Idiocy (variant)
  "chutyapa", // Idiocy (variant)
  "chutiyapaa", // Idiocy (variant)
  "chutiyapanti", // Idiocy / Foolish behavior
  "chutiyapnatee", // Idiocy (variant)
  "chootiya", // Idiot (variant)
  "chootya", // Idiot (variant)
  "chootiye", // Idiot (vocative variant)
  "chootiyapa", // Idiocy (variant)
  "chut", // Vagina (extremely vulgar)
  "choot", // Vagina (variant)
  "chuchiya", // Mishearing/variation of chutiya
  "chodu ram", // Mocking name (fucker)
  "chutmarike", // Vulgar insult, lit. born of vagina
  "chut ke", // Your vagina's... (implying offspring)
  "maha chutiya", // Great idiot
  "ek number ka chutiya", // Number one idiot
  "asli chutiya", // Real idiot

  // --- Variations of 'Gandu' / 'Gaand' ---
  "gandu lal", // Mocking name (asshole)
  "gandul", // Asshole (variant)
  "ganduu", // Asshole (variant)
  "gand", // Ass (vulgar)
  "gaand", // Ass (vulgar)
  "g@ndu", // Asshole (leetspeak variant)
  "g@nd", // Ass (leetspeak variant)
  "gaandfat", // Scared (lit. ass ripped)
  "gandfattu", // Coward (lit. ass-ripper)
  "gaand mara", // Get your ass f***ed
  "gaand marwa", // Get your ass f***ed
  "gaandmasti", // Fooling around (can be offensive)
  "gandu giri", // Asshole behavior
  "gaandu giri", // Asshole behavior (variant)
  "gandu augmentation", // Nonsense phrase sometimes used humorously/insultingly
  "gandfaad", // Ass-ripping (intense action/insult)
  "gandu bachcha", // Asshole kid
  "teri gaand mein", // In your ass... (common start to insults)

  // --- Variations of 'Lund' / 'Lauda' ---
  "laund", // Penis (variant)
  "lawda", // Penis (variant)
  "lora", // Penis (variant)
  "laura", // Penis (variant)
  "lulla", // Slang/childish for penis
  "lund choos", // Dick sucker
  "lund fakir", // Useless person (lit. dick beggar)
  "lund hilana", // Masturbate
  "lund ka baal", // Pubic hair (implying worthless)
  "lundtopi", // Glans penis (used insultingly)
  "laude", // Vocative form of lauda
  "laude lag gaye", // Things got f***ed up
  "lauda lasan", // Nonsense rhyming insult
  "mere lund se", // From my dick (expressing indifference/contempt)

  // --- Variations of 'Bhosda' / 'Bhosdike' ---
  "bhosda", // Vagina (extremely vulgar)
  "bhosada", // Vagina (variant)
  "bhosra", // Vagina (variant)
  "bhosrika", // Vagina (variant)
  "bhosarike", // Born of a vagina (insult)
  "bhosdike", // Born of a vagina (extremely vulgar insult)
  "bhoshdike", // Born of a vagina (variant)
  "bhosdi ke", // Born of a vagina (variant)
  "bhosdiwala", // Vagina person (insult)
  "bhosdiwale", // Vagina people (insult)
  "bhosdiwaale", // Vagina people (variant)
  "bhosadchod", // Vagina f***er
  "bhosad", // Shortened form of bhosda
  "teri maa ka bhosda", // Your mother's vagina (extreme insult)

  // --- Variations of 'Randi' ---
  "randvi", // Male equivalent (insulting)
  "randwe", // Male equivalent (insulting)
  "randibaaz", // Womanizer / Brothel-goer
  "randibaazi", // Womanizing / Brothel-going
  "randibaj", // Womanizer (variant)
  "randi ka", // Implying son of a prostitute
  "randi ki aulad", // Offspring of a prostitute
  "randi khana", // Brothel (used insultingly)
  "chakke", // Eunuch/trans (often used with randi)
  "gashti", // Prostitute (Urdu/Punjabi influence)
  "patur", // Prostitute (regional)
  "beswa", // Prostitute

  // --- Variations of 'Harami' / 'Haramzada' ---
  "haraami", // Bastard (variant)
  "harami pilla", // Bastard puppy
  "haramipana", // Act of being a harami
  "haramzade", // Bastards (plural)
  "haramzadeh", // Bastard (variant)
  "haram zaada", // Bastard (spaced variant)
  "haramjada", // Bastard (variant)
  "haramjaade", // Bastards (variant)
  "haramkhor", // One who eats forbidden things (freeloader)
  "haraamkhor", // Freeloader (variant)
  "haram ka", // Illegitimate / forbidden
  "haram ka pilla", // Illegitimate puppy

  // --- Variations of 'Kamina' ---
  "kameena", // Scoundrel (variant)
  "kaminay", // Scoundrels (variant)
  "kaminey", // Scoundrels (variant)
  "kaminapan", // Scoundrel behavior
  "kaminpana", // Scoundrel behavior (variant)
  "kamini", // Female scoundrel

  // --- Variations of 'Kutta' ---
  "kutte kamine", // Compound insult: dogs and scoundrels
  "kutti", // Bitch (derogatory female)
  "kutiya", // Bitch (derogatory female)
  "kutya", // Bitch (variant)
  "kuttiya", // Bitch (variant)
  "kutri", // Bitch (regional variant)
  "kutte ki maut", // Dog's death (miserable death)
  "kutte ka pilla", // Puppy (insult)
  "gali ka kutta", // Street dog (worthless)
  "kutte ki aulad", // Offspring of a dog

  // --- Variations of 'Saala' ---
  "saale", // Brother-in-law (insult variant)
  "saaley", // Brother-in-law (insult variant)
  "sala kutta", // Bastard dog (compound)
  "sala harami", // Bastard (compound)
  "saale chutiye", // Bastard idiot (compound)

  // --- Variations of 'Chod' / 'Chodu' ---
  "chodd", // Fuck (variant)
  "chhod", // Sometimes used for 'leave', but context is key
  "chodumal", // Mocking name (fucker)
  "choduram", // Mocking name (fucker)
  "chhodu", // Fucker (variant)
  "chud", // Act of f***ing / getting f***ed
  "chudai", // The act of f***ing
  "chudwa", // Get f***ed
  "chudakkad", // Someone obsessed with sex
  "chudasi", // Horny (female - vulgar)
  "chudasa", // Horny (male - vulgar)
  "chudwana", // Get someone f***ed
  "chudwaana", // Get someone f***ed (variant)
  "chudwaya", // Got someone f***ed
  "chodne", // To f***

  // --- Variations of 'Bakchod' / 'Bakchodi' ---
  "bakchodd", // Bullshitter (variant)
  "bakchodi", // Bullshitting
  "bakchodiya", // Bullshitter (variant)
  "bakchodhi", // Bullshitting (variant)
  "bakchodi pelna", // To bullshit
  "bakait", // Braggart/Bullshitter
  "bakwaas", // Nonsense (less profane but used insultingly)

  // --- Bodily Functions / Parts (Vulgar) ---
  "jhaant", // Pubic hair
  "jhaat", // Pubic hair
  "jhant", // Pubic hair (variant)
  "jhantu", // Pubic-haired (insult)
  "jhatu", // Pubic-haired (insult)
  "jantoo", // Pubic-haired (variant)
  "jhaat barabar", // Worthless as pubic hair
  "jhaat ka baal", // Pubic hair
  "tatte", // Testicles
  "tatta", // Testicle
  "tatti", // Shit / Feces
  "tati", // Shit (variant)
  "tat", // Testicles/Shit (shortened)
  "tatti khana", // Eat shit
  "tatti surat", // Shitty face
  "goo", // Dung/shit
  "goobar", // Dung/shit (variant of gobar)
  "mut", // Piss/Urine
  "moot", // Piss/Urine (variant)
  "mutra", // Urine (formal)
  "mutna", // To piss
  "peshab", // Urine (less vulgar but can be used insultingly)
  "muth", // Masturbation
  "mutthi", // Fist / Masturbation
  "muthal", // Someone who masturbates (insult)
  "hastmaithun", // Masturbation (formal, rarely used as insult)

  // --- Slurs & Related Insults ---
  "hijra", // Transgender/Eunuch (derogatory)
  "hijda", // Transgender/Eunuch (derogatory variant)
  "hijraa", // Transgender/Eunuch (derogatory variant)
  "hizra", // Transgender/Eunuch (derogatory variant)
  "hijjra", // Transgender/Eunuch (derogatory variant)
  "chakka", // Transgender/Eunuch (derogatory)
  "chhakka", // Transgender/Eunuch (derogatory variant)
  "chaka", // Transgender/Eunuch (derogatory variant)
  "namard", // Impotent / Unmanly
  "naamard", // Impotent (variant)
  "namardangi", // Impotence
  "napunsak", // Impotent (formal)
  "napunsakta", // Impotence
  "khusra", // Eunuch/Transgender (derogatory)
  "khassi", // Castrated (animal, used insultingly for humans)
  "launda", // Boy (can be used derogatorily, implying effeminate or young lover)
  "laundiya", // Girl (can be used derogatorily)
  "laundebaaz", // Sodomite / Boy-lover (offensive)

  // --- General Insults & Offensive Terms ---
  "bhadwa", // Pimp (highly offensive)
  "bhadwe", // Pimp (plural/vocative)
  "bharwa", // Pimp (variant)
  "bhadua", // Pimp (variant)
  "bhadva", // Pimp (variant)
  "dalal", // Broker, pimp (insult)
  "dalla", // Pimp (variant)
  "dalaal", // Pimp (variant)
  "besharam", // Shameless
  "besharm", // Shameless (variant)
  "besaram", // Shameless (variant)
  "besharmi", // Shamelessness
  "behaya", // Shameless
  "behayaa", // Shameless (variant)
  "behayaai", // Shamelessness
  "neech", // Low-life, despicable person
  "nich", // Low-life (variant)
  "neech admi", // Low-life person
  "paaji", // Mean, low (Punjabi influence)
  "paji", // Mean, low (variant)
  "pajji", // Mean, low (variant)
  "badmaash", // Bad character, hooligan
  "badmash", // Hooligan (variant)
  "badmashi", // Hooliganism
  "luchha", // Lewd, debauched person
  "lucha", // Lewd person (variant)
  "luchchai", // Lewdness
  "lafanga", // Loafer, rogue
  "lafange", // Loafers, rogues (plural)
  "lafangey", // Loafers, rogues (variant)
  "lafantar", // Loafer (variant)
  "awaara", // Vagrant, loafer
  "gadha", // Donkey (insult for stupid)
  "gadhe", // Donkeys (plural insult)
  "gadhi", // Female donkey (insult)
  "ullu", // Owl (stupid)
  "ullu ka pattha", // Son of an owl (insult for stupid)
  "ullu ki patthi", // Daughter of an owl
  "bandar", // Monkey
  "suar", // Pig (insult)
  "suwar", // Pig (variant)
  "soar", // Pig (variant)
  "suar ki aulad", // Offspring of a pig
  "janwar", // Animal (dehumanizing)
  "shaitan", // Devil
  "rakshas", // Demon
  "chichora", // Petty, shallow
  "charsi", // Drug addict (hashish)
  "ganjedi", // Drug addict (marijuana)
  "bewakoof", // Idiot (common, less profane)
  "bevakoof", // Idiot (variant)
  "bewaqoof", // Idiot (variant)
  "murkh", // Fool (formal)
  "paagal", // Mad, crazy
  "pagal", // Mad, crazy (variant)
  "pagla", // Mad person (male)
  "pagli", // Mad person (female)
  "dekh lunga", // I'll see you / I'll deal with you (threat)
  "aukat", // Status / standing (used in challenges: "teri aukat kya hai?")
  "aukaat", // Status (variant spelling)
  "chapri", // Low-class, tacky (modern slang insult)
  "nibba", // Immature online person (modern slang)
  "nibbi", // Immature online person, female (modern slang)
  "dhakkan", // Lid (stupid)
  "paltu", // Turncoat
  "chamcha", // Sycophant
  "bhikari", // Beggar
  "kanjoos", // Miser
  "makhi choos", // Extreme miser (lit. sucks flies)
  "phattu", // Scaredy-cat
  "darpok", // Coward
  "kayar", // Coward
  "ghatiya", // Low quality, despicable
  "khota", // Donkey / Fake (coin)
  "haram ka khana", // Eating illegitimate earnings
  "muh kala karna", // Blacken face (bring shame)
  "izzat lutna", // Rob honor (rape/molestation)
  "phitte muh", // Shame on you (Punjabi)
  "dur fitte muh", // Stronger version of above
  "mar ja", // Go die
  "khudkushi kar le", // Commit suicide (extremely harsh)
  "joota maru", // I'll hit you with a shoe
  "joota", // Shoe (implying worthlessness)
  "nalayak", // Worthless, undeserving
  "nikamma", // Useless
  "kamchor", // Shirker
  "gawar", // Rustic, uncivilized
  "jungli", // Wild, uncivilized

  // --- Compound Insults & Phrases ---
  "madarchod gandu", // Motherfucker asshole
  "gandu madarchod", // Asshole motherfucker
  "behenchod chutiya", // Sister fucker idiot
  "chutiya behenchod", // Idiot sister fucker
  "saala kutta kamina", // Bastard dog scoundrel
  "harami kutta", // Bastard dog
  "kaminey suar", // Scoundrel pig
  "randi ki beti", // Daughter of a prostitute
  "bhadwe ki aulad", // Offspring of a pimp
  "bhosdi ke kutte", // Dog born of a vagina
  "lund fakir chutiya", // Dick beggar idiot
  "chutiya sala", // Idiot bastard
  "gandu sala", // Asshole bastard
  "abe saale", // Hey bastard
  "oye harami", // Hey bastard
  "chal be chutiye", // Get moving, idiot
  "nikal laude", // Get lost, dick
  "teri maa ka yaar", // Your mother's lover
  "teri behen ka yaar", // Your sister's lover
  "baap ka maal", // Father's property (objectifying women)
  "gandi naali ke keede", // Worm from a dirty drain
  "tere baap ka naukar", // Your father's servant? (challenging)
  "khandan pe mat ja", // Don't involve my family
  "behen ke lode", // Sister's dick (highly offensive)
  "teri maa ki", // Your mother's... (start of a common insult, often implies '...vagina')

  // --- More Obscure/Regional/Figurative ---
  "chutiya sala gandu", // Triple combo: idiot bastard asshole
  "bhen ke takke", // Sister's ... (similar to lode, very offensive)
  "khatey", // Testicles (regional slang)
  "pataka", // Firecracker (sometimes used for attractive woman, can be objectifying/vulgar)
  "maal", // Goods/Stuff (objectifying term for women)
  "item", // Item (objectifying term for women)
  "topibaaz", // Deceiver, trickster (lit. hat-wearer)
  "dhongi", // Hypocrite, imposter
  "pakhandi", // Hypocrite
  "ghoos khor", // Bribe taker
  "char sau bees", // 420 (IPC section for cheating, used for cheater)
  "dedh shana", // Over-smart (lit. one and a half clever)
  "bitodi", // Woman (derogatory, regional)
  "chidimar", // Bird catcher (implying low status/predatory)
  "natak karna", // To act/pretend (used like 'stop bullshitting')
  "raand", // Widow (can be used extremely derogatorily, similar to Randi in some contexts)


  // ========================================
  // === Expanded List (Devanagari Script) ===
  // ========================================
  "बहनचोद", // Sister fucker
  "भैनचोद", // Sister fucker (variant)
  "भेनचोड", // Sister fucker (variant)
  "बहेनचोद", // Sister fucker (variant)
  "बी सी", // BC (abbreviation for behenchod)
  "बकलोल", // Related insult sometimes abbreviated as BKL
  "मादर चोद", // Motherfucker (spaced)
  "मादरचूड", // Motherfucker (variant)
  "मदरचोद", // Motherfucker (variant)
  "माचोद", // Motherfucker (shortened)
  "मादरजात", // Motherfucker's kind
  "तेरी माँ चोद", // Fuck your mother
  "तेरी माँ की चूत", // Your mother's vagina
  "एम् सी", // MC (phonetic abbreviation for madarchod)
  "चूतिये", // Idiot (vocative)
  "चूतियापा", // Idiocy
  "चूतियापंती", // Foolish behavior
  "चूत", // Vagina (extremely vulgar)
  "चूचीया", // Idiot (mishearing variant)
  "चूतड़", // Buttocks, sometimes used like idiot
  "चूतर", // Buttocks
  "चूत मारीके", // Born of a vagina (insult)
  "महा चूतिया", // Great idiot
  "असली चूतिया", // Real idiot
  "गांड", // Ass (vulgar)
  "गांद", // Ass (variant)
  "गंड", // Ass (variant)
  "गांडफत", // Scared (lit. ass ripped)
  "गांडू गिरी", // Asshole behavior
  "गांड मरा", // Get your ass fucked
  "गांड मरवा", // Get your ass fucked
  "तेरी गांड में", // In your ass
  "लोड़ा", // Penis (variant)
  "लवड़ा", // Penis (variant)
  "लंड चूस", // Dick sucker
  "लंड का बाल", // Pubic hair (implying worthless)
  "लौड़े", // Dicks (vocative)
  "मेरे लंड से", // From my dick (expressing contempt)
  "भोसड़ा", // Vagina (extremely vulgar)
  "भोसड़ीके", // Born of a vagina (extreme insult)
  "भोसडीके", // Born of a vagina (variant)
  "भोस्डिके", // Born of a vagina (variant)
  "भोसड़ी वाला", // Vagina person (insult)
  "भोसड़ी वाले", // Vagina people (insult)
  "तेरी माँ का भोसड़ा", // Your mother's vagina (extreme insult)
  "रंडीबाज़", // Womanizer
  "रंडी की औलाद", // Offspring of a prostitute
  "रंडीखाना", // Brothel
  "गश्ती", // Prostitute (Urdu/Punjabi)
  "बेसवा", // Prostitute
  "हरामीपना", // Act of being a bastard
  "हरामज़ादे", // Bastards (plural)
  "हरामखोर", // Freeloader (eats forbidden things)
  "हराम का", // Illegitimate / Forbidden
  "कमीने", // Scoundrels (plural)
  "कमीनी", // Female scoundrel
  "कमीनापन", // Scoundrel behavior
  "कुत्ती", // Bitch
  "कुतिया", // Bitch (variant)
  "कुत्ते की मौत", // Dog's death (miserable death)
  "कुत्ते का पिल्ला", // Puppy (insult)
  "गली का कुत्ता", // Street dog (worthless)
  "कुत्ते की औलाद", // Offspring of a dog
  "साले", // Bastards (plural insult)
  "साले कुत्ते", // Bastard dogs (compound)
  "छोड़", // Leave / Fuck (context-dependent)
  "चोदू", // Fucker / Idiot
  "चुदक्कड़", // Sex-obsessed person
  "चुदाई", // The act of fucking
  "चुदवाना", // Get someone fucked
  "चोदने", // To fuck
  "बकचोदी", // Bullshitting
  "बकैत", // Braggart / Bullshitter
  "बकवास", // Nonsense
  "झांट", // Pubic hair
  "झाँट", // Pubic hair (variant)
  "झाटू", // Pubic-haired (insult)
  "झाँटू", // Pubic-haired (variant)
  "टट्टे", // Testicles
  "टट्टी", // Shit / Feces
  "गू", // Shit / Dung
  "गोबर", // Cow dung / Shit
  "मूत", // Piss / Urine
  "मूत्र", // Urine (formal)
  "पेशाब", // Urine
  "मूठ", // Masturbation
  "मुठ्ठी", // Fist / Masturbation
  "मुठल", // Masturbator (insult)
  "हस्तमैथुन", // Masturbation (formal)
  "हिजड़ा", // Transgender/Eunuch (derogatory)
  "छक्का", // Transgender/Eunuch (derogatory)
  "नामर्द", // Impotent / Unmanly
  "नपुंसक", // Impotent (formal)
  "खुसरा", // Eunuch/Transgender (derogatory)
  "खस्सी", // Castrated (derogatory)
  "लौंडा", // Boy (derogatory, implying effeminate)
  "लौंडिया", // Girl (derogatory)
  "लौंडेबाज़", // Sodomite / Boy-lover (offensive)
  "भरवा", // Pimp (variant)
  "दलाल", // Pimp / Broker (insult)
  "दल्ला", // Pimp (variant)
  "बेशर्म", // Shameless
  "बेशर्मी", // Shamelessness
  "बेहया", // Shameless
  "नीच", // Low-life, despicable
  "पाजी", // Mean, low (Punjabi)
  "बदमाश", // Hooligan
  "बदमाशी", // Hooliganism
  "लुच्चा", // Lewd, debauched person
  "लफंगा", // Loafer, rogue
  "आवारा", // Vagrant, loafer
  "गधा", // Donkey (stupid)
  "गधी", // Female donkey (stupid)
  "उल्लू", // Owl (stupid)
  "उल्लू का पट्ठा", // Son of an owl (stupid)
  "बंदर", // Monkey
  "सूअर", // Pig (insult)
  "सुअर", // Pig (variant)
  "सूअर की औलाद", // Offspring of a pig
  "जानवर", // Animal (dehumanizing)
  "शैतान", // Devil
  "राक्षस", // Demon
  "चिचोरा", // Petty, shallow
  "चर्सी", // Drug addict (hashish)
  "गंजेड़ी", // Drug addict (marijuana)
  "बेवकूफ", // Idiot
  "मूर्ख", // Fool (formal)
  "पागल", // Mad, crazy
  "पगला", // Mad person (male)
  "पगली", // Mad person (female)
  "देख लूँगा", // I'll deal with you (threat)
  "औकात", // Status (used in challenges)
  "ढक्कन", // Lid (stupid)
  "पलटू", // Turncoat
  "चमचा", // Sycophant
  "भिखारी", // Beggar
  "कंजूस", // Miser
  "मक्खीचूस", // Extreme miser (lit. fly-sucker)
  "फट्टू", // Scaredy-cat
  "डरपोक", // Coward
  "कायर", // Coward
  "घटिया", // Low quality, despicable
  "खोटा", // Fake / Donkey
  "नालायक", // Worthless, undeserving
  "निकम्मा", // Useless
  "कामचोर", // Shirker
  "गंवार", // Rustic, uncivilized
  "जंगली", // Wild, uncivilized
  "फिट्टे मुह", // Shame on you (Punjabi)
  "मर जा", // Go die
  "जूता मारूं", // I'll hit you with a shoe
  "मादरचोद गांडू", // Motherfucker asshole
  "बहनचोद चूतिया", // Sister fucker idiot
  "साला कुत्ता कमीना", // Bastard dog scoundrel
  "हरामी कुत्ता", // Bastard dog
  "कमीने सूअर", // Scoundrel pig
  "रंडी की बेटी", // Daughter of a prostitute
  "भड़वे की औलाद", // Offspring of a pimp
  "भोसड़ी के कुत्ते", // Dog born of a vagina
  "चूतिया साला", // Idiot bastard
  "अबे साले", // Hey bastard
  "निकल लौड़े", // Get lost, dick
  "तेरी माँ का यार", // Your mother's lover
  "तेरी बहन का यार", // Your sister's lover
  "गंदी नाली के कीड़े", // Worm from a dirty drain
  "तेरे बाप का नौकर", // Your father's servant? (challenging)
  "बहन के टके", // Bhen ke takke (sister's... very offensive)
  "खाते", // Khatey (Testicles - regional)
  "पटाका", // Pataka (firecracker / attractive woman - objectifying)
  "माल", // Maal (goods - objectifying term for women)
  "आइटम", // Item (objectifying term for women)
  "टोपीबाज़", // Topibaaz (deceiver, trickster)
  "ढोंगी", // Dhongi (hypocrite, imposter)
  "पाखंडी", // Pakhandi (hypocrite)
  "घूसखोर", // Ghooskhor (bribe taker)
  "चार सौ बीस", // Char sau bees (420 - cheater)
  "डेढ़ शाणा", // Dedh shana (over-smart)
  "रांड", // Raand (Widow - derogatory use)
  "तेरी माँ की", // Teri maa ki... (start of insult)
  "बहन के लोड़े", // Behen ke lode (Sister's dick - offensive)

  // Additional Hindi profanity
  "bhosdika", // Variant of bhosdike
  "bsdk", // Abbreviation: bhosdike
  "chinal", // Promiscuous woman
  "chinaal", // Promiscuous woman (variant)
  "chut ka dhakkan", // Vagina's lid (useless)
  "fuddi", // Pussy (Punjabi-Hindi)
  "gand fad dunga", // I'll rip your ass
  "gaand mein danda", // Stick in your ass
  "jhand", // Screwed
  "jhandu", // Pubic-haired (insult)
  "lodu", // Dick (insult)
  "lodha", // Variant of lauda
  "mc bc", // Compound abbreviation
  "rand", // Variant of randi
  "randi rona", // Whore crying (whining)
  "tharki", // Pervert
  "tharak", // Lust (derogatory)
  "bhad mein ja", // Go to hell
  "chutad", // Buttocks (vulgar)
  "ganwar sala", // Uncivilized bastard
  "lulli", // Small penis (childish/insulting)
  "teri maa ki chut", // Your mother's vagina
  "tere muh mein", // In your mouth (vulgar implied)

  // Devanagari additions
  "बीएसडीके", // BSDK (abbreviation for bhosdike)
  "छिनाल", // Chinal (promiscuous woman)
  "फुद्दी", // Fuddi (pussy - Punjabi-Hindi)
  "झंडू", // Jhandu (pubic-haired insult)
  "लोडू", // Lodu (dick insult)
  "एमसी बीसी", // MC BC (compound abbreviation)
  "ठरकी", // Tharki (pervert)
  "लुल्ली", // Lulli (small penis)

  // More Urdu crossover profanity
  "haramzaadi", // Female bastard
  "kameeni", // Female scoundrel
  "kameenipana", // Scoundrel behavior (female)
  "sali randi", // Damn prostitute
  "sali kutti", // Damn bitch
  "haram ki paidaish", // Illegitimate birth
  "lanati", // Cursed one
  "laanati", // Cursed one (variant)
  "zaalim", // Cruel/oppressor
  "haiwan", // Beast (dehumanizing)
  "haiwaan", // Beast (variant)
  "khotey da puttar", // Son of a donkey (Punjabi-Urdu)
  "kanjar", // Low caste insult (very offensive)
  "kanjari", // Female variant of kanjar
  "kanjarkhana", // Brothel (extremely vulgar)
  "sulli", // Derogatory slur
  "mulli", // Derogatory slur
  "katua", // Derogatory slur (circumcised)
  "katwe", // Plural variant of katua

  // Punjabi-Hindi crossover
  "penchod", // Sister fucker (Punjabi)
  "painchod", // Sister fucker (Punjabi variant)
  "benchod", // Sister fucker (Punjabi variant)
  "bhen di phuddi", // Sister's pussy
  "teri pen di", // Your sister's... (Punjabi)
  "phuddu", // Pussy/coward (Punjabi)
  "phuddi chod", // Pussy fucker
  "gandasi", // Axe (threatening)
  "kutte de bachche", // Puppy (Punjabi insult)
  "tere pyo da", // Your father's (Punjabi)

  // Bhojpuri crossover
  "bhosdhari", // Variant of bhosdi
  "chodua", // Fucker (Bhojpuri)
  "chodni", // Fuckable (Bhojpuri vulgar)
  "harua", // Bastard (Bhojpuri)
  "maichod", // Motherfucker (Bhojpuri)
  "bur", // Vagina (Bhojpuri)
  "burwa", // Vagina (Bhojpuri variant)

  // More internet abbreviations
  "bsdk gandu", // Compound abbreviation insult
  "mkb", // Abbreviation: maa ki bhosda
  "mkc", // Abbreviation: maa ki chut
  "tkc", // Abbreviation: teri ki chut
  "gnd", // Abbreviation: gaand
  "bhn k lode", // Abbreviated compound: sister's dicks
  "tmkb", // Abbreviation: teri maa ka bhosda
  "tmkc", // Abbreviation: teri maa ki chut
  "lkb", // Abbreviation: lund ka baal

  // More transliterations and variants
  "choothiya", // Idiot (variant)
  "gandmasti", // Fooling around
  "gaandphad", // Ass-ripping
  "laudu", // Dick (variant of lodu)
  "laudey", // Dicks (variant)
  "bhosadpappu", // Vagina person (insult)
  "raandwa", // Male prostitute
  "randikhor", // Prostitute-eater (womanizer)
  "tharkey", // Pervert (variant)
  "jhaat ke baal", // Pubic hair (worthless)
  "mutthi maar", // Masturbate (fist hit)
  "chutiyagiri", // Acting like an idiot
  "gandugiri", // Acting like an asshole
  "teri aukat mein", // Within your status (challenging)
  "muh mein le", // Take it in your mouth
  "lund choosna", // Dick sucking
  "gaand chatna", // Ass licking
  "chut chatna", // Pussy licking
  "lund pe chadh", // Climb on the dick

  // More Devanagari additions
  "हरामज़ादी", // Haramzaadi (female bastard)
  "लानती", // Laanati (cursed one)
  "हैवान", // Haiwan (beast - dehumanizing)
  "कंजर", // Kanjar (low caste insult)
  "कंजरी", // Kanjari (female variant)
  "कंजरखाना", // Kanjarkhana (brothel)
  "पेनचोद", // Penchod (sister fucker - Punjabi)
  "फुद्दू", // Phuddu (pussy/coward)
  "भोसधरी", // Bhosdhari (variant of bhosdi)
  "चोदुआ", // Chodua (fucker - Bhojpuri)
  "मईचोद", // Maichod (motherfucker - Bhojpuri)
  "बुर", // Bur (vagina - Bhojpuri)
  "टीएमकेबी", // TMKB (teri maa ka bhosda)
  "टीएमकेसी", // TMKC (teri maa ki chut)
  "एमकेबी", // MKB (maa ki bhosda)
  "रांडवा", // Raandwa (male prostitute)
  "चूतियागिरी", // Chutiyagiri (acting like an idiot)
  "गांडूगिरी", // Gandugiri (acting like an asshole)
  "मुँह में ले", // Muh mein le (take it in your mouth)
  "लंड चूसना", // Lund choosna (dick sucking)
  "गांड चाटना", // Gaand chatna (ass licking)
  "चूत चाटना", // Chut chatna (pussy licking)

  // ========================================
  // === Marathi Crossover Profanity ===
  // ========================================
  "zavnya", // Fucker (Marathi)
  "madvya", // Idiot/fucker (Marathi)
  "bhadvya", // Son of a pimp (Marathi)
  "ghanta", // Dick/nothing (Marathi slang)
  "aaichi gand", // Mother's ass (Marathi)
  "aaicha gho", // Mother's... (Marathi insult)
  "aaila", // Mother (Marathi expletive)
  "aai zavadya", // Motherfucker (Marathi)
  "aaicha zhavla", // Fucked your mother (Marathi)
  "aaichya gavat", // In your mother's village (Marathi insult)
  "aaichi chut", // Mother's vagina (Marathi)
  "chutnya", // Idiot (Marathi)
  "randichya", // Son of a prostitute (Marathi)
  "bokya", // Nonsense talker (Marathi)
  "zhavnya", // Fucker (Marathi variant)
  "zhavadya", // Fucker (Marathi variant)
  "tuzha aaicha", // Your mother's (Marathi insult)
  "tuzi aai", // Your mother (Marathi start of insult)
  "halkat", // Wretched (Marathi)
  "gandya", // Asshole (Marathi)
  "lundya", // Dick (Marathi)
  "chhinaal", // Promiscuous woman (Marathi)
  "fataka", // Slap (Marathi threatening)
  "lavsya", // Dickhead (Marathi)
  "zhav", // Fuck (Marathi)
  "chiknya", // Pretty boy (Marathi derogatory)
  "tuzha bapacha", // Your father's (Marathi insult)
  "gavthi", // Rustic/uncouth (Marathi insult)
  "popat", // Parrot/fooled (Marathi slang)
  "supari", // Betel nut/contract kill (Marathi slang)

  // Marathi Devanagari
  "झवण्या", // Zavnya (fucker)
  "मद्व्या", // Madvya (idiot)
  "भाड्व्या", // Bhadvya (pimp's son)
  "घंटा", // Ghanta (dick/nothing)
  "आईची गांड", // Aaichi gand (mother's ass)
  "आईचा घो", // Aaicha gho (mother's...)
  "आईला", // Aaila (mother - expletive)
  "आई झवाड्या", // Aai zavadya (motherfucker)
  "रांडीच्या", // Randichya (son of prostitute)
  "हलकट", // Halkat (wretched)
  "गांड्या", // Gandya (asshole)
  "लवड्या", // Lavdya (dickhead)
  "झव", // Zhav (fuck)

  // ========================================
  // === Gujarati Crossover Profanity ===
  // ========================================
  "gando", // Mad/crazy (Gujarati)
  "gandi", // Mad (female, Gujarati)
  "bhosdo", // Vagina-born (Gujarati)
  "chodyu", // Fucked (Gujarati)
  "ghelu", // Mad/crazy (Gujarati)
  "ghelchhodyu", // Mad fucker (Gujarati)
  "lodo", // Dick (Gujarati)
  "randva", // Male prostitute (Gujarati)
  "fattu", // Coward (Gujarati)
  "bhungro", // Asshole (Gujarati)
  "chutyo", // Idiot (Gujarati)
  "tari maa ne", // Your mother's (Gujarati insult)
  "tari ben ne", // Your sister's (Gujarati insult)
  "sala gando", // Crazy bastard (Gujarati)
  "gandhyu", // Smelly (Gujarati insult)
  "bhadvo", // Pimp (Gujarati)
  "randno", // Prostitute's (Gujarati)
  "lukhhu", // Lewd (Gujarati)
  "bakho", // Idiot (Gujarati)
  "maa no bhosdo", // Mother's vagina (Gujarati)
  "gand maravi", // Get your ass fucked (Gujarati)

  // ========================================
  // === Bhojpuri/Bihari Expanded ===
  // ========================================
  "bur chod", // Vagina fucker (Bhojpuri)
  "burchod", // Vagina fucker (Bhojpuri compound)
  "bhosarwa", // Vagina-born (Bhojpuri)
  "chodwa", // Fucker (Bhojpuri variant)
  "randi ke baccha", // Son of a prostitute (Bhojpuri)
  "harua sala", // Bastard (Bhojpuri compound)
  "maichodi", // Motherfucker (Bhojpuri variant)
  "chodar", // Fucker (Bhojpuri)
  "bur ke baal", // Pubic hair (Bhojpuri vulgar)
  "gand faad", // Ass ripper (Bhojpuri)
  "lund hilao", // Jerk off (Bhojpuri)
  "lota", // Vessel/penis (Bhojpuri slang)
  "bur mein", // In the vagina (Bhojpuri vulgar)
  "tatte choos", // Suck testicles (Bhojpuri)
  "aaba ka lund", // Father's dick (Bhojpuri)
  "maai chod", // Motherfucker (Bhojpuri variant)
  "gaand ke keede", // Worms from ass (Bhojpuri insult)
  "bhokwa", // Nonsense talker (Bhojpuri)
  "chuttar", // Buttocks (Bhojpuri vulgar)

  // ========================================
  // === Rajasthani Dialect Profanity ===
  // ========================================
  "bhand", // Drunk/jester (Rajasthani insult)
  "bhanda", // Drunkard (Rajasthani)
  "gotiya", // Testicles (Rajasthani)
  "randka", // Prostitute's (Rajasthani)
  "chod diyo", // Fucked (Rajasthani past tense)
  "lund ka pakoda", // Dick fritter (Rajasthani vulgar insult)
  "ghani gandi", // Very dirty (Rajasthani)
  "bawli gaand", // Crazy ass (Rajasthani)
  "charba", // Fat/greasy (Rajasthani insult)
  "dhila", // Loose/useless (Rajasthani)
  "khasam", // Husband/pimp (Rajasthani derogatory)
  "lugaai", // Woman (Rajasthani derogatory)
  "chod de re", // Fuck it (Rajasthani)
  "gaand ghis", // Ass grinder (Rajasthani sycophant)
  "jhaal", // Irritating/spicy (Rajasthani insult)

  // ========================================
  // === Haryanvi Dialect Profanity ===
  // ========================================
  "tau ke tatte", // Uncle's testicles (Haryanvi)
  "teri bhen ka bhosda", // Your sister's vagina (Haryanvi)
  "ghooghat mein lund", // Dick under veil (Haryanvi vulgar)
  "chod de be", // Fuck it (Haryanvi)
  "tere baap ki gaand", // Your father's ass (Haryanvi)
  "teri taai ka", // Your aunt's (Haryanvi insult)
  "gaand tod dunga", // I'll break your ass (Haryanvi threat)
  "bhadak", // Anger/threatening (Haryanvi)
  "chod ke rakh dunga", // I'll fuck you up (Haryanvi)
  "ghochhi", // Vagina (Haryanvi vulgar)
  "lund pe dhokla", // Dick cake (Haryanvi absurd insult)
  "hadd harami", // Ultimate bastard (Haryanvi)
  "chhinar", // Promiscuous woman (Haryanvi)
  "bhains ki aankh", // Buffalo's eye (Haryanvi expletive)
  "tatti kha le", // Eat shit (Haryanvi)
  "kutte ki jaat", // Dog's caste (Haryanvi insult)
  "lathait", // Violent thug (Haryanvi)
  "bawla", // Crazy (Haryanvi)
  "ghaasguss", // Worthless (Haryanvi)

  // ========================================
  // === Remaining Devanagari for Romanized ===
  // ========================================
  "बखोड़", // Bakchod variant
  "बकलौड़ा", // Baklauda (bullshitter)
  "चिनाल", // Chinal (promiscuous)
  "चूत का ढक्कन", // Chut ka dhakkan (vagina's lid)
  "गांड फाड़ दूंगा", // Gand fad dunga (I'll rip your ass)
  "गांड में डंडा", // Gaand mein danda (stick in your ass)
  "झंड", // Jhand (screwed)
  "रंडीरोना", // Randi rona (whining)
  "भड़ में जा", // Bhad mein ja (go to hell)
  "गंवार साला", // Ganwar sala (uncivilized bastard)
  "तेरे मुँह में", // Tere muh mein (in your mouth)
  "सुल्ली", // Sulli (derogatory slur)
  "मुल्ली", // Mulli (derogatory slur)
  "कटुआ", // Katua (derogatory slur)
  "जालिम", // Zaalim (cruel)
  "खोटे दा पुत्तर", // Khotey da puttar (son of donkey)
  "पेनचोड", // Penchod (Punjabi sister fucker)
  "तेरे प्यो दा", // Tere pyo da (your father's)
  "बुरवा", // Burwa (vagina - Bhojpuri)
  "चोदनी", // Chodni (fuckable - Bhojpuri)
  "हरुआ", // Harua (bastard - Bhojpuri)
  "गांडू बच्चा", // Gandu bachcha (asshole kid)
  "लंड हिलाना", // Lund hilana (masturbate)
  "तेरी औकात में", // Teri aukat mein (within your status)
  "लंड पे चढ़", // Lund pe chadh (climb on dick)
  "रंडीखोर", // Randikhor (womanizer)
  "भोसडपपू", // Bhosadpappu (vagina person)

  // ========================================
  // === Internet/Texting Hindi Slang ===
  // ========================================
  "bc sale", // BC + sale compound
  "mc sala", // MC + sala compound
  "bsdk saale", // BSDK + saale compound
  "gandmein", // In the ass (texting)
  "chutiyape", // Idiocy (texting variant)
  "gandu log", // Asshole people
  "chutiye log", // Idiot people
  "bkchod", // Abbreviation for bakchod
  "bkchdi", // Abbreviation for bakchodi
  "lndbr", // Abbreviation for lundbaz
  "chtya", // Abbreviation for chutiya
  "gndu", // Abbreviation for gandu
  "bhsdka", // Abbreviation variant for bhosdika
  "mkbsdk", // Compound: maa ka bhosda + bhosdike
  "lnd", // Abbreviation for lund
  "chdai", // Abbreviation for chudai
  "ttharak", // Tharak variant

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "chutiya madarchod", // Idiot motherfucker
  "gandu bhosdi ke", // Asshole vagina-born
  "behenchod harami", // Sister fucker bastard
  "madarchod kutta", // Motherfucker dog
  "randi ka beta", // Son of a prostitute
  "bhadwe ka bachcha", // Pimp's child
  "jhaat ka baal sala", // Pubic hair bastard
  "tatti khane wala", // Shit eater
  "gaand ke baal", // Ass hair
  "lund ke tope", // Glans penis (insult)
  "bhosda faad", // Rip the vagina
  "gaand mein lund", // Dick in ass
  "chut mein ungli", // Finger in vagina
  "tere muh mein mera lund", // My dick in your mouth
  "teri maa ko chodu", // I'll fuck your mother
  "teri behen ko chodu", // I'll fuck your sister
  "sala bewda", // Damn drunkard
  "chodu bhagat", // Idiot devotee (ironic insult)
  "lund khajoor", // Dick date-palm (worthless)
  "gaand ka andha", // Ass-blind (oblivious idiot)
  "chut ka chamcha", // Vagina's sycophant
  "tatte ka saudagar", // Testicle merchant
  "maa kasam chutiya", // Swear on mother - idiot
  "chut mein bambu", // Bamboo in vagina (extreme insult)
  "harami ki nasal", // Bastard's breed
  "suar ki nasal", // Pig's breed
  "gandmein ghus ja", // Go into the ass
  "lund pe rakh", // Keep it on the dick (indifference)

  // ========================================
  // === Leetspeak / Evasion Spellings ===
  // ========================================
  "bh3nchod", // Sister fucker (evasion)
  "m@darchod", // Motherfucker (evasion)
  "chut!ya", // Idiot (evasion)
  "l@uda", // Penis (evasion)
  "bh0sdike", // Born of vagina (evasion)
  "r@ndi", // Prostitute (evasion)
  "ch0d", // Fuck (evasion)
  "ch00tiya", // Idiot (evasion)
  "lun0", // Penis (evasion)
  "g4ndu", // Asshole (evasion)
  "m4darchod", // Motherfucker (evasion)
  "beh3nchod", // Sister fucker (evasion)
  "bhench0d", // Sister fucker (evasion)
  "madarc#od", // Motherfucker (evasion)
  "ch*tiya", // Idiot (evasion)
  "bh*sdike", // Born of vagina (evasion)
  "g*ndu", // Asshole (evasion)
  "l*nd", // Penis (evasion)
  "r*ndi", // Prostitute (evasion)
  "chut1ya", // Idiot (evasion)
  "madar$hod", // Motherfucker (evasion)
  "behen$hod", // Sister fucker (evasion)
  "bhenchd", // Sister fucker (evasion shorthand)
  "madarchd", // Motherfucker (evasion shorthand)
  "gaandfaad", // Ass-ripper (evasion)
  "bh0sda", // Vagina (evasion)
  "ch00t", // Vagina (evasion)
  "l@und", // Penis (evasion)
  "r@nd1", // Prostitute (evasion)
  "ch0du", // Fucker (evasion)
  "chuut", // Vagina (evasion)
  "lundd", // Penis (evasion)
  "laudaa", // Penis (evasion)
  "bhosadike", // Born of vagina (evasion)
  "chutiyee", // Idiot (evasion)
  "randii", // Prostitute (evasion)
  "bh3nch0d", // Sister fucker (double evasion)
  "m@d@rchod", // Motherfucker (double evasion)

  // ========================================
  // === Hinglish (Hindi-English Mix) Profanity ===
  // ========================================
  "bloody benchod", // Bloody sister fucker
  "fucking chutiya", // Fucking idiot
  "bloody madarchod", // Bloody motherfucker
  "fucking gandu", // Fucking asshole
  "damn harami", // Damn bastard
  "bloody randi", // Bloody prostitute
  "bloody kamina", // Bloody scoundrel
  "bloody saala", // Bloody bastard
  "fucking bhosdi ke", // Fucking vagina-born
  "shut up chutiye", // Shut up idiot
  "fuck off behenchod", // Fuck off sister fucker
  "asshole gandu", // Asshole asshole (Hinglish)
  "bloody kutta", // Bloody dog
  "mother chod sala", // Motherfucker bastard (Hinglish)
  "bastard harami", // Bastard bastard (Hinglish)
  "bitch kutti", // Bitch bitch (Hinglish)
  "fucking lauda", // Fucking penis
  "bloody bhosdike", // Bloody vagina-born
  "damn chutiyapa", // Damn idiocy
  "go to hell behenchod", // Go to hell sister fucker
  "son of a randi", // Son of a prostitute (Hinglish)
  "bloody hijda", // Bloody eunuch (Hinglish)
  "shut the fuck up chutiye", // Shut up idiot (Hinglish)
  "die madarchod", // Die motherfucker (Hinglish)
  "piece of shit chutiya", // Piece of shit idiot (Hinglish)
  "stupid chutiya", // Stupid idiot (Hinglish)
  "idiot gandu", // Idiot asshole (Hinglish)
  "loser chutiya", // Loser idiot (Hinglish)
  "useless gandu", // Useless asshole (Hinglish)
  "dumbass chutiye", // Dumbass idiot (Hinglish)
  "nonsense bakchodi", // Nonsense bullshitting (Hinglish)
  "pathetic chutiya", // Pathetic idiot (Hinglish)
  "disgusting tharki", // Disgusting pervert (Hinglish)
  "ugly randi", // Ugly prostitute (Hinglish)
  "cheap randi", // Cheap prostitute (Hinglish)
  "dirty gandu", // Dirty asshole (Hinglish)
  "bloody suar", // Bloody pig (Hinglish)
  "fucking gadha", // Fucking donkey (Hinglish)
  "bitch randve ki", // Bitch from a womanizer (Hinglish)

  // ========================================
  // === More Regional Dialect Crossover ===
  // ========================================
  // Awadhi dialect
  "choda ke aulad", // Offspring of a fucker (Awadhi)
  "bur chato", // Vagina licker (Awadhi)
  "gaand ghusao", // Shove in the ass (Awadhi)
  "launda chod", // Boy fucker (Awadhi)
  "randi ka baccha", // Son of a prostitute (Awadhi variant)
  "maai ke bhosra", // Mother's vagina (Awadhi)
  "jhantu sala awadhi", // Pubic-haired bastard (Awadhi)

  // Chhattisgarhi dialect
  "chod diye re", // Fucked it (Chhattisgarhi)
  "bhokwa sala", // Nonsense-talker bastard (Chhattisgarhi)
  "chuttar maaro", // Hit the buttocks (Chhattisgarhi)
  "gand ke keera", // Worm of the ass (Chhattisgarhi)
  "bura mein ghus", // Get into the vagina (Chhattisgarhi)
  "launda bada harami", // Boy is a big bastard (Chhattisgarhi)

  // Maithili dialect
  "chhodh de be", // Leave it / fuck it (Maithili)
  "kaniya chod", // Wife fucker (Maithili)
  "gaand mein laat", // Kick in the ass (Maithili)
  "bur chat", // Vagina lick (Maithili)
  "chodhan", // Fucking (Maithili)
  "haramai ka beta", // Son of a bastard (Maithili)
  "randi ka poot", // Son of a prostitute (Maithili)

  // Dogri/Kashmiri crossover
  "chodd de yaar", // Fuck it friend (Dogri)
  "gaand fad dunga teri", // I'll rip your ass (Dogri)
  "tatti khana tu", // You eat shit (Dogri)
  "kutta kamina sala", // Dog scoundrel bastard (Dogri)
  "lund di topi", // Glans penis (Dogri)
  "phuddi chod saale", // Pussy fucker bastard (Dogri)

  // Konkani crossover
  "ghand", // Ass (Konkani)
  "ghand mharo", // Hit the ass (Konkani)
  "yede", // Idiot (Konkani)
  "cheddya", // Boy (derogatory, Konkani)
  "rand che pooth", // Son of a whore (Konkani)
  "soor", // Pig (Konkani insult)

  // Sindhi crossover
  "bhenchoro", // Sister fucker (Sindhi)
  "madarchoro", // Motherfucker (Sindhi)
  "haram jo bachho", // Bastard child (Sindhi)
  "kuttey jo bachho", // Son of a dog (Sindhi)
  "randi jo putar", // Son of a prostitute (Sindhi)
  "gadha kameena", // Donkey scoundrel (Sindhi)
  "choru", // Fucker (Sindhi)

  // ========================================
  // === More Compound Insults Extended ===
  // ========================================
  "chutiya number one", // Number one idiot
  "gandu number one", // Number one asshole
  "bhosdi ke chutiye", // Vagina-born idiot
  "madarchod bhosdi ke", // Motherfucker vagina-born
  "teri maa ka bhosda faad dunga", // I'll rip your mother's vagina
  "teri behen ka bhosda", // Your sister's vagina
  "tere baap ki gaand faad dunga", // I'll rip your father's ass
  "teri maa ko randi banaunga", // I'll make your mother a prostitute
  "tere muh mein mera tatta", // My testicle in your mouth
  "tere baap ka lund", // Your father's dick
  "teri maa ki gaand", // Your mother's ass
  "teri behen ki chut faad dunga", // I'll rip your sister's vagina
  "gaand mein baans dal dunga", // I'll shove bamboo in your ass
  "tatte tod dunga tere", // I'll break your testicles
  "teri maa ka choosna", // Suck your mother's
  "lund choosi ka", // Dick sucker
  "gaand mein ghusa ja", // Go into the ass
  "tere muh mein mera lauda", // My penis in your mouth
  "chut ka chamcha sala", // Vagina's sycophant bastard
  "lund pe baitha", // Sit on the dick
  "gaand ka keeda sala", // Worm of the ass bastard
  "jhaat ke baal bhi nahi", // Not even a pubic hair (worthless)
  "kutte ki maut marega", // You'll die a dog's death
  "suar ke muh wala", // Pig-faced one
  "chutiya sala madarchod gandu", // Idiot bastard motherfucker asshole
  "bhosdi ke randi ke bachche", // Vagina-born son of a prostitute
  "haramzada kutta kamina gandu", // Bastard dog scoundrel asshole
  "teri maa ki chut mein danda", // Stick in your mother's vagina
  "gaand se dum nikal", // Pull tail from ass (useless)
  "jhaat barabar bhi nahi", // Not even worth a pubic hair
  "tatti ka tukda", // Piece of shit
  "gobar ka keeda", // Worm of cow dung
  "suar ki tatti", // Pig's shit

  // ========================================
  // === More Devanagari Extended ===
  // ========================================
  "ब्लडी बहनचोद", // Bloody behenchod (Hinglish)
  "फकिंग चूतिया", // Fucking chutiya (Hinglish)
  "ब्लडी मादरचोद", // Bloody madarchod (Hinglish)
  "फकिंग गांडू", // Fucking gandu (Hinglish)
  "तेरी माँ को रंडी बनाऊंगा", // I'll make your mother a prostitute
  "तेरी माँ का भोसड़ा फाड़ दूंगा", // I'll rip your mother's vagina
  "तेरी बहन का भोसड़ा", // Your sister's vagina
  "तेरे बाप की गांड फाड़ दूंगा", // I'll rip your father's ass
  "तेरे बाप का लंड", // Your father's dick
  "तेरी माँ की गांड", // Your mother's ass
  "गांड में बांस डाल दूंगा", // I'll shove bamboo in your ass
  "टट्टे तोड़ दूंगा तेरे", // I'll break your testicles
  "लंड चूसी का", // Dick sucker
  "गांड में घुस जा", // Go into the ass
  "गांड का कीड़ा", // Worm of the ass
  "झाँट के बाल भी नहीं", // Not even a pubic hair (worthless)
  "कुत्ते की मौत मरेगा", // You'll die a dog's death
  "सूअर के मुँह वाला", // Pig-faced one
  "टट्टी का टुकड़ा", // Piece of shit
  "गोबर का कीड़ा", // Worm of cow dung
  "सूअर की टट्टी", // Pig's shit
  "चूत में बम्बू", // Bamboo in vagina
  "गांड फाटू गांडू", // Ass-ripped asshole
  "भड़वे का नौकर", // Pimp's servant
  "रंडी बाज़ार", // Prostitute market
  "लौड़े का बाल", // Dick's hair (worthless)
  "चूत की पैदाइश", // Birth of a vagina
  "गांड का अंधा", // Ass-blind (totally oblivious)

  // ========================================
  // === More Internet/Gaming Slang ===
  // ========================================
  "mc bc lodu", // MC BC Lodu compound
  "bsdk chutiye nikal", // BSDK idiot get out
  "gandu sala mc", // Asshole bastard MC
  "tmkc bsdk", // TMKC BSDK compound
  "bc mc tmkc tmkb", // All abbreviations compound
  "nikal lavde pehli fursat mein", // Get out dick at first opportunity (meme)
  "aukad mein reh chutiye", // Stay in your place idiot
  "apni maa chuda", // Get your mother fucked
  "teri maa ka chutiya", // Your mother's idiot
  "teri maa randi hai", // Your mother is a prostitute

  // ========================================
  // === Assamese Crossover Profanity ===
  // ========================================
  "kenekoi", // How (used dismissively, Assamese)
  "bor soor", // Big pig (Assamese)
  "puti mara", // Ass fucker (Assamese)
  "bhot gandu", // Very asshole (Assamese-Hindi mix)
  "betichod", // Daughter fucker (Assamese crossover)
  "huila", // Crazy (Assamese derogatory)
  "dangor soor", // Big pig (Assamese variant)
  "boga puti", // White ass (Assamese vulgar)
  "bhondami", // Nonsense/bullshit (Assamese)
  "bondor soor", // Monkey pig (Assamese compound)
  "sali besya", // Damn prostitute (Assamese)
  "maa sudi", // Motherfucker (Assamese variant)

  // ========================================
  // === More Evasion Variants ===
  // ========================================
  "bhnchd gandu", // Abbreviation compound
  "behen ch0d", // Sister fucker evasion
  "ch00t1ya", // Idiot evasion
  "maad@rchod", // Motherfucker evasion
  "bhos@dike", // Born of vagina evasion
  "l@ude", // Dicks evasion

  // ========================================
  // === Extended Gaali - Devanagari Script ===
  // ========================================
  "भोसड़ीवाला", // One with a loose vagina
  "भोसड़ीवाली", // Female form of above
  "लौड़ी", // Female genitalia (vulgar)
  "लंडूरा", // Dick-like person
  "गांड का ढक्कन", // Ass's lid (idiot)
  "रंडवा", // Male prostitute
  "छिनार", // Adulteress
  "गांडू मल", // Asshole filth
  "तवायफ़", // Courtesan/prostitute
  "वेश्या", // Prostitute (formal)
  "रखैल", // Kept woman/mistress
  "दल्ली", // Pimp (female)
  "लफंगी", // Female loafer/rogue
  "लुच्ची", // Lecherous (female)
  "चालू", // Cunning/promiscuous
  "नटखट", // Naughty (used derogatorily)
  "बदतमीज़", // Ill-mannered
  "बेग़ैरत", // Shameless (Urdu influence)
  "निर्लज्ज", // Shameless (formal)
  "निकम्मी", // Useless (female)
  "कमज़ात", // Low-born
  "नीचे की पैदाइश", // Born of lowly origin
  "बदज़ात", // Evil-natured
  "चमार", // Caste-based slur (leatherworker)
  "भंगी", // Caste-based slur (sweeper)
  "चूहड़ा", // Caste-based slur (sweeper)
  "डोम", // Caste-based slur (funeral workers)
  "धोबी", // Caste-based slur (washerman, used derogatorily)
  "चूड़ीवाला", // Bangle-seller (effeminate insult)
  "हिजड़ापन", // Transgenderism (used as insult)
  "गधे", // Donkeys (insult)
  "उल्लू के पट्ठे", // Owl's offspring (plural)
  "भैंस", // Buffalo (insult, usually at women)
  "भैंसा", // Male buffalo (insult)
  "सूअरनी", // Female pig (insult)
  "बिल्ला", // Tom cat (sneaky person)
  "बंदरिया", // Female monkey
  "लोभी", // Greedy
  "ठग", // Cheat/thief
  "लुटेरा", // Robber
  "डाकू", // Bandit
  "गुंडा", // Thug
  "गुंडागर्दी", // Thuggery
  "टपोरी", // Street ruffian
  "लुच्चड़", // Lecherous (variant)
  "अंडबाज़", // Testicle player (vulgar)
  "टट्टू", // Pony (weak person)
  "रांड की", // Of a prostitute
  "बेवड़ा", // Drunkard
  "बेवड़ी", // Female drunkard
  "नशेड़ी", // Drug addict
  "चरसी", // Hash smoker
  "गांजेड़ी", // Marijuana addict
  "अफ़ीमची", // Opium addict
  "भड़वाग़ीरी", // Pimping
  "चमगादड़", // Bat (insult)
  "सांड", // Bull (uncontrolled person)
  "गूदड़", // Rag (worthless)
  "पागलखाने का", // From the madhouse
  "पागल कुत्ता", // Mad dog
  "चुटिया कटा", // Circumcised idiot (offensive)
  "मुल्ला", // Muslim cleric (used as slur)
  "पंडित", // Brahmin (used sarcastically)
  "बामन", // Brahmin (derogatory form)
  "ठाकुर साला", // Thakur bastard (caste insult)
  "बनिया", // Merchant caste (used derogatorily)
  "चमारी", // Female caste slur
  "झाँट के बाल", // Pubic hair strands
  "लंड के बाल", // Dick hair (worthless)
  "चूत के बाल", // Vaginal hair (insult)
  "मूत पी", // Drink piss
  "मूतने जा", // Go urinate (dismissive)
  "हगने जा", // Go defecate (dismissive)
  "पाद", // Fart
  "पादू", // One who farts
  "गोबर गणेश", // Cow dung Ganesh (stupid person)
  "चूहा", // Rat (coward)
  "बिच्छू", // Scorpion (treacherous)
  "साँप", // Snake (treacherous)
  "केंचुआ", // Earthworm (spineless)
  "जोंक", // Leech (parasite)
  "गिद्ध", // Vulture (opportunistic)
  "कौआ", // Crow (bad omen/ugly)

  // ========================================
  // === Extended Romanized Hindi Gaali ===
  // ========================================
  "bhosdiwali", // Female form
  "laudi", // Female genitalia (vulgar)
  "landura", // Dick-like person
  "laude ka baal", // Dick's pubic hair (worthless)
  "gaand ka dhakkan", // Ass's lid (idiot)
  "randwa", // Male prostitute
  "chhinal", // Adulteress (variant)
  "tawaif", // Courtesan/prostitute
  "veshya", // Prostitute (formal)
  "rakhail", // Kept woman
  "dalli", // Pimp (female)
  "lafangi", // Female loafer/rogue
  "luchcha", // Lecherous
  "luchchi", // Lecherous (female)
  "badtameez", // Ill-mannered
  "begairat", // Shameless
  "nirlajj", // Shameless (formal)
  "nikammi", // Useless (female)
  "kamzaat", // Low-born
  "neech ki paidaish", // Born of lowly origin
  "badzaat", // Evil-natured
  "ullu ke patthe", // Owl's offspring (plural)
  "bhains", // Buffalo
  "bhainsa", // Male buffalo
  "suarni", // Female pig
  "makkhi choos", // Fly-sucker (miser)
  "lobhi", // Greedy
  "thug", // Cheat
  "lutera", // Robber
  "daku", // Bandit
  "gunda", // Thug
  "gundagardi", // Thuggery
  "tapori", // Street ruffian
  "luchchar", // Lecherous (variant)
  "andbaaz", // Testicle player
  "tattu", // Pony (weak person)
  "paakhandi", // Hypocrite (variant)
  "raand ki", // Of a prostitute
  "bewda", // Drunkard (male)
  "bewdi", // Drunkard (female)
  "nashedi", // Drug addict
  "gaanjedi", // Marijuana addict
  "afimchi", // Opium addict
  "bhadwagiri", // Pimping
  "saand", // Bull (uncontrolled)
  "pagal kutta", // Mad dog
  "mulla", // Muslim cleric (slur)
  "baman", // Brahmin (derogatory)
  "jhaant ke baal", // Pubic hair strands
  "land ke baal", // Dick hair (worthless)
  "chut ke baal", // Vaginal hair
  "moot pi", // Drink piss
  "hagney ja", // Go defecate
  "paad", // Fart
  "paadu", // Farter
  "gobar", // Cow dung
  "gobar ganesh", // Cow dung Ganesh (stupid)
  "chuha", // Rat (coward)
  "bichhu", // Scorpion
  "saanp", // Snake
  "kenchua", // Earthworm (spineless)
  "jonk", // Leech
  "giddh", // Vulture

  // ========================================
  // === Extended Compound Insults (Romanized) ===
  // ========================================
  "madarchod kamina", // Motherfucker scoundrel
  "chutiya kamina", // Idiot scoundrel
  "gandu harami", // Asshole bastard
  "bhosdi ke gandu", // Vagina-born asshole
  "laude ke baal chutiye", // Dick-hair idiot
  "madarchod bhosdike", // Motherfucker vagina-born
  "behenchod bhosdike", // Sisterfucker vagina-born
  "randi ka baccha chutiya", // Prostitute's child idiot
  "haramzadi randi", // Bastard prostitute (female)
  "kamina kutta", // Scoundrel dog
  "gandu lauda", // Asshole dick
  "chutiya sala harami", // Idiot bastard (compound)
  "madarchod gandu kamina", // Motherfucker asshole scoundrel
  "behenchod laude", // Sisterfucker dicks
  "teri maa ki chut mein keeda", // Worm in your mother's vagina
  "teri behen ki gaand mein", // In your sister's ass
  "baap ka lauda choos", // Suck your father's dick
  "maa ko bech de randi", // Sell your mother prostitute
  "behen ko randi bana", // Make your sister a prostitute
  "teri aukat chutiye", // Your status idiot
  "aukaat mein reh", // Stay in your place
  "teri maa ka bharosa", // Your mother's trust (ironic insult)
  "teri maa gaand marae", // Your mother gets ass-fucked
  "lund pe charh ja", // Climb on the dick
  "gaand marwa le", // Get your ass fucked
  "chut marwa le", // Get your vagina fucked
  "lund chooste reh", // Keep sucking dick
  "gaand mein ungli", // Finger in ass
  "chut mein lund", // Dick in vagina
  "tatte masle", // Crush the testicles
  "tatte tod de", // Break the testicles
  "lund kaat dunga", // I'll cut your dick
  "chut faad dunga", // I'll rip your vagina
  "gaand faad dunga", // I'll rip your ass
  "maa chod dunga", // I'll fuck your mother
  "behen chod dunga", // I'll fuck your sister
  "biwi chod dunga", // I'll fuck your wife
  "baap chod dunga", // I'll fuck your father
  "khandaan chod dunga", // I'll fuck your lineage
  "khandan ki izzat le lunga", // I'll take your family's honor
  "teri maa ka bharwa", // Your mother's pimp
  "teri behen ka dalla", // Your sister's pimp
  "teri maa mujhe randi lagti hai", // Your mother seems like a prostitute to me
  "sab ki randi", // Everyone's prostitute
  "naukrani ki tarah", // Like a servant (demeaning)
  "bazaaru aurat", // Market woman (prostitute)
  "sadak chaap", // Street-level (worthless)
  "naali ka keeda", // Gutter worm
  "gutter mein pad", // Fall in the gutter

  // ========================================
  // === Bhojpuri Crossover Profanity ===
  // ========================================
  "भोकवा", // Idiot (Bhojpuri)
  "bokwa", // Idiot (Bhojpuri romanized)
  "छौड़ी", // Girl (derogatory, Bhojpuri)
  "chhaudi", // Girl (derogatory, Bhojpuri romanized)
  "रंडी रोना", // Prostitute crying (Bhojpuri)
  "छिनरा", // Male adulteress (Bhojpuri)
  "chhinra", // Male adulteress (Bhojpuri, romanized)
  "भड़वागिरी", // Pimping (Bhojpuri)
  "हरामज़दगी", // Bastardry (Bhojpuri)
  "haramzadgi", // Bastardry (Bhojpuri romanized)
  "baklol", // Talkative idiot (Bhojpuri romanized)
  "ढोसू", // Stupid (Bhojpuri)
  "dhosu", // Stupid (Bhojpuri romanized)
  "पगहा", // Rope for tying cattle (Bhojpuri insult)
  "pagha", // Rope insult (Bhojpuri romanized)
  "बेकूफ़", // Stupid (Bhojpuri)
  "bekoof", // Stupid (Bhojpuri romanized)
  "लतखोर", // Drunkard (Bhojpuri)
  "latkhor", // Drunkard (Bhojpuri romanized)
  "भँउव़ा", // Idiot (Bhojpuri)
  "bhauwa", // Idiot (Bhojpuri romanized)
  "गमार", // Bumpkin (Bhojpuri)
  "gamaar", // Bumpkin (Bhojpuri romanized)
  "भुक्कड़", // Glutton (Bhojpuri)
  "bhukkad", // Glutton (Bhojpuri romanized)
  "चोदवा", // Fucker (Bhojpuri)
  "फदियल", // Drunkard/useless (Bhojpuri)
  "fadiyal", // Drunkard/useless (Bhojpuri romanized)
  "मटरू", // Simpleton (Bhojpuri)
  "matru", // Simpleton (Bhojpuri romanized)
  "लोटा", // Pot (worthless, Bhojpuri)
  "ठरकीपन", // Lustfulness
  "tharkipan", // Lustfulness (romanized)
  "चिरकुट", // Worthless/small-time
  "chirkut", // Worthless/small-time (romanized)
  "चपरी", // Low-class person
  "छपरी", // Low-class person (variant)
  "chhapri", // Low-class person (romanized variant)
  "गवार", // Bumpkin/uncivilized
  "gawaar", // Bumpkin/uncivilized (romanized)

  // ========================================
  // === Marathi Crossover Profanity ===
  // ========================================
  "झवाड्या", // Fucker (Marathi)
  "भाड्या", // Pimp/fucker (Marathi)
  "bhadya", // Pimp/fucker (Marathi romanized)
  "आईझवाड्या", // Motherfucker (Marathi)
  "aaizhavadya", // Motherfucker (Marathi romanized)
  "बहिणीचोद", // Sisterfucker (Marathi)
  "bahinichod", // Sisterfucker (Marathi romanized)
  "गांडीत घे", // Take it in the ass (Marathi)
  "gandit ghe", // Take it in the ass (Marathi romanized)
  "चुत्या", // Idiot (Marathi)
  "बोकड", // Goat (Marathi insult)
  "bokad", // Goat (Marathi insult romanized)
  "रांडेचा", // Son of a prostitute (Marathi)
  "randecha", // Son of a prostitute (Marathi romanized)
  "मावशीच्या", // Aunt's (Marathi, start of insult)
  "mavshichya", // Aunt's (Marathi romanized)
  "तुझ्या आईला", // To your mother (Marathi insult)
  "tujhya aaila", // To your mother (Marathi romanized)
  "तुझी आई गं", // Your mother oh (Marathi insult)
  "tujhi aai ga", // Your mother (Marathi romanized)
  "बायकोला झव", // Fuck the wife (Marathi)
  "baykola zhav", // Fuck the wife (Marathi romanized)
  "चावट", // Lustful/pervert (Marathi)
  "chavat", // Lustful/pervert (Marathi romanized)
  "पोरकट", // Childish/immature (Marathi insult)
  "porkat", // Childish (Marathi romanized)
  "पोरगट", // Childish (Marathi variant)
  "porgat", // Childish (Marathi romanized)
  "हलकट कमीना", // Scoundrel scoundrel (Marathi compound)
  "halkat kamina", // Scoundrel (Marathi romanized)
  "तेरी गांड झव", // Fuck your ass (Marathi-Hindi mix)
  "teri gaand zhav", // Fuck your ass (Marathi-Hindi romanized)

  // ========================================
  // === Gujarati Crossover Profanity ===
  // ========================================
  "ઘાંટી ચોદ", // Throat fucker (Gujarati)
  "ghanti chod", // Throat fucker (Gujarati romanized)
  "ભોસ", // Vagina (Gujarati)
  "bhos", // Vagina (Gujarati romanized)
  "ચુતિયો", // Idiot (Gujarati)
  "chutiyo", // Idiot (Gujarati romanized)
  "ગાંડમારો", // Ass fucker (Gujarati)
  "gaandmaro", // Ass fucker (Gujarati romanized)
  "ગાંડિયો", // Asshole (Gujarati)
  "gaandiyo", // Asshole (Gujarati romanized)
  "લોડો", // Dick (Gujarati)
  "ફૂદી", // Vagina (Gujarati)
  "foodi", // Vagina (Gujarati romanized)
  "ફૂદીમારી", // Vagina fucker (Gujarati)
  "foodimari", // Vagina fucker (Gujarati romanized)
  "ભેંશ", // Buffalo (Gujarati insult)
  "bhensh", // Buffalo (Gujarati romanized)
  "ઢીલો", // Loose/weak (Gujarati insult)
  "dhilo", // Loose/weak (Gujarati romanized)
  "ભાભીચોદ", // Aunt fucker (Gujarati)
  "bhabhichod", // Aunt fucker (Gujarati romanized)
  "છોકરીચોદ", // Girl fucker (Gujarati)
  "chhokrichod", // Girl fucker (Gujarati romanized)
  "રાંડ", // Prostitute (Gujarati)
  "ટટ્ટો", // Pony/weakling (Gujarati)
  "tatto", // Pony/weakling (Gujarati romanized)
  "ગમાર", // Bumpkin (Gujarati)
  "gamaar guj", // Bumpkin (Gujarati variant)
  "ભવાડો", // Pimp (Gujarati)
  "bhavado", // Pimp (Gujarati romanized)

  // ========================================
  // === Rajasthani Crossover Profanity ===
  // ========================================
  "साली छोरी", // Damn girl (Rajasthani)
  "saali chhori", // Damn girl (Rajasthani romanized)
  "कमीनी छोरी", // Scoundrel girl (Rajasthani)
  "kamini chhori", // Scoundrel girl (Rajasthani romanized)
  "बायसा की", // Lady's (Rajasthani insult start)
  "baysa ki", // Lady's (Rajasthani romanized)
  "ढेड बुद्धि", // Half-brained (Rajasthani)
  "dhed buddhi", // Half-brained (Rajasthani romanized)
  "गधेड़ा", // Donkey (Rajasthani)
  "gadheda", // Donkey (Rajasthani romanized)
  "भुंड", // Ugly/pig (Rajasthani)
  "bhund", // Ugly/pig (Rajasthani romanized)
  "लबार", // Liar (Rajasthani)
  "labar", // Liar (Rajasthani romanized)
  "बावलो", // Mad (Rajasthani)
  "bawlo", // Mad (Rajasthani romanized)
  "बावली", // Mad (female, Rajasthani)
  "bawli", // Mad (female, Rajasthani romanized)
  "खूसट", // Miser/old fool (Rajasthani)
  "khoosad", // Miser/old fool (Rajasthani romanized)
  "छोरा हरामी", // Bastard boy (Rajasthani)
  "chhora harami", // Bastard boy (Rajasthani romanized)
  "लुगाई चोद", // Wife fucker (Rajasthani)
  "lugai chod", // Wife fucker (Rajasthani romanized)
  "टोबा ली", // Shame on you (Rajasthani)
  "toba li", // Shame on you (Rajasthani romanized)

  // ========================================
  // === Haryanvi Crossover Profanity ===
  // ========================================
  "ताऊ की गांड", // Uncle's ass (Haryanvi)
  "tau ki gaand", // Uncle's ass (Haryanvi romanized)
  "भैंस की गांड", // Buffalo's ass (Haryanvi)
  "bhains ki gaand", // Buffalo's ass (Haryanvi romanized)
  "छोरे तेरी मां की", // Boy your mother's (Haryanvi insult)
  "chhore teri maa ki", // Boy your mother's (Haryanvi romanized)
  "हरामी छोरा", // Bastard boy (Haryanvi)
  "harami chhora", // Bastard boy (Haryanvi romanized)
  "कमीने छोरा", // Scoundrel boy (Haryanvi)
  "kamine chhora", // Scoundrel boy (Haryanvi romanized)
  "तेरी ताई की", // Your aunt's (Haryanvi insult)
  "teri tai ki", // Your aunt's (Haryanvi romanized)
  "गांड मारने वाला", // One who fucks asses (Haryanvi)
  "gaand marne wala", // One who fucks asses (Haryanvi romanized)
  "गांड फट गई", // Ass got ripped (scared, Haryanvi)
  "gaand fat gayi", // Ass got ripped (Haryanvi romanized)
  "मां चुदा", // Get your mother fucked (Haryanvi)
  "maa chuda", // Get your mother fucked (Haryanvi romanized)
  "बहन चुदा", // Get your sister fucked (Haryanvi)
  "behen chuda", // Get your sister fucked (Haryanvi romanized)
  "लंड बहादुर", // Dick hero (sarcastic, Haryanvi)
  "land bahadur", // Dick hero (Haryanvi romanized)
  "चूत फाड़ दूँगा", // I'll rip your vagina (Haryanvi)
  "chut fad dunga", // I'll rip vagina (Haryanvi romanized)
  "छोरे की गांड मार", // Fuck the boy's ass (Haryanvi)
  "chhore ki gaand maar", // Fuck boy's ass (Haryanvi romanized)
  "तू छक्का है", // You're a eunuch (Haryanvi)
  "tu chakka hai", // You're a eunuch (Haryanvi romanized)
  "ताऊ चोद", // Uncle fucker (Haryanvi)
  "tau chod", // Uncle fucker (Haryanvi romanized)
  "भैंस चोद", // Buffalo fucker (Haryanvi)
  "bhains chod", // Buffalo fucker (Haryanvi romanized)

  // ========================================
  // === Punjabi Crossover Profanity ===
  // ========================================
  "ਪੈਂਚੋ", // Short for behenchod (Punjabi)
  "paincho", // Short for behenchod (Punjabi romanized)
  "ਕੁੱਤੇ ਦਾ ਪੁੱਤ", // Dog's son (Punjabi)
  "kutte da putt", // Dog's son (Punjabi romanized)
  "ਕੰਜਰ", // Pimp (Punjabi)
  "ਕੰਜਰੀ", // Pimp's woman (Punjabi)
  "kanjri", // Pimp's woman (Punjabi romanized)
  "ਤੱਤੀ ਲੱਸੀ", // Hot lassi (Punjabi derogatory)
  "tatti lassi", // Hot lassi (Punjabi romanized)
  "ਛਡ ਯਾਰ ਮੱਚੋ", // Leave it MC (Punjabi)
  "chhad yaar macho", // Leave it MC (Punjabi romanized)
  "ਫੁੱਦੂ", // Vagina (Punjabi)
  "fuddu", // Vagina (Punjabi romanized)
  "ਫੁੱਦੀ", // Vagina (Punjabi variant)
  "ਲੂਣ ਹਰਾਮ", // Salt traitor (Punjabi)
  "loon haram", // Salt traitor (Punjabi romanized)
  "ਤੇਰੀ ਮਾਂ ਦੀ", // Your mother's (Punjabi insult)
  "teri maan di", // Your mother's (Punjabi romanized)
  "ਤੇਰੀ ਪੈਂ ਦੀ", // Your sister's (Punjabi insult)
  "teri pain di", // Your sister's (Punjabi romanized)
  "ਚੂਤੜ", // Buttocks (Punjabi vulgar)
  "chootar", // Buttocks (Punjabi romanized)
  "ਪੁੱਠ", // Ass (Punjabi)
  "putth", // Ass (Punjabi romanized)
  "ਤੱਤੇ", // Testicles (Punjabi)
  "teri phen di fuddi", // Your sister's vagina (Punjabi romanized)
  "teri maa di fuddi", // Your mother's vagina (Punjabi romanized)
  "kanjar da putt", // Pimp's son (Punjabi romanized)
  "kanjri di", // Pimp woman's (Punjabi romanized)
  "khotey da putt", // Donkey's son (Punjabi romanized)
  "khotey di gaand", // Donkey's ass (Punjabi romanized)
  "soor da putt", // Pig's son (Punjabi romanized)
  "haramda", // Bastard (Punjabi romanized)
  "haramdi", // Bastard female (Punjabi romanized)
  "ullu da putt", // Owl's son (Punjabi romanized)
  "laun", // Dick (Punjabi romanized)
  "laun da baal", // Dick hair (Punjabi romanized)
  "kutte di aulad", // Dog's offspring (Punjabi romanized)

  // ========================================
  // === More Compound Madarchod Variations ===
  // ========================================
  "maadarchod", // Motherfucker (variant)
  "maaderchood", // Motherfucker (variant)
  "maader chod", // Motherfucker (spaced)
  "maadar chod", // Motherfucker (variant spaced)
  "madar ch0d", // Motherfucker (evasion)
  "m@dar chod", // Motherfucker (evasion)
  "mc bc bsdk", // MC BC BSDK compound
  "emcee", // MC phonetic
  "emcee beecee", // MC BC phonetic

  // ========================================
  // === More Compound Behenchod Variations ===
  // ========================================
  "bhnchod", // Sisterfucker (abbreviation)
  "behench0d", // Sisterfucker (evasion)
  "b3henchod", // Sisterfucker (evasion)
  "bahinchod", // Sisterfucker (variant)
  "boginchod", // Sisterfucker (dialectal)
  "bc sala", // BC bastard
  "beecee", // BC phonetic

  // ========================================
  // === More Body Part Insult Combinations ===
  // ========================================
  "chut ka bhoot", // Vagina's ghost (idiot)
  "gaand ka bhoot", // Ass's ghost (idiot)
  "gaand ka pakoda", // Ass's fritter (useless)
  "lund ki topi", // Dick's cap (foreskin insult)
  "chut ki dhool", // Vagina's dust (worthless)
  "gaand ki dhool", // Ass's dust (worthless)
  "lund ka kira", // Dick's worm (worthless)
  "chut ka kira", // Vagina's worm (worthless)
  "gaand ka kira", // Ass's worm (annoying)
  "tatte ka paseena", // Testicle sweat (disgusting)
  "lund ka makkhi", // Dick's fly (worthless)
  "chut ka jhaag", // Vagina's foam (worthless)
  "gaand ka maal", // Ass's product (shit)
  "lund ka raita", // Dick's raita (mess)
  "chut ka raita", // Vagina's raita (mess)
  "gaand ka raita", // Ass's raita (mess)
  "tatte ka halwa", // Testicle halwa (mess)
  "lund ki safai", // Dick's cleaning (degrading)
  "chut ki safai", // Vagina's cleaning (degrading)
  "gaand ki safai", // Ass's cleaning (degrading)
  "lund ka sipahi", // Dick's soldier (sycophant)
  "chut ka naukri", // Vagina's servant (degrading)
  "gaand ka chamcha", // Ass's spoon (bootlicker)
  "lund ka chaata", // Dick's licker (degrading)
  "chut ka chaata", // Vagina's licker (degrading)
  "gaand ka chaata", // Ass's licker (bootlicker)

  // ========================================
  // === Hinglish Internet Slang Extended ===
  // ========================================
  "bsdk nikal", // BSDK get out
  "mc ki aulaad", // MC's offspring
  "bc ki aulaad", // BC's offspring
  "chutiye madarjaat", // Idiot motherfucker
  "randi ki dukan", // Prostitute's shop
  "lund pe baith", // Sit on the dick
  "gaand mara bsdk", // Fuck off BSDK
  "teri gaand tod dunga", // I'll break your ass
  "teri chut mein bamboo", // Bamboo in your vagina
  "tere muh mein lund", // Dick in your mouth
  "lund choosle", // Suck the dick (texting)
  "gaand marale", // Get your ass fucked (texting)
  "chut dikha randi", // Show vagina prostitute
  "lund se khel", // Play with dick
  "gaand se nikal", // Come out of the ass
  "chut mein ghus", // Go into the vagina
  "gaand mein dum nahi", // No courage (no strength in ass)
  "lund hilake soja", // Shake dick and sleep (masturbate)
  "gaand phati padi hai", // Ass is ripped (scared)
  "chut ka champion", // Champion of vagina
  "gaand ka king", // King of ass (sarcastic)
  "lund ka raja", // King of dick (sarcastic)
  "tatte ke sardaar", // Chief of testicles (sarcastic)
  "mc ki property", // MC's property (insult)
  "bc ki dukaan", // BC's shop (insult)
  "bsdk ki factory", // BSDK's factory (insult)
  "tmkc ka member", // TMKC's member
  "chutiye ka sara", // Village of idiots
  "gandu ka baap", // Father of assholes
  "randi ka mahol", // Prostitute atmosphere
  "harami ka khandaan", // Bastard's family
  "kamina ka baap", // Father of scoundrels
  "laude ka fayda", // Dick's benefit (useless)
  "chut ka fayda", // Vagina's benefit (useless)
  "gaand ka fayda", // Ass's benefit (useless)
  "mc ka beta", // MC's son
  "bc ka beta", // BC's son
  "mc ki beti", // MC's daughter
  "bc ki beti", // BC's daughter

  // ========================================
  // === Religious Insults (Hindi) ===
  // ========================================
  "मुल्ले", // Muslims (derogatory plural)
  "mulle", // Muslims (derogatory, romanized)
  "काफ़िर", // Infidel (used as slur)
  "kafir", // Infidel (romanized)
  "पंडू", // Brahmin (derogatory)
  "pandu", // Brahmin (derogatory, romanized)
  "तुल्ला", // Slur for Muslims
  "tulla", // Slur for Muslims (romanized)
  "मल्लू", // Slur for South Indians
  "mallu", // Slur for South Indians (romanized)
  "गोमांसी", // Beef-eater (anti-Muslim)
  "gomansi", // Beef-eater (romanized)
  "जिहादी", // Jihadist (used as slur)
  "jihadi", // Jihadist (romanized)
  "धर्मध्वजी", // False religious person
  "dharmdhwaji", // False religious (romanized)
  "ढोंगी बाबा", // Fake holy man
  "dhongi baba", // Fake holy man (romanized)
  "पोंगा पंडित", // Hollow priest
  "ponga pandit", // Hollow priest (romanized)
  "चमड़चोर", // Skin thief (caste slur)
  "chamadchor", // Skin thief (romanized)
  "भाटिया", // Caste slur variant
  "bhatiya", // Caste slur variant (romanized)

  // ========================================
  // === More Devanagari Compound Insults ===
  // ========================================
  "तेरी माँ की गांड में कुत्ता", // Dog in your mother's ass
  "तेरे बाप की गांड में लंड", // Dick in your father's ass
  "तेरी बहन की चूत में बम", // Bomb in your sister's vagina
  "तेरी बीवी रंडी", // Your wife is a prostitute
  "तेरा बाप भड़वा", // Your father is a pimp
  "तेरी माँ छिनार", // Your mother is an adulteress
  "तेरे खानदान की रंडी", // Your lineage's prostitute
  "सारा खानदान हरामी", // Entire lineage bastard
  "तेरी औकात कुत्ते की", // Your status is of a dog
  "चूत में बांस", // Bamboo in vagina
  "गांड में लट्ठ", // Club in ass
  "लंड पे मूत", // Piss on dick
  "चूत में उंगली", // Finger in vagina
  "तेरी नानी की गांड", // Your grandmother's ass
  "तेरे दादा की गांड", // Your grandfather's ass
  "तेरी चाची की चूत", // Your aunt's vagina
  "तेरे चाचा का लंड", // Your uncle's dick
  "तेरी भाभी रंडी", // Your sister-in-law prostitute
  "तेरा जीजा गांडू", // Your brother-in-law asshole
  "मेरा लंड ले तेरे मुँह में", // My dick in your mouth
  "तेरी गांड में मेरा लंड", // My dick in your ass
  "तेरी चूत में मेरा लंड", // My dick in your vagina
  "लंड काटके मुँह में डालूंगा", // I'll cut your dick and put it in your mouth
  "गांड तोड़ के हाथ में दूंगा", // I'll break your ass and hand it to you
  "चूत सिलवा दूंगा", // I'll sew up your vagina

  // ========================================
  // === More Romanized Extended Insults ===
  // ========================================
  "teri maa ki gaand mein kutta", // Dog in your mother's ass
  "tere baap ki gaand mein lund", // Dick in your father's ass
  "teri behen ki chut mein bomb", // Bomb in your sister's vagina
  "teri biwi randi", // Your wife is a prostitute
  "tera baap bhadwa", // Your father is a pimp
  "teri maa chhinar", // Your mother is an adulteress
  "tere khandaan ki randi", // Your lineage's prostitute
  "saara khandaan harami", // Entire lineage bastard
  "teri aukaat kutte ki", // Your status is of a dog
  "chut mein baans", // Bamboo in vagina
  "gaand mein latth", // Club in ass
  "lund pe moot", // Piss on dick
  "teri naani ki gaand", // Your grandmother's ass
  "tere daada ki gaand", // Your grandfather's ass
  "teri chaachi ki chut", // Your aunt's vagina
  "tere chaacha ka lund", // Your uncle's dick
  "teri bhabhi randi", // Your sister-in-law prostitute
  "tera jija gandu", // Your brother-in-law asshole
  "mera lund le tere muh mein", // My dick in your mouth
  "teri gaand mein mera lund", // My dick in your ass
  "teri chut mein mera lund", // My dick in your vagina
  "lund kaatke muh mein dalunga", // Cut dick put in mouth
  "gaand todke haath mein dunga", // Break ass hand it over
  "chut silwa dunga", // Sew up vagina

  // ========================================
  // === More Evasion Spellings Extended ===
  // ========================================
  "m@darch0d", // Motherfucker evasion
  "bhens ch0d", // Sisterfucker evasion
  "choot1ya", // Idiot evasion
  "h@rami", // Bastard evasion
  "har@mi", // Bastard evasion
  "r4ndi", // Prostitute evasion
  "l0da", // Dick evasion
  "bh0sd1ke", // Vagina-born evasion
  "jh@nt", // Pubic hair evasion
  "t@tti", // Feces evasion
  "g@@nd", // Ass evasion
  "l#nd", // Dick evasion
  "bh@dwa", // Pimp evasion
  "k@mina", // Scoundrel evasion
  "k4mina", // Scoundrel evasion
  "h1jra", // Transgender evasion
  "ch@kka", // Eunuch evasion
  "s@la", // Bastard evasion
  "s@@la", // Bastard evasion

  // ========================================
  // === Abbreviations & Internet Codes ===
  // ========================================
  "tmkgf", // Teri maa ki gaand faad
  "tgkgm", // Teri gaand ki gaand maar
  "ckd", // Chut ka dhakkan
  "gkd", // Gaand ka dhakkan
  "mkl", // Madarchod ke laude
  "mc bc bkl", // Triple abbreviation compound
  "lmdc", // Lund mein dal chutiye
  "gmd", // Gaand mein daal
  "cmb", // Chut mein bamboo
  "gmb", // Gaand mein bamboo
  "rkb", // Randi ka bachcha
  "hkb", // Harami ka bachcha
  "kkb", // Kutte ka bachcha
  "skb", // Suar ka bachcha
  "bkb", // Bhosdi ka bachcha

  // ========================================
  // === Scatological Insults ===
  // ========================================
  "tatti khaa", // Eat feces
  "goo khaa", // Eat shit
  "moot pi le", // Drink urine
  "paad sungh", // Smell the fart
  "tatti ka keeda", // Feces worm
  "goo ka keeda", // Shit worm
  "tatti mein muh", // Face in feces
  "goo mein lund", // Dick in shit
  "hagna band kar", // Stop shitting
  "mootna band kar", // Stop pissing
  "paadna band kar", // Stop farting
  "tatti se bhi ganda", // Dirtier than feces
  "goo se bhi ghatiya", // Worse than shit
  "nalli ka keeda", // Drain worm
  "gutter ka keeda", // Gutter worm
  "naali ka goo", // Drain's feces
  "sewer ka chuha", // Sewer's rat
  "kachra", // Garbage
  "kachra ka dabba", // Garbage bin
  "kachre ka keeda", // Garbage worm
  "goo ka tukda", // Piece of feces
  "moot ki dhaar", // Stream of urine
  "paad ki badboo", // Fart's stench

  // ========================================
  // === More Hinglish Gaming/Internet ===
  // ========================================
  "noob chutiya", // Noob idiot
  "noob gandu", // Noob asshole
  "noob mc", // Noob MC
  "noob bc", // Noob BC
  "gg chutiye", // GG idiot
  "bloody gandu", // Bloody asshole (Hinglish)
  "damn kamina", // Damn scoundrel (Hinglish)
  "shit harami", // Shit bastard (Hinglish)
  "fuck off bhosdike", // Fuck off vagina-born (Hinglish)
  "get lost madarchod", // Get lost motherfucker (Hinglish)
  "die bsdk", // Die BSDK (Hinglish)
  "trash chutiya", // Trash idiot (Hinglish gaming)
  "bot gandu", // Bot asshole (Hinglish gaming)
  "hacker mc", // Hacker MC (Hinglish gaming)
  "camper bsdk", // Camper BSDK (Hinglish gaming)
  "lag se mara chutiya", // Died from lag idiot (gaming)
  "uninstall kar bsdk", // Uninstall BSDK (gaming)
  "delete kar chutiye", // Delete it idiot (gaming)
  "aim kaha hai mc", // Where's your aim MC (gaming)
  "carry nahi ho raha bc", // Can't carry BC (gaming)
  "feeder mc", // Feeder MC (gaming)
  "inter mc", // Inter MC (gaming)
  "toxic gandu", // Toxic asshole (gaming)
  "report kar bsdk", // Report BSDK (gaming)
  "mute kar chutiye", // Mute it idiot (gaming)
  "abandon kar mc", // Abandon MC (gaming)
  "afk gandu", // AFK asshole (gaming)

  // ========================================
  // === Extended Chutiya Variations ===
  // ========================================
  "chutiyapa kar raha", // Doing idiocy
  "chutiya number 1", // Idiot number 1
  "chutiya saala", // Idiot bastard
  "chutiya bana raha", // Making an idiot (of someone)
  "chutiya banana", // To make an idiot
  "chutiya samjha hai", // Think I'm an idiot?
  "chutiya samajh rakha hai", // Have been taken for an idiot
  "chutiye ki tarah", // Like an idiot
  "chutiye jaisa", // Like an idiot (variant)
  "chutiye ka bhai", // Idiot's brother
  "chutiye ka baap", // Idiot's father
  "chutiye ka baccha", // Idiot's child
  "chutiye ki maa", // Idiot's mother
  "chutiye ki behen", // Idiot's sister
  "puri chutiyagiri", // Full idiocy
  "ekdum chutiya", // Complete idiot
  "number ek chutiya", // Number one idiot
  "pakka chutiya", // Confirmed idiot

  // ========================================
  // === Extended Gandu Variations ===
  // ========================================
  "gandupanti", // Asshole behavior
  "gandu saala", // Asshole bastard
  "gandu number 1", // Asshole number 1
  "gandu ki tarah", // Like an asshole
  "gandu jaisa", // Like an asshole (variant)
  "gandu ka bhai", // Asshole's brother
  "gandu ka baccha", // Asshole's child
  "gandu ki maa", // Asshole's mother
  "pura gandu", // Complete asshole
  "ekdum gandu", // Complete asshole (variant)
  "pakka gandu", // Confirmed asshole
  "gandu pan", // Asshole-ness

  // ========================================
  // === Extended Bakchod Variations ===
  // ========================================
  "bakchodi pel raha", // Doing bullshitting
  "bakchodi band kar", // Stop bullshitting
  "bakchod sala", // Bullshitter bastard
  "bakchodi mat kar", // Don't bullshit
  "bakchod number 1", // Bullshitter number 1
  "bakchod ki aulaad", // Bullshitter's offspring
  "bakchodi mein expert", // Expert in bullshitting
  "bakchodi ka king", // King of bullshitting
  "bakchodi ka baap", // Father of bullshitting
  "bakwas", // Nonsense
  "bakwas band kar", // Stop the nonsense
  "bakwas mat kar", // Don't talk nonsense
  "bakwas ki dukaan", // Shop of nonsense
  "bewakoofi", // Foolishness
  "bewakoof banaya", // Made a fool
  "bevda saala", // Drunkard bastard
  "bhikarin", // Female beggar (insult)

  // ========================================
  // === More Phonetic/Evasion Variants ===
  // ========================================
  "bee ess dee kay", // BSDK phonetic
  "tee em kay see", // TMKC phonetic
  "chootia", // Chutiya phonetic variant
  "haarami", // Harami phonetic variant
  "bhadvaa", // Bhadwa phonetic variant
  "randee", // Randi phonetic variant
  "bhosdikay", // Bhosdike phonetic variant
  "saalaa", // Saala phonetic variant
  "saalee", // Saali phonetic variant
  "haramjaada", // Haramzada phonetic variant
  "haramjaadi", // Haramzadi phonetic variant
  "chaatna", // To lick (vulgar context)
  "choosna", // To suck (vulgar context)
  "chodna", // To fuck
  "gaand maarna", // To fuck ass
  "chut maarna", // To fuck vagina
  "muth maarna", // To masturbate
  "muth marle", // Masturbate (imperative)
  "muth maar ke soja", // Masturbate and sleep
  "hilake soja", // Shake (masturbate) and sleep
  "jhadna", // To ejaculate
  "jhad diya", // Ejaculated

  // ========================================
  // === Threat-Based Insults ===
  // ========================================
  "teri gaand maar dunga", // I'll fuck your ass
  "teri chut faad dunga", // I'll rip your vagina
  "tera lund tod dunga", // I'll break your dick
  "tere tatte masal dunga", // I'll crush your testicles
  "teri maa ke saath", // With your mother (threat)
  "teri behen ke saath", // With your sister (threat)
  "teri biwi ke saath", // With your wife (threat)
  "khandaan bhool jayega", // Your lineage will be forgotten
  "neech ki maut marega", // You'll die a lowly death
  "suar ki maut", // Pig's death
  "naali mein girke marega", // You'll die falling in a drain
  "gutter mein phenk dunga", // I'll throw you in the gutter
  "kachre mein daal dunga", // I'll put you in garbage
  "zinda gaad dunga", // I'll bury you alive
  "haddi tod dunga", // I'll break your bones
  "khaal udhed dunga", // I'll skin you alive
  "cheer dunga", // I'll rip you apart
  "phod dunga", // I'll crack you
  "peet dunga", // I'll beat you
  "maar dunga", // I'll kill/beat you
  "jaan se maar dunga", // I'll kill you
  "kaat ke phenk dunga", // I'll cut and throw you

  // ========================================
  // === Extended Devanagari Sexual Insults ===
  // ========================================
  "तेरी माँ की चूत चाटूँगा", // I'll lick your mother's pussy
  "तेरी बहन की चूत चाटूँगा", // I'll lick your sister's pussy
  "तेरी माँ की गांड चाटूँगा", // I'll lick your mother's ass
  "तेरी बहन की गांड चाटूँगा", // I'll lick your sister's ass
  "तेरी माँ के मुम्मे दबाऊँगा", // I'll squeeze your mother's breasts
  "तेरी बहन के मुम्मे दबाऊँगा", // I'll squeeze your sister's breasts
  "तेरी माँ को उल्टा चोदूँगा", // I'll fuck your mother upside down
  "तेरी बहन को उल्टा चोदूँगा", // I'll fuck your sister upside down
  "तेरी माँ की चूत में हाथ डालूँगा", // I'll put hand in your mother's pussy
  "तेरी माँ की चूत में पैर डालूँगा", // I'll put foot in your mother's pussy
  "तेरा लंड काटूँगा", // I'll cut your dick
  "तेरा लंड तोड़ दूँगा", // I'll break your dick
  "तेरे तत्ते काटूँगा", // I'll cut your balls
  "तेरे तत्ते मसल दूँगा", // I'll crush your balls
  "तेरी माँ की चूत फाड़ दूँगा", // I'll rip your mother's pussy
  "तेरी बहन की चूत फाड़ दूँगा", // I'll rip your sister's pussy
  "तेरी माँ की गांड फाड़ दूँगा", // I'll rip your mother's ass
  "तेरी बहन की गांड फाड़ दूँगा", // I'll rip your sister's ass
  "रंडी का बच्चा तू", // You whore's child
  "वेश्या का बच्चा तू", // You prostitute's child
  "छिनाल का बच्चा तू", // You slut's child
  "तेरी माँ बाज़ार की रंडी", // Your mother is market whore
  "तेरी बहन बाज़ार की रंडी", // Your sister is market whore
  "तेरी माँ सड़क की रंडी", // Your mother is street whore
  "तेरी बहन सड़क की रंडी", // Your sister is street whore
  "तेरी माँ गली की रंडी", // Your mother is alley whore
  "तेरी माँ मोहल्ले की रंडी", // Your mother is neighborhood whore
  "तेरी माँ शहर की रंडी", // Your mother is city whore
  "तेरी माँ देश की रंडी", // Your mother is country whore

  // ========================================
  // === Extended Romanized Sexual Insults ===
  // ========================================
  "teri maa ki chut chatunga", // I'll lick your mother's pussy
  "teri behen ki chut chatunga", // I'll lick your sister's pussy
  "teri maa ki gaand chatunga", // I'll lick your mother's ass
  "teri behen ki gaand chatunga", // I'll lick your sister's ass
  "teri maa ke mumme dabaunga", // I'll squeeze your mother's breasts
  "teri behen ke mumme dabaunga", // I'll squeeze your sister's breasts
  "teri maa ko ulta chodunga", // I'll fuck your mother upside down
  "teri behen ko ulta chodunga", // I'll fuck your sister upside down
  "teri maa ki chut mein haath dalunga", // I'll put hand in your mother's pussy
  "teri maa ki chut mein pair dalunga", // I'll put foot in your mother's pussy
  "tera lund katunga", // I'll cut your dick
  "tere tatte katunga", // I'll cut your balls
  "teri maa ki chut phaad dunga", // I'll rip your mother's pussy
  "teri behen ki chut phaad dunga", // I'll rip your sister's pussy
  "teri maa ki gaand phaad dunga", // I'll rip your mother's ass
  "teri behen ki gaand phaad dunga", // I'll rip your sister's ass
  "randi ka bachcha tu", // You whore's child
  "veshya ka bachcha tu", // You prostitute's child
  "chhinal ka bachcha tu", // You slut's child
  "teri maa bazaar ki randi", // Your mother is market whore
  "teri behen bazaar ki randi", // Your sister is market whore
  "teri maa sadak ki randi", // Your mother is street whore
  "teri behen sadak ki randi", // Your sister is street whore
  "teri maa gali ki randi", // Your mother is alley whore
  "teri maa mohalle ki randi", // Your mother is neighborhood whore
  "teri maa shehar ki randi", // Your mother is city whore
  "teri maa desh ki randi", // Your mother is country whore

  // ========================================
  // === Extended Bhojpuri/Magahi/Maithili ===
  // ========================================
  "tohar maai ke chodi", // I'll fuck your mother (Bhojpuri)
  "tohar bahini ke chodi", // I'll fuck your sister (Bhojpuri)
  "tohar maai randi ba", // Your mother is a whore (Bhojpuri)
  "tohar bahini randi ba", // Your sister is a whore (Bhojpuri)
  "tohar maai ke bur me danda", // Stick in your mother's pussy (Bhojpuri)
  "tohar maai ke bur me baans", // Bamboo in your mother's pussy (Bhojpuri)
  "tohar bur me baans", // Bamboo in your pussy (Bhojpuri)
  "tohar gaand me baans", // Bamboo in your ass (Bhojpuri)
  "chodua kahin ke", // Fucker (Bhojpuri)
  "burchod kahin ke", // Pussy fucker (Bhojpuri)
  "gaandchod kahin ke", // Ass fucker (Bhojpuri)
  "tohar maai ke bhosda", // Your mother's pussy (Bhojpuri)
  "tohar maai ke land khai", // Your mother eats dick (Bhojpuri)
  "tohar bahini ke land khai", // Your sister eats dick (Bhojpuri)
  "harami ke baccha re", // Bastard's child (Bhojpuri)
  "raand ke baccha re", // Whore's child (Bhojpuri)
  "tohar maai ke chodi dhalaan me", // I'll fuck your mother on the porch (Bhojpuri)
  "tohar maai sabke chode", // Your mother fucks everyone (Bhojpuri)
  "tohar bahini sabke chode", // Your sister fucks everyone (Bhojpuri)
  "tor mai ke chodi", // I'll fuck your mother (Magahi)
  "tor mai randi he", // Your mother is whore (Magahi)
  "tor bahin ke chodi", // I'll fuck your sister (Magahi)
  "tor mai ke bur", // Your mother's pussy (Magahi)
  "tor baap ke lauda", // Your father's dick (Magahi)
  "tor mai ke gaand me danda", // Stick in your mother's ass (Magahi)
  "tohar maay ke chodi", // I'll fuck your mother (Maithili)
  "tohar maay randi chhi", // Your mother is whore (Maithili)
  "tohar maay ke yoni", // Your mother's pussy (Maithili)
  "tohar baap ke ling", // Your father's dick (Maithili)

  // ========================================
  // === Extended Haryanvi/Rajasthani ===
  // ========================================
  "teri maa ki phuddi", // Your mother's pussy (Haryanvi)
  "teri behen ki phuddi", // Your sister's pussy (Haryanvi)
  "teri maa ki phuddi mein keel", // Nail in your mother's pussy (Haryanvi)
  "teri maa ki phuddi mein danda", // Stick in your mother's pussy (Haryanvi)
  "chhodya tera", // Fucker (Haryanvi)
  "phuddi ka", // Of pussy (Haryanvi)
  "teri maa ko chhodunga", // I'll fuck your mother (Haryanvi)
  "teri behen ko chhodunga", // I'll fuck your sister (Haryanvi)
  "randi ki bachchi", // Whore's daughter (Haryanvi)
  "chhinal ki bachchi", // Slut's daughter (Haryanvi)
  "thaari maa ri chut", // Your mother's pussy (Rajasthani)
  "thaari behen ri chut", // Your sister's pussy (Rajasthani)
  "thaari maa ro bhosda", // Your mother's pussy (Rajasthani)
  "thaari maa ne chodu", // I'll fuck your mother (Rajasthani)
  "thaari behen ne chodu", // I'll fuck your sister (Rajasthani)
  "randi ko bachcho", // Whore's child (Rajasthani)
  "chhinal ko bachcho", // Slut's child (Rajasthani)
  "thaari maa bazaar ri randi", // Your mother is market whore (Rajasthani)
  "thaari maa gali ri randi", // Your mother is alley whore (Rajasthani)
  "thaari maa gaon ri randi", // Your mother is village whore (Rajasthani)

  // ========================================
  // === Extended Gujarati Crossover ===
  // ========================================
  "tari maa ni chut", // Your mother's pussy (Gujarati)
  "tari behen ni chut", // Your sister's pussy (Gujarati)
  "tari maa no bhosdo", // Your mother's pussy (Gujarati)
  "tari maa ne chodiyo", // Fucked your mother (Gujarati)
  "tari behen ne chodiyo", // Fucked your sister (Gujarati)
  "chodyo tari maa ne", // Fucked your mother (Gujarati alt)
  "randi no chhokro", // Whore's boy (Gujarati)
  "randi ni chhokri", // Whore's girl (Gujarati)
  "veshya no chhokro", // Prostitute's boy (Gujarati)
  "tari maa randi chhe", // Your mother is whore (Gujarati)
  "tari behen randi chhe", // Your sister is whore (Gujarati)
  "taro baap gaandu chhe", // Your father is a faggot (Gujarati)
  "bhenchod gujarati", // Sister fucker Gujarati
  "madarchod gujarati", // Mother fucker Gujarati
  "gheli chut", // Crazy pussy (Gujarati)
  "gando lodo", // Crazy dick (Gujarati)
  "tari maa ni gaand", // Your mother's ass (Gujarati)
  "tari behen ni gaand", // Your sister's ass (Gujarati)
  "gaandio tu", // Faggot you (Gujarati)
  "chakko tu", // Eunuch you (Gujarati)

  // ========================================
  // === Extended Punjabi Crossover ===
  // ========================================
  "teri maa di phuddi", // Your mother's pussy (Punjabi)
  "teri bhain di phuddi", // Your sister's pussy (Punjabi)
  "teri maa da bhosda", // Your mother's pussy (Punjabi)
  "teri maa nu chodaan", // I'll fuck your mother (Punjabi)
  "teri bhain nu chodaan", // I'll fuck your sister (Punjabi)
  "randi da puttar", // Whore's son (Punjabi)
  "randi di dhee", // Whore's daughter (Punjabi)
  "kanjri da puttar", // Whore's son (Punjabi alt)
  "kanjri di dhee", // Whore's daughter (Punjabi alt)
  "teri maa randi aa", // Your mother is whore (Punjabi)
  "teri bhain randi aa", // Your sister is whore (Punjabi)
  "penchod tu", // Sister fucker you (Punjabi)
  "maachod tu", // Mother fucker you (Punjabi)
  "lann da tu", // Of dick you (Punjabi)
  "phuddu tu", // Pussy you (Punjabi)
  "teri maa di gaand", // Your mother's ass (Punjabi)
  "teri bhain di gaand", // Your sister's ass (Punjabi)
  "gaandu oye", // Faggot hey (Punjabi)
  "chakke oye", // Eunuch hey (Punjabi)
  "teri maa nu kutta chodda", // Dog fucks your mother (Punjabi)

  // ========================================
  // === Extended Emasculation Insults (Hindi) ===
  // ========================================
  "तेरा लंड नहीं खड़ा होता", // Your dick can't get up
  "तेरा लंड काम नहीं करता", // Your dick doesn't work
  "तेरा लंड मर गया", // Your dick died
  "तू नपुंसक है", // You are impotent
  "तू हिजड़ा है", // You are a hijra
  "तेरा लंड कीड़े जैसा", // Your dick is like a worm
  "तेरा लंड उंगली जैसा", // Your dick is like a finger
  "तेरा लंड माचिस जैसा", // Your dick is like a matchstick
  "tera lund nahi khada hota", // Your dick can't get up
  "tera lund kaam nahi karta", // Your dick doesn't work
  "tera lund mar gaya", // Your dick died
  "tu napunsak hai", // You are impotent
  "tu hijra hai", // You are a hijra
  "tu chhakka hai", // You are a eunuch
  "tera lund keede jaisa", // Your dick is like a worm
  "tera lund ungli jaisa", // Your dick is like a finger
  "tera lund maachis jaisa", // Your dick is like a matchstick

  // ========================================
  // === Extended Body Part Combos (Hindi) ===
  // ========================================
  "बड़ी चूत की औरत", // Big pussy woman
  "छोटे लंड का आदमी", // Small dick man
  "बड़ी गांड का आदमी", // Big ass man
  "छोटे तत्ते का आदमी", // Small balls man
  "टेढ़े लंड का आदमी", // Crooked dick man
  "ढीली चूत की औरत", // Loose pussy woman
  "लटकी हुई चूचियाँ", // Saggy breasts
  "लटका हुआ लंड", // Saggy dick
  "badi chut ki aurat", // Big pussy woman
  "chhote lund ka aadmi", // Small dick man
  "badi gaand ka aadmi", // Big ass man
  "chhote tatte ka aadmi", // Small balls man
  "tedhe lund ka aadmi", // Crooked dick man
  "dheeli chut ki aurat", // Loose pussy woman
  "latki hui chuchiya", // Saggy breasts
  "latka hua lund", // Saggy dick

  // ========================================
  // === Extended Scatological (Hindi) ===
  // ========================================
  "तेरे मुँह में गू डालूँगा", // I'll put shit in your mouth
  "तेरे मुँह में मूतूँगा", // I'll piss in your mouth
  "तेरे खाने में गू डालूँगा", // I'll put shit in your food
  "तेरे खाने में मूत डालूँगा", // I'll put piss in your food
  "तेरी माँ के मुँह में गू", // Shit in your mother's mouth
  "तेरी बहन के मुँह में गू", // Shit in your sister's mouth
  "गू खोर तू", // You shit eater
  "मूत खोर तू", // You piss drinker
  "हगू चूतिया", // Shit idiot
  "मूतू चूतिया", // Piss idiot
  "पाद खोर तू", // You fart sniffer
  "tere munh mein gu dalunga", // I'll put shit in your mouth
  "tere munh mein mutunga", // I'll piss in your mouth
  "tere khane mein gu dalunga", // I'll put shit in your food
  "tere khane mein mut dalunga", // I'll put piss in your food
  "teri maa ke munh mein gu", // Shit in your mother's mouth
  "teri behen ke munh mein gu", // Shit in your sister's mouth
  "gu khor tu", // You shit eater
  "mut khor tu", // You piss drinker
  "hagu chutiya", // Shit idiot
  "mutu chutiya", // Piss idiot
  "paad khor tu", // You fart sniffer

  // ========================================
  // === Extended Abuse Phrases (Hindi) ===
  // ========================================
  "teri zindagi ki koi keemat nahi", // Your life has no value
  "tu paida hi na hota toh achha hota", // Better if you weren't born
  "teri maa tere baap ko nahi jaanti", // Your mother doesn't know your father
  "tera baap kaun hai koi nahi jaanta", // Nobody knows who your father is
  "teri maa ne tujhe kachra mein phenka tha", // Your mother threw you in garbage
  "tujhe koi nahi chahta", // Nobody wants you
  "tera munh dekh ke log thukte hain", // People spit seeing your face
  "tera naam sunke log haste hain", // People laugh hearing your name
  "teri family mein sab randi", // Everyone in your family is whore
  "teri family mein sab harami", // Everyone in your family is bastard
  "teri khandaan mein sab chodu", // Everyone in your lineage is fucker
  "तेरी ज़िन्दगी की कोई कीमत नहीं", // Your life has no value
  "तू पैदा ही ना होता तो अच्छा होता", // Better if you weren't born
  "तेरी माँ तेरे बाप को नहीं जानती", // Your mother doesn't know your father
  "तेरा बाप कौन है कोई नहीं जानता", // Nobody knows who your father is
  "तुझे कोई नहीं चाहता", // Nobody wants you
  "तेरा मुँह देखके लोग थूकते हैं", // People spit seeing your face
  "तेरा नाम सुनके लोग हँसते हैं", // People laugh hearing your name
  "तेरी फैमिली में सब रंडी", // Everyone in your family is whore
  "तेरी फैमिली में सब हरामी", // Everyone in your family is bastard
  "तेरी खानदान में सब चोदू", // Everyone in your lineage is fucker

  // ========================================
  // === Extended Internet/Gaming Hindi ===
  // ========================================
  "noob saala madarchod", // Noob motherfucker
  "noob saala bhenchod", // Noob sisterfucker
  "noob saala chutiya", // Noob idiot
  "camper madarchod", // Camper motherfucker
  "camper bhenchod", // Camper sisterfucker
  "hacker madarchod", // Hacker motherfucker
  "hacker bhenchod", // Hacker sisterfucker
  "feeder madarchod", // Feeder motherfucker
  "feeder bhenchod", // Feeder sisterfucker
  "troll madarchod", // Troll motherfucker
  "toxic madarchod", // Toxic motherfucker
  "afk madarchod", // AFK motherfucker
  "gg madarchod", // GG motherfucker
  "ez madarchod", // EZ motherfucker
  "gg lund choos", // GG suck dick
  "ez lund choos", // EZ suck dick
  "game chhod madarchod", // Leave game motherfucker
  "uninstall kar madarchod", // Uninstall motherfucker
  "delete kar bhenchod", // Delete sisterfucker
  "lag ki maa ki chut", // Fuck lag's mother
  "ping ki maa ki chut", // Fuck ping's mother
  "server ki maa ki chut", // Fuck server's mother
  "report karunga madarchod", // I'll report motherfucker
  "stream sniper madarchod", // Stream sniper motherfucker

  // ========================================
  // === Extended Animal Insults (Hindi) ===
  // ========================================
  "कुत्ते की माँ का", // Dog's mother's
  "सुअर की माँ का", // Pig's mother's
  "गधे की माँ का", // Donkey's mother's
  "बंदर की माँ का", // Monkey's mother's
  "बकरी चोद", // Goat fucker
  "गाय चोद", // Cow fucker
  "घोड़ी चोद", // Mare fucker
  "कुतिया की औलाद", // Bitch's offspring
  "सुअरनी की औलाद", // Sow's offspring
  "kutte ki maa ka", // Dog's mother's
  "suar ki maa ka", // Pig's mother's
  "gadhe ki maa ka", // Donkey's mother's
  "bandar ki maa ka", // Monkey's mother's
  "bakri chod", // Goat fucker
  "gaay chod", // Cow fucker
  "ghodi chod", // Mare fucker
  "kutiya ki aulad", // Bitch's offspring
  "suarni ki aulad", // Sow's offspring
];


export default hindiBadWords;
