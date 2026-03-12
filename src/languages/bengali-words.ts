/**
 * Bengali profanity words list
 * Contains common profanities in both Bengali script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Bengali
 */
const bengaliBadWords: Record<string, { s: number; c: number }> = {
  // ========================================
  // === Bengali Script Profanities ===
  // ========================================
  "বাল": { s: 3, c: 4 }, // Bal (pubic hair, used as insult)
  "কুত্তার বাচ্চা": { s: 3, c: 4 }, // Kuttar bachcha (son of a dog)
  "হারামজাদা": { s: 3, c: 4 }, // Haramjada (bastard)
  "শালা": { s: 3, c: 4 }, // Shala (brother-in-law, used as insult)
  "শালি": { s: 3, c: 4 }, // Shali (female version)
  "মাগি": { s: 5, c: 4 }, // Magi (prostitute)
  "বেশ্যা": { s: 5, c: 4 }, // Beshya (prostitute)
  "খানকি": { s: 5, c: 4 }, // Khanki (prostitute)
  "চোদা": { s: 3, c: 4 }, // Choda (f**k)
  "চুদি": { s: 3, c: 4 }, // Chudi (f**k)
  "চুদা": { s: 3, c: 4 }, // Chuda (f**k)
  "মাদারচোদ": { s: 5, c: 5 }, // Madarchod (motherf**ker)
  "মাগীর ছেলে": { s: 5, c: 4 }, // Magir chele (son of a prostitute)
  "কুত্তা": { s: 3, c: 4 }, // Kutta (dog)
  "হারামি": { s: 3, c: 4 }, // Harami (bastard)
  "বোকাচোদা": { s: 1, c: 4 }, // Bokachoda (stupid f**ker)
  "গাণ্ডু": { s: 3, c: 4 }, // Gandu (arse)
  "ভোদাই": { s: 1, c: 4 }, // Bhodai (idiot/fool)
  "ভোদা": { s: 4, c: 4 }, // Bhoda (vagina, used as insult)
  "পাগল": { s: 3, c: 4 }, // Pagol (mad, less severe)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  "bal": { s: 3, c: 4 }, // pubic hair (insult)
  "kuttar bachcha": { s: 3, c: 5 }, // son of a dog
  "kutar bacha": { s: 3, c: 5 }, // son of a dog (variant)
  "haramjada": { s: 3, c: 4 }, // bastard
  "shala": { s: 3, c: 5 }, // brother-in-law (insult)
  "shali": { s: 3, c: 5 }, // sister-in-law (insult)
  "magi": { s: 5, c: 5 }, // prostitute
  "beshya": { s: 5, c: 5 }, // prostitute
  "khanki": { s: 5, c: 5 }, // prostitute
  "choda": { s: 3, c: 5 }, // f**k
  "chudi": { s: 3, c: 5 }, // f**k
  "chuda": { s: 3, c: 5 }, // f**k
  "madarchod": { s: 5, c: 5 }, // motherf**ker
  "magir chele": { s: 5, c: 5 }, // son of a prostitute
  "kutta": { s: 3, c: 4 }, // dog (insult)
  "harami": { s: 3, c: 4 }, // bastard
  "bokachoda": { s: 1, c: 5 }, // stupid f**ker
  "gandu": { s: 3, c: 4 }, // arse
  "bhodai": { s: 1, c: 5 }, // idiot/fool
  "bhoda": { s: 4, c: 5 }, // vagina (insult)
  "pagol": { s: 3, c: 5 }, // mad/crazy

  // Common variations and combinations
  "shalabaj": { s: 3, c: 4 }, // rascal
  "maderchod": { s: 5, c: 5 }, // motherf**ker (variant)
  "madarchood": { s: 5, c: 5 }, // motherf**ker (variant)
  "khankimagi": { s: 5, c: 4 }, // prostitute (compound)
  "kuttar baccha": { s: 3, c: 4 }, // son of a dog (variant)
  "shuorer baccha": { s: 3, c: 4 }, // Son of a pig
  "shuor": { s: 3, c: 4 }, // Pig
  "kamainna": { s: 3, c: 4 }, // Bastard
  "hoga": { s: 3, c: 4 }, // Anus (vulgar)
  "bessa": { s: 5, c: 4 }, // prostitute (variant)
  "bessha": { s: 5, c: 4 }, // prostitute (variant)
  "nongra": { s: 3, c: 4 }, // Dirty (used as insult)
  "noshto": { s: 3, c: 4 }, // Spoiled/corrupt
  "khankirpola": { s: 5, c: 4 }, // Son of a prostitute
  "kuttachoda": { s: 3, c: 4 }, // Dog f**ker

  // Common misspellings and variations
  "sala": { s: 3, c: 5 }, // brother-in-law (insult variant)
  "salla": { s: 3, c: 5 }, // brother-in-law (insult variant)
  "hoga mara": { s: 3, c: 5 }, // f**k the arse
  "chudna": { s: 3, c: 5 }, // to f**k
  "chudani": { s: 3, c: 5 }, // female f**ker
  "chood": { s: 3, c: 5 }, // f**k (variant)
  "chodon": { s: 3, c: 5 }, // f**king
  "madarchodh": { s: 3, c: 5 }, // motherf**ker (variant)

  // Additional Bengali profanity
  "baler baal": { s: 3, c: 4 }, // Pubic hair insult
  "banchod": { s: 3, c: 5 }, // Sister fucker
  "banchot": { s: 3, c: 4 }, // Variant
  "beyadob": { s: 3, c: 4 }, // Disrespectful (insult)
  "bichi": { s: 4, c: 4 }, // Testicle
  "boga": { s: 4, c: 4 }, // Dick (Sylheti dialect)
  "bonchod": { s: 3, c: 4 }, // Variant of banchod
  "chudir bhai": { s: 3, c: 5 }, // Brother of a fuck (insult)
  "dhonerbal": { s: 3, c: 4 }, // Pubic hair (insult)
  "fatichuda": { s: 3, c: 5 }, // Get fucked (vulgar)
  "gadha": { s: 1, c: 4 }, // Donkey (insult)
  "guder bal": { s: 3, c: 4 }, // Pubic hair (vulgar)
  "guder magi": { s: 3, c: 4 }, // Vulgar compound
  "gudmarani": { s: 3, c: 5 }, // Ass-fucker
  "heda": { s: 3, c: 5 }, // Shit (dialectal)
  "khanki magi": { s: 5, c: 4 }, // Prostitute (compound)
  "kutta ka bachcha": { s: 3, c: 4 }, // Son of a dog
  "langta": { s: 3, c: 4 }, // Naked / shameless
  "maagi": { s: 3, c: 4 }, // Variant of magi
  "malaun": { s: 3, c: 4 }, // Slur for non-Muslims (offensive)
  "michke": { s: 3, c: 4 }, // Sly/sneaky (insult)
  "nangto": { s: 3, c: 4 }, // Naked
  "poodmarani": { s: 3, c: 5 }, // Ass fucker (variant)
  "shuar": { s: 3, c: 4 }, // Pig (variant)
  "thor kheye mor": { s: 5, c: 5 }, // Die eating a kick (insult)
  "tor mayer boda": { s: 4, c: 4 }, // Your mother's pussy

  // Bengali script additions
  "বাঞ্চোদ": { s: 3, c: 4 }, // Banchod (sister f**ker)
  "বিচি": { s: 4, c: 4 }, // Bichi (testicle)
  "ধোনেরবাল": { s: 3, c: 4 }, // Pubic hair
  "গুদমারানি": { s: 3, c: 5 }, // Ass-fucker
  "খানকি মাগি": { s: 5, c: 4 }, // Prostitute compound
  "তোর মায়ের বোদা": { s: 4, c: 4 }, // Your mother's pussy
  "শূয়রের বাচ্চা": { s: 3, c: 4 }, // Son of a pig
  "নাঙ্গতা": { s: 3, c: 4 }, // Naked
  "গাধা": { s: 3, c: 4 }, // Donkey
  "লাঙ্গটা": { s: 3, c: 4 }, // Naked/shameless

  // More Bengali profanity - Roman script
  "baal choda": { s: 3, c: 4 }, // pubic hair f**ker
  "baler putki": { s: 3, c: 4 }, // pubic hair's arse
  "banchod sala": { s: 3, c: 4 }, // sister f**ker rascal
  "boga chusbi": { s: 4, c: 4 }, // will you suck the dick
  "boga kha": { s: 4, c: 4 }, // eat the dick
  "bokachod": { s: 1, c: 4 }, // stupid f**ker (variant)
  "boro magi": { s: 5, c: 4 }, // big prostitute
  "chagol": { s: 3, c: 4 }, // goat (insult)
  "chod khankir chele": { s: 5, c: 4 }, // f**k the prostitute's son
  "chodna magi": { s: 5, c: 4 }, // f**kable prostitute
  "chudir bap": { s: 1, c: 4 }, // father of a f**k (insult)
  "chudir pola": { s: 3, c: 4 }, // son of a f**k
  "dhon": { s: 4, c: 4 }, // penis
  "faaltu": { s: 3, c: 4 }, // worthless/useless
  "gaar marani": { s: 3, c: 4 }, // arse f**ker
  "gud mara": { s: 4, c: 4 }, // f**k the pussy
  "haramzadi": { s: 3, c: 4 }, // female bastard
  "hoga marao": { s: 3, c: 4 }, // get your arse f**ked
  "jhantu": { s: 3, c: 4 }, // pubic hair (insult)
  "khankir pola": { s: 5, c: 4 }, // son of a prostitute
  "khanki maal": { s: 5, c: 4 }, // prostitute goods
  "kuttir bachcha": { s: 3, c: 4 }, // son of a bitch
  "magir pola": { s: 5, c: 4 }, // prostitute's son
  "magir gude": { s: 5, c: 4 }, // prostitute's pussy
  "magi choda": { s: 5, c: 4 }, // prostitute f**ker
  "mama choda": { s: 3, c: 4 }, // uncle f**ker
  "matha kharap": { s: 3, c: 4 }, // crazy/mental
  "nangta kutta": { s: 3, c: 4 }, // naked dog
  "nirlojjo": { s: 3, c: 4 }, // shameless
  "potita": { s: 5, c: 4 }, // prostitute (formal)
  "putki": { s: 3, c: 4 }, // arse
  "putki mara": { s: 3, c: 4 }, // f**k the arse
  "putki marao": { s: 3, c: 4 }, // get your arse f**ked
  "rakhail": { s: 3, c: 5 }, // kept woman/mistress
  "shala badmash": { s: 3, c: 4 }, // rascal scoundrel
  "shalar pola": { s: 3, c: 4 }, // rascal's son
  "shuorer pola": { s: 3, c: 4 }, // pig's son
  "thobra": { s: 1, c: 4 }, // ugly face
  "tor baaper": { s: 1, c: 4 }, // your father's (start of insult)
  "tor mayer gud": { s: 4, c: 4 }, // your mother's pussy
  "tor putki marum": { s: 3, c: 4 }, // I'll f**k your arse
  "baal chhire": { s: 3, c: 4 }, // ripping pubic hair (insult)
  "chutia": { s: 1, c: 5 }, // idiot/fool (vulgar)
  "chodanir beta": { s: 3, c: 4 }, // son of a f**ker

  // Sylheti dialect
  "fua": { s: 3, c: 4 }, // f**k (Sylheti)
  "fua de": { s: 3, c: 4 }, // give a f**k (Sylheti)
  "fua kha": { s: 3, c: 4 }, // eat a f**k (Sylheti)
  "boga khaise": { s: 4, c: 4 }, // ate the dick (Sylheti)
  "futki": { s: 3, c: 4 }, // arse (Sylheti)
  "futki mara": { s: 3, c: 4 }, // f**k the arse (Sylheti)
  "xala": { s: 3, c: 4 }, // brother-in-law insult (Sylheti variant)
  "mainka": { s: 3, c: 4 }, // mother's (Sylheti insult)
  "khanki rand": { s: 5, c: 4 }, // prostitute whore

  // More Bengali script
  "ধোন": { s: 4, c: 4 }, // penis
  "পুটকি": { s: 3, c: 4 }, // arse
  "পুটকি মারা": { s: 3, c: 4 }, // f**k the arse
  "ছাগল": { s: 3, c: 4 }, // goat (insult)
  "পতিতা": { s: 5, c: 4 }, // prostitute (formal)
  "মাগির পোলা": { s: 5, c: 4 }, // prostitute's son
  "মাগির গুদে": { s: 5, c: 4 }, // prostitute's pussy
  "চোদনা মাগি": { s: 5, c: 4 }, // f**kable prostitute
  "খানকির পোলা": { s: 5, c: 4 }, // son of a prostitute
  "শালার পোলা": { s: 3, c: 4 }, // rascal's son
  "তোর পুটকি মারুম": { s: 3, c: 4 }, // I'll f**k your arse
  "তোর মায়ের গুদ": { s: 4, c: 4 }, // your mother's pussy
  "নিরলজ্জ": { s: 3, c: 4 }, // shameless
  "হারামজাদি": { s: 3, c: 4 }, // female bastard
  "বোকাচোদ": { s: 1, c: 4 }, // stupid f**ker
  "চুদির বাপ": { s: 1, c: 4 }, // father of a f**k (insult)
  "বড় মাগি": { s: 5, c: 4 }, // big prostitute
  "ফালতু": { s: 3, c: 4 }, // worthless/useless
  "মাথা খারাপ": { s: 3, c: 4 }, // crazy/mental
  "থোবড়া": { s: 1, c: 4 }, // ugly face
  "রাখাল": { s: 3, c: 4 }, // kept woman/mistress
  "চুদির পোলা": { s: 3, c: 4 }, // son of a f**k
  "গুদ মারা": { s: 4, c: 4 }, // f**k the pussy
  "নাঙ্গটা কুত্তা": { s: 3, c: 4 }, // naked dog

  // ========================================
  // === Extended Bengali Profanity (Roman) ===
  // ========================================
  "baler bal": { s: 3, c: 4 }, // Hair of pubic hair (extremely worthless)
  "baler chele": { s: 3, c: 4 }, // Son of pubic hair
  "banchoder bachcha": { s: 3, c: 5 }, // Sister fucker's child
  "bichi chipa": { s: 4, c: 4 }, // Testicle squeeze
  "bichi mara": { s: 4, c: 4 }, // Hit the testicles
  "bichi nosto": { s: 4, c: 4 }, // Ruined testicles
  "boga chosha": { s: 4, c: 4 }, // Dick sucker
  "boga chushbi": { s: 4, c: 4 }, // Will you suck the dick
  "boga dhor": { s: 4, c: 4 }, // Hold the dick
  "boga khabo": { s: 4, c: 4 }, // I'll eat the dick
  "boga tana": { s: 4, c: 4 }, // Pull the dick
  "bon choda": { s: 3, c: 5 }, // Sister fucker (variant)
  "bonchoda sala": { s: 3, c: 4 }, // Sister fucker bastard
  "bore dibo": { s: 3, c: 4 }, // Will shove in
  "boro boga": { s: 4, c: 4 }, // Big dick
  "boro gud": { s: 4, c: 4 }, // Big pussy
  "boro putki": { s: 3, c: 4 }, // Big ass
  "chal hoga mara": { s: 3, c: 5 }, // Go fuck the ass
  "choda kha": { s: 3, c: 5 }, // Eat fuck (insult)
  "chodani magi": { s: 5, c: 5 }, // Fuckable prostitute (variant)
  "chodna sal": { s: 3, c: 5 }, // Fucking rascal
  "chodon lag": { s: 3, c: 5 }, // Start fucking
  "chudbo": { s: 3, c: 5 }, // Will fuck
  "chudi tor maa": { s: 3, c: 5 }, // Fuck your mother
  "chudir ma": { s: 3, c: 5 }, // Mother of a fuck
  "dhar bichi": { s: 4, c: 4 }, // Hold the testicle
  "dhon chaata": { s: 4, c: 4 }, // Dick licker
  "dhon chosa": { s: 4, c: 4 }, // Dick sucker (variant)
  "dhoner baal chele": { s: 3, c: 4 }, // Son of a pubic hair (insult)
  "dhon khada": { s: 4, c: 4 }, // Erect penis
  "dhon mara": { s: 4, c: 4 }, // Dick hit
  "dhon tana": { s: 4, c: 4 }, // Dick pull
  "fatichod": { s: 3, c: 5 }, // Get-fucked (variant)
  "gabbu": { s: 3, c: 4 }, // Stinky (insult)
  "gaar mara": { s: 3, c: 5 }, // Fuck the ass (variant)
  "gaar marani sala": { s: 3, c: 4 }, // Ass-fucker bastard
  "gorom gud": { s: 4, c: 4 }, // Hot pussy (vulgar)
  "gude dhon dhukao": { s: 4, c: 4 }, // Put dick in pussy
  "gud faata": { s: 4, c: 4 }, // Pussy torn
  "guder bal chele": { s: 4, c: 4 }, // Son of a pussy hair
  "guder ras": { s: 4, c: 4 }, // Pussy juice (vulgar)
  "hoga boro": { s: 3, c: 4 }, // Big anus
  "hoga choda": { s: 3, c: 5 }, // Anus fucker
  "hoga dhon dhukao": { s: 4, c: 4 }, // Put dick in anus
  "hoga faata": { s: 3, c: 4 }, // Anus torn
  "hogay dhon": { s: 4, c: 4 }, // Dick in anus
  "jaat magi": { s: 5, c: 4 }, // Caste whore (insult)
  "jhantu sala": { s: 3, c: 4 }, // Pubic-haired bastard
  "khanki randi": { s: 5, c: 4 }, // Prostitute whore (compound)
  "khanki sali": { s: 5, c: 4 }, // Prostitute sister-in-law
  "khanki tor maa": { s: 5, c: 4 }, // Your mother the prostitute
  "kuttachod sala": { s: 3, c: 4 }, // Dog-fucker bastard
  "kuttar bal": { s: 3, c: 4 }, // Dog's hair (worthless)
  "langta magi": { s: 5, c: 4 }, // Naked prostitute
  "maa baba choda": { s: 3, c: 5 }, // Fuck the parents
  "maa choda": { s: 5, c: 5 }, // Mother fucker
  "maa chudi": { s: 5, c: 5 }, // Mother fucked
  "maa ke chod": { s: 3, c: 5 }, // Fuck the mother
  "magir bal": { s: 5, c: 4 }, // Prostitute's hair
  "magir chele hoga": { s: 5, c: 4 }, // Prostitute's son's anus
  "magi sali": { s: 5, c: 4 }, // Prostitute sister-in-law
  "mairi": { s: 3, c: 4 }, // Oh hell (expletive)
  "nongra kutta": { s: 3, c: 4 }, // Dirty dog
  "noshto magi": { s: 5, c: 4 }, // Corrupt prostitute
  "ore sala": { s: 3, c: 4 }, // Hey bastard
  "pandir chele": { s: 3, c: 4 }, // Pimp's son
  "patni choda": { s: 3, c: 5 }, // Wife fucker
  "poda": { s: 3, c: 4 }, // Burn/get lost (insult)
  "poda sala": { s: 3, c: 4 }, // Get lost bastard
  "shala badmaish": { s: 3, c: 4 }, // Rascal hooligan (variant)
  "shala bichi": { s: 4, c: 4 }, // Rascal testicle
  "shala chodna": { s: 3, c: 5 }, // Rascal fuckable
  "shalapola": { s: 3, c: 4 }, // Rascal's boy
  "shala tor maa": { s: 3, c: 4 }, // Rascal your mother
  "shoitan": { s: 3, c: 4 }, // Satan (insult)
  "shuor choda": { s: 3, c: 5 }, // Pig fucker
  "shuorer bal": { s: 3, c: 4 }, // Pig's hair (worthless)
  "shuorer bachcha sala": { s: 3, c: 4 }, // Pig's son bastard
  "tor baap choda": { s: 1, c: 4 }, // Your father's fucker
  "tor baaper bal": { s: 1, c: 4 }, // Your father's hair
  "tor baaper bichi": { s: 1, c: 4 }, // Your father's testicle
  "tor baaper dhon": { s: 1, c: 4 }, // Your father's dick
  "tor baaper hoga": { s: 1, c: 4 }, // Your father's anus
  "tor bon choda": { s: 3, c: 5 }, // Your sister's fucker
  "tor bon magi": { s: 5, c: 4 }, // Your sister the prostitute
  "tor maa chuda": { s: 3, c: 5 }, // Your mother got fucked
  "tor maa ke chode": { s: 3, c: 5 }, // Fuck your mother
  "tor maa magi": { s: 5, c: 4 }, // Your mother is a prostitute
  "tor mayer bichi": { s: 4, c: 4 }, // Your mother's testicle
  "tor mayer dhon": { s: 4, c: 4 }, // Your mother's dick
  "tor mayer hoga": { s: 3, c: 4 }, // Your mother's anus
  "tor putki fatar": { s: 3, c: 4 }, // Your ass will tear

  // ========================================
  // === Sylheti Dialect Extended ===
  // ========================================
  "fuainna": { s: 3, c: 5 }, // Fucking (Sylheti)
  "fua tor maa": { s: 3, c: 5 }, // Fuck your mother (Sylheti)
  "fua khai laise": { s: 3, c: 5 }, // Got fucked (Sylheti)
  "futki maira": { s: 3, c: 5 }, // Ass fucker (Sylheti)
  "fua de maa": { s: 3, c: 5 }, // Give a fuck mother (Sylheti)
  "xalar fua": { s: 3, c: 5 }, // Rascal's fuck (Sylheti)
  "boga xusbi": { s: 4, c: 4 }, // Will suck dick (Sylheti variant)
  "fuain": { s: 3, c: 5 }, // Fucking (Sylheti variant)
  "haiga": { s: 3, c: 4 }, // Anus (Sylheti)
  "haiga mara": { s: 3, c: 5 }, // Fuck the anus (Sylheti)
  "huinnya": { s: 3, c: 5 }, // Fucking (Sylheti variant)
  "khanki xala": { s: 5, c: 4 }, // Prostitute rascal (Sylheti)
  "kutta xala": { s: 3, c: 4 }, // Dog bastard (Sylheti)
  "mainka fua": { s: 3, c: 5 }, // Mother's fuck (Sylheti)
  "mainka gut": { s: 4, c: 4 }, // Mother's pussy (Sylheti)
  "mainka boga": { s: 4, c: 4 }, // Mother's dick (Sylheti)
  "xalar pola": { s: 3, c: 4 }, // Rascal's son (Sylheti)
  "xalar boga": { s: 4, c: 4 }, // Rascal's dick (Sylheti)
  "tar mainka": { s: 3, c: 4 }, // Your mother's (Sylheti insult)
  "futki nakki": { s: 3, c: 4 }, // Ass licker (Sylheti)

  // ========================================
  // === Chittagonian Dialect ===
  // ========================================
  "foinya": { s: 3, c: 5 }, // Fucker (Chittagonian)
  "foinya de": { s: 3, c: 5 }, // Give a fuck (Chittagonian)
  "maayre foinya": { s: 5, c: 5 }, // Mother fucker (Chittagonian)
  "gaand maira": { s: 3, c: 5 }, // Ass fucker (Chittagonian)
  "boga foinya": { s: 4, c: 5 }, // Dick fucker (Chittagonian)
  "futki foinya": { s: 3, c: 5 }, // Ass fucker (Chittagonian variant)
  "kutta foinya": { s: 3, c: 5 }, // Dog fucker (Chittagonian)
  "magi foinya": { s: 5, c: 5 }, // Prostitute fucker (Chittagonian)
  "hazeer baizza": { s: 3, c: 4 }, // Pig's son (Chittagonian)
  "hazeer foinya": { s: 3, c: 5 }, // Pig fucker (Chittagonian)
  "tore maayre": { s: 3, c: 4 }, // Your mother's (Chittagonian insult)
  "badaima": { s: 3, c: 4 }, // Scoundrel (Chittagonian)
  "dangor boga": { s: 4, c: 4 }, // Big dick (Chittagonian)
  "dangor futki": { s: 3, c: 4 }, // Big ass (Chittagonian)
  "maagir foinya": { s: 5, c: 5 }, // Prostitute fucker (Chittagonian)
  "shala foinya": { s: 3, c: 5 }, // Rascal fucker (Chittagonian)
  "tor abba": { s: 1, c: 4 }, // Your father (Chittagonian insult starter)
  "tor abbar boga": { s: 1, c: 4 }, // Your father's dick (Chittagonian)
  "khanki foinya": { s: 5, c: 5 }, // Prostitute fucker (Chittagonian)
  "nangta foinya": { s: 3, c: 5 }, // Naked fucker (Chittagonian)

  // ========================================
  // === More Bengali Script Additions ===
  // ========================================
  "বালের বাল": { s: 3, c: 4 }, // Baler bal (hair of pubic hair)
  "বালের ছেলে": { s: 3, c: 4 }, // Baler chele (son of pubic hair)
  "বোগা চোষা": { s: 4, c: 4 }, // Boga chosha (dick sucker)
  "বোগা ধর": { s: 4, c: 4 }, // Boga dhor (hold the dick)
  "বোন চোদা": { s: 3, c: 5 }, // Bon choda (sister fucker)
  "চোদ খা": { s: 3, c: 5 }, // Chod kha (eat fuck)
  "চুদবো": { s: 3, c: 5 }, // Chudbo (will fuck)
  "চুদি তোর মা": { s: 3, c: 5 }, // Chudi tor maa (fuck your mother)
  "ধোন চাটা": { s: 4, c: 4 }, // Dhon chaata (dick licker)
  "ধোন চোষা": { s: 4, c: 4 }, // Dhon chosa (dick sucker)
  "ধোন খাড়া": { s: 4, c: 4 }, // Dhon khada (erect penis)
  "গুদে ধোন ঢোকাও": { s: 4, c: 4 }, // Gude dhon dhukao (put dick in pussy)
  "গুদ ফাটা": { s: 4, c: 4 }, // Gud faata (pussy torn)
  "গুদের রস": { s: 4, c: 4 }, // Guder ras (pussy juice)
  "হোগা চোদা": { s: 3, c: 5 }, // Hoga choda (anus fucker)
  "খানকি রান্ডী": { s: 5, c: 4 }, // Khanki randi (prostitute whore)
  "খানকি তোর মা": { s: 5, c: 4 }, // Khanki tor maa (your mother prostitute)
  "মা চোদা": { s: 5, c: 5 }, // Maa choda (mother fucker)
  "মা চুদি": { s: 5, c: 5 }, // Maa chudi (mother fucked)
  "নোংরা কুত্তা": { s: 3, c: 4 }, // Nongra kutta (dirty dog)
  "ওরে শালা": { s: 3, c: 4 }, // Ore sala (hey bastard)
  "পোড়া": { s: 3, c: 4 }, // Poda (burn/get lost)
  "পোড়া শালা": { s: 3, c: 4 }, // Poda sala (get lost bastard)
  "শয়তান": { s: 3, c: 4 }, // Shoitan (satan)
  "শূয়র চোদা": { s: 3, c: 5 }, // Shuor choda (pig fucker)
  "তোর বাপ চোদা": { s: 1, c: 4 }, // Tor baap choda (your father's fucker)
  "তোর বাপের বাল": { s: 1, c: 4 }, // Tor baaper bal (your father's hair)
  "তোর বাপের ধোন": { s: 1, c: 4 }, // Tor baaper dhon (your father's dick)
  "তোর বোন চোদা": { s: 3, c: 5 }, // Tor bon choda (your sister's fucker)
  "তোর বোন মাগি": { s: 5, c: 4 }, // Tor bon magi (your sister prostitute)
  "তোর মা চুদা": { s: 3, c: 5 }, // Tor maa chuda (your mother got fucked)
  "তোর মা মাগি": { s: 5, c: 4 }, // Tor maa magi (your mother is prostitute)
  "তোর মায়ের ধোন": { s: 4, c: 4 }, // Tor mayer dhon (your mother's dick)
  "তোর পুটকি ফাটর": { s: 1, c: 4 }, // Tor putki fatar (your ass will tear)
  "ফোইন্যা": { s: 3, c: 5 }, // Foinya (fucker - Chittagonian)
  "হাজির বাইজ্যা": { s: 3, c: 4 }, // Hazeer baizza (pig's son - Chittagonian)
  "বদাইমা": { s: 3, c: 4 }, // Badaima (scoundrel - Chittagonian)
  "ফুয়াইন্না": { s: 3, c: 5 }, // Fuainna (fucking - Sylheti)
  "হাইগা": { s: 3, c: 4 }, // Haiga (anus - Sylheti)
  "হাইগা মারা": { s: 3, c: 5 }, // Haiga mara (fuck anus - Sylheti)

  // ========================================
  // === Internet Slang (Bengali Speakers) ===
  // ========================================
  "magi sala": { s: 5, c: 4 }, // Prostitute rascal (texting)
  "bkchd": { s: 2, c: 3 }, // Abbreviation for bokachoda
  "mchd": { s: 5, c: 5 }, // Abbreviation for madarchod
  "bnchd": { s: 2, c: 3 }, // Abbreviation for banchod
  "khankir baccha": { s: 5, c: 4 }, // Son of a prostitute (texting)
  "magir put": { s: 5, c: 4 }, // Prostitute's son (texting)
  "bal fela": { s: 2, c: 3 }, // Throw pubic hair (worthless)
  "guder chul": { s: 4, c: 3 }, // Pussy hair (variant)
  "shala mc": { s: 5, c: 5 }, // Rascal motherfucker
  "magi mc": { s: 5, c: 5 }, // Prostitute motherfucker
  "bokachoda sala": { s: 3, c: 4 }, // Stupid fucker bastard
  "chod toke": { s: 3, c: 5 }, // Fuck you
  "amar boga kha": { s: 4, c: 3 }, // Eat my dick
  "tor gude amar dhon": { s: 4, c: 3 }, // My dick in your pussy
  "chup kor kuttar baccha": { s: 2, c: 3 }, // Shut up son of a dog
  "tui ekta magi": { s: 5, c: 4 }, // You are a prostitute
  "tui ekta kutta": { s: 2, c: 3 }, // You are a dog
  "matha nosto": { s: 2, c: 3 }, // Mind corrupt (crazy)
  "nirlojjo magi": { s: 5, c: 4 }, // Shameless prostitute
  "nirlojjo kutta": { s: 2, c: 3 }, // Shameless dog

  // ========================================
  // === More Romanized Bengali Profanity ===
  // ========================================
  "bal chushi": { s: 3, c: 5 }, // Pubic hair sucker
  "baler chudi": { s: 3, c: 5 }, // Pubic hair's fuck
  "bichi chushi": { s: 4, c: 5 }, // Testicle sucker
  "boga dhukao": { s: 4, c: 5 }, // Insert dick
  "boga khabi": { s: 4, c: 5 }, // Will you eat dick
  "boga size": { s: 4, c: 5 }, // Dick size (insult)
  "bon ke chod": { s: 3, c: 5 }, // Fuck the sister
  "bonchod harami": { s: 3, c: 5 }, // Sister fucker bastard
  "boro bichi": { s: 4, c: 5 }, // Big testicle
  "chagol choda": { s: 3, c: 5 }, // Goat fucker
  "choda tor baap": { s: 1, c: 5 }, // Fuck your father
  "choder bachcha": { s: 3, c: 5 }, // Fucker's child
  "chodi tor bon": { s: 3, c: 5 }, // Fucked your sister
  "chudani sala magi": { s: 5, c: 5 }, // Female fucker rascal prostitute
  "chudir ma ba": { s: 1, c: 5 }, // Mother father of fuck
  "dhon chusha": { s: 4, c: 5 }, // Dick sucked
  "dhon lamba": { s: 4, c: 5 }, // Long dick (insult)
  "dhon mota": { s: 1, c: 5 }, // Fat dick (insult)
  "dhoner aga": { s: 4, c: 5 }, // Tip of dick
  "dhoner chosa": { s: 4, c: 5 }, // Dick sucking
  "gabli": { s: 1, c: 5 }, // Ugly (insult)
  "gaar chata": { s: 3, c: 5 }, // Ass licker
  "gaar fata": { s: 3, c: 5 }, // Ass torn
  "gaar mairbi": { s: 3, c: 5 }, // Will fuck your ass
  "gorom boga": { s: 4, c: 5 }, // Hot dick
  "gud chata": { s: 4, c: 5 }, // Pussy licker
  "gud khabo": { s: 4, c: 5 }, // Will eat pussy
  "gud theke baire aye": { s: 4, c: 5 }, // Come out of the pussy (insult)
  "guder pani": { s: 4, c: 5 }, // Pussy water
  "gudhkhana": { s: 3, c: 5 }, // Ass place (vulgar)
  "heda kha": { s: 3, c: 5 }, // Eat shit
  "hogay lathi": { s: 3, c: 5 }, // Stick in anus
  "jaat khanki": { s: 5, c: 5 }, // Caste prostitute
  "khanki sala bonchod": { s: 5, c: 5 }, // Prostitute rascal sister fucker
  "khanki magi tor maa": { s: 5, c: 5 }, // Your mother is a prostitute whore
  "kuttar gaar": { s: 3, c: 5 }, // Dog's ass
  "kuttar boga": { s: 4, c: 5 }, // Dog's dick
  "lathhi mar": { s: 3, c: 5 }, // Beat with stick
  "maal sala": { s: 3, c: 5 }, // Hot goods bastard (objectifying)
  "magi chodar bachcha": { s: 5, c: 5 }, // Prostitute fucker's child
  "magir futki": { s: 5, c: 5 }, // Prostitute's ass
  "nongra sala": { s: 3, c: 5 }, // Dirty rascal
  "oshlil": { s: 3, c: 5 }, // Obscene
  "pandir magi": { s: 5, c: 5 }, // Pimp's prostitute
  "sala baal": { s: 3, c: 5 }, // Rascal pubic hair
  "sala boga khor": { s: 4, c: 5 }, // Rascal dick eater
  "sala khanki chod": { s: 5, c: 5 }, // Rascal prostitute fucker
  "sala magi chod": { s: 5, c: 5 }, // Rascal prostitute fucker (variant)
  "shoitan sala": { s: 3, c: 5 }, // Satan rascal
  "shuorer gaar": { s: 3, c: 5 }, // Pig's ass
  "shuorer boga": { s: 4, c: 5 }, // Pig's dick
  "thukra magi": { s: 5, c: 5 }, // Spittle prostitute (disgusting)
  "tor baaper gaar": { s: 1, c: 5 }, // Your father's ass
  "tor baaper putki": { s: 1, c: 5 }, // Your father's anus
  "tor bon khanki": { s: 5, c: 5 }, // Your sister is a prostitute
  "tor bon maal": { s: 3, c: 5 }, // Your sister is hot goods (objectifying)
  "tor gude boga": { s: 4, c: 5 }, // Dick in your pussy
  "tor ma beshya": { s: 5, c: 5 }, // Your mother is a prostitute
  "tor ma randi": { s: 5, c: 5 }, // Your mother is a whore
  "tor maa ke chudum": { s: 3, c: 5 }, // I'll fuck your mother
  "tor mayer futki": { s: 3, c: 5 }, // Your mother's ass
  "tor mayer putki": { s: 3, c: 5 }, // Your mother's anus
  "voda": { s: 4, c: 5 }, // Vagina (variant)
  "vodai": { s: 4, c: 5 }, // Vagina person (insult)

  // ========================================
  // === Banglish (Bengali-English Mix) ===
  // ========================================
  "fucking bokachoda": { s: 1, c: 4 }, // Fucking stupid fucker
  "bloody shala": { s: 3, c: 4 }, // Bloody rascal
  "damn khanki": { s: 5, c: 4 }, // Damn prostitute
  "fucking magi": { s: 5, c: 5 }, // Fucking prostitute
  "shit magi": { s: 5, c: 5 }, // Shit prostitute
  "asshole gandu": { s: 3, c: 4 }, // Asshole (Banglish)
  "bastard haramjada": { s: 3, c: 4 }, // Bastard (Banglish)
  "bitch magi": { s: 5, c: 4 }, // Bitch prostitute (Banglish)
  "son of a magi": { s: 5, c: 4 }, // Son of a prostitute (Banglish)
  "stupid bokachoda": { s: 1, c: 4 }, // Stupid fucker (Banglish)
  "shut up shala": { s: 3, c: 4 }, // Shut up rascal (Banglish)
  "fuck off shala": { s: 3, c: 5 }, // Fuck off rascal (Banglish)
  "die shala": { s: 5, c: 5 }, // Die rascal (Banglish)
  "ugly magi": { s: 1, c: 4 }, // Ugly prostitute (Banglish)
  "cheap khanki": { s: 5, c: 4 }, // Cheap prostitute (Banglish)
  "dirty nongra kutta": { s: 3, c: 4 }, // Dirty dirty dog (Banglish)
  "loser bokachoda": { s: 1, c: 4 }, // Loser stupid fucker (Banglish)
  "idiot sala": { s: 1, c: 4 }, // Idiot rascal (Banglish)
  "piece of shit shala": { s: 3, c: 5 }, // Piece of shit rascal (Banglish)
  "useless faaltu": { s: 3, c: 4 }, // Useless worthless (Banglish)
  "disgusting nongra": { s: 3, c: 4 }, // Disgusting dirty (Banglish)
  "pathetic bokachoda": { s: 1, c: 4 }, // Pathetic stupid fucker (Banglish)
  "bloody harami": { s: 3, c: 4 }, // Bloody bastard (Banglish)
  "fucking haramjada": { s: 3, c: 4 }, // Fucking bastard (Banglish)
  "go to hell shala": { s: 3, c: 4 }, // Go to hell rascal (Banglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "bokachoda haramjada": { s: 3, c: 4 }, // Stupid fucker bastard
  "khanki magi haramjada": { s: 3, c: 4 }, // Prostitute bastard
  "kuttar bachcha haramjada": { s: 3, c: 4 }, // Dog's son bastard
  "shuorer bachcha bokachoda": { s: 1, c: 4 }, // Pig's son stupid fucker
  "magi sala bonchod": { s: 5, c: 5 }, // Prostitute rascal sister fucker
  "haramjada kuttar bachcha": { s: 3, c: 4 }, // Bastard dog's son
  "bokachoda magir chele": { s: 1, c: 4 }, // Stupid fucker prostitute's son
  "khanki shuorer bachcha": { s: 5, c: 4 }, // Prostitute pig's son
  "shala bokachoda haramjada": { s: 3, c: 4 }, // Rascal stupid fucker bastard
  "tor maa khanki magi": { s: 5, c: 4 }, // Your mother is a prostitute whore
  "tor baap pandir": { s: 1, c: 4 }, // Your father is a pimp
  "tor bon boro magi": { s: 5, c: 4 }, // Your sister is a big prostitute
  "sala kuttar bachcha bonchod": { s: 3, c: 5 }, // Rascal dog's son sister fucker
  "bokachoda chuda tor maa": { s: 1, c: 4 }, // Stupid fucker fuck your mother
  "haramjada shuorer bachcha sala": { s: 3, c: 4 }, // Bastard pig's son rascal
  "khanki magir chele sala": { s: 5, c: 4 }, // Prostitute's son rascal
  "chud tor ma ba dui jon": { s: 3, c: 5 }, // Fuck both your parents
  "tor maa baap dui jon magi": { s: 5, c: 4 }, // Both your parents are prostitutes
  "sala tor goshthi chudi": { s: 3, c: 5 }, // Rascal your whole family fucked

  // ========================================
  // === More Bengali Script Additions ===
  // ========================================
  "বালের চুদি": { s: 3, c: 5 }, // Baler chudi (pubic hair's fuck)
  "বিচি চুশি": { s: 4, c: 4 }, // Bichi chushi (testicle sucker)
  "বোগা ঢোকাও": { s: 4, c: 4 }, // Boga dhukao (insert dick)
  "ছাগল চোদা": { s: 3, c: 5 }, // Chagol choda (goat fucker)
  "চোদের বাচ্চা": { s: 3, c: 5 }, // Choder bachcha (fucker's child)
  "ধোনের চোষা": { s: 4, c: 4 }, // Dhoner chosha (dick sucking)
  "গুদ চাটা": { s: 4, c: 4 }, // Gud chata (pussy licker)
  "গুদের পানি": { s: 4, c: 4 }, // Guder pani (pussy water)
  "হেদা খা": { s: 3, c: 5 }, // Heda kha (eat shit)
  "জাত খানকি": { s: 5, c: 4 }, // Jaat khanki (caste prostitute)
  "কুত্তার গার": { s: 3, c: 4 }, // Kuttar gaar (dog's ass)
  "কুত্তার বোগা": { s: 4, c: 4 }, // Kuttar boga (dog's dick)
  "মাগি চোদার বাচ্চা": { s: 5, c: 5 }, // Magi chodar bachcha (prostitute fucker's child)
  "শূয়রের গার": { s: 3, c: 4 }, // Shuorer gaar (pig's ass)
  "তোর বোনের পুটকি": { s: 3, c: 4 }, // Tor boner putki (your sister's anus)
  "তোর বাপের পুটকি": { s: 1, c: 4 }, // Tor baaper putki (your father's anus)
  "তোর মায়ের পুটকি": { s: 3, c: 4 }, // Tor mayer putki (your mother's anus)
  "তোর বোন খানকি": { s: 5, c: 4 }, // Tor bon khanki (your sister is a prostitute)
  "তোর মা বেশ্যা": { s: 5, c: 4 }, // Tor ma beshya (your mother is a prostitute)
  "তোর মা রান্ডী": { s: 5, c: 4 }, // Tor ma randi (your mother is a whore)
  "তোর গোষ্ঠী চুদি": { s: 3, c: 5 }, // Tor goshthi chudi (your whole family fucked)
  "তোর মা বাপ দুই জন মাগি": { s: 5, c: 4 }, // Tor maa baap dui jon magi (both parents prostitutes)
  "বোকাচোদা হারামজাদা": { s: 3, c: 4 }, // Bokachoda haramjada (stupid fucker bastard)
  "খানকি শূয়রের বাচ্চা": { s: 5, c: 4 }, // Khanki shuorer bachcha (prostitute pig's son)
  "ভোদা চাটা": { s: 4, c: 4 }, // Bhoda chata (vagina licker)
  "ভোদাইর বাচ্চা": { s: 1, c: 4 }, // Bhodair bachcha (idiot's child)
  "পাগলের বাচ্চা": { s: 3, c: 4 }, // Pagoler bachcha (madman's child)
  "নোংরা কুত্তার বাচ্চা": { s: 3, c: 4 }, // Nongra kuttar bachcha (dirty dog's child)
  "হারামির বাচ্চা": { s: 3, c: 4 }, // Haramir bachcha (bastard's child)
  "মাদারচোদ শালা": { s: 5, c: 5 }, // Madarchod shala (motherfucker rascal)
  "বোকাচোদ শালা": { s: 1, c: 4 }, // Bokachod shala (stupid fucker rascal)
  "গাণ্ডু শালা": { s: 3, c: 4 }, // Gandu shala (asshole rascal)
  "মাগি শালা": { s: 5, c: 4 }, // Magi shala (prostitute rascal)
  "চুদির বাই": { s: 3, c: 5 }, // Chudir bhai (brother of fuck)
  "তোর মায়ের বোগা খাবো": { s: 4, c: 4 }, // Tor mayer boga khabo (I'll eat your mother's dick)
  "তোর মায়ের গুদ ফাটাবো": { s: 1, c: 4 }, // Tor mayer gud fatabo (I'll tear your mother's pussy)
  "শালা মাদারচোদ বোকাচোদা": { s: 1, c: 4 }, // Shala madarchod bokachoda (rascal motherfucker stupid fucker)

  // ========================================
  // === Noakhali Dialect ===
  // ========================================
  "fuainno": { s: 3, c: 5 }, // Fucker (Noakhali)
  "fuainno re": { s: 3, c: 5 }, // Hey fucker (Noakhali)
  "toor mayre fua": { s: 3, c: 5 }, // Fuck your mother (Noakhali)
  "futgi maira": { s: 3, c: 5 }, // Ass fucker (Noakhali)
  "toor boinno fua": { s: 3, c: 5 }, // Fuck your sister (Noakhali)
  "haiga maira re": { s: 3, c: 5 }, // Hey ass fucker (Noakhali)
  "magir fut fua": { s: 5, c: 5 }, // Prostitute's ass fuck (Noakhali)

  // ========================================
  // === Rangpuri/Rajbangshi Dialect ===
  // ========================================
  "fukinni": { s: 3, c: 5 }, // Fucker (Rangpuri)
  "mayre fukinni": { s: 5, c: 5 }, // Mother fucker (Rangpuri)
  "sala fukinni": { s: 3, c: 5 }, // Rascal fucker (Rangpuri)
  "kutar baicha": { s: 3, c: 4 }, // Dog's son (Rangpuri)
  "magir baicha": { s: 5, c: 4 }, // Prostitute's son (Rangpuri)
  "bongal choda": { s: 3, c: 5 }, // Bengali fucker (Rangpuri insult)
  "gadhar baicha": { s: 3, c: 4 }, // Donkey's son (Rangpuri)

  // ========================================
  // === Internet Slang Extended ===
  // ========================================
  "bkchodr bchcha": { s: 2, c: 3 }, // Abbreviation for bokachoda bachcha
  "mc sala bkchd": { s: 2, c: 3 }, // MC rascal BC (texting)
  "magir put mchd": { s: 5, c: 4 }, // Prostitute's son MC (texting)
  "khkimagi": { s: 2, c: 3 }, // Abbreviation for khanki magi
  "shlabnchl": { s: 2, c: 3 }, // Abbreviation compound
  "brshla": { s: 2, c: 3 }, // Bad rascal (texting)
  "tor maa mgi": { s: 5, c: 4 }, // Your mother prostitute (texting)
  "amr bga kha": { s: 4, c: 3 }, // Eat my dick (texting)
  "chdtoke": { s: 3, c: 5 }, // Fuck you (texting)
  "shla bkchda": { s: 1, c: 4 }, // Rascal stupid fucker (texting)
  "hrmjda": { s: 2, c: 3 }, // Haramjada abbreviation
  "ktrbchcha": { s: 2, c: 3 }, // Kuttar bachcha abbreviation
  "mgi chd": { s: 2, c: 3 }, // Magi chod abbreviation
  "bnchdshla": { s: 2, c: 3 }, // Bonchod shala abbreviation

  // ========================================
  // === More Sexual Terms ===
  // ========================================
  "dhon chosha de": { s: 4, c: 4 }, // Give dick sucking
  "boga chosha magi": { s: 5, c: 4 }, // Dick sucking prostitute
  "guder ras kha": { s: 4, c: 4 }, // Eat pussy juice
  "tor putki fatabo": { s: 4, c: 4 }, // I'll tear your ass
  "tor gude amar dhon dhukabo": { s: 4, c: 4 }, // I'll put my dick in your pussy
  "dhon chaatni": { s: 4, c: 4 }, // Dick licking woman
  "putki chaatni": { s: 4, c: 4 }, // Ass licking woman
  "boga tana magi": { s: 5, c: 4 }, // Dick pulling prostitute
  "gud kha sala": { s: 4, c: 4 }, // Eat pussy rascal
  "bichi chaata": { s: 4, c: 4 }, // Testicle licker
  "dhoner matha chosa": { s: 4, c: 4 }, // Suck the head of the dick
  "gudmarani sala bonchod": { s: 4, c: 5 }, // Ass fucker rascal sister fucker
  "hogay boga dhukai": { s: 4, c: 4 }, // Dick inserted in anus
  "gudmarani bachcha": { s: 4, c: 5 }, // Ass fucker's child
  "dhoner ras": { s: 4, c: 4 }, // Dick juice (semen)
  "bicher pani": { s: 4, c: 4 }, // Testicle water (vulgar)

  // ========================================
  // === More Evasion Spellings ===
  // ========================================
  "b0kachoda": { s: 1, c: 5 }, // Stupid fucker (evasion)
  "kh@nki": { s: 5, c: 5 }, // Prostitute (evasion)
  "m@gi": { s: 5, c: 5 }, // Prostitute (evasion)
  "sh@la": { s: 3, c: 5 }, // Rascal (evasion)
  "ch0da": { s: 3, c: 5 }, // Fuck (evasion)
  "h@ramjada": { s: 3, c: 5 }, // Bastard (evasion)
  "g@ndu": { s: 3, c: 5 }, // Asshole (evasion)
  "b@l": { s: 3, c: 5 }, // Pubic hair (evasion)
  "dh0n": { s: 4, c: 5 }, // Penis (evasion)
  "putk1": { s: 3, c: 5 }, // Arse (evasion)
  "b0ga": { s: 4, c: 5 }, // Dick (evasion)
  "bnchdshala": { s: 3, c: 5 }, // Bonchod shala compound

  // ========================================
  // === Barisal Dialect ===
  // ========================================
  "fuinna tor maa": { s: 3, c: 5 }, // Fuck your mother (Barisal)
  "chodon tor bon": { s: 3, c: 5 }, // Fuck your sister (Barisal)
  "sala magir gude": { s: 5, c: 4 }, // Rascal prostitute's pussy (Barisal)
  "heda kha sala": { s: 3, c: 5 }, // Eat shit rascal (Barisal)

  // ========================================
  // === Extended Bengali Script Profanity ===
  // ========================================
  "ভোদা খোর": { s: 4, c: 4 }, // Bhoda khor (vagina eater)
  "বালের ছেড়া": { s: 3, c: 4 }, // Baler chheda (torn pubic hair, worthless)
  "গুদমারানি মাগি": { s: 5, c: 5 }, // Gudmarani magi (ass-fucker prostitute)
  "ধোনের আগা চোষা": { s: 4, c: 4 }, // Dhoner aga chosha (tip of dick sucker)
  "পুটকি ফাটাবো": { s: 1, c: 4 }, // Putki fatabo (I'll tear the ass)
  "গুদ ফাটাবো": { s: 1, c: 4 }, // Gud fatabo (I'll tear the pussy)
  "বোগা কাটবো": { s: 4, c: 4 }, // Boga katbo (I'll cut the dick)
  "বিচি মাসলাবো": { s: 4, c: 4 }, // Bichi maslabo (I'll crush the testicles)
  "ধোনের পানি": { s: 4, c: 4 }, // Dhoner pani (dick water, semen)
  "গুদের মধু": { s: 4, c: 4 }, // Guder modhu (pussy honey)
  "পুটকির ফুটো": { s: 3, c: 4 }, // Putkir futo (asshole)
  "বালের ঝাড়": { s: 3, c: 4 }, // Baler jhar (pubic hair bush)
  "মাগির দুধ": { s: 5, c: 4 }, // Magir dudh (prostitute's milk)
  "কুত্তার গুদ": { s: 4, c: 4 }, // Kuttar gud (dog's pussy)
  "শূয়রের পুটকি": { s: 3, c: 4 }, // Shuorer putki (pig's anus)
  "গাধার পুটকি": { s: 3, c: 4 }, // Gadhar putki (donkey's anus)
  "ছাগলের বোগা": { s: 4, c: 4 }, // Chagoler boga (goat's dick)
  "গরুর গুদ": { s: 4, c: 4 }, // Gorur gud (cow's pussy)
  "ঘোড়ার বোগা": { s: 4, c: 4 }, // Ghorar boga (horse's dick)
  "বানরের গুদ": { s: 4, c: 4 }, // Banorer gud (monkey's pussy)
  "তোর মায়ের দুধ খাই": { s: 3, c: 4 }, // Tor mayer dudh khai (I eat your mother's milk, insulting)
  "তোর মা কুকুরের মতো": { s: 3, c: 4 }, // Tor maa kukurer moto (your mother is like a dog)
  "তোর বাপ ভিক্ষুক": { s: 1, c: 4 }, // Tor baap bhikkhuk (your father is a beggar)
  "তোর বোন বাজারের মাগি": { s: 5, c: 4 }, // Tor bon bajarer magi (your sister is a market prostitute)
  "চামার": { s: 3, c: 4 }, // Chamar (caste slur)
  "মেথর": { s: 3, c: 4 }, // Methor (sweeper caste slur)
  "ডোম": { s: 3, c: 4 }, // Dom (funeral worker caste slur)
  "হেঁদা": { s: 3, c: 4 }, // Heda (feces)
  "হাগু": { s: 3, c: 4 }, // Hagu (feces, childish)
  "মুত": { s: 3, c: 4 }, // Mut (urine)
  "পাদ": { s: 3, c: 4 }, // Pad (fart)
  "পাদুরে": { s: 3, c: 4 }, // Padure (one who farts)
  "গু": { s: 3, c: 4 }, // Gu (feces, vulgar)
  "গু খা": { s: 3, c: 4 }, // Gu kha (eat feces)
  "মুত খা": { s: 3, c: 4 }, // Mut kha (drink urine)
  "পাদ শুঁকে মর": { s: 5, c: 5 }, // Pad shunke mor (smell fart and die)
  "হেঁদার কীট": { s: 3, c: 4 }, // Hedar keet (feces worm)
  "গুর পোকা": { s: 3, c: 5 }, // Gur poka (shit bug)
  "নর্দমার কীট": { s: 3, c: 4 }, // Nordomar keet (drain worm)
  "ড্রেনের ইঁদুর": { s: 3, c: 4 }, // Drener indur (drain rat)
  "ময়লার পোকা": { s: 3, c: 4 }, // Moylar poka (garbage bug)
  "ভাঁড়": { s: 3, c: 4 }, // Bhand (clown, buffoon)
  "বেজন্মা": { s: 3, c: 4 }, // Bejonma (ill-born)
  "অশ্লীল": { s: 3, c: 4 }, // Oshlil (obscene)
  "বদমাশ": { s: 3, c: 4 }, // Bodmash (crook)
  "লম্পট": { s: 3, c: 4 }, // Lompot (lecherous)
  "ব্যভিচারী": { s: 3, c: 4 }, // Byobhichari (adulterer)
  "ব্যভিচারিণী": { s: 3, c: 4 }, // Byobhicharini (adulteress)
  "কুলটা": { s: 3, c: 4 }, // Kulota (unchaste woman)
  "খারাপ মেয়ে": { s: 3, c: 4 }, // Kharap meye (bad girl)
  "নষ্ট মেয়ে": { s: 3, c: 4 }, // Noshto meye (spoiled girl)
  "চরিত্রহীন": { s: 3, c: 4 }, // Choritrohin (characterless)
  "বেহায়া": { s: 3, c: 4 }, // Behaya (shameless)
  "নির্লজ্জ": { s: 3, c: 4 }, // Nirlojjo (shameless, formal)
  "পাজি": { s: 3, c: 4 }, // Paji (rascal)
  "বজ্জাত": { s: 3, c: 4 }, // Bojjat (naughty/evil)
  "গুণ্ডা": { s: 3, c: 4 }, // Gunda (thug)
  "গুণ্ডামি": { s: 3, c: 4 }, // Gundami (thuggery)
  "দালাল": { s: 3, c: 4 }, // Dalal (broker/pimp)
  "টাউট": { s: 3, c: 4 }, // Taut (tout/agent)
  "বাটপাড়": { s: 3, c: 4 }, // Batpar (cheat)

  // ========================================
  // === Extended Romanized Bengali Profanity ===
  // ========================================
  "bhoda khor": { s: 4, c: 5 }, // Vagina eater
  "baler chheda": { s: 3, c: 5 }, // Torn pubic hair (worthless)
  "gudmarani magi": { s: 5, c: 5 }, // Ass-fucker prostitute
  "dhoner aga chosha": { s: 4, c: 5 }, // Tip of dick sucker
  "putki fatabo": { s: 3, c: 5 }, // I'll tear the ass
  "gud fatabo": { s: 4, c: 5 }, // I'll tear the pussy
  "boga katbo": { s: 4, c: 5 }, // I'll cut the dick
  "bichi maslabo": { s: 4, c: 5 }, // I'll crush testicles
  "dhoner pani": { s: 4, c: 5 }, // Dick water (semen)
  "guder modhu": { s: 4, c: 5 }, // Pussy honey
  "putkir futo": { s: 3, c: 5 }, // Asshole
  "baler jhar": { s: 3, c: 5 }, // Pubic hair bush
  "magir dudh": { s: 5, c: 5 }, // Prostitute's milk
  "kuttar gud": { s: 4, c: 5 }, // Dog's pussy
  "shuorer putki": { s: 3, c: 5 }, // Pig's anus
  "gadhar putki": { s: 3, c: 5 }, // Donkey's anus
  "chagoler boga": { s: 4, c: 5 }, // Goat's dick
  "gorur gud": { s: 4, c: 5 }, // Cow's pussy
  "ghorar boga": { s: 4, c: 5 }, // Horse's dick
  "banorer gud": { s: 4, c: 5 }, // Monkey's pussy
  "tor mayer dudh khai": { s: 3, c: 5 }, // I eat your mother's milk
  "tor maa kukurer moto": { s: 3, c: 5 }, // Your mother is like a dog
  "tor baap bhikkhuk": { s: 1, c: 5 }, // Your father is a beggar
  "tor bon bajarer magi": { s: 5, c: 5 }, // Your sister market prostitute
  "chamar": { s: 3, c: 5 }, // Caste slur
  "methor": { s: 3, c: 5 }, // Sweeper caste slur
  "dom": { s: 3, c: 5 }, // Funeral worker caste slur
  "hagu": { s: 3, c: 5 }, // Feces (childish)
  "mut": { s: 3, c: 4 }, // Urine
  "padure": { s: 3, c: 5 }, // One who farts
  "gu": { s: 3, c: 5 }, // Feces
  "gu kha": { s: 3, c: 5 }, // Eat feces
  "mut kha": { s: 3, c: 5 }, // Drink urine
  "pad shunke mor": { s: 5, c: 5 }, // Smell fart and die
  "hedar keet": { s: 3, c: 5 }, // Feces worm
  "gur poka": { s: 3, c: 5 }, // Shit bug
  "nordomar keet": { s: 3, c: 5 }, // Drain worm
  "drener indur": { s: 3, c: 5 }, // Drain rat
  "moylar poka": { s: 3, c: 5 }, // Garbage bug
  "bhand": { s: 1, c: 3 }, // Buffoon
  "bejonma": { s: 3, c: 5 }, // Ill-born
  "bodmash": { s: 3, c: 5 }, // Crook
  "lompot": { s: 3, c: 5 }, // Lecherous
  "byobhichari": { s: 3, c: 5 }, // Adulterer
  "byobhicharini": { s: 3, c: 5 }, // Adulteress
  "kulota": { s: 3, c: 5 }, // Unchaste woman
  "kharap meye": { s: 3, c: 5 }, // Bad girl
  "noshto meye": { s: 3, c: 5 }, // Spoiled girl
  "choritrohin": { s: 3, c: 5 }, // Characterless
  "behaya": { s: 1, c: 4 }, // Shameless
  "paji": { s: 1, c: 4 }, // Rascal
  "bojjat": { s: 3, c: 5 }, // Naughty/evil
  "gunda": { s: 3, c: 5 }, // Thug
  "gundami": { s: 3, c: 5 }, // Thuggery
  "dalal": { s: 1, c: 4 }, // Broker/pimp
  "taut": { s: 3, c: 5 }, // Tout/agent
  "batpar": { s: 3, c: 5 }, // Cheat

  // ========================================
  // === Extended Compound Insults (Roman) ===
  // ========================================
  "bokachoda kuttar bachcha sala": { s: 3, c: 4 }, // Stupid fucker dog's son bastard
  "magi tor maa tor bon": { s: 5, c: 4 }, // Prostitute your mother your sister
  "khanki magi bokachoda haramjada sala": { s: 3, c: 4 }, // Prostitute stupid fucker bastard rascal
  "tor goshthi ke chudi": { s: 3, c: 5 }, // Fuck your entire clan
  "tor baaper baap choda": { s: 1, c: 4 }, // Your grandfather's fucker
  "tor naani ke chodi": { s: 3, c: 5 }, // Fucked your grandmother
  "tor dadu ke choda": { s: 1, c: 4 }, // Fucked your grandfather
  "tor khandaan chuda": { s: 3, c: 5 }, // Your dynasty is fucked
  "shala nongra kuttar bachcha magi": { s: 5, c: 4 }, // Rascal dirty dog's child prostitute
  "khanki magi kuttar bachcha shuorer pola": { s: 5, c: 4 }, // Prostitute dog's child pig's son
  "tor putki te boga dhukabo ar beriye anbo": { s: 4, c: 4 }, // I'll insert and remove dick from your ass
  "tor gude amar dhon dhukiye chodon korbo": { s: 4, c: 5 }, // I'll put my dick in your pussy and fuck
  "chup kor noyto boga katbo": { s: 4, c: 4 }, // Shut up or I'll cut the dick
  "tui magi tor maa magi tor bon magi": { s: 5, c: 4 }, // You prostitute your mother prostitute your sister prostitute
  "amra sob tore chudbo": { s: 3, c: 5 }, // We'll all fuck you
  "tor shob kichhu shesh korbo": { s: 5, c: 5 }, // I'll finish everything of yours (threat)
  "khanki magir put shuorer bachcha kuttar bachcha": { s: 5, c: 4 }, // Prostitute's son pig's child dog's child
  "bokachoda haramjada maderchoder bachcha": { s: 3, c: 4 }, // Stupid fucker bastard motherfucker's child
  "tor putki boro, boga dhukbe na": { s: 4, c: 4 }, // Your ass is big, dick won't fit
  "tor gude bichi nai": { s: 4, c: 4 }, // Your pussy has no balls (senseless insult)
  "ekta boro boga diye tor gude dhukabo": { s: 4, c: 4 }, // I'll insert a big dick in your pussy
  "tor bon ke bazaar e bechbo": { s: 1, c: 4 }, // I'll sell your sister in the market
  "tor maa ke bazaar e bechbo": { s: 1, c: 4 }, // I'll sell your mother in the market
  "haramjada nongra choda kuttar bachcha magi": { s: 3, c: 4 }, // Bastard dirty fucker dog's child prostitute
  "bokachoda sala banchod maderchod": { s: 3, c: 4 }, // Stupid fucker bastard sisterfucker motherfucker

  // ========================================
  // === Extended Sylheti Dialect ===
  // ========================================
  "fuainno sala": { s: 3, c: 4 }, // Fucker bastard (Sylheti)
  "fuainno kuttar baicha": { s: 3, c: 5 }, // Fucker dog's child (Sylheti)
  "xalar xala fuainno": { s: 3, c: 5 }, // Rascal's rascal fucker (Sylheti)
  "boga chuinna": { s: 4, c: 4 }, // Dick sucking (Sylheti)
  "haiga fatainno": { s: 3, c: 4 }, // Ass tearing (Sylheti)
  "gut fatainno": { s: 4, c: 4 }, // Pussy tearing (Sylheti)
  "mainka gut te boga": { s: 4, c: 4 }, // Dick in mother's pussy (Sylheti)
  "tar boinno fuainno": { s: 3, c: 5 }, // His sister fucker (Sylheti)
  "tar bap fuainno": { s: 1, c: 4 }, // His father fucker (Sylheti)
  "xalar gut khainno": { s: 4, c: 4 }, // Rascal's pussy eater (Sylheti)
  "kutta xalar baicha": { s: 3, c: 4 }, // Dog rascal's child (Sylheti)
  "hazir xala fuainno": { s: 3, c: 5 }, // Pig rascal fucker (Sylheti)
  "mainka boga khainno": { s: 4, c: 4 }, // Mother's dick eater (Sylheti)
  "tar abba fuainno": { s: 1, c: 4 }, // His father fucker (Sylheti variant)
  "tar amma fuainno": { s: 5, c: 5 }, // His mother fucker (Sylheti)
  "fuainno tar goshthi": { s: 3, c: 5 }, // Fuck his clan (Sylheti)
  "boga tanna xala": { s: 4, c: 4 }, // Dick pulling rascal (Sylheti)
  "gut mairra xala": { s: 4, c: 5 }, // Pussy fucker rascal (Sylheti)
  "futki chattinna": { s: 3, c: 4 }, // Ass licking (Sylheti)
  "haiga chattinna": { s: 3, c: 4 }, // Anus licking (Sylheti)
  "boga chinna xala": { s: 4, c: 4 }, // Dick cutting rascal (Sylheti)
  "mainka haiga fua": { s: 3, c: 5 }, // Mother's anus fuck (Sylheti)
  "boinno gut fua": { s: 4, c: 5 }, // Sister's pussy fuck (Sylheti)
  "xalar bap fua": { s: 1, c: 4 }, // Rascal's father fuck (Sylheti)

  // ========================================
  // === Extended Chittagonian Dialect ===
  // ========================================
  "foinya sala banchod": { s: 3, c: 5 }, // Fucker rascal sisterfucker (Chittagonian)
  "tore maayre foinya sala": { s: 5, c: 5 }, // Your mother fucker rascal (Chittagonian)
  "maayre gudmara": { s: 3, c: 5 }, // Mother's ass fucker (Chittagonian)
  "boinno foinya sala": { s: 3, c: 5 }, // Sister fucker rascal (Chittagonian)
  "hazeer bach foinya": { s: 3, c: 5 }, // Pig's child fucker (Chittagonian)
  "kuttar foinya sala": { s: 3, c: 5 }, // Dog fucker rascal (Chittagonian)
  "dangor gudmare": { s: 3, c: 5 }, // Big ass fucker (Chittagonian)
  "dangor boga kha": { s: 4, c: 4 }, // Eat big dick (Chittagonian)
  "futki fattainne": { s: 3, c: 4 }, // Ass tearing (Chittagonian)
  "tore abbar boga kha": { s: 1, c: 4 }, // Eat your father's dick (Chittagonian)
  "maayre foinya kutta": { s: 5, c: 5 }, // Mother fucker dog (Chittagonian)
  "maagi sala foinya": { s: 5, c: 5 }, // Prostitute rascal fucker (Chittagonian)
  "tore maayre tore abba foinya": { s: 1, c: 4 }, // Your mother your father fucker (Chittagonian)
  "khanki maagi foinya sala": { s: 5, c: 5 }, // Prostitute fucker rascal (Chittagonian)
  "dangor gudde boga dhuga": { s: 4, c: 4 }, // Big ass dick insert (Chittagonian)
  "tore boinno gudmare": { s: 3, c: 5 }, // Your sister's ass fuck (Chittagonian)
  "sala foinya kuttar baizza": { s: 3, c: 5 }, // Rascal fucker dog's son (Chittagonian)
  "hazeer foinya sala badaima": { s: 3, c: 5 }, // Pig fucker rascal scoundrel (Chittagonian)

  // ========================================
  // === Extended Noakhali Dialect ===
  // ========================================
  "fuainno re sala": { s: 3, c: 5 }, // Hey fucker rascal (Noakhali)
  "toor mayre futgi": { s: 3, c: 4 }, // Your mother's ass (Noakhali)
  "toor boinno futgi": { s: 3, c: 4 }, // Your sister's ass (Noakhali)
  "futgi maira sala": { s: 3, c: 5 }, // Ass fucker rascal (Noakhali)
  "toor mayre gudmara": { s: 4, c: 5 }, // Your mother's pussy fucker (Noakhali)
  "kutta fuainno sala": { s: 3, c: 5 }, // Dog fucker rascal (Noakhali)
  "magir futgi fua sala": { s: 5, c: 5 }, // Prostitute's ass fuck rascal (Noakhali)
  "toor abbar boga kha": { s: 1, c: 4 }, // Eat your father's dick (Noakhali)
  "sala fuainno kuttar baccha": { s: 3, c: 5 }, // Rascal fucker dog's child (Noakhali)
  "shuorer baccha fuainno": { s: 3, c: 5 }, // Pig's child fucker (Noakhali)
  "haiga fuainno sala": { s: 3, c: 5 }, // Anus fucker rascal (Noakhali)
  "toor goshthi fuainno": { s: 3, c: 5 }, // Your clan fucker (Noakhali)
  "magir fut maira re": { s: 5, c: 5 }, // Prostitute's ass fucker (Noakhali)
  "boga chattainno re": { s: 4, c: 4 }, // Dick licker hey (Noakhali)
  "gudmara re sala fuainno": { s: 4, c: 5 }, // Pussy fucker hey rascal fucker (Noakhali)

  // ========================================
  // === Extended Rangpuri Dialect ===
  // ========================================
  "fukinni sala kutta": { s: 3, c: 5 }, // Fucker rascal dog (Rangpuri)
  "mayre fukinni kuttar baicha": { s: 5, c: 5 }, // Mother fucker dog's child (Rangpuri)
  "gadhar baicha fukinni": { s: 3, c: 5 }, // Donkey's child fucker (Rangpuri)
  "magir baicha fukinni sala": { s: 5, c: 5 }, // Prostitute's child fucker rascal (Rangpuri)
  "bongal fukinni sala": { s: 3, c: 5 }, // Bengali fucker rascal (Rangpuri)
  "shuorer baicha fukinni": { s: 3, c: 5 }, // Pig's child fucker (Rangpuri)
  "kutta fukinni gadhar baicha": { s: 3, c: 5 }, // Dog fucker donkey's child (Rangpuri)
  "tor may fukinni sala": { s: 5, c: 5 }, // Your mother fucker rascal (Rangpuri)
  "tor bai fukinni": { s: 3, c: 5 }, // Your sister fucker (Rangpuri)
  "tor bap fukinni": { s: 1, c: 4 }, // Your father fucker (Rangpuri)
  "sala fukinni harami": { s: 3, c: 4 }, // Rascal fucker bastard (Rangpuri)
  "magir fukinni sala banchod": { s: 5, c: 5 }, // Prostitute fucker rascal sisterfucker (Rangpuri)

  // ========================================
  // === More Bengali Script Extended ===
  // ========================================
  "বোকাচোদা কুত্তার বাচ্চা শালা": { s: 1, c: 4 }, // Stupid fucker dog's son rascal
  "মাগি তোর মা তোর বোন": { s: 5, c: 4 }, // Prostitute your mother your sister
  "খানকি মাগি বোকাচোদা হারামজাদা শালা": { s: 3, c: 4 }, // Prostitute stupid fucker bastard rascal
  "তোর গোষ্ঠী কে চুদি": { s: 3, c: 5 }, // Fuck your entire clan
  "তোর বাপের বাপ চোদা": { s: 1, c: 4 }, // Your grandfather's fucker
  "তোর নানী কে চোদি": { s: 3, c: 5 }, // Fucked your grandmother
  "তোর দাদু কে চোদা": { s: 1, c: 4 }, // Fucked your grandfather
  "তোর খান্দান চুদা": { s: 3, c: 5 }, // Your dynasty is fucked
  "শালা নোংরা কুত্তার বাচ্চা মাগি": { s: 5, c: 4 }, // Rascal dirty dog's child prostitute
  "খানকি মাগি কুত্তার বাচ্চা শূয়রের পোলা": { s: 5, c: 4 }, // Prostitute dog's child pig's son
  "চুপ কর নয়তো বোগা কাটবো": { s: 4, c: 4 }, // Shut up or I'll cut the dick
  "তুই মাগি তোর মা মাগি তোর বোন মাগি": { s: 5, c: 4 }, // You prostitute your mother prostitute your sister prostitute
  "আমরা সব তোরে চুদবো": { s: 3, c: 5 }, // We'll all fuck you
  "তোর সব কিছু শেষ করবো": { s: 3, c: 4 }, // I'll finish everything of yours
  "বোকাচোদা হারামজাদা মাদারচোদের বাচ্চা": { s: 3, c: 4 }, // Stupid fucker bastard motherfucker's child
  "একটা বড় বোগা দিয়ে তোর গুদে ঢোকাবো": { s: 4, c: 4 }, // I'll insert a big dick in your pussy
  "তোর বোন কে বাজারে বেচবো": { s: 3, c: 4 }, // I'll sell your sister in the market
  "তোর মা কে বাজারে বেচবো": { s: 3, c: 4 }, // I'll sell your mother in the market
  "হারামজাদা নোংরা চোদা কুত্তার বাচ্চা মাগি": { s: 3, c: 4 }, // Bastard dirty fucker dog's child prostitute
  "বোকাচোদা শালা বাঞ্চোদ মাদারচোদ": { s: 1, c: 4 }, // Stupid fucker rascal sisterfucker motherfucker
  "ভোদাখোর": { s: 4, c: 4 }, // Vagina eater

  // ========================================
  // === Extended Internet Slang ===
  // ========================================
  "bkchd shla bnchd": { s: 2, c: 3 }, // Bokachoda shala banchod abbreviation
  "mchd kttrbchch": { s: 5, c: 5 }, // Madarchod kuttar bachcha abbreviation
  "shla nngra mgi": { s: 2, c: 3 }, // Shala nongra magi abbreviation
  "trmaa mgi": { s: 2, c: 3 }, // Tor maa magi abbreviation
  "trbon mgi": { s: 2, c: 3 }, // Tor bon magi abbreviation
  "trmaa chd": { s: 2, c: 3 }, // Tor maa chod abbreviation
  "trbon chd": { s: 2, c: 3 }, // Tor bon chod abbreviation
  "trbaap bhndchd": { s: 2, c: 3 }, // Tor baap banchod abbreviation
  "trgoshthi chd": { s: 2, c: 3 }, // Tor goshthi chod abbreviation
  "khki mgi rdi": { s: 2, c: 3 }, // Khanki magi randi abbreviation
  "bkchd hrmjd shla kttrbchch": { s: 2, c: 3 }, // Compound abbreviation
  "shlr pla bkchd": { s: 2, c: 3 }, // Shalar pola bokachoda abbreviation
  "mgi chdr bchch shla": { s: 2, c: 3 }, // Magi chodar bachcha shala abbreviation
  "nngra ktta shla bkchd": { s: 2, c: 3 }, // Nongra kutta shala bokachoda abbreviation

  // ========================================
  // === Extended Banglish Mix ===
  // ========================================
  "fucking magi tor maa": { s: 5, c: 5 }, // Fucking prostitute your mother
  "bloody khanki magi": { s: 5, c: 4 }, // Bloody prostitute
  "shit bokachoda sala": { s: 1, c: 4 }, // Shit stupid fucker rascal
  "asshole kuttar bachcha": { s: 3, c: 4 }, // Asshole dog's child
  "bastard shuorer bachcha": { s: 3, c: 4 }, // Bastard pig's child
  "bitch tor bon": { s: 3, c: 4 }, // Bitch your sister
  "son of a khanki magi": { s: 5, c: 4 }, // Son of a prostitute
  "mother fucker madarchod sala": { s: 5, c: 5 }, // Motherfucker (redundant)
  "sister fucker banchod": { s: 3, c: 5 }, // Sisterfucker (redundant)
  "go die sala bokachoda": { s: 1, c: 4 }, // Go die rascal stupid fucker
  "kill yourself sala magi": { s: 5, c: 5 }, // Kill yourself rascal prostitute
  "trash bokachoda": { s: 1, c: 4 }, // Trash stupid fucker
  "garbage nongra kutta sala": { s: 3, c: 4 }, // Garbage dirty dog rascal
  "worthless faaltu magi": { s: 5, c: 4 }, // Worthless prostitute
  "pathetic bokachoda haramjada": { s: 3, c: 4 }, // Pathetic stupid fucker bastard
  "disgusting nongra kuttar bachcha": { s: 3, c: 4 }, // Disgusting dirty dog's child
  "useless faaltu bokachoda": { s: 1, c: 4 }, // Useless stupid fucker
  "ugly thobra magi sala": { s: 1, c: 4 }, // Ugly face prostitute rascal
  "stupid bokachoda sala harami": { s: 3, c: 4 }, // Stupid fucker rascal bastard
  "dumbass bokachoda haramjada sala": { s: 3, c: 4 }, // Dumbass stupid fucker bastard rascal

  // ========================================
  // === Extended Threats ===
  // ========================================
  "tor putki chirbo": { s: 5, c: 5 }, // I'll rip your ass
  "tor gude boga dhukiye fatabo": { s: 5, c: 5 }, // I'll insert dick and tear your pussy
  "tor boga katbo": { s: 5, c: 5 }, // I'll cut your dick
  "tor bichi maslabo": { s: 5, c: 5 }, // I'll crush your testicles
  "toke maira felbo": { s: 5, c: 5 }, // I'll beat you dead
  "tor haddi bhangbo": { s: 5, c: 5 }, // I'll break your bones
  "toke kutta diye khawaibo": { s: 5, c: 5 }, // I'll feed you to dogs
  "tor mukh bhangbo": { s: 5, c: 5 }, // I'll break your face
  "tor daat bhangbo": { s: 5, c: 5 }, // I'll break your teeth
  "toke drain e felbo": { s: 5, c: 5 }, // I'll throw you in the drain
  "toke gutter e felbo": { s: 5, c: 5 }, // I'll throw you in the gutter
  "toke naali te felbo": { s: 5, c: 5 }, // I'll throw you in the drain
  "tor jibonshesh korbo": { s: 5, c: 5 }, // I'll end your life
  "toke chire felbo": { s: 5, c: 5 }, // I'll rip you apart
  "toke pochiye dibo": { s: 5, c: 5 }, // I'll rot you away
  "tor shob shesh": { s: 5, c: 5 }, // Everything of yours is over

  // ========================================
  // === Extended Scatological (Roman) ===
  // ========================================
  "heda kha sala magi": { s: 5, c: 5 }, // Eat shit rascal prostitute
  "gu kha kuttar bachcha": { s: 3, c: 5 }, // Eat shit dog's child
  "mut kha shuorer pola": { s: 3, c: 4 }, // Drink piss pig's son
  "tor mukhe heda": { s: 3, c: 5 }, // Shit in your face
  "tor mukhe gu": { s: 3, c: 4 }, // Feces in your face
  "tor mukhe mut": { s: 3, c: 4 }, // Urine in your face
  "heda magir pola": { s: 5, c: 5 }, // Shit prostitute's son
  "gu magir bachcha": { s: 5, c: 4 }, // Feces prostitute's child
  "heda khor sala": { s: 3, c: 5 }, // Shit eater rascal
  "gu khor magi": { s: 5, c: 4 }, // Feces eater prostitute
  "mut khor kutta": { s: 3, c: 4 }, // Urine eater dog
  "pad magir chele": { s: 5, c: 4 }, // Fart prostitute's son
  "paad sungh sala": { s: 3, c: 4 }, // Smell fart rascal
  "tatti kha bokachoda": { s: 1, c: 4 }, // Eat feces stupid fucker
  "gobar kha haramjada": { s: 3, c: 4 }, // Eat cow dung bastard
  "naali te gire mor": { s: 5, c: 5 }, // Fall in drain and die
  "gutter te gire mor": { s: 5, c: 5 }, // Fall in gutter and die
  "heda te doobe mor": { s: 5, c: 5 }, // Drown in shit and die

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "b0kach0da": { s: 1, c: 5 }, // Stupid fucker evasion
  "kh@nk1": { s: 5, c: 5 }, // Prostitute evasion
  "m@g1": { s: 5, c: 5 }, // Prostitute evasion
  "sh@l@": { s: 3, c: 5 }, // Rascal evasion
  "ch0d@": { s: 3, c: 5 }, // Fuck evasion
  "h@r@mjad@": { s: 3, c: 5 }, // Bastard evasion
  "g@nd00": { s: 3, c: 5 }, // Asshole evasion
  "b@al": { s: 3, c: 5 }, // Pubic hair evasion
  "b0g@": { s: 4, c: 5 }, // Dick evasion
  "madarc4od": { s: 5, c: 5 }, // Motherfucker evasion
  "b@nch0d": { s: 3, c: 5 }, // Sisterfucker evasion
  "kutt@r b@cchha": { s: 3, c: 5 }, // Dog's child evasion
  "shu0rer b@cchha": { s: 3, c: 5 }, // Pig's child evasion
  "kh@nk1 m@g1": { s: 5, c: 5 }, // Prostitute compound evasion
  "b0kach0da sh@l@": { s: 1, c: 5 }, // Stupid fucker rascal evasion
  "h@r@m1": { s: 3, c: 5 }, // Bastard evasion
  "n0ngr@": { s: 3, c: 5 }, // Dirty evasion
  "f@@ltu": { s: 3, c: 5 }, // Worthless evasion

  // ========================================
  // === Extended Compound Animal Insults ===
  // ========================================
  "kuttar jaat": { s: 1, c: 4 }, // Dog breed (insult)
  "shuorer jaat": { s: 1, c: 4 }, // Pig breed (insult)
  "gadhar jaat": { s: 1, c: 4 }, // Donkey breed (insult)
  "chagoler jaat": { s: 1, c: 4 }, // Goat breed (insult)
  "kukurer bachcha sala": { s: 1, c: 4 }, // Dog's child rascal
  "birar bachcha": { s: 1, c: 4 }, // Cat's child (insult)
  "chucher bachcha": { s: 1, c: 4 }, // Rat's child (insult)
  "shaaper bachcha": { s: 1, c: 4 }, // Snake's child (insult)
  "bichchur bachcha": { s: 1, c: 4 }, // Scorpion's child (insult)
  "kuttar theke ghatiya": { s: 1, c: 4 }, // Worse than a dog
  "shuorer theke nongra": { s: 1, c: 4 }, // Dirtier than a pig
  "gadhar theke boka": { s: 1, c: 4 }, // Stupider than a donkey
  "chagoler theke bokachoda": { s: 1, c: 4 }, // Stupider than a goat
  "kukurer moto bhoke": { s: 1, c: 4 }, // Barks like a dog
  "shuorer moto kha": { s: 1, c: 4 }, // Eats like a pig
  "gadhar moto kutta": { s: 1, c: 4 }, // Dog like a donkey
  "bandar theke kujjho": { s: 1, c: 4 }, // Uglier than a monkey
  "baknar theke ghatiya": { s: 1, c: 4 }, // Worse than a crane
  "shapla sala": { s: 1, c: 4 }, // Lotus rascal (Sylheti insult)
  "hajir bachcha sala": { s: 1, c: 4 }, // Pig's child rascal (Chittagonian variant)
  "kuththa sala": { s: 1, c: 4 }, // Dog rascal
  "shuor sala": { s: 1, c: 4 }, // Pig rascal
  "gadha sala": { s: 1, c: 4 }, // Donkey rascal
  "chagol sala": { s: 1, c: 4 }, // Goat rascal
  "bandar sala": { s: 1, c: 4 }, // Monkey rascal
  "bichhur pola": { s: 1, c: 4 }, // Scorpion's son
  "shaaper pola": { s: 1, c: 4 }, // Snake's son
  "chucher pola": { s: 1, c: 4 }, // Rat's son
  "birar pola": { s: 1, c: 4 }, // Cat's son (insult)

  // ========================================
  // === Extended Bengali Script (Threats) ===
  // ========================================
  "তোর পুটকি চিরবো": { s: 5, c: 5 }, // I'll rip your ass
  "তোর গুদে বোগা ঢোকিয়ে ফাটাবো": { s: 5, c: 5 }, // I'll insert dick and tear pussy
  "তোর বোগা কাটবো": { s: 5, c: 5 }, // I'll cut your dick
  "তোর বিচি মাসলাবো": { s: 5, c: 5 }, // I'll crush your testicles
  "তোকে মাইরা ফেলবো": { s: 5, c: 5 }, // I'll beat you dead
  "তোর হাড্ডি ভাংবো": { s: 5, c: 5 }, // I'll break your bones
  "তোকে কুত্তা দিয়ে খাওয়াইবো": { s: 5, c: 5 }, // I'll feed you to dogs
  "তোর মুখ ভাংবো": { s: 5, c: 5 }, // I'll break your face
  "তোকে ড্রেনে ফেলবো": { s: 5, c: 5 }, // I'll throw you in drain
  "তোকে নালীতে ফেলবো": { s: 5, c: 5 }, // I'll throw you in drain
  "তোর জীবনশেষ করবো": { s: 5, c: 5 }, // I'll end your life
  "তোকে চিরে ফেলবো": { s: 5, c: 5 }, // I'll rip you apart
  "তোর দাঁত ভাংবো": { s: 5, c: 5 }, // I'll break your teeth
  "তোকে পচিয়ে দিবো": { s: 5, c: 5 }, // I'll rot you away

  // ========================================
  // === More Religious/Caste Slurs ===
  // ========================================
  "malaun sala": { s: 5, c: 4 }, // Non-Muslim slur rascal
  "chamar sala": { s: 5, c: 4 }, // Caste slur rascal
  "methor sala": { s: 5, c: 4 }, // Sweeper caste rascal
  "dom sala": { s: 5, c: 4 }, // Funeral worker rascal
  "neche jaater": { s: 5, c: 4 }, // Low caste
  "jaat mara": { s: 5, c: 4 }, // Caste beaten (insult)
  "jaat nai": { s: 5, c: 4 }, // No caste (insult)
  "jaat chor": { s: 5, c: 4 }, // Caste thief
  "jolahar pola": { s: 5, c: 4 }, // Weaver's son (caste insult)
  "dhopar pola": { s: 5, c: 4 }, // Washerman's son (caste insult)
  "naapiter pola": { s: 5, c: 4 }, // Barber's son (caste insult)
  "muchir pola": { s: 5, c: 4 }, // Cobbler's son (caste insult)
  "hadi sala": { s: 5, c: 4 }, // Low caste rascal
  "haddi sala": { s: 5, c: 4 }, // Low caste rascal (variant)

  // ========================================
  // === Extended Sexual Terms ===
  // ========================================
  "boga chushi de": { s: 4, c: 4 }, // Give dick sucking
  "guder ras chushi de": { s: 4, c: 4 }, // Suck the pussy juice
  "boga chushi magi": { s: 5, c: 4 }, // Dick sucking prostitute
  "gudmarani randi": { s: 5, c: 5 }, // Ass fucker whore
  "dhon chata magi": { s: 5, c: 4 }, // Dick licker prostitute
  "putki chata sala": { s: 4, c: 4 }, // Ass licker rascal
  "bichi chata magi": { s: 5, c: 4 }, // Testicle licker prostitute
  "dhon dhukano magi": { s: 5, c: 4 }, // Dick inserter prostitute
  "gud dhukano sala": { s: 4, c: 4 }, // Pussy inserter rascal
  "putki dhukano magi": { s: 5, c: 4 }, // Ass inserter prostitute
  "chosha magi": { s: 5, c: 4 }, // Sucking prostitute
  "chata magi sala": { s: 5, c: 4 }, // Licking prostitute rascal
  "dhon mota magi": { s: 1, c: 4 }, // Fat dick prostitute
  "dhon lamba sala": { s: 4, c: 4 }, // Long dick rascal
  "boga chhoto sala": { s: 4, c: 4 }, // Small dick rascal
  "gud tight magi": { s: 5, c: 4 }, // Tight pussy prostitute
  "putki tight sala": { s: 4, c: 4 }, // Tight ass rascal
  "dhoner pani kha": { s: 4, c: 4 }, // Eat dick water (semen)
  "guder pani chushi": { s: 4, c: 4 }, // Suck pussy water
  "bichi masal magi": { s: 5, c: 4 }, // Testicle crusher prostitute
  "dhon katani": { s: 4, c: 4 }, // Dick cutter (female)
  "boga katani magi": { s: 5, c: 4 }, // Dick cutter prostitute
  "gudmarani khanki magi": { s: 5, c: 5 }, // Ass fucker prostitute whore
  "putki fatani magi": { s: 5, c: 4 }, // Ass tearer prostitute
  "gud fatani sala": { s: 4, c: 4 }, // Pussy tearer rascal

  // ========================================
  // === More Extended Bengali Compound Insults ===
  // ========================================
  "tor maa randi khanki magi": { s: 5, c: 4 }, // Your mother is a whore prostitute
  "tor bon randi khanki magi": { s: 5, c: 4 }, // Your sister is a whore prostitute
  "tor baap dalla sala": { s: 1, c: 4 }, // Your father is a pimp rascal
  "tor dadu choda sala": { s: 1, c: 4 }, // Your grandfather fucker rascal
  "tor naani magi": { s: 5, c: 4 }, // Your grandmother is a prostitute
  "tor khandaan er sob magi": { s: 5, c: 4 }, // Your entire dynasty are prostitutes
  "tor goshthi er sob bokachoda": { s: 1, c: 4 }, // Your entire clan are stupid fuckers
  "tor maa ke dhon diye chudi": { s: 4, c: 5 }, // Fucked your mother with dick
  "tor bon ke boga diye chudi": { s: 4, c: 5 }, // Fucked your sister with dick
  "tor baap er putki fatai": { s: 1, c: 4 }, // Tore your father's ass
  "tor mayer putki te boga dhukiye chudlam": { s: 4, c: 5 }, // Inserted dick in mother's ass and fucked
  "tor boner gude amar dhon dhukiye chudlam": { s: 4, c: 5 }, // Inserted dick in sister's pussy and fucked
  "tor maa ke bazaar er sob lok chude": { s: 3, c: 5 }, // Everyone in market fucks your mother
  "tor bon ke sob lok chude": { s: 3, c: 5 }, // Everyone fucks your sister
  "tor maa ke pagol kutta chode": { s: 3, c: 5 }, // Mad dog fucks your mother
  "tor maa ke shuor chode": { s: 3, c: 5 }, // Pig fucks your mother
  "tor maa ke gadha chode": { s: 3, c: 5 }, // Donkey fucks your mother
  "tor mayer dhon ache": { s: 4, c: 4 }, // Your mother has a dick (insult)
  "tor baaper gud ache": { s: 1, c: 4 }, // Your father has a pussy (insult)
  "tor maa hijra": { s: 1, c: 4 }, // Your mother is a eunuch
  "tor baap hijra": { s: 1, c: 4 }, // Your father is a eunuch
  "tor bon hijra": { s: 1, c: 4 }, // Your sister is a eunuch
  "hijra sala": { s: 1, c: 4 }, // Eunuch rascal
  "hijra magi": { s: 5, c: 4 }, // Eunuch prostitute
  "nangta hijra sala": { s: 1, c: 4 }, // Naked eunuch rascal
  "bhodai hijra": { s: 1, c: 4 }, // Idiot eunuch
  "pagol hijra sala": { s: 1, c: 4 }, // Mad eunuch rascal
  "noshto hijra": { s: 1, c: 4 }, // Corrupt eunuch
  "lompot sala": { s: 1, c: 4 }, // Lecherous rascal
  "byobhichari sala": { s: 1, c: 4 }, // Adulterer rascal
  "kulota magi sala": { s: 5, c: 4 }, // Unchaste prostitute rascal
  "choritrohin magi": { s: 5, c: 4 }, // Characterless prostitute
  "behaya magi sala": { s: 5, c: 4 }, // Shameless prostitute rascal
  "paji sala magi": { s: 5, c: 4 }, // Rascal rascal prostitute
  "bojjat sala bokachoda": { s: 1, c: 4 }, // Evil rascal stupid fucker
  "gunda sala bokachoda": { s: 1, c: 4 }, // Thug rascal stupid fucker
  "dalal sala khanki": { s: 5, c: 4 }, // Pimp rascal prostitute
  "batpar sala harami": { s: 3, c: 4 }, // Cheat rascal bastard
  "lompot harami sala": { s: 3, c: 4 }, // Lecherous bastard rascal
  "byobhichari harami": { s: 3, c: 4 }, // Adulterous bastard
  "noshto harami sala": { s: 3, c: 4 }, // Corrupt bastard rascal

  // ========================================
  // === More Bengali Script Compound ===
  // ========================================
  "তোর মা রান্ডী খানকি মাগি": { s: 5, c: 5 }, // Your mother is whore prostitute
  "তোর বোন রান্ডী খানকি মাগি": { s: 5, c: 5 }, // Your sister is whore prostitute
  "তোর বাপ দাল্লা শালা": { s: 1, c: 4 }, // Your father is pimp rascal
  "তোর দাদু চোদা শালা": { s: 1, c: 4 }, // Your grandfather fucker rascal
  "তোর নানী মাগি": { s: 5, c: 5 }, // Your grandmother is prostitute
  "তোর খান্দানের সব মাগি": { s: 5, c: 5 }, // Your entire dynasty prostitutes
  "তোর গোষ্ঠীর সব বোকাচোদা": { s: 1, c: 4 }, // Your entire clan stupid fuckers
  "তোর মা কে ধোন দিয়ে চুদি": { s: 4, c: 5 }, // Fucked mother with dick
  "তোর বোন কে বোগা দিয়ে চুদি": { s: 4, c: 5 }, // Fucked sister with dick
  "তোর বাপের পুটকি ফাটাই": { s: 1, c: 4 }, // Tore father's ass
  "তোর মায়ের পুটকিতে বোগা ঢোকিয়ে চুদলাম": { s: 4, c: 5 }, // Inserted dick in mother's ass
  "তোর বোনের গুদে আমার ধোন ঢোকিয়ে চুদলাম": { s: 4, c: 5 }, // Inserted dick in sister's pussy
  "তোর মা কে বাজারের সব লোক চুদে": { s: 3, c: 5 }, // Everyone fucks your mother
  "তোর মা কে পাগল কুত্তা চোদে": { s: 3, c: 5 }, // Mad dog fucks your mother
  "তোর মা কে শূয়র চোদে": { s: 3, c: 5 }, // Pig fucks your mother
  "তোর মা কে গাধা চোদে": { s: 3, c: 5 }, // Donkey fucks your mother
  "তোর মায়ের ধোন আছে": { s: 4, c: 5 }, // Your mother has a dick
  "তোর বাপের গুদ আছে": { s: 1, c: 4 }, // Your father has a pussy
  "তোর মা হিজড়া": { s: 3, c: 5 }, // Your mother is a eunuch
  "তোর বাপ হিজড়া": { s: 1, c: 4 }, // Your father is a eunuch
  "হিজড়া শালা": { s: 3, c: 5 }, // Eunuch rascal
  "হিজড়া মাগি": { s: 5, c: 5 }, // Eunuch prostitute
  "নাঙ্গতা হিজড়া শালা": { s: 3, c: 5 }, // Naked eunuch rascal
  "ভোদাই হিজড়া": { s: 1, c: 4 }, // Idiot eunuch
  "পাগল হিজড়া শালা": { s: 3, c: 5 }, // Mad eunuch rascal

  // ========================================
  // === More Extended Romanized Compounds ===
  // ========================================
  "sala boga khor magi khanki": { s: 5, c: 5 }, // Rascal dick eater prostitute
  "tui shudhu magi r kichhu na": { s: 5, c: 5 }, // You are nothing but a prostitute
  "tui ekta bokachoda kuttar bachcha haramjada": { s: 3, c: 5 }, // You are a stupid fucker dog's child bastard
  "amader sob ar magi tui": { s: 5, c: 5 }, // You are everyone's prostitute
  "tor shobkichhu baal": { s: 3, c: 5 }, // Everything about you is pubic hair (worthless)
  "tor jibon baal": { s: 3, c: 5 }, // Your life is pubic hair (worthless)
  "tor bap er naam baal": { s: 1, c: 5 }, // Your father's name is pubic hair
  "tor maa er naam magi": { s: 5, c: 5 }, // Your mother's name is prostitute
  "tor bon er naam khanki": { s: 5, c: 5 }, // Your sister's name is prostitute
  "tui janmo theke magi": { s: 5, c: 5 }, // You've been a prostitute since birth
  "tui janmo theke bokachoda": { s: 1, c: 5 }, // You've been stupid since birth
  "tui janmo theke harami": { s: 3, c: 5 }, // You've been a bastard since birth
  "tui janmo theke nongra": { s: 3, c: 5 }, // You've been dirty since birth
  "tor baap janmo theke dalla": { s: 1, c: 5 }, // Your father's been a pimp since birth
  "tor maa janmo theke magi": { s: 5, c: 5 }, // Your mother's been a prostitute since birth
  "ekta bichi chhara tui kichhu na": { s: 4, c: 5 }, // You're nothing except a testicle
  "ekta baal chhara tui kichhu na": { s: 3, c: 5 }, // You're nothing except pubic hair
  "ekta heda chhara tui kichhu na": { s: 3, c: 5 }, // You're nothing except shit
  "tor theke kutta bhalo": { s: 3, c: 5 }, // A dog is better than you
  "tor theke shuor bhalo": { s: 3, c: 5 }, // A pig is better than you
  "tor theke gadha bhalo": { s: 3, c: 5 }, // A donkey is better than you
  "tor theke chagol bhalo": { s: 3, c: 5 }, // A goat is better than you
  "tor theke chucha bhalo": { s: 3, c: 5 }, // A rat is better than you
  "tor theke pokamakor bhalo": { s: 3, c: 5 }, // Insects are better than you

  // ========================================
  // === More Extended Dialect Compounds ===
  // ========================================
  // Sylheti Extended
  "xalar bap fuainno kuttar baicha": { s: 1, c: 4 }, // Rascal's father fucker dog's child (Sylheti)
  "tar mainka gut te tar abbar boga": { s: 1, c: 4 }, // Mother's pussy father's dick (Sylheti)
  "fua tor goshthi ar bongshi": { s: 3, c: 5 }, // Fuck your clan and lineage (Sylheti)
  "tar mainka gut fatainno xala": { s: 4, c: 4 }, // Mother's pussy tearer rascal (Sylheti)
  "kutta xala fuainno hazir baicha": { s: 3, c: 5 }, // Dog rascal fucker pig's child (Sylheti)
  "fuainno xalar bap fuainno tar maa": { s: 1, c: 4 }, // Fucker rascal's father fucker his mother (Sylheti)
  "mainka boga tanna xala kutta": { s: 4, c: 4 }, // Mother's dick pulling rascal dog (Sylheti)

  // Chittagonian Extended
  "maayre tore boinno foinya sala kutta": { s: 3, c: 5 }, // Mother your sister fucker rascal dog (Chittagonian)
  "tore abbar futki foinya re sala": { s: 1, c: 4 }, // Your father's ass fucker hey rascal (Chittagonian)
  "hazeer foinya kutta foinya sala": { s: 3, c: 5 }, // Pig fucker dog fucker rascal (Chittagonian)
  "dangor gudde dangor boga foinya": { s: 4, c: 5 }, // Big ass big dick fucker (Chittagonian)
  "tore maayre tore abba dui jonne foinya": { s: 3, c: 5 }, // Fuck both your parents (Chittagonian)
  "maagi kuttar baizza foinya re": { s: 5, c: 5 }, // Prostitute dog's son fucker hey (Chittagonian)
  "tore goshthi foinya re sala kuttar baizza": { s: 3, c: 5 }, // Your clan fucker hey rascal dog's son (Chittagonian)

  // Noakhali Extended
  "toor mayre toor boinno futgi fua sala": { s: 3, c: 5 }, // Your mother sister ass fuck rascal (Noakhali)
  "fuainno re sala kuttar baccha shuorer baccha": { s: 3, c: 5 }, // Fucker rascal dog's child pig's child (Noakhali)
  "toor abbar futgi maira re haiga maira": { s: 1, c: 4 }, // Your father's ass fucker anus fucker (Noakhali)
  "magir fut maira re sala fuainno kuttar baccha": { s: 5, c: 5 }, // Prostitute's ass fucker rascal dog's child (Noakhali)
  "toor goshthi fuainno re magir baicha": { s: 5, c: 5 }, // Your clan fucker prostitute's child (Noakhali)
  "toor mayre boga diye fuainno re": { s: 4, c: 5 }, // Fucked mother with dick hey (Noakhali)
  "toor boinno futgi maira sala fuainno": { s: 3, c: 5 }, // Your sister's ass fucker rascal fucker (Noakhali)

  // Rangpuri Extended
  "mayre fukinni kuttar baicha shuorer baicha": { s: 5, c: 5 }, // Mother fucker dog's child pig's child (Rangpuri)
  "gadhar baicha fukinni magir baicha fukinni": { s: 5, c: 5 }, // Donkey's child fucker prostitute's child fucker (Rangpuri)
  "tor may fukinni tor bai fukinni sala harami": { s: 3, c: 4 }, // Your mother fucker your sister fucker rascal bastard (Rangpuri)
  "fukinni sala kutta gadhar baicha magir baicha": { s: 5, c: 5 }, // Fucker rascal dog donkey's child prostitute's child (Rangpuri)
  "tor goshthi fukinni sala kutta shuor": { s: 3, c: 5 }, // Your clan fucker rascal dog pig (Rangpuri)
  "tor bap fukinni tor may fukinni gadhar baicha": { s: 1, c: 4 }, // Father fucker mother fucker donkey's child (Rangpuri)

  // ========================================
  // === More Extended Evasion Spellings ===
  // ========================================
  "bokachod@": { s: 1, c: 5 }, // Stupid fucker evasion
  "kh4nki": { s: 5, c: 5 }, // Prostitute evasion
  "m4gi": { s: 5, c: 5 }, // Prostitute evasion
  "sh4la": { s: 3, c: 5 }, // Rascal evasion
  "chod4": { s: 3, c: 5 }, // Fuck evasion
  "h4ramjada": { s: 3, c: 5 }, // Bastard evasion
  "g4ndu": { s: 3, c: 5 }, // Asshole evasion
  "b4l": { s: 3, c: 5 }, // Pubic hair evasion
  "dh0n chosa": { s: 4, c: 5 }, // Penis sucker evasion
  "putk! mara": { s: 3, c: 5 }, // Arse fucker evasion
  "bog@ kha": { s: 4, c: 5 }, // Eat dick evasion
  "madarc#od": { s: 5, c: 5 }, // Motherfucker evasion
  "b@nchd": { s: 3, c: 5 }, // Sisterfucker evasion
  "kutt@r bacch@": { s: 3, c: 5 }, // Dog's child evasion
  "shu0rer bacch@": { s: 3, c: 5 }, // Pig's child evasion
  "bkchoda": { s: 3, c: 5 }, // Bokachoda abbreviation variant
  "bkchd sl": { s: 3, c: 5 }, // Bokachod sala abbreviation
  "mchd sl bkchd": { s: 5, c: 5 }, // Madarchod sala bokachod abbreviation
  "trmaa mgi sl": { s: 3, c: 5 }, // Tor maa magi sala abbreviation
  "trbon mgi khkimgi": { s: 3, c: 5 }, // Tor bon magi khanki magi abbreviation
  "kttr bchch sl bkchd hrmi": { s: 3, c: 5 }, // Kuttar bachcha sala bokachod harami abbreviation
  "shr bchch sl mchd bkchd": { s: 5, c: 5 }, // Shuorer bachcha sala madarchod bokachod abbreviation

  // ========================================
  // === More Extended Bengali Script ===
  // ========================================
  "তুই শুধু মাগি আর কিছু না": { s: 5, c: 4 }, // You are nothing but a prostitute
  "তুই একটা বোকাচোদা কুত্তার বাচ্চা হারামজাদা": { s: 3, c: 4 }, // You are a stupid fucker dog's child bastard
  "আমাদের সবার মাগি তুই": { s: 5, c: 4 }, // You are everyone's prostitute
  "তোর সবকিছু বাল": { s: 3, c: 4 }, // Everything about you is pubic hair
  "তোর জীবন বাল": { s: 3, c: 4 }, // Your life is pubic hair
  "তোর বাপের নাম বাল": { s: 1, c: 4 }, // Your father's name is pubic hair
  "তোর মায়ের নাম মাগি": { s: 5, c: 4 }, // Your mother's name is prostitute
  "তোর বোনের নাম খানকি": { s: 5, c: 4 }, // Your sister's name is prostitute
  "তুই জন্ম থেকে মাগি": { s: 5, c: 4 }, // You've been a prostitute since birth
  "তুই জন্ম থেকে বোকাচোদা": { s: 1, c: 4 }, // You've been stupid since birth
  "তুই জন্ম থেকে হারামি": { s: 3, c: 4 }, // You've been a bastard since birth
  "তোর থেকে কুত্তা ভালো": { s: 3, c: 4 }, // A dog is better than you
  "তোর থেকে শূয়র ভালো": { s: 3, c: 4 }, // A pig is better than you
  "তোর থেকে গাধা ভালো": { s: 3, c: 4 }, // A donkey is better than you
  "তোর থেকে ছাগল ভালো": { s: 3, c: 4 }, // A goat is better than you
  "একটা বাল ছাড়া তুই কিছু না": { s: 3, c: 4 }, // You're nothing except pubic hair
  "একটা হেঁদা ছাড়া তুই কিছু না": { s: 3, c: 5 }, // You're nothing except shit
  "তোর গোষ্ঠী শেষ করবো": { s: 3, c: 4 }, // I'll end your clan
  "তোর বংশ শেষ করবো": { s: 3, c: 4 }, // I'll end your lineage
  "তোর নাম মুছে দিবো": { s: 3, c: 4 }, // I'll erase your name
  "তুই মরলেও কেউ কাঁদবে না": { s: 5, c: 5 }, // No one will cry if you die
  "তুই বেঁচে থেকে কোনো কাজ নেই": { s: 3, c: 4 }, // There's no use in you being alive
  "তুই পৃথিবীর সবচেয়ে নোংরা": { s: 3, c: 4 }, // You are the dirtiest on earth
  "তুই পৃথিবীর সবচেয়ে গু": { s: 3, c: 5 }, // You are the most shit on earth

  // ========================================
  // === More Extended Threat Phrases ===
  // ========================================
  "toke jibonto gorom pani diye pochabo": { s: 5, c: 5 }, // I'll burn you alive with hot water
  "tor shob friends der shamne toke chudbo": { s: 5, c: 5 }, // I'll fuck you in front of all your friends
  "tor maa ke tore shamne chudbo": { s: 5, c: 5 }, // I'll fuck your mother in front of you
  "tor bon ke bazaare bechbo": { s: 5, c: 5 }, // I'll sell your sister in the market
  "tor putki te agun debo": { s: 5, c: 5 }, // I'll set your ass on fire
  "tor boga jol diye pochabo": { s: 5, c: 5 }, // I'll burn your dick with water
  "tor gude mirchi debo": { s: 5, c: 5 }, // I'll put chili in your pussy
  "tor putki te mirchi debo": { s: 5, c: 5 }, // I'll put chili in your ass
  "tor boga te loha bandha debo": { s: 5, c: 5 }, // I'll tie iron to your dick
  "tor mayer shobkichhu fatabo": { s: 5, c: 5 }, // I'll tear everything of your mother
  "tor boner shobkichhu fatabo": { s: 5, c: 5 }, // I'll tear everything of your sister
  "tor baaper shobkichhu fatabo": { s: 1, c: 4 }, // I'll tear everything of your father
  "tor khandaan ke sob chude debo": { s: 5, c: 5 }, // I'll fuck your entire dynasty
  "tor goshthi ke sob maira debo": { s: 5, c: 5 }, // I'll kill your entire clan
  "toke drain e fele diye pani bhorbo": { s: 5, c: 5 }, // I'll throw you in drain and fill water
  "toke gutter e fele diye maati debo": { s: 5, c: 5 }, // I'll throw you in gutter and cover with dirt
  "toke jibonto pachar neeche fele debo": { s: 5, c: 5 }, // I'll throw you alive under a stone
  "toke jibonto kborer moddhe rakhbo": { s: 5, c: 5 }, // I'll put you alive in a grave
  "toke shesh kore debo": { s: 5, c: 5 }, // I'll finish you off
  "tor naam shune manush thukbe": { s: 5, c: 5 }, // People will spit hearing your name

  // ========================================
  // === Extended Sexual Insults (Bengali Script) ===
  // ========================================
  "তোর মাকে চোদার সময় তোর মা চিৎকার করে": { s: 3, c: 5 }, // Your mother screams when fucked
  "তোর বোনকে সবাই চোদে": { s: 3, c: 5 }, // Everyone fucks your sister
  "তোর মায়ের গুদে সবাই ঢুকে": { s: 4, c: 4 }, // Everyone enters your mother's pussy
  "তোর বাপের বাড়া খাজা": { s: 1, c: 4 }, // Your father's dick is useless
  "তোর মায়ের দুধ চুষবো": { s: 4, c: 4 }, // I'll suck your mother's breasts
  "তোর বোনের দুধ চুষবো": { s: 4, c: 4 }, // I'll suck your sister's breasts
  "তোর মায়ের পাছায় চুদবো": { s: 3, c: 5 }, // I'll fuck your mother's ass
  "তোর বোনের পাছায় চুদবো": { s: 3, c: 5 }, // I'll fuck your sister's ass
  "তোর মাকে উলটে চোদবো": { s: 3, c: 5 }, // I'll fuck your mother upside down
  "তোর বোনকে উলটে চোদবো": { s: 3, c: 5 }, // I'll fuck your sister upside down
  "তোর বোনের গুদ ফাটাবো": { s: 4, c: 4 }, // I'll rip your sister's pussy
  "তোর মায়ের পুটকি ফাটাবো": { s: 3, c: 4 }, // I'll rip your mother's asshole
  "তোর বাড়া কাটবো": { s: 4, c: 4 }, // I'll cut your dick
  "তোর ধন কাটবো": { s: 4, c: 4 }, // I'll cut your dick
  "তোর বাড়ায় কামড় দেবো": { s: 4, c: 4 }, // I'll bite your dick
  "চোদনার বাচ্চা তুই": { s: 3, c: 5 }, // You child of fucking
  "রান্ডির বাচ্চা শালা": { s: 3, c: 4 }, // Whore's child bastard
  "তোর মায়ের ভোদায় লাঠি": { s: 4, c: 4 }, // Stick in your mother's pussy
  "তোর মায়ের ভোদায় বাঁশ": { s: 4, c: 4 }, // Bamboo in your mother's pussy
  "তোর পুটকিতে বাঁশ": { s: 3, c: 4 }, // Bamboo in your asshole
  "তোর গুদে বাঁশ": { s: 4, c: 4 }, // Bamboo in your pussy
  "তোর মায়ের ভোদা চুষি": { s: 4, c: 4 }, // I suck your mother's pussy
  "তোর বোনের ভোদা চুষি": { s: 4, c: 4 }, // I suck your sister's pussy
  "তোর মায়ের ভোদায় আঙুল": { s: 4, c: 4 }, // Finger in your mother's pussy
  "তোর মায়ের ভোদায় হাত": { s: 4, c: 4 }, // Hand in your mother's pussy
  "তোর মায়ের ভোদায় পা": { s: 4, c: 4 }, // Foot in your mother's pussy
  "মালটা ছোড়ার মুখে": { s: 3, c: 4 }, // Cum on the bastard's face
  "তোর মুখে মাল ফেলবো": { s: 1, c: 4 }, // I'll cum on your face
  "তোর মায়ের মুখে মাল": { s: 1, c: 4 }, // Cum on your mother's face
  "বেশ্যার ভোদা": { s: 5, c: 4 }, // Prostitute's pussy
  "রান্ডির পুটকি": { s: 5, c: 4 }, // Whore's asshole
  "খানকির পুটকি": { s: 5, c: 4 }, // Whore's asshole (var)
  "শালী চোদ": { s: 3, c: 5 }, // Fuck sister-in-law
  "ভাবী চোদ": { s: 3, c: 5 }, // Fuck sister-in-law (married)
  "মামী চোদ": { s: 3, c: 5 }, // Fuck aunt
  "কাকী চোদ": { s: 3, c: 5 }, // Fuck aunt (paternal)
  "জেঠী চোদ": { s: 3, c: 5 }, // Fuck aunt (elder paternal)
  "পিসী চোদ": { s: 1, c: 4 }, // Fuck aunt (father's sister)
  "মাসী চোদ": { s: 3, c: 5 }, // Fuck aunt (mother's sister)

  // ========================================
  // === Extended Romanized Sexual Insults ===
  // ========================================
  "tor make chodar shomoy tor maa chitkar kore": { s: 3, c: 5 }, // Your mother screams when fucked
  "tor bonke shobai chode": { s: 3, c: 5 }, // Everyone fucks your sister
  "tor mayer gude shobai dhuke": { s: 4, c: 5 }, // Everyone enters your mother's pussy
  "tor baaper bara khaja": { s: 1, c: 5 }, // Your father's dick is useless
  "tor mayer dudh chushbo": { s: 4, c: 5 }, // I'll suck your mother's breasts
  "tor boner dudh chushbo": { s: 4, c: 5 }, // I'll suck your sister's breasts
  "tor mayer pachay chudbo": { s: 3, c: 5 }, // I'll fuck your mother's ass
  "tor boner pachay chudbo": { s: 3, c: 5 }, // I'll fuck your sister's ass
  "tor make ulte chodbo": { s: 3, c: 5 }, // I'll fuck your mother upside down
  "tor bonke ulte chodbo": { s: 3, c: 5 }, // I'll fuck your sister upside down
  "tor mayer gud fatabo": { s: 4, c: 5 }, // I'll rip your mother's pussy
  "tor boner gud fatabo": { s: 4, c: 5 }, // I'll rip your sister's pussy
  "tor mayer putki fatabo": { s: 3, c: 5 }, // I'll rip your mother's asshole
  "tor bara katbo": { s: 4, c: 5 }, // I'll cut your dick
  "tor dhon katbo": { s: 4, c: 5 }, // I'll cut your dick
  "tor baray kamor debo": { s: 4, c: 5 }, // I'll bite your dick
  "chodnar bachcha tui": { s: 3, c: 5 }, // You child of fucking
  "randir bachcha shala": { s: 3, c: 5 }, // Whore's child bastard
  "tor mayer voday lathi": { s: 4, c: 5 }, // Stick in your mother's pussy
  "tor mayer voday bash": { s: 4, c: 5 }, // Bamboo in your mother's pussy
  "tor putkite bash": { s: 3, c: 5 }, // Bamboo in your asshole
  "tor gude bash": { s: 4, c: 5 }, // Bamboo in your pussy
  "tor mayer voda chushi": { s: 4, c: 5 }, // I suck your mother's pussy
  "tor boner voda chushi": { s: 4, c: 5 }, // I suck your sister's pussy
  "tor mayer voday angul": { s: 4, c: 5 }, // Finger in your mother's pussy
  "tor mayer voday hat": { s: 4, c: 5 }, // Hand in your mother's pussy
  "tor mayer voday pa": { s: 4, c: 5 }, // Foot in your mother's pussy
  "malta chhorar mukhe": { s: 3, c: 5 }, // Cum on the bastard's face
  "tor mukhe mal felbo": { s: 1, c: 5 }, // I'll cum on your face
  "tor mayer mukhe mal": { s: 1, c: 5 }, // Cum on your mother's face
  "beshyar voda": { s: 5, c: 5 }, // Prostitute's pussy
  "randir putki": { s: 5, c: 5 }, // Whore's asshole
  "khankir putki": { s: 5, c: 5 }, // Whore's asshole (var)
  "shali chod": { s: 3, c: 5 }, // Fuck sister-in-law
  "bhabi chod": { s: 3, c: 5 }, // Fuck sister-in-law (married)
  "mami chod": { s: 3, c: 5 }, // Fuck aunt
  "kaki chod": { s: 3, c: 5 }, // Fuck aunt (paternal)
  "jethi chod": { s: 3, c: 5 }, // Fuck aunt (elder paternal)
  "pisi chod": { s: 1, c: 5 }, // Fuck aunt (father's sister)
  "mashi chod": { s: 3, c: 5 }, // Fuck aunt (mother's sister)

  // ========================================
  // === Extended Body Part Insults (Bengali) ===
  // ========================================
  "বড় পুটকির মাগী": { s: 4, c: 3 }, // Big asshole woman
  "ছোট বাড়ার ছেলে": { s: 4, c: 3 }, // Small dick boy
  "ঢিলা গুদের মাগী": { s: 4, c: 3 }, // Loose pussy woman
  "বড় গুদের মাগী": { s: 4, c: 3 }, // Big pussy woman
  "ছোট ধনের ছেলে": { s: 4, c: 3 }, // Small dick boy (alt)
  "ঢোলা পুটকির ছেলে": { s: 4, c: 3 }, // Loose asshole boy
  "মোটা বাড়ার ছেলে": { s: 1, c: 4 }, // Fat dick boy
  "চ্যাপ্টা পুটকির মাগী": { s: 4, c: 3 }, // Flat asshole woman
  "লম্বা বাড়ার ছেলে": { s: 4, c: 3 }, // Long dick boy
  "বাঁকা বাড়ার ছেলে": { s: 4, c: 3 }, // Crooked dick boy
  "boro putkir magi": { s: 4, c: 3 }, // Big asshole woman
  "chhoto barar chhele": { s: 4, c: 3 }, // Small dick boy
  "dhila guder magi": { s: 4, c: 3 }, // Loose pussy woman
  "boro guder magi": { s: 4, c: 3 }, // Big pussy woman
  "chhoto dhoner chhele": { s: 4, c: 3 }, // Small dick boy (alt)
  "dhola putkir chhele": { s: 4, c: 3 }, // Loose asshole boy
  "mota barar chhele": { s: 1, c: 4 }, // Fat dick boy
  "chyapta putkir magi": { s: 4, c: 3 }, // Flat asshole woman
  "lomba barar chhele": { s: 4, c: 3 }, // Long dick boy
  "baka barar chhele": { s: 4, c: 3 }, // Crooked dick boy

  // ========================================
  // === Extended Profession-Based Insults ===
  // ========================================
  "তোর মা রাস্তায় দাঁড়ায়": { s: 1, c: 4 }, // Your mother stands on the street
  "তোর বোন রাস্তায় দাঁড়ায়": { s: 1, c: 4 }, // Your sister stands on the street
  "তোর মা ট্রাক ড্রাইভারদের চোদায়": { s: 5, c: 5 }, // Your mother fucks truck drivers
  "তোর মা রিকশাওয়ালাদের চোদায়": { s: 5, c: 5 }, // Your mother fucks rickshaw drivers
  "তোর মা মাতালদের চোদায়": { s: 1, c: 3 }, // Your mother fucks drunkards
  "তোর মা ভিখারিদের চোদায়": { s: 5, c: 5 }, // Your mother fucks beggars
  "তোর মা কুকুরদের সাথে শোয়": { s: 1, c: 4 }, // Your mother sleeps with dogs
  "তোর বোন শুয়োরদের সাথে শোয়": { s: 1, c: 4 }, // Your sister sleeps with pigs
  "tor maa rastay daray": { s: 1, c: 4 }, // Your mother stands on the street
  "tor bon rastay daray": { s: 1, c: 4 }, // Your sister stands on the street
  "tor maa truck driverdeer choday": { s: 5, c: 5 }, // Your mother fucks truck drivers
  "tor maa rikshawalaader choday": { s: 5, c: 5 }, // Your mother fucks rickshaw drivers
  "tor maa mataldeer choday": { s: 1, c: 3 }, // Your mother fucks drunkards
  "tor maa bhikharideer choday": { s: 5, c: 5 }, // Your mother fucks beggars
  "tor maa kukurdeer shathe shoy": { s: 1, c: 4 }, // Your mother sleeps with dogs
  "tor bon shuorder shathe shoy": { s: 1, c: 4 }, // Your sister sleeps with pigs

  // ========================================
  // === Extended Chittagonian/Noakhali Dialect ===
  // ========================================
  "tuain gor choira jait parosh": { s: 3, c: 5 }, // You can go fuck yourself (Chittagonian)
  "tuainor mai gudi": { s: 4, c: 4 }, // Your mother's pussy (Chittagonian)
  "tuainor bain gudi": { s: 4, c: 4 }, // Your sister's pussy (Chittagonian)
  "tuain gudi mara": { s: 4, c: 5 }, // You pussy fucker (Chittagonian)
  "tuainor bafor bura": { s: 1, c: 4 }, // Your father's dick (Chittagonian)
  "khanki tuain": { s: 5, c: 4 }, // Whore you (Chittagonian)
  "haramjadi tuain": { s: 3, c: 4 }, // Bastard you (Chittagonian)
  "boinchot tuain": { s: 3, c: 5 }, // Sister fucker you (Chittagonian)
  "maichot tuain": { s: 5, c: 5 }, // Mother fucker you (Chittagonian)
  "tuainor putoh mairya dilam": { s: 3, c: 4 }, // I'll beat your ass (Chittagonian)
  "tuain chudir bhai": { s: 3, c: 5 }, // You fucker's brother (Chittagonian)
  "tuain haguir putoh": { s: 3, c: 5 }, // You shit's ass (Chittagonian)
  "tuainor muh e hagu": { s: 3, c: 5 }, // Shit in your face (Chittagonian)
  "tuainor maye beshsha": { s: 5, c: 4 }, // Your mother is a whore (Chittagonian)
  "gor gudane tuain": { s: 3, c: 5 }, // Ass fucker you (Chittagonian)
  "fatfoti tuain": { s: 3, c: 4 }, // Worthless you (Noakhali)
  "geda tuain": { s: 1, c: 4 }, // Stupid you (Noakhali)
  "heda tuain": { s: 1, c: 4 }, // Idiot you (Noakhali)
  "bokachoda tuain": { s: 1, c: 4 }, // Stupid fucker you (Noakhali)
  "gadhar bachcha tuain": { s: 3, c: 4 }, // Donkey's child you (Noakhali)
  "shuar bachcha tuain": { s: 3, c: 4 }, // Pig's child you (Noakhali)
  "kuttar bachcha tuain": { s: 3, c: 4 }, // Dog's child you (Noakhali)
  "baler bachcha tuain": { s: 3, c: 4 }, // Pubic hair's child you (Noakhali)
  "nar gutire chudi": { s: 4, c: 5 }, // Fuck the male's balls (Noakhali)
  "mayer gutire chudi": { s: 4, c: 5 }, // Fuck the mother's balls (Noakhali)

  // ========================================
  // === Extended Sylheti Dialect ===
  // ========================================
  "tumar ammar gou": { s: 4, c: 4 }, // Your mother's pussy (Sylheti)
  "tumar bainar gou": { s: 4, c: 4 }, // Your sister's pussy (Sylheti)
  "tumar furer bura": { s: 1, c: 4 }, // Your father's dick (Sylheti)
  "tumar ammar futki": { s: 3, c: 4 }, // Your mother's ass (Sylheti)
  "xala xuda": { s: 3, c: 4 }, // Bastard fucker (Sylheti)
  "xendir fut": { s: 5, c: 4 }, // Whore's son (Sylheti)
  "bali xuda": { s: 3, c: 5 }, // Pubic hair fucker (Sylheti)
  "goure dhor": { s: 4, c: 4 }, // Hold the pussy (Sylheti)
  "buray dhor": { s: 4, c: 4 }, // Hold the dick (Sylheti)
  "futkire dhor": { s: 3, c: 4 }, // Hold the ass (Sylheti)
  "tumar amma xendir foi": { s: 5, c: 4 }, // Your mother is a whore (Sylheti)
  "tumar bain xendir foi": { s: 5, c: 4 }, // Your sister is a whore (Sylheti)
  "xala harami": { s: 3, c: 4 }, // Bastard (Sylheti)
  "bonor xuda": { s: 3, c: 5 }, // Monkey fucker (Sylheti)
  "gadhar xuda": { s: 3, c: 5 }, // Donkey fucker (Sylheti)
  "gurar xuda": { s: 3, c: 5 }, // Horse fucker (Sylheti)
  "gorur xuda": { s: 3, c: 5 }, // Cow fucker (Sylheti)
  "tumar amma footpathr bexxa": { s: 5, c: 4 }, // Your mother is street whore (Sylheti)
  "tumar amma bazaarr bexxa": { s: 5, c: 4 }, // Your mother is market whore (Sylheti)
  "tumar amma xorbor bexxa": { s: 5, c: 4 }, // Your mother is everyone's whore (Sylheti)

  // ========================================
  // === Extended Rangpuri/North Bengal Dialect ===
  // ========================================
  "tohr mai ke chodim": { s: 3, c: 5 }, // I'll fuck your mother (Rangpuri)
  "tohr boin ke chodim": { s: 3, c: 5 }, // I'll fuck your sister (Rangpuri)
  "tohr bap ke chodim": { s: 1, c: 4 }, // I'll fuck your father (Rangpuri)
  "tohr mayer bhoda": { s: 4, c: 4 }, // Your mother's pussy (Rangpuri)
  "harami kutta": { s: 3, c: 4 }, // Bastard dog (Rangpuri)
  "boinchod harami": { s: 3, c: 4 }, // Sister fucker bastard (Rangpuri)
  "maichod harami": { s: 3, c: 4 }, // Mother fucker bastard (Rangpuri)
  "randi tohr mai": { s: 5, c: 4 }, // Whore is your mother (Rangpuri)
  "chhinar tohr boin": { s: 3, c: 4 }, // Slut is your sister (Rangpuri)
  "tohr baper bara nosto": { s: 1, c: 4 }, // Your father's dick is useless (Rangpuri)
  "tohr mayer gud e poka": { s: 4, c: 4 }, // Worms in your mother's pussy (Rangpuri)
  "tohr baper bara e poka": { s: 1, c: 4 }, // Worms on your father's dick (Rangpuri)
  "bhoda marani": { s: 4, c: 5 }, // Pussy fucker (Rangpuri)
  "gud marani": { s: 4, c: 4 }, // Pussy beater (Rangpuri)
  "bara kharani": { s: 4, c: 4 }, // Dick eater (Rangpuri)
  "mal kharani": { s: 3, c: 4 }, // Cum eater (Rangpuri)
  "chhi kharani": { s: 3, c: 5 }, // Shit eater (Rangpuri)
  "moot kharani": { s: 3, c: 4 }, // Piss eater (Rangpuri)
  "tohr pichone deim": { s: 3, c: 4 }, // I'll give it from behind (Rangpuri)
  "tohr samne deim": { s: 3, c: 4 }, // I'll give it from front (Rangpuri)

  // ========================================
  // === Extended Internet/Gaming Bengali ===
  // ========================================
  "mc sala noob": { s: 5, c: 5 }, // Motherfucker noob
  "bc sala noob": { s: 3, c: 5 }, // Sisterfucker noob
  "chodu gamer": { s: 3, c: 5 }, // Fucker gamer
  "noob er bachcha": { s: 2, c: 3 }, // Noob's child
  "noob sala chodu": { s: 3, c: 4 }, // Noob bastard fucker
  "camper chodu sala": { s: 3, c: 4 }, // Camper fucker bastard
  "hacker chodu sala": { s: 3, c: 4 }, // Hacker fucker bastard
  "lag er maa chudi": { s: 3, c: 5 }, // Fuck lag's mother
  "ping er maa chudi": { s: 3, c: 5 }, // Fuck ping's mother
  "gg boga kha": { s: 4, c: 3 }, // GG eat dick
  "ez boga kha": { s: 4, c: 3 }, // EZ eat dick
  "gg putki mara": { s: 3, c: 5 }, // GG get ass fucked
  "ez putki mara": { s: 3, c: 5 }, // EZ get ass fucked
  "report kore tor maa chudbo": { s: 3, c: 5 }, // I'll report and fuck your mother
  "tor pc te virus diye tor maa chudbo": { s: 3, c: 5 }, // I'll virus your PC and fuck your mother
  "uninstall kor chodu": { s: 3, c: 5 }, // Uninstall fucker
  "delete kor chodu": { s: 3, c: 5 }, // Delete fucker
  "game chhad chodu": { s: 3, c: 5 }, // Leave game fucker
  "afk chodu sala": { s: 3, c: 4 }, // AFK fucker bastard
  "feeder chodu sala": { s: 3, c: 4 }, // Feeder fucker bastard
  "troll chodu sala": { s: 3, c: 4 }, // Troll fucker bastard
  "toxic chodu sala": { s: 3, c: 4 }, // Toxic fucker bastard
  "griefing chodu": { s: 3, c: 5 }, // Griefing fucker
  "stream snipe chodu": { s: 3, c: 5 }, // Stream snipe fucker
  "aim bot chodu": { s: 3, c: 5 }, // Aim bot fucker

  // ========================================
  // === Extended Scatological (Bengali Script) ===
  // ========================================
  "তোর মুখে গু": { s: 3, c: 5 }, // Shit in your face
  "তোর মুখে হাগবো": { s: 3, c: 5 }, // I'll shit in your face
  "তোর মুখে মুতবো": { s: 3, c: 4 }, // I'll piss in your face
  "তোর খাবারে গু দেবো": { s: 3, c: 5 }, // I'll put shit in your food
  "তোর খাবারে মুত দেবো": { s: 3, c: 4 }, // I'll put piss in your food
  "তোর মায়ের মুখে গু": { s: 3, c: 5 }, // Shit in your mother's face
  "তোর বোনের মুখে গু": { s: 3, c: 5 }, // Shit in your sister's face
  "গু খোর তুই": { s: 3, c: 5 }, // You shit eater
  "মুত খোর তুই": { s: 3, c: 4 }, // You piss drinker
  "হাগু চোদা": { s: 3, c: 5 }, // Shit fucker
  "মুতু চোদা": { s: 3, c: 5 }, // Piss fucker
  "গু মাখা তুই": { s: 3, c: 5 }, // You shit smeared
  "পাদ খোর তুই": { s: 3, c: 4 }, // You fart sniffer
  "গু মুখ তুই": { s: 3, c: 5 }, // You shit face
  "মুত মুখ তুই": { s: 3, c: 4 }, // You piss face
  "tor mukhe hagbo": { s: 3, c: 5 }, // I'll shit in your face
  "tor mukhe mutbo": { s: 3, c: 4 }, // I'll piss in your face
  "tor khabare gu debo": { s: 3, c: 5 }, // I'll put shit in your food
  "tor khabare mut debo": { s: 3, c: 4 }, // I'll put piss in your food
  "tor mayer mukhe gu": { s: 3, c: 5 }, // Shit in your mother's face
  "tor boner mukhe gu": { s: 3, c: 5 }, // Shit in your sister's face
  "gu khor tui": { s: 3, c: 5 }, // You shit eater
  "mut khor tui": { s: 3, c: 4 }, // You piss drinker
  "hagu choda": { s: 3, c: 5 }, // Shit fucker
  "mutu choda": { s: 3, c: 5 }, // Piss fucker
  "gu makha tui": { s: 3, c: 5 }, // You shit smeared
  "pad khor tui": { s: 3, c: 4 }, // You fart sniffer
  "gu mukh tui": { s: 3, c: 5 }, // You shit face
  "mut mukh tui": { s: 3, c: 4 }, // You piss face

  // ========================================
  // === Extended Animal Compound Insults ===
  // ========================================
  "কুত্তার বাচ্চা রান্ডি": { s: 5, c: 4 }, // Dog's child whore
  "শুয়োরের বাচ্চা রান্ডি": { s: 5, c: 4 }, // Pig's child whore
  "গাধার বাচ্চা রান্ডি": { s: 5, c: 4 }, // Donkey's child whore
  "বানরের বাচ্চা চোদা": { s: 3, c: 5 }, // Monkey's child fucker
  "ছাগলের বাচ্চা চোদা": { s: 3, c: 5 }, // Goat's child fucker
  "গরুর বাচ্চা চোদা": { s: 3, c: 5 }, // Cow's child fucker
  "ঘোড়ার বাচ্চা চোদা": { s: 3, c: 5 }, // Horse's child fucker
  "কুত্তা চোদা": { s: 3, c: 5 }, // Dog fucker
  "শুয়োর চোদা": { s: 3, c: 5 }, // Pig fucker
  "গাধা চোদা": { s: 3, c: 5 }, // Donkey fucker
  "বানর চোদা": { s: 3, c: 5 }, // Monkey fucker
  "গরু চোদা": { s: 3, c: 5 }, // Cow fucker
  "ঘোড়া চোদা": { s: 3, c: 5 }, // Horse fucker
  "ইঁদুর চোদা": { s: 3, c: 5 }, // Rat fucker
  "সাপ চোদা": { s: 3, c: 5 }, // Snake fucker
  "kuttar bachcha randi": { s: 5, c: 4 }, // Dog's child whore
  "shuorer bachcha randi": { s: 5, c: 4 }, // Pig's child whore
  "gadhar bachcha randi": { s: 5, c: 4 }, // Donkey's child whore
  "banorer bachcha choda": { s: 3, c: 5 }, // Monkey's child fucker
  "chhagoler bachcha choda": { s: 3, c: 5 }, // Goat's child fucker
  "gorur bachcha choda": { s: 3, c: 5 }, // Cow's child fucker
  "ghorar bachcha choda": { s: 3, c: 5 }, // Horse's child fucker
  "kutta choda": { s: 3, c: 5 }, // Dog fucker
  "gadha choda": { s: 3, c: 5 }, // Donkey fucker
  "banor choda": { s: 3, c: 5 }, // Monkey fucker
  "chhagol choda": { s: 3, c: 5 }, // Goat fucker
  "goru choda": { s: 3, c: 5 }, // Cow fucker
  "ghora choda": { s: 3, c: 5 }, // Horse fucker
  "indur choda": { s: 3, c: 5 }, // Rat fucker
  "shap choda": { s: 3, c: 5 }, // Snake fucker

  // ========================================
  // === Extended Emasculation Insults ===
  // ========================================
  "তোর বাড়া নেই": { s: 4, c: 4 }, // You have no dick
  "তোর বাড়া ছোট": { s: 4, c: 4 }, // Your dick is small
  "তোর বাড়া কাজ করে না": { s: 4, c: 4 }, // Your dick doesn't work
  "তোর বাড়া মরা": { s: 4, c: 4 }, // Your dick is dead
  "তুই হিজড়া": { s: 1, c: 4 }, // You are a hijra/eunuch
  "তুই নপুংসক": { s: 1, c: 4 }, // You are impotent
  "তুই মেয়েমানুষ": { s: 1, c: 4 }, // You are a woman (emasculating)
  "তোর ধন দাঁড়ায় না": { s: 4, c: 4 }, // Your dick can't get up
  "তোর বাড়া দুধের মতো নরম": { s: 4, c: 4 }, // Your dick is soft like milk
  "tor bara nei": { s: 4, c: 4 }, // You have no dick
  "tor bara chhoto": { s: 4, c: 4 }, // Your dick is small
  "tor bara kaj kore na": { s: 4, c: 4 }, // Your dick doesn't work
  "tor bara mora": { s: 4, c: 4 }, // Your dick is dead
  "tui hijra": { s: 1, c: 4 }, // You are a hijra/eunuch
  "tui nopungsok": { s: 1, c: 4 }, // You are impotent
  "tui meyemanush": { s: 1, c: 4 }, // You are a woman (emasculating)
  "tor dhon daray na": { s: 4, c: 4 }, // Your dick can't get up
  "tor bara dudher moto norom": { s: 4, c: 4 }, // Your dick is soft like milk

  // ========================================
  // === Extended Evasion Spellings (Bengali Romanized) ===
  // ========================================
  "ch0di": { s: 3, c: 5 }, // Fuck (evasion)
  "m4g1": { s: 5, c: 5 }, // Woman/prostitute (evasion)
  "b0g4": { s: 4, c: 5 }, // Dick (evasion)
  "kh4nk1": { s: 5, c: 5 }, // Whore (evasion)
  "r4nd1": { s: 5, c: 5 }, // Whore (evasion)
  "gu6": { s: 4, c: 5 }, // Pussy (evasion)
  "pu7ki": { s: 3, c: 5 }, // Ass (evasion)
  "b4r4": { s: 4, c: 5 }, // Dick (evasion)
  "ch00d": { s: 3, c: 5 }, // Fuck (evasion)
  "b@ra": { s: 4, c: 5 }, // Dick (evasion)
  "gu@d": { s: 4, c: 5 }, // Pussy (evasion)
  "put@ki": { s: 3, c: 5 }, // Ass (evasion)
  "r@ndi": { s: 5, c: 5 }, // Whore (evasion)
  "h@rami": { s: 3, c: 5 }, // Bastard (evasion)
  "b0kachod@": { s: 1, c: 5 }, // Stupid fucker (evasion)
  "m@@rchod": { s: 5, c: 5 }, // Motherfucker (evasion)
  "b0nchod": { s: 3, c: 5 }, // Sisterfucker (evasion)
  "m@@ch0d": { s: 5, c: 5 }, // Motherfucker (evasion)
  "b0nch0d": { s: 3, c: 5 }, // Sisterfucker (evasion)
  "h@r@mz@d@": { s: 3, c: 5 }, // Bastard (evasion)
  "ch0d@r b@cch@": { s: 3, c: 5 }, // Fucker's child (evasion)
  "kh@nkir b@cch@": { s: 5, c: 5 }, // Whore's child (evasion)
  "b3shya": { s: 5, c: 5 }, // Prostitute (evasion)
  "ch0dn4": { s: 3, c: 5 }, // To fuck (evasion)
  "m4l": { s: 3, c: 5 }, // Cum (evasion)

  // ========================================
  // === Extended Insult Combinations ===
  // ========================================
  "নষ্ট মাগীর বাচ্চা": { s: 1, c: 4 }, // Ruined woman's child
  "পতিতার বাচ্চা": { s: 5, c: 4 }, // Prostitute's child
  "ডোম মাগীর বাচ্চা": { s: 1, c: 4 }, // Low-caste woman's child
  "মেথর মাগীর বাচ্চা": { s: 1, c: 4 }, // Sweeper woman's child
  "চামারের বাচ্চা": { s: 1, c: 4 }, // Leather-worker's child (caste slur)
  "ভাঙারির বাচ্চা": { s: 1, c: 4 }, // Junk dealer's child
  "চোরের বাচ্চা": { s: 1, c: 4 }, // Thief's child
  "ডাকাতের বাচ্চা": { s: 1, c: 4 }, // Robber's child
  "খুনির বাচ্চা": { s: 5, c: 5 }, // Murderer's child
  "ফাঁসির আসামী": { s: 5, c: 5 }, // Death row convict
  "nosto magir bachcha": { s: 1, c: 4 }, // Ruined woman's child
  "potitar bachcha": { s: 5, c: 4 }, // Prostitute's child
  "dom magir bachcha": { s: 1, c: 4 }, // Low-caste woman's child
  "methor magir bachcha": { s: 1, c: 4 }, // Sweeper woman's child
  "chamarer bachcha": { s: 1, c: 4 }, // Leather-worker's child (caste slur)
  "bhangarir bachcha": { s: 1, c: 4 }, // Junk dealer's child
  "chorer bachcha": { s: 1, c: 4 }, // Thief's child
  "dakater bachcha": { s: 1, c: 4 }, // Robber's child
  "khunir bachcha": { s: 5, c: 5 }, // Murderer's child
  "fashir ashami": { s: 5, c: 5 }, // Death row convict

  // ========================================
  // === Extended Abuse Phrases ===
  // ========================================
  "tor jiboner kono dam nei": { s: 3, c: 4 }, // Your life has no value
  "tor jonmo howa uchit hoyni": { s: 3, c: 4 }, // You shouldn't have been born
  "tor maa tor bap ke chene na": { s: 1, c: 4 }, // Your mother doesn't know your father
  "tor bap ke kheuje pawa jayna": { s: 1, c: 4 }, // Your father can't be found
  "tor bap kon shala seta keu jane na": { s: 1, c: 4 }, // Nobody knows who your father is
  "tor maa rastay khunje peyeche toke": { s: 3, c: 4 }, // Your mother found you on the street
  "tor maa dustbine fele diyechilo toke": { s: 3, c: 4 }, // Your mother threw you in dustbin
  "toke keu chayna ei duniyay": { s: 3, c: 4 }, // Nobody wants you in this world
  "tor mukh dekhle manush thuke": { s: 3, c: 4 }, // People spit seeing your face
  "tor nam shune manush hase": { s: 3, c: 4 }, // People laugh hearing your name
  "tor bari te keu ashena lojjay": { s: 3, c: 4 }, // Nobody comes to your house from shame
  "tor shathe keu kotha bole na lojjay": { s: 3, c: 4 }, // Nobody talks to you from shame
  "tor family te shob harami": { s: 3, c: 4 }, // Everyone in your family is bastard
  "tor family te shob randi": { s: 5, c: 4 }, // Everyone in your family is whore
  "tor bongsho te shob chodu": { s: 3, c: 5 }, // Everyone in your lineage is fucker
  "tor bongsho te shob magi": { s: 5, c: 4 }, // Everyone in your lineage is whore
  "তোর জীবনের কোনো দাম নেই": { s: 3, c: 4 }, // Your life has no value
  "তোর জন্ম হওয়া উচিত হয়নি": { s: 3, c: 4 }, // You shouldn't have been born
  "তোর মা তোর বাপকে চেনে না": { s: 1, c: 4 }, // Your mother doesn't know your father
  "তোর বাপকে খুঁজে পাওয়া যায় না": { s: 1, c: 4 }, // Your father can't be found
  "তোকে কেউ চায় না এই দুনিয়ায়": { s: 3, c: 4 }, // Nobody wants you in this world
  "তোর মুখ দেখলে মানুষ থুকে": { s: 3, c: 4 }, // People spit seeing your face
  "তোর নাম শুনে মানুষ হাসে": { s: 3, c: 4 }, // People laugh hearing your name
  "তোর পরিবারে সব হারামি": { s: 3, c: 4 }, // Everyone in your family is bastard
  "তোর পরিবারে সব রান্ডি": { s: 5, c: 4 }, // Everyone in your family is whore
  "তোর বংশে সব চোদু": { s: 3, c: 5 }, // Everyone in your lineage is fucker
};

export default bengaliBadWords;
