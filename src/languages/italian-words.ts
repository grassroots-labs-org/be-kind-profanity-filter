/**
 * Italian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations and dialects.
 * ⚠️ Warning: This file contains explicit language in Italian
 */
const italianBadWords = [
  "allupato", // Horny / sex-crazed
  "ammucchiata", // Orgy
  "anale", // Anal
  "arrapato", // Horny / aroused
  "arrusa", // Horny (Sicilian, fem)
  "arruso", // Horny (Sicilian, masc)
  "bagascia", // Whore (dialectal)
  "bagassa", // Whore (dialectal variant)
  "baldracca", // Whore / slut
  "balle", // Balls / nonsense
  "battona", // Streetwalker / prostitute
  "belino", // Penis (Ligurian dialect)
  "bocchinara", // Woman who gives blowjobs
  "bocchino", // Blowjob
  "bordello", // Brothel
  "bucaiolo", // Gay man (derogatory, Tuscan)
  "busone", // Gay man (derogatory)
  "cagare", // To shit
  "cagata", // Shitty thing / crap
  "cagna", // Bitch (lit. female dog)
  "cazzata", // Bullshit / stupid thing
  "cazzimma", // Nastiness / malice (Neapolitan)
  "cazzo", // Dick / fuck
  "cazzone", // Big dick / idiot
  "cesso", // Toilet / ugly person
  "checca", // Effeminate gay man (derogatory)
  "chiappa", // Butt cheek
  "chiavare", // To fuck
  "chiavata", // A fuck (noun)
  "ciucciami il cazzo", // Suck my dick
  "coglione", // Testicle / idiot
  "coglioni", // Testicles / idiots
  "cornuto", // Cuckold
  "culattina", // Gay man (derogatory, diminutive)
  "culattone", // Gay man (derogatory)
  "culo", // Ass
  "ditalino", // Fingering
  "fava", // Dick (lit. broad bean)
  "fica", // Pussy / vagina
  "figa", // Pussy / vagina (variant)
  "figlio di buona donna", // Son of a good woman (euphemism for son of a bitch)
  "figlio di puttana", // Son of a whore
  "figone", // Very hot person
  "finocchio", // Gay man (derogatory, lit. fennel)
  "fottere", // To fuck
  "fottersi", // To fuck oneself / not to care
  "fracicone", // Filthy person
  "fregna", // Pussy / vagina (Roman)
  "frocio", // Faggot (derogatory)
  "froscio", // Faggot (derogatory, variant)
  "goldone", // Condom (slang)
  "guardone", // Peeping Tom / voyeur
  "imbecille", // Imbecile / idiot
  "incazzarsi", // To get pissed off
  "incoglionirsi", // To become stupid / dazed
  "ingoio", // I swallow (sexual)
  "leccaculo", // Ass-licker / sycophant
  "lecchino", // Bootlicker / sycophant
  "mannaggia", // Damn it
  "merda", // Shit
  "merdata", // Shitty act / mess
  "merdoso", // Shitty
  "mignotta", // Whore (Roman)
  "minchia", // Dick (Sicilian)
  "minchione", // Idiot (Sicilian, lit. big dick)
  "mona", // Pussy / idiot (Venetian)
  "nerchia", // Dick (vulgar)
  "palle", // Balls / nonsense
  "palloso", // Boring / ball-busting
  "patonza", // Pussy (slang)
  "pecorina", // Doggy style (lit. like a sheep)
  "picio", // Penis (dialectal)
  "pincare", // To fuck (dialectal)
  "pippa", // Handjob / wank
  "pippone", // Long boring speech / big wank
  "pirla", // Idiot (Milanese, lit. spinning top)
  "pisciare", // To piss
  "piscio", // Piss
  "pisello", // Penis (lit. pea)
  "pompa", // Blowjob (slang)
  "pompino", // Blowjob
  "porca", // Pig (fem) / slut
  "porca madonna", // Pig Madonna (blasphemy)
  "porca miseria", // Damn it (lit. pig misery)
  "porca puttana", // Fucking whore (blasphemy)
  "porco", // Pig / dirty person
  "porco due", // Pig two (euphemistic blasphemy)
  "porco zio", // Pig uncle (euphemistic blasphemy)
  "potta", // Pussy (archaic/dialectal)
  "puppami", // Suck me
  "puttana", // Whore / prostitute
  "recchione", // Faggot (Neapolitan, derogatory)
  "rincoglionire", // To become senile / stupid
  "rompiballe", // Ball-breaker / annoying person
  "rompipalle", // Ball-breaker / annoying person (variant)
  "ruffiano", // Pimp / brown-noser
  "sbattere", // To bang / to fuck
  "sbattersi", // To bother / to fuck oneself
  "sborra", // Cum / semen
  "sborrata", // Cumshot
  "sborrone", // Big cummer / premature ejaculator
  "scopare", // To fuck (lit. to sweep)
  "scopata", // A fuck (noun)
  "sega", // Wank / handjob (lit. saw)
  "smandrappata", // Slut / slovenly woman
  "socmel", // Suck it (Lombard dialect)
  "sorca", // Pussy (Roman, lit. mouse)
  "spagnola", // Titjob (lit. Spanish)
  "spompinare", // To give a blowjob
  "sticchio", // Pussy (Sicilian)
  "stronza", // Bitch / turd (fem)
  "stronzata", // Bullshit / stupid thing
  "stronzo", // Asshole / turd
  "succhiami", // Suck me
  "succhione", // Hickey / sucker
  "sveltina", // Quickie
  "sverginare", // To deflower / take virginity
  "terrone", // Slur for Southern Italians
  "testa di cazzo", // Dickhead
  "tette", // Tits
  "topa", // Pussy (slang, lit. mouse)
  "troia", // Whore / slut
  "trombare", // To fuck (slang)
  "vacca", // Cow / slut
  "vaffanculo", // Fuck off / go fuck yourself
  "zinne", // Tits (slang)
  "zoccola", // Slut (lit. sewer rat)
  "porcodio", // Pig God (blasphemy)
  "dio cane", // God dog (blasphemy)
  "dio porco", // God pig (blasphemy)
  "dio bestia", // God beast (blasphemy)
  "madonna puttana", // Madonna whore (blasphemy)
  "porca troia", // Fucking whore (blasphemy)
  "che cazzo", // What the fuck
  "del cazzo", // Of the dick / shitty
  "figlio di troia", // Son of a whore
  "affanculo", // Fuck off (shortened)
  "incazzato", // Pissed off
  "cazzaro", // Bullshitter / braggart
  "merdaccia", // Nasty shit
  "puttaniere", // Whoremonger
  "troione", // Big whore
  "segaiolo", // Wanker
  "rompicoglioni", // Ball-breaker (vulgar)
  "testa di minchia", // Dickhead (Sicilian)

  // Additional Italian profanity & bestemmie
  "bestia di dio", // God's beast (blasphemy)
  "cristo cane", // Christ dog (blasphemy)
  "dio boia", // God executioner (blasphemy)
  "dio cristo", // God Christ (blasphemy)
  "dio ladro", // God thief (blasphemy)
  "dio maiale", // God pig (blasphemy)
  "dio merda", // God shit (blasphemy)
  "madonna maiala", // Madonna pig (blasphemy)
  "madonna troia", // Madonna whore (blasphemy)
  "porco dio", // Already listed variant
  "porco gesù", // Pig Jesus (blasphemy)
  "porca eva", // Pig Eve (blasphemy)
  "ostia", // Host (blasphemy)
  "cazzetto", // Small dick
  "cazzi tuoi", // Your own business (vulgar)
  "col cazzo", // No way (lit. with the dick)
  "cornuta", // Fem cuckold
  "culone", // Big ass
  "figa di legno", // Wooden pussy (frigid)
  "figlio di mignotta", // Son of a whore
  "fottiti", // Fuck yourself
  "fottuto", // Fucked
  "incazzato nero", // Extremely pissed off
  "leccami", // Lick me
  "madonnina", // Little madonna (blasphemy)
  "merda secca", // Dried shit
  "mortacci tua", // Your dead relatives (Roman, very offensive)
  "mortacci", // Dead relatives (Roman insult)
  "pezzo di merda", // Piece of shit
  "porco giuda", // Pig Judas (blasphemy)
  "rompicazzo", // Dick breaker
  "scemo del villaggio", // Village idiot
  "scemo", // Idiot
  "stronza di merda", // Shit bitch
  "troia di merda", // Shit whore
  "vattene affanculo", // Go fuck yourself
  "zoccola di merda", // Shit slut

  // More bestemmie (blasphemies)
  "dio santo porco", // Holy pig God
  "madonna boia", // Madonna executioner
  "madonna zoccolona", // Madonna big slut
  "porco il signore", // Pig the Lord
  "porco l'iddio", // Pig God (archaic form)
  "dio schifoso", // Disgusting God
  "dio stronzo", // God asshole
  "dio bastardo", // God bastard
  "dio impestato", // God plague-ridden
  "dio infame", // God infamous
  "dio lurido", // God filthy
  "porco madonna", // Pig Madonna
  "cristo porco", // Christ pig
  "cristo merda", // Christ shit
  "gesù cristo cane", // Jesus Christ dog
  "madonna vacca", // Madonna cow
  "madonna lurida", // Madonna filthy
  "madonna schifosa", // Madonna disgusting
  "porca la madonna", // Pig the Madonna
  "porca maria", // Pig Mary
  "porco iddio", // Pig God (variant)
  "porco giuda ladro", // Pig Judas thief
  "madonna serpente", // Madonna snake
  "dio merdone", // God big shit
  "dio fetente", // God stinking
  "dio cagna", // God bitch

  // More compound insults
  "faccia di cazzo", // Dick face
  "faccia di culo", // Ass face
  "faccia di merda", // Shit face
  "pezzo di stronzo", // Piece of turd
  "pezzo di cazzo", // Piece of dick
  "brutto stronzo", // Ugly turd
  "brutta stronza", // Ugly turd (fem)
  "brutto bastardo", // Ugly bastard
  "brutta troia", // Ugly whore
  "figlio di nessuno", // Son of nobody
  "gran bastardo", // Great bastard
  "gran figlio di puttana", // Great son of a whore
  "maledetto stronzo", // Damned turd
  "sacco di merda", // Bag of shit
  "cane bastardo", // Bastard dog
  "faccia da culo", // Ass-looking face
  "testa di merda", // Shit head

  // More sexual terms
  "chiavica", // Sewer / ugly person
  "scopamici", // Friends with benefits
  "trombamici", // Friends with benefits (variant)
  "inculare", // To sodomize
  "sodomizzare", // To sodomize (formal)
  "sodomita", // Sodomite
  "masturbazione", // Masturbation
  "masturbarsi", // To masturbate
  "orgasmo", // Orgasm
  "pompinara", // Woman who gives blowjobs
  "puttanata", // Bullshit / whore-like act
  "puttanella", // Little whore
  "puttanone", // Big whore
  "scopone", // Big fuck
  "trombata", // Fuck (noun)
  "segone", // Big wank
  "incularsi", // To get sodomized
  "farsi una sega", // To jerk off
  "farsi una pippa", // To jerk off (variant)
  "squillo", // Call girl
  "meretricio", // Prostitution
  "meretrice", // Prostitute (formal)
  "lenone", // Pimp (formal)
  "magnaccia", // Pimp
  "pappone", // Pimp (colloquial)
  "mignottone", // Big whore

  // More dialectal / diminutives
  "cazzola", // Small dick / trowel
  "cazzuccio", // Tiny dick
  "stronzetto", // Little turd
  "stronzetta", // Little turd (fem)
  "troncone", // Big stump (phallic)
  "coglionazzo", // Big idiot
  "merdina", // Little shit
  "merdone", // Big shit
  "fottutissimo", // Very much fucked
  "cazzone doppio", // Double dick (insult)
  "stronzone", // Big turd
  "cazzaccio", // Ugly dick
  "merdoso di merda", // Shitty of shit

  // Neapolitan
  "guappo", // Thug / bully
  "mammalucco", // Fool / oaf
  "scassacazzo", // Dick-breaker / annoying person
  "sfaccimma", // Sperm (Neapolitan, strong insult)
  "sfaccimm", // Sperm (variant)
  "cacaglio", // Stammerer (offensive)
  "fetente", // Stinking person
  "fetentone", // Big stinking person
  "vattenne", // Get out (Neapolitan)
  "zoccola napoletana", // Neapolitan slut
  "curnutone", // Big cuckold (Neapolitan)
  "strunz", // Turd (Neapolitan)
  "puttanesca", // Whorish (also pasta sauce)
  "chiattona", // Fat woman (Neapolitan)
  "cafonata", // Boorish act
  "cafone", // Boor / peasant (insult)

  // Sicilian
  "bedda matri", // Oh mother! (Sicilian exclamation)
  "cornuto contento", // Happy cuckold
  "babbasone", // Big idiot (Sicilian)
  "babbo", // Idiot (Tuscan/Sicilian)
  "minchiolina", // Little dick (Sicilian)
  "mischino", // Wretched (Sicilian, can be offensive)
  "vastaso", // Vulgar person (Sicilian)
  "scassamarroni", // Ball-breaker (Sicilian)
  "cornuto e mazziato", // Cuckolded and beaten

  // Roman dialect
  "li mortacci", // Your dead ancestors (Roman)
  "li mortacci tua", // Your dead ancestors (full)
  "ammazza", // Damn / wow (Roman)
  "daje", // Come on (Roman, can be vulgar)
  "burino", // Peasant / hick (Roman insult)
  "coatto", // Trashy person (Roman)
  "zozzone", // Dirty person (Roman)
  "zozzona", // Dirty person (Roman, fem)
  "caciottaro", // Cheese-maker (Roman insult)
  "buzzicone", // Lazy person (Roman)
  "roscio", // Redhead (Roman, pejorative)

  // More general slang
  "cazzeggiare", // To dick around
  "coglioneria", // Foolishness / bullshit
  "merdaio", // Shit-heap / messy place
  "stronzaggine", // Turd-like behavior
  "stronzeria", // Assholery
  "coglionata", // Stupid thing / bullshit
  "incazzatura", // State of being pissed off
  "scazzato", // Annoyed / pissed off
  "scazzare", // To annoy / piss off
  "smerdare", // To shit on / to expose
  "sminchiare", // To break (Sicilian-derived)
  "sminchiato", // Broken / crazy
  "cagacazzo", // Annoying dick (vulgar)
  "rompiscatole", // Box-breaker / annoying person
  "cagacazzi", // Annoying dicks
  "sbroccare", // To lose it / freak out
  "sbrocco", // Freakout
  "incazzatura nera", // Deep rage
  "cazzimma napoletana", // Neapolitan nastiness

  // Offensive terms a content filter should catch
  "negro", // N-word (Italian)
  "negra", // N-word (fem)
  "polentone", // Slur for Northern Italians
  "terronaccio", // Augmentative of terrone
  "terrona", // Female terrone (slur)
  "marocchino", // Moroccan (used as slur)
  "extracomunitario", // Non-EU (used as slur)
  "vu cumprà", // Offensive term for street vendors
  "zingaro", // Gypsy (slur)
  "zingara", // Gypsy (fem, slur)
  "zingaraccio", // Dirty gypsy (slur)
  "frocetto", // Little faggot
  "frocione", // Big faggot
  "ricchione", // Faggot (Neapolitan variant)
  "busona", // Lesbian (derogatory)
  "lesbicona", // Big lesbian (derogatory)
  "ritardato", // Retard
  "ritardata", // Retard (fem)
  "mongoloide", // Mongoloid (slur)
  "handicappato", // Handicapped (used as slur)
  "ciccione", // Fatso
  "cicciona", // Fatso (fem)
  "nano", // Dwarf (insult)
  "nana", // Dwarf (fem, insult)

  // === EXPANSION: More bestemmie (blasphemies) ===
  "porco mondo", // Pig world (blasphemy)
  "dio cristo santo", // God Christ holy (blasphemy)
  "dio madonna", // God Madonna (blasphemy)
  "dio can", // God dog (Venetian blasphemy)
  "dio bon", // God good (Venetian blasphemy/excl)
  "dio santo cane", // Holy God dog (blasphemy)
  "dio santo porco cane", // Elaborate blasphemy chain
  "porco il clero", // Pig the clergy (blasphemy)
  "porco il mondo", // Pig the world
  "porco satana", // Pig Satan (blasphemy)
  "dio mio cane", // My God dog
  "dio serpente", // God snake (blasphemy)
  "dio animale", // God animal (blasphemy)
  "dio buono", // God good (euphemistic blasphemy)
  "dio lercio", // God filthy (blasphemy)
  "dio maialino", // God little pig (blasphemy)
  "dio mangiato", // God eaten (blasphemy)
  "dio impiccato", // God hanged (blasphemy)
  "dio inchiodato", // God nailed (blasphemy)
  "dio sbattuto", // God slammed (blasphemy)
  "madonna cagna", // Madonna bitch (blasphemy)
  "madonna bestia", // Madonna beast (blasphemy)
  "madonna impestata", // Madonna plague-ridden
  "madonna indemoniata", // Madonna possessed
  "madonna infame", // Madonna infamous
  "madonna merda", // Madonna shit
  "madonna mia puttana", // My Madonna whore
  "madonna porchetta", // Madonna piglet
  "madonna suina", // Madonna swine
  "madonna zoccola", // Madonna slut
  "cristo bastardo", // Christ bastard
  "cristo boia", // Christ executioner
  "cristo ladro", // Christ thief
  "cristo maiale", // Christ pig
  "gesù cane", // Jesus dog
  "gesù porco", // Jesus pig
  "gesù merda", // Jesus shit
  "porca l'oca", // Pig the goose (euphemistic)
  "porca paletta", // Pig palette (euphemistic)
  "porca pupazza", // Pig puppet (euphemistic)
  "mannaggia la madonna", // Damn the Madonna
  "mannaggia cristo", // Damn Christ
  "mannaggia dio", // Damn God
  "santo iddio porco", // Holy God pig
  "ostia benedetta", // Blessed host (blasphemy)
  "ostia puttana", // Host whore (blasphemy)
  "sacramento", // Sacrament (blasphemy exclamation)
  "sacramentare", // To blaspheme

  // === EXPANSION: cazzo derivatives ===
  "cazzatona", // Big bullshit
  "cazzatella", // Little bullshit
  "cazzettino", // Tiny little dick
  "cazzeggio", // Dicking around (noun)
  "cazzimmare", // To be nasty (Neapolitan verb)
  "cazzotto", // Punch (lit. dick-hit)
  "cazzottata", // Fistfight
  "cazzutissimo", // Very ballsy (superlative)
  "cazzuto", // Ballsy / tough
  "scazzottata", // Brawl
  "scazzottare", // To brawl
  "incazzarsi nero", // To get furiously pissed
  "incazzatissimo", // Extremely pissed off
  "incazzoso", // Easily angered
  "cazzo duro", // Hard dick
  "cazzo molle", // Soft dick / wimp
  "testa di cazzo pelato", // Bald dickhead
  "cazzi amari", // Bitter dicks / tough shit
  "cazzata colossale", // Colossal bullshit
  "cazzimma a palate", // Nastiness by the shovelful
  "che cazzo vuoi", // What the fuck do you want
  "non me ne frega un cazzo", // I don't give a fuck
  "fatti i cazzi tuoi", // Mind your own fucking business
  "un cazzo", // Nothing / no way (lit. a dick)
  "mannagg al cazzo", // Damn the dick (Neapolitan)

  // === EXPANSION: merda derivatives ===
  "merdacciolo", // Little shit
  "merdaio grande", // Big shit-heap
  "merdazza", // Ugly shit
  "merdella", // Little shit (Neapolitan)
  "merdosissimo", // Extremely shitty
  "merdissima", // Ultimate shit
  "immerdare", // To cover in shit
  "smerdamento", // Shitting on / exposing
  "smerdato", // Exposed / shamed
  "ammerdare", // To shit up
  "mangia merda", // Eat shit
  "merda calda", // Hot shit
  "merda di cane", // Dog shit
  "merda fumante", // Steaming shit
  "nella merda", // In the shit
  "di merda", // Of shit / shitty

  // === EXPANSION: stronzo derivatives ===
  "stronzissimo", // Ultimate asshole
  "stronzate a raffica", // Rapid-fire bullshit
  "stronzo di prima categoria", // First-class asshole
  "stronzino", // Little turd (diminutive)
  "stronzacchione", // Big idiotic turd
  "stronzata pazzesca", // Crazy bullshit
  "stronza pazza", // Crazy bitch

  // === EXPANSION: Neapolitan profanity ===
  "chillo strunz", // That turd (Neapolitan)
  "capa di cazzo", // Dickhead (Neapolitan)
  "sfaccimma e mammeta", // Your mother's cum (Neapolitan)
  "o cazz ro viecchio", // The old man's dick (Neapolitan)
  "puozz sculà", // May you drip (Neapolitan curse)
  "puozze morì", // May you die (Neapolitan curse)
  "fesso", // Idiot / pussy (Neapolitan)
  "fessa", // Idiot / pussy (Neapolitan, fem)
  "fessacchiotto", // Big fool (Neapolitan)
  "scimuniato", // Dumb (Neapolitan)
  "scemunito", // Dimwit (Neapolitan variant)
  "appicceco", // Sticky / annoying (Neapolitan)
  "cazzariello", // Little dick / fool (Neapolitan)
  "chiattillo", // Little fatty (Neapolitan)
  "ciuccio", // Donkey / idiot (Neapolitan)
  "curnuto", // Cuckold (Neapolitan)
  "jettatore", // Jinx-bringer (Neapolitan, offensive)
  "pucchiacca", // Pussy (Neapolitan)
  "purpo", // Octopus / groper (Neapolitan insult)
  "scorfano", // Scorpionfish / ugly person
  "tamarro", // Trashy person (Southern)
  "tamarra", // Trashy woman (Southern)
  "vaiassa", // Vulgar woman (Neapolitan)
  "vrenzola", // Dirty woman (Neapolitan)
  "mappina", // Rag / useless person (Neapolitan)
  "capa e' pezza", // Cloth-head / idiot (Neapolitan)
  "sfaccimma int' a vocca", // Cum in the mouth (Neapolitan)
  "piezzo e merda", // Piece of shit (Neapolitan)

  // === EXPANSION: Sicilian profanity ===
  "babbu", // Idiot (Sicilian)
  "babbasunazzu", // Enormous idiot (Sicilian)
  "buttana", // Whore (Sicilian)
  "buttana di to ma", // Your mother's a whore (Sicilian)
  "buttanazzu", // Big whore (Sicilian)
  "caddozzu", // Dickish (Sicilian)
  "calaculu", // Coward (Sicilian, lit. drop-ass)
  "camurrista", // Annoying person (Sicilian)
  "chiavaturi", // Fucker (Sicilian)
  "cornuto fetente", // Stinking cuckold (Sicilian)
  "curnuto e scannatu", // Cuckolded and slaughtered (Sicilian)
  "minchia di merda", // Shit dick (Sicilian)
  "minchiata", // Bullshit (Sicilian)
  "minnulinu", // Small-dicked (Sicilian)
  "sticchiu puzzolente", // Stinking pussy (Sicilian)
  "vastasata", // Vulgar act (Sicilian)
  "figghiu di buttana", // Son of a whore (Sicilian)
  "ammazzatillu", // Kill that one (Sicilian)
  "futtitinni", // Fuck off / don't care (Sicilian)
  "camurria", // Nuisance / annoying thing (Sicilian)
  "jancu", // Stupid (Sicilian)

  // === EXPANSION: Venetian profanity ===
  "monada", // Foolishness / cute thing (Venetian)
  "mona de to mare", // Your mother's pussy (Venetian)
  "mona de un can", // Pussy of a dog (Venetian)
  "sboro", // Cum / exclamation (Venetian)
  "sborón", // Big ejaculator (Venetian)
  "andemo in mona", // Let's go to hell (Venetian)
  "va in mona", // Go to hell (Venetian)
  "va in mona de to mare", // Go to your mother's pussy (Venetian)
  "ciapa", // Take this / catch (Venetian vulgar)
  "desgrasiato", // Wretched (Venetian)
  "cogión", // Idiot (Venetian from coglione)
  "bòcia", // Kid / fool (Venetian)
  "toso de merda", // Shit kid (Venetian)
  "porco bòia", // Pig executioner (Venetian blasphemy)
  "ostrega", // Oyster / damn (Venetian exclamation)
  "sacramegnon", // Sacrament (Venetian blasphemy)
  "can de dio", // Dog of God (Venetian blasphemy)
  "porco can", // Pig dog (Venetian blasphemy)

  // === EXPANSION: Tuscan/Florentine profanity ===
  "bischero", // Idiot / dick (Florentine)
  "bischera", // Idiot (Florentine, fem)
  "bischerata", // Stupid thing (Florentine)
  "bischerone", // Big idiot (Florentine)
  "grullo", // Stupid (Florentine)
  "grulla", // Stupid (Florentine, fem)
  "grullone", // Big stupid (Florentine)
  "coglioncel", // Little idiot (Tuscan archaic)
  "minchionare", // To make fun of (Tuscan)
  "minchionatura", // Mockery (Tuscan)
  "bucaiola", // Gay woman (derogatory, Tuscan)

  // === EXPANSION: Sardinian profanity ===
  "arriga", // Annoying (Sardinian)
  "malasorte", // Bad luck / cursed (Sardinian)
  "connoscentzia", // Derogatory for know-it-all (Sardinian)
  "fottidu", // Fucked (Sardinian)
  "porcheddu", // Little pig (Sardinian insult)
  "porcanu", // Pig-like (Sardinian)
  "maccu", // Fool (Sardinian)
  "asinu", // Donkey / fool (Sardinian)
  "molente", // Donkey / idiot (Sardinian)
  "fegu", // Liver / coward (Sardinian)

  // === EXPANSION: Roman/Romanesco profanity ===
  "ammazzete", // Damn / wow (Roman)
  "ammazza che", // Damn what (Roman exclamation)
  "fijo de mignotta", // Son of a whore (Roman)
  "fijo de na mignotta", // Son of a whore (Roman full)
  "sorca de tu madre", // Your mother's pussy (Roman)
  "corvaccio", // Ugly crow / bad omen (Roman)
  "straccione", // Raggedy / bum (Roman)
  "stracciona", // Raggedy woman (Roman)
  "pezzente", // Beggar / loser (Roman/Southern)
  "poveraccio", // Wretch / poor bastard
  "caciara", // Mess / racket (Roman)
  "monnezza", // Garbage (Roman)
  "monnezzaro", // Garbage dump / garbage person (Roman)
  "roscetta", // Little redhead (Roman, pejorative fem)
  "chiodo", // Nail / ugly person (Roman)
  "buzzurro", // Barbarian / rude person (Roman)
  "pizzardone", // Traffic cop (Roman, derogatory)
  "er cazzo", // The dick (Roman)
  "va a morì ammazzato", // Go die killed (Roman curse)
  "va a morì accoppato", // Go die murdered (Roman curse)
  "ma vatte a fa benedì", // Go get blessed (Roman euphemism)
  "daje ar cazzo", // Come on with the dick (Roman)

  // === EXPANSION: More sexual terms ===
  "ammucchiarsi", // To pile up / orgy
  "bondage", // Bondage
  "sadomaso", // S&M
  "dominatrice", // Dominatrix
  "feticista", // Fetishist
  "voyeurismo", // Voyeurism
  "esibizionista", // Exhibitionist
  "molestare", // To molest
  "stupro", // Rape
  "stuprare", // To rape
  "stupratore", // Rapist
  "pedofilo", // Pedophile
  "pedofilia", // Pedophilia
  "incestuoso", // Incestuous
  "incesto", // Incest
  "necrofilia", // Necrophilia
  "zoofilia", // Zoophilia
  "coprofagia", // Coprophagia
  "coprofilia", // Coprophilia
  "porno", // Porn
  "pornazzo", // Bad porn / sleazy porn
  "pornografico", // Pornographic
  "maniaco sessuale", // Sexual maniac
  "depravato", // Depraved
  "depravata", // Depraved (fem)
  "pervertito", // Pervert
  "pervertita", // Pervert (fem)
  "satiro", // Satyr / lecher
  "ninfomane", // Nymphomaniac
  "trombata epica", // Epic fuck
  "chiavata leggendaria", // Legendary fuck
  "ammucchiata selvaggia", // Wild orgy
  "orgia", // Orgy
  "sesso anale", // Anal sex
  "sesso orale", // Oral sex
  "gangbang", // Gangbang
  "doppia penetrazione", // Double penetration
  "fellatio", // Fellatio
  "cunnilingus", // Cunnilingus
  "anilingus", // Anilingus
  "eiaculazione", // Ejaculation
  "eiaculare", // To ejaculate
  "eiaculazione facciale", // Facial ejaculation
  "venire", // To cum (lit. to come)
  "godere", // To enjoy / to orgasm
  "sborrarsi", // To cum (reflexive)
  "incularti", // To sodomize you

  // === EXPANSION: Body part vulgarities ===
  "tettona", // Big-titted woman
  "tettone", // Big tits
  "chiappe", // Butt cheeks
  "natica", // Buttock
  "natiche", // Buttocks
  "culetto", // Little ass
  "culo grosso", // Fat ass
  "culo flaccido", // Flabby ass
  "buco del culo", // Asshole (lit. hole of ass)
  "sfintere", // Sphincter
  "prepuzio", // Foreskin
  "glande", // Glans
  "scroto", // Scrotum
  "clitoride", // Clitoris
  "pube", // Pubis
  "cappella", // Glans (lit. chapel)
  "cazzata di cappella", // Glans bullshit

  // === EXPANSION: More homophobic slurs across dialects ===
  "froscetto", // Little fag (diminutive)
  "culattinone", // Big gay man (derog augmentative)
  "checchina", // Effeminate man (derogatory dim)
  "finocchione", // Big faggot (Tuscan)
  "invertito", // Inverted / gay (archaic derog)
  "invertita", // Inverted (fem, archaic derog)
  "bardassa", // Catamite / passive gay (archaic)
  "leccaculi", // Ass-licker (plural)
  "frociarolo", // Faggot-frequenter
  "omosessualaccio", // Ugly homosexual (augmentative)

  // === EXPANSION: More ethnic slurs ===
  "terroncello", // Little terrone (diminutive slur)
  "polentaro", // Polenta-eater (slur variant)
  "merdionale", // Shit-southerner (compound slur)
  "crucco", // Slur for Germans
  "crucca", // Slur for German women
  "muso giallo", // Yellow face (anti-Asian slur)
  "viso giallo", // Yellow face (variant)
  "mangia spaghetti", // Spaghetti-eater (anti-Italian, ironic internal)
  "vu lavà", // You wash (offensive for immigrants)
  "clandestino", // Illegal (used as slur)
  "clandestina", // Illegal (fem, used as slur)
  "marocchina", // Moroccan (fem, used as slur)
  "albanese di merda", // Shit Albanian (compound slur)
  "rumeno di merda", // Shit Romanian (compound slur)
  "sporco negro", // Dirty black (compound slur)
  "sporca negra", // Dirty black (fem compound slur)
  "zingarata", // Gypsy trick (offensive)
  "zingaccia", // Dirty gypsy (augmentative fem)
  "ebreo di merda", // Shit Jew (compound slur)

  // === EXPANSION: Internet slang / modern ===
  "minchia bella", // Beautiful dick (Sicilian excl.)
  "minchia che", // Dick what (Sicilian excl.)
  "porcoddio", // PorcoDio variant (no space)
  "dioporco", // DioPorco variant (reversed)
  "diocane", // DioCane variant (no space)
  "cazzomerda", // Dick-shit (compound)
  "merdacane", // Shit-dog (compound)
  "vaffancazzo", // Go fuck a dick (variant)
  "vaffammoc", // Fuck off (Neapolitan internet)
  "vaffammocc", // Fuck off (Neapolitan variant)
  "fancazzista", // Lazy person (lit. doing-dicks)
  "fancazzismo", // Laziness (lit. doing-dicks-ism)
  "scassapalle", // Ball-breaker
  "scassaminchia", // Dick-breaker (Sicilian)
  "spacca il cazzo", // Breaks the dick / annoying
  "che due coglioni", // What two balls / how annoying
  "che due palle", // What two balls / how boring
  "che palle", // What balls / how boring
  "ma che cazzo dici", // What the fuck are you saying
  "ma vaffanculo va", // Go fuck off already
  "ma vai a cagare", // Go take a shit
  "vai a farti fottere", // Go get yourself fucked
  "vai a cagare", // Go shit yourself
  "vai a dare via il culo", // Go give away your ass
  "vai a pisciare", // Go piss yourself

  // === EXPANSION: More general insults ===
  "cretino", // Cretin
  "cretina", // Cretin (fem)
  "deficiente", // Deficient / idiot
  "scimunito", // Dimwit
  "scimunita", // Dimwit (fem)
  "idiota", // Idiot
  "imbranato", // Clumsy / incompetent
  "imbranata", // Clumsy (fem)
  "incapace", // Incapable
  "buono a nulla", // Good for nothing
  "buona a nulla", // Good for nothing (fem)
  "fallito", // Failure / loser
  "fallita", // Failure (fem)
  "sfigato", // Loser / unlucky
  "sfigata", // Loser (fem)
  "sfiga", // Bad luck
  "sfiga nera", // Black bad luck
  "coglione di merda", // Shit idiot
  "stronzo figlio di puttana", // Turd son of a whore
  "cagacazzi infernale", // Infernal dick-annoyer
  "teste di cazzo ambulante", // Walking dickhead
  "parassite", // Parasite
  "verme", // Worm
  "vermiciattolo", // Little worm
  "schifoso", // Disgusting
  "schifosa", // Disgusting (fem)
  "lurido", // Filthy
  "lurida", // Filthy (fem)
  "viscido", // Slimy
  "viscida", // Slimy (fem)
  "porco schifoso", // Disgusting pig
  "maiale", // Pig
  "maiala", // Pig (fem)
  "maialona", // Big pig (fem)
  "maialotto", // Little pig
  "bastardo", // Bastard
  "bastarda", // Bastard (fem)
  "bastardone", // Big bastard
  "miserabile", // Miserable wretch
  "meschino", // Petty / wretched
  "infame", // Infamous / traitor
  "infamone", // Big traitor
  "infamata", // Infamous act
  "vigliacco", // Coward
  "vigliacca", // Coward (fem)
  "codardo", // Coward
  "codarda", // Coward (fem)
  "pusillanime", // Pusillanimous
  "ratto", // Rat
  "ratto di fogna", // Sewer rat
  "scarafaggio", // Cockroach
  "blatta", // Cockroach
  "pidocchioso", // Lousy
  "pidocchiosa", // Lousy (fem)
  "cagone", // Coward / shitter
  "cagona", // Coward (fem)
  "cagasotto", // Pants-shitter / coward
  "cacasotto", // Pants-shitter variant
  "merdaiolo", // Shit-worker

  // === EXPANSION: More bestemmie combinations ===
  "porco dio in croce", // Pig God on the cross
  "porco dio e la madonna", // Pig God and the Madonna
  "porco dio santo", // Pig holy God
  "porco dio ladro", // Pig God thief
  "porco dio maledetto", // Pig God cursed
  "porco dio infame", // Pig God infamous
  "porco dio bastardo", // Pig God bastard
  "porco dio demonio", // Pig God demon
  "porco dio stronzo", // Pig God asshole
  "porco dio merda", // Pig God shit
  "dio maledetto", // God cursed
  "dio vigliacco", // God coward
  "dio farabutto", // God scoundrel
  "dio verme", // God worm
  "dio traditore", // God traitor
  "dio cornuto", // God cuckold
  "dio zoccolo", // God clog/slut
  "dio puttaniere", // God whoremonger
  "dio crepa", // God drop dead
  "dio di merda", // God of shit
  "cristo di merda", // Christ of shit
  "cristo infame", // Christ infamous
  "cristo cornuto", // Christ cuckold
  "cristo maledetto", // Christ cursed
  "cristo traditore", // Christ traitor
  "cristo vigliacco", // Christ coward
  "gesù bastardo", // Jesus bastard
  "gesù di merda", // Jesus of shit
  "gesù maledetto", // Jesus cursed
  "madonna di merda", // Madonna of shit
  "madonna maledetta", // Madonna cursed
  "madonna bastarda", // Madonna bastard (fem)
  "madonna cornuta", // Madonna cuckold (fem)
  "madonna ladra", // Madonna thief (fem)
  "madonna sporca", // Madonna dirty
  "madonna fottuta", // Madonna fucked
  "madonna stronza", // Madonna bitch
  "porca madonna ladra", // Pig Madonna thief
  "porca madonna zoccola", // Pig Madonna slut
  "porca madonna maiala", // Pig Madonna pig
  "santo cazzo", // Holy dick
  "santo culo", // Holy ass
  "porco il papa", // Pig the Pope
  "porco il vaticano", // Pig the Vatican
  "mannaggia a dio", // Damn God (Southern)
  "mannaggia alla madonna", // Damn the Madonna
  "mannaggia a cristo", // Damn Christ
  "mannaggia ai santi", // Damn the saints
  "mannaggia all'ostia", // Damn the host
  "madonna bubbolona", // Madonna bubble (euphemistic)
  "dio bono", // God good (Tuscan euphemistic)
  "dio birillo", // God pin (euphemistic)
  "ostia maledetta", // Cursed host
  "sacramento del cazzo", // Sacrament of the dick
  "santiddio porco", // Holy God pig
  "dio merdoso", // God shitty
  "dio coglione", // God idiot
  "madonna cogliona", // Madonna idiot (fem)
  "porco giuda bastardo", // Pig Judas bastard
  "diavolo porco", // Pig devil

  // === EXPANSION: Calabrese profanity ===
  "minchia di to patri", // Your father's dick (Calabrese)
  "cornuto di merda", // Shit cuckold (Calabrese)
  "cazzo e mammata", // Your mom's dick (Calabrese)
  "porca di to ma", // Your mother's a pig (Calabrese)
  "scimunitu", // Idiot (Calabrese)
  "zoccola schifosa", // Disgusting slut (Calabrese)
  "guappu", // Thug (Calabrese variant)
  "sdirruto", // Skinny/wretched (Calabrese)
  "cafonaccio", // Big boor (Calabrese)
  "scassacazzi", // Dick-breaker (Calabrese)
  "fracicu", // Rotten (Calabrese)
  "piattola", // Crab louse / annoying person (Calabrese)
  "chiattona schifosa", // Disgusting fat woman (Calabrese)
  "mbriacone", // Big drunk (Calabrese)
  "cornuto maledetto", // Cursed cuckold (Calabrese)
  "faccia di stronzo", // Turd face (Southern)

  // === EXPANSION: Pugliese profanity ===
  "cazzone di merda", // Shit big dick (Pugliese)
  "strunz fetent", // Stinking turd (Pugliese)
  "fessa come na scarpa", // Dumb as a shoe (Pugliese)
  "capa di cazz", // Dickhead (Pugliese)
  "puttanun", // Big whore (Pugliese)
  "curnut", // Cuckold (Pugliese)
  "cazzimmuso", // Nasty-faced (Pugliese/Neapolitan)
  "sfaccimm a mammeta", // Your mother's cum (Pugliese)
  "lurdacchione", // Very dirty person (Pugliese)

  // === EXPANSION: Emiliano-Romagnolo profanity ===
  "ciulare", // To fuck (Emiliano)
  "ciulata", // A fuck (Emiliano)
  "pirla del cazzo", // Dick pirla (compound)
  "burdel", // Mess / brothel (Emiliano)
  "putana", // Whore (Emiliano variant)
  "s-ciapa", // Slap / pussy (Emiliano)
  "s-ciapona", // Big pussy / slut (Emiliano)
  "incasinato", // In a mess / fucked up
  "incasinata", // In a mess / fucked up (fem)

  // === EXPANSION: Lombard profanity ===
  "pirla di merda", // Shit idiot (Lombard)
  "pirlata", // Stupid thing (Lombard)
  "pirlone", // Big idiot (Lombard)
  "ciula", // Idiot / ass (Lombard)
  "ciulón", // Big idiot (Lombard)
  "balengone", // Big idiot (Piemontese/Lombard)
  "balengo", // Idiot (Piemontese/Lombard)
  "barlafùs", // Weird / crazy (Lombard)
  "cùi", // Ass (Lombard dialect)
  "fiòcca", // Pussy (Lombard dialect)
  "minga de cazzo", // Nothing of a dick (Lombard)
  "va a ciapà i ratt", // Go catch rats (Lombard, fuck off)
  "testa di pirla", // Pirla head (Lombard)

  // === EXPANSION: Piemontese profanity ===
  "bogia nen", // Don't move / stubborn (Piemontese)
  "cojone", // Idiot (Piemontese from coglione)
  "nèn capissi un cazzo", // Not understanding a dick (Piemontese)
  "fòla", // Lies / bullshit (Piemontese)
  "ciucca", // Drunkard (Piemontese fem)
  "ciuccone", // Big drunkard (Piemontese)
  "fabiòcc", // Idiot (Piemontese)
  "babeo", // Idiot (Piemontese)

  // === EXPANSION: Ligurian profanity ===
  "belinata", // Stupid thing (Ligurian)
  "belinone", // Big dick / big idiot (Ligurian)
  "belino de merda", // Shit dick (Ligurian)
  "scialla", // Relaxed / don't care (Ligurian/slang)
  "figlio di belinone", // Son of a big dick (Ligurian)
  "facciadaculo", // Ass-face (Ligurian compound)
  "brutto belinone", // Ugly big dick (Ligurian)

  // === EXPANSION: Friulian profanity ===
  "cjoc", // Drunk (Friulian)
  "scjassecoglions", // Ball-breaker (Friulian)
  "madone purcje", // Pig Madonna (Friulian blasphemy)
  "diu cjan", // God dog (Friulian blasphemy)
  "diu purcit", // God piglet (Friulian blasphemy)
  "mone", // Pussy / idiot (Friulian)
  "purcje", // Pig (Friulian insult)

  // === EXPANSION: More minchia derivatives ===
  "minchiarola", // Foolish (Sicilian)
  "minchiatona", // Big bullshit (Sicilian)
  "minchiata colossale", // Colossal bullshit (Sicilian)
  "minchia di cartone", // Cardboard dick (Sicilian insult)
  "ammhinca", // Damn (minchia euphemism)
  "santa minchia", // Holy dick (Sicilian excl.)
  "per la minchia", // By the dick (Sicilian)
  "staminchia", // This dick (Sicilian contraction)
  "sticchio di to ma", // Your mother's pussy (Sicilian)
  "figlio di minchia", // Son of a dick (Sicilian)

  // === EXPANSION: More compound phrases ===
  "va a fanculo", // Go fuck yourself (variant)
  "va' a farti fottere", // Go get yourself fucked
  "va a fare in culo", // Go get it in the ass
  "va in culo a tua madre", // Go up your mother's ass
  "ma va a cagare va", // Go take a shit already
  "va a morire", // Go die
  "va' a morire ammazzato", // Go die murdered
  "vai a fare in culo", // Go get it in the ass
  "vai a dar via il culo", // Already listed variant
  "fottiti stronzo", // Fuck yourself asshole
  "fottiti troia", // Fuck yourself whore
  "ficcatelo nel culo", // Stick it up your ass
  "ficcatelo in culo", // Stick it in your ass
  "mettitelo nel culo", // Put it in your ass
  "mettitelo in culo", // Put it up your ass
  "succhiami il cazzo", // Suck my dick
  "leccami il culo", // Lick my ass
  "baciami il culo", // Kiss my ass
  "vai a puttane", // Go to whores
  "tua madre è una puttana", // Your mother is a whore
  "tua madre fa la troia", // Your mother acts like a whore
  "tuo padre è un cornuto", // Your father is a cuckold
  "figlio di una cagna", // Son of a female dog
  "figlio di una vacca", // Son of a cow
  "figlio di una zoccola", // Son of a slut
  "rompimi il cazzo", // Break my dick / annoy me
  "non rompere il cazzo", // Don't break the dick / stop annoying
  "non rompere i coglioni", // Don't break the balls
  "non rompere le palle", // Don't break the balls
  "mi hai rotto il cazzo", // You broke my dick / annoyed me
  "mi hai rotto i coglioni", // You broke my balls
  "che figlio di puttana", // What a son of a whore
  "ma sei scemo", // But are you stupid
  "ma sei coglione", // But are you an idiot
  "sei un cazzo di niente", // You're a dick of nothing
  "sei una merda", // You're shit
  "sei un pezzo di merda", // You're a piece of shit
  "sei uno stronzo di merda", // You're a shit asshole
  "ma che cazzo fai", // What the fuck are you doing
  "ma che minchia vuoi", // What the dick do you want (Sicilian)
  "levati dal cazzo", // Get out of the dick / move
  "levati dai coglioni", // Get out of the balls / move
  "fuori dalle palle", // Out of the balls / move
  "togliti dai coglioni", // Remove yourself from balls / move

  // === EXPANSION: More sexual terms ===
  "sesso di gruppo", // Group sex
  "ammucchiatona", // Big orgy
  "orgia sfrenata", // Unbridled orgy
  "porcheria sessuale", // Sexual filthiness
  "scoparsi", // To fuck oneself / each other
  "farsi scopare", // To get fucked
  "farsi chiavare", // To get fucked (variant)
  "farsi trombare", // To get fucked (variant)
  "farsi inculare", // To get sodomized
  "dare il culo", // To give ass / be submissive
  "prendere nel culo", // To take it in the ass
  "prenderlo in culo", // To take it in the ass (variant)
  "preso per il culo", // Taken for the ass / mocked
  "culare", // To sodomize (slang)
  "sverginata", // Deflowering (noun)
  "spompinata", // Blowjob (noun)
  "pompino di merda", // Shit blowjob
  "succhiacazzi", // Cock-sucker
  "succhiapiselli", // Pea-sucker (dick-sucker)
  "mangiamerda", // Shit-eater
  "mangiacazzi", // Dick-eater
  "leccafiga", // Pussy-licker
  "ditata", // Fingering (noun)
  "scopata selvaggia", // Wild fuck
  "chiavata bestiale", // Bestial fuck
  "trombata da dio", // Godly fuck
  "venire come un treno", // To cum like a train
  "schizzare", // To squirt
  "schizzata", // Squirt (noun)
  "sborrata in faccia", // Cumshot to the face
  "sborrare addosso", // To cum on someone
  "puttanone di strada", // Big street whore
  "accompagnatrice", // Escort (euphemistic)
  "gigolò", // Gigolo / male escort
  "marchettaro", // Male prostitute
  "marchetta", // Trick / prostitution act
  "battere il marciapiede", // To walk the sidewalk (prostitution)
  "battere", // To prostitute (slang)
  "battitrice", // Female who prostitutes
  "donna di strada", // Street woman
  "donna di malaffare", // Woman of ill repute

  // === EXPANSION: More homophobic slurs across dialects ===
  "culo rotto", // Broken ass (homophobic)
  "buco di culo", // Already listed variant
  "ricchioncello", // Little faggot (Neapolitan dim)
  "frocione di merda", // Shit big faggot
  "frocio del cazzo", // Dick faggot
  "culattone di merda", // Shit gay man
  "finocchio di merda", // Shit faggot
  "checchetta", // Little effeminate man (derog dim)
  "schecquiato", // Effeminate (derogatory)
  "busone di merda", // Shit gay man
  "arruso fetente", // Stinking gay (Sicilian)
  "bucaiolo di merda", // Shit gay (Tuscan)
  "bardassone", // Big catamite (archaic)
  "femminiello", // Effeminate man (Neapolitan, derog)
  "femminuccia", // Little woman / sissy (derog)
  "donnicciola", // Little woman / sissy (derog)
  "mezzo uomo", // Half a man
  "non è uomo", // Not a man
  "maschiaccio", // Tomboy (sometimes derogatory)

  // === EXPANSION: More ethnic slurs ===
  "terroni di merda", // Shit southerners (plural slur)
  "polentoni di merda", // Shit northerners (plural slur)
  "mangia banane", // Banana-eater (anti-Black slur)
  "negro di merda", // Shit n-word
  "negra di merda", // Shit n-word (fem)
  "sporco zingaro", // Dirty gypsy
  "sporca zingara", // Dirty gypsy (fem)
  "zingaro di merda", // Shit gypsy
  "cinese di merda", // Shit Chinese
  "muso giallo di merda", // Shit yellow-face
  "sporco arabo", // Dirty Arab
  "arabo di merda", // Shit Arab
  "islamico di merda", // Shit Islamic
  "musulmano di merda", // Shit Muslim
  "ebreo sporco", // Dirty Jew
  "giudeo", // Jew (derogatory usage)
  "giudeo di merda", // Shit Jew
  "crucco di merda", // Shit German
  "albanese", // Albanian (used as slur)
  "rumeno", // Romanian (used as slur)
  "romeno di merda", // Shit Romanian
  "filippino di merda", // Shit Filipino
  "straniero di merda", // Shit foreigner
  "fuori dal mio paese", // Out of my country
  "torna al tuo paese", // Go back to your country
  "mangiagatti", // Cat-eater (anti-Chinese slur)
  "mangia cammelli", // Camel-eater (anti-Arab slur)

  // === EXPANSION: Internet slang and abbreviations ===
  "vfnc", // Vaffanculo (abbreviation)
  "stocazzo", // This dick (internet slang)
  "sto cazzo", // This dick
  "e sti cazzi", // And these dicks / so what
  "ammazza oh", // Damn oh (Roman internet)
  "ammazza che stronzo", // Damn what an asshole
  "minkia", // Minchia variant spelling
  "madó", // Madonna shortened
  "maronn", // Madonna (Neapolitan shortened)
  "maronna", // Madonna (Neapolitan variant)
  "maronna mia", // My Madonna (Neapolitan)
  "diofa", // DioPorco euphemism
  "diosanto", // God holy (borderline)
  "porkatroia", // PorcaTroia variant
  "porkodio", // PorcoDio variant
  "porkamadonna", // PorcaMadonna variant
  "c4zzo", // Cazzo evasion
  "c@zzo", // Cazzo evasion
  "cazz0", // Cazzo evasion
  "str0nzo", // Stronzo evasion
  "str0nz0", // Stronzo evasion
  "m3rda", // Merda evasion
  "m€rda", // Merda evasion
  "p0rco", // Porco evasion
  "putt4na", // Puttana evasion
  "putt@na", // Puttana evasion
  "c0glione", // Coglione evasion
  "f1ga", // Figa evasion
  "f1ca", // Fica evasion
  "fr0cio", // Frocio evasion
  "vaffancul0", // Vaffanculo evasion
  "cul0", // Culo evasion
  "tr0ia", // Troia evasion
  "z0ccola", // Zoccola evasion
  "minch1a", // Minchia evasion
  "p1rla", // Pirla evasion
  "sb0rra", // Sborra evasion
  "sc0pare", // Scopare evasion
  "f0ttere", // Fottere evasion
  "p0mpino", // Pompino evasion
  "b0cchino", // Bocchino evasion

  // === EXPANSION: More general insults ===
  "animale", // Animal (insult)
  "bestia", // Beast (insult)
  "porco animale", // Pig animal
  "bestiaccia", // Ugly beast
  "cane rognoso", // Mangy dog
  "cagna in calore", // Bitch in heat
  "vacca grassa", // Fat cow
  "vacca di merda", // Shit cow
  "troia schifosa", // Disgusting whore
  "puttana schifosa", // Disgusting whore
  "lurido bastardo", // Filthy bastard
  "lurida stronza", // Filthy bitch
  "schifoso di merda", // Disgusting shit
  "viscido verme", // Slimy worm
  "parassitta", // Parasite (variant)
  "parassito", // Parasite (masc)
  "sanguisuga", // Leech / bloodsucker
  "sciacallo", // Jackal / scavenger
  "avvoltoio", // Vulture
  "serpente", // Snake
  "vipera", // Viper (fem insult)
  "serpe", // Snake (variant)
  "topo di fogna", // Sewer rat
  "scarafone", // Big cockroach (Southern)
  "zecca", // Tick / parasite
  "pidocchio", // Louse
  "malandato", // Rundown / sickly
  "disgraziato", // Disgraced / wretch
  "disgraziata", // Disgraced (fem)
  "svergognato", // Shameless
  "svergognata", // Shameless (fem)
  "faccia tosta", // Brazen face
  "faccia come il culo", // Face like an ass
  "brutto come la fame", // Ugly as hunger
  "brutta come la morte", // Ugly as death
  "brutto cesso", // Ugly toilet
  "cesso ambulante", // Walking toilet
  "racchia", // Ugly woman (slang)
  "racchiona", // Very ugly woman
  "rospo", // Toad / ugly person
  "mostro", // Monster / ugly person
  "obbrobrio", // Abomination
  "aborto", // Abortion / ugly person
  "aborto della natura", // Abortion of nature
  "errore della natura", // Error of nature
  "scherzo della natura", // Joke of nature
  "pezzente di merda", // Shit beggar
  "straccione di merda", // Shit ragamuffin
  "barbonaccio", // Big bum / hobo
  "barbone", // Bum / hobo
  "barbona", // Bum / hobo (fem)
  "accattone", // Beggar
  "fannullone", // Good-for-nothing
  "fannullona", // Good-for-nothing (fem)
  "lavativo", // Lazy person
  "lavatrice", // Washing machine / lazy person (fem slang)
  "scansafatiche", // Work-dodger
  "perdigiorno", // Waster of days
  "nullafacente", // Do-nothing
  "buono a niente", // Good for nothing
  "buona a niente", // Good for nothing (fem)
  "capra", // Goat / stupid person
  "caprone", // Big goat / stupid man
  "asino", // Donkey / stupid
  "asina", // Donkey (fem) / stupid
  "somaro", // Donkey / stupid person
  "somara", // Donkey (fem) / stupid
  "babbeo", // Fool
  "babbea", // Fool (fem)
  "babbione", // Big fool
  "tonto", // Dull / slow
  "tontolone", // Big dummy
  "sciocco", // Silly
  "sciocca", // Silly (fem)
  "scioccone", // Big silly
  "allocco", // Owl / dimwit
  "allocchetta", // Little dimwit (fem)
  "bietolone", // Big beet / simpleton
  "citrullo", // Idiot (Southern)
  "citrulla", // Idiot (fem, Southern)
  "gonzo", // Simpleton
  "minchiarola di merda", // Shit fool (Sicilian)
  "cretinata", // Stupid thing
  "cretinismo", // Cretinism (as insult)
  "idiozia", // Idiocy
  "imbecillità", // Imbecility
  "stupidaggine", // Stupidity
  "stronzaggine infinita", // Infinite assholery
  "porcata", // Dirty trick / piggish act
  "porcheria", // Filthiness / disgusting thing
  "schifezza", // Disgusting thing
  "schifo", // Disgust / disgusting
  "che schifo", // How disgusting
  "fa schifo", // It's disgusting
  "mi fai schifo", // You disgust me
  "fai pietà", // You're pitiful
  "fai pena", // You're pitiful
  "faccia di bronzo", // Bronze face / brazen
  "faccia da schiaffi", // Slap-worthy face
  "muso duro", // Hard snout / stubborn
  "testa dura", // Hard head / stubborn
  "testa vuota", // Empty head
  "testa di cavolo", // Cabbage head
  "testa di rapa", // Turnip head
  "testa di legno", // Wooden head
  "testaccia", // Bad/ugly head
  "testardo come un mulo", // Stubborn as a mule
  "cornuto e contento", // Cuckold and happy
  "ubriacone", // Big drunkard
  "ubriacona", // Big drunkard (fem)
  "sbronzone", // Big drunk
  "sbronza", // Drunkard (fem) / drinking spree
  "tossico", // Toxic / drug addict
  "tossica", // Toxic (fem) / drug addict
  "drogato", // Drugged / drug addict
  "drogata", // Drugged (fem)
  "tossicodipendente", // Drug dependent
  "fattone", // Stoner
  "fattona", // Stoner (fem)
  "fumato", // Smoked / stoned
  "fumata", // Smoked (fem) / stoned
  "sballato", // High / off balance
  "sballata", // High (fem)

  // === EXPANSION: Sardinian expanded profanity ===
  "cunnu", // Cunt (Sardinian)
  "cunnedda", // Little cunt (Sardinian)
  "frigangiu", // Ugly / disgusting (Sardinian)
  "arza", // Whore (Sardinian)
  "arratzarisi", // Horny (Sardinian reflexive)
  "balatru", // Rude person (Sardinian)
  "bellifregu", // Beautiful freak (Sardinian ironic)
  "beccu", // Goat / cuckold (Sardinian)
  "cornutu", // Cuckold (Sardinian)
  "mammarossa", // Lazy person (Sardinian)
  "maialittu", // Cursed (Sardinian)
  "figa de tziu", // Uncle's pussy (Sardinian)

  // === EXPANSION: More Venetian profanity ===
  "s-ciavo", // Slave / wretch (Venetian)
  "putanon", // Big whore (Venetian)
  "recia de cogion", // Ear of an idiot (Venetian)
  "mona rotta", // Broken pussy (Venetian)
  "bruto porco", // Ugly pig (Venetian)
  "dio bòn de un can", // God good of a dog (Venetian blasphemy)
  "ostia porca", // Pig host (Venetian blasphemy)
  "sacramento porco", // Pig sacrament (Venetian blasphemy)
  "casso", // Dick (Venetian)
  "sboro de can", // Dog cum (Venetian)
  "toso del casso", // Dick kid (Venetian)
  "va a far in culo", // Go get it in the ass (Venetian)
  "fiol de na vaca", // Son of a cow (Venetian)
  "fiol de putana", // Son of a whore (Venetian)

  // === EXPANSION: More Tuscan/Florentine profanity ===
  "bischerate", // Stupid things (Florentine plural)
  "bischero di merda", // Shit idiot (Florentine)
  "grullo come una zucca", // Stupid as a pumpkin (Tuscan)
  "una sega", // Not a damn thing (Tuscan lit. a saw)
  "segaccia", // Ugly saw / bad wank (Tuscan)
  "bischero del cazzo", // Dick bischero (Tuscan compound)
  "becero", // Vulgar / uncouth (Tuscan)
  "becera", // Vulgar (fem, Tuscan)
  "cialtrone", // Slob / scoundrel (Tuscan)
  "cialtrona", // Slob (fem, Tuscan)
  "buzzurra", // Barbarian (fem, Tuscan/Roman)
  "peracottaio", // Stewed-pear seller / worthless (Tuscan)

  // === EXPANSION: More compound insults ===
  "figlio di cane", // Son of a dog
  "figlio di un cane", // Son of a dog (variant)
  "figlio di zoccola", // Son of a slut
  "figlio di troia maledetta", // Son of a cursed whore
  "puttana della madonna", // Whore of the Madonna
  "coglione della minchia", // Ball of the dick (Sicilian compound)
  "stronzo del cazzo", // Dick turd
  "merda della merda", // Shit of shit
  "pezzo di idiota", // Piece of idiot
  "pezzo di cretino", // Piece of cretin
  "pezzo di deficiente", // Piece of deficient
  "razza di cretini", // Race of cretins
  "branco di stronzi", // Pack of assholes
  "branco di coglioni", // Pack of idiots
  "manica di stronzi", // Bunch of assholes
  "covo di merde", // Den of shits
  "fogna di merda", // Sewer of shit
  "pozzo di merda", // Well of shit
  "fiume di merda", // River of shit
  "mare di merda", // Sea of shit
  "montagna di merda", // Mountain of shit
  "mondo di merda", // World of shit
  "vita di merda", // Life of shit
  "giornata di merda", // Day of shit
  "lavoro di merda", // Shit job
  "culo del mondo", // Ass of the world (middle of nowhere)
  "culo di gallina", // Chicken ass / coward
  "cagata pazzesca", // Crazy crap
  "cagata immensa", // Immense crap
  "figata", // Cool thing (from figa, can be vulgar)
  "sfigatura", // Loser-ness / bad luck
  "porca puttana eva", // Pig whore Eve
  "porca puttana la miseria", // Pig whore misery
  "zoccola fetida", // Fetid slut
  "troia fetida", // Fetid whore
  "puttana fetida", // Fetid whore
  "faccia di pirla", // Pirla face (Lombard)
  "faccia di bischero", // Bischero face (Tuscan)
  "faccia di minchia", // Dick face (Sicilian)
  "musone", // Big snout / grumpy person
  "musona", // Big snout (fem) / grumpy
  "grufolone", // Big trotter / greedy pig
  "zozzeria", // Filthiness
  "zozzume", // Filth
  "sudiciume", // Filth / grime
  "laidume", // Ugliness / filth
  "lordura", // Filth
  "sporcizia", // Dirtiness
  "porchidio", // PorcoDio variant (no space)
  "cristoporco", // CristoPorco variant (no space)
  "madonnacagna", // MadonnaCagna variant (no space)
  "diobestiacane", // DioBestiaCane compound
  "diocristo porco", // God Christ pig compound

  // ========================================
  // === EXPANSION: Exhaustive Bestemmie (Blasphemy) - Dio combinations ===
  // ========================================
  "dio dannato", // God damned (blasphemy variant)
  "dio vaccaro", // God cowherd (blasphemy)
  "dio zoppo", // God lame (blasphemy)
  "dio cieco", // God blind (blasphemy)
  "dio scemo", // God stupid (blasphemy)
  "dio miserabile", // God miserable (blasphemy)
  "dio puzzolente", // God smelly (blasphemy)
  "dio sporco", // God dirty (blasphemy)
  "dio sudicio", // God dirty (blasphemy variant)
  "dio lurido porco", // God filthy pig (blasphemy compound)
  "dio cane maiale", // God dog pig (blasphemy compound)
  "dio porco cane", // God pig dog (blasphemy compound)
  "dio bestia maledetta", // God cursed beast (blasphemy compound)
  "dio cane della madonna", // God dog of the Madonna (blasphemy compound)
  "dio cane porco", // God dog pig (blasphemy compound)
  "dio cane bastardo", // God bastard dog (blasphemy compound)
  "dio madonna porco", // God Madonna pig (blasphemy compound)
  "dio vacca", // God cow (blasphemy)
  "dio troia", // God whore (blasphemy)
  "dio puttana", // God whore (blasphemy)
  "dio zoccola", // God slut (blasphemy)
  "dio idiota", // God idiot (blasphemy)
  "dio imbecille", // God imbecile (blasphemy)
  "dio deficiente", // God moron (blasphemy)
  "dio cretino", // God cretin (blasphemy)
  "dio stupido", // God stupid (blasphemy)
  "dio fesso", // God fool (blasphemy)
  "dio pirla", // God dick/fool (blasphemy)
  "dio minchia", // God dick (blasphemy with Sicilian)
  "dio cazzo", // God dick (blasphemy)
  "dio assassino", // God murderer (blasphemy)
  "dio criminale", // God criminal (blasphemy)
  "dio mostro", // God monster (blasphemy)
  "dio demonio", // God demon (blasphemy)
  "dio diavolo", // God devil (blasphemy)
  "dio satana", // God Satan (blasphemy)
  "dio giuda", // God Judas (blasphemy)
  "dio bugiardo", // God liar (blasphemy)
  "dio falso", // God false (blasphemy)
  "dio marcio", // God rotten (blasphemy)
  "dio putrido", // God putrid (blasphemy)
  "dio rognoso", // God mangy (blasphemy)
  "dio pidocchioso", // God lousy (blasphemy)
  "dio bavoso", // God drooling (blasphemy)
  "dio viscido", // God slimy (blasphemy)
  "dio rivoltante", // God revolting (blasphemy)
  "dio ripugnante", // God repugnant (blasphemy)
  "dio osceno", // God obscene (blasphemy)
  "dio volgare", // God vulgar (blasphemy)
  "dio triviale", // God trivial/vulgar (blasphemy)
  "dio sbagliato", // God wrong (blasphemy)
  "dio fallito", // God failed (blasphemy)
  "dio impotente", // God impotent (blasphemy)
  "dio pezzente", // God beggar (blasphemy)
  "dio straccione", // God ragamuffin (blasphemy)
  "dio barbone", // God hobo (blasphemy)
  "dio stupro", // God rape (blasphemy)
  "dio disgraziato", // God disgraced (blasphemy)
  "dio porco maledetto", // God damned pig (blasphemy compound)
  "dio cane maledetto", // God damned dog (blasphemy compound)

  // === Bestemmie - Madonna combinations ===
  "madonna porca", // Madonna pig (blasphemy)
  "madonna lercia", // Madonna grimy (blasphemy)
  "madonna sudicia", // Madonna dirty (blasphemy)
  "madonna merdosa", // Madonna shitty (blasphemy)
  "madonna fetente", // Madonna stinking (blasphemy)
  "madonna puzzolente", // Madonna smelly (blasphemy)
  "madonna deficiente", // Madonna moron (blasphemy)
  "madonna imbecille", // Madonna imbecile (blasphemy)
  "madonna cretina", // Madonna cretin (blasphemy)
  "madonna stupida", // Madonna stupid (blasphemy)
  "madonna ignorante", // Madonna ignorant (blasphemy)
  "madonna dannata", // Madonna damned (blasphemy)
  "madonna lebbrosa", // Madonna leprous (blasphemy)
  "madonna bucaiola", // Madonna faggot (blasphemy, Tuscan)
  "madonna assassina", // Madonna murderer (blasphemy)
  "madonna lupa", // Madonna she-wolf (blasphemy)
  "madonna bagascia", // Madonna whore (blasphemy, dialectal)
  "madonna baldracca", // Madonna harlot (blasphemy)
  "madonna battona", // Madonna streetwalker (blasphemy)
  "madonna mignotta", // Madonna whore (blasphemy, Roman)
  "madonna bocchinara", // Madonna cocksucker (blasphemy)

  // === Bestemmie - Cristo combinations ===
  "cristo bestia", // Christ beast (blasphemy)
  "cristo lurido", // Christ filthy (blasphemy)
  "cristo schifoso", // Christ disgusting (blasphemy)
  "cristo stronzo", // Christ asshole (blasphemy)
  "cristo dannato", // Christ damned (blasphemy variant)
  "cristo merdoso", // Christ shitty (blasphemy)
  "cristo fetente", // Christ stinking (blasphemy)
  "cristo sporco", // Christ dirty (blasphemy)
  "cristo vacca", // Christ cow (blasphemy)
  "cristo troia", // Christ whore (blasphemy)
  "cristo puttana", // Christ whore (blasphemy variant)
  "cristo zoccola", // Christ slut (blasphemy)
  "cristo serpente", // Christ snake (blasphemy)
  "cristo verme", // Christ worm (blasphemy)
  "cristo farabutto", // Christ scoundrel (blasphemy)
  "cristo bugiardo", // Christ liar (blasphemy)
  "cristo marcio", // Christ rotten (blasphemy)
  "cristo putrido", // Christ putrid (blasphemy)
  "cristo viscido", // Christ slimy (blasphemy)

  // === Bestemmie - Saints/other holy combinations ===
  "san pietro porco", // Saint Peter pig (blasphemy)
  "gesù bestia", // Jesus beast (blasphemy)
  "gesù puttana", // Jesus whore (blasphemy)
  "gesù ladro", // Jesus thief (blasphemy)
  "santo porco", // Holy pig (blasphemy)
  "sant'iddio porco", // Holy God pig (blasphemy)
  "sacramento di merda", // Shit sacrament (blasphemy)
  "sacramento cane", // Dog sacrament (blasphemy)
  "sacramento bastardo", // Bastard sacrament (blasphemy)
  "sacramento maledetto", // Cursed sacrament (blasphemy)
  "ostia di merda", // Shit host (blasphemy)
  "ostia porchissima", // Most piggish host (blasphemy)
  "mannaggia i santi", // Damn the saints (blasphemy)
  "mannaggia la miseria", // Damn the misery (blasphemy lite)
  "mannaggia a te", // Damn you (Neapolitan style)
  "porco santo", // Pig saint (blasphemy)
  "porco sacramento", // Pig sacrament (blasphemy)
  "porco papa", // Pig pope (blasphemy)
  "porca vacca", // Pig cow (blasphemy variant)
  "porca zozza", // Pig filthy (blasphemy)
  "puttana madonna", // Whore Madonna (blasphemy)
  "troia madonna", // Whore Madonna (blasphemy)
  "zoccola madonna", // Slut Madonna (blasphemy)

  // ========================================
  // === EXPANSION: Neapolitan dialect profanity ===
  // ========================================
  "chiavicone", // Big sewer / very worthless (Neapolitan)
  "spaccamaroni", // Chestnut breaker / ball breaker (Neapolitan)
  "sfaccimme", // Cum (Neapolitan plural)
  "guaglione 'e mierda", // Shit kid (Neapolitan)
  "puozze sculà", // May you be drained (Neapolitan curse)
  "puozze murì", // May you die (Neapolitan curse)
  "puozze schiattà", // May you explode (Neapolitan curse)
  "puozze accidere", // May you be killed (Neapolitan curse)
  "puozze appizzà", // May you be hanged (Neapolitan curse)
  "puozze 'e mierda", // May you shit (Neapolitan curse)
  "puozze abbruciato", // May you be burned (Neapolitan curse)
  "mannaggia 'a maronna", // Damn the Madonna (Neapolitan)
  "mannaggia a chi t'è muorto", // Damn your dead ones (Neapolitan)
  "mannaggia 'a miseria", // Damn the misery (Neapolitan)
  "mannaggia 'o sangue", // Damn the blood (Neapolitan)
  "mannaggia 'a morte", // Damn death (Neapolitan)
  "mannaggia 'o cazzo", // Damn the dick (Neapolitan)
  "mannaggia 'a puttana", // Damn the whore (Neapolitan)
  "vaffanculo a mammeta", // Fuck off your mother (Neapolitan)
  "vafammòcca", // Go to blowjobs (Neapolitan)
  "'a fessa 'e mammeta", // Your mother's pussy (Neapolitan)
  "chillo strunzo", // That turd (Neapolitan)
  "strunzo 'e mierda", // Shit turd (Neapolitan)
  "curnutella", // Little cuckold (Neapolitan diminutive)
  "zoccola 'e mierda", // Shit slut (Neapolitan)
  "puttana 'e mierda", // Shit whore (Neapolitan)
  "figlio 'e puttana", // Son of a whore (Neapolitan)
  "figlio 'e 'na puttana", // Son of a whore (Neapolitan variant)
  "ciucciamm 'o cazzo", // Suck my dick (Neapolitan)
  "vattenne affanculo", // Go fuck off (Neapolitan)
  "vattenn' a ffanculo", // Go fuck off (Neapolitan variant)
  "sciaquato", // Washed out / worthless (Neapolitan)
  "scostumato", // Ill-mannered (Neapolitan)
  "fetente 'e mierda", // Stinking shit (Neapolitan)
  "ricchion'", // Gay man (Neapolitan slur shortened)
  "ricchiona", // Gay/lesbian (Neapolitan slur fem)
  "frociàrse", // To act gay (Neapolitan derogatory)
  "femminella", // Effeminate man (Neapolitan slur)
  "guappo 'e cartone", // Cardboard tough guy (Neapolitan)
  "scugnizzo 'e mierda", // Shit street urchin (Neapolitan)
  "mariuolo", // Scoundrel / thief (Neapolitan)
  "mariuola", // Scoundrel (fem, Neapolitan)
  "cagacarte", // Paper shitter / bureaucrat (Neapolitan)
  "sciupafemmine", // Womanizer (Neapolitan/standard)
  "lazzarone", // Lazzarone / idle scoundrel (Neapolitan)
  "lazzarona", // Lazy scoundrel (fem, Neapolitan)

  // ========================================
  // === EXPANSION: Sicilian dialect profanity ===
  // ========================================
  "minchiateddi", // Little stupid things (Sicilian dim. plural)
  "ammazzati", // Get killed (Sicilian)
  "ammazzati la", // Go kill yourself (Sicilian)
  "babbiàri", // To joke / be foolish (Sicilian)
  "buttanedda", // Little whore (Sicilian diminutive)
  "buttaneddra", // Little whore (Sicilian variant)
  "buttana di to matri", // Whore of your mother (Sicilian)
  "buttana di to soru", // Whore of your sister (Sicilian)
  "buttana matri", // Whore mother (Sicilian)
  "curnutu fituso", // Stinking cuckold (Sicilian)
  "curnutu di merda", // Shit cuckold (Sicilian variant)
  "curnutazzu", // Big cuckold (Sicilian augmentative)
  "cugghiùni", // Balls / idiot (Sicilian)
  "cugghiunazzu", // Big balls / big idiot (Sicilian)
  "cabasisi", // Balls (Sicilian)
  "cacasotto e muzzicapane", // Scaredy cat and bread biter (Sicilian)
  "figghiu 'i buttana", // Son of a whore (Sicilian)
  "figghiu 'i cane", // Son of a dog (Sicilian)
  "figghiu 'i puttana", // Son of a whore (Sicilian variant)
  "figghiu 'i 'na buttana", // Son of a whore (Sicilian with article)
  "figghiu 'i zoccola", // Son of a slut (Sicilian)
  "futtiri", // To fuck (Sicilian)
  "liscio", // Smooth / gay (Sicilian slur)
  "masculazzu", // Tomboy / masculine woman (Sicilian)
  "minnaccia", // Big breast / tit (Sicilian)
  "mussu fituso", // Stinking face (Sicilian)
  "pirtuso", // Hole / anus (Sicilian)
  "pisciazzu", // Big piss (Sicilian)
  "quaquaraquà", // Useless person (Sicilian, from the crow)
  "suca", // Suck it (Sicilian)
  "sucaminchia", // Suck my dick (Sicilian)
  "sucaminchione", // Big dick sucker (Sicilian)
  "tamarrazza", // Big redneck (Sicilian fem augmentative)
  "turco", // Turk / idiot (Sicilian insult)
  "vattinni fanculo", // Fuck off (Sicilian)
  "vastasuna", // Vulgar person (fem, Sicilian)
  "zoccola fitusa", // Stinking slut (Sicilian)
  "catafero", // Corpse / ugly person (Sicilian)

  // ========================================
  // === EXPANSION: Roman dialect profanity ===
  // ========================================
  "mignottona", // Big whore (Roman augmentative)
  "mignottella", // Little whore (Roman diminutive)
  "mignottaro", // Whoremonger (Roman)
  "mignotta de tu madre", // Your mother's a whore (Roman)
  "stronza de merda", // Shit bitch (Roman)
  "stronzo de merda", // Shit asshole (Roman)
  "li mortacci tui", // Your ugly dead relatives (Roman variant)
  "li mortacci de tu madre", // Your mother's dead relatives (Roman)
  "li mortacci de tu padre", // Your father's dead relatives (Roman)
  "li mortacci de chi t'ha partorito", // Dead relatives of who birthed you (Roman)
  "li mortacci de chi t'è morto", // Dead relatives of your dead (Roman)
  "li mortacci vostra", // Your ugly dead relatives (Roman plural)
  "ammazzate", // Get killed (Roman)
  "annamo bene", // Here we go (Roman sarcastic)
  "'nnamo a fanculo", // Let's go fuck off (Roman)
  "a' mignotta", // The whore (Roman)
  "a' puttana", // The whore (Roman)
  "te possino ammazzà", // May they kill you (Roman curse)
  "te possino", // May they (Roman curse beginning)
  "daje de culo", // Give it from the ass (Roman)
  "pija per culo", // To mock / take from the ass (Roman)
  "fijo de 'na mignotta", // Son of a whore (Roman)
  "fijo de puttana", // Son of a whore (Roman)
  "fijo de 'na zoccola", // Son of a slut (Roman)
  "fijo de buona donna", // Son of a good woman (Roman ironic)
  "sta zitto stronzo", // Shut up asshole (Roman)
  "che cazzo voi", // What the dick do you want (Roman)
  "levate dar cazzo", // Get off the dick / go away (Roman)
  "che te frega", // What do you care (Roman dismissive)
  "burina", // Redneck (fem, Roman)
  "coatta", // Boor (fem, Roman)
  "zozzarella", // Little dirty person (fem, Roman)
  "borgata de merda", // Shit slum (Roman)
  "borgataro", // Slum dweller (Roman derogatory)
  "borgatara", // Slum dweller (fem, Roman)

  // ========================================
  // === EXPANSION: Milanese/Lombard dialect profanity ===
  // ========================================
  "pirlotta", // Fool (fem, Milanese)
  "pirlacchione", // Big fool (Milanese augmentative)
  "baloss", // Rascal / thief (Milanese)
  "balòss", // Rascal (Milanese variant)
  "balosso", // Rascal (Milanese italianized)
  "barbone de merda", // Shit hobo (Milanese/standard)
  "ciulàt", // Fucked / stolen (Lombard)
  "pirla de merda", // Shit fool (Milanese)
  "testa de ciula", // Dick head (Lombard)
  "va a dà via el cuu", // Go give away the ass (Milanese)
  "va a cagà", // Go shit (Milanese)
  "va a ramengo", // Go to ruin (Milanese)
  "va a morì ammazzà", // Go die killed (Milanese/Roman crossover)
  "faccia de tolla", // Tin face / shameless (Milanese)
  "porca la madòna", // Pig Madonna (Milanese blasphemy)
  "porco el domìni", // Pig the Lord (Milanese blasphemy)
  "cristo de un can", // Christ of a dog (Milanese blasphemy)
  "dio de la madona", // God of the Madonna (Milanese blasphemy)
  "ostia de un can", // Host of a dog (Milanese blasphemy)
  "sanguanazzo", // Bloody person (Lombard)
  "lofio", // Ugly / disgusting (Lombard)
  "lofia", // Ugly (fem, Lombard)

  // ========================================
  // === EXPANSION: Venetian dialect profanity (expanded) ===
  // ========================================
  "el mona", // The idiot (Venetian masc)
  "la mona", // The pussy (Venetian fem)
  "dio can de un porco", // God dog of a pig (Venetian)
  "dio can de la madona", // God dog of the Madonna (Venetian)
  "dio bòn", // God good (Venetian blasphemy)
  "dio bòia", // God executioner (Venetian blasphemy)
  "dio s-cian", // God dog (Venetian variant)
  "dioschèi", // God money (Venetian blasphemy)
  "porco dio de un can", // Pig God of a dog (Venetian compound)
  "madonna bòia", // Madonna executioner (Venetian blasphemy)
  "madonna can", // Madonna dog (Venetian blasphemy)
  "sborone", // Big cum / show-off (Venetian)
  "sboron", // Show-off (Venetian)
  "va' a cagar", // Go shit (Venetian)
  "va a far in mona", // Go do it in pussy (Venetian)
  "fiol de puttana", // Son of a whore (Venetian)
  "casso de mona", // Dick of pussy (Venetian)
  "testa de mona", // Pussy head (Venetian)
  "brutto mona", // Ugly idiot (Venetian)
  "in mona de to mare", // In your mother's pussy (Venetian)
  "tosa del casso", // Dick girl (Venetian)
  "porco el signor", // Pig the Lord (Venetian blasphemy)
  "porco san marco", // Pig Saint Mark (Venetian blasphemy)

  // ========================================
  // === EXPANSION: Piemontese/Piedmontese dialect profanity ===
  // ========================================
  "cojón", // Balls / idiot (Piedmontese)
  "cojonada", // Stupid thing (Piedmontese)
  "bogianen", // Don't move / lazy (Piedmontese)
  "sacranon", // Damn (Piedmontese)
  "va a caghé", // Go shit (Piedmontese)
  "va a fé 'n cul", // Go get it in the ass (Piedmontese)
  "lassa stè", // Leave it alone / piss off (Piedmontese)
  "fòl", // Crazy (Piedmontese)
  "cucù", // Cuckoo / crazy (Piedmontese)
  "ciucco", // Drunk (masc, Piedmontese)
  "ciuccarsi", // To get drunk (Piedmontese)
  "bèstia d'un can", // Beast of a dog (Piedmontese)
  "porco d'un giuda", // Pig of a Judas (Piedmontese)
  "cristo d'un can", // Christ of a dog (Piedmontese)
  "madona d'na troia", // Madonna of a whore (Piedmontese)
  "figurassa", // Bad figure / shameful (Piedmontese)

  // ========================================
  // === EXPANSION: Ligurian dialect profanity ===
  // ========================================
  "belìn", // Dick (Ligurian)
  "belin de merda", // Shit dick (Ligurian)
  "a belina", // The pussy (Ligurian)
  "figgio de puttana", // Son of a whore (Ligurian)
  "vattene in belìn", // Go to dick (Ligurian)
  "cornuto de merda", // Shit cuckold (Ligurian)
  "bagascione", // Big whore (Ligurian augmentative)
  "bagascetta", // Little whore (Ligurian diminutive)
  "scorbuto", // Scurvy / ugly person (Ligurian insult)
  "belin che sei", // What a dick you are (Ligurian)
  "faccia de belin", // Dick face (Ligurian)

  // ========================================
  // === EXPANSION: Friulian dialect profanity ===
  // ========================================
  "cjocje", // Drunk (fem, Friulian)
  "cjocjât", // Wasted (Friulian)
  "mòni", // Idiot (Friulian)
  "mònic", // Stupid (Friulian)
  "tòc di mòni", // Piece of idiot (Friulian)
  "cul di vacje", // Cow's ass (Friulian)
  "scjassâ", // To break / annoy (Friulian)
  "purcjegne", // Piggishness (Friulian)
  "va a cjapâ tal cûl", // Go take it in the ass (Friulian)
  "va a fâ in cûl", // Go do it in the ass (Friulian)
  "ostie", // Host (Friulian blasphemy)
  "diu can", // God dog (Friulian blasphemy)
  "diu puarc", // God pig (Friulian blasphemy)
  "diu lòtri", // God dirty (Friulian blasphemy)

  // ========================================
  // === EXPANSION: Abruzzese/Marchigiano dialect profanity ===
  // ========================================
  "cacchiotto", // Little dick (Abruzzese)
  "cacchione", // Big dick / stupid (Abruzzese)
  "cazzarola", // Damn / saucepan (Abruzzese euphemism)
  "caccamo", // Cauldron / idiot (Abruzzese)
  "ciaffo", // Slap (Abruzzese)
  "ciaffare", // To slap (Abruzzese)
  "strunzo 'e merd", // Shit turd (Abruzzese)
  "figlio de 'na puttana", // Son of a whore (Abruzzese)
  "che cazzo vuo'", // What the dick do you want (Abruzzese)
  "vattenn' a ffa 'n culo", // Go get it in the ass (Abruzzese)
  "cojona", // Idiot (fem, Abruzzese)
  "zì puttana", // Aunt whore (Abruzzese)
  "chi t'ha morto", // Who died on you (Abruzzese curse)

  // ========================================
  // === EXPANSION: Calabrese dialect profanity ===
  // ========================================
  "minchiune", // Big idiot (Calabrese)
  "guappune", // Tough guy (Calabrese derogatory)
  "cornuto figlio 'e cornuto", // Cuckold son of cuckold (Calabrese)
  "curnutu fitusu", // Stinking cuckold (Calabrese)
  "buttanazza", // Big whore (Calabrese)
  "figlio 'i puttana", // Son of a whore (Calabrese)
  "vaffanculo a mamita", // Fuck off your mom (Calabrese)
  "ammazzatinu", // Go get killed (Calabrese)
  "cretinu 'e merda", // Shit cretin (Calabrese)
  "scassaminchia di merda", // Shit dick breaker (Calabrese)
  "cafone 'e merda", // Shit peasant (Calabrese)
  "garbino", // Jerk (Calabrese)
  "cammurria", // Annoyance / pest (Calabrese)
  "cammurrioso", // Annoying (Calabrese)
  "sangue di giuda", // Blood of Judas (Calabrese blasphemy)

  // ========================================
  // === EXPANSION: Pugliese/Apulian dialect profanity ===
  // ========================================
  "cazz 'e mammt", // Your mother's dick (Pugliese)
  "fangu te mamm't", // Your mother's mud (Pugliese)
  "strunz 'e merd", // Shit turd (Pugliese)
  "figghie de puttana", // Son of a whore (Pugliese)
  "uè strunzone", // Hey big turd (Pugliese)
  "mò te caccio", // Now I'll kick you out (Pugliese)
  "minchia ca si brutto", // Dick you're ugly (Pugliese)
  "vattenne a fà 'n culo", // Go get it in the ass (Pugliese)
  "cesso di merda", // Shit toilet (Pugliese)
  "scemmone", // Big idiot (Pugliese)
  "scemmunito", // Made stupid (Pugliese)
  "pacchione", // Big belly / glutton (Pugliese)
  "puzzolentu", // Smelly (Pugliese)
  "ciucciu", // Donkey (Pugliese)

  // ========================================
  // === EXPANSION: Emiliano-Romagnolo dialect profanity ===
  // ========================================
  "bòia d'un mònd", // Executioner of a world (Emiliano blasphemy)
  "pòrca la bèstia", // Pig the beast (Emiliano blasphemy)
  "pòrca la madòna", // Pig the Madonna (Emiliano blasphemy)
  "pòrco dìo", // Pig God (Emiliano blasphemy)
  "va a cagàr", // Go shit (Emiliano)
  "va a fà in cùl", // Go get it in the ass (Emiliano)
  "testa de minchia", // Dick head (Emiliano/standard)
  "cojòn", // Balls / idiot (Emiliano)
  "cojònada", // Stupid thing (Emiliano)
  "pùtana 'dla madòna", // Whore of the Madonna (Emiliano)
  "stronz'd mérda", // Shit turd (Emiliano)
  "figurón de mérda", // Shit spectacle (Emiliano)
  "burdèl", // Bordello / mess (Romagnolo)
  "burdlòn", // Big mess maker (Romagnolo)

  // ========================================
  // === EXPANSION: Trentino-Alto Adige dialect profanity ===
  // ========================================
  "porca putana", // Pig whore (Trentino)
  "porca madona", // Pig Madonna (Trentino)
  "va a farte fòter", // Go get fucked (Trentino)
  "el mona de to pare", // Your father's idiot (Trentino/Venetian)
  "dio bestia de un can", // God beast of a dog (Trentino)
  "porco giuda de un can", // Pig Judas of a dog (Trentino)
  "ostia de un can ladro", // Host of a thief dog (Trentino)

  // ========================================
  // === EXPANSION: Sexual terms with conjugations ===
  // ========================================
  "chiavo", // I fuck (1st person)
  "chiavi", // You fuck (2nd person)
  "chiava", // He/she fucks (3rd person)
  "chiaviamo", // We fuck (1st plural)
  "chiavate", // You fuck (2nd plural)
  "chiavano", // They fuck (3rd plural)
  "chiavavo", // I used to fuck (imperfect 1st)
  "chiavavi", // You used to fuck (imperfect 2nd)
  "chiavavamo", // We used to fuck (imperfect 1st plural)
  "chiavai", // I fucked (past 1st)
  "chiavò", // He/she fucked (past 3rd)
  "chiaverò", // I will fuck (future 1st)
  "chiaverai", // You will fuck (future 2nd)
  "chiaverà", // He/she will fuck (future 3rd)
  "chiaveremo", // We will fuck (future 1st plural)
  "chiaveranno", // They will fuck (future 3rd plural)
  "chiaverei", // I would fuck (conditional 1st)
  "chiaveresti", // You would fuck (conditional 2nd)
  "chiaverebbe", // He/she would fuck (conditional 3rd)
  "chiaveremmo", // We would fuck (conditional 1st plural)
  "chiaverebbero", // They would fuck (conditional 3rd plural)
  "scopo", // I fuck
  "scopi", // You fuck
  "scopa", // He/she fucks
  "scopiamo", // We fuck
  "scopate", // You all fuck
  "scopano", // They fuck
  "scopavo", // I used to fuck
  "scopai", // I fucked (past)
  "scopò", // He/she fucked (past)
  "scoperò", // I will fuck (future)
  "scoperai", // You will fuck (future)
  "scoperà", // He/she will fuck (future)
  "scoperei", // I would fuck (conditional)
  "scopato", // Fucked (past part. masc)
  "scopatina", // Quick fuck (diminutive)
  "scopatona", // Big fuck (fem augmentative)
  "trombo", // I fuck (slang)
  "trombi", // You fuck (slang)
  "tromba", // He/she fucks (slang)
  "trombiamo", // We fuck (slang)
  "trombate", // You all fuck (slang)
  "trombano", // They fuck (slang)
  "trombatona", // Big fuck (slang augmentative)
  "trombato", // Fucked (slang past part.)
  "fotto", // I fuck (literary)
  "fotti", // You fuck (literary)
  "fotte", // He/she fucks (literary)
  "fottiamo", // We fuck (literary)
  "fottete", // You all fuck (literary)
  "fottono", // They fuck (literary)
  "fottuta", // Fucked (fem, literary)
  "inculo", // I ass-fuck
  "inculi", // You ass-fuck
  "incula", // He/she ass-fucks
  "inculato", // Ass-fucked (past part.)
  "inculata", // Ass-fucked (fem) / an ass-fucking
  "inculatona", // Big ass-fucking (augmentative)
  "pompinaro", // Man who gives blowjobs
  "pomparsi", // To jerk off (reflexive)
  "segare", // To jerk off / to saw
  "segaiola", // Wanker (fem)
  "segamento", // Wanking (action)
  "autoerotismo", // Masturbation (formal)
  "sborrare", // To cum
  "sborro", // I cum / cum (noun)
  "orgasmare", // To orgasm

  // ========================================
  // === EXPANSION: Compound insults - figlio di ===
  // ========================================
  "figlio di troie", // Son of whores
  "figlio di merdaccia", // Son of big shit
  "figlio di un porco", // Son of a pig
  "figlio di una scrofa", // Son of a sow
  "figlio di buona mamma", // Son of a good mother (euphemism)
  "figlio di papa", // Daddy's boy / spoiled
  "figlio di troia marcio", // Son of a rotten whore
  "figlio di puttana maledetta", // Son of a damned whore
  "figlio di zoccola fetida", // Son of a fetid slut
  "figlio di merda", // Son of shit
  "figlio di un cornuto", // Son of a cuckold
  "figlio di un bastardo", // Son of a bastard
  "figlio di un verme", // Son of a worm
  "figlio del demonio", // Son of the demon
  "figlio del diavolo", // Son of the devil
  "figlio di satana", // Son of Satan
  "figlio di giuda", // Son of Judas

  // === Compound insults - testa di ===
  "testa di pietra", // Stone head / stubborn idiot
  "testa di ferro", // Iron head / stubborn
  "testa di asino", // Donkey head
  "testa di porco", // Pig head
  "testa di maiale", // Pig head (variant)
  "testa di cane", // Dog head
  "testa di mulo", // Mule head / stubborn
  "testa di gallina", // Chicken head / stupid
  "testa di cappero", // Caper head / idiot
  "testa di belìn", // Dick head (Ligurian)
  "testa quadra", // Square head / stubborn

  // === Compound insults - faccia di ===
  "faccia di tolla", // Tin face / shameless
  "faccia da cane", // Dog face
  "faccia da porco", // Pig face
  "faccia da scimmia", // Monkey face
  "faccia da galera", // Prison face / criminal-looking
  "faccia da morto", // Dead face
  "faccia da deficiente", // Moron face
  "faccia da idiota", // Idiot face
  "faccia da stronzo", // Turd face (variant)

  // === Compound insults - pezzo di ===
  "pezzo di coglione", // Piece of idiot
  "pezzo di cornuto", // Piece of cuckold
  "pezzo di bastardo", // Piece of bastard
  "pezzo di animale", // Piece of animal
  "pezzo di porco", // Piece of pig
  "pezzo di ignorante", // Piece of ignorant
  "pezzo di farabutto", // Piece of scoundrel
  "pezzo di delinquente", // Piece of delinquent
  "pezzo di vigliacco", // Piece of coward
  "pezzo di immondizia", // Piece of garbage
  "pezzo di spazzatura", // Piece of trash

  // ========================================
  // === EXPANSION: Evasion spellings ===
  // ========================================
  "c.a.z.z.o", // Cazzo dotted
  "c-a-z-z-o", // Cazzo dashed
  "c a z z o", // Cazzo spaced
  "cazzzo", // Cazzo triple z
  "caaazzo", // Cazzo stretched a
  "cazzoooo", // Cazzo stretched o
  "m1nchia", // Minchia with 1
  "m!nchia", // Minchia with !
  "m.i.n.c.h.i.a", // Minchia dotted
  "f!ca", // Fica with !
  "f!ga", // Figa with !
  "f.i.g.a", // Figa dotted
  "f-i-g-a", // Figa dashed
  "s.t.r.o.n.z.o", // Stronzo dotted
  "m.e.r.d.a", // Merda dotted
  "m-e-r-d-a", // Merda dashed
  "merrd4", // Merda variant
  "p0rco dio", // Porco dio with 0
  "p0rc0 di0", // Porco dio with 0s
  "d!o porco", // Dio porco with !
  "di0 porco", // Dio porco with 0
  "di0 c4ne", // Dio cane with numbers
  "vaff4nculo", // Vaffanculo with 4
  "v4ffanculo", // Vaffanculo with 4
  "v.a.f.f.a.n.c.u.l.o", // Vaffanculo dotted
  "c0gli0ne", // Coglione with 0s
  "c.o.g.l.i.o.n.e", // Coglione dotted
  "puttan4", // Puttana with 4
  "p.u.t.t.a.n.a", // Puttana dotted
  "tr0i4", // Troia with 0 and 4
  "t.r.o.i.a", // Troia dotted
  "z0cc0la", // Zoccola with 0s
  "sc0pata", // Scopata with 0
  "b0cchin0", // Bocchino with 0s
  "p0mpin0", // Pompino with 0s
  "c.u.l.o", // Culo dotted
  "fr0ci0", // Frocio with 0s
  "f.r.o.c.i.o", // Frocio dotted
  "neg*o", // Negro with star
  "negr0", // Negro with 0
  "n3gro", // Negro with 3
  "dioc4ne", // Diocane with 4
  "di0cane", // Diocane with 0
  "diop0rco", // Dioporco with 0
  "di0p0rc0", // Dioporco with 0s
  "madonn4", // Madonna with 4
  "m4donna", // Madonna with 4
  "cr1sto", // Cristo with 1
  "crist0", // Cristo with 0
  "sbor4ta", // Sborata with 4
  "sborr4ta", // Sborrata with 4

  // ========================================
  // === EXPANSION: More compound insults and phrases ===
  // ========================================
  "vai a farti benedire", // Go get blessed (euphemism for fuck off)
  "vai a quel paese", // Go to that place (euphemism for fuck off)
  "levati dalle palle", // Get off the balls / go away
  "non scassare la minchia", // Don't break the dick (Sicilian)
  "sta cazzo", // Dick (emphatic)
  "sticazzi", // Who gives a dick (Roman)
  "daje co sto cazzo", // Come on with this dick (Roman)
  "ma va' al diavolo", // Go to the devil
  "ma va' all'inferno", // Go to hell
  "ma vattela a pigliare", // Go take it (euphemism)
  "ma che cazzo vuoi", // What the dick do you want
  "ma vaffanculo va'", // Go fuck off already
  "che coglioni", // What balls / how annoying
  "che minchia", // What the dick (Sicilian)
  "che merda", // What shit
  "che schifo di merda", // What disgusting shit
  "ma va a cagare", // Go shit (dismissive)
  "ma va a morire", // Go die
  "ma va a morire ammazzato", // Go die killed
  "ma va a morire ammazzata", // Go die killed (fem)
  "crepa", // Die / croak
  "crepacce", // Die (vulgar)
  "crepa brutto stronzo", // Die ugly asshole
  "muori male", // Die badly
  "ti ammazzo", // I'll kill you
  "ti spezzo in due", // I'll break you in two
  "ti apro in due", // I'll split you in two
  "ti faccio un culo così", // I'll make your ass this big
  "ti sfascio", // I'll smash you
  "ti sfondo", // I'll break through you
  "ti distruggo", // I'll destroy you
  "ti massacro", // I'll massacre you
  "porco di un mondo ladro", // Pig of a thief world
  "porca miseria ladra", // Pig thief misery
  "porcaccia la miseria", // Piggish the misery
  "porcaccia", // Piggish (emphatic)
  "porcaccione", // Big pig (emphatic augmentative)
  "porcacciona", // Big pig (fem emphatic)
  "porcherie", // Disgusting things (plural)
  "schifezze", // Disgusting things (plural)
  "roba di merda", // Shit stuff
  "roba da matti", // Crazy stuff
  "roba schifosa", // Disgusting stuff
  "tutto di merda", // Everything is shit
  "tutto una merda", // Everything's a shit
  "merdacce", // Big shits (plural)
  "merdosa", // Shitty (fem)
  "merdosi", // Shitty (masc plural)
  "merdose", // Shitty (fem plural)
  "cacca", // Poop (childish)
  "caccola", // Booger / little shit
  "incazzata", // Pissed off (fem)
  "incazzatissima", // Very pissed off (superlative fem)
  "scazzata", // Annoyed (fem)
  "scazzo", // Annoyance / boredom
  "rincoglionito", // Made stupid / senile
  "rincoglionita", // Made stupid (fem)
  "rincoglionirsi", // To become stupid
  "rincoglionimento", // Stupefaction / senility
  "scoglionato", // Fed up / annoyed
  "scoglionata", // Fed up (fem)
  "sbroccato", // Snapped / gone crazy
  "sbroccata", // Snapped (fem)
  "sclerare", // To flip out
  "sclerato", // Flipped out (masc)
  "sclerata", // Flipped out (fem)
  "sclerosi", // Sclerosis / going crazy
  "dare di matto", // To go crazy
  "fuori di testa", // Out of one's mind
  "fuori come un balcone", // Out like a balcony / crazy
  "matto come un cavallo", // Crazy as a horse
  "pazzo furioso", // Furiously crazy
  "pazza furiosa", // Furiously crazy (fem)
  "deficiente totale", // Total moron
  "imbecille patentato", // Licensed imbecile
  "cretino patentato", // Licensed cretin
  "idiota patentato", // Licensed idiot
  "stupido come una capra", // Stupid as a goat
  "ignorante come una capra", // Ignorant as a goat
  "asino di natura", // Donkey by nature
  "ciuccio come un somaro", // Dumb as a donkey
  "zuccone", // Big pumpkin / blockhead
  "zuccona", // Blockhead (fem)
  "testone", // Big head / stubborn
  "testona", // Big head (fem) / stubborn
  "testadicazzo", // Dickhead (one word)
  "testadirapa", // Turnip head (one word)
  "testadimulo", // Mule head (one word)

  // ========================================
  // === EXPANSION: More insults and slurs ===
  // ========================================
  "terroni", // Southerners (derogatory plural)
  "terrone di merda", // Shit southerner (derogatory)
  "polentona", // Northerner (fem, derogatory)
  "polentoni", // Northerners (derogatory plural)
  "polentone di merda", // Shit northerner (derogatory)
  "marocchino di merda", // Shit Moroccan (racist)
  "sporco straniero", // Dirty foreigner (xenophobic)
  "extracomunitario di merda", // Shit non-EU immigrant (xenophobic)
  "zingari di merda", // Shit gypsies (racist)
  "frocio di merda", // Shit faggot (homophobic)
  "sporco frocio", // Dirty faggot (homophobic)
  "checca isterica", // Hysterical queen (homophobic)
  "lesbicaccia", // Big lesbian (derogatory augmentative)
  "lesbica di merda", // Shit lesbian (homophobic)
  "trans di merda", // Shit trans (transphobic)
  "travestito di merda", // Shit crossdresser (transphobic)
  "handicappato di merda", // Shit handicapped (ableist)
  "ritardato di merda", // Shit retard (ableist)
  "mongolo di merda", // Shit mongoloid (ableist)
  "spastico di merda", // Shit spastic (ableist)
  "cerebroleso", // Brain damaged (ableist)

  // ========================================
  // === EXPANSION: Euphemistic and evasive terms ===
  // ========================================
  "accidenti", // Damn (euphemism)
  "accipicchia", // Darn (euphemism for cazzo)
  "cavolo", // Cabbage (euphemism for cazzo)
  "cavoli", // Cabbages (euphemism for cazzi)
  "caspita", // Gosh (euphemism for cazzo)
  "capperi", // Capers (euphemism for cazzo)
  "cacchio", // Shoot (euphemism for cazzo)
  "acciderba", // Damn grass (euphemism)
  "acciderboli", // Multi-damn (euphemism)
  "porca pupattola", // Pig doll (euphemistic blasphemy)
  "porca puzzola", // Pig skunk (euphemistic blasphemy)
  "porca trota", // Pig trout (euphemistic blasphemy)
  "diamine", // Damn (euphemism for dio)
  "diavolo", // Devil (euphemism)
  "diavolaccio", // Big devil (euphemism)
  "cribbio", // Gee (euphemism for Cristo)
  "cristiddio", // Christ God (variant)
  "zucchina", // Zucchini (euphemism for penis)
  "banana", // Banana (euphemism for penis)
  "salame", // Salami (euphemism for penis)
  "uccello", // Bird / penis (euphemism)
  "bernarda", // Bertha (euphemism for penis)
  "patata", // Potato (euphemism for vagina)
  "passera", // Sparrow (euphemism for vagina)
  "passerina", // Little sparrow (euphemism for vagina)
  "farfallina", // Little butterfly (euphemism for vagina)
  "topina", // Little mouse (euphemism for vagina)
  "sedere", // Buttocks / sit
  "deretano", // Rear end
  "fondoschiena", // Bottom of the back
  "lato b", // B side (euphemism for ass)
  "posteriore", // Posterior

  // ========================================
  // === EXPANSION: Internet/SMS evasion spellings ===
  // ========================================
  "kazzo", // Cazzo with k
  "kazzata", // Cazzata with k
  "kazzone", // Cazzone with k
  "kulo", // Culo with k
  "fika", // Fica with k
  "fikka", // Fica with kk
  "troija", // Troia with j
  "putt4n4", // Puttana with 4s
  "vakka", // Vacca with k
  "vakkaccia", // Vaccaccia with k
  "porko", // Porco with k
  "porko dio", // Porco Dio with k
  "porka madonna", // Porca Madonna with k
  "djo porko", // Dio porco with k and j
  "djo bestia", // Dio bestia with j
  "djo kane", // Dio cane with j and k
  "mertha", // Merda with th
  "caxo", // Cazzo with x
  "caxzo", // Cazzo with x variant
  "stroonzo", // Stronzo stretched
  "coione", // Coglione simplified
  "cojoni", // Coglioni simplified
  "koioni", // Coglioni with k
  "vaffa", // Vaffanculo abbreviated
  "vaffa'", // Vaffanculo abbreviated with apostrophe
  "vaffan", // Vaffanculo abbreviated
  "vaff", // Vaffanculo very abbreviated
  "fanculo", // Vaffanculo shortened
  "fancul0", // Fanculo with 0
  "f4nculo", // Fanculo with 4
  "f@nculo", // Fanculo with @
  "a'fanculo", // To hell (apostrophe variant)
  "minxia", // Minchia with x
  "minkya", // Minchia with k and y
  "str0nza", // Stronza with 0
  "str0nz4", // Stronza with 0 and 4
  "z0ccol4", // Zoccola with 0 and 4
  "b4stardo", // Bastardo with 4
  "b4st4rdo", // Bastardo with 4s

  // ========================================
  // === EXPANSION: Augmentatives, diminutives, and variations ===
  // ========================================
  "cazzona", // Big dick (fem, augmentative)
  "cazzacci", // Ugly dicks (pejorative plural)
  "stronzettino", // Tiny turd (double diminutive)
  "stronzate", // Stupid things (plural)
  "stronzitudine", // Turd-ness (ironic formation)
  "coglionate", // Stupid things (plural)
  "coglionaccio", // Big idiot (augmentative pejorative)
  "puttanate", // Whore-ish things / nonsense (plural)
  "puttanaccia", // Big ugly whore (pejorative)
  "troiata", // Whore-ish act / nonsense
  "troiate", // Whore-ish acts (plural)
  "troiaccia", // Big ugly whore (pejorative)
  "troietta", // Little whore (diminutive)
  "zoccolone", // Big slut (augmentative)
  "zoccolata", // Slutty act
  "zoccoletta", // Little slut (diminutive)
  "bastardello", // Little bastard (diminutive)
  "bastardaccio", // Ugly bastard (pejorative)
  "bastardaggine", // Bastardy
  "cornutone", // Big cuckold (augmentative)
  "cornutello", // Little cuckold (diminutive)
  "cornutaccio", // Ugly cuckold (pejorative)
  "cornutazza", // Ugly cuckold (fem pejorative)
  "figliadiputtana", // Daughter of a whore (one word)
  "figliodiputtana", // Son of a whore (one word)
  "figlidiputtana", // Sons of whores (one word)
  "porcomadonna", // PorcoMadonna (one word)
  "porcamadonna", // PorcaMadonna (one word)
  "diobestia", // DioBestia (one word)
  "diomaiale", // DioMaiale (one word)
  "dioboia", // DioBoia (one word)
  "dioladro", // DioLadro (one word)
  "diomerda", // DioMerda (one word)
  "cristobestia", // CristoBestia (one word)
  "cristocane", // CristoCane (one word)
  "madonnaporco", // MadonnaPorco (one word)
  "madonnaputtana", // MadonnaPuttana (one word)
  "madonnatroia", // MadonnaTrioa (one word)
  "madonnazoccola", // MadonnaZoccola (one word)
  "madonnaladra", // MadonnaLadra (one word)

  // ========================================
  // === EXPANSION: Additional vulgar expressions ===
  // ========================================
  "succhiamelo", // Suck it for me
  "leccapalle", // Ball licker / sycophant
  "leccapiedi", // Foot licker / sycophant
  "baciapile", // Battery kisser / religious hypocrite
  "ruffiana", // Brown-noser (fem)
  "paraculo", // Ass-coverer / opportunist
  "paracul0", // Paraculo with 0
  "paracula", // Opportunist (fem)
  "lecchini", // Lickers / sycophants (plural)
  "lecchina", // Licker (fem) / sycophant
  "mangia cazzi", // Dick eater
  "cacca merda", // Poop shit (childish compound)
  "scoreggia", // Fart
  "scoreggiare", // To fart
  "scoreggione", // Big farter
  "scoreggiare come un mulo", // To fart like a mule
  "puzzare come un maiale", // To stink like a pig
  "puzzare come una fogna", // To stink like a sewer
  "puzzare di merda", // To stink of shit
  "puzzone", // Big stinker
  "puzzolente di merda", // Stinking shit (compound)
  "fetente lurido", // Filthy stinking
  "fetente schifoso", // Disgusting stinking
  "lurido porco", // Filthy pig
  "lurido verme", // Filthy worm
  "sporco bastardo", // Dirty bastard
  "sporco infame", // Dirty infamous
  "schifosa lurida", // Filthy disgusting (fem)
  "viscido porco", // Slimy pig
  "brutta come la fame", // Ugly as hunger
  "brutto come la morte", // Ugly as death
  "brutto come il peccato", // Ugly as sin
  "brutto come un rospo", // Ugly as a toad
  "cesso con le gambe", // Toilet with legs
  "vomitevole", // Vomit-worthy
  "rivoltante come la merda", // Revolting as shit
  "fottitevi", // Fuck yourselves
  "fottitelo", // Fuck it yourself
  "ti fotto", // I'll fuck you
  "vi fotto", // I'll fuck you all
  "vi fotto tutti", // I'll fuck all of you
  "ti scopo viva", // I'll fuck you alive (fem)
  "ti scopo morta", // I'll fuck you dead (fem)
  "ti monto", // I'll mount you
  "ti sbatto", // I'll bang you
  "ti chiavo", // I'll fuck you (variant)
  "ti trombo", // I'll fuck you (slang)
  "ti prendo a calci in culo", // I'll kick your ass
  "ti prendo a pugni", // I'll punch you
  "ti spacco la faccia", // I'll smash your face
  "ti spacco il culo", // I'll smash your ass
  "ti faccio nero", // I'll beat you black
  "ti faccio a pezzi", // I'll tear you apart
  "ti faccio un culo a strisce", // I'll make your ass striped
  "ti faccio il culo a cappello", // I'll make your ass into a hat
  "ti faccio il culo come una O", // I'll make your ass like an O
  "ti mangio vivo", // I'll eat you alive
  "ti strozzo", // I'll strangle you
  "ti strangolo", // I'll strangle you (variant)
  "ti smonto", // I'll disassemble you
  "ti faccio secco", // I'll make you dry / kill you

  // ========================================
  // === EXPANSION: Umbrian dialect profanity ===
  // ========================================
  "cacadubbi", // Doubt shitter / indecisive (Umbrian)
  "fijo de 'na gran puttana", // Son of a great whore (Umbrian)
  "porco d'un dio", // Pig of a God (Umbrian blasphemy)
  "dio de un porco", // God of a pig (Umbrian blasphemy)

  // ========================================
  // === EXPANSION: More derogatory terms ===
  // ========================================
  "sottospecie", // Sub-species
  "sottospecie di merda", // Sub-species of shit
  "sottospecie di uomo", // Sub-species of man
  "sottospecie di donna", // Sub-species of woman
  "rifiuto umano", // Human refuse
  "rifiuto della società", // Society's refuse
  "feccia della società", // Dregs of society
  "feccia", // Dregs
  "scarto", // Reject / waste
  "scarto umano", // Human waste
  "verme schifoso", // Disgusting worm
  "vermicello", // Little worm
  "verminoso", // Worm-infested
  "scarafaggio umano", // Human cockroach
  "parassita", // Parasite
  "parassita della società", // Society's parasite
  "sanguisuga schifosa", // Disgusting leech
  "serpente velenoso", // Poisonous snake
  "jena", // Hyena
  "maiale schifoso", // Disgusting pig
  "maiale lurido", // Filthy pig
  "bestione", // Big beast
  "ignorantone", // Big ignorant
  "ignorantona", // Big ignorant (fem)
  "cafona", // Boor (fem)
  "zoticone", // Big boor
  "zoticona", // Big boor (fem)
  "buzzurrata", // Barbaric act
  "tanghero", // Boor / lout
  "bifolco", // Yokel
  "villano", // Peasant / rude person
  "villana", // Peasant (fem) / rude
  "villanaccio", // Big rude peasant
  "cafone di merda", // Shit boor
  "bifolco di merda", // Shit yokel
  "villano di merda", // Shit peasant
  "contadino di merda", // Shit farmer (derogatory)
  "montanaro di merda", // Shit mountain dweller (derogatory)
  "provincialotto", // Provincial / narrow-minded
  "paesano di merda", // Shit villager (derogatory)

  // ========================================
  // === EXPANSION: More Sardinian expanded profanity ===
  // ========================================
  "a funtana de su diaulu", // The devil's fountain (Sardinian curse)
  "arroganteddu", // Little arrogant (Sardinian)
  "babbu mannu", // Big idiot (Sardinian)
  "brutta bestia", // Ugly beast (Sardinian)
  "chi t'at fatu", // Who made you (Sardinian insult)
  "culu de pedra", // Stone ass (Sardinian)
  "figiu de bagassa", // Son of a whore (Sardinian)
  "is corrus de babbu tuu", // The horns of your father (Sardinian)
  "merda de bacca", // Cow shit (Sardinian)
  "porcandria", // Piggishness (Sardinian)
  "pudda", // Chicken / coward (Sardinian)
  "puddu", // Chicken (masc, Sardinian)
  "puttanazza", // Big whore (Sardinian variant)
  "scimpru", // Idiot (Sardinian)
  "tontu", // Stupid (Sardinian)
  "tonta", // Stupid (fem, Sardinian)
];

export default italianBadWords;
