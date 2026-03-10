// src/languages/german-words.ts

/**
 * German profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in German
 */
const germanBadWords: string[] = [
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "Scheiße",
  "Scheisse", // Shit
  "Arschloch", // Asshole
  "Fotze", // Cunt (very vulgar)
  "Fick",
  "Ficken", // Fuck (noun / verb)
  "Wichser",
  "Wichserin", // Wanker, jerk (masc./fem.)
  "Hure", // Whore
  "Schlampe", // Slut, bitch
  "Mist", // Manure, crap, damn
  "Verdammt", // Damn, damned
  "Arsch", // Ass
  "Schwanz", // Tail / Dick, cock (vulgar)
  "Pimmel", // Dick, cock (childish/vulgar)
  "Muschi", // Pussy (vulgar)
  "Titten", // Tits (vulgar)
  "Busen", // Bosom, breasts (less vulgar than Titten)
  "Eier", // Eggs / Balls (testicles - vulgar)
  "Sack", // Sack / Scrotum / Asshole (regional)

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Scheiße ---
  "scheißegal", // Don't give a shit (adj.)
  "scheißkerl", // Shitty guy, bastard
  "scheißladen", // Shitty place/shop
  "bescheuert", // Stupid, daft (related to Scheiße)
  "beschissen", // Shitty, crappy
  "verscheißern", // To kid, to pull someone's leg
  "ankacken", // To shit on / To tell someone off aggressively
  "Kacke", // Poo, crap (slightly less vulgar than Scheiße)
  "Kackbratze", // Shitty brat
  // --- Arschloch / Arsch ---
  "Arschgeige", // Ass violin (absurd insult for idiot/asshole)
  "Arschkriecher", // Ass-kisser
  "Leck mich am Arsch", // Kiss my ass (LMAA abbreviation)
  "verarschen", // To fool, to take the piss out of someone
  "arschlecken", // Ass-licking
  "arschig", // Nasty, mean
  "zum Kotzen", // Makes one puke / Disgusting
  // --- Fotze ---
  "Fotzenlecker", // Cunt licker (extremely vulgar)
  // --- Ficken / Wichser ---
  "verfickt", // Fucking (adjective), fucked up
  "Fickfehler", // Fucking mistake (offspring insult)
  "Fick dich!", // Fuck you!
  "Wichse", // Cum, jizz
  "wichsen", // To wank, masturbate
  "Rumwichsen", // Wanking around, messing about
  // --- Hure / Schlampe ---
  "Hurensohn", // Son of a bitch/whore (very offensive)
  "Hurentochter", // Daughter of a bitch/whore (very offensive)
  "Hurenkind", // Child of a whore
  "Verhurrt", // Whorish
  "Schlampig", // Sloppy, messy (can be unrelated to profanity)
  // --- Mist / Verdammt ---
  "Mistkerl", // Bastard, scoundrel
  "Miststück", // Nasty piece of work (often female)
  "Verdammte Scheiße", // Damn shit!
  "So ein Mist!", // Such crap! Damn it!
  // --- Schwanz / Pimmel / Muschi / Titten / Eier / Sack ---
  "Schwanzlutscher", // Cocksucker
  "Pissnelke", // Prude / Annoying woman (lit. piss carnation)
  "Muschilecker", // Pussy licker
  "Tittenficker", // Tit fucker (highly vulgar)
  "Sackgesicht", // Scrotum face (insult)
  "Sackratte", // Scrotum rat (absurd insult)
  "Geh mir nicht auf den Sack!", // Don't get on my nerves! (lit. don't step on my scrotum)
  "Weichei", // Wimp (lit. soft egg)

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "Idiot",
  "Idiotin", // Idiot (masc./fem.)
  "Trottel", // Idiot, fool
  "Depp", // Idiot, moron (Southern Germany/Austria)
  "Vollidiot", // Complete idiot
  "Vollpfosten", // Complete idiot (lit. full post)
  "Dummkopf", // Dumb head, stupid person
  "Blödmann", // Stupid man, fool
  "Blödian", // Fool
  "dumm", // Dumb, stupid
  "blöd",
  "blöde", // Stupid, silly
  "doof", // Stupid, dumb (colloquial)
  "bekloppt", // Crazy, nuts
  "hirnlos", // Brainless
  "Schwachkopf", // Weak head, simpleton
  "Schwachmat", // Simpleton, weakling
  "Narr",
  "Närrin", // Fool (masc./fem.)
  "Pfeife", // Pipe / Idiot, loser
  "Versager", // Failure, loser
  "Lappen", // Cloth / Wimp
  "Spasti", // Spastic (highly offensive disability slur used as general insult)
  "Mongo", // Mongoloid (highly offensive disability slur used as general insult)
  "behindert", // Disabled / Retarded (used as insult, very offensive)
  "Missgeburt", // Misbirth, monstrosity (very offensive)

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "Schwuchtel", // Faggot (very offensive)
  "Schwuler", // Gay man (can be neutral, but often used offensively)
  "Lesbe", // Lesbian (can be neutral, but often used offensively)
  "Kampflesbe", // Butch lesbian (offensive)
  "Transe", // Tranny (offensive)
  "Neger", // Negro (extremely offensive racial slur)
  "Kanake", // Very offensive slur, originally for Turks, now often for Southern Europeans, Middle Easterners
  "Itaker", // Offensive slur for Italians
  "Polacke", // Offensive slur for Polish people
  "Russe", // Russian (can be used neutrally or derogatorily)
  "Ami", // Yank, American (often derogatory)
  "Ösi", // Derogatory for Austrian
  "Saupreiß", // Derogatory Bavarian term for Prussians/North Germans
  "Kümmeltürke", // Offensive term for Turkish people
  "Schlitzauge", // Slit-eye (offensive for East Asians)

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "Bastard", // Bastard
  "Sau", // Sow (female pig) / Bitch, messy person
  "Drecksau", // Filthy pig / Dirty bastard
  "Schwein", // Pig / Swine
  "Schweinehund", // Pig-dog / Bastard (innerer Schweinehund = inner laziness/weakness)
  "Mistvieh", // Vile creature
  "Aas", // Carrion / Scumbag
  "Luder", // Hussy, minx (can be playful or offensive)
  "Göre", // Brat (female child)
  "Bengel", // Rascal (male child)
  "Frechdachs", // Cheeky badger (impudent person)
  "Heuchler", // Hypocrite
  "Lügner", // Liar
  "Betrüger", // Cheat, fraudster
  "Penner", // Bum, tramp
  "Gesindel", // Riff-raff, mob
  "Pack", // Rabble, scum
  "Abschaum", // Scum
  "Ungeziefer", // Vermin
  "Parasit", // Parasite
  "Widerlich", // Disgusting, repulsive
  "Ekelhaft", // Disgusting
  "Kotzbrocken", // Person who makes you want to puke, repulsive person
  "Speichellecker", // Sycophant (lit. spit-licker)
  "Warmduscher", // Wimp (lit. warm-showerer)
  "Schattenparker", // Wimp (lit. shadow-parker)
  "Zicke", // Goat / Bitchy woman
  "mies", // Lousy, mean
  "gemein", // Mean, nasty
  "hässlich", // Ugly

  // ========================================
  // === Bodily Functions (Vulgar Context) ==
  // ========================================
  "pissen", // To piss (vulgar)
  "pinkeln", // To pee (more common, less vulgar)
  "scheißen", // To shit (vulgar)
  "kacken", // To poo (less vulgar)
  "kotzen", // To vomit, puke (common, vulgar)
  "furzen", // To fart
  "pupsen", // To poot (less vulgar)
  "Rotz", // Snot
  "Spucke", // Spit
  "Sperma", // Sperm
  "Sabber", // Drool

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "Verflixt", // Darn it! (mild version of verflucht/verdammt)
  "Donnerwetter", // Good heavens! Wow! (lit. thunderstorm)
  "Himmel", // Heaven / Gosh!
  "Teufel", // Devil
  "zum Teufel", // To hell with it / What the hell
  "Quatsch", // Nonsense, rubbish
  "Blödsinn", // Nonsense, foolishness
  "Hau ab!", // Get lost! Buzz off!
  "Verschwinde!", // Disappear! Get lost!
  "Halt die Klappe!", // Shut up! (lit. hold the trap)
  "Halt's Maul!", // Shut your mouth! (more vulgar)
  "Schnauze!", // Snout / Shut up! (vulgar)
  "Fickfresse", // Fuckface
  "Hackfresse", // Ugly face (very offensive)
  "Dreckschwein", // Dirty pig
  "Drecksfotze", // Dirty cunt
  "Arschficker", // Assfucker
  "Arschfotze", // Ass-cunt
  "Vollarsch", // Complete ass
  "Scheißdreck", // Shit-dirt
  "Hurenbock", // Whoremonger
  "Dreckskerl", // Dirty bastard
  "Wichskopf", // Wankhead

  // Additional German profanity
  "Arschbacke", // Ass cheek
  "Arschlecker", // Ass licker
  "Drecksack", // Dirty bag / scumbag
  "Dreckstück", // Dirty piece (insult)
  "Dumme Kuh", // Stupid cow
  "Fettsack", // Fat sack
  "Fickschnitzel", // Fucking schnitzel (absurd compound)
  "Flachwichser", // Flat wanker (loser)
  "Giftzwerg", // Poison dwarf (nasty small person)
  "Hodengesicht", // Testicle face
  "Hurenbengel", // Whore's brat
  "Kackvogel", // Shit bird
  "Leck mich", // Lick me (abbreviated LMAA)
  "LMAA", // Abbreviation: Leck mich am Arsch
  "Mutterficker", // Motherfucker
  "Pisser", // Pisser
  "Pissgesicht", // Piss face
  "Saftsack", // Juice sack (idiot)
  "Scheißhaus", // Shithouse
  "Schlappschwanz", // Limp dick
  "Spacken", // Idiot (Northern German)
  "Trottelbacke", // Fool face
  "Vollhorst", // Complete idiot
  "Wichsgriffel", // Wank handle (hand, insult)
  "Ziegenficker", // Goat fucker
  "Oaschloch", // Asshole (Austrian)
  "Gscherti", // Idiot (Austrian)
  "Trottl", // Idiot (Austrian)
  "Huankind", // Whore child (Austrian)
  "Gopfertami", // God damn (Swiss German)
  "Siech", // Plague/bastard (Swiss German)
  "Sauhuund", // Pig dog (Swiss German)
  "Arschgeburt", // Ass birth
  "Kackwurst", // Shit sausage

  // ========================================
  // === Compound Insults ==================
  // ========================================
  "Affengesicht", // Monkey face
  "Bananenbieger", // Banana bender (idiot)
  "Dummschwätzer", // Dumb talker
  "Evolutionsbremse", // Evolution brake (so dumb they slow evolution)
  "Gesichtsgrätsche", // Face tackle (ugly face)
  "Brechmittel", // Emetic (nauseating person)
  "Dumpfbacke", // Dense cheek (dull person)
  "Knalltüte", // Bang bag (idiot)
  "Saftladen", // Juice shop (badly run place)
  "Schandmaul", // Shame mouth (loudmouth)
  "Trantüte", // Slow bag (slow person)
  "Blindgänger", // Dud (useless person)
  "Dünnbrettbohrer", // Thin board driller (person who takes shortcuts)
  "Flachzange", // Flat pliers (boring/dumb person)
  "Gehirnverweigerer", // Brain refuser
  "Intelligenzverweigerer", // Intelligence refuser
  "Lötkolben", // Soldering iron (idiot)
  "Luftpumpe", // Air pump (windbag/weakling)
  "Nullnummer", // Zero number (complete failure)
  "Rohrkrepierer", // Barrel burst (dud/failure)
  "Schmalspurganove", // Narrow gauge crook
  "Taugenichts", // Good-for-nothing
  "Trampeltier", // Bactrian camel (clumsy person)
  "Tranfunzel", // Oil lamp (slow-witted person)
  "Blödhammel", // Stupid ram
  "Hornochse", // Horn ox (stupid person)
  "Zimtzicke", // Cinnamon goat (bitchy woman)
  "Meckerziege", // Nagging goat
  "Labertasche", // Blabber bag (chatterbox)
  "Quatschkopf", // Nonsense head
  "Heulsuse", // Cry baby (female)
  "Jammerlappen", // Whining cloth (crybaby)
  "Hosenscheißer", // Pants shitter (coward/baby)
  "Angsthaase", // Scaredy rabbit (coward)
  "Korinthenkacker", // Currant shitter (nitpicker)
  "Erbsenzähler", // Pea counter (nitpicker)
  "Sesselfurzer", // Seat farter (lazy bureaucrat)
  "Paragraphenreiter", // Paragraph rider (bureaucratic stickler)
  "Schnarchzapfen", // Snore drip (boring person)
  "Langweiler", // Bore
  "Nervensäge", // Nerve saw (annoying person)
  "Plagegeist", // Plague spirit (pest)
  "Quälgeist", // Torment spirit (pest)
  "Stinkstiefel", // Stink boot (grump)
  "Griesgram", // Grouch
  "Brummbär", // Grumble bear (grouch)
  "Meckerfritze", // Nag Fritz (complainer)
  "Nörgler", // Nagger
  "Klugscheißer", // Smart shitter (know-it-all)
  "Besserwisser", // Better knower (know-it-all)
  "Wichtigtuer", // Important doer (self-important person)
  "Großkotz", // Big vomit (show-off)
  "Angeber", // Show-off
  "Prahlhans", // Boastful Jack (braggart)
  "Aufschneider", // Cutter (braggart)
  "Blender", // Dazzler (fraud)
  "Hochstapler", // Con artist
  "Gauner", // Crook
  "Halunke", // Rogue, scoundrel
  "Tunichtgut", // Do-no-good
  "Schurke", // Villain
  "Schuft", // Scoundrel
  "Strolch", // Tramp, rogue
  "Ganove", // Crook
  "Schnösel", // Snob, snotty person
  "Lackaffe", // Paint ape (vain person)
  "Snob", // Snob
  "Prolet", // Prole
  "Proleten", // Proles (plural)

  // ========================================
  // === Vulgar Compounds ==================
  // ========================================
  "Fotzengesicht", // Cunt face
  "Schwanzgesicht", // Dick face
  "Arschgesicht", // Ass face
  "Pissfotze", // Piss cunt
  "Dreckschwanz", // Dirty dick
  "Kackfotze", // Shit cunt
  "Drecksschlampe", // Dirty slut
  "Scheißfotze", // Shit cunt
  "Scheißhure", // Shit whore
  "Wichsfotze", // Wank cunt
  "Fickfotze", // Fuck cunt
  "Hurenfotze", // Whore cunt
  "Hundesohn", // Dog son
  "Dreckshure", // Dirty whore
  "Drecksficker", // Dirty fucker
  "Scheißwichser", // Shit wanker
  "Fickgesicht", // Fuck face
  "Kackgesicht", // Shit face
  "Arschbackengesicht", // Ass cheek face
  "Vollwichser", // Complete wanker
  "Dummsau", // Dumb sow
  "Stinkfotze", // Stinking cunt
  "Kackspast", // Shit spastic (highly offensive)
  "Dreckspenner", // Dirty bum

  // ========================================
  // === Austrian Dialect ===================
  // ========================================
  "Wappler", // Idiot (Austrian)
  "Dodl", // Idiot (Austrian)
  "Koffer", // Suitcase / Idiot (Austrian)
  "Beidl", // Dick (Austrian)
  "Gspusi", // Affair/fling (Austrian)
  "Oarschgesicht", // Ass face (Austrian dialect)
  "Piefke", // Derogatory for German (Austrian)
  "Sandler", // Bum, vagrant (Austrian)
  "Gfrast", // Brat, pest (Austrian)
  "Krüppel", // Cripple (Austrian/offensive)
  "Tschusch", // Derogatory for foreigner (Austrian)
  "Heisl", // Toilet / Idiot (Austrian)
  "Haberer", // Buddy / Lover (Austrian)
  "Zniachtl", // Runt (Austrian)
  "Oaschlecker", // Ass licker (Austrian)
  "Saubartel", // Dirty old man (Austrian)
  "Brunzkachel", // Piss tile / Someone who pisses themselves (Austrian)
  "Gscherter", // Idiot, buffoon (Austrian)
  "Zipfl", // Tip / Dick (Austrian)
  "Zipfelklatscher", // Dick slapper (Austrian insult)
  "Pülcher", // Rascal, crook (Austrian)
  "Hundskrüppel", // Dog cripple (Austrian insult)
  "Grindkopf", // Scab head (Austrian)

  // ========================================
  // === Swiss German Dialect ===============
  // ========================================
  "Cheib", // Bastard, carcass (Swiss German)
  "Löli", // Idiot (Swiss German)
  "Tubel", // Idiot, fool (Swiss German)
  "Sauniggel", // Dirty pig (Swiss German)
  "Glansen", // Idiot (Swiss German)
  "Schnudergoof", // Snotty kid (Swiss German)
  "Soupansen", // Dirty belly (Swiss German)
  "Souhuere", // Fucking (Swiss intensifier)
  "Huere", // Fucking / Whore (Swiss German)
  "Hueresiech", // Whore bastard (Swiss German)
  "Huerebock", // Whoremonger (Swiss German)
  "Schisser", // Coward / Shitter (Swiss German)
  "Chrüppel", // Cripple (Swiss German)
  "Blöde Chue", // Stupid cow (Swiss German)
  "Gopferteli", // God damn (Swiss German, mild)
  "Gopferdammi", // God damn (Swiss German)
  "Himmelherrgott", // Heaven lord god (Swiss exclamation)
  "Verfluechti", // Cursed (Swiss German)
  "Sauhund", // Pig dog (Swiss/Bavarian)
  "Gigu", // Idiot (Swiss German, Bern)

  // ========================================
  // === Internet / Youth Slang ============
  // ========================================
  "Ehrenlose", // Dishonorable (youth slang insult)
  "Ehrenloser", // Dishonorable man (youth slang)
  "Almansen", // Derogatory for Germans (youth slang)
  "Alman", // Derogatory for stereotypical German (youth slang)
  "Opfer", // Victim / Loser (youth slang)
  "Drecksopfer", // Dirty victim/loser
  "Kek", // Loser (internet slang)
  "Spast", // Spastic (youth slang, offensive)
  "Digga", // Dude (can be used offensively)
  "Huan", // Whore (Turkish-German youth slang)
  "Lan", // Dude (Turkish-German slang, can be offensive)
  "Amk", // Abbreviation: Amına koyayım (Turkish vulgar, used in German youth slang)
  "Huso", // Abbreviation: Hurensohn
  "Spastiko", // Spastic (youth slang, offensive)
  "Bastardkind", // Bastard child
  "Pissnase", // Piss nose (annoying person)

  // ========================================
  // === Vulgar Verbs ======================
  // ========================================
  "bumsen", // To fuck (colloquial)
  "vögeln", // To fuck (lit. to bird)
  "nageln", // To nail / To fuck
  "rammeln", // To mate / To fuck
  "poppen", // To fuck
  "knattern", // To rattle / To fuck
  "flachlegen", // To lay flat / To get someone into bed
  "besteigen", // To mount / To fuck
  "vernaschen", // To devour / To have sex with
  "durchnehmen", // To go through / To fuck hard
  "reinorgeln", // To organ in / To fuck
  "draufsteigen", // To climb on / To fuck
  "bimsen", // To study hard / To fuck
  "pimpern", // To fuck (colloquial)
  "schnackseln", // To fuck (Bavarian/Austrian)
  "rammeldansen", // To mate-dance / To fuck
  "begatten", // To copulate (formal/crude)
  "beschlafen", // To sleep with (archaic/crude)
  "besamen", // To inseminate
  "blasen", // To blow (sexual)
  "einen blasen", // To give a blowjob
  "lecken", // To lick (sexual context)
  "fingern", // To finger (sexual)
  "einen runterholen", // To jerk off
  "sich einen runterholen", // To jerk oneself off
  "abspritzen", // To ejaculate
  "kommen", // To come (orgasm)
  "einen reiten", // To ride one (sexual)
  "entjungfern", // To deflower

  // ========================================
  // === Sexual / Anatomical Terms =========
  // ========================================
  "Orgasmus", // Orgasm
  "Masturbation", // Masturbation
  "Vagina", // Vagina
  "Klitoris", // Clitoris
  "Hodensack", // Scrotum
  "Hoden", // Testicles
  "Vorhaut", // Foreskin
  "Eichel", // Glans
  "Erektion", // Erection
  "Ständer", // Boner (lit. stand)
  "Latte", // Boner (lit. slat)
  "Morgenlatte", // Morning wood
  "Steifen", // Boner
  "Analverkehr", // Anal intercourse
  "Oralverkehr", // Oral intercourse
  "Blowjob", // Blowjob
  "Gangbang", // Gangbang
  "Dreier", // Threesome
  "Nutte", // Hooker, prostitute
  "Prostituierte", // Prostitute
  "Freier", // John (prostitution client)
  "Stricher", // Male prostitute
  "Callboy", // Male escort
  "Callgirl", // Female escort
  "Domina", // Dominatrix
  "Dildo", // Dildo
  "Vibrator", // Vibrator
  "Geilheit", // Horniness
  "geil", // Horny / Awesome (youth slang)
  "notgeil", // Desperately horny
  "spitz", // Horny (lit. pointy)
  "rattig", // Horny (from Ratte - rat)
  "feucht", // Wet (sexual context)
  "Wollust", // Lust
  "Lüstling", // Lecher
  "Lustmolch", // Lust newt (lecher)
  "Spanner", // Peeping Tom
  "Voyeur", // Voyeur
  "Exhibitionist", // Exhibitionist
  "Fetischist", // Fetishist
  "Sadomaso", // Sadomasochism
  "Ficksau", // Fuck pig (sexually promiscuous person)
  "Betthäschen", // Bed bunny (sexually available)
  "Flittchen", // Floozy
  "Schickse", // Shiksa (derogatory for non-Jewish woman)
  "Dorfmatratze", // Village mattress (promiscuous woman)
  "Bordsteinschwalbe", // Curbside swallow (prostitute)
  "Nymphomanin", // Nymphomaniac

  // ========================================
  // === More Insults ======================
  // ========================================
  "Armleuchter", // Chandelier / Euphemistic insult (sounds like Arschloch)
  "Hirnamputierter", // Brain amputee
  "Intelligenzallergiker", // Intelligence allergic person
  "Pfosten", // Post / Idiot
  "Spatzenhirn", // Sparrow brain
  "Hohlkopf", // Hollow head
  "Hohlbirne", // Hollow pear (empty head)
  "Birne", // Pear / Head (derogatory)
  "Holzkopf", // Woodhead
  "Strohkopf", // Straw head
  "Betonkopf", // Concrete head (stubborn idiot)
  "Dickschädel", // Thick skull
  "Dickkopf", // Fat head (stubborn)
  "Blödkopf", // Stupid head
  "Nichtskönner", // Can-do-nothing
  "Nichtsnutz", // Good-for-nothing
  "Tollpatsch", // Clumsy person
  "Trampel", // Stomper (clumsy person)
  "Einfaltspinsel", // Simpleton paintbrush
  "Schlafmütze", // Sleepy cap (lazy/inattentive person)
  "Traumtänzer", // Dream dancer (unrealistic person)
  "Spinner", // Crazy person / Weirdo
  "Spinnerin", // Crazy woman
  "Verrückter", // Crazy man
  "Verrückte", // Crazy woman
  "Geisteskranker", // Mentally ill (offensive)
  "Psychopath", // Psychopath
  "Irrer", // Madman
  "Wahnsinniger", // Insane person
  "Schmarotzer", // Freeloader, parasite
  "Schnorrer", // Moocher
  "Geizhals", // Miser (lit. stingy neck)
  "Geizkragen", // Tightwad (lit. stingy collar)
  "Pfennigfuchser", // Penny pincher
  "Knauserer", // Cheapskate
  "Drückeberger", // Slacker, shirker
  "Faulpelz", // Lazybones
  "Faulenzer", // Slacker
  "Missgestalt", // Misshapen person (offensive)
  "Zwerg", // Dwarf (can be offensive)
  "Fettwanst", // Fat belly
  "Fettkloß", // Fat dumpling
  "Dickerchen", // Fatty (diminutive)
  "Bohnenstange", // Beanpole (too thin)
  "Spargeltarzan", // Asparagus Tarzan (skinny person)
  "Milchgesicht", // Milk face (baby face, immature)
  "Rotznase", // Snot nose (brat)
  "Dreckspatz", // Dirty sparrow (messy child)
  "Lausbub", // Rascal
  "Rotzlöffel", // Snot spoon (brat)
  "Satansbraten", // Satan's roast (devil child)
  "Balg", // Brat
  "Bankert", // Bastard child (archaic)
  "Wechselbalg", // Changeling (unwanted child)
  "Hinterwäldler", // Backwoodsman
  "Bauerntrampel", // Farm stomper (unsophisticated)
  "Landei", // Country egg (hick)
  "Dorftrottel", // Village idiot
  "Stadtaffe", // City ape
  "Saubär", // Dirty bear
  "Drecksvieh", // Dirty beast
  "Mistfink", // Manure finch (dirty person)
  "Stinktier", // Skunk
  "Dreckfink", // Dirt finch (messy person)
  "Schmutzfink", // Dirty finch (messy person)
  "Ferkel", // Piglet (dirty/naughty person)
  "Schweinepriester", // Pig priest (expletive)
  "Saukerl", // Dirty fellow
  "Saumensch", // Dirty person (Bavarian)

  // ========================================
  // === Scheiß- Compounds =================
  // ========================================
  "Scheißwetter", // Shitty weather
  "Scheißtag", // Shitty day
  "Scheißtyp", // Shitty guy
  "Scheißleben", // Shitty life
  "Scheißspiel", // Shitty game
  "Scheißarbeit", // Shitty work
  "Scheißland", // Shitty country
  "Scheißfilm", // Shitty movie
  "Scheißmusik", // Shitty music
  "Scheißidee", // Shitty idea
  "Scheißnacht", // Shitty night
  "Scheißgefühl", // Shitty feeling
  "Scheißverein", // Shitty club
  "Scheißmannschaft", // Shitty team
  "Scheißding", // Shitty thing
  "Scheißauto", // Shitty car
  "Scheißjob", // Shitty job
  "Scheißfrage", // Shitty question
  "Scheißgeld", // Shitty money (no money)
  "Scheißnase", // Shit nose (annoying person)
  "Scheißkopf", // Shit head
  "Scheißhaufen", // Shit pile
  "Scheißangst", // Shit-scared
  "Scheißlaune", // Shitty mood
  "Scheißsituation", // Shitty situation
  "Scheißwitz", // Shitty joke
  "Scheißzustand", // Shitty condition

  // ========================================
  // === Arsch- Compounds ==================
  // ========================================
  "Arschkrampe", // Ass cramp (annoying idiot)
  "Arschpauker", // Ass beater (strict teacher)
  "Arschtritt", // Ass kick
  "Arschkarte", // Ass card (bad luck)
  "Arschnase", // Ass nose
  "Arschwasser", // Ass water (butt sweat)
  "Arschklar", // Ass clear (obviously)
  "Arschbombe", // Ass bomb (cannonball jump)
  "Arschfalte", // Ass crack
  "Arschlochhausen", // Asshole town
  "Arschkäfer", // Ass beetle (annoying person)
  "Arschmade", // Ass maggot
  "Arschpfeife", // Ass whistle (idiot)
  "Arschschweiß", // Ass sweat
  "Arschkacker", // Ass shitter
  "Arschkeks", // Ass cookie (annoying person)
  "Arschrakete", // Ass rocket (insult)

  // ========================================
  // === Fick- Compounds ===================
  // ========================================
  "Fickschlampe", // Fuck slut
  "Fickstück", // Fuck piece
  "Fickmaschine", // Fuck machine
  "Fickhure", // Fuck whore
  "Fickschwein", // Fuck pig
  "Fickdreck", // Fuck dirt
  "Ficker", // Fucker
  "Rumficken", // Fucking around
  "Durchficken", // Fuck through
  "Abficken", // Fuck off / Fuck hard
  "Gefickt", // Fucked
  "Zugefickt", // Fucked up
  "Angefickt", // Pissed off (lit. fucked at)

  // ========================================
  // === Wichs- Compounds ==================
  // ========================================
  "Wichsvorlage", // Wank template (something to wank to)
  "Wichsstube", // Wank room
  "Wichsfleck", // Wank stain
  "Wichslappen", // Wank cloth
  "Wichssocke", // Wank sock
  "Wichsnudel", // Wank noodle (insult)
  "Wichsbirne", // Wank pear (dickhead)
  "Rumwichser", // Wanker around

  // ========================================
  // === Hurensohn Variations ==============
  // ========================================
  "Hurensöhne", // Sons of whores (plural)
  "Hurensprössling", // Whore's offspring
  "Hurenbastard", // Whore bastard
  "Hurendreck", // Whore dirt
  "Hurenpack", // Whore pack
  "Hurenvolk", // Whore folk
  "Hurentreiber", // Whore driver (pimp)
  "Hurerei", // Whoring

  // ========================================
  // === Fotze Compounds ===================
  // ========================================
  "Fotzenkopf", // Cunt head
  "Fotzenschleim", // Cunt slime
  "Fotzenknecht", // Cunt servant (simp)
  "Fotzengeburt", // Cunt birth
  "Dumme Fotze", // Dumb cunt
  "Alte Fotze", // Old cunt
  "Blöde Fotze", // Stupid cunt
  "Fotzenbacke", // Cunt cheek

  // ========================================
  // === Kack- Compounds ===================
  // ========================================
  "Kacknoob", // Shit noob
  "Kackstelze", // Shit stilt (idiot)
  "Kackfresse", // Shit face
  "Kacknase", // Shit nose
  "Kackboon", // Shit noob (gaming slang)
  "Kackpfosten", // Shit post (idiot)
  "Kacklappen", // Shit cloth
  "Kackblag", // Shit brat
  "Kackvieh", // Shit beast
  "Kackstiefel", // Shit boot

  // ========================================
  // === Drecks- Compounds =================
  // ========================================
  "Drecksloch", // Dirty hole (terrible place)
  "Drecksladen", // Dirty shop (terrible place)
  "Drecksvolk", // Dirty people
  "Drecksarbeit", // Dirty work
  "Dreckswetter", // Dirty weather
  "Drecksfresse", // Dirty face
  "Drecksbande", // Dirty gang
  "Drecksnest", // Dirty nest (terrible place)
  "Drecksbalg", // Dirty brat
  "Drecksnase", // Dirty nose (annoying person)
  "Dreckstier", // Dirty beast
  "Drecksding", // Dirty thing
  "Drecksweib", // Dirty woman
  "Drecksjob", // Dirty job

  // ========================================
  // === Piss- Compounds ===================
  // ========================================
  "Pissbude", // Piss booth (terrible place)
  "Pisskopf", // Piss head
  "Pisswetter", // Piss weather
  "Pisstrinker", // Piss drinker
  "Pissflitsche", // Piss slingshot (insult)
  "Pissbacke", // Piss cheek

  // ========================================
  // === Austrian Dialect (Extended) =======
  // ========================================
  "Oida", // Dude / Old man (Austrian exclamation, can be offensive)
  "Geh scheißn", // Go shit yourself (Austrian)
  "Schleich di", // Get lost (Austrian)
  "Schleich dich", // Get lost (Austrian, formal spelling)
  "Gschissener", // Shitty person (Austrian)
  "Gschissene", // Shitty person, female (Austrian)
  "Hawara", // Buddy (Austrian, can be derogatory)
  "Grauslich", // Disgusting (Austrian)
  "Gruaslig", // Disgusting (Austrian dialect)
  "Beidlpracker", // Dick beater (Austrian)
  "Giftler", // Angry person / Drug addict (Austrian)
  "Gifthäusl", // Poison house (angry person, Austrian)
  "Rotzbua", // Snot boy (Austrian)
  "Rotzpipn", // Snot chick (Austrian)
  "Ungustl", // Unpleasant person (Austrian)
  "Wuchtel", // Dumpling / Chubby person (Austrian)
  "Gfrieß", // Ugly face (Austrian)
  "Schirch", // Ugly (Austrian)
  "Schiaß", // Ugly (Austrian variant)
  "Krowod", // Derogatory for Croatian (Austrian)
  "Reibn", // Woman (derogatory, Austrian)
  "Brunzer", // Pisser (Austrian)
  "Scheißhäusl", // Outhouse (Austrian)
  "Bladl", // Stupid person (Austrian)
  "Nudlaug", // Noodle eye / Idiot (Austrian)
  "Gsindel", // Riff-raff (Austrian dialect)
  "Gstinkerter", // Stinky person (Austrian)
  "Grattler", // Scruff, lowlife (Bavarian/Austrian)
  "Gschaftlhuber", // Busybody (Bavarian/Austrian)
  "Zipfiklatscha", // Dick slapper (Austrian/Bavarian dialect)
  "Fotznspangler", // Face slapper (Bavarian/Austrian)
  "Obandler", // Loser/dropout (Austrian)
  "Tramhappert", // Clumsy oaf (Austrian)
  "Gimpel", // Fool (Austrian)
  "Saubua", // Dirty boy (Austrian)
  "Saumagen", // Pig stomach (insult, Austrian)
  "Grausbirne", // Disgusting pear/head (Austrian)
  "Stinkadel", // Stinking nobility (Austrian sarcasm)
  "Wickel", // Trouble / Fight (Austrian)
  "Bock", // Billy goat / Horny man (Austrian)
  "Fetzenschädl", // Rag skull (drunk, Austrian)
  "Gfrastsackl", // Pest bag (Austrian)

  // ========================================
  // === Swiss German (Extended) ===========
  // ========================================
  "Gopfriedstutz", // God damn (Swiss German, mild euphemism)
  "Gopferdelli", // God damn (Swiss German variant)
  "Gopferdeckel", // God damn (Swiss German, mild)
  "Härdöpfel", // Potato / Idiot (Swiss German)
  "Chnull", // Zero / Idiot (Swiss German)
  "Chnuschti", // Idiot (Swiss German)
  "Saucheib", // Dirty bastard (Swiss German)
  "Souglansen", // Fucking idiot (Swiss German)
  "Souniggel", // Filthy pig (Swiss German variant)
  "Soucheib", // Dirty bastard (Swiss German variant)
  "Souluder", // Dirty hussy (Swiss German)
  "Soukerl", // Dirty fellow (Swiss German)
  "Hueredull", // Fucking stupid (Swiss German)
  "Hueretubel", // Fucking idiot (Swiss German)
  "Huerelansen", // Fucking fool (Swiss German)
  "Huerecheib", // Fucking bastard (Swiss German)
  "Huerelöli", // Fucking idiot (Swiss German)
  "Mischtchäfer", // Dung beetle (Swiss German)
  "Dubel", // Idiot (Swiss German variant)
  "Lappi", // Wimp (Swiss German)
  "Lööli", // Idiot (Swiss German variant spelling)
  "Gschmöis", // Vermin (Swiss German)
  "Chlapf", // Slap / Idiot (Swiss German)
  "Gaggi", // Poo (Swiss German, childish)
  "Fuudi", // Ass (Swiss German)
  "Arschgeigeli", // Little ass violin (Swiss German diminutive)
  "Figgscheissdreck", // Fuck-shit-dirt (Swiss German triple compound)
  "Seich", // Piss / Nonsense (Swiss German)
  "Seichbüetel", // Piss bag (Swiss German)
  "Stürmi", // Crazy person (Swiss German)
  "Blödi Chue", // Stupid cow (Swiss German variant)
  "Choge", // Dirty/ugly (Swiss German, Bern)
  "Häfeli", // Pot / Toilet / Idiot (Swiss German)

  // ========================================
  // === Bavarian Dialect (Extended) =======
  // ========================================
  "Deifi", // Devil (Bavarian)
  "Deifei", // Devil (Bavarian variant)
  "Kruzifixhalleluja", // Crucifix hallelujah (Bavarian exclamation)
  "Kruzifix", // Crucifix (Bavarian swear)
  "Kruzitürken", // Crucifix Turks (Bavarian exclamation)
  "Sakrament", // Sacrament (Bavarian swear)
  "Sakra", // Damn (Bavarian abbreviation)
  "Himmiherrgottsakrament", // Heaven lord god sacrament (Bavarian)
  "Zefix", // Damn (Bavarian, from Kruzifix)
  "Himmiarschundzwirn", // Heaven ass and thread (Bavarian)
  "Saubazi", // Dirty rascal (Bavarian)
  "Saudepp", // Dirty idiot (Bavarian)
  "Saudumm", // Pig-stupid (Bavarian)
  "Saugfrast", // Dirty pest (Bavarian)
  "Saugut", // Pig-good (intensifier, Bavarian)
  "Bazi", // Rascal (Bavarian)
  "Lausbua", // Rascal boy (Bavarian)
  "Biestige Krot", // Nasty toad (Bavarian)
  "Grantler", // Grumpy person (Bavarian)
  "Griabiger Hund", // Grubby dog (Bavarian)
  "Wadlbeißer", // Calf biter (Bavarian, annoying person)
  "Schnepfe", // Snipe / Stuck-up woman (Bavarian)
  "Zwutschgerl", // Little twerp (Bavarian)
  "Drecksgsicht", // Dirty face (Bavarian)
  "Brunzkübel", // Piss bucket (Bavarian)
  "Hund", // Dog (used as insult in Bavarian)
  "Luasch", // Slob (Bavarian)
  "Rotzglockn", // Snot bell (Bavarian)
  "Rotzleffl", // Snot spoon (Bavarian)
  "Bisgurke", // Bite cucumber / Nasty person (Bavarian)
  "Damischer Hund", // Dazed/stupid dog (Bavarian)
  "Gschwollschädl", // Swollen skull (Bavarian)
  "Bloßfüßiger", // Barefooted one / Bumpkin (Bavarian)

  // ========================================
  // === Northern German / Plattdeutsch ====
  // ========================================
  "Dull", // Crazy (Plattdeutsch)
  "Dullkopp", // Crazy head (Plattdeutsch)
  "Tull", // Fool (Plattdeutsch)
  "Dösbaddel", // Dozy idiot (Northern German)
  "Döskopp", // Dozey head (Northern German)
  "Labskansen", // Labskaus people (Northern German)
  "Klootbüdel", // Ball bag (Plattdeutsch, testicle insult)
  "Klootzak", // Ball sack (Plattdeutsch)
  "Lansen", // Fool (Plattdeutsch)
  "Nocken", // Idiot (Plattdeutsch)
  "Bangbüx", // Scaredy pants (Plattdeutsch)
  "Sabbeltansen", // Dribble chick (Plattdeutsch)
  "Schieter", // Shitter (Plattdeutsch)
  "Schietbüdel", // Shit bag (Plattdeutsch)
  "Lüttje Schiet", // Little shit (Plattdeutsch)
  "Kladderadatsch", // Mess / Crash (Northern German)
  "Mors", // Ass (Plattdeutsch)
  "Morsakrobat", // Ass acrobat (Plattdeutsch)
  "Söten", // Sweet / Sarcastic insult (Plattdeutsch)
  "Dussel", // Dozy person (Northern German)
  "Dusselig", // Dozy (Northern German)
  "Döspaddel", // Dozy paddle (Northern German variant)
  "Torfkopp", // Peat head (Northern German)
  "Pansen", // Paunch / Fat person (Northern German)

  // ========================================
  // === Homophobic / Transphobic Slurs ====
  // ========================================
  "Tunte", // Fairy, queen (derogatory for gay/effeminate man)
  "Warme", // Warm one (derogatory for gay man)
  "Warmer Bruder", // Warm brother (derogatory for gay man)
  "Hinterlader", // Rear-loader (derogatory for gay man)
  "Schwuppe", // Derogatory for gay man
  "Homo", // Homo (used derogatorily)
  "Kampfschwuchtel", // Battle faggot
  "Schublade", // Drawer / Closet case (derogatory)
  "Zwitter", // Hermaphrodite (used derogatorily for intersex/trans)
  "Mannweib", // Man-woman (derogatory for masculine woman)
  "Weibmann", // Woman-man (derogatory for feminine man)
  "Kesser Vater", // Butch lesbian (derogatory)
  "Flunder", // Flounder / Flat-chested woman (derogatory)

  // ========================================
  // === Ethnic / Racial Slurs =============
  // ========================================
  "Kanakenpack", // Slur for foreigners (pack)
  "Zigeuner", // Gypsy (offensive for Roma/Sinti)
  "Zigeunerbande", // Gypsy gang (very offensive)
  "Zigeunerpack", // Gypsy pack (very offensive)
  "Zigeunergesindel", // Gypsy riff-raff (very offensive)
  "Bimbo", // Derogatory for Black person (German usage)
  "Mohr", // Moor (outdated, offensive for Black person)
  "Schwarzkopf", // Blackhead (derogatory for dark-haired foreigners)
  "Kameltreiber", // Camel driver (offensive for Arabs)
  "Kümmelfresser", // Cumin eater (offensive for Turks)
  "Knoblauchfresser", // Garlic eater (offensive for Southern Europeans)
  "Froschfresser", // Frog eater (offensive for French)
  "Inselaffe", // Island ape (offensive for British)
  "Kartoffelfresser", // Potato eater (offensive for Germans, used by foreigners)
  "Reisfresser", // Rice eater (offensive for East Asians)
  "Spaghettifresser", // Spaghetti eater (offensive for Italians)
  "Spaghettiträger", // Spaghetti carrier (offensive for Italians)
  "Russenschwein", // Russian pig
  "Polenschwein", // Polish pig
  "Judenschwein", // Jew pig (extremely offensive)
  "Judensau", // Jew sow (extremely offensive, historical)
  "Moslem", // Muslim (can be used derogatorily in context)
  "Musel", // Derogatory for Muslim
  "Muselmane", // Derogatory for Muslim (archaic)
  "Hottentotte", // Hottentot (extremely offensive for Black Africans)
  "Fidschi", // Derogatory for Vietnamese/East Asian (East German)
  "Ching Chang Chong", // Mocking East Asian languages
  "Nafri", // Derogatory for North African
  "Untermensch", // Subhuman (Nazi terminology, extremely offensive)
  "Rassenschande", // Race shame (Nazi terminology)
  "Volksverräter", // Traitor of the people (far-right slur)

  // ========================================
  // === Internet / Youth Slang (Extended) =
  // ========================================
  "HSO", // Abbreviation: Hurensohn (internet)
  "WTF", // Already used in German internet culture
  "Ehrenlos", // Dishonorable (youth slang)
  "Hartzer", // Welfare recipient (derogatory, from Hartz IV)
  "Asi", // Short for Asozial (antisocial/trashy)
  "Assi", // Short for Asozial variant
  "Asoziale", // Antisocial person (derogatory)
  "Asozialer", // Antisocial person, male (derogatory)
  "Asiate", // Asian (can be derogatory in context)
  "Babo", // Boss (youth slang, can be offensive)
  "Habibi", // My love (Arabic, used mockingly in German)
  "Hayvan", // Animal (Turkish, used in German youth slang as insult)
  "Moruk", // Old man (Turkish, used in German youth slang)
  "Kahba", // Whore (Arabic, used in German youth slang)
  "Sharmuta", // Whore (Arabic, used in German youth slang)
  "Kelb", // Dog (Arabic insult, used in German youth slang)
  "Ya Kelb", // You dog (Arabic insult in German)
  "Ibn el Sharmouta", // Son of a whore (Arabic, used in German)
  "Wallah", // I swear (Arabic, used mockingly)
  "Harakiri", // Suicide (used as insult for recklessness)
  "Noob", // Newbie/idiot (gaming slang)
  "Tryhard", // Try-hard (gaming insult)
  "Abgefuckt", // Fucked up (youth slang)
  "Abgefickt", // Fucked up variant
  "Pimmelnase", // Dick nose
  "Pimmelkopf", // Dickhead
  "Pimmelgesicht", // Dick face
  "Dreckslauch", // Dirty leek (skinny loser, youth slang)
  "Lauch", // Leek (skinny loser, youth slang)
  "Ehrenmann", // Honor man (sarcastic, can be offensive)
  "Kackbratzen", // Shit mugs (plural)
  "Otto", // Idiot (youth slang)
  "Gerda", // Basic/boring person (youth slang)

  // ========================================
  // === More Vulgar Verbs =================
  // ========================================
  "anpissen", // To piss on / To annoy
  "vollpissen", // To piss all over
  "zuscheißen", // To shit on / close
  "vollkotzen", // To vomit all over
  "ankotzen", // To make someone nauseous / To annoy
  "anschwulen", // To act gay towards (offensive)
  "anbaggern", // To hit on (aggressively)
  "aufreißen", // To pick up (sexually)
  "ablecken", // To lick off (sexual)
  "runterholen", // To jerk off
  "abwichsen", // To wank off
  "abblasen", // To blow off (sexual)
  "ranmachen", // To come on to
  "zuballern", // To get wasted
  "volllaufen", // To get hammered
  "saufen", // To drink heavily
  "besoffen", // Drunk (vulgar)
  "vollgesoffen", // Completely drunk
  "zugedröhnt", // Stoned out
  "zugeknallt", // Wasted
  "dichtmachen", // To get wasted

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "Gruppensex", // Group sex
  "Analsex", // Anal sex
  "Oralsex", // Oral sex
  "Fisten", // Fisting
  "Deepthroat", // Deep throat
  "Creampie", // Creampie
  "Facesitting", // Face sitting
  "Rimming", // Rimming
  "Bukkake", // Bukkake
  "Cumshot", // Cumshot
  "Samenerguss", // Ejaculation
  "Schwanzreiten", // Dick riding
  "Arschfick", // Ass fuck
  "Mundverkehr", // Oral sex (lit. mouth traffic)
  "Natursekt", // Golden shower (lit. natural champagne)
  "Kaviar", // Scat (lit. caviar)
  "Quickie", // Quickie
  "Steifer", // Hard-on
  "Bumsladen", // Fuck shop (brothel)
  "Puff", // Brothel (colloquial)
  "Bordell", // Brothel
  "Lusthaus", // Pleasure house (brothel)
  "Freudenmädchen", // Joy girl (prostitute)
  "Strichjunge", // Rent boy
  "Lustsklave", // Sex slave

  // ========================================
  // === Body Part Vulgarities =============
  // ========================================
  "Arschritze", // Ass crack
  "Arschkerbe", // Ass notch
  "Schamlippen", // Labia (vulgar in context)
  "Brustwarze", // Nipple (vulgar in context)
  "Möse", // Pussy (vulgar)
  "Mösenlecker", // Pussy licker
  "Mösengesicht", // Pussy face
  "Klöten", // Balls (Northern German vulgar)
  "Nille", // Dick (slang)
  "Schwengel", // Dick (lit. clapper)
  "Riemen", // Dick (lit. strap)
  "Rohr", // Dick (lit. pipe)
  "Prengel", // Dick (slang)
  "Gurke", // Cucumber / Dick (slang)
  "Lümmel", // Lout / Dick (slang)
  "Lümmelkäse", // Dick cheese (smegma)
  "Smegma", // Smegma
  "Hintern", // Behind / Butt
  "Gesäß", // Buttocks (formal but crude in context)
  "Pobacke", // Butt cheek
  "Popo", // Butt (childish)
  "Titte", // Tit (singular)
  "Nippel", // Nipple (vulgar)
  "Rosette", // Rosette / Anus (slang)

  // ========================================
  // === Du dumme... Compound Insults ======
  // ========================================
  "Du dumme Sau", // You dumb sow
  "Blöde Kuh", // Stupid cow
  "Dumme Schlampe", // Dumb slut
  "Du Arsch", // You ass
  "Du Wichser", // You wanker
  "Du Hurensohn", // You son of a whore
  "Du Missgeburt", // You miscarriage (very offensive)
  "Du Spast", // You spastic
  "Du Penner", // You bum
  "Du Vollidiot", // You complete idiot
  "Du Opfer", // You victim/loser
  "Du Fickfehler", // You fucking mistake
  "Du Arschgeburt", // You ass birth
  "Du Sohn einer Hure", // You son of a whore
  "Dreckige Hure", // Dirty whore
  "Blöde Schlampe", // Stupid slut
  "Alte Schlampe", // Old slut
  "Billige Nutte", // Cheap hooker
  "Fette Sau", // Fat sow
  "Fetter Sack", // Fat sack
  "Hässliche Kuh", // Ugly cow

  // ========================================
  // === Sau- Compounds ====================
  // ========================================
  "Saublöd", // Pig-stupid
  "Saukalt", // Pig-cold (very cold)
  "Saufrech", // Pig-cheeky (very rude)
  "Saudoof", // Pig-dumb
  "Saugeil", // Pig-horny/awesome
  "Sauwetter", // Pig weather (bad weather)
  "Sauerei", // Piggery (outrage/mess)
  "Schweinerei", // Piggery (outrage)
  "Sauladen", // Pig shop (badly run place)
  "Saufkumpan", // Drinking buddy (derogatory)
  "Säufer", // Drunkard
  "Säuferin", // Drunkard (female)
  "Suffkopp", // Booze head
  "Suffnase", // Booze nose

  // ========================================
  // === Stink- Compounds ==================
  // ========================================
  "Stinker", // Stinker
  "Stinkefinger", // Middle finger (lit. stink finger)
  "Stinksack", // Stink bag
  "Stinkmorchel", // Stinkhorn (disgusting person)
  "Stinkwanze", // Stink bug (annoying person)
  "Stinknase", // Stink nose

  // ========================================
  // === Voll- Compounds ===================
  // ========================================
  "Volltrottel", // Complete fool
  "Volldepp", // Complete moron
  "Vollspacken", // Complete idiot (Northern German)
  "Vollspast", // Complete spastic (offensive)
  "Vollasis", // Complete anti-socials
  "Vollaffe", // Complete ape
  "Vollpimmel", // Complete dick

  // ========================================
  // === Schimpfwörter (Misc Swear Words) ==
  // ========================================
  "Drecksaffe", // Dirty ape
  "Drecksschwein", // Dirty pig
  "Ratte", // Rat (insult)
  "Kakerlake", // Cockroach (insult)
  "Rattenfänger", // Rat catcher (demagogue)
  "Ochse", // Ox (stupid person)
  "Hammel", // Ram (stupid person)
  "Esel", // Donkey (stupid person)
  "Kamel", // Camel (stupid person)
  "Affe", // Ape (stupid person)
  "Halbmensch", // Half-person (derogatory)
  "Kretin", // Cretin
  "Kretine", // Cretin (female)
  "Degenerierer", // Degenerate
  "Schädling", // Pest (dehumanizing insult)
  "Gesocks", // Scum, riff-raff
  "Kroppzeug", // Rubbish people
  "Plebs", // Plebs
  "Pöbel", // Mob, rabble
  "Abfall", // Garbage (as insult)
  "Müll", // Trash (as insult)
  "Drecksmensch", // Dirty human
  "Unmensch", // Inhuman person
  "Scheusal", // Monster, wretch
  "Widerling", // Repulsive person
  "Ekel", // Disgust / Disgusting person
  "Grind", // Scab (insult, Austrian/Swiss)
  "Grindiger", // Scabby person
  "Schmutziger Hund", // Dirty dog
  "Fauler Sack", // Lazy sack
  "Blöder Hund", // Stupid dog
  "Alter Sack", // Old sack (old fart)
  "Sackgfrieß", // Sack face (Austrian)
  "Giftspritzer", // Poison sprayer (nasty person)
  "Giftnatter", // Poison adder (nasty woman)
  "Giftschlange", // Poison snake (nasty woman)
  "Hexe", // Witch (insult)
  "Xanthippe", // Xanthippe (nagging woman)
  "Drachen", // Dragon (nagging woman)
  "Schreckschraube", // Fright screw (ugly/annoying woman)
  "Nachtschaden", // Night damage (ugly person)
  "Vogelscheuche", // Scarecrow (ugly person)
  "Mondgesicht", // Moon face (round-faced insult)
  "Froschgesicht", // Frog face
  "Rattengesicht", // Rat face
  "Schweinegesicht", // Pig face
  "Hundegesicht", // Dog face
  "Fratze", // Mug, grimace (ugly face)
  "Hackfratze", // Mug face (very ugly)
  "Visage", // Mug (derogatory for face)
  "Drecksvisage", // Dirty mug

  // ========================================
  // === Spelling Evasions / Leetspeak =====
  // ========================================
  // --- Scheiße evasions ---
  "Sch3iße", // Shit (leetspeak)
  "Sche1sse", // Shit (leetspeak)
  "Sch3isse", // Shit (leetspeak)
  "Sch*iße", // Shit (censored)
  "Sch*isse", // Shit (censored)
  "Scheize", // Shit (misspelling evasion)
  "Schaise", // Shit (phonetic evasion)
  "Schaisse", // Shit (phonetic evasion)
  "Scheiβe", // Shit (Greek beta substitution)
  "Sch3iss3", // Shit (leetspeak)
  "Scheiss", // Shit (truncated)
  "Scheis", // Shit (truncated)
  "Scheissdreck", // Shit-dirt (ss variant)
  // --- Fick evasions ---
  "f1ck", // Fuck (leetspeak)
  "f!ck", // Fuck (censored)
  "f1cken", // Fuck (leetspeak)
  "f!cken", // Fuck (censored)
  "fick3n", // Fuck (leetspeak)
  "F*ck", // Fuck (censored)
  "F*cken", // Fuck (censored)
  "Fickn", // Fuck (truncated)
  "Phick", // Fuck (ph substitution)
  "Phicken", // Fuck (ph substitution)
  // --- Arschloch evasions ---
  "4rschloch", // Asshole (leetspeak)
  "Arschl0ch", // Asshole (leetspeak)
  "4rschl0ch", // Asshole (leetspeak)
  "A*schloch", // Asshole (censored)
  "Arschl*ch", // Asshole (censored)
  "Arsch1och", // Asshole (leetspeak)
  // --- Fotze evasions ---
  "F0tze", // Cunt (leetspeak)
  "Fo7ze", // Cunt (leetspeak)
  "F*tze", // Cunt (censored)
  "Fotz3", // Cunt (leetspeak)
  "F0tz3", // Cunt (leetspeak)
  "Fotse", // Cunt (misspelling evasion)
  // --- Hurensohn evasions ---
  "Hur3nsohn", // Son of a whore (leetspeak)
  "Hur3ns0hn", // Son of a whore (leetspeak)
  "Hurens0hn", // Son of a whore (leetspeak)
  "H*rensohn", // Son of a whore (censored)
  "Hurensон", // Son of a whore (cyrillic substitution)
  "Hurrensohn", // Son of a whore (doubled letter)
  // --- Wichser evasions ---
  "W1chser", // Wanker (leetspeak)
  "W!chser", // Wanker (censored)
  "Wichsr", // Wanker (truncated)
  "W*chser", // Wanker (censored)
  // --- Missgeburt evasions ---
  "M1ssgeburt", // Miscarriage (leetspeak)
  "Missgebuhrt", // Miscarriage (phonetic evasion)
  "Miß geburt", // Miscarriage (old spelling with space)
  // --- Schwuchtel evasions ---
  "Schwucht3l", // Faggot (leetspeak)
  "Schw*chtel", // Faggot (censored)
  // --- Other evasions ---
  "Sp4st", // Spastic (leetspeak)
  "Sp@st", // Spastic (leetspeak)
  "H*re", // Whore (censored)
  "Schl*mpe", // Slut (censored)
  "N*ger", // Negro (censored slur)
  "K*nake", // Slur (censored)

  // ========================================
  // === Scheiß- Compounds (Extended) ======
  // ========================================
  "Scheißhund", // Shit dog
  "Scheißbude", // Shit booth (terrible place)
  "Scheißloch", // Shithole
  "Scheißer", // Shitter
  "Scheißerle", // Little shitter (Swabian)
  "Scheißeimer", // Shit bucket
  "Scheißstück", // Shit piece
  "Scheißpack", // Shit pack (terrible people)
  "Scheißvolk", // Shit people
  "Scheißgesicht", // Shit face
  "Scheißficker", // Shit fucker
  "Scheißnudel", // Shit noodle
  "Scheißbirne", // Shit pear (stupid head)
  "Scheißbratze", // Shit mug
  "Scheißpfosten", // Shit post (idiot)
  "Scheißspieler", // Shit player
  "Scheißschule", // Shit school
  "Scheißstadt", // Shit city
  "Scheißfamilie", // Shit family
  "Scheißfreund", // Shit friend
  "Scheißkarre", // Shit car
  "Scheißhandy", // Shit phone
  "Scheißcomputer", // Shit computer
  "Scheißpartei", // Shit party (political)
  "Scheißregierung", // Shit government
  "Scheißpolizei", // Shit police
  "Scheißbullen", // Shit cops

  // ========================================
  // === Arsch- Compounds (Extended) =======
  // ========================================
  "Arschlochdorf", // Asshole village
  "Arschkrampen", // Ass cramps (plural)
  "Arschlochfreund", // Asshole friend
  "Arschlochmove", // Asshole move
  "Arschkind", // Ass child
  "Arschgeboren", // Ass-born
  "Arschwurst", // Ass sausage
  "Arschzapfen", // Ass plug
  "Arschlochverein", // Asshole club
  "Arschclown", // Ass clown
  "Arschtrompete", // Ass trumpet (farter)
  "Arschschlecker", // Ass licker (variant)
  "Arschbackenbrot", // Ass cheek bread (gross image)

  // ========================================
  // === Fick- Compounds (Extended) ========
  // ========================================
  "Fickfratze", // Fuck mug
  "Fickfinger", // Fuck finger
  "Ficknudel", // Fuck noodle
  "Fickbirne", // Fuck head (lit. pear)
  "Ficknase", // Fuck nose
  "Ficklaune", // Fucking mood
  "Fickwurst", // Fuck sausage
  "Fickbolzen", // Fuck bolt
  "Fickpaddel", // Fuck paddle
  "Ficklappen", // Fuck cloth
  "Fickscheibe", // Fuck disc (insult)
  "Fick dich ins Knie", // Fuck yourself in the knee

  // ========================================
  // === Wichs- Compounds (Extended) =======
  // ========================================
  "Wichsbeutel", // Wank bag
  "Wichsgesicht", // Wank face
  "Wichsgrafik", // Wank graphic (porn)
  "Wichsstange", // Wank rod
  "Wichser-Gesicht", // Wanker face (hyphenated)
  "Runterwichsen", // To wank off

  // ========================================
  // === Kack- Compounds (Extended) ========
  // ========================================
  "Kackdreck", // Shit dirt
  "Kackscheibe", // Shit disc
  "Kackhaufen", // Shit pile
  "Kackwichser", // Shit wanker
  "Kacksack", // Shit sack
  "Kackaffe", // Shit ape
  "Kackpenner", // Shit bum
  "Kackmongo", // Shit mongoloid (highly offensive)
  "Kackspinner", // Shit weirdo
  "Kackratte", // Shit rat
  "Kackeier", // Shit eggs

  // ========================================
  // === Drecks- Compounds (Extended) ======
  // ========================================
  "Dreckstrottel", // Dirty fool
  "Drecksdepp", // Dirty moron
  "Drecksgesindel", // Dirty riff-raff
  "Drecksproll", // Dirty prole
  "Dreckspack", // Dirty pack (scum)
  "Dreckslümmel", // Dirty lout
  "Drecksmongo", // Dirty mongoloid (highly offensive)
  "Drecksbulle", // Dirty cop
  "Drecksidiot", // Dirty idiot
  "Dreckslustig", // Dirty funny (sarcastically)
  "Dreckstyp", // Dirty dude
  "Drecksgöre", // Dirty brat (female)
  "Dreckskind", // Dirty child
  "Drecksheini", // Dirty fellow
  "Drecksniete", // Dirty dud
  "Dreckswichser", // Dirty wanker
  "Drecksfotzengesicht", // Dirty cunt face
  "Drecksmaul", // Dirty mouth

  // ========================================
  // === Piss- Compounds (Extended) ========
  // ========================================
  "Pissfresse", // Piss face
  "Pissnudel", // Piss noodle (insult)
  "Pissbirne", // Piss pear (stupid head)
  "Pissfleck", // Piss stain
  "Pisskröte", // Piss toad (annoying child)
  "Pisssack", // Piss sack
  "Pisspott", // Piss pot
  "Pisswarze", // Piss wart
  "Pisskind", // Piss kid
  "Pissarsch", // Piss ass

  // ========================================
  // === Sau- Compounds (Extended) =========
  // ========================================
  "Saudreck", // Pig dirt
  "Saufotze", // Pig cunt
  "Saupack", // Pig pack
  "Sauvieh", // Pig beast
  "Sauglatt", // Pig smooth (very slippery)
  "Saukopf", // Pig head
  "Saugesicht", // Pig face
  "Sauweib", // Pig woman
  "Saufraß", // Pig feed (terrible food)
  "Sauhaufen", // Pig pile (disorderly group)
  "Saustall", // Pigsty (messy place)
  "Saumist", // Pig manure
  "Sauarsch", // Pig ass
  "Saupfote", // Pig paw (messy handwriting)
  "Saumaul", // Pig mouth (foul-mouthed)
  "Sauschwein", // Pig pig (double intensifier)
  "Sauhure", // Pig whore
  "Sauluder", // Pig hussy
  "Saumäßig", // Pig-like (terrible)
  "Saunickel", // Dirty rascal

  // ========================================
  // === Vulgar Phrases (Extended) =========
  // ========================================
  "Geh ficken", // Go fuck
  "Verpiss dich", // Piss off
  "Verzieh dich", // Get lost
  "Fahr zur Hölle", // Go to hell
  "Du kannst mich mal", // You can (kiss my ass - implied)
  "Halt die Fresse", // Shut the fuck up
  "Halt dein Maul", // Shut your mouth (vulgar)
  "Leck mich doch", // Lick me (dismissive)
  "Lutsch meinen Schwanz", // Suck my dick
  "Blas mir einen", // Blow me one
  "Du Stück Scheiße", // You piece of shit
  "Du dreckiges Stück", // You dirty piece
  "Geh sterben", // Go die
  "Friss Scheiße", // Eat shit
  "Scheiß auf dich", // Shit on you
  "Du kannst mich am Arsch lecken", // You can lick my ass
  "In den Arsch ficken", // Fuck in the ass
  "Ich scheiß auf dich", // I shit on you
  "Fick deine Mutter", // Fuck your mother
  "Deine Mutter", // Your mother (implied insult)
  "Deine Mudda", // Your mom (youth slang)
  "Deine Mutter ist eine Hure", // Your mother is a whore
  "Du bist so dumm", // You are so stupid
  "Halt die Schnauze", // Shut your snout
  "Schnauze halten", // Keep your snout shut
  "Fresse halten", // Keep your face shut
  "Maul halten", // Keep your mouth shut
  "Leck mich kreuzweise", // Lick me crosswise
  "Scher dich zum Teufel", // Get to the devil
  "Hol dich der Teufel", // May the devil get you
  "Geh zum Teufel", // Go to the devil
  "Zieh Leine", // Pull rope (get lost)
  "Hau dich in die Pfanne", // Fry yourself
  "Rutsch mir den Buckel runter", // Slide down my hump
  "Leck mich fett", // Lick me fat (expression of shock)
  "Du Stück Dreck", // You piece of dirt
  "Mach dich vom Acker", // Get off the field (get lost)
  "Verrecke", // Drop dead (very harsh)
  "Krepier", // Croak (drop dead)
  "Du Affe", // You ape
  "Du Schwein", // You pig
  "Du Dreckschwein", // You dirty pig
  "Du Hund", // You dog
  "Du Ratte", // You rat
  "Du Made", // You maggot
  "Du Wurm", // You worm

  // ========================================
  // === Austrian Dialect (Extended 2) =====
  // ========================================
  // --- Geh... phrases ---
  "Geh in Oasch", // Go into the ass (Austrian)
  "Geh bitte", // Oh please / Expression of disbelief (Austrian)
  "Geh Scheißn geh", // Go take a shit (Austrian)
  "Geh ma weg", // Get away from me (Austrian)
  "Geh di scheißn", // Go shit yourself (Austrian variant)
  "Geh di pickn", // Go get stuck (Austrian)
  "Geh ma net am Oasch", // Don't bother my ass (Austrian)
  // --- More Viennese ---
  "Beidlschluderer", // Dick shaker (Viennese)
  "Beidlkraxler", // Dick climber (Viennese)
  "Gschupfter Fansen", // Pushed wench (Viennese)
  "Gstopfter", // Stuffed one / Rich snob (Viennese)
  "Gschwollna", // Swollen one / Arrogant person (Viennese)
  "Gscher", // Fuss / Nuisance (Viennese)
  "Grasdackel", // Grass dachshund / Clumsy idiot (Austrian)
  "Hirsch", // Deer / Idiot (Austrian slang)
  "Lackl", // Big oaf (Austrian)
  "Löd", // Terrible / Lazy (Austrian)
  "Oarschgeign", // Ass violin (Austrian dialect)
  "Oarschkriacha", // Ass creeper (Austrian dialect)
  "Oarschlecha", // Ass licker (Austrian dialect)
  "Pfrnak", // Fiddler / Weirdo (Austrian)
  "Protz", // Show-off (Austrian)
  "Pracker", // Beater / Loser (Austrian)
  "Schas", // Fart (Austrian)
  "Schasaugat", // Fart-eyed / blind (Austrian)
  "Scheiblkratzer", // Disc scratcher / Stingy person (Austrian)
  "Schnaxln", // To fuck (Austrian)
  "Tussi", // Bimbo (Austrian/German)
  "Weh", // Wimp (Austrian)
  "Gfraster", // Pest variant (Austrian)
  "Zaundürrer", // Fence-thin person (Austrian)
  "Deppata", // Stupid one (Austrian dialect)
  "Blunzn", // Blood sausage / Unattractive woman (Austrian)
  "Gfickte Sau", // Fucked sow (Austrian)
  "Schleich dich du Oaschloch", // Get lost you asshole (Austrian)
  // --- Carinthian ---
  "Toifi", // Devil (Carinthian)
  "Sauloter", // Pig slob (Carinthian)
  "Pflonz", // Liar / Bullshitter (Carinthian)
  "Noigschmeckter", // Newcomer (derogatory, Carinthian)
  // --- Tyrolean ---
  "Lattl", // Idiot (Tyrolean)
  "Luig", // Liar (Tyrolean)
  "Schepas", // Fool (Tyrolean)
  "Topfn", // Curd / Nonsense (Tyrolean)
  "Nudlaugat", // Noodle eyed / Dimwit (Tyrolean)
  // --- Styrian ---
  "Graml", // Grumpy person (Styrian)
  "Stiaga", // Annoying person (Styrian)
  "Stingata", // Stinky person (Styrian)
  "Dalkert", // Stupid (Styrian/Austrian)

  // ========================================
  // === Swiss German (Extended 2) =========
  // ========================================
  // --- Gopf- compounds ---
  "Gopferteckel", // God damn (Swiss German)
  "Gopfertori", // God damn (Swiss German)
  "Gopferdinggel", // God damn (Swiss German)
  "Gopfernochmal", // God damn again (Swiss German)
  "Gopfertamisiech", // God damn bastard (Swiss German)
  "Gopferdammisiech", // God damn bastard (Swiss German variant)
  // --- More Swiss compounds ---
  "Souchog", // Pig dirty (Swiss German, Bern)
  "Sousaich", // Pig mess (Swiss German)
  "Soutubel", // Pig idiot (Swiss German)
  "Soulappi", // Pig wimp (Swiss German)
  "Soulansen", // Pig fool (Swiss German)
  "Soudepp", // Pig moron (Swiss German)
  "Souhund", // Pig dog (Swiss German variant)
  "Soubock", // Pig buck (Swiss German)
  "Souscheiss", // Pig shit (Swiss German)
  "Hueresohn", // Whore's son (Swiss German)
  "Huerefotze", // Whore cunt (Swiss German)
  "Huereguet", // Fucking good (Swiss German intensifier)
  "Huereschlächt", // Fucking bad (Swiss German)
  "Hueremischt", // Whore manure (Swiss German)
  "Huerewieche", // Fucking soft (Swiss German)
  "Hueresaich", // Whore mess (Swiss German)
  "Hueretrottel", // Fucking fool (Swiss German)
  "Huerescheiss", // Whore shit (Swiss German)
  // --- Zurich dialect ---
  "Sieche", // Bastard (Zurich dialect)
  "Cheibsgoofe", // Bastard kids (Zurich)
  "Cheibssiech", // Bastard plague (Zurich)
  "Chaib", // Bastard (Zurich variant)
  "Schaafseckel", // Sheep scrotum (Zurich insult)
  "Seckel", // Scrotum / Idiot (Zurich)
  "Seckl", // Scrotum (Zurich variant)
  "Scheisssiech", // Shit bastard (Zurich)
  // --- Bern dialect ---
  "Gigusohn", // Idiot's son (Bernese)
  "Luusbueb", // Rascal boy (Bernese)
  "Souchoger", // Dirty one (Bernese)
  // --- Basel dialect ---
  "Schnuddergoof", // Snotty kid (Basel)
  "Dabisch", // Stupid (Basel)
  // --- Luzern dialect ---
  "Löu", // Idiot (Luzern)
  "Tschumpel", // Fool (Luzern)

  // ========================================
  // === Bavarian / Southern German (Ext) ==
  // ========================================
  "Saupreiss", // Dirty Prussian (Bavarian variant)
  "Saugrantiger", // Pig grumpy person (Bavarian)
  "Sauglump", // Pig scoundrel (Bavarian)
  "Saudackel", // Pig dachshund (Bavarian idiot)
  "Sauhautn", // Pig skin (Bavarian, worthless)
  "Sauzustand", // Pig condition (Bavarian, terrible state)
  "Sauereiverein", // Piggery club (Bavarian)
  "Kreuzfix", // Crucifix (Bavarian exclamation variant)
  "Herrgottsakra", // Lord god damn (Bavarian)
  "Leckts mi", // Lick me (Bavarian dialect)
  "Leckts mi am Oasch", // Lick my ass (Bavarian dialect)
  "Jessas", // Jesus (Bavarian exclamation)
  "Jessas Maria", // Jesus Mary (Bavarian exclamation)
  "Kruzefünferl", // Crucifix fiver (Bavarian mild swear)
  "Fixlaudn", // Damn (Bavarian exclamation)
  "Himmelsakra", // Heaven damn (Bavarian)
  "Himmiherrgott", // Heaven lord god (Bavarian variant)
  "Bisgurn", // Nasty woman (Bavarian)
  "Dreckhammel", // Dirty ram (Bavarian)
  "Dreckhirsch", // Dirty deer (Bavarian)
  "Saubergl", // Pig mountain (Bavarian)
  "Oachkatzlschwoaf", // Squirrel tail (Bavarian tongue twister, mild insult)
  "Hodalump", // Testicle ragamuffin (Bavarian)
  "Gfrieswarzerl", // Face wart (Bavarian)
  "Misthammel", // Manure ram (Bavarian)
  "Dutzlbimpfl", // Little doofus (Bavarian)
  "Gschaftlhuaberin", // Busybody woman (Bavarian)
  "Oaschgsicht", // Ass face (Bavarian)
  "Glotzn", // Staring eyes / TV (Bavarian)
  "Hundslump", // Dog ragamuffin (Bavarian)
  "Lumpengsindl", // Rag riff-raff (Bavarian)
  "Gschwanzl", // Little tail (Bavarian)
  "Sackzement", // Sack cement (Bavarian exclamation)
  "Sapperment", // Sacrament (Bavarian exclamation variant)
  "Potztausend", // God thousand (Bavarian exclamation)

  // ========================================
  // === Sexual Terms (Extended) ===========
  // ========================================
  "Analperle", // Anal bead
  "Analpflaume", // Anal plum (hemorrhoid)
  "Arschgefickt", // Ass-fucked
  "Arschgefickter", // Ass-fucked person
  "Bückstück", // Bend-piece (sexually submissive person, derogatory)
  "Doppelpenetration", // Double penetration
  "Flotter Dreier", // Quick threesome
  "Fremdgehen", // Cheating (sexual)
  "Fremdvögeln", // Foreign-birding (cheating)
  "Geile Sau", // Horny sow
  "Geiler Bock", // Horny buck
  "Gummipuppe", // Rubber doll (sex doll)
  "Hodenlecker", // Testicle licker
  "Kitzler", // Clitoris (slang)
  "Lustgrotte", // Pleasure grotto (vagina slang)
  "Lustspalte", // Pleasure slit (vagina slang)
  "Mösenfurz", // Pussy fart (queef)
  "Nuttensohn", // Hooker's son
  "Pornostar", // Porn star
  "Pornosau", // Porn pig
  "Sadomasochist", // Sadomasochist
  "Schlampenstecher", // Slut fucker
  "Schwanzlecker", // Dick licker
  "Schwanzlurch", // Dick newt (insult)
  "Spermafleck", // Cum stain
  "Spermafresse", // Cum face
  "Spermaschlucker", // Cum swallower
  "Stiernacken", // Bull neck (can be derogatory)
  "Stripperin", // Stripper (female)
  "Stripper", // Stripper (male)
  "Tiefbläserin", // Deep blower (female)
  "Analratte", // Anal rat

  // ========================================
  // === Homophobic / Transphobic (Ext) ====
  // ========================================
  "Schwulette", // Gay-ette (derogatory for gay man)
  "Schwuli", // Gay (diminutive, derogatory)
  "Arschbaron", // Ass baron (derogatory for gay man)
  "Rosettenlecker", // Rosette licker (derogatory, homophobic)
  "Hinterladerer", // Rear-loader variant (derogatory for gay man)
  "Stehpinkler", // Stand pisser (derogatory for male)
  "Sitzpinkler", // Sit pisser (derogatory for unmasculine man)
  "Puppe", // Doll (derogatory for effeminate man)
  "Tucke", // Fairy (derogatory for gay/effeminate man)
  "Schwulenpack", // Gay pack (derogatory)
  "Schwulenpest", // Gay plague (derogatory)
  "Transenpack", // Tranny pack (derogatory)
  "Drag", // Drag (used derogatorily)
  "Warmer", // Warm one (derogatory, shortform)
  "Lederarsch", // Leather ass (derogatory for gay man)
  "Regenbogenarsch", // Rainbow ass (derogatory for gay)
  "Perverser", // Pervert
  "Perverse", // Pervert (female)

  // ========================================
  // === Ethnic / Racial Slurs (Extended) ==
  // ========================================
  "Bohnenfresser", // Bean eater (derogatory for Turks)
  "Dönerfresser", // Kebab eater (derogatory for Turks)
  "Kopftuchbrigade", // Headscarf brigade (derogatory for Muslim women)
  "Tschuschenbande", // Foreigner gang (Austrian slur)
  "Tschuschenpack", // Foreigner pack (Austrian slur)
  "Negerpack", // Negro pack (extremely offensive)
  "Negerkuss", // Negro kiss (outdated offensive term)
  "Negerlein", // Little Negro (condescending, offensive)
  "Judenratte", // Jew rat (extremely offensive)
  "Judenscheiße", // Jew shit (extremely offensive)
  "Türkensau", // Turk sow (extremely offensive)
  "Asylant", // Asylum seeker (used derogatorily)
  "Asylantenschwein", // Asylum seeker pig (extremely offensive)
  "Asylantenpack", // Asylum seeker pack (extremely offensive)
  "Scheinasylant", // Fake asylum seeker (derogatory)
  "Wirtschaftsflüchtling", // Economic refugee (used derogatorily)
  "Ausländerschwein", // Foreigner pig (derogatory)
  "Kümmelspalter", // Cumin splitter (derogatory for Turks)
  "Zigeunerabschaum", // Gypsy scum (extremely offensive)
  "Schlitzaugen", // Slit-eyes plural (offensive for East Asians)
  "Schluchtenscheißer", // Gorge shitter (derogatory for Austrians)
  "Schwabenhass", // Swabian hate (regional prejudice)
  "Preißn", // Prussians (derogatory, Bavarian spelling)
  "Ossi", // Derogatory for East German
  "Wessi", // Derogatory for West German
  "Zoni", // Derogatory for East German (from Zone)
  "Kuffar", // Infidel (Arabic, used in German context)
  "Kanakenbrut", // Foreigner brood (extremely offensive)
  "Negerbrut", // Negro brood (extremely offensive)
  "Zigeunergfrast", // Gypsy pest (extremely offensive, Austrian)

  // ========================================
  // === Internet / Youth Slang (Ext 2) ====
  // ========================================
  "Amina koyim", // Full Turkish vulgar phrase used in German
  "Orospu", // Turkish: whore (used in German youth slang)
  "Orospu çocuğu", // Turkish: son of a whore (used in German)
  "Eşek", // Turkish: donkey (used as insult in German)
  "Sikerim", // Turkish: I'll fuck (used in German youth slang)
  "Siktir", // Turkish: fuck off (used in German youth slang)
  "Siktir git", // Turkish: fuck off go (used in German)
  "Ibne", // Turkish: faggot (used in German youth slang)
  "Oç", // Turkish abbreviation for son of a whore (used in German)
  "Ya siktir", // Turkish: oh fuck off (used in German)
  "Lan Amk", // Dude fuck (Turkish-German slang)
  "Cüs", // Exclamation (Turkish-German slang, can be offensive)
  "Kanacke", // Slur variant spelling
  "Schabracke", // Old nag (derogatory for women)
  "Pissgurke", // Piss cucumber (pathetic person)
  "Pissgeburt", // Piss birth (offensive)
  "Drecksjude", // Dirty Jew (extremely offensive)
  "Dreckskanake", // Dirty foreigner slur (extremely offensive)
  "Drecksassi", // Dirty trashy person
  "Dreckshartzer", // Dirty welfare recipient (derogatory)
  "Hurensohnverein", // Son of a whore club (insult for sports teams)
  "Cringe", // Cringe (used in German youth slang as insult)
  "Lost", // Lost (used in German youth slang as insult)
  "Toxic", // Toxic (used in German youth slang)
  "Bratan", // Brother (Russian-German slang, can be offensive)
  "Blyat", // Bitch (Russian, used in German youth slang)
  "Suka", // Bitch (Russian, used in German youth slang)
  "Cyka Blyat", // Russian obscenity used in German gaming
  "Ehre genommen", // Honor taken (youth slang for humiliated)
  "Müllkind", // Trash child
  "Abfallmensch", // Garbage human
  "Fickjunge", // Fuck boy
  "Fickboy", // Fuck boy (English hybrid)
  "Bitch", // Bitch (English, used in German)
  "Motherfucker", // Motherfucker (English, used in German)
  "Son of a bitch", // (English, used in German)
  "Nullchecker", // Zero checker (clueless person)
  "Aldi-Kind", // Aldi child (cheap/poor person)
  "Hartz-IV-Empfänger", // Welfare recipient (used as insult)
  "Sozialschmarotzer", // Social parasite
  "Sozialparasit", // Social parasite variant
  "1 Pansen", // One paunch (youth meme insult)

  // ========================================
  // === Miscellaneous Compounds ===========
  // ========================================
  "Klobrille", // Toilet seat (insult)
  "Klobürste", // Toilet brush (insult)
  "Pissbecken", // Piss basin (insult)
  "Toilettenbürste", // Toilet brush (insult)
  "Kackhaus", // Shit house
  "Mistbiene", // Manure bee (annoying person)
  "Mistkäfer", // Dung beetle (insult)
  "Mistbock", // Manure buck (scoundrel)
  "Mistgeburt", // Manure birth (variant of Missgeburt)
  "Mistsack", // Manure sack (scumbag)
  "Mistkarren", // Manure cart (terrible vehicle/situation)
  "Schandfleck", // Shame stain (disgrace)
  "Schandtat", // Shameful deed
  "Schändlich", // Shameful
  "Dummbacke", // Dumb cheek (fool)
  "Dummfick", // Dumb fuck
  "Dummficker", // Dumb fucker
  "Dummfotze", // Dumb cunt
  "Hirnfick", // Brain fuck
  "Kopffick", // Head fuck
  "Mindfuck", // Mindfuck (English, used in German)
  "Holzkopp", // Wooden head (Plattdeutsch)
  "Holzfresse", // Wooden face (insult)
  "Lullibumm", // Penis boom (silly person)
  "Pimmelberger", // Dick mountain (silly insult)
  "Sacknase", // Scrotum nose
  "Sackbieber", // Scrotum beaver
  "Sackklammer", // Scrotum clamp
  "Schwanzbirne", // Dick pear
  "Schwanzkopf", // Dick head
  "Tittenarsch", // Tit-ass
  "Titten raus", // Tits out
  "Mösenknecht", // Pussy servant (simp)
  "Mösenmeister", // Pussy master (vulgar brag)
  "Muschigesicht", // Pussy face
  "Muschifurz", // Pussy fart
  "Muschilappen", // Pussy cloth
  "Eiergesicht", // Egg face (testicle face)
  "Eierkopf", // Egg head (intellectual, derogatory)
  "Eierlecker", // Egg/testicle licker
  "Eierschaukler", // Egg swinger (lazy person, Austrian)
  "Samenschleuder", // Sperm slingshot (promiscuous man)
  "Samenspender", // Sperm donor (derogatory for father)
  "Gebärkuh", // Birth cow (derogatory for mother)
  "Gebärmaschine", // Birth machine (derogatory for mother)
  "Abmelkstation", // Milking station (derogatory for woman)
  "Sexsklavin", // Sex slave (female)
  "Sexobjekt", // Sex object
  "Brüste", // Breasts (vulgar in context)
  "Ständerfotze", // Boner cunt
  "Lümmellutscher", // Lout sucker (cocksucker variant)
  "Pimmellutscher", // Dick sucker
  "Nutten", // Hookers (plural)
  "Nutte vom Bahnhof", // Station hooker
  "Bahnhofsnutte", // Station hooker (compound)
  "Straßennutte", // Street hooker
  "Billignutte", // Cheap hooker

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "Drecksarsch", // Dirty ass
  "Drecksspast", // Dirty spaz
  "Mistkröte", // Crap toad (insult)
  "Mistsau", // Manure sow
  "Mistweib", // Crap woman
  "Vollhonk", // Complete honk (idiot)
  "Vollspacko", // Complete weirdo
  "Vollnull", // Complete zero
  "Obertrottel", // Supreme fool
  "Oberarsch", // Supreme ass
  "Oberdepp", // Supreme moron
  "Oberdummkopf", // Supreme dumbhead
  "Oberidiot", // Supreme idiot
  "Oberloser", // Supreme loser
  "Oberpenner", // Supreme bum
  "Oberspast", // Supreme spaz
  "Schwanzfresse", // Cock face (vulgar)
  "Schwanznase", // Cock nose
  "Arschtreter", // Ass kicker
  "Arschwarze", // Ass wart
  "Kackscheißer", // Shit shitter
  "Kotzgesicht", // Vomit face
  "Kotzbeutel", // Vomit bag
  "Kotzfresse", // Vomit face (vulgar)
  "Fickfrosch", // Fuck frog
  "Fickvieh", // Fuck beast
  "Fickscheißer", // Fuck shitter
  "Scheiß drauf", // Shit on it
  "Scheißerei", // Diarrhea / shit storm
  "Scheißfresse", // Shit face
  "Scheißkram", // Shitty stuff
  "Scheißteil", // Shitty part
  "Hurenbande", // Whore gang
  "Nutzlose Drecksau", // Useless dirty sow
  "Dumme Sau", // Stupid sow
  "Dummer Wichser", // Stupid wanker
  "Blöde Sau", // Stupid sow
  "Blöder Sack", // Stupid sack
  "Blöder Affe", // Stupid monkey
  "Fettes Schwein", // Fat pig
  "Fette Kuh", // Fat cow
  "Fetter Wichser", // Fat wanker
  "Fette Schlampe", // Fat slut
  "Fetter Arsch", // Fat ass
  "Fetter Idiot", // Fat idiot
  "Altes Weib", // Old woman (derog.)
  "Alte Schachtel", // Old box (old hag)
  "Alte Hexe", // Old witch
  "Alte Schabracke", // Old nag
  "Alter Bock", // Old buck (old goat)
  "Kleiner Wichser", // Little wanker
  "Kleiner Pisser", // Little pisser
  "Kleines Arschloch", // Little asshole

  // ========================================
  // === Austrian Dialect ==================
  // ========================================
  "Oasch", // Ass (Austrian)
  "Gscherte", // Uncouth person (Austrian)
  "Zipflklatscher", // Dick slapper (Austrian insult)
  "Lulu", // Pee/penis (Austrian childish)
  "Kiberer", // Cop (Austrian derog.)
  "Oarschleckah", // Ass licker (Austrian)
  "Schnaxler", // Fucker (Austrian)
  "Hoschoh", // Weirdo (Austrian)
  "Plutzer", // Pumpkin / head (Austrian)
  "Leck mi", // Lick me (Austrian)
  "Leck mi am Oasch", // Kiss my ass (Austrian)
  "Granatenscheißer", // Grenade shitter (Austrian insult)
  "Bsuff", // Drunk (Austrian)
  "Bsuffener", // Drunkard (Austrian)
  "Saubeutel", // Pig bag (Austrian insult)
  "Saufratze", // Sow face (Austrian)

  // ========================================
  // === Swiss German Dialect ==============
  // ========================================
  "Schiisdräck", // Shit dirt (Swiss)
  "Gopferdami", // God damn it (Swiss)
  "Huäresiech", // Whore sick (Swiss profanity)
  "Cheibs", // Damned (Swiss)
  "Cheibdreck", // Damned dirt (Swiss)
  "Saugoof", // Pig brat (Swiss)
  "Huerä", // Fucking / damned (Swiss intensifier)
  "Schnure", // Mouth / shut up (Swiss derog.)
  "Fötzel", // Scoundrel (Swiss)
  "Chalb", // Calf / idiot (Swiss)
  "Schiisser", // Shitter / coward (Swiss)
  "Grindchopf", // Headhead / stubborn (Swiss)
  "Hodesack", // Ball sack (Swiss)
  "Futschigoof", // Vagina brat (Swiss)

  // ========================================
  // === Bavarian Dialect ==================
  // ========================================
  "Preiß", // Prussian (Bavarian pejorative)
  "Deppat", // Stupid (Bavarian)
  "Gschaftlhuaber", // Busybody (Bavarian)
  "Kreizbirnbaum", // Cross pear tree (Bavarian swear)
  "Kruzifünferl", // Cross fiver (Bavarian mild swear)
  "Hundling", // Little dog (Bavarian insult)
  "Hundsgrippl", // Dog cripple (Bavarian)
  "Haderlump", // Rag rogue (Bavarian)
  "Luader", // Hussy (Bavarian variant)
  "Deifelsbrut", // Devil's brood (Bavarian)
  "Dampfplauderer", // Steam chatterer (Bavarian blowhard)
  "Depperte", // Stupid one female (Bavarian)
  "Depperter", // Stupid one male (Bavarian)
  "Hallodri", // Rascal (Bavarian)
  "Schoaßdrumml", // Fart drum (Bavarian)
  "Sauguat", // Pig good / damn good (Bavarian)
  "Saubledsinnig", // Pig stupid (Bavarian)
  "Zwiderwurzn", // Contrary root (grumpy person, Bavarian)
  "Ratschkathl", // Gossip woman (Bavarian)

  // ========================================
  // === Swabian Dialect ===================
  // ========================================
  "Sauluadr", // Pig hussy (Swabian)
  "Schofseckel", // Sheep scrotum (Swabian insult)
  "Seggl", // Scrotum / idiot (Swabian)
  "Saubladr", // Pig bladder (Swabian insult)
  "Schlitzohr", // Slit ear / cunning person (Swabian)
  "Graddler", // Scruffy (Swabian)
  "Luschd", // Lazy/sloppy (Swabian)
  "Lombaseggl", // Rag scrotum (Swabian insult)
  "Dreggsbeidl", // Dirty bag (Swabian)
  "Brunzdeggl", // Piss lid (Swabian)
  "Maulheld", // Mouth hero (Swabian blowhard)
  "Schlotzer", // Slobberer (Swabian)
  "Siachkropf", // Sick crop (Swabian insult)
  "Suppaschwob", // Soup Swabian (insult)

  // ========================================
  // === Saxon Dialect =====================
  // ========================================
  "Dähämull", // Dumbmouth (Saxon)
  "Glootzn", // Staring eyes (Saxon derog.)
  "Gorsche", // Big mouth (Saxon)
  "Widerborschd", // Contrary bristle / stubborn (Saxon)
  "Drecksach", // Dirt thing (Saxon)
  "Nischel", // Head / noggin (Saxon derog.)
  "Scheese", // Jalopy / bad thing (Saxon)
  "Hämfull", // Mouthful (Saxon insult)
  "Dämlicher Sachse", // Stupid Saxon (self-deprecating)
  "Bleedmann", // Stupid man (Saxon)

  // ========================================
  // === Berlin Dialect ====================
  // ========================================
  "Flitzpiepe", // Speedy pipe (Berlin insult)
  "Jansen", // Nobody (Berlin derog.)
  "Knallkopp", // Bang head (Berlin idiot)
  "Laberbacke", // Blabber cheek (Berlin)
  "Piesepampel", // Fussy person (Berlin)
  "Pappnase", // Cardboard nose (Berlin clown)
  "Schnauze", // Snout / shut up (Berlin)
  "Ick fick dir", // I fuck you (Berlin dialect)
  "Ick mach dir platt", // I'll flatten you (Berlin)
  "Jibs keene Fresse", // Shut your face (Berlin)
  "Deef", // Stupid (Berlin)
  "Kackstelzen", // Shit stilts (Berlin)
  "Nulpe", // Zero / nobody (Berlin)

  // ========================================
  // === Ruhrpott Dialect ==================
  // ========================================
  "Kohlenpansen", // Coal belly (Ruhr insult)
  "Lusche", // Wimp (Ruhr)
  "Luschi", // Wimpy (Ruhr)
  "Pummelchen", // Chubby one (Ruhr derog.)
  "Hömma", // Listen here (Ruhr, can be aggressive)

  // ========================================
  // === Plattdeutsch (Low German) =========
  // ========================================
  "Drögbansen", // Dry belly (Low German insult)
  "Klookschieter", // Smart shitter (Low German know-it-all)
  "Lüttje Schietkeerl", // Little shit guy (Low German)
  "Schietkram", // Shit stuff (Low German)
  "Snieder", // Snot (Low German)
  "Slickscheeter", // Slick shitter (Low German)
  "Kansen", // Trash (Low German)
  "Swienegel", // Pig hedgehog (Low German)
  "Swien", // Pig (Low German)

  // ========================================
  // === Franconian Dialect ================
  // ========================================
  "Dabbschädl", // Clumsy skull (Franconian)
  "Grischberla", // Little groaner (Franconian)
  "Graaddaggl", // Straight dachshund (Franconian idiot)
  "Hadderlump", // Rag rogue (Franconian)
  "Lulasch", // Gangly person (Franconian)
  "Schelm", // Rogue (Franconian)
  "Seidla", // Beer mug / drunkard (Franconian)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "Analfick", // Anal fuck
  "Analgeburt", // Anal birth (insult)
  "Doggy", // Doggy style
  "Kehlenfick", // Throat fuck
  "Lustsklavin", // Pleasure slave (f.)
  "Lustobjekt", // Lust object
  "Masturbieren", // To masturbate
  "Mösenlikör", // Pussy liquor (very vulgar)
  "Mösenlutscher", // Pussy sucker
  "Nuttenficker", // Whore fucker
  "Onanieren", // To masturbate (formal)
  "Pornoschlampe", // Porn slut
  "Pornofotze", // Porn cunt
  "Rammler", // Someone who fucks a lot
  "Reiten", // To ride (sexual)
  "Reindrücken", // To push in (sexual)
  "Spermaschluckerin", // Sperm swallower (f.)
  "Spritzen", // To squirt / ejaculate
  "Stöhnen", // To moan (sexual)
  "Tierficker", // Animal fucker
  "Tittenfick", // Tit fuck
  "Tittenlutscher", // Tit sucker
  "Triebhaft", // Driven by urges
  "Triebtäter", // Sex offender
  "Wichsgriffell", // Wank pen (dick)
  "Einlochen", // To hole (sexual)
  "Fummeln", // To grope
  "Fummelei", // Groping
  "Geschlechtskrankheit", // STD
  "Nympho", // Nympho
  "Porno", // Porn
  "Pornografie", // Pornography
  "Puffbesuch", // Brothel visit
  "Puffgänger", // Brothel goer
  "Puffmutter", // Brothel mother (madam)
  "Stricherin", // Female prostitute (streetwalker)
  "Tripper", // Gonorrhea
  "Syphilis", // Syphilis
  "Cockring", // Cock ring
  "Fesselspiel", // Bondage play
  "Fetisch", // Fetish
  "Pädophiler", // Pedophile
  "Kinderschänder", // Child molester
  "Vergewaltiger", // Rapist
  "Vergewaltigung", // Rape
  "Orgienmeister", // Orgy master

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "Dünnschiss", // Diarrhea (thin shit)
  "Durchfall", // Diarrhea
  "Furz", // Fart
  "Fürze", // Farts (plural)
  "Furzgesicht", // Fart face
  "Furzknoten", // Fart knot
  "Furztrocken", // Fart dry (very dry)
  "Kacker", // Shitter
  "Kackstift", // Shit pen (annoying child)
  "Klolektüre", // Toilet reading
  "Kloschlüssel", // Toilet key (idiot)
  "Pinkel", // Pee/pisser
  "Pinkler", // Pisser
  "Pisskrüppel", // Piss cripple
  "Pipi", // Pee pee
  "Pupser", // Tooter (farter)
  "Rotze", // Snot
  "Rotzfahne", // Snot flag (hanky)
  "Rotzlappen", // Snot rag
  "Schiss", // Shit / fear
  "Schisskram", // Shit stuff
  "Stuhlgang", // Bowel movement

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "Backpfeifengesicht", // Face in need of a slap
  "Banane", // Banana (idiot)
  "Blockflöte", // Recorder (useless person)
  "Bratapfel", // Baked apple (red-faced idiot)
  "Dampfnudel", // Steam noodle (chubby idiot)
  "Doofkopp", // Dumb head
  "Doofmann", // Dumb man
  "Dösbirne", // Drowsy pear (dim person)
  "Evolutionsversager", // Evolution failure
  "Fachidiot", // Subject idiot (one-track mind)
  "Fettnäpfchen", // Fat bowl (social blunder)
  "Flasche", // Bottle / loser
  "Gehirnakrobat", // Brain acrobat (sarcastic)
  "Gehirnamputation", // Brain amputation
  "Geistesgestörter", // Mentally disturbed
  "Geisteszwerg", // Spirit dwarf
  "Grenzdebil", // Borderline moronic
  "Grips", // Brains (lack thereof)
  "Grützhirn", // Grits brain
  "Gurkentruppe", // Cucumber troop (useless group)
  "Hirnamputiert", // Brain amputated
  "Hirnrissig", // Brain-cracked (crazy)
  "Hirnverbrannt", // Brain-burned
  "Hirnverbranntheit", // Brain-burnedness
  "Hirnwindung", // Brain convolution (sarcastic: having only one)
  "Honk", // Idiot
  "Idiotenverein", // Idiots club
  "Intelligenzbestie", // Intelligence beast (sarcastic)
  "Intelligenzbolzen", // Intelligence bolt (sarcastic)
  "Knallbirne", // Bang pear (idiot)
  "Knallcharge", // Bang extra (useless person)
  "Knallerbse", // Bang pea (idiot)
  "Kohlkopf", // Cabbage head
  "Lackel", // Clumsy lout
  "Leuchte", // Light (sarcastic for dim person)
  "Minderbemittelter", // Under-endowed (mentally)
  "Mondkalb", // Moon calf (dreamer)
  "Nappel", // Dimwit
  "Nassauer", // Freeloader / parasite
  "Niete", // Dud / failure
  "Pantoffelheld", // Slipper hero (henpecked)
  "Pflaume", // Plum (useless person)
  "Pfeifenheini", // Pipe Heini (useless person)
  "Rindvieh", // Cattle (stupid person)
  "Schafskopf", // Sheep head (stupid)
  "Schnarchnase", // Snoring nose (sleepy person)
  "Schnarchsack", // Snoring sack (sleepy person)
  "Stumpfsinn", // Blunt sense (dullness)
  "Tölpel", // Oaf
  "Trottelgesicht", // Dunce face
  "Unterbelichteter", // Underexposed (dim person)
  "Vollkoffer", // Full suitcase (idiot, Austrian)
  "Witzfigur", // Joke figure
  "Witzkanone", // Joke cannon (sarcastic)
  "Zipfeklatscher", // Dick slapper (idiot)

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "Brillenschlange", // Glasses snake
  "Fettarsch", // Fat ass
  "Hängetitten", // Saggy tits
  "Hässliche Fratze", // Ugly mug
  "Pickelgesicht", // Pimple face
  "Rüsseltier", // Trunk animal (big nose)
  "Schiefmaul", // Crooked mouth
  "Segelohren", // Sail ears (big ears)
  "Walross", // Walrus (fat person)
  "Watschenbaam", // Slap tree (slappable face, Bavarian)
  "Zahnlückenfresse", // Gap-toothed face

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "Angeberin", // Show-off (f.)
  "Doppelzüngler", // Double-tonguer (liar)
  "Feigling", // Coward
  "Großmaul", // Big mouth
  "Heulerin", // Crier (f.)
  "Knauser", // Miser
  "Krämerseele", // Shopkeeper soul (petty)
  "Langfinger", // Long finger (thief)
  "Lästerschwester", // Gossip sister
  "Lügenbeutel", // Lie bag (liar)
  "Lügenbaron", // Lie baron
  "Lügenmaul", // Lie mouth
  "Maulfaul", // Mouth lazy (uncommunicative)
  "Nervtöter", // Nerve killer
  "Petze", // Snitch
  "Quasselstrippe", // Chatter strip (chatterbox)
  "Radfahrer", // Cyclist (sucks up, kicks down)
  "Saufkopf", // Drunkard head
  "Schleimer", // Slimer (sycophant)
  "Schleimsack", // Slime sack
  "Schummler", // Cheater
  "Schwarzfahrer", // Fare dodger
  "Schwätzer", // Blabberer
  "Stalker", // Stalker
  "Stänkerer", // Troublemaker
  "Störenfried", // Disturber of peace
  "Tratschtante", // Gossip aunt
  "Trittbrettfahrer", // Running board rider (freeloader)
  "Unruhestifter", // Troublemaker
  "Windbeutel", // Cream puff (unreliable person)
  "Witzbold", // Joker (derog.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "Russki", // Slur for Russians
  "Zigeunerbrut", // Roma brood (slur)
  "Zecke", // Tick (slur for leftists)
  "Kartoffel", // Potato (reverse slur for Germans)
  "Schwul", // Gay (derog. usage)
  "Schwule Sau", // Gay pig
  "Ladyboy", // Ladyboy (derog.)
  "Spastiker", // Spastic (ableist)
  "Mongoloid", // Mongoloid (slur)
  "Behinderter", // Disabled person (as insult)
  "Retardiert", // Retarded
  "Judenpack", // Jew pack (antisemitic)
  "Jude", // Jew (when used as insult)
  "Islamist", // Islamist (as slur)
  "Terroristenpack", // Terrorist pack
  "Ausländer raus", // Foreigners out
  "Asylschmarotzer", // Asylum parasite
  "Asozial", // Anti-social
  "Prollet", // Prole
  "Proll", // Prole (short)
  "Bonze", // Fat cat (rich person insult)
  "Spießer", // Philistine / square

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "Sche1ße", // Scheiße variant
  "H.u" + "re", // Hure split
  "Hu.re", // Hure with dot
  "Sch1ampe", // Schlampe with 1
  "4rsch", // Arsch with 4
  "Fo+ze", // Fotze with +
  "Schw4nz", // Schwanz with 4
  "P1mmel", // Pimmel with 1
  "H0densack", // Hodensack with 0
  "Schl4mpe", // Schlampe with 4
  "Hu r e", // Hure spaced
  "F i c k e n", // Ficken spaced
  "A r s c h", // Arsch spaced
  "F o t z e", // Fotze spaced
  "W i c h s e r", // Wichser spaced
  "Sch.eiße", // With dot
  "S.cheiße", // With dot
  "Ar$ch", // Arsch with $
  "Ar$chloch", // Arschloch with $
  "F1ckd1ch", // Fick dich with 1s
  "Hu*e", // Hure with star
  "Spaßt1", // Spasti with 1
  "Sp@sti", // Spasti with @
  "Sp4sti", // Spasti with 4
  "Hür3nsohn", // Hurensohn with 3
  "Hürënsohn", // Hurensohn with accents
  "M1stgeburt", // Mistgeburt with 1
  "M!stgeburt", // Mistgeburt with !
  "Missgebvrt", // Missgeburt with v
  "Mi$$geburt", // Missgeburt with $$
  "Behindert3r", // Behinderter with 3
  "B3hinderter", // Behinderter with 3

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "MfG Fick dich", // Regards, fuck you
  "Spacko", // Weirdo
  "Nub", // Noob variant
  "Boon", // Noob variant
  "Lachnummer", // Laughing number (joke person)
  "Alda", // Dude (aggressive usage)
  "Hdf", // Halt die Fresse (shut your face)
  "Hau ab", // Piss off
  "Fick dich", // Fuck you
  "Krebs", // Cancer (death wish)
  "Kys", // Kill yourself (gaming)
  "Rekt", // Wrecked (gaming)
  "Trashtalker", // Trash talker
  "Salty", // Salty (mad)
  "Camper", // Camper (gaming insult)
  "Hacker", // Hacker/cheater (gaming)
  "Cheater", // Cheater (gaming)

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- ficken (to fuck) ---
  "ficke", // I fuck
  "fickst", // You fuck
  "fickt", // He/she fucks
  "fickten", // They fucked
  "fickend", // Fucking (adj.)
  "durchgefickt", // Fucked through
  "zerficken", // To fuck up
  "zerfickt", // Fucked up
  "anficken", // To start fucking
  "ausficken", // To fuck out
  "hinficken", // To fuck over
  "wegficken", // To fuck away
  // --- wichsen (to wank) ---
  "wichst", // You/he wanks
  "wichste", // Wanked
  "gewichst", // Wanked (past)
  "wichsend", // Wanking
  // --- kacken (to shit) ---
  "kackst", // You shit
  "kackt", // He/she shits
  "kackten", // They shat
  "gekackt", // Shat
  "abkacken", // To croak / fail
  "vollkacken", // To shit full
  "reinkacken", // To shit into
  "draufkacken", // To shit on top
  // --- pissen (to piss) ---
  "pisse", // I piss
  "pisst", // You/he pisses
  "gepisst", // Pissed
  // --- kotzen (to puke) ---
  "kotze", // I puke
  "kotzt", // You/he pukes
  "gekotzt", // Puked
  // --- scheißen (to shit) ---
  "scheißt", // You/he shits
  "geschissen", // Shat
  "bescheißen", // To cheat (lit. shit on)
  "anscheißen", // To shit on / to rat out
  "reinscheißen", // To shit into
  "draufscheißen", // To shit on (not care)
  "zusammenscheißen", // To shit together / berate
  "zugeschissen", // Shit closed
  // --- vögeln (to fuck, lit. to bird) ---
  "vögle", // I fuck (vögeln)
  "vögelst", // You fuck
  "vögelt", // He/she fucks
  "gevögelt", // Fucked
  "rumvögeln", // To fuck around
  "durchvögeln", // To fuck through
  // --- bumsen (to bang) ---
  "bumse", // I bang
  "bumst", // You/he bangs
  "gebumst", // Banged

  // ========================================
  // === Diminutive & Augmentative Forms ===
  // ========================================
  "Arschlöchlein", // Little asshole
  "Arschlöchchen", // Tiny asshole
  "Hürchen", // Little whore
  "Schlampchen", // Little slut
  "Fotzchen", // Little cunt
  "Pimmelchen", // Little dick
  "Schwänzchen", // Little tail/dick
  "Wichserchen", // Little wanker
  "Tittchen", // Little tits
  "Möslein", // Little pussy
  "Idiotlein", // Little idiot
  "Trottellein", // Little dunce
  "Scheißerchen", // Little shitter
  "Spastilein", // Little spaz
  "Riesenpimmel", // Giant dick
  "Riesenarsch", // Giant ass
  "Riesenfotze", // Giant cunt
  "Riesenschlampe", // Giant slut
  "Riesenidiot", // Giant idiot
  "Riesendepp", // Giant moron
  "Riesentrottel", // Giant dunce
  "Riesenwichser", // Giant wanker
  "Megafotze", // Mega cunt
  "Megaarsch", // Mega ass
  "Megadepp", // Mega moron
  "Megaidiot", // Mega idiot
  "Superarsch", // Super ass
  "Superschlampe", // Super slut
  "Superspast", // Super spaz
  "Superidiot", // Super idiot
  "Ultradepp", // Ultra moron
  "Ultrawichser", // Ultra wanker

  // ========================================
  // === Rhyming & Wordplay ================
  // ========================================
  "Sackhüpfer", // Sack hopper
  "Bratfresse", // Fry face
  "Käsefuß", // Cheese foot
  "Käsefresse", // Cheese face
  "Käsemaden", // Cheese maggots
  "Hosenpinkler", // Pants pisser
  "Bettnässer", // Bed wetter
  "Bettpisser", // Bed pisser
  "Arschgeiger", // Ass violinist
  "Sackkratzer", // Sack scratcher
  "Eierkocher", // Ball boiler
  "Eiertanz", // Egg dance (delicate situation)
  "Pimmelnasen", // Dick nose
  "Stinksau", // Stink sow
  "Dummtrottel", // Dumb dunce
  "Dummbeutel", // Dumb bag
  "Dummfresse", // Dumb face
  "Dummbirne", // Dumb pear
  "Dummgesicht", // Dumb face

  // ========================================
  // === Additional Compounds ==============
  // ========================================
  "Affenhirn", // Monkey brain
  "Affenschande", // Monkey shame
  "Affengeil", // Monkey horny (extremely cool/horny)
  "Afterlecker", // Anus licker
  "Aftergeburt", // Afterbirth (insult)
  "Arschbackenpfleger", // Ass cheek caretaker
  "Aasgeier", // Carrion vulture (greedy person)
  "Bauernlümmel", // Peasant lout
  "Bettler", // Beggar (derog.)
  "Blindschleiche", // Slow worm (blind person insult)
  "Ekelpaket", // Disgust package
  "Ekelhafte Ratte", // Disgusting rat
  "Fressmaschine", // Eating machine (glutton)
  "Grinsebacke", // Grinning cheek (annoying smiler)
  "Großkotzbrocken", // Big vomit chunk
  "Hundsfott", // Dog cunt (archaic insult)
  "Hundsfötter", // Dog cunter (archaic)
  "Jammertasche", // Whining bag
  "Jammersack", // Whining sack
  "Kackbonze", // Shit fat cat
  "Kinderficker", // Child fucker (pedophile)
  "Klofrau", // Toilet lady (derog.)
  "Koksnutte", // Coke whore
  "Kotzbratze", // Vomit brat
  "Kröte", // Toad (ugly person)
  "Lachaffe", // Laughing monkey
  "Leichenfledderer", // Corpse looter
  "Lümmeltüte", // Lout bag (condom)
  "Madenschlecker", // Maggot licker
  "Matschbirne", // Mud pear (stupid)
  "Maulhure", // Mouth whore (blowjob giver)
  "Memme", // Coward / sissy
  "Milchbubi", // Milk boy (mama's boy)
  "Muttersöhnchen", // Mama's boy
  "Papasöhnchen", // Daddy's boy
  "Pferdeschlampe", // Horse slut
  "Pisswurst", // Piss sausage
  "Popelfresser", // Booger eater
  "Riesenspast", // Giant spaz
  "Rotzgöre", // Snot brat (f.)
  "Rotzjunge", // Snot boy
  "Samenräuber", // Sperm robber
  "Saubarsch", // Pig buttocks
  "Saufgelage", // Drinking binge
  "Scharfmacher", // Agitator / arouser
  "Schleimbeutel", // Slime bag (sycophant)
  "Schleimscheißer", // Slime shitter (sycophant)
  "Schluckspecht", // Swallow woodpecker (drunkard)
  "Schnapsleiche", // Booze corpse (passed out drunk)
  "Schnapsidee", // Booze idea (stupid idea)
  "Schnapsnase", // Booze nose
  "Schnapsdrossel", // Booze thrush (drunkard)
  "Schwachsinn", // Imbecility / nonsense
  "Schwachsinniger", // Imbecile
  "Sittenstrolch", // Morals vagrant (sex offender)
  "Teufelsbrut", // Devil's brood
  "Totgeburt", // Stillbirth (insult)
  "Versagerin", // Failure (f.)
  "Waschweiber", // Washerwomen (gossipers)
  "Weiberheld", // Womanizer
  "Widerlingin", // Repulsive person (f.)
  "Würstchen", // Little sausage (wimp)
  "Zickenalarm", // Bitch alarm
  "Zirkusaffe", // Circus monkey

  // ========================================
  // === Additional Evasion Patterns =======
  // ========================================
  "Scheysse", // Scheiße phonetic misspelling
  "Sheisse", // Scheiße English-style
  "Fiken", // Ficken misspelling
  "Fikken", // Ficken misspelling
  "Figgn", // Ficken dialect shortening
  "Arsh", // Arsch misspelling
  "Arshloch", // Arschloch misspelling
  "Scwanz", // Schwanz misspelling
  "Schwantz", // Schwanz misspelling
  "Vigeln", // Vögeln misspelling
  "Voegeln", // Vögeln without umlaut
  "Huhrensohn", // Hurensohn misspelling
  "Huuhrensohn", // Hurensohn elongated
  "Wixxxer", // Wichser extended x
  "Wixer", // Wichser simplified
  "Wixxa", // Wichser slang
  "Klappe halten", // Hold your flap
  "Halts Maul", // Shut your trap
  "Klappe zu", // Flap shut

  // ========================================
  // === More Compound Phrases =============
  // ========================================
  "Lutsch mich", // Suck me
  "Geh scheißen", // Go shit
  "Geh kacken", // Go take a shit
  "Hau rein", // Hit in (piss off)
  "Werd nicht frech", // Don't get cheeky
  "Halt die Klappe", // Shut the flap
  "Verzieh dich Wichser", // Beat it wanker
  "Du Spacko", // You weirdo
  "Du Arschloch", // You asshole
  "Du Fotze", // You cunt
  "Du fette Sau", // You fat sow
  "Du kleiner Wichser", // You little wanker
  "Ich fick dich", // I fuck you
  "Ich fick deine Mutter", // I fuck your mother
  "Ich fick deine Schwester", // I fuck your sister
  "Ich piss dir ins Gesicht", // I piss in your face
  "Ich schlag dir die Fresse ein", // I'll bash your face in
  "Ich mach dich fertig", // I'll finish you
  "Ich mach dich platt", // I'll flatten you
  "Deine Mudder", // Your mother (slang)
  "Deine Alte", // Your old lady (derog.)
  "Dein Vater", // Your father (insult)

  // ========================================
  // === More Regional Terms ===============
  // ========================================
  "Schlaffi", // Sleepy (wimp)
  "Pimpf", // Little fellow (Hitler Youth term)
  "Rowdy", // Rowdy
  "Rüpel", // Ruffian
  "Rabauke", // Ruffian
  "Rotzpippe", // Snot pipe
  "Duftmarke", // Scent mark (fart euphemism)
  "Pups", // Toot (fart)
  "Pupsi", // Little toot
  "Schißer", // Shitter (old spelling)
  "Dreckiger Hund", // Dirty dog
  "Dreckiger Bastard", // Dirty bastard
  "Elender Bastard", // Miserable bastard
  "Elende Ratte", // Miserable rat
  "Elende Kakerlake", // Miserable cockroach
  "Erbärmlicher Wurm", // Pathetic worm
  "Erbärmliche Kreatur", // Pathetic creature
  "Jämmerlicher Wicht", // Pathetic wretch
  "Armselig", // Pitiful
  "Armseliger Tropf", // Pitiful drip
  "Erbärmlicher Versager", // Pathetic failure
  "Kläglicher Haufen", // Pitiful pile
  "Lächerliche Figur", // Ridiculous figure
  "Jämmerliche Gestalt", // Pathetic figure
  "Miese Ratte", // Mean rat
  "Mieser Typ", // Mean dude
  "Miese Type", // Mean type
  "Mieses Schwein", // Mean pig
  "Miese Sau", // Mean sow
  "Mieses Stück", // Mean piece
  "Abgefuckter Typ", // Fucked up dude
  "Abgefucktes Arschloch", // Fucked up asshole
  "Asoziales Stück Scheiße", // Anti-social piece of shit
  "Beschissener Wichser", // Shitty wanker
  "Verdammter Idiot", // Damn idiot
  "Verdammter Wichser", // Damn wanker
  "Verdammtes Arschloch", // Damn asshole
  "Gottverdammt", // Goddamn
  "Gottverdammter Idiot", // Goddamn idiot
  "Gottverdammte Scheiße", // Goddamn shit
  "Himmelarschundzwirn", // Heaven ass and thread (expletive)
  "Herrgottnochmal", // Lord God again (expletive)
  "Kreuzundquer", // Crossways (mild expletive)
  "Potzblitz", // Gadzooks (archaic mild)
  "Sapperlot", // By thunder (archaic mild)
  "Heiliger Strohsack", // Holy straw sack
  "Heilige Scheiße", // Holy shit
  "Was zum Teufel", // What the devil
  "Was zum Fick", // What the fuck
  "Zur Hölle", // To hell
  "Höllenbrut", // Hell brood
  "Höllenhund", // Hellhound
  "Teufelskerl", // Devil's fellow
  "Satansbratze", // Satan's brat
  "Luzifers Sohn", // Lucifer's son
  "Dämonsbrut", // Demon's brood

  // ========================================
  // === Youth/Street Slang ================
  // ========================================
  "Chabo", // Dude (street slang)
  "Habibi fick dich", // Habibi fuck you (street)
  "Wallah Hurensohn", // I swear son of a whore
  "Yallah verpiss dich", // Hurry up piss off
  "Azzlack", // Tough guy (street)
  "Brudi", // Bro
  "Kanackis", // Foreigners (street slur)
  "Ehrenmann nicht", // Not an honorable man
  "Absoluter Müll", // Absolute garbage
  "Übermensch", // Superhuman (Nazi term, sarcastic)
  "Vaterlandsverräter", // Traitor of the fatherland
  "Nestbeschmutzer", // Nest dirtier (traitor)
  "Jammertante", // Whining aunt
  "Jammerossi", // Whining East German
  "Kevin", // Kevin (stereotype for stupid person)
  "Chantal", // Chantal (stereotype for trashy woman)
  "Jacqueline", // Jacqueline (stereotype trashy)
  "Tussie", // Bimbo variant
  "Tusse", // Bimbo variant
  "Schnalle", // Buckle / easy girl
  "Braut", // Bride / chick (derog.)
  "Alte", // Old one / girlfriend (derog.)
  "Olle", // Old one (derog.)
  "Perle", // Pearl / girlfriend (can be derog.)
  "Fuck", // Fuck (used in German)
  "Shit", // Shit (used in German)
  "Asshole", // Asshole (used in German)
  "Wanker", // Wanker (used in German)
  "Loser", // Loser (used in German)
  "Sucker", // Sucker (used in German)
  "Creep", // Creep (used in German)
  "Psycho", // Psycho (used in German)
  "Freak", // Freak (used in German)
  "Geek", // Geek (derog. usage)
  "Nerd", // Nerd (derog. usage)
  "Otaku", // Otaku (derog.)
  "Weeb", // Weeaboo (derog.)
  "Simp", // Simp (derog.)
  "Cuck", // Cuck (derog.)
  "Incel", // Incel (derog.)
  "Karen", // Karen (entitled woman)
  "Boomer", // Boomer (derog.)
  "Sus", // Suspicious (gaming)

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "Herrgottsakrament", // Lord God Sacrament
  "Herrgottzack", // Lord God damn
  "Kreuzsakrament", // Cross Sacrament
  "Sakrament nochmal", // Sacrament again
  "Kruzifix nochmal", // Crucifix again
  "Himmel Arsch und Wolkenbruch", // Heaven ass and cloudburst
  "Himmelherrgottsdonnerwetter", // Heaven Lord God thunderstorm
  "Jessas Maria und Josef", // Jesus Mary and Joseph (Bavarian)
  "Herrschaftszeiten", // Lord's times (mild)
  "Menschenskind", // Human's child (mild)
  "Menschenskinder", // Humans' children (mild)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "Ich stech dich ab", // I'll stab you
  "Ich mach dich kalt", // I'll make you cold (kill)
  "Ich bring dich um", // I'll kill you
  "Ich box dir eine", // I'll punch you
  "Ich hau dir eine rein", // I'll smack you one
  "Ich tret dir in die Eier", // I'll kick you in the balls
  "Ich reiß dir den Kopf ab", // I'll rip your head off
  "Ich brech dir die Knochen", // I'll break your bones
  "Fresse polieren", // Polish face (punch)
  "Fresse einhauen", // Bash face
  "Fresse zertrümmern", // Smash face
  "Auf die Fresse kriegen", // Get it in the face
  "Aufs Maul kriegen", // Get it on the mouth
  "Maul zerreißen", // Tear mouth
  "Nase brechen", // Break nose
  "Zähne einschlagen", // Knock teeth in
  "Abstechen", // To stab
  "Abknallen", // To shoot down
  "Abmurksen", // To bump off
  "Kaltmachen", // To make cold (kill)
  "Umlegen", // To bump off
  "Plattmachen", // To flatten
  "Zusammenschlagen", // To beat up
  "Krankenhausreif schlagen", // Beat hospital-ready
  "Windeln wechseln", // Change diapers (threat to beat)

  // ========================================
  // === Additional Misc Profanity =========
  // ========================================
  "Aasfresser", // Carrion eater
  "Ausgeburt", // Spawn (negative)
  "Ausgeburt der Hölle", // Spawn of hell
  "Billigheimer", // Cheapskate
  "Blag", // Brat
  "Blage", // Brat (variant)
  "Bruchpilot", // Crash pilot (failure)
  "Dödel", // Dimwit / penis
  "Dödelkopf", // Dimwit head
  "Drecksling", // Dirty person
  "Drecksvogel", // Dirty bird
  "Dreckwühler", // Dirt digger (muckraker)
  "Ekelbrocken", // Disgust chunk
  "Ekelfresse", // Disgust face
  "Ferkelei", // Piggery (dirty behavior)
  "Flachwitz", // Flat joke (bad humor person)
  "Fledermaus", // Bat (ugly person, slang)
  "Galgenstrick", // Gallows rope (scoundrel)
  "Galgenvogel", // Gallows bird
  "Gaunerin", // Swindler (f.)
  "Geier", // Vulture
  "Gelichter", // Riffraff
  "Gossenjunge", // Gutter boy
  "Gossenmädchen", // Gutter girl
  "Grabräuber", // Grave robber
  "Heini", // Heini (insult for fool)
  "Horst", // Horst (stereotype for fool)
  "Hundedreck", // Dog dirt
  "Hundefresse", // Dog face
  "Irrenhäusler", // Asylum inmate
  "Jammerbock", // Whining buck
  "Jungfrau", // Virgin (derog. usage)
  "Kannibale", // Cannibal
  "Kindskopf", // Child's head (immature person)
  "Klotzkopf", // Block head
  "Knacker", // Old geezer
  "Knacki", // Con (criminal)
  "Knilch", // Fellow (derog.)
  "Knödel", // Dumpling (stupid)
  "Kopfnuss", // Head nut (headbutt)
  "Krethi und Plethi", // Tom Dick and Harry (riffraff)
  "Küchenschabe", // Cockroach
  "Langweilige Socke", // Boring sock
  "Lausebengel", // Louse boy
  "Lump", // Scoundrel
  "Lumpenpack", // Scoundrel pack
  "Mistfliege", // Shit fly
  "Pestkranker", // Plague sufferer (insult)
  "Pestbeule", // Plague boil
  "Rabenvieh", // Raven cattle (bad person)
  "Rabenvater", // Raven father (bad father)
  "Rabenmutter", // Raven mother (bad mother)
  "Racker", // Rascal
  "Randale", // Riot/ruckus
  "Randalierer", // Rioter
  "Räuber", // Robber
  "Räuberbande", // Robber gang
  "Saubande", // Pig gang
  "Schmutzfinke", // Dirt finch (f.)
  "Schufterei", // Drudgery
  "Schurkenbande", // Villain gang
  "Schweinebacke", // Pig cheek
  "Schweinigel", // Pig hedgehog (dirty person)
  "Speikübel", // Vomit bucket
  "Subjekt", // Subject (derog. for person)
  "Tagedieb", // Day thief (lazybones)
  "Vieh", // Beast
  "Viehzeug", // Beast stuff
  "Vogelschiss", // Bird shit
  "Waschweib", // Washwoman (gossiper)
  "Wüstling", // Debauchee
  "Zuhälter", // Pimp
  "Zuhälterin", // Pimp (f.)
];

export default germanBadWords;
