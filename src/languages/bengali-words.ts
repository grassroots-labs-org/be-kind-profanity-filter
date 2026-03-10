/**
 * Bengali profanity words list
 * Contains common profanities in both Bengali script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Bengali
 */
const bengaliBadWords: string[] = [
  // ========================================
  // === Bengali Script Profanities ===
  // ========================================
  "বাল", // Bal (pubic hair, used as insult)
  "কুত্তার বাচ্চা", // Kuttar bachcha (son of a dog)
  "হারামজাদা", // Haramjada (bastard)
  "শালা", // Shala (brother-in-law, used as insult)
  "শালি", // Shali (female version)
  "মাগি", // Magi (prostitute)
  "বেশ্যা", // Beshya (prostitute)
  "খানকি", // Khanki (prostitute)
  "চোদা", // Choda (f**k)
  "চুদি", // Chudi (f**k)
  "চুদা", // Chuda (f**k)
  "মাদারচোদ", // Madarchod (motherf**ker)
  "মাগীর ছেলে", // Magir chele (son of a prostitute)
  "কুত্তা", // Kutta (dog)
  "হারামি", // Harami (bastard)
  "বোকাচোদা", // Bokachoda (stupid f**ker)
  "গাণ্ডু", // Gandu (arse)
  "ভোদাই", // Bhodai (idiot/fool)
  "ভোদা", // Bhoda (vagina, used as insult)
  "পাগল", // Pagol (mad, less severe)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  "bal", // pubic hair (insult)
  "kuttar bachcha", // son of a dog
  "kutar bacha", // son of a dog (variant)
  "haramjada", // bastard
  "shala", // brother-in-law (insult)
  "shali", // sister-in-law (insult)
  "magi", // prostitute
  "beshya", // prostitute
  "khanki", // prostitute
  "choda", // f**k
  "chudi", // f**k
  "chuda", // f**k
  "madarchod", // motherf**ker
  "magir chele", // son of a prostitute
  "kutta", // dog (insult)
  "harami", // bastard
  "bokachoda", // stupid f**ker
  "gandu", // arse
  "bhodai", // idiot/fool
  "bhoda", // vagina (insult)
  "pagol", // mad/crazy

  // Common variations and combinations
  "shalabaj", // rascal
  "maderchod", // motherf**ker (variant)
  "madarchood", // motherf**ker (variant)
  "khankimagi", // prostitute (compound)
  "kuttar baccha", // son of a dog (variant)
  "shuorer baccha", // Son of a pig
  "shuor", // Pig
  "kamainna", // Bastard
  "hoga", // Anus (vulgar)
  "bessa", // prostitute (variant)
  "bessha", // prostitute (variant)
  "nongra", // Dirty (used as insult)
  "noshto", // Spoiled/corrupt
  "khankirpola", // Son of a prostitute
  "kuttachoda", // Dog f**ker

  // Common misspellings and variations
  "sala", // brother-in-law (insult variant)
  "salla", // brother-in-law (insult variant)
  "hoga mara", // f**k the arse
  "chudna", // to f**k
  "chudani", // female f**ker
  "chood", // f**k (variant)
  "chodon", // f**king
  "madarchodh", // motherf**ker (variant)

  // Additional Bengali profanity
  "baler baal", // Pubic hair insult
  "banchod", // Sister fucker
  "banchot", // Variant
  "beyadob", // Disrespectful (insult)
  "bichi", // Testicle
  "boga", // Dick (Sylheti dialect)
  "bonchod", // Variant of banchod
  "chudir bhai", // Brother of a fuck (insult)
  "dhonerbal", // Pubic hair (insult)
  "fatichuda", // Get fucked (vulgar)
  "gadha", // Donkey (insult)
  "guder bal", // Pubic hair (vulgar)
  "guder magi", // Vulgar compound
  "gudmarani", // Ass-fucker
  "heda", // Shit (dialectal)
  "khanki magi", // Prostitute (compound)
  "kutta ka bachcha", // Son of a dog
  "langta", // Naked / shameless
  "maagi", // Variant of magi
  "malaun", // Slur for non-Muslims (offensive)
  "michke", // Sly/sneaky (insult)
  "nangto", // Naked
  "poodmarani", // Ass fucker (variant)
  "shuar", // Pig (variant)
  "thor kheye mor", // Die eating a kick (insult)
  "tor mayer boda", // Your mother's pussy

  // Bengali script additions
  "বাঞ্চোদ", // Banchod (sister f**ker)
  "বিচি", // Bichi (testicle)
  "ধোনেরবাল", // Pubic hair
  "গুদমারানি", // Ass-fucker
  "খানকি মাগি", // Prostitute compound
  "তোর মায়ের বোদা", // Your mother's pussy
  "শূয়রের বাচ্চা", // Son of a pig
  "নাঙ্গতা", // Naked
  "গাধা", // Donkey
  "লাঙ্গটা", // Naked/shameless

  // More Bengali profanity - Roman script
  "baal choda", // pubic hair f**ker
  "baler putki", // pubic hair's arse
  "banchod sala", // sister f**ker rascal
  "boga chusbi", // will you suck the dick
  "boga kha", // eat the dick
  "bokachod", // stupid f**ker (variant)
  "boro magi", // big prostitute
  "chagol", // goat (insult)
  "chod khankir chele", // f**k the prostitute's son
  "chodna magi", // f**kable prostitute
  "chudir bap", // father of a f**k (insult)
  "chudir pola", // son of a f**k
  "dhon", // penis
  "faaltu", // worthless/useless
  "gaar marani", // arse f**ker
  "gud mara", // f**k the pussy
  "haramzadi", // female bastard
  "hoga marao", // get your arse f**ked
  "jhantu", // pubic hair (insult)
  "khankir pola", // son of a prostitute
  "khanki maal", // prostitute goods
  "kuttir bachcha", // son of a bitch
  "magir pola", // prostitute's son
  "magir gude", // prostitute's pussy
  "magi choda", // prostitute f**ker
  "mama choda", // uncle f**ker
  "matha kharap", // crazy/mental
  "nangta kutta", // naked dog
  "nirlojjo", // shameless
  "potita", // prostitute (formal)
  "putki", // arse
  "putki mara", // f**k the arse
  "putki marao", // get your arse f**ked
  "rakhail", // kept woman/mistress
  "shala badmash", // rascal scoundrel
  "shalar pola", // rascal's son
  "shuorer pola", // pig's son
  "thobra", // ugly face
  "tor baaper", // your father's (start of insult)
  "tor mayer gud", // your mother's pussy
  "tor putki marum", // I'll f**k your arse
  "baal chhire", // ripping pubic hair (insult)
  "chutia", // idiot/fool (vulgar)
  "chodanir beta", // son of a f**ker

  // Sylheti dialect
  "fua", // f**k (Sylheti)
  "fua de", // give a f**k (Sylheti)
  "fua kha", // eat a f**k (Sylheti)
  "boga khaise", // ate the dick (Sylheti)
  "futki", // arse (Sylheti)
  "futki mara", // f**k the arse (Sylheti)
  "xala", // brother-in-law insult (Sylheti variant)
  "mainka", // mother's (Sylheti insult)
  "khanki rand", // prostitute whore

  // More Bengali script
  "ধোন", // penis
  "পুটকি", // arse
  "পুটকি মারা", // f**k the arse
  "ছাগল", // goat (insult)
  "পতিতা", // prostitute (formal)
  "মাগির পোলা", // prostitute's son
  "মাগির গুদে", // prostitute's pussy
  "চোদনা মাগি", // f**kable prostitute
  "খানকির পোলা", // son of a prostitute
  "শালার পোলা", // rascal's son
  "তোর পুটকি মারুম", // I'll f**k your arse
  "তোর মায়ের গুদ", // your mother's pussy
  "নিরলজ্জ", // shameless
  "হারামজাদি", // female bastard
  "বোকাচোদ", // stupid f**ker
  "চুদির বাপ", // father of a f**k (insult)
  "বড় মাগি", // big prostitute
  "ফালতু", // worthless/useless
  "মাথা খারাপ", // crazy/mental
  "থোবড়া", // ugly face
  "রাখাল", // kept woman/mistress
  "চুদির পোলা", // son of a f**k
  "গুদ মারা", // f**k the pussy
  "নাঙ্গটা কুত্তা", // naked dog

  // ========================================
  // === Extended Bengali Profanity (Roman) ===
  // ========================================
  "baler bal", // Hair of pubic hair (extremely worthless)
  "baler chele", // Son of pubic hair
  "banchoder bachcha", // Sister fucker's child
  "bichi chipa", // Testicle squeeze
  "bichi mara", // Hit the testicles
  "bichi nosto", // Ruined testicles
  "boga chosha", // Dick sucker
  "boga chushbi", // Will you suck the dick
  "boga dhor", // Hold the dick
  "boga khabo", // I'll eat the dick
  "boga tana", // Pull the dick
  "bon choda", // Sister fucker (variant)
  "bonchoda sala", // Sister fucker bastard
  "bore dibo", // Will shove in
  "boro boga", // Big dick
  "boro gud", // Big pussy
  "boro putki", // Big ass
  "chal hoga mara", // Go fuck the ass
  "choda kha", // Eat fuck (insult)
  "chodani magi", // Fuckable prostitute (variant)
  "chodna sal", // Fucking rascal
  "chodon lag", // Start fucking
  "chudbo", // Will fuck
  "chudi tor maa", // Fuck your mother
  "chudir ma", // Mother of a fuck
  "dhar bichi", // Hold the testicle
  "dhon chaata", // Dick licker
  "dhon chosa", // Dick sucker (variant)
  "dhoner baal chele", // Son of a pubic hair (insult)
  "dhon khada", // Erect penis
  "dhon mara", // Dick hit
  "dhon tana", // Dick pull
  "fatichod", // Get-fucked (variant)
  "gabbu", // Stinky (insult)
  "gaar mara", // Fuck the ass (variant)
  "gaar marani sala", // Ass-fucker bastard
  "gorom gud", // Hot pussy (vulgar)
  "gude dhon dhukao", // Put dick in pussy
  "gud faata", // Pussy torn
  "guder bal chele", // Son of a pussy hair
  "guder ras", // Pussy juice (vulgar)
  "hoga boro", // Big anus
  "hoga choda", // Anus fucker
  "hoga dhon dhukao", // Put dick in anus
  "hoga faata", // Anus torn
  "hogay dhon", // Dick in anus
  "jaat magi", // Caste whore (insult)
  "jhantu sala", // Pubic-haired bastard
  "khanki randi", // Prostitute whore (compound)
  "khanki sali", // Prostitute sister-in-law
  "khanki tor maa", // Your mother the prostitute
  "kuttachod sala", // Dog-fucker bastard
  "kuttar bal", // Dog's hair (worthless)
  "langta magi", // Naked prostitute
  "maa baba choda", // Fuck the parents
  "maa choda", // Mother fucker
  "maa chudi", // Mother fucked
  "maa ke chod", // Fuck the mother
  "magir bal", // Prostitute's hair
  "magir chele hoga", // Prostitute's son's anus
  "magi sali", // Prostitute sister-in-law
  "mairi", // Oh hell (expletive)
  "nongra kutta", // Dirty dog
  "noshto magi", // Corrupt prostitute
  "ore sala", // Hey bastard
  "pandir chele", // Pimp's son
  "patni choda", // Wife fucker
  "poda", // Burn/get lost (insult)
  "poda sala", // Get lost bastard
  "shala badmaish", // Rascal hooligan (variant)
  "shala bichi", // Rascal testicle
  "shala chodna", // Rascal fuckable
  "shalapola", // Rascal's boy
  "shala tor maa", // Rascal your mother
  "shoitan", // Satan (insult)
  "shuor choda", // Pig fucker
  "shuorer bal", // Pig's hair (worthless)
  "shuorer bachcha sala", // Pig's son bastard
  "tor baap choda", // Your father's fucker
  "tor baaper bal", // Your father's hair
  "tor baaper bichi", // Your father's testicle
  "tor baaper dhon", // Your father's dick
  "tor baaper hoga", // Your father's anus
  "tor bon choda", // Your sister's fucker
  "tor bon magi", // Your sister the prostitute
  "tor maa chuda", // Your mother got fucked
  "tor maa ke chode", // Fuck your mother
  "tor maa magi", // Your mother is a prostitute
  "tor mayer bichi", // Your mother's testicle
  "tor mayer dhon", // Your mother's dick
  "tor mayer hoga", // Your mother's anus
  "tor putki fatar", // Your ass will tear

  // ========================================
  // === Sylheti Dialect Extended ===
  // ========================================
  "fuainna", // Fucking (Sylheti)
  "fua tor maa", // Fuck your mother (Sylheti)
  "fua khai laise", // Got fucked (Sylheti)
  "futki maira", // Ass fucker (Sylheti)
  "fua de maa", // Give a fuck mother (Sylheti)
  "xalar fua", // Rascal's fuck (Sylheti)
  "boga xusbi", // Will suck dick (Sylheti variant)
  "fuain", // Fucking (Sylheti variant)
  "haiga", // Anus (Sylheti)
  "haiga mara", // Fuck the anus (Sylheti)
  "huinnya", // Fucking (Sylheti variant)
  "khanki xala", // Prostitute rascal (Sylheti)
  "kutta xala", // Dog bastard (Sylheti)
  "mainka fua", // Mother's fuck (Sylheti)
  "mainka gut", // Mother's pussy (Sylheti)
  "mainka boga", // Mother's dick (Sylheti)
  "xalar pola", // Rascal's son (Sylheti)
  "xalar boga", // Rascal's dick (Sylheti)
  "tar mainka", // Your mother's (Sylheti insult)
  "futki nakki", // Ass licker (Sylheti)

  // ========================================
  // === Chittagonian Dialect ===
  // ========================================
  "foinya", // Fucker (Chittagonian)
  "foinya de", // Give a fuck (Chittagonian)
  "maayre foinya", // Mother fucker (Chittagonian)
  "gaand maira", // Ass fucker (Chittagonian)
  "boga foinya", // Dick fucker (Chittagonian)
  "futki foinya", // Ass fucker (Chittagonian variant)
  "kutta foinya", // Dog fucker (Chittagonian)
  "magi foinya", // Prostitute fucker (Chittagonian)
  "hazeer baizza", // Pig's son (Chittagonian)
  "hazeer foinya", // Pig fucker (Chittagonian)
  "tore maayre", // Your mother's (Chittagonian insult)
  "badaima", // Scoundrel (Chittagonian)
  "dangor boga", // Big dick (Chittagonian)
  "dangor futki", // Big ass (Chittagonian)
  "maagir foinya", // Prostitute fucker (Chittagonian)
  "shala foinya", // Rascal fucker (Chittagonian)
  "tor abba", // Your father (Chittagonian insult starter)
  "tor abbar boga", // Your father's dick (Chittagonian)
  "khanki foinya", // Prostitute fucker (Chittagonian)
  "nangta foinya", // Naked fucker (Chittagonian)

  // ========================================
  // === More Bengali Script Additions ===
  // ========================================
  "বালের বাল", // Baler bal (hair of pubic hair)
  "বালের ছেলে", // Baler chele (son of pubic hair)
  "বোগা চোষা", // Boga chosha (dick sucker)
  "বোগা ধর", // Boga dhor (hold the dick)
  "বোন চোদা", // Bon choda (sister fucker)
  "চোদ খা", // Chod kha (eat fuck)
  "চুদবো", // Chudbo (will fuck)
  "চুদি তোর মা", // Chudi tor maa (fuck your mother)
  "ধোন চাটা", // Dhon chaata (dick licker)
  "ধোন চোষা", // Dhon chosa (dick sucker)
  "ধোন খাড়া", // Dhon khada (erect penis)
  "গুদে ধোন ঢোকাও", // Gude dhon dhukao (put dick in pussy)
  "গুদ ফাটা", // Gud faata (pussy torn)
  "গুদের রস", // Guder ras (pussy juice)
  "হোগা চোদা", // Hoga choda (anus fucker)
  "খানকি রান্ডী", // Khanki randi (prostitute whore)
  "খানকি তোর মা", // Khanki tor maa (your mother prostitute)
  "মা চোদা", // Maa choda (mother fucker)
  "মা চুদি", // Maa chudi (mother fucked)
  "নোংরা কুত্তা", // Nongra kutta (dirty dog)
  "ওরে শালা", // Ore sala (hey bastard)
  "পোড়া", // Poda (burn/get lost)
  "পোড়া শালা", // Poda sala (get lost bastard)
  "শয়তান", // Shoitan (satan)
  "শূয়র চোদা", // Shuor choda (pig fucker)
  "তোর বাপ চোদা", // Tor baap choda (your father's fucker)
  "তোর বাপের বাল", // Tor baaper bal (your father's hair)
  "তোর বাপের ধোন", // Tor baaper dhon (your father's dick)
  "তোর বোন চোদা", // Tor bon choda (your sister's fucker)
  "তোর বোন মাগি", // Tor bon magi (your sister prostitute)
  "তোর মা চুদা", // Tor maa chuda (your mother got fucked)
  "তোর মা মাগি", // Tor maa magi (your mother is prostitute)
  "তোর মায়ের ধোন", // Tor mayer dhon (your mother's dick)
  "তোর পুটকি ফাটর", // Tor putki fatar (your ass will tear)
  "ফোইন্যা", // Foinya (fucker - Chittagonian)
  "হাজির বাইজ্যা", // Hazeer baizza (pig's son - Chittagonian)
  "বদাইমা", // Badaima (scoundrel - Chittagonian)
  "ফুয়াইন্না", // Fuainna (fucking - Sylheti)
  "হাইগা", // Haiga (anus - Sylheti)
  "হাইগা মারা", // Haiga mara (fuck anus - Sylheti)

  // ========================================
  // === Internet Slang (Bengali Speakers) ===
  // ========================================
  "magi sala", // Prostitute rascal (texting)
  "bkchd", // Abbreviation for bokachoda
  "mchd", // Abbreviation for madarchod
  "bnchd", // Abbreviation for banchod
  "khankir baccha", // Son of a prostitute (texting)
  "magir put", // Prostitute's son (texting)
  "bal fela", // Throw pubic hair (worthless)
  "guder chul", // Pussy hair (variant)
  "shala mc", // Rascal motherfucker
  "magi mc", // Prostitute motherfucker
  "bokachoda sala", // Stupid fucker bastard
  "chod toke", // Fuck you
  "amar boga kha", // Eat my dick
  "tor gude amar dhon", // My dick in your pussy
  "chup kor kuttar baccha", // Shut up son of a dog
  "tui ekta magi", // You are a prostitute
  "tui ekta kutta", // You are a dog
  "matha nosto", // Mind corrupt (crazy)
  "nirlojjo magi", // Shameless prostitute
  "nirlojjo kutta", // Shameless dog

  // ========================================
  // === More Romanized Bengali Profanity ===
  // ========================================
  "bal chushi", // Pubic hair sucker
  "baler chudi", // Pubic hair's fuck
  "bichi chushi", // Testicle sucker
  "boga dhukao", // Insert dick
  "boga khabi", // Will you eat dick
  "boga size", // Dick size (insult)
  "bon ke chod", // Fuck the sister
  "bonchod harami", // Sister fucker bastard
  "boro bichi", // Big testicle
  "chagol choda", // Goat fucker
  "choda tor baap", // Fuck your father
  "choder bachcha", // Fucker's child
  "chodi tor bon", // Fucked your sister
  "chudani sala magi", // Female fucker rascal prostitute
  "chudir ma ba", // Mother father of fuck
  "dhon chusha", // Dick sucked
  "dhon lamba", // Long dick (insult)
  "dhon mota", // Fat dick (insult)
  "dhoner aga", // Tip of dick
  "dhoner chosa", // Dick sucking
  "gabli", // Ugly (insult)
  "gaar chata", // Ass licker
  "gaar fata", // Ass torn
  "gaar mairbi", // Will fuck your ass
  "gorom boga", // Hot dick
  "gud chata", // Pussy licker
  "gud khabo", // Will eat pussy
  "gud theke baire aye", // Come out of the pussy (insult)
  "guder pani", // Pussy water
  "gudhkhana", // Ass place (vulgar)
  "heda kha", // Eat shit
  "hogay lathi", // Stick in anus
  "jaat khanki", // Caste prostitute
  "khanki sala bonchod", // Prostitute rascal sister fucker
  "khanki magi tor maa", // Your mother is a prostitute whore
  "kuttar gaar", // Dog's ass
  "kuttar boga", // Dog's dick
  "lathhi mar", // Beat with stick
  "maal sala", // Hot goods bastard (objectifying)
  "magi chodar bachcha", // Prostitute fucker's child
  "magir futki", // Prostitute's ass
  "nongra sala", // Dirty rascal
  "oshlil", // Obscene
  "pandir magi", // Pimp's prostitute
  "sala baal", // Rascal pubic hair
  "sala boga khor", // Rascal dick eater
  "sala khanki chod", // Rascal prostitute fucker
  "sala magi chod", // Rascal prostitute fucker (variant)
  "shoitan sala", // Satan rascal
  "shuorer gaar", // Pig's ass
  "shuorer boga", // Pig's dick
  "thukra magi", // Spittle prostitute (disgusting)
  "tor baaper gaar", // Your father's ass
  "tor baaper putki", // Your father's anus
  "tor bon khanki", // Your sister is a prostitute
  "tor bon maal", // Your sister is hot goods (objectifying)
  "tor gude boga", // Dick in your pussy
  "tor ma beshya", // Your mother is a prostitute
  "tor ma randi", // Your mother is a whore
  "tor maa ke chudum", // I'll fuck your mother
  "tor mayer futki", // Your mother's ass
  "tor mayer putki", // Your mother's anus
  "voda", // Vagina (variant)
  "vodai", // Vagina person (insult)

  // ========================================
  // === Banglish (Bengali-English Mix) ===
  // ========================================
  "fucking bokachoda", // Fucking stupid fucker
  "bloody shala", // Bloody rascal
  "damn khanki", // Damn prostitute
  "fucking magi", // Fucking prostitute
  "shit magi", // Shit prostitute
  "asshole gandu", // Asshole (Banglish)
  "bastard haramjada", // Bastard (Banglish)
  "bitch magi", // Bitch prostitute (Banglish)
  "son of a magi", // Son of a prostitute (Banglish)
  "stupid bokachoda", // Stupid fucker (Banglish)
  "shut up shala", // Shut up rascal (Banglish)
  "fuck off shala", // Fuck off rascal (Banglish)
  "die shala", // Die rascal (Banglish)
  "ugly magi", // Ugly prostitute (Banglish)
  "cheap khanki", // Cheap prostitute (Banglish)
  "dirty nongra kutta", // Dirty dirty dog (Banglish)
  "loser bokachoda", // Loser stupid fucker (Banglish)
  "idiot sala", // Idiot rascal (Banglish)
  "piece of shit shala", // Piece of shit rascal (Banglish)
  "useless faaltu", // Useless worthless (Banglish)
  "disgusting nongra", // Disgusting dirty (Banglish)
  "pathetic bokachoda", // Pathetic stupid fucker (Banglish)
  "bloody harami", // Bloody bastard (Banglish)
  "fucking haramjada", // Fucking bastard (Banglish)
  "go to hell shala", // Go to hell rascal (Banglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "bokachoda haramjada", // Stupid fucker bastard
  "khanki magi haramjada", // Prostitute bastard
  "kuttar bachcha haramjada", // Dog's son bastard
  "shuorer bachcha bokachoda", // Pig's son stupid fucker
  "magi sala bonchod", // Prostitute rascal sister fucker
  "haramjada kuttar bachcha", // Bastard dog's son
  "bokachoda magir chele", // Stupid fucker prostitute's son
  "khanki shuorer bachcha", // Prostitute pig's son
  "shala bokachoda haramjada", // Rascal stupid fucker bastard
  "tor maa khanki magi", // Your mother is a prostitute whore
  "tor baap pandir", // Your father is a pimp
  "tor bon boro magi", // Your sister is a big prostitute
  "sala kuttar bachcha bonchod", // Rascal dog's son sister fucker
  "bokachoda chuda tor maa", // Stupid fucker fuck your mother
  "haramjada shuorer bachcha sala", // Bastard pig's son rascal
  "khanki magir chele sala", // Prostitute's son rascal
  "chud tor ma ba dui jon", // Fuck both your parents
  "tor maa baap dui jon magi", // Both your parents are prostitutes
  "sala tor goshthi chudi", // Rascal your whole family fucked

  // ========================================
  // === More Bengali Script Additions ===
  // ========================================
  "বালের চুদি", // Baler chudi (pubic hair's fuck)
  "বিচি চুশি", // Bichi chushi (testicle sucker)
  "বোগা ঢোকাও", // Boga dhukao (insert dick)
  "ছাগল চোদা", // Chagol choda (goat fucker)
  "চোদের বাচ্চা", // Choder bachcha (fucker's child)
  "ধোনের চোষা", // Dhoner chosha (dick sucking)
  "গুদ চাটা", // Gud chata (pussy licker)
  "গুদের পানি", // Guder pani (pussy water)
  "হেদা খা", // Heda kha (eat shit)
  "জাত খানকি", // Jaat khanki (caste prostitute)
  "কুত্তার গার", // Kuttar gaar (dog's ass)
  "কুত্তার বোগা", // Kuttar boga (dog's dick)
  "মাগি চোদার বাচ্চা", // Magi chodar bachcha (prostitute fucker's child)
  "শূয়রের গার", // Shuorer gaar (pig's ass)
  "তোর বোনের পুটকি", // Tor boner putki (your sister's anus)
  "তোর বাপের পুটকি", // Tor baaper putki (your father's anus)
  "তোর মায়ের পুটকি", // Tor mayer putki (your mother's anus)
  "তোর বোন খানকি", // Tor bon khanki (your sister is a prostitute)
  "তোর মা বেশ্যা", // Tor ma beshya (your mother is a prostitute)
  "তোর মা রান্ডী", // Tor ma randi (your mother is a whore)
  "তোর গোষ্ঠী চুদি", // Tor goshthi chudi (your whole family fucked)
  "তোর মা বাপ দুই জন মাগি", // Tor maa baap dui jon magi (both parents prostitutes)
  "বোকাচোদা হারামজাদা", // Bokachoda haramjada (stupid fucker bastard)
  "খানকি শূয়রের বাচ্চা", // Khanki shuorer bachcha (prostitute pig's son)
  "ভোদা চাটা", // Bhoda chata (vagina licker)
  "ভোদাইর বাচ্চা", // Bhodair bachcha (idiot's child)
  "পাগলের বাচ্চা", // Pagoler bachcha (madman's child)
  "নোংরা কুত্তার বাচ্চা", // Nongra kuttar bachcha (dirty dog's child)
  "হারামির বাচ্চা", // Haramir bachcha (bastard's child)
  "মাদারচোদ শালা", // Madarchod shala (motherfucker rascal)
  "বোকাচোদ শালা", // Bokachod shala (stupid fucker rascal)
  "গাণ্ডু শালা", // Gandu shala (asshole rascal)
  "মাগি শালা", // Magi shala (prostitute rascal)
  "চুদির বাই", // Chudir bhai (brother of fuck)
  "তোর মায়ের বোগা খাবো", // Tor mayer boga khabo (I'll eat your mother's dick)
  "তোর মায়ের গুদ ফাটাবো", // Tor mayer gud fatabo (I'll tear your mother's pussy)
  "শালা মাদারচোদ বোকাচোদা", // Shala madarchod bokachoda (rascal motherfucker stupid fucker)

  // ========================================
  // === Noakhali Dialect ===
  // ========================================
  "fuainno", // Fucker (Noakhali)
  "fuainno re", // Hey fucker (Noakhali)
  "toor mayre fua", // Fuck your mother (Noakhali)
  "futgi maira", // Ass fucker (Noakhali)
  "toor boinno fua", // Fuck your sister (Noakhali)
  "haiga maira re", // Hey ass fucker (Noakhali)
  "magir fut fua", // Prostitute's ass fuck (Noakhali)

  // ========================================
  // === Rangpuri/Rajbangshi Dialect ===
  // ========================================
  "fukinni", // Fucker (Rangpuri)
  "mayre fukinni", // Mother fucker (Rangpuri)
  "sala fukinni", // Rascal fucker (Rangpuri)
  "kutar baicha", // Dog's son (Rangpuri)
  "magir baicha", // Prostitute's son (Rangpuri)
  "bongal choda", // Bengali fucker (Rangpuri insult)
  "gadhar baicha", // Donkey's son (Rangpuri)

  // ========================================
  // === Internet Slang Extended ===
  // ========================================
  "bkchodr bchcha", // Abbreviation for bokachoda bachcha
  "mc sala bkchd", // MC rascal BC (texting)
  "magir put mchd", // Prostitute's son MC (texting)
  "khkimagi", // Abbreviation for khanki magi
  "shlabnchl", // Abbreviation compound
  "brshla", // Bad rascal (texting)
  "tor maa mgi", // Your mother prostitute (texting)
  "amr bga kha", // Eat my dick (texting)
  "chdtoke", // Fuck you (texting)
  "shla bkchda", // Rascal stupid fucker (texting)
  "hrmjda", // Haramjada abbreviation
  "ktrbchcha", // Kuttar bachcha abbreviation
  "mgi chd", // Magi chod abbreviation
  "bnchdshla", // Bonchod shala abbreviation

  // ========================================
  // === More Sexual Terms ===
  // ========================================
  "dhon chosha de", // Give dick sucking
  "boga chosha magi", // Dick sucking prostitute
  "guder ras kha", // Eat pussy juice
  "tor putki fatabo", // I'll tear your ass
  "tor gude amar dhon dhukabo", // I'll put my dick in your pussy
  "dhon chaatni", // Dick licking woman
  "putki chaatni", // Ass licking woman
  "boga tana magi", // Dick pulling prostitute
  "gud kha sala", // Eat pussy rascal
  "bichi chaata", // Testicle licker
  "dhoner matha chosa", // Suck the head of the dick
  "gudmarani sala bonchod", // Ass fucker rascal sister fucker
  "hogay boga dhukai", // Dick inserted in anus
  "gudmarani bachcha", // Ass fucker's child
  "dhoner ras", // Dick juice (semen)
  "bicher pani", // Testicle water (vulgar)

  // ========================================
  // === More Evasion Spellings ===
  // ========================================
  "b0kachoda", // Stupid fucker (evasion)
  "kh@nki", // Prostitute (evasion)
  "m@gi", // Prostitute (evasion)
  "sh@la", // Rascal (evasion)
  "ch0da", // Fuck (evasion)
  "h@ramjada", // Bastard (evasion)
  "g@ndu", // Asshole (evasion)
  "b@l", // Pubic hair (evasion)
  "dh0n", // Penis (evasion)
  "putk1", // Arse (evasion)
  "b0ga", // Dick (evasion)
  "bnchdshala", // Bonchod shala compound

  // ========================================
  // === Barisal Dialect ===
  // ========================================
  "fuinna tor maa", // Fuck your mother (Barisal)
  "chodon tor bon", // Fuck your sister (Barisal)
  "sala magir gude", // Rascal prostitute's pussy (Barisal)
  "heda kha sala", // Eat shit rascal (Barisal)

  // ========================================
  // === Extended Bengali Script Profanity ===
  // ========================================
  "ভোদা খোর", // Bhoda khor (vagina eater)
  "বালের ছেড়া", // Baler chheda (torn pubic hair, worthless)
  "গুদমারানি মাগি", // Gudmarani magi (ass-fucker prostitute)
  "ধোনের আগা চোষা", // Dhoner aga chosha (tip of dick sucker)
  "পুটকি ফাটাবো", // Putki fatabo (I'll tear the ass)
  "গুদ ফাটাবো", // Gud fatabo (I'll tear the pussy)
  "বোগা কাটবো", // Boga katbo (I'll cut the dick)
  "বিচি মাসলাবো", // Bichi maslabo (I'll crush the testicles)
  "ধোনের পানি", // Dhoner pani (dick water, semen)
  "গুদের মধু", // Guder modhu (pussy honey)
  "পুটকির ফুটো", // Putkir futo (asshole)
  "বালের ঝাড়", // Baler jhar (pubic hair bush)
  "মাগির দুধ", // Magir dudh (prostitute's milk)
  "কুত্তার গুদ", // Kuttar gud (dog's pussy)
  "শূয়রের পুটকি", // Shuorer putki (pig's anus)
  "গাধার পুটকি", // Gadhar putki (donkey's anus)
  "ছাগলের বোগা", // Chagoler boga (goat's dick)
  "গরুর গুদ", // Gorur gud (cow's pussy)
  "ঘোড়ার বোগা", // Ghorar boga (horse's dick)
  "বানরের গুদ", // Banorer gud (monkey's pussy)
  "তোর মায়ের দুধ খাই", // Tor mayer dudh khai (I eat your mother's milk, insulting)
  "তোর মা কুকুরের মতো", // Tor maa kukurer moto (your mother is like a dog)
  "তোর বাপ ভিক্ষুক", // Tor baap bhikkhuk (your father is a beggar)
  "তোর বোন বাজারের মাগি", // Tor bon bajarer magi (your sister is a market prostitute)
  "চামার", // Chamar (caste slur)
  "মেথর", // Methor (sweeper caste slur)
  "ডোম", // Dom (funeral worker caste slur)
  "হেঁদা", // Heda (feces)
  "হাগু", // Hagu (feces, childish)
  "মুত", // Mut (urine)
  "পাদ", // Pad (fart)
  "পাদুরে", // Padure (one who farts)
  "গু", // Gu (feces, vulgar)
  "গু খা", // Gu kha (eat feces)
  "মুত খা", // Mut kha (drink urine)
  "পাদ শুঁকে মর", // Pad shunke mor (smell fart and die)
  "হেঁদার কীট", // Hedar keet (feces worm)
  "গুর পোকা", // Gur poka (shit bug)
  "নর্দমার কীট", // Nordomar keet (drain worm)
  "ড্রেনের ইঁদুর", // Drener indur (drain rat)
  "ময়লার পোকা", // Moylar poka (garbage bug)
  "ভাঁড়", // Bhand (clown, buffoon)
  "বেজন্মা", // Bejonma (ill-born)
  "অশ্লীল", // Oshlil (obscene)
  "বদমাশ", // Bodmash (crook)
  "লম্পট", // Lompot (lecherous)
  "ব্যভিচারী", // Byobhichari (adulterer)
  "ব্যভিচারিণী", // Byobhicharini (adulteress)
  "কুলটা", // Kulota (unchaste woman)
  "খারাপ মেয়ে", // Kharap meye (bad girl)
  "নষ্ট মেয়ে", // Noshto meye (spoiled girl)
  "চরিত্রহীন", // Choritrohin (characterless)
  "বেহায়া", // Behaya (shameless)
  "নির্লজ্জ", // Nirlojjo (shameless, formal)
  "পাজি", // Paji (rascal)
  "বজ্জাত", // Bojjat (naughty/evil)
  "গুণ্ডা", // Gunda (thug)
  "গুণ্ডামি", // Gundami (thuggery)
  "দালাল", // Dalal (broker/pimp)
  "টাউট", // Taut (tout/agent)
  "বাটপাড়", // Batpar (cheat)

  // ========================================
  // === Extended Romanized Bengali Profanity ===
  // ========================================
  "bhoda khor", // Vagina eater
  "baler chheda", // Torn pubic hair (worthless)
  "gudmarani magi", // Ass-fucker prostitute
  "dhoner aga chosha", // Tip of dick sucker
  "putki fatabo", // I'll tear the ass
  "gud fatabo", // I'll tear the pussy
  "boga katbo", // I'll cut the dick
  "bichi maslabo", // I'll crush testicles
  "dhoner pani", // Dick water (semen)
  "guder modhu", // Pussy honey
  "putkir futo", // Asshole
  "baler jhar", // Pubic hair bush
  "magir dudh", // Prostitute's milk
  "kuttar gud", // Dog's pussy
  "shuorer putki", // Pig's anus
  "gadhar putki", // Donkey's anus
  "chagoler boga", // Goat's dick
  "gorur gud", // Cow's pussy
  "ghorar boga", // Horse's dick
  "banorer gud", // Monkey's pussy
  "tor mayer dudh khai", // I eat your mother's milk
  "tor maa kukurer moto", // Your mother is like a dog
  "tor baap bhikkhuk", // Your father is a beggar
  "tor bon bajarer magi", // Your sister market prostitute
  "chamar", // Caste slur
  "methor", // Sweeper caste slur
  "dom", // Funeral worker caste slur
  "hagu", // Feces (childish)
  "mut", // Urine
  "padure", // One who farts
  "gu", // Feces
  "gu kha", // Eat feces
  "mut kha", // Drink urine
  "pad shunke mor", // Smell fart and die
  "hedar keet", // Feces worm
  "gur poka", // Shit bug
  "nordomar keet", // Drain worm
  "drener indur", // Drain rat
  "moylar poka", // Garbage bug
  "bhand", // Buffoon
  "bejonma", // Ill-born
  "bodmash", // Crook
  "lompot", // Lecherous
  "byobhichari", // Adulterer
  "byobhicharini", // Adulteress
  "kulota", // Unchaste woman
  "kharap meye", // Bad girl
  "noshto meye", // Spoiled girl
  "choritrohin", // Characterless
  "behaya", // Shameless
  "paji", // Rascal
  "bojjat", // Naughty/evil
  "gunda", // Thug
  "gundami", // Thuggery
  "dalal", // Broker/pimp
  "taut", // Tout/agent
  "batpar", // Cheat

  // ========================================
  // === Extended Compound Insults (Roman) ===
  // ========================================
  "bokachoda kuttar bachcha sala", // Stupid fucker dog's son bastard
  "magi tor maa tor bon", // Prostitute your mother your sister
  "khanki magi bokachoda haramjada sala", // Prostitute stupid fucker bastard rascal
  "tor goshthi ke chudi", // Fuck your entire clan
  "tor baaper baap choda", // Your grandfather's fucker
  "tor naani ke chodi", // Fucked your grandmother
  "tor dadu ke choda", // Fucked your grandfather
  "tor khandaan chuda", // Your dynasty is fucked
  "shala nongra kuttar bachcha magi", // Rascal dirty dog's child prostitute
  "khanki magi kuttar bachcha shuorer pola", // Prostitute dog's child pig's son
  "tor putki te boga dhukabo ar beriye anbo", // I'll insert and remove dick from your ass
  "tor gude amar dhon dhukiye chodon korbo", // I'll put my dick in your pussy and fuck
  "chup kor noyto boga katbo", // Shut up or I'll cut the dick
  "tui magi tor maa magi tor bon magi", // You prostitute your mother prostitute your sister prostitute
  "amra sob tore chudbo", // We'll all fuck you
  "tor shob kichhu shesh korbo", // I'll finish everything of yours (threat)
  "khanki magir put shuorer bachcha kuttar bachcha", // Prostitute's son pig's child dog's child
  "bokachoda haramjada maderchoder bachcha", // Stupid fucker bastard motherfucker's child
  "tor putki boro, boga dhukbe na", // Your ass is big, dick won't fit
  "tor gude bichi nai", // Your pussy has no balls (senseless insult)
  "ekta boro boga diye tor gude dhukabo", // I'll insert a big dick in your pussy
  "tor bon ke bazaar e bechbo", // I'll sell your sister in the market
  "tor maa ke bazaar e bechbo", // I'll sell your mother in the market
  "haramjada nongra choda kuttar bachcha magi", // Bastard dirty fucker dog's child prostitute
  "bokachoda sala banchod maderchod", // Stupid fucker bastard sisterfucker motherfucker

  // ========================================
  // === Extended Sylheti Dialect ===
  // ========================================
  "fuainno sala", // Fucker bastard (Sylheti)
  "fuainno kuttar baicha", // Fucker dog's child (Sylheti)
  "xalar xala fuainno", // Rascal's rascal fucker (Sylheti)
  "boga chuinna", // Dick sucking (Sylheti)
  "haiga fatainno", // Ass tearing (Sylheti)
  "gut fatainno", // Pussy tearing (Sylheti)
  "mainka gut te boga", // Dick in mother's pussy (Sylheti)
  "tar boinno fuainno", // His sister fucker (Sylheti)
  "tar bap fuainno", // His father fucker (Sylheti)
  "xalar gut khainno", // Rascal's pussy eater (Sylheti)
  "kutta xalar baicha", // Dog rascal's child (Sylheti)
  "hazir xala fuainno", // Pig rascal fucker (Sylheti)
  "mainka boga khainno", // Mother's dick eater (Sylheti)
  "tar abba fuainno", // His father fucker (Sylheti variant)
  "tar amma fuainno", // His mother fucker (Sylheti)
  "fuainno tar goshthi", // Fuck his clan (Sylheti)
  "boga tanna xala", // Dick pulling rascal (Sylheti)
  "gut mairra xala", // Pussy fucker rascal (Sylheti)
  "futki chattinna", // Ass licking (Sylheti)
  "haiga chattinna", // Anus licking (Sylheti)
  "boga chinna xala", // Dick cutting rascal (Sylheti)
  "mainka haiga fua", // Mother's anus fuck (Sylheti)
  "boinno gut fua", // Sister's pussy fuck (Sylheti)
  "xalar bap fua", // Rascal's father fuck (Sylheti)

  // ========================================
  // === Extended Chittagonian Dialect ===
  // ========================================
  "foinya sala banchod", // Fucker rascal sisterfucker (Chittagonian)
  "tore maayre foinya sala", // Your mother fucker rascal (Chittagonian)
  "maayre gudmara", // Mother's ass fucker (Chittagonian)
  "boinno foinya sala", // Sister fucker rascal (Chittagonian)
  "hazeer bach foinya", // Pig's child fucker (Chittagonian)
  "kuttar foinya sala", // Dog fucker rascal (Chittagonian)
  "dangor gudmare", // Big ass fucker (Chittagonian)
  "dangor boga kha", // Eat big dick (Chittagonian)
  "futki fattainne", // Ass tearing (Chittagonian)
  "tore abbar boga kha", // Eat your father's dick (Chittagonian)
  "maayre foinya kutta", // Mother fucker dog (Chittagonian)
  "maagi sala foinya", // Prostitute rascal fucker (Chittagonian)
  "tore maayre tore abba foinya", // Your mother your father fucker (Chittagonian)
  "khanki maagi foinya sala", // Prostitute fucker rascal (Chittagonian)
  "dangor gudde boga dhuga", // Big ass dick insert (Chittagonian)
  "tore boinno gudmare", // Your sister's ass fuck (Chittagonian)
  "sala foinya kuttar baizza", // Rascal fucker dog's son (Chittagonian)
  "hazeer foinya sala badaima", // Pig fucker rascal scoundrel (Chittagonian)

  // ========================================
  // === Extended Noakhali Dialect ===
  // ========================================
  "fuainno re sala", // Hey fucker rascal (Noakhali)
  "toor mayre futgi", // Your mother's ass (Noakhali)
  "toor boinno futgi", // Your sister's ass (Noakhali)
  "futgi maira sala", // Ass fucker rascal (Noakhali)
  "toor mayre gudmara", // Your mother's pussy fucker (Noakhali)
  "kutta fuainno sala", // Dog fucker rascal (Noakhali)
  "magir futgi fua sala", // Prostitute's ass fuck rascal (Noakhali)
  "toor abbar boga kha", // Eat your father's dick (Noakhali)
  "sala fuainno kuttar baccha", // Rascal fucker dog's child (Noakhali)
  "shuorer baccha fuainno", // Pig's child fucker (Noakhali)
  "haiga fuainno sala", // Anus fucker rascal (Noakhali)
  "toor goshthi fuainno", // Your clan fucker (Noakhali)
  "magir fut maira re", // Prostitute's ass fucker (Noakhali)
  "boga chattainno re", // Dick licker hey (Noakhali)
  "gudmara re sala fuainno", // Pussy fucker hey rascal fucker (Noakhali)

  // ========================================
  // === Extended Rangpuri Dialect ===
  // ========================================
  "fukinni sala kutta", // Fucker rascal dog (Rangpuri)
  "mayre fukinni kuttar baicha", // Mother fucker dog's child (Rangpuri)
  "gadhar baicha fukinni", // Donkey's child fucker (Rangpuri)
  "magir baicha fukinni sala", // Prostitute's child fucker rascal (Rangpuri)
  "bongal fukinni sala", // Bengali fucker rascal (Rangpuri)
  "shuorer baicha fukinni", // Pig's child fucker (Rangpuri)
  "kutta fukinni gadhar baicha", // Dog fucker donkey's child (Rangpuri)
  "tor may fukinni sala", // Your mother fucker rascal (Rangpuri)
  "tor bai fukinni", // Your sister fucker (Rangpuri)
  "tor bap fukinni", // Your father fucker (Rangpuri)
  "sala fukinni harami", // Rascal fucker bastard (Rangpuri)
  "magir fukinni sala banchod", // Prostitute fucker rascal sisterfucker (Rangpuri)

  // ========================================
  // === More Bengali Script Extended ===
  // ========================================
  "বোকাচোদা কুত্তার বাচ্চা শালা", // Stupid fucker dog's son rascal
  "মাগি তোর মা তোর বোন", // Prostitute your mother your sister
  "খানকি মাগি বোকাচোদা হারামজাদা শালা", // Prostitute stupid fucker bastard rascal
  "তোর গোষ্ঠী কে চুদি", // Fuck your entire clan
  "তোর বাপের বাপ চোদা", // Your grandfather's fucker
  "তোর নানী কে চোদি", // Fucked your grandmother
  "তোর দাদু কে চোদা", // Fucked your grandfather
  "তোর খান্দান চুদা", // Your dynasty is fucked
  "শালা নোংরা কুত্তার বাচ্চা মাগি", // Rascal dirty dog's child prostitute
  "খানকি মাগি কুত্তার বাচ্চা শূয়রের পোলা", // Prostitute dog's child pig's son
  "চুপ কর নয়তো বোগা কাটবো", // Shut up or I'll cut the dick
  "তুই মাগি তোর মা মাগি তোর বোন মাগি", // You prostitute your mother prostitute your sister prostitute
  "আমরা সব তোরে চুদবো", // We'll all fuck you
  "তোর সব কিছু শেষ করবো", // I'll finish everything of yours
  "বোকাচোদা হারামজাদা মাদারচোদের বাচ্চা", // Stupid fucker bastard motherfucker's child
  "একটা বড় বোগা দিয়ে তোর গুদে ঢোকাবো", // I'll insert a big dick in your pussy
  "তোর বোন কে বাজারে বেচবো", // I'll sell your sister in the market
  "তোর মা কে বাজারে বেচবো", // I'll sell your mother in the market
  "হারামজাদা নোংরা চোদা কুত্তার বাচ্চা মাগি", // Bastard dirty fucker dog's child prostitute
  "বোকাচোদা শালা বাঞ্চোদ মাদারচোদ", // Stupid fucker rascal sisterfucker motherfucker
  "ভোদাখোর", // Vagina eater

  // ========================================
  // === Extended Internet Slang ===
  // ========================================
  "bkchd shla bnchd", // Bokachoda shala banchod abbreviation
  "mchd kttrbchch", // Madarchod kuttar bachcha abbreviation
  "shla nngra mgi", // Shala nongra magi abbreviation
  "trmaa mgi", // Tor maa magi abbreviation
  "trbon mgi", // Tor bon magi abbreviation
  "trmaa chd", // Tor maa chod abbreviation
  "trbon chd", // Tor bon chod abbreviation
  "trbaap bhndchd", // Tor baap banchod abbreviation
  "trgoshthi chd", // Tor goshthi chod abbreviation
  "khki mgi rdi", // Khanki magi randi abbreviation
  "bkchd hrmjd shla kttrbchch", // Compound abbreviation
  "shlr pla bkchd", // Shalar pola bokachoda abbreviation
  "mgi chdr bchch shla", // Magi chodar bachcha shala abbreviation
  "nngra ktta shla bkchd", // Nongra kutta shala bokachoda abbreviation

  // ========================================
  // === Extended Banglish Mix ===
  // ========================================
  "fucking magi tor maa", // Fucking prostitute your mother
  "bloody khanki magi", // Bloody prostitute
  "shit bokachoda sala", // Shit stupid fucker rascal
  "asshole kuttar bachcha", // Asshole dog's child
  "bastard shuorer bachcha", // Bastard pig's child
  "bitch tor bon", // Bitch your sister
  "son of a khanki magi", // Son of a prostitute
  "mother fucker madarchod sala", // Motherfucker (redundant)
  "sister fucker banchod", // Sisterfucker (redundant)
  "go die sala bokachoda", // Go die rascal stupid fucker
  "kill yourself sala magi", // Kill yourself rascal prostitute
  "trash bokachoda", // Trash stupid fucker
  "garbage nongra kutta sala", // Garbage dirty dog rascal
  "worthless faaltu magi", // Worthless prostitute
  "pathetic bokachoda haramjada", // Pathetic stupid fucker bastard
  "disgusting nongra kuttar bachcha", // Disgusting dirty dog's child
  "useless faaltu bokachoda", // Useless stupid fucker
  "ugly thobra magi sala", // Ugly face prostitute rascal
  "stupid bokachoda sala harami", // Stupid fucker rascal bastard
  "dumbass bokachoda haramjada sala", // Dumbass stupid fucker bastard rascal

  // ========================================
  // === Extended Threats ===
  // ========================================
  "tor putki chirbo", // I'll rip your ass
  "tor gude boga dhukiye fatabo", // I'll insert dick and tear your pussy
  "tor boga katbo", // I'll cut your dick
  "tor bichi maslabo", // I'll crush your testicles
  "toke maira felbo", // I'll beat you dead
  "tor haddi bhangbo", // I'll break your bones
  "toke kutta diye khawaibo", // I'll feed you to dogs
  "tor mukh bhangbo", // I'll break your face
  "tor daat bhangbo", // I'll break your teeth
  "toke drain e felbo", // I'll throw you in the drain
  "toke gutter e felbo", // I'll throw you in the gutter
  "toke naali te felbo", // I'll throw you in the drain
  "tor jibonshesh korbo", // I'll end your life
  "toke chire felbo", // I'll rip you apart
  "toke pochiye dibo", // I'll rot you away
  "tor shob shesh", // Everything of yours is over

  // ========================================
  // === Extended Scatological (Roman) ===
  // ========================================
  "heda kha sala magi", // Eat shit rascal prostitute
  "gu kha kuttar bachcha", // Eat shit dog's child
  "mut kha shuorer pola", // Drink piss pig's son
  "tor mukhe heda", // Shit in your face
  "tor mukhe gu", // Feces in your face
  "tor mukhe mut", // Urine in your face
  "heda magir pola", // Shit prostitute's son
  "gu magir bachcha", // Feces prostitute's child
  "heda khor sala", // Shit eater rascal
  "gu khor magi", // Feces eater prostitute
  "mut khor kutta", // Urine eater dog
  "pad magir chele", // Fart prostitute's son
  "paad sungh sala", // Smell fart rascal
  "tatti kha bokachoda", // Eat feces stupid fucker
  "gobar kha haramjada", // Eat cow dung bastard
  "naali te gire mor", // Fall in drain and die
  "gutter te gire mor", // Fall in gutter and die
  "heda te doobe mor", // Drown in shit and die

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "b0kach0da", // Stupid fucker evasion
  "kh@nk1", // Prostitute evasion
  "m@g1", // Prostitute evasion
  "sh@l@", // Rascal evasion
  "ch0d@", // Fuck evasion
  "h@r@mjad@", // Bastard evasion
  "g@nd00", // Asshole evasion
  "b@al", // Pubic hair evasion
  "b0g@", // Dick evasion
  "madarc4od", // Motherfucker evasion
  "b@nch0d", // Sisterfucker evasion
  "kutt@r b@cchha", // Dog's child evasion
  "shu0rer b@cchha", // Pig's child evasion
  "kh@nk1 m@g1", // Prostitute compound evasion
  "b0kach0da sh@l@", // Stupid fucker rascal evasion
  "h@r@m1", // Bastard evasion
  "n0ngr@", // Dirty evasion
  "f@@ltu", // Worthless evasion

  // ========================================
  // === Extended Compound Animal Insults ===
  // ========================================
  "kuttar jaat", // Dog breed (insult)
  "shuorer jaat", // Pig breed (insult)
  "gadhar jaat", // Donkey breed (insult)
  "chagoler jaat", // Goat breed (insult)
  "kukurer bachcha sala", // Dog's child rascal
  "birar bachcha", // Cat's child (insult)
  "chucher bachcha", // Rat's child (insult)
  "shaaper bachcha", // Snake's child (insult)
  "bichchur bachcha", // Scorpion's child (insult)
  "kuttar theke ghatiya", // Worse than a dog
  "shuorer theke nongra", // Dirtier than a pig
  "gadhar theke boka", // Stupider than a donkey
  "chagoler theke bokachoda", // Stupider than a goat
  "kukurer moto bhoke", // Barks like a dog
  "shuorer moto kha", // Eats like a pig
  "gadhar moto kutta", // Dog like a donkey
  "bandar theke kujjho", // Uglier than a monkey
  "baknar theke ghatiya", // Worse than a crane
  "shapla sala", // Lotus rascal (Sylheti insult)
  "hajir bachcha sala", // Pig's child rascal (Chittagonian variant)
  "kuththa sala", // Dog rascal
  "shuor sala", // Pig rascal
  "gadha sala", // Donkey rascal
  "chagol sala", // Goat rascal
  "bandar sala", // Monkey rascal
  "bichhur pola", // Scorpion's son
  "shaaper pola", // Snake's son
  "chucher pola", // Rat's son
  "birar pola", // Cat's son (insult)

  // ========================================
  // === Extended Bengali Script (Threats) ===
  // ========================================
  "তোর পুটকি চিরবো", // I'll rip your ass
  "তোর গুদে বোগা ঢোকিয়ে ফাটাবো", // I'll insert dick and tear pussy
  "তোর বোগা কাটবো", // I'll cut your dick
  "তোর বিচি মাসলাবো", // I'll crush your testicles
  "তোকে মাইরা ফেলবো", // I'll beat you dead
  "তোর হাড্ডি ভাংবো", // I'll break your bones
  "তোকে কুত্তা দিয়ে খাওয়াইবো", // I'll feed you to dogs
  "তোর মুখ ভাংবো", // I'll break your face
  "তোকে ড্রেনে ফেলবো", // I'll throw you in drain
  "তোকে নালীতে ফেলবো", // I'll throw you in drain
  "তোর জীবনশেষ করবো", // I'll end your life
  "তোকে চিরে ফেলবো", // I'll rip you apart
  "তোর দাঁত ভাংবো", // I'll break your teeth
  "তোকে পচিয়ে দিবো", // I'll rot you away

  // ========================================
  // === More Religious/Caste Slurs ===
  // ========================================
  "malaun sala", // Non-Muslim slur rascal
  "chamar sala", // Caste slur rascal
  "methor sala", // Sweeper caste rascal
  "dom sala", // Funeral worker rascal
  "neche jaater", // Low caste
  "jaat mara", // Caste beaten (insult)
  "jaat nai", // No caste (insult)
  "jaat chor", // Caste thief
  "jolahar pola", // Weaver's son (caste insult)
  "dhopar pola", // Washerman's son (caste insult)
  "naapiter pola", // Barber's son (caste insult)
  "muchir pola", // Cobbler's son (caste insult)
  "hadi sala", // Low caste rascal
  "haddi sala", // Low caste rascal (variant)

  // ========================================
  // === Extended Sexual Terms ===
  // ========================================
  "boga chushi de", // Give dick sucking
  "guder ras chushi de", // Suck the pussy juice
  "boga chushi magi", // Dick sucking prostitute
  "gudmarani randi", // Ass fucker whore
  "dhon chata magi", // Dick licker prostitute
  "putki chata sala", // Ass licker rascal
  "bichi chata magi", // Testicle licker prostitute
  "dhon dhukano magi", // Dick inserter prostitute
  "gud dhukano sala", // Pussy inserter rascal
  "putki dhukano magi", // Ass inserter prostitute
  "chosha magi", // Sucking prostitute
  "chata magi sala", // Licking prostitute rascal
  "dhon mota magi", // Fat dick prostitute
  "dhon lamba sala", // Long dick rascal
  "boga chhoto sala", // Small dick rascal
  "gud tight magi", // Tight pussy prostitute
  "putki tight sala", // Tight ass rascal
  "dhoner pani kha", // Eat dick water (semen)
  "guder pani chushi", // Suck pussy water
  "bichi masal magi", // Testicle crusher prostitute
  "dhon katani", // Dick cutter (female)
  "boga katani magi", // Dick cutter prostitute
  "gudmarani khanki magi", // Ass fucker prostitute whore
  "putki fatani magi", // Ass tearer prostitute
  "gud fatani sala", // Pussy tearer rascal

  // ========================================
  // === More Extended Bengali Compound Insults ===
  // ========================================
  "tor maa randi khanki magi", // Your mother is a whore prostitute
  "tor bon randi khanki magi", // Your sister is a whore prostitute
  "tor baap dalla sala", // Your father is a pimp rascal
  "tor dadu choda sala", // Your grandfather fucker rascal
  "tor naani magi", // Your grandmother is a prostitute
  "tor khandaan er sob magi", // Your entire dynasty are prostitutes
  "tor goshthi er sob bokachoda", // Your entire clan are stupid fuckers
  "tor maa ke dhon diye chudi", // Fucked your mother with dick
  "tor bon ke boga diye chudi", // Fucked your sister with dick
  "tor baap er putki fatai", // Tore your father's ass
  "tor mayer putki te boga dhukiye chudlam", // Inserted dick in mother's ass and fucked
  "tor boner gude amar dhon dhukiye chudlam", // Inserted dick in sister's pussy and fucked
  "tor maa ke bazaar er sob lok chude", // Everyone in market fucks your mother
  "tor bon ke sob lok chude", // Everyone fucks your sister
  "tor maa ke pagol kutta chode", // Mad dog fucks your mother
  "tor maa ke shuor chode", // Pig fucks your mother
  "tor maa ke gadha chode", // Donkey fucks your mother
  "tor mayer dhon ache", // Your mother has a dick (insult)
  "tor baaper gud ache", // Your father has a pussy (insult)
  "tor maa hijra", // Your mother is a eunuch
  "tor baap hijra", // Your father is a eunuch
  "tor bon hijra", // Your sister is a eunuch
  "hijra sala", // Eunuch rascal
  "hijra magi", // Eunuch prostitute
  "nangta hijra sala", // Naked eunuch rascal
  "bhodai hijra", // Idiot eunuch
  "pagol hijra sala", // Mad eunuch rascal
  "noshto hijra", // Corrupt eunuch
  "lompot sala", // Lecherous rascal
  "byobhichari sala", // Adulterer rascal
  "kulota magi sala", // Unchaste prostitute rascal
  "choritrohin magi", // Characterless prostitute
  "behaya magi sala", // Shameless prostitute rascal
  "paji sala magi", // Rascal rascal prostitute
  "bojjat sala bokachoda", // Evil rascal stupid fucker
  "gunda sala bokachoda", // Thug rascal stupid fucker
  "dalal sala khanki", // Pimp rascal prostitute
  "batpar sala harami", // Cheat rascal bastard
  "lompot harami sala", // Lecherous bastard rascal
  "byobhichari harami", // Adulterous bastard
  "noshto harami sala", // Corrupt bastard rascal

  // ========================================
  // === More Bengali Script Compound ===
  // ========================================
  "তোর মা রান্ডী খানকি মাগি", // Your mother is whore prostitute
  "তোর বোন রান্ডী খানকি মাগি", // Your sister is whore prostitute
  "তোর বাপ দাল্লা শালা", // Your father is pimp rascal
  "তোর দাদু চোদা শালা", // Your grandfather fucker rascal
  "তোর নানী মাগি", // Your grandmother is prostitute
  "তোর খান্দানের সব মাগি", // Your entire dynasty prostitutes
  "তোর গোষ্ঠীর সব বোকাচোদা", // Your entire clan stupid fuckers
  "তোর মা কে ধোন দিয়ে চুদি", // Fucked mother with dick
  "তোর বোন কে বোগা দিয়ে চুদি", // Fucked sister with dick
  "তোর বাপের পুটকি ফাটাই", // Tore father's ass
  "তোর মায়ের পুটকিতে বোগা ঢোকিয়ে চুদলাম", // Inserted dick in mother's ass
  "তোর বোনের গুদে আমার ধোন ঢোকিয়ে চুদলাম", // Inserted dick in sister's pussy
  "তোর মা কে বাজারের সব লোক চুদে", // Everyone fucks your mother
  "তোর মা কে পাগল কুত্তা চোদে", // Mad dog fucks your mother
  "তোর মা কে শূয়র চোদে", // Pig fucks your mother
  "তোর মা কে গাধা চোদে", // Donkey fucks your mother
  "তোর মায়ের ধোন আছে", // Your mother has a dick
  "তোর বাপের গুদ আছে", // Your father has a pussy
  "তোর মা হিজড়া", // Your mother is a eunuch
  "তোর বাপ হিজড়া", // Your father is a eunuch
  "হিজড়া শালা", // Eunuch rascal
  "হিজড়া মাগি", // Eunuch prostitute
  "নাঙ্গতা হিজড়া শালা", // Naked eunuch rascal
  "ভোদাই হিজড়া", // Idiot eunuch
  "পাগল হিজড়া শালা", // Mad eunuch rascal

  // ========================================
  // === More Extended Romanized Compounds ===
  // ========================================
  "sala boga khor magi khanki", // Rascal dick eater prostitute
  "tui shudhu magi r kichhu na", // You are nothing but a prostitute
  "tui ekta bokachoda kuttar bachcha haramjada", // You are a stupid fucker dog's child bastard
  "amader sob ar magi tui", // You are everyone's prostitute
  "tor shobkichhu baal", // Everything about you is pubic hair (worthless)
  "tor jibon baal", // Your life is pubic hair (worthless)
  "tor bap er naam baal", // Your father's name is pubic hair
  "tor maa er naam magi", // Your mother's name is prostitute
  "tor bon er naam khanki", // Your sister's name is prostitute
  "tui janmo theke magi", // You've been a prostitute since birth
  "tui janmo theke bokachoda", // You've been stupid since birth
  "tui janmo theke harami", // You've been a bastard since birth
  "tui janmo theke nongra", // You've been dirty since birth
  "tor baap janmo theke dalla", // Your father's been a pimp since birth
  "tor maa janmo theke magi", // Your mother's been a prostitute since birth
  "ekta bichi chhara tui kichhu na", // You're nothing except a testicle
  "ekta baal chhara tui kichhu na", // You're nothing except pubic hair
  "ekta heda chhara tui kichhu na", // You're nothing except shit
  "tor theke kutta bhalo", // A dog is better than you
  "tor theke shuor bhalo", // A pig is better than you
  "tor theke gadha bhalo", // A donkey is better than you
  "tor theke chagol bhalo", // A goat is better than you
  "tor theke chucha bhalo", // A rat is better than you
  "tor theke pokamakor bhalo", // Insects are better than you

  // ========================================
  // === More Extended Dialect Compounds ===
  // ========================================
  // Sylheti Extended
  "xalar bap fuainno kuttar baicha", // Rascal's father fucker dog's child (Sylheti)
  "tar mainka gut te tar abbar boga", // Mother's pussy father's dick (Sylheti)
  "fua tor goshthi ar bongshi", // Fuck your clan and lineage (Sylheti)
  "tar mainka gut fatainno xala", // Mother's pussy tearer rascal (Sylheti)
  "kutta xala fuainno hazir baicha", // Dog rascal fucker pig's child (Sylheti)
  "fuainno xalar bap fuainno tar maa", // Fucker rascal's father fucker his mother (Sylheti)
  "mainka boga tanna xala kutta", // Mother's dick pulling rascal dog (Sylheti)

  // Chittagonian Extended
  "maayre tore boinno foinya sala kutta", // Mother your sister fucker rascal dog (Chittagonian)
  "tore abbar futki foinya re sala", // Your father's ass fucker hey rascal (Chittagonian)
  "hazeer foinya kutta foinya sala", // Pig fucker dog fucker rascal (Chittagonian)
  "dangor gudde dangor boga foinya", // Big ass big dick fucker (Chittagonian)
  "tore maayre tore abba dui jonne foinya", // Fuck both your parents (Chittagonian)
  "maagi kuttar baizza foinya re", // Prostitute dog's son fucker hey (Chittagonian)
  "tore goshthi foinya re sala kuttar baizza", // Your clan fucker hey rascal dog's son (Chittagonian)

  // Noakhali Extended
  "toor mayre toor boinno futgi fua sala", // Your mother sister ass fuck rascal (Noakhali)
  "fuainno re sala kuttar baccha shuorer baccha", // Fucker rascal dog's child pig's child (Noakhali)
  "toor abbar futgi maira re haiga maira", // Your father's ass fucker anus fucker (Noakhali)
  "magir fut maira re sala fuainno kuttar baccha", // Prostitute's ass fucker rascal dog's child (Noakhali)
  "toor goshthi fuainno re magir baicha", // Your clan fucker prostitute's child (Noakhali)
  "toor mayre boga diye fuainno re", // Fucked mother with dick hey (Noakhali)
  "toor boinno futgi maira sala fuainno", // Your sister's ass fucker rascal fucker (Noakhali)

  // Rangpuri Extended
  "mayre fukinni kuttar baicha shuorer baicha", // Mother fucker dog's child pig's child (Rangpuri)
  "gadhar baicha fukinni magir baicha fukinni", // Donkey's child fucker prostitute's child fucker (Rangpuri)
  "tor may fukinni tor bai fukinni sala harami", // Your mother fucker your sister fucker rascal bastard (Rangpuri)
  "fukinni sala kutta gadhar baicha magir baicha", // Fucker rascal dog donkey's child prostitute's child (Rangpuri)
  "tor goshthi fukinni sala kutta shuor", // Your clan fucker rascal dog pig (Rangpuri)
  "tor bap fukinni tor may fukinni gadhar baicha", // Father fucker mother fucker donkey's child (Rangpuri)

  // ========================================
  // === More Extended Evasion Spellings ===
  // ========================================
  "bokachod@", // Stupid fucker evasion
  "kh4nki", // Prostitute evasion
  "m4gi", // Prostitute evasion
  "sh4la", // Rascal evasion
  "chod4", // Fuck evasion
  "h4ramjada", // Bastard evasion
  "g4ndu", // Asshole evasion
  "b4l", // Pubic hair evasion
  "dh0n chosa", // Penis sucker evasion
  "putk! mara", // Arse fucker evasion
  "bog@ kha", // Eat dick evasion
  "madarc#od", // Motherfucker evasion
  "b@nchd", // Sisterfucker evasion
  "kutt@r bacch@", // Dog's child evasion
  "shu0rer bacch@", // Pig's child evasion
  "bkchoda", // Bokachoda abbreviation variant
  "bkchd sl", // Bokachod sala abbreviation
  "mchd sl bkchd", // Madarchod sala bokachod abbreviation
  "trmaa mgi sl", // Tor maa magi sala abbreviation
  "trbon mgi khkimgi", // Tor bon magi khanki magi abbreviation
  "kttr bchch sl bkchd hrmi", // Kuttar bachcha sala bokachod harami abbreviation
  "shr bchch sl mchd bkchd", // Shuorer bachcha sala madarchod bokachod abbreviation

  // ========================================
  // === More Extended Bengali Script ===
  // ========================================
  "তুই শুধু মাগি আর কিছু না", // You are nothing but a prostitute
  "তুই একটা বোকাচোদা কুত্তার বাচ্চা হারামজাদা", // You are a stupid fucker dog's child bastard
  "আমাদের সবার মাগি তুই", // You are everyone's prostitute
  "তোর সবকিছু বাল", // Everything about you is pubic hair
  "তোর জীবন বাল", // Your life is pubic hair
  "তোর বাপের নাম বাল", // Your father's name is pubic hair
  "তোর মায়ের নাম মাগি", // Your mother's name is prostitute
  "তোর বোনের নাম খানকি", // Your sister's name is prostitute
  "তুই জন্ম থেকে মাগি", // You've been a prostitute since birth
  "তুই জন্ম থেকে বোকাচোদা", // You've been stupid since birth
  "তুই জন্ম থেকে হারামি", // You've been a bastard since birth
  "তোর থেকে কুত্তা ভালো", // A dog is better than you
  "তোর থেকে শূয়র ভালো", // A pig is better than you
  "তোর থেকে গাধা ভালো", // A donkey is better than you
  "তোর থেকে ছাগল ভালো", // A goat is better than you
  "একটা বাল ছাড়া তুই কিছু না", // You're nothing except pubic hair
  "একটা হেঁদা ছাড়া তুই কিছু না", // You're nothing except shit
  "তোর গোষ্ঠী শেষ করবো", // I'll end your clan
  "তোর বংশ শেষ করবো", // I'll end your lineage
  "তোর নাম মুছে দিবো", // I'll erase your name
  "তুই মরলেও কেউ কাঁদবে না", // No one will cry if you die
  "তুই বেঁচে থেকে কোনো কাজ নেই", // There's no use in you being alive
  "তুই পৃথিবীর সবচেয়ে নোংরা", // You are the dirtiest on earth
  "তুই পৃথিবীর সবচেয়ে গু", // You are the most shit on earth

  // ========================================
  // === More Extended Threat Phrases ===
  // ========================================
  "toke jibonto gorom pani diye pochabo", // I'll burn you alive with hot water
  "tor shob friends der shamne toke chudbo", // I'll fuck you in front of all your friends
  "tor maa ke tore shamne chudbo", // I'll fuck your mother in front of you
  "tor bon ke bazaare bechbo", // I'll sell your sister in the market
  "tor putki te agun debo", // I'll set your ass on fire
  "tor boga jol diye pochabo", // I'll burn your dick with water
  "tor gude mirchi debo", // I'll put chili in your pussy
  "tor putki te mirchi debo", // I'll put chili in your ass
  "tor boga te loha bandha debo", // I'll tie iron to your dick
  "tor mayer shobkichhu fatabo", // I'll tear everything of your mother
  "tor boner shobkichhu fatabo", // I'll tear everything of your sister
  "tor baaper shobkichhu fatabo", // I'll tear everything of your father
  "tor khandaan ke sob chude debo", // I'll fuck your entire dynasty
  "tor goshthi ke sob maira debo", // I'll kill your entire clan
  "toke drain e fele diye pani bhorbo", // I'll throw you in drain and fill water
  "toke gutter e fele diye maati debo", // I'll throw you in gutter and cover with dirt
  "toke jibonto pachar neeche fele debo", // I'll throw you alive under a stone
  "toke jibonto kborer moddhe rakhbo", // I'll put you alive in a grave
  "toke shesh kore debo", // I'll finish you off
  "tor naam shune manush thukbe", // People will spit hearing your name

  // ========================================
  // === Extended Sexual Insults (Bengali Script) ===
  // ========================================
  "তোর মাকে চোদার সময় তোর মা চিৎকার করে", // Your mother screams when fucked
  "তোর বোনকে সবাই চোদে", // Everyone fucks your sister
  "তোর মায়ের গুদে সবাই ঢুকে", // Everyone enters your mother's pussy
  "তোর বাপের বাড়া খাজা", // Your father's dick is useless
  "তোর মায়ের দুধ চুষবো", // I'll suck your mother's breasts
  "তোর বোনের দুধ চুষবো", // I'll suck your sister's breasts
  "তোর মায়ের পাছায় চুদবো", // I'll fuck your mother's ass
  "তোর বোনের পাছায় চুদবো", // I'll fuck your sister's ass
  "তোর মাকে উলটে চোদবো", // I'll fuck your mother upside down
  "তোর বোনকে উলটে চোদবো", // I'll fuck your sister upside down
  "তোর বোনের গুদ ফাটাবো", // I'll rip your sister's pussy
  "তোর মায়ের পুটকি ফাটাবো", // I'll rip your mother's asshole
  "তোর বাড়া কাটবো", // I'll cut your dick
  "তোর ধন কাটবো", // I'll cut your dick
  "তোর বাড়ায় কামড় দেবো", // I'll bite your dick
  "চোদনার বাচ্চা তুই", // You child of fucking
  "রান্ডির বাচ্চা শালা", // Whore's child bastard
  "তোর মায়ের ভোদায় লাঠি", // Stick in your mother's pussy
  "তোর মায়ের ভোদায় বাঁশ", // Bamboo in your mother's pussy
  "তোর পুটকিতে বাঁশ", // Bamboo in your asshole
  "তোর গুদে বাঁশ", // Bamboo in your pussy
  "তোর মায়ের ভোদা চুষি", // I suck your mother's pussy
  "তোর বোনের ভোদা চুষি", // I suck your sister's pussy
  "তোর মায়ের ভোদায় আঙুল", // Finger in your mother's pussy
  "তোর মায়ের ভোদায় হাত", // Hand in your mother's pussy
  "তোর মায়ের ভোদায় পা", // Foot in your mother's pussy
  "মালটা ছোড়ার মুখে", // Cum on the bastard's face
  "তোর মুখে মাল ফেলবো", // I'll cum on your face
  "তোর মায়ের মুখে মাল", // Cum on your mother's face
  "বেশ্যার ভোদা", // Prostitute's pussy
  "রান্ডির পুটকি", // Whore's asshole
  "খানকির পুটকি", // Whore's asshole (var)
  "শালী চোদ", // Fuck sister-in-law
  "ভাবী চোদ", // Fuck sister-in-law (married)
  "মামী চোদ", // Fuck aunt
  "কাকী চোদ", // Fuck aunt (paternal)
  "জেঠী চোদ", // Fuck aunt (elder paternal)
  "পিসী চোদ", // Fuck aunt (father's sister)
  "মাসী চোদ", // Fuck aunt (mother's sister)

  // ========================================
  // === Extended Romanized Sexual Insults ===
  // ========================================
  "tor make chodar shomoy tor maa chitkar kore", // Your mother screams when fucked
  "tor bonke shobai chode", // Everyone fucks your sister
  "tor mayer gude shobai dhuke", // Everyone enters your mother's pussy
  "tor baaper bara khaja", // Your father's dick is useless
  "tor mayer dudh chushbo", // I'll suck your mother's breasts
  "tor boner dudh chushbo", // I'll suck your sister's breasts
  "tor mayer pachay chudbo", // I'll fuck your mother's ass
  "tor boner pachay chudbo", // I'll fuck your sister's ass
  "tor make ulte chodbo", // I'll fuck your mother upside down
  "tor bonke ulte chodbo", // I'll fuck your sister upside down
  "tor mayer gud fatabo", // I'll rip your mother's pussy
  "tor boner gud fatabo", // I'll rip your sister's pussy
  "tor mayer putki fatabo", // I'll rip your mother's asshole
  "tor bara katbo", // I'll cut your dick
  "tor dhon katbo", // I'll cut your dick
  "tor baray kamor debo", // I'll bite your dick
  "chodnar bachcha tui", // You child of fucking
  "randir bachcha shala", // Whore's child bastard
  "tor mayer voday lathi", // Stick in your mother's pussy
  "tor mayer voday bash", // Bamboo in your mother's pussy
  "tor putkite bash", // Bamboo in your asshole
  "tor gude bash", // Bamboo in your pussy
  "tor mayer voda chushi", // I suck your mother's pussy
  "tor boner voda chushi", // I suck your sister's pussy
  "tor mayer voday angul", // Finger in your mother's pussy
  "tor mayer voday hat", // Hand in your mother's pussy
  "tor mayer voday pa", // Foot in your mother's pussy
  "malta chhorar mukhe", // Cum on the bastard's face
  "tor mukhe mal felbo", // I'll cum on your face
  "tor mayer mukhe mal", // Cum on your mother's face
  "beshyar voda", // Prostitute's pussy
  "randir putki", // Whore's asshole
  "khankir putki", // Whore's asshole (var)
  "shali chod", // Fuck sister-in-law
  "bhabi chod", // Fuck sister-in-law (married)
  "mami chod", // Fuck aunt
  "kaki chod", // Fuck aunt (paternal)
  "jethi chod", // Fuck aunt (elder paternal)
  "pisi chod", // Fuck aunt (father's sister)
  "mashi chod", // Fuck aunt (mother's sister)

  // ========================================
  // === Extended Body Part Insults (Bengali) ===
  // ========================================
  "বড় পুটকির মাগী", // Big asshole woman
  "ছোট বাড়ার ছেলে", // Small dick boy
  "ঢিলা গুদের মাগী", // Loose pussy woman
  "বড় গুদের মাগী", // Big pussy woman
  "ছোট ধনের ছেলে", // Small dick boy (alt)
  "ঢোলা পুটকির ছেলে", // Loose asshole boy
  "মোটা বাড়ার ছেলে", // Fat dick boy
  "চ্যাপ্টা পুটকির মাগী", // Flat asshole woman
  "লম্বা বাড়ার ছেলে", // Long dick boy
  "বাঁকা বাড়ার ছেলে", // Crooked dick boy
  "boro putkir magi", // Big asshole woman
  "chhoto barar chhele", // Small dick boy
  "dhila guder magi", // Loose pussy woman
  "boro guder magi", // Big pussy woman
  "chhoto dhoner chhele", // Small dick boy (alt)
  "dhola putkir chhele", // Loose asshole boy
  "mota barar chhele", // Fat dick boy
  "chyapta putkir magi", // Flat asshole woman
  "lomba barar chhele", // Long dick boy
  "baka barar chhele", // Crooked dick boy

  // ========================================
  // === Extended Profession-Based Insults ===
  // ========================================
  "তোর মা রাস্তায় দাঁড়ায়", // Your mother stands on the street
  "তোর বোন রাস্তায় দাঁড়ায়", // Your sister stands on the street
  "তোর মা ট্রাক ড্রাইভারদের চোদায়", // Your mother fucks truck drivers
  "তোর মা রিকশাওয়ালাদের চোদায়", // Your mother fucks rickshaw drivers
  "তোর মা মাতালদের চোদায়", // Your mother fucks drunkards
  "তোর মা ভিখারিদের চোদায়", // Your mother fucks beggars
  "তোর মা কুকুরদের সাথে শোয়", // Your mother sleeps with dogs
  "তোর বোন শুয়োরদের সাথে শোয়", // Your sister sleeps with pigs
  "tor maa rastay daray", // Your mother stands on the street
  "tor bon rastay daray", // Your sister stands on the street
  "tor maa truck driverdeer choday", // Your mother fucks truck drivers
  "tor maa rikshawalaader choday", // Your mother fucks rickshaw drivers
  "tor maa mataldeer choday", // Your mother fucks drunkards
  "tor maa bhikharideer choday", // Your mother fucks beggars
  "tor maa kukurdeer shathe shoy", // Your mother sleeps with dogs
  "tor bon shuorder shathe shoy", // Your sister sleeps with pigs

  // ========================================
  // === Extended Chittagonian/Noakhali Dialect ===
  // ========================================
  "tuain gor choira jait parosh", // You can go fuck yourself (Chittagonian)
  "tuainor mai gudi", // Your mother's pussy (Chittagonian)
  "tuainor bain gudi", // Your sister's pussy (Chittagonian)
  "tuain gudi mara", // You pussy fucker (Chittagonian)
  "tuainor bafor bura", // Your father's dick (Chittagonian)
  "khanki tuain", // Whore you (Chittagonian)
  "haramjadi tuain", // Bastard you (Chittagonian)
  "boinchot tuain", // Sister fucker you (Chittagonian)
  "maichot tuain", // Mother fucker you (Chittagonian)
  "tuainor putoh mairya dilam", // I'll beat your ass (Chittagonian)
  "tuain chudir bhai", // You fucker's brother (Chittagonian)
  "tuain haguir putoh", // You shit's ass (Chittagonian)
  "tuainor muh e hagu", // Shit in your face (Chittagonian)
  "tuainor maye beshsha", // Your mother is a whore (Chittagonian)
  "gor gudane tuain", // Ass fucker you (Chittagonian)
  "fatfoti tuain", // Worthless you (Noakhali)
  "geda tuain", // Stupid you (Noakhali)
  "heda tuain", // Idiot you (Noakhali)
  "bokachoda tuain", // Stupid fucker you (Noakhali)
  "gadhar bachcha tuain", // Donkey's child you (Noakhali)
  "shuar bachcha tuain", // Pig's child you (Noakhali)
  "kuttar bachcha tuain", // Dog's child you (Noakhali)
  "baler bachcha tuain", // Pubic hair's child you (Noakhali)
  "nar gutire chudi", // Fuck the male's balls (Noakhali)
  "mayer gutire chudi", // Fuck the mother's balls (Noakhali)

  // ========================================
  // === Extended Sylheti Dialect ===
  // ========================================
  "tumar ammar gou", // Your mother's pussy (Sylheti)
  "tumar bainar gou", // Your sister's pussy (Sylheti)
  "tumar furer bura", // Your father's dick (Sylheti)
  "tumar ammar futki", // Your mother's ass (Sylheti)
  "xala xuda", // Bastard fucker (Sylheti)
  "xendir fut", // Whore's son (Sylheti)
  "bali xuda", // Pubic hair fucker (Sylheti)
  "goure dhor", // Hold the pussy (Sylheti)
  "buray dhor", // Hold the dick (Sylheti)
  "futkire dhor", // Hold the ass (Sylheti)
  "tumar amma xendir foi", // Your mother is a whore (Sylheti)
  "tumar bain xendir foi", // Your sister is a whore (Sylheti)
  "xala harami", // Bastard (Sylheti)
  "bonor xuda", // Monkey fucker (Sylheti)
  "gadhar xuda", // Donkey fucker (Sylheti)
  "gurar xuda", // Horse fucker (Sylheti)
  "gorur xuda", // Cow fucker (Sylheti)
  "tumar amma footpathr bexxa", // Your mother is street whore (Sylheti)
  "tumar amma bazaarr bexxa", // Your mother is market whore (Sylheti)
  "tumar amma xorbor bexxa", // Your mother is everyone's whore (Sylheti)

  // ========================================
  // === Extended Rangpuri/North Bengal Dialect ===
  // ========================================
  "tohr mai ke chodim", // I'll fuck your mother (Rangpuri)
  "tohr boin ke chodim", // I'll fuck your sister (Rangpuri)
  "tohr bap ke chodim", // I'll fuck your father (Rangpuri)
  "tohr mayer bhoda", // Your mother's pussy (Rangpuri)
  "harami kutta", // Bastard dog (Rangpuri)
  "boinchod harami", // Sister fucker bastard (Rangpuri)
  "maichod harami", // Mother fucker bastard (Rangpuri)
  "randi tohr mai", // Whore is your mother (Rangpuri)
  "chhinar tohr boin", // Slut is your sister (Rangpuri)
  "tohr baper bara nosto", // Your father's dick is useless (Rangpuri)
  "tohr mayer gud e poka", // Worms in your mother's pussy (Rangpuri)
  "tohr baper bara e poka", // Worms on your father's dick (Rangpuri)
  "bhoda marani", // Pussy fucker (Rangpuri)
  "gud marani", // Pussy beater (Rangpuri)
  "bara kharani", // Dick eater (Rangpuri)
  "mal kharani", // Cum eater (Rangpuri)
  "chhi kharani", // Shit eater (Rangpuri)
  "moot kharani", // Piss eater (Rangpuri)
  "tohr pichone deim", // I'll give it from behind (Rangpuri)
  "tohr samne deim", // I'll give it from front (Rangpuri)

  // ========================================
  // === Extended Internet/Gaming Bengali ===
  // ========================================
  "mc sala noob", // Motherfucker noob
  "bc sala noob", // Sisterfucker noob
  "chodu gamer", // Fucker gamer
  "noob er bachcha", // Noob's child
  "noob sala chodu", // Noob bastard fucker
  "camper chodu sala", // Camper fucker bastard
  "hacker chodu sala", // Hacker fucker bastard
  "lag er maa chudi", // Fuck lag's mother
  "ping er maa chudi", // Fuck ping's mother
  "gg boga kha", // GG eat dick
  "ez boga kha", // EZ eat dick
  "gg putki mara", // GG get ass fucked
  "ez putki mara", // EZ get ass fucked
  "report kore tor maa chudbo", // I'll report and fuck your mother
  "tor pc te virus diye tor maa chudbo", // I'll virus your PC and fuck your mother
  "uninstall kor chodu", // Uninstall fucker
  "delete kor chodu", // Delete fucker
  "game chhad chodu", // Leave game fucker
  "afk chodu sala", // AFK fucker bastard
  "feeder chodu sala", // Feeder fucker bastard
  "troll chodu sala", // Troll fucker bastard
  "toxic chodu sala", // Toxic fucker bastard
  "griefing chodu", // Griefing fucker
  "stream snipe chodu", // Stream snipe fucker
  "aim bot chodu", // Aim bot fucker

  // ========================================
  // === Extended Scatological (Bengali Script) ===
  // ========================================
  "তোর মুখে গু", // Shit in your face
  "তোর মুখে হাগবো", // I'll shit in your face
  "তোর মুখে মুতবো", // I'll piss in your face
  "তোর খাবারে গু দেবো", // I'll put shit in your food
  "তোর খাবারে মুত দেবো", // I'll put piss in your food
  "তোর মায়ের মুখে গু", // Shit in your mother's face
  "তোর বোনের মুখে গু", // Shit in your sister's face
  "গু খোর তুই", // You shit eater
  "মুত খোর তুই", // You piss drinker
  "হাগু চোদা", // Shit fucker
  "মুতু চোদা", // Piss fucker
  "গু মাখা তুই", // You shit smeared
  "পাদ খোর তুই", // You fart sniffer
  "গু মুখ তুই", // You shit face
  "মুত মুখ তুই", // You piss face
  "tor mukhe hagbo", // I'll shit in your face
  "tor mukhe mutbo", // I'll piss in your face
  "tor khabare gu debo", // I'll put shit in your food
  "tor khabare mut debo", // I'll put piss in your food
  "tor mayer mukhe gu", // Shit in your mother's face
  "tor boner mukhe gu", // Shit in your sister's face
  "gu khor tui", // You shit eater
  "mut khor tui", // You piss drinker
  "hagu choda", // Shit fucker
  "mutu choda", // Piss fucker
  "gu makha tui", // You shit smeared
  "pad khor tui", // You fart sniffer
  "gu mukh tui", // You shit face
  "mut mukh tui", // You piss face

  // ========================================
  // === Extended Animal Compound Insults ===
  // ========================================
  "কুত্তার বাচ্চা রান্ডি", // Dog's child whore
  "শুয়োরের বাচ্চা রান্ডি", // Pig's child whore
  "গাধার বাচ্চা রান্ডি", // Donkey's child whore
  "বানরের বাচ্চা চোদা", // Monkey's child fucker
  "ছাগলের বাচ্চা চোদা", // Goat's child fucker
  "গরুর বাচ্চা চোদা", // Cow's child fucker
  "ঘোড়ার বাচ্চা চোদা", // Horse's child fucker
  "কুত্তা চোদা", // Dog fucker
  "শুয়োর চোদা", // Pig fucker
  "গাধা চোদা", // Donkey fucker
  "বানর চোদা", // Monkey fucker
  "গরু চোদা", // Cow fucker
  "ঘোড়া চোদা", // Horse fucker
  "ইঁদুর চোদা", // Rat fucker
  "সাপ চোদা", // Snake fucker
  "kuttar bachcha randi", // Dog's child whore
  "shuorer bachcha randi", // Pig's child whore
  "gadhar bachcha randi", // Donkey's child whore
  "banorer bachcha choda", // Monkey's child fucker
  "chhagoler bachcha choda", // Goat's child fucker
  "gorur bachcha choda", // Cow's child fucker
  "ghorar bachcha choda", // Horse's child fucker
  "kutta choda", // Dog fucker
  "gadha choda", // Donkey fucker
  "banor choda", // Monkey fucker
  "chhagol choda", // Goat fucker
  "goru choda", // Cow fucker
  "ghora choda", // Horse fucker
  "indur choda", // Rat fucker
  "shap choda", // Snake fucker

  // ========================================
  // === Extended Emasculation Insults ===
  // ========================================
  "তোর বাড়া নেই", // You have no dick
  "তোর বাড়া ছোট", // Your dick is small
  "তোর বাড়া কাজ করে না", // Your dick doesn't work
  "তোর বাড়া মরা", // Your dick is dead
  "তুই হিজড়া", // You are a hijra/eunuch
  "তুই নপুংসক", // You are impotent
  "তুই মেয়েমানুষ", // You are a woman (emasculating)
  "তোর ধন দাঁড়ায় না", // Your dick can't get up
  "তোর বাড়া দুধের মতো নরম", // Your dick is soft like milk
  "tor bara nei", // You have no dick
  "tor bara chhoto", // Your dick is small
  "tor bara kaj kore na", // Your dick doesn't work
  "tor bara mora", // Your dick is dead
  "tui hijra", // You are a hijra/eunuch
  "tui nopungsok", // You are impotent
  "tui meyemanush", // You are a woman (emasculating)
  "tor dhon daray na", // Your dick can't get up
  "tor bara dudher moto norom", // Your dick is soft like milk

  // ========================================
  // === Extended Evasion Spellings (Bengali Romanized) ===
  // ========================================
  "ch0di", // Fuck (evasion)
  "m4g1", // Woman/prostitute (evasion)
  "b0g4", // Dick (evasion)
  "kh4nk1", // Whore (evasion)
  "r4nd1", // Whore (evasion)
  "gu6", // Pussy (evasion)
  "pu7ki", // Ass (evasion)
  "b4r4", // Dick (evasion)
  "ch00d", // Fuck (evasion)
  "b@ra", // Dick (evasion)
  "gu@d", // Pussy (evasion)
  "put@ki", // Ass (evasion)
  "r@ndi", // Whore (evasion)
  "h@rami", // Bastard (evasion)
  "b0kachod@", // Stupid fucker (evasion)
  "m@@rchod", // Motherfucker (evasion)
  "b0nchod", // Sisterfucker (evasion)
  "m@@ch0d", // Motherfucker (evasion)
  "b0nch0d", // Sisterfucker (evasion)
  "h@r@mz@d@", // Bastard (evasion)
  "ch0d@r b@cch@", // Fucker's child (evasion)
  "kh@nkir b@cch@", // Whore's child (evasion)
  "b3shya", // Prostitute (evasion)
  "ch0dn4", // To fuck (evasion)
  "m4l", // Cum (evasion)

  // ========================================
  // === Extended Insult Combinations ===
  // ========================================
  "নষ্ট মাগীর বাচ্চা", // Ruined woman's child
  "পতিতার বাচ্চা", // Prostitute's child
  "ডোম মাগীর বাচ্চা", // Low-caste woman's child
  "মেথর মাগীর বাচ্চা", // Sweeper woman's child
  "চামারের বাচ্চা", // Leather-worker's child (caste slur)
  "ভাঙারির বাচ্চা", // Junk dealer's child
  "চোরের বাচ্চা", // Thief's child
  "ডাকাতের বাচ্চা", // Robber's child
  "খুনির বাচ্চা", // Murderer's child
  "ফাঁসির আসামী", // Death row convict
  "nosto magir bachcha", // Ruined woman's child
  "potitar bachcha", // Prostitute's child
  "dom magir bachcha", // Low-caste woman's child
  "methor magir bachcha", // Sweeper woman's child
  "chamarer bachcha", // Leather-worker's child (caste slur)
  "bhangarir bachcha", // Junk dealer's child
  "chorer bachcha", // Thief's child
  "dakater bachcha", // Robber's child
  "khunir bachcha", // Murderer's child
  "fashir ashami", // Death row convict

  // ========================================
  // === Extended Abuse Phrases ===
  // ========================================
  "tor jiboner kono dam nei", // Your life has no value
  "tor jonmo howa uchit hoyni", // You shouldn't have been born
  "tor maa tor bap ke chene na", // Your mother doesn't know your father
  "tor bap ke kheuje pawa jayna", // Your father can't be found
  "tor bap kon shala seta keu jane na", // Nobody knows who your father is
  "tor maa rastay khunje peyeche toke", // Your mother found you on the street
  "tor maa dustbine fele diyechilo toke", // Your mother threw you in dustbin
  "toke keu chayna ei duniyay", // Nobody wants you in this world
  "tor mukh dekhle manush thuke", // People spit seeing your face
  "tor nam shune manush hase", // People laugh hearing your name
  "tor bari te keu ashena lojjay", // Nobody comes to your house from shame
  "tor shathe keu kotha bole na lojjay", // Nobody talks to you from shame
  "tor family te shob harami", // Everyone in your family is bastard
  "tor family te shob randi", // Everyone in your family is whore
  "tor bongsho te shob chodu", // Everyone in your lineage is fucker
  "tor bongsho te shob magi", // Everyone in your lineage is whore
  "তোর জীবনের কোনো দাম নেই", // Your life has no value
  "তোর জন্ম হওয়া উচিত হয়নি", // You shouldn't have been born
  "তোর মা তোর বাপকে চেনে না", // Your mother doesn't know your father
  "তোর বাপকে খুঁজে পাওয়া যায় না", // Your father can't be found
  "তোকে কেউ চায় না এই দুনিয়ায়", // Nobody wants you in this world
  "তোর মুখ দেখলে মানুষ থুকে", // People spit seeing your face
  "তোর নাম শুনে মানুষ হাসে", // People laugh hearing your name
  "তোর পরিবারে সব হারামি", // Everyone in your family is bastard
  "তোর পরিবারে সব রান্ডি", // Everyone in your family is whore
  "তোর বংশে সব চোদু", // Everyone in your lineage is fucker
];

export default bengaliBadWords;
