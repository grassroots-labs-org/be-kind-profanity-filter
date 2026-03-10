/**
 * Japanese profanity words list
 * Contains common profanities, insults, and offensive terms.
 * Includes native Japanese profanity and commonly used katakana loanword profanity.
 * ⚠️ Warning: This file contains explicit language in Japanese
 */
const japaneseBadWords = [
  // Native Japanese profanity
  "クソ", // Shit/damn
  "糞", // Shit (kanji)
  "くそったれ", // Shithead
  "くたばれ", // Drop dead
  "畜生", // Damn it / beast
  "死ね", // Die
  "馬鹿", // Idiot/fool
  "バカ", // Idiot/fool (katakana)
  "アホ", // Idiot (Kansai)
  "変態", // Pervert
  "痴漢", // Groper/molester
  "きちがい", // Crazy/insane
  "ケツ", // Ass
  "ちんこ", // Penis (vulgar)
  "ちんちん", // Penis (childish)
  "ちんぽ", // Penis (vulgar)
  "まんこ", // Pussy (vulgar)
  "おっぱい", // Breasts
  "金玉", // Testicles (kanji)
  "きんたま", // Testicles (hiragana)
  "やりまん", // Slut
  "売春婦", // Prostitute
  "強姦", // Rape
  "野郎", // Bastard
  "くそ野郎", // Shit bastard
  "てめえ", // You (hostile)
  "きさま", // You (hostile/archaic)
  "雌豚", // Sow/female pig
  "デブ", // Fatso
  "ブス", // Ugly (woman)
  "カス", // Scum/dregs
  "クズ", // Trash/scum
  "ゴミ", // Garbage
  "尻", // Butt/ass
  "精子", // Sperm
  "射精", // Ejaculation
  "自慰", // Masturbation
  "フェラ", // Fellatio (abbreviation)
  "淫乱", // Lewd/promiscuous
  "中出し", // Creampie
  "パイズリ", // Titjob
  "売女", // Whore
  "ふざけるな", // Don't mess around / fuck off
  "エロ", // Erotic/perverted
  "ちくび", // Nipple
  "ザーメン", // Semen (German loanword)
  "セックス", // Sex

  // Katakana loanword profanity (commonly used in Japanese)
  "小便", // Urine/piss
  "放尿", // Urination
  "獣性", // Bestiality/animal nature
  "恋物癖", // Fetishism
  "アナル", // Anal
  "アスホール", // Asshole
  "コック", // Cock
  "コックサッカー", // Cocksucker
  "ブロージョブ", // Blowjob
  "ブルシット", // Bullshit
  "ディルドー", // Dildo
  "ファゴット", // Faggot
  "ペニス", // Penis
  "プッシー", // Pussy
  "バギーナ", // Vagina
  "オーガスム", // Orgasm
  "オルガスム", // Orgasm (alternate)
  "コンドム", // Condom
  "マゾキスト", // Masochist
  "サディスト", // Sadist
  "シーメール", // Shemale
  "ニガー", // N-word
  "ビッチ", // Bitch
  "ファック", // Fuck
  "レイプ", // Rape
  "スメグマ", // Smegma

  // Additional Japanese profanity
  "あほんだら", // Idiot (Kansai)
  "うざい", // Annoying
  "うぜえ", // Annoying (rougher)
  "おまんこ", // Pussy (polite prefix + vulgar)
  "がいじ", // Disabled person (internet slang, offensive)
  "きしょい", // Gross/disgusting
  "きもい", // Disgusting/creepy
  "くそがき", // Shit brat
  "くそばばあ", // Shit old woman
  "くそじじい", // Shit old man
  "こじき", // Beggar (discriminatory)
  "このやろう", // You bastard
  "ざけんな", // Don't fuck with me
  "しね", // Die (hiragana variant)
  "すけべ", // Pervert
  "ちくしょう", // Damn it
  "どあほ", // Big idiot (Kansai)
  "とんま", // Dunce
  "のろま", // Slowpoke (insult)
  "ばかやろう", // Stupid bastard
  "ぶさいく", // Ugly
  "ぼけ", // Senile / idiot
  "まぬけ", // Fool
  "ろくでなし", // Good-for-nothing
  "低能", // Low-ability (insult)
  "売国奴", // Traitor
  "外道", // Brute/fiend
  "廃人", // Human waste
  "気違い", // Insane (offensive kanji)
  "知障", // Mentally disabled (abbreviation, offensive)
  "穢多", // Historical discriminatory term
  "糞ガキ", // Shit brat (kanji)
  "糞野郎", // Shit bastard (kanji)
  "落ちこぼれ", // Dropout/failure
  "陰キャ", // Introvert (internet insult)
  "ガイジ", // Disabled (katakana, internet slang)
  "キモオタ", // Creepy otaku
  "シコる", // To masturbate (internet slang)
  "ヤリチン", // Man-whore
  "ヤリマン", // Already listed variant
  "氏ね", // Die (internet censored form)
  "ま○こ", // Censored まんこ
  "ち○こ", // Censored ちんこ

  // クソ/糞 compounds
  "くそぼけ", // Shit-idiot
  "くそ女", // Shit woman
  "くそ男", // Shit man
  "くそ食らえ", // Eat shit
  "くそたれ", // Shit-drip
  "くそみそ", // Shit and miso (worthless)
  "くそまみれ", // Covered in shit
  "クソガキ", // Shit brat (katakana)
  "クソ野郎", // Shit bastard (katakana)
  "クソビッチ", // Shit bitch
  "クソアマ", // Shit woman (vulgar)
  "糞虫", // Shit insect
  "糞ったれ", // Shit-drip (kanji)

  // バカ/馬鹿 compounds
  "大馬鹿", // Great fool
  "馬鹿たれ", // Stupid drip
  "馬鹿野郎", // Stupid bastard
  "馬鹿者", // Stupid person
  "馬鹿女", // Stupid woman
  "馬鹿男", // Stupid man
  "馬鹿面", // Stupid face
  "バカタレ", // Stupid drip (katakana)
  "ばかもの", // Stupid person (hiragana)
  "ドバカ", // Huge idiot

  // Discriminatory terms
  "非人", // Non-person (historical slur)
  "チョン", // Slur for Koreans
  "部落民", // Burakumin (discriminatory)
  "毛唐", // Slur for foreigners
  "三国人", // Derogatory for foreigners
  "土人", // Primitive person (slur)
  "支那", // Derogatory for China
  "支那人", // Derogatory for Chinese people
  "チャンコロ", // Slur for Chinese
  "露助", // Slur for Russians
  "ジャップ", // Jap (self-referential slur)
  "ガイジン", // Foreigner (can be derogatory)
  "不法滞在者", // Illegal alien (derogatory use)

  // Sexual terms
  "おめこ", // Female genitalia (Kansai)
  "ぼぼ", // Sexual intercourse (dialectal)
  "やる", // To do it (sexual)
  "はめる", // To insert (sexual)
  "挿入", // Insertion (sexual)
  "膣", // Vagina
  "陰茎", // Penis
  "勃起", // Erection
  "包茎", // Phimosis (used as insult)
  "童貞", // Virgin (male, used as insult)
  "痴女", // Female pervert
  "淫売", // Prostitute
  "売春", // Prostitution
  "援交", // Compensated dating
  "風俗", // Sex industry
  "ソープ", // Soapland (sex establishment)
  "デリヘル", // Delivery health (escort service)
  "パンチラ", // Panty shot
  "手コキ", // Handjob
  "手マン", // Manual stimulation
  "潮吹き", // Squirting
  "青姦", // Outdoor sex
  "乱交", // Orgy
  "痴漢行為", // Groping acts
  "陰毛", // Pubic hair
  "陰部", // Genitals
  "陰唇", // Labia
  "陰嚢", // Scrotum
  "肉便器", // Meat toilet (extremely vulgar)
  "玉舐め", // Ball licking
  "顔射", // Facial (sexual)
  "口内射精", // Oral ejaculation
  "二穴", // Double penetration
  "素股", // Intercrural sex
  "本番", // Full sex service
  "逆レイプ", // Reverse rape
  "輪姦", // Gang rape
  "近親相姦", // Incest
  "獣姦", // Bestiality
  "屍姦", // Necrophilia
  "盗撮", // Voyeurism/hidden camera
  "痴態", // Lewd behavior
  "淫行", // Obscene acts
  "猥褻", // Obscenity
  "不倫", // Adultery
  "姦通", // Adultery (legal term)
  "ペドフィリア", // Pedophilia
  "ロリコン", // Lolicon
  "ショタコン", // Shotacon
  "処女膜", // Hymen
  "精液", // Semen
  "愛液", // Sexual fluids
  "潮", // Squirt
  "オナニー", // Masturbation
  "オナホ", // Masturbation toy
  "バイブ", // Vibrator
  "ローター", // Rotor (sex toy)
  "ぶっかけ", // Bukkake

  // Internet slang insults
  "DQN", // Delinquent (internet slang)
  "ニート", // NEET
  "情弱", // Information-weak
  "池沼", // Pond-swamp (sounds like 知障)
  "きめえ", // Gross (slang)
  "消えろ", // Disappear/get lost
  "タヒね", // Die (censored form)
  "4ね", // Die (number substitution)
  "逝ってよし", // Go die (2ch slang)
  "糞スレ", // Shit thread
  "厨房", // Middle schooler (insult)
  "厨", // Abbreviation of 厨房
  "工作員", // Shill (internet)
  "在日", // Resident Korean (derogatory use)
  "チー牛", // Cheese beef (insult for nerds)
  "こどおじ", // Adult living with parents
  "こどおば", // Female adult living with parents
  "ハゲ", // Baldy
  "禿げ", // Bald (kanji)
  "インキャ", // Introvert (katakana insult)
  "ウェーイ", // Party people (derogatory)
  "ナマポ", // Welfare recipient (derogatory)
  "底辺", // Bottom tier (insult)
  "ゆとり", // Yutori generation (insult)
  "老害", // Old person nuisance
  "ま〜ん", // Derogatory for women
  "まーん", // Derogatory for women
  "メンヘラ", // Mentally ill (derogatory)
  "ヤリ目", // Only after sex

  // Compound insults
  "このくそやろう", // You shit bastard
  "てめえこの野郎", // You bastard (emphatic)
  "ぶっ殺す", // I'll kill you
  "ぶっ飛ばす", // I'll knock you out
  "ぶっ壊す", // I'll destroy you
  "殺すぞ", // I'll kill you
  "死にやがれ", // Die (vulgar imperative)
  "死にさらせ", // Die (Kansai vulgar)
  "くたばりやがれ", // Drop dead (vulgar)
  "消え失せろ", // Get the hell out
  "失せろ", // Get lost
  "うせろ", // Get lost (casual)
  "黙れ", // Shut up
  "だまれ", // Shut up (hiragana)
  "うるせえ", // Shut up (rough)
  "すっこんでろ", // Stay out of it / get lost
  "地獄に落ちろ", // Go to hell
  "このブス", // You ugly (to women)
  "このデブ", // You fatso
  "このカス", // You scum
  "このクズ", // You trash
  "このゴミ", // You garbage
  "このハゲ", // You baldy
  "この低能", // You lowlife
  "クソムシ", // Shit bug

  // Kansai dialect insults
  "アホくさ", // Stupid/ridiculous
  "しばくぞ", // I'll beat you up
  "いてまうぞ", // I'll mess you up
  "いわすぞ", // I'll hurt you
  "ドアホウ", // Big idiot (katakana)
  "アホンダラ", // Idiot (katakana)
  "ボケナス", // Idiot eggplant
  "すかたん", // Fool (Kansai)
  "たわけ", // Fool (Nagoya/Kansai)
  "たわけもの", // Foolish person
  "ボケ", // Idiot (katakana)
  "ドボケ", // Big idiot

  // Katakana loanwords (sexual/vulgar)
  "クリトリス", // Clitoris
  "ヴァギナ", // Vagina
  "フェラチオ", // Fellatio
  "クンニ", // Cunnilingus
  "クンニリングス", // Cunnilingus
  "アナルセックス", // Anal sex
  "ピストン", // Piston (sexual thrusting)
  "オーラルセックス", // Oral sex
  "マスターベーション", // Masturbation
  "ポルノ", // Porno
  "イラマチオ", // Irrumatio
  "スカトロ", // Scatology
  "SMプレイ", // SM play
  "ボンデージ", // Bondage
  "テスティクル", // Testicle
  "ニップル", // Nipple
  "エレクション", // Erection
  "エジャキュレーション", // Ejaculation

  // Yakuza/tough guy language
  "こら", // Hey! (aggressive)
  "なめんな", // Don't look down on me
  "なめるな", // Don't look down on me
  "なめんなよ", // Don't underestimate me
  "調子乗るな", // Don't get cocky
  "調子こいてんじゃねえぞ", // Don't get too full of yourself
  "おどれ", // You (threatening, Kansai)
  "われ", // You (threatening, Kansai)
  "なんじゃわれ", // What do you want (threatening)
  "いてこますぞ", // I'll beat the shit out of you
  "しょっぴくぞ", // I'll drag you in
  "かたにはめる", // To frame someone
  "しめる", // To punish/squeeze
  "しめてやる", // I'll punish you
  "やっちまえ", // Do him in
  "けじめつけろ", // Settle this (yakuza)
  "指詰めろ", // Cut off your finger
  "シャブ", // Meth (drugs)
  "ヤク", // Drugs
  "ヤク中", // Drug addict
  "覚醒剤", // Stimulant drugs

  // Additional body-part vulgarities
  "ケツの穴", // Asshole
  "肛門", // Anus
  "クソ穴", // Shit hole
  "乳首", // Nipple
  "巨乳", // Big breasts
  "貧乳", // Flat chest (insult)
  "ちっぱい", // Flat chest (slang insult)
  "デカチン", // Big penis
  "短小", // Small penis (insult)
  "早漏", // Premature ejaculation (insult)
  "遅漏", // Delayed ejaculation
  "インポ", // Impotent
  "ふぐり", // Testicles (archaic)

  // Additional クソ/糞 compounds
  "クソみたい", // Shit-like
  "クソジジイ", // Shit old man (katakana)
  "クソババア", // Shit old woman (katakana)
  "クソデブ", // Shit fatso
  "クソブス", // Shit ugly
  "クソハゲ", // Shit baldy
  "クソ真面目", // Shit-serious (annoyingly serious)
  "くそったれめ", // Damn shithead
  "糞ジジイ", // Shit old man (kanji+katakana)
  "糞ババア", // Shit old woman (kanji+katakana)
  "糞ビッチ", // Shit bitch (kanji+katakana)
  "糞デブ", // Shit fatso (kanji)
  "糞食らえ", // Eat shit (kanji)
  "糞味噌", // Shit and miso (kanji, worthless)
  "クソメス", // Shit female (animal term, vulgar)
  "クソオス", // Shit male (animal term, vulgar)
  "クソニート", // Shit NEET
  "クソ雑魚", // Shit weakling
  "くそでぶ", // Shit fatso (hiragana)
  "くそぶす", // Shit ugly (hiragana)
  "くそはげ", // Shit baldy (hiragana)

  // Additional バカ/馬鹿 compounds
  "大バカ者", // Great fool
  "バカヤロー", // Stupid bastard (elongated)
  "馬鹿にすんな", // Don't make a fool of me
  "馬鹿にすな", // Don't make a fool of me (casual)
  "馬鹿丸出し", // Fully exposed idiot
  "馬鹿げてる", // Absurd/stupid
  "馬鹿らしい", // Stupid/ridiculous
  "バカ面", // Stupid face (katakana)
  "バカ女", // Stupid woman (katakana)
  "バカ男", // Stupid man (katakana)
  "バカども", // Stupid people (plural)
  "バカの一つ覚え", // One-trick pony (idiot)
  "バカにしやがって", // How dare you mock me
  "馬鹿チン", // Stupid dick
  "馬鹿め", // You fool
  "バカめ", // You fool (katakana)

  // Additional discriminatory terms
  "朝鮮人", // Korean person (derogatory context)
  "ヨツ", // Four (burakumin slur)
  "四つ", // Four (burakumin slur, kanji)
  "エタ", // Historical outcaste slur (katakana)
  "ヒニン", // Non-person (katakana)
  "鬼畜米英", // Barbaric Americans/British
  "半島人", // Peninsula person (Korean slur)
  "ぺクチョン", // Korean caste slur
  "台湾人", // Taiwanese (derogatory context)
  "蛮族", // Barbarian tribe
  "劣等民族", // Inferior race
  "白豚", // White pig (anti-Western slur)
  "黒んぼ", // N-word equivalent (Japanese)
  "くろんぼ", // N-word equivalent (hiragana)
  "クロンボ", // N-word equivalent (katakana)
  "南蛮人", // Southern barbarian (historical slur)
  "鮮人", // Korean person (derogatory abbreviation)
  "不逞鮮人", // Lawless Korean (historical slur)
  "ヒトモドキ", // Sub-human / human-like creature
  "ナマモノ", // Raw creature (dehumanizing)

  // Additional sexual terms
  "足コキ", // Footjob
  "尻コキ", // Buttjob
  "緊縛", // Bondage/rope play
  "調教", // Training (BDSM)
  "奴隷", // Slave (sexual context)
  "ご奉仕", // Service (sexual context)
  "寝取り", // Cuckolding (male)
  "寝取られ", // Being cuckolded
  "露出", // Exposure/exhibitionism
  "露出狂", // Exhibitionist
  "覗き", // Peeping
  "覗き魔", // Peeping tom
  "夜這い", // Night crawling (sexual)
  "ソープランド", // Soapland (full name)
  "ヘルス", // Health (sex establishment type)
  "ファッションヘルス", // Fashion health (sex service)
  "ピンサロ", // Pink salon (sex establishment)
  "キャバクラ", // Cabaret club (hostess bar)
  "おさわり", // Touching (sexual context)
  "抜きあり", // With ejaculation (sex service)
  "生本番", // Raw/unprotected sex
  "生中出し", // Raw creampie
  "生挿入", // Raw insertion
  "二穴同時", // Double penetration simultaneous
  "三穴", // Triple penetration
  "アヘ顔", // Ahegao face
  "精飲", // Semen drinking
  "飲精", // Drinking semen
  "ゴックン", // Swallowing (sexual)
  "放尿プレイ", // Urination play
  "聖水", // Holy water (urine, sexual)
  "浣腸", // Enema (sexual)
  "浣腸プレイ", // Enema play
  "触手", // Tentacle (sexual)
  "母乳", // Breast milk (sexual context)
  "搾乳", // Milking (sexual)
  "乳搾り", // Breast milking
  "パイパン", // Shaved genitals
  "剃毛", // Shaving (sexual)
  "着エロ", // Clothed erotica
  "ハメ撮り", // POV sex filming
  "個撮", // Private photo shoot (sexual)
  "裏ビデオ", // Underground video (porn)
  "無修正", // Uncensored (porn)
  "モザイク無し", // No mosaic (uncensored porn)
  "エロ動画", // Erotic video
  "エロ画像", // Erotic image
  "エロ漫画", // Erotic manga
  "エロゲー", // Erotic game
  "エロ同人", // Erotic doujinshi
  "抜ける", // Can fap to this
  "抜いた", // Fapped to this
  "おかず", // Fap material (lit. side dish)
  "性奴隷", // Sex slave
  "肉奴隷", // Meat slave
  "便所", // Toilet (derogatory for person)
  "公衆便所", // Public toilet (extremely vulgar)
  "種付け", // Impregnation (vulgar)
  "孕ませ", // Getting pregnant (vulgar/fetish)
  "妊娠", // Pregnancy (fetish context)
  "母子相姦", // Mother-son incest
  "父子相姦", // Father-daughter incest
  "兄妹相姦", // Sibling incest

  // Additional internet slang
  "基地外", // Crazy (kanji substitution for きちがい)
  "キチガイ", // Crazy (katakana)
  "キチ", // Crazy (abbreviation)
  "糖質", // Schizophrenia (derogatory abbreviation)
  "アスペ", // Asperger's (derogatory)
  "発達", // Developmental disability (derogatory abbreviation)
  "発達障害", // Developmental disability (used as insult)
  "自閉", // Autism (used as insult)
  "知的障害", // Intellectual disability (used as insult)
  "ガチャ外れ", // Lost the gacha (bad genes)
  "親ガチャ失敗", // Failed parent gacha
  "ワナビー", // Wannabe (derogatory)
  "にわか", // Poser/fake fan
  "エアプ", // Air play (pretending to know)
  "ゴミクズ", // Trash scum
  "人間のクズ", // Human trash
  "社会のゴミ", // Society's garbage
  "生きてる価値なし", // Not worth living
  "生ゴミ", // Raw garbage (insult)
  "産廃", // Industrial waste (insult for person)
  "クソリプ", // Shit reply
  "クソレス", // Shit response
  "信者", // Believer/fanboy (derogatory)
  "アンチ", // Anti/hater
  "粘着", // Stalker/persistent harasser
  "荒らし", // Troll/griefer
  "炎上", // Flaming (internet)
  "特定", // Doxxing
  "晒し", // Exposing/doxxing
  "叩き", // Bashing
  "祭り", // Festival (internet mob attack)
  "ステマ", // Stealth marketing (derogatory)
  "乞食", // Beggar (internet: freeloader)
  "割れ厨", // Piracy enthusiast
  "ニコ厨", // Niconico addict (derogatory)
  "パヨク", // Derogatory for leftist
  "ネトウヨ", // Internet right-winger (derogatory)
  "ネトサヨ", // Internet left-winger (derogatory)
  "売国", // Selling out the country
  "反日", // Anti-Japan (used as slur)
  "非国民", // Non-citizen/traitor
  "国賊", // National traitor
  "負け犬", // Loser (lit. losing dog)
  "負け組", // Loser group
  "童貞くん", // Virgin boy (mocking)
  "処女厨", // Virgin-obsessed (derogatory)
  "高齢童貞", // Elderly virgin (insult)
  "魔法使い", // Wizard (30+ year old virgin)
  "喪女", // Unpopular woman
  "喪男", // Unpopular man
  "非リア", // Non-real-life (no social life)
  "リア充爆発しろ", // Normies should explode
  "ヲタ", // Otaku (derogatory variant)
  "キモヲタ", // Creepy otaku (variant)
  "腐女子", // Fujoshi (used derogatorily)
  "萌え豚", // Moe pig (insult for otaku)
  "ブヒる", // To oink (acting like moe pig)
  "ドルオタ", // Idol otaku (derogatory)
  "ジャニオタ", // Johnny's otaku (derogatory)
  "V豚", // VTuber pig (derogatory)
  "バチャ豚", // VTuber pig (variant)
  "スパチャ乞食", // Superchat beggar
  "弱者男性", // Weak male (internet insult)
  "弱男", // Weak man (abbreviation)
  "強者女性", // Strong female (sarcastic insult)
  "フェミ", // Feminist (derogatory)
  "ツイフェミ", // Twitter feminist (derogatory)
  "ミサンドリー", // Misandry
  "ミソジニー", // Misogyny
  "マンさん", // Ms. pussy (derogatory for women)
  "ちんさん", // Mr. dick (derogatory for men)
  "子供部屋おじさん", // Room uncle (man living with parents)
  "子供部屋おばさん", // Room aunt (woman living with parents)
  "無産様", // Childless woman (sarcastic)
  "種無し", // Seedless (infertile man, insult)
  "石女", // Barren woman (archaic insult)
  "穀潰し", // Grain crusher (useless person)
  "引きこもり", // Shut-in (used as insult)
  "ヒキニート", // Shut-in NEET
  "社畜", // Corporate slave (self-deprecating/insult)
  "奴隷労働", // Slave labor
  "ブラック企業", // Black company (exploitative employer)

  // 2ch/5ch culture terms
  "香具師", // Yakushi (2ch term for person)
  "藻前", // You (2ch corrupted form)
  "漏れ", // Me (2ch corrupted form)
  "逝く", // To die/come (2ch)
  "必死だな", // You're desperate (mockery)
  "顔真っ赤", // Face turning red (mocking)
  "効いてる効いてる", // It's working (mockery)
  "涙目", // Teary eyes (mockery)
  "発狂", // Going crazy (mockery)
  "ファビョる", // To rage (from Korean 화병)
  "火病", // Korean rage disease (slur)
  "半島に帰れ", // Go back to the peninsula (slur)
  "国に帰れ", // Go back to your country
  "嫌儲", // Anti-monetization (board culture)
  "まとめカス", // Summary site scum
  "対立煽り", // Conflict incitement
  "自演乙", // Self-reply, good job (sarcasm)
  "構ってちゃん", // Attention seeker
  "かまちょ", // Attention seeker (abbreviation)
  "地雷", // Landmine (problematic person)
  "地雷女", // Landmine woman
  "地雷男", // Landmine man
  "メンヘラ女", // Mentally ill woman (derogatory)
  "ヤンデレ", // Yandere (used derogatorily)
  "サイコパス", // Psychopath (insult)
  "ソシオパス", // Sociopath (insult)
  "ガイジムーブ", // Disabled person move (offensive)

  // Kansai/Osaka dialect additions
  "しばいたろか", // Shall I beat you up
  "いてもうたるぞ", // I'll mess you up
  "あほか", // Are you stupid
  "アホちゃう", // Aren't you stupid
  "アホかいな", // What an idiot
  "しょうもない", // Worthless/pathetic
  "しょうもな", // Worthless (casual)
  "けったいな", // Strange/weird (negative)
  "ごうつくばり", // Greedy person
  "がめつい", // Greedy/stingy
  "どたま", // Head (Kansai vulgar)
  "どたまかち割るぞ", // I'll crack your skull
  "いちびり", // Show-off (Kansai)
  "いちびるな", // Stop showing off
  "あんじょう", // Properly (threatening context)
  "ワレなにしとんじゃ", // What are you doing (threatening)
  "しばき回すぞ", // I'll beat you all around

  // Kyushu dialect insults
  "たいがいにせえ", // Enough already (threatening)
  "きさん", // You (Kyushu hostile)
  "ばってん", // But (used in threatening context)
  "なんばしよっと", // What are you doing (aggressive)
  "しゃーしい", // Annoying (Kyushu)
  "のさばるな", // Don't be arrogant
  "ふうけもん", // Fool (Kyushu dialect)
  "ぬすっと", // Thief (dialectal)
  "がまだす", // To endure (threatening context)
  "ちゃげなか", // Pathetic (Kyushu)

  // Hokkaido/Tohoku dialect insults
  "たげ", // Very (Tohoku intensifier, with insults)
  "はんかくさい", // Stupid/half-baked (Hokkaido)
  "ごんぼほる", // To throw a tantrum (Tohoku)
  "じょっぱり", // Stubborn person (Tohoku, negative)
  "べこ", // Cow (used as insult)

  // Additional yakuza/tough language
  "かます", // To hit/attack
  "かましたろか", // Shall I hit you
  "どつく", // To punch
  "どついたろか", // Shall I punch you
  "ぶちのめす", // To beat the crap out of
  "ぶちのめすぞ", // I'll beat the crap out of you
  "ぶん殴る", // To punch hard
  "ぶん殴るぞ", // I'll punch you
  "張り倒す", // To slap down
  "張り倒すぞ", // I'll slap you down
  "叩きのめす", // To beat senseless
  "潰す", // To crush
  "潰してやる", // I'll crush you
  "沈めるぞ", // I'll sink you (kill)
  "沈めてやる", // I'll sink you
  "消すぞ", // I'll erase you (kill)
  "始末する", // To dispose of (kill)
  "落とし前", // Settling accounts (yakuza)
  "落とし前つけろ", // Settle your debts
  "カタギ", // Civilian (non-yakuza)
  "堅気", // Civilian (kanji)
  "極道", // Yakuza way
  "舎弟", // Younger brother (yakuza subordinate)
  "兄貴", // Elder brother (yakuza senior)
  "親分", // Boss (yakuza)
  "鉄砲玉", // Bullet (hitman)
  "チャカ", // Gun (slang)
  "ドス", // Knife (yakuza slang)
  "ムショ", // Prison
  "前科もん", // Ex-con
  "ヤクザ", // Yakuza
  "ヤクザもん", // Yakuza person
  "チンピラ", // Thug/punk
  "ゴロツキ", // Hoodlum
  "ならず者", // Outlaw/rogue

  // Additional katakana loanwords (vulgar)
  "スリーサム", // Threesome
  "フォーサム", // Foursome
  "グローリーホール", // Glory hole
  "ストリッパー", // Stripper
  "ストリップ", // Strip
  "エスコート", // Escort
  "コールガール", // Call girl
  "ソドミー", // Sodomy
  "ニンフォマニア", // Nymphomania
  "インポテンツ", // Impotence
  "ヘンタイ", // Hentai (katakana)
  "ペドフィル", // Pedophile
  "レズビアン", // Lesbian (can be derogatory)
  "ホモ", // Homo (derogatory)
  "ゲイ", // Gay (can be derogatory)
  "オカマ", // Effeminate man / drag (derogatory)
  "おかま", // Effeminate man (hiragana)
  "ニューハーフ", // Newhalf (trans, can be derogatory)
  "おなべ", // Masculine woman (derogatory)
  "レズ", // Lesbian (abbreviation, derogatory)
  "ホモ野郎", // Homo bastard
  "オカマ野郎", // Effeminate bastard
  "バイセクシャル", // Bisexual (derogatory context)

  // Threat and violence expressions
  "殺してやる", // I'll kill you
  "殺すからな", // I'll kill you (warning)
  "首吊って死ね", // Hang yourself
  "飛び降りろ", // Jump off (suicide)
  "手首切れ", // Cut your wrists
  "練炭焚け", // Light charcoal (suicide method)
  "樹海行け", // Go to Aokigahara (suicide forest)
  "生きる価値ない", // Not worth living
  "存在価値なし", // No value in existing
  "お前なんか死ね", // Someone like you should die
  "産まれてくんな", // Shouldn't have been born
  "目障り", // Eyesore
  "耳障り", // Ear-sore (annoying)
  "虫酸が走る", // Makes my skin crawl
  "反吐が出る", // Makes me vomit
  "胸糞悪い", // Chest-shit-bad (disgusting)
  "腹立つ", // Infuriating

  // Derogatory terms for social groups
  "ニート野郎", // NEET bastard
  "引きこもり野郎", // Shut-in bastard
  "生活保護", // Welfare (used as insult)
  "ナマポ野郎", // Welfare bastard
  "フリーター", // Part-timer (used derogatorily)
  "派遣", // Temp worker (used derogatorily)
  "底辺職", // Bottom-tier job (insult)
  "Fラン", // F-rank (low-tier university)
  "高卒", // High school grad (used as insult)
  "中卒", // Middle school grad (insult)
  "低学歴", // Low education
  "三流", // Third-rate
  "田舎者", // Country bumpkin
  "かっぺ", // Country bumpkin (slang)
  "芋", // Potato (unsophisticated person)
  "ダサい", // Uncool/lame
  "ダサ", // Uncool (abbreviation)
  "貧乏人", // Poor person (insult)
  "乞食野郎", // Beggar bastard
  "ホームレス", // Homeless (used as insult)
  "浮浪者", // Vagrant (derogatory)
  "不審者", // Suspicious person
  "変質者", // Pervert/deviant
  "犯罪者", // Criminal (used as slur)
  "前科者", // Person with criminal record
  "性犯罪者", // Sex offender
  "ストーカー", // Stalker
  "クレーマー", // Complainer (derogatory)
  "モンペ", // Monster parent
  "毒親", // Toxic parent

  // Additional compound insults
  "このくそったれ", // You shithead
  "このくそがき", // You shit brat
  "この糞野郎", // You shit bastard
  "死ねよ", // Just die
  "死ねば", // If you'd just die
  "死ねカス", // Die, scum
  "死ねクズ", // Die, trash
  "死ねゴミ", // Die, garbage
  "くそ死ね", // Shit-die
  "きもい死ね", // Disgusting, die
  "うざい死ね", // Annoying, die
  "お前が死ね", // You die
  "ぶっころ", // Gonna kill (abbreviation)
  "ぶっとばすぞ", // I'll knock you out
  "ぶちころすぞ", // I'll beat you to death
  "タコ", // Octopus (insult for bald/stupid)
  "このタコ", // You octopus (insult)
  "すっとこどっこい", // Bumbling fool
  "おたんこなす", // Clumsy fool
  "へなちょこ", // Wimp/weakling
  "へっぽこ", // Incompetent
  "ぽんこつ", // Broken/useless
  "うんこ", // Poop
  "うんこたれ", // Poop-drip
  "うんこ野郎", // Poop bastard
  "クソうんこ", // Shit poop
  "糞尿", // Shit and piss
  "ションベン", // Piss
  "ションベンたれ", // Piss-drip (weakling)
  "小僧", // Brat (derogatory)
  "ガキ", // Brat
  "このガキ", // You brat
  "餓鬼", // Hungry ghost / brat (kanji)
  "ゲス", // Lowlife/scum
  "ゲス野郎", // Scum bastard
  "下衆", // Lowlife (kanji)
  "下種", // Lowlife (variant kanji)
  "外様", // Outsider (derogatory)
  "人でなし", // Inhuman person
  "鬼畜", // Demonic/brutal
  "畜生め", // Damn beast
  "けだもの", // Beast (for a person)
  "人非人", // Inhuman being
  "恥知らず", // Shameless person
  "面汚し", // Disgrace
  "穀潰", // Grain waster (useless person)
  "給料泥棒", // Salary thief
  "税金泥棒", // Tax thief
  "能なし", // Incompetent
  "役立たず", // Useless person
  "甲斐性なし", // Worthless (no ambition)
  "意気地なし", // Coward
  "根性なし", // No guts
  "腰抜け", // Coward (lit. waist-fallen)
  "弱虫", // Weakling/coward
  "泣き虫", // Crybaby
  "いくじなし", // Coward/spineless
  "玉なし", // No balls (coward)

  // Romanized Japanese profanity (romaji input)
  "kuso", // Shit/damn
  "baka", // Idiot/fool
  "shine", // Die
  "shi ne", // Die (spaced)
  "chikusho", // Damn it
  "chikushou", // Damn it (variant)
  "manko", // Pussy (vulgar)
  "chinko", // Penis (vulgar)
  "chinpo", // Penis (vulgar)
  "chinpoko", // Penis (childish variant)
  "chinchin", // Penis (childish)
  "oppai", // Breasts
  "kintama", // Testicles
  "yariman", // Slut
  "yarichin", // Man-whore
  "hentai", // Pervert
  "chikan", // Groper/molester
  "kisama", // You (hostile)
  "temee", // You (hostile)
  "temae", // You (hostile, variant)
  "konoyaro", // You bastard
  "bakayaro", // Stupid bastard
  "bakayarou", // Stupid bastard (variant)
  "kusottare", // Shithead
  "kutabare", // Drop dead
  "fuzakenna", // Don't mess around
  "fuzakeruna", // Don't mess around (variant)
  "zakenna", // Don't fuck with me
  "aho", // Idiot (Kansai)
  "ahondara", // Idiot (Kansai)
  "doaho", // Big idiot (Kansai)
  "kichigai", // Crazy/insane
  "ketsu", // Ass
  "ketsunoana", // Asshole
  "shiri", // Butt
  "unko", // Poop
  "kuso gaki", // Shit brat
  "kusobaba", // Shit old woman
  "kusojijii", // Shit old man
  "kusoyaro", // Shit bastard
  "debu", // Fatso
  "busu", // Ugly (woman)
  "kasu", // Scum
  "kuzu", // Trash
  "gomi", // Garbage
  "omanko", // Pussy (polite prefix + vulgar)
  "omeko", // Female genitalia (Kansai)
  "bobo", // Sexual intercourse (dialectal)
  "seishi", // Sperm
  "shasei", // Ejaculation
  "jii", // Masturbation
  "onanii", // Masturbation
  "fera", // Fellatio
  "ferachio", // Fellatio (full)
  "inran", // Lewd/promiscuous
  "nakadashi", // Creampie
  "paizuri", // Titjob
  "baita", // Whore
  "ero", // Erotic/perverted
  "chikubi", // Nipple
  "shibaku", // I'll beat you (Kansai)
  "shibakuzo", // I'll beat you up
  "korosu", // I'll kill
  "korosuzo", // I'll kill you
  "buchikorosu", // I'll beat you to death
  "bukkorosu", // I'll kill you (slang)
  "buttobasu", // I'll knock you out
  "nameruna", // Don't look down on me
  "namenna", // Don't underestimate me
  "namennayo", // Don't underestimate me
  "usero", // Get lost
  "kieru", // Disappear
  "kiero", // Disappear (imperative)
  "damare", // Shut up
  "urusee", // Shut up (rough)
  "sukebe", // Pervert
  "ecchi", // Lewd/naughty
  "etchi", // Lewd/naughty (variant)
  "yareru", // Can have sex
  "yaru", // To do it (sexual)
  "hameru", // To insert (sexual)
  "okasu", // To violate/rape
  "goukan", // Rape
  "rinkan", // Gang rape
  "chuudashi", // Creampie
  "gansha", // Facial (sexual)
  "kunni", // Cunnilingus
  "tekoki", // Handjob
  "teman", // Manual stimulation
  "shiofuki", // Squirting
  "aigan", // Outdoor sex
  "rankou", // Orgy
  "inkou", // Obscene acts
  "waisetsu", // Obscenity
  "baishun", // Prostitution
  "baishunfu", // Prostitute
  "soapland", // Soapland
  "deriherru", // Delivery health (escort)
  "deriheru", // Delivery health (variant)
  "pinsaro", // Pink salon
  "fuzoku", // Sex industry
  "honban", // Full sex service
  "namahon", // Raw sex
  "rorikkon", // Lolicon
  "shotakon", // Shotacon
  "pedofilia", // Pedophilia
  "roshutsukyo", // Exhibitionist
  "nozoki", // Peeping
  "tousatsu", // Voyeurism
  "kinbaku", // Bondage
  "choukyou", // Training (BDSM)
  "dorei", // Slave
  "seidorei", // Sex slave
  "nikudorei", // Meat slave
  "nikubenki", // Meat toilet
  "bukkake", // Bukkake
  "gokkun", // Swallowing (sexual)
  "irrumatio", // Irrumatio
  "iramachio", // Irrumatio (variant)
  "sukatoro", // Scatology
  "hamedori", // POV sex filming
  "mushūsei", // Uncensored
  "mushūseii", // Uncensored (variant)
  "eroge", // Erotic game
  "erodouga", // Erotic video
  "eromanga", // Erotic manga
  "okazu", // Fap material
  "nuku", // To fap
  "nuita", // Fapped
  "shikoru", // To masturbate (slang)
  "ahegao", // Ahegao face
  "paipan", // Shaved genitals
  "sounyuu", // Insertion (sexual)
  "boukei", // Phimosis (insult)
  "doutei", // Virgin (male, insult)
  "inkya", // Introvert (insult)
  "youkya", // Extrovert (used sarcastically)
  "kimoi", // Disgusting
  "kimoe", // Disgusting (variant)
  "kishoi", // Gross
  "uzai", // Annoying
  "uzee", // Annoying (rougher)
  "gaiji", // Disabled person (offensive slang)
  "teinō", // Low-ability (insult)
  "teinou", // Low-ability (variant)
  "chinpa", // Short/small penis (insult)
  "tanshou", // Small penis
  "sourou", // Premature ejaculation
  "inpo", // Impotent
  "hage", // Baldy
  "chonmage", // Topknot (used mockingly)
  "niito", // NEET
  "hikikomori", // Shut-in
  "shachiku", // Corporate slave
  "furi-ta-", // Part-timer (derogatory)
  "makeinu", // Loser
  "makegumi", // Loser group
  "binbounin", // Poor person (insult)
  "kojiki", // Beggar
  "furōsha", // Vagrant
  "inaka mono", // Country bumpkin
  "inakappe", // Country bumpkin (slang)
  "kappe", // Country bumpkin (abbreviation)
  "dasai", // Uncool/lame
  "ponkotsu", // Broken/useless
  "heppoko", // Incompetent
  "hetakuso", // Terrible at something
  "nonashi", // Incompetent
  "yakutatazu", // Useless person
  "kusomushi", // Shit bug
  "gomikuzu", // Trash scum
  "ningennokuzu", // Human trash
  "ikiterukachinaishi", // Not worth living
  "umaretekunna", // Shouldn't have been born
  "shiniyagare", // Die (vulgar imperative)
  "shinisarase", // Die (Kansai vulgar)
  "kutabariyagare", // Drop dead (vulgar)
  "kieuserou", // Get the hell out
  "jigoku ni ochiro", // Go to hell
  "koroshiteyaru", // I'll kill you
  "buttobasu zo", // I'll knock you out
  "buchinomesu", // To beat the crap out of
  "bunaguru", // To punch hard
  "dotsukou", // Shall I punch you
  "shizume", // I'll sink you (kill)
  "hajimesuru", // To dispose of (kill)
  "yakuza", // Yakuza
  "chinpira", // Thug/punk
  "gorotsuki", // Hoodlum
  "shabu", // Meth
  "yaku", // Drugs
  "yakuchuu", // Drug addict
  "manuke", // Fool
  "tonma", // Dunce
  "noroma", // Slowpoke
  "rokudenashi", // Good-for-nothing
  "gedo", // Brute/fiend
  "haijin", // Human waste
  "ochikobore", // Dropout/failure
  "kimoota", // Creepy otaku
  "netouyo", // Internet right-winger (derogatory)
  "payoku", // Derogatory for leftist
  "baikoku", // Selling out the country
  "hannichi", // Anti-Japan (used as slur)
  "hikokumin", // Non-citizen/traitor
  "kokuzoku", // National traitor
  "chon", // Slur for Koreans
  "chankoro", // Slur for Chinese
  "shina", // Derogatory for China
  "shinajin", // Derogatory for Chinese
  "gaijin", // Foreigner (can be derogatory)
  "ketōjin", // Slur for foreigners
  "kuronbo", // N-word equivalent
  "nigā", // N-word (katakana romanization)
  "dojin", // Primitive person (slur)
  "sangokujin", // Derogatory for foreigners
  "hitomodoki", // Sub-human
  "eta", // Historical outcaste slur
  "hinin", // Non-person (historical)
  "burakumin", // Burakumin (discriminatory)
  "yotsu", // Four (burakumin slur)

  // Mixed Japanese-English profanity (katakana loanwords typed in romaji)
  "fakku", // Fuck
  "fakkin", // Fucking
  "shitto", // Shit
  "bitchi", // Bitch
  "asuhōru", // Asshole
  "kokku", // Cock
  "dammu", // Damn
  "heru", // Hell
  "kocksacker", // Cocksucker (typed in roman)
  "fakkyu", // Fuck you
  "buroshitto", // Bullshit

  // Additional romaji compound insults
  "kono kuso yaro", // You shit bastard
  "kono baka", // You idiot
  "kono busu", // You ugly
  "kono debu", // You fatso
  "kono kasu", // You scum
  "kono kuzu", // You trash
  "kono gomi", // You garbage
  "kono hage", // You baldy
  "shinde kure", // Please die
  "ikiterukachinashi", // Not worth living
  "sonzaikachinashi", // No value in existing
  "mejiwari", // Eyesore
  "hedogaderu", // Makes me vomit
  "mushizugahashiru", // Makes my skin crawl

  // Additional 2ch/5ch meme insults
  "ワロタ", // Laughed (mockery)
  "草生える", // Growing grass (LOL, mockery)
  "大草原", // Great grassland (massive LOL)
  "wwwww", // LOL (mockery in certain contexts)
  "プギャー", // Mockery sound
  "m9(^Д^)", // Pointing and laughing
  "ゲラゲラ", // Laughing mockery sound
  "鬱だ死のう", // I'm depressed, let's die (dark humor meme)
  "通報しますた", // Reported (2ch meme)
  "お前のかーちゃんでべそ", // Your mom has an outie (playground insult)
  "池沼ムーブ", // Pond-swamp move (disabled person move)
  "ンゴ", // Suffix used mockingly
  "クソワロ", // Shit-laugh (mockery)
  "草不可避", // Grass unavoidable (can't help but laugh, mocking)
  "お前もう死んでいる", // You're already dead (threat/meme)
  "雑魚", // Small fry/weakling
  "ザコ", // Small fry (katakana)
  "この雑魚", // You weakling
  "雑魚キャラ", // Weakling character
  "養分", // Nutrients (sucker being exploited)
  "カモ", // Duck (sucker/easy target)
  "カモにする", // To make someone a sucker
  "オワコン", // Finished content (washed up)
  "終わってる", // It's over (for someone)
  "クソゲー", // Shit game
  "糞運営", // Shit management
  "エアプ勢", // Fake experience group
  "サンドバッグ", // Sandbag (punching bag, insult)
  "カカシ", // Scarecrow (useless person)
  "木偶の坊", // Wooden puppet (useless person)
  "穀潰し野郎", // Grain waster bastard
  "税金の無駄", // Waste of tax money
  "酸素の無駄", // Waste of oxygen
  "電気の無駄", // Waste of electricity

  // Additional Okinawan dialect profanity
  "フリムン", // Fool (Okinawan)
  "ゲレン", // Ugly/dirty (Okinawan)
  "ヤナワラバー", // Bad child (Okinawan)
  "ヤナカーギー", // Ugly face (Okinawan)
  "インチキ", // Cheater/fraud
  "ワジワジ", // Angry (Okinawan)
  "チュラカーギー", // Beautiful face (used sarcastically)
  "シニサリンドー", // Go to hell (Okinawan)
  "クルサリンドー", // I'll kill you (Okinawan)
  "ヒヤミカチ", // Suddenly/shockingly (exclamation)

  // Additional Tohoku dialect profanity
  "たまげた", // Shocked (can be insult)
  "しょしい", // Embarrassing/pathetic (Tohoku)
  "あずましくない", // Uncomfortable/unpleasant (Hokkaido)
  "なまら", // Very (Hokkaido intensifier)
  "なまらむかつく", // Very annoying (Hokkaido)
  "こわい", // Tired/scary (Tohoku double meaning)
  "ねっぱる", // Sticky/annoying person (Tohoku)
  "がおる", // To be exhausted/defeated (Tohoku)

  // Additional Nagoya/Chubu dialect profanity
  "たわけめ", // You fool (Nagoya)
  "でれすけ", // Lazy/sloppy person (Nagoya)
  "ちんちこちん", // Extremely hot (Nagoya, sounds vulgar)
  "けったくそ悪い", // Annoying/disgusting (Nagoya)
  "どべ", // Last place/worst (Chubu)

  // Additional compound sexual terms
  "セフレ", // Sex friend
  "ハメ友", // Sex friend (vulgar)
  "ワンナイト", // One-night stand
  "マグロ", // Tuna (passive sex partner)
  "即ハメ", // Immediate sex
  "即マン", // Immediate sex (vulgar)
  "即尺", // Immediate oral
  "ナンパ", // Pickup (sexual connotation)
  "逆ナン", // Reverse pickup (woman picks up man)
  "ヤリ部屋", // Sex room
  "ラブホ", // Love hotel
  "連れ込み", // Taking someone to hotel
  "お持ち帰り", // Takeaway (taking someone home for sex)
  "据え膳", // Easy sexual opportunity
  "二股", // Two-timing
  "浮気", // Cheating
  "不倫相手", // Affair partner
  "愛人", // Mistress/lover
  "セクハラ", // Sexual harassment
  "パワハラ", // Power harassment
  "痴漢プレイ", // Groping play
  "レイプ目", // Rape eyes (glazed expression)
  "和姦", // Consensual sex (used in disturbing contexts)
  "陵辱", // Humiliation/violation
  "凌辱プレイ", // Humiliation play
  "奴隷プレイ", // Slave play
  "首絞め", // Choking (sexual)
  "窒息プレイ", // Asphyxiation play
  "蝋燭プレイ", // Candle play
  "目隠しプレイ", // Blindfold play
  "拘束プレイ", // Restraint play
  "アナルプレイ", // Anal play
  "前立腺", // Prostate (sexual context)
  "前立腺マッサージ", // Prostate massage
  "ペギング", // Pegging
  "フィストファック", // Fist fuck
  "ダブルペネトレーション", // Double penetration
  "中イキ", // Internal orgasm
  "外イキ", // External orgasm
  "連続イキ", // Continuous orgasm
  "潮噴き", // Squirting (variant)
  "マン汁", // Vaginal fluid (vulgar)
  "ザー汁", // Semen (slang)
  "精飲プレイ", // Semen drinking play
  "聖水プレイ", // Golden shower play
  "スカプレイ", // Scatplay
  "食糞", // Coprophagia
  "飲尿", // Urine drinking
  "異物挿入", // Foreign object insertion

  // Additional internet generation insults
  "チー牛顔", // Cheese beef face (nerd face)
  "キョロ充", // Looking-around normie (anxious social person)
  "量産型", // Mass-produced type (generic/boring)
  "イキリ", // Acting tough
  "イキリオタク", // Tough-acting otaku
  "イキリト", // Acting like Kirito (SAO insult)
  "なろう系", // Light novel type (generic/boring)
  "承認欲求モンスター", // Approval-seeking monster
  "マウント", // Mounting (asserting dominance)
  "マウント取り", // Taking mount (one-upping)
  "煽りカス", // Provocation scum
  "クソザコ", // Shit weakling
  "クソザコナメクジ", // Shit weak slug
  "害悪", // Harmful evil
  "戦犯", // War criminal (blame for failure)
  "A級戦犯", // A-class war criminal (most to blame)
  "脳死", // Brain dead (acting without thinking)
  "思考停止", // Stopped thinking (insult)
  "コミュ障", // Communication disorder (insult)
  "陰キャラ", // Dark character (introvert insult)
  "陰の者", // Person of shadow (introvert insult)
  "キモ男", // Gross man
  "キモ女", // Gross woman
  "おっさん", // Old man (derogatory)
  "おばさん", // Old woman (derogatory)
  "ジジイ", // Old man (vulgar)
  "ババア", // Old woman (vulgar)
  "くたばれジジイ", // Drop dead old man
  "くたばれババア", // Drop dead old woman

  // === EXPANDED ENTRIES ===

  // Additional native Japanese insults - comprehensive
  "あんぽんたん", // Idiot (archaic/playful)
  "うすのろ", // Slow-witted
  "うつけ", // Fool (archaic)
  "うつけもの", // Foolish person (archaic)
  "おおばかもの", // Great fool
  "おおまぬけ", // Great fool
  "おろかもの", // Foolish person
  "おたんちん", // Fool/simpleton
  "くされ外道", // Rotten fiend
  "くされ野郎", // Rotten bastard
  "くされ女", // Rotten woman
  "くされ", // Rotten
  "くそくらえ", // Eat shit (hiragana)
  "くそ以下", // Below shit
  "くそ未満", // Less than shit
  "けちんぼ", // Stingy person
  "こんちくしょう", // Damn it (emphatic)
  "このすっとこどっこい", // You bumbling fool
  "このとんちき", // You dunce
  "ごくつぶし", // Grain waster (useless person)
  "ごろつき", // Hoodlum (hiragana)
  "さっさと失せろ", // Hurry up and get lost
  "さっさと消えろ", // Hurry up and disappear
  "さっさと死ね", // Hurry up and die
  "ざまあみろ", // Serves you right
  "ざまあ", // Serves you right (abbreviation)
  "すっとこ", // Bumbling
  "ずうずうしい", // Shameless/brazen
  "たかり", // Moocher/beggar
  "たかり屋", // Professional moocher
  "ちっこい", // Tiny (insult for stature)
  "でくのぼう", // Wooden puppet (useless, hiragana)
  "とんちき", // Dunce/blockhead
  "なんだこの野郎", // What the hell, you bastard
  "のたれ死ね", // Die in a ditch
  "のたれ死にしろ", // Die in a ditch (polite form of insult)
  "はいはいワロスワロス", // Yeah yeah LOL (dismissive mockery)
  "ばかたれ", // Stupid drip (hiragana)
  "ばかめ", // You fool (hiragana)
  "ひきょうもの", // Coward (hiragana)
  "へたくそ", // Terrible at something
  "ほざくな", // Don't spout nonsense
  "もろだし", // Full exposure
  "やりちん", // Man-whore (hiragana)
  "よわむし", // Weakling/coward (hiragana)

  // Additional kanji insults
  "愚か者", // Fool
  "愚者", // Fool (formal)
  "愚鈍", // Stupid and dull
  "愚図", // Dullard
  "愚劣", // Stupid and inferior
  "愚民", // Stupid people
  "悪党", // Villain
  "悪人", // Bad person
  "悪魔", // Devil
  "悪鬼", // Evil spirit
  "暗愚", // Dark stupidity
  "陰湿", // Sneaky/nasty
  "陰険", // Treacherous
  "汚物", // Filth
  "下等", // Low-class
  "下劣", // Base/vulgar
  "下品", // Vulgar/low-class
  "害虫", // Pest
  "間抜け", // Idiot (lit. missed timing)
  "狂人", // Madman
  "狂犬", // Mad dog
  "愚弄", // Mocking/ridiculing
  "嫌われ者", // Hated person
  "小者", // Small person (insignificant)
  "卑怯者", // Coward (kanji)
  "卑劣", // Base/despicable
  "品性下劣", // Low character
  "不細工", // Ugly/clumsy
  "膿", // Pus (insult)
  "阿呆", // Idiot (Kansai kanji)
  "大阿呆", // Great idiot
  "能天気", // Airheaded
  "脳足りん", // Brain deficient
  "脳みそ足りん", // Brain matter deficient
  "脳無し", // Brainless
  "脳味噌腐ってる", // Brain rotting
  "腐れ外道", // Rotten fiend (kanji)
  "腐れ野郎", // Rotten bastard (kanji)
  "朽ち果てろ", // Rot away
  "恥さらし", // Public shame
  "恥曝し", // Public disgrace
  "面汚しめ", // You disgrace
  "面の皮が厚い", // Thick-skinned (shameless)
  "厚顔無恥", // Thick-faced and shameless
  "破廉恥", // Shameless/indecent
  "恥知らずめ", // You shameless one
  "厚かましい", // Brazen/impudent

  // 死ね (die) variations - comprehensive
  "死ね死ね", // Die die
  "死ねよクソ", // Die, shit
  "死ねクソガキ", // Die, shit brat
  "死ねよマジで", // Seriously die
  "死ねよお前", // You die
  "さっさと死ねよ", // Hurry up and die
  "早く死ね", // Die quickly
  "即刻死ね", // Die immediately
  "今すぐ死ね", // Die right now
  "一刻も早く死ね", // Die as soon as possible
  "苦しんで死ね", // Suffer and die
  "もがいて死ね", // Writhe and die
  "のたうち回って死ね", // Thrash around and die
  "惨めに死ね", // Die miserably
  "孤独に死ね", // Die alone
  "誰にも知られず死ね", // Die without anyone knowing
  "野垂れ死ね", // Die in a ditch
  "犬死にしろ", // Die like a dog
  "無駄死にしろ", // Die uselessly

  // くそ/糞 additional compounds
  "クソ食え", // Eat shit (katakana)
  "クソ以下", // Below shit
  "クソ未満", // Less than shit
  "クソみてえ", // Shit-like (rough)
  "クソしょうもない", // Shit worthless
  "クソつまらない", // Shit boring
  "クソきもい", // Shit disgusting
  "クソうざい", // Shit annoying
  "クソダサい", // Shit uncool
  "クソ弱い", // Shit weak
  "クソ下手", // Shit bad at
  "クソカス", // Shit scum
  "クソクズ", // Shit trash
  "クソゴミ", // Shit garbage
  "クソ人間", // Shit human
  "クソ親父", // Shit old man (parent)
  "クソ母親", // Shit mother
  "クソ教師", // Shit teacher
  "クソ上司", // Shit boss
  "クソ会社", // Shit company
  "クソ政治家", // Shit politician
  "くそまずい", // Shit bad tasting
  "くそきたない", // Shit dirty
  "くそやかましい", // Shit noisy
  "くそうるさい", // Shit loud
  "くそつまんねえ", // Shit boring (rough)
  "くそめんどい", // Shit troublesome
  "くそめんどくさい", // Shit troublesome (full)
  "くそだりい", // Shit lazy/tiresome
  "くそねみい", // Shit sleepy

  // バカ/アホ extended compounds
  "バカの極み", // Height of stupidity
  "バカの壁", // Wall of stupidity
  "バカ丸出し", // Full-on stupid
  "バカすぎる", // Too stupid
  "バカすぎ", // Too stupid (casual)
  "バカでしょ", // Are you stupid
  "バカなの", // Are you stupid (question)
  "バカじゃないの", // Aren't you stupid
  "バカじゃねえの", // Aren't you stupid (rough)
  "バカか", // Are you stupid (direct)
  "バカかお前", // Are you stupid, you
  "バカ言うな", // Don't say stupid things
  "バカこくな", // Don't say stupid things (rough)
  "お前バカだろ", // You're stupid right
  "おまえバカか", // Are you stupid (rough)
  "アホすぎ", // Too stupid (Kansai)
  "アホすぎる", // Too stupid (Kansai)
  "アホか", // Are you stupid (Kansai)
  "アホやろ", // Stupid bastard (Kansai)
  "アホらしい", // Ridiculous (Kansai)
  "アホくさい", // Stupid-smelling (Kansai)
  "アホの極み", // Height of stupidity (Kansai)
  "アホ面", // Stupid face (Kansai)
  "アホヅラ", // Stupid face (Kansai variant)
  "アホ丸出し", // Full-on stupid (Kansai)
  "アホまるだし", // Full-on stupid (Kansai hiragana)
  "ドアホが", // Big idiot (Kansai aggressive)
  "ドアホめ", // You big idiot (Kansai)
  "アホンダラが", // Idiot (Kansai aggressive)
  "このアホンダラ", // You idiot (Kansai)
  "このドアホ", // You big idiot

  // Kansai dialect - expanded
  "しばくぞこら", // I'll beat you, hey
  "しばいたるわ", // I'll beat you (Kansai polite threat)
  "しばき倒す", // Beat to the ground (Kansai)
  "いてまうど", // I'll mess you up (Kansai variant)
  "いてこましたろか", // Shall I beat the shit out of you (Kansai)
  "いわしたるぞ", // I'll hurt you (Kansai variant)
  "いわすぞこら", // I'll hurt you, hey (Kansai)
  "われなにさらしてんねん", // What the hell are you doing (Kansai)
  "われなんやねん", // What are you (Kansai hostile)
  "おどれなんじゃ", // What are you (Kansai hostile)
  "おどれこら", // Hey you (Kansai threatening)
  "おどれなめとったらいてまうぞ", // If you look down on me I'll beat you (Kansai)
  "どたまかち割ったるぞ", // I'll crack your skull (Kansai full)
  "しょうもないやつ", // Worthless person (Kansai)
  "しょうもないやっちゃ", // Worthless person (Kansai variant)
  "あほんだらめ", // You idiot (Kansai)
  "ぼけかす", // Idiot scum (Kansai)
  "ぼけなすめ", // You idiot eggplant (Kansai)
  "すかたんめ", // You fool (Kansai)
  "けったいなやつ", // Weird person (Kansai)
  "いけず", // Mean person (Kansai)
  "いけず言うな", // Don't be mean (Kansai)
  "なんぼのもんじゃい", // Who do you think you are (Kansai)
  "えらそうにすんな", // Don't act arrogant (Kansai)
  "えらそうなこと言うな", // Don't say arrogant things (Kansai)
  "調子のんな", // Don't get cocky (Kansai)
  "いちびんな", // Don't show off (Kansai)
  "つべこべ言うな", // Don't talk back (Kansai)
  "ごちゃごちゃ言うな", // Don't ramble (Kansai)
  "がたがた言うな", // Don't complain (Kansai)

  // Kyushu dialect - expanded
  "ばかたれが", // Stupid drip (Kyushu aggressive)
  "きさんなんばしよるとか", // What the hell are you doing (Kyushu)
  "しゃーしか", // Annoying (Kyushu variant)
  "のさばりくさって", // Being arrogant (Kyushu)
  "ふうけもんめ", // You fool (Kyushu)
  "ぬすっとめ", // You thief (Kyushu)
  "わるさーしくさって", // Being a troublemaker (Kyushu)
  "ちゃげんなか", // Pathetic (Kyushu variant)
  "がまださんか", // Can't endure (Kyushu threat)
  "きさんしゃーしいぞ", // You're annoying (Kyushu)
  "こぎゃんこつすっと", // If you do such things (Kyushu threatening)
  "あばかん", // Can't handle (Kyushu, incompetent)
  "でたらめ", // Nonsense (general but used in Kyushu)
  "よかよか", // Fine fine (sarcastic dismissal, Kyushu)
  "しかとすんな", // Don't ignore me (Kyushu)
  "じごでんな", // Hellish (Kyushu)
  "ばかくさ", // Stupid-smelling (Kyushu)
  "ばかこくな", // Don't be stupid (Kyushu)

  // Tohoku dialect - expanded
  "たげむかつく", // Very annoying (Tohoku)
  "たげきもい", // Very disgusting (Tohoku)
  "たげうざい", // Very annoying (Tohoku)
  "しょしくてしゃあない", // Embarrassingly pathetic (Tohoku)
  "ごんぼほり", // Tantrum-thrower (Tohoku)
  "じょっぱりめ", // You stubborn person (Tohoku)
  "へばな", // Go away (Tohoku)
  "うるせごと言うな", // Don't say noisy things (Tohoku)
  "おしょすい", // Embarrassing/pathetic (Tohoku)
  "おめでこ", // Your forehead (Tohoku insult)
  "あんにゃろめ", // That bastard (Tohoku)
  "ごしゃぐ", // To get angry (Tohoku)
  "ごしゃがれる", // To be scolded (Tohoku)
  "わらし", // Child (Tohoku, can be derogatory)
  "がんす", // Is (Tohoku, used in threatening context)
  "べっちょ", // Female genitalia (Tohoku)
  "ほでなす", // Useless person (Tohoku)

  // Hokkaido dialect - expanded
  "はんかくさいやつ", // Stupid person (Hokkaido)
  "なまらむかつくんだが", // Very annoying though (Hokkaido)
  "なまらキモい", // Very disgusting (Hokkaido)
  "なまらうざい", // Very annoying (Hokkaido)
  "なまらバカ", // Very stupid (Hokkaido)
  "あずましくないな", // Unpleasant (Hokkaido)
  "しゃっこい", // Cold (Hokkaido, used as insult for cold person)
  "めんこくない", // Not cute (Hokkaido, ugly)
  "べったら", // Lazy/slovenly (Hokkaido)
  "ちょす", // To tease/bother (Hokkaido)
  "ちょすな", // Don't bother me (Hokkaido)

  // Okinawan/Ryukyuan dialect - expanded
  "フリムンめ", // You fool (Okinawan)
  "ゲレンなやつ", // Ugly/dirty person (Okinawan)
  "ヤナワラバーめ", // You bad child (Okinawan)
  "ヤナカーギーめ", // You ugly face (Okinawan)
  "シニサリンドーよ", // Go to hell (Okinawan)
  "クルサリンドーよ", // I'll kill you (Okinawan)
  "イッペーワジワジ", // Very angry (Okinawan)
  "フリー", // Fool (Okinawan short)
  "ヤナムン", // Bad thing (Okinawan)
  "ヤナグチ", // Bad mouth (Okinawan)
  "デージ", // Very/serious (Okinawan intensifier)
  "デージフリムン", // Very foolish (Okinawan)
  "アキサミヨー", // Oh my (Okinawan exclamation, aggressive context)
  "チバリヨー", // Hang in there (sarcastic, Okinawan)
  "ナンクルナイサ", // It'll work out (sarcastic dismissal, Okinawan)
  "クサミチ", // Stinky (Okinawan)
  "ガチマヤー", // Greedy (Okinawan)

  // Nagoya/Chubu dialect - expanded
  "たわけがあ", // You fool (Nagoya aggressive)
  "たわけめが", // You fool (Nagoya aggressive)
  "でれすけめ", // You lazy person (Nagoya)
  "けったくそわるい", // Annoying/disgusting (Nagoya)
  "けったくそ", // Annoying (Nagoya short)
  "ちんちこちんやぞ", // It's very hot (Nagoya, sounds vulgar)
  "どべやなあ", // You're last place (Chubu)
  "どべのどべ", // Last of the last (Chubu)
  "やっとかめ", // Long time no see (Nagoya, can be aggressive)

  // Hiroshima/Chugoku dialect
  "たいぎい", // Troublesome/tiresome (Hiroshima)
  "ぶち", // Very (Hiroshima intensifier, with insults)
  "ぶちころすけえ", // I'll beat you to death (Hiroshima)
  "ぶちむかつく", // Very annoying (Hiroshima)
  "ぶちきもい", // Very disgusting (Hiroshima)
  "ぶちうざい", // Very annoying (Hiroshima)
  "ぶちバカ", // Very stupid (Hiroshima)
  "ぶちアホ", // Very stupid (Hiroshima)
  "ぶちブス", // Very ugly (Hiroshima)
  "ぶちデブ", // Very fat (Hiroshima)
  "じゃけえ", // Because (Hiroshima, aggressive context)
  "わりゃあ", // You (Hiroshima hostile)
  "おどりゃあ", // You (Hiroshima threatening)
  "おどりゃあなんしょうるんか", // What are you doing (Hiroshima threatening)
  "いなげな", // Strange/weird (Hiroshima negative)

  // Shikoku dialect
  "あるまじき", // Unforgivable (Shikoku)
  "いかんぜよ", // No good (Tosa/Kochi)
  "なめたらいかんぜよ", // Don't underestimate me (Tosa)
  "おんしゃ", // You (Tosa hostile)
  "こじゃんと", // Very (Tosa intensifier)
  "こじゃんとムカつく", // Very annoying (Tosa)

  // Additional sexual terms - comprehensive
  "性器", // Genitalia
  "性器露出", // Genital exposure
  "性交渉", // Sexual relations
  "性的暴行", // Sexual assault
  "性的虐待", // Sexual abuse
  "わいせつ行為", // Indecent act (hiragana+kanji)
  "卑猥", // Obscene
  "猥褻行為", // Obscene behavior
  "猥褻罪", // Indecency crime
  "公然猥褻", // Public indecency
  "強制わいせつ", // Forced indecency
  "強制性交", // Forced intercourse
  "準強姦", // Quasi-rape
  "集団強姦", // Group rape
  "強姦魔", // Rapist
  "強姦犯", // Rape criminal
  "連続強姦犯", // Serial rapist
  "精液まみれ", // Covered in semen
  "精子まみれ", // Covered in sperm
  "ザーメンまみれ", // Covered in semen (loanword)
  "精液顔", // Semen face
  "ちんこまんこ", // Dick pussy (combined vulgar)
  "まんぐり返し", // Legs-over-head position
  "お尻の穴", // Butt hole
  "アヌス", // Anus (katakana)
  "菊穴", // Chrysanthemum hole (anus)
  "菊門", // Chrysanthemum gate (anus)
  "糞穴", // Shit hole
  "尻穴", // Ass hole
  "処女喪失", // Loss of virginity (female)
  "童貞喪失", // Loss of virginity (male)
  "初体験", // First experience (sexual)
  "筆おろし", // First sexual experience (male)
  "筆下ろし", // First sexual experience (variant)
  "手淫", // Masturbation (kanji)
  "自涜", // Self-pollution (masturbation)
  "陰茎挿入", // Penile insertion
  "膣内射精", // Vaginal ejaculation
  "膣外射精", // External ejaculation
  "前戯", // Foreplay
  "後戯", // Afterplay
  "愛撫", // Caressing (sexual)
  "性的快感", // Sexual pleasure
  "快楽", // Pleasure (sexual context)
  "絶頂", // Climax
  "白濁液", // White turbid liquid (semen euphemism)
  "先走り", // Pre-cum
  "我慢汁", // Pre-cum (slang: patience juice)
  "カリ首", // Glans (slang)
  "竿", // Shaft (penis slang)
  "玉袋", // Ball sack
  "金玉袋", // Testicle sack
  "睾丸", // Testicle (medical kanji)
  "陰核", // Clitoris (medical kanji)
  "陰裂", // Vulvar cleft
  "小陰唇", // Labia minora (kanji)
  "大陰唇", // Labia majora (kanji)
  "恥丘", // Mons pubis
  "恥骨", // Pubic bone
  "乳輪", // Areola
  "乳房", // Breast (medical)

  // Additional internet/2ch/5ch slang
  "草", // LOL (modern slang, but also mocking)
  "大草原不可避", // Can't avoid great grassland (can't help laughing, mocking)
  "クソワロタ", // Shit-laughed
  "クソワロスwww", // Shit-LOL
  "お前らに人権はない", // You guys have no human rights
  "人権ない", // No human rights
  "人権剥奪", // Human rights revocation (gaming insult)
  "戦犯はお前", // You are the war criminal (gaming blame)
  "A戦犯", // A-class war criminal
  "お荷物", // Burden/deadweight
  "足手まとい", // Hindrance
  "邪魔者", // Nuisance
  "邪魔するな", // Don't get in the way
  "邪魔", // In the way
  "邪魔くさい", // Bothersome
  "しゃしゃるな", // Don't butt in
  "しゃしゃり出るな", // Don't come forward uninvited
  "出しゃばるな", // Don't be pushy
  "でしゃばり", // Busybody
  "おせっかい", // Nosy/meddlesome
  "お節介野郎", // Nosy bastard
  "ストーカーかよ", // Are you a stalker
  "キモストーカー", // Creepy stalker
  "キモい男", // Creepy man
  "キモい女", // Creepy woman
  "キモいおっさん", // Creepy old man
  "キモいおばさん", // Creepy old woman
  "キモいジジイ", // Creepy old man (vulgar)
  "キモいババア", // Creepy old woman (vulgar)
  "キモオタ野郎", // Creepy otaku bastard
  "キモオタども", // Creepy otaku people
  "キモデブ", // Creepy fatso
  "キモハゲ", // Creepy baldy
  "きっしょ", // Gross (abbreviation of きしょい)
  "きっしょい", // Gross (variant)
  "ドン引き", // Total turn-off
  "引くわ", // That's a turn-off
  "ウザ絡み", // Annoying involvement
  "ウザ男", // Annoying man
  "ウザ女", // Annoying woman
  "クソ絡み", // Shit involvement
  "ウザいんだよ", // You're annoying
  "うぜえんだよ", // You're annoying (rough)
  "きもいんだよ", // You're disgusting
  "きめえんだよ", // You're gross
  "くさいんだよ", // You stink
  "くせえんだよ", // You stink (rough)
  "だせえんだよ", // You're uncool
  "邪魔なんだよ", // You're in the way
  "消えろよ", // Disappear already
  "いなくなれ", // Disappear
  "存在が邪魔", // Your existence is in the way
  "存在が迷惑", // Your existence is a nuisance
  "存在価値ゼロ", // Zero existence value
  "存在意義なし", // No meaning in existing
  "生きてる意味ない", // No meaning in living
  "お前の席ねえから", // There's no seat for you
  "帰れ", // Go home
  "帰れよ", // Go home already
  "さっさと帰れ", // Hurry up and go home
  "田舎に帰れ", // Go back to the countryside

  // Additional katakana loanword profanity
  "マザーファッカー", // Motherfucker
  "サノバビッチ", // Son of a bitch
  "ゴーファックユアセルフ", // Go fuck yourself
  "シャットアップ", // Shut up
  "ゲットアウト", // Get out
  "ファックオフ", // Fuck off
  "ダムイット", // Damn it
  "ゴッドダム", // God damn
  "ホーリーシット", // Holy shit
  "ワットザファック", // What the fuck
  "ピースオブシット", // Piece of shit
  "ゴートゥーヘル", // Go to hell
  "バスタード", // Bastard
  "スラット", // Slut
  "ホアー", // Whore
  "クラップ", // Crap
  "ジャーク", // Jerk
  "アイディオット", // Idiot
  "モロン", // Moron
  "リタード", // Retard
  "ルーザー", // Loser
  "フリーク", // Freak
  "クリーピー", // Creepy
  "ディスガスティング", // Disgusting
  "パセティック", // Pathetic
  "ミゼラブル", // Miserable
  "ピッグ", // Pig
  "カウ", // Cow (insult)
  "ドッグ", // Dog (insult)
  "ラット", // Rat
  "パラサイト", // Parasite
  "トラッシュ", // Trash
  "スカム", // Scum

  // Additional ateji/phonetic substitution spellings
  "氏ね氏ね", // Die die (internet censored)
  "詩ね", // Die (kanji substitution)
  "市ね", // Die (kanji substitution)
  "四ね", // Die (number substitution)
  "し_ね", // Die (with underscore)
  "タヒにたい", // Want to die (censored)
  "しネ", // Die (mixed case)
  "シね", // Die (mixed case variant)
  "シネ", // Die (full katakana)
  "シネシネ", // Die die (katakana)
  "ころす", // Kill (hiragana)
  "ころすぞ", // I'll kill you (hiragana)
  "コロス", // Kill (katakana)
  "コロスゾ", // I'll kill you (katakana)
  "56す", // Kill (number substitution)
  "ヌッコロス", // Kill (internet variant)
  "ヌッ頃す", // Kill (internet variant)
  "頃す", // Kill (kanji substitution)
  "頃すぞ", // I'll kill you (kanji substitution)
  "タヒぬ", // Die (censored variant)
  "タヒのう", // Let's die (censored)

  // Additional threat/violence expressions
  "殺すぞこの野郎", // I'll kill you, you bastard
  "殺すぞクソが", // I'll kill you, shit
  "ぶっ殺すぞマジで", // I'll seriously kill you
  "マジで殺すからな", // I'll seriously kill you, warning
  "本気で殺すぞ", // I'll really kill you
  "目を潰す", // I'll gouge out your eyes
  "歯を折る", // I'll break your teeth
  "骨を折る", // I'll break your bones
  "腕を折ってやる", // I'll break your arm
  "足を折ってやる", // I'll break your leg
  "顔面潰す", // I'll crush your face
  "顔面殴る", // I'll punch your face
  "ワンパンで沈める", // I'll sink you with one punch
  "ボコる", // To beat up
  "ボコボコにする", // To beat to a pulp
  "ボコボコにしてやる", // I'll beat you to a pulp
  "フルボッコ", // Full beating
  "フルボッコにする", // To give a full beating
  "タコ殴りにする", // To punch repeatedly
  "タコ殴り", // Repeated beating
  "ぼこぼこ", // Beaten up (hiragana)
  "メッタ打ち", // To beat savagely
  "メッタ刺し", // To stab repeatedly
  "八つ裂きにする", // To tear into eight pieces
  "バラバラにする", // To tear apart
  "ミンチにする", // To mince
  "すり潰す", // To grind to paste
  "消し去る", // To erase
  "存在ごと消す", // To erase your existence
  "この世から消す", // To erase from this world

  // Additional discriminatory terms
  "障害者め", // You disabled person
  "身障者", // Physically disabled (derogatory)
  "精神異常者", // Mentally abnormal person
  "気狂いめ", // You crazy person
  "ルンペン", // Vagrant (German loanword)
  "浮浪者め", // You vagrant
  "極道者め", // You gang member
  "半グレ", // Semi-delinquent
  "チンピラめ", // You thug
  "不良少年め", // You delinquent
  "ヤンキーかよ", // Are you a delinquent
  "ゴミヤンキー", // Garbage delinquent
  "クソヤンキー", // Shit delinquent
  "劣等人種", // Inferior race
  "劣等種", // Inferior species

  // Additional sexual terms - romaji
  "sefure", // Sex friend
  "hametomo", // Sex friend (vulgar)
  "wannaito", // One-night stand
  "sokuhame", // Immediate sex
  "sokuman", // Immediate sex (vulgar)
  "nanpa", // Pickup (sexual)
  "gyakunan", // Reverse pickup
  "rabuho", // Love hotel
  "futamata", // Two-timing
  "uwaki", // Cheating
  "sekuhara", // Sexual harassment
  "pawahara", // Power harassment
  "chinkanpurei", // Groping play
  "ryoujoku", // Humiliation/violation
  "doreipurei", // Slave play
  "kubijime", // Choking (sexual)
  "pegingu", // Pegging
  "manjiru", // Vaginal fluid (vulgar)

  // Additional romaji - compound
  "kono kusottare ga", // You shithead
  "kono baka ga", // You idiot
  "kono aho ga", // You idiot (Kansai)
  "kono kichigai ga", // You crazy person
  "kono gomi ga", // You garbage
  "kono kuzu ga", // You trash
  "kono kasu ga", // You scum
  "kono gesu ga", // You lowlife
  "kono chikusho ga", // You beast
  "kono gedo ga", // You fiend
  "kono hitodenashi ga", // You inhuman person
  "fuzakenna yo", // Don't mess around
  "nameruna yo", // Don't look down on me
  "choushi norunna yo", // Don't get cocky
  "erasouni sunna", // Don't act arrogant
  "gata gata iunna", // Don't complain
  "sassato usero", // Hurry up and get lost
  "sassato kiero", // Hurry up and disappear
  "sassato shine", // Hurry up and die
  "hayaku shine", // Die quickly
  "ima sugu shine", // Die right now
  "kurushinde shine", // Suffer and die
  "mijimeni shine", // Die miserably
  "hitoride shine", // Die alone
  "inuji ni shiro", // Die like a dog
  "zamaa miro", // Serves you right

  // Additional homophobic/transphobic slurs
  "ホモくさい", // Homo-smelling
  "ホモっぽい", // Homo-ish
  "ホモ臭い", // Homo-stinking
  "ホモだろ", // You're homo right
  "レズだろ", // You're lesbian right
  "オカマっぽい", // Effeminate-ish
  "オカマくさい", // Effeminate-smelling
  "オカマめ", // You effeminate one
  "おなべめ", // You masculine woman
  "ゲイ野郎", // Gay bastard
  "レズ女", // Lesbian woman (derogatory)
  "女装野郎", // Cross-dressing bastard
  "変態野郎", // Pervert bastard
  "変質者め", // You deviant

  // Additional compound insults with この
  "このくそったれが", // You shithead (aggressive)
  "この能なしが", // You incompetent
  "この穀潰しが", // You grain waster
  "この役立たずが", // You useless person
  "この腰抜けが", // You coward
  "この恥知らずが", // You shameless person
  "この面汚しが", // You disgrace
  "この卑怯者が", // You coward
  "この下衆が", // You lowlife
  "この外道が", // You fiend
  "この畜生が", // You beast
  "この人でなしが", // You inhuman person
  "この鬼畜が", // You brute
  "この人非人が", // You inhuman being
  "このけだものが", // You beast
  "この虫けらが", // You insect (dehumanizing)
  "この蛆虫が", // You maggot
  "このゴキブリが", // You cockroach
  "このダニが", // You tick
  "このシラミが", // You louse
  "この寄生虫が", // You parasite
  "この害虫が", // You pest
  "このウジ虫が", // You maggot (katakana)
  "このドブネズミが", // You sewer rat
  "このハイエナが", // You hyena
  "このヒルが", // You leech
  "このミミズが", // You earthworm

  // Additional derogatory terms for appearance
  "ブサイク", // Ugly (katakana)
  "ブサメン", // Ugly face
  "ブサ面", // Ugly face (variant)
  "不細工め", // You ugly
  "醜い", // Ugly (kanji)
  "醜女", // Ugly woman (kanji)
  "醜男", // Ugly man (kanji)
  "オバサン顔", // Old woman face
  "おっさん顔", // Old man face
  "ジジイ顔", // Old man face (vulgar)
  "ババア顔", // Old woman face (vulgar)
  "チビ", // Shorty
  "チビデブ", // Short and fat
  "チビハゲ", // Short and bald
  "チビデブハゲ", // Short fat and bald
  "チビブサ", // Short and ugly
  "デブス", // Fat and ugly
  "ブサデブ", // Ugly and fat
  "豚", // Pig (insult)
  "ブタ", // Pig (katakana)
  "豚野郎", // Pig bastard
  "豚女", // Pig woman
  "豚男", // Pig man
  "デブ男", // Fat man
  "デブ女", // Fat woman
  "クソデブ男", // Shit fat man
  "クソデブ女", // Shit fat woman
  "ハゲデブ", // Bald and fat (katakana)
  "クソハゲ男", // Shit bald man
  "ズラ", // Wig (mocking bald person)
  "ヅラ", // Wig (variant)
  "カツラ", // Wig (katakana)

  // Additional insults about intelligence
  "脳みそ空っぽ", // Empty brain
  "脳みそスカスカ", // Brain is hollow
  "脳みそゼロ", // Zero brain
  "脳みそ入ってない", // No brain inside
  "脳みそ使え", // Use your brain
  "頭空っぽ", // Empty head
  "頭悪すぎ", // Head too bad
  "頭おかしい", // Head is weird (crazy)
  "頭イカれてる", // Head is messed up
  "頭湧いてる", // Head is boiling (crazy)
  "頭大丈夫", // Is your head OK (sarcastic)
  "頭の病院行け", // Go to a head hospital
  "病院行け", // Go to a hospital (you're crazy)
  "精神科行け", // Go to psychiatry
  "精神病院行け", // Go to a mental hospital
  "知恵遅れ", // Slow-witted (derogatory)
  "学習障害", // Learning disability (used as insult)
  "理解力ゼロ", // Zero comprehension
  "判断力ゼロ", // Zero judgment
  "常識ないのか", // Do you have no common sense
  "非常識", // Lacking common sense
  "非常識すぎ", // Too lacking common sense
  "社会不適合者", // Socially maladjusted person

  // Additional insults about worth/value
  "価値なし", // Worthless
  "価値ゼロ", // Zero value
  "存在が無駄", // Existence is wasteful
  "存在が害", // Existence is harmful
  "存在が罪", // Existence is a sin
  "お前の存在自体が害悪", // Your existence itself is harmful
  "この世にいらない", // Not needed in this world
  "この世に不要", // Unnecessary in this world
  "生まれてこなければよかった", // Should not have been born
  "生まれてきたのが間違い", // Being born was a mistake
  "生きてるだけ無駄", // Living is just wasteful
  "酸素の無駄遣い", // Waste of oxygen
  "空気の無駄", // Waste of air
  "食糧の無駄", // Waste of food
  "スペースの無駄", // Waste of space
  "親の顔が見たい", // I want to see your parents' faces (shame)
  "親が泣いてるぞ", // Your parents are crying
  "育ちが悪い", // Badly raised
  "しつけがなってない", // No discipline
  "猿以下", // Below monkeys
  "虫以下", // Below insects
  "ゴミ以下", // Below garbage
  "クソ以下の存在", // Existence below shit
  "犬以下", // Below dogs
  "豚以下", // Below pigs
  "アメーバ以下", // Below amoeba

  // Additional compound profanity - various
  "ぶっころがす", // To knock around
  "ぶっこわしてやる", // I'll destroy you
  "ぶった切る", // To slash
  "ぶったおす", // To knock down
  "ぶちかます", // To slam into
  "ぶちまける", // To spill/expose
  "ぶちこむ", // To throw in
  "ぶちこわす", // To wreck
  "たたっ殺す", // To beat to death
  "なぶり殺す", // To torment to death
  "嬲り殺す", // To torment to death (kanji)
  "蹴り殺す", // To kick to death
  "踏み殺す", // To stomp to death
  "絞め殺す", // To strangle to death
  "焼き殺す", // To burn to death
  "撃ち殺す", // To shoot to death
  "刺し殺す", // To stab to death
  "食い殺す", // To eat to death
  "噛み殺す", // To bite to death
  "引き裂く", // To tear apart
  "引きちぎる", // To rip apart
  "引きずり回す", // To drag around
  "引きずり出す", // To drag out
  "叩き出す", // To throw out
  "蹴り出す", // To kick out
  "追い出す", // To chase out
  "放り出す", // To throw out
  "叩きつける", // To slam against
  "投げつける", // To hurl at
  "ぶつける", // To hit against

  // Additional romaji profanity
  "anpontan", // Idiot (archaic)
  "usunoro", // Slow-witted
  "utsuke", // Fool (archaic)
  "orokmono", // Foolish person
  "kusare", // Rotten
  "kusare gedo", // Rotten fiend
  "kusare yaro", // Rotten bastard
  "kechinbo", // Stingy person
  "konchikusho", // Damn it (emphatic)
  "gokutsubushi", // Grain waster
  "zamaAmiro", // Serves you right
  "zamaa", // Serves you right (short)
  "zuuzuushii", // Shameless
  "takari", // Moocher
  "tonchiki", // Blockhead
  "hozakuna", // Don't spout nonsense
  "oroka mono", // Foolish person
  "gujin", // Stupid person
  "guretsu", // Stupid and inferior
  "gudon", // Stupid and dull
  "akutou", // Villain
  "akunin", // Bad person
  "akuma", // Devil
  "insitsu", // Sneaky/nasty
  "inken", // Treacherous
  "obutsu", // Filth
  "katou", // Low-class
  "geretsu", // Base/vulgar
  "gehin", // Vulgar
  "gaichuu", // Pest
  "kyoujin", // Madman
  "kyouken", // Mad dog
  "gurou", // Ridiculing
  "kirawaremono", // Hated person
  "hikyoumono", // Coward
  "hiretsu", // Base/despicable
  "busaiku", // Already listed variant
  "ahou", // Idiot (Kansai)
  "nouashi", // Brain deficient
  "nounashi", // Already listed variant
  "noumiso kusatteru", // Brain rotting
  "hajisarashi", // Public shame
  "tsura yogoshi", // Disgrace
  "harenchi", // Shameless
  "atsukamashii", // Brazen

  // Additional gaming/internet insults
  "エイム下手", // Bad aim
  "エイムクソ", // Shit aim
  "エイムゴミ", // Garbage aim
  "芋る", // To camp (gaming, cowardly)
  "芋カス", // Camping scum
  "芋砂", // Camping sniper
  "noob", // Noob (used in Japanese gaming)
  "ヌーブ", // Noob (katakana)
  "初心者かよ", // Are you a beginner
  "下手くそ", // Already listed but variant
  "ヘタクソ", // Terrible (katakana)
  "雑魚すぎ", // Too weak
  "雑魚乙", // Weakling, good work (sarcastic)
  "ざっこ", // Weakling (casual)
  "ザッコw", // Weakling LOL
  "弱すぎ", // Too weak
  "弱すぎワロタ", // Too weak, LOL
  "足引っ張るな", // Don't drag us down
  "お荷物すぎ", // Too much of a burden
  "いらね", // Don't need you
  "来んな", // Don't come
  "来るな", // Don't come (standard)
  "参加するな", // Don't participate
  "邪魔すんな", // Don't get in the way (casual)
  "ゲーム辞めろ", // Quit the game
  "引退しろ", // Retire
  "やめちまえ", // Just quit
  "センスない", // No talent/sense
  "センスゼロ", // Zero talent
  "才能ない", // No talent
  "向いてない", // Not cut out for it
  "スマーフ", // Smurf (gaming: experienced player on new account)
  "チーター", // Cheater
  "チートかよ", // Are you cheating
  "壁打ちしてろ", // Go hit a wall (practice alone)
  "bot以下", // Below bot
  "botかよ", // Are you a bot
  "CPU以下", // Below CPU
  "養分乙", // Good work being exploited
  "カモ乙", // Good work being a sucker
  "搾取乙", // Good work being exploited (variant)
  "金ヅル", // Money vine (cash cow, derogatory)
  "ATM", // ATM (person used for money)
  "財布", // Wallet (person used for money)
  "おサイフ", // Wallet (polite prefix, sarcastic)

  // Additional modern internet slang
  "こどおじきもい", // Creepy adult at parents
  "チー牛きも", // Cheese beef creepy
  "チーズ牛丼", // Cheese beef bowl (nerd insult full form)
  "チー牛メガネ", // Cheese beef glasses
  "陰キャきもい", // Creepy introvert
  "陽キャウザい", // Annoying extrovert
  "パリピうざい", // Annoying party people
  "ウェイ系きもい", // Creepy party type
  "量産型女", // Mass-produced woman
  "量産型男", // Mass-produced man
  "地雷メイク", // Landmine makeup
  "地雷系", // Landmine type (problematic)
  "メンヘラきもい", // Creepy mentally ill
  "メンヘラうざい", // Annoying mentally ill
  "構ってちゃんうざい", // Annoying attention seeker
  "かまちょうざい", // Annoying attention seeker (casual)
  "承認欲求やば", // Approval-seeking is crazy
  "承認欲求キモ", // Approval-seeking is creepy
  "マウントうざい", // Annoying one-upping
  "マウントとるな", // Don't one-up
  "イキるな", // Don't act tough
  "イキりすぎ", // Acting too tough
  "調子乗りすぎ", // Getting too cocky
  "調子こきすぎ", // Getting too full of yourself
  "ウザ絡みすんな", // Don't be annoyingly involved
  "クソリプすんな", // Don't shit-reply
  "クソリプ乙", // Good work shit-replying
  "エアプ乙", // Good work pretending
  "にわか乙", // Good work being a poser

  // Additional romaji profanity - more compounds
  "kuso yaro me", // You shit bastard
  "baka yaro me", // You stupid bastard
  "chikusho me", // You damn beast
  "gesu yaro", // Lowlife bastard
  "gesu onna", // Lowlife woman
  "gesu otoko", // Lowlife man
  "kuzu yaro", // Trash bastard
  "kuzu onna", // Trash woman
  "kuzu otoko", // Trash man
  "gomi yaro", // Garbage bastard
  "gomi onna", // Garbage woman
  "gomi otoko", // Garbage man
  "kasu yaro", // Scum bastard
  "kasu onna", // Scum woman
  "kasu otoko", // Scum man
  "buta yaro", // Pig bastard
  "buta onna", // Pig woman
  "buta otoko", // Pig man
  "saru", // Monkey (insult)
  "saru miman", // Below monkeys
  "mushi", // Bug (insult)
  "mushi miman", // Below bugs
  "gokiburi", // Cockroach
  "dani", // Tick
  "shirami", // Louse
  "kiseichu", // Parasite
  "ujimushi", // Maggot
  "dobunezumi", // Sewer rat
  "hiru", // Leech
  "mimizu", // Earthworm
  "ameba miman", // Below amoeba
  "inu ika", // Below dogs
  "buta ika", // Below pigs
  "gomi ika", // Below garbage
  "kuso ika", // Below shit

  // Additional insults - body shaming romaji
  "chibi", // Shorty
  "chibi debu", // Short and fat
  "chibi hage", // Short and bald
  "debusu", // Fat and ugly
  "busadebu", // Ugly and fat
  "buta", // Pig
  "hage debu", // Bald and fat
  "zura", // Wig (mocking)
  "katsura", // Wig
  "busamen", // Ugly face
  "shikome", // Ugly woman (archaic)
  "minikui", // Ugly
  "minikui onna", // Ugly woman
  "minikui otoko", // Ugly man

  // Additional sexual romaji
  "seiki", // Genitalia
  "seikousha", // Sexual relations
  "seiteki boukou", // Sexual assault
  "seiteki gyakutai", // Sexual abuse
  "waisetsu koui", // Indecent act
  "hibwai", // Obscene
  "kyousei waisetsu", // Forced indecency
  "kyousei seikou", // Forced intercourse
  "shuudan goukan", // Group rape
  "goukan ma", // Rapist
  "goukan han", // Rape criminal
  "seieki mamire", // Covered in semen
  "chinko manko", // Dick pussy
  "manguri gaeshi", // Legs-over-head
  "oshiri no ana", // Butt hole
  "kiku ana", // Chrysanthemum hole
  "kiku mon", // Chrysanthemum gate
  "kuso ana", // Shit hole
  "shiri ana", // Ass hole
  "shojo soushitsu", // Loss of virginity
  "doutei soushitsu", // Loss of virginity (male)
  "hatsu taiken", // First experience
  "fude oroshi", // First sexual experience
  "shuuin", // Masturbation (variant)
  "jitoku", // Self-pollution
  "inkei sounyuu", // Penile insertion
  "chitsu nai shasei", // Vaginal ejaculation
  "chitsu gai shasei", // External ejaculation
  "zengi", // Foreplay
  "aibu", // Caressing
  "seiteki kaikan", // Sexual pleasure
  "zetchou", // Climax
  "hakudaku eki", // White turbid liquid
  "sakibashiri", // Pre-cum
  "gaman jiru", // Pre-cum (patience juice)
  "kari kubi", // Glans
  "sao", // Shaft
  "tama bukuro", // Ball sack
  "kougan", // Testicle
  "inkaku", // Clitoris
  "inretsu", // Vulvar cleft
  "shikyu", // Pubic area
  "nyuurin", // Areola
  "nyuubou", // Breast

  // ===== ADDITIONAL ROMAJI VARIATIONS (ALTERNATE SPELLINGS) =====
  "baka yaro", // Stupid bastard (spaced)
  "aho ndara", // Idiot (Kansai spaced)
  "dosukebe", // Super pervert
  "do sukebe", // Super pervert (spaced)
  "ecchi na", // Perverted (adjective)
  "ettchi", // Perverted (alt spelling)
  "hentai yarou", // Pervert bastard
  "kuso baba", // Shit old woman (spaced)
  "kusojiji", // Shit old man
  "kuso jiji", // Shit old man (spaced)
  "kusoonna", // Shit woman
  "kuso onna", // Shit woman (spaced)
  "kusootoko", // Shit man
  "kuso otoko", // Shit man (spaced)
  "kusogaki", // Shit brat
  "kuso mushi", // Shit bug (spaced)
  "kusoame", // Shit rain (damn rain)
  "kusomajime", // Shit serious
  "kusowarota", // Shit laughed (internet)
  "kusowaro", // Shit laugh (internet)
  "kusowarosu", // Shit laugh (2ch)
  "shinee", // Die (elongated)
  "shiney", // Die (English-ized)
  "shi ne yo", // Die (spaced)
  "タヒれ", // Die (katakana evasion variant)
  "たひね", // Die (hiragana evasion)
  "逝ね", // Pass away (euphemism for die)
  "逝け", // Go away/die
  "koroshite yaru", // I'll kill you (spaced)
  "bukkoroshiteyaru", // I'll beat you to death
  "butt obasu", // Punch away (spaced)
  "namen nayo", // Don't mess with me (spaced)
  "fuzakenayo", // Don't mess around (spaced)
  "fuzaken na yo", // Don't mess around (alt)
  "namenjaneeyo", // Don't lick me (vulgar)
  "nanjya kora", // What the hell (dialectal)
  "nanda kora", // What the hell is this
  "doke kora", // Move it, bastard
  "dokikasare", // Get out of the way (harsh)
  "urusai yo", // Shut up (with emphasis)
  "uruseenda", // Shut up (strong)
  "damare kono", // Shut up, you...
  "damare yo", // Shut up (with emphasis)
  "damari yagare", // Shut the hell up
  "deteike", // Get out (romaji)
  "deteke", // Get out (casual)
  "detekeyo", // Get out! (emphatic)
  "usero yo", // Fuck off (emphatic)
  "kiero yo", // Disappear (emphatic)
  "shine kasu", // Die, scum
  "shine gomi", // Die, trash
  "shine kuzu", // Die, garbage
  "shine zako", // Die, weakling

  // ===== MORE KANJI/KANA INSULTS =====
  "糞女", // Shit woman
  "糞男", // Shit man
  "糞親父", // Shit old man
  "糞豚", // Shit pig
  "糞犬", // Shit dog
  "糞猫", // Shit cat
  "糞鬼", // Shit demon
  "糞ゲー", // Shit game
  "くそげー", // Shit game (hiragana)
  "クソ運営", // Shit management (katakana)
  "糞仕様", // Shit specification
  "クソ仕様", // Shit specification
  "クソスレ", // Shit thread (katakana)
  "糞レス", // Shit response
  "馬鹿垂れ", // Stupid person (kanji)
  "大馬鹿者", // Great idiot
  "大馬鹿野郎", // Great idiot bastard
  "超馬鹿", // Super idiot
  "ド馬鹿", // Extreme idiot
  "ド阿呆", // Extreme idiot (Kansai)
  "阿呆丸出し", // Full-on idiot (Kansai)
  "間抜け面", // Idiot face
  "能無し", // Incompetent
  "脳なし", // Brainless
  "脳みそ無し", // No brain matter
  "低脳", // Low brain
  "ちしょう", // Retard (hiragana)
  "チショウ", // Retard (katakana)
  "害児", // Harm child (derogatory)
  "基地害", // Crazy (variant)
  "きち", // Crazy (abbreviated hiragana)
  "キティ", // Crazy (kitty = kichi + suffix)
  "キチママ", // Crazy mom (internet)
  "下衆め", // Scum! (exclamation)
  "下衆い", // Scummy (adjective)
  "ゲスい", // Scummy (katakana)
  "げすい", // Scummy (hiragana)
  "卑しい", // Despicable
  "粘着質", // Stalker type
  "自演", // Self-posting (2ch)
  "ちょん", // Derogatory for Korean (hiragana)
  "ちゃんころ", // Derogatory for Chinese (hiragana)
  "シナ人", // Derogatory for Chinese
  "シナ", // Derogatory for China
  "蛮人", // Barbarian
  "コジキ", // Beggar (katakana)
  "クズ人間", // Garbage human
  "くず人間", // Garbage human (hiragana)
  "ゴミ人間", // Trash human
  "ごみ人間", // Trash human (hiragana)
  "ゴミカス", // Trash scum
  "ごみかす", // Trash scum (hiragana)
  "ごみくず", // Trash garbage (hiragana)
  "カスゴミ", // Scum trash
  "クズゴミ", // Garbage trash
  "ゴミ虫", // Trash bug
  "人間のゴミ", // Human trash
  "人間の屑", // Human scum (kanji)
  "社会のクズ", // Society's garbage
  "社会の底辺", // Bottom of society
  "底辺人間", // Bottom-tier human
  "底辺層", // Bottom stratum
  "敗北者", // Defeated person
  "落伍者", // Dropout/failure
  "やくたたず", // Useless person (hiragana)
  "無能者", // Incompetent person
  "無能め", // Incompetent! (exclamation)
  "ポンコツ", // Broken-down/useless
  "ボンクラ", // Blockhead
  "ぼんくら", // Blockhead (hiragana)
  "トンマ", // Dunce
  "ドジ", // Klutz
  "どじ", // Klutz (hiragana)
  "マヌケ", // Fool (katakana)
  "たこ", // Octopus/idiot (hiragana)
  "はげ", // Baldy (hiragana)
  "禿", // Baldy (kanji)
  "禿頭", // Bald head
  "ハゲ頭", // Bald head
  "でぶ", // Fatso (hiragana)
  "ぶた", // Pig (hiragana)
  "クソブタ", // Shit pig
  "ちび", // Shorty (hiragana)
  "ぶす", // Ugly woman (hiragana)
  "ドブス", // Extreme ugly
  "どぶす", // Extreme ugly (hiragana)
  "クソブサイク", // Shit ugly
  "ドブサイク", // Extreme ugly
  "きもおた", // Gross otaku (hiragana)
  "キモい", // Gross
  "キッモ", // Gross (elongated)
  "きっも", // Gross (elongated hiragana)
  "グロい", // Grotesque
  "ぐろい", // Grotesque (hiragana)
  "ウザイ", // Annoying (katakana)
  "ウゼー", // Annoying (elongated)
  "うぜー", // Annoying (elongated hiragana)
  "ウゼェ", // Annoying (variant)
  "うぜぇ", // Annoying (variant hiragana)
  "ムカつく", // Irritating
  "むかつく", // Irritating (hiragana)
  "イラつく", // Irritating
  "いらつく", // Irritating (hiragana)

  // ===== MORE 2CH/5CH/NICO INTERNET SLANG =====
  "ワロス", // LOL (2ch)
  "テラワロス", // Tera-LOL (extreme laughing)
  "ギガワロス", // Giga-LOL
  "メガワロス", // Mega-LOL
  "ワロタwww", // Laughed www
  "wwww", // Japanese LOL
  "藁", // LOL (kanji for straw/warota)
  "ｷﾀ━━━(ﾟ∀ﾟ)━━━!!", // It's here!! (excitement/mockery)
  "ﾜﾛﾀ", // Laughed (half-width)
  "ﾜﾛｽ", // LOL (half-width)
  "ｸｿﾜﾛﾀ", // Shit laughed (half-width)
  "ぷぎゃー", // Pointing and laughing (sound)
  "( ´,_ゝ`)プッ", // Scoffing
  "必死すぎ", // Too desperate
  "ファビョーン", // Raging (derogatory)
  "涙拭けよ", // Wipe your tears
  "ブーメラン", // Boomerang (hypocrisy)
  "おまいう", // You're one to talk (おまえが言うな)
  "おまえがいうな", // You're one to talk
  "目くそ鼻くそ", // Pot calling kettle black
  "どの口が言う", // With what mouth do you say that
  "何様", // Who do you think you are
  "何様のつもり", // Who do you think you are
  "お前何様", // Who do you think you are
  "調子乗んな", // Don't get cocky
  "調子に乗るな", // Don't get cocky (formal)
  "図に乗るな", // Don't get full of yourself
  "いい気になるな", // Don't be smug
  "思い上がるな", // Don't be arrogant
  "つけあがるな", // Don't get uppity
  "ナメんな", // Don't underestimate (katakana)
  "ナメてんの", // Are you looking down on me?
  "ナメとんか", // Are you looking down? (Kansai)
  "舐めとんか", // Are you looking down? (Kansai kanji)
  "舐めとんのか", // Are you looking down? (Kansai)

  // ===== ADDITIONAL KANSAI/OSAKA DIALECT =====
  "しばくぞコラ", // I'll beat you, hey
  "いわしたろか", // Shall I wreck you?
  "やったろか", // Shall I do you?
  "ぶちかましたる", // I'll smash you (Kansai)
  "何さらしとんじゃ", // What are you doing (angry)
  "何しとんねん", // What are you doing
  "何ぬかしとんじゃ", // What are you saying (angry)
  "ぬかすな", // Don't say that (harsh)
  "ぬかせ", // Say it (challenge)
  "ほざけ", // Babble on (sarcastic)
  "こら待たんかい", // Hey wait (threatening)
  "じゃかましい", // Noisy/shut up (Kansai)
  "やかましいわ", // Shut up (Kansai)
  "うっとうしい", // Annoying (Kansai emphasis)
  "しょーもな", // Worthless (Kansai casual)
  "あかんたれ", // Good-for-nothing (Kansai)
  "へたれ", // Coward/wimp
  "ヘタレ", // Coward/wimp (katakana)
  "玉無し", // No balls
  "タマなし", // No balls (katakana)
  "チキン", // Chicken (coward)
  "ビビり", // Scaredy-cat
  "びびり", // Scaredy-cat (hiragana)
  "ションベン垂れ", // Piss-dripping (coward)

  // ===== ADDITIONAL KYUSHU DIALECT =====
  "くらすぞ", // I'll hit you (Hakata)
  "くらわすぞ", // I'll hit you (variant)
  "せからしか", // Annoying (Kumamoto)
  "なんしようと", // What are you doing (Hakata aggressive)
  "なめとっちゃ", // Are you looking down (Kyushu)
  "なめよっちゃ", // Looking down on me (Kyushu)
  "ぬしゃ", // You (Kagoshima aggressive)
  "わいや", // You (Kagoshima aggressive)

  // ===== ADDITIONAL TOHOKU DIALECT =====
  "どんだば", // What is it (Tohoku aggressive)
  "なんだべ", // What is it (Tohoku aggressive)
  "この野郎だべ", // This bastard (Tohoku)
  "ばがやろう", // Stupid bastard (Tohoku pronunciation)
  "ばがだ", // Stupid (Tohoku)
  "ばがでねえが", // Isn't it stupid (Tohoku)
  "ふざけんでねえ", // Don't mess around (Tohoku)
  "うるさいべ", // Shut up (Tohoku)
  "けやぐ", // Annoying person (Aomori)

  // ===== ADDITIONAL OKINAWAN =====
  "ふりむん", // Idiot (Okinawan)
  "ゆくさー", // Liar (Okinawan)
  "わじわじーする", // Getting angry (Okinawan)
  "ちゅらかーぎー", // Ugly face (ironic, Okinawan)
  "やなかーぎー", // Ugly face (Okinawan)
  "やなわらばー", // Bad child (Okinawan)
  "がちまやー", // Glutton (Okinawan)
  "いったーよ", // You bastard (Okinawan)
  "ひんすー", // Poor person (Okinawan derogatory)
  "あきさみよー", // Oh my god (Okinawan exclamation)
  "くすけー", // Shit (Okinawan)

  // ===== ADDITIONAL HOKKAIDO DIALECT =====
  "たくらんけ", // Idiot (Hokkaido)
  "けっぱれ", // Try harder (Hokkaido, dismissive)

  // ===== NAGOYA/CHUBU DIALECT =====
  "たーけ", // Fool (Nagoya casual)
  "だぎゃー", // Exclamation (Nagoya, vulgar)
  "どたわけ", // Big fool (Nagoya)
  "いかんわ", // No good (Nagoya disapproval)

  // ===== MORE SEXUAL/EXPLICIT TERMS =====
  "淫婦", // Whore
  "援助交際", // Compensated dating (full)
  "パパ活", // Sugar daddy dating
  "ママ活", // Sugar mommy dating
  "せふれ", // Sex friend (hiragana)
  "びっち", // Bitch (hiragana)
  "スケベ", // Pervert
  "助兵衛", // Pervert (kanji)
  "助平", // Pervert (kanji variant)
  "好色", // Lustful
  "色魔", // Sex demon
  "色狂い", // Sex-crazy
  "色キチ", // Sex-crazy (abbrev)
  "発情", // In heat
  "発情期", // Mating season (derogatory for humans)
  "盛り", // In heat (animal term for humans)
  "サカり", // In heat (katakana)
  "さかり", // In heat (hiragana)
  "レイパー", // Rapist (English loanword)
  "レイプ犯", // Rape criminal
  "レイプ魔", // Rape demon
  "ちかん", // Groper (hiragana)
  "変態女", // Pervert woman
  "変態男", // Pervert man
  "ろりこん", // Lolicon (hiragana)
  "しょたこん", // Shotacon (hiragana)
  "マザコン", // Mother complex
  "シスコン", // Sister complex
  "ブラコン", // Brother complex
  "ファザコン", // Father complex
  "童貞厨", // Male-virgin-obsessed (internet)
  "非モテ", // Unpopular (romantically)
  "モテない", // Not popular (romantically)
  "まんさん", // Women (derogatory, from manko)
  "ま～ん(笑)", // Women LOL (derogatory)
  "ち〜ん", // Men (derogatory retort)
  "ちーん(笑)", // Men LOL (derogatory)
  "おばはん", // Old woman (Kansai derogatory)
  "老いぼれ", // Senile old person

  // ===== THREAT/VIOLENCE EXPRESSIONS =====
  "殴り殺す", // Beat to death
  "叩き殺す", // Strike to death
  "撲殺", // Beat to death
  "刺殺", // Stabbing death
  "射殺", // Shooting death
  "焼殺", // Burning death
  "絞殺", // Strangulation
  "毒殺", // Poisoning death
  "斬殺", // Slashing death
  "殺したる", // I'll kill you (Kansai)
  "ぶっ殺してやる", // I'll fucking kill you
  "ぶっ殺したる", // I'll fucking kill you (Kansai)
  "首を絞める", // Strangle your neck
  "首吊れ", // Hang yourself
  "死んでくれ", // Please die
  "死んだ方がいい", // Better off dead
  "生きる価値なし", // No value in living
  "この世から消えろ", // Disappear from this world
  "地獄行き", // Bound for hell
  "呪ってやる", // I'll curse you
  "呪い殺す", // Curse to death
  "祟ってやる", // I'll haunt you
  "ぶっ潰す", // Fucking crush
  "叩き潰す", // Smash to pieces
  "ぼこる", // Beat up (hiragana)
  "リンチ", // Lynch
  "袋叩き", // Gang beating

  // ===== MORE ROMAJI COMPOUND INSULTS =====
  "kichigai yarou", // Crazy bastard
  "teme", // You (extremely rude, short)
  "konoyarou", // You bastard
  "kono yarou", // You bastard (spaced)
  "kono kuso yarou", // You shit bastard
  "kono baka yarou", // You stupid bastard
  "kono ama", // You bitch
  "kono gaki", // You brat
  "kono chikushou", // You beast
  "bakamono", // Fool
  "usuratonkachi", // Dimwit
  "rokudemonai", // Good-for-nothing
  "rokudemonashi", // Good-for-nothing (noun)
  "betabeta suruna", // Don't be clingy
  "kutabare kuzu", // Drop dead scum
  "kutabare kasu", // Drop dead scum
  "kuso kurae", // Eat shit
  "chikushou me", // You beast
  "urusee baka", // Shut up stupid
  "damatte ro", // Shut up and stay
  "me no mae kara kieyagare", // Disappear from my sight
  "zako ga", // Weakling!
  "gomi ga", // Trash!
  "kasu ga", // Scum!
  "kuzu ga", // Garbage!
  "uzee nda yo", // You're annoying
  "kimoi nda yo", // You're gross
  "kusai nda yo", // You stink
  "shine yo gomi", // Die, trash
  "iku", // Coming (sexual)
  "ikisou", // About to come (sexual)
  "ikasete", // Make me come (sexual)
  "iku iku", // Coming coming (sexual)

  // ===== GAMING/ONLINE INSULTS =====
  "ざこ", // Weakling (hiragana)
  "雑魚専", // Only fights weaklings
  "雑魚狩り", // Hunting weaklings
  "ザッコ", // Weakling (elongated)
  "ニワカ", // Newbie/poser
  "えあぷ", // Armchair player (hiragana)
  "チーミング", // Teaming (cheating)
  "芋虫", // Caterpillar (camper insult)
  "お荷物プレイ", // Dead weight play
  "寄生", // Parasite (carried player)
  "寄生虫", // Parasite
  "鴨", // Duck (easy target)
  "かも", // Duck/easy target (hiragana)
  "晒しスレ", // Shaming thread
  "通報", // Report (threatening)
  "通報した", // Reported you
  "BAN", // Ban
  "垢BAN", // Account ban
  "クソエイム", // Shit aim
  "アンインストールしろ", // Uninstall
  "回線切れ", // Disconnect (insulting)
  "回線細い", // Thin connection (insult)
  "ラグい", // Laggy
  "ラグ死", // Lag death
  "糞マップ", // Shit map
  "糞バランス", // Shit balance
  "糞アプデ", // Shit update
  "クソゲーすぎ", // Too much of a shit game
  "ゲームやめろ", // Quit the game
  "二度と来るな", // Never come back
  "消えろカス", // Disappear scum
  "足引っ張んな", // Don't drag us down

  // ===== ADDITIONAL COMPOUND EXPRESSIONS =====
  "生きてる価値がない", // No value in being alive
  "生まれてくるな", // Should not have been born
  "常識がない", // No common sense
  "教養がない", // No education/culture
  "品がない", // No class
  "人としてどうなの", // What kind of person are you
  "人として終わってる", // You're finished as a person
  "おわコン", // Over content (variant)
  "オワタ", // It's over
  "人生終了", // Life over
  "詰んだ", // Checkmate (you're done)
  "詰んでる", // Checkmated (hopeless)
  "ザマア", // Serves you right (katakana)
  "ざまぁ", // Serves you right (variant)
  "いい気味", // Serves you right (lit: good feeling)
  "ざまーみろ", // Serves you right (elongated)
  "メシウマ", // Meal tastes good (schadenfreude, internet)
  "めしうま", // Meal tastes good (hiragana)
  "飯ウマ", // Meal delicious (schadenfreude)
  "他人の不幸で飯がうまい", // Others' misfortune makes my meal taste good
  "にーと", // NEET (hiragana)
  "ひきこもり", // Hikikomori (hiragana)
  "なまぽ", // Welfare (hiragana)
  "すねかじり", // Parent-moocher
  "ぱらさいと", // Parasite (hiragana)
  "寄生虫め", // Parasite!
  "タダ飯食い", // Free-meal eater
];

export default japaneseBadWords;
