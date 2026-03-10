// src/languages/tamil-words.ts

/**
 * Tamil profanity words list
 * Contains common profanities in both Tamil script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Tamil
 */
const tamilBadWords: string[] = [
  // ========================================
  // === Tamil Script Profanities ===
  // ========================================
  "ஓத்தா", // Otha (f**k off)
  "தேவடியா", // Thevidiya (prostitute)
  "கூதி", // Koothi (female genitalia)
  "புண்ட", // Punda (female genitalia)
  "புண்டை", // Pundai (female genitalia)
  "பொட்டை", // Pottai (eunuch/transgender slur)
  "மயிரு", // Mayiru (pubic hair)
  "சுன்னி", // Sunni (penis)
  "தாயோளி", // Thayoli (motherf**ker)
  "நாய்", // Naai (dog)
  "புள்ள", // Pulla (worm/kid, used as insult)
  "முட்டாள்", // Muttaal (fool)
  "பொறுக்கி", // Porukki (scoundrel/pimp)
  "கோமியம்", // Gomiyam (cow dung)
  "கும்மு", // Kummu (punch/hit)
  "அயிர்", // Ayir (testicles)
  "பால்", // Paal (milk, euphemism for semen)
  "வெட்ட", // Vetta (cut/kill)
  "ஊம்பு", // Oombu (suck)
  "மாட்டு", // Maatu (cattle, used as insult)
  "ஐயா கூதி", // Aiyaa koothi (sir's cunt)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  "otha", // f**k off
  "thevidiya", // prostitute
  "koothi", // female genitalia
  "punda", // female genitalia
  "pundai", // female genitalia
  "pottai", // eunuch/transgender slur
  "mayiru", // pubic hair
  "sunni", // penis
  "thayoli", // motherf**ker
  "naai", // dog (insult)
  "pulla", // worm/kid (insult)
  "muttaal", // fool
  "porukki", // scoundrel/pimp
  "gomiyam", // cow dung
  "kummu", // punch/hit
  "ayir", // testicles
  "paal", // milk (euphemism for semen)
  "vetta", // cut/kill
  "oombu", // suck
  "maatu", // cattle (insult)
  "aiyaa koothi", // sir's cunt

  // Common variations and combinations
  "thevidiya paiyan", // Son of a prostitute
  "thevidiya payale", // Vocative form
  "otha pundai", // f**k off cunt
  "baadu", // Derogatory term
  "loosu", // Crazy/fool
  "enna da mayiru", // What the hell
  "graandi", // Derogatory term
  "kandaaala", // Derogatory term
  "dai pundai", // hey cunt
  "kena punda", // Stupid
  "mutta punda", // Stupid
  "narakoothi", // Dog + female genitalia
  "akkul thukki", // lifted the armpit (vulgar gesture)
  "pacha thevudiya", // Total prostitute
  "thevadiya paiya", // Son of a prostitute
  "myra", // Romanized short form of mayiru
  "pundamavaney", // Born of a vagina
  "sunni oombu", // Vulgar phrase

  // Common misspellings and variations
  "oththaa", // f**k off (variant)
  "ottha", // f**k off (variant)
  "thayli", // motherf**ker (variant)
  "thailee", // motherf**ker (variant)
  "koothee", // female genitalia (variant)
  "kooti", // female genitalia (variant)
  "pundek", // female genitalia (variant)
  "pundaik", // female genitalia (variant)
  "illa pundek", // no cunt (insult)
  "thevdiya", // prostitute (variant)
  "poriki", // scoundrel (variant)
  "kuthi", // female genitalia (variant)
  "soothu", // Anus
  "lavadey", // Penis
  "lavda", // penis (variant)
  "sappi", // Sucker

  // Additional Tamil profanity
  "oombu da", // Suck it
  "pundai mavanae", // Pussy-born
  "koothi payale", // Vulgar insult
  "thevudiya mavan", // Son of a prostitute
  "okka", // Fuck (variant)
  "okkala", // Fucking
  "soothu nakki", // Ass licker
  "poolu", // Dick (variant)
  "poolai oombuda", // Suck the dick
  "kena pundai", // Stupid cunt
  "akka koothi", // Sister's pussy
  "amma koothi", // Mother's pussy
  "thayoli paiyan", // Motherfucker's son
  "kevalama", // Shameful
  "olai pottan", // Broken eunuch (insult)
  "katukutty", // Vulgar term
  "ammayandi", // Derogatory term
  "koodhi magane", // Son of a cunt

  // Tamil script additions
  "ஊம்பு டா", // Oombu da
  "புண்டை மாவனே", // Pundai mavanae
  "கூத்தி பயலே", // Koothi payale
  "தேவுடிய மாவன்", // Thevudiya mavan
  "சூத்து நக்கி", // Soothu nakki
  "பூலு", // Poolu
  "அக்கா கூதி", // Akka koothi
  "அம்மா கூதி", // Amma koothi
  "கூதி மகனே", // Koodhi magane

  // More Tamil profanity - Roman script
  "aambala koothi", // Male's cunt
  "ammadi pundai", // Mother's cunt
  "anga soothu", // There ass (insult)
  "baadu punda", // Bitch cunt
  "dei kena", // Hey stupid
  "dei punda", // Hey cunt
  "ennada punda", // What the cunt
  "gommala", // Balls (insult)
  "kaai", // Dick (slang)
  "kandaarai", // Shit
  "kazhudhai", // Donkey (insult)
  "keezhadi", // Low person
  "kena payale", // Stupid fellow
  "ki adi", // Eat a kick
  "koothichi", // Slut
  "koodhi munda", // Cunt face
  "kudikaran", // Drunkard (insult)
  "kusu", // Fart
  "kuthimagane", // Son of a cunt
  "lavadai", // Dick (variant)
  "lenda", // Dick (slang)
  "maadu", // Cattle (insult)
  "mairu pudungi", // Pubic hair plucker
  "mayira pudunguda", // Pluck the pubic hair
  "mayiru poodai", // Pubic hair cunt
  "molai", // Breast (vulgar context)
  "moodevi", // Goddess of misfortune (insult)
  "mooku oombura", // Nose sucker (insult)
  "myiru", // Pubic hair variant
  "na koothi", // Dog cunt
  "naai koodhi", // Dog cunt variant
  "naaye", // Dog (vocative)
  "narakoodhi", // Dog cunt
  "okkali", // Fucking
  "olmaari", // Pervert
  "ommala", // Your mother (start of insult)
  "ommala koothi", // Your mother's cunt
  "oor koothi", // Village slut
  "oor otha", // Village fucker
  "paal kudi", // Milk drinker (childish insult)
  "pacha koothi", // Raw cunt
  "pachakoothi", // Variant
  "pandi", // Pig (slang insult)
  "panni", // Pig
  "panni punda", // Pig cunt
  "podei", // Beat (vulgar)
  "poolu sappi", // Dick sucker
  "pottachi", // Female eunuch
  "potta koothi", // Eunuch cunt
  "pullu", // Dick (variant)
  "pundai payale", // Cunt fellow
  "pundamavan", // Cunt born
  "saathaan", // Satan (insult)
  "sevuru", // Corpse (insult)
  "sootha moodi", // Shut your ass
  "soothu kolutha", // Light the ass on fire
  "soothu oombura", // Ass sucker
  "sunni koodhi", // Dick cunt
  "sunni sappi", // Dick sucker
  "thayir sappaan", // Curd sucker (insult)
  "thevadiya payale", // Son of a prostitute (vocative)
  "thevadiya pasanga", // Children of a prostitute
  "thodai", // Thigh (vulgar context)
  "thoombu", // Trunk (insult)
  "thottal", // Untouchable (very offensive)
  "ukkaru", // Sit (vulgar command)
  "venna punda", // Butter cunt (useless)
  "vesi", // Prostitute
  "vesipaya", // Prostitute's son
  "vesikoothi", // Prostitute cunt

  // More Tamil script additions
  "ஆம்பள கூதி", // Aambala koothi
  "கழுதை", // Kazhudhai (donkey)
  "கூத்தி முண்ட", // Koodhi munda
  "கூத்திச்சி", // Koothichi (slut)
  "பச்ச கூதி", // Pacha koothi
  "பன்னி", // Panni (pig)
  "பூலு சப்பி", // Poolu sappi
  "சூத்து மூடு", // Sootha moodi
  "சூத்து ஊம்பு", // Soothu oombura
  "சுன்னி சப்பி", // Sunni sappi
  "தேவடியா பசங்க", // Thevadiya pasanga
  "வேசி", // Vesi (prostitute)
  "வேசிபய", // Vesipaya
  "ஓக்கலி", // Okkali
  "ஊர் கூத்தி", // Oor koothi
  "ஒம்மால கூத்தி", // Ommala koothi
  "நாய்க்கூதி", // Naaikoodhi
  "மயிரு புடுங்குடா", // Mayira pudunguda
  "மூடேவி", // Moodevi

  // ========================================
  // === Extended Tamil Profanity (Roman) ===
  // ========================================
  "aambala soothu", // Male's ass
  "adi otha", // Beat and fuck
  "akka pundai", // Sister's cunt
  "akka soothu", // Sister's ass
  "ammadi soothu", // Mother's ass
  "amma oombu", // Mother suck (insult)
  "amma pundai otha", // Fuck mother's cunt
  "anga pundai", // There cunt
  "anna koothi", // Brother's cunt (insult)
  "asingam", // Shameful/ugly
  "avala otha", // Fuck her
  "baadu koothi", // Bitch cunt
  "baadu soothu", // Bitch ass
  "baadu sunni", // Bitch dick (compound)
  "chee koothi", // Disgusting cunt
  "chinna punda", // Small cunt
  "chinna sunni", // Small dick
  "dei koothi", // Hey cunt
  "dei soothu", // Hey ass
  "enna koothi", // What cunt
  "enna soothu", // What ass
  "gommala udai", // Break the balls
  "irumbu sunni", // Iron dick
  "kai adi", // Masturbation (hand hit)
  "kari koothi", // Dark cunt (racial vulgar)
  "kari sunni", // Dark dick (racial vulgar)
  "kazhudhai punda", // Donkey cunt
  "kazhudhai soothu", // Donkey ass
  "keezhtharam", // Low-class person
  "konju punda", // Shrimp cunt (small/useless)
  "koothimagal", // Daughter of a cunt
  "koothi mairu", // Cunt's pubic hair
  "koothi munda sappi", // Cunt face sucker
  "koothi nakki", // Cunt licker
  "koothi odanji", // Cunt breaker
  "koothi sappi", // Cunt sucker
  "kudimagan", // Son of a drunkard
  "kunju sunni", // Little dick
  "kuppai koothi", // Garbage cunt
  "kuppai punda", // Garbage cunt (variant)
  "lavadai sappi", // Dick sucker (variant)
  "mairu punda", // Pubic hair cunt
  "mairu soothu", // Pubic hair ass
  "mama punda", // Uncle's cunt
  "mamanar soothu", // Father-in-law's ass
  "mandi koothi", // Cattle cunt
  "mandi soothu", // Cattle ass
  "mayiru koothi", // Pubic hair cunt
  "mayiru sappi", // Pubic hair sucker
  "modha koothi", // Stupid cunt
  "molai paal", // Breast milk (vulgar)
  "molai sappi", // Breast sucker
  "motta punda", // Bald cunt
  "motta soothu", // Bald ass
  "muttaa punda", // Stupid cunt
  "muttaal koothi", // Fool cunt
  "myre", // Pubic hair (texting short form)
  "na punda", // Dog cunt
  "na soothu", // Dog ass
  "naai oombu", // Dog suck
  "naai punda", // Dog cunt (variant)
  "naai soothu", // Dog ass (variant)
  "naai sunni", // Dog dick
  "naaye poda", // Get lost dog
  "okkali sunni", // Fucking dick
  "ommala pundai", // Your mother's cunt (variant)
  "ommala soothu", // Your mother's ass
  "oor baadu", // Village bitch
  "oor punda", // Village cunt
  "oor vesi", // Village prostitute
  "oor vesikoothi", // Village prostitute cunt
  "otha da", // Fuck off (male)
  "otha di", // Fuck off (female)
  "otha koothi", // Fuck off cunt
  "otha loosu", // Fuck off crazy
  "otha myre", // Fuck off pubic hair
  "otha poda", // Fuck off get lost
  "otha soothu", // Fuck off ass
  "oththa", // Fuck off (variant)
  "oththa punda", // Fuck off cunt (variant)
  "pacha punda", // Raw cunt
  "pacha soothu", // Raw ass
  "pacha vesi", // Total prostitute
  "pandi punda", // Pig cunt
  "pandi soothu", // Pig ass
  "panni oombu", // Pig suck
  "pathu koothi", // Ten cunts
  "pathu sunni", // Ten dicks
  "pee koothi", // Shit cunt
  "periya koothi", // Big cunt
  "periya punda", // Big cunt (variant)
  "periya soothu", // Big ass
  "periya sunni", // Big dick
  "podei da", // Beat it (insult)
  "podei di", // Beat it (female)
  "poolu oombu", // Suck the dick
  "poolu thattu", // Dick hit
  "poolu udai", // Dick break
  "pudungu sunni", // Pluck the dick
  "pullu oombu", // Dick suck (variant)
  "pullu sappi", // Dick suck (variant)
  "puluthee", // Worm (insult)
  "pundai adi", // Cunt hit
  "pundai koothi", // Cunt (redundant compound insult)
  "pundai mairu", // Cunt's pubic hair
  "pundai nakki", // Cunt licker (variant)
  "pundai odai", // Cunt break
  "pundai thattu", // Cunt hit
  "sappi da", // Suck it (male)
  "sappi di", // Suck it (female)
  "semma koothi", // Super cunt
  "semma punda", // Super cunt (variant)
  "sevaru koothi", // Corpse cunt
  "sinna punda", // Small cunt (variant)
  "soothu adi", // Ass hit
  "soothu koothi", // Ass cunt
  "soothu mairu", // Ass pubic hair
  "soothu mara", // Ass tree (insult)
  "soothu sappi", // Ass sucker
  "soothu thattu", // Ass hit (variant)
  "sunni adi", // Dick hit
  "sunni koothi mavan", // Dick cunt born
  "sunni mavan", // Dick born
  "sunni poolu", // Dick (compound)
  "sunni thattu", // Dick slap
  "sunni udai", // Dick break
  "thaayoli paiyan", // Motherfucker's son (variant)
  "thanni koothi", // Water cunt (loose)
  "thanni punda", // Water cunt (loose, variant)
  "thayoli batch", // Motherfucker batch
  "thayoli koothi", // Motherfucker cunt
  "thayoli punda", // Motherfucker cunt (variant)
  "thevadiya batch", // Prostitute batch
  "thevadiya koothi", // Prostitute cunt
  "thevadiya punda", // Prostitute cunt (variant)
  "thevadiya soothu", // Prostitute ass
  "thevadiya sunni", // Prostitute dick
  "thoo koothi", // Spit cunt
  "thookku sunni", // Hanging dick
  "venna koothi", // Butter cunt (useless, variant)
  "vesi batch", // Prostitute batch
  "vesi koothi", // Prostitute cunt (variant)
  "vesi mavan", // Prostitute's son
  "vesi punda", // Prostitute cunt
  "vesi soothu", // Prostitute ass

  // ========================================
  // === Madras Bashai (Slang) ===
  // ========================================
  "figure otha", // Figure fuck (objectifying)
  "galeej", // Dirty/vulgar (from Hindi)
  "galatta punda", // Trouble cunt
  "goiyala", // Balls (slang)
  "gumbal koothi", // Gang cunt
  "item koothi", // Item cunt (objectifying)
  "jollu viduradhu", // Drooling (being pervy)
  "kattapunda", // Cut cunt
  "kettavan", // Bad man
  "kettava", // Bad woman
  "kodumai koothi", // Torture cunt
  "kuppam punda", // Slum cunt
  "loosu koothi", // Crazy cunt
  "loosu punda", // Crazy cunt (variant)
  "mokka punda", // Boring cunt
  "naatukoothi", // Country cunt
  "olu podra", // Leak/useless
  "settai koothi", // Mischief cunt
  "somberi koothi", // Lazy cunt
  "thara local koothi", // Very local cunt (classist)
  "waste koothi", // Waste cunt

  // ========================================
  // === Sri Lankan Tamil Profanity ===
  // ========================================
  "hutti punda", // Idiot cunt (SL Tamil)
  "kundi", // Ass (SL Tamil)
  "kundi adi", // Ass hit (SL Tamil)
  "modda", // Dick (SL Tamil, borrowed)
  "moddai oombu", // Suck the dick (SL Tamil)
  "ponnaya", // Effeminate man (SL Tamil derogatory)
  "pundai vettu", // Cut the cunt (SL Tamil)
  "salli vesi", // Cheap prostitute (SL Tamil)
  "sunni vetti", // Dick cutting (SL Tamil insult)
  "thambiya punda", // Little brother cunt (SL Tamil)
  "umbala kundi", // Your ass (SL Tamil)

  // ========================================
  // === Malaysian Tamil Profanity ===
  // ========================================
  "bodoh punda", // Stupid cunt (MY Tamil, Malay mix)
  "dei pundek", // Hey cunt (Malaysian variant)
  "keling koothi", // Racial slur + cunt (MY Tamil)
  "machan punda", // Friend's cunt (MY Tamil)
  "mabuk koothi", // Drunk cunt (MY Tamil, Malay mix)
  "pukimak", // Mother's cunt (MY Tamil/Malay)
  "pundek amma", // Cunt mother (MY Tamil)
  "sial pundek", // Damn cunt (MY Tamil, Malay mix)
  "thayoli pundek", // Motherfucker cunt (MY Tamil)
  "thambi pundek", // Brother cunt (MY Tamil)

  // ========================================
  // === More Tamil Script Additions ===
  // ========================================
  "ஆம்பள சூத்து", // Aambala soothu
  "அக்கா புண்டை", // Akka pundai
  "அக்கா சூத்து", // Akka soothu
  "அம்மா ஊம்பு", // Amma oombu
  "அவள ஓத்தா", // Avala otha
  "சின்ன புண்ட", // Chinna punda
  "சின்ன சுன்னி", // Chinna sunni
  "என்ன கூத்தி", // Enna koothi
  "கழுதை புண்ட", // Kazhudhai punda
  "கூத்தி மகள்", // Koothimagal
  "கூத்தி மயிரு", // Koothi mairu
  "கூத்தி நக்கி", // Koothi nakki
  "கூத்தி சப்பி", // Koothi sappi
  "குப்பை கூத்தி", // Kuppai koothi
  "மயிரு கூத்தி", // Mayiru koothi
  "மொலை சப்பி", // Molai sappi
  "முட்டா புண்ட", // Muttaa punda
  "நாய் புண்ட", // Naai punda
  "நாய் சூத்து", // Naai soothu
  "நாய் சுன்னி", // Naai sunni
  "ஒத்தா டா", // Otha da
  "ஒத்தா டி", // Otha di
  "பச்ச வேசி", // Pacha vesi
  "பன்னி புண்ட", // Pandi punda
  "பெரிய கூத்தி", // Periya koothi
  "பெரிய சுன்னி", // Periya sunni
  "பூலு ஊம்பு", // Poolu oombu
  "புண்டை அடி", // Pundai adi
  "புண்டை நக்கி", // Pundai nakki
  "சப்பி டா", // Sappi da
  "செம்ம கூத்தி", // Semma koothi
  "சூத்து அடி", // Soothu adi
  "சூத்து சப்பி", // Soothu sappi
  "சுன்னி அடி", // Sunni adi
  "சுன்னி மாவன்", // Sunni mavan
  "தாயோளி பண்ட", // Thayoli punda
  "தேவடியா சூத்து", // Thevadiya soothu
  "வேசி பண்ட", // Vesi punda
  "வேசி சூத்து", // Vesi soothu
  "வேசி மாவன்", // Vesi mavan
  "போன்னாய", // Ponnaya (SL Tamil)
  "குண்டி", // Kundi (SL Tamil)

  // ========================================
  // === Tamil Internet Slang ===
  // ========================================
  "otha myr", // Fuck off pubic hair (texting)
  "koodhi mgne", // Son of a cunt (texting)
  "tvdya", // Thevidiya abbreviation
  "thyoli", // Thayoli abbreviation
  "othmyr", // Compound (texting)
  "myru", // Pubic hair (texting variant)
  "pnda", // Punda abbreviation
  "snni", // Sunni abbreviation
  "sthu", // Soothu abbreviation
  "kthi", // Koothi abbreviation
  "dei othmyr", // Hey fuck-pubic-hair (texting)
  "aama kthi", // Mother cunt (texting)

  // ========================================
  // === More Romanized Tamil Profanity ===
  // ========================================
  "aambala pundai", // Male's cunt
  "akka sunni", // Sister's dick (absurd insult)
  "amma poolai oombu", // Suck mother's dick
  "amma soothu otha", // Fuck mother's ass
  "anga sunni", // There dick
  "anna punda", // Brother's cunt (insult)
  "anna soothu", // Brother's ass
  "appan koothi", // Father's cunt
  "appan soothu", // Father's ass
  "avana otha", // Fuck him
  "avanuku sunni illa", // He has no dick
  "avaluku pudikum sunni", // She likes dick
  "baadu mayiru", // Bitch pubic hair
  "chee mayiru", // Disgusting pubic hair
  "chinna mayiru", // Small pubic hair
  "dei kena baadu", // Hey stupid bitch
  "dei poolai oombu", // Hey suck the dick
  "dei venna sunni", // Hey butter dick (useless)
  "ennada soothu", // What the ass
  "galeej koothi", // Dirty cunt
  "irumbu koothi", // Iron cunt (hard)
  "kaai udai", // Dick break
  "kaai oombu", // Suck dick (slang)
  "kai adippa", // Masturbator
  "kandaarai koothi", // Shit cunt
  "kari baadu", // Dark bitch (racial)
  "kari mayiru", // Dark pubic hair (racial)
  "kattai koothi", // Wooden cunt
  "keezh taram koothi", // Low class cunt
  "kena koothi", // Stupid cunt (variant)
  "kena mayiru", // Stupid pubic hair
  "kena soothu", // Stupid ass
  "kodumai soothu", // Torture ass
  "koothi mooku", // Cunt nose
  "koothi vaai", // Cunt mouth
  "koothi vesam", // Cunt disguise
  "kuppai mayiru", // Garbage pubic hair
  "kuppai soothu", // Garbage ass
  "kuppai sunni", // Garbage dick
  "loosu mayiru", // Crazy pubic hair
  "loosu soothu", // Crazy ass
  "loosu sunni", // Crazy dick
  "maadu koothi", // Cattle cunt
  "maadu soothu", // Cattle ass
  "maadu sunni", // Cattle dick
  "mairu odanji", // Pubic hair breaker
  "mairu veri", // Pubic hair madness (insult)
  "mama koothi", // Uncle's cunt
  "mama soothu", // Uncle's ass
  "mandi punda", // Cattle cunt (variant)
  "mandi sunni", // Cattle dick
  "mayiru koothi vesi", // Pubic hair cunt prostitute
  "modha punda", // Stupid cunt (variant)
  "modha soothu", // Stupid ass (variant)
  "modha sunni", // Stupid dick
  "molai oombu", // Breast suck (vulgar)
  "motta koothi", // Bald cunt
  "motta mayiru", // Bald pubic hair (oxymoron insult)
  "mottai koothi", // Bald cunt (variant)
  "motta sunni", // Bald dick
  "mooku koothi", // Nose cunt (insult)
  "muttaa soothu", // Stupid ass
  "muttaa sunni", // Stupid dick
  "naai koothi", // Dog cunt
  "naai mayiru", // Dog pubic hair
  "naaiye oombu da", // Dog suck it
  "naai koothi magane", // Dog cunt's son
  "oor mayiru", // Village pubic hair
  "oor soothu", // Village ass
  "oor sunni", // Village dick
  "oru koothi kooda kidaiyathu", // Not even one cunt available (pathetic)
  "otha poolai", // Fuck the dick
  "otha sunni", // Fuck the dick
  "oththa koothi", // Fuck cunt (variant)
  "othmyr koothi", // Fuck pubic hair cunt
  "pacha mayiru", // Raw pubic hair
  "pacha sunni", // Raw dick
  "pandi koothi", // Pig cunt
  "pandi mayiru", // Pig pubic hair
  "pandi sunni", // Pig dick
  "panni koothi", // Pig cunt (variant)
  "panni mayiru", // Pig pubic hair
  "panni sunni", // Pig dick
  "panni soothu", // Pig ass
  "pee soothu", // Shit ass
  "pee sunni", // Shit dick
  "periya mayiru", // Big pubic hair
  "poolu koothi", // Dick cunt
  "poolu mayiru", // Dick pubic hair
  "poolu soothu", // Dick ass
  "pottai koothi", // Eunuch cunt
  "pottai sunni", // Eunuch dick
  "pundai oombu", // Cunt suck
  "pundai sappi", // Cunt sucker
  "pundai vedikkai", // Cunt comedy (insult)
  "sappi sappi", // Suck suck (repeated emphasis)

  // ========================================
  // === Tanglish (Tamil-English Mix) Profanity ===
  // ========================================
  "fucking otha", // Fucking fuck off
  "bloody koothi", // Bloody cunt
  "damn thevidiya", // Damn prostitute
  "fucking punda", // Fucking cunt
  "shit mayiru", // Shit pubic hair
  "asshole soothu", // Asshole ass (Tanglish)
  "bastard thevidiya paiyan", // Bastard son of prostitute
  "bitch koothi", // Bitch cunt (Tanglish)
  "son of a thevidiya", // Son of a prostitute (Tanglish)
  "stupid muttaal", // Stupid fool (Tanglish)
  "shut up koothi", // Shut up cunt (Tanglish)
  "fuck off otha", // Fuck off (Tanglish redundant)
  "die da koothi", // Die cunt (Tanglish)
  "ugly koothi", // Ugly cunt (Tanglish)
  "cheap vesi", // Cheap prostitute (Tanglish)
  "dirty soothu", // Dirty ass (Tanglish)
  "loser punda", // Loser cunt (Tanglish)
  "idiot muttaal", // Idiot fool (Tanglish)
  "useless waste", // Useless waste (Tanglish)
  "disgusting punda", // Disgusting cunt (Tanglish)
  "pathetic mayiru", // Pathetic pubic hair (Tanglish)
  "bloody vesi", // Bloody prostitute (Tanglish)
  "fucking sunni", // Fucking dick (Tanglish)
  "go to hell otha", // Go to hell fuck off (Tanglish)
  "mother fucker thayoli", // Motherfucker (Tanglish)
  "bloody thayoli", // Bloody motherfucker (Tanglish)
  "shut your koothi mouth", // Shut your cunt mouth (Tanglish)
  "piece of shit punda", // Piece of shit cunt (Tanglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "thevidiya paiyan otha", // Son of prostitute fuck off
  "koothi magane otha", // Son of cunt fuck off
  "thayoli paiyan koothi", // Motherfucker's son cunt
  "otha punda koothi", // Fuck off cunt (compound)
  "naai koothi thevidiya", // Dog cunt prostitute
  "panni punda otha", // Pig cunt fuck off
  "vesi koothi mayiru", // Prostitute cunt pubic hair
  "thevidiya soothu koothi", // Prostitute ass cunt
  "otha da thevidiya paiyan", // Fuck off son of prostitute
  "oombu da sunni koothi", // Suck it dick cunt
  "sappi da koothi mayiru", // Suck it cunt pubic hair
  "naai koothi vesi punda", // Dog cunt prostitute
  "panni sunni koothi otha", // Pig dick cunt fuck off
  "otha loosu koothi mayiru", // Fuck off crazy cunt pubic hair
  "thayoli batch koothi", // Motherfucker batch cunt
  "thevidiya koothi mayiru otha", // Prostitute cunt pubic hair fuck off
  "akka pundai otha", // Sister's cunt fuck off
  "amma koothi otha da", // Mother's cunt fuck off
  "ommala koothi mayiru otha", // Your mother's cunt pubic hair fuck off
  "oor koothi vesi punda", // Village cunt prostitute

  // ========================================
  // === More Tamil Script Additions ===
  // ========================================
  "அப்பன் கூத்தி", // Appan koothi (father's cunt)
  "அப்பன் சூத்து", // Appan soothu (father's ass)
  "அவன ஓத்தா", // Avana otha (fuck him)
  "கை அடிப்ப", // Kai adippa (masturbator)
  "கணக்காரி கூத்தி", // Kanakari koothi (accountant cunt insult)
  "கரி பாடு", // Kari baadu (dark bitch)
  "கூத்தி வாய்", // Koothi vaai (cunt mouth)
  "கூத்தி மூக்கு", // Koothi mooku (cunt nose)
  "குப்பை சுன்னி", // Kuppai sunni (garbage dick)
  "லூசு சுன்னி", // Loosu sunni (crazy dick)
  "மாடு கூத்தி", // Maadu koothi (cattle cunt)
  "மாமா கூத்தி", // Mama koothi (uncle's cunt)
  "மொட்ட கூத்தி", // Motta koothi (bald cunt)
  "நாய் மயிரு", // Naai mayiru (dog pubic hair)
  "ஊர் மயிரு", // Oor mayiru (village pubic hair)
  "பச்ச சுன்னி", // Pacha sunni (raw dick)
  "பன்னி கூத்தி", // Panni koothi (pig cunt)
  "பன்னி மயிரு", // Panni mayiru (pig pubic hair)
  "பன்னி சுன்னி", // Panni sunni (pig dick)
  "பூ சூத்து", // Pee soothu (shit ass)
  "பெரிய மயிரு", // Periya mayiru (big pubic hair)
  "பூலு கூத்தி", // Poolu koothi (dick cunt)
  "பொட்டை சுன்னி", // Pottai sunni (eunuch dick)
  "புண்டை வெடிக்கை", // Pundai vedikkai (cunt comedy)
  "தேவடியா சுன்னி", // Thevidiya sunni (prostitute's dick)
  "வேசி மயிரு", // Vesi mayiru (prostitute pubic hair)
  "நாய் கூத்தி மகனே", // Naai koothi magane (dog cunt's son)
  "தாயோளி பிண்ட கூத்தி", // Thayoli punda koothi (motherfucker cunt)
  "ஒத்தா டா தேவடியா பையன்", // Otha da thevidiya paiyan (fuck off prostitute's son)
  "ஊம்பு டா சுன்னி கூத்தி", // Oombu da sunni koothi (suck it dick cunt)
  "நாய் கூத்தி வேசி புண்ட", // Naai koothi vesi punda (dog cunt prostitute)
  "பன்னி சுன்னி கூத்தி ஓத்தா", // Panni sunni koothi otha (pig dick cunt fuck off)
  "ஊர் கூத்தி வேசி புண்ட", // Oor koothi vesi punda (village cunt prostitute)
  "அக்கா புண்டை ஓத்தா", // Akka pundai otha (sister's cunt fuck off)

  // ========================================
  // === Kongu Tamil Dialect ===
  // ========================================
  "koothadi", // Cunt-hitter (Kongu)
  "punda vazhinjirukku", // Cunt is slippery (Kongu)
  "sunni thattu da", // Dick slap (Kongu)
  "oombu di soothu", // Suck it ass (Kongu, female)
  "okkara myre", // Sitting pubic hair (Kongu)
  "poola oombura", // Dick sucking (Kongu)
  "koothi vaari", // Cunt collected (Kongu)
  "punda kalaichi", // Cunt mixed (Kongu)
  "soothu vedichi", // Ass exploded (Kongu)

  // ========================================
  // === Madurai Dialect ===
  // ========================================
  "koothi na", // Cunt dog (Madurai)
  "punda polappa", // Cunt disaster (Madurai)
  "mayiru da polappa", // Pubic hair disaster (Madurai)
  "sunni koothi polappa", // Dick cunt disaster (Madurai)
  "otha polappa", // Fuck off disaster (Madurai)
  "soothu polappa", // Ass disaster (Madurai)
  "dei punda polappa", // Hey cunt disaster (Madurai)
  "thevidiya polappa", // Prostitute disaster (Madurai)
  "naaye polappa", // Dog disaster (Madurai)

  // ========================================
  // === Singapore Tamil Profanity ===
  // ========================================
  "kaneh pundai", // Stupid cunt (SG Tamil)
  "machan koothi", // Friend's cunt (SG Tamil)
  "thambi sunni", // Brother's dick (SG Tamil)
  "bodoh otha", // Stupid fuck off (SG Tamil, Malay mix)
  "sial otha", // Damn fuck off (SG Tamil, Malay mix)
  "knn pundek", // KNN cunt (SG Tamil)
  "pundek neh", // Cunt there (SG Tamil)
  "mayiru neh", // Pubic hair there (SG Tamil)

  // ========================================
  // === More Internet/Texting Abbreviations ===
  // ========================================
  "otha myr da", // Fuck off pubic hair (texting)
  "tvdya pyn", // Thevidiya paiyan abbreviation
  "kthimgn", // Koothi magane abbreviation
  "snni ombu", // Sunni oombu abbreviation
  "sthu nkki", // Soothu nakki abbreviation
  "pndai nkki", // Pundai nakki abbreviation
  "otha kth myr", // Otha koothi mayiru abbreviation
  "dei othmyr kth", // Dei otha mayiru koothi abbreviation
  "tvdya sthu", // Thevidiya soothu abbreviation
  "vsi kth", // Vesi koothi abbreviation
  "pnni kth", // Panni koothi abbreviation
  "otha lsu", // Otha loosu abbreviation
  "nai pnda", // Naai punda abbreviation

  // ========================================
  // === Extended Tamil Script Profanity ===
  // ========================================
  "சுன்னி ஊம்பு டா", // Sunni oombu da (suck the dick)
  "தேவடியா மகனே", // Thevidiya magane (son of a prostitute)
  "புண்டை ஓத்தா", // Pundai otha (fuck the cunt)
  "சூத்து ஓத்தா", // Soothu otha (fuck the ass)
  "மயிரு பிடுங்கு", // Mayiru pudungu (pluck the pubic hair)
  "கூத்தி அடிச்சி", // Koothi adichchi (cunt-hitter)
  "ஊம்பு வேசி", // Oombu vesi (suck prostitute)
  "கழுதை சூத்து", // Kazhudhai soothu (donkey ass)
  "பன்னி சூத்து", // Panni soothu (pig ass)
  "ஆடு புண்டை", // Aadu pundai (goat cunt)
  "மாடு சுன்னி", // Maadu sunni (cattle dick)
  "கரடி கூத்தி", // Karadi koothi (bear cunt)
  "குரங்கு புண்டை", // Kurangu pundai (monkey cunt)
  "எலி சூத்து", // Eli soothu (rat ass)
  "பாம்பு சுன்னி", // Paambu sunni (snake dick)
  "காக்கா கூத்தி", // Kaakka koothi (crow cunt)
  "நரி கூத்தி", // Nari koothi (fox cunt)
  "ஓநாய் புண்டை", // Onaai pundai (wolf cunt)
  "எருமை கூத்தி", // Erumai koothi (buffalo cunt)
  "எருமை மாடு", // Erumai maadu (buffalo cattle insult)
  "கோழை", // Kozhai (coward)
  "கோழை நாய்", // Kozhai naai (coward dog)
  "பேடி", // Pedi (coward/eunuch)
  "பேடிப்பயல்", // Pedippayal (cowardly fellow)
  "தாயோளி மகனே", // Thayoli magane (motherfucker's son)
  "கூத்தி அடி", // Koothi adi (cunt hit)
  "புண்டை வெட்டு", // Pundai vettu (cunt cut)
  "சுன்னி வெட்டு", // Sunni vettu (dick cut)
  "சூத்து வெடி", // Soothu vedi (ass explosion)
  "மயிரு கொட்டு", // Mayiru kottu (pubic hair shed)
  "கூத்தி வழிய", // Koothi vazhiya (cunt dripping)
  "சுன்னி நிக்குது", // Sunni nikkudhu (dick standing)
  "சூத்து எரியுது", // Soothu eriyudhu (ass burning)
  "கூத்தி நாறுது", // Koothi naarudhu (cunt stinking)
  "சுன்னி கம்பு", // Sunni kambu (dick pole)
  "கூத்தி குழி", // Koothi kuzhi (cunt hole)
  "சூத்து குழி", // Soothu kuzhi (ass hole)
  "மயிரு காடு", // Mayiru kaadu (pubic hair forest)
  "பூனை கூத்தி", // Poonai koothi (cat cunt)
  "பூனை சூத்து", // Poonai soothu (cat ass)

  // ========================================
  // === Extended Romanized Tamil ===
  // ========================================
  "sunni oombu da", // Suck the dick
  "thevidiya magane", // Son of a prostitute
  "pundai otha", // Fuck the cunt
  "soothu otha", // Fuck the ass
  "mayiru pudungu", // Pluck the pubic hair
  "koothi adichchi", // Cunt-hitter
  "oombu vesi", // Suck prostitute
  "aadu pundai", // Goat cunt
  "karadi koothi", // Bear cunt
  "kurangu pundai", // Monkey cunt
  "eli soothu", // Rat ass
  "paambu sunni", // Snake dick
  "kaakka koothi", // Crow cunt
  "nari koothi", // Fox cunt
  "onaai pundai", // Wolf cunt
  "erumai koothi", // Buffalo cunt
  "erumai maadu", // Buffalo cattle (insult)
  "kozhai", // Coward
  "kozhai naai", // Coward dog
  "pedi", // Coward/eunuch
  "pedippayal", // Cowardly fellow
  "thayoli magane", // Motherfucker's son
  "koothi adi da", // Hit the cunt (male)
  "pundai vettu da", // Cut the cunt (male)
  "sunni vettu da", // Cut the dick (male)
  "soothu vedi", // Ass explosion
  "mayiru kottu", // Pubic hair shed
  "koothi vazhiya", // Cunt dripping
  "sunni nikkudhu", // Dick standing
  "soothu eriyudhu", // Ass burning
  "koothi naarudhu", // Cunt stinking
  "sunni kambu", // Dick pole
  "koothi kuzhi", // Cunt hole
  "soothu kuzhi", // Ass hole
  "mayiru kaadu", // Pubic hair forest
  "poonai koothi", // Cat cunt
  "poonai soothu", // Cat ass

  // ========================================
  // === Extended Madras Bashai ===
  // ========================================
  "area koothi", // Area cunt (local)
  "area punda", // Area cunt (local variant)
  "auto koothi", // Auto-rickshaw cunt
  "bajji punda", // Fritter cunt (worthless)
  "beedi koothi", // Cigarette cunt
  "chappal koothi", // Slipper cunt (cheap)
  "chappal sunni", // Slipper dick (cheap)
  "dabba koothi", // Box cunt (worthless)
  "dabba sunni", // Box dick (worthless)
  "dosai koothi", // Dosa cunt (common)
  "figure koothi", // Figure cunt (objectifying)
  "galeej punda", // Dirty cunt
  "galeej soothu", // Dirty ass
  "galeej sunni", // Dirty dick
  "goiyala koothi", // Ball cunt
  "item punda", // Item cunt (objectifying variant)
  "item soothu", // Item ass (objectifying)
  "jollu punda", // Drool cunt (pervy)
  "kattai punda", // Wooden cunt (hard)
  "kattai soothu", // Wooden ass (hard)
  "kettavan koothi", // Bad man cunt
  "kettava soothu", // Bad woman ass
  "kodumai punda", // Torture cunt
  "kodumai sunni", // Torture dick
  "kuppam koothi", // Slum cunt
  "kuppam punda otha", // Slum cunt fuck off
  "local koothi", // Local cunt
  "local punda", // Local cunt variant
  "loosu mayiru punda", // Crazy pubic hair cunt
  "mass koothi", // Mass cunt (classist)
  "mokka soothu", // Boring ass
  "mokka sunni", // Boring dick
  "naatukoothi otha", // Country cunt fuck off
  "olu koothi", // Leaking cunt
  "oru pisa illa koothi", // Not worth a penny cunt
  "paavi koothi", // Sinful cunt
  "paavi punda", // Sinful cunt variant
  "rowdy koothi", // Rowdy cunt
  "semma waste koothi", // Super waste cunt
  "settai punda", // Mischief cunt
  "settai soothu", // Mischief ass
  "somberi punda", // Lazy cunt
  "somberi soothu", // Lazy ass
  "thara local punda", // Very local cunt (classist)
  "thara local soothu", // Very local ass (classist)
  "theri koothi", // Street cunt
  "theri punda", // Street cunt variant
  "waste punda", // Waste cunt
  "waste soothu", // Waste ass
  "waste sunni", // Waste dick

  // ========================================
  // === Extended Sri Lankan Tamil ===
  // ========================================
  "hutti punda otha", // Idiot cunt fuck off (SL)
  "kundi adi da", // Ass hit (SL)
  "kundi sappi", // Ass sucker (SL)
  "kundi nakki", // Ass licker (SL)
  "modda oombu da", // Suck the dick (SL)
  "modda sappi", // Dick sucker (SL)
  "ponnaya koothi", // Effeminate man cunt (SL)
  "ponnaya punda", // Effeminate man cunt (SL variant)
  "ponnaya sunni", // Effeminate man dick (SL)
  "salli vesi koothi", // Cheap prostitute cunt (SL)
  "salli vesi punda", // Cheap prostitute cunt (SL)
  "sunni vetti da", // Dick cutting (SL)
  "thambiya punda otha", // Brother cunt fuck off (SL)
  "umbala kundi sappi", // Your ass sucker (SL)
  "umbala kundi otha", // Your ass fuck off (SL)
  "kundi otha da", // Ass fuck off (SL)
  "umbala amma kundi", // Your mother's ass (SL)
  "umbala thathi kundi", // Your father's ass (SL)
  "umbala akka kundi", // Your sister's ass (SL)
  "rathu kundi", // Red ass (SL insult)
  "modda illatha", // Without a dick (SL impotent insult)
  "hutti kundi", // Idiot ass (SL)
  "maaraadi kundi", // Stupid ass (SL)
  "gon punda", // Stupid cunt (SL)
  "gon soothu", // Stupid ass (SL)
  "gon sunni", // Stupid dick (SL)
  "yakko kundi", // Friend's ass (SL)
  "yakko punda", // Friend's cunt (SL)

  // ========================================
  // === Extended Malaysian Tamil ===
  // ========================================
  "bodoh punda koothi", // Stupid cunt (MY)
  "dei pundek sial", // Hey cunt damn (MY)
  "keling koothi otha", // Racial slur cunt fuck off (MY)
  "machan punda otha", // Friend's cunt fuck off (MY)
  "mabuk koothi otha", // Drunk cunt fuck off (MY)
  "pukimak koothi", // Mother's cunt (MY compound)
  "pundek amma otha", // Cunt mother fuck off (MY)
  "sial pundek otha", // Damn cunt fuck off (MY)
  "thayoli pundek otha", // Motherfucker cunt fuck off (MY)
  "thambi pundek otha", // Brother cunt fuck off (MY)
  "bodoh sunni", // Stupid dick (MY)
  "bodoh soothu", // Stupid ass (MY)
  "sial sunni", // Damn dick (MY)
  "sial soothu", // Damn ass (MY)
  "keling sunni", // Racial slur dick (MY)
  "pukimak sunni", // Mother's cunt dick (MY)
  "mangkuk punda", // Bowl cunt (MY idiom for stupid)
  "babi punda", // Pig cunt (MY Malay mix)
  "babi koothi", // Pig cunt (MY variant)
  "babi soothu", // Pig ass (MY)
  "babi sunni", // Pig dick (MY)
  "haram punda", // Forbidden cunt (MY)
  "haram koothi", // Forbidden cunt (MY variant)
  "lancau punda", // Dick cunt (MY Malay)
  "pantat koothi", // Ass cunt (MY Malay)
  "sundal koothi", // Prostitute cunt (MY)
  "sundal punda", // Prostitute cunt (MY)

  // ========================================
  // === Extended Singapore Tamil ===
  // ========================================
  "kaneh pundai otha", // Stupid cunt fuck off (SG)
  "machan koothi otha", // Friend's cunt fuck off (SG)
  "thambi sunni otha", // Brother dick fuck off (SG)
  "bodoh otha da", // Stupid fuck off (SG)
  "sial otha da", // Damn fuck off (SG)
  "knn pundek otha", // KNN cunt fuck off (SG)
  "pundek neh otha", // Cunt there fuck off (SG)
  "mayiru neh otha", // Pubic hair there fuck off (SG)
  "kaneh soothu", // Stupid ass (SG)
  "kaneh sunni", // Stupid dick (SG)
  "machan soothu", // Friend's ass (SG)
  "machan sunni", // Friend's dick (SG)
  "thambi koothi", // Brother's cunt (SG)
  "thambi soothu", // Brother's ass (SG)
  "abang punda", // Brother cunt (SG Malay)
  "abang koothi", // Brother cunt (SG variant)
  "keling bodoh", // Racial slur stupid (SG)

  // ========================================
  // === Extended Kongu Tamil ===
  // ========================================
  "koothadi da", // Cunt-hitter (Kongu male)
  "koothadi di", // Cunt-hitter (Kongu female)
  "punda vazhinjirukku da", // Cunt is slippery (Kongu male)
  "sunni thattu otha", // Dick slap fuck off (Kongu)
  "okkara myre da", // Sitting pubic hair (Kongu male)
  "poola oombura di", // Dick sucking (Kongu female)
  "koothi vaari da", // Cunt collected (Kongu male)
  "punda kalaichi da", // Cunt mixed (Kongu male)
  "soothu vedichi da", // Ass exploded (Kongu male)

  // ========================================
  // === Extended Madurai Tamil ===
  // ========================================
  "koothi na polappa", // Cunt dog disaster (Madurai variant)
  "punda polappa da", // Cunt disaster (Madurai male)
  "mayiru da polappa otha", // Pubic hair disaster fuck off (Madurai)
  "sunni koothi polappa da", // Dick cunt disaster (Madurai male)
  "otha polappa da", // Fuck off disaster (Madurai male)
  "soothu polappa da", // Ass disaster (Madurai male)
  "dei punda polappa otha", // Hey cunt disaster fuck off (Madurai)
  "thevidiya polappa otha", // Prostitute disaster fuck off (Madurai)
  "naaye polappa otha", // Dog disaster fuck off (Madurai)
  "thayoli polappa", // Motherfucker disaster (Madurai)
  "vesi polappa", // Prostitute disaster (Madurai)
  "kazhudhai polappa", // Donkey disaster (Madurai)
  "panni polappa", // Pig disaster (Madurai)
  "erumai polappa", // Buffalo disaster (Madurai)

  // ========================================
  // === Extended Compound Tamil Insults ===
  // ========================================
  "thevidiya paiyan otha punda koothi", // Son of prostitute compound
  "koothi magane otha punda naai", // Son of cunt compound
  "thayoli paiyan koothi sunni otha", // Motherfucker's son compound
  "otha punda koothi mayiru sunni", // Fuck off cunt compound
  "naai koothi thevidiya punda soothu", // Dog cunt prostitute compound
  "panni punda otha koothi sunni", // Pig cunt compound
  "vesi koothi mayiru punda soothu", // Prostitute cunt compound
  "thevidiya soothu koothi sunni otha", // Prostitute ass compound
  "otha da thevidiya paiyan koothi", // Fuck off son of prostitute
  "oombu da sunni koothi punda", // Suck it dick cunt compound
  "sappi da koothi mayiru punda", // Suck it cunt compound
  "naai koothi vesi punda otha", // Dog cunt prostitute fuck off
  "panni sunni koothi otha da", // Pig dick cunt fuck off
  "otha loosu koothi mayiru punda", // Fuck off crazy cunt compound
  "thayoli batch koothi punda", // Motherfucker batch cunt
  "ommala koothi mayiru otha punda", // Mother's cunt compound
  "oor koothi vesi punda otha da", // Village cunt prostitute

  // ========================================
  // === Caste-Based Slurs (Tamil) ===
  // ========================================
  "paraiyan", // Dalit caste slur
  "paraichi", // Female Dalit slur
  "chakkiliya", // Leather-worker caste slur
  "pallan", // Agricultural caste slur
  "pallaichi", // Female form
  "vannan", // Washerman caste (derogatory)
  "vannaathi", // Female washerman (derogatory)
  "thotti", // Sweeper caste (derogatory)
  "thottichi", // Female sweeper (derogatory)
  "paarpan", // Brahmin (derogatory)
  "paarpathi", // Female Brahmin (derogatory)
  "kulam kettavan", // One of ruined caste
  "jathi thaazhndha", // Of low caste
  "keezh jathi", // Low caste
  "thazhntha jathi", // Lowered caste
  "kulam keduthavan", // One who ruined caste
  "keezh jaathi koothi", // Low caste cunt
  "keezh jaathi punda", // Low caste cunt variant
  "paraiyan koothi", // Dalit caste cunt
  "paraiyan punda", // Dalit caste cunt variant
  "chakkiliya koothi", // Leather-worker caste cunt
  "thotti koothi", // Sweeper caste cunt

  // ========================================
  // === Tamil Caste Slurs - Script ===
  // ========================================
  "பறையன்", // Paraiyan (Dalit caste slur)
  "பறைச்சி", // Paraichi (female Dalit slur)
  "சக்கிலிய", // Chakkiliya (leather-worker caste)
  "பள்ளன்", // Pallan (agricultural caste slur)
  "பள்ளச்சி", // Pallaichi (female form)
  "வண்ணான்", // Vannan (washerman derogatory)
  "தோட்டி", // Thotti (sweeper derogatory)
  "பாப்பான்", // Paarpan (Brahmin derogatory)
  "குலம் கெட்டவன்", // Kulam kettavan (ruined caste)
  "கீழ் ஜாதி", // Keezh jaathi (low caste)

  // ========================================
  // === Extended Tanglish Mix ===
  // ========================================
  "fucking otha da", // Fucking fuck off (Tanglish male)
  "bloody koothi di", // Bloody cunt (Tanglish female)
  "damn thevidiya otha", // Damn prostitute fuck off
  "fucking punda otha", // Fucking cunt fuck off
  "shit mayiru otha", // Shit pubic hair fuck off
  "asshole soothu otha", // Asshole ass fuck off
  "bastard thevidiya paiyan otha", // Bastard prostitute's son fuck off
  "bitch koothi otha", // Bitch cunt fuck off
  "son of a thevidiya otha", // Son of a prostitute fuck off
  "stupid muttaal otha", // Stupid fool fuck off
  "shut up koothi otha", // Shut up cunt fuck off
  "fuck off otha da punda", // Fuck off cunt compound
  "die da koothi otha", // Die cunt fuck off
  "ugly koothi vesi", // Ugly cunt prostitute
  "cheap vesi koothi otha", // Cheap prostitute cunt fuck off
  "dirty soothu otha", // Dirty ass fuck off
  "loser punda otha", // Loser cunt fuck off
  "trash koothi otha", // Trash cunt fuck off
  "garbage punda otha", // Garbage cunt fuck off
  "noob koothi otha", // Noob cunt fuck off (gaming)
  "toxic punda otha", // Toxic cunt fuck off (gaming)
  "cancer koothi", // Cancer cunt (gaming)
  "feeder punda", // Feeder cunt (gaming)
  "bot koothi", // Bot cunt (gaming)
  "hacker otha", // Hacker fuck off (gaming)
  "camper punda", // Camper cunt (gaming)
  "uninstall pannu da koothi", // Uninstall cunt (gaming)
  "delete pannu da punda", // Delete cunt (gaming)

  // ========================================
  // === Extended Threats (Tamil) ===
  // ========================================
  "un soothu poduven", // I'll beat your ass
  "un pundai kedhuppen", // I'll rip your cunt
  "un sunni odaippen", // I'll break your dick
  "un goiyala madippen", // I'll crush your balls
  "soothu la sunni vaippen", // I'll put dick in ass
  "un koothi keduppen", // I'll ruin your cunt
  "un thala odaippen", // I'll break your head
  "un pal udaippen", // I'll break your teeth
  "un elumbu odaippen", // I'll break your bones
  "kaalai odaippen", // I'll break your legs
  "kaiyai odaippen", // I'll break your arms
  "naai ku theenam pottruven", // I'll feed you to dogs
  "drain la thallruven", // I'll push you in drain
  "gutter la thallruven", // I'll push you in gutter
  "uyiroda puthaippen", // I'll bury you alive
  "thol urichen", // I'll skin you
  "keezhi kizhippen", // I'll tear you apart
  "adichippen", // I'll beat you
  "kolluven", // I'll kill you
  "saaga adichippen", // I'll beat you to death

  // ========================================
  // === Tamil Threats - Script ===
  // ========================================
  "உன் சூத்து போடுவேன்", // I'll beat your ass
  "உன் புண்டை கெடுப்பேன்", // I'll rip your cunt
  "உன் சுன்னி ஒடைப்பேன்", // I'll break your dick
  "உன் கூத்தி கெடுப்பேன்", // I'll ruin your cunt
  "உன் தலை ஒடைப்பேன்", // I'll break your head
  "உன் பல் உடைப்பேன்", // I'll break your teeth
  "உன் எலும்பு ஒடைப்பேன்", // I'll break your bones
  "நாய்க்கு தீனம் போட்டுருவேன்", // I'll feed you to dogs
  "உயிரோட புதைப்பேன்", // I'll bury you alive
  "கொல்லுவேன்", // I'll kill you
  "சாக அடிச்சிப்பேன்", // I'll beat to death

  // ========================================
  // === Extended Tamil Body Part Insults ===
  // ========================================
  "soothu mudichu", // Ass knot (insult)
  "pundai mudichu", // Cunt knot (insult)
  "sunni mudichu", // Dick knot (insult)
  "koothi thuni", // Cunt cloth (insult)
  "soothu thuni", // Ass cloth (insult)
  "sunni thuni", // Dick cloth (insult)
  "pundai thol", // Cunt skin (insult)
  "soothu thol", // Ass skin (insult)
  "sunni thol", // Dick skin (insult)
  "koothi kaadhu", // Cunt ear (insult)
  "koothi kan", // Cunt eye (insult)
  "soothu kan", // Ass eye (asshole)
  "sunni kan", // Dick eye (insult)
  "pundai mooku", // Cunt nose (insult)
  "soothu mooku", // Ass nose (insult)
  "sunni mooku", // Dick nose (insult)

  // ========================================
  // === Extended Scatological Tamil ===
  // ========================================
  "theeni koothi", // Shit cunt
  "theeni punda", // Shit cunt variant
  "theeni sunni", // Shit dick
  "theeni soothu", // Shit ass
  "moothram kudi da", // Drink urine
  "moothram koothi", // Urine cunt
  "moothram sunni", // Urine dick
  "kusu koothi", // Fart cunt
  "kusu punda", // Fart cunt variant
  "kusu sunni", // Fart dick
  "kusu soothu", // Fart ass
  "theeni thinnu da", // Eat shit (variant)
  "moothram kudi koothi", // Drink urine cunt
  "drainage koothi", // Drainage cunt
  "drainage punda", // Drainage cunt variant
  "drainage sunni", // Drainage dick
  "sewage koothi", // Sewage cunt
  "sewage punda", // Sewage cunt variant
  "kuppai thotti koothi", // Garbage bin cunt
  "kuppai thotti punda", // Garbage bin cunt variant
  "kuppai thotti sunni", // Garbage bin dick

  // ========================================
  // === Extended Evasion Spellings (Tamil) ===
  // ========================================
  "0tha", // Otha evasion
  "th3vidiya", // Thevidiya evasion
  "k00thi", // Koothi evasion
  "p0nda", // Punda evasion
  "p0ndai", // Pundai evasion
  "s00thu", // Soothu evasion
  "s0nni", // Sunni evasion
  "m@yiru", // Mayiru evasion
  "th@yoli", // Thayoli evasion
  "v3si", // Vesi evasion
  "p0olu", // Poolu evasion
  "0mbu", // Oombu evasion
  "s@ppi", // Sappi evasion
  "n@ai", // Naai evasion
  "p@nni", // Panni evasion
  "k@zhudhai", // Kazhudhai evasion

  // ========================================
  // === More Internet Abbreviations ===
  // ========================================
  "oth myr pnda", // Otha mayiru punda abbreviation
  "tvdya pyn kth", // Thevidiya paiyan koothi abbreviation
  "kth mgne oth pnd", // Koothi magane otha punda abbreviation
  "snni mbu da", // Sunni oombu da abbreviation
  "sthu nkki oth", // Soothu nakki otha abbreviation
  "pndai nkki oth", // Pundai nakki otha abbreviation
  "oth kth myr pnd", // Otha koothi mayiru punda abbreviation
  "dei othmyr kth pnd", // Dei otha mayiru koothi punda abbreviation
  "tvdya sthu kth", // Thevidiya soothu koothi abbreviation
  "vsi kth pnd", // Vesi koothi punda abbreviation
  "pnni kth myr", // Panni koothi mayiru abbreviation
  "oth lsu kth myr", // Otha loosu koothi mayiru abbreviation
  "nai pnda oth", // Naai punda otha abbreviation
  "thyoli pnd kth", // Thayoli punda koothi abbreviation
  "kth vsi myr oth", // Koothi vesi mayiru otha abbreviation

  // ========================================
  // === Extended Animal Insults (Tamil) ===
  // ========================================
  "erumai koothi otha", // Buffalo cunt fuck off
  "erumai punda otha", // Buffalo cunt fuck off variant
  "erumai soothu otha", // Buffalo ass fuck off
  "erumai sunni otha", // Buffalo dick fuck off
  "kurangu koothi otha", // Monkey cunt fuck off
  "kurangu punda otha", // Monkey cunt fuck off variant
  "kurangu soothu otha", // Monkey ass fuck off
  "kurangu sunni otha", // Monkey dick fuck off
  "eli koothi otha", // Rat cunt fuck off
  "eli punda otha", // Rat cunt fuck off variant
  "paambu koothi otha", // Snake cunt fuck off
  "paambu punda otha", // Snake cunt fuck off variant
  "aadu koothi otha", // Goat cunt fuck off
  "aadu soothu otha", // Goat ass fuck off
  "aadu sunni otha", // Goat dick fuck off
  "karadi punda otha", // Bear cunt fuck off
  "karadi soothu otha", // Bear ass fuck off
  "nari punda otha", // Fox cunt fuck off
  "nari soothu otha", // Fox ass fuck off
  "onaai koothi otha", // Wolf cunt fuck off
  "onaai soothu otha", // Wolf ass fuck off
  "kaakka punda otha", // Crow cunt fuck off
  "poonai punda otha", // Cat cunt fuck off
  "poonai sunni otha", // Cat dick fuck off

  // ========================================
  // === Extended Tamil Religious Insults ===
  // ========================================
  "kovil koothi", // Temple cunt (sacrilegious)
  "kovil punda", // Temple cunt variant
  "kovil sunni", // Temple dick (sacrilegious)
  "sami koothi", // God cunt (sacrilegious)
  "sami punda", // God cunt variant
  "sami sunni", // God dick (sacrilegious)
  "pujari koothi", // Priest cunt
  "pujari punda", // Priest cunt variant
  "pujari sunni", // Priest dick
  "maulvi koothi", // Maulvi cunt
  "maulvi punda", // Maulvi cunt variant
  "church koothi", // Church cunt
  "church punda", // Church cunt variant
  "mosque koothi", // Mosque cunt
  "mosque punda", // Mosque cunt variant

  // ========================================
  // === Extended Tamil Script Body Part ===
  // ========================================
  "சூத்து முடிச்சு", // Soothu mudichu (ass knot)
  "புண்டை முடிச்சு", // Pundai mudichu (cunt knot)
  "சுன்னி முடிச்சு", // Sunni mudichu (dick knot)
  "கூத்தி துணி", // Koothi thuni (cunt cloth)
  "சூத்து துணி", // Soothu thuni (ass cloth)
  "சுன்னி துணி", // Sunni thuni (dick cloth)
  "கூத்தி காது", // Koothi kaadhu (cunt ear)
  "கூத்தி கண்", // Koothi kan (cunt eye)
  "சூத்து கண்", // Soothu kan (ass eye)
  "சுன்னி கண்", // Sunni kan (dick eye)
  "புண்டை மூக்கு", // Pundai mooku (cunt nose)
  "சூத்து மூக்கு", // Soothu mooku (ass nose)
  "சுன்னி மூக்கு", // Sunni mooku (dick nose)
  "எருமை கூத்தி ஓத்தா", // Erumai koothi otha (buffalo cunt fuck off)
  "குரங்கு கூத்தி ஓத்தா", // Kurangu koothi otha (monkey cunt fuck off)
  "பூனை புண்ட ஓத்தா", // Poonai punda otha (cat cunt fuck off)
  "ஆடு புண்டை ஓத்தா", // Aadu pundai otha (goat cunt fuck off)
  "நரி கூத்தி ஓத்தா", // Nari koothi otha (fox cunt fuck off)

  // ========================================
  // === Extended Tamil Scatological Script ===
  // ========================================
  "தீனி கூத்தி", // Theeni koothi (shit cunt)
  "தீனி புண்ட", // Theeni punda (shit cunt variant)
  "தீனி சுன்னி", // Theeni sunni (shit dick)
  "தீனி சூத்து", // Theeni soothu (shit ass)
  "மூத்திரம் குடி டா", // Moothram kudi da (drink urine)
  "குசு கூத்தி", // Kusu koothi (fart cunt)
  "குசு புண்ட", // Kusu punda (fart cunt variant)
  "குசு சுன்னி", // Kusu sunni (fart dick)
  "குசு சூத்து", // Kusu soothu (fart ass)
  "குப்பை தொட்டி கூத்தி", // Kuppai thotti koothi (garbage bin cunt)
  "டிரெய்னேஜ் கூத்தி", // Drainage koothi (drainage cunt)
  "சீவேஜ் கூத்தி", // Sewage koothi (sewage cunt)

  // ========================================
  // === More Extended Tamil Compounds ===
  // ========================================
  "un amma oor koothi", // Your mother is a village slut
  "un amma pacha vesi", // Your mother is a total prostitute
  "un akka oor vesi", // Your sister is a village prostitute
  "un appa koothi payale", // Your father is a cunt fellow
  "un kudumbam muzhusum koothi", // Your entire family is cunts
  "un vaamsam muzhusum vesi", // Your entire lineage is prostitutes
  "un amma ku sunni oombu tha theriyum", // Your mother only knows dick sucking
  "un akka ku koothi okkura tha theriyum", // Your sister only knows cunt fucking
  "un amma oor naai koothi", // Your mother is a village dog cunt
  "un amma panni koothi vesi", // Your mother is a pig cunt prostitute
  "un akka naai punda vesi", // Your sister is a dog cunt prostitute
  "un amma kazhudhai koothi", // Your mother is a donkey cunt
  "un akka erumai koothi", // Your sister is a buffalo cunt
  "un appa naai sunni", // Your father is a dog dick
  "un amma sunni oomburadhu paathurukken", // I've seen your mother suck dick
  "un akka soothu thara paathurukken", // I've seen your sister give ass
  "un amma ku naai okkum", // Dogs fuck your mother
  "un amma ku panni okkum", // Pigs fuck your mother
  "un amma ku kazhudhai okkum", // Donkeys fuck your mother
  "un amma ku erumai okkum", // Buffaloes fuck your mother
  "un amma ku aadu okkum", // Goats fuck your mother
  "un amma ku kurangu okkum", // Monkeys fuck your mother
  "un amma ku eli okkum", // Rats fuck your mother
  "un amma ku paambu okkum", // Snakes fuck your mother
  "un amma hijra", // Your mother is a eunuch
  "un appa hijra", // Your father is a eunuch
  "un akka hijra", // Your sister is a eunuch
  "hijra koothi", // Eunuch cunt
  "hijra punda", // Eunuch cunt variant
  "hijra sunni", // Eunuch dick
  "hijra soothu", // Eunuch ass
  "pottai vesi", // Eunuch prostitute
  "pottai koothi vesi", // Eunuch cunt prostitute
  "aravani koothi", // Third-gender cunt (derogatory)
  "thirunangai koothi", // Trans woman cunt (derogatory use)
  "number 9 koothi", // Number 9 cunt (slang for eunuch)
  "pottal koothi", // Eunuch cunt variant
  "pottal sunni", // Eunuch dick variant

  // ========================================
  // === More Extended Tamil Script ===
  // ========================================
  "உன் அம்மா ஊர் கூத்தி", // Your mother village slut
  "உன் அம்மா பச்ச வேசி", // Your mother total prostitute
  "உன் அக்கா ஊர் வேசி", // Your sister village prostitute
  "உன் குடும்பம் முழுசும் கூத்தி", // Entire family cunts
  "உன் வம்சம் முழுசும் வேசி", // Entire lineage prostitutes
  "உன் அம்மா கழுதை கூத்தி", // Your mother donkey cunt
  "உன் அக்கா எருமை கூத்தி", // Your sister buffalo cunt
  "உன் அம்மாக்கு நாய் ஒக்கும்", // Dogs fuck your mother
  "உன் அம்மாக்கு பன்னி ஒக்கும்", // Pigs fuck your mother
  "உன் அம்மாக்கு கழுதை ஒக்கும்", // Donkeys fuck your mother
  "உன் அம்மா ஹிஜ்ரா", // Your mother eunuch
  "உன் அப்பா ஹிஜ்ரா", // Your father eunuch
  "ஹிஜ்ரா கூத்தி", // Eunuch cunt
  "பொட்டை வேசி", // Eunuch prostitute
  "அரவாணி கூத்தி", // Third-gender cunt (derogatory)

  // ========================================
  // === More Extended Animal Compounds ===
  // ========================================
  "naai otha punda koothi", // Dog fuck off cunt
  "panni otha punda koothi", // Pig fuck off cunt
  "kazhudhai otha punda koothi", // Donkey fuck off cunt
  "erumai otha punda koothi", // Buffalo fuck off cunt
  "aadu otha punda koothi", // Goat fuck off cunt
  "kurangu otha punda koothi", // Monkey fuck off cunt
  "poonai otha punda koothi", // Cat fuck off cunt
  "eli otha punda koothi", // Rat fuck off cunt
  "paambu otha punda koothi", // Snake fuck off cunt
  "naai vesi thevidiya koothi", // Dog prostitute cunt
  "panni vesi thevidiya koothi", // Pig prostitute cunt
  "kazhudhai vesi thevidiya koothi", // Donkey prostitute cunt
  "erumai vesi thevidiya koothi", // Buffalo prostitute cunt
  "naai sunni oombu", // Suck dog's dick
  "panni sunni oombu", // Suck pig's dick
  "kazhudhai sunni oombu", // Suck donkey's dick
  "erumai sunni oombu", // Suck buffalo's dick
  "kurangu sunni oombu", // Suck monkey's dick
  "aadu sunni oombu", // Suck goat's dick
  "naai soothu nakki", // Lick dog's ass
  "panni soothu nakki", // Lick pig's ass
  "kazhudhai soothu nakki", // Lick donkey's ass
  "erumai soothu nakki", // Lick buffalo's ass
  "naai thayoli", // Dog motherfucker
  "panni thayoli", // Pig motherfucker
  "kazhudhai thayoli", // Donkey motherfucker
  "erumai thayoli", // Buffalo motherfucker
  "kurangu thayoli", // Monkey motherfucker
  "aadu thayoli", // Goat motherfucker
  "poonai thayoli", // Cat motherfucker
  "eli thayoli", // Rat motherfucker

  // ========================================
  // === More Extended Threats (Tamil) ===
  // ========================================
  "un amma munnadiye okkuven", // I'll fuck your mother in front (of you)
  "un akka munnadiye okkuven", // I'll fuck your sister in front (of you)
  "un vamsam azhikkuven", // I'll destroy your lineage
  "un kudumbam azhikkuven", // I'll destroy your family
  "un peyar keli kettiduvaan", // Your name will be defamed
  "un pundai la thee vaippen", // I'll set your cunt on fire
  "un soothu la thee vaippen", // I'll set your ass on fire
  "un sunni la thee vaippen", // I'll set your dick on fire
  "un koothi la milagai podhuven", // I'll put chili in your cunt
  "un soothu la milagai podhuven", // I'll put chili in your ass
  "un pundai la irumbu sunni dhukuven", // I'll insert iron dick in your cunt
  "un soothu la irumbu sunni dhukuven", // I'll insert iron dick in your ass
  "un sunni la rope kattuven", // I'll tie rope to your dick
  "un koothi thaichikuven", // I'll sew your cunt shut
  "un soothu thaichikuven", // I'll sew your ass shut
  "un pundai la paambu viduven", // I'll put snake in your cunt
  "un soothu la paambu viduven", // I'll put snake in your ass
  "un vamsam thikku muzhangu paduvaan", // Your lineage will be humiliated
  "unna naai ku pottruven", // I'll feed you to dogs
  "unna panni ku pottruven", // I'll feed you to pigs
  "unna drain la podhuven", // I'll put you in drain
  "unna gutter la podhuven", // I'll put you in gutter
  "unna uyiroda puthaippen", // I'll bury you alive

  // ========================================
  // === More Extended Tamil Script Threats ===
  // ========================================
  "உன் அம்மா முன்னாடியே ஒக்குவேன்", // I'll fuck mother in front
  "உன் அக்கா முன்னாடியே ஒக்குவேன்", // I'll fuck sister in front
  "உன் வம்சம் அழிக்குவேன்", // I'll destroy lineage
  "உன் குடும்பம் அழிக்குவேன்", // I'll destroy family
  "உன் புண்டையில தீ வைப்பேன்", // Set cunt on fire
  "உன் சூத்தில தீ வைப்பேன்", // Set ass on fire
  "உன் கூத்தியில மிளகாய் போடுவேன்", // Put chili in cunt
  "உன் சூத்தில மிளகாய் போடுவேன்", // Put chili in ass
  "உன் புண்டையில பாம்பு விடுவேன்", // Put snake in cunt
  "உன் சூத்தில பாம்பு விடுவேன்", // Put snake in ass
  "உன்னை நாய்க்கு போட்டுருவேன்", // Feed you to dogs
  "உன்னை பன்னிக்கு போட்டுருவேன்", // Feed you to pigs

  // ========================================
  // === More Extended Tanglish Gaming ===
  // ========================================
  "afk koothi otha", // AFK cunt fuck off
  "report pannu da koothi", // Report cunt
  "mute pannu da punda", // Mute cunt
  "feed panda koothi", // Fed cunt
  "carry pannura koothi", // Carrying cunt
  "int panda koothi", // Feeding intentionally cunt
  "trash tier koothi", // Trash tier cunt
  "bronze koothi", // Bronze cunt (low rank)
  "iron koothi", // Iron cunt (lowest rank)
  "hardstuck koothi", // Hardstuck cunt (can't rank up)
  "boosted koothi", // Boosted cunt (fake rank)
  "elo hell koothi", // Elo hell cunt
  "smurf otha", // Smurf fuck off
  "aim illa koothi", // No aim cunt
  "game sense illa koothi", // No game sense cunt
  "camping koothi otha", // Camping cunt fuck off
  "stream sniper otha", // Stream sniper fuck off
  "gg koothi otha", // GG cunt fuck off
  "ez koothi otha", // EZ cunt fuck off

  // ========================================
  // === More Extended Caste Slurs ===
  // ========================================
  "paraiyan koothi otha", // Dalit caste cunt fuck off
  "paraiyan punda otha", // Dalit caste cunt fuck off variant
  "paraichi koothi otha", // Female Dalit cunt fuck off
  "chakkiliya punda otha", // Leather-worker cunt fuck off
  "pallan koothi otha", // Agricultural caste cunt fuck off
  "pallaichi punda otha", // Female form cunt fuck off
  "thotti koothi otha", // Sweeper cunt fuck off
  "thottichi punda otha", // Female sweeper cunt fuck off
  "paarpan koothi otha", // Brahmin cunt fuck off
  "keezh jaathi otha da", // Low caste fuck off
  "kulam kettavan otha", // Ruined caste fuck off
  "jathi illa otha", // No caste fuck off
  "paraiyan thevidiya", // Dalit prostitute
  "chakkiliya thevidiya", // Leather-worker prostitute
  "pallan thevidiya", // Agricultural caste prostitute
  "thotti thevidiya", // Sweeper prostitute
  "keezh jaathi thevidiya", // Low caste prostitute
  "keezh jaathi thayoli", // Low caste motherfucker
  "keezh jaathi sunni oombu", // Low caste suck dick
  "keezh jaathi vesi", // Low caste prostitute variant

  // ========================================
  // === More Extended Tamil Script Caste ===
  // ========================================
  "பறையன் கூத்தி ஓத்தா", // Paraiyan koothi otha
  "பறைச்சி கூத்தி ஓத்தா", // Paraichi koothi otha
  "சக்கிலிய புண்ட ஓத்தா", // Chakkiliya punda otha
  "பள்ளன் கூத்தி ஓத்தா", // Pallan koothi otha
  "தோட்டி கூத்தி ஓத்தா", // Thotti koothi otha
  "பாப்பான் கூத்தி ஓத்தா", // Paarpan koothi otha
  "கீழ் ஜாதி ஓத்தா டா", // Keezh jaathi otha da
  "கீழ் ஜாதி தேவடியா", // Keezh jaathi thevidiya
  "கீழ் ஜாதி தாயோளி", // Keezh jaathi thayoli
  "கீழ் ஜாதி வேசி", // Keezh jaathi vesi

  // ========================================
  // === More Tamil Romanized Compounds ===
  // ========================================
  "un amma thevidiya batch", // Your mother is prostitute batch
  "un akka vesi batch", // Your sister is prostitute batch
  "un appa punda batch", // Your father is cunt batch
  "un kudumbam koothi batch", // Your family is cunt batch
  "un vaamsam vesi batch", // Your lineage is prostitute batch
  "oor la ellaarum un amma ku okkum", // Everyone in town fucks your mother
  "oor la ellaarum un akka ku okkum", // Everyone in town fucks your sister
  "area la ellaarum un amma ku okkum", // Everyone in area fucks your mother
  "bazaar la ellaarum un amma ku okkum", // Everyone in bazaar fucks your mother
  "naai kuda un amma ku okkum", // Even dogs fuck your mother
  "panni kuda un amma ku okkum", // Even pigs fuck your mother
  "kazhudhai kuda un amma ku okkum", // Even donkeys fuck your mother
  "un amma sunni oomburadhu profession", // Your mother's profession is dick sucking
  "un akka soothu tharuradhu profession", // Your sister's profession is giving ass
  "un amma free la okkum", // Your mother fucks for free
  "un akka free la okkum", // Your sister fucks for free
  "un amma oru ruba ku okkum", // Your mother fucks for one rupee
  "un amma oru paisa ku okkum", // Your mother fucks for one paisa
  "un amma ku price illa", // Your mother has no price (worthless)
  "un akka ku price illa", // Your sister has no price (worthless)

  // ========================================
  // === Extended Tamil Script Sexual Insults ===
  // ========================================
  "உன் அம்மா புண்ட நக்குவேன்", // I'll lick your mother's pussy
  "உன் அக்கா புண்ட நக்குவேன்", // I'll lick your sister's pussy
  "உன் அம்மா சூத்து நக்குவேன்", // I'll lick your mother's ass
  "உன் அக்கா சூத்து நக்குவேன்", // I'll lick your sister's ass
  "உன் அம்மா முலை பிடிப்பேன்", // I'll squeeze your mother's breasts
  "உன் அக்கா முலை பிடிப்பேன்", // I'll squeeze your sister's breasts
  "உன் அம்மா புண்டையில கை வைப்பேன்", // I'll put hand in your mother's pussy
  "உன் அம்மா புண்டையில கால் வைப்பேன்", // I'll put foot in your mother's pussy
  "உன் சுன்னி வெட்டுவேன்", // I'll cut your dick
  "உன் சுன்னி ஒடிப்பேன்", // I'll break your dick
  "உன் கொட்டை பிடிப்பேன்", // I'll squeeze your balls
  "உன் கொட்டை வெட்டுவேன்", // I'll cut your balls
  "உன் அம்மா புண்ட கிழிப்பேன்", // I'll tear your mother's pussy
  "உன் அக்கா புண்ட கிழிப்பேன்", // I'll tear your sister's pussy
  "உன் அம்மா சூத்து கிழிப்பேன்", // I'll tear your mother's ass
  "உன் அக்கா சூத்து கிழிப்பேன்", // I'll tear your sister's ass
  "வேசி மகனே நீ", // Prostitute's son you (formal)
  "விபச்சாரி மகனே நீ", // Prostitute's son you (alt)
  "தேவிடியா மகனே நீ", // Prostitute's son you
  "தேவிடியா மகளே நீ", // Prostitute's daughter you
  "கூத்தி மகனே நீ", // Whore's son you
  "கூத்தி மகளே நீ", // Whore's daughter you
  "உன் அம்மா சந்தை வேசி", // Your mother is market whore
  "உன் அக்கா சந்தை வேசி", // Your sister is market whore
  "உன் அம்மா ரோட்டு வேசி", // Your mother is street whore
  "உன் அக்கா ரோட்டு வேசி", // Your sister is street whore
  "உன் அம்மா ஊர் வேசி", // Your mother is town whore

  // ========================================
  // === Extended Romanized Tamil Sexual ===
  // ========================================
  "un amma punda nakkuven", // I'll lick your mother's pussy
  "un akka punda nakkuven", // I'll lick your sister's pussy
  "un amma soothu nakkuven", // I'll lick your mother's ass
  "un akka soothu nakkuven", // I'll lick your sister's ass
  "un amma mulai pidipppen", // I'll squeeze your mother's breasts
  "un akka mulai pidippen", // I'll squeeze your sister's breasts
  "un amma pundaiyila kai vaipppen", // I'll put hand in your mother's pussy
  "un amma pundaiyila kaal vaipppen", // I'll put foot in your mother's pussy
  "un sunni vettuven", // I'll cut your dick
  "un sunni odippen", // I'll break your dick
  "un kottai pidippen", // I'll squeeze your balls
  "un kottai vettuven", // I'll cut your balls
  "un amma punda kizhippen", // I'll tear your mother's pussy
  "un akka punda kizhippen", // I'll tear your sister's pussy
  "un amma soothu kizhippen", // I'll tear your mother's ass
  "un akka soothu kizhippen", // I'll tear your sister's ass
  "vesi magane nee", // Prostitute's son you (formal)
  "vibachchaari magane nee", // Prostitute's son you (alt)
  "thevidiya magane nee", // Prostitute's son you
  "thevidiya magale nee", // Prostitute's daughter you
  "koothi magane nee", // Whore's son you
  "koothi magale nee", // Whore's daughter you
  "un amma sandai vesi", // Your mother is market whore
  "un akka sandai vesi", // Your sister is market whore
  "un amma rottu vesi", // Your mother is street whore
  "un akka rottu vesi", // Your sister is street whore
  "un amma ooru vesi", // Your mother is town whore
  "un akka ooru vesi", // Your sister is town whore

  // ========================================
  // === Extended Madurai/Kongu Dialect ===
  // ========================================
  "unga amma ku okkuven da", // I'll fuck your mother (Madurai)
  "unga akka ku okkuven da", // I'll fuck your sister (Madurai)
  "thevidiya paiyan da nee", // Prostitute's son you (Madurai)
  "koothi paiyan da nee", // Whore's son you (Madurai)
  "punda paiyan da nee", // Cunt's son you (Madurai)
  "otha da saani", // Fuck you eunuch (Madurai)
  "okkala da saani", // Get fucked eunuch (Madurai)
  "punda mavane", // Cunt son-in-law (Kongu)
  "koothi mavane", // Whore son-in-law (Kongu)
  "soothu mavane", // Ass son-in-law (Kongu)
  "sunni mavane", // Dick son-in-law (Kongu)
  "okkala mavane", // Get fucked son-in-law (Kongu)
  "poda koothi payale", // Go whore's son (Kongu)
  "poda punda payale", // Go cunt's son (Kongu)
  "poda soothu payale", // Go ass's son (Kongu)
  "unga veettula ellaarum vesi", // Everyone in your house is whore (Madurai)
  "unga veettula ellaarum thevidiya", // Everyone in your house is prostitute (Madurai)
  "unga kula ellaarum vesi", // Everyone in your clan is whore (Madurai)
  "unga kula ellaarum koothi", // Everyone in your clan is whore (Madurai alt)
  "ooru la un amma ku okkuvaanga", // Village people fuck your mother (Madurai)

  // ========================================
  // === Extended Sri Lankan Tamil ===
  // ========================================
  "umba amma pundai okkuvan", // I'll fuck your mother's pussy (SL Tamil)
  "umba akka pundai okkuvan", // I'll fuck your sister's pussy (SL Tamil)
  "umba thathi modda", // Your father's dick (SL Tamil)
  "umba amma vesiyaa", // Your mother is a whore (SL Tamil)
  "umba akka vesiyaa", // Your sister is a whore (SL Tamil)
  "pundai okkara paiyan", // Pussy fucker boy (SL Tamil)
  "soothu okkara paiyan", // Ass fucker boy (SL Tamil)
  "sunni oomba paiyan", // Dick sucker boy (SL Tamil)
  "vesiyoda mahan", // Whore's son (SL Tamil formal)
  "kooththiyoda mahan", // Whore's son (SL Tamil)
  "umba amma roadla nikkindra", // Your mother stands on the road (SL Tamil)
  "umba akka roadla nikkindra", // Your sister stands on the road (SL Tamil)
  "umba amma lorry driverlukku okkum", // Your mother fucks lorry drivers (SL Tamil)
  "umba amma soldierslukku okkum", // Your mother fucks soldiers (SL Tamil)
  "umba amma bazaarlaa okkum", // Your mother fucks in the bazaar (SL Tamil)

  // ========================================
  // === Extended Malaysian/Singapore Tamil ===
  // ========================================
  "pundek maa", // Pussy mother (MY Tamil)
  "pundek ayah", // Pussy father (MY Tamil)
  "pundek lu", // Pussy you (MY Tamil)
  "keling pundek", // Indian pussy (MY Tamil slur)
  "anna pundek", // Brother pussy (MY Tamil elder)
  "machan pundek", // Dude pussy (MY Tamil)
  "pundek kia", // Pussy child (MY Tamil)
  "okkala pundek", // Get fucked pussy (MY Tamil)
  "pundek bodoh", // Pussy stupid (MY Tamil-Malay mix)
  "sundel lu", // Whore you (MY Tamil-Malay mix)
  "palat lu pundek", // Go back pussy (MY Tamil)
  "mabuk pundek", // Drunk pussy (MY Tamil-Malay mix)
  "celaka pundek", // Damn pussy (MY Tamil-Malay mix)

  // ========================================
  // === Extended Body Part Combos (Tamil) ===
  // ========================================
  "பெரிய புண்ட வாடா", // Big pussy guy
  "சின்ன சுன்னி வாடா", // Small dick guy
  "பெரிய சூத்து வாடா", // Big ass guy
  "சின்ன கொட்டை வாடா", // Small balls guy
  "வளைந்த சுன்னி வாடா", // Bent dick guy
  "குட்டை சுன்னி வாடா", // Short dick guy
  "தொங்கு முலை", // Saggy breasts
  "தொங்கு சுன்னி", // Saggy dick
  "periya punda vaada", // Big pussy guy
  "chinna sunni vaada", // Small dick guy
  "periya soothu vaada", // Big ass guy
  "chinna kottai vaada", // Small balls guy
  "valaindha sunni vaada", // Bent dick guy
  "kuttai sunni vaada", // Short dick guy
  "thongu mulai", // Saggy breasts
  "thongu sunni", // Saggy dick
  "ஊளை சுன்னி", // Rotten dick
  "ஊளை புண்ட", // Rotten pussy
  "oolai sunni", // Rotten dick
  "oolai punda", // Rotten pussy

  // ========================================
  // === Extended Emasculation Insults (Tamil) ===
  // ========================================
  "உன் சுன்னி எழும்பாது", // Your dick can't get up
  "உன் சுன்னி வேலை செய்யாது", // Your dick doesn't work
  "உன் சுன்னி செத்துப்போச்சு", // Your dick died
  "நீ ஆண்மை இல்லாதவன்", // You are impotent
  "நீ அலி", // You are a eunuch
  "நீ ஒன்பது", // You are a nine (eunuch slang)
  "உன் சுன்னி புழு மாதிரி", // Your dick is like a worm
  "உன் சுன்னி விரல் மாதிரி", // Your dick is like a finger
  "un sunni ezhumbadhu", // Your dick can't get up
  "un sunni velai seyyaadhu", // Your dick doesn't work
  "un sunni sethupochu", // Your dick died
  "nee aanmai illaathavan", // You are impotent
  "nee ali", // You are a eunuch
  "nee ombudhu", // You are a nine (eunuch slang)
  "un sunni puzhu maathiri", // Your dick is like a worm
  "un sunni viral maathiri", // Your dick is like a finger

  // ========================================
  // === Extended Scatological (Tamil) ===
  // ========================================
  "உன் முகத்தில் மலம் தீற்றுவேன்", // I'll smear shit on your face
  "உன் முகத்தில் சிறுநீர் ஊற்றுவேன்", // I'll pour piss on your face
  "உன் சாப்பாட்டில் மலம் போடுவேன்", // I'll put shit in your food
  "உன் சாப்பாட்டில் சிறுநீர் போடுவேன்", // I'll put piss in your food
  "மலம் தின்னும் நாய்", // Shit eating dog
  "சிறுநீர் குடிக்கும் நாய்", // Piss drinking dog
  "குண்டி காற்று மோப்பான்", // Fart sniffer
  "un mugathtula malam theetruven", // I'll smear shit on your face
  "un mugathtula siruneer ootruven", // I'll pour piss on your face
  "un saappaattula malam poduven", // I'll put shit in your food
  "un saappaattula siruneer poduven", // I'll put piss in your food
  "malam thinnum naai", // Shit eating dog
  "siruneer kudikkum naai", // Piss drinking dog
  "kundi kaatru moppaan", // Fart sniffer
  "un amma mugathtula malam", // Shit on your mother's face
  "un akka mugathtula malam", // Shit on your sister's face
  "un amma mugathtula moothiram", // Piss on your mother's face
  "un akka mugathtula moothiram", // Piss on your sister's face

  // ========================================
  // === Extended Evasion Spellings (Tamil) ===
  // ========================================
  "0thaa", // Fuck (evasion alt)
  "p00nda", // Pussy (evasion)
  "sunn1", // Dick (evasion)
  "0kkala", // Get fucked (evasion)
  "p00ndai", // Pussy (evasion alt)
  "th3v1d1ya", // Prostitute (evasion alt)
  "k@@thi", // Whore (evasion)
  "p@@nda", // Pussy (evasion)
  "s@@thu", // Ass (evasion)
  "0mb0", // Suck (evasion)
  "sunn!", // Dick (evasion)
  "m00lai", // Breasts (evasion)
  "k0tt@i", // Balls (evasion)
  "th@y0li", // Motherfucker (evasion alt)

  // ========================================
  // === Extended Abuse Phrases (Tamil) ===
  // ========================================
  "un vazhkaikku vilai illa", // Your life has no price
  "nee porakkaamal irunthaa nallaa irukum", // Better if you weren't born
  "un amma un appaa yaarunu theriyaadhu", // Your mother doesn't know your father
  "un appaa yaaru yaarukkum theriyaadhu", // Nobody knows who your father is
  "un amma unnai dustbin la pottu vittaa", // Your mother threw you in dustbin
  "un amma unnai road la pottu vittaa", // Your mother threw you on the road
  "unnai yaarukum vendaam", // Nobody wants you
  "un mugam paarthaa aalu thupum", // People spit seeing your face
  "un peru ketta aalu sirikum", // People laugh hearing your name
  "un family la ellaarum vesi", // Everyone in your family is whore
  "un family la ellaarum thevidiya", // Everyone in your family is prostitute
  "un kulam la ellaarum koothi", // Everyone in your clan is whore
  "un kulam la ellaarum okkalaigal", // Everyone in your clan are fuckers
  "உன் வாழ்க்கைக்கு விலை இல்லை", // Your life has no price (script)
  "நீ பொறக்காமல் இருந்தா நல்லா இருக்கும்", // Better if you weren't born (script)
  "உன் அம்மா உன் அப்பா யாருன்னு தெரியாது", // Your mother doesn't know your father (script)
  "உன்னை யாருக்கும் வேண்டாம்", // Nobody wants you (script)
  "உன் முகம் பார்த்தா ஆளு துப்பும்", // People spit seeing your face (script)
  "உன் பேரு கேட்டா ஆளு சிரிக்கும்", // People laugh hearing your name (script)
  "உன் ஃபேமிலி ல எல்லாரும் வேசி", // Everyone in your family is whore (script)

  // ========================================
  // === Extended Caste-Based (Tamil) ===
  // ========================================
  "pallan punda otha", // Pallan caste cunt fucker
  "chakkiliyar punda otha", // Chakkiliyar caste cunt fucker
  "vannan punda otha", // Washerman caste cunt fucker
  "ambaththan punda otha", // Barber caste cunt fucker
  "keezh jaathi naai", // Low caste dog
  "keezh jaathi panni", // Low caste pig
  "keezh jaathi thevidiya magan", // Low caste prostitute's son
  "keezh jaathi koothi magan", // Low caste whore's son
  "கீழ் ஜாதி நாய்", // Low caste dog (script)
  "கீழ் ஜாதி பன்னி", // Low caste pig (script)
  "கீழ் ஜாதி தேவடியா மகன்", // Low caste prostitute's son (script)
  "கீழ் ஜாதி கூத்தி மகன்", // Low caste whore's son (script)
  "பள்ளன் புண்ட", // Pallan caste cunt (script)
  "பறையன் புண்ட", // Paraiyan caste cunt (script)

  // ========================================
  // === Extended Internet/Gaming Tamil ===
  // ========================================
  "nee noob punda da", // You noob cunt
  "nee hacker thevidiya magan da", // You hacker prostitute's son
  "nee camper koothi paiyan da", // You camper whore's son
  "nee feeder punda da", // You feeder cunt
  "nee troll thevidiya magan da", // You troll prostitute's son
  "nee toxic koothi paiyan da", // You toxic whore's son
  "nee griefing punda da", // You griefing cunt
  "nee afk thevidiya magan da", // You AFK prostitute's son
  "nee stream sniper punda da", // You stream sniper cunt
  "game vidu da koothi paiyan", // Leave game whore's son
  "uninstall pannu da punda", // Uninstall cunt
  "lag ku otha da", // Fuck the lag
  "ping ku otha da", // Fuck the ping
  "server ku otha da", // Fuck the server
  "gg punda", // GG cunt
  "ez punda", // EZ cunt
  "gg sunni oombu", // GG suck dick
  "ez sunni oombu", // EZ suck dick
  "report pannu punda", // Report cunt
];

export default tamilBadWords;
