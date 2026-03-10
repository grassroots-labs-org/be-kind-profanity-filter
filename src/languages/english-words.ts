const englishBadWords = [ 
    "2g1c",
    "acrotomophilia",
    "anal",
    "anilingus",
    "anus",
    "apeshit",
    "arsehole",
    "ass",
    "asshole",
    "suck",
    "assmunch",
    "autoerotic",
    "babeland",
    "bangbros",
    "bareback",
    "barenaked",
    "bastard",
    "bastardo",
    "bastinado",
    "bbw",
    "bdsm",
    "beaner",
    "beaners",
    "bestiality",
    "bimbos",
    "birdlock",
    "bitch",
    "bitches",
    "blowjob",
    "blumpkin",
    "bollocks",
    "bondage",
    "boner",
    "boob",
    "boobs",
    "bukkake",
    "bulldyke",
    "bullshit",
    "bunghole",
    "busty",
    "butt",
    "buttcheeks",
    "butthole",
    "camgirl",
    "camslut",
    "camwhore",
    "carpetmuncher",
    "circlejerk",
    "clit",
    "clitoris",
    "clusterfuck",
    "cock",
    "cocks",
    "coprolagnia",
    "coprophilia",
    "cornhole",
    "coon",
    "coons",
    "creampie",
    "cum",
    "cumming",
    "cunnilingus",
    "cunt",
    "darkie",
    "daterape",
    "deepthroat",
    "dendrophilia",
    "dick",
    "dildo",
    "dingleberry",
    "dingleberries",
    "doggiestyle",
    "doggystyle",
    "dolcett",
    "domination",
    "dominatrix",
    "dommes",
    "dvda",
    "ecchi",
    "ejaculation",
    "erotic",
    "erotism",
    "escort",
    "eunuch",
    "faggot",
    "fecal",
    "felch",
    "fellatio",
    "feltch",
    "femdom",
    "figging",
    "fingerbang",
    "fingering",
    "fisting",
    "footjob",
    "frotting",
    "fuck",
    "fuckin",
    "fucking",
    "fucktards",
    "fudgepacker",
    "futanari",
    "genitals",
    "goatcx",
    "goatse",
    "gokkun",
    "goodpoop",
    "goregasm",
    "grope",
    "g-spot",
    "guro",
    "handjob",
    "hardcore",
    "hentai",
    "homoerotic",
    "honkey",
    "hooker",
    "humping",
    "incest",
    "intercourse",
    "jailbait",
    "jigaboo",
    "jiggaboo",
    "jiggerboo",
    "jizz",
    "juggs",
    "kike",
    "kinbaku",
    "kinkster",
    "kinky",
    "knobbing",
    "lolita",
    "lovemaking",
    "masturbate",
    "milf",
    "motherfucker",
    "muffdiving",
    "nambla",
    "nawashi",
    "negro",
    "neonazi",
    "nigga",
    "nigger",
    "nimphomania",
    "nipple",
    "nipples",
    "nude",
    "nudity",
    "nympho",
    "nymphomania",
    "octopussy",
    "omorashi",
    "orgasm",
    "orgy",
    "paedophile",
    "paki",
    "panties",
    "panty",
    "pedobear",
    "pedophile",
    "pegging",
    "penis",
    "pissing",
    "pisspig",
    "playboy",
    "ponyplay",
    "poof",
    "poon",
    "poontang",
    "punany",
    "poopchute",
    "porn",
    "porno",
    "pornography",
    "pthc",
    "pubes",
    "pussy",
    "queaf",
    "queef",
    "quim",
    "raghead",
    "rape",
    "raping",
    "rapist",
    "rectum",
    "rimjob",
    "rimming",
    "sadism",
    "santorum",
    "scat",
    "schlong",
    "scissoring",
    "semen",
    "sex",
    "sexo",
    "sexy",
    "shemale",
    "shibari",
    "shit",
    "shitblimp",
    "shitty",
    "shota",
    "shrimping",
    "skeet",
    "slanteye",
    "slut",
    "s&m",
    "smut",
    "snatch",
    "snowballing",
    "sodomize",
    "sodomy",
    "spic",
    "splooge",
    "spooge",
    "spunk",
    "strapon",
    "strappado",
    "sucks",
    "swastika",
    "swinger",
    "threesome",
    "throating",
    "tit",
    "tits",
    "titties",
    "titty",
    "topless",
    "tosser",
    "towelhead",
    "tranny",
    "tribadism",
    "tubgirl",
    "tushy",
    "twat",
    "twink",
    "twinkie",
    "undressing",
    "upskirt",
    "urophilia",
    "vagina",
    "vibrator",
    "vorarephilia",
    "voyeur",
    "vulva",
    "wank",
    "wetback",
    "xxx",
    "yaoi",
    "yiffy",
    "zoophilia",

    // Additional high-signal profanity
    "asswipe",
    "ballsack",
    "bastards",
    "bitchass",
    "cockhead",
    "cocksucker",
    "cocksucking",
    "cumshot",
    "cumslut",
    "cuntface",
    "dago",
    "dagos",
    "dickhead",
    "dickweed",
    "dilf",
    "dipshit",
    "douchebag",
    "douche",
    "dumbass",
    "dumbfuck",
    "fag",
    "fags",
    "fatass",
    "fuckboy",
    "fuckface",
    "fuckhead",
    "fuckoff",
    "fuckwit",
    "goddamn",
    "goddamnit",
    "gook",
    "gooks",
    "gtfo",
    "horseshit",
    "jackass",
    "jackoff",
    "jerkoff",
    "knobhead",
    "minge",
    "motherfucking",
    "muthafucka",
    "numbnuts",
    "peckerhead",
    "piss",
    "pissoff",
    "retard",
    "retarded",
    "shitass",
    "shitface",
    "shitfaced",
    "shithead",
    "shitstain",
    "skank",
    "slutbag",
    "spick",
    "stfu",
    "wanker",
    "whore",
    "wtf",

    // Compound insults
    "assclown",
    "asshat",
    "asslicker",
    "assbag",
    "arsewipe",
    "ballbuster",
    "ballsdeep",
    "bastardized",
    "bitchface",
    "bitchtits",
    "cockbite",
    "cockface",
    "cockgobbler",
    "cocklicker",
    "cockmonger",
    "cockjockey",
    "cocknose",
    "cockring",
    "cocksmith",
    "cocksmoker",
    "cockwomble",
    "crapbag",
    "crapface",
    "cumbubble",
    "cumdumpster",
    "cumguzzler",
    "cumrag",
    "cumstain",
    "cuntbag",
    "cunting",
    "cuntrag",
    "dickbag",
    "dickbreath",
    "dickface",
    "dickless",
    "dicklicker",
    "dicknose",
    "dicksneeze",
    "dicksplash",
    "dicktease",
    "fuckass",
    "fuckbag",
    "fuckball",
    "fuckbrains",
    "fucker",
    "fuckers",
    "fuckhole",
    "fuckknuckle",
    "fucknugget",
    "fuckstain",
    "fuckstick",
    "fucktard",
    "fucktoy",
    "fucktrumpet",
    "fuckup",
    "fuckwad",
    "jackhole",
    "jizzface",
    "jizzmopper",
    "jizzrag",
    "jizzstain",
    "knobend",
    "knobgobbler",
    "knobber",
    "nutsack",
    "pissbaby",
    "pissflaps",
    "pisshead",
    "shitstick",
    "shitbird",
    "shitbag",
    "shitbox",
    "shitbreath",
    "shitbrains",
    "shitcanned",
    "shitcunt",
    "shitdick",
    "shiteater",
    "shitfuck",
    "shitgibbon",
    "shithole",
    "shithouse",
    "shitlord",
    "shitstorm",
    "slutbucket",
    "slutface",
    "smartass",
    "thundercunt",
    "twatface",
    "twatwaffle",
    "wankstain",

    // British slang
    "arse",
    "arsed",
    "arseface",
    "bellend",
    "berk",
    "blighter",
    "bloodyell",
    "bloody hell",
    "bugger",
    "buggered",
    "buggery",
    "chav",
    "gobshite",
    "knacker",
    "knackers",
    "minger",
    "mingin",
    "muppet",
    "nobhead",
    "nonce",
    "pillock",
    "plonker",
    "scrubber",
    "shag",
    "shagged",
    "shagging",
    "shite",
    "slag",
    "slagheap",
    "slapper",
    "sod off",
    "sodding",
    "tart",
    "twit",
    "wankbadger",
    "wazzock",

    // Australian slang
    "bogan",
    "drongo",

    // Internet abbreviations & modern slang
    "fml",
    "gilf",
    "gdilf",
    "lmao",
    "lmfao",
    "stfd",
    "thot",

    // Slurs (content filter)
    "chink",
    "chinks",
    "cracker",
    "crackers",
    "dyke",
    "dykes",
    "fgt",
    "gringo",
    "guido",
    "gyp",
    "gypped",
    "heeb",
    "homo",
    "injun",
    "jap",
    "japs",
    "kaffir",
    "kraut",
    "lesbo",
    "mick",
    "mong",
    "nig",
    "niggaz",
    "niggers",
    "porch monkey",
    "redneck",
    "redskin",
    "sambo",
    "spaz",
    "sperg",
    "spook",
    "tar baby",
    "wankers",
    "wetbacks",
    "white trash",
    "whitey",
    "wog",
    "wop",
    "wops",
    "zipperhead",

    // Compound phrases
    "batshit",
    "blow me",
    "blowjobs",
    "bull shit",
    "eat a dick",
    "eat shit",
    "f u",
    "foff",
    "fuck off",
    "fuck you",
    "fuckyou",
    "gangbang",
    "gangbanged",
    "gangbanging",
    "get fucked",
    "go fuck yourself",
    "go to hell",
    "gfy",
    "goddammit",
    "horse shit",
    "jack off",
    "jerking off",
    "kiss my ass",
    "motherfuckers",
    "mothafuckin",
    "motherfuckin",
    "motherfuckingcocksucking",
    "piss off",
    "pissed off",
    "piece of shit",
    "pos",
    "suck my dick",
    "suck it",
    "son of a bitch",
    "son of a whore",

    // More sexual terms
    "anal beads",
    "ballgag",
    "bondaged",
    "cameltoe",
    "clitoral",
    "cumface",
    "cunts",
    "dildos",
    "donkeypunch",
    "doublepenetration",
    "facial",
    "felching",
    "fleshlight",
    "gangbangs",
    "gooch",
    "grool",
    "handjobs",
    "hogtied",
    "hookers",
    "horny",
    "masturbating",
    "masturbation",
    "milfs",
    "nudes",
    "pecker",
    "pornhub",
    "pornstar",
    "prostitution",
    "pussies",
    "queafing",
    "quickie",
    "shibaried",
    "slutty",
    "smegma",
    "twerk",
    "twerking",
    "vaginal",
    "vibrators",
    "whorehouse",
    "whoring",

    // More general insults
    "assbandit",
    "dirtbag",
    "dirtysanchez",
    "doubledonger",
    "douchecanoe",
    "douchenozzle",
    "dumbbitch",
    "dumbshit",
    "fatfuck",
    "fubar",
    "halfwit",
    "numbskull",
    "peckerwood",
    "scumbag",
    "sleazebag",
    "taint",
    "tramp",
    "trash",
    "twathead",
    "twatknacker",

    // Fuck spelling variations
    "fuk", // alternate spelling
    "fuc", // truncated
    "fuq", // phonetic
    "fux", // alternate spelling
    "phuck", // ph substitution
    "phuk", // ph substitution
    "phuc", // ph substitution
    "fxck", // vowel swap
    "fcuk", // transposition
    "fcking", // vowel removed
    "fking", // truncated
    "fuking", // single consonant
    "fukking", // alternate
    "fukkin", // alternate
    "fukin", // alternate
    "phucking", // ph substitution
    "focked", // phonetic
    "fokking", // Afrikaans-style
    "fugged", // euphemism
    "fuggin", // euphemism
    "effing", // euphemism
    "eff", // euphemism
    "effoff", // euphemism
    "effyou", // euphemism
    "feck", // Irish variant
    "fecking", // Irish variant
    "fecker", // Irish variant
    "frigging", // euphemism
    "frickin", // euphemism
    "fricken", // euphemism
    "frikkin", // euphemism
    "freaking", // euphemism
    "fricking", // euphemism
    "fugly", // fucking ugly

    // Fuck compounds (additions)
    "fuckboi", // alternate spelling
    "fuckbuddy", // sexual partner
    "fucknut", // compound insult
    "fuckwipe", // compound insult
    "fuckrag", // compound insult
    "fuckweasel", // compound insult
    "fuckmuppet", // compound insult
    "fuckmonkey", // compound insult
    "fucktwat", // compound insult
    "fuckpig", // compound insult
    "fucktwit", // compound insult
    "fuckwagon", // compound insult
    "fuckwaffle", // compound insult
    "brainfuck", // compound
    "mindfuck", // compound
    "ratfuck", // compound
    "ratfucker", // compound
    "skullfuck", // violent sexual
    "skullfucked", // violent sexual
    "starfucker", // groupie insult
    "titfuck", // sexual act
    "unfuckable", // insult
    "whatthefuck", // compound phrase
    "clusterf", // truncated clusterfuck
    "clusterfucker", // compound
    "mothafucka", // alternate spelling
    "mothafucker", // alternate spelling
    "mothafuckers", // alternate spelling
    "motherfuck", // truncated
    "motherfuckaz", // alternate spelling
    "mutha", // truncated
    "muthafuck", // alternate spelling
    "muthafucker", // alternate spelling
    "muthafucking", // alternate spelling
    "mutherfucker", // alternate spelling

    // Shit spelling variations
    "sht", // consonants only
    "shyt", // alternate spelling
    "sh1t", // leet speak
    "shiit", // elongated
    "shiet", // alternate spelling
    "shiz", // truncated
    "shizzle", // slang variant

    // Shit compounds (additions)
    "shitshow", // compound
    "bullshitter", // compound
    "bullshitting", // compound
    "chickenshit", // compound
    "dipshits", // plural
    "dogshit", // compound
    "ratshit", // compound
    "shitrag", // compound insult
    "shitpile", // compound
    "shitpot", // compound
    "shitwad", // compound insult
    "shitweasel", // compound insult
    "shitwit", // compound insult
    "shitlips", // compound insult
    "shitlist", // compound
    "shitsack", // compound insult
    "shitsipper", // compound insult
    "shitspitter", // compound insult
    "shittier", // comparative
    "shittiest", // superlative
    "shitting", // gerund
    "shitforbrains", // compound insult
    "craphead", // compound
    "crapass", // compound
    "craphole", // compound
    "craptastic", // sarcastic compound
    "crappy", // adjective

    // Ass spelling variations and compounds (additions)
    "a$$", // symbol substitution
    "azz", // alternate spelling
    "arsehat", // British compound
    "arselicker", // British compound
    "arsebandit", // British compound
    "asscrack", // body part
    "assfuck", // compound
    "assfucker", // compound
    "assgoblin", // compound insult
    "assholes", // plural
    "assjacker", // compound insult
    "asslick", // compound
    "assmuncher", // compound insult
    "assnugget", // compound insult
    "asspacker", // compound insult
    "asspirate", // pun compound
    "asswad", // compound insult
    "badass", // compound
    "candyass", // compound insult
    "hardass", // compound
    "kickass", // compound
    "lameass", // compound insult
    "lardass", // compound insult
    "lazyass", // compound insult
    "sorryass", // compound insult
    "stupidass", // compound insult
    "uglyass", // compound insult
    "wiseass", // compound insult

    // Dick spelling variations and compounds (additions)
    "dik", // alternate spelling
    "dck", // vowel removed
    "d1ck", // leet speak
    "dikhead", // alternate spelling
    "dickbrain", // compound insult
    "dickfor", // compound insult
    "dickfuck", // compound insult
    "dickmunch", // compound insult
    "dickmonger", // compound insult
    "dickrot", // compound insult
    "dickslap", // compound
    "dicksmack", // compound
    "dicksucker", // compound insult
    "dicksucking", // compound
    "dicktip", // compound
    "dickwad", // compound insult
    "dickwhistle", // compound insult
    "dickworm", // compound insult
    "dickhole", // compound insult

    // Bitch spelling variations and compounds (additions)
    "b1tch", // leet speak
    "biatch", // phonetic variant
    "beyotch", // phonetic variant
    "beeyotch", // phonetic variant
    "biotch", // phonetic variant
    "bish", // truncated
    "bitchboy", // compound insult
    "bitchcakes", // compound insult
    "bitched", // past tense
    "bitchiest", // superlative
    "bitchin", // adjective
    "bitching", // gerund
    "bitchmode", // compound
    "bitchslap", // compound
    "bitchy", // adjective
    "sonofabitch", // compound phrase
    "sunuvabitch", // phonetic variant
    "sumbitch", // truncated

    // Cock spelling variations and compounds (additions)
    "c0ck", // leet speak
    "cawk", // phonetic
    "cockcheese", // compound insult
    "cockend", // compound insult
    "cockholster", // compound insult
    "cockmuncher", // compound insult
    "cockup", // compound
    "cockwash", // compound insult

    // Cunt variations and compounds (additions)
    "c0nt", // leet speak
    "cuntbucket", // compound insult
    "cuntfaced", // compound insult
    "cuntflap", // body part vulgar
    "cuntflaps", // body part vulgar
    "cunthair", // compound
    "cunthole", // compound
    "cuntkicker", // compound insult
    "cuntlicker", // compound insult
    "cuntlips", // compound
    "cuntpunt", // compound
    "cuntsucker", // compound insult
    "cuntwipe", // compound insult

    // Racial/ethnic slurs (additions)
    "abbo", // anti-Aboriginal
    "abo", // anti-Aboriginal
    "blackie", // racial slur
    "bluegum", // racial slur
    "boong", // anti-Aboriginal
    "burrhead", // racial slur
    "camel jockey", // anti-Arab
    "chinaman", // anti-Chinese
    "chinky", // anti-Asian
    "coconut", // racial slur
    "coolie", // anti-Asian labor slur
    "coonass", // regional slur
    "curry muncher", // anti-South Asian
    "darkies", // racial slur plural
    "darky", // racial slur
    "dothead", // anti-South Asian
    "gator bait", // racial slur
    "golliwog", // racial caricature
    "gollywog", // racial caricature
    "greaseball", // ethnic slur
    "greaser", // ethnic slur
    "guinea", // anti-Italian
    "hajji", // anti-Arab
    "haji", // anti-Arab
    "halfbreed", // mixed race slur
    "half-breed", // mixed race slur
    "honky", // anti-white slur
    "hunky", // ethnic slur
    "jungle bunny", // racial slur
    "kikes", // plural anti-Semitic
    "limey", // anti-British
    "mulatto", // mixed race slur
    "nagger", // near-homophone evasion
    "naggers", // near-homophone evasion
    "negroid", // racial slur
    "negra", // racial slur
    "negras", // racial slur
    "negroes", // racial slur
    "nigar", // alternate spelling
    "niggah", // alternate spelling
    "niggas", // alternate spelling
    "nigguh", // alternate spelling
    "niggahs", // alternate spelling
    "niggor", // alternate spelling
    "nigor", // alternate spelling
    "niglet", // racial slur diminutive
    "niglets", // racial slur diminutive
    "nigra", // racial slur
    "nigras", // racial slur
    "pakis", // plural anti-Pakistani
    "picaninny", // racial slur
    "pickaninny", // racial slur
    "pikey", // anti-Traveler slur
    "porchmonkey", // racial slur compound
    "ragheads", // plural anti-Arab
    "sandnigger", // compound racial slur
    "sandnigga", // compound racial slur
    "shitskin", // racial slur
    "slant", // anti-Asian
    "slanteyes", // anti-Asian
    "slopes", // anti-Asian
    "spearchucker", // racial slur
    "spics", // plural anti-Latino
    "spicks", // alternate spelling
    "squaw", // anti-Native American
    "tar-baby", // racial slur
    "tarbaby", // racial slur
    "towelheads", // plural anti-Arab
    "uncle tom", // racial slur
    "wigger", // racial mockery
    "wigga", // racial mockery
    "woggy", // racial slur
    "yellowbone", // colorist slur
    "zipperheads", // plural anti-Asian

    // Homophobic slurs (additions)
    "bumboy", // homophobic
    "bum boy", // homophobic
    "bumbandit", // homophobic
    "buttboy", // homophobic
    "cocksuckers", // plural
    "faggots", // plural
    "faggotry", // noun form
    "faggy", // adjective
    "fagot", // alternate spelling
    "fagots", // alternate spelling plural
    "fairy", // homophobic
    "flamer", // homophobic
    "flamers", // homophobic
    "fruity", // homophobic
    "gayass", // compound
    "gaylord", // compound insult
    "gaywad", // compound insult
    "lesbos", // plural
    "lezzo", // slang
    "lezzy", // slang
    "moffie", // South African homophobic
    "nancyboy", // homophobic
    "pansy", // homophobic
    "pansies", // homophobic plural
    "pillow biter", // homophobic
    "pillowbiter", // homophobic
    "poofter", // homophobic
    "pooftah", // homophobic
    "ponce", // homophobic
    "queerbait", // homophobic
    "queerboy", // homophobic
    "queers", // plural
    "rug muncher", // homophobic
    "rugmuncher", // homophobic
    "shirtlifter", // homophobic
    "shirt lifter", // homophobic
    "sissy", // homophobic
    "sodomite", // homophobic
    "sodomites", // homophobic plural

    // Sexist/misogynistic (additions)
    "bimbo", // sexist insult
    "floozy", // sexist insult
    "frump", // sexist insult
    "harridan", // sexist insult
    "hooters", // vulgar body reference
    "hussy", // sexist insult
    "jezebel", // sexist insult
    "piece of ass", // objectifying
    "sket", // British sexist slang
    "skankbag", // compound insult
    "skankface", // compound insult
    "skanky", // adjective
    "slags", // plural
    "slutshame", // compound
    "slutshaming", // compound
    "sluts", // plural
    "trollop", // sexist insult
    "trollops", // plural
    "wench", // sexist insult
    "whorebag", // compound insult
    "whores", // plural
    "whorey", // adjective
    "whorish", // adjective

    // British slang (additions)
    "git", // British insult
    "gits", // plural
    "manky", // British dirty/bad
    "naff off", // British go away
    "pisstake", // British mockery
    "scrote", // British insult
    "shagger", // British sexual
    "slaggy", // British adjective
    "sodoff", // compound
    "toerag", // British insult
    "tosspot", // British insult
    "twatbadger", // compound insult
    "twonk", // British insult
    "pleb", // British classist insult

    // Australian slang (additions)
    "rooting", // Australian sexual
    "root rat", // Australian sexual
    "rootrat", // Australian sexual
    "seppo", // Australian anti-American

    // Internet abbreviations & modern slang (additions)
    "dafuq", // what the fuck
    "deez nuts", // vulgar meme
    "deeznutz", // vulgar meme
    "diaf", // die in a fire
    "dilligaf", // acronym vulgar
    "esad", // eat shit and die
    "ffs", // for fuck's sake
    "foad", // fuck off and die
    "gfys", // go fuck yourself
    "gyat", // sexualized exclamation
    "gyatt", // sexualized exclamation
    "idgaf", // I don't give a fuck
    "incel", // involuntary celibate insult
    "jfc", // Jesus fucking Christ
    "kms", // kill myself
    "kys", // kill yourself
    "ligma", // vulgar meme
    "ligmaballs", // vulgar meme
    "mofo", // motherfucker variant
    "ngr", // abbreviated slur
    "omfg", // oh my fucking god
    "smfh", // shaking my fucking head
    "smh", // shaking my head
    "sugma", // vulgar meme
    "sugmaballs", // vulgar meme
    "yomama", // your mama insult
    "yo mama", // your mama insult

    // Euphemistic spellings / filter evasion (additions)
    "a hole", // spaced a-hole
    "a-hole", // hyphenated
    "ahole", // compound
    "a55", // leet speak
    "a55hole", // leet speak
    "azzhole", // alternate spelling
    "b!tch", // symbol substitution
    "b00bs", // leet speak
    "b1atch", // leet speak
    "beotch", // phonetic variant
    "bi+ch", // symbol substitution
    "cnt", // consonants only
    "c0cks", // leet speak
    "d!ck", // symbol substitution
    "d!k", // symbol substitution
    "f ck", // spaced
    "f u c k", // fully spaced
    "f-ck", // hyphenated
    "f_ck", // underscored
    "fawk", // phonetic
    "fawking", // phonetic
    "fkn", // abbreviated
    "fku", // abbreviated fuck you
    "fooking", // dialectal
    "fookin", // dialectal
    "friggin", // euphemism
    "frkin", // abbreviated
    "fudge", // euphemism for fuck
    "fudger", // euphemism
    "fvck", // vowel swap
    "fvcking", // vowel swap
    "h0e", // leet speak
    "h0r", // leet speak
    "ho3", // leet speak
    "horsesh1t", // leet speak
    "mfer", // abbreviation
    "mfr", // abbreviation
    "motha", // truncated
    "mothaf", // truncated
    "n1gga", // leet speak
    "n1gger", // leet speak
    "niqqer", // character swap
    "niqqa", // character swap
    "p0rn", // leet speak
    "p1ss", // leet speak
    "pr0n", // leet speak for porn
    "pr1ck", // leet speak
    "prik", // alternate spelling
    "pu55y", // leet speak
    "pussay", // phonetic
    "puzzy", // alternate spelling
    "pvssy", // character swap
    "s h i t", // fully spaced
    "sh!t", // symbol substitution
    "sh!thead", // symbol substitution
    "sk4nk", // leet speak
    "sl00t", // leet speak
    "sl0t", // leet speak
    "slvt", // character swap
    "tw4t", // leet speak
    "w4nk", // leet speak
    "wh0re", // leet speak
    "wh0r", // leet speak

    // Drug-related vulgar terms
    "crackhead", // drug user insult
    "crackheads", // plural
    "crackwhore", // compound insult
    "methhead", // drug user insult
    "methheads", // plural
    "pothead", // drug user insult
    "potheads", // plural
    "stoner", // drug user
    "stoners", // plural
    "tweaker", // drug user insult
    "tweakers", // plural
    "junkie", // drug user insult
    "junkies", // plural
    "dopehead", // drug user insult
    "dopeheads", // plural
    "pillhead", // drug user insult
    "acidhead", // drug user insult
    "basehead", // drug user insult
    "baseheads", // plural
    "cokewhore", // compound insult
    "cokehead", // drug user insult
    "cokeheads", // plural
    "druggie", // drug user insult
    "druggies", // plural

    // Violent/threatening terms
    "go die", // threat
    "kill yourself", // threat
    "killyourself", // compound threat
    "killurself", // abbreviated threat
    "neck yourself", // threat
    "eat a bullet", // violent threat
    "drink bleach", // violent threat
    "drinkbleach", // compound threat
    "hang yourself", // violent threat
    "slit your wrists", // violent threat
    "jump off a bridge", // violent threat
    "end yourself", // threat
    "off yourself", // threat
    "unalive", // euphemism for kill
    "unalive yourself", // euphemism threat

    // Body part vulgarities and variations (additions)
    "ballsac", // alternate spelling
    "balls", // vulgar body reference
    "bawsack", // dialectal
    "bigtits", // compound
    "bollock", // singular
    "bollox", // alternate spelling
    "buttfuck", // compound
    "buttfucker", // compound
    "buttplug", // sexual object
    "chesticles", // slang portmanteau
    "choade", // alternate spelling
    "chode", // vulgar body reference
    "clunge", // British vulgar
    "coochie", // vulgar slang
    "coochy", // vulgar slang
    "cooter", // vulgar slang
    "gash", // vulgar body reference
    "gonads", // vulgar body reference
    "mooseknuckle", // vulgar body reference
    "nadgers", // British slang
    "nads", // slang for gonads
    "nards", // slang for gonads
    "phallus", // penis reference
    "poonani", // vulgar slang
    "pootang", // vulgar slang
    "pube", // singular
    "pudenda", // vulgar body reference
    "teabag", // sexual act
    "teabagging", // sexual act
    "wang", // vulgar body reference
    "weiner", // alternate spelling
    "willy", // British slang
    "wiener", // vulgar body reference

    // Additional compound insults and vulgarity
    "arsetard", // compound insult
    "assbrain", // compound insult
    "assbreath", // compound insult
    "asscheek", // body reference
    "asscheeks", // body reference
    "assface", // compound insult
    "asshammer", // compound insult
    "asshead", // compound insult
    "asshopper", // compound insult
    "assjockey", // compound insult
    "asskisser", // compound insult
    "assmonkey", // compound insult
    "bitchwhore", // compound insult
    "bollocking", // British gerund
    "bumblefuck", // compound
    "buttcrack", // body reference
    "buttface", // compound insult
    "butthead", // compound insult
    "buttlicker", // compound insult
    "buttmunch", // compound insult
    "buttmuncher", // compound insult
    "buttwipe", // compound insult
    "choad", // vulgar body reference
    "choadsmoker", // compound insult
    "cockblock", // compound
    "cockbreath", // compound insult
    "cumsock", // compound
    "cumwad", // compound
    "cuntlapper", // compound insult
    "cuntpuncher", // compound insult
    "cuntwaffle", // compound insult
    "damnit", // mild profanity
    "dickbutt", // compound insult
    "dickcheese", // compound insult
    "dickjuice", // compound
    "dicklick", // compound
    "dickpull", // compound
    "dicksnot", // compound insult
    "dicksuck", // compound
    "dillweed", // insult
    "dongface", // compound insult
    "douchelord", // compound insult
    "douchewad", // compound insult
    "felcher", // sexual act reference
    "fucked", // past tense
    "fuckheads", // plural
    "fuckpile", // compound insult
    "fucksicle", // compound insult
    "gayfuck", // compound insult
    "gayshit", // compound insult
    "goddamned", // profanity
    "hellhole", // compound
    "hoebag", // compound insult
    "horsefucker", // compound insult
    "jagoff", // regional insult
    "jizzball", // compound insult
    "jizzbag", // compound insult
    "jizzbreath", // compound insult
    "jizzjar", // compound insult
    "knobchops", // compound insult
    "knobgoblin", // compound insult
    "knobjockey", // compound insult
    "knobrash", // compound insult
    "manwhore", // compound insult
    "meatflap", // vulgar body reference
    "munter", // British insult
    "nutjob", // insult
    "peckerbrain", // compound insult
    "peckerface", // compound insult
    "penisbreath", // compound insult
    "penisface", // compound insult
    "penishead", // compound insult
    "peniswrinkle", // compound insult
    "pigfucker", // compound insult
    "polesmoker", // compound insult
    "poonhound", // compound insult
    "prick", // vulgar insult
    "pricks", // plural
    "pricklick", // compound insult
    "prickteaser", // compound insult
    "prickweed", // compound insult
    "scroat", // alternate spelling
    "shitfucker", // compound insult
    "shitgobbler", // compound insult
    "shitlicker", // compound insult
    "shitmuncher", // compound insult
    "shitsucker", // compound insult
    "slutmonger", // compound insult
    "slutwhore", // compound insult
    "snatchface", // compound insult
    "sonnofabitch", // alternate spelling
    "spunkbubble", // compound insult
    "spunkface", // compound insult
    "spunkmonkey", // compound insult
    "spunkrat", // compound insult
    "titfucker", // compound insult
    "titlicker", // compound insult
    "titsucker", // compound insult
    "turdburgler", // compound insult
    "turdburglar", // compound insult
    "turdface", // compound insult
    "twatburger", // compound insult
    "twatgoblin", // compound insult
    "twatlips", // compound insult
    "twatmonger", // compound insult
    "twatmuffin", // compound insult
    "twatpuddle", // compound insult
    "twatsicle", // compound insult
    "twatsplat", // compound insult
    "wankface", // compound insult
    "wankpheasant", // compound insult
    "wankpuffin", // compound insult
    "wankshaft", // compound insult
    "wanksock", // compound insult
    "wankspot", // compound insult
    "wanking", // gerund

    // Ableist slurs
    "cripple", // ableist slur
    "crippled", // ableist slur
    "gimp", // ableist slur
    "gimpy", // ableist slur
    "moron", // ableist insult
    "imbecile", // ableist insult
    "retards", // plural
    "retardation", // ableist
    "spastic", // ableist slur
    "spastics", // plural
    "spazzy", // ableist slur
    "tard", // truncated slur
    "tards", // plural
    "windowlicker", // ableist slur
    "window licker", // ableist slur

    // Religious/blasphemous
    "christfucker", // blasphemous compound
    "goddam", // blasphemous
    "jesusfuck", // blasphemous compound
    "jesushchrist", // blasphemous

    // Miscellaneous profanity
    "ballbreaker", // compound insult
    "ballcrusher", // compound insult
    "barfbag", // insult
    "bastardface", // compound insult
    "bumfuck", // compound
    "bumfucker", // compound
    "buttbandit", // compound insult
    "buttbreath", // compound insult
    "buttfucking", // gerund
    "cocksplat", // compound insult
    "cornholer", // compound insult
    "crapfest", // compound
    "crapola", // slang
    "dicksplat", // compound insult
    "dipwad", // insult
    "dobber", // Scottish/British insult
    "fartface", // compound insult
    "fartknacker", // compound insult
    "fartblossom", // compound insult
    "gutter slut", // compound insult
    "gutterslut", // compound insult
    "jackwagon", // compound insult
    "jizzgobbler", // compound insult
    "knobnose", // compound insult
    "knobrot", // compound insult
    "knobshine", // compound insult
    "pissant", // compound insult
    "pissbucket", // compound insult
    "pisser", // insult
    "pissface", // compound insult
    "pisspot", // compound insult
    "putz", // Yiddish insult
    "ratbag", // insult
    "scrotum", // vulgar body reference
    "shit stain", // spaced variant
    "shitestain", // compound insult
    "shitheel", // compound insult
    "shitkicker", // compound insult
    "shitpants", // compound insult
    "skaghead", // drug-related insult
    "slagbag", // compound insult
    "snotface", // compound insult
    "snotnose", // compound insult
    "spunkjockey", // compound insult
    "tossbag", // compound insult
    "turdhead", // compound insult
    "turdpile", // compound
    "turds", // plural
    "twattery", // noun form
    "twatting", // gerund
    "wankbucket", // compound insult

    // ===== LEETSPEAK & CHARACTER SUBSTITUTION EVASIONS =====

    // Fuck - leetspeak and symbol substitutions
    "f*ck", // asterisk substitution
    "f**k", // double asterisk
    "fu*k", // asterisk in middle
    "f.u.c.k", // dotted
    "f-u-c-k", // hyphenated
    "f_u_c_k", // underscored
    "f*u*c*k", // asterisk separated
    "f.uck", // partial dot
    "fu.ck", // partial dot
    "fuc.k", // partial dot
    "f-uck", // partial hyphen
    "fu-ck", // partial hyphen
    "fuc-k", // partial hyphen
    "f_uck", // partial underscore
    "fu_ck", // partial underscore
    "fuc_k", // partial underscore
    "fucc", // double c evasion
    "fukk", // double k evasion
    "fukkk", // triple k evasion
    "phukk", // ph + double k
    "phucc", // ph + double c
    "phuq", // ph + q evasion
    "phk", // abbreviated ph
    "frick", // euphemistic evasion
    "frig", // euphemistic evasion
    "fak", // phonetic evasion
    "fak3", // phonetic + leet
    "fukc", // transposed
    "fuqq", // double q evasion
    "f0ck", // zero substitution
    "fvk", // vowel swap abbreviated
    "fuhk", // phonetic spelling
    "fahk", // phonetic spelling
    "fux0r", // leet speak variant
    "f4ck", // number substitution
    "fu(k", // parenthesis evasion
    "fü ck", // umlaut + space
    "fück", // umlaut evasion
    "fùck", // grave accent evasion
    "fûck", // circumflex evasion
    "fúck", // acute accent evasion
    "fụck", // underdot evasion
    "fưck", // horn accent evasion

    // Shit - leetspeak and symbol substitutions
    "sh*t", // asterisk substitution
    "s.h.i.t", // dotted
    "s-h-i-t", // hyphenated
    "s_h_i_t", // underscored
    "s*h*i*t", // asterisk separated
    "$hit", // dollar sign substitution
    "$h!t", // dollar + exclamation
    "$h1t", // dollar + number
    "shi+", // plus sign substitution
    "sh17", // full leet
    "5hit", // number substitution
    "5h1t", // full number substitution
    "5h!t", // number + symbol
    "sh1te", // leet variant
    "shyt3", // alternate + leet
    "shiit3", // elongated + leet
    "sh!tty", // symbol + adjective
    "sh!tstain", // symbol in compound
    "sh!thole", // symbol in compound
    "sh!tface", // symbol in compound
    "$hitty", // dollar in adjective
    "$hithole", // dollar in compound
    "$hithead", // dollar in compound
    "$hitface", // dollar in compound
    "$hitstain", // dollar in compound
    "s.hit", // partial dot
    "sh.it", // partial dot
    "shi.t", // partial dot

    // Bitch - leetspeak and symbol substitutions
    "b*tch", // asterisk substitution
    "b.i.t.c.h", // dotted
    "b-i-t-c-h", // hyphenated
    "b_i_t_c_h", // underscored
    "b!+ch", // symbol substitution
    "b17ch", // leet speak
    "b1+ch", // leet + symbol
    "bytch", // y substitution
    "bych", // abbreviated
    "bich", // abbreviated
    "bltch", // l substitution
    "b!tches", // symbol + plural
    "b1tches", // leet + plural

    // Cunt - leetspeak and symbol substitutions
    "c*nt", // asterisk substitution
    "c.u.n.t", // dotted
    "c-u-n-t", // hyphenated
    "c_u_n_t", // underscored
    "cvnt", // v substitution
    "kunt", // k substitution
    "kunts", // k substitution plural
    "kunte", // k substitution variant
    "cnut", // transposed
    "c*nts", // asterisk + plural
    "cvnts", // v substitution + plural
    "cuntz", // z substitution
    "cun+", // plus substitution

    // Ass - leetspeak and symbol substitutions
    "@ss", // at sign substitution
    "@$$", // at + dollar signs
    "a$s", // partial dollar sign
    "@s$", // mixed symbols
    "@$s", // mixed symbols
    "a.s.s", // dotted
    "a-s-s", // hyphenated
    "a_s_s", // underscored
    "@sshole", // at sign compound
    "@$$hole", // at + dollar compound
    "a$$hole", // dollar compound
    "@sswipe", // at sign compound
    "a$$wipe", // dollar compound

    // Nigger - leetspeak and symbol substitutions
    "n*gger", // asterisk substitution
    "n*gga", // asterisk substitution
    "n!gger", // exclamation substitution
    "n!gga", // exclamation substitution
    "nigg3r", // leet speak
    "n1gg3r", // full leet
    "n!gg3r", // symbol + leet
    "n.i.g.g.e.r", // dotted
    "n-i-g-g-e-r", // hyphenated
    "n_i_g_g_e_r", // underscored
    "n1g", // abbreviated leet
    "n!g", // abbreviated symbol
    "nigg", // truncated
    "nigz", // z substitution
    "niggz", // z substitution
    "n1ggaz", // leet variant
    "nigg4", // leet variant
    "nigg4h", // leet variant
    "nigg4z", // leet variant
    "n1664", // full number substitution
    "nlgger", // l substitution
    "nlgga", // l substitution
    "n*ggers", // asterisk + plural
    "n1ggers", // leet + plural
    "n!ggers", // symbol + plural
    "nigg3rs", // leet + plural

    // Cock - leetspeak and symbol substitutions
    "c*ck", // asterisk substitution
    "c.o.c.k", // dotted
    "c-o-c-k", // hyphenated
    "c_o_c_k", // underscored
    "c0cksucker", // leet compound
    "c*cksucker", // asterisk compound
    "cocc", // double c evasion
    "kocc", // k + double c
    "kok", // phonetic
    "kock", // k substitution
    "k0ck", // k + zero

    // Dick - leetspeak and symbol substitutions
    "d*ck", // asterisk substitution
    "d.i.c.k", // dotted
    "d-i-c-k", // hyphenated
    "d_i_c_k", // underscored
    "d!ckhead", // symbol compound
    "d1ckhead", // leet compound
    "d!cksucker", // symbol compound
    "d1cksucker", // leet compound
    "dicc", // double c evasion
    "dikk", // double k evasion
    "diq", // q substitution
    "diqq", // double q

    // Pussy - leetspeak and symbol substitutions
    "p*ssy", // asterisk substitution
    "pu$$y", // dollar substitution - already exists context
    "pu5sy", // number substitution
    "pus$y", // partial dollar
    "pu$$ies", // dollar + plural
    "pu$$", // truncated dollar
    "p.u.s.s.y", // dotted
    "p-u-s-s-y", // hyphenated
    "p_u_s_s_y", // underscored
    "pvssi", // v + i substitution
    "pvss1", // v + number
    "pu22y", // number substitution
    "puzz1", // z + number

    // Whore - leetspeak and symbol substitutions
    "wh*re", // asterisk substitution
    "wh0r3", // full leet
    "w.h.o.r.e", // dotted
    "w-h-o-r-e", // hyphenated
    "w_h_o_r_e", // underscored
    "wh0res", // leet plural
    "whor3", // partial leet
    "wh*res", // asterisk plural
    "whoar", // phonetic
    "hoar", // archaic/phonetic
    "wore", // deliberate misspelling

    // Slut - leetspeak and symbol substitutions
    "s1ut", // leet
    "$lut", // dollar substitution
    "$l00t", // dollar + leet
    "s.l.u.t", // dotted
    "s-l-u-t", // hyphenated
    "s_l_u_t", // underscored
    "$lutty", // dollar + adjective
    "sl*t", // asterisk substitution
    "slvts", // v + plural

    // Faggot - leetspeak and symbol substitutions
    "f*ggot", // asterisk substitution
    "f4ggot", // number substitution
    "f4g", // number substitution
    "f@g", // at sign substitution
    "f@ggot", // at sign substitution
    "f@gs", // at sign + plural
    "f.a.g", // dotted
    "f-a-g", // hyphenated
    "f4gg0t", // full leet
    "fagg0t", // partial leet
    "f@gg0t", // symbol + leet
    "phaggot", // ph substitution
    "phag", // ph substitution
    "faget", // misspelling
    "fagit", // misspelling
    "faggit", // misspelling
    "fagget", // misspelling
    "faqqot", // q substitution

    // ===== HOMOGLYPH / UNICODE EVASIONS =====
    // Cyrillic and Greek lookalike substitutions

    // Fuck with Cyrillic/Greek chars
    "fuсk", // Cyrillic с (es) for c
    "fuϲk", // Greek small lunate sigma for c
    "fυck", // Greek upsilon for u
    "fμck", // Greek mu for u
    "fuсks", // Cyrillic с + plural
    "fuсking", // Cyrillic с + gerund
    "fuckіng", // Cyrillic і for i

    // Shit with Cyrillic/Greek chars
    "shіt", // Cyrillic і for i
    "shіts", // Cyrillic і + plural
    "shіtty", // Cyrillic і + adjective
    "ѕhit", // Cyrillic ѕ for s
    "shіthead", // Cyrillic і + compound

    // Bitch with Cyrillic/Greek chars
    "bіtch", // Cyrillic і for i
    "bіtches", // Cyrillic і + plural
    "bitсh", // Cyrillic с for c

    // Ass with Cyrillic/Greek chars
    "аss", // Cyrillic а for a
    "аsshole", // Cyrillic а + compound
    "аsswipe", // Cyrillic а + compound

    // Nigger with Cyrillic/Greek chars
    "nіgger", // Cyrillic і for i
    "nіgga", // Cyrillic і for i
    "niggеr", // Cyrillic е for e
    "nіggеr", // Cyrillic і + е

    // Cunt with Cyrillic/Greek chars
    "сunt", // Cyrillic с for c
    "сunts", // Cyrillic с + plural

    // Cock with Cyrillic/Greek chars
    "сock", // Cyrillic с for c
    "соck", // Cyrillic с + о
    "сосk", // full Cyrillic с and о

    // Dick with Cyrillic/Greek chars
    "dіck", // Cyrillic і for i
    "dісk", // Cyrillic і + с

    // Pussy with Cyrillic/Greek chars
    "рussy", // Cyrillic р for p
    "рussу", // Cyrillic р + у

    // Whore with Cyrillic/Greek chars
    "whоre", // Cyrillic о for o
    "whоres", // Cyrillic о + plural

    // ===== SPACING / SEPARATOR EVASIONS =====

    // Already have "f u c k", adding remaining major words
    "b i t c h", // fully spaced
    "c u n t", // fully spaced
    "a s s", // fully spaced
    "d i c k", // fully spaced
    "c o c k", // fully spaced
    "p u s s y", // fully spaced
    "w h o r e", // fully spaced
    "n i g g e r", // fully spaced
    "n i g g a", // fully spaced
    "f a g", // fully spaced
    "f a g g o t", // fully spaced
    "s l u t", // fully spaced

    // ===== COMMON INTENTIONAL MISSPELLINGS =====

    // Fuck misspellings
    "fawkin", // phonetic gerund
    "fyck", // vowel swap
    "feck off", // Irish compound
    "fook", // dialectal
    "foook", // elongated
    "fuuuck", // elongated
    "fuuuuck", // elongated
    "fffuck", // repeated consonant
    "fuhck", // inserted h
    "phux", // ph + x
    "phux0r", // leet ph variant
    "fux0red", // leet past tense
    "fuckkkk", // elongated k
    "fuuuuk", // elongated u + k
    "f00k", // zero substitution
    "fuq off", // phonetic compound
    "fuqoff", // phonetic compound
    "fuqyou", // phonetic compound
    "phuckoff", // ph compound
    "phuckyou", // ph compound

    // Shit misspellings
    "shyte", // y substitution
    "shiite", // elongated i
    "sheit", // German-influenced
    "chit", // deliberate
    "sheeit", // elongated
    "sheeeit", // elongated
    "shiznit", // slang variant
    "shiznitz", // slang variant
    "shizz", // slang variant
    "shat", // past tense
    "chitty", // deliberate misspelling

    // Bitch misspellings
    "beatch", // phonetic
    "biach", // phonetic
    "beeyatch", // phonetic elongated
    "beeatch", // phonetic elongated
    "bioch", // phonetic
    "byatch", // y substitution
    "biznatch", // slang variant
    "biznitch", // slang variant
    "beyatch", // phonetic
    "biatches", // phonetic plural
    "bitchez", // z substitution
    "bitchz", // z ending
    "bixch", // x substitution

    // Ass misspellings
    "azs", // z substitution
    "ase", // misspelling
    "aarse", // elongated
    "aaass", // elongated
    "a5s", // number substitution
    "as5", // number substitution

    // Cunt misspellings
    "cuht", // phonetic
    "kuntz", // k + z
    "koont", // phonetic
    "kuhnt", // phonetic

    // Dick misspellings
    "deek", // phonetic
    "dyck", // y substitution
    "dyk", // y substitution short

    // ===== MORE COMPOUND WORDS AND PHRASES =====

    // Fuck phrases
    "fuckthis", // compound phrase
    "fuckthat", // compound phrase
    "fuckall", // compound phrase
    "fuckit", // compound phrase
    "fuckme", // compound phrase
    "fuckher", // compound phrase
    "fuckhim", // compound phrase
    "fuckem", // compound phrase
    "fuckthem", // compound phrase
    "fuckeverything", // compound phrase
    "fucklife", // compound phrase
    "fuckyourself", // compound phrase
    "gofuckyourself", // compound phrase
    "shutthefuckup", // compound phrase
    "whatthef", // truncated compound
    "holy fuck", // exclamatory phrase
    "holyfuck", // compound exclamatory
    "fuckno", // compound phrase
    "fuckyes", // compound phrase
    "fuck this", // spaced phrase
    "fuck that", // spaced phrase
    "fuck it", // spaced phrase
    "fuck me", // spaced phrase
    "fuck him", // spaced phrase
    "fuck her", // spaced phrase
    "fuck em", // spaced phrase
    "fuck them", // spaced phrase
    "fuck everything", // spaced phrase
    "fuck life", // spaced phrase
    "fuck yourself", // spaced phrase
    "shut the fuck up", // spaced phrase

    // Shit phrases
    "holyshit", // compound phrase
    "holy shit", // spaced phrase
    "ohshit", // compound phrase
    "oh shit", // spaced phrase
    "noshit", // compound phrase
    "no shit", // spaced phrase
    "fullofshit", // compound phrase
    "full of shit", // spaced phrase
    "eatshit", // compound phrase
    "shittalker", // compound
    "shittalking", // compound
    "shit talker", // spaced
    "shit talking", // spaced
    "apeshit crazy", // compound phrase
    "batshit crazy", // compound phrase

    // Bitch phrases
    "dumb bitch", // spaced
    "stupidbitch", // compound
    "stupid bitch", // spaced
    "crazybitch", // compound
    "crazy bitch", // spaced
    "littlebitch", // compound
    "little bitch", // spaced
    "bitchplease", // compound
    "bitch please", // spaced
    "bitch ass", // spaced

    // Ass phrases
    "eatmyass", // compound phrase
    "eat my ass", // spaced phrase
    "kissmyass", // compound phrase
    "lickmyass", // compound phrase
    "lick my ass", // spaced phrase
    "up your ass", // spaced phrase
    "upyourass", // compound phrase
    "shove it up your ass", // full phrase
    "stick it up your ass", // full phrase

    // Dick phrases
    "suckmydick", // compound phrase
    "suck my cock", // spaced phrase
    "suckmycock", // compound phrase
    "eatadick", // compound phrase
    "suckadick", // compound phrase
    "suck a dick", // spaced phrase

    // Mixed vulgar phrases
    "bite me", // aggressive phrase
    "biteme", // compound
    "blowme", // compound
    "screw you", // aggressive phrase
    "screwyou", // compound
    "screw off", // aggressive phrase
    "screwoff", // compound
    "piss on you", // aggressive phrase
    "pissonyou", // compound
    "youreacunt", // compound phrase
    "youre a cunt", // spaced phrase
    "youre a bitch", // spaced phrase
    "youreabitch", // compound phrase
    "die in a fire", // aggressive phrase
    "dieinafire", // compound
    "eat dirt", // aggressive phrase
    "get bent", // aggressive phrase
    "getbent", // compound
    "up yours", // aggressive phrase
    "upyours", // compound
    "go screw yourself", // aggressive phrase
    "sod you", // British aggressive
    "bugger off", // British aggressive
    "buggeroff", // compound
    "bollocks to you", // British aggressive

    // ===== ADDITIONAL SLUR VARIATIONS =====

    // N-word extended variations
    "n1g nog", // leet slur
    "nig nog", // slur compound
    "nignог", // Cyrillic о variant
    "niggardly", // near-homophone (controversial)
    "nigglet", // diminutive slur
    "jiggaboos", // plural
    "nignog", // compound slur

    // Homophobic extended variations
    "battyboy", // homophobic
    "batty boy", // homophobic spaced
    "battyman", // homophobic
    "batty man", // homophobic spaced
    "chi chi man", // homophobic
    "chichiman", // homophobic compound
    "fudge packer", // spaced
    "fudgepackers", // plural
    "uphill gardener", // homophobic euphemism
    "uphillgardener", // compound
    "bender", // British homophobic
    "benders", // plural
    "bent", // British homophobic
    "buftie", // Scottish homophobic
    "bufty", // Scottish homophobic
    "woofter", // British homophobic
    "wooftah", // British homophobic

    // Racial slur extended variations
    "ch1nk", // leet
    "ch!nk", // symbol
    "ch!nks", // symbol plural
    "g00k", // leet
    "g0ok", // partial leet
    "k!ke", // symbol
    "k1ke", // leet
    "k1kes", // leet plural
    "sp!c", // symbol
    "sp!ck", // symbol
    "sp1c", // leet
    "w3tback", // leet
    "w3tbacks", // leet plural
    "b3aner", // leet
    "b3aners", // leet plural
    "crakka", // alternate spelling
    "cracka", // alternate spelling
    "cr@cker", // symbol
    "p@ki", // symbol
    "p@kis", // symbol plural
    "p4ki", // leet
    "p4kis", // leet plural
    "r3dskin", // leet
    "t0welhead", // leet
    "r4ghead", // leet
    "c00n", // leet
    "c0on", // partial leet
    "c00ns", // leet plural
    "j!gaboo", // symbol
    "j1gaboo", // leet

    // Transphobic slurs
    "trannies", // plural
    "heshe", // transphobic compound
    "he-she", // transphobic hyphenated
    "shemales", // plural
    "ladyboy", // derogatory
    "ladyboys", // plural

    // ===== ADDITIONAL FILTER EVASION PATTERNS =====

    // Words with repeating characters (elongation evasion)
    "fuuuuuck", // extra elongated
    "shiiit", // elongated i
    "shiiiiit", // extra elongated
    "biiiitch", // elongated i
    "assssss", // elongated s
    "diiick", // elongated i
    "cuuunt", // elongated u
    "niggger", // elongated g
    "faaag", // elongated a
    "sluuut", // elongated u
    "coooock", // elongated o

    // Words with inserted characters (padding evasion)
    "b.itch", // inserted dot
    "bi.tch", // inserted dot
    "c.unt", // inserted dot
    "cu.nt", // inserted dot
    "a.ss", // inserted dot
    "d.ick", // inserted dot
    "di.ck", // inserted dot
    "c.ock", // inserted dot
    "co.ck", // inserted dot
    "n.igger", // inserted dot
    "ni.gger", // inserted dot
    "nig.ger", // inserted dot
    "nigg.er", // inserted dot
    "f/uck", // inserted slash
    "s/hit", // inserted slash
    "b/itch", // inserted slash
    "c/unt", // inserted slash
    "d/ick", // inserted slash
    "c/ock", // inserted slash

    // Mixed case common evasions (for case-insensitive matching reference)
    "cOcK", // mixed case evasion for cock

    // Reversed/scrambled (common deliberate ones)
    "kcuf", // reversed fuck
    "tihs", // reversed shit

    // ===== ABBREVIATION AND ACRONYM EVASIONS =====
    "wthf", // rearranged wtf
    "rtfm", // read the fucking manual
    "snafu", // situation normal all fucked up
    "bohica", // bend over here it comes again
    "lmfaooo", // elongated
    "lmaoo", // elongated
    "roflmfao", // compound acronym
    "pmsl", // pissing myself laughing
    "ctfu", // cracking the fuck up
    "btfo", // blown the fuck out
    "dtf", // down to fuck
    "nsfW", // not safe for work
    "smfd", // suck my fucking dick
    "kmsl", // killing myself laughing
    "smd", // suck my dick
    "bfd", // big fucking deal
    "mfing", // motherfucking abbreviated
    "mfker", // motherfucker abbreviated

    // ===== ADDITIONAL SEXUAL TERM EVASIONS =====
    "p0rno", // leet
    "p0rnography", // leet
    "pr0nz", // leet plural
    "pr0no", // leet
    "b00b", // leet
    "b00bies", // leet
    "b00bz", // leet
    "b0obs", // leet
    "bewbs", // phonetic
    "bewbz", // phonetic
    "t1ts", // leet
    "t1tties", // leet
    "t!ts", // symbol
    "t!tties", // symbol
    "d1ldo", // leet
    "d!ldo", // symbol
    "v1brator", // leet
    "vag1na", // leet
    "p3nis", // leet
    "p3n1s", // full leet
    "pen1s", // partial leet
    "pen!s", // symbol
    "cl1t", // leet
    "cl!t", // symbol
    "cl1toris", // leet
    "an4l", // leet
    "an@l", // symbol
    "0rgasm", // leet
    "0rgy", // leet
    "r4pe", // leet
    "r@pe", // symbol
    "r4pist", // leet
    "r@pist", // symbol
    "h0rny", // leet
    "h0rney", // leet misspelling
    "j1zz", // leet
    "j!zz", // symbol
    "cum shot", // spaced
    "creamp1e", // leet
    "bl0wjob", // leet
    "bl0wj0b", // full leet
    "handjb", // abbreviated
    "h4ndjob", // leet
    "rimj0b", // leet
    "b0ner", // leet
    "b0ners", // leet plural
    "er3ction", // leet
    "erect1on", // leet
    "m4sturbate", // leet
    "m@sturbate", // symbol
    "masturb8", // number substitution

    // ===== ADDITIONAL INSULT EVASION SPELLINGS =====
    "r3tard", // leet
    "r3tarded", // leet
    "r3t4rd", // full leet
    "ret4rd", // partial leet
    "re+ard", // symbol
    "r*tard", // asterisk
    "r*tarded", // asterisk
    "cr1pple", // leet
    "sp4stic", // leet
    "sp@stic", // symbol
    "sp4z", // leet
    "sp@z", // symbol
    "m0r0n", // leet
    "1mb3cile", // leet
    "1mbecile", // partial leet

    // ===== ADDITIONAL COMPOUND PHRASES =====
    "burn in hell", // aggressive phrase
    "burninhell", // compound
    "rot in hell", // aggressive phrase
    "rotinhell", // compound
    "damn you", // mild aggressive
    "damnyou", // compound
    "screw this", // aggressive
    "screwthis", // compound
    "frigoff", // euphemistic compound
    "frig off", // euphemistic spaced
    "eff off", // euphemistic spaced
    "eff you", // euphemistic spaced
    "f.u.", // dotted abbreviation
    "f-u", // hyphenated
    "s t f u", // spaced
    "g t f o", // spaced
    "w t f", // spaced
    "k y s", // spaced (kill yourself)
    "k.y.s", // dotted
    "k-y-s", // hyphenated

    // ===== PHONETIC SPELLING EVASIONS =====
    "eff u see kay", // spelled out fuck
    "see you next tuesday", // spelled out cunt
    "ess aych eye tee", // spelled out shit
    "ay ess ess", // spelled out ass
    "bee eye tee see aych", // spelled out bitch

    // ===== ADDITIONAL DRUG-RELATED INSULTS =====
    "crack whore", // spaced variant
    "meth whore", // compound
    "methwhore", // compound
    "smackhead", // drug user insult
    "smackheads", // plural
    "crackho", // compound
    "dope fiend", // drug user insult
    "dopefiend", // compound

    // ===== ADDITIONAL VIOLENT/THREATENING =====
    "curb stomp", // violent act
    "curbstomp", // compound
    "curbstomping", // gerund
    "die slow", // threat
    "dieslow", // compound
    "choke on it", // aggressive
    "i hope you die", // threat
    "ihopeyoudie", // compound
    "hope you die", // threat
    "hopeyoudie", // compound
    "get cancer", // aggressive
    "getcancer", // compound

    // ===== SYMBOL-HEAVY EVASIONS =====
    "f#ck", // hash substitution
    "f#cking", // hash compound
    "f#cker", // hash compound
    "sh#t", // hash substitution
    "b#tch", // hash substitution
    "d#ck", // hash substitution
    "c#ck", // hash substitution
    "c#nt", // hash substitution
    "n#gger", // hash substitution
    "n#gga", // hash substitution
    "a##", // hash substitution
    "wh#re", // hash substitution
    "sl#t", // hash substitution
    "f@ck", // at substitution
    "f@cking", // at compound
    "f@cker", // at compound
    "@sshat", // at compound
    "@ssclown", // at compound
    "@ssface", // at compound
    "$h!tty", // dollar + symbol
    "$h!tstain", // dollar + symbol compound
    "$h!thead", // dollar + symbol compound
    "$h!thole", // dollar + symbol compound
    "$h!tface", // dollar + symbol compound
    "$kank", // dollar substitution
    "$luts", // dollar plural

    // ===== ADDITIONAL MODERN SLANG / INTERNET =====
    "degenerate", // internet insult
    "neckbeard", // internet insult
    "simp", // modern insult
    "simping", // modern insult gerund
    "cuck", // modern insult
    "cucks", // plural
    "cuckold", // sexual insult
    "cucked", // past tense
    "cucking", // gerund
    "cuckboy", // compound
    "beta male", // modern insult
    "betamale", // compound
    "soyboy", // modern insult
    "triggered", // mocking term
    "landwhale", // body-shaming
    "land whale", // body-shaming spaced
    "femoid", // incel terminology
    "foid", // incel terminology
    "roastie", // incel terminology
    "manlet", // body-shaming
    "dicklet", // body-shaming
    "coomer", // internet insult
    "coomers", // plural
    "cooming", // gerund
    "gooner", // internet insult
    "gooning", // gerund
    "based retard", // compound internet insult
    "cope", // dismissive internet term
    "seethe", // dismissive internet term
    "copium", // internet mocking
    "dilate", // transphobic internet slang
    "an hero", // suicide reference meme
    "anhero", // suicide reference compound
    "rope yourself", // suicide reference
    "ropeyourself", // compound

    // ===== WORD BOUNDARY EVASION (no spaces) =====
    "pissbrain", // compound insult
    "pissdrinker", // compound insult
    "bellendface", // compound insult
    "twatfaced", // compound
    "arsefaced", // compound
    "pissbreath", // compound insult
    "shitbreathed", // compound
    "dickbreathed", // compound
    "cumbreath", // compound insult
    "cuntbreath", // compound insult

    // ===== EMOJI DESCRIPTION EVASIONS (text versions) =====
    "middle finger", // gesture
    "flip the bird", // gesture phrase
    "flipthebird", // compound
    "the finger", // gesture

    // ===== ADDITIONAL MISSED COMMON WORDS =====
    "wankered", // British drunk/insult
    "bollixed", // British ruined
    "knackered", // British exhausted (mild)
    "bloody", // British mild profanity
    "dammit", // mild profanity
    "crapstain", // compound insult
    "crapweasel", // compound insult
    "scumbucket", // compound insult
    "sleazeball", // compound insult
    "buttpirate", // compound insult
    "butt pirate", // spaced
    "turd", // mild profanity
    "turdbrain", // compound insult
    "turdmuncher", // compound insult
    "turdwhistle", // compound insult
    "douchewaffle", // compound insult
    "douchefart", // compound insult
    "assbucket", // compound insult
    "asscandle", // compound insult
    "assmaggot", // compound insult
    "dickmaggot", // compound insult
    "shitmaggot", // compound insult
    "cumwipe", // compound insult
    "jizzwipe", // compound insult
    "slutpuppy", // compound insult
    "whorefaced", // compound insult
    "pisstaker", // British compound
    "pisstaking", // British compound

    // ===== ADDITIONAL LEET SPEAK COMBINATIONS =====
    "4ss", // full leet a
    "4ssh0le", // full leet
    "4$$h0l3", // full leet + symbols
    "b!7ch", // symbol + leet
    "c0c|<", // pipe + angle bracket
    "d1c|<", // pipe + angle bracket
    "n1qq4", // leet + q substitution
    "n1qq3r", // leet + q substitution
    "ph4g", // leet ph
    "ph4gg07", // full leet ph
    "pu$$1", // dollar + leet
    "pu$$13s", // dollar + leet plural
    "r3+ard", // leet + symbol
    "r3+4rd", // full leet + symbol
    "sh!+", // symbol substitution
    "sh!7", // symbol + leet
    "$h!7", // dollar + symbol + leet
    "w4nk3r", // full leet
    "wh0r3s", // leet plural
    "a$sh0le", // mixed symbols
    "@$$h0l3", // full symbol + leet
    "b00bj0b", // leet compound
    "bl0wj0bs", // leet plural
    "c0cksuck3r", // leet compound
    "d1ckh3ad", // leet compound
    "f4gg07s", // leet plural
    "m07h3rfuck3r", // leet compound
    "n1gg3rs", // leet plural

    // Wikipedia profanity list - additional entries
    "chicken shit", // cowardly (compound)
    "ching chong", // anti-Asian slur
    "chingchong", // anti-Asian slur
    "crap", // mild expletive
    "damnation", // religious curse
    "enshittification", // degradation of platforms
    "healslut", // gaming sexual slur
    "hori", // anti-Polynesian slur (NZ)
    "jesus fucking christ", // blasphemous compound
    "niggerhead", // racial slur compound
    "pajeet", // anti-Indian slur
    "polaco", // ethnic slur (against Poles/Brazilians)
    "ratfucking", // political sabotage slur
    "taking the piss", // British vulgar idiom
    "take the piss", // British vulgar idiom
    "unclefucker", // compound insult
    "uncle fucker", // compound insult spaced
    "shitposting", // internet vulgar term
    "shitpost", // internet vulgar term
    "shitposter", // internet vulgar term
    "serving cunt", // vulgar slang
    "russian warship go fuck yourself", // wartime phrase

    // Racial/ethnic slurs - comprehensive coverage
    // (excluding words with common innocent meanings: slope, frog, nip, banana, coconut, oreo, kebab, septic, taffy, jock, tinker, mongrel, mammy, hun, jerry, paddy, yank, hunky, knacker)
    "slopehead", // anti-Asian slur compound
    "sand nigger", // anti-Arab slur
    "sand niggers", // anti-Arab slur plural
    "sandniggers", // anti-Arab slur compound plural
    "yid", // anti-Jewish slur
    "yids", // anti-Jewish slur plural
    "hymie", // anti-Jewish slur
    "hymies", // anti-Jewish slur plural
    "hymietown", // anti-Jewish slur compound
    "shylock", // anti-Jewish slur
    "shylocks", // anti-Jewish slur plural
    "gyppo", // anti-Romani slur
    "gyppos", // anti-Romani slur plural
    "gypo", // anti-Romani slur variant
    "cholo", // anti-Mexican slur
    "cholos", // anti-Mexican slur plural
    "chola", // anti-Mexican slur feminine
    "eurotrash", // anti-European slur
    "camel jockeys", // anti-Arab slur plural
    "prairie nigger", // anti-Native American slur
    "timber nigger", // anti-Native American slur
    "jungle bunnies", // anti-Black slur plural
    "porch monkeys", // anti-Black slur plural
    "moon cricket", // anti-Black slur
    "mudshark", // interracial slur
    "race traitor", // white supremacist slur
    "subhuman", // dehumanizing slur
    "subhumans", // dehumanizing slur plural
    "untermensch", // Nazi dehumanizing slur
    "untermenschen", // Nazi dehumanizing slur plural
    "shitskins", // racist slur plural
    "house nigger", // anti-Black slur
    "field nigger", // anti-Black slur
    "spear chucker", // anti-Black slur
    "pickaninnies", // anti-Black slur plural
    "quadroon", // racist term
    "octoroon", // racist term
    "half caste", // anti-mixed-race slur
    "halfcaste", // anti-mixed-race slur
    "currymuncher", // anti-South Asian slur
    "goatfucker", // anti-Middle Eastern slur
    "goat fucker", // anti-Middle Eastern slur
    "remove kebab", // anti-Muslim/anti-Balkan hate phrase
    "dune coon", // anti-Arab slur
    "dunecoon", // anti-Arab slur compound
    "border hopper", // anti-Mexican slur
    "fenian", // anti-Irish Catholic slur
    "fenians", // anti-Irish Catholic slur plural
    "proddy", // anti-Protestant slur
    "pikeys", // anti-Traveller/Romani slur plural
    "didicoy", // anti-Romani slur
    "gippo", // anti-Romani slur
    "bohunk", // anti-Eastern European slur
    "polack", // anti-Polish slur
    "polacks", // anti-Polish slur plural
    "russki", // anti-Russian slur
    "russkies", // anti-Russian slur plural
    "trailer trash", // classist slur
    "knuckle dragger", // racist slur
    "coal burner", // interracial slur
    "mud people", // white supremacist slur
    "anchor baby", // anti-immigrant slur
    "fence jumper", // anti-Mexican slur
    "border bunny", // anti-Mexican slur
    "half breed", // anti-mixed-race slur
    "dot head", // anti-Indian slur
    "orangeman", // sectarian slur
    "commie", // political slur
    "commies", // political slur plural
    "pinko", // political slur
    "pinkos", // political slur plural
    "cheese eating surrender monkey", // anti-French slur

    // ===== COMPOUND INSULTS (adjective+noun) =====
    "stupid fuck",
    "stupidfuck",
    "stupid cunt",
    "stupidcunt",
    "stupid whore",
    "stupidwhore",
    "stupid slut",
    "stupidslut",
    "stupid dick",
    "stupiddick",
    "stupid prick",
    "stupidprick",
    "stupid twat",
    "stupidtwat",
    "stupid cow",
    "stupidcow",
    "stupid pig",
    "stupidpig",
    "stupid turd",
    "stupidturd",
    "stupid wanker",
    "stupidwanker",
    "ugly fuck",
    "uglyfuck",
    "ugly cunt",
    "uglycunt",
    "ugly whore",
    "uglywhore",
    "ugly slut",
    "uglyslut",
    "ugly bitch",
    "uglybitch",
    "ugly cow",
    "uglycow",
    "ugly twat",
    "uglytwat",
    "ugly pig",
    "uglypig",
    "ugly bastard",
    "uglybastard",
    "fat fuck",
    "fatfucker",
    "fat cunt",
    "fatcunt",
    "fat bitch",
    "fatbitch",
    "fat whore",
    "fatwhore",
    "fat slut",
    "fatslut",
    "fat cow",
    "fatcow",
    "fat pig",
    "fatpig",
    "fat twat",
    "fattwat",
    "fat prick",
    "fatprick",
    "fat turd",
    "fatturd",
    "fat bastard",
    "fatbastard",
    "dumb cunt",
    "dumbcunt",
    "dumb whore",
    "dumbwhore",
    "dumb slut",
    "dumbslut",
    "dumb twat",
    "dumbtwat",
    "dumb prick",
    "dumbprick",
    "dumb cow",
    "dumbcow",
    "dumb pig",
    "dumbpig",
    "dumb turd",
    "dumbturd",
    "dumb bastard",
    "dumbbastard",
    "dirty fuck",
    "dirtyfuck",
    "dirty cunt",
    "dirtycunt",
    "dirty whore",
    "dirtywhore",
    "dirty slut",
    "dirtyslut",
    "dirty bitch",
    "dirtybitch",
    "dirty bastard",
    "dirtybastard",
    "dirty skank",
    "dirtyskank",
    "dirty pig",
    "dirtypig",
    "dirty tramp",
    "dirtytramp",
    "dirty hoe",
    "dirtyhoe",
    "nasty bitch",
    "nastybitch",
    "nasty whore",
    "nastywhore",
    "nasty slut",
    "nastyslut",
    "nasty cunt",
    "nastycunt",
    "nasty fuck",
    "nastyfuck",
    "nasty skank",
    "nastyskank",
    "nasty pig",
    "nastypig",
    "nasty bastard",
    "nastybastard",
    "nasty hoe",
    "nastyhoe",
    "filthy fuck",
    "filthyfuck",
    "filthy cunt",
    "filthycunt",
    "filthy whore",
    "filthywhore",
    "filthy slut",
    "filthyslut",
    "filthy bitch",
    "filthybitch",
    "filthy bastard",
    "filthybastard",
    "filthy pig",
    "filthypig",
    "filthy skank",
    "filthyskank",
    "filthy animal",
    "filthyanimal",
    "filthy hoe",
    "filthyhoe",
    "lazy fuck",
    "lazyfuck",
    "lazy cunt",
    "lazycunt",
    "lazy bitch",
    "lazybitch",
    "lazy bastard",
    "lazybastard",
    "lazy prick",
    "lazyprick",
    "lazy twat",
    "lazytwat",
    "lazy slob",
    "lazyslob",
    "cheap whore",
    "cheapwhore",
    "cheap slut",
    "cheapslut",
    "cheap skank",
    "cheapskank",
    "crazy fuck",
    "crazyfuck",
    "crazy cunt",
    "crazycunt",
    "crazy bastard",
    "crazybastard",
    "sick fuck",
    "sickfuck",
    "sick bastard",
    "sickbastard",
    "sick cunt",
    "sickcunt",
    "sick pervert",
    "sickpervert",
    "worthless fuck",
    "worthlessfuck",
    "worthless cunt",
    "worthlesscunt",
    "worthless bitch",
    "worthlessbitch",
    "worthless whore",
    "worthlesswhore",
    "worthless piece of shit",
    "worthless turd",
    "worthlessturd",
    "worthless bastard",
    "worthlessbastard",
    "pathetic fuck",
    "patheticfuck",
    "pathetic cunt",
    "patheticcunt",
    "pathetic loser",
    "patheticloser",
    "pathetic bitch",
    "patheticbitch",
    "pathetic bastard",
    "patheticbastard",
    "useless fuck",
    "uselessfuck",
    "useless cunt",
    "uselesscunt",
    "useless bitch",
    "uselessbitch",
    "useless twat",
    "uselesstwat",
    "useless prick",
    "uselessprick",
    "useless bastard",
    "uselessbastard",
    "little fuck",
    "littlefuck",
    "little shit",
    "littleshit",
    "little prick",
    "littleprick",
    "little dick",
    "littledick",
    "little cunt",
    "littlecunt",
    "little twat",
    "littletwat",
    "little wanker",
    "littlewanker",
    "bloody idiot",
    "bloodyidiot",
    "bloody fool",
    "bloodyfool",
    "bloody wanker",
    "bloodywanker",
    "bloody tosser",
    "bloodytosser",
    "bloody bastard",
    "bloodybastard",
    "bloody muppet",
    "bloodymuppet",
    "absolute cunt",
    "absolutecunt",
    "absolute twat",
    "absolutetwat",
    "absolute wanker",
    "absolutewanker",
    "absolute bellend",
    "absolutebellend",
    "total dickhead",
    "totaldickhead",
    "total prick",
    "totalprick",
    "total cunt",
    "totalcunt",
    "total wanker",
    "totalwanker",
    "total twat",
    "totaltwat",
    "complete twat",
    "completetwat",
    "complete cunt",
    "completecunt",
    "complete wanker",
    "completewanker",
    "utter cunt",
    "uttercunt",
    "utter twat",
    "uttertwat",
    "utter bellend",
    "utterbellend",
    "massive cunt",
    "massivecunt",
    "massive twat",
    "massivetwat",
    "massive dickhead",
    "massivedickhead",
    "right cunt",
    "rightcunt",
    "right twat",
    "righttwat",
    "right bellend",
    "rightbellend",
    "proper cunt",
    "propercunt",
    "proper twat",
    "propertwat",
    "proper bellend",
    "properbellend",
    "fucking idiot",
    "fuckingidiot",
    "fucking moron",
    "fuckingmoron",
    "fucking loser",
    "fuckingloser",
    "fucking retard",
    "fuckingretard",
    "fucking bitch",
    "fuckingbitch",
    "fucking cunt",
    "fuckingcunt",
    "fucking whore",
    "fuckingwhore",
    "fucking slut",
    "fuckingslut",
    "fucking pig",
    "fuckingpig",
    "fucking bastard",
    "fuckingbastard",
    "fucking twat",
    "fuckingtwat",
    "fucking prick",
    "fuckingprick",
    "fucking dickhead",
    "fuckingdickhead",
    "fucking wanker",
    "fuckingwanker",
    "fucking tosser",
    "fuckingtosser",
    "fucking bellend",
    "fuckingbellend",
    "fucking clown",
    "fuckingclown",
    "fucking donkey",
    "fuckingdonkey",
    "fucking waste",
    "fuckingwaste",
    "fucking scum",
    "fuckingscum",
    "goddamn idiot",
    "goddamnidiot",
    "goddamn fool",
    "goddamnfool",
    "goddamn bastard",
    "goddamnbastard",
    // ===== YOUR MOM/DAD VARIANTS =====
    "your mom",
    "your mum",
    "your mama",
    "your mother",
    "yourmom",
    "yourmum",
    "yourmama",
    "yourmother",
    "ur mom",
    "ur mum",
    "ur mama",
    "urmom",
    "urmum",
    "urmama",
    "ya mom",
    "ya mum",
    "yamom",
    "yamum",
    "yo momma",
    "yomomma",
    "your mom is a whore",
    "your mom is a slut",
    "your mum is a slag",
    "your mom sucks",
    "your mum sucks",
    "your dad",
    "your father",
    "yourdad",
    "ur dad",
    "urdad",
    "ya dad",
    "your momma so fat",
    "your mama so ugly",
    "yo mama so stupid",
    "your moms a hoe",
    "your mums a hoe",
    "your mum is a hoe",
    "your mom is a hoe",
    "motherlover",
    "motherhumper",
    "mothersucker",
    "motherflicker",
    "mothertrucker",
    // ===== BODY PART VULGARITIES =====
    "assflap",
    "assflaps",
    "assgape",
    "assring",
    "ballhair",
    "beefcurtains",
    "beef curtains",
    "bellendcheese",
    "bungholio",
    "buttflap",
    "buttflaps",
    "cameltoeing",
    "cockvein",
    "cockwart",
    "cuntjuice",
    "cuntlip",
    "cuntwart",
    "dickskin",
    "dicksweat",
    "dickvein",
    "fanny",
    "fannies",
    "fannyflap",
    "fannyflaps",
    "foreskin",
    "grundle",
    "knobcheese",
    "ladybits",
    "mangina",
    "mansausage",
    "meatcurtains",
    "meat curtains",
    "nutsac",
    "perineum",
    "shlong",
    "stiffy",
    "stiffie",
    "teats",
    "todger",
    "trouser snake",
    "trousersnake",
    "vajayjay",
    "vajazzle",
    "vagene",
    "vag",
    "wanger",
    "weenie",
    "winky",
    "winkle",
    // ===== SEXUAL ACT DESCRIPTIONS =====
    "analplay",
    "anal play",
    "analsex",
    "anal sex",
    "analfuck",
    "anal fuck",
    "analfucking",
    "anal fucking",
    "assfucking",
    "ass fucking",
    "asslicking",
    "ass licking",
    "ass to mouth",
    "asstomouth",
    "ballbusting",
    "ball busting",
    "ballgagged",
    "ball gagged",
    "booty call",
    "bootycall",
    "brownshower",
    "brown shower",
    "bukakke",
    "bumfucking",
    "bum fucking",
    "camming",
    "choking the chicken",
    "circle jerk",
    "circlejerking",
    "cockgobbling",
    "cock gobbling",
    "cockriding",
    "cock riding",
    "cockslapping",
    "cock slapping",
    "cockstroking",
    "cock stroking",
    "cock sucking",
    "cuminmyface",
    "cum in my face",
    "cumonme",
    "cum on me",
    "cumswap",
    "cum swap",
    "cumswapping",
    "cum swapping",
    "deep throating",
    "donkey punch",
    "double penetration",
    "dry hump",
    "dryhump",
    "dry humping",
    "dryhumping",
    "eatbox",
    "eat box",
    "eating out",
    "eatingout",
    "erection",
    "facefuck",
    "face fuck",
    "facefucking",
    "face fucking",
    "facesit",
    "face sit",
    "facesitting",
    "face sitting",
    "facial cumshot",
    "feltching",
    "fingerbanging",
    "finger banging",
    "foursome",
    "gang banging",
    "getting head",
    "gettinghead",
    "giving head",
    "givinghead",
    "glory hole",
    "gloryhole",
    "golden shower",
    "goldenshow",
    "goldenshower",
    "group sex",
    "groupsex",
    "hand job",
    "happyending",
    "happy ending",
    "hump",
    "humped",
    "jilling off",
    "jillingoff",
    "lapdance",
    "lap dance",
    "meatspin",
    "meatspins",
    "mouthfuck",
    "mouth fuck",
    "mouthfucking",
    "muffdive",
    "muff dive",
    "muffdiver",
    "muff diver",
    "pearl necklace",
    "pearlnecklace",
    "piledriver",
    "rawdog",
    "raw dog",
    "rawdogging",
    "raw dogging",
    "reach around",
    "reacharound",
    "rim job",
    "sexting",
    "skullfucking",
    "skull fucking",
    "soggy biscuit",
    "soggybiscuit",
    "spitroast",
    "spit roast",
    "spitroasting",
    "squirting",
    "suckoff",
    "suck off",
    "teabagged",
    "teabags",
    "tittyfuck",
    "titty fuck",
    "tittyfucking",
    "threeway",
    "three way",
    "throatfuck",
    "throat fuck",
    "throatfucking",
    "tossing salad",
    "tossingsalad",
    "watersports",
    "water sports",
    "wanked",
    "wankfest",
    // ===== HOMOPHOBIC/TRANSPHOBIC COMPOUNDS =====
    "gaybash",
    "gay bash",
    "gaybashing",
    "gay bashing",
    "gayboy",
    "gay boy",
    "gaytard",
    "gayfag",
    "fag lover",
    "faglover",
    "fag hag",
    "faghag",
    "faggotface",
    "faggotass",
    "dyke lover",
    "dykelover",
    "homoboy",
    "homo lover",
    "homolover",
    "pansyass",
    "sissyboy",
    "sissy boy",
    "rump ranger",
    "rumpranger",
    "turd burglar",
    "chutney ferret",
    "chutneyferret",
    "sausage jockey",
    "sausagejockey",
    "knob jockey",
    "arse bandit",
    "bum bandit",
    "trouser lifter",
    "trouserlifter",
    "she-males",
    "trannys",
    "trannie",
    "dickgirl",
    "dick girl",
    "shim",
    "gender bender",
    "genderbender",
    "hesheit",
    // ===== MISOGYNISTIC TERMS =====
    "cumsponge",
    "cum sponge",
    "cumtarget",
    "cum target",
    "cocktease",
    "cock tease",
    "cockteaser",
    "cock teaser",
    "prick teaser",
    "easy lay",
    "easylay",
    "town bike",
    "townbike",
    "village bicycle",
    "villagebicycle",
    "mattressback",
    "mattress back",
    "maneater",
    "man eater",
    "gold digger",
    "golddigger",
    "feminazi",
    "feminazis",
    "attention whore",
    "attentionwhore",
    "thot patrol",
    "thotpatrol",
    "thots",
    "thotty",
    "basic bitch",
    "basicbitch",
    "ditzy bitch",
    "ditzybitch",
    "bitchmade",
    "bitch made",
    "slutshamer",
    "slut shamer",
    "whoreface",
    "whore face",
    "whoremouth",
    "whore mouth",
    "whoremonger",
    "whore monger",
    "whoreson",
    "hag",
    "old hag",
    "oldhag",
    "old bat",
    "battleaxe",
    "fishwife",
    "ball buster",
    "shrew",
    "harpy",
    "succubus",
    "strumpet",
    // ===== DISABILITY SLURS EXPANDED =====
    "crip",
    "gimp suit",
    "gimpsuit",
    "gimped",
    "gimping",
    "lunatic",
    "lunatics",
    "mental case",
    "mentalcase",
    "mentalist",
    "mong face",
    "mongface",
    "mongoloid",
    "mongoloids",
    "psycho",
    "psychos",
    "nutcase",
    "nutcases",
    "nutjobs",
    "nutter",
    "nutters",
    "freakshow",
    "freak show",
    "dimwit",
    "dimwits",
    "nitwit",
    "nitwits",
    "numbskulls",
    "braindead",
    "brain dead",
    "brainless",
    "idiot",
    "idiots",
    "idiotic",
    "moronic",
    "spaz attack",
    "spazattack",
    "spaz out",
    "spazout",
    "spazzed",
    "spazzed out",
    "spazzing",
    "spazzing out",
    "riding the short bus",
    "short bus",
    "shortbus",
    "drooling idiot",
    "droolingidiot",
    "window licking",
    "windowlicking",
    // ===== RELIGIOUS PROFANITY =====
    "god damn",
    "god dammit",
    "god damn it",
    "godforsaken",
    "jesus christ",
    "jesuschrist",
    "jesus h christ",
    "jesusfuckingchrist",
    "christ on a bike",
    "christonabike",
    "christ on a cracker",
    "christonacracker",
    "holycrap",
    "holy crap",
    "holy hell",
    "holyhell",
    "for christ sake",
    "for gods sake",
    "godless",
    "heathen",
    "heathens",
    "infidel",
    "infidels",
    "blasphemer",
    "blasphemers",
    "heretic",
    "heretics",
    "christkiller",
    "christ killer",
    "christkillers",
    // ===== SCATOLOGICAL TERMS =====
    "anal leakage",
    "analleakage",
    "ass gravy",
    "assgravy",
    "ass juice",
    "assjuice",
    "ass paste",
    "asspaste",
    "ass wipe",
    "brown eye",
    "browneye",
    "bumgravy",
    "bum gravy",
    "butt gravy",
    "buttgravy",
    "butt juice",
    "buttjuice",
    "butt paste",
    "buttpaste",
    "butt nugget",
    "buttnugget",
    "cornlog",
    "corn log",
    "crapfactory",
    "crap factory",
    "crapper",
    "crappers",
    "crapping",
    "crappola",
    "dookie",
    "doody",
    "doodoo",
    "doo doo",
    "fart",
    "farts",
    "farted",
    "farting",
    "fartbag",
    "fartbox",
    "fartbreath",
    "farthead",
    "fartknocker",
    "fartsniffer",
    "fart sniffer",
    "loaf pincher",
    "loafpincher",
    "mudbutt",
    "mud butt",
    "pee pee",
    "peepee",
    "piss artist",
    "pissartist",
    "pissy",
    "poo",
    "pooh",
    "poo poo",
    "poopoo",
    "poop",
    "pooper",
    "pooping",
    "poopy",
    "poop chute",
    "poophead",
    "poop head",
    "poopface",
    "poop face",
    "poopstain",
    "poop stain",
    "prairie dogging",
    "prairiedogging",
    "scat play",
    "scatplay",
    "sharted",
    "sharting",
    "shart",
    "sharts",
    "skidmark",
    "skid mark",
    "skidmarks",
    "skid marks",
    "sphincter",
    "splashback",
    "splash back",
    "stinker",
    "stinkfinger",
    "stink finger",
    "turdcutter",
    "turd cutter",
    "turdhole",
    "turd hole",
    "turdlicker",
    "turd licker",
    "turdsandwich",
    "turd sandwich",
    "wee wee",
    "weewee",
    // ===== DRUG-RELATED INSULTS =====
    "blunt head",
    "blunthead",
    "bonghead",
    "bong head",
    "burnout",
    "crack baby",
    "crackbaby",
    "crack fiend",
    "crackfiend",
    "crack pipe",
    "crackpipe",
    "druggo",
    "druggos",
    "fried brain",
    "friedbrain",
    "meth face",
    "methface",
    "methmouth",
    "meth mouth",
    "needle junkie",
    "needlejunkie",
    "pillpopper",
    "pill popper",
    "reefer head",
    "reeferhead",
    "roach head",
    "roachhead",
    "speed freak",
    "speedfreak",
    "stoner bum",
    "stonerbum",
    "weedhead",
    "weed head",
    // ===== VIOLENT THREATS =====
    "beat the shit out of you",
    "beat your ass",
    "beatyourass",
    "blow your brains out",
    "blowyourbrainsout",
    "break your neck",
    "breakyourneck",
    "bust your face",
    "bustyourface",
    "catch these hands",
    "catchthesehands",
    "choke you",
    "chokeyou",
    "curb stomp you",
    "curbstompyou",
    "cut you",
    "cutyou",
    "cut your throat",
    "cutyourthroat",
    "die in a hole",
    "dieinahole",
    "drop dead",
    "dropdead",
    "eat glass",
    "eatglass",
    "end your life",
    "endyourlife",
    "get shot",
    "getshot",
    "get stabbed",
    "getstabbed",
    "gonna kill you",
    "gonnakill",
    "gut you",
    "gutyou",
    "i will kill you",
    "iwillkillyou",
    "ill kill you",
    "illkillyou",
    "kneecap you",
    "kneecapyou",
    "shoot you",
    "shootyou",
    "skin you alive",
    "skinyoualive",
    "slash your throat",
    "slashyourthroat",
    "smash your face",
    "smashyourface",
    "snap your neck",
    "snapyourneck",
    "stab you",
    "stabyou",
    "stomp your face",
    "stompyourface",
    "strangle you",
    "strangleyou",
    "watch you die",
    "watchyoudie",
    "you deserve to die",
    "youdeservetodie",
    "you should die",
    "youshoulddie",
    "bash your head in",
    "bashyourheadin",
    "beat your face in",
    "beatyourfacein",
    "bite the curb",
    "bitethecurb",
    "blow your head off",
    "blowyourheadoff",
    "break your face",
    "breakyourface",
    "break your legs",
    "breakyourlegs",
    "bury you",
    "buryyou",
    "cap your ass",
    "capyourass",
    "cave your head in",
    "caveyourheadin",
    "crush your skull",
    "crushyourskull",
    "die already",
    "diealready",
    "die bitch",
    "diebitch",
    "dismember you",
    "dismemberyou",
    "drown yourself",
    "drownyourself",
    "eat lead",
    "eatlead",
    "glass you",
    "glassyou",
    "gonna beat you",
    "gonnabeatyou",
    "gonna cut you",
    "gonnacutyou",
    "gonna stab you",
    "gonnastabyou",
    "hope you choke",
    "hopeyouchoke",
    "hope you get cancer",
    "hopeyougetcancer",
    "hope you suffer",
    "hopeyousuffer",
    "hunt you down",
    "huntyoudown",
    "i will find you",
    "iwillfindyou",
    "jump off a cliff",
    "jumpoffacliff",
    "kick your teeth in",
    "kickyourteethin",
    "murder you",
    "murderyou",
    "rip your head off",
    "ripyourheadoff",
    "run you over",
    "runyouover",
    "set you on fire",
    "setyouonfire",
    "shank you",
    "shankyou",
    "six feet under",
    "sixfeetunder",
    "slash you",
    "slashyou",
    "smack you",
    "smackyou",
    "stomp you out",
    "stompyouout",
    "throw hands",
    "throwhands",
    "waste you",
    "wasteyou",
    "wreck you",
    "wreckyou",
    "youre dead",
    "youredead",
    "youre dead meat",
    "youredeadmeat",
    // ===== INTERNET/GAMING TOXICITY =====
    "bot diff",
    "botdiff",
    "braindead player",
    "braindeadplayer",
    "clapped",
    "cringe lord",
    "cringelord",
    "cry more",
    "crymore",
    "cry about it",
    "cryaboutit",
    "delete the game",
    "deletethegame",
    "dog water",
    "dogwater",
    "dumpster fire",
    "dumpsterfire",
    "ez clap",
    "ezclap",
    "ez game",
    "ezgame",
    "ez pz",
    "ezpz",
    "feeder",
    "feeding",
    "free kill",
    "freekill",
    "gamer word",
    "gamerword",
    "garbage player",
    "garbageplayer",
    "gg ez",
    "ggez",
    "get clapped",
    "getclapped",
    "get destroyed",
    "getdestroyed",
    "get good",
    "getgood",
    "get owned",
    "getowned",
    "get rekt",
    "getrekt",
    "get wrecked",
    "getwrecked",
    "git gud",
    "gitgud",
    "go cry",
    "gocry",
    "griefer",
    "griefing",
    "hardstuck",
    "hard stuck",
    "inting",
    "jg diff",
    "jgdiff",
    "kill stealer",
    "killstealer",
    "l bozo",
    "lbozo",
    "l ratio",
    "lratio",
    "low elo",
    "lowelo",
    "lulz",
    "mad cuz bad",
    "madcuzbad",
    "malding",
    "mid diff",
    "middiff",
    "no skill",
    "noskill",
    "noob",
    "noobs",
    "noobie",
    "newb",
    "newbie",
    "owned",
    "powned",
    "pwned",
    "pwn3d",
    "pwnage",
    "ownage",
    "rage quit",
    "ragequit",
    "ragequitter",
    "ratio",
    "ratioed",
    "rekt",
    "rent free",
    "rentfree",
    "skill issue",
    "skillissue",
    "stay mad",
    "staymad",
    "stay pressed",
    "staypressed",
    "sweatlord",
    "sweat lord",
    "sweaty",
    "tilted",
    "top diff",
    "topdiff",
    "touch grass",
    "touchgrass",
    "trash player",
    "trashplayer",
    "trash talk",
    "trashtalk",
    "trashtalker",
    "trashtalking",
    "trolled",
    "trolling",
    "tryhard",
    "try hard",
    "uninstall",
    "washed up",
    "washedup",
    "you suck",
    "yousuck",
    "youre bad",
    "yourebad",
    "youre trash",
    "youretrash",
    "you stink",
    "youstink",
    "zero skill",
    "zeroskill",
    // ===== BRITISH SLANG EXPANDED =====
    "bawbag",
    "bampot",
    "barmpot",
    "bell whiff",
    "bellwhiff",
    "bogoff",
    "bog off",
    "bugger all",
    "buggerall",
    "cheeky git",
    "cheekygit",
    "cheeky sod",
    "cheekysod",
    "codswallop",
    "daft cow",
    "daftcow",
    "daft git",
    "daftgit",
    "daft twat",
    "dafttwat",
    "div",
    "divvy",
    "eejit",
    "fanny about",
    "fannyabout",
    "get knotted",
    "getknotted",
    "get stuffed",
    "getstuffed",
    "gobshites",
    "jammy git",
    "jammygit",
    "jammy bastard",
    "jammybastard",
    "jessie",
    "jobbie",
    "knob cheese",
    "mangy git",
    "mangygit",
    "meff",
    "midden",
    "ming",
    "minging",
    "numpty",
    "numptie",
    "numpties",
    "old fart",
    "oldfart",
    "pilchard",
    "plank",
    "ponce about",
    "ponceabout",
    "prat",
    "prats",
    "pratt",
    "ratarsed",
    "rat arsed",
    "scally",
    "scallywag",
    "scrotes",
    "slappers",
    "slag off",
    "slagoff",
    "slagging",
    "smarmy git",
    "smarmygit",
    "swine",
    "tit head",
    "tithead",
    "toerags",
    "tossers",
    "tossing",
    "toss off",
    "tossoff",
    "twits",
    "wally",
    "wallies",
    "wazzocks",
    "whinger",
    "wingnut",
    "yob",
    "yobbo",
    "yobbos",
    // ===== AUSTRALIAN SLANG EXPANDED =====
    "bludger",
    "bludgers",
    "boofhead",
    "boofheads",
    "bush pig",
    "bushpig",
    "deadset drongo",
    "deadsetdrongo",
    "dipstick",
    "dipsticks",
    "dero",
    "deros",
    "dickwit",
    "dickwits",
    "dingbat",
    "dingbats",
    "dropkick",
    "dropkicks",
    "festy",
    "flamin galah",
    "flamingalah",
    "galah",
    "galahs",
    "hoon",
    "hoons",
    "mongrel",
    "mongrels",
    "no hoper",
    "nohoper",
    "piss weak",
    "pissweak",
    "ratbags",
    "shit stirrer",
    "shitstirrer",
    "show pony",
    "showpony",
    "silly bugger",
    "sillybugger",
    "sook",
    "sooks",
    "wowser",
    "wowsers",
    // ===== LEETSPEAK VARIANTS EXPANDED =====
    "4$$",
    "4ssh0l3",
    "b!tch3s",
    "b1tch3s",
    "b4st4rd",
    "b4stard",
    "ba5tard",
    "c0cksuck4",
    "c0nts",
    "cum5hot",
    "d!ckh34d",
    "d1ckh34d",
    "d1ckw33d",
    "d1ldos",
    "f@gg0ts",
    "f4gg0ts",
    "fck3r",
    "fcuk3r",
    "fuk3r",
    "fukk3r",
    "h00k3r",
    "h0m0",
    "k1ll y0urs3lf",
    "m0th3rfuck3r",
    "m0th4fuck4",
    "n!gg@",
    "n!gg@s",
    "n1664z",
    "n1gg@",
    "n1gg@z",
    "p3d0",
    "p3d0ph1l3",
    "p3rv",
    "pr0st1tut3",
    "r4c1st",
    "r4p3",
    "r4p3d",
    "r4p1st",
    "s3x",
    "s3xy",
    "sh!tb4g",
    "sh!th34d",
    "sh1tb4g",
    "sh1th34d",
    "sk4nky",
    "sl4g",
    "sl4gs",
    "w4nk3rs",
    // ===== UNICODE HOMOGLYPHS EXPANDED =====
    "bіtсh",
    "сoсk",
    "сum",
    "dіск",
    "fuск",
    "nіggа",
    "рuѕѕу",
    "ѕlut",
    "whоrе",
    "fаggоt",
    "rеtаrd",
    "bаstаrd",
    "wаnkеr",
    "tоssеr",
    // ===== SPACING/PUNCTUATION EVASIONS =====
    "a.s.s.h.o.l.e",
    "a-s-s-h-o-l-e",
    "a_s_s_h_o_l_e",
    "c.o.c.k.s.u.c.k.e.r",
    "c-o-c-k-s-u-c-k-e-r",
    "d.i.c.k.h.e.a.d",
    "d-i-c-k-h-e-a-d",
    "f-a-g-g-o-t",
    "m.o.t.h.e.r.f.u.c.k.e.r",
    "r.e.t.a.r.d",
    "r-e-t-a-r-d",
    "s.h.i.t.h.e.a.d",
    "w.a.n.k.e.r",
    "w-a-n-k-e-r",
    "f u c k e r",
    "c o c k s u c k e r",
    "d i c k h e a d",
    "m o t h e r f u c k e r",
    "s h i t h e a d",
    "w a n k e r",
    "r e t a r d",
    "a s s h o l e",
    // ===== ABBREVIATION PROFANITY =====
    "bamf",
    "dgaf",
    "fbgm",
    "fwb",
    "gtfoh",
    "kma",
    "kmfa",
    "nfw",
    "roflmao",
    "sfu",
    "stfa",
    "syfm",
    "tfu",
    "wgaf",
    "wtaf",
    "mfg",
    // ===== PHONETIC SPELLINGS EXPANDED =====
    "dee eye see kay",
    "double you aitch oh are ee",
    "eff ay gee",
    "en eye gee gee ee are",
    "see oh see kay",
    "pee you ess ess why",
    "ess ell you tee",
    "are ee tee ay are dee",
    "fyoo see kay",
    "sheet",
    "coq",
    "kawk",
    "hoor",
    "whoor",
    "hoer",
    "shlut",
    "fark",
    "farking",
    "farked",
    "fahking",
    "fouck",
    "btch",
    "whr",
    "hrny",
    "prn",
    // ===== ADDITIONAL COMPOUND INSULTS =====
    "arse licker",
    "arsemonger",
    "arse monger",
    "assbandito",
    "assblaster",
    "ass blaster",
    "assburglar",
    "ass burglar",
    "asscracker",
    "ass cracker",
    "assgrinder",
    "ass grinder",
    "assmaster",
    "ass master",
    "asspumper",
    "ass pumper",
    "assrammer",
    "ass rammer",
    "assreamer",
    "ass reamer",
    "asssmeller",
    "ass smeller",
    "bitch tits",
    "bitchwork",
    "bitch work",
    "cock breath",
    "cock juggler",
    "cockjuggler",
    "cock knocker",
    "cockknocker",
    "cock monster",
    "cockmonster",
    "cock wallet",
    "cockwallet",
    "cum bucket",
    "cumbucket",
    "cum gargler",
    "cumgargler",
    "cum gobbler",
    "cumgobbler",
    "cum junkie",
    "cumjunkie",
    "cum queen",
    "cumqueen",
    "cunt bubble",
    "cuntbubble",
    "cunt cake",
    "cuntcake",
    "cunt muscle",
    "cuntmuscle",
    "cunt nugget",
    "cuntnugget",
    "cunt stain",
    "cuntstain",
    "dick biscuit",
    "dickbiscuit",
    "dick fingers",
    "dickfingers",
    "dick gobbler",
    "dickgobbler",
    "dick lips",
    "dicklips",
    "dick stain",
    "dickstain",
    "dick weasel",
    "dickweasel",
    "douche monkey",
    "douchemonkey",
    "douche rocket",
    "doucherocket",
    "fuck bucket",
    "fuckbucket",
    "fuck chop",
    "fuckchop",
    "fuck hat",
    "fuckhat",
    "fuck knocker",
    "fuckknocker",
    "fuck muffin",
    "fuckmuffin",
    "fuck noodle",
    "fucknoodle",
    "fuck puppet",
    "fuckpuppet",
    "fuck sack",
    "fucksack",
    "fuck trophy",
    "fucktrophy",
    "jizz bucket",
    "jizzbucket",
    "jizz monkey",
    "jizzmonkey",
    "piss bag",
    "pissbag",
    "shit hawk",
    "shithawk",
    "slut muffin",
    "slutmuffin",
    "turd blossom",
    "turdblossom",
    "turd bucket",
    "turdbucket",
    "turd waffle",
    "turdwaffle",
    "twat rocket",
    "twatrocket",
    // ===== ADDITIONAL EVASION PATTERNS =====
    "a$$clown",
    "a$$face",
    "a$$hat",
    "a$$licker",
    "a$$munch",
    "b!tch3z",
    "c0cksuk4",
    "c0cksuk3r",
    "c*m",
    "c*mshot",
    "c*mslut",
    "d!ckwad",
    "d!ckface",
    "d*ckhead",
    "f*ckface",
    "f*ckhead",
    "f*ckwit",
    "h*e",
    "m*therfucker",
    "m*therf*cker",
    "p*rn",
    "r*pe",
    "r*pist",
    "s*ck my d*ck",
    "s*ut",
    "sh*thead",
    "sh*thole",
    "sk*nk",
    "t*ts",
    "tw*t",
    "w*nk",
    "w*nker",
    // ===== ADDITIONAL VULGAR PHRASES =====
    "bend over",
    "bendover",
    "blow your load",
    "blowyourload",
    "bust a nut",
    "bustanut",
    "choke on a dick",
    "chokeonadick",
    "cum in me",
    "cuminme",
    "cum inside",
    "cuminside",
    "eat me out",
    "eatmeout",
    "eat my cock",
    "eatmycock",
    "eat my pussy",
    "eatmypussy",
    "finger me",
    "fingerme",
    "fist me",
    "fistme",
    "get on your knees",
    "getonyourknees",
    "lick my balls",
    "lickmyballs",
    "lick my clit",
    "lickmyclit",
    "lick my dick",
    "lickmydick",
    "lick my pussy",
    "lickmypussy",
    "pound my ass",
    "poundmyass",
    "ride my dick",
    "ridemydick",
    "ride my face",
    "ridemyface",
    "sit on my face",
    "sitonmyface",
    "spread your legs",
    "spreadyourlegs",
    "suck my balls",
    "suckmyballs",
    "suck my clit",
    "suckmyclit",
    "suck my tits",
    "suckmytits",
    "take it up the ass",
    "takeituptheass",
    "up the ass",
    "uptheass",
    // ===== MODERN INTERNET SLANG =====
    "autist",
    "autists",
    "autistic screeching",
    "basement dweller",
    "basementdweller",
    "brainlet",
    "brainlets",
    "butthurt",
    "butt hurt",
    "clout chaser",
    "cloutchaser",
    "coomer brain",
    "coomerbrain",
    "cum brain",
    "cumbrain",
    "degen",
    "degens",
    "doxxed",
    "doxxing",
    "e-thot",
    "ethot",
    "e-whore",
    "ewhore",
    "fake and gay",
    "fakeandgay",
    "fat neckbeard",
    "fatneckbeard",
    "femcel",
    "gammon",
    "inbred",
    "keyboard warrior",
    "keyboardwarrior",
    "kek",
    "kekw",
    "libtard",
    "libtards",
    "lolcow",
    "lolcows",
    "mald",
    "man child",
    "manchild",
    "man children",
    "manchildren",
    "mouth breather",
    "mouthbreather",
    "neckbeards",
    "normie",
    "normies",
    "ok boomer",
    "okboomer",
    "pick me",
    "pickme",
    "pick me girl",
    "pickmegirl",
    "plebbit",
    "plebs",
    "reddit moment",
    "redditmoment",
    "schizo",
    "schizos",
    "schizopost",
    "seething",
    "snowflake",
    "snowflakes",
    "soyjak",
    "soy boy",
    "streamer simp",
    "streamersimp",
    "terminally online",
    "terminallyonline",
    "touch grass loser",
    "touchgrassloser",
    "troglodyte",
    "troglodytes",
    "twitch thot",
    "twitchthot",
    "virgin loser",
    "virginloser",
    "waste of air",
    "wasteofair",
    "waste of oxygen",
    "wasteofoxygen",
    "waste of skin",
    "wasteofskin",
    "waste of space",
    "wasteofspace",
    "white knight",
    "whiteknight",
    "white knighting",
    "whiteknighting",
    // ===== FOREIGN LANGUAGE PROFANITY (commonly used in English) =====
    "chutiya",
    "madarchod",
    "benchod",
    "bhenchod",
    "bhosdike",
    "gaand",
    "chodu",
    "randi",
    "hijo de puta",
    "puta",
    "puto",
    "mierda",
    "cabron",
    "pendejo",
    "verga",
    "culo",
    "coglione",
    "stronzo",
    "vaffanculo",
    "putain",
    "merde",
    "connard",
    "connasse",
    "salope",
    "enculer",
    "scheisse",
    "arschloch",
    "hurensohn",
    "fotze",
    "wichser",
    "kurwa",
    "blyat",
    "suka",
    "cyka",
    "cyka blyat",
    "cykablyat",
    "nahui",
    "pizdec",
    "mudak",
    "gavno",
    "ebat",
    "chinga tu madre",
    "chingatumadre",
    "kutje",
    "poes",
    "naai",
    "voetsek",
    "doos",
    "kak",
    // ===== COMBINED LEET EVASION =====
    "azzhol3",
    "b1tchass",
    "b1tchb0y",
    "c0ckface",
    "c0ckgobbler",
    "c0cklicker",
    "c0ckmonger",
    "c0cksm0ker",
    "c0cksuck",
    "d!ckbr41n",
    "d!ckl3ss",
    "d!cksuck3r",
    "d1ckbr41n",
    "d1ckf4c3",
    "d1ckl3ss",
    "d1cksuck3r",
    "f@ckf4c3",
    "f@ckh34d",
    "f@ckw1t",
    "f4ckf4c3",
    "f4ckh34d",
    "fuckf4c3",
    "n!gg3rz",
    "n1g n0g",
    "n1gn0g",
    "sh!tb1rd",
    "sh!tf4c3",
    "sh!th0l3",
    "sh!tl0rd",
    "sh1tb1rd",
    "sh1tf4c3",
    "sh1th0l3",
    "sh1tl0rd",
    // ===== ADDITIONAL THREAT PHRASES =====
    "beat the crap out of you",
    "beat the living shit",
    "brain you",
    "brainyou",
    "carve you up",
    "carveyouup",
    "come at me",
    "comeatme",
    "die please",
    "eviscerate you",
    "eviscerateyou",
    "gonna kill",
    "i hope you get raped",
    "put a bullet in you",
    "smother you",
    "smotheryou",
    // ===== ADDITIONAL MISC COMPOUNDS =====
    "assgasket",
    "assking",
    "assmunger",
    "ass munger",
    "asscavity",
    "assflapper",
    "bellsniff",
    "bell sniff",
    "asstard",
    "ass tard",
    "cock block",
    "cockblocked",
    "cock blocked",
    "cockblocking",
    "cock blocking",
    "cockblocker",
    "cock blocker",
    "cumonyourface",
    "cum on your face",
    "shit lips",
    "shit sipper",
    "shit spitter",
    "slut whore",
    "spunk jockey",
    "spunk bubble",
    "spunk face",
    "spunk monkey",
    "spunk rat",
    "wank bucket",
    "dick for",
    "dick rot",
    "dick worm",
    "dick pull",
    "dong face",
    "douche lord",
    "douche wad",
    "fuck pile",
    "fuck sicle",
    "gay fuck",
    "gay shit",
    "hoe bag",
    "horse fucker",
    "jizz ball",
    "jizz bag",
    "jizz breath",
    "jizz jar",
    "knob chops",
    "knob goblin",
    "knob rash",
    "knob shine",
    "meat flap",
    "pecker brain",
    "pecker face",
    "penis breath",
    "penis face",
    "penis head",
    "penis wrinkle",
    "pig fucker",
    "pole smoker",
    "poon hound",
    "prick lick",
    "prick weed",
    "shit fucker",
    "shit gobbler",
    "shit licker",
    "shit muncher",
    "shit sucker",
    "slut monger",
    "snatch face",
    "tit fucker",
    "tit licker",
    "tit sucker",

    // ===== BATCH 28: MORE ADJECTIVE+NOUN COMPOUNDS =====
    "retarded fuck",
    "retardedfuck",
    "retarded cunt",
    "retardedcunt",
    "retarded bitch",
    "retardedbitch",
    "retarded twat",
    "retardedtwat",
    "retarded prick",
    "retardedprick",
    "retarded bastard",
    "retardedbastard",
    "wretched cunt",
    "wretchedcunt",
    "wretched bitch",
    "wretchedbitch",
    "stinking cunt",
    "stinkingcunt",
    "stinking bitch",
    "stinkingbitch",
    "stinking whore",
    "stinkingwhore",
    "lousy fuck",
    "lousyfuck",
    "lousy cunt",
    "lousycunt",
    "lousy bitch",
    "lousybitch",
    "lousy bastard",
    "lousybastard",
    "pathetic twat",
    "pathetictwat",
    "pathetic prick",
    "patheticprick",
    "pathetic wanker",
    "patheticwanker",
    "miserable fuck",
    "miserablefuck",
    "miserable cunt",
    "miserablecunt",
    "miserable bitch",
    "miserablebitch",
    "miserable bastard",
    "miserablebastard",
    "ignorant fuck",
    "ignorantfuck",
    "ignorant cunt",
    "ignorantcunt",
    "ignorant bitch",
    "ignorantbitch",
    "ignorant bastard",
    "ignorantbastard",
    "brainless fuck",
    "brainlessfuck",
    "brainless cunt",
    "brainlesscunt",
    "brainless twat",
    "brainlesstwat",
    "brainless bitch",
    "brainlessbitch",
    "crusty cunt",
    "crustycunt",
    "crusty bitch",
    "crustybitch",
    "crusty whore",
    "crustywhore",
    "slimy cunt",
    "slimycunt",
    "slimy bastard",
    "slimybastard",
    "slimy prick",
    "slimyprick",
    "rotten cunt",
    "rottencunt",
    "rotten bastard",
    "rottenbastard",
    "rotten bitch",
    "rottenbitch",
    "vile cunt",
    "vilecunt",
    "vile bitch",
    "vilebitch",
    "vile bastard",
    "vilebastard",
    "disgusting fuck",
    "disgustingfuck",
    "disgusting cunt",
    "disgustingcunt",
    "disgusting bitch",
    "disgustingbitch",
    "disgusting pig",
    "disgustingpig",
    "disgusting whore",
    "disgustingwhore",
    "sorry cunt",
    "sorrycunt",
    "sorry bastard",
    "sorrybastard",
    "sorry bitch",
    "sorrybitch",
    "sorry prick",
    "sorryprick",
    "pitiful fuck",
    "pitifulfuck",
    "pitiful cunt",
    "pitifulcunt",
    "pitiful bitch",
    "pitifulbitch",
    "hideous cunt",
    "hideouscunt",
    "hideous bitch",
    "hideousbitch",
    "gross fuck",
    "grossfuck",
    "gross cunt",
    "grosscunt",
    "gross bitch",
    "grossbitch",
    "gross whore",
    "grosswhore",
    "gross pig",
    "grosspig",
    "pathetic piece of shit",
    "useless piece of shit",
    "worthless piece of crap",
    "complete piece of shit",
    "total piece of shit",
    "absolute piece of shit",
    "utter piece of shit",
    "fucking piece of shit",
    "stupid piece of shit",
    "dumb piece of shit",
    // ===== BATCH 29: MORE SEXUAL TERMS =====
    "bj",
    "blowie",
    "blowies",
    "boned",
    "boner pill",
    "bonerpill",
    "boob job",
    "boobjob",
    "booby",
    "boobies",
    "booty",
    "clam slam",
    "clamslam",
    "cock ring",
    "coitus",
    "cream pie",
    "cum rag",
    "cum sock",
    "cum wad",
    "cunt punt",
    "cybersex",
    "cyber sex",
    "deep throat",
    "dick pic",
    "dickpic",
    "dick pics",
    "dickpics",
    "dirty talk",
    "dirtytalk",
    "dong",
    "dongs",
    "double dong",
    "doubledong",
    "eating ass",
    "eatingass",
    "eat ass",
    "eatass",
    "edging",
    "exhibitionist",
    "fellatrix",
    "fingerfuck",
    "finger fuck",
    "fingerfucking",
    "finger fucking",
    "foot fetish",
    "footfetish",
    "foreplay",
    "frottage",
    "gang rape",
    "gangrape",
    "getting laid",
    "gettinglaid",
    "hand relief",
    "handrelief",
    "hookup",
    "hook up",
    "hooking up",
    "hookingup",
    "jacking off",
    "jackingoff",
    "jerking it",
    "jerkingit",
    "knob job",
    "knobjob",
    "money shot",
    "moneyshot",
    "nookie",
    "nooky",
    "nude pic",
    "nudepic",
    "nude pics",
    "nudepics",
    "one night stand",
    "onenightstand",
    "oral sex",
    "oralsex",
    "orgasming",
    "orgasms",
    "panty sniffer",
    "pantysniffer",
    "peep show",
    "peepshow",
    "phone sex",
    "phonesex",
    "play with yourself",
    "playwithyourself",
    "pound town",
    "poundtown",
    "pussy fart",
    "pussyfart",
    "pussy juice",
    "pussyjuice",
    "pussy lips",
    "pussylips",
    "red light district",
    "redlightdistrict",
    "reverse cowgirl",
    "reversecowgirl",
    "rub one out",
    "ruboneout",
    "rusty trombone",
    "rustytrombone",
    "sex slave",
    "sexslave",
    "sex toy",
    "sextoy",
    "sex toys",
    "sextoys",
    "skin flute",
    "skinflute",
    "sleep around",
    "sleeparound",
    "snuff film",
    "snufffilm",
    "spanked",
    "spanking",
    "strip club",
    "stripclub",
    "stripper",
    "strippers",
    "strip tease",
    "striptease",
    "swingers",
    "two girls one cup",
    "twogirlsonecup",
    "voyeurism",
    "wet dream",
    "wetdream",
    "wife swap",
    "wifeswap",
    "wife swapping",
    "wifeswapping",
    "xxxx",
    "xxxxx",
    // ===== BATCH 30: MORE EVASION MISSPELLINGS =====
    "ashole",
    "assho",
    "asshle",
    "bassturd",
    "basturd",
    "bastid",
    "bullcrap",
    "bull crap",
    "cack",
    "cock womble",
    "coochee",
    "coksucker",
    "coksuker",
    "cumm",
    "cummer",
    "cummin",
    "cuntt",
    "damm",
    "dammn",
    "dayum",
    "deeck",
    "deeq",
    "diik",
    "dique",
    "doosh",
    "dooshbag",
    "douch",
    "douchbag",
    "douchetard",
    "f u k",
    "faaack",
    "faaak",
    "faack",
    "faak",
    "faaq",
    "fakk",
    "farg",
    "fauck",
    "fcuker",
    "fker",
    "fluck",
    "fokk",
    "frigg",
    "frigger",
    "fruck",
    "fuark",
    "fuarking",
    "fucca",
    "fuchen",
    "fuching",
    "fudging",
    "fuken",
    "fuqqing",
    "horsecrap",
    "horse crap",
    "jackarse",
    "jack arse",
    "jizm",
    "jizzm",
    "knobbers",
    "knobjocky",
    "knobjokey",
    "kooch",
    "kootch",
    "kootchie",
    "kuunt",
    "kwunt",
    "lmaooo",
    "m0f0",
    "mof0",
    "mofocker",
    "mofucker",
    "mofucking",
    "muddafucka",
    "muddafucker",
    "muthafuckaz",
    "muthafuckin",
    "muther",
    "mutherfucka",
    "mutherfucking",
    "niqqah",
    "niqqas",
    "nobjokey",
    "nobjocky",
    "nutto",
    "orafis",
    "orgasim",
    "orgasims",
    "orgasum",
    "orgasums",
    "penus",
    "phallick",
    "phuker",
    "phukked",
    "phukker",
    "phukkin",
    "phukking",
    "phuks",
    "phuqed",
    "phuqer",
    "phuqing",
    "piky",
    "pissers",
    "pissess",
    "porn0",
    "pornn",
    "pussee",
    "pussie",
    "pussi",
    "pusy",
    "rimjaw",
    "rim jaw",
    "s.o.b",
    "s.o.b.",
    "scrotie",
    "skeeted",
    "skeeting",
    "skeezy",
    "slutz",
    "snatches",
    "snatchy",
    "spunked",
    "spunking",
    "spunky",
    "titt",
    "tittie",
    "tittiefucker",
    "tittyfucked",
    "twatt",
    "twatted",
    "v1agra",
    "vjayjay",
    "w00se",
    "w0g",
    "w0gs",
    "whoars",
    "willies",
    "wuss",
    "wussy",
    // ===== BATCH 31: MORE GAMING TERMS =====
    "aim bot",
    "aimbot",
    "b00sted",
    "boosted",
    "boosted animal",
    "boostedanimal",
    "camp3r",
    "camper",
    "campers",
    "carried trash",
    "carriedtrash",
    "cheater",
    "cheaters",
    "d3stroyed",
    "deranked",
    "easy mode",
    "easymode",
    "fragile ego",
    "fragileego",
    "garbage can",
    "garbagecan",
    "garbage tier",
    "garbagetier",
    "get bodied",
    "getbodied",
    "get dunked on",
    "getdunkedon",
    "get fragged",
    "getfragged",
    "get rolled",
    "getrolled",
    "get shit on",
    "getshiton",
    "go uninstall",
    "gouninstall",
    "griefers",
    "hacker",
    "hackers",
    "hardscoper",
    "hardscoping",
    "jg gap",
    "jggap",
    "mad because bad",
    "madbecausebad",
    "mid gap",
    "midgap",
    "n00b",
    "n0ob",
    "noob bait",
    "noobbait",
    "noob tube",
    "noobtube",
    "one trick pony",
    "onetrickpony",
    "outplayed",
    "outskilled",
    "rage",
    "rager",
    "ragers",
    "raging",
    "rank diff",
    "rankdiff",
    "reported",
    "scrub",
    "scrubs",
    "shit tier",
    "skill gap",
    "skillgap",
    "smurfing",
    "smurf",
    "smurfs",
    "spammer",
    "spammers",
    "spamming",
    "stream sniper",
    "streamsniper",
    "stream sniping",
    "streamsniping",
    "support diff",
    "supportdiff",
    "thrower",
    "throwers",
    "throwing",
    "top gap",
    "topgap",
    "trash can",
    "trashcan",
    "trash tier",
    "trashtier",
    "troll pick",
    "trollpick",
    "u mad",
    "umad",
    "u mad bro",
    "umadbro",
    "uninstall the game",
    "uninstallthegame",
    "you are bad",
    "youarebad",
    "you are garbage",
    "youaregarbage",
    "you are shit",
    "youareshit",
    "you are terrible",
    "youareterrible",
    "you are trash",
    "youaretrash",
    "you suck at this",
    "yousuckatthis",
    "zero damage",
    "zerodamage",
    // ===== BATCH 32: MORE COMPOUND NOUNS =====
    "assbanger",
    "ass banger",
    "assbite",
    "ass bite",
    "assboil",
    "ass boil",
    "asscrawler",
    "ass crawler",
    "assdouche",
    "ass douche",
    "asseater",
    "ass eater",
    "assflower",
    "ass flower",
    "assgrabber",
    "ass grabber",
    "buttchug",
    "butt chug",
    "buttchugging",
    "butt chugging",
    "buttkisser",
    "butt kisser",
    "buttsniffer",
    "butt sniffer",
    "buttstuffer",
    "butt stuffer",
    "clitlicker",
    "clit licker",
    "cumchugger",
    "cum chugger",
    "cumeater",
    "cum eater",
    "cumlicker",
    "cum licker",
    "cumsucker",
    "cum sucker",
    "cumswallower",
    "cum swallower",
    "cuntbuster",
    "cunt buster",
    "cuntfucker",
    "cunt fucker",
    "cunthammer",
    "cunt hammer",
    "cuntmonger",
    "cunt monger",
    "dickbiter",
    "dick biter",
    "fuck monkey",
    "fuck muppet",
    "fuck pig",
    "fuck twit",
    "fuck wagon",
    "shitbucket",
    "shit bucket",
    "shitsniffer",
    "shit sniffer",
    "shittongue",
    "shit tongue",
    "skankass",
    "skank ass",
    "skankyass",
    "skanky ass",
    "slimeball",
    "slime ball",
    "slutty bitch",
    "sluttybitch",
    "slutty whore",
    "sluttywhore",
    "turdgobbler",
    "turd gobbler",
    "turdmonger",
    "turd monger",
    "turdsniffer",
    "turd sniffer",
    // ===== BATCH 33: REGIONAL SLURS =====
    "alligator bait",
    "alligatorbait",
    "bootlip",
    "bootlips",
    "brownskin",
    "brown skin",
    "buckwheat",
    "cabbage eater",
    "cabbageeater",
    "chinless wonder",
    "chinlesswonder",
    "clogwog",
    "eight ball",
    "eightball",
    "gin jockey",
    "ginjockey",
    "gweilo",
    "gwilo",
    "hairyback",
    "hairy back",
    "haole",
    "heebs",
    "honkie",
    "honkies",
    "jim crow",
    "jimcrow",
    "krauthead",
    "kraut head",
    "lubra",
    "macaca",
    "mayate",
    "mocky",
    "mooncricket",
    "mosshead",
    "moss head",
    "mudskin",
    "mud skin",
    "pancake face",
    "pancakeface",
    "peckerwoods",
    "redbone",
    "river rat",
    "riverrat",
    "round eye",
    "roundeye",
    "sand flea",
    "sandflea",
    "sand rat",
    "sandrat",
    "sheepshagger",
    "sheep shagger",
    "sheepfucker",
    "sheep fucker",
    "spade",
    "spades",
    "swamp donkey",
    "swampdonkey",
    "toesucker",
    "toe sucker",
    "tree jumper",
    "treejumper",
    "wagon burner",
    "wagonburner",
    "welfare queen",
    "welfarequeen",
    "wood ape",
    "woodape",
    "wool head",
    "woolhead",
    // ===== BATCH 34: ABBREVIATIONS =====
    "cfnm",
    "csb",
    "ctm",
    "dfo",
    "dvp",
    "fobr",
    "fyfi",
    "fym",
    "gdf",
    "gfu",
    "gfym",
    "gky",
    "grf",
    "hmfic",
    "iaf",
    "ibtl",
    "jfgi",
    "jsyk",
    "lamf",
    "lma0",
    "mfao",
    "mfl",
    "nfg",
    "ngaf",
    "nmfp",
    "nsfl",
    "sf",
    "sof",
    "stfuattdlagg",
    "susfu",
    "tarfu",
    "wtmf",
    "wttf",
    "ygtbfkm",
    "ygtbkm",
    // ===== BATCH 35: MORE LEET COMBOS =====
    "4n4l",
    "4nal",
    "4ss crack",
    "4sscrack",
    "4ssfuck",
    "4sshole",
    "4sswipe",
    "b!0tch",
    "b!otch",
    "b4ll sack",
    "b4llsack",
    "blowj0b",
    "cl!toris",
    "cum$h0t",
    "cumsh0t",
    "d!ckl1ck3r",
    "d!ckn0s3",
    "d!cksn33z3",
    "d!ckt1p",
    "d!ckw4d",
    "d!ldos",
    "d1ld0",
    "f@ggotry",
    "f@ggy",
    "f@gg0try",
    "f4ggy",
    "f4gg0try",
    "fuck3d",
    "fuck3rs",
    "fvck3d",
    "fvck3r",
    "g0ddam",
    "g0ddamn",
    "h0m0phobe",
    "h0mos3xual",
    "h4ndjobs",
    "h4ndj0bs",
    "j1zzface",
    "j1zzm0pp3r",
    "j1zzrag",
    "j1zzst41n",
    "l3sbo",
    "l3zbos",
    "m0l3st",
    "m0l3st3r",
    "m0th3rfuck",
    "m4sturb4t3",
    "m4sturb4t1ng",
    "n1gl3t",
    "n1gg4h",
    "p0rn0",
    "p0rnhub",
    "p0rnst4r",
    "p1ssed",
    "p1ssfl4ps",
    "p1ssh34d",
    "pu55i3s",
    "r4p1ng",
    "s3m3n",
    "sh!tb0x",
    "sh!tbr41n",
    "sh!tc4nn3d",
    "sh!td1ck",
    "sh!te4t3r",
    "sh!tfuck",
    "sh!tg1bb0n",
    "sh!tk1ck3r",
    "sl4pp3r",
    "sl4pp3rs",
    "sp4st1c",
    "sp4st1cs",
    "tw4tf4c3",
    "tw4tw4ffl3",
    "w4nkf4c3",
    "w4nkst41n",
    "wh0r3b4g",
    "wh0r3f4c3",
    // ===== BATCH 36: ADDITIONAL HATE SPEECH =====
    "borderbunny",
    "borderhopper",
    "coalburner",
    "fencejumper",
    "mudpeople",
    "racetraitor",
    "white power",
    "whitepower",
    "white pride",
    "whitepride",
    "white supremacy",
    "whitesupremacy",
    "white supremacist",
    "whitesupremacist",
    "ethnic cleansing",
    "ethniccleansing",
    "final solution",
    "finalsolution",
    "gas the jews",
    "gasthejews",
    "heil hitler",
    "heilhitler",
    "hitler did nothing wrong",
    "holocaust denier",
    "holocaustdenier",
    "master race",
    "masterrace",
    "neo nazi",
    "neo-nazi",
    "racial purity",
    "racialpurity",
    "sieg heil",
    "siegheil",
    "blood and soil",
    "bloodandsoil",
    "fourteen words",
    "fourteenwords",
    "1488",
    "14 88",
    "1488", // neo-Nazi number code (duplicate check - keep 14 88 spaced version)
    "rahowa",
    "day of the rope",
    "dayoftherope",
    "great replacement",
    "greatreplacement",
    "ku klux klan",
    "kukluxklan",
    "kkk",
    "lynching",
    "lynch mob",
    "lynchmob",
    "race war",
    "racewar",
    "race mixing",
    "racemixing",
    // ===== BATCH 37: MORE MISC PROFANITY =====
    "anal bead",
    "analbead",
    "ball gag",
    "ball licker",
    "balllicker",
    "ball sack",
    "ball sucker",
    "ballsucker",
    "bastardization",
    "bastardize",
    "bitch face",
    "blow job",
    "blue waffle",
    "bluewaffle",
    "boners",
    "butt plug",
    "cock and balls",
    "cockandballs",
    "cock sucker",
    "cum dumpster",
    "dick head",
    "dick sucker",
    "dog fucker",
    "dogfucker",
    "donkey fucker",
    "donkeyfucker",
    "double fisting",
    "doublefisting",
    "dry fuck",
    "dryfuck",
    "fuck face",
    "fuck wad",
    "jack ass",
    "jerk off",
    "jizz face",
    "knob end",
    "knob head",
    "mother fucker",
    "nut sack",
    "nut job",
    "penis pump",
    "penispump",
    "shit bag",
    "shit face",
    "shit head",
    "shit hole",
    "skull fuck",
    "tit fuck",
    "twat face",
    "wank stain",
    "whore bag",

    // ===== BATCH 38: FINAL ADDITIONS =====
    "anal bleaching",
    "analbleaching",
    "anal fissure",
    "analfissure",
    "anal probe",
    "analprobe",
    "arse crack",
    "arsecrack",
    "arse lick",
    "arselick",
    "ass backward",
    "assbackward",
    "ass backwards",
    "assbackwards",
    "ass breath",
    "ass clap",
    "assclap",
    "ass fuck",
    "ass fucker",
    "ass goblin",
    "ass hole",
    "ass jacker",
    "ass licker",
    "ass monkey",
    "ball bag",
    "ballbag",
    "ball breaker",
    "ball crusher",
    "ball hair",
    "ball licking",
    "balllicking",
    "ball sac",
    "ball torture",
    "balltorture",
    "bastard face",
    "beaver",
    "bellend cheese",
    "bint",
    "bints",
    "bitchlet",
    "bitch let",
    "bitchslapped",
    "bitch slapped",
    "boob squeeze",
    "boobsqueeze",
    "brown nose",
    "brownnose",
    "brown noser",
    "brownnoser",
    "buggering",
    "bum fuck",
    "bum hole",
    "bumhole",
    "butt fuck",
    "butt fucker",
    "butt fucking",
    "butt licker",
    "butt munch",
    "camel toe",
    "carpet muncher",
    "chesticle",
    "clit face",
    "clitface",
    "cock face",
    "cock gobbler",
    "cock head",
    "cock holster",
    "cock jockey",
    "cock licker",
    "cock nose",
    "cock smith",
    "cock up",
    "corn hole",
    "cum bubble",
    "cum face",
    "cum guzzler",
    "cum stain",
    "cunt bag",
    "cunt face",
    "cunt flap",
    "cunt flaps",
    "cunt hair",
    "cunt hole",
    "cunt wipe",
    "dick brain",
    "dick fuck",
    "dirty sanchez",
    "fanny flap",
    "fanny flaps",
    "fart face",
    "fart knocker",
    "finger bang",
    "foot job",
    "fuck bag",
    "fuck ball",
    "fuck boy",
    "fuck buddy",
    "fuck er",
    "fuck ers",
    "fuck hole",
    "fuck stick",
    "fuck up",
    "horn dog",
    "horndog",
    "horny bastard",
    "hornybastard",
    "hot carl",
    "hotcarl",
    "jack hole",
    "jizz mopper",
    "jizz rag",
    "jizz stain",
    "knob gobbler",
    "man whore",
    "meat curtain",
    "meatcurtain",
    "muff diving",
    "nut buster",
    "nutbuster",
    "piss baby",
    "piss flap",
    "pissflap",
    "shit bird",
    "shit box",
    "shit brain",
    "shitbrain",
    "shit breath",
    "shit dick",
    "shit eater",
    "shit fuck",
    "shit gibbon",
    "shit house",
    "shit kicker",
    "shit lord",
    "shit show",
    "shit stick",
    "shit storm",
    "shit wad",
    "shit weasel",
    "slut bag",
    "slut bucket",
    "slut face",
    "smart ass",
    "snot face",
    "snot nose",
    "thunder cunt",
    "turd brain",
    "turd face",
    "turd muncher",
    "turd whistle",
    "twat badger",
    "twat monger",
    "twat muffin",
    "twat waffle",
    "wank badger",
    "wank pheasant",
    "wank puffin",
    "wank shaft",
    "wank sock",

];

export default englishBadWords;
