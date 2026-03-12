// src/languages/french-words.ts

/**
 * French profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in French
 */
const frenchBadWords: Record<string, { s: number; c: number }> = {
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "merde": { s: 3, c: 4 }, // Shit
  "putain": { s: 3, c: 4 }, // Whore / Fuck! (very common interjection)
  "conne": { s: 1, c: 4 }, // Idiot, asshole, cunt (fem./masc.)
  "connard": { s: 3, c: 4 },
  "connasse": { s: 3, c: 4 }, // Bigger asshole/bitch (masc./fem.)
  "cul": { s: 4, c: 3 }, // Ass
  "bite": { s: 3, c: 4 }, // Dick, cock (vulgar)
  "chatte": { s: 5, c: 5 }, // Pussy, cunt (vulgar)
  "couilles": { s: 4, c: 4 }, // Balls (vulgar)
  "enculé": { s: 4, c: 3 },
  "enculée": { s: 5, c: 5 }, // Motherfucker, asshole (lit. fucked in the ass) (masc./fem.)
  "salope": { s: 3, c: 4 }, // Bitch, slut
  "salaud": { s: 3, c: 4 }, // Bastard, swine (male)
  "bordel": { s: 4, c: 5 }, // Brothel / Mess / Fuck!, Damn! (interjection)
  "foutre": { s: 4, c: 5 }, // Sperm, cum / To do / To fuck / Nothing (je m'en fous - I don't give a fuck)
  "niquer": { s: 4, c: 5 }, // To fuck (verlan slang, very common & vulgar)
  "baise": { s: 4, c: 3 },
  "baiser": { s: 4, c: 5 }, // Kiss (standard) / Fuck (verb/noun - vulgar)
  "chier": { s: 4, c: 5 }, // To shit
  "pisser": { s: 3, c: 4 }, // To piss
  "gueule": { s: 4, c: 3 }, // Animal mouth / Shut up! (ta gueule!)

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Merde ---
  "merdeux": { s: 3, c: 4 },
  "merdeuse": { s: 3, c: 5 }, // Shitty kid, brat
  "merdique": { s: 3, c: 5 }, // Shitty, crappy
  "emmerder": { s: 3, c: 4 }, // To piss off, to annoy
  "emmerdeur": { s: 3, c: 4 },
  "emmerdeuse": { s: 3, c: 4 }, // Annoying person
  "démerder": { s: 3, c: 4 },
  "se démerder": { s: 3, c: 4 }, // To manage, to sort things out (informal)
  "putain de merde": { s: 3, c: 5 }, // Fucking shit
  "sac à merde": { s: 3, c: 5 }, // Piece of shit (lit. bag of shit)
  // --- Putain ---
  "putain de": { s: 3, c: 5 }, // Fucking (adjective modifier, e.g., putain de voiture - fucking car)
  "fils de pute": { s: 3, c: 4 }, // Son of a bitch
  "fille de pute": { s: 3, c: 4 }, // Daughter of a bitch
  "putasserie": { s: 5, c: 4 }, // Bitchy behavior / Whore stuff
  "pute": { s: 5, c: 4 }, // Short for putain, whore
  // --- Con / Connard ---
  "connerie": { s: 1, c: 4 }, // Stupidity, bullshit
  "déconner": { s: 3, c: 4 }, // To talk nonsense, to screw up
  "à la con": { s: 1, c: 4 }, // Shitty, stupid (adjectival phrase)
  "pauvre con": { s: 1, c: 4 }, // Poor idiot / Pathetic asshole
  "roi des cons": { s: 1, c: 4 }, // King of idiots
  // --- Cul ---
  "trou du cul": { s: 3, c: 4 },
  "trouduc": { s: 3, c: 4 }, // Asshole (lit. ass hole)
  "lèche-cul": { s: 3, c: 4 }, // Ass-kisser
  "botter le cul": { s: 3, c: 4 }, // Kick someone's ass
  "avoir le cul bordé de nouilles": { s: 3, c: 4 }, // To be very lucky (vulgar)
  "se casser le cul": { s: 3, c: 4 }, // Bust one's ass (work hard)
  "faux-cul": { s: 3, c: 4 }, // Hypocrite
  // --- Bite / Chatte / Couilles ---
  "casse-couilles": { s: 3, c: 4 }, // Annoying person (lit. ball-breaker)
  "avoir des couilles": { s: 4, c: 4 }, // To have guts/balls
  "petite bite": { s: 4, c: 4 }, // Small dick (insult)
  "lécher la chatte": { s: 4, c: 4 }, // Lick pussy
  "sucer la bite": { s: 4, c: 4 }, // Suck dick
  // --- Enculé / Salope / Salaud ---
  "enculage": { s: 3, c: 4 }, // Act of sodomy / Getting screwed over
  "enculer (qqn)": { s: 3, c: 5 }, // To fuck someone (in the ass) / To screw someone over
  "va te faire enculer": { s: 3, c: 5 }, // Go fuck yourself
  "espèce de salope": { s: 3, c: 4 }, // You bitch
  "grosse salope": { s: 1, c: 4 }, // Fat bitch/slut
  "vieux salaud": { s: 3, c: 4 }, // Old bastard
  // --- Bordel ---
  "quel bordel!": { s: 3, c: 5 }, // What a mess! / What the fuck!
  "foutre le bordel": { s: 3, c: 4 }, // To make a mess, to cause chaos
  // --- Foutre / Niquer / Baiser ---
  "va te faire foutre": { s: 3, c: 5 }, // Go fuck yourself
  "rien à foutre": { s: 3, c: 5 }, // Don't give a fuck
  "s'en foutre": { s: 3, c: 5 }, // Not to give a fuck
  "je m'en fous": { s: 3, c: 5 }, // I don't give a fuck
  "foutu": { s: 3, c: 4 },
  "foutue": { s: 3, c: 4 }, // Screwed, broken, damned
  "nique ta mère": { s: 3, c: 5 }, // Fuck your mother (very offensive)
  "nique sa mère": { s: 3, c: 5 }, // Fuck his/her mother / Expression of anger/frustration
  "va te faire niquer": { s: 3, c: 5 }, // Go get fucked
  "baisable": { s: 3, c: 5 }, // Fuckable
  "baiseur": { s: 3, c: 4 },
  "baiseuse": { s: 3, c: 5 }, // Fucker (one who fucks)
  // --- Chier / Pisser ---
  "fait chier": { s: 3, c: 4 }, // It's annoying / Pisses me off
  "casse les pieds": { s: 1, c: 4 }, // Annoying (milder than fait chier)
  "va chier": { s: 3, c: 5 }, // Go take a shit / Fuck off
  "pipi": { s: 3, c: 4 }, // Pee (childish, but used)
  // --- Gueule ---
  "ta gueule!": { s: 3, c: 5 }, // Shut up! (very common, aggressive)
  "ferme ta gueule": { s: 3, c: 4 }, // Shut your mouth! (stronger)
  "gueuler": { s: 3, c: 4 }, // To shout, to yell
  "engueuler": { s: 3, c: 4 }, // To tell someone off, to scold
  "gueule de bois": { s: 3, c: 4 }, // Hangover
  "sale gueule": { s: 1, c: 4 }, // Ugly face / Untrustworthy look

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "idiot": { s: 1, c: 4 },
  "idiote": { s: 1, c: 4 }, // Idiot
  "imbécile": { s: 1, c: 4 }, // Imbecile
  "stupide": { s: 1, c: 4 }, // Stupid
  "débile": { s: 1, c: 4 }, // Moron, retarded (offensive)
  "crétin": { s: 1, c: 4 },
  "crétine": { s: 1, c: 4 }, // Cretin
  "abruti": { s: 1, c: 4 },
  "abrutie": { s: 1, c: 4 }, // Dimwit, numbskull
  "andouille": { s: 1, c: 4 }, // Idiot (lit. sausage)
  "bouffon": { s: 1, c: 4 },
  "bouffonne": { s: 1, c: 4 }, // Buffoon, clown
  "nul": { s: 1, c: 4 },
  "nulle": { s: 1, c: 4 }, // Useless, sucks
  "minable": { s: 1, c: 4 }, // Pathetic, lousy
  "taré": { s: 1, c: 4 },
  "tarée": { s: 1, c: 4 }, // Crazy, nuts (offensive)
  "cinglé": { s: 1, c: 4 },
  "cinglée": { s: 1, c: 4 }, // Crazy, nuts
  "fou": { s: 1, c: 4 },
  "folle": { s: 1, c: 4 }, // Mad, crazy
  "niais": { s: 1, c: 4 },
  "niaise": { s: 1, c: 4 }, // Simpleton, naive

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "pédé": { s: 5, c: 4 }, // Faggot (very offensive slang for homosexual)
  "gouine": { s: 5, c: 4 }, // Dyke (very offensive slang for lesbian)
  "travelo": { s: 5, c: 4 }, // Tranny (offensive for transvestite/transgender)
  "nègre": { s: 5, c: 4 },
  "négresse": { s: 5, c: 5 }, // Negro (extremely offensive racial slur)
  "bougnoule": { s: 5, c: 4 }, // Very offensive slur for North Africans/Arabs
  "chinetoque": { s: 5, c: 4 }, // Very offensive slur for Chinese/East Asian people
  "rital": { s: 5, c: 4 }, // Offensive slur for Italian people
  "polack": { s: 3, c: 4 }, // Offensive slur for Polish people
  "yid": { s: 3, c: 4 }, // Offensive slur for Jewish people (from Yiddish)
  "youpin": { s: 5, c: 4 },
  "youpine": { s: 5, c: 4 }, // Offensive slur for Jewish people

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "bâtard": { s: 1, c: 4 },
  "bâtarde": { s: 3, c: 4 }, // Bastard
  "ordure": { s: 1, c: 4 }, // Scum, filth (person)
  "pourriture": { s: 1, c: 4 }, // Rot, decay / Scum, rotten person
  "raclure": { s: 1, c: 4 }, // Scum (lit. scrapings)
  "fumier": { s: 3, c: 4 }, // Manure / Bastard, swine
  "chien": { s: 1, c: 4 },
  "chienne": { s: 1, c: 4 }, // Dog / Bitch
  "porc": { s: 1, c: 4 }, // Pig / Dirty person
  "cochon": { s: 1, c: 4 },
  "cochonne": { s: 1, c: 4 }, // Pig / Dirty person / Kinky
  "vache": { s: 1, c: 4 }, // Cow / Bitch! (interjection)
  "chameau": { s: 1, c: 4 }, // Camel / Mean person (fem.)
  "morue": { s: 5, c: 4 }, // Codfish / Whore, bitch
  "thune": { s: 1, c: 3 }, // Money (slang, can be used dismissively)
  "pognon": { s: 1, c: 3 }, // Money (slang, dough)
  "fric": { s: 1, c: 3 }, // Money (slang, cash)
  "crevard": { s: 1, c: 4 },
  "crevarde": { s: 1, c: 4 }, // Selfish freeloader, scumbag
  "clochard": { s: 1, c: 4 },
  "clocharde": { s: 1, c: 4 }, // Bum, tramp
  "moche": { s: 1, c: 4 }, // Ugly
  "laid": { s: 3, c: 4 },
  "laide": { s: 1, c: 4 }, // Ugly
  "dégueulasse": { s: 1, c: 4 }, // Disgusting, gross
  "puant": { s: 1, c: 4 },
  "puante": { s: 1, c: 4 }, // Stinking / Obnoxious person
  "plouc": { s: 1, c: 4 }, // Hick, country bumpkin
  "pécor": { s: 1, c: 4 }, // Hick, peasant (derogatory)
  "blaireau": { s: 1, c: 4 }, // Badger / Idiot, loser
  "gland": { s: 3, c: 4 }, // Acorn / Idiot, dickhead
  "branleur": { s: 1, c: 4 },
  "branleuse": { s: 1, c: 4 }, // Wanker (lit. one who wanks)
  "branler": { s: 4, c: 4 }, // To wank, masturbate / To do nothing
  "se branler": { s: 4, c: 4 }, // To masturbate
  "ne rien branler": { s: 3, c: 5 }, // To do fuck all
  "poufiasse": { s: 1, c: 4 }, // Vulgar term for woman (bimbo, slutty - very offensive)

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "mince": { s: 2, c: 3 }, // Thin / Damn!, Shoot! (mild euphemism for merde)
  "zut": { s: 1, c: 4 }, // Darn!, Shoot! (mild)
  "flûte": { s: 1, c: 4 }, // Flute / Darn! (mild)
  "saperlipopette": { s: 3, c: 4 }, // Good grief! (old-fashioned, humorous)
  "purée": { s: 2, c: 3 }, // Mashed potatoes / Euphemism for putain
  "punaise": { s: 2, c: 3 }, // Thumb tack / Euphemism for putain
  "sacré bleu": { s: 3, c: 4 }, // Good heavens! (stereotypical, old)
  "la vache!": { s: 3, c: 5 }, // The cow! / Wow!, Holy cow! (expression of surprise)
  "dégage!": { s: 3, c: 5 }, // Get lost!, Beat it!
  "fiche le camp!": { s: 3, c: 5 }, // Get lost!, Piss off! (stronger than dégage)
  "tais-toi!": { s: 3, c: 5 }, // Be quiet! (can be rude depending on tone)
  "enculé de ta race": { s: 3, c: 5 }, // Fuck your race (very offensive)
  "ta race": { s: 3, c: 4 }, // Your race (offensive)
  "couillon": { s: 1, c: 4 }, // Idiot / Balls (regional)
  "branlette": { s: 3, c: 4 }, // Handjob
  "tantouse": { s: 3, c: 4 }, // Gay (derogatory)
  "pédéraste": { s: 3, c: 4 }, // Pederast
  "nique": { s: 3, c: 5 }, // Fuck (verb)
  "jean-foutre": { s: 3, c: 4 }, // Good-for-nothing

  // Additional French profanity & verlan
  "baisé": { s: 3, c: 5 }, // Fucked
  "bâtard de merde": { s: 3, c: 4 }, // Shit bastard
  "bolosse": { s: 1, c: 3 }, // Loser (modern slang)
  "casse-toi": { s: 3, c: 4 }, // Piss off
  "chiasse": { s: 1, c: 4 }, // Diarrhea / Coward
  "chieurchieuse": { s: 3, c: 4 }, // Pain in the ass
  "couille molle": { s: 3, c: 4 }, // Soft ball / wimp
  "crève": { s: 5, c: 5 }, // Die / Drop dead
  "enc": { s: 3, c: 4 }, // Abbreviation of enculé
  "enfoiréenfoirée": { s: 3, c: 4 }, // Bastard / Scumbag
  "fdp": { s: 3, c: 4 }, // Abbreviation: fils de pute
  "fiotte": { s: 3, c: 4 }, // Faggot (offensive)
  "grognasse": { s: 1, c: 4 }, // Ugly/nasty woman
  "keh": { s: 3, c: 4 }, // Verlan for chier (internet slang)
  "ken": { s: 3, c: 5 }, // Verlan for niquer (to fuck)
  "keuf": { s: 3, c: 4 }, // Verlan for flic (cop, derogatory)
  "meuf": { s: 3, c: 4 }, // Verlan for femme (can be neutral but used pejoratively)
  "nique sa race": { s: 3, c: 5 }, // Fuck his/her race (very offensive)
  "niquer sa mère": { s: 3, c: 5 }, // Fuck his mother
  "ntm": { s: 3, c: 4 }, // Abbreviation: nique ta mère
  "pétasse": { s: 3, c: 4 }, // Bimbo / Slut
  "péteuxpéteuse": { s: 1, c: 4 }, // Coward / Scaredy-cat
  "putain de bordel": { s: 3, c: 5 }, // Fucking hell
  "putain de sa mère": { s: 3, c: 5 }, // Fucking hell
  "roubignoles": { s: 4, c: 4 }, // Balls (testicles)
  "salopard": { s: 3, c: 4 }, // Bastard (male)
  "saloperie": { s: 3, c: 4 }, // Filthy thing / Crap
  "schnock": { s: 1, c: 4 }, // Old fool
  "ta mère": { s: 3, c: 4 }, // Your mother (often truncated insult)
  "ta mère la pute": { s: 5, c: 4 }, // Your mother the whore
  "trou de balle": { s: 3, c: 4 }, // Asshole (lit. bullet hole)
  "trouillardtrouillarde": { s: 1, c: 4 }, // Coward
  "va te faire mettre": { s: 3, c: 5 }, // Go get fucked
  "va niquer ta mère": { s: 3, c: 5 }, // Go fuck your mother

  // ========================================
  // === Compound Insults ==================
  // ========================================
  "espèce de connard": { s: 3, c: 4 }, // You bastard (lit. species of asshole)
  "espèce de con": { s: 1, c: 4 }, // You idiot
  "espèce de merde": { s: 3, c: 5 }, // You piece of shit
  "sale con": { s: 1, c: 4 }, // Dirty idiot
  "sale pute": { s: 5, c: 4 }, // Dirty whore
  "grosse pute": { s: 1, c: 4 }, // Fat whore
  "gros porc": { s: 1, c: 4 }, // Fat pig
  "gros con": { s: 1, c: 4 }, // Big idiot
  "grosse conne": { s: 1, c: 4 }, // Big idiot (fem)
  "gros dégueulasse": { s: 1, c: 4 }, // Big slob
  "sale bâtard": { s: 3, c: 4 }, // Dirty bastard
  "sale chien": { s: 1, c: 4 }, // Dirty dog
  "sale merde": { s: 3, c: 5 }, // Dirty shit
  "sale enculé": { s: 3, c: 5 }, // Dirty assfucker
  "espèce de salaud": { s: 3, c: 4 }, // You bastard
  "espèce de raclure": { s: 1, c: 4 }, // You scum
  "espèce de fumier": { s: 3, c: 4 }, // You manure/bastard
  "espèce d'enfoiré": { s: 1, c: 4 }, // You scumbag
  "sac à foutre": { s: 1, c: 4 }, // Cum bag
  "tas de merde": { s: 3, c: 5 }, // Pile of shit
  "face de cul": { s: 3, c: 4 }, // Ass face
  "tête de noeud": { s: 4, c: 4 }, // Dickhead (lit. knot head)
  "tête de con": { s: 4, c: 4 }, // Dickhead
  "tête de bite": { s: 4, c: 4 }, // Dickhead
  "tête de merde": { s: 3, c: 5 }, // Shithead
  "gueule de con": { s: 1, c: 4 }, // Idiot face
  "sombre con": { s: 1, c: 4 }, // Dark/utter idiot
  "sombre merde": { s: 3, c: 5 }, // Utter shit
  "triple buse": { s: 1, c: 4 }, // Triple buzzard (utter idiot)
  "triple andouille": { s: 1, c: 4 }, // Triple sausage (utter fool)
  "sale race": { s: 1, c: 4 }, // Dirty race (very offensive)
  "sous-merde": { s: 5, c: 5 }, // Sub-shit (subhuman insult)
  "moins que rien": { s: 1, c: 4 }, // Less than nothing
  "bonne à rien": { s: 1, c: 4 }, // Good for nothing (fem)
  "bon à rien": { s: 1, c: 4 }, // Good for nothing (masc)

  // ========================================
  // === More Vulgar Phrases ===============
  // ========================================
  "chier dans la colle": { s: 3, c: 5 }, // To shit in the glue (to cause problems)
  "se faire mettre": { s: 3, c: 5 }, // To get fucked
  "se faire enculer": { s: 3, c: 5 }, // To get ass-fucked
  "se faire baiser": { s: 3, c: 5 }, // To get fucked (over)
  "se faire niquer": { s: 3, c: 5 }, // To get fucked
  "aller se faire foutre": { s: 3, c: 5 }, // To go fuck oneself
  "nique ta race": { s: 3, c: 5 }, // Fuck your race (very offensive)
  "mange tes morts": { s: 3, c: 4 }, // Eat your dead (very offensive, especially to Arabs)
  "je t'encule": { s: 3, c: 5 }, // I fuck you in the ass
  "je te baise": { s: 3, c: 5 }, // I fuck you
  "je te nique": { s: 3, c: 5 }, // I fuck you
  "nique la police": { s: 3, c: 5 }, // Fuck the police
  "on t'a pas sonné": { s: 3, c: 4 }, // Nobody asked you (rude)
  "va te faire voir": { s: 3, c: 5 }, // Go get seen / Fuck off (mild)
  "va crever": { s: 5, c: 5 }, // Go die
  "crève la gueule ouverte": { s: 5, c: 5 }, // Die with your mouth open
  "je t'emmerde": { s: 3, c: 5 }, // I shit on you / Fuck you
  "je te chie dessus": { s: 3, c: 5 }, // I shit on you
  "je te pisse dessus": { s: 3, c: 4 }, // I piss on you
  "ferme ta putain de gueule": { s: 3, c: 5 }, // Shut your fucking mouth
  "bouffe ma bite": { s: 4, c: 4 }, // Eat my dick
  "suce ma bite": { s: 4, c: 4 }, // Suck my dick
  "lèche-moi le cul": { s: 3, c: 4 }, // Lick my ass
  "tu pues de la gueule": { s: 3, c: 4 }, // Your mouth stinks
  "tu pues du cul": { s: 3, c: 4 }, // Your ass stinks

  // ========================================
  // === Quebec French (Joual) =============
  // ========================================
  "tabernac": { s: 3, c: 4 }, // Tabernacle (Quebec swear)
  "tabarnak": { s: 3, c: 4 }, // Tabernacle (common spelling)
  "câlice": { s: 3, c: 4 }, // Chalice (Quebec swear)
  "calice": { s: 3, c: 4 }, // Chalice (without accent)
  "crisse": { s: 3, c: 4 }, // Christ (Quebec swear)
  "ostie": { s: 3, c: 4 }, // Host/wafer (Quebec swear)
  "osti": { s: 3, c: 4 }, // Variant spelling
  "sacrement": { s: 3, c: 4 }, // Sacrament (Quebec swear)
  "ciboire": { s: 3, c: 4 }, // Ciborium (Quebec swear)
  "viarge": { s: 3, c: 4 }, // Virgin (Quebec swear)
  "baptême": { s: 3, c: 4 }, // Baptism (Quebec swear)
  "maudit": { s: 3, c: 4 }, // Cursed / Damn (Quebec)
  "maudite": { s: 3, c: 4 }, // Fem of maudit
  "câlisse de crisse": { s: 3, c: 4 }, // Compound Quebec swear
  "ostie de tabarnak": { s: 3, c: 4 }, // Compound Quebec swear
  "crisse de câlice": { s: 3, c: 4 }, // Compound Quebec swear
  "sacramant": { s: 3, c: 4 }, // Variant of sacrement
  "simonac": { s: 1, c: 4 }, // Simony (Quebec swear, milder)
  "coliss": { s: 3, c: 4 }, // Variant of câlice
  "décâlisser": { s: 3, c: 4 }, // To destroy / To beat up (Quebec)
  "décrisser": { s: 3, c: 4 }, // To destroy / To leave (Quebec)
  "encâlisser": { s: 3, c: 4 }, // To piss off (Quebec)
  "tabarnouche": { s: 1, c: 4 }, // Mild form of tabarnak
  "câline": { s: 1, c: 4 }, // Mild form of câlice
  "crime": { s: 3, c: 4 }, // Mild form of crisse
  "mosus": { s: 1, c: 4 }, // Mild form of maudit
  "enfant de chienne": { s: 3, c: 4 }, // Son of a bitch (Quebec)
  "trou de cul": { s: 3, c: 4 }, // Already listed but also Quebec
  "plotte": { s: 5, c: 5 }, // Pussy/cunt (Quebec)
  "fourrer": { s: 3, c: 5 }, // To fuck (Quebec)
  "crosseur": { s: 3, c: 4 }, // Wanker / Cheater (Quebec)
  "crosseuse": { s: 3, c: 4 }, // Fem
  "niaiser": { s: 1, c: 4 }, // To fool around / Waste time (Quebec)
  "niaiseux": { s: 1, c: 4 }, // Idiot (Quebec)
  "niaiseuse": { s: 3, c: 4 }, // Fem
  "colon": { s: 3, c: 4 }, // Settler / Hick (Quebec, derogatory)
  "épais": { s: 1, c: 4 }, // Thick / Stupid (Quebec)
  "épaisse": { s: 3, c: 4 }, // Fem
  "cave": { s: 1, c: 4 }, // Cellar / Idiot (Quebec)
  "sans dessein": { s: 3, c: 4 }, // Brainless (Quebec)
  "mongol": { s: 1, c: 4 }, // Mongoloid / Idiot (Quebec, offensive)
  "attardé": { s: 3, c: 4 }, // Retarded (Quebec, offensive)
  "attardée": { s: 3, c: 4 }, // Fem
  "fif": { s: 3, c: 4 }, // Faggot (Quebec)
  "tapette": { s: 3, c: 4 }, // Faggot / Fly swatter (Quebec/France)
  "moumoune": { s: 3, c: 4 }, // Sissy / Faggot (Quebec)
  "guidoune": { s: 5, c: 4 }, // Slut / Prostitute (Quebec)
  "agace": { s: 4, c: 4 }, // Cock tease (Quebec)
  "agace-pissette": { s: 4, c: 4 }, // Cock tease (Quebec, stronger)
  "pissou": { s: 1, c: 4 }, // Coward (Quebec)
  "chieux": { s: 1, c: 4 }, // Coward / Shitter (Quebec)
  "licheux": { s: 3, c: 4 }, // Ass-kisser (Quebec)
  "téteux": { s: 3, c: 4 }, // Suck-up (Quebec)
  "téteuse": { s: 3, c: 4 }, // Fem

  // ========================================
  // === Belgian French ====================
  // ========================================
  "dikkenek": { s: 1, c: 4 }, // Fat neck / Show-off (Belgian French)
  "sansen": { s: 1, c: 4 }, // Idiot (Belgian)
  "poepzak": { s: 3, c: 4 }, // Fart bag (Belgian, from Flemish influence)
  "stoull": { s: 1, c: 4 }, // Fool (Belgian)
  "bachi-bouzouk": { s: 3, c: 4 }, // Insult (originally Turkish, used in Belgian/French comics)

  // ========================================
  // === Verlan (Reversed Slang) ===========
  // ========================================
  "tepu": { s: 5, c: 4 }, // Pute backwards (whore)
  "relou": { s: 3, c: 4 }, // Lourd backwards (annoying)
  "chelou": { s: 3, c: 4 }, // Louche backwards (sketchy, weird)
  "péta": { s: 3, c: 4 }, // Taper backwards (to hit, in context)
  "téma": { s: 3, c: 4 }, // Mater backwards (to look at)
  "zarbi": { s: 3, c: 4 }, // Bizarre backwards (weird)
  "renoi": { s: 3, c: 4 }, // Noir backwards (Black person, can be offensive)
  "rebeu": { s: 3, c: 4 }, // Beur backwards (Arab person, can be offensive)
  "feuj": { s: 3, c: 4 }, // Juif backwards (Jewish person, can be offensive)
  "caillera": { s: 3, c: 4 }, // Racaille backwards (thug)
  "racaille": { s: 3, c: 4 }, // Thug, scum
  "keum": { s: 3, c: 4 }, // Mec backwards (dude)
  "ouf": { s: 3, c: 4 }, // Fou backwards (crazy)
  "vénère": { s: 3, c: 4 }, // Énervé backwards (pissed off)
  "chanmé": { s: 3, c: 4 }, // Méchant backwards (mean/awesome)
  "iench": { s: 3, c: 4 }, // Chien backwards (dog, derogatory)
  "keupon": { s: 3, c: 4 }, // Punk backwards (punk)
  "beur": { s: 3, c: 4 }, // Arabe backwards (Arab, can be offensive)
  "reubeu": { s: 3, c: 4 }, // Variant of rebeu

  // ========================================
  // === Internet / Youth Slang ============
  // ========================================
  "tmtc": { s: 2, c: 3 }, // Toi-même tu connais (you know it)
  "ptdr": { s: 2, c: 3 }, // Pété de rire (dying of laughter, used in vulgar contexts)
  "niktamère": { s: 2, c: 3 }, // Contracted nique ta mère
  "wesh": { s: 2, c: 3 }, // Hey / What's up (banlieue slang)
  "wallah": { s: 3, c: 4 }, // I swear (Arabic-French slang)
  "starfoullah": { s: 2, c: 3 }, // I swear to God (Arabic-French slang)
  "zebi": { s: 4, c: 3 }, // Dick (Arabic-French slang)
  "zob": { s: 4, c: 3 }, // Dick (Arabic-French slang, from Arabic)
  "zobi": { s: 4, c: 3 }, // My dick (Arabic-French slang)
  "kahba": { s: 3, c: 4 }, // Whore (Arabic-French slang)
  "hmar": { s: 1, c: 3 }, // Donkey / Idiot (Arabic-French slang)
  "miskine": { s: 2, c: 3 }, // Poor thing (Arabic-French, can be condescending)
  "miskin": { s: 2, c: 3 }, // Variant
  "baltringue": { s: 1, c: 3 }, // Loser / Weakling (slang)
  "tocard": { s: 1, c: 4 }, // Loser, idiot
  "tocarde": { s: 2, c: 3 }, // Fem
  "boloss": { s: 1, c: 4 }, // Loser (variant of bolosse)
  "cassos": { s: 2, c: 3 }, // Welfare case (derogatory)
  "crevure": { s: 2, c: 3 }, // Scum (stronger than crevard)
  "raclure de bidet": { s: 2, c: 3 }, // Bidet scrapings (insult)
  "sous-race": { s: 2, c: 3 }, // Sub-race (very offensive)
  "fils de chien": { s: 2, c: 3 }, // Son of a dog
  "bâtard de race": { s: 3, c: 4 }, // Race bastard (very offensive)

  // ========================================
  // === Sexual Terms ======================
  // ========================================
  "sodomie": { s: 4, c: 4 }, // Sodomy
  "fellation": { s: 4, c: 5 }, // Fellatio
  "cunnilingus": { s: 4, c: 3 }, // Cunnilingus
  "masturber": { s: 4, c: 4 }, // To masturbate
  "se masturber": { s: 4, c: 4 }, // To masturbate (reflexive)
  "jouir": { s: 4, c: 4 }, // To cum / To orgasm
  "jouissance": { s: 4, c: 4 }, // Orgasm / Pleasure
  "orgasme": { s: 4, c: 4 }, // Orgasm
  "éjaculer": { s: 4, c: 4 }, // To ejaculate
  "éjaculation": { s: 4, c: 4 }, // Ejaculation
  "bander": { s: 4, c: 4 }, // To get hard (erection)
  "bandant": { s: 4, c: 4 }, // Arousing / Hot
  "bandante": { s: 4, c: 4 }, // Fem
  "débander": { s: 4, c: 4 }, // To go soft / To lose courage
  "pénis": { s: 4, c: 4 }, // Penis
  "vagin": { s: 4, c: 4 }, // Vagina
  "clitoris": { s: 4, c: 3 }, // Clitoris
  "testicule": { s: 4, c: 4 }, // Testicle
  "testicules": { s: 4, c: 4 }, // Testicles
  "scrotum": { s: 3, c: 4 }, // Scrotum
  "prépuce": { s: 4, c: 4 }, // Foreskin
  "anus": { s: 3, c: 4 }, // Anus
  "téton": { s: 4, c: 4 }, // Nipple
  "seins": { s: 4, c: 4 }, // Breasts
  "nichons": { s: 4, c: 4 }, // Tits (vulgar)
  "nibards": { s: 4, c: 4 }, // Tits (vulgar)
  "nénés": { s: 4, c: 4 }, // Boobies (childish/vulgar)
  "roberts": { s: 4, c: 4 }, // Tits (old slang)
  "loches": { s: 4, c: 4 }, // Tits (vulgar)
  "miches": { s: 4, c: 4 }, // Ass cheeks / Bread rolls
  "fesses": { s: 4, c: 4 }, // Buttocks
  "pétard": { s: 4, c: 4 }, // Firecracker / Nice ass (slang)
  "moule": { s: 4, c: 4 }, // Mussel / Pussy (slang)
  "cramouille": { s: 4, c: 4 }, // Pussy (very vulgar, old slang)
  "foufoune": { s: 4, c: 4 }, // Pussy (childish)
  "foufounette": { s: 4, c: 4 }, // Pussy (diminutive)
  "minette": { s: 4, c: 4 }, // Pussy (cute/vulgar) / Cunnilingus
  "minou": { s: 4, c: 4 }, // Kitty / Pussy
  "chagatte": { s: 4, c: 4 }, // Pussy (vulgar compound)
  "pine": { s: 3, c: 4 }, // Dick (archaic/vulgar)
  "queue": { s: 4, c: 4 }, // Tail / Dick (vulgar)
  "quéquette": { s: 4, c: 4 }, // Willy (childish)
  "zizi": { s: 4, c: 4 }, // Willy (childish)
  "zgeg": { s: 4, c: 4 }, // Dick (banlieue slang)
  "teub": { s: 4, c: 4 }, // Bite backwards (verlan for dick)
  "noeud": { s: 4, c: 4 }, // Knot / Dickhead
  "chibre": { s: 4, c: 4 }, // Dick (vulgar)
  "dard": { s: 4, c: 4 }, // Dart / Dick (slang)
  "gaule": { s: 4, c: 4 }, // Pole / Erection (slang)
  "trique": { s: 4, c: 4 }, // Stick / Erection (slang)
  "avoir la trique": { s: 4, c: 4 }, // To have a hard-on
  "sucer": { s: 4, c: 4 }, // To suck
  "pomper": { s: 4, c: 4 }, // To pump / To give head
  "tailler une pipe": { s: 4, c: 5 }, // To give a blowjob (lit. carve a pipe)
  "pipe": { s: 4, c: 5 }, // Blowjob (slang)
  "turlute": { s: 4, c: 5 }, // Blowjob (Quebec/old slang)
  "gâterie": { s: 2, c: 3 }, // Treat / Sexual favor (euphemism)
  "doigter": { s: 4, c: 4 }, // To finger
  "sodomiser": { s: 4, c: 4 }, // To sodomize
  "pénétrer": { s: 4, c: 4 }, // To penetrate
  "enfiler": { s: 4, c: 5 }, // To thread / To fuck
  "tringler": { s: 4, c: 5 }, // To fuck (vulgar)
  "tirer un coup": { s: 4, c: 4 }, // To have a shag
  "coup de bite": { s: 4, c: 4 }, // Dick thrust
  "partie de jambes en l'air": { s: 4, c: 4 }, // Sex session (lit. legs in the air party)
  "coït": { s: 4, c: 4 }, // Coitus
  "copuler": { s: 4, c: 4 }, // To copulate
  "fornication": { s: 4, c: 4 }, // Fornication
  "forniquer": { s: 4, c: 4 }, // To fornicate
  "prostituée": { s: 5, c: 4 }, // Prostitute
  "prostitué": { s: 5, c: 4 }, // Male prostitute
  "maison close": { s: 4, c: 4 }, // Brothel (lit. closed house)
  "proxénète": { s: 4, c: 4 }, // Pimp
  "maquereau": { s: 4, c: 4 }, // Pimp (lit. mackerel)
  "maquerelle": { s: 4, c: 4 }, // Madam (brothel)
  "micheton": { s: 5, c: 4 }, // John (prostitution client)
  "michetonneuse": { s: 5, c: 4 }, // Sugar baby / Prostitute (slang)
  "péripatéticienne": { s: 5, c: 4 }, // Prostitute (euphemism)
  "catin": { s: 5, c: 4 }, // Hussy / Prostitute (old)
  "garce": { s: 4, c: 4 }, // Bitch (old/literary)
  "gourgandine": { s: 4, c: 4 }, // Hussy (old)
  "traînée": { s: 4, c: 4 }, // Slut (lit. dragged)
  "dévergondée": { s: 4, c: 4 }, // Shameless woman
  "nymphomane": { s: 4, c: 4 }, // Nymphomaniac
  "obsédé": { s: 4, c: 4 }, // Pervert / Obsessed (masc)
  "obsédée": { s: 4, c: 4 }, // Fem
  "pervers": { s: 4, c: 4 }, // Pervert
  "perverse": { s: 3, c: 4 }, // Fem
  "voyeur": { s: 3, c: 4 }, // Voyeur
  "voyeuse": { s: 4, c: 4 }, // Fem
  "exhibitionniste": { s: 4, c: 4 }, // Exhibitionist
  "fétichiste": { s: 4, c: 4 }, // Fetishist
  "vicieux": { s: 4, c: 4 }, // Perverted / Kinky
  "vicieuse": { s: 4, c: 4 }, // Fem
  "lubrique": { s: 4, c: 4 }, // Lecherous
  "libidineux": { s: 4, c: 4 }, // Libidinous
  "salace": { s: 4, c: 4 }, // Salacious
  "cochonnerie": { s: 4, c: 4 }, // Filth / Smut
  "pornographie": { s: 4, c: 4 }, // Pornography
  "porno": { s: 3, c: 4 }, // Porn

  // ========================================
  // === More General Insults ==============
  // ========================================
  "larve": { s: 1, c: 4 }, // Larva / Worthless person
  "limace": { s: 1, c: 4 }, // Slug / Slow/worthless person
  "cancrelat": { s: 4, c: 4 }, // Cockroach
  "cafard": { s: 4, c: 4 }, // Cockroach / Snitch
  "mouchard": { s: 1, c: 4 }, // Snitch
  "moucharde": { s: 1, c: 4 }, // Fem
  "balance": { s: 3, c: 4 }, // Snitch
  "donneur": { s: 1, c: 4 }, // Snitch (lit. giver)
  "donneuse": { s: 1, c: 4 }, // Fem
  "crapule": { s: 1, c: 4 }, // Scoundrel
  "fripouille": { s: 1, c: 4 }, // Scoundrel
  "canaille": { s: 1, c: 4 }, // Scoundrel, rascal
  "gredin": { s: 1, c: 4 }, // Scoundrel (literary)
  "vaurien": { s: 1, c: 4 }, // Good-for-nothing
  "vaurienne": { s: 1, c: 4 }, // Fem
  "voyou": { s: 1, c: 4 }, // Thug, hooligan
  "gouape": { s: 1, c: 3 }, // Thug (old slang)
  "marlou": { s: 1, c: 4 }, // Pimp / Thug (old)
  "arsouille": { s: 1, c: 3 }, // Drunkard / Thug
  "poivrot": { s: 1, c: 3 }, // Drunkard
  "poivrote": { s: 1, c: 4 }, // Fem
  "soûlard": { s: 1, c: 3 }, // Drunkard
  "soûlarde": { s: 1, c: 4 }, // Fem
  "alcoolo": { s: 1, c: 3 }, // Alcoholic (slang)
  "pochetron": { s: 1, c: 3 }, // Drunkard
  "pochetronne": { s: 1, c: 4 }, // Fem
  "ivrogne": { s: 1, c: 3 }, // Drunkard
  "charogne": { s: 1, c: 4 }, // Carrion / Vile person
  "carne": { s: 1, c: 4 }, // Tough meat / Nasty person
  "rosse": { s: 1, c: 4 }, // Nag (horse) / Mean person
  "peste": { s: 1, c: 4 }, // Plague / Little pest
  "teigne": { s: 1, c: 4 }, // Ringworm / Nasty person
  "chipie": { s: 1, c: 4 }, // Shrew, nag
  "mégère": { s: 1, c: 4 }, // Shrew, harridan
  "harpie": { s: 1, c: 4 }, // Harpy
  "sorcière": { s: 1, c: 4 }, // Witch
  "morveux": { s: 1, c: 4 }, // Snotty (brat)
  "morveuse": { s: 1, c: 4 }, // Fem
  "gamin de merde": { s: 3, c: 5 }, // Shit kid
  "petite merde": { s: 3, c: 5 }, // Little shit
  "gros lard": { s: 1, c: 4 }, // Fat lard
  "grosse vache": { s: 1, c: 4 }, // Fat cow
  "gros tas": { s: 1, c: 4 }, // Big pile (fat person)
  "grosse truie": { s: 1, c: 4 }, // Fat sow
  "boudin": { s: 1, c: 4 }, // Blood sausage / Ugly woman
  "thon": { s: 3, c: 4 }, // Tuna / Ugly woman
  "laideron": { s: 1, c: 4 }, // Ugly woman
  "mocheté": { s: 1, c: 4 }, // Ugly person

  // ========================================
  // === More Quebec Sacres & Compounds ====
  // ========================================
  "tabarnak de câlice": { s: 3, c: 5 }, // Tabernacle of chalice (compound sacre)
  "câlice de tabarnak": { s: 3, c: 5 }, // Chalice of tabernacle (compound sacre)
  "osti de crisse": { s: 3, c: 5 }, // Host of Christ (compound sacre)
  "crisse de tabarnak": { s: 3, c: 5 }, // Christ of tabernacle (compound sacre)
  "ostie de câlice": { s: 3, c: 5 }, // Host of chalice (compound sacre)
  "câlice de ciboire": { s: 3, c: 5 }, // Chalice of ciborium (compound sacre)
  "tabarnak de ciboire": { s: 3, c: 5 }, // Tabernacle of ciborium (compound sacre)
  "osti de câlice de tabarnak": { s: 3, c: 5 }, // Triple compound sacre
  "crisse de câlice de tabarnak": { s: 3, c: 5 }, // Triple compound sacre
  "sacrement de câlice": { s: 3, c: 5 }, // Sacrament of chalice
  "sacrement de tabarnak": { s: 3, c: 5 }, // Sacrament of tabernacle
  "baptême de tabarnak": { s: 3, c: 5 }, // Baptism of tabernacle
  "viarge de tabarnak": { s: 3, c: 5 }, // Virgin of tabernacle
  "maudit câlice": { s: 3, c: 5 }, // Damn chalice
  "maudit tabarnak": { s: 3, c: 5 }, // Damn tabernacle
  "maudit crisse": { s: 3, c: 5 }, // Damn Christ
  "maudite ostie": { s: 3, c: 5 }, // Damn host
  "ciboire de câlice": { s: 3, c: 5 }, // Ciborium of chalice
  "tabarnouche de câline": { s: 1, c: 5 }, // Mild compound sacre
  "câliboire": { s: 1, c: 5 }, // Compound mild sacre
  "tabarslac": { s: 1, c: 5 }, // Mild variant of tabarnak
  "câlisse": { s: 3, c: 5 }, // Variant spelling of câlice
  "crissement": { s: 3, c: 5 }, // Adverb from crisse (Quebec)
  "en tabarnak": { s: 3, c: 5 }, // In tabernacle (extremely)
  "en câlice": { s: 3, c: 5 }, // In chalice (extremely)
  "en crisse": { s: 3, c: 5 }, // In Christ (extremely)
  "en osti": { s: 3, c: 5 }, // In host (extremely)
  "se décâlisser": { s: 3, c: 5 }, // To fall apart (Quebec)
  "se décrisser": { s: 3, c: 5 }, // To not give a fuck (Quebec)
  "encâlissé": { s: 3, c: 5 }, // Pissed off (Quebec)
  "encâlissée": { s: 3, c: 5 }, // Fem pissed off (Quebec)
  "décrissé": { s: 3, c: 5 }, // Destroyed (Quebec)
  "décrissée": { s: 3, c: 5 }, // Fem destroyed (Quebec)
  "sacrament": { s: 3, c: 5 }, // Variant sacrament sacre
  "bout de crisse": { s: 3, c: 5 }, // Piece of Christ (Quebec)
  "bout de viarge": { s: 3, c: 5 }, // Piece of virgin (Quebec)
  "charrue": { s: 1, c: 4 }, // Snowplow / ugly woman (Quebec)
  "mangeux de marde": { s: 3, c: 5 }, // Shit eater (Quebec)
  "marde": { s: 3, c: 5 }, // Shit (Quebec variant of merde)
  "plein de marde": { s: 3, c: 5 }, // Full of shit (Quebec)
  "tête carrée": { s: 3, c: 5 }, // Square head (Quebec slur for anglophones)
  "bloke": { s: 3, c: 5 }, // Anglophone person (Quebec, derogatory)
  "caltor": { s: 1, c: 4 }, // Ugly/dirty person (Quebec)
  "chaudasse": { s: 3, c: 5 }, // Hot chick / slutty (Quebec)
  "débile mental": { s: 3, c: 5 }, // Mental retard (Quebec)
  "lâche": { s: 1, c: 4 }, // Coward / let go (Quebec)
  "licheux de cul": { s: 3, c: 5 }, // Ass licker (Quebec)
  "moron": { s: 1, c: 4 }, // Moron (Quebec, English loan)
  "ostination": { s: 3, c: 5 }, // Stubbornness / arguing (Quebec)
  "ostiner": { s: 1, c: 4 }, // To argue stupidly (Quebec)
  "pissette": { s: 4, c: 5 }, // Small penis (Quebec)
  "pogner le cul": { s: 3, c: 5 }, // To grab ass (Quebec)
  "sacreur": { s: 3, c: 5 }, // One who sacres (Quebec)
  "sacrures": { s: 3, c: 5 }, // Swear words (Quebec)
  "slaquer": { s: 3, c: 5 }, // To slack / fire (Quebec)
  "smatte": { s: 3, c: 5 }, // Smart-ass (Quebec, from English)
  "twit": { s: 1, c: 2 }, // Twit / idiot (Quebec, English loan)

  // ========================================
  // === More Putain Compounds =============
  // ========================================
  "putain de bordel de merde": { s: 3, c: 5 }, // Fucking brothel of shit
  "putain de ta mère": { s: 3, c: 5 }, // Fucking your mother
  "putain de sa race": { s: 3, c: 5 }, // Fucking his race
  "putain de chiotte": { s: 3, c: 5 }, // Fucking toilet
  "oh putain": { s: 3, c: 5 }, // Oh fuck
  "putain de connard": { s: 3, c: 4 }, // Fucking bastard
  "putain de connasse": { s: 3, c: 5 }, // Fucking bitch
  "putain de saloperie": { s: 3, c: 5 }, // Fucking crap
  "putain de fait chier": { s: 3, c: 5 }, // Fucking pisses me off
  "nom de putain": { s: 5, c: 5 }, // In the name of the whore
  "sacré putain": { s: 5, c: 5 }, // Holy whore

  // ========================================
  // === More Merde Compounds ==============
  // ========================================
  "emmerdement": { s: 3, c: 5 }, // Annoyance / hassle
  "démerdard": { s: 3, c: 5 }, // Resourceful person (vulgar)
  "démerdarde": { s: 3, c: 5 }, // Fem resourceful
  "merdouille": { s: 3, c: 5 }, // Little shit / mishap
  "merdouiller": { s: 3, c: 5 }, // To mess up
  "merdier": { s: 3, c: 5 }, // Shitstorm / mess
  "emmerdant": { s: 3, c: 5 }, // Annoying (as hell)
  "emmerdante": { s: 3, c: 5 }, // Fem annoying
  "dans la merde": { s: 3, c: 5 }, // In the shit / in trouble
  "jusqu'au cou dans la merde": { s: 3, c: 5 }, // Neck deep in shit
  "remuer la merde": { s: 3, c: 5 }, // To stir up shit
  "brasser la merde": { s: 3, c: 5 }, // To stir shit (variant)
  "bouffer de la merde": { s: 3, c: 5 }, // To eat shit
  "putain de merde de bordel": { s: 3, c: 5 }, // Fucking shit brothel
  "bordel de merde": { s: 3, c: 5 }, // Brothel of shit / fucking shit
  "merde alors": { s: 3, c: 5 }, // Shit then / well shit
  "oh merde": { s: 3, c: 5 }, // Oh shit
  "sacré merde": { s: 3, c: 5 }, // Holy shit

  // ========================================
  // === More Con Compounds ================
  // ========================================
  "connard de merde": { s: 3, c: 4 }, // Shitty bastard
  "connasse de merde": { s: 3, c: 5 }, // Shitty bitch
  "petit con": { s: 3, c: 5 }, // Little asshole
  "petite conne": { s: 3, c: 5 }, // Little bitch
  "sale connard": { s: 3, c: 4 }, // Dirty bastard
  "sale connasse": { s: 3, c: 5 }, // Dirty bitch
  "bande de cons": { s: 1, c: 4 }, // Bunch of idiots
  "putain de con": { s: 1, c: 4 }, // Fucking idiot
  "quel con": { s: 1, c: 4 }, // What an idiot
  "quelle conne": { s: 1, c: 4 }, // What an idiot (fem)
  "sacré con": { s: 1, c: 4 }, // Holy idiot
  "sacrée conne": { s: 1, c: 4 }, // Holy idiot (fem)
  "vieux con": { s: 1, c: 4 }, // Old fool
  "vieille conne": { s: 1, c: 4 }, // Old fool (fem)
  "con comme la lune": { s: 1, c: 4 }, // Dumb as the moon
  "con comme un balai": { s: 1, c: 4 }, // Dumb as a broom
  "con comme ses pieds": { s: 1, c: 4 }, // Dumb as his feet
  "tête de con de merde": { s: 4, c: 5 }, // Shit dickhead

  // ========================================
  // === African French Profanity ==========
  // ========================================
  // --- Senegalese French ---
  "niaw": { s: 1, c: 4 }, // Idiot (Senegal Wolof-French)
  "dof": { s: 1, c: 4 }, // Crazy / idiot (Senegal Wolof-French)
  "niak": { s: 3, c: 4 }, // Derogatory (Senegal)
  "gadjé": { s: 3, c: 4 }, // Non-African (derogatory, Senegal)
  "toubab": { s: 3, c: 4 }, // White person (can be derogatory, West Africa)
  "nègre de merde": { s: 3, c: 5 }, // Shit negro (very offensive, used in Africa too)
  // --- Congolese French ---
  "zoba": { s: 1, c: 4 }, // Idiot / penis (Congo)
  "pombé": { s: 1, c: 3 }, // Drunkard (Congo)
  "matiti": { s: 3, c: 4 }, // Crazy / weed (Congo)
  "nyama": { s: 3, c: 4 }, // Animal / brute (Congo/Central Africa)
  "libulu": { s: 1, c: 4 }, // Idiot (Congo)
  "mwana nyama": { s: 3, c: 4 }, // Child of an animal (Congo)
  // --- Ivorian French ---
  "gbê": { s: 5, c: 5 }, // Die / fuck off (Ivory Coast)
  "dêh": { s: 3, c: 4 }, // Expression of frustration (Ivory Coast)
  "gawa": { s: 3, c: 4 }, // Country bumpkin (Ivory Coast)
  "groto": { s: 3, c: 4 }, // Redneck / yokel (Ivory Coast)
  "boucantier": { s: 3, c: 4 }, // Loudmouth / troublemaker (Ivory Coast)
  "djandjou": { s: 1, c: 3 }, // Idiot (Ivory Coast nouchi slang)
  "gnamoukoudji": { s: 3, c: 4 }, // Scumbag (Ivory Coast nouchi)
  "tchoin": { s: 3, c: 4 }, // Slut / easy girl (Ivory Coast/African French)
  "sapologie": { s: 3, c: 4 }, // Fashion obsession (can be derogatory, Congo)
  "bordelier": { s: 3, c: 4 }, // Troublemaker (West African French)
  "va te coucher": { s: 3, c: 5 }, // Go to bed / fuck off (African French)

  // ========================================
  // === More Belgian French ===============
  // ========================================
  "fieu": { s: 1, c: 4 }, // Guy / idiot (Belgian)
  "brol": { s: 3, c: 4 }, // Junk / mess (Belgian)
  "schieve": { s: 3, c: 4 }, // Crazy (Belgian, from Flemish)
  "zievereir": { s: 3, c: 5 }, // Bullshitter (Belgian, from Flemish)
  "kansen": { s: 3, c: 4 }, // Asshole (Belgian)
  "klansen": { s: 1, c: 4 }, // Idiot (Belgian)
  "stoefer": { s: 3, c: 4 }, // Show-off (Belgian)
  "snull": { s: 1, c: 4 }, // Wimp / loser (Belgian)
  "snulle": { s: 3, c: 4 }, // Fem wimp (Belgian)
  "mansen": { s: 1, c: 4 }, // Loser (Belgian)
  "potje": { s: 3, c: 4 }, // Little asshole (Belgian)

  // ========================================
  // === Swiss French Profanity ============
  // ========================================
  "bobet": { s: 1, c: 4 }, // Idiot (Swiss French)
  "bobette": { s: 1, c: 4 }, // Fem idiot (Swiss French)
  "cornichon": { s: 1, c: 4 }, // Pickle / idiot (Swiss French)
  "cucul": { s: 1, c: 4 }, // Silly / dumb (Swiss French)
  "gnôle": { s: 3, c: 4 }, // Booze / moonshine (Swiss)
  "pouet": { s: 1, c: 4 }, // Wimp / loser (Swiss French)
  "poutze": { s: 3, c: 4 }, // Cleaning / mess (Swiss, from German Putzen)
  "schlingue": { s: 3, c: 4 }, // To stink (Swiss French, from German)
  "schlingueur": { s: 3, c: 4 }, // Stinker (Swiss French)
  "tacot": { s: 1, c: 4 }, // Old banger / ugly thing (Swiss)
  "tartouille": { s: 1, c: 4 }, // Ugly woman (Swiss French)
  "tourte": { s: 1, c: 4 }, // Pie / idiot (Swiss French)
  "vadrouille": { s: 3, c: 4 }, // Mop / wandering sloppily (Swiss)
  "gognand": { s: 1, c: 4 }, // Clumsy fool (Swiss French)
  "gognande": { s: 1, c: 4 }, // Fem clumsy fool (Swiss)

  // ========================================
  // === More Verlan =======================
  // ========================================
  "keufs": { s: 3, c: 4 }, // Plural cops (verlan)
  "meufter": { s: 3, c: 4 }, // To check out women (verlan-derived)
  "pécho": { s: 3, c: 4 }, // To hook up / catch (verlan of choper)
  "barjot": { s: 3, c: 4 }, // Crazy (verlan of jobard)
  "laisse béton": { s: 3, c: 4 }, // Let it go (verlan of laisse tomber)
  "véner": { s: 3, c: 4 }, // Angry (verlan of énervé, variant of vénère)
  "genrou": { s: 3, c: 4 }, // Red-haired (verlan of rouquin)
  "ienchli": { s: 3, c: 4 }, // Dog (verlan variant of chien)
  "keubla": { s: 3, c: 4 }, // Black (verlan of Black, offensive)
  "kainri": { s: 3, c: 4 }, // American (verlan of Ricain)
  "beuré": { s: 3, c: 4 }, // Arab (verlan variant, offensive)
  "céfran": { s: 3, c: 4 }, // French (verlan of français)
  "zonmé": { s: 3, c: 4 }, // House (verlan of maison)
  "teupu": { s: 5, c: 4 }, // Whore (verlan of pute, variant)
  "teushi": { s: 3, c: 5 }, // Hashish (verlan of shit/haschisch)
  "relou de merde": { s: 3, c: 5 }, // Annoying piece of shit
  "chelou de ouf": { s: 3, c: 4 }, // Crazy sketchy

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "partouze": { s: 4, c: 4 }, // Orgy
  "partouzard": { s: 4, c: 4 }, // Orgy participant
  "partouzarde": { s: 4, c: 4 }, // Fem orgy participant
  "gang bang": { s: 4, c: 4 }, // Gang bang
  "plan cul": { s: 4, c: 4 }, // Booty call / hookup
  "plan à trois": { s: 4, c: 4 }, // Threesome
  "soixante-neuf": { s: 4, c: 4 }, // Sixty-nine (sexual position)
  "levrette": { s: 4, c: 4 }, // Doggy style
  "missionnaire": { s: 4, c: 4 }, // Missionary (position)
  "anulingus": { s: 4, c: 4 }, // Anulingus
  "branlette espagnole": { s: 4, c: 4 }, // Spanish wank (titjob)
  "doigtage": { s: 4, c: 4 }, // Fingering
  "enculade": { s: 4, c: 5 }, // Ass-fucking session
  "godemiché": { s: 4, c: 4 }, // Dildo (archaic)
  "gode": { s: 4, c: 4 }, // Dildo (modern)
  "éponger": { s: 4, c: 4 }, // To mop up / To soak up (sexual slang)
  "mouiller": { s: 4, c: 4 }, // To get wet (sexually)
  "mouillée": { s: 4, c: 4 }, // Wet (sexually aroused, fem)
  "giclée": { s: 4, c: 4 }, // Spurt / squirt
  "gicler": { s: 4, c: 4 }, // To squirt / to spurt
  "décharger": { s: 4, c: 4 }, // To discharge / To cum
  "juter": { s: 4, c: 4 }, // To juice / To cum
  "foutre en l'air": { s: 4, c: 5 }, // To fuck up / To cum
  "bouffer la chatte": { s: 4, c: 4 }, // To eat pussy
  "brouter le gazon": { s: 4, c: 4 }, // To mow the lawn (cunnilingus)
  "brouter la moquette": { s: 4, c: 4 }, // To chew the carpet (lesbian sex slang)
  "se doigter": { s: 4, c: 4 }, // To finger oneself
  "se goder": { s: 4, c: 4 }, // To dildo oneself
  "se toucher": { s: 4, c: 4 }, // To touch oneself
  "se tripoter": { s: 4, c: 4 }, // To grope oneself
  "tripoter": { s: 4, c: 4 }, // To grope
  "peloter": { s: 4, c: 4 }, // To fondle / grope
  "pelotage": { s: 4, c: 4 }, // Fondling / groping
  "attouchement": { s: 4, c: 4 }, // Inappropriate touching
  "viol": { s: 5, c: 5 }, // Rape
  "violer": { s: 5, c: 5 }, // To rape
  "violeur": { s: 5, c: 5 }, // Rapist
  "violeuse": { s: 5, c: 5 }, // Fem rapist
  "pédophile": { s: 5, c: 5 }, // Pedophile
  "inceste": { s: 5, c: 5 }, // Incest
  "zoophile": { s: 4, c: 4 }, // Zoophile
  "zoophilie": { s: 4, c: 4 }, // Zoophilia
  "nécrophile": { s: 4, c: 4 }, // Necrophile
  "sado-maso": { s: 4, c: 4 }, // Sadomasochist
  "dominatrice": { s: 4, c: 4 }, // Dominatrix
  "soumise": { s: 4, c: 4 }, // Submissive (fem)
  "soumis": { s: 4, c: 4 }, // Submissive (masc)
  "fist-fucking": { s: 4, c: 5 }, // Fist-fucking
  "fisting": { s: 4, c: 5 }, // Fisting
  "bukkake": { s: 4, c: 5 }, // Bukkake
  "creampie": { s: 4, c: 5 }, // Creampie
  "éjac faciale": { s: 4, c: 4 }, // Facial ejaculation
  "gorge profonde": { s: 4, c: 4 }, // Deep throat
  "pompe à bite": { s: 4, c: 4 }, // Cock pump / cocksucker
  "avaler": { s: 4, c: 4 }, // To swallow
  "cracher": { s: 4, c: 4 }, // To spit
  "salope en chaleur": { s: 4, c: 4 }, // Bitch in heat
  "chienne en chaleur": { s: 4, c: 4 }, // Dog bitch in heat

  // ========================================
  // === More Homophobic Slurs =============
  // ========================================
  "pédé de merde": { s: 5, c: 5 }, // Shitty faggot
  "sale pédé": { s: 5, c: 4 }, // Dirty faggot
  "gros pédé": { s: 1, c: 4 }, // Fat faggot
  "pédale": { s: 5, c: 4 }, // Faggot (derogatory)
  "grande folle": { s: 5, c: 4 }, // Big queen (derogatory)
  "tarlouze": { s: 5, c: 4 }, // Faggot (very offensive)
  "tarlouse": { s: 5, c: 4 }, // Variant spelling
  "tafiole": { s: 5, c: 4 }, // Faggot (offensive)
  "lopette": { s: 5, c: 4 }, // Sissy / faggot
  "lopètte": { s: 5, c: 4 }, // Variant with accent
  "tantouze": { s: 5, c: 4 }, // Variant of tantouse
  "tante": { s: 5, c: 4 }, // Aunt / gay man (derogatory)
  "tata": { s: 5, c: 4 }, // Auntie / gay man (derogatory)
  "enculé de pédé": { s: 5, c: 5 }, // Ass-fucked faggot
  "suceuse de bite": { s: 5, c: 4 }, // Cock sucker (used for gay men)
  "tapette à mouches": { s: 5, c: 4 }, // Fly swatter / faggot
  "inverti": { s: 5, c: 4 }, // Inverted / gay (archaic derogatory)
  "invertie": { s: 5, c: 4 }, // Fem
  "sodomite": { s: 5, c: 4 }, // Sodomite
  "sale gouine": { s: 5, c: 4 }, // Dirty dyke
  "grosse gouine": { s: 1, c: 4 }, // Fat dyke
  "gouinasse": { s: 5, c: 4 }, // Dyke (augmentative, very offensive)
  "broute-minou": { s: 5, c: 4 }, // Pussy eater (lesbian slur)
  "camionneuse": { s: 5, c: 4 }, // Trucker / butch lesbian (derogatory)

  // ========================================
  // === More Internet Slang ===============
  // ========================================
  "nktm": { s: 2, c: 3 }, // Variant: nique ta mère
  "ftg": { s: 2, c: 3 }, // Ferme ta gueule
  "vtff": { s: 2, c: 3 }, // Va te faire foutre
  "vtfe": { s: 2, c: 3 }, // Va te faire enculer
  "jsp": { s: 2, c: 3 }, // Je sais pas (I don't know, used dismissively)
  "osef": { s: 3, c: 5 }, // On s'en fout (we don't give a fuck)
  "oklm": { s: 2, c: 3 }, // Au calme (chill, can be dismissive)
  "slt": { s: 2, c: 3 }, // Salut / salope (context-dependent)
  "ptn": { s: 2, c: 3 }, // Putain (abbreviated)
  "mrd": { s: 2, c: 3 }, // Merde (abbreviated)
  "enk": { s: 2, c: 3 }, // Enculé (abbreviated)
  "bsf": { s: 2, c: 3 }, // Best friend / baise (context-dependent)
  "niqta": { s: 2, c: 3 }, // Nique ta (abbreviated)
  "stp ferme ta gueule": { s: 3, c: 5 }, // Please shut the fuck up
  "wsh": { s: 2, c: 3 }, // Variant of wesh
  "cheh": { s: 2, c: 3 }, // Serves you right (Arabic-French slang)
  "la honte": { s: 3, c: 3 }, // The shame / how embarrassing (derogatory)
  "cramé": { s: 2, c: 3 }, // Burned / busted / wasted
  "cramée": { s: 2, c: 3 }, // Fem burned

  // ========================================
  // === More Compound Phrases =============
  // ========================================
  "putain de bordel de merde de sa race": { s: 3, c: 5 }, // Extreme compound
  "bordel de putain de merde": { s: 3, c: 5 }, // Extreme compound variant
  "nique tout": { s: 3, c: 5 }, // Fuck everything
  "nique le monde": { s: 3, c: 5 }, // Fuck the world
  "enculé de sa race": { s: 3, c: 5 }, // Ass-fucked of his race
  "bâtard de sa mère": { s: 3, c: 4 }, // Bastard of his mother
  "fils de pute de merde": { s: 3, c: 5 }, // Shit son of a bitch
  "sale fils de pute": { s: 3, c: 5 }, // Dirty son of a bitch
  "gros fils de pute": { s: 1, c: 4 }, // Fat son of a bitch
  "espèce de fils de pute": { s: 3, c: 5 }, // You son of a bitch
  "espèce de pourriture": { s: 3, c: 5 }, // You piece of rot
  "espèce de déchet": { s: 3, c: 5 }, // You piece of trash
  "déchet humain": { s: 3, c: 5 }, // Human waste
  "poubelle humaine": { s: 3, c: 5 }, // Human trash can
  "sous-homme": { s: 5, c: 5 }, // Subhuman (very offensive)
  "sous-femme": { s: 3, c: 5 }, // Subwoman (very offensive)
  "erreur de la nature": { s: 3, c: 5 }, // Mistake of nature
  "accident de capote": { s: 3, c: 5 }, // Condom accident (unwanted child)
  "fils de personne": { s: 3, c: 5 }, // Son of nobody
  "sale gros porc": { s: 1, c: 4 }, // Dirty fat pig
  "sale grosse truie": { s: 1, c: 4 }, // Dirty fat sow
  "sale petite merde": { s: 3, c: 5 }, // Dirty little shit
  "sale petite pute": { s: 5, c: 5 }, // Dirty little whore
  "espèce de grosse merde": { s: 3, c: 5 }, // You big piece of shit
  "putain de ta mère la pute": { s: 5, c: 5 }, // Fucking your whore mother
  "nique ta mère la pute": { s: 5, c: 5 }, // Fuck your whore mother
  "va crever dans un fossé": { s: 5, c: 5 }, // Go die in a ditch
  "je te baise ta mère": { s: 3, c: 5 }, // I fuck your mother
  "nique tes morts": { s: 3, c: 5 }, // Fuck your dead (very offensive)
  "ta mère en string": { s: 3, c: 5 }, // Your mother in a thong
  "ta mère la grosse": { s: 1, c: 4 }, // Your fat mother
  "ta mère en slip": { s: 3, c: 5 }, // Your mother in underwear
  "ton père le chauve": { s: 1, c: 4 }, // Your bald father (dismissive)

  // ========================================
  // === More General Vulgar Terms =========
  // ========================================
  "péter un câble": { s: 3, c: 4 }, // To blow a fuse / lose it
  "péter les plombs": { s: 3, c: 4 }, // To blow a fuse / go crazy
  "péter un boulon": { s: 3, c: 4 }, // To lose a bolt / go crazy
  "se faire chier": { s: 5, c: 5 }, // To be bored to death
  "chiant": { s: 3, c: 5 }, // Boring / annoying as fuck
  "chiante": { s: 3, c: 4 }, // Fem boring/annoying
  "chier une pendule": { s: 3, c: 5 }, // To shit a clock (overreact)
  "casse-pieds": { s: 3, c: 4 }, // Pain in the ass (lit. foot-breaker)
  "casse-bonbon": { s: 3, c: 4 }, // Pain in the ass (lit. candy-breaker)
  "casse-burne": { s: 3, c: 4 }, // Ball-breaker
  "casse-burnes": { s: 3, c: 4 }, // Ball-breaker (plural)
  "pète-sec": { s: 3, c: 4 }, // Dry farter / authoritarian
  "gratte-cul": { s: 3, c: 4 }, // Rosehip / ass scratcher
  "mange-merde": { s: 3, c: 5 }, // Shit eater
  "baise-en-ville": { s: 3, c: 5 }, // Overnight bag (lit. fuck-in-town)
  "brûle-gueule": { s: 3, c: 4 }, // Short pipe / smelly breath
  "lèche-bottes": { s: 3, c: 4 }, // Boot licker
  "lèche-vitrine": { s: 3, c: 4 }, // Window shopping (lit. window licker)
  "pisse-froid": { s: 3, c: 4 }, // Cold pisser / killjoy
  "pisse-vinaigre": { s: 3, c: 4 }, // Vinegar pisser / miser
  "tire-au-cul": { s: 3, c: 4 }, // Shirker / lazy ass
  "tire-au-flanc": { s: 3, c: 4 }, // Shirker (military origin)
  "torche-cul": { s: 3, c: 4 }, // Ass wipe / toilet paper
  "foutriquet": { s: 3, c: 4 }, // Little runt / good-for-nothing
  "foutraque": { s: 3, c: 4 }, // Crazy / scatterbrained
  "emmerdeur de première": { s: 3, c: 4 }, // First-class annoying person
  "chieur de première": { s: 3, c: 4 }, // First-class pain in the ass
  "saligaud": { s: 3, c: 4 }, // Dirty person / scumbag
  "saligaude": { s: 3, c: 4 }, // Fem dirty person
  "souillon": { s: 3, c: 4 }, // Slob / dirty person
  "salopiaud": { s: 3, c: 4 }, // Little scumbag (diminutive of salaud)
  "enfant de putain": { s: 5, c: 4 }, // Child of a whore
  "bougre": { s: 3, c: 4 }, // Fellow / bugger
  "bougresse": { s: 3, c: 4 }, // Fem of bougre
  "sacré bougre": { s: 3, c: 4 }, // Holy bugger
  "sacré nom de dieu": { s: 3, c: 4 }, // Holy name of God
  "nom de dieu de bordel de merde": { s: 3, c: 5 }, // Name of God of shit brothel
  "bon dieu de merde": { s: 3, c: 5 }, // Good God of shit
  "sacré nom d'une pipe": { s: 3, c: 4 }, // Holy name of a pipe
  "p'tain": { s: 3, c: 4 }, // Contracted putain
  "sa mère la pute": { s: 5, c: 4 }, // His/her mother the whore
  "sa race": { s: 3, c: 4 }, // His/her race (offensive dismissal)
  "la putain de sa mère": { s: 5, c: 4 }, // The whore of his mother
  "sa mère": { s: 3, c: 4 }, // His mother (truncated insult)
  "la mort": { s: 5, c: 5 }, // Death (as insult/threat)
  "va mourir": { s: 5, c: 5 }, // Go die
  "crève sale chien": { s: 5, c: 5 }, // Die dirty dog

  // ========================================
  // === Spelling Evasions / Leet Speak ====
  // ========================================
  // --- Putain evasions ---
  "puta1n": { s: 3, c: 5 }, // Putain leet
  "put@in": { s: 3, c: 5 }, // Putain at-sign
  "pvtain": { s: 3, c: 5 }, // Putain v-swap
  "pu7ain": { s: 3, c: 5 }, // Putain 7-swap
  "put4in": { s: 3, c: 5 }, // Putain 4-swap
  "putaiin": { s: 3, c: 5 }, // Putain double i
  "puttain": { s: 3, c: 5 }, // Putain double t
  "puutain": { s: 3, c: 5 }, // Putain double u
  "putein": { s: 3, c: 5 }, // Putain misspelling
  "ptain": { s: 3, c: 5 }, // Putain truncated
  "ptin": { s: 3, c: 5 }, // Putain abbreviated
  "putaaain": { s: 3, c: 5 }, // Putain elongated
  "pu-tain": { s: 3, c: 5 }, // Putain hyphenated
  "pu.tain": { s: 3, c: 5 }, // Putain dotted
  "put1": { s: 3, c: 5 }, // Putain abbreviated leet
  "put@1n": { s: 3, c: 5 }, // Putain double leet
  "puteuh": { s: 3, c: 5 }, // Putain phonetic variant
  // --- Merde evasions ---
  "m3rde": { s: 3, c: 5 }, // Merde leet
  "m*rde": { s: 3, c: 5 }, // Merde star
  "m€rde": { s: 3, c: 5 }, // Merde euro sign
  "merd3": { s: 3, c: 5 }, // Merde leet end
  "merrde": { s: 3, c: 5 }, // Merde double r
  "mairde": { s: 3, c: 5 }, // Merde phonetic
  "mrde": { s: 3, c: 5 }, // Merde vowel drop
  "mèrde": { s: 3, c: 5 }, // Merde accent variant
  "me.rde": { s: 3, c: 5 }, // Merde dotted
  "mer-de": { s: 3, c: 5 }, // Merde hyphenated
  "merdum": { s: 3, c: 5 }, // Merde Latin mock
  "meeerde": { s: 3, c: 5 }, // Merde elongated
  // --- Connard evasions ---
  "c0nnard": { s: 3, c: 5 }, // Connard zero-o
  "c0nnasse": { s: 3, c: 5 }, // Connasse zero-o
  "conna rd": { s: 3, c: 5 }, // Connard spaced
  "connar": { s: 3, c: 5 }, // Connard truncated
  "konar": { s: 3, c: 5 }, // Connard phonetic
  "konard": { s: 3, c: 5 }, // Connard k-swap
  "konnard": { s: 3, c: 5 }, // Connard k-swap double n
  "konasse": { s: 3, c: 5 }, // Connasse k-swap
  "konnasse": { s: 3, c: 5 }, // Connasse k-swap double n
  // --- Enculé evasions ---
  "3nculé": { s: 3, c: 5 }, // Enculé leet
  "enkulé": { s: 3, c: 5 }, // Enculé k-swap
  "ankule": { s: 3, c: 5 }, // Enculé phonetic
  "enculay": { s: 3, c: 5 }, // Enculé phonetic
  "encul3": { s: 3, c: 5 }, // Enculé leet end
  "enc.ulé": { s: 3, c: 5 }, // Enculé dotted
  "en-culé": { s: 3, c: 5 }, // Enculé hyphenated
  "nculé": { s: 3, c: 5 }, // Enculé truncated
  "anculé": { s: 3, c: 5 }, // Enculé misspelling
  // --- Salope evasions ---
  "sal0pe": { s: 3, c: 5 }, // Salope zero-o
  "s@lope": { s: 3, c: 5 }, // Salope at-sign
  "sallope": { s: 3, c: 5 }, // Salope double l
  "salop": { s: 3, c: 5 }, // Salope truncated
  "saloppe": { s: 3, c: 5 }, // Salope double p
  "sal0p": { s: 3, c: 5 }, // Salope zero-o truncated
  "salôpe": { s: 3, c: 5 }, // Salope accent
  "sa.lope": { s: 3, c: 5 }, // Salope dotted
  // --- Bite evasions ---
  "b1te": { s: 3, c: 5 }, // Bite leet
  "b!te": { s: 3, c: 5 }, // Bite exclamation
  "bîte": { s: 3, c: 5 }, // Bite accent
  "bitte": { s: 3, c: 5 }, // Bite double t
  "bi.te": { s: 3, c: 5 }, // Bite dotted
  "biite": { s: 3, c: 5 }, // Bite double i
  // --- Nique evasions ---
  "n1que": { s: 3, c: 5 }, // Nique leet
  "n!que": { s: 3, c: 5 }, // Nique exclamation
  "niqu3": { s: 3, c: 5 }, // Nique leet end
  "nikk": { s: 3, c: 5 }, // Nique doubled
  "nik": { s: 3, c: 5 }, // Nique abbreviated
  "niker": { s: 3, c: 5 }, // Niquer simplified
  "nikker": { s: 3, c: 5 }, // Nique doubled k
  "niké": { s: 3, c: 5 }, // Nique phonetic
  "nik ta mère": { s: 3, c: 5 }, // Nique ta mère simplified
  "nik sa mère": { s: 3, c: 5 }, // Nique sa mère simplified
  "nik ta race": { s: 3, c: 5 }, // Nique ta race simplified
  // --- Pute evasions ---
  "put3": { s: 3, c: 5 }, // Pute leet
  "pvte": { s: 3, c: 5 }, // Pute v-swap
  "pu-te": { s: 3, c: 5 }, // Pute hyphenated
  "putte": { s: 3, c: 5 }, // Pute double t
  "puut3": { s: 3, c: 5 }, // Pute double u leet
  // --- Fils de pute evasions ---
  "fildepute": { s: 3, c: 5 }, // Fils de pute contracted
  "filsdpute": { s: 3, c: 5 }, // Fils de pute contracted
  "f1ls de pute": { s: 3, c: 5 }, // Fils de pute leet
  "fils 2 pute": { s: 3, c: 5 }, // Fils de pute number swap
  "fils d pute": { s: 3, c: 5 }, // Fils de pute truncated
  "fi de pu": { s: 3, c: 5 }, // Fils de pute very abbreviated
  // --- Pédé evasions ---
  "p3dé": { s: 3, c: 5 }, // Pédé leet
  "péd3": { s: 3, c: 5 }, // Pédé leet end
  "ped3": { s: 3, c: 5 }, // Pédé no accent leet
  "pedé": { s: 3, c: 5 }, // Pédé no accent
  "pede": { s: 3, c: 5 }, // Pédé fully stripped
  // --- Ta gueule evasions ---
  "ta gueul": { s: 3, c: 5 }, // Ta gueule truncated
  "tagueule": { s: 3, c: 5 }, // Ta gueule contracted
  "ta g": { s: 3, c: 5 }, // Ta gueule very abbreviated
  "tagel": { s: 3, c: 5 }, // Ta gueule phonetic
  "taggle": { s: 3, c: 5 }, // Ta gueule internet variant
  // --- General leet evasions ---
  "c0n": { s: 3, c: 5 }, // Con leet
  "cøn": { s: 3, c: 5 }, // Con Scandinavian o
  "b0rdel": { s: 3, c: 5 }, // Bordel leet
  "f0utre": { s: 3, c: 5 }, // Foutre leet
  "ch1er": { s: 3, c: 5 }, // Chier leet
  "p1sser": { s: 3, c: 5 }, // Pisser leet
  "br@nler": { s: 3, c: 5 }, // Branler leet
  "s4laud": { s: 3, c: 5 }, // Salaud leet
  "b@tard": { s: 3, c: 5 }, // Bâtard leet
  "m0ngol": { s: 3, c: 5 }, // Mongol leet
  "d3bile": { s: 3, c: 5 }, // Débile leet

  // ========================================
  // === Additional Compound Phrases =======
  // ========================================
  "nique ton père": { s: 1, c: 4 }, // Fuck your father
  "mange ta mère": { s: 3, c: 5 }, // Eat your mother
  "mange la merde": { s: 3, c: 5 }, // Eat shit
  "bouffe la merde": { s: 3, c: 5 }, // Eat shit (variant)
  "casse-toi pauvre con": { s: 1, c: 4 }, // Piss off you poor idiot (Sarkozy quote)
  "casse-toi sale con": { s: 1, c: 4 }, // Piss off dirty idiot
  "ferme ta sale gueule": { s: 3, c: 5 }, // Shut your dirty mouth
  "ferme ta grande gueule": { s: 3, c: 5 }, // Shut your big mouth
  "ta gueule sale pute": { s: 5, c: 5 }, // Shut up dirty whore
  "ta gueule connard": { s: 3, c: 5 }, // Shut up asshole
  "ta gueule enculé": { s: 3, c: 5 }, // Shut up ass-fucker
  "dégage de là": { s: 3, c: 5 }, // Get out of here
  "dégage sale merde": { s: 3, c: 5 }, // Get lost dirty shit
  "je t'encule ta mère": { s: 3, c: 5 }, // I ass-fuck your mother
  "je m'en bats les couilles": { s: 4, c: 5 }, // I beat my balls with it (don't care)
  "je m'en bats la race": { s: 3, c: 5 }, // I don't give a fuck about it
  "j'en ai rien à foutre": { s: 3, c: 5 }, // I don't give a fuck
  "j'en ai rien à battre": { s: 3, c: 5 }, // I don't give a damn
  "j'en ai rien à branler": { s: 3, c: 5 }, // I don't give a wank
  "j'en ai plein le cul": { s: 3, c: 5 }, // I've had it up to my ass
  "tu fais chier le monde": { s: 3, c: 5 }, // You annoy the whole world
  "tu me fais chier": { s: 3, c: 5 }, // You piss me off
  "tu me gonfles": { s: 3, c: 5 }, // You inflate me / you annoy me
  "tu me les brises": { s: 4, c: 5 }, // You break them (my balls)
  "tu me les casses": { s: 4, c: 5 }, // You break them (my balls)
  "tu me les pèles": { s: 4, c: 5 }, // You peel them (my balls)
  "tu me soûles": { s: 1, c: 3 }, // You're making me drunk / annoying me
  "va te pendre": { s: 5, c: 5 }, // Go hang yourself
  "va te noyer": { s: 3, c: 5 }, // Go drown yourself
  "va en enfer": { s: 3, c: 5 }, // Go to hell
  "crève en enfer": { s: 5, c: 5 }, // Die in hell
  "pourriture de merde": { s: 3, c: 5 }, // Shitty rot
  "fumier de merde": { s: 3, c: 5 }, // Shitty manure
  "ordure de merde": { s: 3, c: 5 }, // Shitty trash
  "charogne de merde": { s: 3, c: 5 }, // Shitty carrion
  "espèce de pourriture de merde": { s: 3, c: 5 }, // You shitty piece of rot
  "va niquer ta race": { s: 3, c: 5 }, // Go fuck your race
  "je nique ta race": { s: 3, c: 5 }, // I fuck your race
  "nique ta famille": { s: 3, c: 5 }, // Fuck your family
  "nique ton père ta mère": { s: 1, c: 4 }, // Fuck your father and mother
  "nique tes grands-morts": { s: 3, c: 5 }, // Fuck your great dead (very offensive)
  "sur la tête de ta mère": { s: 3, c: 5 }, // On your mother's head (offensive oath)
  "ta mère la chienne": { s: 3, c: 5 }, // Your mother the bitch
  "ta mère suce des bites": { s: 4, c: 5 }, // Your mother sucks dicks
  "ton père suce des bites": { s: 1, c: 4 }, // Your father sucks dicks
  "ta mère en short": { s: 3, c: 5 }, // Your mother in shorts
  "ta mère en maillot": { s: 3, c: 5 }, // Your mother in swimsuit
  "mange tes grands-morts": { s: 3, c: 5 }, // Eat your great dead
  "je chie sur ta mère": { s: 3, c: 5 }, // I shit on your mother
  "je chie sur ta race": { s: 3, c: 5 }, // I shit on your race
  "je pisse sur ta tombe": { s: 3, c: 5 }, // I piss on your grave
  "sale merde de chien": { s: 3, c: 5 }, // Dirty dog shit
  "va bouffer tes morts": { s: 3, c: 5 }, // Go eat your dead
  "ta daronne": { s: 3, c: 5 }, // Your mother (slang, disrespectful)
  "nique ta daronne": { s: 3, c: 5 }, // Fuck your mother (slang)
  "ta daronne la pute": { s: 5, c: 5 }, // Your mother the whore (slang)

  // ========================================
  // === Quebec Sacre Combinations =========
  // ========================================
  // --- Additional compound sacres ---
  "tabarnak de câlice de crisse": { s: 3, c: 5 }, // Triple sacre
  "ostie de câlice de crisse": { s: 3, c: 5 }, // Triple sacre variant
  "câlice de crisse de tabarnak": { s: 3, c: 5 }, // Triple sacre variant
  "crisse d'ostie de tabarnak": { s: 3, c: 5 }, // Triple sacre variant
  "tabarnak d'ostie de câlice": { s: 3, c: 5 }, // Triple sacre variant
  "sacrement d'ostie": { s: 3, c: 5 }, // Sacrament of host
  "sacrement de crisse": { s: 3, c: 5 }, // Sacrament of Christ
  "baptême de câlice": { s: 3, c: 5 }, // Baptism of chalice
  "baptême de crisse": { s: 3, c: 5 }, // Baptism of Christ
  "baptême d'ostie": { s: 3, c: 5 }, // Baptism of host
  "viarge de câlice": { s: 3, c: 5 }, // Virgin of chalice
  "viarge de crisse": { s: 3, c: 5 }, // Virgin of Christ
  "viarge d'ostie": { s: 3, c: 5 }, // Virgin of host
  "ciboire de tabarnak": { s: 3, c: 5 }, // Ciborium of tabernacle
  "ciboire de crisse": { s: 3, c: 5 }, // Ciborium of Christ
  "ciboire d'ostie": { s: 3, c: 5 }, // Ciborium of host
  "maudit ciboire": { s: 3, c: 5 }, // Damn ciborium
  "maudite câlice": { s: 3, c: 5 }, // Damn chalice (fem)
  "maudit sacrement": { s: 3, c: 5 }, // Damn sacrament
  "maudit baptême": { s: 3, c: 5 }, // Damn baptism
  "maudite viarge": { s: 3, c: 5 }, // Damn virgin
  "ostie de marde": { s: 3, c: 5 }, // Host of shit
  "câlice de marde": { s: 3, c: 5 }, // Chalice of shit
  "tabarnak de marde": { s: 3, c: 5 }, // Tabernacle of shit
  "crisse de marde": { s: 3, c: 5 }, // Christ of shit
  "ostie de con": { s: 1, c: 4 }, // Host of idiot
  "câlice de con": { s: 1, c: 4 }, // Chalice of idiot
  "tabarnak de con": { s: 1, c: 4 }, // Tabernacle of idiot
  "crisse de con": { s: 1, c: 4 }, // Christ of idiot
  "ostie d'épais": { s: 3, c: 5 }, // Host of thick one
  "câlice d'épais": { s: 3, c: 5 }, // Chalice of thick one
  "crisse d'épais": { s: 3, c: 5 }, // Christ of thick one
  "tabarnak d'épais": { s: 3, c: 5 }, // Tabernacle of thick one
  "ostie de cave": { s: 1, c: 4 }, // Host of idiot
  "câlice de cave": { s: 1, c: 4 }, // Chalice of idiot
  "tabarnak de cave": { s: 1, c: 4 }, // Tabernacle of idiot
  "crisse de cave": { s: 1, c: 4 }, // Christ of idiot
  "ostie de niaiseux": { s: 1, c: 4 }, // Host of moron
  "câlice de niaiseux": { s: 1, c: 4 }, // Chalice of moron
  "tabarnak de niaiseux": { s: 1, c: 4 }, // Tabernacle of moron
  "maudit niaiseux": { s: 1, c: 4 }, // Damn moron
  "maudite niaiseuse": { s: 1, c: 4 }, // Damn moron (fem)
  "ostie de mongol": { s: 3, c: 5 }, // Host of retard
  "câlice de mongol": { s: 3, c: 5 }, // Chalice of retard
  "en tabarnak de câlice": { s: 3, c: 5 }, // In tabernacle of chalice (intensifier)
  "en câlice de crisse": { s: 3, c: 5 }, // In chalice of Christ (intensifier)
  "en ostie de tabarnak": { s: 3, c: 5 }, // In host of tabernacle (intensifier)
  // --- Quebec sacre derivatives ---
  "tabarnaquer": { s: 3, c: 4 }, // To waste / destroy (from tabarnak)
  "tabarnaqué": { s: 3, c: 4 }, // Destroyed (from tabarnak)
  "tabarnaquée": { s: 3, c: 4 }, // Destroyed fem (from tabarnak)
  "câlicer": { s: 3, c: 4 }, // To throw / destroy (from câlice)
  "câlicé": { s: 3, c: 4 }, // Thrown / destroyed (from câlice)
  "câlicée": { s: 3, c: 4 }, // Thrown fem (from câlice)
  "crisser": { s: 3, c: 4 }, // To throw / to leave (from crisse)
  "crissé": { s: 3, c: 4 }, // Thrown / left (from crisse)
  "crissée": { s: 3, c: 4 }, // Thrown fem (from crisse)
  "ostiné": { s: 3, c: 4 }, // Argued (from ostie)
  "ostinée": { s: 3, c: 4 }, // Argued fem
  "sacrer": { s: 3, c: 4 }, // To swear (Quebec)
  "sacré": { s: 3, c: 4 }, // Swore / damn (Quebec)
  "sacrée": { s: 3, c: 4 }, // Fem (Quebec)
  "décâlisser la gueule": { s: 3, c: 4 }, // To smash the face (Quebec)
  "décrisser le camp": { s: 3, c: 4 }, // To get the hell out (Quebec)
  // --- Additional Quebec mild variants ---
  "tabarouette": { s: 1, c: 4 }, // Mild tabarnak
  "tabarnane": { s: 1, c: 4 }, // Mild tabarnak
  "câline de bine": { s: 1, c: 4 }, // Mild câlice compound
  "câliboire de tabarouette": { s: 1, c: 4 }, // Mild compound
  "crime pof": { s: 1, c: 4 }, // Mild crisse
  "bout de ciarge": { s: 1, c: 4 }, // Mild ciboire variant
  "sacrament de viarge": { s: 3, c: 4 }, // Sacrament of virgin
  "mosus de mosus": { s: 1, c: 4 }, // Double mild (Quebec)
  "mautadit": { s: 3, c: 4 }, // Variant of maudit
  "mautadine": { s: 3, c: 4 }, // Fem variant of maudit

  // ========================================
  // === African French (Expanded) =========
  // ========================================
  // --- Ivorian (Nouchi) ---
  "gaou": { s: 1, c: 4 }, // Fool / sucker (Ivory Coast)
  "s'enjailler": { s: 3, c: 4 }, // To show off wildly (can be derogatory)
  "daba": { s: 1, c: 4 }, // Hoe / stupid person (Ivory Coast)
  "gnaga": { s: 1, c: 4 }, // Ugly woman (Ivory Coast nouchi)
  "blo": { s: 1, c: 4 }, // Stupid / idiot (Ivory Coast nouchi)
  "dogba": { s: 3, c: 4 }, // Strong / bully (Ivory Coast nouchi)
  "kpakpato": { s: 3, c: 4 }, // Gossip / blabbermouth (Ivory Coast)
  "yêrê": { s: 3, c: 4 }, // Arrogant person (Ivory Coast nouchi)
  "gnata": { s: 3, c: 4 }, // Nasty / mean (Ivory Coast nouchi)
  "wôyô": { s: 3, c: 4 }, // Expression of frustration (Ivory Coast)
  "coco": { s: 1, c: 4 }, // Stupid / sucker (Ivory Coast)
  "koutou": { s: 3, c: 4 }, // Buttocks (Ivory Coast nouchi)
  "flôsseur": { s: 3, c: 4 }, // Show-off (Ivory Coast nouchi)
  "brouteur": { s: 3, c: 4 }, // Internet scammer (Ivory Coast/West Africa)
  "brouteuse": { s: 3, c: 4 }, // Fem internet scammer / gold digger
  "môgô": { s: 3, c: 4 }, // Man / dude (can be derogatory, Ivory Coast)
  "go de nuit": { s: 5, c: 4 }, // Night girl / prostitute (Ivory Coast)
  "faire le garba": { s: 3, c: 4 }, // To be vulgar / crude (Ivory Coast)
  "djôsseur": { s: 3, c: 4 }, // Arrogant person (Ivory Coast nouchi)
  "bangala": { s: 4, c: 4 }, // Penis (Central/West African French)
  "kokodjambou": { s: 1, c: 4 }, // Idiot (Ivory Coast nouchi)
  "gbêssé": { s: 1, c: 4 }, // Ugly (Ivory Coast nouchi)
  // --- Camerounais ---
  "mange-mille": { s: 3, c: 4 }, // Bribe taker (Cameroon)
  "asso": { s: 1, c: 4 }, // Buddy / fool (context-dependent, Cameroon)
  "nkukuma": { s: 1, c: 4 }, // Idiot (Cameroon)
  "nyanga": { s: 3, c: 4 }, // Show-off / arrogant (Cameroon)
  "kongossa": { s: 3, c: 4 }, // Gossip (Cameroon)
  "tchatcher": { s: 3, c: 4 }, // To blabber / hit on (Cameroon French)
  "tara": { s: 1, c: 4 }, // Friend / idiot (context, Cameroon)
  "ndamba": { s: 5, c: 4 }, // Whore (Cameroon slang)
  "mbenguiste": { s: 3, c: 4 }, // Diaspora African (can be derogatory, Cameroon)
  "sans-papiers de merde": { s: 3, c: 5 }, // Shitty undocumented person (very offensive)
  "mboutman": { s: 3, c: 5 }, // Man about town / fuckboy (Cameroon)
  // --- Senegalese ---
  "tëgg": { s: 3, c: 4 }, // Insult (Wolof-French)
  "soow": { s: 3, c: 4 }, // Crazy (Wolof-French)
  "niak sa mère": { s: 3, c: 5 }, // Fuck his mother (Senegalese French)
  "deug": { s: 3, c: 4 }, // Crazy (Wolof-French)
  "gaïndé": { s: 3, c: 4 }, // Lion / rough person (Senegal)
  "baadoola": { s: 1, c: 4 }, // Idiot (Senegal)
  "tangana": { s: 3, c: 4 }, // Nasty person (Senegal)
  // --- Congolais (expanded) ---
  "moyibi": { s: 3, c: 4 }, // Thief (Congo)
  "moloki": { s: 3, c: 4 }, // Crazy person (Congo)
  "lokuta": { s: 3, c: 4 }, // Liar (Congo Lingala-French)
  "biso": { s: 3, c: 4 }, // Derogatory term (Congo)
  "makango": { s: 3, c: 4 }, // Scammer (Congo)
  "mwana pute": { s: 5, c: 4 }, // Child of whore (Congo French)
  "pombé de merde": { s: 1, c: 3 }, // Shitty drunkard (Congo)
  "ye!": { s: 3, c: 5 }, // Expression of contempt (Congo)
  // --- Malian French ---
  "doni doni": { s: 1, c: 4 }, // Idiot (Mali)
  "fama": { s: 3, c: 4 }, // Chief / bossy person (derogatory, Mali)
  "wahala": { s: 3, c: 4 }, // Trouble / drama (West African French)
  "kounafoni": { s: 1, c: 4 }, // Coward (Mali)
  // --- Maghreb French (Arabic-French) ---
  "nta": { s: 3, c: 4 }, // You (derogatory, Maghreb)
  "zamel": { s: 3, c: 4 }, // Faggot (Maghreb Arabic-French, very offensive)
  "zamelat": { s: 3, c: 4 }, // Faggots (plural, Maghreb)
  "teho": { s: 5, c: 4 }, // Whore (Maghreb Arabic-French)
  "hashouma": { s: 3, c: 4 }, // Shame on you (Maghreb)
  "achkoun nta": { s: 3, c: 4 }, // Who do you think you are (Maghreb dismissive)
  "kelb": { s: 3, c: 4 }, // Dog (Maghreb Arabic-French insult)
  "kelbek": { s: 3, c: 4 }, // Your dog (Maghreb)
  "hmara": { s: 1, c: 4 }, // Female donkey / stupid woman (Maghreb)
  "khanzir": { s: 3, c: 4 }, // Pig (Maghreb Arabic-French insult)
  "weld el kahba": { s: 5, c: 5 }, // Son of a whore (Maghreb)
  "bent el kahba": { s: 5, c: 4 }, // Daughter of a whore (Maghreb)
  "yehdi": { s: 1, c: 4 }, // Idiot (Maghreb)
  "nik ommok": { s: 3, c: 5 }, // Fuck your mother (Maghreb)
  "nik ta mère bâtard": { s: 3, c: 4 }, // Compound Maghreb-French insult
  "hashoumtek": { s: 3, c: 4 }, // Shame on you (Maghreb variant)
  "naâl": { s: 3, c: 4 }, // Curse (Maghreb)
  "naâl din ommok": { s: 3, c: 4 }, // Curse your mother's religion (Maghreb)
  "tfouh": { s: 3, c: 4 }, // Spit (expression of contempt, Maghreb)
  "sir tnik ommok": { s: 3, c: 5 }, // Go fuck your mother (Maghreb)
  "tboun ommok": { s: 4, c: 4 }, // Your mother's pussy (Maghreb, very offensive)
  "lmanyouk": { s: 3, c: 4 }, // Faggot (Maghreb variant)
  "qahba": { s: 5, c: 4 }, // Whore (Maghreb Arabic variant of kahba)
  "khoroto": { s: 3, c: 5 }, // Bullshit (Maghreb)
  "khra": { s: 3, c: 5 }, // Shit (Maghreb Arabic-French)
  "wahd el khra": { s: 3, c: 5 }, // Piece of shit (Maghreb)
  "wahd el hmar": { s: 3, c: 4 }, // A donkey (Maghreb insult)
  "sale arabe": { s: 3, c: 4 }, // Dirty Arab (very offensive)
  "sale rebeu": { s: 3, c: 4 }, // Dirty Arab (verlan, offensive)
  "sale noir": { s: 3, c: 4 }, // Dirty Black person (very offensive)
  "sale blanc": { s: 3, c: 4 }, // Dirty White person (offensive)
  "sale juif": { s: 3, c: 4 }, // Dirty Jew (very offensive)

  // ========================================
  // === Racial / Ethnic Slurs (Expanded) ==
  // ========================================
  "bicot": { s: 5, c: 4 }, // Offensive slur for North Africans
  "bougnoul": { s: 5, c: 4 }, // Variant of bougnoule
  "crouille": { s: 5, c: 4 }, // Very offensive slur for Arabs
  "melon": { s: 5, c: 4 }, // Offensive slur for North Africans
  "raton": { s: 5, c: 4 }, // Offensive slur for North Africans (lit. small rat)
  "noraf": { s: 5, c: 4 }, // North African (derogatory slang)
  "fatma": { s: 5, c: 4 }, // Stereotypical name used for Arab women (derogatory)
  "bamboula": { s: 5, c: 4 }, // Very offensive racial slur for Black people
  "macaque": { s: 5, c: 4 }, // Monkey / racist slur
  "singe": { s: 5, c: 4 }, // Monkey / racist slur when directed at people
  "boucaque": { s: 5, c: 4 }, // Offensive slur for Black people
  "négro": { s: 5, c: 4 }, // Negro (offensive)
  "négrillon": { s: 5, c: 4 }, // Little negro (very offensive)
  "négrillonne": { s: 5, c: 4 }, // Fem little negro (very offensive)
  "sale nègre": { s: 5, c: 4 }, // Dirty negro
  "gwer": { s: 5, c: 4 }, // White person (derogatory, from Wolof)
  "niakoué": { s: 5, c: 4 }, // Very offensive slur for Vietnamese/Asian people
  "bridé": { s: 5, c: 4 }, // Slit-eyed (racist slur for Asians)
  "bridée": { s: 5, c: 4 }, // Fem slit-eyed
  "face de citron": { s: 5, c: 4 }, // Lemon face (racist slur for Asians)
  "jaune": { s: 5, c: 4 }, // Yellow (racist term for Asians)
  "chintok": { s: 5, c: 4 }, // Variant of chinetoque
  "chinetoc": { s: 5, c: 4 }, // Variant of chinetoque
  "ching chong": { s: 3, c: 4 }, // Racist mock-Chinese
  "sale chinois": { s: 5, c: 4 }, // Dirty Chinese
  "gitan": { s: 5, c: 4 }, // Gypsy (derogatory)
  "gitane": { s: 5, c: 4 }, // Fem gypsy (derogatory)
  "manouche": { s: 5, c: 4 }, // Gypsy / Romani (can be derogatory)
  "romanichel": { s: 5, c: 4 }, // Romani (derogatory)
  "romanichelle": { s: 5, c: 4 }, // Fem Romani (derogatory)
  "voleur de poules": { s: 5, c: 4 }, // Chicken thief (anti-Romani stereotype)
  "sale rom": { s: 5, c: 4 }, // Dirty Roma
  "sale gitan": { s: 5, c: 4 }, // Dirty gypsy
  "roumain de merde": { s: 5, c: 5 }, // Shitty Romanian (xenophobic)
  "sale polak": { s: 5, c: 4 }, // Dirty Polack
  "sale rital": { s: 5, c: 4 }, // Dirty Italian
  "espingouin": { s: 5, c: 4 }, // Offensive slur for Spanish people
  "espingoin": { s: 5, c: 4 }, // Variant spelling
  "amerloque": { s: 5, c: 4 }, // Derogatory for Americans
  "amerlock": { s: 5, c: 4 }, // Variant of amerloque
  "rosbeef": { s: 5, c: 4 }, // Roast beef (derogatory for British)
  "rosbif": { s: 5, c: 4 }, // Variant spelling
  "boche": { s: 5, c: 4 }, // Offensive slur for Germans
  "fridolin": { s: 5, c: 4 }, // Offensive for Germans (old)
  "schleu": { s: 5, c: 4 }, // Offensive for Germans
  "youtre": { s: 5, c: 4 }, // Variant offensive term for Jewish people

  // ========================================
  // === Transphobic Slurs (Expanded) ======
  // ========================================
  "travesti de merde": { s: 5, c: 5 }, // Shitty cross-dresser
  "sale travelo": { s: 5, c: 4 }, // Dirty tranny
  "gros travelo": { s: 1, c: 4 }, // Fat tranny
  "shemale": { s: 5, c: 5 }, // Shemale (offensive English loan)
  "trans de merde": { s: 5, c: 5 }, // Shitty trans (offensive)
  "homme-femme": { s: 5, c: 4 }, // Man-woman (derogatory for trans)
  "femme-homme": { s: 5, c: 4 }, // Woman-man (derogatory for trans)
  "transe": { s: 3, c: 4 }, // Trans (derogatory, as slang)

  // ========================================
  // === Ableist Slurs (Expanded) ==========
  // ========================================
  "mongol de merde": { s: 5, c: 5 }, // Shitty retard
  "sale mongol": { s: 5, c: 4 }, // Dirty retard
  "gros mongol": { s: 1, c: 4 }, // Fat retard
  "mongoloïde": { s: 5, c: 4 }, // Mongoloid (very offensive)
  "demeuré": { s: 5, c: 4 }, // Retarded / slow
  "demeurée": { s: 5, c: 4 }, // Fem retarded
  "arriéré": { s: 5, c: 4 }, // Backward / retarded
  "arriérée": { s: 5, c: 4 }, // Fem backward
  "handicapé de merde": { s: 5, c: 5 }, // Shitty disabled person (offensive)
  "infirme de merde": { s: 5, c: 5 }, // Shitty cripple (offensive)
  "gogol": { s: 5, c: 4 }, // Retard (French slang from Mongol)
  "gogole": { s: 5, c: 4 }, // Fem retard
  "débile profond": { s: 5, c: 4 }, // Profoundly retarded (very offensive)
  "attardé mental": { s: 5, c: 4 }, // Mentally retarded
  "retardé": { s: 5, c: 4 }, // Retarded (English loan, offensive)
  "autiste de merde": { s: 5, c: 5 }, // Shitty autistic person (offensive)
  "spaz": { s: 5, c: 4 }, // Spastic (English loan, offensive)
  "trisomique de merde": { s: 5, c: 5 }, // Shitty person with Down syndrome (very offensive)
  "sale gogol": { s: 5, c: 4 }, // Dirty retard

  // ========================================
  // === Internet Abbreviations (Expanded) =
  // ========================================
  "jtm pas": { s: 2, c: 3 }, // Je t'aime pas (I don't love you, dismissive)
  "jm'en bats": { s: 2, c: 3 }, // Je m'en bats (I don't care, vulgar)
  "jm'en fous": { s: 3, c: 5 }, // Je m'en fous (I don't give a fuck)
  "jm'en branle": { s: 2, c: 3 }, // Je m'en branle (I don't give a wank)
  "stfu": { s: 3, c: 5 }, // English but used in French internet
  "mdp": { s: 2, c: 3 }, // Mot de putain (variant, putain emphasis)
  "nkl": { s: 2, c: 3 }, // Nikkel / no worries (but can be dismissive)
  "tmm": { s: 3, c: 5 }, // Ta mère la merde (your mother the shit)
  "ntm sa mère": { s: 2, c: 3 }, // Nique ta mère sa mère (compound)
  "fdpc": { s: 2, c: 3 }, // Fils de pute connard
  "pgm": { s: 2, c: 3 }, // Pro gamer move (sarcastic dismissal)
  "azy": { s: 2, c: 3 }, // Allez / go on (dismissive/aggressive)
  "azzy": { s: 2, c: 3 }, // Variant of azy
  "wllh": { s: 2, c: 3 }, // Wallah abbreviated
  "sfll": { s: 2, c: 3 }, // Starfoullah abbreviated
  "tgl": { s: 2, c: 3 }, // Ta gueule (variant abbreviation)
  "ftg connard": { s: 2, c: 3 }, // Ferme ta gueule connard
  "ntm fdp": { s: 2, c: 3 }, // Nique ta mère fils de pute
  "ptdr ta mère": { s: 2, c: 3 }, // Dying of laughter your mother (mocking)
  "lmao ta race": { s: 2, c: 3 }, // Laughing at your race (offensive)

  // ========================================
  // === More Verlan (Expanded) ============
  // ========================================
  "teupu de merde": { s: 5, c: 5 }, // Whore of shit (verlan)
  "ssalope": { s: 3, c: 4 }, // Salope variant
  "deumer": { s: 3, c: 4 }, // Merde backwards (verlan)
  "demer": { s: 3, c: 4 }, // Short verlan of merde
  "leucu": { s: 3, c: 4 }, // Cul backwards (ass, verlan)
  "gueudin": { s: 3, c: 4 }, // Dingue backwards (crazy, verlan)
  "golmon": { s: 3, c: 4 }, // Mongol backwards (retard, verlan)
  "keussa": { s: 3, c: 4 }, // Sac backwards (verlan, dismissive)
  "rebou": { s: 1, c: 3 }, // Bourré backwards (drunk, verlan)
  "teboi": { s: 3, c: 4 }, // Boîte backwards (club, verlan)
  "genar": { s: 3, c: 4 }, // Garnement backwards (brat, verlan)
  "bétar": { s: 3, c: 4 }, // Bâtard backwards (verlan)
  "zemar": { s: 3, c: 4 }, // Miser (verlan)
  "zicmu": { s: 3, c: 4 }, // Musique backwards (verlan)
  "laissebé": { s: 3, c: 4 }, // Laisse béton variant (let it go)
  "teucha": { s: 4, c: 4 }, // Chatte backwards (pussy, verlan)
  "narvalo": { s: 3, c: 4 }, // Crazy person (Romani-derived verlan)
  "foncedé": { s: 3, c: 4 }, // Défoncé backwards (wasted, verlan)
  "tiéquar": { s: 3, c: 4 }, // Quartier backwards (hood, verlan)
  "ziva": { s: 3, c: 4 }, // Vas-y backwards (go on, aggressive)

  // ========================================
  // === More Sexual / Body Slang ==========
  // ========================================
  "burne": { s: 4, c: 4 }, // Ball (testicle, vulgar)
  "burnes": { s: 4, c: 4 }, // Balls (vulgar)
  "roupettes": { s: 4, c: 4 }, // Balls (slang)
  "valseuses": { s: 4, c: 4 }, // Balls (lit. waltzing ones)
  "bijoux de famille": { s: 4, c: 4 }, // Family jewels (testicles)
  "service trois pièces": { s: 4, c: 4 }, // Three-piece service (cock and balls)
  "braquemart": { s: 4, c: 4 }, // Sword / dick (archaic vulgar)
  "biroute": { s: 4, c: 4 }, // Dick (slang)
  "bitoune": { s: 4, c: 4 }, // Dick (slang)
  "quéquettard": { s: 4, c: 4 }, // Little dick man
  "engin": { s: 4, c: 4 }, // Machine / dick (slang)
  "outil": { s: 4, c: 4 }, // Tool / dick (slang)
  "manche": { s: 4, c: 4 }, // Handle / dick (slang)
  "poireau": { s: 4, c: 4 }, // Leek / dick (slang)
  "asperge": { s: 4, c: 4 }, // Asparagus / dick (slang)
  "saucisse": { s: 4, c: 4 }, // Sausage / dick (slang)
  "saucisson": { s: 4, c: 4 }, // Big sausage / dick (slang)
  "sifflet": { s: 4, c: 4 }, // Whistle / dick (slang)
  "fifille": { s: 4, c: 4 }, // Pussy (childish/vulgar)
  "frifri": { s: 4, c: 4 }, // Pussy (childish/vulgar)
  "touffe": { s: 3, c: 4 }, // Bush / pubic hair
  "abricot": { s: 4, c: 4 }, // Apricot / pussy (slang)
  "berlingot": { s: 3, c: 4 }, // Candy / clitoris (slang)
  "bouton de rose": { s: 3, c: 4 }, // Rosebud / clitoris (slang)
  "con comme la bite à jules": { s: 1, c: 4 }, // Dumb as Jules' dick (compound)
  "couille de loup": { s: 3, c: 4 }, // Wolf's ball (exclamation)
  "en avoir dans le froc": { s: 3, c: 4 }, // To have something in the pants (be brave/scared)
  "se vider les couilles": { s: 4, c: 4 }, // To empty one's balls
  "tirer son coup": { s: 3, c: 4 }, // To get one's rocks off
  "tremper le biscuit": { s: 3, c: 4 }, // To dip the biscuit (have sex)
  "mettre la saucisse dans le potage": { s: 3, c: 4 }, // Put sausage in the soup (sex)
  "s'envoyer en l'air": { s: 3, c: 4 }, // To send oneself in the air (have sex)
  "sauter": { s: 3, c: 5 }, // To jump / to fuck
  "grimper": { s: 3, c: 5 }, // To climb / to fuck
  "chevaucher": { s: 3, c: 5 }, // To ride / to fuck
  "ken de ouf": { s: 3, c: 5 }, // Crazy fuck (verlan compound)
  "se taper": { s: 3, c: 5 }, // To do / to fuck
  "se farcir": { s: 3, c: 5 }, // To stuff / to fuck
  "culbuter": { s: 3, c: 5 }, // To topple / to fuck
  "ramoner": { s: 3, c: 5 }, // To sweep the chimney / to fuck
  "défourrailler": { s: 3, c: 5 }, // To unholster / to fuck hard
  "défoncer": { s: 3, c: 5 }, // To smash in / to fuck hard
  "poutrer": { s: 3, c: 5 }, // To beam / to fuck hard
  "pilonner": { s: 3, c: 5 }, // To pound / to fuck hard
  "démonter": { s: 3, c: 5 }, // To dismantle / to fuck hard
  "dérouiller": { s: 3, c: 5 }, // To take a beating / to fuck hard
  "se faire défoncer": { s: 3, c: 5 }, // To get smashed / to get fucked hard
  "se faire pilonner": { s: 3, c: 4 }, // To get pounded
  "se faire démonter": { s: 3, c: 5 }, // To get dismantled / to get fucked hard
  "se faire ramoner": { s: 3, c: 5 }, // To get chimney swept / to get fucked
  "échangisme": { s: 3, c: 4 }, // Swinging
  "échangiste": { s: 3, c: 4 }, // Swinger
  "coquin": { s: 3, c: 4 }, // Naughty / kinky
  "coquine": { s: 3, c: 4 }, // Fem naughty / kinky
  "cul de sac à foutre": { s: 3, c: 4 }, // Cum bag dead end (compound insult)
  "salope de merde": { s: 3, c: 5 }, // Shitty slut
  "pute à nègre": { s: 5, c: 4 }, // Negro's whore (extremely offensive)
  "pute à soldat": { s: 5, c: 5 }, // Soldier's whore
  "pute de luxe": { s: 5, c: 4 }, // Luxury whore
  "pute de rue": { s: 5, c: 4 }, // Street whore
  "cougar de merde": { s: 3, c: 5 }, // Shitty cougar

  // ========================================
  // === Religious Profanity (France) ======
  // ========================================
  "nom de dieu": { s: 2, c: 3 }, // Name of God (profanity)
  "bon dieu": { s: 2, c: 3 }, // Good God (profanity)
  "sacré nom de dieu de merde": { s: 3, c: 5 }, // Holy name of God of shit
  "nom de dieu de putain": { s: 5, c: 4 }, // Name of God of whore
  "jésus christ de merde": { s: 3, c: 5 }, // Jesus Christ of shit
  "par le christ": { s: 2, c: 3 }, // By Christ (profanity)
  "sacré christ": { s: 2, c: 3 }, // Holy Christ
  "dieu de merde": { s: 3, c: 5 }, // God of shit
  "sacré dieu": { s: 2, c: 3 }, // Holy God
  "nom d'un chien": { s: 2, c: 3 }, // Name of a dog (mild euphemism)
  "nom d'une pipe": { s: 2, c: 3 }, // Name of a pipe (mild euphemism)
  "palsambleu": { s: 2, c: 3 }, // By God's blood (archaic)
  "morbleu": { s: 5, c: 5 }, // By God's death (archaic)
  "sacrebleu": { s: 2, c: 3 }, // Sacred blue (archaic euphemism)
  "ventrebleu": { s: 2, c: 3 }, // God's belly (archaic)
  "corbleu": { s: 2, c: 3 }, // God's body (archaic)
  "jarnicoton": { s: 2, c: 3 }, // Old profanity variant
  "par le sang dieu": { s: 2, c: 3 }, // By God's blood

  // ========================================
  // === Threats & Violence ================
  // ========================================
  "je vais te tuer": { s: 5, c: 5 }, // I'm going to kill you
  "je vais te défoncer": { s: 5, c: 5 }, // I'm going to smash you
  "je vais te casser la gueule": { s: 5, c: 5 }, // I'm going to break your face
  "je vais te péter la gueule": { s: 5, c: 5 }, // I'm going to bust your face
  "je vais te niquer ta mère": { s: 5, c: 5 }, // I'm going to fuck your mother
  "je vais t'éclater": { s: 5, c: 5 }, // I'm going to destroy you
  "je vais t'exploser": { s: 5, c: 5 }, // I'm going to explode you
  "je vais te crever": { s: 5, c: 5 }, // I'm going to kill you (informal)
  "je vais te buter": { s: 5, c: 5 }, // I'm going to kill you (slang)
  "je vais te fumer": { s: 5, c: 5 }, // I'm going to smoke you (kill)
  "je vais te déchirer": { s: 5, c: 5 }, // I'm going to tear you apart
  "je vais te démonter la gueule": { s: 5, c: 5 }, // I'm going to dismantle your face
  "je vais te refaire le portrait": { s: 5, c: 5 }, // I'm going to redo your portrait (beat up)
  "je vais t'arracher la tête": { s: 5, c: 5 }, // I'm going to rip your head off
  "je vais te mettre une balle": { s: 5, c: 5 }, // I'm going to put a bullet in you
  "tu vas morfler": { s: 5, c: 5 }, // You're going to get it
  "tu vas prendre cher": { s: 5, c: 5 }, // You're going to get it bad
  "tu vas déguster": { s: 5, c: 5 }, // You're going to taste it (get beaten)
  "tu vas douiller": { s: 5, c: 5 }, // You're going to suffer
  "je te défonce ta race": { s: 5, c: 5 }, // I smash your race
  "casse-toi avant que je t'explose": { s: 5, c: 5 }, // Piss off before I explode you
  "nique ta mère je vais te tuer": { s: 5, c: 5 }, // Fuck your mother I'll kill you

  // ========================================
  // === Scatological (Expanded) ===========
  // ========================================
  "étron": { s: 3, c: 4 }, // Turd
  "bouse": { s: 3, c: 4 }, // Cow pat
  "bouse de vache": { s: 3, c: 5 }, // Cow shit
  "crotte": { s: 1, c: 4 }, // Poop (mild)
  "caca": { s: 3, c: 4 }, // Poo (childish)
  "chiotte": { s: 3, c: 4 }, // Toilet / crap
  "chiottes": { s: 3, c: 4 }, // Toilets (vulgar)
  "dans les chiottes": { s: 3, c: 5 }, // In the toilets (fucked)
  "aux chiottes": { s: 3, c: 4 }, // To the toilets (dismissal)
  "chiure": { s: 3, c: 5 }, // Fly shit / worthless thing
  "chiure de mouche": { s: 3, c: 4 }, // Fly droppings / insignificant thing
  "pissat": { s: 3, c: 4 }, // Piss (liquid)
  "pisseux": { s: 3, c: 4 }, // Pissy / bed-wetter
  "pisseuse": { s: 3, c: 4 }, // Fem pissy
  "pissotière": { s: 3, c: 4 }, // Urinal (vulgar)
  "vessie": { s: 3, c: 4 }, // Bladder (in vulgar context)
  "pet foireux": { s: 3, c: 4 }, // Leaky fart
  "péteux de merde": { s: 1, c: 4 }, // Shitty coward
  "chier des bulles": { s: 3, c: 5 }, // To shit bubbles (to be terrified)
  "chier dans son froc": { s: 3, c: 5 }, // To shit one's pants
  "couler un bronze": { s: 3, c: 4 }, // To lay a turd (lit. cast a bronze)
  "poser une pêche": { s: 3, c: 5 }, // To drop a peach (take a shit)
  "tartine de merde": { s: 3, c: 5 }, // Slice of shit
  "mouler un cake": { s: 3, c: 5 }, // To mold a cake (take a shit)
  "gerber": { s: 3, c: 4 }, // To puke / disgusting
  "dégueuler": { s: 3, c: 4 }, // To puke
  "dégueulasser": { s: 3, c: 4 }, // To make disgusting
  "vomi": { s: 3, c: 4 }, // Vomit
  "vomir": { s: 3, c: 4 }, // To vomit
  "gerbe de merde": { s: 3, c: 5 }, // Shit puke

  // ========================================
  // === Dismissive / Condescending ========
  // ========================================
  "ferme-la": { s: 3, c: 4 }, // Shut it
  "la ferme": { s: 3, c: 4 }, // Shut up
  "boucle-la": { s: 3, c: 4 }, // Shut it (lit. buckle it)
  "écrase": { s: 3, c: 4 }, // Shut up (lit. crush)
  "ras le bol": { s: 3, c: 4 }, // Fed up
  "ras le cul": { s: 3, c: 4 }, // Fed up (vulgar, lit. ass level)
  "j'en ai marre": { s: 3, c: 4 }, // I'm fed up
  "j'en ai ma claque": { s: 3, c: 4 }, // I've had enough
  "tu me saoules": { s: 3, c: 4 }, // You're boring/annoying me
  "lâche-moi la grappe": { s: 3, c: 4 }, // Let go of my bunch (leave me alone, vulgar)
  "lâche-moi les baskets": { s: 3, c: 4 }, // Let go of my sneakers (leave me alone)
  "fous-moi la paix": { s: 3, c: 5 }, // Leave me the fuck alone
  "fiche-moi la paix": { s: 3, c: 4 }, // Leave me alone
  "va voir ailleurs si j'y suis": { s: 3, c: 4 }, // Go see elsewhere if I'm there (get lost)
  "tu me casses les pieds": { s: 3, c: 4 }, // You break my feet (annoy me)
  "tu me gaves": { s: 3, c: 4 }, // You force-feed me (annoy me)
  "tu me prends la tête": { s: 3, c: 4 }, // You take my head (annoy me)
  "casse les couilles": { s: 4, c: 4 }, // Break the balls (annoying)
  "pète les couilles": { s: 4, c: 4 }, // Burst the balls (annoying)
  "tu es nul à chier": { s: 3, c: 5 }, // You're shit useless
  "tu es con comme un manche": { s: 1, c: 4 }, // You're dumb as a handle
  "tu as la capacité d'une huître": { s: 3, c: 4 }, // You have the capacity of an oyster
  "tu es aussi utile qu'un cendrier sur une moto": { s: 3, c: 4 }, // You're as useful as an ashtray on a motorcycle

  // ========================================
  // === Misc Vulgar & Slang ===============
  // ========================================
  "salaud de merde": { s: 3, c: 4 }, // Shitty bastard
  "enfoiré de merde": { s: 3, c: 5 }, // Shitty scumbag
  "fumier de la pire espèce": { s: 3, c: 4 }, // Manure of the worst kind
  "pourriture ambulante": { s: 3, c: 4 }, // Walking rot
  "déchet de la société": { s: 3, c: 4 }, // Waste of society
  "raté": { s: 3, c: 4 }, // Failure
  "ratée": { s: 3, c: 4 }, // Fem failure
  "looseur": { s: 1, c: 4 }, // Loser (French spelling of English)
  "looseuse": { s: 1, c: 4 }, // Fem loser
  "looser": { s: 1, c: 4 }, // Loser (English spelling used in French)
  "naze": { s: 3, c: 5 }, // Useless / broken / shitty
  "nazes": { s: 3, c: 4 }, // Plural useless
  "niquer la vie": { s: 3, c: 5 }, // To fuck up life
  "balek": { s: 3, c: 4 }, // I don't care (from Arabic, vulgar)
  "wallak": { s: 3, c: 4 }, // Variant of balek
  "on s'en bat les couilles": { s: 4, c: 4 }, // We beat our balls with it (don't care)
  "osef de ta vie": { s: 3, c: 5 }, // We don't give a fuck about your life
  "ta vie c'est de la merde": { s: 3, c: 5 }, // Your life is shit
  "ta vie de merde": { s: 3, c: 5 }, // Your shit life
  "va te faire voir chez les grecs": { s: 3, c: 5 }, // Go get seen at the Greeks (fuck off)
  "aller se faire cuire un oeuf": { s: 3, c: 4 }, // Go cook an egg (get lost)
  "tu peux te brosser": { s: 3, c: 4 }, // You can brush yourself (dream on)
  "dans ton cul": { s: 3, c: 4 }, // In your ass
  "je te le mets": { s: 3, c: 4 }, // I'll put it in you
  "je te la mets": { s: 3, c: 4 }, // I'll put it in you (fem object)
  "profonde": { s: 3, c: 4 }, // Deep (sexual context)
  "à sec": { s: 3, c: 4 }, // Dry (sexually or violently)
  "bourrer": { s: 3, c: 5 }, // To stuff / to fuck
  "se bourrer la gueule": { s: 3, c: 5 }, // To get shitfaced
  "se déchirer la gueule": { s: 3, c: 4 }, // To get wasted
  "se mettre une mine": { s: 1, c: 3 }, // To get obliterated (drunk)
  "se prendre une branlée": { s: 3, c: 4 }, // To get a beating / thrashing
  "branlée": { s: 3, c: 4 }, // Beating / thrashing
  "raclée": { s: 3, c: 4 }, // Beating / spanking
  "rouste": { s: 3, c: 4 }, // Beating / spanking
  "peignée": { s: 3, c: 4 }, // Beating (old slang)
  "trempe": { s: 3, c: 4 }, // Soaking / beating
  "tannée": { s: 3, c: 4 }, // Beating (old slang)
  "dérouillée": { s: 3, c: 4 }, // Beating (slang)
  "biture": { s: 3, c: 4 }, // Drinking binge
  "cuite": { s: 1, c: 3 }, // Getting drunk
  "se cuiter": { s: 1, c: 3 }, // To get drunk
  "se torcher": { s: 3, c: 4 }, // To get wasted
  "torché": { s: 3, c: 4 }, // Wasted / wiped
  "pété": { s: 3, c: 4 }, // Wasted / broken / farted
  "pétée": { s: 3, c: 4 }, // Fem wasted
  "défoncé": { s: 3, c: 4 }, // Wasted / stoned
  "défoncée": { s: 3, c: 4 }, // Fem wasted
  "arraché": { s: 3, c: 4 }, // Wasted (very)
  "arrachée": { s: 3, c: 4 }, // Fem wasted (very)
  "niqué": { s: 3, c: 5 }, // Fucked / broken
  "niquée": { s: 3, c: 5 }, // Fem fucked / broken
  "baisé de merde": { s: 3, c: 5 }, // Shit-fucked
  "foutu de merde": { s: 3, c: 5 }, // Shit-screwed
  "pute borgne": { s: 5, c: 4 }, // One-eyed whore (compound insult)
  "face de rat": { s: 3, c: 4 }, // Rat face
  "face de pet": { s: 3, c: 4 }, // Fart face
  "gueule de raie": { s: 3, c: 4 }, // Crack face
  "tronche de cake": { s: 1, c: 4 }, // Cake face / ugly mug
  "tronche de cul": { s: 3, c: 4 }, // Ass face
  "tronche de merde": { s: 3, c: 5 }, // Shit face
  "sale tronche": { s: 3, c: 4 }, // Dirty face
  "sale face": { s: 3, c: 4 }, // Dirty face
  "sale gueule de con": { s: 1, c: 4 }, // Dirty idiot face
  "pauvre type": { s: 3, c: 4 }, // Pathetic guy
  "pauvre fille": { s: 3, c: 4 }, // Pathetic girl
  "pauvre merde": { s: 3, c: 5 }, // Pathetic shit
  "pauvre tache": { s: 3, c: 4 }, // Pathetic stain
  "tache": { s: 1, c: 4 }, // Stain / loser
  "tocsin": { s: 3, c: 4 }, // Alarm bell / annoying person
  "relou de première": { s: 3, c: 4 }, // First-class annoying
  "je t'encule profond": { s: 3, c: 5 }, // I fuck you deep in the ass
  "nique tout le monde": { s: 3, c: 5 }, // Fuck everyone
  "nique la vie": { s: 3, c: 5 }, // Fuck life
  "nique le système": { s: 3, c: 5 }, // Fuck the system
  "bande de bâtards": { s: 3, c: 4 }, // Bunch of bastards
  "bande de fils de pute": { s: 3, c: 4 }, // Bunch of sons of bitches
  "bande de connards": { s: 3, c: 4 }, // Bunch of assholes
  "bande d'enculés": { s: 3, c: 5 }, // Bunch of ass-fuckers
  "bande de merdes": { s: 3, c: 5 }, // Bunch of shits
  "tous des cons": { s: 1, c: 4 }, // All idiots
  "tous des enculés": { s: 3, c: 5 }, // All ass-fuckers
  "tous des putes": { s: 5, c: 4 }, // All whores
  "rien à battre": { s: 3, c: 4 }, // Don't give a damn
  "rien à carrer": { s: 3, c: 5 }, // Don't give a fuck (verlan-ish)
  "on s'en tape": { s: 3, c: 4 }, // We don't care (slang)
  "on s'en branle": { s: 3, c: 4 }, // We don't give a wank
  "on s'en carre": { s: 3, c: 5 }, // We don't give a fuck
  "grosse merde": { s: 3, c: 5 }, // Big shit
  "petit merdeux": { s: 3, c: 5 }, // Little shithead
  "petite merdeuse": { s: 3, c: 5 }, // Fem little shithead
  "enflure": { s: 3, c: 4 }, // Swelling / scumbag
  "sac à merde ambulant": { s: 3, c: 5 }, // Walking shit bag
  "triple connard": { s: 3, c: 4 }, // Triple asshole
  "triple enculé": { s: 3, c: 5 }, // Triple ass-fucker
  "ultra-con": { s: 1, c: 4 }, // Ultra-idiot
  "méga-con": { s: 1, c: 4 }, // Mega-idiot
  "super connard": { s: 3, c: 4 }, // Super asshole
  "sale enfoiré de merde": { s: 3, c: 5 }, // Dirty shitty scumbag
  "putain d'enfoiré": { s: 3, c: 5 }, // Fucking scumbag
  "putain d'enculé": { s: 3, c: 5 }, // Fucking ass-fucker
  "putain de fils de pute": { s: 3, c: 5 }, // Fucking son of a bitch
  "putain de bâtard": { s: 3, c: 4 }, // Fucking bastard
  "putain de merde de sa race": { s: 3, c: 5 }, // Fucking shit of his race
  "bordel de putain": { s: 5, c: 4 }, // Brothel of whore
  "quel enculé": { s: 3, c: 5 }, // What an ass-fucker
  "quelle pute": { s: 5, c: 4 }, // What a whore
  "quel bâtard": { s: 3, c: 4 }, // What a bastard
  "quel fils de pute": { s: 3, c: 4 }, // What a son of a bitch
  "espèce d'ordure": { s: 3, c: 4 }, // You piece of trash
  "espèce de charogne": { s: 3, c: 4 }, // You carrion
  "espèce de vermine": { s: 3, c: 4 }, // You vermin
  "espèce de cancrelat": { s: 4, c: 4 }, // You cockroach
  "espèce de larve": { s: 3, c: 4 }, // You larva
  "espèce de sous-merde": { s: 3, c: 5 }, // You sub-shit
  "vermine de merde": { s: 3, c: 5 }, // Shitty vermin
  "vermine": { s: 3, c: 4 }, // Vermin
  "ramassis de merde": { s: 3, c: 5 }, // Heap of shit
  "amas de merde": { s: 3, c: 5 }, // Mass of shit
  "je te crache dessus": { s: 3, c: 4 }, // I spit on you
  "je te chie dans la bouche": { s: 3, c: 5 }, // I shit in your mouth

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "sale putain": { s: 5, c: 4 }, // Dirty whore
  "sale enfoiré": { s: 3, c: 4 }, // Dirty bastard
  "sale chienne": { s: 1, c: 4 }, // Dirty bitch (f.)
  "sale type": { s: 1, c: 4 }, // Dirty dude
  "sale porc": { s: 1, c: 4 }, // Dirty pig
  "sale pouffiasse": { s: 1, c: 4 }, // Dirty slut
  "sale clochard": { s: 1, c: 4 }, // Dirty bum
  "sale ordure": { s: 1, c: 4 }, // Dirty filth
  "sale vermine": { s: 1, c: 4 }, // Dirty vermin
  "sale enflure": { s: 1, c: 4 }, // Dirty swelling (insult)
  "sale raclure": { s: 1, c: 4 }, // Dirty scraping
  "sale merdeux": { s: 3, c: 5 }, // Dirty shitty (person)
  "petit connard": { s: 3, c: 4 }, // Little bastard
  "petite pute": { s: 5, c: 4 }, // Little whore
  "petit enculé": { s: 3, c: 5 }, // Little ass-fucked
  "gros connard": { s: 3, c: 4 }, // Big bastard
  "grosse connasse": { s: 1, c: 4 }, // Big bitch
  "gros enculé": { s: 3, c: 5 }, // Big ass-fucked
  "gros bâtard": { s: 3, c: 4 }, // Big bastard
  "gros tas de merde": { s: 3, c: 5 }, // Big pile of shit
  "grosse baleine": { s: 1, c: 4 }, // Big whale
  "gros plein de merde": { s: 3, c: 5 }, // Big full of shit
  "gros naze": { s: 1, c: 4 }, // Big loser
  "gros bouffon": { s: 1, c: 4 }, // Big buffoon
  "gros débile": { s: 1, c: 4 }, // Big moron
  "putain de ta race": { s: 5, c: 4 }, // Whore of your race
  "bordel de cul": { s: 3, c: 4 }, // Brothel of ass
  "bordel à cul": { s: 3, c: 4 }, // Ass brothel
  "nom de dieu de merde": { s: 3, c: 5 }, // Name of God of shit
  "nom de dieu de bordel": { s: 1, c: 4 }, // Name of God of brothel
  "foutu connard": { s: 3, c: 4 }, // Damned bastard
  "foutu enculé": { s: 3, c: 5 }, // Damned ass-fucked
  "foutu merdeux": { s: 3, c: 5 }, // Damned shitty one
  "foutue salope": { s: 1, c: 4 }, // Damned slut
  "foutue pute": { s: 5, c: 4 }, // Damned whore
  "sacrée merde": { s: 3, c: 5 }, // Sacred shit (damn)
  "sacré connard": { s: 3, c: 4 }, // Sacred bastard
  "sacrée connasse": { s: 1, c: 4 }, // Sacred bitch
  "sacrée putain": { s: 5, c: 4 }, // Sacred whore
  "satanée merde": { s: 3, c: 5 }, // Satanic shit
  "fichu connard": { s: 3, c: 4 }, // Damned bastard
  "fichue salope": { s: 1, c: 4 }, // Damned slut
  "p'tit con": { s: 1, c: 4 }, // Lil idiot
  "p'tite pute": { s: 5, c: 4 }, // Lil whore
  "p'tit enculé": { s: 3, c: 5 }, // Lil ass-fucked
  "pauvre connard": { s: 3, c: 4 }, // Poor bastard
  "pauvre connasse": { s: 1, c: 4 }, // Poor bitch
  "pauvre mec": { s: 1, c: 4 }, // Poor dude (pathetic)
  "pauvre naze": { s: 1, c: 4 }, // Poor loser
  "triple con": { s: 1, c: 4 }, // Triple idiot
  "double buse": { s: 1, c: 4 }, // Double buzzard (idiot)
  "espèce d'enculé": { s: 3, c: 5 }, // Species of ass-fucked
  "espèce de connasse": { s: 1, c: 4 }, // Species of bitch
  "espèce de pute": { s: 5, c: 4 }, // Species of whore
  "espèce d'abruti": { s: 1, c: 4 }, // Species of dimwit
  "espèce de crétin": { s: 1, c: 4 }, // Species of cretin
  "espèce de débile": { s: 1, c: 4 }, // Species of moron
  "espèce d'imbécile": { s: 1, c: 4 }, // Species of imbecile
  "espèce d'idiot": { s: 1, c: 4 }, // Species of idiot
  "enculé de ta mère": { s: 3, c: 5 }, // Ass-fucked of your mother
  "nique ta grand-mère": { s: 3, c: 5 }, // Fuck your grandmother
  "nique ta sœur": { s: 3, c: 5 }, // Fuck your sister
  "va te branler": { s: 4, c: 4 }, // Go jerk off
  "va sucer": { s: 1, c: 4 }, // Go suck
  "va bouffer de la merde": { s: 3, c: 5 }, // Go eat shit
  "je te crache à la gueule": { s: 1, c: 4 }, // I spit in your face
  "je vais te niquer": { s: 3, c: 5 }, // I'll fuck you
  "je vais te démonter": { s: 1, c: 4 }, // I'll dismantle you
  "je vais te baiser": { s: 3, c: 5 }, // I'll fuck you
  "ta gueule": { s: 1, c: 4 }, // Shut your face
  "ferme ton clapet": { s: 1, c: 4 }, // Shut your flap
  "ta bouche": { s: 1, c: 4 }, // Your mouth (shut up)

  // ========================================
  // === Quebec French =====================
  // ========================================
  "criss": { s: 3, c: 4 }, // Christ short
  "tabarnac": { s: 3, c: 4 }, // Tabernacle variant
  "taboire": { s: 3, c: 4 }, // Tabernacle variant
  "estie": { s: 3, c: 4 }, // Host variant
  "esti": { s: 3, c: 4 }, // Host variant
  "hostie": { s: 3, c: 4 }, // Host formal
  "cibolac": { s: 3, c: 4 }, // Ciborium variant
  "sacre": { s: 3, c: 4 }, // Sacred (swear base)
  "batêche": { s: 3, c: 4 }, // Baptism variant
  "mauditement": { s: 3, c: 4 }, // Damnedly (Quebec)
  "vierge": { s: 3, c: 4 }, // Virgin swear
  "saint-ciboire": { s: 3, c: 4 }, // Saint ciborium
  "saint-sacrament": { s: 3, c: 4 }, // Saint sacrament
  "câlice de crisse": { s: 3, c: 4 }, // Chalice of Christ
  "esti de câlice": { s: 3, c: 4 }, // Host of chalice
  "câlice de merde": { s: 3, c: 5 }, // Chalice of shit
  "tabarnak de merde": { s: 3, c: 5 }, // Tabernacle of shit
  "ostie de merde": { s: 3, c: 5 }, // Host of shit
  "décâlissé": { s: 3, c: 4 }, // Chaliced-out (destroyed)
  "plottes": { s: 5, c: 5 }, // Cunts (Quebec)
  "se crosser": { s: 4, c: 4 }, // To jerk off (Quebec)
  "chieuse": { s: 3, c: 5 }, // Shitter (f.) (Quebec)
  "habitant": { s: 3, c: 4 }, // Inhabitant / hick (Quebec)
  "taouin": { s: 1, c: 4 }, // Idiot (Quebec)
  "tarla": { s: 1, c: 4 }, // Idiot (Quebec)
  "tarlais": { s: 1, c: 4 }, // Idiot variant (Quebec)
  "sans-dessein": { s: 3, c: 4 }, // Without purpose (useless, Quebec)
  "guidounne": { s: 3, c: 4 }, // Slut variant (Quebec)
  "pitoune": { s: 3, c: 4 }, // Bimbo (Quebec)
  "mange de la marde": { s: 3, c: 5 }, // Eat shit (Quebec)
  "baveux": { s: 3, c: 4 }, // Drooler / arrogant (Quebec)
  "baveuse": { s: 3, c: 4 }, // Drooler (f.) (Quebec)
  "frais chié": { s: 3, c: 4 }, // Freshly shat (arrogant, Quebec)
  "fraîche chiée": { s: 3, c: 4 }, // Freshly shat (f.) (Quebec)
  "enfant de nanane": { s: 3, c: 4 }, // Child of candy (Quebec euphem.)
  "mon ostie": { s: 5, c: 5 }, // My host (Quebec threat)
  "mon câlice": { s: 5, c: 5 }, // My chalice (Quebec threat)
  "mon tabarnak": { s: 5, c: 5 }, // My tabernacle (Quebec threat)
  "mon crisse": { s: 5, c: 5 }, // My Christ (Quebec threat)
  "toé mon ostie": { s: 5, c: 5 }, // You my host (Quebec threat)
  "mange d'la marde": { s: 3, c: 5 }, // Eat shit (Quebec colloquial)
  "décâlisse": { s: 3, c: 5 }, // Get the fuck out (Quebec)
  "décrisse": { s: 3, c: 5 }, // Get the fuck out (Quebec)

  // ========================================
  // === Belgian French ====================
  // ========================================
  "une fois connard": { s: 3, c: 4 }, // Once bastard (Belgian emphasis)
  "snotneus": { s: 3, c: 4 }, // Snot nose (Belgian)
  "klootzak": { s: 3, c: 4 }, // Ball sack (Belgian, from Dutch)
  "zot": { s: 3, c: 4 }, // Crazy (Belgian)
  "zotteke": { s: 3, c: 4 }, // Little crazy (Belgian)
  "stront": { s: 3, c: 5 }, // Shit (Belgian, from Dutch)
  "smeerkaas": { s: 3, c: 4 }, // Spread cheese (annoying, Belgian)
  "stommerik": { s: 1, c: 4 }, // Stupid one (Belgian)
  "uilskuiken": { s: 1, c: 4 }, // Owl chick / fool (Belgian)

  // ========================================
  // === Swiss French ======================
  // ========================================
  "banane": { s: 3, c: 4 }, // Banana (idiot, Swiss)
  "couillon de merde": { s: 1, c: 4 }, // Shitty fool (Swiss)
  "sapristi": { s: 2, c: 3 }, // Sacredness (Swiss mild swear)
  "vingt dieux": { s: 3, c: 4 }, // Twenty gods (Swiss swear)
  "cré nom de Dieu": { s: 3, c: 4 }, // Created name of God (Swiss)
  "bon sang de bois": { s: 3, c: 4 }, // Good blood of wood (Swiss)

  // ========================================
  // === African French ====================
  // ========================================
  "bordel de Dieu": { s: 3, c: 4 }, // Brothel of God (West African)
  "gueule de singe": { s: 3, c: 4 }, // Monkey face (offensive)
  "bounty": { s: 3, c: 4 }, // Bounty (Black outside white inside)
  "blédard": { s: 3, c: 4 }, // Person from the bled (countryside, derog.)
  "gaouri": { s: 3, c: 4 }, // Non-Muslim (African French derog.)

  // ========================================
  // === Antillean/Caribbean French ========
  // ========================================
  "coucoune": { s: 4, c: 4 }, // Vagina (Antillean)
  "couloune": { s: 4, c: 4 }, // Vagina variant (Antillean)
  "makrel": { s: 3, c: 4 }, // Gossiper / slut (Antillean)
  "vyé manman": { s: 1, c: 4 }, // Ugly/bad mama (Antillean insult)
  "manman ou": { s: 3, c: 4 }, // Your mother (Antillean insult)
  "lanmè manman ou": { s: 3, c: 4 }, // Your mother's sea (Antillean)
  "kaka": { s: 3, c: 5 }, // Shit (Antillean Creole)
  "malpropre": { s: 3, c: 4 }, // Dirty person (Antillean)
  "fènéyan": { s: 3, c: 4 }, // Lazy person (Antillean)
  "vakabò": { s: 3, c: 4 }, // Vagabond (Antillean Creole)

  // ========================================
  // === Reunion French ====================
  // ========================================
  "bordel de la mare": { s: 3, c: 4 }, // Brothel of the pond (Reunion)
  "casse couille": { s: 3, c: 4 }, // Ball breaker (Reunion)
  "couilles molles": { s: 4, c: 4 }, // Soft balls (Reunion wimp)
  "tête de nœud": { s: 4, c: 4 }, // Knot head / dick head (Reunion)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "faire une pipe": { s: 4, c: 5 }, // To give a blowjob
  "suceur": { s: 4, c: 4 }, // Sucker (m.)
  "suceuse": { s: 4, c: 4 }, // Sucker (f.)
  "pompeuse": { s: 4, c: 4 }, // Pumper (f.)
  "pompier": { s: 4, c: 5 }, // Fireman / blowjob
  "enculer": { s: 3, c: 4 }, // To ass-fuck
  "enculeur": { s: 4, c: 5 }, // Ass-fucker
  "partouzeur": { s: 4, c: 4 }, // Orgy participant (m.)
  "partouzeuse": { s: 4, c: 4 }, // Orgy participant (f.)
  "triolisme": { s: 4, c: 4 }, // Threesome
  "bondage": { s: 3, c: 4 }, // Bondage
  "fétichisme": { s: 4, c: 4 }, // Fetishism
  "voyeurisme": { s: 4, c: 4 }, // Voyeurism
  "perversion": { s: 4, c: 4 }, // Perversion
  "obsédé sexuel": { s: 4, c: 4 }, // Sexual obsessive
  "escort": { s: 3, c: 4 }, // Escort
  "call-girl": { s: 4, c: 4 }, // Call girl
  "gigolo": { s: 4, c: 4 }, // Gigolo
  "salaude": { s: 3, c: 4 }, // Bastard (f.)
  "dépravé": { s: 4, c: 4 }, // Depraved
  "dépravée": { s: 4, c: 4 }, // Depraved (f.)
  "lascif": { s: 4, c: 4 }, // Lascivious
  "lascive": { s: 4, c: 4 }, // Lascivious (f.)
  "libidineuse": { s: 4, c: 4 }, // Libidinous (f.)
  "cochonner": { s: 4, c: 4 }, // To pig around
  "porcherie": { s: 4, c: 4 }, // Pigsty
  "trousseur de jupons": { s: 4, c: 4 }, // Skirt chaser
  "coureur de jupons": { s: 4, c: 4 }, // Skirt runner (womanizer)
  "coureuse": { s: 4, c: 4 }, // Easy woman
  "fion": { s: 4, c: 4 }, // Asshole
  "rondelle": { s: 4, c: 4 }, // Ring / asshole
  "troufion": { s: 4, c: 4 }, // Asshole / private (military)
  "raie du cul": { s: 4, c: 4 }, // Ass crack
  "verge": { s: 4, c: 4 }, // Penis (formal)

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "crotte de nez": { s: 3, c: 4 }, // Booger
  "colombin": { s: 3, c: 4 }, // Turd
  "fiente": { s: 3, c: 4 }, // Droppings
  "pisseur": { s: 3, c: 4 }, // Pisser (m.)
  "pisse": { s: 3, c: 4 }, // Piss
  "péter": { s: 3, c: 4 }, // To fart
  "prout": { s: 3, c: 4 }, // Toot
  "prouter": { s: 3, c: 4 }, // To toot
  "vesser": { s: 3, c: 4 }, // To fart silently
  "vesse": { s: 3, c: 4 }, // Silent fart
  "morve": { s: 3, c: 4 }, // Snot
  "glaviot": { s: 3, c: 4 }, // Loogie
  "glavioter": { s: 3, c: 4 }, // To spit loogies
  "molard": { s: 3, c: 4 }, // Loogie
  "gerbe": { s: 3, c: 4 }, // Puke
  "vomissure": { s: 3, c: 4 }, // Vomit
  "dégobiller": { s: 3, c: 4 }, // To puke

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "âne": { s: 1, c: 4 }, // Donkey (stupid)
  "ballot": { s: 1, c: 4 }, // Bale (fool)
  "benêt": { s: 1, c: 4 }, // Simpleton
  "bêta": { s: 1, c: 4 }, // Fool
  "bêtasse": { s: 1, c: 4 }, // Stupid (f.)
  "bête": { s: 1, c: 4 }, // Stupid / beast
  "bête à manger du foin": { s: 1, c: 4 }, // Stupid enough to eat hay
  "bourrique": { s: 1, c: 4 }, // Donkey (stubborn/stupid)
  "buse": { s: 1, c: 4 }, // Buzzard (stupid)
  "cloche": { s: 1, c: 4 }, // Bell (stupid person)
  "couillonne": { s: 1, c: 4 }, // Fool (f.)
  "courge": { s: 1, c: 4 }, // Squash (stupid)
  "cruche": { s: 1, c: 4 }, // Jug (stupid)
  "dadais": { s: 1, c: 4 }, // Gawk
  "dinde": { s: 1, c: 4 }, // Turkey (stupid woman)
  "dindon": { s: 1, c: 4 }, // Turkey (stupid man)
  "empoté": { s: 1, c: 4 }, // Clumsy
  "empotée": { s: 1, c: 4 }, // Clumsy (f.)
  "flemmard": { s: 1, c: 4 }, // Lazybones
  "flemmarde": { s: 1, c: 4 }, // Lazybones (f.)
  "ganache": { s: 1, c: 4 }, // Jaw / fool
  "glandeur": { s: 1, c: 4 }, // Slacker
  "glandeuse": { s: 1, c: 4 }, // Slacker (f.)
  "glander": { s: 1, c: 4 }, // To slack off
  "gogo": { s: 3, c: 4 }, // Gullible person
  "gourde": { s: 1, c: 4 }, // Gourd (stupid woman)
  "imbécile heureux": { s: 1, c: 4 }, // Happy imbecile
  "inculte": { s: 1, c: 4 }, // Uncultured
  "jobard": { s: 1, c: 4 }, // Gullible fool
  "loser": { s: 1, c: 3 }, // Loser
  "mollasson": { s: 1, c: 4 }, // Sluggish
  "mollassonne": { s: 1, c: 4 }, // Sluggish (f.)
  "navet": { s: 1, c: 4 }, // Turnip (flop)
  "neuneu": { s: 1, c: 4 }, // Dummy
  "nigaud": { s: 1, c: 4 }, // Simpleton
  "nigaude": { s: 1, c: 4 }, // Simpleton (f.)
  "noix": { s: 1, c: 4 }, // Nut (stupid)
  "nul à chier": { s: 3, c: 5 }, // Shit useless
  "nullard": { s: 1, c: 4 }, // Loser
  "nullarde": { s: 1, c: 4 }, // Loser (f.)
  "patate": { s: 1, c: 4 }, // Potato (stupid)
  "péquenaud": { s: 1, c: 4 }, // Hick
  "péquenaude": { s: 1, c: 4 }, // Hick (f.)
  "pignouf": { s: 1, c: 4 }, // Boor
  "pigeon": { s: 1, c: 4 }, // Pigeon (sucker)
  "poire": { s: 1, c: 4 }, // Pear (sucker)
  "pomme": { s: 1, c: 4 }, // Apple (sucker)
  "sot": { s: 1, c: 4 }, // Fool
  "sotte": { s: 1, c: 4 }, // Fool (f.)
  "tanche": { s: 1, c: 4 }, // Tench (fish / stupid)
  "tête de linotte": { s: 1, c: 4 }, // Linnet head (scatterbrain)
  "tête de mule": { s: 1, c: 4 }, // Mule head (stubborn)
  "tête de pioche": { s: 1, c: 4 }, // Pickaxe head (stubborn)
  "truffe": { s: 1, c: 4 }, // Truffle (stupid)
  "zigoto": { s: 1, c: 4 }, // Weirdo

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "boudine": { s: 1, c: 4 }, // Stuffed sausage (fat, f.)
  "boudinée": { s: 1, c: 4 }, // Stuffed into clothes
  "cageot": { s: 1, c: 4 }, // Crate (ugly)
  "baleine": { s: 1, c: 4 }, // Whale (fat)
  "hippopotame": { s: 1, c: 4 }, // Hippopotamus (fat)
  "tonneau": { s: 1, c: 4 }, // Barrel (fat)
  "tas de graisse": { s: 1, c: 4 }, // Pile of grease
  "squelette": { s: 1, c: 4 }, // Skeleton (too thin)
  "planche à pain": { s: 1, c: 4 }, // Breadboard (flat-chested)
  "tête de cul": { s: 3, c: 4 }, // Ass head
  "tête à claques": { s: 1, c: 4 }, // Face begging for slaps
  "gueule cassée": { s: 1, c: 4 }, // Broken face
  "nain de jardin": { s: 1, c: 4 }, // Garden gnome

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "arriviste": { s: 1, c: 4 }, // Social climber
  "cafardeur": { s: 1, c: 4 }, // Snitch
  "cafardeuse": { s: 1, c: 4 }, // Snitch (f.)
  "cafteur": { s: 1, c: 4 }, // Snitch
  "cafteuse": { s: 1, c: 4 }, // Snitch (f.)
  "commère": { s: 1, c: 4 }, // Gossip
  "dégonflé": { s: 1, c: 4 }, // Deflated (coward)
  "dégonflée": { s: 1, c: 4 }, // Deflated (f.)
  "enquiquineur": { s: 1, c: 4 }, // Annoying person (m.)
  "enquiquineuse": { s: 1, c: 4 }, // Annoying person (f.)
  "escroc": { s: 1, c: 4 }, // Crook
  "fainéant": { s: 1, c: 4 }, // Lazy
  "fainéante": { s: 1, c: 4 }, // Lazy (f.)
  "faux-jeton": { s: 1, c: 4 }, // False token (hypocrite)
  "fouille-merde": { s: 3, c: 5 }, // Shit digger (gossip)
  "fouteur de merde": { s: 3, c: 5 }, // Shit stirrer
  "fouteuse de merde": { s: 3, c: 5 }, // Shit stirrer (f.)
  "froussard": { s: 1, c: 4 }, // Coward
  "froussarde": { s: 1, c: 4 }, // Coward (f.)
  "geignard": { s: 1, c: 4 }, // Whiner
  "geignarde": { s: 1, c: 4 }, // Whiner (f.)
  "grigou": { s: 1, c: 4 }, // Miser
  "grognon": { s: 1, c: 4 }, // Grumbler
  "grognonne": { s: 1, c: 4 }, // Grumbler (f.)
  "magouilleur": { s: 1, c: 4 }, // Schemer
  "magouilleuse": { s: 1, c: 4 }, // Schemer (f.)
  "manipulateur": { s: 1, c: 4 }, // Manipulator
  "manipulatrice": { s: 1, c: 4 }, // Manipulator (f.)
  "menteur": { s: 1, c: 4 }, // Liar
  "menteuse": { s: 1, c: 4 }, // Liar (f.)
  "parasite": { s: 1, c: 4 }, // Parasite
  "pique-assiette": { s: 1, c: 4 }, // Plate-pricker (freeloader)
  "pleurnichard": { s: 1, c: 4 }, // Crybaby (m.)
  "pleurnicharde": { s: 1, c: 4 }, // Crybaby (f.)
  "profiteur": { s: 1, c: 4 }, // Profiteer
  "profiteuse": { s: 1, c: 4 }, // Profiteer (f.)
  "radin": { s: 1, c: 4 }, // Cheapskate
  "radine": { s: 1, c: 4 }, // Cheapskate (f.)
  "trouillarde": { s: 1, c: 4 }, // Coward (f.)
  "vendu": { s: 1, c: 4 }, // Sold out (traitor)
  "voleur": { s: 1, c: 4 }, // Thief
  "voleuse": { s: 1, c: 4 }, // Thief (f.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "arabe de merde": { s: 5, c: 5 }, // Shitty Arab
  "beurette": { s: 5, c: 4 }, // Arab girl (can be derog.)
  "mongole": { s: 5, c: 4 }, // Mongoloid (f.)
  "trisomique": { s: 5, c: 4 }, // Down syndrome (as insult)
  "autiste": { s: 5, c: 4 }, // Autistic (as insult)
  "péquenot": { s: 5, c: 4 }, // Peasant (derog.)
  "bouseux": { s: 5, c: 4 }, // Cow-pat covered (hick)
  "bouseuse": { s: 5, c: 4 }, // Cow-pat covered (f.)
  "cul-terreux": { s: 5, c: 4 }, // Muddy-assed (farmer)
  "prolo": { s: 5, c: 4 }, // Prole
  "babtou": { s: 5, c: 4 }, // White person (verlan)
  "babtou fragile": { s: 5, c: 4 }, // Fragile white person
  "franchouillard": { s: 5, c: 4 }, // French (derog.)
  "franchouillarde": { s: 5, c: 4 }, // French (f. derog.)
  "facho": { s: 5, c: 5 }, // Fascist
  "gauchiasse": { s: 5, c: 4 }, // Leftist (very derog.)

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "p*tain": { s: 3, c: 5 }, // Putain with *
  "c*nnard": { s: 3, c: 5 }, // Connard with *
  "c*nnasse": { s: 3, c: 5 }, // Connasse with *
  "enc*lé": { s: 3, c: 5 }, // Enculé with *
  "encu1é": { s: 3, c: 5 }, // Enculé with 1
  "s4lope": { s: 3, c: 5 }, // Salope with 4
  "b@iser": { s: 3, c: 5 }, // Baiser with @
  "b*iser": { s: 3, c: 5 }, // Baiser with *
  "p*te": { s: 3, c: 5 }, // Pute with *
  "ntr": { s: 3, c: 5 }, // Nique ta race abbreviation
  "p é d é": { s: 3, c: 5 }, // Pédé spaced
  "m.e.r.d.e": { s: 3, c: 5 }, // Merde dotted
  "c o n n a r d": { s: 3, c: 5 }, // Connard spaced
  "s a l o p e": { s: 3, c: 5 }, // Salope spaced
  "n i q u e": { s: 3, c: 5 }, // Nique spaced
  "p u t a i n": { s: 3, c: 5 }, // Putain spaced
  "e n c u l é": { s: 3, c: 5 }, // Enculé spaced

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "boulet": { s: 1, c: 4 }, // Cannonball (burden/idiot)
  "enfoirée": { s: 3, c: 4 }, // Bastard (f.)
  "fragile": { s: 2, c: 3 }, // Fragile (wimp)
  "mytho": { s: 2, c: 3 }, // Liar (mythomaniac)
  "seum": { s: 2, c: 3 }, // Anger/frustration (Arabic origin)
  "teubé": { s: 1, c: 4 }, // Bête (verlan, stupid)

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- niquer (to fuck) ---
  "niques": { s: 3, c: 5 }, // You fuck
  "niquent": { s: 3, c: 5 }, // They fuck
  "niquons": { s: 3, c: 5 }, // We fuck
  "niquais": { s: 3, c: 5 }, // I was fucking
  "niquait": { s: 3, c: 5 }, // He/she was fucking
  "niquerai": { s: 3, c: 5 }, // I will fuck
  "niqueras": { s: 3, c: 5 }, // You will fuck
  "niquerait": { s: 3, c: 5 }, // Would fuck
  // --- baiser (to fuck) ---
  "baises": { s: 3, c: 5 }, // You fuck
  "baisée": { s: 3, c: 5 }, // Fucked (f.)
  "baisent": { s: 3, c: 5 }, // They fuck
  "baisons": { s: 3, c: 5 }, // We fuck
  "baisais": { s: 3, c: 5 }, // I was fucking
  "baisait": { s: 3, c: 5 }, // He/she was fucking
  "baiserai": { s: 3, c: 5 }, // I will fuck
  // --- enculer (to ass-fuck) ---
  "encule": { s: 3, c: 5 }, // Ass-fuck (present)
  "encules": { s: 3, c: 5 }, // You ass-fuck
  "enculés": { s: 3, c: 5 }, // Ass-fucked (pl.)
  "enculées": { s: 3, c: 5 }, // Ass-fucked (f. pl.)
  "enculant": { s: 3, c: 5 }, // Ass-fucking
  "enculais": { s: 3, c: 5 }, // Was ass-fucking
  // --- emmerder (to shit-bother) ---
  "emmerde": { s: 3, c: 5 }, // Shit-bother
  "emmerdes": { s: 3, c: 5 }, // You shit-bother
  "emmerdé": { s: 3, c: 5 }, // Shit-bothered
  "emmerdée": { s: 3, c: 5 }, // Shit-bothered (f.)
  // --- branler (to jerk off) ---
  "branle": { s: 4, c: 4 }, // Jerk off
  "branles": { s: 4, c: 4 }, // You jerk off
  "branlé": { s: 3, c: 4 }, // Jerked off
  // --- chier (to shit) ---
  "chie": { s: 3, c: 5 }, // Shit (present)
  "chies": { s: 3, c: 5 }, // You shit
  "chié": { s: 3, c: 4 }, // Shat
  "chiée": { s: 3, c: 4 }, // Shat (f.) / lots of
  "chions": { s: 3, c: 5 }, // We shit
  // --- foutre (to fuck/put) ---
  "fous": { s: 3, c: 5 }, // Fuck/put (present)
  "fout": { s: 3, c: 5 }, // He/she fucks
  "foutent": { s: 3, c: 5 }, // They fuck
  "foutais": { s: 3, c: 5 }, // Was fucking
  "foutaise": { s: 3, c: 5 }, // Bullshit
  "foutaises": { s: 3, c: 5 }, // Bullshit (pl.)
  // --- dégueulasser (to make disgusting) ---
  "dégueulasses": { s: 3, c: 4 }, // Disgusting (pl.)
  "dégueulassé": { s: 3, c: 4 }, // Made disgusting

  // ========================================
  // === Diminutive & Augmentative =========
  // ========================================
  "putassier": { s: 3, c: 4 }, // Whorish (m.)
  "putassière": { s: 3, c: 4 }, // Whorish (f.)
  "saloperies": { s: 3, c: 4 }, // Filths / trash (pl.)
  "merdiques": { s: 3, c: 5 }, // Shitty (pl.)
  "merdasse": { s: 3, c: 5 }, // Big shit
  "connardise": { s: 3, c: 4 }, // Bastardry
  "conneries": { s: 1, c: 4 }, // Stupidities
  "foirade": { s: 3, c: 5 }, // Shit-out (failure)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "je vais t'égorger": { s: 5, c: 5 }, // I'll slit your throat
  "je vais te planter": { s: 5, c: 5 }, // I'll stab you
  "je vais te latter": { s: 5, c: 5 }, // I'll kick you
  "je vais te défoncer la gueule": { s: 5, c: 5 }, // I'll smash your face
  "je vais te fracasser": { s: 5, c: 5 }, // I'll shatter you
  "je vais te démolir": { s: 5, c: 5 }, // I'll demolish you
  "je vais te massacrer": { s: 5, c: 5 }, // I'll massacre you
  "je vais te casser les dents": { s: 5, c: 5 }, // I'll break your teeth
  "je vais te péter la tronche": { s: 5, c: 5 }, // I'll smash your face
  "dégage": { s: 5, c: 5 }, // Get out
  "dégage connard": { s: 3, c: 4 }, // Get out bastard
  "crève la bouche ouverte": { s: 5, c: 5 }, // Die with mouth open
  "meurs": { s: 5, c: 5 }, // Die (imperative)
  "je t'éclate": { s: 5, c: 5 }, // I'll burst you
  "je te défonce": { s: 5, c: 5 }, // I'll smash you
  "on va te niquer": { s: 5, c: 5 }, // We'll fuck you up
  "on va te défoncer": { s: 5, c: 5 }, // We'll smash you

  // ========================================
  // === Additional Insults & Phrases ======
  // ========================================
  "avorton": { s: 1, c: 4 }, // Runt
  "brute": { s: 1, c: 4 }, // Brute
  "déchet": { s: 1, c: 4 }, // Waste
  "goujat": { s: 1, c: 4 }, // Boor
  "gredine": { s: 1, c: 4 }, // Scoundrel (f.)
  "gueux": { s: 1, c: 4 }, // Beggar / wretch
  "gueuse": { s: 1, c: 4 }, // Beggar (f.) / hussy
  "halunke": { s: 3, c: 4 }, // Scoundrel
  "malfrat": { s: 1, c: 4 }, // Criminal
  "malotru": { s: 1, c: 4 }, // Boor
  "malotrue": { s: 1, c: 4 }, // Boor (f.)
  "minus": { s: 1, c: 4 }, // Runt
  "misérable": { s: 1, c: 4 }, // Miserable wretch
  "rebut": { s: 1, c: 4 }, // Reject / waste
  "rebut de la société": { s: 1, c: 4 }, // Reject of society
  "résidu de capote": { s: 1, c: 4 }, // Condom residue
  "résidu de fausse couche": { s: 1, c: 4 }, // Miscarriage residue
  "serpent": { s: 1, c: 4 }, // Snake
  "traître": { s: 1, c: 4 }, // Traitor
  "traîtresse": { s: 1, c: 4 }, // Traitor (f.)
  "truand": { s: 1, c: 4 }, // Crook
  "truande": { s: 1, c: 4 }, // Crook (f.)
  "vautour": { s: 1, c: 4 }, // Vulture
  "vipère": { s: 1, c: 4 }, // Viper

  // ========================================
  // === Verlan (Reversed Slang) ===========
  // ========================================
  "reuf": { s: 3, c: 4 }, // Frère (verlan, brother)
  "reum": { s: 3, c: 4 }, // Mère (verlan, mother)
  "reup": { s: 1, c: 4 }, // Père (verlan, father)
  "téci": { s: 3, c: 4 }, // Cité (verlan, projects)
  "zyva": { s: 3, c: 4 }, // Vas-y (verlan, go on)
  "belek": { s: 3, c: 4 }, // Be careful (street)

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "parbleu": { s: 2, c: 3 }, // By God
  "jésus-christ de merde": { s: 3, c: 5 }, // Jesus Christ of shit
  "sacré bordel de dieu": { s: 2, c: 3 }, // Sacred brothel of God

  // ========================================
  // === Additional Crude Compounds ========
  // ========================================
  "trou à bites": { s: 4, c: 5 }, // Dick hole
  "chie-en-lit": { s: 3, c: 5 }, // Shit in bed (messy)
  "cul-de-sac": { s: 3, c: 5 }, // Ass of sack (dead end)
  "brise-couilles": { s: 3, c: 5 }, // Ball breaker
  "va-nu-pieds": { s: 3, c: 5 }, // Goes barefoot (bum)
  "crache-sang": { s: 3, c: 5 }, // Blood spitter
  "gratte-papier": { s: 3, c: 5 }, // Paper scratcher (bureaucrat)
  "rond-de-cuir": { s: 3, c: 5 }, // Leather circle (desk jockey)
  "planche à repasser": { s: 3, c: 5 }, // Ironing board (flat woman)
  "sac d'os": { s: 3, c: 5 }, // Bag of bones
  "tête de mort": { s: 5, c: 5 }, // Death head
  "tête de gland": { s: 3, c: 5 }, // Glans head
  "tête de chibre": { s: 4, c: 5 }, // Dick head
  "gros cul": { s: 3, c: 5 }, // Big ass
  "gros nichons": { s: 4, c: 5 }, // Big tits
  "grosse pétasse": { s: 3, c: 5 }, // Big bimbo
  "pétasses": { s: 3, c: 5 }, // Bimbos (pl.)
  "pouffiasse": { s: 3, c: 5 }, // Slut
  "pouf": { s: 3, c: 5 }, // Slut (short)
  "pouffe": { s: 3, c: 5 }, // Slut variant
  "roulure": { s: 3, c: 5 }, // Hussy
  "marie-couche-toi-là": { s: 3, c: 5 }, // Mary lie-down-there (slut)
  "marie-salope": { s: 3, c: 5 }, // Dirty Mary (slut)
  "fille de joie": { s: 5, c: 5 }, // Girl of joy (prostitute)
  "fille des rues": { s: 3, c: 5 }, // Girl of the streets
  "ribaude": { s: 3, c: 5 }, // Wench (archaic)
  "goton": { s: 3, c: 5 }, // Slut (archaic)
  "raccrocheuse": { s: 3, c: 5 }, // Street hooker
  "michto": { s: 3, c: 5 }, // Gold digger
  "suceuse de bites": { s: 4, c: 5 }, // Dick sucker (f.)
  "bouffeuse de bites": { s: 4, c: 5 }, // Dick eater (f.)
  "avaleuse de sabres": { s: 3, c: 5 }, // Sword swallower (f.)
  "avaleuse de foutre": { s: 3, c: 5 }, // Cum swallower (f.)
  "branleur professionnel": { s: 3, c: 5 }, // Professional wanker
  "chieur professionnel": { s: 3, c: 5 }, // Professional shitter
  "emmerdeur professionnel": { s: 3, c: 5 }, // Professional shit-stirrer
  "brouteur de minou": { s: 4, c: 5 }, // Pussy eater
  "lécheur de cul": { s: 3, c: 5 }, // Ass licker
  "lécheur de bottes": { s: 3, c: 5 }, // Boot licker
  "lécheur de chiotte": { s: 3, c: 5 }, // Toilet licker
  "bouffeur de merde": { s: 3, c: 5 }, // Shit eater
  "racleur de fond": { s: 5, c: 5 }, // Bottom scraper
  "fond de bidet": { s: 3, c: 5 }, // Bottom of bidet (lowlife)
  "fond de poubelle": { s: 3, c: 5 }, // Bottom of trash can
  "lie de la société": { s: 3, c: 5 }, // Dregs of society
  "rebut de l'humanité": { s: 3, c: 5 }, // Reject of humanity
  "raté de la vie": { s: 3, c: 5 }, // Life failure
  "ratée de la vie": { s: 3, c: 5 }, // Life failure (f.)
  "zéro pointé": { s: 3, c: 5 }, // Zero with a point
  "bolos": { s: 3, c: 5 }, // Sucker
  "flaque de pisse": { s: 3, c: 5 }, // Puddle of piss
  "morceau de merde": { s: 3, c: 5 }, // Piece of shit
  "paquet de merde": { s: 3, c: 5 }, // Package of shit
  "seau de merde": { s: 3, c: 5 }, // Bucket of shit
  "crotte de bique": { s: 3, c: 5 }, // Goat turd
  "fiente de pigeon": { s: 3, c: 5 }, // Pigeon shit
  "trou duc": { s: 3, c: 5 }, // Ass (phonetic spelling of trou du cul)
};

export default frenchBadWords;
