/**
 * Russian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Russian
 */
const russianBadWords = [
  // Core мат (mat) - strongest Russian profanity
  "хуй", // Dick
  "нахуй", // Fuck off / to hell
  "пошёл нахуй", // Go fuck yourself
  "иди нахуй", // Go fuck yourself
  "хуёвый", // Shitty / crappy
  "хуйня", // Bullshit / nonsense
  "охуеть", // To be stunned / holy fuck
  "пизда", // Cunt
  "пиздец", // Fucking disaster / the end
  "пиздёж", // Bullshit / lies
  "пиздатый", // Fucking awesome
  "блядь", // Whore / fuck (exclamation)
  "блять", // Fuck (exclamation, variant spelling)
  "ебать", // To fuck
  "ебаный", // Fucking (adj)
  "ёбаный", // Fucking (adj, with ё)
  "ёб твою мать", // Fuck your mother
  "заебал", // Fed up / annoyed the fuck out of
  "заебись", // Fucking great
  "выблядок", // Bastard child

  // Strong insults
  "сука", // Bitch
  "сукин сын", // Son of a bitch
  "сучка", // Little bitch
  "мудак", // Asshole / dickhead
  "ублюдок", // Bastard
  "ублюдки", // Bastards (plural)
  "говнюк", // Shithead
  "говнюки", // Shitheads (plural)
  "засранец", // Little shit
  "дерьмо", // Shit
  "дерьмовый", // Shitty
  "гребаный", // Fucking / damned
  "долбаный", // Fucking / damned
  "козел", // Goat / asshole
  "мразь", // Scum
  "тварь", // Creature / scumbag
  "пидор", // Faggot (homophobic slur)
  "пидорас", // Faggot (homophobic slur, variant)
  "гондон", // Condom / scumbag

  // Slurs
  "негр", // Negro (offensive)
  "нигга", // N-word (transliteration)
  "ниггер", // N-word (transliteration)
  "ниггеры", // N-word plural (transliteration)
  "педик", // Fag (homophobic slur)
  "педики", // Fags (homophobic slur, plural)

  // Sexual / anatomical
  "член", // Penis / member
  "залупа", // Glans / dickhead
  "манда", // Cunt (vulgar)
  "жопа", // Ass
  "сиська", // Tit
  "сиськи", // Tits
  "влагалище", // Vagina
  "вульва", // Vulva
  "мошонка", // Scrotum
  "анальный", // Anal
  "минет", // Blowjob
  "кумшот", // Cumshot
  "оргазм", // Orgasm
  "сперма", // Sperm / cum
  "эякулировать", // To ejaculate
  "эякуляция", // Ejaculation
  "мастурбировать", // To masturbate
  "дрочить", // To jerk off
  "фаллоимитатор", // Dildo

  // Other insults / vulgar
  "шлюха", // Slut / whore
  "шлюхи", // Sluts / whores (plural)
  "шалава", // Slut
  "потаскуха", // Harlot / slut
  "стерва", // Bitch / shrew
  "стервы", // Bitches (plural)
  "сутенер", // Pimp
  "киска", // Pussy (slang)
  "трахаться", // To fuck (reflexive)
  "проклятый", // Damned / cursed
  "садист", // Sadist
  "порно", // Porn
  "порнография", // Pornography
  "черт возьми", // Damn it
  "кибер-трах", // Cyberfuck

  // Bodily functions
  "срать", // To shit
  "ссать", // To piss
  "моча", // Urine / piss
  "какашка", // Poop

  // Additional Russian мат and vulgar expressions
  "блядина", // Whore (augmentative)
  "блядство", // Whoredom
  "блядовать", // To whore around
  "выёбываться", // To show off / act tough
  "говно", // Shit
  "говноед", // Shit eater
  "давалка", // Easy woman (vulgar)
  "долбоёб", // Dumbfuck
  "дрочила", // Wanker
  "ёбанат", // Crazy fucker
  "ёбаный в рот", // Fucked in the mouth
  "ёб твою", // Fuck your (truncated)
  "ёбарь", // Fucker
  "ёбнутый", // Crazy / fucked up
  "залупаться", // To be a dick about things
  "захуярить", // To do something intensely
  "мандавошка", // Pubic louse (insult)
  "мудила", // Dumbass
  "мудозвон", // Dickhead (lit. ball-ringer)
  "нахер", // To hell / fuck off (euphemistic)
  "обосраться", // To shit oneself
  "отъебись", // Fuck off
  "пердеть", // To fart
  "пердун", // Farter / old fart
  "пиздабол", // Liar (vulgar)
  "пиздануть", // To hit / to say something crazy
  "пиздолиз", // Pussy licker / ass-kisser
  "пиздюк", // Little shit
  "подонок", // Scum
  "придурок", // Idiot
  "распиздяй", // Irresponsible person (vulgar)
  "сосать", // To suck
  "сраный", // Shitty
  "сучий", // Bitchy
  "трахать", // To fuck
  "уёбище", // Ugly freak (vulgar)
  "уёбок", // Freak / piece of shit
  "хер", // Dick (milder than хуй)
  "хуесос", // Cocksucker
  "хуила", // Big dick / asshole
  "хуёво", // Shitty (adverb)
  "целка", // Virgin (vulgar)
  "чмо", // Loser / freak
  "чмошник", // Loser
  "шваль", // Riff-raff
  "шлёндра", // Slut

  // хуй derivatives
  "похуй", // Don't give a fuck
  "похуизм", // Not-giving-a-fuck attitude
  "похуист", // One who doesn't give a fuck
  "нахуярить", // To do something intensely
  "отхуярить", // To beat up badly
  "прихуеть", // To be stunned (vulgar)
  "хуячить", // To do something hard/fast
  "хуяк", // Bam! (vulgar exclamation)
  "хуярить", // To hit / work hard
  "однохуйственно", // Makes no difference (vulgar)
  "хуеплёт", // Bullshitter
  "хуёвина", // Shitty thing
  "хуеглот", // Cockswallower
  "хуище", // Big dick (augmentative)
  "хуйло", // Dickhead
  "нихуя", // Nothing (vulgar) / No way
  "охуительный", // Fucking amazing
  "охуевший", // Stunned / insolent
  "подхуйник", // Underhanded person
  "расхуячить", // To smash to pieces
  "перехуярить", // To redo / to hit hard
  "прихуярить", // To attach / hit
  "отхуячить", // To beat severely
  "захуйня", // Nonsense
  "хуеватый", // Shitty (adj)
  "хуемразь", // Dick-scum

  // пизда derivatives
  "пиздануться", // To go crazy / to fall
  "припиздеть", // To bullshit a little
  "пиздострадатель", // Pussy-sufferer (simp)
  "опиздениться", // To go crazy
  "пиздёныш", // Little shit (from пизда)
  "подпиздывать", // To subtly bullshit
  "пиздатейший", // Fucking awesome (superlative)
  "пиздопрометчина", // Crazy mess
  "пиздюли", // Beating
  "отпиздить", // To beat up
  "пиздобол", // Liar (variant spelling)
  "пиздоглазый", // Cunt-eyed
  "пиздопляска", // Fucked-up situation
  "пиздорванка", // Torn-cunt (insult for woman)
  "спиздить", // To steal
  "напиздеть", // To lie a lot
  "пропиздеть", // To chat shit
  "запиздеть", // To start bullshitting

  // ебать derivatives
  "ёбнуть", // To hit / to drink
  "поебать", // To fuck a bit / don't care
  "выебать", // To fuck (perfective)
  "наебать", // To deceive
  "наебнуться", // To fall / crash
  "проебать", // To miss / lose
  "уебать", // To hit hard
  "приебаться", // To pester
  "доебаться", // To harass / pester
  "заебать", // To annoy the fuck out of
  "заёбанный", // Exhausted / fed up
  "поебень", // Nonsense / junk
  "ебанашка", // Crazy person
  "ебанько", // Idiot
  "ебля", // Fucking (noun)
  "ебальник", // Face (vulgar)
  "ёбтвоюмать", // Fuck your mother (one word)
  "ёбаный стыд", // Fucking shame
  "ебал в рот", // Fucked in the mouth
  "еблан", // Idiot / dumbfuck
  "ебанутый", // Crazy
  "объебать", // To cheat / swindle
  "переебать", // To fuck again / hit hard
  "разъебать", // To smash / destroy
  "съебаться", // To get the fuck out
  "уёбывать", // To flee / get out
  "ёбкий", // Fuckable / tricky
  "ёбнутьсяголовой", // To bang one's head

  // блядь derivatives
  "блядский", // Whorish
  "заблядовать", // To start whoring
  "блядешник", // Whorehouse
  "блядки", // Whoring around
  "блядунья", // Whore (fem)
  "блядослов", // Foul-mouthed person
  "приблядить", // To attract like a whore

  // говно derivatives
  "говнище", // Big/terrible shit
  "говняный", // Shitty
  "обговнять", // To shit on / smear
  "говнарь", // Shitty person
  "говнистый", // Shitty (adj)
  "говножуй", // Shit-chewer
  "говноляд", // Shitty situation
  "наговнять", // To make a mess of

  // Compound мат phrases
  "пизды дать", // To beat up
  "хуй соси", // Suck a dick
  "на хуй пошёл", // Go fuck yourself
  "ебал я", // I don't give a fuck
  "ебал я это", // Fuck this
  "ни хуя себе", // Holy fuck
  "ёб твою в душу мать", // Elaborate mother insult
  "пошла на хуй", // Go fuck yourself (fem)
  "ёперный театр", // Fucking hell (euphemistic)
  "хуй знает", // Who the fuck knows
  "хуй забей", // Fuck it / forget it
  "ёбаный рот", // Fucking mouth (exclamation)
  "пизда рулю", // Shit's fucked
  "ёб твою за ногу", // Fuck your (euphemistic)
  "ёбаная карусель", // Fucking carousel (exclamation)

  // More insults
  "лох", // Sucker / loser
  "лошара", // Bigger loser
  "лохушка", // Female loser
  "дебил", // Imbecile
  "кретин", // Cretin
  "даун", // Down (offensive use)
  "олигофрен", // Oligophrenic (slur)
  "недоумок", // Simpleton
  "ишак", // Donkey (insult)
  "баран", // Ram / idiot
  "козёл вонючий", // Stinking goat
  "тупица", // Stupid person
  "тупорылый", // Blunt-snouted / stupid
  "остолоп", // Blockhead
  "обалдуй", // Dimwit
  "оболтус", // Good-for-nothing
  "болван", // Blockhead
  "дурак", // Fool
  "дура", // Fool (fem)
  "идиот", // Idiot
  "идиотка", // Idiot (fem)
  "уродка", // Ugly woman
  "урод", // Ugly / freak
  "чучело", // Scarecrow / freak
  "чудовище", // Monster
  "скотина", // Beast / bastard
  "свинья", // Pig
  "свиноматка", // Sow (insult)
  "быдло", // Cattle / redneck
  "отморозок", // Frostbitten / thug
  "подлец", // Scoundrel
  "мерзавец", // Scoundrel
  "мерзавка", // Scoundrel (fem)
  "негодяй", // Villain
  "негодяйка", // Villain (fem)
  "ничтожество", // Nonentity
  "паскуда", // Scumbag
  "паскудник", // Scoundrel
  "гад", // Reptile / bastard
  "гадина", // Vile creature
  "гнида", // Nit / scumbag
  "падла", // Bastard (prison slang)
  "падаль", // Carrion / scum
  "пёс", // Dog (insult)
  "сволочь", // Bastard
  "сволочи", // Bastards (plural)
  "выродок", // Degenerate
  "дегенерат", // Degenerate
  "извращенец", // Pervert
  "педофил", // Pedophile
  "насильник", // Rapist
  "маньяк", // Maniac

  // Slurs / offensive
  "чурка", // Slur for Central Asians
  "хач", // Slur for Caucasians
  "чернож*пый", // Racial slur
  "черножопый", // Racial slur (unmasked)
  "жид", // Antisemitic slur
  "жидовка", // Antisemitic slur (fem)
  "жидовский", // Antisemitic (adj)
  "жидяра", // Antisemitic slur (augmentative)
  "пидрила", // Homophobic slur
  "петух", // Rooster / prison slur
  "опущенный", // Lowered / prison caste slur
  "хохол", // Slur for Ukrainians
  "хохлушка", // Slur for Ukrainian women
  "москаль", // Slur for Russians (from Ukrainian)
  "кацап", // Slur for Russians
  "чурбан", // Slur for Central Asians
  "чукча", // Ethnic slur
  "узкоглазый", // Slant-eyed (slur)
  "косоглазый", // Cross-eyed / slur for Asians
  "обезьяна", // Monkey (racial insult)
  "азер", // Slur for Azerbaijanis
  "даг", // Slur for Dagestanis
  "жидёныш", // Young Jew (slur)

  // Vulgar body parts
  "очко", // Asshole (lit. bullseye)
  "сракотан", // Big-assed person
  "елда", // Dick (archaic vulgar)
  "шишка", // Knob / dick (slang)
  "мохнатка", // Hairy one (vulgar for vagina)
  "булки", // Butt cheeks (slang)
  "жопень", // Ass (augmentative)
  "жопник", // Ass-person
  "жополиз", // Ass-licker
  "подзалупный", // Under the foreskin (adj)
  "промежность", // Perineum (vulgar context)
  "мудя", // Balls (vulgar)
  "муде", // Balls (archaic vulgar)
  "писька", // Wee-wee (childish vulgar)
  "письки", // Wee-wees (plural)
  "хрен", // Horseradish / dick (euphemism)

  // Internet slang / euphemisms
  "сука блять", // Bitch fuck (combo)
  "ёпт", // Euphemism for ёб
  "ёперный", // Euphemism for ёбаный
  "ёклмн", // Euphemistic expletive
  "ёпрст", // Euphemistic expletive
  "нахрен", // To hell (euphemism for нахуй)
  "пипец", // Euphemism for пиздец
  "офигеть", // Euphemism for охуеть
  "нафиг", // Euphemism for нахуй
  "фигня", // Euphemism for хуйня
  "блин", // Euphemism for блядь (borderline)
  "бляха муха", // Euphemism for блядь
  "ёшкин кот", // Euphemistic expletive
  "ядрёна вошь", // Euphemistic expletive
  "ядрёна кочерыжка", // Euphemistic expletive
  "пиздабратия", // Vulgar brotherhood
  "заебца", // Variant of заебись (great)
  "сукаблять", // Combined expletive (one word)
  "ёбаныйврот", // Combined expletive (one word)
  "хуйнуть", // To do something stupid

  // More vulgar / criminal slang
  "шмара", // Slut (criminal slang)
  "маруха", // Woman (criminal slang, derogatory)
  "фраер", // Outsider / sucker (criminal slang)
  "лоханка", // Female sucker
  "шняга", // Crap / junk
  "херня", // Crap (euphemism for хуйня)
  "хренов", // Crappy
  "хреновый", // Crappy
  "хреново", // Crappily
  "жопошник", // Assman (vulgar)
  "жёпа", // Ass (variant spelling)
  "задница", // Butt / ass
  "задрот", // Nerd / wanker (gaming slang)
  "гавнюк", // Shithead (variant spelling)
  "конча", // Cum (vulgar)
  "кончить", // To cum / to finish
  "сосатель", // Sucker (vulgar)
  "дрочер", // Wanker
  "подстилка", // Doormat / slut
  "курва", // Whore (from Polish/Ukrainian)
  "блядища", // Big whore (augmentative)
  "ёбанина", // Fucking mess
  "ебатория", // Fuckery
  "мудоёб", // Ball-fucker
  "мудошлёп", // Ball-slapper
  "пиздёнка", // Little cunt
  "елдак", // Dick (augmentative)
  "хуеман", // Dick-obsessed person

  // === EXPANSION: хуй derivatives ===
  "расхуярить", // To smash apart
  "нахуйник", // Annoying person (vulgar)
  "хуеплётство", // Bullshitting (noun)
  "хуеносец", // Dick-bearer (insult)
  "хуеватенько", // Kinda shitty
  "хуепутало", // Dick-scarecrow (insult)
  "хуесборник", // Dick-collector
  "хуетень", // Bullshit / nonsense
  "захуячить", // To hurl / do intensely
  "выхуяривать", // To extract forcefully
  "обхуярить", // To cheat / beat
  "подхуячить", // To sneak-attach
  "хуякнуть", // To slam / hit suddenly
  "хуевертить", // To do shit
  "хуеверт", // Nonsense / carousel of shit
  "охуевать", // To be continuously stunned
  "охуенно", // Fucking awesome (adverb)
  "похуйчик", // Don't-give-a-fuck (diminutive)
  "нахуячиться", // To get wasted
  "захуяченный", // Thrown / done intensely
  "хуйнёй страдать", // To waste time on bullshit
  "хуеватость", // Shittiness
  "хуеблядский", // Whore-dick (compound adj)
  "хуепромышленник", // Dick-industrialist (insult)
  "хуемудрый", // Dick-wise (sarcastic)
  "хуедрыга", // Dick-shaker

  // === EXPANSION: пизда derivatives ===
  "пиздатенько", // Fucking nicely (diminutive)
  "пиздюлина", // A beating / hit
  "пиздохать", // To die / kick the bucket
  "пиздобратство", // Vulgar brotherhood
  "пиздоватый", // Cunt-ish
  "пиздострадание", // Pussy-suffering (simping)
  "пиздопроёб", // Cunt-fuckup
  "пиздохвост", // Cunt-tail
  "пиздюган", // Big shit (augmentative)
  "пиздюшка", // Little cunt (diminutive)
  "пиздоглот", // Cunt-swallower
  "пиздохранилище", // Cunt-storage (insult)
  "пиздопромёт", // Cunt-thrower
  "впиздячить", // To slam into
  "пиздовать", // To go / march (vulgar)
  "пиздецовый", // Disastrous (adj)
  "пиздецома", // Total disaster
  "запиздячить", // To throw in / start doing hard
  "отпиздячить", // To beat severely
  "пиздюля", // A slap / punch
  "пропиздон", // Total fuckup
  "пиздоблядство", // Cunt-whoring
  "пиздюнчик", // Little shit (affectionate vulgar)
  "пиздоглазие", // Cunt-eyedness

  // === EXPANSION: ебать derivatives ===
  "заебашить", // To smash / do something hard
  "ебашить", // To work hard / hit
  "отъебать", // To fuck off / beat up
  "поёбывать", // To fuck occasionally
  "подъебать", // To make fun of
  "подъёбка", // A subtle mockery
  "подъебнуть", // To subtly mock
  "наёбка", // A scam / deception
  "наёбщик", // A scammer
  "проёб", // A fuckup / miss
  "заёб", // Annoyance
  "разъёб", // Destruction
  "въебать", // To hit / slam
  "въёбывать", // To work hard
  "уебан", // Dumbfuck
  "уёбищный", // Ugly / freakish
  "ебанутость", // Craziness
  "ебанариум", // Place of crazy people
  "ебанаврот", // Fuck in the mouth (exclamation)
  "ебанарот", // Fuck in the mouth (variant)
  "ебланство", // Idiocy
  "еблище", // Face (vulgar augmentative)
  "ёбаный насос", // Fucking pump (exclamation)
  "ёбаная сила", // Fucking power (exclamation)
  "разъебай", // Irresponsible person
  "разъебайство", // Irresponsibility
  "ёбнуться", // To go crazy / fall hard
  "заёбистый", // Tiring / annoying
  "перезаебать", // To annoy again
  "объёбывать", // To cheat continuously
  "недоёбанный", // Underfucked

  // === EXPANSION: говно derivatives ===
  "говнюшка", // Little shit (diminutive)
  "говнодав", // Shit-stomper
  "говнотёк", // Shit-flow
  "говнокод", // Shit code (IT slang)
  "говномес", // Shit-mixer
  "говноляп", // Shit-stainer
  "говнолаз", // Shit-climber (plumber insult)
  "говнотечь", // Shit-leak
  "говнохлёб", // Shit-slurper
  "говновоз", // Shit-hauler
  "говнища", // Lots of shit (augmentative)
  "говнистость", // Shittiness
  "приговнять", // To add shit to
  "выговнять", // To shit out
  "подговнить", // To sneak shit
  "обговняться", // To cover oneself in shit
  "говнюшник", // Shit-house / shit person

  // === EXPANSION: блядь derivatives ===
  "блядюга", // Big whore (augmentative)
  "блядовитый", // Whorish (adj)
  "блядоход", // Whore-goer
  "блядиада", // Whoring event / olympics
  "блядогон", // Whore-chaser
  "блядовство", // Whorish behavior
  "блядюшка", // Little whore (diminutive)
  "заблядить", // To start whoring
  "проблядиться", // To whore away
  "приблядывать", // To act whorish
  "блядский рот", // Whorish mouth (exclamation)
  "блядина ёбаная", // Fucking whore

  // === EXPANSION: More insults ===
  "имбецил", // Imbecile
  "дебилка", // Imbecile (fem)
  "кретинка", // Cretin (fem)
  "тупица безмозглая", // Brainless fool
  "безмозглый", // Brainless
  "пустоголовый", // Empty-headed
  "тупоголовый", // Blunt-headed / stupid
  "туполобый", // Thick-browed / stupid
  "баранина", // Mutton / stupid person
  "тупой как пробка", // Dumb as a cork
  "козлина", // Goat (augmentative insult)
  "козлиха", // She-goat (insult)
  "козлодой", // Goat-milker (insult)
  "скотобаза", // Cattle base / shithole
  "свинтус", // Pig (playful insult)
  "свинёныш", // Little pig (insult)
  "уродина", // Ugly person (augmentative)
  "уродец", // Little freak
  "выродочка", // Degenerate (diminutive fem)
  "моральный урод", // Moral freak
  "мразота", // Scum (augmentative)
  "мразотень", // Scum (variant)
  "мразёныш", // Little scum
  "тварюга", // Big creature / scum
  "тварина", // Creature (augmentative)
  "гадёныш", // Little vile creature
  "гадёнышка", // Little vile creature (fem)
  "гадство", // Vileness
  "гнидоёб", // Nit-fucker (compound insult)
  "бестолочь", // Blockhead / useless person
  "шваброид", // Mop-oid (insult)
  "рожа", // Mug / ugly face
  "морда", // Snout / face (vulgar)
  "харя", // Ugly mug
  "мордоворот", // Face-turner (ugly person)
  "рукожоп", // Ass-handed / clumsy person
  "криворукий", // Crooked-handed / incompetent
  "слабоумный", // Feeble-minded
  "придурочный", // Idiotic
  "полоумный", // Half-witted
  "шизанутый", // Schizo (slang insult)
  "шизик", // Schizo (diminutive)
  "психопат", // Psychopath
  "психованный", // Psycho (adj)
  "ненормальный", // Abnormal / crazy
  "бесноватый", // Possessed / frenzied
  "чертила", // Devil-person
  "шпана", // Riff-raff / punk
  "гопник", // Gopnik / thug
  "гопота", // Gopnik collective
  "быдлота", // Cattle-people
  "быдлятина", // Cattle-person
  "бомжара", // Bum (augmentative)
  "бомжатник", // Bum-house
  "алкаш", // Drunkard
  "алкашня", // Drunkards (collective)
  "алкоголик", // Alcoholic
  "наркоман", // Drug addict
  "наркоша", // Drug addict (slang)
  "нарик", // Drug addict (short slang)
  "торчок", // Junkie

  // === EXPANSION: Criminal / prison slang ===
  "опущенец", // Lowered one (prison caste)
  "петушня", // Roosters / prison bottoms
  "петушить", // To humiliate (prison)
  "петушиный", // Rooster-like / humiliated
  "козлить", // To rat / betray (prison)
  "стукач", // Snitch
  "крысятник", // Rat-hole / place of thieves
  "крыса", // Rat / thief from own people
  "баклан", // Hooligan (prison slang)
  "бакланить", // To act like a hooligan
  "шестёрка", // Errand boy (prison hierarchy)
  "барыга", // Dealer / speculator
  "мусор", // Cop (criminal slang, derogatory)
  "мент", // Cop (derogatory)
  "ментяра", // Cop (augmentative derogatory)
  "мусорня", // Cops (collective, derogatory)
  "легавый", // Cop (derogatory, lit. hound)
  "борзый", // Impudent / brash
  "беспредел", // Lawlessness / chaos
  "беспредельщик", // Lawless person
  "наехать", // To threaten / harass
  "кидала", // Scammer
  "кидалово", // Scam
  "лохотрон", // Scam scheme
  "чмырить", // To humiliate
  "чмырь", // Humiliated loser
  "зашквар", // Disgrace / shame (prison-origin)
  "зашкварный", // Disgraced (adj)
  "зашквариться", // To disgrace oneself
  "опустить", // To humiliate / lower rank
  "ссученный", // Bitched-out / traitor
  "ссучиться", // To become a traitor
  "козёл отпущения", // Scapegoat
  "шконка", // Prison bunk (used as insult context)
  "параша", // Prison toilet / shit
  "шлак", // Slag / trash person
  "шлакоблок", // Slag-block (insult)
  "фуфло", // Fake / bullshit (prison)
  "фуфлыжник", // Faker / debt-dodger
  "фраерок", // Little sucker
  "терпила", // Victim / pushover

  // === EXPANSION: More slurs ===
  "пидорок", // Little faggot (diminutive)
  "пидорня", // Faggots (collective)
  "пидарас", // Faggot (variant spelling)
  "пидораска", // Faggot (fem-ized insult)
  "гомосек", // Homosexual (derogatory)
  "гомосятина", // Gay stuff (derogatory)
  "лесбиянка", // Lesbian (can be derogatory in context)
  "лезбуха", // Dyke (slang)
  "трансуха", // Trans person (derogatory)
  "голубой", // Gay (lit. light blue, derogatory)
  "мужеложец", // Sodomite (archaic slur)
  "хачик", // Slur for Caucasians (diminutive)
  "чурбанина", // Block / slur for Central Asians
  "чурек", // Slur for Caucasians
  "чуркестан", // Slur-land for Central Asians
  "чёрный", // Black (used as racial slur)
  "чернильница", // Inkwell (slur for woman with Black partners)
  "жидовня", // Jews (collective slur)
  "жидовствовать", // To act Jewish (antisemitic)
  "жидовморда", // Jew-face (slur)
  "москалька", // Slur for Russian woman (from Ukrainian)
  "хохляндия", // Ukraine (derogatory)
  "хохлятина", // Ukrainian stuff (derogatory)
  "кацапня", // Russians (collective, derog from Ukr.)
  "чечен", // Chechen (derogatory usage)
  "чеченина", // Chechen stuff (derogatory)
  "армяшка", // Armenian (derogatory diminutive)
  "грузинёнок", // Young Georgian (derogatory)
  "таджичка", // Tajik woman (derogatory usage)

  // === EXPANSION: More sexual / body part terms ===
  "клитор", // Clitoris
  "анус", // Anus
  "промежуток", // Crotch area
  "титька", // Tit (vulgar)
  "титьки", // Tits (vulgar)
  "жопка", // Little ass (diminutive)
  "жопища", // Big ass (augmentative)
  "сракотанище", // Big-assed (augmentative)
  "мудень", // Ballsack person
  "яйца", // Balls (lit. eggs)
  "яички", // Little balls / testicles
  "подмахивать", // To thrust from below
  "отсосать", // To suck off
  "отсос", // Blowjob
  "куни", // Cunnilingus (slang)
  "куннилингус", // Cunnilingus
  "анилингус", // Analingus
  "фелляция", // Fellatio
  "дрочка", // Jerking off (noun)
  "подрочить", // To jerk off (a bit)
  "надрочить", // To jerk off (a lot)
  "передёрнуть", // To jerk off (euphemism)
  "кончина", // Orgasm / death (vulgar pun)
  "обкончать", // To cum all over
  "шлюховатый", // Slutty (adj)
  "шлюшка", // Little slut
  "потаскушка", // Little harlot
  "потрахаться", // To fuck (a bit)
  "перепихнуться", // To have a quickie
  "перепих", // A quickie
  "перепихон", // A quickie (variant)
  "залупоглазый", // Glans-eyed (insult)
  "залупистый", // Dickish (adj)
  "елдовый", // Dick-related (adj)
  "пенис", // Penis
  "вагина", // Vagina

  // === EXPANSION: Compound phrases ===
  "пошёл в жопу", // Go to hell / fuck off
  "отсоси", // Suck it
  "ебал твою мать", // Fucked your mother
  "иди в жопу", // Go to hell
  "иди в пизду", // Go to a cunt
  "в пизду", // To a cunt / fuck it
  "пошёл в пизду", // Go to a cunt
  "ни хуя не понимаю", // Don't understand a fucking thing
  "да пошёл ты", // Fuck off (mild)
  "ёбаный ты в рот компот", // Fucking compote (elaborate excl.)
  "ёб твоя медь", // Fuck your copper (euphemistic)
  "мать твою", // Your mother (implied insult)
  "мать твою за ногу", // Your mother by the leg
  "ебись оно конём", // Let it fuck a horse
  "ёбаный в сраку", // Fucked in the ass
  "пиздуй отсюда", // Get the fuck out of here
  "хуй тебе", // Dick to you / no way
  "хуй тебе в зубы", // Dick in your teeth
  "жопой чую", // I feel with my ass (intuition)
  "жри говно", // Eat shit
  "сосёшь", // You suck
  "сасай лалку", // Suck it (internet meme)
  "уёбывай", // Get the fuck out
  "катись нахуй", // Roll the fuck away
  "закрой ебало", // Shut your fucking mouth
  "закрой хлебало", // Shut your bread-hole
  "язви тебя", // Damn you (archaic vulgar)
  "язви твою мать", // Damn your mother (archaic)
  "ёбаный бог", // Fucking god
  "сука ёбаная", // Fucking bitch
  "блять ёбаная", // Fucking whore

  // === EXPANSION: Internet / modern slang ===
  "хейтер", // Hater (transliteration)
  "сукаблядь", // Bitch-whore (one word)
  "ебанавшё", // Fuck everything (slang)
  "пиздёшь", // You're lying (internet)
  "ёбушки-воробушки", // Euphemistic exclamation
  "ёпта", // Euphemism for ёб (internet)
  "писос", // Pizdec (coded internet)
  "пздц", // Pizdec (abbreviation)
  "бля", // Blyat (shortened)
  "ёмаё", // Euphemistic exclamation
  "ебучий", // Fucking (adj)
  "ебучка", // Fucking thing
  "сучара", // Big bitch (augmentative)
  "сучёныш", // Son of a bitch (lit.)
  "потрахушки", // Fuck-games (diminutive)
  "ёбаное оно", // Fucking it
  "хуйлан", // Dick-person (insult)
  "хуйланить", // To act like a dick
  "блядовня", // Whorehouse / mess
  "пиздострадалец", // Pussy-sufferer (variant)
  "мудопрыг", // Ball-jumper (insult)
  "мудосос", // Ball-sucker
  "ёбырь", // Fucker (colloquial)
  "залупень", // Dick-head (from залупа)
  "залупенция", // Dick-headedness
  "разъебон", // Smash-up
  "пиздец подкрался", // Disaster crept up
  "жизнь говно", // Life is shit
  "всё хуйня", // Everything is bullshit
  "ёбаный крот", // Fucking mole (exclamation)
  "ёбаный ёж", // Fucking hedgehog (exclamation)
  "ёбаный лось", // Fucking moose (exclamation)
  "мудозвонить", // To ring balls / talk nonsense
  "мудохать", // To beat up
  "мудохаться", // To fight / toil

  // === EXPANSION: Transliterated Russian profanity (Latin letters) ===
  "suka", // Bitch (transliterated)
  "blyad", // Whore (transliterated)
  "blyat", // Fuck exclamation (transliterated)
  "blyadt", // Whore variant (transliterated)
  "blya", // Fuck short (transliterated)
  "pizda", // Cunt (transliterated)
  "pizdec", // Fucking disaster (transliterated)
  "pizdets", // Fucking disaster variant (transliterated)
  "hui", // Dick (transliterated)
  "huy", // Dick variant (transliterated)
  "khuy", // Dick variant (transliterated)
  "nahui", // Fuck off (transliterated)
  "nahuy", // Fuck off variant (transliterated)
  "nakhui", // Fuck off variant (transliterated)
  "nakhuy", // Fuck off variant (transliterated)
  "ebat", // To fuck (transliterated)
  "ebal", // Fucked (transliterated)
  "yebat", // To fuck variant (transliterated)
  "yobaniy", // Fucking adj (transliterated)
  "yobany", // Fucking adj variant (transliterated)
  "ebaniy", // Fucking adj variant (transliterated)
  "ebany", // Fucking adj variant (transliterated)
  "mudak", // Asshole (transliterated)
  "mudilo", // Dumbass (transliterated)
  "pidor", // Faggot (transliterated)
  "pidoras", // Faggot variant (transliterated)
  "pidaras", // Faggot variant (transliterated)
  "gandon", // Condom/scumbag (transliterated)
  "gondon", // Condom/scumbag variant (transliterated)
  "gavno", // Shit (transliterated)
  "govno", // Shit variant (transliterated)
  "dermo", // Shit variant (transliterated)
  "zalupa", // Glans/dickhead (transliterated)
  "zhopa", // Ass (transliterated)
  "manda", // Cunt (transliterated)
  "huynya", // Bullshit (transliterated)
  "khuynya", // Bullshit variant (transliterated)
  "huinya", // Bullshit variant (transliterated)
  "pizdezh", // Bullshit/lies (transliterated)
  "dolboyob", // Dumbfuck (transliterated)
  "dolboeb", // Dumbfuck variant (transliterated)
  "yobaniy v rot", // Fucked in the mouth (transliterated)
  "ebaniy v rot", // Fucked in the mouth variant (transliterated)
  "idi nahui", // Go fuck yourself (transliterated)
  "idi nakhuy", // Go fuck yourself variant (transliterated)
  "poshyol nahui", // Go fuck yourself (transliterated)
  "poshel nahui", // Go fuck yourself variant (transliterated)
  "poshol nahuy", // Go fuck yourself variant (transliterated)
  "suchka", // Little bitch (transliterated)
  "ublyudok", // Bastard (transliterated)
  "blyadina", // Whore augmentative (transliterated)
  "huesos", // Cocksucker (transliterated)
  "khuyesos", // Cocksucker variant (transliterated)
  "ebanashka", // Crazy person (transliterated)
  "ebanko", // Idiot (transliterated)
  "eblan", // Idiot (transliterated)
  "ueban", // Dumbfuck (transliterated)
  "uyoban", // Dumbfuck variant (transliterated)
  "chmo", // Loser (transliterated)
  "tvar", // Scumbag (transliterated)
  "mraz", // Scum (transliterated)
  "padla", // Bastard (transliterated)
  "loh", // Sucker (transliterated)
  "loshara", // Loser (transliterated)
  "debil", // Imbecile (transliterated)
  "urod", // Ugly/freak (transliterated)
  "huilo", // Dickhead (transliterated)
  "khuylo", // Dickhead variant (transliterated)
  "pizdabol", // Liar (transliterated)
  "pizdabolshik", // Liar variant (transliterated)
  "svoloch", // Bastard (transliterated)
  "govnyuk", // Shithead (transliterated)
  "zasranec", // Little shit (transliterated)
  "der'mo", // Shit (transliterated with apostrophe)
  "pohuy", // Don't give a fuck (transliterated)
  "pokhuy", // Don't give a fuck variant (transliterated)
  "zaebis", // Fucking great (transliterated)
  "zayebis", // Fucking great variant (transliterated)
  "ohuet", // Holy fuck (transliterated)
  "okhuyet", // Holy fuck variant (transliterated)
  "ebalo", // Face vulgar (transliterated)
  "ebalnik", // Face vulgar (transliterated)
  "drochit", // To jerk off (transliterated)
  "drochat", // To jerk off variant (transliterated)
  "trahnut", // To fuck (transliterated)
  "trahat", // To fuck variant (transliterated)
  "shlyuha", // Slut (transliterated)
  "shalava", // Slut (transliterated)
  "kurva", // Whore (transliterated)
  "bydlo", // Cattle/redneck (transliterated)
  "gopnik", // Gopnik (transliterated)
  "churka", // Central Asian slur (transliterated)
  "khach", // Caucasian slur (transliterated)
  "pizduk", // Little shit (transliterated)
  "nahren", // To hell euphemism (transliterated)
  "nafig", // To hell euphemism (transliterated)
  "yopt", // Euphemism for fuck (transliterated)
  "yopta", // Euphemism for fuck (transliterated)
  "ssat", // To piss (transliterated)
  "srat", // To shit (transliterated)
  "perdun", // Old fart (transliterated)
  "ochko", // Asshole (transliterated)
  "elda", // Dick archaic (transliterated)
  "hren", // Dick euphemism (transliterated)

  // === EXPANSION: More мат compound phrases ===
  "пошёл ты", // Fuck off
  "да пошла ты", // Fuck off (to a woman)
  "иди ты в жопу", // Go to hell / shove it
  "сосать мой хуй", // Suck my dick
  "соси мой хуй", // Suck my dick (imperative)
  "ебал я твою мать", // I fucked your mother
  "ебал твоего отца", // I fucked your father
  "я тебя ебал", // I fucked you
  "твою мать ебал", // Fucked your mother
  "мать твою ебал", // Fucked your mother (reordered)
  "ебал в рот твою мать", // Fucked your mother in the mouth
  "ёб твою бабушку", // Fuck your grandmother
  "хуй тебе в глотку", // Dick down your throat
  "хуй на рыло", // Dick to the snout
  "хуй в зубы", // Dick in the teeth
  "хуй моржовый", // Walrus dick (exclamation)
  "ебись в глаз", // Fuck yourself in the eye
  "ебись конём", // Fuck yourself with a horse
  "ебись в рот", // Fuck yourself in the mouth
  "жри хуй", // Eat a dick
  "пизда тебе", // You're fucked
  "в рот ебать", // To fuck in the mouth
  "в жопу ебать", // To fuck in the ass
  "ебать тебя в ухо", // Fuck you in the ear
  "ебать тебя конём", // Fuck you with a horse
  "ебись ты конём", // Fuck yourself with a horse
  "пошёл ты на хер", // Go to hell (mild)
  "катись на хуй", // Roll to a dick
  "катись в жопу", // Roll into an ass
  "пиздуй нахуй", // Get the fuck out
  "пиздуй отсюда нахуй", // Get the fuck away from here
  "сука ты ёбаная блять", // Fucking bitch whore
  "ебать-колотить", // Fuck-bang (exclamation)
  "ёбаный в душу", // Fucked in the soul
  "ебать мои глаза", // Fuck my eyes
  "ёбаный в рот крокодил", // Fucking crocodile in the mouth
  "ёбаный стос", // Fucking hundred (exclamation)
  "в жопу ёбаный", // Fucked in the ass
  "хуй ли", // What the fuck (question)
  "какого хуя", // What the fuck
  "за каким хуем", // For what the fuck
  "хуем груши околачивать", // Knocking pears with a dick (wasting time)
  "ебать как здорово", // Fuck how great
  "ни ебёт ни колышет", // Doesn't fuck or sway (doesn't care)
  "ебу как хочу", // I fuck as I want
  "ебало завали", // Shut your fucking face
  "пизда тебе рыжая", // The redheaded cunt is coming for you
  "ёбаный хуй в рот", // Fucking dick in the mouth
  "хуй пойми", // Impossible to understand

  // === EXPANSION: More slang insults ===
  "лошпед", // Loser (slang distortion)
  "лузер", // Loser (transliteration)
  "неудачник", // Loser
  "неудачница", // Loser (fem)
  "тупень", // Thicko
  "тупняк", // Stupidity / daze
  "дуболом", // Oaf (lit. oak-breaker)
  "дубина", // Club / blockhead
  "дундук", // Blockhead
  "балда", // Blockhead
  "олух", // Oaf
  "олух царя небесного", // Oaf of the heavenly king
  "лапоть", // Bast shoe / yokel
  "валенок", // Felt boot / simpleton
  "деревенщина", // Peasant (insult)
  "колхозник", // Collective farmer (insult)
  "колхозница", // Collective farmer fem (insult)
  "жлоб", // Cheapskate / boor
  "жлобяра", // Big cheapskate
  "жмот", // Miser
  "скупердяй", // Skinflint
  "хам", // Boor / rude person
  "хамло", // Rude person (augmentative)
  "хамка", // Rude woman
  "наглец", // Impudent person
  "наглая морда", // Impudent snout
  "борзота", // Impudence collective
  "ёбко", // Sharply (vulgar adv)
  "фуфел", // Fake / loser
  "лопух", // Burdock / sucker
  "растяпа", // Butterfingers
  "размазня", // Wimp / weakling
  "слюнтяй", // Sniveler
  "нюня", // Crybaby
  "сопляк", // Snot-nosed kid
  "сопли жевать", // To chew snot (to be indecisive)
  "молокосос", // Milksop
  "сморчок", // Morel / old wrinkled person
  "шкура", // Skin / gold-digger
  "шкурница", // Gold-digger (fem)
  "содержанка", // Kept woman
  "подстилка блядская", // Whorish doormat
  "подзаборная шлюха", // Under-the-fence whore
  "вертихвостка", // Tail-wagger / flirt
  "потаскун", // Male slut
  "развратник", // Debaucher
  "развратница", // Debaucher (fem)
  "распутник", // Libertine
  "распутница", // Libertine (fem)
  "бабник", // Womanizer
  "кобель", // Male dog / womanizer
  "кобелина", // Big womanizer
  "самец", // Male / stud (derogatory)
  "самка", // Female / bitch (derogatory)
  "животное", // Animal (insult)
  "скот", // Cattle (insult)
  "грязная свинья", // Dirty pig
  "жирная корова", // Fat cow
  "жирный боров", // Fat boar
  "жирдяй", // Fatso
  "жиртрест", // Fat trust / fatso
  "толстожопый", // Fat-assed
  "толстожопая", // Fat-assed (fem)

  // === EXPANSION: More criminal/prison argot ===
  "козлятник", // Goat pen / informers' area
  "козлиная порода", // Goat breed (insult)
  "козёл вонючий ёбаный", // Stinking fucking goat
  "петушиный угол", // Rooster corner (prison bottom area)
  "петушок", // Little rooster / prison bottom
  "петушара", // Prison bottom (augmentative)
  "обиженный", // Offended / prison outcast
  "обиженка", // Female outcast
  "опущенка", // Lowered one (fem)
  "вафлёр", // Cocksucker (prison slang)
  "вафлить", // To give blowjob (prison slang)
  "вафля", // Blowjob (prison slang)
  "отпетый", // Incorrigible / hardened criminal
  "рецидивист", // Repeat offender
  "урка", // Criminal (slang)
  "уркаган", // Criminal (augmentative)
  "блатной", // Criminal class member
  "блатняк", // Criminal slang/culture
  "авторитет", // Authority (criminal boss)
  "вор в законе", // Thief in law (crime boss)
  "мокрушник", // Killer (criminal slang)
  "мочить", // To wet / to kill (slang)
  "замочить", // To kill (slang)
  "завалить", // To bring down / kill (slang)
  "грохнуть", // To bang / kill (slang)

  "шмаль", // Weed / hashish (slang)
  "дурь", // Stupidity / drugs (slang)
  "ширяться", // To inject drugs
  "ширка", // Drug injection
  "обдолбанный", // Stoned / wasted
  "обдолбыш", // Stoned person
  "укуренный", // Stoned (from smoking)
  "нарколыга", // Drug addict (derogatory)
  "кумарить", // To be high / tripping
  "торчать", // To be high / addicted
  "закладка", // Drug stash / dead drop
  "барыжить", // To deal (drugs/goods)
  "фуфлогон", // Faker / bullshitter (prison)
  "фуфлогонить", // To fake / bullshit (prison)
  "косяк", // Joint / fuckup
  "косячить", // To fuck up
  "лажа", // Crap / fake
  "лажовый", // Crappy / fake
  "залажать", // To fuck up
  "обсосок", // Sucked-on / worthless person
  "огрызок", // Stub / pathetic person
  "отброс", // Reject / waste
  "отбросы общества", // Dregs of society
  "шваль подзаборная", // Under-the-fence riff-raff
  "пропитый", // Drunk through / alcoholic
  "пропойца", // Drunkard
  "алкашка", // Female drunkard
  "синяк", // Blue / drunkard
  "синячка", // Female drunkard
  "забулдыга", // Drunkard / bum
  "скурвиться", // To become a whore / traitor

  // === EXPANSION: More homophobic slurs ===
  "пидорок ёбаный", // Fucking little faggot
  "пидор гнойный", // Pus-filled faggot
  "гомик", // Gay (derogatory diminutive)
  "гомосятник", // Gay hangout (derogatory)
  "задницелюб", // Ass-lover (derogatory)
  "жопник ёбаный", // Fucking ass-person
  "педрила", // Faggot (variant)
  "педераст", // Pederast
  "педерастия", // Pederasty
  "содомит", // Sodomite
  "содомия", // Sodomy
  "петух гамбургский", // Hamburg rooster (elaborate prison slur)
  "гребень", // Crest / prison bottom marker
  "пидорнутый", // Faggotized
  "опидорасить", // To make into a faggot
  "опидораситься", // To become a faggot
  "пидорство", // Faggotry
  "лесбиянка ёбаная", // Fucking lesbian
  "лесбуха грёбаная", // Fucking dyke
  "транс", // Trans (derogatory usage)
  "трансвестит", // Transvestite (derogatory)

  // === EXPANSION: More ethnic/racial slurs ===
  "чурбанина ёбаная", // Fucking block/Central Asian
  "чурка немытая", // Unwashed churka
  "черномазый", // Black-faced (racial slur)
  "черномазая", // Black-faced fem (racial slur)
  "чёрнож*пые", // Black-assed plural (racial slur)
  "жидяра пархатый", // Mangy Jew (slur)
  "жидёнок пейсатый", // Payot-wearing young Jew (slur)
  "жидовская морда", // Jewish face (slur)
  "пархатый", // Mangy / antisemitic slur
  "пейсатый", // Payot-wearing (antisemitic)
  "абрек", // Caucasian warrior / slur
  "хачик ёбаный", // Fucking Caucasian (slur)
  "ара", // Hey (Caucasian, used as slur)
  "даг ёбаный", // Fucking Dagestani (slur)
  "чечня ёбаная", // Fucking Chechnya (slur)
  "хохлы ёбаные", // Fucking Ukrainians (slur)
  "москальская рожа", // Muscovite mug (slur)
  "кацапня ёбаная", // Fucking Russians (from Ukrainian)
  "узкоглазая морда", // Slant-eyed face (slur)
  "чукотка", // Chukotka (used as insult)
  "чинарик", // Cigarette butt / Asian slur
  "цыган", // Gypsy (derogatory)
  "цыганка", // Gypsy woman (derogatory)
  "цыганьё", // Gypsies collective (derogatory)
  "цыганва", // Gypsies collective (vulgar)
  "нехристь", // Non-Christian / heathen (insult)
  "басурман", // Infidel (archaic slur)
  "мигрант ёбаный", // Fucking migrant
  "гастарбайтер", // Guest worker (derogatory usage)
  "понаехали", // They've all come here (xenophobic)
  "понаехавший", // One who came here (xenophobic)

  // === EXPANSION: More sexual terms ===
  "ебать в жопу", // To fuck in the ass
  "ебать в рот", // To fuck in the mouth
  "совокупляться", // To copulate (vulgar context)
  "совокупление", // Copulation
  "траханье", // Fucking (noun)
  "сношение", // Intercourse
  "половой акт", // Sexual act
  "групповуха", // Group sex
  "тройничок", // Threesome (diminutive)
  "свингер", // Swinger
  "свингерство", // Swinging
  "секс-рабыня", // Sex slave
  "секс-раб", // Sex slave (masc)
  "изнасилование", // Rape
  "изнасиловать", // To rape
  "растление", // Corruption / molestation
  "растлитель", // Molester
  "совратить", // To seduce / corrupt
  "совратитель", // Seducer / corrupter
  "педофилия", // Pedophilia
  "инцест", // Incest
  "некрофилия", // Necrophilia
  "зоофилия", // Zoophilia
  "скотоложство", // Bestiality
  "скотоложец", // Person practicing bestiality

  "проститутка", // Prostitute
  "проститутка ёбаная", // Fucking prostitute
  "путана", // Prostitute (from Italian)
  "блядей ебать", // To fuck whores
  "ёбарь-террорист", // Fucker-terrorist (insult)
  "ебарь конченый", // Finished fucker
  "кончить на лицо", // To cum on face
  "кончить в рот", // To cum in mouth
  "сосать хуй", // To suck dick
  "лизать пизду", // To lick pussy
  "лизать жопу", // To lick ass
  "лизоблюд", // Ass-licker / sycophant
  "анальный секс", // Anal sex
  "вагинальный секс", // Vaginal sex
  "оральный секс", // Oral sex
  "глубокий минет", // Deep blowjob
  "глотать сперму", // To swallow cum
  "дрочить хуй", // To jerk a dick
  "фистинг", // Fisting
  "золотой дождь", // Golden shower
  "копрофилия", // Coprophilia

  // === EXPANSION: More vulgar body parts ===
  "жопище", // Big ass (augmentative variant)
  "срака", // Ass (vulgar)
  "сракотанина", // Ass-person (augmentative)
  "мудасос", // Ball-sucker
  "яйцевёрт", // Ball-turner
  "яйцелом", // Ball-breaker
  "мохнорылый", // Hairy-snouted
  "волосатая пизда", // Hairy cunt
  "дырка", // Hole (vulgar for vagina/ass)
  "щель", // Slit (vulgar)
  "щёлка", // Little slit (vulgar)
  "пилотка", // Garrison cap / vulgar for vagina
  "манда рваная", // Torn cunt
  "пизда драная", // Torn cunt (variant)
  "жопа волосатая", // Hairy ass
  "пиздищe", // Big cunt (augmentative)
  "хуйчик", // Little dick (diminutive)
  "хуишко", // Pathetic dick
  "членище", // Big dick (augmentative)
  "членистоногий", // Arthropod / dick-legged (pun insult)
  "клиторишко", // Pathetic clitoris

  // === EXPANSION: Regional Ukrainian-Russian crossover ===
  "сука бляд", // Bitch whore (crossover)
  "йобаний", // Fucking (Ukrainian spelling in Russian)
  "йобана мати", // Fucking mother (Ukrainian crossover)
  "курва ёбаная", // Fucking whore (Polish/Ukrainian crossover)
  "курвяще", // Whoring (Ukrainian crossover)
  "пішов нахуй", // Go fuck yourself (Ukrainian)
  "гандон штопаный", // Darned condom
  "гондон рваный", // Torn condom
  "сучья потроха", // Bitch's innards
  "ёб твою суку мать", // Fuck your bitch mother
  "пиздюк малолетний", // Underage little shit
  "пиздюшка мелкая", // Tiny little cunt
  "ёбаный пидор", // Fucking faggot
  "мудак конченый", // Finished asshole
  "мудак штопаный", // Darned asshole
  "ёбаный мудила", // Fucking dumbass
  "хуй собачий", // Dog's dick
  "хуй лошадиный", // Horse's dick
  "ебанарот ёбаный", // Fucking fucked-in-mouth
  "пиздабол хренов", // Crappy liar

  // === EXPANSION: Internet meme-based profanity ===
  "сасай", // Suck (internet distortion)
  "сасай нижний", // Suck from below (internet meme)
  "рот ебал", // Mouth fucked (internet)
  "иди лесом", // Go through the forest (go away)
  "пнх", // Go fuck yourself (abbreviation)
  "нах", // Fuck (abbreviation)
  "бля буду", // I swear (vulgar)
  "ёбанаврот", // Fucked in mouth (one word internet)
  "хуяссе", // Holy fuck (internet spelling)
  "нихуясебе", // Holy fuck (one word)
  "ёпт блять", // Fuck damn (combined)
  "ёпта мать", // Fuck mother (internet)
  "хуита", // Bullshit (internet slang)
  "хуитка", // Little bullshit (internet)
  "залупаться на ровном месте", // To be a dick for no reason
  "ебанутая хуйня", // Crazy bullshit
  "пиздёшь как дышишь", // You lie like you breathe
  "ты чё ебанутый", // Are you fucking crazy
  "совсем ёбнулся", // Completely lost it
  "охуел в край", // Gone completely insane
  "ахуеть дайте два", // Holy fuck give me two (meme)
  "пиздец котёнку", // Disaster for the kitten (meme)
  "жопа мира", // Ass of the world (middle of nowhere)
  "ёбаный стыд блять", // Fucking shame damn
  "дно ёбаное", // Fucking bottom (worst of worst)
  "хуйня на постном масле", // Bullshit on lean oil (nonsense)
  "жизнь-боль", // Life is pain
  "шлюха подзаборная ёбаная", // Fucking under-the-fence whore
  "кусок говна", // Piece of shit
  "мешок с говном", // Bag of shit
  "бочка с говном", // Barrel of shit
  "выблядок ёбаный", // Fucking bastard child
  "ебанашка конченая", // Finished crazy person
  "дебил ёбаный", // Fucking imbecile
  "дебилоид", // Debiloid (internet insult)
  "имбецилоид", // Imbeciloid (internet insult)
  "даунито", // Down-person (internet insult)
  "аутист", // Autist (internet insult)
  "шизоид", // Schizoid (internet insult)
  "кукухой поехал", // Lost the cuckoo (went crazy)
  "крышей поехал", // Lost the roof (went crazy)
  "крыша поехала", // The roof went (went crazy)

  // === EXPANSION: More vulgar expressions ===
  "ёбаный насрать", // Fucking shit
  "насрать", // To shit / don't care
  "насрал", // Shat (past tense)
  "обоссать", // To piss on
  "обоссанный", // Pissed on
  "обосрать", // To shit on (someone)
  "обосранный", // Shat on
  "зассать", // To piss / be scared
  "зассанец", // Pissy coward
  "зассанка", // Pissy coward (fem)
  "нассать", // To piss (on)
  "вонючий", // Stinky
  "вонючка", // Stinky person
  "смердить", // To reek
  "вонища", // Big stink
  "блевать", // To puke
  "блевотина", // Vomit / disgusting thing
  "тошнотворный", // Nauseating
  "дристать", // To have diarrhea
  "дристун", // Diarrhea-haver
  "понос", // Diarrhea
  "поносник", // Diarrhea person
  "рыгать", // To belch
  "отрыжка", // Belch / disgusting person
  "ссыкун", // Pisser / coward
  "ссыкуха", // Pisser / coward (fem)
  "ссыкло", // Pisser collective / coward
  "зассыха", // Scared pisser (fem)
  "обоссышка", // Piss-pants
  "обоссанка", // Piss-pants (fem)

  // === EXPANSION: More elaborate insults ===
  "ёбаный ты в рот через жопу", // Fucked in the mouth through the ass
  "хуй на воротник", // Dick on the collar
  "пизда на палочке", // Cunt on a stick
  "блять ебучая", // Fucking whore
  "мразь подзаборная", // Under-the-fence scum
  "тварь ёбаная", // Fucking creature
  "скотина тупая", // Dumb beast
  "мразота бесконечная", // Infinite scum
  "гнида ёбаная", // Fucking nit
  "гнида вшивая", // Lousy nit
  "падла ёбаная", // Fucking bastard
  "сука рваная", // Torn bitch
  "сука драная", // Ragged bitch
  "сучара ёбаная", // Fucking big bitch
  "козлина вонючая", // Stinking goat
  "тупорылая свинья", // Blunt-snouted pig
  "ебанатик", // Crazy person (diminutive)
  "ебанат конченый", // Finished crazy fucker
  "долбоёб конченый", // Finished dumbfuck
  "долбоёбина", // Big dumbfuck
  "дурак набитый", // Stuffed fool
  "дура набитая", // Stuffed fool (fem)
  "полный пиздец", // Complete disaster
  "полная жопа", // Complete ass (in trouble)
  "полный пиздос", // Complete disaster (variant)
  "попадос", // Gotcha / in trouble (slang)
  "кирдык", // The end / kaput
  "звиздец", // Disaster (euphemistic variant)
  "капец", // The end (euphemistic)
  "трындец", // The end (euphemistic)
  "амбец", // The end (euphemistic)
  "абзац", // Paragraph / the end (euphemistic)
  "бздеть", // To fart silently / to be scared
  "набздеть", // To fart / to talk shit
  "вонь", // Stench
  "пердёж", // Farting
  "пердильник", // Fart-maker
  "пердунья", // Female farter
  "старый пердун", // Old fart
  "старая карга", // Old hag
  "кошёлка", // Old bag (insult for old woman)
  "каракатица", // Cuttlefish / ugly old woman
  "жаба", // Toad / ugly woman
  "крокодил", // Crocodile / ugly person
  "крокодилица", // Female crocodile / ugly woman
  "страшилище", // Fright / very ugly person
  "чмошница", // Female loser
  "позорище", // Disgrace / embarrassment
  "позор", // Shame / disgrace
  "ничтожка", // Nonentity (fem diminutive)
  "шелупонь", // Small fry / riff-raff
  "шушера", // Riff-raff
  "отребье", // Dregs / scum
  "шайка", // Gang (derogatory)
  "шарлатан", // Charlatan
  "проходимец", // Scoundrel / con artist
  "аферист", // Swindler
  "мошенник", // Fraudster
  "жулик", // Crook
  "жульё", // Crooks collective
  "ворьё", // Thieves collective
  "уголовник", // Criminal
  "уголовщина", // Criminal activity
  "отморозок ёбаный", // Fucking thug
  "скользкий тип", // Slippery type
  "мутный тип", // Murky type / shady person
  "стрёмный", // Sketchy / scary
  "стрёмно", // Sketchy (adverb)
  "стремак", // Fear / sketchy situation
  "западло", // Below one's dignity / low blow
  "впадлу", // Can't be bothered / too low
  "канать", // To go / act (criminal slang)
  "тусить", // To hang out (slang)
  "бухать", // To drink heavily
  "бухло", // Booze
  "бухой", // Drunk
  "бухарик", // Drunkard (slang)
  "нажраться", // To get wasted
  "нажратый", // Wasted
  "упитый", // Dead drunk
  "упиться", // To drink oneself dead
  "ужратый", // Totally wasted
  "ужраться", // To get completely wasted
  "наклюкаться", // To get tipsy/drunk
  "нализаться", // To get drunk (lit. lick oneself)
  "гнойный", // Pus-filled / disgusting
  "гнойник", // Abscess / disgusting person
  "гнида подколодная", // Under-the-log nit
  "змея подколодная", // Under-the-log snake
  "ехидна", // Echidna / venomous person
  "гадюка", // Viper / vile woman
  "кобра", // Cobra / vile woman
  "плесень", // Mold / pathetic person
  "грибок", // Fungus / pest
  "вошь", // Louse
  "клоп", // Bedbug
  "таракан", // Cockroach
  "клоп вонючий", // Stinking bedbug
  "муха навозная", // Dung fly
  "глист", // Tapeworm / skinny person
  "амёба", // Amoeba / spineless person
  "инфузория", // Infusorian / pathetic creature
  "одноклеточный", // Single-celled (insult for stupid)
  "питекантроп", // Pithecanthropus / caveman insult
  "неандерталец", // Neanderthal (insult)
  "примат", // Primate (insult)

  // ========================================
  // === EXPANSION: Exhaustive хуй derivatives ===
  // ========================================
  "хуйня полная", // Complete nonsense
  "хуйнюшка", // Little nonsense (diminutive)
  "хуёк", // Little dick (diminutive)
  "хуёчек", // Tiny dick (double diminutive)
  "хуёвенький", // Crappy (diminutive adj)
  "хуёвенько", // Crappily (adverb diminutive)
  "хуевато", // Somewhat crappily
  "хуесоска", // Dick sucker (fem)
  "хуемоё", // Dick mine (exclamation)
  "хуев", // Dick's (genitive)
  "хуева", // Dick's (fem genitive)
  "хуевы", // Dick's (plural genitive)
  "хуевой", // Dick-like (adjective)
  "хуевая", // Dick-like (fem adj)
  "хуевое", // Dick-like (neuter adj)
  "хуевые", // Dick-like (plural adj)
  "захуяривать", // To keep doing forcefully (imperfective)
  "захуячил", // Did forcefully (past masc)
  "захуячила", // Did forcefully (past fem)
  "захуячили", // Did forcefully (past plural)
  "отхуячил", // Beat up (past masc)
  "отхуячила", // Beat up (past fem)
  "отхуячили", // Beat up (past plural)
  "прихуячить", // To attach forcefully
  "прихуячил", // Attached forcefully (past masc)
  "исхуячить", // To beat thoroughly
  "исхуярить", // To beat thoroughly (variant)
  "расхуячил", // Smashed (past masc)
  "расхуячила", // Smashed (past fem)
  "перехуячить", // To redo / to hit across
  "нахуячился", // Got wasted (past masc)
  "нахуячилась", // Got wasted (past fem)
  "нахуячились", // Got wasted (past plural)
  "похуистка", // Person who doesn't give a fuck (fem)
  "похуисты", // People who don't give a fuck (plural)
  "похуистический", // Related to not giving a fuck
  "нихуяшеньки", // Not a single fucking thing (emphatic)
  "нехуй", // No need / nothing to
  "нехуёвый", // Not bad / impressive
  "нехуёво", // Not badly / impressively
  "охуеваю", // I'm stunned (1st person)
  "охуеваешь", // You're stunned (2nd person)
  "охуевает", // He's stunned (3rd person)
  "охуеваем", // We're stunned (1st plural)
  "охуеваете", // You're stunned (2nd plural)
  "охуевают", // They're stunned (3rd plural)
  "охуевшая", // Stunned (fem participle)
  "охуевшие", // Stunned (plural participle)
  "охуевшему", // To the stunned one (dative)
  "охуенный", // Fucking awesome
  "охуенная", // Fucking awesome (fem)
  "охуенное", // Fucking awesome (neuter)
  "охуенные", // Fucking awesome (plural)
  "охуительная", // Fucking amazing (fem)
  "охуительно", // Fucking amazingly
  "охуел", // Went crazy / stunned (past masc)
  "охуела", // Went crazy (past fem)
  "охуели", // Went crazy (past plural)
  "охуение", // Stunning / going crazy (noun)
  "выхуячить", // To throw out forcefully
  "вхуячить", // To shove in forcefully
  "вхуячил", // Shoved in (past masc)
  "ухуячить", // To leave quickly / to hit
  "ухуячил", // Left quickly / hit (past masc)
  "ухуячила", // Left quickly (past fem)
  "хуяришь", // You do intensively (2nd person)
  "хуячишь", // You do intensively (variant)
  "хуярим", // We do intensively (1st plural)
  "хуячим", // We do intensively (variant)
  "хуярят", // They do intensively (3rd plural)
  "хуячат", // They do intensively (variant)
  "хуйнул", // Did suddenly (past masc)
  "хуйнула", // Did suddenly (past fem)
  "хуйнули", // Did suddenly (past plural)
  "хуёвость", // Shittiness (noun)
  "хуйня собачья", // Canine bullshit

  // ========================================
  // === EXPANSION: Exhaustive пизда derivatives ===
  // ========================================
  "пиздюлька", // Little cunt thing
  "пиздёночка", // Tiny cunt (double diminutive)
  "пиздища", // Huge cunt (augmentative)
  "пиздоглазая", // Cunt-eyed (fem)
  "пиздоболить", // To talk cunt / to lie
  "пиздоболка", // Cunt-talker (fem)
  "пиздолизка", // Cunt-licker (fem)
  "пиздопромышленник", // Cunt industrialist (elaborate insult)
  "пиздатенький", // Kind of awesome (diminutive adj)
  "пиздато", // Fucking awesome (adverb)
  "пиздецки", // Disastrously (adverb)
  "пиздецовая", // Disastrous (fem adj)
  "пиздецовое", // Disastrous (neuter adj)
  "пиздецовые", // Disastrous (plural adj)
  "пиздюлей", // Beatings (genitive plural)
  "пиздюлину", // A beating / cunt-thing (accusative)
  "пизданутый", // Crazy / hit (participle)
  "пизданутая", // Crazy (fem participle)
  "пизданутые", // Crazy (plural)
  "спиздил", // Stole / lied (past masc)
  "спиздила", // Stole / lied (past fem)
  "спиздили", // Stole / lied (past plural)
  "распиздяйка", // Slacker (fem)
  "распиздяйство", // Slacking / carelessness
  "распиздяйски", // In a slacking manner
  "пропиздел", // Missed (past masc)
  "пропиздела", // Missed (past fem)
  "допиздеться", // To talk oneself into trouble
  "допизделся", // Talked into trouble (past masc)
  "отпиздил", // Beat up (past masc)
  "отпиздила", // Beat up (past fem)
  "отпиздили", // Beat up (past plural)
  "напиздел", // Lied a lot (past masc)
  "напиздела", // Lied a lot (past fem)
  "пиздеть", // To lie / to talk nonsense
  "пиздишь", // You're lying (2nd person)
  "пиздит", // He's lying (3rd person)
  "пиздим", // We're lying (1st plural)
  "пиздите", // You're lying (2nd plural)
  "пиздят", // They're lying (3rd plural)
  "пиздел", // Was lying (past masc)
  "пиздела", // Was lying (past fem)
  "пиздели", // Were lying (past plural)
  "упизднуть", // To leave quickly
  "упизднул", // Left quickly (past masc)
  "пиздюлей надавать", // To give beatings
  "пиздец нахуй блять", // Disaster to hell fuck (compound)

  // ========================================
  // === EXPANSION: Exhaustive блядь derivatives ===
  // ========================================
  "блядую", // I whore around (1st person)
  "блядуешь", // You whore around (2nd person)
  "блядует", // He/she whores around (3rd person)
  "блядуем", // We whore around (1st plural)
  "блядуете", // You whore around (2nd plural)
  "блядуют", // They whore around (3rd plural)
  "блядовал", // Whored around (past masc)
  "блядовала", // Whored around (past fem)
  "блядовали", // Whored around (past plural)
  "блядская", // Whorish (adj fem)
  "блядское", // Whorish (adj neuter)
  "блядские", // Whorish (adj plural)
  "блядски", // In a whorish manner (adverb)
  "бляденыш", // Whore's offspring
  "блядёнок", // Little whore's child
  "блядуга", // Big ugly whore (pejorative)
  "блядёха", // Whore (variant)
  "блядень", // Whorish person
  "разблядовать", // To whore out excessively

  // ========================================
  // === EXPANSION: Exhaustive ебать derivatives ===
  // ========================================
  "ебу", // I fuck (1st person)
  "ебёшь", // You fuck (2nd person)
  "ебёт", // He/she fucks (3rd person)
  "ебём", // We fuck (1st plural)
  "ебёте", // You fuck (2nd plural)
  "ебут", // They fuck (3rd plural)
  "ебал", // Fucked (past masc)
  "ебала", // Fucked (past fem)
  "ебали", // Fucked (past plural)
  "ебаться", // To fuck (reflexive)
  "ебётся", // He/she fucks (3rd person refl)
  "ебутся", // They fuck (3rd plural refl)
  "ебался", // Was fucking (past masc refl)
  "ебалась", // Was fucking (past fem refl)
  "ебались", // Were fucking (past plural refl)
  "ёбаная", // Fucking (fem adj)
  "ёбаное", // Fucking (neuter adj)
  "ёбаные", // Fucking (plural adj)
  "ебарь", // Fucker (variant without ё)
  "ёбаришка", // Little fucker (diminutive)
  "ебнуть", // To hit / to fuck suddenly
  "ебнул", // Hit / fucked suddenly (past masc)
  "ебнула", // Hit suddenly (past fem)
  "ебнули", // Hit suddenly (past plural)
  "ебнуться", // To go crazy / to fall
  "ебнулся", // Went crazy (past masc)
  "ебнулась", // Went crazy (past fem)
  "ебнулись", // Went crazy (past plural)
  "ебашу", // I'm doing intensively (1st person)
  "ебашишь", // You're doing intensively (2nd person)
  "ебашит", // He's doing intensively (3rd person)
  "ебашим", // We're doing intensively (1st plural)
  "ебашат", // They're doing intensively (3rd plural)
  "ебашил", // Was doing intensively (past masc)
  "ебашила", // Was doing intensively (past fem)
  "ебашили", // Were doing intensively (past plural)
  "наебал", // Deceived (past masc)
  "наебала", // Deceived (past fem)
  "наебали", // Deceived (past plural)
  "наебаться", // To get fed up / drunk
  "наебался", // Got fed up (past masc)
  "наебалась", // Got fed up (past fem)
  "наебались", // Got fed up (past plural)
  "наебалово", // Deception / scam
  "наёбщица", // Deceiver (fem)
  "заебала", // Annoyed (past fem)
  "заебали", // Annoyed (past plural)
  "заебательски", // Fucking awesomely
  "заебательский", // Fucking awesome (adj)
  "заёбы", // Annoyances (plural)
  "отъебись от меня", // Fuck off from me
  "отъебаться", // To fuck off (reflexive)
  "отъебался", // Fucked off (past masc)
  "отъебалась", // Fucked off (past fem)
  "отъебались", // Fucked off (past plural)
  "выебал", // Fucked / showed off (past masc)
  "выебала", // Fucked (past fem)
  "выебали", // Fucked (past plural)
  "выёбывается", // Is showing off (3rd person)
  "выёбываешься", // You're showing off (2nd person)
  "выёбываются", // They're showing off (3rd plural)
  "проебал", // Lost / missed (past masc)
  "проебала", // Lost (past fem)
  "проебали", // Lost (past plural)
  "уебал", // Hit hard (past masc)
  "уебок", // Fucker / bastard
  "уёбки", // Fuckers (plural)
  "приебался", // Pestered (past masc)
  "приебалась", // Pestered (past fem)
  "доебался", // Pestered to the end (past masc)
  "съебать", // To leave quickly
  "съебал", // Left quickly (past masc)
  "съебала", // Left quickly (past fem)
  "съебались", // Left quickly (past plural refl)
  "ебучая", // Fucking (fem adj)
  "ебучее", // Fucking (neuter adj)
  "ебучие", // Fucking (plural adj)
  "ебланка", // Female idiot
  "ебланище", // Big idiot
  "ебло", // Face (vulgar) / ugly mug
  "в ебло", // In the face (vulgar)
  "по еблу", // Across the face (vulgar)
  "заткни ебальник", // Shut your face (vulgar)

  // ========================================
  // === EXPANSION: Exhaustive сука derivatives ===
  // ========================================
  "сучья", // Bitch-like (adj fem)
  "сучье", // Bitch-like (adj neuter)
  "сучьи", // Bitch-like (adj plural)
  "сученыш", // Bitch's offspring
  "сучий потрох", // Bitch's innards
  "сучонок", // Little bitch's child
  "сучище", // Huge bitch (augmentative)
  "сучня", // Bitch-dom
  "сукин кот", // Bitch's cat
  "сукина дочь", // Bitch's daughter
  "сукины дети", // Bitch's children

  // ========================================
  // === EXPANSION: Criminal/prison slang (феня) ===
  // ========================================
  "мусора", // Cops (plural)
  "менты", // Cops (plural)
  "ментовка", // Police station
  "легаш", // Cop (slang variant)
  "фараон", // Cop (criminal slang)
  "лоха", // Sucker (fem)
  "лохануться", // To get suckered
  "лоханулся", // Got suckered (past masc)
  "лоханулась", // Got suckered (past fem)
  "кинуть", // To throw / to scam
  "кинул", // Scammed (past masc)
  "зона", // Prison camp / zone
  "зек", // Prisoner
  "зечка", // Female prisoner
  "зэк", // Prisoner (variant)
  "тюряга", // Prison (slang)
  "кича", // Prison (slang)
  "малява", // Secret letter in prison
  "шестерить", // To be a lackey
  "стукачка", // Snitch (fem)
  "стукачество", // Snitching
  "стучать", // To snitch
  "настучать", // To snitch (perfective)
  "крысить", // To steal from own
  "крысятничать", // To steal from own (imperfective)
  "козлятина", // Goat meat / scum
  "пахан", // Boss (criminal)
  "братва", // Brotherhood / gangsters
  "бычить", // To act tough / to bully
  "бык", // Bull / enforcer
  "бычара", // Big bull / big enforcer
  "замочил", // Killed (past masc)
  "грохнул", // Killed (past masc)
  "вальнуть", // To kill (slang)
  "вальнул", // Killed (past masc)
  "торчки", // Drug addicts (plural)
  "торчиха", // Female drug addict
  "наркоманка", // Female drug addict
  "наркота", // Drugs (slang)
  "гоп-стоп", // Mugging
  "гопница", // Female gopnik
  "шпанёнок", // Little hoodlum
  "босяк", // Tramp / lowlife
  "босячка", // Female tramp

  // ========================================
  // === EXPANSION: Ethnic slurs used in Russian ===
  // ========================================
  "хачи", // Caucasians (slur plural)
  "чучмек", // Asian person (slur)
  "чурки", // Central Asians (slur plural)
  "узкоглазая", // Narrow-eyed (fem racist slur)
  "косоглазая", // Slant-eyed (fem racist slur)
  "жидёнок", // Little kike (antisemitic)
  "жиды", // Kikes (plural antisemitic)
  "жидовская", // Kike-like (fem adj)
  "жидовщина", // Kike-ness (antisemitic)
  "хохлы", // Ukrainians (slur plural)
  "хохляцкий", // Ukrainian (adj slur)
  "москали", // Muscovites (slur plural)
  "пшек", // Pole (slur)
  "пшеки", // Poles (slur plural)
  "чухонец", // Finn (slur)
  "чухонка", // Finn (fem slur)
  "азеры", // Azerbaijanis (slur plural)

  // ========================================
  // === EXPANSION: Transliterated/Romanized versions ===
  // ========================================
  "blyat'", // Fuck (romanized variant)
  "blyadstvo", // Whoredom (romanized)
  "suchara", // Big bitch (romanized)
  "mudila", // Asshole (romanized variant)
  "pidar", // Faggot (romanized)
  "huylo", // Dickhead (romanized variant)
  "idi nahuy", // Go fuck yourself (romanized variant)
  "pizdyuk", // Brat (romanized)
  "pizdato", // Awesome (romanized)
  "ohuyel", // Went crazy (romanized)
  "ohuyenno", // Fucking awesome (romanized)
  "ohuyet", // Holy fuck (romanized)
  "ebat'", // To fuck (romanized variant)
  "yebat'", // To fuck (romanized variant)
  "yob tvoyu mat", // Fuck your mother (romanized)
  "eb tvoyu mat", // Fuck your mother (romanized)
  "zaebal", // Fed up (romanized)
  "zaebali", // Fed up (romanized plural)
  "vyblyadok", // Bastard (romanized)
  "zasranets", // Little shit (romanized)
  "kozel", // Goat / asshole (romanized)
  "tupoy", // Stupid (romanized)
  "cyka", // Bitch (romanized internet spelling)
  "cyka blyat", // Bitch fuck (romanized, famous gaming phrase)
  "suka blyat", // Bitch fuck (romanized variant)
  "pizdec nahui blyat", // Disaster to hell fuck (romanized)
  "sosi hui", // Suck dick (romanized)
  "sosi huy", // Suck dick (romanized variant)

  // ========================================
  // === EXPANSION: Internet slang (падонки language / олбанский) ===
  // ========================================
  "аффтар", // Author (paddonki spelling)
  "аффтар жжот", // Author burns (paddonki, meaning great content)
  "жжош", // You burn (paddonki, meaning great)
  "выпей йаду", // Drink poison (paddonki spelling)
  "убей себя ап стену", // Kill yourself against the wall (paddonki)
  "фтопку", // Into the fire / to hell (paddonki)
  "пиздос", // Disaster (variant of пиздец)
  "жопочка", // Cute little ass (double diminutive)
  "жопастая", // Big-assed (fem)
  "жопастый", // Big-assed (masc)
  "жополизка", // Ass-licker (fem)
  "жопорез", // Ass-cutter (insult)
  "в жопу", // In the ass
  "в жопу пьяный", // Drunk to the ass / very drunk
  "ржунимагу", // Rolling on floor laughing (paddonki)
  "пацтолом", // Under the table laughing (paddonki)
  "зачот", // Passing grade / excellent (paddonki)
  "незачот", // Failing grade / terrible (paddonki)
  "кг/ам", // Kill yourself (abbreviation, paddonki)
  "ниасилил", // Couldn't handle (paddonki)
  "многа букф", // Too many letters (paddonki)
  "йа криветко", // I'm a shrimp (paddonki, meaning shocked)
  "аццкий сотона", // Hellish Satan (paddonki)
  "жывотное", // Animal (paddonki spelling)
  "превед", // Hi (paddonki, from internet meme)
  "медвед", // Bear (paddonki, from internet meme)
  "быдляк", // One of the riff-raff
  "быдлячий", // Cattle-like / riff-raff-like
  "нуб", // Noob (transliterated)
  "нубас", // Noob (slang)
  "задрочка", // Female nerd (derogatory)
  "днарь", // Bottom feeder / bad player (gaming)
  "дно", // Bottom / worst (slang)
  "дно общества", // Bottom of society

  // ========================================
  // === EXPANSION: Euphemistic substitutions ===
  // ========================================
  "блинский", // Pancake-like (euphemism for блядский)
  "ёлки-палки", // Fir-sticks (euphemism for ёб)
  "ёлки-моталки", // Fir-winders (euphemism for ёб)
  "ёшкин крот", // Yoshkin mole (euphemism for ёб)
  "ёж твою мать", // Hedgehog your mother (euphemism)
  "ядрёна мать", // Core mother (euphemism for ёб)
  "ядрён батон", // Core baton (euphemism)
  "фиг", // Fig (euphemism for хуй)
  "фигово", // Figgishly (euphemism for хуёво)
  "фиговый", // Figgish (euphemism for хуёвый)
  "фигачить", // To fig-do (euphemism for хуячить)
  "пофиг", // Don't care (euphemism for похуй)
  "пофигу", // Don't care (variant euphemism)
  "пофигизм", // Don't-care-ism (euphemism for похуизм)
  "пофигист", // Don't-care person (euphemism)
  "пофигистка", // Don't-care person fem (euphemism)
  "до фига", // A lot of figs (euphemism for дохуя)
  "офигел", // Was figged (past, euphemism)
  "офигела", // Was figged (past fem, euphemism)
  "офигели", // Were figged (past plural, euphemism)
  "офигенный", // Fig-amazing (euphemism for охуенный)
  "офигенно", // Fig-amazingly (euphemism)
  "офигительный", // Fig-incredible (euphemism)
  "офигительно", // Fig-incredibly (euphemism)
  "хренотень", // Horseradish nonsense (euphemism)
  "хрень", // Horseradish thing (euphemism for хуйня)
  "до хрена", // A lot of horseradish (euphemism)
  "охренеть", // To horseradish (euphemism for охуеть)
  "охренел", // Was horseradished (past, euphemism)
  "охренела", // Was horseradished (past fem)
  "охренели", // Were horseradished (past plural)
  "звездец", // Stardec (euphemism for пиздец)
  "жесть", // Tin / harsh (euphemism for пиздец)
  "жестко", // Harshly (euphemism variant)
  "ё-моё", // Oh-mine (euphemism exclamation)
  "мля", // Mlya (euphemism for блять)
  "млять", // Mlyat' (euphemism for блять)
  "бляха-муха", // Buckle-fly (euphemism for блядь)
  "бляха", // Buckle (euphemism for блядь)

  // ========================================
  // === EXPANSION: Compound insult phrases ===
  // ========================================
  "пошла нахуй", // Go fuck yourself (fem)
  "пошли нахуй", // Go fuck yourselves (plural)
  "пошли все нахуй", // Everyone go fuck yourselves
  "да пошли вы", // Go fuck yourselves
  "соси хуй", // Suck dick
  "лижи жопу", // Lick ass
  "лижи мне жопу", // Lick my ass
  "я ебал", // I fucked / I don't care
  "я ебал тебя", // I fucked you
  "я ебал твою мать", // I fucked your mother
  "ебать тебя в рот", // Fuck you in the mouth
  "ебать тебя в жопу", // Fuck you in the ass
  "ебать колотить", // Fuck-knock (exclamation)
  "ебёна мать", // Fucked mother (exclamation)
  "мать вашу", // Your mother (plural)
  "убью нахуй", // I'll kill, fuck
  "убью сука", // I'll kill you, bitch
  "сдохни", // Die / croak
  "сдохни тварь", // Die, creature
  "сдохни мразь", // Die, scum
  "сдохни сука", // Die, bitch
  "чтоб ты сдох", // May you croak
  "чтоб ты сдохла", // May you croak (fem)
  "чтоб тебе пусто было", // May emptiness be upon you
  "горите в аду", // Burn in hell
  "гори в аду", // Burn in hell (singular)
  "отвали", // Bug off
  "отвали от меня", // Bug off from me
  "отвяжись", // Detach yourself / leave me alone
  "отсоси у тракториста", // Suck a tractor driver's (famous expression)
  "закрой пасть", // Shut your maw
  "заткнись", // Shut up
  "заткнись нахуй", // Shut the fuck up
  "заткни пасть", // Shut your maw
  "заткни хлебало", // Shut your food hole
  "заткни хавало", // Shut your food hole (variant)
  "в ахуе", // In a state of shock (vulgar)
  "ахуеть", // To be shocked (variant of охуеть)
  "ахуенно", // Fucking awesome (variant)
  "ахуенный", // Fucking awesome (adj variant)
  "хуйню несёшь", // You're spouting bullshit
  "хуйню городишь", // You're building bullshit
  "не пизди", // Don't lie
  "не ебёт", // Doesn't matter / doesn't fuck
  "меня не ебёт", // I don't give a fuck
  "ебись оно всё конём", // Let it all fuck itself with a horse
  "ни хуя", // Nothing / not a fucking thing
  "ни хера", // Nothing (euphemism for ни хуя)
  "ни хрена", // Nothing (lighter euphemism)
  "до хуя", // A lot / a fuck-ton
  "дохуя", // A lot (one word)
  "дохуя и больше", // A lot and more
  "дохуища", // A huge lot (augmentative)
  "хуй его знает", // Dick knows him / who the hell knows
  "хуй с ним", // Dick with him / forget about it
  "с какого хуя", // From what dick / why the fuck
  "нахуя", // Why the fuck
  "на кой хуй", // For what dick / why the fuck
  "хуёвый день", // Shitty day
  "хуёвое настроение", // Shitty mood
  "хуёвая погода", // Shitty weather
  "хуёвая жизнь", // Shitty life
  "ебать ты дурак", // Fuck you're a fool
  "ебать ты тупой", // Fuck you're stupid

  // ========================================
  // === EXPANSION: More general insults and vulgarisms ===
  // ========================================
  "рожа кирпича просит", // Face begs for a brick
  "рыло", // Snout / ugly face
  "мурло", // Mug / ugly face
  "ёбаная рожа", // Fucking mug
  "тупорылая", // Blunt-snouted (fem)
  "тупоголовая", // Dull-headed (fem)
  "тупая скотина", // Dumb beast
  "дубина стоеросовая", // Oak-growth club (elaborate insult)
  "пень", // Stump / blockhead
  "пень с глазами", // Stump with eyes
  "бревно", // Log / blockhead
  "чурбан неотёсанный", // Uncut block
  "балбес", // Idiot
  "балбесина", // Big idiot
  "осёл", // Donkey
  "ослица", // Female donkey
  "овца", // Sheep / female idiot
  "свинья свиньёй", // Pig being a pig
  "грязнуля", // Dirty person (informal)
  "неряха", // Slob
  "чморить", // To humiliate (variant)
  "замухрышка", // Ugly unkempt person
  "пугало", // Scarecrow / ugly person
  "пугало огородное", // Garden scarecrow
  "уродище", // Very ugly person (augmentative)
  "уродский", // Ugly / freakish (adj)
  "жирный", // Fat (masc)
  "жирная", // Fat (fem)
  "жирдяйка", // Fatty (fem)
  "жирюга", // Big fatty
  "сало ходячее", // Walking lard
  "бочка", // Barrel / very fat person
  "корова", // Cow / fat woman
  "бегемот", // Hippo / fat person
  "скелет", // Skeleton / very thin person
  "дрищ", // Skinny runt
  "дрищавый", // Skinny-runt-like
  "ничтожный", // Worthless (adj)
  "бесполезный", // Useless (masc)
  "бесполезная", // Useless (fem)
  "никчёмный", // Worthless (masc)
  "никчёмная", // Worthless (fem)
  "недоносок", // Premature baby (used as insult)
  "выродки", // Degenerates (plural)
  "отбросы", // Rejects / dregs
  "конченый", // Finished / hopeless
  "конченая", // Finished (fem)
  "конченый человек", // Finished person
  "конченая тварь", // Finished creature
  "падлюка", // Bastard (variant)
  "стервоза", // Bitchy
  "стервозная", // Bitchy (adj fem)
  "шлюхища", // Huge slut (augmentative)
  "профурсетка", // Slutty woman
  "залупа конская", // Horse dickhead
  "мудачьё", // Assholes (collective)
  "мудачина", // Big asshole
  "мудацкий", // Asshole-like (adj)
  "мудацкая", // Asshole-like (fem adj)
  "минетчица", // Woman who gives blowjobs
  "минетчик", // Man who gives blowjobs
  "ёбаная жизнь", // Fucking life
  "ёбаная работа", // Fucking job
  "блядь сука", // Whore bitch (compound)
  "сука блядь", // Bitch whore (compound)
  "пиздец блядь", // Disaster whore (compound)

  // ========================================
  // === EXPANSION: More homophobic slurs ===
  // ========================================
  "пидрило", // Faggot (variant)
  "пидорасина", // Big faggot (augmentative)
  "пидорасище", // Huge faggot (augmentative)
  "пидорский", // Faggot-like (adj)
  "пидорасня", // Faggot collective
  "педерасня", // Pederasty collective
  "педрило", // Faggot (variant of пидрило)
  "гомосеки", // Homosexuals (derogatory plural)
  "голубая", // Blue / lesbian (euphemistic slur fem)
  "голубые", // Blues / gays (euphemistic slur plural)
  "лесба", // Lesbo (derogatory)
  "лесбуха", // Lesbian (derogatory)

  // ========================================
  // === EXPANSION: Scatological vocabulary ===
  // ========================================
  "говнецо", // Little shit (diminutive)
  "говнюха", // Shithead (fem)
  "говнолиз", // Shit-licker
  "говняная", // Shitty (fem adj)
  "засрать", // To shit up / to ruin
  "засрал", // Shat up (past masc)
  "засрала", // Shat up (past fem)
  "засранный", // Shitted upon (adj)
  "обосрал", // Shat on (past masc)
  "обосрался", // Shat oneself (past masc)
  "обосралась", // Shat oneself (past fem)
  "насрать на тебя", // Shit on you / don't care about you
  "мне насрать", // I don't give a shit
  "сру", // I'm shitting (1st person)
  "высрать", // To shit out
  "просрать", // To shit away / to waste
  "просрал", // Shat away (past masc)
  "просрали", // Shat away (past plural)
  "зассал", // Was piss-scared (past masc)
  "пернуть", // To fart (perfective)
  "пукать", // To fart (lighter)
  "пукнуть", // To fart (perfective lighter)

  // ========================================
  // === EXPANSION: More degrading comparisons and curses ===
  // ========================================
  "шакал", // Jackal / opportunist
  "гиена", // Hyena / nasty person
  "крыса канализационная", // Sewer rat
  "вонючая", // Stinky (fem)
  "гнилой", // Rotten / corrupt
  "гнилая", // Rotten (fem)
  "гнильё", // Rot / rotten things collective
  "чёрт", // Devil
  "чёрт возьми", // Devil take it / damn
  "чёрт побери", // Devil take it / damn
  "чёрт тебя дери", // Devil tear you
  "чёрт бы тебя побрал", // Devil take you
  "какого чёрта", // What the devil / what the hell
  "к чертям", // To the devils / to hell
  "к чертям собачьим", // To the dog devils
  "к чёртовой матери", // To the devil's mother
  "к чёртовой бабушке", // To the devil's grandmother
  "к ёбаной матери", // To the fucking mother
  "к хуям", // To the dicks / to hell
  "к хуям собачьим", // To the dog dicks
  "дьявол", // Devil
  "нечисть", // Evil spirits / scum
  "адское отродье", // Hellish spawn
  "отродье", // Spawn / offspring (derogatory)
  "исчадие ада", // Hellspawn

  // ========================================
  // === EXPANSION: Additional compound phrases ===
  // ========================================
  "ёбаный ты сукин сын", // Fucking son of a bitch
  "ёбаная ты сука", // Fucking bitch you are
  "хуярь отсюда", // Dick away from here
  "валите все нахуй", // Everyone get the fuck out
  "вали отсюда", // Get out of here
  "вали нахуй", // Get the fuck out
  "проваливай", // Get lost
  "проваливайте", // Get lost (plural)
  "катись", // Roll away
  "катись к чёрту", // Roll to the devil
  "пиздой накрыться", // To be covered by a cunt / to fail
  "пиздой накрылось", // Was covered by a cunt / failed
  "хуй тебе а не", // Dick to you and not (denial)
  "на хуй мне это надо", // Why the fuck do I need this
  "какого хера", // What the dick (euphemism variant)
  "какого хрена", // What the horseradish (euphemism)
  "какого фига", // What the fig (lighter euphemism)
  "куда нахуй", // Where the fuck
  "откуда нахуй", // From where the fuck
  "когда нахуй", // When the fuck
  "зачем нахуй", // Why the fuck
  "ёбаный рот этого казино", // Fucking mouth of this casino (famous phrase)
  "ёбаный стыд и позор", // Fucking shame and disgrace
  "сраная", // Shitty (adj fem)
  "сраное", // Shitty (adj neuter)
  "сраные", // Shitty (adj plural)
  "сранина", // Shitty thing
  "сраньё", // Shitty stuff (collective)
  "гондон штопаный", // Darned condom
  "гондоны", // Condoms / scumbags (plural)
  "презерватив", // Condom (used as insult)
  "презик", // Condom (slang, used as insult)
  "пузырь", // Bubble / fat person / balloon
  "чучело гороховое", // Pea scarecrow
  "пустое место", // Empty space / nobody
  "ноль без палочки", // Zero without a stick / nonentity
  "никто и звать никак", // Nobody named nobody
  "мелочь пузатая", // Pot-bellied small fry
  "соплячка", // Snot-nose (fem)
  "щенок", // Puppy / young punk
  "сосунок", // Suckling / young punk
  "салага", // Greenhorn (military slang)
  "салажонок", // Little greenhorn
  "головёнка", // Little head / insignificant person
  "кобыла", // Mare / big clumsy woman
  "кобылица", // Mare (literary)
  "кляча", // Nag / old horse / ugly old woman
  "лядь", // Adulteress (archaic, root of блядь)
  "шкурка", // Little hide / loose woman (diminutive)
  "шкуродёр", // Hide-tearer / exploiter
  "крыса тыловая", // Rear rat / shirker
  "прошмандовка", // Loose woman (slang)
  "хабалка", // Loud vulgar woman
  "хамьё", // Rude people (collective)
  "наглая рожа", // Impudent face
  "бесстыдник", // Shameless person
  "бесстыдница", // Shameless person (fem)
  "бесстыжий", // Shameless (adj)
  "бесстыжая", // Shameless (fem adj)
  "срамота", // Shameful thing
  "срамотища", // Very shameful thing
  "разъебайка", // Slacker (fem)
  "расп*здяй", // Slacker (partial censoring)
  "мудозвонство", // Ball-ringing / bullshitting
  "пиздоболие", // Cunt-talking / lying
  "пиздобратия", // Cunt-brotherhood / useless group
  "срань господня", // Lord's shit
  "срань", // Shit / crap
  "ссанина", // Piss
  "ссака", // Piss / pisser
  "мочить в сортире", // To kill in the toilet (Putin's phrase)
  "мордой в дерьмо", // Face in the shit
  "мордой об стол", // Face against the table
  "ёбаный в рот через жопу", // Fucked in the mouth through the ass (already listed variant)
  "пиздатая жизнь", // Awesome life (vulgar ironic)
  "заебись жизнь", // Great fucking life (vulgar ironic)
];

export default russianBadWords;
