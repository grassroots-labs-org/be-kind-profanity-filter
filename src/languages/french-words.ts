// src/languages/french-words.ts

/**
 * French profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in French
 */
const frenchBadWords: string[] = [
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "merde", // Shit
  "putain", // Whore / Fuck! (very common interjection)
  "conne", // Idiot, asshole, cunt (fem./masc.)
  "connard",
  "connasse", // Bigger asshole/bitch (masc./fem.)
  "cul", // Ass
  "bite", // Dick, cock (vulgar)
  "chatte", // Pussy, cunt (vulgar)
  "couilles", // Balls (vulgar)
  "enculé",
  "enculée", // Motherfucker, asshole (lit. fucked in the ass) (masc./fem.)
  "salope", // Bitch, slut
  "salaud", // Bastard, swine (male)
  "bordel", // Brothel / Mess / Fuck!, Damn! (interjection)
  "foutre", // Sperm, cum / To do / To fuck / Nothing (je m'en fous - I don't give a fuck)
  "niquer", // To fuck (verlan slang, very common & vulgar)
  "baise",
  "baiser", // Kiss (standard) / Fuck (verb/noun - vulgar)
  "chier", // To shit
  "pisser", // To piss
  "gueule", // Animal mouth / Shut up! (ta gueule!)

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Merde ---
  "merdeux",
  "merdeuse", // Shitty kid, brat
  "merdique", // Shitty, crappy
  "emmerder", // To piss off, to annoy
  "emmerdeur",
  "emmerdeuse", // Annoying person
  "démerder",
  "se démerder", // To manage, to sort things out (informal)
  "putain de merde", // Fucking shit
  "sac à merde", // Piece of shit (lit. bag of shit)
  // --- Putain ---
  "putain de", // Fucking (adjective modifier, e.g., putain de voiture - fucking car)
  "fils de pute", // Son of a bitch
  "fille de pute", // Daughter of a bitch
  "putasserie", // Bitchy behavior / Whore stuff
  "pute", // Short for putain, whore
  // --- Con / Connard ---
  "connerie", // Stupidity, bullshit
  "déconner", // To talk nonsense, to screw up
  "à la con", // Shitty, stupid (adjectival phrase)
  "pauvre con", // Poor idiot / Pathetic asshole
  "roi des cons", // King of idiots
  // --- Cul ---
  "trou du cul",
  "trouduc", // Asshole (lit. ass hole)
  "lèche-cul", // Ass-kisser
  "botter le cul", // Kick someone's ass
  "avoir le cul bordé de nouilles", // To be very lucky (vulgar)
  "se casser le cul", // Bust one's ass (work hard)
  "faux-cul", // Hypocrite
  // --- Bite / Chatte / Couilles ---
  "casse-couilles", // Annoying person (lit. ball-breaker)
  "avoir des couilles", // To have guts/balls
  "petite bite", // Small dick (insult)
  "lécher la chatte", // Lick pussy
  "sucer la bite", // Suck dick
  // --- Enculé / Salope / Salaud ---
  "enculage", // Act of sodomy / Getting screwed over
  "enculer (qqn)", // To fuck someone (in the ass) / To screw someone over
  "va te faire enculer", // Go fuck yourself
  "espèce de salope", // You bitch
  "grosse salope", // Fat bitch/slut
  "vieux salaud", // Old bastard
  // --- Bordel ---
  "quel bordel!", // What a mess! / What the fuck!
  "foutre le bordel", // To make a mess, to cause chaos
  // --- Foutre / Niquer / Baiser ---
  "va te faire foutre", // Go fuck yourself
  "rien à foutre", // Don't give a fuck
  "s'en foutre", // Not to give a fuck
  "je m'en fous", // I don't give a fuck
  "foutu",
  "foutue", // Screwed, broken, damned
  "nique ta mère", // Fuck your mother (very offensive)
  "nique sa mère", // Fuck his/her mother / Expression of anger/frustration
  "va te faire niquer", // Go get fucked
  "baisable", // Fuckable
  "baiseur",
  "baiseuse", // Fucker (one who fucks)
  // --- Chier / Pisser ---
  "fait chier", // It's annoying / Pisses me off
  "casse les pieds", // Annoying (milder than fait chier)
  "va chier", // Go take a shit / Fuck off
  "pipi", // Pee (childish, but used)
  // --- Gueule ---
  "ta gueule!", // Shut up! (very common, aggressive)
  "ferme ta gueule", // Shut your mouth! (stronger)
  "gueuler", // To shout, to yell
  "engueuler", // To tell someone off, to scold
  "gueule de bois", // Hangover
  "sale gueule", // Ugly face / Untrustworthy look

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "idiot",
  "idiote", // Idiot
  "imbécile", // Imbecile
  "stupide", // Stupid
  "débile", // Moron, retarded (offensive)
  "crétin",
  "crétine", // Cretin
  "abruti",
  "abrutie", // Dimwit, numbskull
  "andouille", // Idiot (lit. sausage)
  "bouffon",
  "bouffonne", // Buffoon, clown
  "nul",
  "nulle", // Useless, sucks
  "minable", // Pathetic, lousy
  "taré",
  "tarée", // Crazy, nuts (offensive)
  "cinglé",
  "cinglée", // Crazy, nuts
  "fou",
  "folle", // Mad, crazy
  "niais",
  "niaise", // Simpleton, naive

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "pédé", // Faggot (very offensive slang for homosexual)
  "gouine", // Dyke (very offensive slang for lesbian)
  "travelo", // Tranny (offensive for transvestite/transgender)
  "nègre",
  "négresse", // Negro (extremely offensive racial slur)
  "bougnoule", // Very offensive slur for North Africans/Arabs
  "chinetoque", // Very offensive slur for Chinese/East Asian people
  "rital", // Offensive slur for Italian people
  "polack", // Offensive slur for Polish people
  "yid", // Offensive slur for Jewish people (from Yiddish)
  "youpin",
  "youpine", // Offensive slur for Jewish people

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "bâtard",
  "bâtarde", // Bastard
  "ordure", // Scum, filth (person)
  "pourriture", // Rot, decay / Scum, rotten person
  "raclure", // Scum (lit. scrapings)
  "fumier", // Manure / Bastard, swine
  "chien",
  "chienne", // Dog / Bitch
  "porc", // Pig / Dirty person
  "cochon",
  "cochonne", // Pig / Dirty person / Kinky
  "vache", // Cow / Bitch! (interjection)
  "chameau", // Camel / Mean person (fem.)
  "morue", // Codfish / Whore, bitch
  "thune", // Money (slang, can be used dismissively)
  "pognon", // Money (slang, dough)
  "fric", // Money (slang, cash)
  "crevard",
  "crevarde", // Selfish freeloader, scumbag
  "clochard",
  "clocharde", // Bum, tramp
  "moche", // Ugly
  "laid",
  "laide", // Ugly
  "dégueulasse", // Disgusting, gross
  "puant",
  "puante", // Stinking / Obnoxious person
  "plouc", // Hick, country bumpkin
  "pécor", // Hick, peasant (derogatory)
  "blaireau", // Badger / Idiot, loser
  "gland", // Acorn / Idiot, dickhead
  "branleur",
  "branleuse", // Wanker (lit. one who wanks)
  "branler", // To wank, masturbate / To do nothing
  "se branler", // To masturbate
  "ne rien branler", // To do fuck all
  "poufiasse", // Vulgar term for woman (bimbo, slutty - very offensive)

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "mince", // Thin / Damn!, Shoot! (mild euphemism for merde)
  "zut", // Darn!, Shoot! (mild)
  "flûte", // Flute / Darn! (mild)
  "saperlipopette", // Good grief! (old-fashioned, humorous)
  "purée", // Mashed potatoes / Euphemism for putain
  "punaise", // Thumb tack / Euphemism for putain
  "sacré bleu", // Good heavens! (stereotypical, old)
  "la vache!", // The cow! / Wow!, Holy cow! (expression of surprise)
  "dégage!", // Get lost!, Beat it!
  "fiche le camp!", // Get lost!, Piss off! (stronger than dégage)
  "tais-toi!", // Be quiet! (can be rude depending on tone)
  "enculé de ta race", // Fuck your race (very offensive)
  "ta race", // Your race (offensive)
  "couillon", // Idiot / Balls (regional)
  "branlette", // Handjob
  "tantouse", // Gay (derogatory)
  "pédéraste", // Pederast
  "nique", // Fuck (verb)
  "jean-foutre", // Good-for-nothing

  // Additional French profanity & verlan
  "baisé", // Fucked
  "bâtard de merde", // Shit bastard
  "bolosse", // Loser (modern slang)
  "casse-toi", // Piss off
  "chiasse", // Diarrhea / Coward
  "chieur", "chieuse", // Pain in the ass
  "couille molle", // Soft ball / wimp
  "crève", // Die / Drop dead
  "enc", // Abbreviation of enculé
  "enfoiré", "enfoirée", // Bastard / Scumbag
  "fdp", // Abbreviation: fils de pute
  "fiotte", // Faggot (offensive)
  "grognasse", // Ugly/nasty woman
  "keh", // Verlan for chier (internet slang)
  "ken", // Verlan for niquer (to fuck)
  "keuf", // Verlan for flic (cop, derogatory)
  "meuf", // Verlan for femme (can be neutral but used pejoratively)
  "nique sa race", // Fuck his/her race (very offensive)
  "niquer sa mère", // Fuck his mother
  "ntm", // Abbreviation: nique ta mère
  "pétasse", // Bimbo / Slut
  "péteux", "péteuse", // Coward / Scaredy-cat
  "putain de bordel", // Fucking hell
  "putain de sa mère", // Fucking hell
  "roubignoles", // Balls (testicles)
  "salopard", // Bastard (male)
  "saloperie", // Filthy thing / Crap
  "schnock", // Old fool
  "ta mère", // Your mother (often truncated insult)
  "ta mère la pute", // Your mother the whore
  "trou de balle", // Asshole (lit. bullet hole)
  "trouillard", "trouillarde", // Coward
  "va te faire mettre", // Go get fucked
  "va niquer ta mère", // Go fuck your mother

  // ========================================
  // === Compound Insults ==================
  // ========================================
  "espèce de connard", // You bastard (lit. species of asshole)
  "espèce de con", // You idiot
  "espèce de merde", // You piece of shit
  "sale con", // Dirty idiot
  "sale pute", // Dirty whore
  "grosse pute", // Fat whore
  "gros porc", // Fat pig
  "gros con", // Big idiot
  "grosse conne", // Big idiot (fem)
  "gros dégueulasse", // Big slob
  "sale bâtard", // Dirty bastard
  "sale chien", // Dirty dog
  "sale merde", // Dirty shit
  "sale enculé", // Dirty assfucker
  "espèce de salaud", // You bastard
  "espèce de raclure", // You scum
  "espèce de fumier", // You manure/bastard
  "espèce d'enfoiré", // You scumbag
  "sac à foutre", // Cum bag
  "tas de merde", // Pile of shit
  "face de cul", // Ass face
  "tête de noeud", // Dickhead (lit. knot head)
  "tête de con", // Dickhead
  "tête de bite", // Dickhead
  "tête de merde", // Shithead
  "gueule de con", // Idiot face
  "sombre con", // Dark/utter idiot
  "sombre merde", // Utter shit
  "triple buse", // Triple buzzard (utter idiot)
  "triple andouille", // Triple sausage (utter fool)
  "sale race", // Dirty race (very offensive)
  "sous-merde", // Sub-shit (subhuman insult)
  "moins que rien", // Less than nothing
  "bonne à rien", // Good for nothing (fem)
  "bon à rien", // Good for nothing (masc)

  // ========================================
  // === More Vulgar Phrases ===============
  // ========================================
  "chier dans la colle", // To shit in the glue (to cause problems)
  "se faire mettre", // To get fucked
  "se faire enculer", // To get ass-fucked
  "se faire baiser", // To get fucked (over)
  "se faire niquer", // To get fucked
  "aller se faire foutre", // To go fuck oneself
  "nique ta race", // Fuck your race (very offensive)
  "mange tes morts", // Eat your dead (very offensive, especially to Arabs)
  "je t'encule", // I fuck you in the ass
  "je te baise", // I fuck you
  "je te nique", // I fuck you
  "nique la police", // Fuck the police
  "on t'a pas sonné", // Nobody asked you (rude)
  "va te faire voir", // Go get seen / Fuck off (mild)
  "va crever", // Go die
  "crève la gueule ouverte", // Die with your mouth open
  "je t'emmerde", // I shit on you / Fuck you
  "je te chie dessus", // I shit on you
  "je te pisse dessus", // I piss on you
  "ferme ta putain de gueule", // Shut your fucking mouth
  "bouffe ma bite", // Eat my dick
  "suce ma bite", // Suck my dick
  "lèche-moi le cul", // Lick my ass
  "tu pues de la gueule", // Your mouth stinks
  "tu pues du cul", // Your ass stinks

  // ========================================
  // === Quebec French (Joual) =============
  // ========================================
  "tabernac", // Tabernacle (Quebec swear)
  "tabarnak", // Tabernacle (common spelling)
  "câlice", // Chalice (Quebec swear)
  "calice", // Chalice (without accent)
  "crisse", // Christ (Quebec swear)
  "ostie", // Host/wafer (Quebec swear)
  "osti", // Variant spelling
  "sacrement", // Sacrament (Quebec swear)
  "ciboire", // Ciborium (Quebec swear)
  "viarge", // Virgin (Quebec swear)
  "baptême", // Baptism (Quebec swear)
  "maudit", // Cursed / Damn (Quebec)
  "maudite", // Fem of maudit
  "câlisse de crisse", // Compound Quebec swear
  "ostie de tabarnak", // Compound Quebec swear
  "crisse de câlice", // Compound Quebec swear
  "sacramant", // Variant of sacrement
  "simonac", // Simony (Quebec swear, milder)
  "coliss", // Variant of câlice
  "décâlisser", // To destroy / To beat up (Quebec)
  "décrisser", // To destroy / To leave (Quebec)
  "encâlisser", // To piss off (Quebec)
  "tabarnouche", // Mild form of tabarnak
  "câline", // Mild form of câlice
  "crime", // Mild form of crisse
  "mosus", // Mild form of maudit
  "enfant de chienne", // Son of a bitch (Quebec)
  "trou de cul", // Already listed but also Quebec
  "plotte", // Pussy/cunt (Quebec)
  "fourrer", // To fuck (Quebec)
  "crosseur", // Wanker / Cheater (Quebec)
  "crosseuse", // Fem
  "niaiser", // To fool around / Waste time (Quebec)
  "niaiseux", // Idiot (Quebec)
  "niaiseuse", // Fem
  "colon", // Settler / Hick (Quebec, derogatory)
  "épais", // Thick / Stupid (Quebec)
  "épaisse", // Fem
  "cave", // Cellar / Idiot (Quebec)
  "sans dessein", // Brainless (Quebec)
  "mongol", // Mongoloid / Idiot (Quebec, offensive)
  "attardé", // Retarded (Quebec, offensive)
  "attardée", // Fem
  "fif", // Faggot (Quebec)
  "tapette", // Faggot / Fly swatter (Quebec/France)
  "moumoune", // Sissy / Faggot (Quebec)
  "guidoune", // Slut / Prostitute (Quebec)
  "agace", // Cock tease (Quebec)
  "agace-pissette", // Cock tease (Quebec, stronger)
  "pissou", // Coward (Quebec)
  "chieux", // Coward / Shitter (Quebec)
  "licheux", // Ass-kisser (Quebec)
  "téteux", // Suck-up (Quebec)
  "téteuse", // Fem

  // ========================================
  // === Belgian French ====================
  // ========================================
  "dikkenek", // Fat neck / Show-off (Belgian French)
  "sansen", // Idiot (Belgian)
  "poepzak", // Fart bag (Belgian, from Flemish influence)
  "stoull", // Fool (Belgian)
  "bachi-bouzouk", // Insult (originally Turkish, used in Belgian/French comics)

  // ========================================
  // === Verlan (Reversed Slang) ===========
  // ========================================
  "tepu", // Pute backwards (whore)
  "relou", // Lourd backwards (annoying)
  "chelou", // Louche backwards (sketchy, weird)
  "péta", // Taper backwards (to hit, in context)
  "téma", // Mater backwards (to look at)
  "zarbi", // Bizarre backwards (weird)
  "renoi", // Noir backwards (Black person, can be offensive)
  "rebeu", // Beur backwards (Arab person, can be offensive)
  "feuj", // Juif backwards (Jewish person, can be offensive)
  "caillera", // Racaille backwards (thug)
  "racaille", // Thug, scum
  "keum", // Mec backwards (dude)
  "ouf", // Fou backwards (crazy)
  "vénère", // Énervé backwards (pissed off)
  "chanmé", // Méchant backwards (mean/awesome)
  "iench", // Chien backwards (dog, derogatory)
  "keupon", // Punk backwards (punk)
  "beur", // Arabe backwards (Arab, can be offensive)
  "reubeu", // Variant of rebeu

  // ========================================
  // === Internet / Youth Slang ============
  // ========================================
  "tmtc", // Toi-même tu connais (you know it)
  "ptdr", // Pété de rire (dying of laughter, used in vulgar contexts)
  "niktamère", // Contracted nique ta mère
  "wesh", // Hey / What's up (banlieue slang)
  "wallah", // I swear (Arabic-French slang)
  "starfoullah", // I swear to God (Arabic-French slang)
  "zebi", // Dick (Arabic-French slang)
  "zob", // Dick (Arabic-French slang, from Arabic)
  "zobi", // My dick (Arabic-French slang)
  "kahba", // Whore (Arabic-French slang)
  "hmar", // Donkey / Idiot (Arabic-French slang)
  "miskine", // Poor thing (Arabic-French, can be condescending)
  "miskin", // Variant
  "baltringue", // Loser / Weakling (slang)
  "tocard", // Loser, idiot
  "tocarde", // Fem
  "boloss", // Loser (variant of bolosse)
  "cassos", // Welfare case (derogatory)
  "crevure", // Scum (stronger than crevard)
  "raclure de bidet", // Bidet scrapings (insult)
  "sous-race", // Sub-race (very offensive)
  "fils de chien", // Son of a dog
  "bâtard de race", // Race bastard (very offensive)

  // ========================================
  // === Sexual Terms ======================
  // ========================================
  "sodomie", // Sodomy
  "fellation", // Fellatio
  "cunnilingus", // Cunnilingus
  "masturber", // To masturbate
  "se masturber", // To masturbate (reflexive)
  "jouir", // To cum / To orgasm
  "jouissance", // Orgasm / Pleasure
  "orgasme", // Orgasm
  "éjaculer", // To ejaculate
  "éjaculation", // Ejaculation
  "bander", // To get hard (erection)
  "bandant", // Arousing / Hot
  "bandante", // Fem
  "débander", // To go soft / To lose courage
  "pénis", // Penis
  "vagin", // Vagina
  "clitoris", // Clitoris
  "testicule", // Testicle
  "testicules", // Testicles
  "scrotum", // Scrotum
  "prépuce", // Foreskin
  "anus", // Anus
  "téton", // Nipple
  "seins", // Breasts
  "nichons", // Tits (vulgar)
  "nibards", // Tits (vulgar)
  "nénés", // Boobies (childish/vulgar)
  "roberts", // Tits (old slang)
  "loches", // Tits (vulgar)
  "miches", // Ass cheeks / Bread rolls
  "fesses", // Buttocks
  "pétard", // Firecracker / Nice ass (slang)
  "moule", // Mussel / Pussy (slang)
  "cramouille", // Pussy (very vulgar, old slang)
  "foufoune", // Pussy (childish)
  "foufounette", // Pussy (diminutive)
  "minette", // Pussy (cute/vulgar) / Cunnilingus
  "minou", // Kitty / Pussy
  "chagatte", // Pussy (vulgar compound)
  "pine", // Dick (archaic/vulgar)
  "queue", // Tail / Dick (vulgar)
  "quéquette", // Willy (childish)
  "zizi", // Willy (childish)
  "zgeg", // Dick (banlieue slang)
  "teub", // Bite backwards (verlan for dick)
  "noeud", // Knot / Dickhead
  "chibre", // Dick (vulgar)
  "dard", // Dart / Dick (slang)
  "gaule", // Pole / Erection (slang)
  "trique", // Stick / Erection (slang)
  "avoir la trique", // To have a hard-on
  "sucer", // To suck
  "pomper", // To pump / To give head
  "tailler une pipe", // To give a blowjob (lit. carve a pipe)
  "pipe", // Blowjob (slang)
  "turlute", // Blowjob (Quebec/old slang)
  "gâterie", // Treat / Sexual favor (euphemism)
  "doigter", // To finger
  "sodomiser", // To sodomize
  "pénétrer", // To penetrate
  "enfiler", // To thread / To fuck
  "tringler", // To fuck (vulgar)
  "tirer un coup", // To have a shag
  "coup de bite", // Dick thrust
  "partie de jambes en l'air", // Sex session (lit. legs in the air party)
  "coït", // Coitus
  "copuler", // To copulate
  "fornication", // Fornication
  "forniquer", // To fornicate
  "prostituée", // Prostitute
  "prostitué", // Male prostitute
  "maison close", // Brothel (lit. closed house)
  "proxénète", // Pimp
  "maquereau", // Pimp (lit. mackerel)
  "maquerelle", // Madam (brothel)
  "micheton", // John (prostitution client)
  "michetonneuse", // Sugar baby / Prostitute (slang)
  "péripatéticienne", // Prostitute (euphemism)
  "catin", // Hussy / Prostitute (old)
  "garce", // Bitch (old/literary)
  "gourgandine", // Hussy (old)
  "traînée", // Slut (lit. dragged)
  "dévergondée", // Shameless woman
  "nymphomane", // Nymphomaniac
  "obsédé", // Pervert / Obsessed (masc)
  "obsédée", // Fem
  "pervers", // Pervert
  "perverse", // Fem
  "voyeur", // Voyeur
  "voyeuse", // Fem
  "exhibitionniste", // Exhibitionist
  "fétichiste", // Fetishist
  "vicieux", // Perverted / Kinky
  "vicieuse", // Fem
  "lubrique", // Lecherous
  "libidineux", // Libidinous
  "salace", // Salacious
  "cochonnerie", // Filth / Smut
  "pornographie", // Pornography
  "porno", // Porn

  // ========================================
  // === More General Insults ==============
  // ========================================
  "larve", // Larva / Worthless person
  "limace", // Slug / Slow/worthless person
  "cancrelat", // Cockroach
  "cafard", // Cockroach / Snitch
  "mouchard", // Snitch
  "moucharde", // Fem
  "balance", // Snitch
  "donneur", // Snitch (lit. giver)
  "donneuse", // Fem
  "crapule", // Scoundrel
  "fripouille", // Scoundrel
  "canaille", // Scoundrel, rascal
  "gredin", // Scoundrel (literary)
  "vaurien", // Good-for-nothing
  "vaurienne", // Fem
  "voyou", // Thug, hooligan
  "gouape", // Thug (old slang)
  "marlou", // Pimp / Thug (old)
  "arsouille", // Drunkard / Thug
  "poivrot", // Drunkard
  "poivrote", // Fem
  "soûlard", // Drunkard
  "soûlarde", // Fem
  "alcoolo", // Alcoholic (slang)
  "pochetron", // Drunkard
  "pochetronne", // Fem
  "ivrogne", // Drunkard
  "charogne", // Carrion / Vile person
  "carne", // Tough meat / Nasty person
  "rosse", // Nag (horse) / Mean person
  "peste", // Plague / Little pest
  "teigne", // Ringworm / Nasty person
  "chipie", // Shrew, nag
  "mégère", // Shrew, harridan
  "harpie", // Harpy
  "sorcière", // Witch
  "morveux", // Snotty (brat)
  "morveuse", // Fem
  "gamin de merde", // Shit kid
  "petite merde", // Little shit
  "gros lard", // Fat lard
  "grosse vache", // Fat cow
  "gros tas", // Big pile (fat person)
  "grosse truie", // Fat sow
  "boudin", // Blood sausage / Ugly woman
  "thon", // Tuna / Ugly woman
  "laideron", // Ugly woman
  "mocheté", // Ugly person

  // ========================================
  // === More Quebec Sacres & Compounds ====
  // ========================================
  "tabarnak de câlice", // Tabernacle of chalice (compound sacre)
  "câlice de tabarnak", // Chalice of tabernacle (compound sacre)
  "osti de crisse", // Host of Christ (compound sacre)
  "crisse de tabarnak", // Christ of tabernacle (compound sacre)
  "ostie de câlice", // Host of chalice (compound sacre)
  "câlice de ciboire", // Chalice of ciborium (compound sacre)
  "tabarnak de ciboire", // Tabernacle of ciborium (compound sacre)
  "osti de câlice de tabarnak", // Triple compound sacre
  "crisse de câlice de tabarnak", // Triple compound sacre
  "sacrement de câlice", // Sacrament of chalice
  "sacrement de tabarnak", // Sacrament of tabernacle
  "baptême de tabarnak", // Baptism of tabernacle
  "viarge de tabarnak", // Virgin of tabernacle
  "maudit câlice", // Damn chalice
  "maudit tabarnak", // Damn tabernacle
  "maudit crisse", // Damn Christ
  "maudite ostie", // Damn host
  "ciboire de câlice", // Ciborium of chalice
  "tabarnouche de câline", // Mild compound sacre
  "câliboire", // Compound mild sacre
  "tabarslac", // Mild variant of tabarnak
  "câlisse", // Variant spelling of câlice
  "crissement", // Adverb from crisse (Quebec)
  "en tabarnak", // In tabernacle (extremely)
  "en câlice", // In chalice (extremely)
  "en crisse", // In Christ (extremely)
  "en osti", // In host (extremely)
  "se décâlisser", // To fall apart (Quebec)
  "se décrisser", // To not give a fuck (Quebec)
  "encâlissé", // Pissed off (Quebec)
  "encâlissée", // Fem pissed off (Quebec)
  "décrissé", // Destroyed (Quebec)
  "décrissée", // Fem destroyed (Quebec)
  "sacrament", // Variant sacrament sacre
  "bout de crisse", // Piece of Christ (Quebec)
  "bout de viarge", // Piece of virgin (Quebec)
  "charrue", // Snowplow / ugly woman (Quebec)
  "mangeux de marde", // Shit eater (Quebec)
  "marde", // Shit (Quebec variant of merde)
  "plein de marde", // Full of shit (Quebec)
  "tête carrée", // Square head (Quebec slur for anglophones)
  "bloke", // Anglophone person (Quebec, derogatory)
  "caltor", // Ugly/dirty person (Quebec)
  "chaudasse", // Hot chick / slutty (Quebec)
  "débile mental", // Mental retard (Quebec)
  "lâche", // Coward / let go (Quebec)
  "licheux de cul", // Ass licker (Quebec)
  "moron", // Moron (Quebec, English loan)
  "ostination", // Stubbornness / arguing (Quebec)
  "ostiner", // To argue stupidly (Quebec)
  "pissette", // Small penis (Quebec)
  "pogner le cul", // To grab ass (Quebec)
  "sacreur", // One who sacres (Quebec)
  "sacrures", // Swear words (Quebec)
  "slaquer", // To slack / fire (Quebec)
  "smatte", // Smart-ass (Quebec, from English)
  "twit", // Twit / idiot (Quebec, English loan)

  // ========================================
  // === More Putain Compounds =============
  // ========================================
  "putain de bordel de merde", // Fucking brothel of shit
  "putain de ta mère", // Fucking your mother
  "putain de sa race", // Fucking his race
  "putain de chiotte", // Fucking toilet
  "oh putain", // Oh fuck
  "putain de connard", // Fucking bastard
  "putain de connasse", // Fucking bitch
  "putain de saloperie", // Fucking crap
  "putain de fait chier", // Fucking pisses me off
  "nom de putain", // In the name of the whore
  "sacré putain", // Holy whore

  // ========================================
  // === More Merde Compounds ==============
  // ========================================
  "emmerdement", // Annoyance / hassle
  "démerdard", // Resourceful person (vulgar)
  "démerdarde", // Fem resourceful
  "merdouille", // Little shit / mishap
  "merdouiller", // To mess up
  "merdier", // Shitstorm / mess
  "emmerdant", // Annoying (as hell)
  "emmerdante", // Fem annoying
  "dans la merde", // In the shit / in trouble
  "jusqu'au cou dans la merde", // Neck deep in shit
  "remuer la merde", // To stir up shit
  "brasser la merde", // To stir shit (variant)
  "bouffer de la merde", // To eat shit
  "putain de merde de bordel", // Fucking shit brothel
  "bordel de merde", // Brothel of shit / fucking shit
  "merde alors", // Shit then / well shit
  "oh merde", // Oh shit
  "sacré merde", // Holy shit

  // ========================================
  // === More Con Compounds ================
  // ========================================
  "connard de merde", // Shitty bastard
  "connasse de merde", // Shitty bitch
  "petit con", // Little asshole
  "petite conne", // Little bitch
  "sale connard", // Dirty bastard
  "sale connasse", // Dirty bitch
  "bande de cons", // Bunch of idiots
  "putain de con", // Fucking idiot
  "quel con", // What an idiot
  "quelle conne", // What an idiot (fem)
  "sacré con", // Holy idiot
  "sacrée conne", // Holy idiot (fem)
  "vieux con", // Old fool
  "vieille conne", // Old fool (fem)
  "con comme la lune", // Dumb as the moon
  "con comme un balai", // Dumb as a broom
  "con comme ses pieds", // Dumb as his feet
  "tête de con de merde", // Shit dickhead

  // ========================================
  // === African French Profanity ==========
  // ========================================
  // --- Senegalese French ---
  "niaw", // Idiot (Senegal Wolof-French)
  "dof", // Crazy / idiot (Senegal Wolof-French)
  "niak", // Derogatory (Senegal)
  "gadjé", // Non-African (derogatory, Senegal)
  "toubab", // White person (can be derogatory, West Africa)
  "nègre de merde", // Shit negro (very offensive, used in Africa too)
  // --- Congolese French ---
  "zoba", // Idiot / penis (Congo)
  "pombé", // Drunkard (Congo)
  "matiti", // Crazy / weed (Congo)
  "nyama", // Animal / brute (Congo/Central Africa)
  "libulu", // Idiot (Congo)
  "mwana nyama", // Child of an animal (Congo)
  // --- Ivorian French ---
  "gbê", // Die / fuck off (Ivory Coast)
  "dêh", // Expression of frustration (Ivory Coast)
  "gawa", // Country bumpkin (Ivory Coast)
  "groto", // Redneck / yokel (Ivory Coast)
  "boucantier", // Loudmouth / troublemaker (Ivory Coast)
  "djandjou", // Idiot (Ivory Coast nouchi slang)
  "gnamoukoudji", // Scumbag (Ivory Coast nouchi)
  "tchoin", // Slut / easy girl (Ivory Coast/African French)
  "sapologie", // Fashion obsession (can be derogatory, Congo)
  "bordelier", // Troublemaker (West African French)
  "va te coucher", // Go to bed / fuck off (African French)

  // ========================================
  // === More Belgian French ===============
  // ========================================
  "fieu", // Guy / idiot (Belgian)
  "brol", // Junk / mess (Belgian)
  "schieve", // Crazy (Belgian, from Flemish)
  "zievereir", // Bullshitter (Belgian, from Flemish)
  "kansen", // Asshole (Belgian)
  "klansen", // Idiot (Belgian)
  "stoefer", // Show-off (Belgian)
  "snull", // Wimp / loser (Belgian)
  "snulle", // Fem wimp (Belgian)
  "mansen", // Loser (Belgian)
  "potje", // Little asshole (Belgian)

  // ========================================
  // === Swiss French Profanity ============
  // ========================================
  "bobet", // Idiot (Swiss French)
  "bobette", // Fem idiot (Swiss French)
  "cornichon", // Pickle / idiot (Swiss French)
  "cucul", // Silly / dumb (Swiss French)
  "gnôle", // Booze / moonshine (Swiss)
  "pouet", // Wimp / loser (Swiss French)
  "poutze", // Cleaning / mess (Swiss, from German Putzen)
  "schlingue", // To stink (Swiss French, from German)
  "schlingueur", // Stinker (Swiss French)
  "tacot", // Old banger / ugly thing (Swiss)
  "tartouille", // Ugly woman (Swiss French)
  "tourte", // Pie / idiot (Swiss French)
  "vadrouille", // Mop / wandering sloppily (Swiss)
  "gognand", // Clumsy fool (Swiss French)
  "gognande", // Fem clumsy fool (Swiss)

  // ========================================
  // === More Verlan =======================
  // ========================================
  "keufs", // Plural cops (verlan)
  "meufter", // To check out women (verlan-derived)
  "pécho", // To hook up / catch (verlan of choper)
  "barjot", // Crazy (verlan of jobard)
  "laisse béton", // Let it go (verlan of laisse tomber)
  "véner", // Angry (verlan of énervé, variant of vénère)
  "genrou", // Red-haired (verlan of rouquin)
  "ienchli", // Dog (verlan variant of chien)
  "keubla", // Black (verlan of Black, offensive)
  "kainri", // American (verlan of Ricain)
  "beuré", // Arab (verlan variant, offensive)
  "céfran", // French (verlan of français)
  "zonmé", // House (verlan of maison)
  "teupu", // Whore (verlan of pute, variant)
  "teushi", // Hashish (verlan of shit/haschisch)
  "relou de merde", // Annoying piece of shit
  "chelou de ouf", // Crazy sketchy

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "partouze", // Orgy
  "partouzard", // Orgy participant
  "partouzarde", // Fem orgy participant
  "gang bang", // Gang bang
  "plan cul", // Booty call / hookup
  "plan à trois", // Threesome
  "soixante-neuf", // Sixty-nine (sexual position)
  "levrette", // Doggy style
  "missionnaire", // Missionary (position)
  "anulingus", // Anulingus
  "branlette espagnole", // Spanish wank (titjob)
  "doigtage", // Fingering
  "enculade", // Ass-fucking session
  "godemiché", // Dildo (archaic)
  "gode", // Dildo (modern)
  "éponger", // To mop up / To soak up (sexual slang)
  "mouiller", // To get wet (sexually)
  "mouillée", // Wet (sexually aroused, fem)
  "giclée", // Spurt / squirt
  "gicler", // To squirt / to spurt
  "décharger", // To discharge / To cum
  "juter", // To juice / To cum
  "foutre en l'air", // To fuck up / To cum
  "bouffer la chatte", // To eat pussy
  "brouter le gazon", // To mow the lawn (cunnilingus)
  "brouter la moquette", // To chew the carpet (lesbian sex slang)
  "se doigter", // To finger oneself
  "se goder", // To dildo oneself
  "se toucher", // To touch oneself
  "se tripoter", // To grope oneself
  "tripoter", // To grope
  "peloter", // To fondle / grope
  "pelotage", // Fondling / groping
  "attouchement", // Inappropriate touching
  "viol", // Rape
  "violer", // To rape
  "violeur", // Rapist
  "violeuse", // Fem rapist
  "pédophile", // Pedophile
  "inceste", // Incest
  "zoophile", // Zoophile
  "zoophilie", // Zoophilia
  "nécrophile", // Necrophile
  "sado-maso", // Sadomasochist
  "dominatrice", // Dominatrix
  "soumise", // Submissive (fem)
  "soumis", // Submissive (masc)
  "fist-fucking", // Fist-fucking
  "fisting", // Fisting
  "bukkake", // Bukkake
  "creampie", // Creampie
  "éjac faciale", // Facial ejaculation
  "gorge profonde", // Deep throat
  "pompe à bite", // Cock pump / cocksucker
  "avaler", // To swallow
  "cracher", // To spit
  "salope en chaleur", // Bitch in heat
  "chienne en chaleur", // Dog bitch in heat

  // ========================================
  // === More Homophobic Slurs =============
  // ========================================
  "pédé de merde", // Shitty faggot
  "sale pédé", // Dirty faggot
  "gros pédé", // Fat faggot
  "pédale", // Faggot (derogatory)
  "grande folle", // Big queen (derogatory)
  "tarlouze", // Faggot (very offensive)
  "tarlouse", // Variant spelling
  "tafiole", // Faggot (offensive)
  "lopette", // Sissy / faggot
  "lopètte", // Variant with accent
  "tantouze", // Variant of tantouse
  "tante", // Aunt / gay man (derogatory)
  "tata", // Auntie / gay man (derogatory)
  "enculé de pédé", // Ass-fucked faggot
  "suceuse de bite", // Cock sucker (used for gay men)
  "tapette à mouches", // Fly swatter / faggot
  "inverti", // Inverted / gay (archaic derogatory)
  "invertie", // Fem
  "sodomite", // Sodomite
  "sale gouine", // Dirty dyke
  "grosse gouine", // Fat dyke
  "gouinasse", // Dyke (augmentative, very offensive)
  "broute-minou", // Pussy eater (lesbian slur)
  "camionneuse", // Trucker / butch lesbian (derogatory)

  // ========================================
  // === More Internet Slang ===============
  // ========================================
  "nktm", // Variant: nique ta mère
  "ftg", // Ferme ta gueule
  "vtff", // Va te faire foutre
  "vtfe", // Va te faire enculer
  "jsp", // Je sais pas (I don't know, used dismissively)
  "osef", // On s'en fout (we don't give a fuck)
  "oklm", // Au calme (chill, can be dismissive)
  "slt", // Salut / salope (context-dependent)
  "ptn", // Putain (abbreviated)
  "mrd", // Merde (abbreviated)
  "enk", // Enculé (abbreviated)
  "bsf", // Best friend / baise (context-dependent)
  "niqta", // Nique ta (abbreviated)
  "stp ferme ta gueule", // Please shut the fuck up
  "wsh", // Variant of wesh
  "cheh", // Serves you right (Arabic-French slang)
  "la honte", // The shame / how embarrassing (derogatory)
  "cramé", // Burned / busted / wasted
  "cramée", // Fem burned

  // ========================================
  // === More Compound Phrases =============
  // ========================================
  "putain de bordel de merde de sa race", // Extreme compound
  "bordel de putain de merde", // Extreme compound variant
  "nique tout", // Fuck everything
  "nique le monde", // Fuck the world
  "enculé de sa race", // Ass-fucked of his race
  "bâtard de sa mère", // Bastard of his mother
  "fils de pute de merde", // Shit son of a bitch
  "sale fils de pute", // Dirty son of a bitch
  "gros fils de pute", // Fat son of a bitch
  "espèce de fils de pute", // You son of a bitch
  "espèce de pourriture", // You piece of rot
  "espèce de déchet", // You piece of trash
  "déchet humain", // Human waste
  "poubelle humaine", // Human trash can
  "sous-homme", // Subhuman (very offensive)
  "sous-femme", // Subwoman (very offensive)
  "erreur de la nature", // Mistake of nature
  "accident de capote", // Condom accident (unwanted child)
  "fils de personne", // Son of nobody
  "sale gros porc", // Dirty fat pig
  "sale grosse truie", // Dirty fat sow
  "sale petite merde", // Dirty little shit
  "sale petite pute", // Dirty little whore
  "espèce de grosse merde", // You big piece of shit
  "putain de ta mère la pute", // Fucking your whore mother
  "nique ta mère la pute", // Fuck your whore mother
  "va crever dans un fossé", // Go die in a ditch
  "je te baise ta mère", // I fuck your mother
  "nique tes morts", // Fuck your dead (very offensive)
  "ta mère en string", // Your mother in a thong
  "ta mère la grosse", // Your fat mother
  "ta mère en slip", // Your mother in underwear
  "ton père le chauve", // Your bald father (dismissive)

  // ========================================
  // === More General Vulgar Terms =========
  // ========================================
  "péter un câble", // To blow a fuse / lose it
  "péter les plombs", // To blow a fuse / go crazy
  "péter un boulon", // To lose a bolt / go crazy
  "se faire chier", // To be bored to death
  "chiant", // Boring / annoying as fuck
  "chiante", // Fem boring/annoying
  "chier une pendule", // To shit a clock (overreact)
  "casse-pieds", // Pain in the ass (lit. foot-breaker)
  "casse-bonbon", // Pain in the ass (lit. candy-breaker)
  "casse-burne", // Ball-breaker
  "casse-burnes", // Ball-breaker (plural)
  "pète-sec", // Dry farter / authoritarian
  "gratte-cul", // Rosehip / ass scratcher
  "mange-merde", // Shit eater
  "baise-en-ville", // Overnight bag (lit. fuck-in-town)
  "brûle-gueule", // Short pipe / smelly breath
  "lèche-bottes", // Boot licker
  "lèche-vitrine", // Window shopping (lit. window licker)
  "pisse-froid", // Cold pisser / killjoy
  "pisse-vinaigre", // Vinegar pisser / miser
  "tire-au-cul", // Shirker / lazy ass
  "tire-au-flanc", // Shirker (military origin)
  "torche-cul", // Ass wipe / toilet paper
  "foutriquet", // Little runt / good-for-nothing
  "foutraque", // Crazy / scatterbrained
  "emmerdeur de première", // First-class annoying person
  "chieur de première", // First-class pain in the ass
  "saligaud", // Dirty person / scumbag
  "saligaude", // Fem dirty person
  "souillon", // Slob / dirty person
  "salopiaud", // Little scumbag (diminutive of salaud)
  "enfant de putain", // Child of a whore
  "bougre", // Fellow / bugger
  "bougresse", // Fem of bougre
  "sacré bougre", // Holy bugger
  "sacré nom de dieu", // Holy name of God
  "nom de dieu de bordel de merde", // Name of God of shit brothel
  "bon dieu de merde", // Good God of shit
  "sacré nom d'une pipe", // Holy name of a pipe
  "p'tain", // Contracted putain
  "sa mère la pute", // His/her mother the whore
  "sa race", // His/her race (offensive dismissal)
  "la putain de sa mère", // The whore of his mother
  "sa mère", // His mother (truncated insult)
  "la mort", // Death (as insult/threat)
  "va mourir", // Go die
  "crève sale chien", // Die dirty dog

  // ========================================
  // === Spelling Evasions / Leet Speak ====
  // ========================================
  // --- Putain evasions ---
  "puta1n", // Putain leet
  "put@in", // Putain at-sign
  "pvtain", // Putain v-swap
  "pu7ain", // Putain 7-swap
  "put4in", // Putain 4-swap
  "putaiin", // Putain double i
  "puttain", // Putain double t
  "puutain", // Putain double u
  "putein", // Putain misspelling
  "ptain", // Putain truncated
  "ptin", // Putain abbreviated
  "putaaain", // Putain elongated
  "pu-tain", // Putain hyphenated
  "pu.tain", // Putain dotted
  "put1", // Putain abbreviated leet
  "put@1n", // Putain double leet
  "puteuh", // Putain phonetic variant
  // --- Merde evasions ---
  "m3rde", // Merde leet
  "m*rde", // Merde star
  "m€rde", // Merde euro sign
  "merd3", // Merde leet end
  "merrde", // Merde double r
  "mairde", // Merde phonetic
  "mrde", // Merde vowel drop
  "mèrde", // Merde accent variant
  "me.rde", // Merde dotted
  "mer-de", // Merde hyphenated
  "merdum", // Merde Latin mock
  "meeerde", // Merde elongated
  // --- Connard evasions ---
  "c0nnard", // Connard zero-o
  "c0nnasse", // Connasse zero-o
  "conna rd", // Connard spaced
  "connar", // Connard truncated
  "konar", // Connard phonetic
  "konard", // Connard k-swap
  "konnard", // Connard k-swap double n
  "konasse", // Connasse k-swap
  "konnasse", // Connasse k-swap double n
  // --- Enculé evasions ---
  "3nculé", // Enculé leet
  "enkulé", // Enculé k-swap
  "ankule", // Enculé phonetic
  "enculay", // Enculé phonetic
  "encul3", // Enculé leet end
  "enc.ulé", // Enculé dotted
  "en-culé", // Enculé hyphenated
  "nculé", // Enculé truncated
  "anculé", // Enculé misspelling
  // --- Salope evasions ---
  "sal0pe", // Salope zero-o
  "s@lope", // Salope at-sign
  "sallope", // Salope double l
  "salop", // Salope truncated
  "saloppe", // Salope double p
  "sal0p", // Salope zero-o truncated
  "salôpe", // Salope accent
  "sa.lope", // Salope dotted
  // --- Bite evasions ---
  "b1te", // Bite leet
  "b!te", // Bite exclamation
  "bîte", // Bite accent
  "bitte", // Bite double t
  "bi.te", // Bite dotted
  "biite", // Bite double i
  // --- Nique evasions ---
  "n1que", // Nique leet
  "n!que", // Nique exclamation
  "niqu3", // Nique leet end
  "nikk", // Nique doubled
  "nik", // Nique abbreviated
  "niker", // Niquer simplified
  "nikker", // Nique doubled k
  "niké", // Nique phonetic
  "nik ta mère", // Nique ta mère simplified
  "nik sa mère", // Nique sa mère simplified
  "nik ta race", // Nique ta race simplified
  // --- Pute evasions ---
  "put3", // Pute leet
  "pvte", // Pute v-swap
  "pu-te", // Pute hyphenated
  "putte", // Pute double t
  "puut3", // Pute double u leet
  // --- Fils de pute evasions ---
  "fildepute", // Fils de pute contracted
  "filsdpute", // Fils de pute contracted
  "f1ls de pute", // Fils de pute leet
  "fils 2 pute", // Fils de pute number swap
  "fils d pute", // Fils de pute truncated
  "fi de pu", // Fils de pute very abbreviated
  // --- Pédé evasions ---
  "p3dé", // Pédé leet
  "péd3", // Pédé leet end
  "ped3", // Pédé no accent leet
  "pedé", // Pédé no accent
  "pede", // Pédé fully stripped
  // --- Ta gueule evasions ---
  "ta gueul", // Ta gueule truncated
  "tagueule", // Ta gueule contracted
  "ta g", // Ta gueule very abbreviated
  "tagel", // Ta gueule phonetic
  "taggle", // Ta gueule internet variant
  // --- General leet evasions ---
  "c0n", // Con leet
  "cøn", // Con Scandinavian o
  "b0rdel", // Bordel leet
  "f0utre", // Foutre leet
  "ch1er", // Chier leet
  "p1sser", // Pisser leet
  "br@nler", // Branler leet
  "s4laud", // Salaud leet
  "b@tard", // Bâtard leet
  "m0ngol", // Mongol leet
  "d3bile", // Débile leet

  // ========================================
  // === Additional Compound Phrases =======
  // ========================================
  "nique ton père", // Fuck your father
  "mange ta mère", // Eat your mother
  "mange la merde", // Eat shit
  "bouffe la merde", // Eat shit (variant)
  "casse-toi pauvre con", // Piss off you poor idiot (Sarkozy quote)
  "casse-toi sale con", // Piss off dirty idiot
  "ferme ta sale gueule", // Shut your dirty mouth
  "ferme ta grande gueule", // Shut your big mouth
  "ta gueule sale pute", // Shut up dirty whore
  "ta gueule connard", // Shut up asshole
  "ta gueule enculé", // Shut up ass-fucker
  "dégage de là", // Get out of here
  "dégage sale merde", // Get lost dirty shit
  "je t'encule ta mère", // I ass-fuck your mother
  "je m'en bats les couilles", // I beat my balls with it (don't care)
  "je m'en bats la race", // I don't give a fuck about it
  "j'en ai rien à foutre", // I don't give a fuck
  "j'en ai rien à battre", // I don't give a damn
  "j'en ai rien à branler", // I don't give a wank
  "j'en ai plein le cul", // I've had it up to my ass
  "tu fais chier le monde", // You annoy the whole world
  "tu me fais chier", // You piss me off
  "tu me gonfles", // You inflate me / you annoy me
  "tu me les brises", // You break them (my balls)
  "tu me les casses", // You break them (my balls)
  "tu me les pèles", // You peel them (my balls)
  "tu me soûles", // You're making me drunk / annoying me
  "va te pendre", // Go hang yourself
  "va te noyer", // Go drown yourself
  "va en enfer", // Go to hell
  "crève en enfer", // Die in hell
  "pourriture de merde", // Shitty rot
  "fumier de merde", // Shitty manure
  "ordure de merde", // Shitty trash
  "charogne de merde", // Shitty carrion
  "espèce de pourriture de merde", // You shitty piece of rot
  "va niquer ta race", // Go fuck your race
  "je nique ta race", // I fuck your race
  "nique ta famille", // Fuck your family
  "nique ton père ta mère", // Fuck your father and mother
  "nique tes grands-morts", // Fuck your great dead (very offensive)
  "sur la tête de ta mère", // On your mother's head (offensive oath)
  "ta mère la chienne", // Your mother the bitch
  "ta mère suce des bites", // Your mother sucks dicks
  "ton père suce des bites", // Your father sucks dicks
  "ta mère en short", // Your mother in shorts
  "ta mère en maillot", // Your mother in swimsuit
  "mange tes grands-morts", // Eat your great dead
  "je chie sur ta mère", // I shit on your mother
  "je chie sur ta race", // I shit on your race
  "je pisse sur ta tombe", // I piss on your grave
  "sale merde de chien", // Dirty dog shit
  "va bouffer tes morts", // Go eat your dead
  "ta daronne", // Your mother (slang, disrespectful)
  "nique ta daronne", // Fuck your mother (slang)
  "ta daronne la pute", // Your mother the whore (slang)

  // ========================================
  // === Quebec Sacre Combinations =========
  // ========================================
  // --- Additional compound sacres ---
  "tabarnak de câlice de crisse", // Triple sacre
  "ostie de câlice de crisse", // Triple sacre variant
  "câlice de crisse de tabarnak", // Triple sacre variant
  "crisse d'ostie de tabarnak", // Triple sacre variant
  "tabarnak d'ostie de câlice", // Triple sacre variant
  "sacrement d'ostie", // Sacrament of host
  "sacrement de crisse", // Sacrament of Christ
  "baptême de câlice", // Baptism of chalice
  "baptême de crisse", // Baptism of Christ
  "baptême d'ostie", // Baptism of host
  "viarge de câlice", // Virgin of chalice
  "viarge de crisse", // Virgin of Christ
  "viarge d'ostie", // Virgin of host
  "ciboire de tabarnak", // Ciborium of tabernacle
  "ciboire de crisse", // Ciborium of Christ
  "ciboire d'ostie", // Ciborium of host
  "maudit ciboire", // Damn ciborium
  "maudite câlice", // Damn chalice (fem)
  "maudit sacrement", // Damn sacrament
  "maudit baptême", // Damn baptism
  "maudite viarge", // Damn virgin
  "ostie de marde", // Host of shit
  "câlice de marde", // Chalice of shit
  "tabarnak de marde", // Tabernacle of shit
  "crisse de marde", // Christ of shit
  "ostie de con", // Host of idiot
  "câlice de con", // Chalice of idiot
  "tabarnak de con", // Tabernacle of idiot
  "crisse de con", // Christ of idiot
  "ostie d'épais", // Host of thick one
  "câlice d'épais", // Chalice of thick one
  "crisse d'épais", // Christ of thick one
  "tabarnak d'épais", // Tabernacle of thick one
  "ostie de cave", // Host of idiot
  "câlice de cave", // Chalice of idiot
  "tabarnak de cave", // Tabernacle of idiot
  "crisse de cave", // Christ of idiot
  "ostie de niaiseux", // Host of moron
  "câlice de niaiseux", // Chalice of moron
  "tabarnak de niaiseux", // Tabernacle of moron
  "maudit niaiseux", // Damn moron
  "maudite niaiseuse", // Damn moron (fem)
  "ostie de mongol", // Host of retard
  "câlice de mongol", // Chalice of retard
  "en tabarnak de câlice", // In tabernacle of chalice (intensifier)
  "en câlice de crisse", // In chalice of Christ (intensifier)
  "en ostie de tabarnak", // In host of tabernacle (intensifier)
  // --- Quebec sacre derivatives ---
  "tabarnaquer", // To waste / destroy (from tabarnak)
  "tabarnaqué", // Destroyed (from tabarnak)
  "tabarnaquée", // Destroyed fem (from tabarnak)
  "câlicer", // To throw / destroy (from câlice)
  "câlicé", // Thrown / destroyed (from câlice)
  "câlicée", // Thrown fem (from câlice)
  "crisser", // To throw / to leave (from crisse)
  "crissé", // Thrown / left (from crisse)
  "crissée", // Thrown fem (from crisse)
  "ostiné", // Argued (from ostie)
  "ostinée", // Argued fem
  "sacrer", // To swear (Quebec)
  "sacré", // Swore / damn (Quebec)
  "sacrée", // Fem (Quebec)
  "décâlisser la gueule", // To smash the face (Quebec)
  "décrisser le camp", // To get the hell out (Quebec)
  // --- Additional Quebec mild variants ---
  "tabarouette", // Mild tabarnak
  "tabarnane", // Mild tabarnak
  "câline de bine", // Mild câlice compound
  "câliboire de tabarouette", // Mild compound
  "crime pof", // Mild crisse
  "bout de ciarge", // Mild ciboire variant
  "sacrament de viarge", // Sacrament of virgin
  "mosus de mosus", // Double mild (Quebec)
  "mautadit", // Variant of maudit
  "mautadine", // Fem variant of maudit

  // ========================================
  // === African French (Expanded) =========
  // ========================================
  // --- Ivorian (Nouchi) ---
  "gaou", // Fool / sucker (Ivory Coast)
  "s'enjailler", // To show off wildly (can be derogatory)
  "daba", // Hoe / stupid person (Ivory Coast)
  "gnaga", // Ugly woman (Ivory Coast nouchi)
  "blo", // Stupid / idiot (Ivory Coast nouchi)
  "dogba", // Strong / bully (Ivory Coast nouchi)
  "kpakpato", // Gossip / blabbermouth (Ivory Coast)
  "yêrê", // Arrogant person (Ivory Coast nouchi)
  "gnata", // Nasty / mean (Ivory Coast nouchi)
  "wôyô", // Expression of frustration (Ivory Coast)
  "coco", // Stupid / sucker (Ivory Coast)
  "koutou", // Buttocks (Ivory Coast nouchi)
  "flôsseur", // Show-off (Ivory Coast nouchi)
  "brouteur", // Internet scammer (Ivory Coast/West Africa)
  "brouteuse", // Fem internet scammer / gold digger
  "môgô", // Man / dude (can be derogatory, Ivory Coast)
  "go de nuit", // Night girl / prostitute (Ivory Coast)
  "faire le garba", // To be vulgar / crude (Ivory Coast)
  "djôsseur", // Arrogant person (Ivory Coast nouchi)
  "bangala", // Penis (Central/West African French)
  "kokodjambou", // Idiot (Ivory Coast nouchi)
  "gbêssé", // Ugly (Ivory Coast nouchi)
  // --- Camerounais ---
  "mange-mille", // Bribe taker (Cameroon)
  "asso", // Buddy / fool (context-dependent, Cameroon)
  "nkukuma", // Idiot (Cameroon)
  "nyanga", // Show-off / arrogant (Cameroon)
  "kongossa", // Gossip (Cameroon)
  "tchatcher", // To blabber / hit on (Cameroon French)
  "tara", // Friend / idiot (context, Cameroon)
  "ndamba", // Whore (Cameroon slang)
  "mbenguiste", // Diaspora African (can be derogatory, Cameroon)
  "sans-papiers de merde", // Shitty undocumented person (very offensive)
  "mboutman", // Man about town / fuckboy (Cameroon)
  // --- Senegalese ---
  "tëgg", // Insult (Wolof-French)
  "soow", // Crazy (Wolof-French)
  "niak sa mère", // Fuck his mother (Senegalese French)
  "deug", // Crazy (Wolof-French)
  "gaïndé", // Lion / rough person (Senegal)
  "baadoola", // Idiot (Senegal)
  "tangana", // Nasty person (Senegal)
  // --- Congolais (expanded) ---
  "moyibi", // Thief (Congo)
  "moloki", // Crazy person (Congo)
  "lokuta", // Liar (Congo Lingala-French)
  "biso", // Derogatory term (Congo)
  "makango", // Scammer (Congo)
  "mwana pute", // Child of whore (Congo French)
  "pombé de merde", // Shitty drunkard (Congo)
  "ye!", // Expression of contempt (Congo)
  // --- Malian French ---
  "doni doni", // Idiot (Mali)
  "fama", // Chief / bossy person (derogatory, Mali)
  "wahala", // Trouble / drama (West African French)
  "kounafoni", // Coward (Mali)
  // --- Maghreb French (Arabic-French) ---
  "nta", // You (derogatory, Maghreb)
  "zamel", // Faggot (Maghreb Arabic-French, very offensive)
  "zamelat", // Faggots (plural, Maghreb)
  "teho", // Whore (Maghreb Arabic-French)
  "hashouma", // Shame on you (Maghreb)
  "achkoun nta", // Who do you think you are (Maghreb dismissive)
  "kelb", // Dog (Maghreb Arabic-French insult)
  "kelbek", // Your dog (Maghreb)
  "hmara", // Female donkey / stupid woman (Maghreb)
  "khanzir", // Pig (Maghreb Arabic-French insult)
  "weld el kahba", // Son of a whore (Maghreb)
  "bent el kahba", // Daughter of a whore (Maghreb)
  "yehdi", // Idiot (Maghreb)
  "nik ommok", // Fuck your mother (Maghreb)
  "nik ta mère bâtard", // Compound Maghreb-French insult
  "hashoumtek", // Shame on you (Maghreb variant)
  "naâl", // Curse (Maghreb)
  "naâl din ommok", // Curse your mother's religion (Maghreb)
  "tfouh", // Spit (expression of contempt, Maghreb)
  "sir tnik ommok", // Go fuck your mother (Maghreb)
  "tboun ommok", // Your mother's pussy (Maghreb, very offensive)
  "lmanyouk", // Faggot (Maghreb variant)
  "qahba", // Whore (Maghreb Arabic variant of kahba)
  "khoroto", // Bullshit (Maghreb)
  "khra", // Shit (Maghreb Arabic-French)
  "wahd el khra", // Piece of shit (Maghreb)
  "wahd el hmar", // A donkey (Maghreb insult)
  "sale arabe", // Dirty Arab (very offensive)
  "sale rebeu", // Dirty Arab (verlan, offensive)
  "sale noir", // Dirty Black person (very offensive)
  "sale blanc", // Dirty White person (offensive)
  "sale juif", // Dirty Jew (very offensive)

  // ========================================
  // === Racial / Ethnic Slurs (Expanded) ==
  // ========================================
  "bicot", // Offensive slur for North Africans
  "bougnoul", // Variant of bougnoule
  "crouille", // Very offensive slur for Arabs
  "melon", // Offensive slur for North Africans
  "raton", // Offensive slur for North Africans (lit. small rat)
  "noraf", // North African (derogatory slang)
  "fatma", // Stereotypical name used for Arab women (derogatory)
  "bamboula", // Very offensive racial slur for Black people
  "macaque", // Monkey / racist slur
  "singe", // Monkey / racist slur when directed at people
  "boucaque", // Offensive slur for Black people
  "négro", // Negro (offensive)
  "négrillon", // Little negro (very offensive)
  "négrillonne", // Fem little negro (very offensive)
  "sale nègre", // Dirty negro
  "gwer", // White person (derogatory, from Wolof)
  "niakoué", // Very offensive slur for Vietnamese/Asian people
  "bridé", // Slit-eyed (racist slur for Asians)
  "bridée", // Fem slit-eyed
  "face de citron", // Lemon face (racist slur for Asians)
  "jaune", // Yellow (racist term for Asians)
  "chintok", // Variant of chinetoque
  "chinetoc", // Variant of chinetoque
  "ching chong", // Racist mock-Chinese
  "sale chinois", // Dirty Chinese
  "gitan", // Gypsy (derogatory)
  "gitane", // Fem gypsy (derogatory)
  "manouche", // Gypsy / Romani (can be derogatory)
  "romanichel", // Romani (derogatory)
  "romanichelle", // Fem Romani (derogatory)
  "voleur de poules", // Chicken thief (anti-Romani stereotype)
  "sale rom", // Dirty Roma
  "sale gitan", // Dirty gypsy
  "roumain de merde", // Shitty Romanian (xenophobic)
  "sale polak", // Dirty Polack
  "sale rital", // Dirty Italian
  "espingouin", // Offensive slur for Spanish people
  "espingoin", // Variant spelling
  "amerloque", // Derogatory for Americans
  "amerlock", // Variant of amerloque
  "rosbeef", // Roast beef (derogatory for British)
  "rosbif", // Variant spelling
  "boche", // Offensive slur for Germans
  "fridolin", // Offensive for Germans (old)
  "schleu", // Offensive for Germans
  "youtre", // Variant offensive term for Jewish people

  // ========================================
  // === Transphobic Slurs (Expanded) ======
  // ========================================
  "travesti de merde", // Shitty cross-dresser
  "sale travelo", // Dirty tranny
  "gros travelo", // Fat tranny
  "shemale", // Shemale (offensive English loan)
  "trans de merde", // Shitty trans (offensive)
  "homme-femme", // Man-woman (derogatory for trans)
  "femme-homme", // Woman-man (derogatory for trans)
  "transe", // Trans (derogatory, as slang)

  // ========================================
  // === Ableist Slurs (Expanded) ==========
  // ========================================
  "mongol de merde", // Shitty retard
  "sale mongol", // Dirty retard
  "gros mongol", // Fat retard
  "mongoloïde", // Mongoloid (very offensive)
  "demeuré", // Retarded / slow
  "demeurée", // Fem retarded
  "arriéré", // Backward / retarded
  "arriérée", // Fem backward
  "handicapé de merde", // Shitty disabled person (offensive)
  "infirme de merde", // Shitty cripple (offensive)
  "gogol", // Retard (French slang from Mongol)
  "gogole", // Fem retard
  "débile profond", // Profoundly retarded (very offensive)
  "attardé mental", // Mentally retarded
  "retardé", // Retarded (English loan, offensive)
  "autiste de merde", // Shitty autistic person (offensive)
  "spaz", // Spastic (English loan, offensive)
  "trisomique de merde", // Shitty person with Down syndrome (very offensive)
  "sale gogol", // Dirty retard

  // ========================================
  // === Internet Abbreviations (Expanded) =
  // ========================================
  "jtm pas", // Je t'aime pas (I don't love you, dismissive)
  "jm'en bats", // Je m'en bats (I don't care, vulgar)
  "jm'en fous", // Je m'en fous (I don't give a fuck)
  "jm'en branle", // Je m'en branle (I don't give a wank)
  "stfu", // English but used in French internet
  "mdp", // Mot de putain (variant, putain emphasis)
  "nkl", // Nikkel / no worries (but can be dismissive)
  "tmm", // Ta mère la merde (your mother the shit)
  "ntm sa mère", // Nique ta mère sa mère (compound)
  "fdpc", // Fils de pute connard
  "pgm", // Pro gamer move (sarcastic dismissal)
  "azy", // Allez / go on (dismissive/aggressive)
  "azzy", // Variant of azy
  "wllh", // Wallah abbreviated
  "sfll", // Starfoullah abbreviated
  "tgl", // Ta gueule (variant abbreviation)
  "ftg connard", // Ferme ta gueule connard
  "ntm fdp", // Nique ta mère fils de pute
  "ptdr ta mère", // Dying of laughter your mother (mocking)
  "lmao ta race", // Laughing at your race (offensive)

  // ========================================
  // === More Verlan (Expanded) ============
  // ========================================
  "teupu de merde", // Whore of shit (verlan)
  "ssalope", // Salope variant
  "deumer", // Merde backwards (verlan)
  "demer", // Short verlan of merde
  "leucu", // Cul backwards (ass, verlan)
  "gueudin", // Dingue backwards (crazy, verlan)
  "golmon", // Mongol backwards (retard, verlan)
  "keussa", // Sac backwards (verlan, dismissive)
  "rebou", // Bourré backwards (drunk, verlan)
  "teboi", // Boîte backwards (club, verlan)
  "genar", // Garnement backwards (brat, verlan)
  "bétar", // Bâtard backwards (verlan)
  "zemar", // Miser (verlan)
  "zicmu", // Musique backwards (verlan)
  "laissebé", // Laisse béton variant (let it go)
  "teucha", // Chatte backwards (pussy, verlan)
  "narvalo", // Crazy person (Romani-derived verlan)
  "foncedé", // Défoncé backwards (wasted, verlan)
  "tiéquar", // Quartier backwards (hood, verlan)
  "ziva", // Vas-y backwards (go on, aggressive)

  // ========================================
  // === More Sexual / Body Slang ==========
  // ========================================
  "burne", // Ball (testicle, vulgar)
  "burnes", // Balls (vulgar)
  "roupettes", // Balls (slang)
  "valseuses", // Balls (lit. waltzing ones)
  "bijoux de famille", // Family jewels (testicles)
  "service trois pièces", // Three-piece service (cock and balls)
  "braquemart", // Sword / dick (archaic vulgar)
  "biroute", // Dick (slang)
  "bitoune", // Dick (slang)
  "quéquettard", // Little dick man
  "engin", // Machine / dick (slang)
  "outil", // Tool / dick (slang)
  "manche", // Handle / dick (slang)
  "poireau", // Leek / dick (slang)
  "asperge", // Asparagus / dick (slang)
  "saucisse", // Sausage / dick (slang)
  "saucisson", // Big sausage / dick (slang)
  "sifflet", // Whistle / dick (slang)
  "fifille", // Pussy (childish/vulgar)
  "frifri", // Pussy (childish/vulgar)
  "touffe", // Bush / pubic hair
  "abricot", // Apricot / pussy (slang)
  "berlingot", // Candy / clitoris (slang)
  "bouton de rose", // Rosebud / clitoris (slang)
  "con comme la bite à jules", // Dumb as Jules' dick (compound)
  "couille de loup", // Wolf's ball (exclamation)
  "en avoir dans le froc", // To have something in the pants (be brave/scared)
  "se vider les couilles", // To empty one's balls
  "tirer son coup", // To get one's rocks off
  "tremper le biscuit", // To dip the biscuit (have sex)
  "mettre la saucisse dans le potage", // Put sausage in the soup (sex)
  "s'envoyer en l'air", // To send oneself in the air (have sex)
  "sauter", // To jump / to fuck
  "grimper", // To climb / to fuck
  "chevaucher", // To ride / to fuck
  "ken de ouf", // Crazy fuck (verlan compound)
  "se taper", // To do / to fuck
  "se farcir", // To stuff / to fuck
  "culbuter", // To topple / to fuck
  "ramoner", // To sweep the chimney / to fuck
  "défourrailler", // To unholster / to fuck hard
  "défoncer", // To smash in / to fuck hard
  "poutrer", // To beam / to fuck hard
  "pilonner", // To pound / to fuck hard
  "démonter", // To dismantle / to fuck hard
  "dérouiller", // To take a beating / to fuck hard
  "se faire défoncer", // To get smashed / to get fucked hard
  "se faire pilonner", // To get pounded
  "se faire démonter", // To get dismantled / to get fucked hard
  "se faire ramoner", // To get chimney swept / to get fucked
  "échangisme", // Swinging
  "échangiste", // Swinger
  "coquin", // Naughty / kinky
  "coquine", // Fem naughty / kinky
  "cul de sac à foutre", // Cum bag dead end (compound insult)
  "salope de merde", // Shitty slut
  "pute à nègre", // Negro's whore (extremely offensive)
  "pute à soldat", // Soldier's whore
  "pute de luxe", // Luxury whore
  "pute de rue", // Street whore
  "cougar de merde", // Shitty cougar

  // ========================================
  // === Religious Profanity (France) ======
  // ========================================
  "nom de dieu", // Name of God (profanity)
  "bon dieu", // Good God (profanity)
  "sacré nom de dieu de merde", // Holy name of God of shit
  "nom de dieu de putain", // Name of God of whore
  "jésus christ de merde", // Jesus Christ of shit
  "par le christ", // By Christ (profanity)
  "sacré christ", // Holy Christ
  "dieu de merde", // God of shit
  "sacré dieu", // Holy God
  "nom d'un chien", // Name of a dog (mild euphemism)
  "nom d'une pipe", // Name of a pipe (mild euphemism)
  "palsambleu", // By God's blood (archaic)
  "morbleu", // By God's death (archaic)
  "sacrebleu", // Sacred blue (archaic euphemism)
  "ventrebleu", // God's belly (archaic)
  "corbleu", // God's body (archaic)
  "jarnicoton", // Old profanity variant
  "par le sang dieu", // By God's blood

  // ========================================
  // === Threats & Violence ================
  // ========================================
  "je vais te tuer", // I'm going to kill you
  "je vais te défoncer", // I'm going to smash you
  "je vais te casser la gueule", // I'm going to break your face
  "je vais te péter la gueule", // I'm going to bust your face
  "je vais te niquer ta mère", // I'm going to fuck your mother
  "je vais t'éclater", // I'm going to destroy you
  "je vais t'exploser", // I'm going to explode you
  "je vais te crever", // I'm going to kill you (informal)
  "je vais te buter", // I'm going to kill you (slang)
  "je vais te fumer", // I'm going to smoke you (kill)
  "je vais te déchirer", // I'm going to tear you apart
  "je vais te démonter la gueule", // I'm going to dismantle your face
  "je vais te refaire le portrait", // I'm going to redo your portrait (beat up)
  "je vais t'arracher la tête", // I'm going to rip your head off
  "je vais te mettre une balle", // I'm going to put a bullet in you
  "tu vas morfler", // You're going to get it
  "tu vas prendre cher", // You're going to get it bad
  "tu vas déguster", // You're going to taste it (get beaten)
  "tu vas douiller", // You're going to suffer
  "je te défonce ta race", // I smash your race
  "casse-toi avant que je t'explose", // Piss off before I explode you
  "nique ta mère je vais te tuer", // Fuck your mother I'll kill you

  // ========================================
  // === Scatological (Expanded) ===========
  // ========================================
  "étron", // Turd
  "bouse", // Cow pat
  "bouse de vache", // Cow shit
  "crotte", // Poop (mild)
  "caca", // Poo (childish)
  "chiotte", // Toilet / crap
  "chiottes", // Toilets (vulgar)
  "dans les chiottes", // In the toilets (fucked)
  "aux chiottes", // To the toilets (dismissal)
  "chiure", // Fly shit / worthless thing
  "chiure de mouche", // Fly droppings / insignificant thing
  "pissat", // Piss (liquid)
  "pisseux", // Pissy / bed-wetter
  "pisseuse", // Fem pissy
  "pissotière", // Urinal (vulgar)
  "vessie", // Bladder (in vulgar context)
  "pet foireux", // Leaky fart
  "péteux de merde", // Shitty coward
  "chier des bulles", // To shit bubbles (to be terrified)
  "chier dans son froc", // To shit one's pants
  "couler un bronze", // To lay a turd (lit. cast a bronze)
  "poser une pêche", // To drop a peach (take a shit)
  "tartine de merde", // Slice of shit
  "mouler un cake", // To mold a cake (take a shit)
  "gerber", // To puke / disgusting
  "dégueuler", // To puke
  "dégueulasser", // To make disgusting
  "vomi", // Vomit
  "vomir", // To vomit
  "gerbe de merde", // Shit puke

  // ========================================
  // === Dismissive / Condescending ========
  // ========================================
  "ferme-la", // Shut it
  "la ferme", // Shut up
  "boucle-la", // Shut it (lit. buckle it)
  "écrase", // Shut up (lit. crush)
  "ras le bol", // Fed up
  "ras le cul", // Fed up (vulgar, lit. ass level)
  "j'en ai marre", // I'm fed up
  "j'en ai ma claque", // I've had enough
  "tu me saoules", // You're boring/annoying me
  "lâche-moi la grappe", // Let go of my bunch (leave me alone, vulgar)
  "lâche-moi les baskets", // Let go of my sneakers (leave me alone)
  "fous-moi la paix", // Leave me the fuck alone
  "fiche-moi la paix", // Leave me alone
  "va voir ailleurs si j'y suis", // Go see elsewhere if I'm there (get lost)
  "tu me casses les pieds", // You break my feet (annoy me)
  "tu me gaves", // You force-feed me (annoy me)
  "tu me prends la tête", // You take my head (annoy me)
  "casse les couilles", // Break the balls (annoying)
  "pète les couilles", // Burst the balls (annoying)
  "tu es nul à chier", // You're shit useless
  "tu es con comme un manche", // You're dumb as a handle
  "tu as la capacité d'une huître", // You have the capacity of an oyster
  "tu es aussi utile qu'un cendrier sur une moto", // You're as useful as an ashtray on a motorcycle

  // ========================================
  // === Misc Vulgar & Slang ===============
  // ========================================
  "salaud de merde", // Shitty bastard
  "enfoiré de merde", // Shitty scumbag
  "fumier de la pire espèce", // Manure of the worst kind
  "pourriture ambulante", // Walking rot
  "déchet de la société", // Waste of society
  "raté", // Failure
  "ratée", // Fem failure
  "looseur", // Loser (French spelling of English)
  "looseuse", // Fem loser
  "looser", // Loser (English spelling used in French)
  "naze", // Useless / broken / shitty
  "nazes", // Plural useless
  "niquer la vie", // To fuck up life
  "balek", // I don't care (from Arabic, vulgar)
  "wallak", // Variant of balek
  "on s'en bat les couilles", // We beat our balls with it (don't care)
  "osef de ta vie", // We don't give a fuck about your life
  "ta vie c'est de la merde", // Your life is shit
  "ta vie de merde", // Your shit life
  "va te faire voir chez les grecs", // Go get seen at the Greeks (fuck off)
  "aller se faire cuire un oeuf", // Go cook an egg (get lost)
  "tu peux te brosser", // You can brush yourself (dream on)
  "dans ton cul", // In your ass
  "je te le mets", // I'll put it in you
  "je te la mets", // I'll put it in you (fem object)
  "profonde", // Deep (sexual context)
  "à sec", // Dry (sexually or violently)
  "bourrer", // To stuff / to fuck
  "se bourrer la gueule", // To get shitfaced
  "se déchirer la gueule", // To get wasted
  "se mettre une mine", // To get obliterated (drunk)
  "se prendre une branlée", // To get a beating / thrashing
  "branlée", // Beating / thrashing
  "raclée", // Beating / spanking
  "rouste", // Beating / spanking
  "peignée", // Beating (old slang)
  "trempe", // Soaking / beating
  "tannée", // Beating (old slang)
  "dérouillée", // Beating (slang)
  "biture", // Drinking binge
  "cuite", // Getting drunk
  "se cuiter", // To get drunk
  "se torcher", // To get wasted
  "torché", // Wasted / wiped
  "pété", // Wasted / broken / farted
  "pétée", // Fem wasted
  "défoncé", // Wasted / stoned
  "défoncée", // Fem wasted
  "arraché", // Wasted (very)
  "arrachée", // Fem wasted (very)
  "niqué", // Fucked / broken
  "niquée", // Fem fucked / broken
  "baisé de merde", // Shit-fucked
  "foutu de merde", // Shit-screwed
  "pute borgne", // One-eyed whore (compound insult)
  "face de rat", // Rat face
  "face de pet", // Fart face
  "gueule de raie", // Crack face
  "tronche de cake", // Cake face / ugly mug
  "tronche de cul", // Ass face
  "tronche de merde", // Shit face
  "sale tronche", // Dirty face
  "sale face", // Dirty face
  "sale gueule de con", // Dirty idiot face
  "pauvre type", // Pathetic guy
  "pauvre fille", // Pathetic girl
  "pauvre merde", // Pathetic shit
  "pauvre tache", // Pathetic stain
  "tache", // Stain / loser
  "tocsin", // Alarm bell / annoying person
  "relou de première", // First-class annoying
  "je t'encule profond", // I fuck you deep in the ass
  "nique tout le monde", // Fuck everyone
  "nique la vie", // Fuck life
  "nique le système", // Fuck the system
  "bande de bâtards", // Bunch of bastards
  "bande de fils de pute", // Bunch of sons of bitches
  "bande de connards", // Bunch of assholes
  "bande d'enculés", // Bunch of ass-fuckers
  "bande de merdes", // Bunch of shits
  "tous des cons", // All idiots
  "tous des enculés", // All ass-fuckers
  "tous des putes", // All whores
  "rien à battre", // Don't give a damn
  "rien à carrer", // Don't give a fuck (verlan-ish)
  "on s'en tape", // We don't care (slang)
  "on s'en branle", // We don't give a wank
  "on s'en carre", // We don't give a fuck
  "grosse merde", // Big shit
  "petit merdeux", // Little shithead
  "petite merdeuse", // Fem little shithead
  "enflure", // Swelling / scumbag
  "sac à merde ambulant", // Walking shit bag
  "triple connard", // Triple asshole
  "triple enculé", // Triple ass-fucker
  "ultra-con", // Ultra-idiot
  "méga-con", // Mega-idiot
  "super connard", // Super asshole
  "sale enfoiré de merde", // Dirty shitty scumbag
  "putain d'enfoiré", // Fucking scumbag
  "putain d'enculé", // Fucking ass-fucker
  "putain de fils de pute", // Fucking son of a bitch
  "putain de bâtard", // Fucking bastard
  "putain de merde de sa race", // Fucking shit of his race
  "bordel de putain", // Brothel of whore
  "quel enculé", // What an ass-fucker
  "quelle pute", // What a whore
  "quel bâtard", // What a bastard
  "quel fils de pute", // What a son of a bitch
  "espèce d'ordure", // You piece of trash
  "espèce de charogne", // You carrion
  "espèce de vermine", // You vermin
  "espèce de cancrelat", // You cockroach
  "espèce de larve", // You larva
  "espèce de sous-merde", // You sub-shit
  "vermine de merde", // Shitty vermin
  "vermine", // Vermin
  "ramassis de merde", // Heap of shit
  "amas de merde", // Mass of shit
  "je te crache dessus", // I spit on you
  "je te chie dans la bouche", // I shit in your mouth

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "sale putain", // Dirty whore
  "sale enfoiré", // Dirty bastard
  "sale chienne", // Dirty bitch (f.)
  "sale type", // Dirty dude
  "sale porc", // Dirty pig
  "sale pouffiasse", // Dirty slut
  "sale clochard", // Dirty bum
  "sale ordure", // Dirty filth
  "sale vermine", // Dirty vermin
  "sale enflure", // Dirty swelling (insult)
  "sale raclure", // Dirty scraping
  "sale merdeux", // Dirty shitty (person)
  "petit connard", // Little bastard
  "petite pute", // Little whore
  "petit enculé", // Little ass-fucked
  "gros connard", // Big bastard
  "grosse connasse", // Big bitch
  "gros enculé", // Big ass-fucked
  "gros bâtard", // Big bastard
  "gros tas de merde", // Big pile of shit
  "grosse baleine", // Big whale
  "gros plein de merde", // Big full of shit
  "gros naze", // Big loser
  "gros bouffon", // Big buffoon
  "gros débile", // Big moron
  "putain de ta race", // Whore of your race
  "bordel de cul", // Brothel of ass
  "bordel à cul", // Ass brothel
  "nom de dieu de merde", // Name of God of shit
  "nom de dieu de bordel", // Name of God of brothel
  "foutu connard", // Damned bastard
  "foutu enculé", // Damned ass-fucked
  "foutu merdeux", // Damned shitty one
  "foutue salope", // Damned slut
  "foutue pute", // Damned whore
  "sacrée merde", // Sacred shit (damn)
  "sacré connard", // Sacred bastard
  "sacrée connasse", // Sacred bitch
  "sacrée putain", // Sacred whore
  "satanée merde", // Satanic shit
  "fichu connard", // Damned bastard
  "fichue salope", // Damned slut
  "p'tit con", // Lil idiot
  "p'tite pute", // Lil whore
  "p'tit enculé", // Lil ass-fucked
  "pauvre connard", // Poor bastard
  "pauvre connasse", // Poor bitch
  "pauvre mec", // Poor dude (pathetic)
  "pauvre naze", // Poor loser
  "triple con", // Triple idiot
  "double buse", // Double buzzard (idiot)
  "espèce d'enculé", // Species of ass-fucked
  "espèce de connasse", // Species of bitch
  "espèce de pute", // Species of whore
  "espèce d'abruti", // Species of dimwit
  "espèce de crétin", // Species of cretin
  "espèce de débile", // Species of moron
  "espèce d'imbécile", // Species of imbecile
  "espèce d'idiot", // Species of idiot
  "enculé de ta mère", // Ass-fucked of your mother
  "nique ta grand-mère", // Fuck your grandmother
  "nique ta sœur", // Fuck your sister
  "va te branler", // Go jerk off
  "va sucer", // Go suck
  "va bouffer de la merde", // Go eat shit
  "je te crache à la gueule", // I spit in your face
  "je vais te niquer", // I'll fuck you
  "je vais te démonter", // I'll dismantle you
  "je vais te baiser", // I'll fuck you
  "ta gueule", // Shut your face
  "ferme ton clapet", // Shut your flap
  "ta bouche", // Your mouth (shut up)

  // ========================================
  // === Quebec French =====================
  // ========================================
  "criss", // Christ short
  "tabarnac", // Tabernacle variant
  "taboire", // Tabernacle variant
  "estie", // Host variant
  "esti", // Host variant
  "hostie", // Host formal
  "cibolac", // Ciborium variant
  "sacre", // Sacred (swear base)
  "batêche", // Baptism variant
  "mauditement", // Damnedly (Quebec)
  "vierge", // Virgin swear
  "saint-ciboire", // Saint ciborium
  "saint-sacrament", // Saint sacrament
  "câlice de crisse", // Chalice of Christ
  "esti de câlice", // Host of chalice
  "câlice de merde", // Chalice of shit
  "tabarnak de merde", // Tabernacle of shit
  "ostie de merde", // Host of shit
  "décâlissé", // Chaliced-out (destroyed)
  "plottes", // Cunts (Quebec)
  "se crosser", // To jerk off (Quebec)
  "chieuse", // Shitter (f.) (Quebec)
  "habitant", // Inhabitant / hick (Quebec)
  "taouin", // Idiot (Quebec)
  "tarla", // Idiot (Quebec)
  "tarlais", // Idiot variant (Quebec)
  "sans-dessein", // Without purpose (useless, Quebec)
  "guidounne", // Slut variant (Quebec)
  "pitoune", // Bimbo (Quebec)
  "mange de la marde", // Eat shit (Quebec)
  "baveux", // Drooler / arrogant (Quebec)
  "baveuse", // Drooler (f.) (Quebec)
  "frais chié", // Freshly shat (arrogant, Quebec)
  "fraîche chiée", // Freshly shat (f.) (Quebec)
  "enfant de nanane", // Child of candy (Quebec euphem.)
  "mon ostie", // My host (Quebec threat)
  "mon câlice", // My chalice (Quebec threat)
  "mon tabarnak", // My tabernacle (Quebec threat)
  "mon crisse", // My Christ (Quebec threat)
  "toé mon ostie", // You my host (Quebec threat)
  "mange d'la marde", // Eat shit (Quebec colloquial)
  "décâlisse", // Get the fuck out (Quebec)
  "décrisse", // Get the fuck out (Quebec)

  // ========================================
  // === Belgian French ====================
  // ========================================
  "une fois connard", // Once bastard (Belgian emphasis)
  "snotneus", // Snot nose (Belgian)
  "klootzak", // Ball sack (Belgian, from Dutch)
  "zot", // Crazy (Belgian)
  "zotteke", // Little crazy (Belgian)
  "stront", // Shit (Belgian, from Dutch)
  "smeerkaas", // Spread cheese (annoying, Belgian)
  "stommerik", // Stupid one (Belgian)
  "uilskuiken", // Owl chick / fool (Belgian)

  // ========================================
  // === Swiss French ======================
  // ========================================
  "banane", // Banana (idiot, Swiss)
  "couillon de merde", // Shitty fool (Swiss)
  "sapristi", // Sacredness (Swiss mild swear)
  "vingt dieux", // Twenty gods (Swiss swear)
  "cré nom de Dieu", // Created name of God (Swiss)
  "bon sang de bois", // Good blood of wood (Swiss)

  // ========================================
  // === African French ====================
  // ========================================
  "bordel de Dieu", // Brothel of God (West African)
  "gueule de singe", // Monkey face (offensive)
  "bounty", // Bounty (Black outside white inside)
  "blédard", // Person from the bled (countryside, derog.)
  "gaouri", // Non-Muslim (African French derog.)

  // ========================================
  // === Antillean/Caribbean French ========
  // ========================================
  "coucoune", // Vagina (Antillean)
  "couloune", // Vagina variant (Antillean)
  "makrel", // Gossiper / slut (Antillean)
  "vyé manman", // Ugly/bad mama (Antillean insult)
  "manman ou", // Your mother (Antillean insult)
  "lanmè manman ou", // Your mother's sea (Antillean)
  "kaka", // Shit (Antillean Creole)
  "malpropre", // Dirty person (Antillean)
  "fènéyan", // Lazy person (Antillean)
  "vakabò", // Vagabond (Antillean Creole)

  // ========================================
  // === Reunion French ====================
  // ========================================
  "bordel de la mare", // Brothel of the pond (Reunion)
  "casse couille", // Ball breaker (Reunion)
  "couilles molles", // Soft balls (Reunion wimp)
  "tête de nœud", // Knot head / dick head (Reunion)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "faire une pipe", // To give a blowjob
  "suceur", // Sucker (m.)
  "suceuse", // Sucker (f.)
  "pompeuse", // Pumper (f.)
  "pompier", // Fireman / blowjob
  "enculer", // To ass-fuck
  "enculeur", // Ass-fucker
  "partouzeur", // Orgy participant (m.)
  "partouzeuse", // Orgy participant (f.)
  "triolisme", // Threesome
  "bondage", // Bondage
  "fétichisme", // Fetishism
  "voyeurisme", // Voyeurism
  "perversion", // Perversion
  "obsédé sexuel", // Sexual obsessive
  "escort", // Escort
  "call-girl", // Call girl
  "gigolo", // Gigolo
  "salaude", // Bastard (f.)
  "dépravé", // Depraved
  "dépravée", // Depraved (f.)
  "lascif", // Lascivious
  "lascive", // Lascivious (f.)
  "libidineuse", // Libidinous (f.)
  "cochonner", // To pig around
  "porcherie", // Pigsty
  "trousseur de jupons", // Skirt chaser
  "coureur de jupons", // Skirt runner (womanizer)
  "coureuse", // Easy woman
  "fion", // Asshole
  "rondelle", // Ring / asshole
  "troufion", // Asshole / private (military)
  "raie du cul", // Ass crack
  "verge", // Penis (formal)

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "crotte de nez", // Booger
  "colombin", // Turd
  "fiente", // Droppings
  "pisseur", // Pisser (m.)
  "pisse", // Piss
  "péter", // To fart
  "prout", // Toot
  "prouter", // To toot
  "vesser", // To fart silently
  "vesse", // Silent fart
  "morve", // Snot
  "glaviot", // Loogie
  "glavioter", // To spit loogies
  "molard", // Loogie
  "gerbe", // Puke
  "vomissure", // Vomit
  "dégobiller", // To puke

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "âne", // Donkey (stupid)
  "ballot", // Bale (fool)
  "benêt", // Simpleton
  "bêta", // Fool
  "bêtasse", // Stupid (f.)
  "bête", // Stupid / beast
  "bête à manger du foin", // Stupid enough to eat hay
  "bourrique", // Donkey (stubborn/stupid)
  "buse", // Buzzard (stupid)
  "cloche", // Bell (stupid person)
  "couillonne", // Fool (f.)
  "courge", // Squash (stupid)
  "cruche", // Jug (stupid)
  "dadais", // Gawk
  "dinde", // Turkey (stupid woman)
  "dindon", // Turkey (stupid man)
  "empoté", // Clumsy
  "empotée", // Clumsy (f.)
  "flemmard", // Lazybones
  "flemmarde", // Lazybones (f.)
  "ganache", // Jaw / fool
  "glandeur", // Slacker
  "glandeuse", // Slacker (f.)
  "glander", // To slack off
  "gogo", // Gullible person
  "gourde", // Gourd (stupid woman)
  "imbécile heureux", // Happy imbecile
  "inculte", // Uncultured
  "jobard", // Gullible fool
  "loser", // Loser
  "mollasson", // Sluggish
  "mollassonne", // Sluggish (f.)
  "navet", // Turnip (flop)
  "neuneu", // Dummy
  "nigaud", // Simpleton
  "nigaude", // Simpleton (f.)
  "noix", // Nut (stupid)
  "nul à chier", // Shit useless
  "nullard", // Loser
  "nullarde", // Loser (f.)
  "patate", // Potato (stupid)
  "péquenaud", // Hick
  "péquenaude", // Hick (f.)
  "pignouf", // Boor
  "pigeon", // Pigeon (sucker)
  "poire", // Pear (sucker)
  "pomme", // Apple (sucker)
  "sot", // Fool
  "sotte", // Fool (f.)
  "tanche", // Tench (fish / stupid)
  "tête de linotte", // Linnet head (scatterbrain)
  "tête de mule", // Mule head (stubborn)
  "tête de pioche", // Pickaxe head (stubborn)
  "truffe", // Truffle (stupid)
  "zigoto", // Weirdo

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "boudine", // Stuffed sausage (fat, f.)
  "boudinée", // Stuffed into clothes
  "cageot", // Crate (ugly)
  "baleine", // Whale (fat)
  "hippopotame", // Hippopotamus (fat)
  "tonneau", // Barrel (fat)
  "tas de graisse", // Pile of grease
  "squelette", // Skeleton (too thin)
  "planche à pain", // Breadboard (flat-chested)
  "tête de cul", // Ass head
  "tête à claques", // Face begging for slaps
  "gueule cassée", // Broken face
  "nain de jardin", // Garden gnome

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "arriviste", // Social climber
  "cafardeur", // Snitch
  "cafardeuse", // Snitch (f.)
  "cafteur", // Snitch
  "cafteuse", // Snitch (f.)
  "commère", // Gossip
  "dégonflé", // Deflated (coward)
  "dégonflée", // Deflated (f.)
  "enquiquineur", // Annoying person (m.)
  "enquiquineuse", // Annoying person (f.)
  "escroc", // Crook
  "fainéant", // Lazy
  "fainéante", // Lazy (f.)
  "faux-jeton", // False token (hypocrite)
  "fouille-merde", // Shit digger (gossip)
  "fouteur de merde", // Shit stirrer
  "fouteuse de merde", // Shit stirrer (f.)
  "froussard", // Coward
  "froussarde", // Coward (f.)
  "geignard", // Whiner
  "geignarde", // Whiner (f.)
  "grigou", // Miser
  "grognon", // Grumbler
  "grognonne", // Grumbler (f.)
  "magouilleur", // Schemer
  "magouilleuse", // Schemer (f.)
  "manipulateur", // Manipulator
  "manipulatrice", // Manipulator (f.)
  "menteur", // Liar
  "menteuse", // Liar (f.)
  "parasite", // Parasite
  "pique-assiette", // Plate-pricker (freeloader)
  "pleurnichard", // Crybaby (m.)
  "pleurnicharde", // Crybaby (f.)
  "profiteur", // Profiteer
  "profiteuse", // Profiteer (f.)
  "radin", // Cheapskate
  "radine", // Cheapskate (f.)
  "trouillarde", // Coward (f.)
  "vendu", // Sold out (traitor)
  "voleur", // Thief
  "voleuse", // Thief (f.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "arabe de merde", // Shitty Arab
  "beurette", // Arab girl (can be derog.)
  "mongole", // Mongoloid (f.)
  "trisomique", // Down syndrome (as insult)
  "autiste", // Autistic (as insult)
  "péquenot", // Peasant (derog.)
  "bouseux", // Cow-pat covered (hick)
  "bouseuse", // Cow-pat covered (f.)
  "cul-terreux", // Muddy-assed (farmer)
  "prolo", // Prole
  "babtou", // White person (verlan)
  "babtou fragile", // Fragile white person
  "franchouillard", // French (derog.)
  "franchouillarde", // French (f. derog.)
  "facho", // Fascist
  "gauchiasse", // Leftist (very derog.)

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "p*tain", // Putain with *
  "c*nnard", // Connard with *
  "c*nnasse", // Connasse with *
  "enc*lé", // Enculé with *
  "encu1é", // Enculé with 1
  "s4lope", // Salope with 4
  "b@iser", // Baiser with @
  "b*iser", // Baiser with *
  "p*te", // Pute with *
  "ntr", // Nique ta race abbreviation
  "p é d é", // Pédé spaced
  "m.e.r.d.e", // Merde dotted
  "c o n n a r d", // Connard spaced
  "s a l o p e", // Salope spaced
  "n i q u e", // Nique spaced
  "p u t a i n", // Putain spaced
  "e n c u l é", // Enculé spaced

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "boulet", // Cannonball (burden/idiot)
  "enfoirée", // Bastard (f.)
  "fragile", // Fragile (wimp)
  "mytho", // Liar (mythomaniac)
  "seum", // Anger/frustration (Arabic origin)
  "teubé", // Bête (verlan, stupid)

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- niquer (to fuck) ---
  "niques", // You fuck
  "niquent", // They fuck
  "niquons", // We fuck
  "niquais", // I was fucking
  "niquait", // He/she was fucking
  "niquerai", // I will fuck
  "niqueras", // You will fuck
  "niquerait", // Would fuck
  // --- baiser (to fuck) ---
  "baises", // You fuck
  "baisée", // Fucked (f.)
  "baisent", // They fuck
  "baisons", // We fuck
  "baisais", // I was fucking
  "baisait", // He/she was fucking
  "baiserai", // I will fuck
  // --- enculer (to ass-fuck) ---
  "encule", // Ass-fuck (present)
  "encules", // You ass-fuck
  "enculés", // Ass-fucked (pl.)
  "enculées", // Ass-fucked (f. pl.)
  "enculant", // Ass-fucking
  "enculais", // Was ass-fucking
  // --- emmerder (to shit-bother) ---
  "emmerde", // Shit-bother
  "emmerdes", // You shit-bother
  "emmerdé", // Shit-bothered
  "emmerdée", // Shit-bothered (f.)
  // --- branler (to jerk off) ---
  "branle", // Jerk off
  "branles", // You jerk off
  "branlé", // Jerked off
  // --- chier (to shit) ---
  "chie", // Shit (present)
  "chies", // You shit
  "chié", // Shat
  "chiée", // Shat (f.) / lots of
  "chions", // We shit
  // --- foutre (to fuck/put) ---
  "fous", // Fuck/put (present)
  "fout", // He/she fucks
  "foutent", // They fuck
  "foutais", // Was fucking
  "foutaise", // Bullshit
  "foutaises", // Bullshit (pl.)
  // --- dégueulasser (to make disgusting) ---
  "dégueulasses", // Disgusting (pl.)
  "dégueulassé", // Made disgusting

  // ========================================
  // === Diminutive & Augmentative =========
  // ========================================
  "putassier", // Whorish (m.)
  "putassière", // Whorish (f.)
  "saloperies", // Filths / trash (pl.)
  "merdiques", // Shitty (pl.)
  "merdasse", // Big shit
  "connardise", // Bastardry
  "conneries", // Stupidities
  "foirade", // Shit-out (failure)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "je vais t'égorger", // I'll slit your throat
  "je vais te planter", // I'll stab you
  "je vais te latter", // I'll kick you
  "je vais te défoncer la gueule", // I'll smash your face
  "je vais te fracasser", // I'll shatter you
  "je vais te démolir", // I'll demolish you
  "je vais te massacrer", // I'll massacre you
  "je vais te casser les dents", // I'll break your teeth
  "je vais te péter la tronche", // I'll smash your face
  "dégage", // Get out
  "dégage connard", // Get out bastard
  "crève la bouche ouverte", // Die with mouth open
  "meurs", // Die (imperative)
  "je t'éclate", // I'll burst you
  "je te défonce", // I'll smash you
  "on va te niquer", // We'll fuck you up
  "on va te défoncer", // We'll smash you

  // ========================================
  // === Additional Insults & Phrases ======
  // ========================================
  "avorton", // Runt
  "brute", // Brute
  "déchet", // Waste
  "goujat", // Boor
  "gredine", // Scoundrel (f.)
  "gueux", // Beggar / wretch
  "gueuse", // Beggar (f.) / hussy
  "halunke", // Scoundrel
  "malfrat", // Criminal
  "malotru", // Boor
  "malotrue", // Boor (f.)
  "minus", // Runt
  "misérable", // Miserable wretch
  "rebut", // Reject / waste
  "rebut de la société", // Reject of society
  "résidu de capote", // Condom residue
  "résidu de fausse couche", // Miscarriage residue
  "serpent", // Snake
  "traître", // Traitor
  "traîtresse", // Traitor (f.)
  "truand", // Crook
  "truande", // Crook (f.)
  "vautour", // Vulture
  "vipère", // Viper

  // ========================================
  // === Verlan (Reversed Slang) ===========
  // ========================================
  "reuf", // Frère (verlan, brother)
  "reum", // Mère (verlan, mother)
  "reup", // Père (verlan, father)
  "téci", // Cité (verlan, projects)
  "zyva", // Vas-y (verlan, go on)
  "belek", // Be careful (street)

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "parbleu", // By God
  "jésus-christ de merde", // Jesus Christ of shit
  "sacré bordel de dieu", // Sacred brothel of God

  // ========================================
  // === Additional Crude Compounds ========
  // ========================================
  "trou à bites", // Dick hole
  "chie-en-lit", // Shit in bed (messy)
  "cul-de-sac", // Ass of sack (dead end)
  "brise-couilles", // Ball breaker
  "va-nu-pieds", // Goes barefoot (bum)
  "crache-sang", // Blood spitter
  "gratte-papier", // Paper scratcher (bureaucrat)
  "rond-de-cuir", // Leather circle (desk jockey)
  "planche à repasser", // Ironing board (flat woman)
  "sac d'os", // Bag of bones
  "tête de mort", // Death head
  "tête de gland", // Glans head
  "tête de chibre", // Dick head
  "gros cul", // Big ass
  "gros nichons", // Big tits
  "grosse pétasse", // Big bimbo
  "pétasses", // Bimbos (pl.)
  "pouffiasse", // Slut
  "pouf", // Slut (short)
  "pouffe", // Slut variant
  "roulure", // Hussy
  "marie-couche-toi-là", // Mary lie-down-there (slut)
  "marie-salope", // Dirty Mary (slut)
  "fille de joie", // Girl of joy (prostitute)
  "fille des rues", // Girl of the streets
  "ribaude", // Wench (archaic)
  "goton", // Slut (archaic)
  "raccrocheuse", // Street hooker
  "michto", // Gold digger
  "suceuse de bites", // Dick sucker (f.)
  "bouffeuse de bites", // Dick eater (f.)
  "avaleuse de sabres", // Sword swallower (f.)
  "avaleuse de foutre", // Cum swallower (f.)
  "branleur professionnel", // Professional wanker
  "chieur professionnel", // Professional shitter
  "emmerdeur professionnel", // Professional shit-stirrer
  "brouteur de minou", // Pussy eater
  "lécheur de cul", // Ass licker
  "lécheur de bottes", // Boot licker
  "lécheur de chiotte", // Toilet licker
  "bouffeur de merde", // Shit eater
  "racleur de fond", // Bottom scraper
  "fond de bidet", // Bottom of bidet (lowlife)
  "fond de poubelle", // Bottom of trash can
  "lie de la société", // Dregs of society
  "rebut de l'humanité", // Reject of humanity
  "raté de la vie", // Life failure
  "ratée de la vie", // Life failure (f.)
  "zéro pointé", // Zero with a point
  "bolos", // Sucker
  "flaque de pisse", // Puddle of piss
  "morceau de merde", // Piece of shit
  "paquet de merde", // Package of shit
  "seau de merde", // Bucket of shit
  "crotte de bique", // Goat turd
  "fiente de pigeon", // Pigeon shit
  "trou duc", // Ass (phonetic spelling of trou du cul)
];

export default frenchBadWords;
