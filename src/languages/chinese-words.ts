/**
 * Chinese profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Chinese
 */
const chineseBadWords: Record<string, { s: number; c: number }> = {
  // Core Chinese profanity
  "操": { s: 3, c: 5 }, // fuck
  "肏": { s: 3, c: 5 }, // fuck (vulgar variant)
  "我操": { s: 3, c: 5 }, // holy fuck
  "他妈的": { s: 3, c: 4 }, // damn it (lit. his mother's)
  "妈的": { s: 3, c: 4 }, // damn (lit. mother's)
  "去你妈的": { s: 3, c: 5 }, // fuck off (lit. go to your mother's)
  "草泥马": { s: 3, c: 5 }, // fuck your mother (homophone euphemism)
  "逼": { s: 5, c: 5 }, // cunt
  "傻逼": { s: 1, c: 4 }, // stupid cunt
  "牛逼": { s: 3, c: 5 }, // fucking awesome
  "装逼": { s: 3, c: 4 }, // pretentious / show-off
  "臭逼": { s: 5, c: 5 }, // stinky cunt
  "贱逼": { s: 5, c: 5 }, // cheap cunt
  "二逼": { s: 1, c: 4 }, // dumb cunt
  "屌": { s: 4, c: 4 }, // dick
  "鸡巴": { s: 4, c: 4 }, // dick / penis
  "龟头": { s: 4, c: 4 }, // glans / dickhead
  "小鸡鸡": { s: 4, c: 4 }, // little dick / wee-wee

  // Insults
  "混蛋": { s: 3, c: 4 }, // bastard
  "混帐": { s: 1, c: 4 }, // scoundrel
  "王八蛋": { s: 1, c: 4 }, // son of a bitch (lit. turtle egg)
  "杂种": { s: 3, c: 4 }, // bastard / mongrel
  "畜生": { s: 5, c: 5 }, // animal / beast (dehumanizing)
  "贱人": { s: 1, c: 4 }, // cheap/lowly person
  "贱货": { s: 1, c: 4 }, // cheap slut
  "蠢货": { s: 1, c: 4 }, // idiot / stupid thing
  "白痴": { s: 1, c: 4 }, // idiot / moron
  "废话": { s: 3, c: 5 }, // nonsense / bullshit
  "废物": { s: 1, c: 4 }, // trash / useless person
  "变态": { s: 1, c: 4 }, // pervert
  "去死": { s: 5, c: 5 }, // go die
  "骚货": { s: 1, c: 4 }, // slut
  "荡妇": { s: 5, c: 4 }, // whore / slut
  "婊子": { s: 5, c: 4 }, // bitch / whore
  "婊子们": { s: 5, c: 4 }, // bitches / whores (plural)
  "臭婊子": { s: 1, c: 4 }, // stinky bitch
  "三八": { s: 1, c: 4 }, // bitch (lit. March 8th, derogatory for women)
  "娘们": { s: 1, c: 4 }, // broads / women (derogatory)

  // Sexual / vulgar
  "狗娘养的": { s: 3, c: 4 }, // son of a bitch (lit. raised by a dog mother)
  "狗日的": { s: 3, c: 5 }, // son of a bitch (lit. dog-fucked)
  "日": { s: 3, c: 5 }, // fuck
  "干": { s: 3, c: 5 }, // fuck / do
  "屁股": { s: 3, c: 4 }, // ass / butt
  "屁眼": { s: 3, c: 4 }, // asshole
  "肛门": { s: 3, c: 4 }, // anus
  "阴道": { s: 4, c: 4 }, // vagina
  "阴蒂": { s: 3, c: 4 }, // clitoris
  "睾丸": { s: 4, c: 4 }, // testicles
  "精液": { s: 3, c: 4 }, // semen
  "高潮": { s: 3, c: 4 }, // orgasm
  "手淫": { s: 4, c: 4 }, // masturbation
  "妓女": { s: 5, c: 4 }, // prostitute
  "色情电影": { s: 3, c: 4 }, // pornographic film
  "色情制品": { s: 3, c: 4 }, // pornography

  // Bodily functions
  "撒尿": { s: 3, c: 4 }, // piss / urinate
  "拉屎": { s: 3, c: 5 }, // take a shit
  "放屁": { s: 3, c: 4 }, // fart
  "狗屎": { s: 3, c: 5 }, // dog shit / bullshit

  // Slurs
  "黑鬼": { s: 5, c: 4 }, // n-word (racial slur)
  "黑鬼们": { s: 5, c: 4 }, // n-word plural (racial slur)
  "纳粹": { s: 5, c: 5 }, // Nazi
  "皮条客": { s: 5, c: 4 }, // pimp

  // Body parts (vulgar context)
  "奶头": { s: 4, c: 3 }, // nipple
  "乳头": { s: 4, c: 3 }, // nipple
  "直肠": { s: 4, c: 3 }, // rectum

  // 操/日/草 variations
  "操你妈": { s: 3, c: 5 }, // fuck your mother
  "操你大爷": { s: 3, c: 5 }, // fuck your uncle/grandpa
  "操你全家": { s: 3, c: 5 }, // fuck your whole family
  "操你祖宗": { s: 3, c: 5 }, // fuck your ancestors
  "操蛋": { s: 3, c: 5 }, // fucked up / bullshit
  "我日": { s: 3, c: 5 }, // holy fuck (variant)
  "日你妈": { s: 3, c: 5 }, // fuck your mother
  "日你大爷": { s: 3, c: 5 }, // fuck your uncle/grandpa
  "日了狗了": { s: 3, c: 5 }, // what the fuck (lit. fucked a dog)
  "草你妈": { s: 3, c: 5 }, // fuck your mother (variant)
  "草你大爷": { s: 3, c: 5 }, // fuck your uncle/grandpa (variant)
  "我草": { s: 3, c: 5 }, // holy fuck (variant)
  "草": { s: 3, c: 5 }, // fuck (variant)
  "肏你妈": { s: 3, c: 5 }, // fuck your mother (vulgar variant)
  "肏你大爷": { s: 3, c: 5 }, // fuck your uncle/grandpa (vulgar variant)

  // 逼 compounds
  "苦逼": { s: 3, c: 5 }, // miserable / pathetic
  "死逼": { s: 5, c: 5 }, // dead cunt
  "破逼": { s: 5, c: 5 }, // worn-out cunt
  "烂逼": { s: 5, c: 5 }, // rotten cunt
  "好逼": { s: 5, c: 5 }, // good cunt
  "你妈逼": { s: 5, c: 5 }, // your mother's cunt
  "逼样": { s: 5, c: 5 }, // cunt-face
  "二B": { s: 1, c: 4 }, // stupid cunt (variant abbreviation)
  "老逼": { s: 5, c: 5 }, // old cunt
  "嫩逼": { s: 5, c: 5 }, // young cunt
  "小逼": { s: 5, c: 5 }, // little cunt
  "屄": { s: 5, c: 5 }, // cunt (archaic character)
  "傻B": { s: 1, c: 4 }, // stupid cunt (abbreviation)

  // Insults (additional)
  "脑残": { s: 1, c: 4 }, // brain-damaged / retard
  "智障": { s: 1, c: 4 }, // mentally disabled (used as insult)
  "弱智": { s: 1, c: 4 }, // mentally weak / retard
  "傻子": { s: 1, c: 4 }, // fool / idiot
  "笨蛋": { s: 1, c: 4 }, // dummy / fool
  "蠢猪": { s: 1, c: 4 }, // stupid pig
  "蠢驴": { s: 1, c: 4 }, // stupid donkey
  "猪头": { s: 1, c: 4 }, // pig head / idiot
  "狗腿子": { s: 1, c: 4 }, // lackey / running dog
  "走狗": { s: 1, c: 4 }, // lackey / running dog
  "汉奸": { s: 1, c: 4 }, // traitor (to Chinese people)
  "卖国贼": { s: 1, c: 4 }, // traitor (to one's country)
  "人渣": { s: 1, c: 4 }, // scum / human trash
  "败类": { s: 1, c: 4 }, // scum / degenerate
  "饭桶": { s: 1, c: 4 }, // good-for-nothing (lit. rice bucket)
  "草包": { s: 1, c: 4 }, // good-for-nothing (lit. straw bag)
  "窝囊废": { s: 1, c: 4 }, // coward / wimp
  "下三滥": { s: 1, c: 4 }, // lowlife / sleazy
  "不要脸": { s: 1, c: 4 }, // shameless
  "臭不要脸": { s: 1, c: 4 }, // utterly shameless
  "无耻": { s: 1, c: 4 }, // shameless / despicable
  "恬不知耻": { s: 1, c: 4 }, // brazenly shameless
  "狗东西": { s: 1, c: 4 }, // dog thing (insult)
  "狗杂种": { s: 1, c: 4 }, // dog mongrel
  "龟儿子": { s: 1, c: 4 }, // son of a turtle (insult)
  "龟孙子": { s: 1, c: 4 }, // grandson of a turtle (insult)
  "龟孙": { s: 1, c: 4 }, // turtle grandson (insult)
  "王八": { s: 1, c: 4 }, // turtle / cuckold (insult)
  "王八羔子": { s: 1, c: 4 }, // son of a turtle (insult)
  "小王八蛋": { s: 1, c: 4 }, // little son of a bitch
  "臭流氓": { s: 1, c: 4 }, // stinky hooligan
  "流氓": { s: 1, c: 4 }, // hooligan / thug
  "地痞": { s: 1, c: 4 }, // local thug / ruffian
  "痞子": { s: 1, c: 4 }, // ruffian / scoundrel
  "二百五": { s: 1, c: 4 }, // idiot (lit. 250)
  "蠢材": { s: 1, c: 4 }, // stupid person / blockhead
  "呆逼": { s: 1, c: 4 }, // dumb cunt
  "死鬼": { s: 1, c: 4 }, // damn ghost (term of annoyance)
  "死胖子": { s: 1, c: 4 }, // fat ass / die fatty
  "丑八怪": { s: 1, c: 4 }, // ugly freak
  "老不死": { s: 5, c: 5 }, // old and won't die (insult to elderly)
  "老东西": { s: 1, c: 4 }, // old thing (insult to elderly)
  "老废物": { s: 1, c: 4 }, // old useless person
  "狗崽子": { s: 1, c: 4 }, // puppy / son of a dog
  "野种": { s: 3, c: 4 }, // illegitimate child / bastard
  "私生子": { s: 1, c: 4 }, // illegitimate child
  "小杂种": { s: 3, c: 4 }, // little mongrel / bastard
  "缺德": { s: 1, c: 4 }, // immoral / wicked
  "损种": { s: 1, c: 4 }, // wicked person
  "孙子": { s: 1, c: 4 }, // grandson (used as insult, submissive)

  // Sexual terms (additional)
  "鸡": { s: 5, c: 4 }, // prostitute (slang)
  "嫖": { s: 5, c: 4 }, // to solicit a prostitute
  "嫖娼": { s: 5, c: 4 }, // to visit a prostitute
  "卖淫": { s: 5, c: 4 }, // prostitution
  "淫荡": { s: 4, c: 4 }, // lewd / lascivious
  "淫乱": { s: 4, c: 4 }, // promiscuous / debauched
  "淫秽": { s: 4, c: 4 }, // obscene / pornographic
  "骚": { s: 4, c: 4 }, // slutty / flirtatious
  "骚逼": { s: 5, c: 5 }, // slutty cunt
  "骚狐狸": { s: 4, c: 4 }, // slutty fox / vixen
  "浪": { s: 4, c: 4 }, // slutty / loose
  "浪货": { s: 4, c: 4 }, // slut
  "浪逼": { s: 5, c: 5 }, // loose cunt
  "浪荡": { s: 4, c: 4 }, // dissolute / promiscuous
  "卖骚": { s: 4, c: 4 }, // to act slutty
  "发骚": { s: 4, c: 4 }, // to be in heat / act slutty
  "骚浪贱": { s: 4, c: 4 }, // slutty, loose, and cheap
  "鸡婆": { s: 5, c: 4 }, // prostitute / busybody
  "嫖客": { s: 5, c: 4 }, // john / prostitute's client
  "老鸨": { s: 4, c: 4 }, // madam (brothel keeper)
  "龟公": { s: 4, c: 4 }, // pimp (lit. male turtle)
  "拉皮条": { s: 4, c: 4 }, // to pimp
  "叫鸡": { s: 5, c: 4 }, // to call a prostitute
  "援交": { s: 5, c: 4 }, // compensated dating (prostitution)
  "卖肉": { s: 4, c: 4 }, // to sell one's body
  "操逼": { s: 4, c: 5 }, // to fuck (vulgar)
  "日逼": { s: 4, c: 5 }, // to fuck (vulgar variant)
  "干逼": { s: 4, c: 5 }, // to fuck (vulgar variant)
  "大鸡巴": { s: 4, c: 4 }, // big dick
  "鸡鸡": { s: 4, c: 4 }, // penis (childish)
  "阳具": { s: 4, c: 4 }, // phallus / penis (formal)
  "打炮": { s: 4, c: 4 }, // to have sex (slang)
  "约炮": { s: 4, c: 4 }, // hookup / booty call
  "炮友": { s: 4, c: 4 }, // friends with benefits
  "一夜情": { s: 4, c: 4 }, // one-night stand
  "做爱": { s: 4, c: 4 }, // to make love / have sex
  "性交": { s: 4, c: 4 }, // sexual intercourse
  "口交": { s: 4, c: 5 }, // oral sex
  "肛交": { s: 4, c: 4 }, // anal sex
  "强奸": { s: 5, c: 5 }, // rape
  "轮奸": { s: 5, c: 5 }, // gang rape
  "鸡奸": { s: 4, c: 4 }, // sodomy
  "乱伦": { s: 5, c: 5 }, // incest
  "兽交": { s: 5, c: 5 }, // bestiality
  "恋童癖": { s: 5, c: 5 }, // pedophilia
  "自慰": { s: 4, c: 4 }, // masturbation
  "打飞机": { s: 4, c: 4 }, // to masturbate (male, slang)
  "撸管": { s: 4, c: 4 }, // to masturbate (male, slang)
  "射精": { s: 4, c: 4 }, // ejaculation
  "潮吹": { s: 4, c: 4 }, // squirting
  "阴茎": { s: 4, c: 4 }, // penis

  // Cantonese profanity
  "仆街": { s: 3, c: 4 }, // drop dead / fall on the street
  "扑街": { s: 3, c: 4 }, // drop dead (variant)
  "冚家铲": { s: 3, c: 4 }, // may your whole family be wiped out
  "冚家富贵": { s: 5, c: 5 }, // may your whole family die (ironic)
  "丢你老母": { s: 3, c: 5 }, // fuck your mother (Cantonese)
  "丢那妈": { s: 3, c: 5 }, // fuck your mother (Cantonese variant)
  "丢那星": { s: 3, c: 5 }, // fuck your mother (Cantonese euphemism)
  "收皮": { s: 3, c: 4 }, // shut up / piss off
  "痴线": { s: 3, c: 4 }, // crazy / insane
  "黐线": { s: 3, c: 4 }, // crazy / insane (variant)
  "戆鸠": { s: 1, c: 4 }, // stupid dick
  "鸠": { s: 4, c: 4 }, // dick (Cantonese)
  "老母": { s: 3, c: 4 }, // your mother (Cantonese insult)
  "含家产": { s: 5, c: 5 }, // may your whole family die (variant)
  "食屎": { s: 3, c: 5 }, // eat shit
  "你老母": { s: 3, c: 4 }, // your mother (Cantonese insult)
  "戆居": { s: 1, c: 4 }, // stupid / foolish
  "七头": { s: 4, c: 4 }, // dickhead (Cantonese)
  "废柴": { s: 3, c: 4 }, // useless person (lit. waste firewood)
  "老坑": { s: 3, c: 4 }, // old fart (Cantonese)
  "八婆": { s: 3, c: 4 }, // gossipy woman / bitch
  "死八婆": { s: 3, c: 4 }, // damn gossipy bitch
  "死仔": { s: 3, c: 4 }, // damn boy
  "死女": { s: 3, c: 4 }, // damn girl
  "粉肠": { s: 1, c: 4 }, // idiot (Cantonese, lit. rice noodle roll)
  "咸湿": { s: 3, c: 4 }, // perverted / lecherous
  "衰人": { s: 3, c: 4 }, // awful person
  "衰仔": { s: 3, c: 4 }, // awful boy
  "衰婆": { s: 3, c: 4 }, // awful woman
  "柒头": { s: 4, c: 4 }, // dickhead (Cantonese variant)
  "碌鸠": { s: 4, c: 4 }, // dick (Cantonese)
  "含撚": { s: 4, c: 4 }, // suck dick (Cantonese)

  // Internet slang / abbreviations
  "TMD": { s: 2, c: 3 }, // ta ma de (damn it)
  "CNMB": { s: 5, c: 5 }, // cao ni ma bi (fuck your mother's cunt)
  "CNM": { s: 3, c: 5 }, // cao ni ma (fuck your mother)
  "NMB": { s: 5, c: 5 }, // ni ma bi (your mother's cunt)
  "NMSL": { s: 2, c: 3 }, // ni ma si le (your mother is dead)
  "WNM": { s: 3, c: 5 }, // wo ni ma (fuck, your mother)
  "MMP": { s: 2, c: 3 }, // ma mai pi (damn it, Sichuan dialect)
  "尼玛": { s: 2, c: 3 }, // your mother (euphemism)
  "你妈死了": { s: 2, c: 3 }, // your mother is dead
  "你全家死光": { s: 5, c: 5 }, // may your whole family die
  "去你大爷的": { s: 3, c: 5 }, // fuck off (lit. go to your uncle)
  "滚你妈的": { s: 3, c: 5 }, // fuck off (lit. roll your mother's)
  "他妈": { s: 2, c: 3 }, // his/her mother (damn)
  "特么的": { s: 2, c: 3 }, // damn it (euphemism for 他妈的)
  "卧槽": { s: 3, c: 5 }, // holy shit (euphemism for 我操)
  "握草": { s: 3, c: 5 }, // holy shit (euphemism variant)
  "我去年买了个表": { s: 3, c: 5 }, // fuck (coded phrase, acronym WQNMLGB)
  "日了狗": { s: 3, c: 5 }, // what the fuck (lit. fucked a dog)
  "艹": { s: 3, c: 5 }, // fuck (internet shorthand for 操)
  "干你妈": { s: 3, c: 5 }, // fuck your mother
  "干你娘": { s: 3, c: 5 }, // fuck your mother (variant)
  "什么玩意": { s: 2, c: 3 }, // what the hell / what kind of thing
  "脑子有病": { s: 2, c: 3 }, // something wrong with your brain

  // Taiwan / Hokkien
  "幹": { s: 3, c: 5 }, // fuck (traditional)
  "幹你娘": { s: 3, c: 5 }, // fuck your mother (Hokkien)
  "幹你媽": { s: 3, c: 5 }, // fuck your mother (traditional)
  "幹林娘": { s: 3, c: 5 }, // fuck your mother (Hokkien variant)
  "靠北": { s: 3, c: 5 }, // complain / bullshit (Hokkien)
  "靠腰": { s: 3, c: 4 }, // damn / complain (Hokkien)
  "靠夭": { s: 3, c: 5 }, // damn / bullshit (Hokkien variant)
  "機掰": { s: 5, c: 5 }, // cunt (Hokkien, traditional)
  "雞掰": { s: 5, c: 5 }, // cunt (Hokkien variant)
  "賤": { s: 3, c: 4 }, // cheap / despicable (traditional)
  "賤人": { s: 3, c: 4 }, // cheap/lowly person (traditional)
  "臭雞掰": { s: 5, c: 5 }, // stinky cunt (Hokkien)
  "死囡仔": { s: 3, c: 4 }, // damn kid (Hokkien)
  "幹拎娘": { s: 3, c: 5 }, // fuck your mother (Hokkien variant)
  "林北": { s: 1, c: 4 }, // your father (Hokkien, asserting dominance)
  "你娘": { s: 3, c: 4 }, // your mother (Hokkien insult)
  "番仔": { s: 3, c: 4 }, // barbarian / foreigner (derogatory)
  "三小": { s: 3, c: 4 }, // what the hell (Hokkien)
  "衝三小": { s: 3, c: 5 }, // what the fuck are you doing (Hokkien)
  "靠杯": { s: 3, c: 4 }, // damn / complain (Hokkien variant)

  // Regional insults
  "瓜娃子": { s: 1, c: 4 }, // idiot (Sichuan dialect)
  "瓜皮": { s: 1, c: 4 }, // idiot (Northwestern dialect)
  "锤子": { s: 4, c: 5 }, // dick / bullshit (Sichuan dialect)
  "哈麻批": { s: 1, c: 4 }, // stupid cunt (Sichuan dialect)
  "日妈": { s: 3, c: 5 }, // fuck your mother (regional)
  "龟儿": { s: 1, c: 4 }, // turtle's son (Sichuan insult)
  "瘪三": { s: 1, c: 4 }, // good-for-nothing (Shanghai dialect)
  "二流子": { s: 1, c: 4 }, // loafer / hooligan
  "小赤佬": { s: 3, c: 4 }, // little bastard (Shanghai dialect)
  "戳脊梁骨": { s: 1, c: 4 }, // to be cursed behind one's back
  "绿帽子": { s: 1, c: 4 }, // cuckold (lit. green hat)
  "戴绿帽": { s: 1, c: 4 }, // to be cuckolded
  "乌龟": { s: 1, c: 4 }, // turtle / cuckold
  "缩头乌龟": { s: 1, c: 4 }, // coward (lit. turtle hiding in shell)
  "软蛋": { s: 1, c: 4 }, // coward / wimp (lit. soft egg)
  "怂货": { s: 1, c: 4 }, // coward
  "怂逼": { s: 1, c: 4 }, // cowardly cunt
  "孬种": { s: 1, c: 4 }, // coward / weakling

  // Body parts vulgar (additional)
  "大逼": { s: 5, c: 5 }, // big cunt
  "骚穴": { s: 4, c: 3 }, // slutty hole
  "穴": { s: 4, c: 4 }, // hole (vulgar for vagina)
  "肉棒": { s: 4, c: 4 }, // meat stick (slang for penis)
  "菊花": { s: 4, c: 4 }, // chrysanthemum (slang for anus)
  "大波": { s: 4, c: 3 }, // big boobs
  "奶子": { s: 4, c: 3 }, // boobs / tits
  "咪咪": { s: 4, c: 4 }, // boobs (childish/slang)

  // 操 compounds (additional)
  "操你奶奶": { s: 3, c: 5 }, // fuck your grandmother
  "操你姐": { s: 3, c: 5 }, // fuck your sister
  "操你妹": { s: 3, c: 5 }, // fuck your younger sister
  "操你老师": { s: 3, c: 5 }, // fuck your teacher
  "操死你": { s: 5, c: 5 }, // fuck you to death
  "操烂你": { s: 3, c: 5 }, // fuck you to ruin
  "操翻你": { s: 3, c: 5 }, // fuck you over
  "操你十八代祖宗": { s: 3, c: 5 }, // fuck your 18 generations of ancestors
  "操遍你全家": { s: 3, c: 5 }, // fuck everyone in your family
  "操比": { s: 5, c: 5 }, // fuck cunt (variant spelling)
  "操逼的": { s: 5, c: 5 }, // the one who fucks cunts
  "操鸡巴": { s: 4, c: 5 }, // fuck dick (expletive)
  "被操": { s: 3, c: 5 }, // get fucked
  "让你操": { s: 3, c: 5 }, // let you fuck
  "我肏": { s: 3, c: 5 }, // holy fuck (vulgar variant)

  // 逼 compounds (additional)
  "狗逼": { s: 5, c: 5 }, // dog cunt
  "穷逼": { s: 5, c: 5 }, // poor cunt
  "丑逼": { s: 1, c: 4 }, // ugly cunt
  "蠢逼": { s: 1, c: 4 }, // stupid cunt
  "妈逼": { s: 5, c: 5 }, // mother's cunt
  "闷逼": { s: 5, c: 5 }, // depressed cunt
  "抠逼": { s: 5, c: 5 }, // cheap/stingy cunt
  "吹逼": { s: 3, c: 5 }, // to brag
  "蛋逼": { s: 3, c: 5 }, // annoying/nagging
  "逼脸": { s: 5, c: 5 }, // cunt face
  "逗逼": { s: 1, c: 4 }, // funny idiot
  "奇逼": { s: 5, c: 5 }, // weird cunt
  "牛B": { s: 3, c: 5 }, // fucking awesome (variant)
  "你妈B": { s: 5, c: 5 }, // your mom's cunt (abbreviation)
  "SB货": { s: 1, c: 4 }, // stupid cunt (internet)
  "大SB": { s: 1, c: 4 }, // big stupid cunt
  "NB闪闪": { s: 3, c: 5 }, // fucking awesome (internet slang)

  // 屌 compounds
  "屌丝": { s: 1, c: 4 }, // loser (lit. dick hair)
  "吊毛": { s: 1, c: 4 }, // pubic hair / loser (variant)
  "屌你": { s: 4, c: 5 }, // fuck you (dick you)
  "屌你老母": { s: 4, c: 5 }, // fuck your mother (dick your mother)
  "屌你妈": { s: 4, c: 5 }, // fuck your mother (dick)
  "屌死了": { s: 3, c: 5 }, // fucking amazing
  "屌爆了": { s: 3, c: 5 }, // fucking awesome
  "大屌": { s: 4, c: 5 }, // big dick
  "小屌": { s: 4, c: 5 }, // small dick
  "吊样": { s: 4, c: 5 }, // dick-like appearance (insult)
  "屌毛": { s: 3, c: 5 }, // pubic hair / worthless person
  "屌人": { s: 3, c: 5 }, // to scold someone
  "吊死你": { s: 3, c: 5 }, // hang you (insult)

  // Additional Cantonese profanity
  "戇撚": { s: 1, c: 4 }, // stupid dick (Cantonese)
  "撚样": { s: 4, c: 4 }, // dick-face (Cantonese)
  "仆你个街": { s: 3, c: 4 }, // drop dead on the street (Cantonese)
  "死仆街": { s: 3, c: 4 }, // damn drop dead (Cantonese)
  "冚家拎": { s: 3, c: 4 }, // your whole family (Cantonese curse)
  "食屎啦": { s: 3, c: 5 }, // eat shit (Cantonese)
  "你老豆": { s: 1, c: 4 }, // your father (Cantonese insult)
  "你老母臭閪": { s: 5, c: 5 }, // your mother's stinky cunt (Cantonese)
  "閪": { s: 5, c: 5 }, // cunt (Cantonese)
  "臭閪": { s: 5, c: 5 }, // stinky cunt (Cantonese)
  "死閪": { s: 5, c: 5 }, // damn cunt (Cantonese)
  "撚": { s: 4, c: 4 }, // dick (Cantonese)
  "㞗": { s: 4, c: 4 }, // dick (Cantonese variant character)
  "丢你": { s: 3, c: 5 }, // fuck you (Cantonese short form)
  "丢雷楼母": { s: 3, c: 5 }, // fuck your mother (Cantonese variant)
  "丢佢老母": { s: 3, c: 5 }, // fuck his/her mother (Cantonese)
  "扑你个街": { s: 3, c: 4 }, // drop dead (Cantonese variant)
  "死蠢": { s: 1, c: 4 }, // damn stupid (Cantonese)
  "死肥仔": { s: 1, c: 4 }, // fat bastard (Cantonese)
  "死肥婆": { s: 1, c: 4 }, // fat bitch (Cantonese)
  "死佬": { s: 3, c: 4 }, // damn man (Cantonese)
  "冚家铲泥路": { s: 5, c: 5 }, // may your whole family die (Cantonese extended)
  "含柒": { s: 4, c: 4 }, // suck dick (Cantonese variant)
  "戆鸠鸠": { s: 1, c: 4 }, // very stupid (Cantonese)
  "黐孖筋": { s: 3, c: 4 }, // crazy (Cantonese variant)
  "你條仆街": { s: 3, c: 4 }, // you drop-dead bastard (Cantonese)
  "收档啦": { s: 3, c: 4 }, // piss off (Cantonese)
  "闩水喉": { s: 3, c: 4 }, // shut up (Cantonese vulgar)
  "咸家铲": { s: 3, c: 4 }, // curse whole family (Cantonese variant)
  "叼你": { s: 3, c: 5 }, // fuck you (Cantonese variant)
  "叼你老母": { s: 3, c: 5 }, // fuck your mother (Cantonese variant)
  "你阿妈": { s: 3, c: 4 }, // your mother (Cantonese insult)
  "食你老母": { s: 3, c: 4 }, // eat your mother (Cantonese vulgar)
  "冚把啦": { s: 3, c: 4 }, // all of them (Cantonese insult)
  "仆你个死街": { s: 3, c: 4 }, // drop dead on the damn street (Cantonese)
  "傻閪": { s: 1, c: 4 }, // stupid cunt (Cantonese)
  "碌七": { s: 4, c: 4 }, // dick (Cantonese variant)
  "含碌": { s: 4, c: 4 }, // suck dick (Cantonese)
  "柒头皮": { s: 4, c: 4 }, // dickhead (Cantonese extended)
  "死蛋家": { s: 3, c: 4 }, // damn (Cantonese)
  "生旧叉烧好过生你": { s: 3, c: 4 }, // better to have given birth to BBQ pork than you (Cantonese)
  "你个衰人": { s: 3, c: 4 }, // you awful person (Cantonese)
  "死变态": { s: 3, c: 4 }, // damn pervert (Cantonese)

  // Shanghainese profanity
  "册那": { s: 3, c: 5 }, // fuck (Shanghainese)
  "册那妈": { s: 3, c: 5 }, // fuck your mother (Shanghainese)
  "赤佬": { s: 3, c: 4 }, // bastard (Shanghainese)
  "十三点": { s: 1, c: 4 }, // crazy/stupid (Shanghainese)
  "小娘皮": { s: 3, c: 4 }, // little slut (Shanghainese)
  "戆大": { s: 1, c: 4 }, // big idiot (Shanghainese)
  "寿头": { s: 1, c: 4 }, // idiot (Shanghainese)
  "寿头寿脑": { s: 1, c: 4 }, // idiotic (Shanghainese)
  "触气": { s: 3, c: 4 }, // annoying (Shanghainese)
  "猪头三": { s: 3, c: 4 }, // pig head (Shanghainese insult)
  "小瘪三": { s: 3, c: 4 }, // little good-for-nothing (Shanghainese)
  "娘希匹": { s: 3, c: 5 }, // fuck your mother (Shanghainese)
  "那摩温": { s: 3, c: 4 }, // asshole (Shanghainese)
  "棺材板": { s: 3, c: 4 }, // coffin board (Shanghainese curse)
  "伊娘": { s: 3, c: 4 }, // his/her mother (Shanghainese curse)
  "侬脑子瓦特了": { s: 3, c: 4 }, // your brain is broken (Shanghainese)
  "港督": { s: 1, c: 3 }, // stupid (Shanghainese slang)
  "阿乌卵": { s: 3, c: 4 }, // dimwit (Shanghainese)

  // Sichuanese / Southwestern profanity
  "瓜批": { s: 1, c: 4 }, // stupid cunt (Sichuanese)
  "日你仙人板板": { s: 3, c: 5 }, // fuck your ancestors (Sichuanese)
  "日你先人": { s: 3, c: 5 }, // fuck your ancestors (Sichuanese variant)
  "妈卖批": { s: 5, c: 5 }, // mother sells cunt (Sichuanese)
  "卖批": { s: 5, c: 5 }, // selling cunt (Sichuanese)
  "麻批": { s: 5, c: 5 }, // cunt (Sichuanese)
  "龟儿子的": { s: 3, c: 4 }, // son of a turtle (Sichuanese)
  "狗日": { s: 3, c: 5 }, // dog-fucked (Sichuanese)
  "格老子": { s: 3, c: 4 }, // damn it (Sichuanese)
  "批话": { s: 3, c: 5 }, // bullshit (Sichuanese)
  "批事": { s: 5, c: 5 }, // cunt business (Sichuanese)
  "瓜兮兮": { s: 1, c: 4 }, // being stupid (Sichuanese)
  "日妈批": { s: 5, c: 5 }, // fuck your mother's cunt (Sichuanese)
  "戳拐": { s: 1, c: 4 }, // clumsy / stupid (Sichuanese)
  "瓜眉日眼": { s: 1, c: 4 }, // stupid looking (Sichuanese)
  "瓜裹裹": { s: 1, c: 4 }, // very stupid (Sichuanese)
  "勾子": { s: 3, c: 4 }, // ass (Sichuanese)
  "哈戳戳": { s: 1, c: 4 }, // extremely stupid (Sichuanese)
  "龟儿龟孙": { s: 3, c: 4 }, // turtle son turtle grandson (Sichuanese double insult)
  "锤子锤子": { s: 3, c: 5 }, // bullshit bullshit (Sichuanese emphasis)

  // Northeastern (东北) profanity
  "彪": { s: 1, c: 4 }, // crazy/stupid (Northeastern)
  "虎": { s: 1, c: 4 }, // stupid/reckless (Northeastern)
  "滚犊子": { s: 3, c: 4 }, // get lost (Northeastern)
  "你大爷的": { s: 3, c: 4 }, // your uncle's (Northeastern expletive)
  "你大爷": { s: 3, c: 4 }, // your uncle (Northeastern)
  "傻了吧唧": { s: 1, c: 4 }, // idiotic (Northeastern)
  "二椅子": { s: 3, c: 4 }, // neither man nor woman (Northeastern insult)
  "臭不要脸的": { s: 3, c: 4 }, // shameless (Northeastern variant)
  "嘎哈呢": { s: 3, c: 4 }, // what the hell are you doing (Northeastern)
  "削你": { s: 3, c: 4 }, // beat you up (Northeastern)
  "抽你": { s: 3, c: 4 }, // slap you (Northeastern)
  "秃撸反涨": { s: 3, c: 4 }, // unreliable (Northeastern)
  "破鞋": { s: 3, c: 4 }, // slut (lit. broken shoe, Northeastern)
  "老疙瘩": { s: 3, c: 4 }, // youngest child (can be insult)
  "犊子": { s: 3, c: 4 }, // calf / bastard (Northeastern)
  "你个犊子": { s: 3, c: 4 }, // you bastard (Northeastern)
  "扯犊子": { s: 3, c: 4 }, // talking nonsense (Northeastern)
  "磨叽": { s: 3, c: 4 }, // nagging / annoying (Northeastern)
  "得瑟": { s: 3, c: 4 }, // showing off / annoying (Northeastern)
  "嘚瑟": { s: 3, c: 4 }, // showing off (Northeastern variant)
  "妈了个巴子": { s: 5, c: 5 }, // motherfucker (Northeastern)
  "妈了巴子": { s: 5, c: 5 }, // motherfucker (Northeastern variant)
  "傻不拉几": { s: 1, c: 4 }, // very stupid (Northeastern)
  "虎了吧唧": { s: 1, c: 4 }, // recklessly stupid (Northeastern)
  "埋汰": { s: 3, c: 4 }, // dirty / disgusting (Northeastern)
  "赖皮狗": { s: 3, c: 4 }, // shameless dog (Northeastern)
  "嗑碜": { s: 1, c: 4 }, // ugly (Northeastern)
  "膈应": { s: 3, c: 4 }, // disgusting (Northeastern)
  "老嗑碜了": { s: 1, c: 4 }, // very ugly (Northeastern)
  "松货": { s: 1, c: 4 }, // loose woman / coward (Northeastern)

  // Hokkien/Minnan (additional)
  "肖查某": { s: 3, c: 4 }, // crazy woman (Hokkien)
  "靠邀": { s: 3, c: 5 }, // damn/bullshit (Hokkien)
  "靠爸": { s: 3, c: 4 }, // damn (Hokkien, lit. cry for dad)
  "靠母": { s: 3, c: 4 }, // damn (Hokkien, lit. cry for mom)
  "干恁娘": { s: 3, c: 5 }, // fuck your mother (Hokkien variant)
  "恁爸": { s: 1, c: 4 }, // your father (Hokkien, asserting dominance)
  "恁娘": { s: 3, c: 4 }, // your mother (Hokkien insult)
  "恁娘咧": { s: 3, c: 4 }, // your mother (Hokkien extended)
  "林老师": { s: 1, c: 4 }, // your father (Hokkien euphemism for 林北)
  "死猴": { s: 3, c: 4 }, // damn monkey (Hokkien insult)
  "夭寿": { s: 3, c: 4 }, // short-lived / damn (Hokkien)
  "夭寿仔": { s: 3, c: 4 }, // damn kid (Hokkien)
  "死番仔": { s: 3, c: 4 }, // damn barbarian (Hokkien)
  "猪哥": { s: 3, c: 4 }, // perverted man (Hokkien)
  "膨风": { s: 3, c: 4 }, // blowhard / braggart (Hokkien)
  "白目": { s: 3, c: 4 }, // clueless / annoying (Hokkien)
  "目屎": { s: 3, c: 4 }, // crybaby (Hokkien)
  "赤查某": { s: 3, c: 4 }, // shameless woman (Hokkien)
  "查某人": { s: 3, c: 4 }, // woman (Hokkien, can be derogatory)
  "死査某": { s: 3, c: 4 }, // damn woman (Hokkien)
  "肖年仔": { s: 3, c: 4 }, // crazy kid (Hokkien)
  "垃圾": { s: 3, c: 4 }, // garbage (Hokkien insult)
  "无路用": { s: 3, c: 4 }, // useless (Hokkien)

  // Hakka profanity
  "屌你阿姆": { s: 3, c: 5 }, // fuck your mother (Hakka)
  "屌那妈": { s: 3, c: 5 }, // fuck your mother (Hakka variant)
  "食屎狗": { s: 3, c: 5 }, // eat-shit dog (Hakka)
  "畜牲": { s: 3, c: 4 }, // beast (Hakka variant of 畜生)
  "你姆个": { s: 3, c: 4 }, // your mother's (Hakka)
  "死嫲": { s: 3, c: 4 }, // damn old woman (Hakka)
  "死公": { s: 3, c: 4 }, // damn old man (Hakka)
  "臭狗屎": { s: 3, c: 5 }, // stinky dog shit (Hakka)
  "番狗": { s: 3, c: 4 }, // foreign dog (Hakka insult)
  "阿姆个逼": { s: 5, c: 5 }, // your mother's cunt (Hakka)
  "打你阿姆": { s: 3, c: 4 }, // hit your mother (Hakka)
  "死猴精": { s: 3, c: 4 }, // damn monkey spirit (Hakka)
  "矮仔冬瓜": { s: 3, c: 4 }, // short winter melon (Hakka insult)

  // Internet slang / euphemisms (additional)
  "滚": { s: 2, c: 3 }, // get lost
  "滚蛋": { s: 2, c: 3 }, // get lost (lit. roll egg)
  "滚开": { s: 2, c: 3 }, // get lost / go away
  "滚你的": { s: 2, c: 3 }, // get the hell out
  "去死吧": { s: 5, c: 5 }, // go die
  "找死": { s: 5, c: 5 }, // looking for death
  "作死": { s: 5, c: 5 }, // courting death
  "我了个去": { s: 2, c: 3 }, // what the hell (euphemism)
  "我去": { s: 2, c: 3 }, // what the hell (short euphemism)
  "河蟹": { s: 2, c: 3 }, // censored (homophone for 和谐 harmonize)
  "我擦": { s: 2, c: 3 }, // holy crap (euphemism for 我操)
  "我靠": { s: 2, c: 3 }, // holy crap (variant euphemism)
  "靠": { s: 2, c: 3 }, // damn (short form)
  "尻": { s: 3, c: 5 }, // ass/fuck (variant character)
  "妈蛋": { s: 2, c: 3 }, // damn it (mom egg)
  "狗币": { s: 2, c: 3 }, // dog coin (euphemism for 狗逼)
  "牛掰": { s: 3, c: 5 }, // fucking awesome (euphemism for 牛逼)
  "我勒个去": { s: 2, c: 3 }, // what the hell (extended)
  "你妹": { s: 2, c: 3 }, // your sister (euphemism for dismissal)
  "你妹的": { s: 2, c: 3 }, // your sister's (expletive)
  "你大姨妈": { s: 2, c: 3 }, // your aunt (menstruation) (insult)
  "去你的": { s: 2, c: 3 }, // screw you
  "去你大爷": { s: 2, c: 3 }, // go to your uncle (expletive)
  "药店碧莲": { s: 2, c: 3 }, // shameless (internet pun: 要点逼脸)
  "然并卵": { s: 2, c: 3 }, // but it's useless (internet slang)
  "日了哈士奇了": { s: 3, c: 5 }, // what the fuck (variant)
  "我次奥": { s: 3, c: 5 }, // what the fuck (euphemism)
  "握了个草": { s: 3, c: 5 }, // holy shit (extended euphemism)
  "卧了个槽": { s: 3, c: 5 }, // holy shit (extended variant)
  "你麻痹": { s: 2, c: 3 }, // your paralysis (euphemism for 你妈逼)
  "麻痹": { s: 2, c: 3 }, // paralysis (euphemism for 妈逼)
  "尼玛死了": { s: 2, c: 3 }, // your mother died (euphemism)
  "WDNMD": { s: 2, c: 3 }, // wo de ni ma de (internet abbreviation)
  "DLLM": { s: 2, c: 3 }, // diu lei lou mou (Cantonese romanized abbreviation)
  "GDX": { s: 2, c: 3 }, // gou dong xi (dog thing, abbreviation)
  "RNM": { s: 3, c: 5 }, // ri ni ma (fuck your mother, abbreviation)
  "RNMB": { s: 5, c: 5 }, // ri ni ma bi (fuck your mother's cunt, abbreviation)
  "WTM": { s: 3, c: 5 }, // wo ta ma (fucking, abbreviation)

  // Homophobic slurs
  "死基佬": { s: 5, c: 4 }, // damn faggot
  "娘炮": { s: 5, c: 4 }, // sissy / effeminate man
  "死人妖": { s: 5, c: 4 }, // damn ladyboy
  "人妖": { s: 5, c: 4 }, // ladyboy / transgender (derogatory)
  "同性恋": { s: 5, c: 4 }, // homosexual (used derogatorily)
  "搞基": { s: 5, c: 4 }, // to be gay (derogatory)
  "玻璃": { s: 5, c: 4 }, // glass (slang for gay)
  "兔子": { s: 5, c: 4 }, // rabbit (old slang for gay)
  "断背": { s: 5, c: 4 }, // brokeback (gay slur from movie)
  "断袖": { s: 5, c: 4 }, // cut sleeve (classical term for homosexual, used derogatorily)
  "娘娘腔": { s: 5, c: 4 }, // sissy voice
  "阴阳人": { s: 5, c: 4 }, // intersex/hermaphrodite (insult)
  "不男不女": { s: 5, c: 4 }, // neither man nor woman
  "死gay": { s: 5, c: 4 }, // damn gay
  "搞基的": { s: 5, c: 4 }, // the gay one (derogatory)
  "男同": { s: 5, c: 4 }, // male homosexual (used derogatorily)
  "女同": { s: 5, c: 4 }, // lesbian (used derogatorily)
  "拉拉": { s: 5, c: 4 }, // lesbian (sometimes derogatory)
  "男妓": { s: 5, c: 4 }, // male prostitute
  "鸭子": { s: 5, c: 4 }, // duck (male prostitute slang)

  // Ethnic/discriminatory terms
  "蝗虫": { s: 5, c: 4 }, // locust (derogatory for mainlanders in HK)
  "支那": { s: 5, c: 5 }, // China (WWII-era Japanese slur, extremely offensive)
  "支那人": { s: 5, c: 5 }, // Chinese person (extremely offensive slur)
  "东亚病夫": { s: 5, c: 4 }, // sick man of East Asia (offensive)
  "鬼子": { s: 5, c: 4 }, // devil (derogatory for Japanese)
  "小日本": { s: 5, c: 4 }, // little Japan (derogatory)
  "日本鬼子": { s: 5, c: 4 }, // Japanese devils
  "高丽棒子": { s: 5, c: 4 }, // Korean stick (derogatory for Koreans)
  "棒子": { s: 5, c: 4 }, // stick (derogatory for Koreans)
  "阿三": { s: 5, c: 4 }, // Ah San (derogatory for Indians)
  "印度阿三": { s: 5, c: 4 }, // Indian Ah San (derogatory)
  "白皮猪": { s: 5, c: 4 }, // white pig
  "洋鬼子": { s: 5, c: 4 }, // foreign devil
  "红毛": { s: 5, c: 4 }, // red hair (derogatory for Westerners)
  "番鬼": { s: 5, c: 4 }, // foreign ghost (Cantonese derogatory)
  "死鬼佬": { s: 5, c: 4 }, // damn foreigner (Cantonese)
  "鬼佬": { s: 5, c: 4 }, // foreigner (Cantonese, can be derogatory)
  "北佬": { s: 5, c: 4 }, // northern person (Cantonese derogatory)
  "南蛮子": { s: 5, c: 4 }, // southern barbarian
  "乡巴佬": { s: 5, c: 4 }, // country bumpkin
  "土包子": { s: 5, c: 4 }, // hillbilly / country bumpkin
  "外地人": { s: 5, c: 4 }, // outsider (used derogatorily)

  // Traditional Chinese variants (Taiwan/HK)
  "幹你爸": { s: 1, c: 4 }, // fuck your father (traditional)
  "幹死你": { s: 5, c: 5 }, // fuck you to death (traditional)
  "媽的": { s: 3, c: 4 }, // damn (traditional)
  "他媽的": { s: 3, c: 4 }, // damn it (traditional)
  "去你媽的": { s: 3, c: 5 }, // fuck off (traditional)
  "賤貨": { s: 3, c: 4 }, // cheap slut (traditional)
  "蕩婦": { s: 5, c: 4 }, // whore (traditional)
  "龜頭": { s: 4, c: 4 }, // dickhead (traditional)
  "操你媽": { s: 3, c: 5 }, // fuck your mother (traditional)
  "雜種": { s: 3, c: 4 }, // bastard/mongrel (traditional)
  "廢物": { s: 3, c: 4 }, // trash (traditional)
  "白癡": { s: 1, c: 4 }, // idiot (traditional)
  "變態": { s: 3, c: 4 }, // pervert (traditional)
  "腦殘": { s: 3, c: 4 }, // brain damaged (traditional)
  "傻屄": { s: 1, c: 4 }, // stupid cunt (traditional variant)
  "臭機掰": { s: 5, c: 5 }, // stinky cunt (Hokkien variant)
  "幹你老師": { s: 3, c: 5 }, // fuck your teacher (Hokkien euphemism)
  "幹拎老師": { s: 3, c: 5 }, // fuck your teacher (Hokkien variant euphemism)
  "哩公蝦毀": { s: 3, c: 4 }, // what the hell are you saying (Hokkien)
  "死好": { s: 5, c: 5 }, // serves you right to die (traditional/Cantonese)

  // Additional sexual terms
  "肉便器": { s: 4, c: 4 }, // human toilet (extreme insult)
  "性奴": { s: 4, c: 4 }, // sex slave
  "淫妇": { s: 4, c: 4 }, // lewd woman
  "淫娃": { s: 4, c: 4 }, // lewd girl
  "骚女": { s: 4, c: 4 }, // slutty girl
  "骚男": { s: 4, c: 4 }, // slutty man
  "色狼": { s: 4, c: 4 }, // pervert (lit. color wolf)
  "色鬼": { s: 4, c: 4 }, // sex fiend
  "色魔": { s: 4, c: 4 }, // sex demon
  "老色鬼": { s: 4, c: 4 }, // old pervert
  "采花贼": { s: 4, c: 4 }, // sexual predator (lit. flower-picking thief)
  "偷腥": { s: 4, c: 4 }, // to cheat sexually
  "包二奶": { s: 4, c: 4 }, // to keep a mistress
  "二奶": { s: 4, c: 4 }, // mistress
  "小三": { s: 4, c: 4 }, // mistress / homewrecker
  "劈腿": { s: 4, c: 4 }, // to cheat (lit. split legs)
  "出轨": { s: 4, c: 4 }, // to cheat on partner
  "野鸡": { s: 5, c: 4 }, // wild chicken (prostitute)
  "站街": { s: 5, c: 4 }, // street prostitute
  "失足妇女": { s: 5, c: 4 }, // fallen woman (euphemism for prostitute)
  "三陪": { s: 5, c: 4 }, // escort (hostess/prostitute)
  "开房": { s: 4, c: 4 }, // to get a room (sexual connotation)
  "打野战": { s: 4, c: 4 }, // outdoor sex
  "颜射": { s: 4, c: 4 }, // facial (sexual act)
  "中出": { s: 4, c: 4 }, // creampie (sexual)
  "内射": { s: 4, c: 4 }, // internal ejaculation
  "群交": { s: 4, c: 4 }, // group sex

  // Additional body part vulgarities
  "臭穴": { s: 4, c: 3 }, // stinky hole
  "烂穴": { s: 4, c: 3 }, // rotten hole
  "小穴": { s: 4, c: 3 }, // little hole
  "嫩穴": { s: 4, c: 3 }, // tender hole
  "肉穴": { s: 4, c: 3 }, // flesh hole
  "马眼": { s: 4, c: 4 }, // urethral opening (vulgar)
  "大胸": { s: 4, c: 3 }, // big breasts (objectifying)
  "巨乳": { s: 4, c: 3 }, // huge breasts
  "贫乳": { s: 4, c: 3 }, // flat chest (insult)
  "飞机场": { s: 4, c: 3 }, // airport (flat chest insult)
  "大屁股": { s: 4, c: 3 }, // big ass
  "肥婆": { s: 1, c: 4 }, // fat woman
  "肥仔": { s: 1, c: 4 }, // fat boy
  "包皮": { s: 4, c: 4 }, // foreskin (vulgar usage)

  // Death/violence threats used as profanity
  "弄死你": { s: 5, c: 5 }, // I'll kill you
  "整死你": { s: 5, c: 5 }, // I'll get you killed
  "打死你": { s: 5, c: 5 }, // beat you to death
  "杀了你": { s: 5, c: 5 }, // kill you
  "剁了你": { s: 5, c: 5 }, // chop you up
  "活该": { s: 5, c: 5 }, // serves you right
  "该死": { s: 5, c: 5 }, // damn / deserve to die
  "死全家": { s: 5, c: 5 }, // die whole family
  "全家死光光": { s: 5, c: 5 }, // may your whole family die
  "断子绝孙": { s: 5, c: 5 }, // may your line end
  "不得好死": { s: 5, c: 5 }, // may you not die well
  "天打雷劈": { s: 5, c: 5 }, // may heaven strike you with lightning
  "遭报应": { s: 5, c: 5 }, // you'll get your karma

  // Additional internet censorship circumventions
  "NMDB": { s: 5, c: 5 }, // ni ma de bi (your mother's cunt, abbreviation)
  "日MLGB": { s: 3, c: 5 }, // ri ma le ge bi (fuck, abbreviation)
  "尼马": { s: 2, c: 3 }, // your mother (variant euphemism)
  "泥马": { s: 2, c: 3 }, // your mother (variant euphemism)
  "你嘛": { s: 2, c: 3 }, // your mother (variant euphemism)
  "马勒戈壁": { s: 3, c: 5 }, // fuck (euphemism: Malgobi desert)
  "法克": { s: 3, c: 5 }, // fuck (transliteration)
  "法克鱿": { s: 3, c: 5 }, // fuck you (transliteration)
  "妈勒个逼": { s: 5, c: 5 }, // mother's cunt (euphemism variant)
  "吗勒个逼": { s: 5, c: 5 }, // mother's cunt (variant)
  "要你命三千": { s: 5, c: 5 }, // want your life 3000 (internet threat slang)

  // Pinyin romanization (people type in pinyin)
  "cao ni ma": { s: 3, c: 5 }, // fuck your mother
  "cao ni": { s: 3, c: 5 }, // fuck you
  "cao": { s: 3, c: 5 }, // fuck
  "ri ni ma": { s: 3, c: 5 }, // fuck your mother
  "ri ni": { s: 3, c: 5 }, // fuck you
  "sha bi": { s: 1, c: 4 }, // stupid cunt
  "shabi": { s: 1, c: 4 }, // stupid cunt (no space)
  "gun dan": { s: 3, c: 4 }, // get lost (roll egg)
  "gundan": { s: 3, c: 4 }, // get lost (no space)
  "gun kai": { s: 3, c: 4 }, // go away
  "qu si": { s: 5, c: 5 }, // go die
  "qusi": { s: 5, c: 5 }, // go die (no space)
  "qu si ba": { s: 5, c: 5 }, // go die
  "qu ni ma de": { s: 3, c: 5 }, // fuck off
  "ta ma de": { s: 3, c: 4 }, // damn it
  "tamade": { s: 3, c: 4 }, // damn it (no space)
  "ma de": { s: 3, c: 4 }, // damn
  "wo cao": { s: 3, c: 5 }, // holy fuck
  "wocao": { s: 3, c: 5 }, // holy fuck (no space)
  "ni ma": { s: 3, c: 4 }, // your mother (vulgar)
  "nima": { s: 3, c: 4 }, // your mother (no space)
  "ni ma bi": { s: 5, c: 5 }, // your mother's cunt
  "nimabi": { s: 5, c: 5 }, // your mother's cunt (no space)
  "ni ma de": { s: 3, c: 4 }, // your mother's
  "nimade": { s: 3, c: 4 }, // your mother's (no space)
  "ji ba": { s: 4, c: 4 }, // dick
  "jiba": { s: 4, c: 4 }, // dick (no space)
  "gou ri de": { s: 3, c: 5 }, // son of a bitch (dog-fucked)
  "gouride": { s: 3, c: 4 }, // son of a bitch (no space)
  "gou niang yang de": { s: 3, c: 4 }, // son of a bitch
  "wang ba dan": { s: 3, c: 4 }, // son of a bitch
  "wangbadan": { s: 3, c: 4 }, // son of a bitch (no space)
  "hun dan": { s: 3, c: 4 }, // bastard
  "hundan": { s: 3, c: 4 }, // bastard (no space)
  "za zhong": { s: 3, c: 4 }, // bastard/mongrel
  "zazhong": { s: 3, c: 4 }, // bastard/mongrel (no space)
  "biao zi": { s: 5, c: 4 }, // bitch/whore
  "biaozi": { s: 5, c: 4 }, // bitch/whore (no space)
  "jian ren": { s: 3, c: 4 }, // cheap person
  "jianren": { s: 3, c: 4 }, // cheap person (no space)
  "jian huo": { s: 3, c: 4 }, // cheap slut
  "jianhuo": { s: 3, c: 4 }, // cheap slut (no space)
  "ben dan": { s: 3, c: 4 }, // dummy
  "bendan": { s: 3, c: 4 }, // dummy (no space)
  "chun huo": { s: 1, c: 4 }, // idiot
  "chunhuo": { s: 1, c: 4 }, // idiot (no space)
  "fei wu": { s: 3, c: 4 }, // trash/useless
  "feiwu": { s: 3, c: 4 }, // trash (no space)
  "bai chi": { s: 1, c: 4 }, // idiot
  "baichi": { s: 1, c: 4 }, // idiot (no space)
  "nao can": { s: 3, c: 4 }, // brain damaged
  "naocan": { s: 3, c: 4 }, // brain damaged (no space)
  "zhi zhang": { s: 3, c: 4 }, // mentally disabled (insult)
  "ruo zhi": { s: 3, c: 4 }, // mentally weak
  "bian tai": { s: 3, c: 4 }, // pervert
  "biantai": { s: 3, c: 4 }, // pervert (no space)
  "bu yao lian": { s: 3, c: 4 }, // shameless
  "wu chi": { s: 3, c: 4 }, // shameless
  "ren zha": { s: 3, c: 4 }, // scum
  "renzha": { s: 3, c: 4 }, // scum (no space)
  "sao huo": { s: 3, c: 4 }, // slut
  "saohuo": { s: 3, c: 4 }, // slut (no space)
  "dang fu": { s: 5, c: 4 }, // whore
  "dangfu": { s: 5, c: 4 }, // whore (no space)
  "mai yin": { s: 5, c: 4 }, // prostitution
  "piao chang": { s: 5, c: 4 }, // visit a prostitute
  "da fei ji": { s: 4, c: 4 }, // masturbate (male)
  "lu guan": { s: 4, c: 4 }, // masturbate (male)
  "yue pao": { s: 3, c: 4 }, // hookup
  "pao you": { s: 3, c: 4 }, // friends with benefits
  "xiao san": { s: 3, c: 4 }, // mistress
  "lv mao zi": { s: 3, c: 4 }, // cuckold (green hat)
  "si quan jia": { s: 5, c: 5 }, // die whole family
  "duan zi jue sun": { s: 3, c: 4 }, // may your line end
  "bu de hao si": { s: 5, c: 5 }, // may you not die well
  "nong si ni": { s: 3, c: 4 }, // I'll kill you
  "da si ni": { s: 5, c: 5 }, // beat you to death
  "sha le ni": { s: 3, c: 4 }, // kill you
  "gai si": { s: 5, c: 5 }, // deserve to die
  "zhao si": { s: 5, c: 5 }, // looking for death
  "zuo si": { s: 5, c: 5 }, // courting death
  "gun ni de": { s: 3, c: 5 }, // fuck off
  "gun ni ma de": { s: 3, c: 5 }, // fuck off (your mother)
  "cao dan": { s: 3, c: 5 }, // fucked up
  "wo ri": { s: 3, c: 5 }, // holy fuck
  "gan ni niang": { s: 3, c: 5 }, // fuck your mother (variant)
  "gan ni ma": { s: 3, c: 5 }, // fuck your mother
  "diao si": { s: 1, c: 4 }, // loser
  "diaosi": { s: 1, c: 4 }, // loser (no space)
  "niu bi": { s: 3, c: 5 }, // fucking awesome
  "niubi": { s: 3, c: 5 }, // fucking awesome (no space)
  "zhuang bi": { s: 3, c: 4 }, // pretentious
  "zhuangbi": { s: 3, c: 4 }, // pretentious (no space)
  "si bi": { s: 5, c: 5 }, // dead cunt
  "lan bi": { s: 5, c: 5 }, // rotten cunt
  "chou bi": { s: 5, c: 5 }, // stinky cunt
  "gou bi": { s: 5, c: 5 }, // dog cunt
  "qiong bi": { s: 5, c: 5 }, // poor cunt
  "chou biao zi": { s: 3, c: 4 }, // stinky bitch
  "chu sheng": { s: 5, c: 5 }, // beast (dehumanizing)
  "pi yan": { s: 3, c: 4 }, // asshole (butt eye)
  "gang men": { s: 3, c: 4 }, // anus
  "yin dao": { s: 4, c: 4 }, // vagina
  "yin jing": { s: 4, c: 4 }, // penis
  "gao wan": { s: 4, c: 4 }, // testicles
  "jing ye": { s: 3, c: 4 }, // semen
  "she jing": { s: 3, c: 4 }, // ejaculation
  "zi wei": { s: 4, c: 4 }, // masturbation
  "kou jiao": { s: 4, c: 5 }, // oral sex
  "gang jiao": { s: 3, c: 4 }, // anal sex
  "xing jiao": { s: 4, c: 4 }, // sexual intercourse
  "qiang jian": { s: 5, c: 5 }, // rape
  "lun jian": { s: 5, c: 5 }, // gang rape
  "luan lun": { s: 5, c: 5 }, // incest
  "shou jiao": { s: 5, c: 5 }, // bestiality
  "se lang": { s: 3, c: 4 }, // pervert
  "se gui": { s: 3, c: 4 }, // sex fiend
  "lao se gui": { s: 3, c: 4 }, // old pervert
  "se mo": { s: 3, c: 4 }, // sex demon
  "liu mang": { s: 3, c: 4 }, // hooligan
  "di pi": { s: 3, c: 4 }, // thug

  // Homophone evasions and internet circumventions
  "尼玛逼": { s: 5, c: 5 }, // your mother's cunt (euphemism)
  "泥马逼": { s: 5, c: 5 }, // your mother's cunt (euphemism)
  "尼马死了": { s: 2, c: 5 }, // your mother died (euphemism variant)
  "草尼马": { s: 3, c: 5 }, // fuck your mother (euphemism order variant)
  "糙你妈": { s: 3, c: 5 }, // fuck your mother (rough variant)
  "艹你妈": { s: 3, c: 5 }, // fuck your mother (internet shorthand)
  "艹你": { s: 3, c: 5 }, // fuck you (internet shorthand)
  "艹了": { s: 3, c: 5 }, // fucked (internet shorthand)
  "日尼玛": { s: 3, c: 5 }, // fuck your mother (euphemism)
  "你马": { s: 2, c: 5 }, // your mother (euphemism)
  "你麻": { s: 2, c: 5 }, // your mother (euphemism)
  "你马比": { s: 5, c: 5 }, // your mother's cunt (euphemism)
  "你麻比": { s: 5, c: 5 }, // your mother's cunt (euphemism)
  "你吗的": { s: 2, c: 5 }, // damn it (euphemism)
  "妈了个鸡": { s: 2, c: 5 }, // mother's chicken (euphemism)
  "我槽": { s: 3, c: 5 }, // holy shit (variant)
  "卧草": { s: 3, c: 5 }, // holy shit (euphemism)
  "卧曹": { s: 3, c: 5 }, // holy shit (euphemism variant)
  "我日了": { s: 3, c: 5 }, // holy fuck (variant)
  "你妈了个逼": { s: 5, c: 5 }, // your mother's cunt (extended)
  "尼妈逼": { s: 5, c: 5 }, // your mother's cunt (euphemism)
  "你妈了个B": { s: 5, c: 5 }, // your mother's cunt (mixed)
  "去尼玛的": { s: 3, c: 5 }, // fuck off (euphemism)
  "去泥马的": { s: 3, c: 5 }, // fuck off (euphemism)
  "QNMD": { s: 2, c: 5 }, // qu ni ma de (abbreviation)
  "QNMLGB": { s: 2, c: 5 }, // qu ni ma le ge bi (abbreviation)
  "TMB": { s: 2, c: 5 }, // ta ma bi (abbreviation)
  "GNM": { s: 2, c: 5 }, // gan ni ma (abbreviation)
  "GNMB": { s: 2, c: 5 }, // gan ni ma bi (abbreviation)
  "CCB": { s: 2, c: 5 }, // cao cao bi (abbreviation)

  // Internet slang and meme insults
  "绿茶婊": { s: 2, c: 3 }, // green tea bitch (fake innocent)
  "白莲花": { s: 2, c: 3 }, // white lotus (fake innocent)
  "圣母婊": { s: 2, c: 3 }, // holy mother bitch (virtue signaler)
  "心机婊": { s: 2, c: 3 }, // scheming bitch
  "绿茶": { s: 2, c: 3 }, // green tea (fake innocent, abbreviated)
  "白富美": { s: 2, c: 3 }, // white-rich-beautiful (used sarcastically)
  "高富帅": { s: 2, c: 3 }, // tall-rich-handsome (used sarcastically)
  "矮矬穷": { s: 1, c: 4 }, // short-ugly-poor
  "矮穷挫": { s: 1, c: 4 }, // short-poor-ugly (variant)
  "凤凰男": { s: 2, c: 3 }, // phoenix man (rural man marrying up, derogatory)
  "孔雀女": { s: 4, c: 3 }, // peacock woman (spoiled urban woman)
  "田园女权": { s: 2, c: 3 }, // pastoral feminism (derogatory)
  "直男癌": { s: 2, c: 3 }, // straight man cancer (insult for sexist men)
  "女拳": { s: 2, c: 3 }, // female fist (derogatory for feminist)
  "拳师": { s: 2, c: 3 }, // fist master (derogatory for feminist)
  "杠精": { s: 2, c: 3 }, // arguing spirit (contrarian)
  "键盘侠": { s: 2, c: 3 }, // keyboard warrior
  "喷子": { s: 2, c: 3 }, // troll / hater
  "水军": { s: 2, c: 3 }, // water army (paid trolls)
  "五毛": { s: 2, c: 3 }, // fifty cents (paid government commenter, derogatory)
  "五毛党": { s: 2, c: 3 }, // fifty-cent party (derogatory)
  "小粉红": { s: 2, c: 3 }, // little pinks (ultranationalists, derogatory)
  "粉红": { s: 2, c: 3 }, // pink (ultranationalist, derogatory)
  "公知": { s: 2, c: 3 }, // public intellectual (used derogatorily)
  "带路党": { s: 2, c: 3 }, // guide party (traitor)
  "精日": { s: 2, c: 3 }, // spiritual Japanese (traitor)
  "精美": { s: 2, c: 3 }, // spiritual American (traitor)
  "慕洋犬": { s: 2, c: 3 }, // foreign-worshipping dog
  "恨国党": { s: 2, c: 3 }, // hate-country party
  "舔狗": { s: 2, c: 3 }, // licking dog (simp)
  "舔": { s: 2, c: 3 }, // lick (simp)
  "海王": { s: 3, c: 5 }, // sea king (player/fuckboy)
  "渣男": { s: 2, c: 3 }, // scum man
  "渣女": { s: 2, c: 3 }, // scum woman
  "绿帽王": { s: 2, c: 3 }, // cuckold king
  "接盘侠": { s: 2, c: 3 }, // plate-catcher (man who dates single mothers, derogatory)
  "备胎": { s: 2, c: 3 }, // spare tire (backup option in dating)
  "添头": { s: 2, c: 3 }, // addition (unimportant person)
  "工具人": { s: 2, c: 3 }, // tool person (being used)
  "老六": { s: 2, c: 3 }, // old six (sneaky person)
  "狗腿": { s: 2, c: 3 }, // dog leg (lackey, abbreviated)
  "软饭男": { s: 2, c: 3 }, // soft rice man (kept man)
  "软饭": { s: 2, c: 3 }, // soft rice (living off partner)
  "吃软饭": { s: 2, c: 3 }, // eating soft rice (living off partner)
  "小白脸": { s: 2, c: 3 }, // pretty boy (kept man)
  "花花公子": { s: 2, c: 3 }, // playboy
  "臭老九": { s: 2, c: 3 }, // stinky old nine (intellectual insult)
  "二货": { s: 1, c: 4 }, // idiot
  "二逼青年": { s: 1, c: 4 }, // stupid cunt youth
  "智商欠费": { s: 1, c: 4 }, // IQ underpaid (stupid)
  "脑子进水": { s: 1, c: 4 }, // water in the brain (stupid)
  "脑子有坑": { s: 1, c: 4 }, // pit in the brain (stupid)
  "脑子有屎": { s: 1, c: 4 }, // shit in the brain (stupid)
  "脑袋被门挤了": { s: 1, c: 4 }, // head caught in door (stupid)
  "脑子被驴踢了": { s: 1, c: 4 }, // brain kicked by donkey (stupid)
  "你是不是傻": { s: 1, c: 4 }, // are you stupid
  "你有病吧": { s: 2, c: 3 }, // you're sick
  "你有毛病": { s: 2, c: 3 }, // you have problems
  "有病": { s: 2, c: 3 }, // you're sick (short)
  "脑瘫": { s: 2, c: 3 }, // cerebral palsy (used as insult)
  "自闭": { s: 2, c: 3 }, // autistic (used as insult)
  "弱鸡": { s: 1, c: 4 }, // weak chicken (weakling)
  "菜鸡": { s: 2, c: 3 }, // vegetable chicken (noob)
  "菜鸟": { s: 2, c: 3 }, // vegetable bird (noob)
  "菜狗": { s: 2, c: 3 }, // vegetable dog (noob)
  "菜逼": { s: 5, c: 5 }, // vegetable cunt (noob, vulgar)
  "战五渣": { s: 2, c: 3 }, // combat power 5 (useless, Dragon Ball reference)
  "辣鸡": { s: 2, c: 3 }, // spicy chicken (trash, homophone for 垃圾)
  "垃圾人": { s: 2, c: 3 }, // garbage person
  "垃圾货": { s: 2, c: 3 }, // garbage goods (worthless person)

  // Additional dialect profanity (Wenzhounese)
  "促侬": { s: 3, c: 4 }, // damn you (Wenzhounese)
  "促侬娘": { s: 3, c: 4 }, // damn your mother (Wenzhounese)
  "憨居": { s: 1, c: 4 }, // stupid (Wenzhounese)
  "侬脑壳": { s: 3, c: 4 }, // your skull (Wenzhounese insult)

  // Fuzhounese (Fuzhou dialect)
  "骂你母": { s: 3, c: 4 }, // curse your mother (Fuzhounese)
  "死人骨": { s: 3, c: 4 }, // dead person's bone (Fuzhounese insult)
  "你老母个逼": { s: 5, c: 5 }, // your mother's cunt (Fuzhounese)
  "穷鬼": { s: 3, c: 4 }, // poor ghost (Fuzhounese insult)
  "死鬼仔": { s: 3, c: 4 }, // damn ghost kid (Fuzhounese)

  // Teochew/Chaozhou dialect
  "个老父": { s: 1, c: 4 }, // your old father (Teochew)
  "食屎啦你": { s: 3, c: 5 }, // eat shit (Teochew variant)
  "五百年": { s: 3, c: 4 }, // five hundred years (Teochew curse)
  "死好命": { s: 5, c: 5 }, // die well (Teochew sarcastic)
  "痴哥": { s: 3, c: 4 }, // crazy brother (Teochew insult)

  // Hunanese/Xiang dialect
  "日你先人板板": { s: 3, c: 5 }, // fuck your ancestor boards (variant for Hunan)
  "你个狗日的": { s: 3, c: 5 }, // you dog-fucked (Hunanese)
  "堂客": { s: 3, c: 4 }, // wife (can be derogatory in some contexts)
  "你个瘟猪": { s: 3, c: 4 }, // you plague pig (Hunanese)
  "嬲": { s: 3, c: 5 }, // fuck / mess with (dialectal)

  // Gansu/Northwestern dialect
  "日弄": { s: 3, c: 5 }, // fuck around (Northwestern)
  "怂": { s: 1, c: 4 }, // coward / stupid (Northwestern)
  "怂人": { s: 1, c: 4 }, // cowardly person (Northwestern)
  "怂包": { s: 1, c: 4 }, // coward (Northwestern)
  "瓜怂": { s: 1, c: 4 }, // stupid coward (Northwestern)
  "憨怂": { s: 1, c: 4 }, // foolish coward (Northwestern)

  // Additional Cantonese
  "死仔包": { s: 3, c: 4 }, // damn kid (Cantonese)
  "死佬包": { s: 3, c: 4 }, // damn man (Cantonese)
  "收嗮皮": { s: 3, c: 4 }, // piss off completely (Cantonese)
  "你老味": { s: 3, c: 4 }, // your old man (Cantonese insult)
  "碌柒": { s: 4, c: 4 }, // dick (Cantonese variant)
  "食塞米": { s: 3, c: 4 }, // eat clogged rice (Cantonese insult, useless)
  "你条友": { s: 3, c: 4 }, // you (Cantonese derogatory)
  "白撞": { s: 3, c: 4 }, // freeloader (Cantonese)
  "八公": { s: 3, c: 4 }, // gossipy man (Cantonese)
  "死咸湿": { s: 3, c: 4 }, // damn pervert (Cantonese)
  "衰格": { s: 3, c: 4 }, // bad luck/character (Cantonese)
  "仆你个臭街": { s: 3, c: 4 }, // drop dead on a stinky street (Cantonese)

  // Additional sexual terms
  "内衣": { s: 4, c: 4 }, // underwear (used in sexual context)
  "情趣内衣": { s: 4, c: 4 }, // sexy lingerie
  "调教": { s: 4, c: 4 }, // training (sexual)
  "女王": { s: 4, c: 4 }, // queen (dominatrix)
  "奴隶": { s: 4, c: 4 }, // slave (sexual)
  "捆绑": { s: 4, c: 4 }, // bondage
  "蜡烛": { s: 4, c: 4 }, // candle (sexual play)
  "皮鞭": { s: 4, c: 4 }, // leather whip (BDSM)
  "项圈": { s: 4, c: 4 }, // collar (BDSM)
  "口枷": { s: 4, c: 4 }, // ball gag
  "后入": { s: 4, c: 4 }, // from behind (sexual)
  "骑乘": { s: 4, c: 4 }, // riding (sexual position)
  "传教士": { s: 4, c: 4 }, // missionary (sexual position)
  "深喉": { s: 4, c: 4 }, // deep throat
  "吞精": { s: 4, c: 4 }, // swallowing semen
  "口爆": { s: 4, c: 4 }, // oral ejaculation
  "胸推": { s: 4, c: 4 }, // breast massage/service
  "足交": { s: 4, c: 4 }, // footjob
  "腋交": { s: 4, c: 4 }, // armpit sex
  "股交": { s: 4, c: 4 }, // intercrural sex
  "拳交": { s: 4, c: 4 }, // fisting
  "玩弄": { s: 4, c: 4 }, // to play with (sexual)
  "抽插": { s: 4, c: 4 }, // thrusting (sexual)
  "高潮迭起": { s: 4, c: 4 }, // climaxing repeatedly
  "多人运动": { s: 2, c: 3 }, // multi-person exercise (group sex euphemism)
  "换妻": { s: 4, c: 4 }, // wife swapping
  "换夫": { s: 4, c: 4 }, // husband swapping
  "绿帽": { s: 4, c: 4 }, // green hat (cuckold)
  "露出": { s: 4, c: 4 }, // exposure (exhibitionism)
  "暴露癖": { s: 4, c: 4 }, // exhibitionism
  "窥淫癖": { s: 4, c: 4 }, // voyeurism
  "恋足癖": { s: 4, c: 4 }, // foot fetish
  "恋物癖": { s: 4, c: 4 }, // object fetish
  "制服诱惑": { s: 4, c: 4 }, // uniform temptation
  "角色扮演": { s: 4, c: 4 }, // role play (sexual)
  "性虐待": { s: 4, c: 4 }, // sexual abuse
  "性暴力": { s: 5, c: 5 }, // sexual violence
  "性骚扰": { s: 4, c: 4 }, // sexual harassment
  "猥亵儿童": { s: 4, c: 4 }, // child molestation
  "强制猥亵": { s: 4, c: 4 }, // forced indecency
  "嫖资": { s: 5, c: 4 }, // prostitution fee
  "肉体交易": { s: 4, c: 4 }, // flesh trade
  "包养": { s: 4, c: 4 }, // to keep (a mistress)
  "金主": { s: 4, c: 4 }, // sugar daddy/mommy
  "干爹": { s: 4, c: 4 }, // sugar daddy
  "干妈": { s: 4, c: 4 }, // sugar mommy

  // Additional compound insults
  "你这个废物": { s: 1, c: 4 }, // you useless thing
  "你这个垃圾": { s: 1, c: 4 }, // you garbage
  "你这个人渣": { s: 1, c: 4 }, // you scum
  "你这个败类": { s: 1, c: 4 }, // you degenerate
  "你这个贱人": { s: 1, c: 4 }, // you cheap person
  "你这个混蛋": { s: 3, c: 4 }, // you bastard
  "你这个王八蛋": { s: 1, c: 4 }, // you son of a bitch
  "你全家都是": { s: 1, c: 4 }, // your whole family is
  "你妈是婊子": { s: 5, c: 4 }, // your mother is a whore
  "你爸是王八": { s: 1, c: 4 }, // your father is a cuckold
  "你祖宗十八代": { s: 1, c: 4 }, // your 18 generations of ancestors
  "老子操你": { s: 3, c: 5 }, // I'll fuck you (asserting dominance)
  "信不信我打你": { s: 1, c: 4 }, // believe me I'll hit you
  "信不信我弄死你": { s: 1, c: 4 }, // believe me I'll kill you
  "你活该": { s: 1, c: 4 }, // you deserve it
  "你不配": { s: 1, c: 4 }, // you don't deserve
  "你不配做人": { s: 1, c: 4 }, // you don't deserve to be human
  "你算什么东西": { s: 1, c: 4 }, // what kind of thing are you
  "你算个屁": { s: 1, c: 4 }, // you count as a fart (worthless)
  "你算个鸡巴": { s: 4, c: 4 }, // you count as a dick (worthless)
  "猪狗不如": { s: 1, c: 4 }, // worse than pigs and dogs
  "狗都不如": { s: 1, c: 4 }, // worse than a dog
  "禽兽不如": { s: 1, c: 4 }, // worse than a beast
  "不是人": { s: 1, c: 4 }, // not a person
  "不是东西": { s: 1, c: 4 }, // not a thing (worthless)
  "老畜生": { s: 1, c: 4 }, // old beast
  "小畜生": { s: 1, c: 4 }, // little beast
  "畜生不如": { s: 1, c: 4 }, // worse than a beast
  "臭不可闻": { s: 1, c: 4 }, // unbearably stinky
  "臭不要脸的东西": { s: 1, c: 4 }, // shameless thing
  "下流胚": { s: 1, c: 4 }, // sleazy type
  "下贱": { s: 1, c: 4 }, // lowly/base
  "无耻之徒": { s: 1, c: 4 }, // shameless person
  "卑鄙小人": { s: 1, c: 4 }, // despicable person
  "阴险小人": { s: 1, c: 4 }, // treacherous person
  "势利眼": { s: 1, c: 4 }, // snob (derogatory)
  "墙头草": { s: 3, c: 4 }, // wall-top grass (fence-sitter, derogatory)
  "马屁精": { s: 3, c: 4 }, // ass-kissing spirit (sycophant)
  "拍马屁": { s: 3, c: 4 }, // patting horse's ass (sucking up)
  "哈巴狗": { s: 1, c: 4 }, // Pekingese dog (lapdog/sycophant)
  "三孙子": { s: 1, c: 4 }, // triple grandson (very submissive, insult)
  "孙子辈": { s: 1, c: 4 }, // grandson generation (insult)
  "缩头王八": { s: 1, c: 4 }, // hiding turtle (coward)
  "胆小鬼": { s: 1, c: 4 }, // scaredy ghost (coward)
  "没种": { s: 1, c: 4 }, // no seed (coward/gutless)
  "没卵子": { s: 1, c: 4 }, // no eggs (no balls, coward)
  "没胆子": { s: 1, c: 4 }, // no guts
  "窝囊": { s: 1, c: 4 }, // wimpy/useless
  "软骨头": { s: 1, c: 4 }, // soft bones (spineless)
  "软脚虾": { s: 1, c: 4 }, // soft-legged shrimp (weakling)
  "贱骨头": { s: 1, c: 4 }, // cheap bones (masochistic/cheap)
  "死皮赖脸": { s: 1, c: 4 }, // shameless (dead skin relying on face)
  "厚颜无耻": { s: 1, c: 4 }, // thick-faced and shameless
  "不知廉耻": { s: 1, c: 4 }, // knowing no shame
  "丧尽天良": { s: 1, c: 4 }, // completely devoid of conscience
  "天杀的": { s: 1, c: 4 }, // heaven-killed (damned)
  "混蛋东西": { s: 3, c: 4 }, // bastard thing
  "狗屁不通": { s: 1, c: 4 }, // dog fart doesn't go through (complete nonsense)
  "放你妈的屁": { s: 3, c: 5 }, // fart your mother's fart (bullshit)
  "放狗屁": { s: 3, c: 5 }, // letting out dog farts (bullshit)
  "胡说八道": { s: 1, c: 4 }, // talking nonsense
  "满嘴喷粪": { s: 3, c: 5 }, // mouth spraying shit (talking nonsense)
  "吃屎去吧": { s: 3, c: 5 }, // go eat shit
  "吃屎长大的": { s: 3, c: 5 }, // grew up eating shit

  // === EXPANDED ENTRIES ===

  // Mandarin character variants (simplified + traditional pairs)
  "傻屌": { s: 1, c: 4 }, // stupid dick
  "臭屌": { s: 4, c: 4 }, // stinky dick
  "爛人": { s: 3, c: 4 }, // rotten person (traditional)
  "爛貨": { s: 3, c: 4 }, // rotten goods (traditional)
  "爛逼": { s: 5, c: 5 }, // rotten cunt (traditional)
  "爛穴": { s: 3, c: 4 }, // rotten hole (traditional)
  "臭逼的": { s: 5, c: 5 }, // of the stinky cunt
  "臭逼貨": { s: 5, c: 5 }, // stinky cunt goods
  "臭逼婊子": { s: 5, c: 5 }, // stinky cunt whore
  "賤B": { s: 5, c: 5 }, // cheap cunt (traditional)
  "臭B": { s: 5, c: 5 }, // stinky cunt (abbreviation)
  "爛B": { s: 5, c: 5 }, // rotten cunt (abbreviation)
  "老B": { s: 5, c: 5 }, // old cunt (abbreviation)
  "嫩B": { s: 5, c: 5 }, // young cunt (abbreviation)
  "騷逼": { s: 5, c: 5 }, // slutty cunt (traditional)
  "騷貨": { s: 3, c: 4 }, // slut (traditional)
  "賤貨婊子": { s: 5, c: 4 }, // cheap slut whore (traditional)
  "騷女人": { s: 3, c: 4 }, // slutty woman (traditional)
  "賤女人": { s: 3, c: 4 }, // cheap woman (traditional)
  "臭女人": { s: 3, c: 4 }, // stinky woman
  "臭男人": { s: 3, c: 4 }, // stinky man
  "爛女人": { s: 3, c: 4 }, // rotten woman
  "爛男人": { s: 3, c: 4 }, // rotten man
  "死女人": { s: 3, c: 4 }, // damn woman
  "死男人": { s: 3, c: 4 }, // damn man
  "笨女人": { s: 1, c: 4 }, // stupid woman
  "笨男人": { s: 1, c: 4 }, // stupid man
  "蠢女人": { s: 1, c: 4 }, // dumb woman
  "蠢男人": { s: 1, c: 4 }, // dumb man
  "臭老太婆": { s: 3, c: 4 }, // stinky old hag
  "老太婆": { s: 3, c: 4 }, // old hag
  "老太公": { s: 3, c: 4 }, // old fart
  "老不死的": { s: 5, c: 5 }, // won't die old person
  "老妖婆": { s: 3, c: 4 }, // old witch
  "老妖精": { s: 3, c: 4 }, // old vixen
  "老贼": { s: 3, c: 4 }, // old thief/villain
  "老狗": { s: 3, c: 4 }, // old dog
  "臭老头": { s: 3, c: 4 }, // stinky old man
  "臭老太": { s: 3, c: 4 }, // stinky old woman
  "死老头": { s: 3, c: 4 }, // damn old man
  "死老太": { s: 3, c: 4 }, // damn old woman
  "狐狸精": { s: 3, c: 4 }, // fox spirit (homewrecker)
  "小妖精": { s: 3, c: 4 }, // little vixen
  "小骚货": { s: 3, c: 4 }, // little slut
  "小贱人": { s: 3, c: 4 }, // little cheap person
  "小婊子": { s: 5, c: 4 }, // little whore
  "小流氓": { s: 3, c: 4 }, // little hooligan
  "小混蛋": { s: 3, c: 4 }, // little bastard
  "老杂种": { s: 3, c: 4 }, // old mongrel
  "死杂种": { s: 3, c: 4 }, // damn mongrel

  // Additional Cantonese (粤语) profanity - exhaustive
  "𨳊": { s: 4, c: 4 }, // dick (Cantonese vulgar character)
  "𨳍": { s: 4, c: 4 }, // dick (Cantonese variant)
  "𨶙": { s: 3, c: 5 }, // fuck (Cantonese variant)
  "鳩样": { s: 4, c: 4 }, // dick-looking (Cantonese)
  "鳩食": { s: 4, c: 4 }, // eat dick (Cantonese)
  "鳩做": { s: 4, c: 4 }, // dick-do (Cantonese, doing badly)
  "鳩叫": { s: 1, c: 4 }, // dick-call (Cantonese, yelling stupidly)
  "鳩咁": { s: 4, c: 4 }, // dick-like (Cantonese intensifier)
  "鳩嘈": { s: 4, c: 4 }, // dick-noisy (Cantonese)
  "鸠样嘢": { s: 4, c: 4 }, // dick-looking thing (Cantonese)
  "鸠嗌": { s: 4, c: 4 }, // dick-yell (Cantonese)
  "閪樣": { s: 5, c: 5 }, // cunt-looking (Cantonese)
  "閪面": { s: 5, c: 5 }, // cunt face (Cantonese)
  "閪嘢": { s: 5, c: 5 }, // cunt thing (Cantonese)
  "閪鬼": { s: 5, c: 5 }, // cunt ghost (Cantonese)
  "臭閪婆": { s: 5, c: 5 }, // stinky cunt woman (Cantonese)
  "老閪": { s: 5, c: 5 }, // old cunt (Cantonese)
  "爛閪": { s: 5, c: 5 }, // rotten cunt (Cantonese)
  "死閪婆": { s: 5, c: 5 }, // damn cunt woman (Cantonese)
  "撚样嘢": { s: 4, c: 4 }, // dick-looking thing (Cantonese)
  "撚嘢": { s: 4, c: 4 }, // dick thing (Cantonese)
  "撚化": { s: 4, c: 4 }, // dicktified (Cantonese)
  "撚鬼": { s: 4, c: 4 }, // dick ghost (Cantonese)
  "撚都唔": { s: 4, c: 4 }, // not even dick (Cantonese)
  "撚咁": { s: 4, c: 4 }, // dick-like (Cantonese intensifier)
  "屌你個閪": { s: 5, c: 5 }, // fuck your cunt (Cantonese)
  "屌你老閪": { s: 5, c: 5 }, // fuck your old cunt (Cantonese)
  "屌鳩": { s: 4, c: 5 }, // fuck dick (Cantonese)
  "屌撚": { s: 4, c: 5 }, // fuck dick (Cantonese variant)
  "屌閪": { s: 5, c: 5 }, // fuck cunt (Cantonese)
  "屌你一家": { s: 3, c: 5 }, // fuck your whole family (Cantonese)
  "屌你祖宗": { s: 3, c: 5 }, // fuck your ancestors (Cantonese)
  "屌你十八代": { s: 3, c: 5 }, // fuck your 18 generations (Cantonese)
  "扑你个臭閪": { s: 5, c: 5 }, // drop dead stinky cunt (Cantonese)
  "仆街仔": { s: 3, c: 4 }, // drop-dead kid (Cantonese)
  "仆街婆": { s: 3, c: 4 }, // drop-dead woman (Cantonese)
  "仆街佬": { s: 3, c: 4 }, // drop-dead man (Cantonese)
  "死仆街仔": { s: 3, c: 4 }, // damn drop-dead kid (Cantonese)
  "死仆街婆": { s: 3, c: 4 }, // damn drop-dead woman (Cantonese)
  "你仆街啦": { s: 3, c: 4 }, // you drop dead (Cantonese)
  "仆你個死街": { s: 3, c: 4 }, // drop dead damn street (Cantonese)
  "冚家鏟": { s: 5, c: 5 }, // whole family die (Cantonese traditional)
  "冚家剷": { s: 5, c: 5 }, // whole family die (Cantonese variant)
  "冚家富貴": { s: 5, c: 5 }, // whole family die (ironic, traditional)
  "丟你老味": { s: 3, c: 5 }, // fuck your old man (Cantonese)
  "丟你老豆": { s: 1, c: 4 }, // fuck your father (Cantonese)
  "丟你阿妈": { s: 3, c: 5 }, // fuck your mother (Cantonese)
  "丟你全家": { s: 3, c: 5 }, // fuck your whole family (Cantonese)
  "丟那媽": { s: 3, c: 5 }, // fuck your mother (Cantonese traditional)
  "丟那妈个閪": { s: 5, c: 5 }, // fuck your mother's cunt (Cantonese)
  "死蠢婆": { s: 1, c: 4 }, // damn stupid woman (Cantonese)
  "死蠢仔": { s: 1, c: 4 }, // damn stupid kid (Cantonese)
  "死蠢佬": { s: 1, c: 4 }, // damn stupid man (Cantonese)
  "死on居": { s: 1, c: 4 }, // damn stupid (Cantonese internet)
  "on居仔": { s: 1, c: 4 }, // stupid kid (Cantonese internet)
  "on9": { s: 1, c: 3 }, // stupid (Cantonese internet slang)
  "on9仔": { s: 1, c: 4 }, // stupid kid (Cantonese internet)
  "on9婆": { s: 1, c: 4 }, // stupid woman (Cantonese internet)
  "on99": { s: 1, c: 4 }, // very stupid (Cantonese internet)
  "戆鸠仔": { s: 1, c: 4 }, // stupid dick kid (Cantonese)
  "戆鸠佬": { s: 1, c: 4 }, // stupid dick man (Cantonese)
  "戆鸠婆": { s: 1, c: 4 }, // stupid dick woman (Cantonese)
  "戆居居": { s: 1, c: 4 }, // very stupid (Cantonese variant)
  "黐线佬": { s: 3, c: 4 }, // crazy man (Cantonese)
  "黐线婆": { s: 3, c: 4 }, // crazy woman (Cantonese)
  "黐线仔": { s: 3, c: 4 }, // crazy kid (Cantonese)
  "痴线佬": { s: 3, c: 4 }, // crazy man (Cantonese variant)
  "痴线婆": { s: 3, c: 4 }, // crazy woman (Cantonese variant)
  "死咸湿佬": { s: 3, c: 4 }, // damn perverted man (Cantonese)
  "咸湿佬": { s: 3, c: 4 }, // perverted man (Cantonese)
  "咸湿仔": { s: 3, c: 4 }, // perverted kid (Cantonese)
  "咸湿鬼": { s: 3, c: 4 }, // perverted ghost (Cantonese)
  "你食屎": { s: 3, c: 5 }, // you eat shit (Cantonese)
  "你去食屎": { s: 3, c: 5 }, // go eat shit (Cantonese)
  "收皮啦": { s: 3, c: 4 }, // shut up already (Cantonese)
  "收皮啦你": { s: 3, c: 4 }, // shut up you (Cantonese)
  "你收皮": { s: 3, c: 4 }, // you shut up (Cantonese)
  "衰佬": { s: 3, c: 4 }, // awful man (Cantonese)
  "衰女人": { s: 3, c: 4 }, // awful woman (Cantonese)
  "衰鬼": { s: 3, c: 4 }, // awful ghost (Cantonese)
  "衰嘢": { s: 3, c: 4 }, // awful thing (Cantonese)
  "衰到贴地": { s: 3, c: 4 }, // awful to the ground (Cantonese)
  "废柴一个": { s: 3, c: 4 }, // a useless person (Cantonese)
  "大废柴": { s: 3, c: 4 }, // big useless person (Cantonese)
  "你条废柴": { s: 3, c: 4 }, // you useless person (Cantonese)
  "你条粉肠": { s: 3, c: 4 }, // you rice noodle (Cantonese insult)
  "死粉肠": { s: 3, c: 4 }, // damn rice noodle (Cantonese)
  "你条友仔": { s: 3, c: 4 }, // you that guy (Cantonese derogatory)
  "契弟": { s: 3, c: 4 }, // catamite (Cantonese insult)
  "死契弟": { s: 3, c: 4 }, // damn catamite (Cantonese)
  "基佬": { s: 3, c: 4 }, // gay (Cantonese derogatory)
  "死基仔": { s: 3, c: 4 }, // damn gay kid (Cantonese)
  "死肥仔佬": { s: 1, c: 4 }, // damn fat man (Cantonese)
  "肥婆乸": { s: 1, c: 4 }, // fat woman (Cantonese)
  "丑怪": { s: 1, c: 4 }, // ugly freak (Cantonese)
  "死丑怪": { s: 1, c: 4 }, // damn ugly freak (Cantonese)
  "你嗰样": { s: 3, c: 4 }, // your appearance (Cantonese insult)
  "你把口": { s: 3, c: 4 }, // your mouth (Cantonese, shut up)
  "你把臭口": { s: 3, c: 4 }, // your stinky mouth (Cantonese)
  "讲乜嘢": { s: 3, c: 4 }, // what are you saying (Cantonese aggressive)
  "做乜鸠嘢": { s: 4, c: 4 }, // what the dick are you doing (Cantonese)
  "做乜撚嘢": { s: 4, c: 4 }, // what the dick are you doing (Cantonese)
  "你做乜": { s: 3, c: 4 }, // what are you doing (Cantonese aggressive)
  "有冇搞错": { s: 3, c: 4 }, // are you kidding (Cantonese aggressive)
  "你癫架": { s: 3, c: 4 }, // are you crazy (Cantonese)
  "癫佬": { s: 3, c: 4 }, // crazy man (Cantonese)
  "癫婆": { s: 3, c: 4 }, // crazy woman (Cantonese)
  "有病嘅": { s: 3, c: 4 }, // sick person (Cantonese)
  "神经病佬": { s: 3, c: 4 }, // mental patient man (Cantonese)
  "憨鸠": { s: 1, c: 4 }, // stupid dick (Cantonese variant)
  "低B": { s: 3, c: 4 }, // low-class (Cantonese internet)
  "低能仔": { s: 3, c: 4 }, // low-IQ kid (Cantonese)
  "低能婆": { s: 3, c: 4 }, // low-IQ woman (Cantonese)
  "白痴仔": { s: 1, c: 4 }, // idiot kid (Cantonese)
  "白痴婆": { s: 1, c: 4 }, // idiot woman (Cantonese)
  "白痴佬": { s: 1, c: 4 }, // idiot man (Cantonese)

  // Additional Hokkien/Taiwanese (闽南语) - exhaustive
  "幹恁祖嬤": { s: 3, c: 5 }, // fuck your grandmother (Hokkien)
  "幹恁阿祖": { s: 1, c: 4 }, // fuck your great-grandfather (Hokkien)
  "幹恁全家": { s: 3, c: 5 }, // fuck your whole family (Hokkien)
  "幹恁老師": { s: 3, c: 5 }, // fuck your teacher (Hokkien euphemism)
  "幹恁老母": { s: 3, c: 5 }, // fuck your mother (Hokkien)
  "幹恁老父": { s: 1, c: 4 }, // fuck your father (Hokkien)
  "幹恁媽": { s: 3, c: 5 }, // fuck your mother (Hokkien variant)
  "幹恁爸": { s: 1, c: 4 }, // fuck your father (Hokkien variant)
  "靠北靠母": { s: 3, c: 4 }, // crying for dad and mom (Hokkien)
  "靠杯靠母": { s: 3, c: 4 }, // damn and damn (Hokkien)
  "靠北啦": { s: 3, c: 4 }, // damn it (Hokkien extended)
  "靠邀啦": { s: 3, c: 4 }, // damn it (Hokkien extended)
  "靠北喔": { s: 3, c: 4 }, // damn (Hokkien exclamation)
  "靠腰喔": { s: 3, c: 4 }, // damn (Hokkien exclamation)
  "機掰人": { s: 5, c: 5 }, // cunt person (Hokkien)
  "機掰仔": { s: 5, c: 5 }, // cunt kid (Hokkien)
  "機掰話": { s: 5, c: 5 }, // cunt talk (Hokkien)
  "機掰事": { s: 5, c: 5 }, // cunt business (Hokkien)
  "雞掰人": { s: 5, c: 5 }, // cunt person (Hokkien variant)
  "雞掰面": { s: 5, c: 5 }, // cunt face (Hokkien)
  "雞掰臉": { s: 5, c: 5 }, // cunt face (Hokkien traditional)
  "臭機掰的": { s: 5, c: 5 }, // stinky cunt's (Hokkien)
  "林北馬": { s: 1, c: 4 }, // your father (Hokkien assertive variant)
  "林北就是": { s: 1, c: 4 }, // your father is (Hokkien assertive)
  "你娘咧": { s: 3, c: 4 }, // your mother (Hokkien extended)
  "幹林老母": { s: 3, c: 5 }, // fuck your old mother (Hokkien)
  "衝啥小": { s: 3, c: 4 }, // what the hell (Hokkien variant)
  "三小啦": { s: 3, c: 4 }, // what the hell (Hokkien extended)
  "啥小": { s: 3, c: 4 }, // what the hell (Hokkien short)
  "啥洨": { s: 3, c: 4 }, // what the semen (Hokkien vulgar)
  "洨": { s: 3, c: 4 }, // semen (Hokkien)
  "番仔腳": { s: 3, c: 4 }, // barbarian foot (Hokkien derogatory)
  "死番薯": { s: 3, c: 4 }, // damn sweet potato (Hokkien, insult for Taiwanese)
  "番薯": { s: 3, c: 4 }, // sweet potato (Hokkien, can be derogatory)
  "阿達仔": { s: 3, c: 4 }, // crazy person (Hokkien)
  "肖仔": { s: 3, c: 4 }, // crazy person (Hokkien)
  "肖婆": { s: 3, c: 4 }, // crazy woman (Hokkien)
  "肖狗": { s: 3, c: 4 }, // crazy dog (Hokkien)
  "憨人": { s: 1, c: 4 }, // stupid person (Hokkien)
  "憨仔": { s: 1, c: 4 }, // stupid kid (Hokkien)
  "憨面": { s: 1, c: 4 }, // stupid face (Hokkien)
  "憨膽": { s: 1, c: 4 }, // stupid nerve (Hokkien)
  "死囡仔脯": { s: 3, c: 4 }, // damn kid meat (Hokkien)
  "夭壽骨": { s: 3, c: 4 }, // damn bones (Hokkien)
  "夭壽啊": { s: 3, c: 4 }, // damn it (Hokkien exclamation)
  "夭壽人": { s: 3, c: 4 }, // damn person (Hokkien)
  "死猴仔": { s: 3, c: 4 }, // damn monkey kid (Hokkien)
  "猴死囡仔": { s: 3, c: 4 }, // monkey damn kid (Hokkien)
  "豬哥好色": { s: 3, c: 4 }, // perverted man (Hokkien extended)
  "無路用的": { s: 3, c: 4 }, // useless person (Hokkien extended)
  "無路用人": { s: 3, c: 4 }, // useless person (Hokkien)
  "無效": { s: 3, c: 4 }, // ineffective/useless (Hokkien)
  "歹命人": { s: 3, c: 4 }, // cursed person (Hokkien)
  "歹勢": { s: 3, c: 4 }, // sorry/embarrassing (Hokkien, can be sarcastic insult)
  "死人骨頭": { s: 3, c: 4 }, // dead person's bones (Hokkien insult)

  // Additional Shanghainese (上海话) profanity
  "册那妈逼": { s: 5, c: 5 }, // fuck your mother's cunt (Shanghainese)
  "册那马勒": { s: 3, c: 5 }, // fuck that horse (Shanghainese euphemism)
  "赤佬头": { s: 3, c: 4 }, // bastard head (Shanghainese)
  "小赤佬头": { s: 3, c: 4 }, // little bastard head (Shanghainese)
  "死赤佬": { s: 3, c: 4 }, // damn bastard (Shanghainese)
  "寿头寿脑的": { s: 1, c: 4 }, // idiotic one (Shanghainese)
  "大寿头": { s: 1, c: 4 }, // big idiot (Shanghainese)
  "十三点人": { s: 3, c: 4 }, // crazy person (Shanghainese)
  "戆卵": { s: 1, c: 4 }, // stupid egg (Shanghainese)
  "戆逼": { s: 1, c: 4 }, // stupid cunt (Shanghainese)
  "瘪三货": { s: 3, c: 4 }, // good-for-nothing goods (Shanghainese)
  "娘希匹的": { s: 3, c: 4 }, // your mother's (Shanghainese)
  "小娘皮货": { s: 3, c: 4 }, // little slut goods (Shanghainese)
  "触霉头": { s: 3, c: 4 }, // unlucky/annoying (Shanghainese)
  "猪头三的": { s: 3, c: 4 }, // pig head's (Shanghainese)
  "阿乌卵头": { s: 3, c: 4 }, // dimwit head (Shanghainese)
  "侬个册那": { s: 3, c: 5 }, // you fucking (Shanghainese)
  "侬个瘪三": { s: 3, c: 4 }, // you good-for-nothing (Shanghainese)
  "侬个戆大": { s: 1, c: 4 }, // you big idiot (Shanghainese)
  "侬个赤佬": { s: 3, c: 4 }, // you bastard (Shanghainese)
  "侬个寿头": { s: 1, c: 4 }, // you idiot (Shanghainese)
  "侬滚": { s: 3, c: 4 }, // you get lost (Shanghainese)
  "侬去死": { s: 5, c: 5 }, // you go die (Shanghainese)
  "侬个死人": { s: 3, c: 4 }, // you dead person (Shanghainese)
  "搓死侬": { s: 5, c: 5 }, // rub you to death (Shanghainese threat)
  "打侬个伊娘": { s: 3, c: 4 }, // hit your mother (Shanghainese)
  "拆侬个骨头": { s: 3, c: 4 }, // break your bones (Shanghainese)

  // Additional Sichuanese/Southwestern (四川话/西南官话)
  "瓜婆娘": { s: 1, c: 4 }, // stupid woman (Sichuanese)
  "瓜兮兮的": { s: 1, c: 4 }, // being stupid (Sichuanese extended)
  "瓜裹裹的": { s: 1, c: 4 }, // very stupid (Sichuanese extended)
  "瓜批的": { s: 1, c: 4 }, // stupid cunt (Sichuanese possessive)
  "日你妈哟": { s: 3, c: 5 }, // fuck your mother (Sichuanese exclamation)
  "日他妈的": { s: 3, c: 5 }, // fuck his mother (Sichuanese)
  "日你的仙人板板": { s: 3, c: 5 }, // fuck your ancestor boards (Sichuanese extended)
  "格老子的": { s: 3, c: 4 }, // damn it (Sichuanese possessive)
  "哈批": { s: 1, c: 4 }, // stupid cunt (Sichuanese)
  "哈批的": { s: 1, c: 4 }, // stupid cunt's (Sichuanese)
  "龟儿子的东西": { s: 3, c: 4 }, // son of a turtle thing (Sichuanese)
  "龟儿龟孙的": { s: 3, c: 4 }, // turtle son turtle grandson (Sichuanese)
  "你个龟儿": { s: 3, c: 4 }, // you turtle's son (Sichuanese)
  "你个瓜娃": { s: 1, c: 4 }, // you stupid kid (Sichuanese)
  "你个瓜批": { s: 1, c: 4 }, // you stupid cunt (Sichuanese)
  "你个锤子": { s: 4, c: 5 }, // you dick/bullshit (Sichuanese)
  "球都不是": { s: 3, c: 4 }, // not even a ball (Sichuanese, worthless)
  "求都不懂": { s: 4, c: 4 }, // doesn't know dick (Sichuanese, ball homophone)
  "日麻": { s: 3, c: 5 }, // fuck mother (Sichuanese abbreviated)
  "日龟儿": { s: 3, c: 5 }, // fuck turtle's son (Sichuanese)
  "卖麻批": { s: 5, c: 5 }, // sell cunt (Sichuanese)
  "老子": { s: 1, c: 4 }, // your father (Sichuanese assertive)
  "老子整死你": { s: 3, c: 4 }, // I'll get you killed (Sichuanese)
  "龟孙儿的": { s: 3, c: 4 }, // turtle grandson's (Sichuanese)
  "龟公的": { s: 3, c: 4 }, // pimp's (Sichuanese)
  "批娃儿": { s: 5, c: 5 }, // cunt kid (Sichuanese)
  "批话连篇": { s: 5, c: 5 }, // full of cunt talk (Sichuanese)
  "勾子痒": { s: 3, c: 4 }, // itchy ass (Sichuanese insult)
  "日你八辈祖宗": { s: 3, c: 5 }, // fuck your eight generations (Sichuanese)
  "梆硬": { s: 1, c: 3 }, // very stupid (Sichuanese slang)
  "棒老二": { s: 3, c: 4 }, // thug/bandit (Sichuanese)
  "哈戳戳的": { s: 1, c: 4 }, // extremely stupid (Sichuanese extended)
  "木脑壳": { s: 1, c: 4 }, // wooden head (Sichuanese, stupid)
  "铲铲": { s: 3, c: 5 }, // bullshit/nothing (Sichuanese)
  "龟儿瓜皮": { s: 1, c: 4 }, // turtle son stupid (Sichuanese compound)

  // Additional Northeastern (东北话) profanity
  "你个彪子": { s: 3, c: 4 }, // you crazy person (Northeastern)
  "彪呼呼": { s: 1, c: 4 }, // crazy and dumb (Northeastern)
  "虎了吧唧的": { s: 1, c: 4 }, // recklessly stupid (Northeastern extended)
  "傻了吧唧的": { s: 1, c: 4 }, // idiotic (Northeastern extended)
  "犊子崽子": { s: 3, c: 4 }, // calf brat (Northeastern)
  "扯蛋": { s: 3, c: 5 }, // bullshit (Northeastern)
  "扯犊子的": { s: 3, c: 4 }, // nonsense (Northeastern)
  "破马张飞": { s: 3, c: 4 }, // making a scene (Northeastern)
  "嘚瑟什么": { s: 3, c: 4 }, // why are you showing off (Northeastern)
  "削死你": { s: 5, c: 5 }, // I'll beat you to death (Northeastern)
  "抽死你": { s: 5, c: 5 }, // I'll slap you to death (Northeastern)
  "你个瘪犊子": { s: 3, c: 4 }, // you deflated calf (Northeastern)
  "瘪犊子": { s: 3, c: 4 }, // deflated calf (Northeastern insult)
  "滚犊子去吧": { s: 3, c: 4 }, // get the hell out (Northeastern)
  "你大爷的操": { s: 3, c: 5 }, // your uncle's fuck (Northeastern)
  "妈了个腿儿": { s: 2, c: 3 }, // mother's leg (Northeastern euphemism)
  "妈了个蛋": { s: 2, c: 3 }, // mother's egg (Northeastern euphemism)
  "整你": { s: 5, c: 5 }, // get you (Northeastern threat)
  "你咋不上天呢": { s: 3, c: 4 }, // why don't you fly to heaven (Northeastern sarcasm)
  "你咋不去死呢": { s: 5, c: 5 }, // why don't you go die (Northeastern)
  "别得瑟了": { s: 3, c: 4 }, // stop showing off (Northeastern)
  "嗑碜死了": { s: 1, c: 4 }, // extremely ugly (Northeastern)
  "老嗑碜的": { s: 1, c: 4 }, // very ugly person (Northeastern)
  "磨叽什么": { s: 3, c: 4 }, // stop nagging (Northeastern)
  "墨迹什么": { s: 3, c: 4 }, // stop being verbose (Northeastern variant)
  "埋汰人": { s: 3, c: 4 }, // dirty person/insulting (Northeastern)
  "埋汰死了": { s: 3, c: 4 }, // extremely dirty/disgusting (Northeastern)
  "膈应死了": { s: 3, c: 4 }, // extremely disgusting (Northeastern)
  "彪呼呼的": { s: 1, c: 4 }, // crazy stupid (Northeastern extended)
  "虎逼": { s: 1, c: 4 }, // stupid cunt (Northeastern)
  "虎逼的": { s: 1, c: 4 }, // stupid cunt's (Northeastern)
  "松松垮垮": { s: 3, c: 4 }, // slack/loose (Northeastern insult for women)
  "松包": { s: 1, c: 4 }, // loose bag (Northeastern, coward)
  "松包蛋": { s: 1, c: 4 }, // loose egg (Northeastern, coward)
  "嘎嘛呢": { s: 3, c: 4 }, // what the hell (Northeastern variant)
  "你妈了个比": { s: 5, c: 5 }, // your mother's cunt (Northeastern)
  "妈逼的": { s: 5, c: 5 }, // mother's cunt (Northeastern)
  "你大爷我": { s: 3, c: 4 }, // I'm your uncle (Northeastern assertive)
  "秃噜反帐": { s: 3, c: 4 }, // unreliable (Northeastern variant)
  "秃噜扣": { s: 3, c: 4 }, // unreliable person (Northeastern)
  "二椅子人": { s: 3, c: 4 }, // neither man nor woman person (Northeastern)
  "二虎子": { s: 1, c: 4 }, // stupid tiger (Northeastern)
  "铁憨憨": { s: 1, c: 4 }, // iron fool (Northeastern internet)
  "傻狍子": { s: 1, c: 4 }, // stupid roe deer (Northeastern)
  "你个傻狍子": { s: 1, c: 4 }, // you stupid roe deer (Northeastern)

  // Hakka (客家话) profanity - expanded
  "屌你阿姆个臭逼": { s: 5, c: 5 }, // fuck your mother's stinky cunt (Hakka)
  "屌你个死人": { s: 3, c: 5 }, // fuck you dead person (Hakka)
  "你个死人婆": { s: 3, c: 4 }, // you dead woman (Hakka)
  "你个死人公": { s: 3, c: 4 }, // you dead man (Hakka)
  "番狗仔": { s: 3, c: 4 }, // foreign dog kid (Hakka)
  "死嫲婆": { s: 3, c: 4 }, // damn old woman (Hakka)
  "你姆个逼": { s: 5, c: 5 }, // your mother's cunt (Hakka variant)
  "衰人家": { s: 3, c: 4 }, // awful family (Hakka)
  "打你个死人": { s: 3, c: 4 }, // hit you dead person (Hakka)
  "你个猴精": { s: 3, c: 4 }, // you monkey spirit (Hakka)
  "臭婆娘": { s: 3, c: 4 }, // stinky woman (Hakka)
  "矮冬瓜": { s: 3, c: 4 }, // short winter melon (Hakka insult)
  "番薯仔": { s: 3, c: 4 }, // sweet potato kid (Hakka insult)
  "你个憨包": { s: 1, c: 4 }, // you stupid bag (Hakka)
  "阿姆个屄": { s: 5, c: 5 }, // your mother's cunt (Hakka variant)

  // Teochew/Chaozhou (潮州话) profanity - expanded
  "个老母": { s: 3, c: 4 }, // your old mother (Teochew)
  "你老父": { s: 1, c: 4 }, // your father (Teochew)
  "食屎人": { s: 3, c: 5 }, // eat-shit person (Teochew)
  "五百年前的": { s: 3, c: 4 }, // from 500 years ago (Teochew curse)
  "死好命的": { s: 1, c: 4 }, // die-well-fated (Teochew sarcasm)
  "痴哥仔": { s: 3, c: 4 }, // crazy brother kid (Teochew)
  "你个痴的": { s: 3, c: 4 }, // you crazy one (Teochew)
  "老嫲的": { s: 3, c: 4 }, // old woman's (Teochew insult)
  "番的": { s: 3, c: 4 }, // barbarian (Teochew)
  "番仔的": { s: 3, c: 4 }, // barbarian's (Teochew)
  "你个无用人": { s: 3, c: 4 }, // you useless person (Teochew)
  "个老母的逼": { s: 5, c: 5 }, // your old mother's cunt (Teochew)
  "你个蠢才": { s: 1, c: 4 }, // you stupid talent (Teochew)

  // Wenzhounese (温州话) profanity - expanded
  "促侬个娘": { s: 3, c: 4 }, // damn your mother (Wenzhounese)
  "促侬个老父": { s: 1, c: 4 }, // damn your old father (Wenzhounese)
  "促人": { s: 3, c: 4 }, // damn person (Wenzhounese)
  "憨居人": { s: 1, c: 4 }, // stupid person (Wenzhounese)
  "侬个脑壳坏了": { s: 3, c: 4 }, // your skull is broken (Wenzhounese)
  "侬个死人头": { s: 3, c: 4 }, // your dead person head (Wenzhounese)
  "侬个瓜头": { s: 3, c: 4 }, // you melon head (Wenzhounese)
  "促死的": { s: 3, c: 4 }, // damn dead (Wenzhounese)

  // Fuzhounese (福州话) profanity - expanded
  "骂你全家": { s: 3, c: 4 }, // curse your whole family (Fuzhounese)
  "死人骨头": { s: 3, c: 4 }, // dead person's bones (Fuzhounese)
  "穷鬼人": { s: 3, c: 4 }, // poor ghost person (Fuzhounese)
  "死鬼头": { s: 3, c: 4 }, // dead ghost head (Fuzhounese)
  "你个穷鬼仔": { s: 3, c: 4 }, // you poor ghost kid (Fuzhounese)
  "你个死人": { s: 3, c: 4 }, // you dead person (Fuzhounese)
  "骂你母亲": { s: 3, c: 4 }, // curse your mother (Fuzhounese)

  // Hunanese/Xiang (湖南话/湘语) profanity - expanded
  "日你先人板板的": { s: 3, c: 5 }, // fuck your ancestor boards (Hunanese extended)
  "你个狗日的东西": { s: 3, c: 5 }, // you dog-fucked thing (Hunanese)
  "你个瘟猪崽": { s: 3, c: 4 }, // you plague piglet (Hunanese)
  "嬲死你": { s: 5, c: 5 }, // fuck you to death (Hunanese)
  "嬲你妈": { s: 3, c: 5 }, // fuck your mother (Hunanese)
  "嬲你的": { s: 3, c: 5 }, // fuck yours (Hunanese)
  "堂客婆": { s: 3, c: 4 }, // wife woman (Hunanese derogatory)
  "你个死堂客": { s: 3, c: 4 }, // you damn wife (Hunanese)
  "蠢得死": { s: 1, c: 4 }, // stupid to death (Hunanese)
  "婊子养的": { s: 5, c: 4 }, // raised by a whore (Hunanese)
  "你个婊子": { s: 5, c: 4 }, // you whore (Hunanese)

  // Gansu/Northwestern (甘肃/西北) profanity - expanded
  "日弄人": { s: 3, c: 5 }, // fuck around with people (Northwestern)
  "怂人一个": { s: 1, c: 4 }, // a cowardly person (Northwestern)
  "怂包蛋": { s: 1, c: 4 }, // cowardly egg (Northwestern)
  "瓜怂人": { s: 1, c: 4 }, // stupid cowardly person (Northwestern)
  "憨怂人": { s: 1, c: 4 }, // foolish cowardly person (Northwestern)
  "日弄死你": { s: 5, c: 5 }, // fuck around you to death (Northwestern)
  "你个瓜皮子": { s: 1, c: 4 }, // you stupid skin (Northwestern)
  "额日你妈": { s: 3, c: 4 }, // I fuck your mother (Northwestern dialect "I")
  "批脸": { s: 5, c: 5 }, // cunt face (Northwestern)
  "锤子人": { s: 4, c: 4 }, // dick person (Northwestern)
  "日塌了": { s: 3, c: 5 }, // fucked up (Northwestern)
  "怂的一批": { s: 1, c: 4 }, // cowardly as a cunt (Northwestern)

  // Guizhou (贵州话) profanity
  "日你仙人": { s: 3, c: 5 }, // fuck your ancestor (Guizhou)
  "日你老汉": { s: 3, c: 5 }, // fuck your old man (Guizhou)
  "瓜了巴叽": { s: 1, c: 4 }, // very stupid (Guizhou)
  "日怪": { s: 3, c: 5 }, // strange/fucking weird (Guizhou)
  "日鬼": { s: 3, c: 5 }, // fucking ghost (Guizhou, sneaky)
  "老麻批": { s: 5, c: 5 }, // old cunt (Guizhou)
  "你个二杆子": { s: 3, c: 4 }, // you reckless person (Guizhou)

  // Anhui (安徽话) profanity
  "日你个仙人": { s: 3, c: 5 }, // fuck your ancestor (Anhui)
  "你个瘟神": { s: 3, c: 4 }, // you plague god (Anhui)
  "你个活宝": { s: 3, c: 4 }, // you living treasure (Anhui sarcastic)
  "你个怂样子": { s: 1, c: 4 }, // you cowardly looking (Anhui)
  "你个砍头的": { s: 3, c: 4 }, // you beheaded one (Anhui curse)

  // Jiangxi (江西话) profanity
  "你个鬼样子": { s: 3, c: 4 }, // you ghost-looking (Jiangxi)
  "你个死鬼": { s: 3, c: 4 }, // you dead ghost (Jiangxi)
  "你个贱骨头": { s: 3, c: 4 }, // you cheap bone (Jiangxi)
  "鬼样": { s: 3, c: 4 }, // ghost-looking (Jiangxi)
  "鬼崽子": { s: 3, c: 4 }, // ghost kid (Jiangxi)

  // Additional Pinyin romanizations - comprehensive
  "cao ni da ye": { s: 3, c: 5 }, // fuck your uncle
  "cao ni nai nai": { s: 3, c: 5 }, // fuck your grandmother
  "cao ni jie": { s: 3, c: 5 }, // fuck your sister
  "cao ni mei": { s: 3, c: 5 }, // fuck your younger sister
  "cao ni lao shi": { s: 3, c: 5 }, // fuck your teacher
  "cao si ni": { s: 5, c: 5 }, // fuck you to death
  "cao lan ni": { s: 3, c: 5 }, // fuck you to ruin
  "cao fan ni": { s: 3, c: 5 }, // fuck you over
  "cao ni shi ba dai zu zong": { s: 3, c: 5 }, // fuck your 18 generations
  "cao bian ni quan jia": { s: 3, c: 5 }, // fuck your whole family
  "ri ni da ye": { s: 3, c: 5 }, // fuck your uncle (variant)
  "ri ni nai nai": { s: 3, c: 5 }, // fuck your grandmother (variant)
  "ri ni quan jia": { s: 3, c: 5 }, // fuck your whole family (variant)
  "gan ni lao mu": { s: 3, c: 5 }, // fuck your old mother
  "gan ni niang de": { s: 3, c: 5 }, // fuck your mother's
  "wo cao ni ma": { s: 3, c: 5 }, // I fuck your mother
  "wo ri ni ma": { s: 3, c: 5 }, // I fuck your mother (variant)
  "ni ta ma de": { s: 3, c: 4 }, // you damn
  "ta ma de bi": { s: 5, c: 5 }, // damn cunt
  "sha B": { s: 1, c: 4 }, // stupid cunt
  "niu B": { s: 3, c: 5 }, // fucking awesome
  "zhuang B": { s: 3, c: 4 }, // pretentious
  "si B": { s: 5, c: 5 }, // dead cunt
  "lan B": { s: 5, c: 5 }, // rotten cunt
  "chou B": { s: 5, c: 5 }, // stinky cunt
  "gou B": { s: 5, c: 5 }, // dog cunt
  "qiong B": { s: 5, c: 5 }, // poor cunt
  "po B": { s: 5, c: 5 }, // broken cunt
  "da B": { s: 5, c: 5 }, // big cunt
  "xiao B": { s: 5, c: 5 }, // little cunt
  "lao B": { s: 5, c: 5 }, // old cunt
  "nen B": { s: 5, c: 5 }, // young cunt
  "sao B": { s: 5, c: 5 }, // slutty cunt
  "ku B": { s: 5, c: 5 }, // miserable cunt
  "men B": { s: 5, c: 5 }, // depressed cunt
  "chou bi de": { s: 5, c: 5 }, // of the stinky cunt
  "ni shi sha bi": { s: 1, c: 4 }, // you are a stupid cunt
  "ni shi ge sha bi": { s: 1, c: 4 }, // you are a stupid cunt (with classifier)
  "sha bi dong xi": { s: 1, c: 4 }, // stupid cunt thing
  "ge sha bi": { s: 1, c: 4 }, // a stupid cunt
  "da sha bi": { s: 1, c: 4 }, // big stupid cunt
  "zhen ta ma de": { s: 3, c: 4 }, // really damn
  "ta ma de sha bi": { s: 1, c: 4 }, // damn stupid cunt
  "bi yang de": { s: 5, c: 5 }, // cunt-born
  "bi lian": { s: 5, c: 5 }, // cunt face
  "bi yang": { s: 5, c: 5 }, // cunt looking
  "diao mao": { s: 3, c: 4 }, // pubic hair
  "diao ren": { s: 4, c: 4 }, // dick person
  "diao ni": { s: 4, c: 4 }, // dick you
  "diao ni ma": { s: 4, c: 4 }, // dick your mother
  "diao si le": { s: 3, c: 5 }, // fucking amazing
  "diao bao le": { s: 3, c: 5 }, // fucking awesome
  "da diao": { s: 4, c: 4 }, // big dick
  "xiao diao": { s: 4, c: 4 }, // small dick
  "ji ba ren": { s: 4, c: 4 }, // dick person
  "ji ba dong xi": { s: 4, c: 4 }, // dick thing
  "ji ba lian": { s: 4, c: 4 }, // dick face
  "ji ba shi": { s: 4, c: 4 }, // dick matter
  "ji ba mao": { s: 3, c: 4 }, // pubic hair
  "ni ji ba shui": { s: 4, c: 4 }, // who the dick are you
  "guan ni ji ba shi": { s: 4, c: 4 }, // none of your dick business
  "gou ri de dong xi": { s: 3, c: 5 }, // dog-fucked thing
  "gou niang yang de dong xi": { s: 3, c: 4 }, // dog-mother-raised thing
  "wang ba nao dai": { s: 3, c: 4 }, // turtle head
  "lao wang ba": { s: 3, c: 4 }, // old turtle
  "gui sun zi de": { s: 3, c: 4 }, // turtle grandson's
  "gui er zi de": { s: 3, c: 4 }, // turtle son's
  "si quan jia de": { s: 5, c: 5 }, // die whole family's
  "duan zi jue sun de": { s: 3, c: 4 }, // line-ending
  "bu de hao si de": { s: 5, c: 5 }, // may not die well
  "tian da lei pi de": { s: 3, c: 4 }, // heaven-struck by lightning
  "chu sheng dong xi": { s: 3, c: 4 }, // beast thing
  "ren zha dong xi": { s: 3, c: 4 }, // scum thing
  "fei wu dong xi": { s: 3, c: 4 }, // trash thing
  "la ji dong xi": { s: 3, c: 4 }, // garbage thing
  "si bi yang de": { s: 5, c: 5 }, // dead cunt born
  "ni shi la ji": { s: 3, c: 4 }, // you are garbage
  "ni shi fei wu": { s: 3, c: 4 }, // you are trash
  "ni shi ren zha": { s: 3, c: 4 }, // you are scum
  "ni shi chu sheng": { s: 3, c: 4 }, // you are a beast
  "ni shi sha gua": { s: 1, c: 4 }, // you are a fool
  "ni shi bai chi": { s: 1, c: 4 }, // you are an idiot
  "ni shi ben dan": { s: 3, c: 4 }, // you are a dummy
  "ni shi zhu": { s: 3, c: 4 }, // you are a pig
  "ni shi gou": { s: 3, c: 4 }, // you are a dog
  "ni shi wang ba dan": { s: 3, c: 4 }, // you are a son of a bitch
  "ni shi hun dan": { s: 3, c: 4 }, // you are a bastard
  "ni shi za zhong": { s: 3, c: 4 }, // you are a mongrel
  "ni shi ye zhong": { s: 3, c: 4 }, // you are illegitimate
  "gun ni ma bi": { s: 5, c: 5 }, // fuck off your mother's cunt
  "ni ma le ge bi": { s: 5, c: 5 }, // your mother's cunt
  "wo cao ni da ye": { s: 3, c: 5 }, // I fuck your uncle
  "ni ma de bi": { s: 5, c: 5 }, // your mother's cunt (possessive)
  "cao ni ge bi": { s: 5, c: 5 }, // fuck your cunt
  "cao ni ge xian ren ban ban": { s: 3, c: 5 }, // fuck your ancestor boards
  "ma mai pi de": { s: 5, c: 5 }, // mother selling cunt (Sichuan)
  "ma le ge bi de": { s: 5, c: 5 }, // mother's cunt (exclamation)
  "wo ri ni xian ren": { s: 3, c: 5 }, // I fuck your ancestors
  "gua pi zi": { s: 1, c: 4 }, // stupid skin (Northwestern)
  "gua wa zi a": { s: 1, c: 4 }, // stupid kid ah (Sichuan)
  "gui er de": { s: 3, c: 4 }, // turtle son's (Sichuan)
  "biao zi yang de": { s: 5, c: 4 }, // whore-raised
  "ji nv yang de": { s: 5, c: 4 }, // prostitute-raised
  "pu jie la": { s: 3, c: 4 }, // drop dead (Cantonese pinyin)
  "diu lei lou mou": { s: 3, c: 5 }, // fuck your mother (Cantonese pinyin)
  "diu nei": { s: 3, c: 5 }, // fuck you (Cantonese pinyin)
  "diu nei lo mo": { s: 3, c: 5 }, // fuck your mother (Cantonese pinyin variant)
  "ham gaa caan": { s: 5, c: 5 }, // whole family die (Cantonese pinyin)
  "puk gaai": { s: 3, c: 4 }, // drop dead (Cantonese pinyin)
  "sei puk gaai": { s: 3, c: 4 }, // damn drop dead (Cantonese pinyin)
  "chi sin": { s: 3, c: 4 }, // crazy (Cantonese pinyin)
  "on gau": { s: 1, c: 4 }, // stupid (Cantonese pinyin)
  "sei nui": { s: 3, c: 4 }, // damn girl (Cantonese pinyin)
  "sei zai": { s: 3, c: 4 }, // damn boy (Cantonese pinyin)
  "sei lo": { s: 3, c: 4 }, // damn man (Cantonese pinyin)
  "sei fei po": { s: 1, c: 4 }, // damn fat woman (Cantonese pinyin)
  "fei zai": { s: 1, c: 4 }, // fatty (Cantonese pinyin)
  "lan yeung": { s: 4, c: 4 }, // dick-looking (Cantonese pinyin)
  "hai yeung": { s: 5, c: 5 }, // cunt-looking (Cantonese pinyin)
  "gau yeung": { s: 4, c: 4 }, // dick-looking (Cantonese pinyin variant)
  "han lun": { s: 4, c: 4 }, // suck dick (Cantonese pinyin)
  "sik si": { s: 3, c: 5 }, // eat shit (Cantonese pinyin)
  "sau pei": { s: 3, c: 4 }, // shut up (Cantonese pinyin)
  "fai chai": { s: 3, c: 4 }, // useless person (Cantonese pinyin)
  "gan lin niang": { s: 3, c: 5 }, // fuck your mother (Hokkien pinyin)
  "ka bei": { s: 3, c: 4 }, // damn (Hokkien pinyin)
  "ka bai": { s: 3, c: 4 }, // damn (Hokkien pinyin variant)
  "ka yao": { s: 3, c: 4 }, // damn (Hokkien pinyin variant)
  "ji bai": { s: 5, c: 5 }, // cunt (Hokkien pinyin)
  "lin bei": { s: 1, c: 4 }, // your father (Hokkien pinyin)
  "sa siao": { s: 3, c: 4 }, // what the hell (Hokkien pinyin)
  "li niang": { s: 3, c: 4 }, // your mother (Hokkien pinyin)

  // Additional Internet slang / abbreviations - comprehensive
  "NMD": { s: 2, c: 3 }, // ni ma de (damn)
  "NMDX": { s: 2, c: 3 }, // ni ma de xia (your mother's shrimp, euphemism)
  "CNNM": { s: 3, c: 5 }, // cao ni niang ma (fuck your mother)
  "CND": { s: 3, c: 5 }, // cao ni de (fuck yours)
  "RNM的": { s: 3, c: 5 }, // ri ni ma de (fuck your mother's)
  "RNMB的": { s: 5, c: 5 }, // ri ni ma bi de (fuck your mother's cunt)
  "GDX的": { s: 2, c: 3 }, // gou dong xi de (dog thing's)
  "SB的": { s: 1, c: 4 }, // sha bi de (stupid cunt's)
  "SBnm": { s: 1, c: 4 }, // sha bi ni ma (stupid cunt your mother)
  "QNM": { s: 2, c: 3 }, // qu ni ma (go to your mother)
  "QNMD的": { s: 3, c: 5 }, // qu ni ma de (fuck off)
  "NMB的": { s: 5, c: 5 }, // ni ma bi de (your mother's cunt)
  "WDNM": { s: 2, c: 3 }, // wo de ni ma (my your mother)
  "DLLM的": { s: 2, c: 3 }, // diu lei lou mou (Cantonese)
  "WTF中文": { s: 2, c: 3 }, // WTF in Chinese context
  "RGNM": { s: 2, c: 3 }, // variant abbreviation
  "WQNM": { s: 2, c: 3 }, // wo qu ni ma
  "WQNMLGB": { s: 2, c: 3 }, // wo qu ni ma le ge bi
  "GNMB的东西": { s: 2, c: 3 }, // gan ni ma bi de thing
  "DSB": { s: 1, c: 4 }, // da sha bi (big stupid cunt)
  "DSSB": { s: 1, c: 4 }, // da si sha bi (big dead stupid cunt)
  "NCB": { s: 5, c: 5 }, // nao can bi (brain damaged cunt)
  "SBnew": { s: 1, c: 4 }, // sha bi new (stupid cunt newbie)

  // Homophone evasions - comprehensive expansion
  "糙你妈的": { s: 3, c: 5 }, // fuck your mother's (rough variant)
  "糙你大爷": { s: 3, c: 5 }, // fuck your uncle (rough variant)
  "糙你祖宗": { s: 3, c: 5 }, // fuck your ancestors (rough variant)
  "糙死你": { s: 5, c: 5 }, // rough-fuck you to death
  "艹死你": { s: 5, c: 5 }, // internet-fuck you to death
  "艹你大爷": { s: 3, c: 5 }, // internet-fuck your uncle
  "艹你祖宗": { s: 3, c: 5 }, // internet-fuck your ancestors
  "艹你全家": { s: 3, c: 5 }, // internet-fuck your whole family
  "日尼玛的": { s: 3, c: 5 }, // fuck your mother's (euphemism)
  "日泥马的": { s: 3, c: 5 }, // fuck your mother's (euphemism variant)
  "你马勒逼": { s: 5, c: 5 }, // your horse cunt (euphemism)
  "你麻辣逼": { s: 5, c: 5 }, // your spicy cunt (euphemism)
  "你马拉个逼": { s: 5, c: 5 }, // your horse pull cunt (euphemism)
  "你麻辣隔壁": { s: 2, c: 5 }, // your spicy neighbor (euphemism pun)
  "马勒个逼": { s: 5, c: 5 }, // horse cunt (euphemism)
  "马勒隔壁": { s: 2, c: 5 }, // horse next door (euphemism)
  "妈了个逼的": { s: 5, c: 5 }, // mother's cunt (euphemism)
  "妈了个鸡巴": { s: 4, c: 5 }, // mother's dick (euphemism)
  "你妈的逼": { s: 5, c: 5 }, // your mother's cunt (explicit)
  "我靠你妈": { s: 2, c: 5 }, // I lean your mother (euphemism)
  "我擦你妈": { s: 2, c: 5 }, // I wipe your mother (euphemism)
  "我去你妈": { s: 2, c: 5 }, // I go your mother (euphemism)
  "卧了个大槽": { s: 3, c: 5 }, // holy big shit (euphemism)
  "我了个大去": { s: 2, c: 5 }, // what the big (euphemism)
  "我靠了个去": { s: 2, c: 5 }, // holy damn (euphemism)
  "天了噜": { s: 2, c: 5 }, // oh heavens (euphemism)
  "日了狗了这个": { s: 3, c: 5 }, // what the fuck is this (euphemism)
  "这他妈的": { s: 3, c: 5 }, // this damn
  "那他妈的": { s: 3, c: 5 }, // that damn
  "他妈的逼": { s: 5, c: 5 }, // damn cunt
  "你妈了个大逼": { s: 5, c: 5 }, // your mother's big cunt
  "你妈了个臭逼": { s: 5, c: 5 }, // your mother's stinky cunt
  "去你妈个逼": { s: 5, c: 5 }, // go to your mother's cunt
  "去你妈了个逼": { s: 5, c: 5 }, // go to your mother's cunt
  "法克你": { s: 3, c: 5 }, // fuck you (transliteration)
  "法克鱿们": { s: 3, c: 5 }, // fuck you all (transliteration)
  "法克的": { s: 3, c: 5 }, // fucking (transliteration)
  "达姆": { s: 3, c: 5 }, // damn (transliteration)
  "比奇": { s: 3, c: 5 }, // bitch (transliteration)
  "阿斯霍尔": { s: 3, c: 5 }, // asshole (transliteration)
  "什特": { s: 3, c: 5 }, // shit (transliteration)
  "芬克": { s: 3, c: 5 }, // funk/fuck (transliteration variant)
  "牛B克拉斯": { s: 3, c: 5 }, // fucking class (mixed)
  "妈的智障": { s: 3, c: 5 }, // damn mentally disabled
  "你妈是鸡": { s: 5, c: 5 }, // your mother is a prostitute
  "你妈卖逼": { s: 5, c: 5 }, // your mother sells cunt
  "你妈卖批": { s: 5, c: 5 }, // your mother sells cunt (variant)
  "你妈打炮": { s: 3, c: 5 }, // your mother bangs
  "你爸是龟": { s: 1, c: 5 }, // your father is a turtle (cuckold)
  "你全家死绝": { s: 5, c: 5 }, // may your whole family die out
  "你全家火葬场": { s: 3, c: 5 }, // your whole family crematorium
  "你全家暴毙": { s: 5, c: 5 }, // your whole family sudden death
  "你全家下地狱": { s: 3, c: 5 }, // your whole family go to hell
  "全家暴毙": { s: 5, c: 5 }, // whole family sudden death
  "全家下地狱": { s: 3, c: 5 }, // whole family go to hell
  "全家火葬": { s: 3, c: 5 }, // whole family cremation
  "下地狱": { s: 3, c: 5 }, // go to hell
  "下地狱去吧": { s: 3, c: 5 }, // go to hell
  "你下地狱吧": { s: 3, c: 5 }, // you go to hell

  // Number/letter substitutions used as evasions
  "C你M": { s: 4, c: 5 }, // cao ni ma (substitution)
  "C你MB": { s: 4, c: 5 }, // cao ni ma bi (substitution)
  "R你M": { s: 4, c: 5 }, // ri ni ma (substitution)
  "C你的": { s: 4, c: 5 }, // cao ni de (substitution)
  "C了": { s: 4, c: 5 }, // cao le (substitution)
  "C蛋": { s: 4, c: 5 }, // cao dan (substitution)
  "S你M": { s: 4, c: 5 }, // sha ni ma (substitution)
  "N你M": { s: 4, c: 5 }, // ni ma (substitution)
  "你M的": { s: 4, c: 5 }, // ni ma de (substitution)
  "你M逼": { s: 4, c: 5 }, // ni ma bi (substitution)
  "你M了个B": { s: 4, c: 5 }, // ni ma le ge bi (substitution)
  "去N的": { s: 4, c: 5 }, // qu ni de (substitution)
  "去NM的": { s: 4, c: 5 }, // qu ni ma de (substitution)
  "W操": { s: 4, c: 5 }, // wo cao (substitution)
  "我C": { s: 4, c: 5 }, // wo cao (substitution)
  "我R": { s: 4, c: 5 }, // wo ri (substitution)
  "日NM": { s: 4, c: 5 }, // ri ni ma (substitution)
  "草NM": { s: 4, c: 5 }, // cao ni ma (substitution)
  "操NM": { s: 4, c: 5 }, // cao ni ma (substitution)
  "你个SB": { s: 4, c: 5 }, // ni ge sha bi (substitution)
  "真是SB": { s: 4, c: 5 }, // zhen shi sha bi (substitution)
  "大SB一个": { s: 1, c: 5 }, // a big stupid cunt
  "小SB": { s: 1, c: 5 }, // little stupid cunt
  "这个SB": { s: 1, c: 5 }, // this stupid cunt
  "那个SB": { s: 1, c: 5 }, // that stupid cunt
  "NB的很": { s: 3, c: 5 }, // really fucking awesome
  "牛13": { s: 4, c: 5 }, // niu B (number substitution)
  "2B青年": { s: 1, c: 5 }, // stupid cunt youth (number substitution)
  "S13": { s: 4, c: 5 }, // sha B (number substitution for 傻逼)
  "装13": { s: 4, c: 5 }, // zhuang B (number substitution)
  "你13": { s: 4, c: 5 }, // ni B (number substitution)
  "250": { s: 3, c: 4 }, // idiot (number slang)
  "748": { s: 5, c: 5 }, // go die (number slang: qu si ba)

  // Additional internet meme insults
  "药店碧莲的": { s: 2, c: 3 }, // shameless person (internet pun)
  "城会玩": { s: 2, c: 3 }, // city people know how to play (sarcastic)
  "贵圈真乱": { s: 2, c: 3 }, // your circle is really messed up
  "然并卵的": { s: 2, c: 3 }, // but it's useless (internet)
  "你很社会": { s: 2, c: 3 }, // you're very street (sarcastic)
  "我也是醉了": { s: 1, c: 3 }, // I'm drunk too (exasperated)
  "也是没谁了": { s: 2, c: 3 }, // there's no one like you (negative)
  "给跪了": { s: 2, c: 3 }, // kneeling (overwhelmed, negative)
  "跪着看完的": { s: 2, c: 3 }, // watched while kneeling (sarcastic)
  "沙雕": { s: 1, c: 4 }, // sand sculpture (idiot, homophone euphemism for 傻逼)
  "沙雕网友": { s: 1, c: 4 }, // sand sculpture netizen (idiot)
  "大沙雕": { s: 1, c: 4 }, // big sand sculpture (big idiot)
  "沙雕行为": { s: 1, c: 4 }, // sand sculpture behavior (stupid behavior)
  "铁废物": { s: 2, c: 3 }, // iron waste (truly useless)
  "人形垃圾": { s: 2, c: 3 }, // human-shaped garbage
  "行走的垃圾": { s: 2, c: 3 }, // walking garbage
  "行走的废物": { s: 2, c: 3 }, // walking waste
  "社会垃圾": { s: 2, c: 3 }, // social garbage
  "社会的渣滓": { s: 2, c: 3 }, // dregs of society
  "社会败类": { s: 2, c: 3 }, // social scum
  "人间败类": { s: 2, c: 3 }, // human scum
  "败类中的败类": { s: 2, c: 3 }, // scum among scum
  "垃圾中的垃圾": { s: 2, c: 3 }, // garbage among garbage
  "废物中的废物": { s: 2, c: 3 }, // waste among waste
  "猪队友": { s: 2, c: 3 }, // pig teammate (useless teammate)
  "猪一样的队友": { s: 2, c: 3 }, // teammate like a pig
  "带不动": { s: 2, c: 3 }, // can't carry (useless in gaming)
  "演员": { s: 2, c: 3 }, // actor (someone throwing the game)
  "挂逼": { s: 5, c: 5 }, // hack cunt (cheater)
  "外挂狗": { s: 2, c: 3 }, // hack dog (cheater)
  "神经病": { s: 2, c: 3 }, // psycho
  "精神病": { s: 2, c: 3 }, // mental illness (used as insult)
  "精神病人": { s: 2, c: 3 }, // mental patient (used as insult)
  "精神病院出来的": { s: 2, c: 3 }, // escaped from mental hospital
  "神经病的": { s: 2, c: 3 }, // psycho's
  "你有精神病": { s: 2, c: 3 }, // you have mental illness
  "吃药了没": { s: 2, c: 3 }, // have you taken your medicine
  "吃药去吧": { s: 2, c: 3 }, // go take your medicine
  "该吃药了": { s: 2, c: 3 }, // time to take your medicine
  "你疯了吧": { s: 2, c: 3 }, // you're crazy
  "你傻了吧": { s: 1, c: 4 }, // you're stupid
  "你瞎了吧": { s: 2, c: 3 }, // you're blind
  "你聋了吧": { s: 2, c: 3 }, // you're deaf
  "你脑子有坑吧": { s: 2, c: 3 }, // you have a pit in your brain
  "你脑子有水吧": { s: 2, c: 3 }, // you have water in your brain
  "你脑子有屎吧": { s: 3, c: 5 }, // you have shit in your brain
  "智商感人": { s: 2, c: 3 }, // IQ is touching (sarcastically low)
  "智商堪忧": { s: 2, c: 3 }, // IQ is worrying
  "智商低下": { s: 2, c: 3 }, // low IQ
  "智商为零": { s: 2, c: 3 }, // IQ is zero
  "智商为负": { s: 2, c: 3 }, // IQ is negative
  "智商税": { s: 1, c: 4 }, // IQ tax (buying stupid things)
  "情商为零": { s: 2, c: 3 }, // EQ is zero
  "脑瘫的": { s: 2, c: 3 }, // cerebral palsy (insult)
  "自闭的": { s: 2, c: 3 }, // autistic (insult)
  "脑残粉": { s: 2, c: 3 }, // brain-damaged fan
  "脑残行为": { s: 2, c: 3 }, // brain-damaged behavior
  "脑残逻辑": { s: 2, c: 3 }, // brain-damaged logic
  "脑残想法": { s: 2, c: 3 }, // brain-damaged idea
  "弱鸡行为": { s: 2, c: 3 }, // weak chicken behavior
  "菜鸡行为": { s: 2, c: 3 }, // vegetable chicken behavior
  "辣鸡行为": { s: 2, c: 3 }, // spicy chicken behavior (trash)
  "辣鸡人": { s: 2, c: 3 }, // spicy chicken person (trash person)
  "辣鸡货": { s: 2, c: 3 }, // spicy chicken goods (trash)

  // Additional death/violence curse words
  "弄死你全家": { s: 5, c: 5 }, // I'll kill your whole family
  "整死你全家": { s: 5, c: 5 }, // I'll get your whole family killed
  "打死你妈": { s: 5, c: 5 }, // beat your mother to death
  "杀了你全家": { s: 5, c: 5 }, // kill your whole family
  "剁了你全家": { s: 5, c: 5 }, // chop up your whole family
  "活该去死": { s: 5, c: 5 }, // deserve to go die
  "你活该去死": { s: 5, c: 5 }, // you deserve to go die
  "不得好死的东西": { s: 5, c: 5 }, // thing that won't die well
  "天打雷劈的东西": { s: 5, c: 5 }, // thing struck by lightning
  "全家不得好死": { s: 5, c: 5 }, // whole family won't die well
  "全家天打雷劈": { s: 5, c: 5 }, // whole family struck by lightning
  "断子绝孙的东西": { s: 5, c: 5 }, // thing with no descendants
  "绝后": { s: 5, c: 5 }, // cut off posterity
  "绝种": { s: 5, c: 5 }, // extinct
  "去死去死去死": { s: 5, c: 5 }, // go die go die go die
  "死死死": { s: 5, c: 5 }, // die die die
  "快去死": { s: 5, c: 5 }, // hurry up and die
  "赶紧去死": { s: 5, c: 5 }, // hurry up and die
  "赶紧死": { s: 5, c: 5 }, // hurry up and die (short)
  "立刻去死": { s: 5, c: 5 }, // die immediately
  "马上去死": { s: 5, c: 5 }, // die right now
  "给我去死": { s: 5, c: 5 }, // die for me
  "滚去死": { s: 5, c: 5 }, // roll off and die
  "爬去死": { s: 5, c: 5 }, // crawl off and die

  // Additional traditional Chinese characters (繁体字)
  "幹你娘的": { s: 3, c: 5 }, // fuck your mother's (traditional)
  "幹你媽的": { s: 3, c: 5 }, // fuck your mother's (traditional)
  "幹你爸的": { s: 1, c: 4 }, // fuck your father's (traditional)
  "幹你祖宗的": { s: 3, c: 5 }, // fuck your ancestors' (traditional)
  "幹你全家的": { s: 3, c: 5 }, // fuck your whole family's (traditional)
  "幹死你的": { s: 5, c: 5 }, // fuck you to death (traditional)
  "幹爆你": { s: 3, c: 5 }, // fuck you hard (traditional)
  "幹翻你": { s: 3, c: 5 }, // fuck you over (traditional)
  "操你媽的逼": { s: 5, c: 5 }, // fuck your mother's cunt (traditional)
  "賤人一個": { s: 3, c: 4 }, // a cheap person (traditional)
  "賤貨一個": { s: 3, c: 4 }, // a cheap slut (traditional)
  "蕩婦一個": { s: 5, c: 4 }, // a whore (traditional)
  "婊子一個": { s: 3, c: 4 }, // a bitch (traditional)
  "白癡一個": { s: 1, c: 4 }, // an idiot (traditional)
  "變態一個": { s: 3, c: 4 }, // a pervert (traditional)
  "廢物一個": { s: 3, c: 4 }, // a piece of trash (traditional)
  "人渣一個": { s: 3, c: 4 }, // a scum (traditional)
  "敗類一個": { s: 3, c: 4 }, // a degenerate (traditional)
  "腦殘一個": { s: 3, c: 4 }, // a brain-damaged person (traditional)
  "智障一個": { s: 3, c: 4 }, // a retard (traditional)
  "弱智一個": { s: 3, c: 4 }, // a mentally weak person (traditional)
  "混蛋一個": { s: 3, c: 4 }, // a bastard (traditional)
  "雜種一個": { s: 3, c: 4 }, // a mongrel (traditional)
  "畜牲一個": { s: 3, c: 4 }, // a beast (traditional)
  "禽獸": { s: 3, c: 4 }, // beast (traditional)
  "禽獸不如": { s: 3, c: 4 }, // worse than a beast (traditional)
  "豬狗不如": { s: 3, c: 4 }, // worse than pigs and dogs (traditional)
  "狗都不如的東西": { s: 3, c: 4 }, // thing worse than a dog (traditional)
  "連狗都不如": { s: 3, c: 4 }, // not even as good as a dog (traditional)
  "連豬都不如": { s: 3, c: 4 }, // not even as good as a pig (traditional)
  "不如狗": { s: 3, c: 4 }, // worse than a dog
  "不如猪": { s: 3, c: 4 }, // worse than a pig
  "不如畜生": { s: 3, c: 4 }, // worse than a beast
  "猪狗不如的东西": { s: 3, c: 4 }, // thing worse than pigs and dogs

  // Additional compound curse phrases
  "你这个狗东西": { s: 3, c: 5 }, // you this dog thing
  "你这个烂人": { s: 3, c: 5 }, // you this rotten person
  "你这个臭人": { s: 3, c: 5 }, // you this stinky person
  "你这个死人": { s: 3, c: 5 }, // you this dead person
  "你这个蠢猪": { s: 1, c: 4 }, // you this stupid pig
  "你这个笨蛋": { s: 3, c: 5 }, // you this dummy
  "你这个傻蛋": { s: 1, c: 4 }, // you this fool
  "你这个蠢蛋": { s: 1, c: 4 }, // you this dumb egg
  "你这个蠢驴子": { s: 1, c: 4 }, // you this stupid donkey
  "你这个烂货": { s: 3, c: 5 }, // you this rotten goods
  "你这个贱货": { s: 3, c: 5 }, // you this cheap goods
  "你这个骚货": { s: 3, c: 5 }, // you this slutty goods
  "你这个浪货": { s: 3, c: 5 }, // you this loose goods
  "你这个臭货": { s: 3, c: 5 }, // you this stinky goods
  "你这个臭婊子": { s: 5, c: 5 }, // you this stinky whore
  "你这个贱婊子": { s: 5, c: 5 }, // you this cheap whore
  "你这个死婊子": { s: 5, c: 5 }, // you this damn whore
  "你这个臭三八": { s: 3, c: 5 }, // you this stinky bitch
  "你这个死三八": { s: 3, c: 5 }, // you this damn bitch
  "你这个老三八": { s: 3, c: 5 }, // you this old bitch
  "你这个臭流氓": { s: 3, c: 5 }, // you this stinky hooligan
  "你这个死流氓": { s: 3, c: 5 }, // you this damn hooligan
  "你这个地痞流氓": { s: 3, c: 5 }, // you this thug hooligan
  "你这个痞子流氓": { s: 3, c: 5 }, // you this ruffian hooligan
  "你这个人渣败类": { s: 3, c: 5 }, // you this scum degenerate
  "你这个社会垃圾": { s: 3, c: 5 }, // you this social garbage
  "你这个社会败类": { s: 3, c: 5 }, // you this social scum
  "你这个社会渣滓": { s: 3, c: 5 }, // you this social dregs
  "你这个害虫": { s: 3, c: 5 }, // you this pest
  "你这个寄生虫": { s: 3, c: 5 }, // you this parasite
  "你这个蛆虫": { s: 3, c: 5 }, // you this maggot
  "你这个苍蝇": { s: 3, c: 5 }, // you this fly
  "你这个蟑螂": { s: 4, c: 5 }, // you this cockroach
  "你这个老鼠": { s: 3, c: 5 }, // you this rat
  "你这个臭虫": { s: 3, c: 5 }, // you this stink bug
  "你这个跳蚤": { s: 3, c: 5 }, // you this flea
  "你这个蝇营狗苟的东西": { s: 3, c: 5 }, // you this scheming dog thing
  "臭不可闻的东西": { s: 3, c: 5 }, // unbearably stinky thing
  "烂到骨子里": { s: 3, c: 5 }, // rotten to the bone
  "坏到骨子里": { s: 3, c: 5 }, // bad to the bone
  "贱到骨子里": { s: 3, c: 5 }, // cheap to the bone
  "下贱到骨子里": { s: 3, c: 5 }, // lowly to the bone
  "无耻到极点": { s: 3, c: 5 }, // shameless to the extreme
  "无耻至极": { s: 3, c: 5 }, // extremely shameless
  "卑鄙无耻": { s: 3, c: 5 }, // despicable and shameless
  "卑鄙至极": { s: 3, c: 5 }, // extremely despicable
  "阴险至极": { s: 3, c: 5 }, // extremely treacherous
  "恶心死了": { s: 5, c: 5 }, // disgusting to death
  "恶心到极点": { s: 3, c: 5 }, // disgusting to the extreme
  "恶心人": { s: 3, c: 5 }, // disgusting person
  "恶心死人": { s: 5, c: 5 }, // disgusting to death
  "恶心的东西": { s: 3, c: 5 }, // disgusting thing
  "令人作呕": { s: 3, c: 5 }, // makes people vomit
  "令人恶心": { s: 3, c: 5 }, // makes people disgusted

  // Additional sexual insults and terms
  "阳痿": { s: 1, c: 4 }, // impotence
  "阳痿男": { s: 1, c: 4 }, // impotent man
  "早泄": { s: 1, c: 4 }, // premature ejaculation
  "早泄男": { s: 1, c: 4 }, // premature ejaculation man
  "性冷淡": { s: 1, c: 4 }, // frigid
  "性变态": { s: 1, c: 4 }, // sexual pervert
  "性狂": { s: 1, c: 4 }, // sex maniac
  "性瘾": { s: 1, c: 4 }, // sex addict
  "露阴癖": { s: 1, c: 4 }, // exhibitionism
  "露出癖的": { s: 1, c: 4 }, // exhibitionist's
  "窥阴癖的": { s: 1, c: 4 }, // voyeurist's
  "恋足癖的": { s: 1, c: 4 }, // foot fetishist's
  "恋童的": { s: 5, c: 5 }, // pedophilic
  "恋童癖者": { s: 5, c: 5 }, // pedophile (person)
  "鸡巴脸": { s: 4, c: 4 }, // dick face
  "鸡巴头": { s: 4, c: 4 }, // dickhead
  "鸡巴样": { s: 4, c: 4 }, // dick-looking
  "鸡巴东西": { s: 4, c: 4 }, // dick thing
  "鸡巴人": { s: 4, c: 4 }, // dick person
  "骚逼货": { s: 5, c: 5 }, // slutty cunt goods
  "骚逼样": { s: 5, c: 5 }, // slutty cunt looking
  "骚逼的": { s: 5, c: 5 }, // slutty cunt's
  "骚穴的": { s: 1, c: 4 }, // slutty hole's
  "骚逼女人": { s: 5, c: 5 }, // slutty cunt woman
  "骚逼男人": { s: 5, c: 5 }, // slutty cunt man
  "大奶子": { s: 4, c: 4 }, // big tits
  "大奶牛": { s: 4, c: 4 }, // big milk cow (big-titted)
  "平胸": { s: 1, c: 4 }, // flat chest
  "平胸女": { s: 1, c: 4 }, // flat-chested woman
  "搓衣板": { s: 1, c: 4 }, // washboard (flat chest insult)
  "太平公主": { s: 1, c: 4 }, // Princess Taiping (flat chest insult)
  "阴道松弛": { s: 4, c: 4 }, // loose vagina
  "松逼": { s: 5, c: 5 }, // loose cunt
  "紧逼": { s: 5, c: 5 }, // tight cunt
  "处女逼": { s: 5, c: 5 }, // virgin cunt
  "破处": { s: 1, c: 4 }, // break virginity
  "被破处": { s: 1, c: 4 }, // have virginity broken
  "开苞": { s: 1, c: 4 }, // deflower
  "初夜权": { s: 1, c: 4 }, // right of first night
  "肉体补偿": { s: 1, c: 4 }, // bodily compensation
  "潜规则": { s: 1, c: 4 }, // unspoken rules (casting couch)
  "被潜规则": { s: 1, c: 4 }, // subjected to unspoken rules

  // Gaming/internet insult culture
  "坑逼": { s: 5, c: 5 }, // pit cunt (person who makes others lose)
  "坑货": { s: 2, c: 3 }, // pit goods (useless person in games)
  "坑逼队友": { s: 5, c: 5 }, // pit cunt teammate
  "送人头": { s: 2, c: 3 }, // giving away kills
  "送逼": { s: 2, c: 3 }, // giving away kills (vulgar)
  "挂狗": { s: 2, c: 3 }, // hack dog
  "开挂逼": { s: 5, c: 5 }, // hacking cunt
  "外挂逼": { s: 5, c: 5 }, // cheat cunt
  "代练狗": { s: 2, c: 3 }, // boosting dog
  "演逼": { s: 5, c: 5 }, // acting cunt (pretending)
  "装死逼": { s: 5, c: 5 }, // playing dead cunt
  "鸽逼": { s: 5, c: 5 }, // pigeon cunt (person who stands others up)
  "白嫖逼": { s: 5, c: 5 }, // freeloading cunt
  "白嫖狗": { s: 2, c: 3 }, // freeloading dog
  "白嫖怪": { s: 2, c: 3 }, // freeloading monster
  "伸手党": { s: 2, c: 3 }, // reaching-hand party (always asking for freebies)
  "吃瓜群众": { s: 3, c: 3 }, // melon-eating masses (can be derogatory)
  "圣母逼": { s: 5, c: 5 }, // holy mother cunt (fake virtue)
  "心机逼": { s: 5, c: 5 }, // scheming cunt
  "绿茶逼": { s: 5, c: 5 }, // green tea cunt (fake innocent)
  "白莲花逼": { s: 5, c: 5 }, // white lotus cunt (fake innocent)
  "双标逼": { s: 5, c: 5 }, // double-standard cunt
  "双标狗": { s: 2, c: 3 }, // double-standard dog
  "杠精逼": { s: 5, c: 5 }, // contrarian cunt
  "喷子逼": { s: 5, c: 5 }, // troll cunt
  "键盘侠逼": { s: 5, c: 5 }, // keyboard warrior cunt
  "圣母婊的": { s: 2, c: 3 }, // holy mother bitch's
  "心机婊的": { s: 2, c: 3 }, // scheming bitch's
  "绿茶婊的": { s: 2, c: 3 }, // green tea bitch's

  // Additional Cantonese romanizations (Jyutping/Yale)
  "diu nei lo mo chau hai": { s: 5, c: 5 }, // fuck your mother stinky cunt (Cantonese)
  "diu lei": { s: 3, c: 5 }, // fuck you (Cantonese variant)
  "diu lei lo mo": { s: 3, c: 5 }, // fuck your mother (Cantonese)
  "diu lei lo mo ge hai": { s: 5, c: 5 }, // fuck your mother's cunt (Cantonese)
  "diu lei go hai": { s: 5, c: 5 }, // fuck your cunt (Cantonese)
  "puk gai": { s: 3, c: 4 }, // drop dead (Cantonese)
  "sei puk gai": { s: 3, c: 4 }, // damn drop dead (Cantonese)
  "ham gaa ling": { s: 3, c: 4 }, // whole family (curse, Cantonese)
  "sei zan": { s: 3, c: 4 }, // damn kid (Cantonese)
  "sei neoi": { s: 3, c: 4 }, // damn girl (Cantonese)
  "fei po": { s: 1, c: 4 }, // fat woman (Cantonese)
  "ci sin": { s: 3, c: 4 }, // crazy (Cantonese)
  "fai caai": { s: 3, c: 4 }, // useless (Cantonese)
  "haam sap": { s: 3, c: 4 }, // perverted (Cantonese)
  "haam sap lo": { s: 3, c: 4 }, // perverted man (Cantonese)
  "baat po": { s: 3, c: 4 }, // gossipy woman (Cantonese)
  "siu pei": { s: 3, c: 4 }, // shut up/piss off (Cantonese)
  "sik si la": { s: 3, c: 5 }, // eat shit (Cantonese)

  // Additional Hokkien romanizations (POJ/Tai-lo)
  "kan lin niang": { s: 3, c: 5 }, // fuck your mother (Hokkien)
  "kan li niang": { s: 3, c: 5 }, // fuck your mother (Hokkien variant)
  "kan lin nioh": { s: 3, c: 5 }, // fuck your mother (Hokkien variant)
  "khau pe": { s: 1, c: 4 }, // cry for father (Hokkien)
  "khau bu": { s: 3, c: 4 }, // cry for mother (Hokkien)
  "khau pe khau bu": { s: 3, c: 4 }, // cry for dad and mom (Hokkien)
  "ki pai": { s: 5, c: 5 }, // cunt (Hokkien)
  "chau ki pai": { s: 5, c: 5 }, // stinky cunt (Hokkien)
  "lin pe": { s: 1, c: 4 }, // your father (Hokkien)
  "lin bu": { s: 3, c: 4 }, // your mother (Hokkien)
  "sa siau": { s: 3, c: 4 }, // what the hell (Hokkien)
  "siong sa siau": { s: 3, c: 4 }, // what the hell (Hokkien variant)
  "chau cha bo": { s: 3, c: 4 }, // stinky woman (Hokkien)
  "gong siann": { s: 3, c: 4 }, // talking nonsense (Hokkien)
  "si gin na": { s: 3, c: 4 }, // damn kid (Hokkien)
  "iau siu": { s: 3, c: 4 }, // damn/short-lived (Hokkien)
  "ti ko": { s: 3, c: 4 }, // perverted man (Hokkien)
  "beh bin": { s: 3, c: 4 }, // horse face (Hokkien insult)
  "peh bak": { s: 3, c: 4 }, // white eyes/clueless (Hokkien)
  "bo lo iong": { s: 3, c: 4 }, // useless (Hokkien)
  "lan pha": { s: 4, c: 4 }, // dick/balls (Hokkien)
  "lan ciau": { s: 4, c: 4 }, // dick bird (Hokkien)
  "ka ciau": { s: 4, c: 4 }, // fake bird/dick (Hokkien)

  // Additional number/symbol evasions
  "我C了": { s: 3, c: 5 }, // I fucked (C = cao)
  "你他C的": { s: 3, c: 5 }, // you his C's (C = cao)
  "我R了": { s: 3, c: 5 }, // I R'd (R = ri, fucked)
  "R你的": { s: 3, c: 5 }, // R yours (R = ri)
  "S B": { s: 3, c: 5 }, // sha bi with space
  "S.B.": { s: 3, c: 5 }, // sha bi with dots
  "S B 货": { s: 3, c: 5 }, // sha bi goods with spaces
  "N B": { s: 3, c: 5 }, // niu bi with space
  "N.B.": { s: 3, c: 5 }, // niu bi with dots
  "2 B": { s: 3, c: 5 }, // er bi with space
  "T M D": { s: 3, c: 5 }, // ta ma de with spaces
  "T.M.D.": { s: 3, c: 5 }, // ta ma de with dots
  "C N M": { s: 3, c: 5 }, // cao ni ma with spaces
  "C.N.M.": { s: 3, c: 5 }, // cao ni ma with dots
  "C N M B": { s: 3, c: 5 }, // cao ni ma bi with spaces
  "W C": { s: 3, c: 5 }, // wo cao with space
  "W.C.的": { s: 3, c: 5 }, // wo cao with dots
  "J B": { s: 3, c: 5 }, // ji ba with space
  "J.B.": { s: 3, c: 5 }, // ji ba with dots
  "N M S L": { s: 3, c: 5 }, // ni ma si le with spaces
  "G D X": { s: 3, c: 5 }, // gou dong xi with spaces
  "G.D.X.": { s: 3, c: 5 }, // gou dong xi with dots
  "R N M": { s: 3, c: 5 }, // ri ni ma with spaces
  "R.N.M.": { s: 3, c: 5 }, // ri ni ma with dots
  "Q N M D": { s: 3, c: 5 }, // qu ni ma de with spaces
  "M M P": { s: 3, c: 5 }, // ma mai pi with spaces
  "M.M.P.": { s: 3, c: 5 }, // ma mai pi with dots
  "W N M": { s: 3, c: 5 }, // wo ni ma with spaces

  // Additional homophone character evasions
  "你嬤的": { s: 2, c: 5 }, // your grandmother's (euphemism)
  "你媽了個逼": { s: 5, c: 5 }, // your mother's cunt (traditional)
  "你嘛了個逼": { s: 5, c: 5 }, // your (euphemism) cunt
  "草泥马的": { s: 3, c: 5 }, // fuck your mother's (euphemism)
  "草泥马逼": { s: 5, c: 5 }, // fuck your mother's cunt (euphemism)
  "草泥吗": { s: 3, c: 5 }, // fuck your (euphemism)
  "操泥马": { s: 3, c: 5 }, // fuck mud horse (euphemism)
  "操尼玛": { s: 3, c: 5 }, // fuck your mother (euphemism)
  "日泥马": { s: 3, c: 5 }, // fuck mud horse (euphemism)
  "日尼马": { s: 3, c: 5 }, // fuck your mother (euphemism variant)
  "日尼妈逼": { s: 5, c: 5 }, // fuck your mother's cunt (euphemism)
  "你吗逼": { s: 5, c: 5 }, // your (euphemism) cunt
  "你嘛逼": { s: 5, c: 5 }, // your (euphemism) cunt
  "妈了个鸡的": { s: 2, c: 5 }, // mother's chicken (euphemism)
  "妈了个鸡巴的": { s: 4, c: 5 }, // mother's dick (euphemism)
  "我擦了": { s: 2, c: 5 }, // I wiped (euphemism for 我操了)
  "我靠了": { s: 2, c: 5 }, // I leaned (euphemism for 我操)
  "我日了个仙人": { s: 3, c: 5 }, // I fucked an immortal (euphemism)
  "卧了个大草": { s: 3, c: 5 }, // holy big grass (euphemism)
  "我了个去的": { s: 2, c: 5 }, // what the hell (euphemism)
  "你麻痹的": { s: 2, c: 5 }, // your paralysis's (euphemism)
  "你马痹的": { s: 2, c: 5 }, // your horse paralysis's (euphemism)
  "你马壁的": { s: 2, c: 5 }, // your horse wall's (euphemism)
  "草拟吗": { s: 3, c: 5 }, // grass draft (euphemism)
  "草拟妈": { s: 3, c: 5 }, // grass draft mom (euphemism)
  "曹尼玛": { s: 3, c: 5 }, // Cao Ni Ma (name disguise)
  "曹你妈": { s: 3, c: 5 }, // Cao your mother (name disguise)
  "糙你吗": { s: 2, c: 5 }, // rough you (euphemism)
  "操你吗": { s: 3, c: 5 }, // fuck you (euphemism question)
  "肏你吗": { s: 3, c: 5 }, // vulgar fuck you (euphemism question)
  "去尼妈的": { s: 2, c: 5 }, // go to your mother's (euphemism)
  "去你吗的": { s: 2, c: 5 }, // go to yours (euphemism)
  "滚尼妈的": { s: 2, c: 5 }, // get lost your mother's (euphemism)
  "滚泥马的": { s: 2, c: 5 }, // get lost mud horse's (euphemism)

  // Profanity with common misspellings/typos
  "操你吗的": { s: 3, c: 5 }, // fuck your mother (typo variant)
  "操你嘛的": { s: 3, c: 5 }, // fuck your mother (typo variant)
  "日你嘛的": { s: 3, c: 5 }, // fuck your mother (typo variant)
  "草你嘛的": { s: 3, c: 5 }, // fuck your mother (typo variant)
  "傻B的": { s: 1, c: 5 }, // stupid cunt's (typo variant)
  "牛B的": { s: 3, c: 5 }, // fucking awesome (typo variant)
  "装B的": { s: 3, c: 5 }, // pretentious person (typo variant)
  "你妈B的": { s: 5, c: 5 }, // your mom's cunt (typo variant)
  "操B的": { s: 5, c: 5 }, // fuck cunt's (typo variant)
  "日B的": { s: 5, c: 5 }, // fuck cunt's (typo variant)
  "干B的": { s: 5, c: 5 }, // fuck cunt's (typo variant)

  // Additional phrases commonly used as profanity
  "去你妈的蛋": { s: 3, c: 4 }, // go to your mother's egg
  "你算老几": { s: 3, c: 4 }, // who do you think you are
  "你算什么玩意": { s: 3, c: 4 }, // what kind of thing are you
  "你算个毛": { s: 3, c: 4 }, // you count as a hair (worthless)
  "你算个屁啊": { s: 3, c: 4 }, // you count as a fart
  "你算个锤子": { s: 4, c: 4 }, // you count as a dick (Sichuan)
  "你算个鸟": { s: 3, c: 4 }, // you count as a bird (worthless)
  "鸟人": { s: 3, c: 4 }, // bird person (worthless person)
  "鸟事": { s: 3, c: 4 }, // bird business (worthless matter)
  "屁大点事": { s: 3, c: 4 }, // fart-sized matter
  "放你妈的狗屁": { s: 3, c: 4 }, // release your mother's dog fart
  "放你妈的臭屁": { s: 3, c: 4 }, // release your mother's stinky fart
  "满嘴放屁": { s: 3, c: 4 }, // mouth full of farts
  "满嘴喷粪的": { s: 3, c: 5 }, // mouth spraying shit
  "狗嘴吐不出象牙": { s: 3, c: 4 }, // can't get ivory from dog's mouth
  "狗改不了吃屎": { s: 3, c: 5 }, // dog can't stop eating shit
  "你是狗": { s: 3, c: 4 }, // you are a dog
  "你就是条狗": { s: 3, c: 4 }, // you're just a dog
  "你连狗都不如": { s: 3, c: 4 }, // you're not even as good as a dog
  "你连猪都不如": { s: 3, c: 4 }, // you're not even as good as a pig
  "你连虫子都不如": { s: 3, c: 4 }, // you're not even as good as a bug
  "你连蛆都不如": { s: 3, c: 4 }, // you're not even as good as a maggot
  "狗一样的东西": { s: 3, c: 4 }, // thing like a dog
  "猪一样的东西": { s: 3, c: 4 }, // thing like a pig
  "虫子一样的东西": { s: 3, c: 4 }, // thing like a bug
  "人不人鬼不鬼": { s: 3, c: 4 }, // neither human nor ghost
  "半人不鬼的东西": { s: 3, c: 4 }, // half-human half-ghost thing
  "丧家犬": { s: 3, c: 4 }, // homeless dog
  "丧家之犬": { s: 3, c: 4 }, // dog that lost its home
  "过街老鼠": { s: 3, c: 4 }, // rat crossing the street (universally despised)
  "人人喊打": { s: 3, c: 4 }, // everyone shouts to hit (universally hated)

  // Additional LGBTQ-related slurs (used derogatorily in Chinese)
  "死变态的": { s: 5, c: 4 }, // damn pervert's
  "娘炮的": { s: 5, c: 4 }, // sissy's
  "死人妖的": { s: 5, c: 4 }, // damn ladyboy's
  "公公": { s: 5, c: 4 }, // eunuch (derogatory for effeminate men)
  "太监": { s: 5, c: 4 }, // eunuch (derogatory)
  "阉人": { s: 5, c: 4 }, // castrated person (derogatory)
  "不男不女的": { s: 5, c: 4 }, // neither man nor woman
  "不男不女的东西": { s: 5, c: 4 }, // neither man nor woman thing
  "死gay的": { s: 5, c: 4 }, // damn gay's
  "死拉拉的": { s: 5, c: 4 }, // damn lesbian's
  "搞基的东西": { s: 5, c: 4 }, // gay thing
  "男男的": { s: 5, c: 4 }, // male-male (derogatory context)
  "女女的": { s: 5, c: 4 }, // female-female (derogatory context)
  "玻璃的": { s: 5, c: 4 }, // glass (gay slur)
  "断袖的": { s: 5, c: 4 }, // cut sleeve (gay slur)
  "断背的": { s: 5, c: 4 }, // brokeback (gay slur)

  // Additional ethnic/regional slurs
  "蝗虫的": { s: 5, c: 4 }, // locust's (mainlander slur)
  "支那猪": { s: 5, c: 5 }, // China pig (extreme slur)
  "支那狗": { s: 5, c: 5 }, // China dog (extreme slur)
  "支那鬼": { s: 5, c: 5 }, // China ghost (extreme slur)
  "东亚病夫的": { s: 5, c: 4 }, // sick man of East Asia
  "小鬼子": { s: 5, c: 4 }, // little devil (anti-Japanese)
  "日本狗": { s: 5, c: 4 }, // Japanese dog
  "日本猪": { s: 5, c: 4 }, // Japanese pig
  "高丽棒子的": { s: 5, c: 4 }, // Korean stick's
  "棒子的": { s: 5, c: 4 }, // stick's (Korean slur)
  "阿三的": { s: 5, c: 4 }, // Ah San's (Indian slur)
  "黑皮": { s: 5, c: 4 }, // black skin (racial slur)
  "黑鬼的": { s: 5, c: 4 }, // n-word's
  "白皮": { s: 5, c: 4 }, // white skin (racial slur)
  "白皮猪的": { s: 5, c: 4 }, // white pig's
  "红脖子": { s: 5, c: 4 }, // redneck
  "洋鬼子的": { s: 5, c: 4 }, // foreign devil's
  "红毛鬼": { s: 5, c: 4 }, // red-hair ghost (Westerner slur)
  "番鬼的": { s: 5, c: 4 }, // foreign ghost's
  "鬼佬的": { s: 5, c: 4 }, // foreigner's (Cantonese)
  "北佬的": { s: 5, c: 4 }, // northerner's (Cantonese derogatory)
  "南蛮子的": { s: 5, c: 4 }, // southern barbarian's
  "乡巴佬的": { s: 5, c: 4 }, // country bumpkin's
  "土包子的": { s: 5, c: 4 }, // hillbilly's
  "外地人的": { s: 5, c: 4 }, // outsider's
  "农民工": { s: 5, c: 4 }, // migrant worker (derogatory context)
  "下等人": { s: 5, c: 4 }, // lower class person
  "低等人": { s: 5, c: 4 }, // lower grade person
  "劣等人": { s: 5, c: 4 }, // inferior person
  "贱民": { s: 5, c: 4 }, // untouchable/lowly person

  // Additional compound vulgarities with 操/日/草/肏
  "操你姥姥": { s: 3, c: 5 }, // fuck your maternal grandmother
  "操你奶奶的": { s: 3, c: 5 }, // fuck your grandmother's
  "操你姐的": { s: 3, c: 5 }, // fuck your sister's
  "操你妹的": { s: 3, c: 5 }, // fuck your younger sister's
  "日你姥姥": { s: 3, c: 5 }, // fuck your maternal grandmother
  "日你奶奶": { s: 3, c: 5 }, // fuck your grandmother
  "日你姐": { s: 3, c: 5 }, // fuck your sister
  "日你妹": { s: 3, c: 5 }, // fuck your younger sister
  "日你全家女性": { s: 3, c: 5 }, // fuck all women in your family
  "草你姥姥": { s: 3, c: 5 }, // fuck your maternal grandmother (variant)
  "草你奶奶": { s: 3, c: 5 }, // fuck your grandmother (variant)
  "肏你姥姥": { s: 3, c: 5 }, // fuck your maternal grandmother (vulgar)
  "肏你奶奶": { s: 3, c: 5 }, // fuck your grandmother (vulgar)
  "肏你全家": { s: 3, c: 5 }, // fuck your whole family (vulgar)
  "操死你妈": { s: 5, c: 5 }, // fuck your mother to death
  "操死你全家": { s: 5, c: 5 }, // fuck your whole family to death
  "操烂你妈": { s: 3, c: 5 }, // fuck your mother to ruin
  "操翻你妈": { s: 3, c: 5 }, // fuck your mother over
  "日死你妈": { s: 5, c: 5 }, // fuck your mother to death (variant)
  "日烂你妈": { s: 3, c: 5 }, // fuck your mother to ruin (variant)
  "草死你妈": { s: 5, c: 5 }, // fuck your mother to death (variant)
  "肏死你妈": { s: 5, c: 5 }, // fuck your mother to death (vulgar)
  "被操的": { s: 3, c: 5 }, // the fucked one
  "被日的": { s: 3, c: 5 }, // the fucked one (variant)
  "被草的": { s: 3, c: 5 }, // the fucked one (variant)
  "被肏的": { s: 3, c: 5 }, // the fucked one (vulgar)
  "给人操": { s: 3, c: 5 }, // let people fuck
  "给人日": { s: 3, c: 5 }, // let people fuck (variant)
  "给人草": { s: 3, c: 5 }, // let people fuck (variant)
  "人人操": { s: 3, c: 5 }, // everyone fucks
  "人人日": { s: 3, c: 5 }, // everyone fucks (variant)
  "千人操": { s: 3, c: 5 }, // thousand people fuck
  "万人操": { s: 3, c: 5 }, // ten thousand people fuck
  "千人骑": { s: 3, c: 5 }, // thousand people ride
  "万人骑": { s: 3, c: 5 }, // ten thousand people ride

  // Additional scatological insults
  "狗屎一堆": { s: 3, c: 5 }, // a pile of dog shit
  "你就是一坨屎": { s: 3, c: 5 }, // you're a pile of shit
  "一坨屎": { s: 3, c: 5 }, // a pile of shit
  "屎一样的东西": { s: 3, c: 5 }, // thing like shit
  "放屁的": { s: 3, c: 4 }, // fart's / one who farts
  "满嘴放屁的": { s: 3, c: 4 }, // one with mouth full of farts
  "拉屎的": { s: 3, c: 5 }, // one who shits
  "吃屎的": { s: 3, c: 5 }, // one who eats shit
  "吃屎狗": { s: 3, c: 5 }, // shit-eating dog
  "吃屎的东西": { s: 3, c: 5 }, // shit-eating thing
  "屎壳郎": { s: 3, c: 4 }, // dung beetle (insult)
  "粪叉子": { s: 3, c: 4 }, // manure fork (insult)
  "粪坑": { s: 3, c: 4 }, // manure pit
  "粪坑里的石头": { s: 3, c: 4 }, // stone in a manure pit (stinky and hard)
  "茅坑": { s: 3, c: 4 }, // outhouse
  "茅坑里的石头": { s: 3, c: 4 }, // stone in an outhouse
  "你就是个茅坑": { s: 3, c: 4 }, // you're an outhouse
  "臭气熏天": { s: 3, c: 4 }, // stinking to high heaven
  "臭不可闻的人": { s: 3, c: 4 }, // person too stinky to smell

  // Additional phrases used as euphemistic profanity
  "你大爷的蛋": { s: 3, c: 4 }, // your uncle's egg
  "你大爷的腿": { s: 3, c: 4 }, // your uncle's leg
  "你大爷的头": { s: 3, c: 4 }, // your uncle's head
  "你奶奶个腿": { s: 3, c: 4 }, // your grandmother's leg
  "你姥姥个腿": { s: 3, c: 4 }, // your maternal grandmother's leg
  "你姥姥个熊": { s: 3, c: 4 }, // your maternal grandmother's bear
  "我了个大去啊": { s: 3, c: 4 }, // what the big hell
  "我去你大爷的": { s: 3, c: 4 }, // I go to your uncle's
  "我去你妈个蛋": { s: 3, c: 4 }, // I go to your mother's egg
  "你妈个头": { s: 3, c: 4 }, // your mother's head
  "你妈个蛋": { s: 3, c: 4 }, // your mother's egg
  "你妈个腿": { s: 3, c: 4 }, // your mother's leg
  "你妈个叉": { s: 3, c: 4 }, // your mother's fork
  "你妈个鬼": { s: 3, c: 4 }, // your mother's ghost
  "去你个大头鬼": { s: 3, c: 4 }, // go to your big-headed ghost
  "去你个蛋": { s: 3, c: 4 }, // go to your egg
  "去你个腿": { s: 3, c: 4 }, // go to your leg
  "去你个头": { s: 3, c: 4 }, // go to your head
  "去你个叉": { s: 3, c: 4 }, // go to your fork
  "滚你个蛋": { s: 3, c: 4 }, // roll your egg (get lost)
  "滚你个头": { s: 3, c: 4 }, // roll your head (get lost)
  "滚一边去": { s: 3, c: 4 }, // roll to the side (get lost)
  "滚一边玩去": { s: 3, c: 4 }, // roll aside and play (dismissive)
  "有多远滚多远": { s: 3, c: 4 }, // roll as far as you can
  "爱滚不滚": { s: 3, c: 4 }, // roll if you want (dismissive)
  "赶紧滚": { s: 3, c: 4 }, // hurry up and get lost
  "立刻滚": { s: 3, c: 4 }, // immediately get lost
  "马上滚": { s: 3, c: 4 }, // get lost right now
  "给我滚": { s: 3, c: 4 }, // get lost (imperative)
  "快滚吧你": { s: 3, c: 4 }, // hurry up and get lost
  "滚吧你": { s: 3, c: 4 }, // get lost you
  "你给我滚": { s: 3, c: 4 }, // you get lost for me
  "你赶紧给我滚": { s: 3, c: 4 }, // you hurry up and get lost for me

  // Political/social insults used in profanity
  "五毛狗": { s: 1, c: 4 }, // fifty-cent dog
  "五毛逼": { s: 5, c: 5 }, // fifty-cent cunt
  "小粉红逼": { s: 5, c: 5 }, // little pink cunt
  "小粉红狗": { s: 1, c: 4 }, // little pink dog
  "公知狗": { s: 1, c: 4 }, // public intellectual dog
  "公知逼": { s: 5, c: 5 }, // public intellectual cunt
  "带路党狗": { s: 1, c: 4 }, // guide party dog
  "精日狗": { s: 1, c: 4 }, // spiritual Japanese dog
  "精美狗": { s: 1, c: 4 }, // spiritual American dog
  "慕洋犬的": { s: 1, c: 4 }, // foreign-worshipping dog's
  "恨国党狗": { s: 1, c: 4 }, // hate-country party dog
  "舔狗的": { s: 1, c: 4 }, // simp's
  "舔逼": { s: 5, c: 5 }, // licking cunt (simp, vulgar)
  "舔狗舔到最后": { s: 1, c: 4 }, // simp to the end
  "舔到最后一无所有": { s: 1, c: 4 }, // lick until you have nothing
  "海王逼": { s: 5, c: 5 }, // sea king cunt (player)
  "渣男逼": { s: 5, c: 5 }, // scum man cunt
  "渣女逼": { s: 5, c: 5 }, // scum woman cunt
  "渣逼": { s: 5, c: 5 }, // scum cunt
  "绿帽王逼": { s: 5, c: 5 }, // cuckold king cunt
  "接盘逼": { s: 5, c: 5 }, // plate-catcher cunt
  "备胎逼": { s: 5, c: 5 }, // spare tire cunt
  "工具人逼": { s: 5, c: 5 }, // tool person cunt
  "老六逼": { s: 5, c: 5 }, // sneaky cunt
  "软饭逼": { s: 5, c: 5 }, // soft rice cunt (kept person)
  "小白脸逼": { s: 5, c: 5 }, // pretty boy cunt

  // Additional Mandarin profanity with tone marks (for romanization filters)
  "cào nǐ mā": { s: 3, c: 5 }, // fuck your mother (with tones)
  "cào": { s: 3, c: 5 }, // fuck (with tone)
  "rì nǐ mā": { s: 3, c: 5 }, // fuck your mother (with tones)
  "shǎ bī": { s: 1, c: 4 }, // stupid cunt (with tones)
  "niú bī": { s: 3, c: 5 }, // fucking awesome (with tones)
  "gǔn": { s: 3, c: 4 }, // get lost (with tone)
  "gǔn dàn": { s: 3, c: 4 }, // get lost (with tones)
  "qù sǐ": { s: 5, c: 5 }, // go die (with tones)
  "tā mā de": { s: 3, c: 4 }, // damn it (with tones)
  "mā de": { s: 3, c: 4 }, // damn (with tones)
  "wǒ cào": { s: 3, c: 5 }, // holy fuck (with tones)
  "nǐ mā": { s: 3, c: 4 }, // your mother (with tones)
  "nǐ mā bī": { s: 5, c: 5 }, // your mother's cunt (with tones)
  "jī bā": { s: 4, c: 4 }, // dick (with tones)
  "gǒu rì de": { s: 3, c: 5 }, // dog-fucked (with tones)
  "wáng bā dàn": { s: 3, c: 4 }, // son of a bitch (with tones)
  "hún dàn": { s: 3, c: 4 }, // bastard (with tones)
  "zá zhǒng": { s: 3, c: 4 }, // mongrel (with tones)
  "biǎo zi": { s: 5, c: 4 }, // whore (with tones)
  "jiàn rén": { s: 3, c: 4 }, // cheap person (with tones)
  "fèi wù": { s: 3, c: 4 }, // trash (with tones)
  "bái chī": { s: 1, c: 4 }, // idiot (with tones)
  "biàn tài": { s: 3, c: 4 }, // pervert (with tones)
  "sǎo huò": { s: 3, c: 4 }, // slut (with tones)
  "dàng fù": { s: 5, c: 4 }, // whore (with tones)
  "chù shēng": { s: 3, c: 4 }, // beast (with tones)
  "rén zhā": { s: 3, c: 4 }, // scum (with tones)

  // More additional compound insults
  "脑子是摆设": { s: 1, c: 4 }, // brain is just decoration
  "脑子是装饰品": { s: 1, c: 4 }, // brain is an ornament
  "脑子进水了吧": { s: 1, c: 4 }, // brain filled with water
  "脑子被门夹了吧": { s: 1, c: 4 }, // brain caught in door
  "脑子被驴踢了吧": { s: 1, c: 4 }, // brain kicked by donkey
  "脑子里装的都是屎": { s: 3, c: 5 }, // brain filled with shit
  "脑子里装的都是草": { s: 3, c: 4 }, // brain filled with grass
  "你是吃屎长大的吧": { s: 3, c: 5 }, // you grew up eating shit right
  "你是猪投胎的吧": { s: 1, c: 4 }, // you were reincarnated from a pig
  "你是狗投胎的吧": { s: 1, c: 4 }, // you were reincarnated from a dog
  "你是驴投胎的吧": { s: 1, c: 4 }, // you were reincarnated from a donkey
  "你妈生你的时候后悔了吧": { s: 1, c: 4 }, // your mom regretted giving birth to you
  "你妈生你还不如生块叉烧": { s: 1, c: 4 }, // your mom should've given birth to BBQ pork
  "生你不如生条狗": { s: 1, c: 4 }, // better to birth a dog than you
  "生你不如生块豆腐": { s: 1, c: 4 }, // better to birth tofu than you
  "白生了你": { s: 1, c: 4 }, // wasted giving birth to you
  "白养了你": { s: 1, c: 4 }, // wasted raising you
  "浪费粮食": { s: 1, c: 4 }, // wasting food (your existence)
  "浪费空气": { s: 1, c: 4 }, // wasting air (your existence)
  "浪费氧气": { s: 1, c: 4 }, // wasting oxygen
  "浪费水": { s: 1, c: 4 }, // wasting water
  "浪费资源": { s: 1, c: 4 }, // wasting resources
  "社会的蛀虫": { s: 1, c: 4 }, // society's wood worm
  "国家的蛀虫": { s: 1, c: 4 }, // nation's wood worm
  "社会的毒瘤": { s: 1, c: 4 }, // society's tumor
  "社会的垃圾堆": { s: 1, c: 4 }, // society's garbage dump
  "人类的耻辱": { s: 1, c: 4 }, // shame of humanity
  "人类的败类": { s: 1, c: 4 }, // scum of humanity
  "人类的渣滓": { s: 1, c: 4 }, // dregs of humanity
  "你是人类的耻辱": { s: 1, c: 4 }, // you are shame of humanity
  "你是社会的毒瘤": { s: 1, c: 4 }, // you are society's tumor

  // Cross-language profanity commonly used in Chinese internet
  "fuck你": { s: 3, c: 5 }, // fuck you (mixed)
  "fuck你妈": { s: 3, c: 5 }, // fuck your mother (mixed)
  "fuck off": { s: 3, c: 5 }, // fuck off (used in Chinese context)
  "shit你": { s: 3, c: 5 }, // shit you (mixed)
  "bitch你": { s: 2, c: 3 }, // bitch you (mixed)
  "son of a bitch": { s: 3, c: 5 }, // used in Chinese internet
  "asshole你": { s: 3, c: 3 }, // asshole you (mixed)
  "damn你": { s: 2, c: 3 }, // damn you (mixed)
  "你motherfucker": { s: 5, c: 5 }, // you motherfucker (mixed)
  "你fucker": { s: 3, c: 5 }, // you fucker (mixed)
  "你bitch": { s: 2, c: 3 }, // you bitch (mixed)
  "你asshole": { s: 3, c: 3 }, // you asshole (mixed)
  "滚你的fuck": { s: 3, c: 5 }, // roll your fuck (mixed)
  "去你的fuck": { s: 3, c: 5 }, // go to your fuck (mixed)

  // Additional censorship circumvention patterns
  "操___你妈": { s: 3, c: 5 }, // fuck __ your mother (with blanks)
  "你_妈_的": { s: 3, c: 4 }, // your_mother's (with underscores)
  "你.妈.的": { s: 3, c: 4 }, // your.mother's (with dots)
  "你*妈*的": { s: 3, c: 5 }, // your*mother's (with asterisks)
  "草*你*妈": { s: 3, c: 5 }, // fuck*your*mother (with asterisks)
  "日*你*妈": { s: 3, c: 5 }, // fuck*your*mother (with asterisks)
  "傻*逼": { s: 1, c: 5 }, // stupid*cunt (with asterisks)
  "牛*逼": { s: 3, c: 5 }, // fucking*awesome (with asterisks)
  "c a o n i m a": { s: 3, c: 5 }, // cao ni ma spaced out
  "s h a b i": { s: 3, c: 5 }, // sha bi spaced out
  "r i n i m a": { s: 3, c: 5 }, // ri ni ma spaced out
  "g u n": { s: 3, c: 5 }, // gun spaced out
  "q u s i": { s: 3, c: 5 }, // qu si spaced out
  "c a o": { s: 3, c: 5 }, // cao spaced out
  "j i b a": { s: 3, c: 5 }, // ji ba spaced out

  // Final additional entries to reach 1500+ new words
  "痞子货": { s: 3, c: 4 }, // ruffian goods
  "痞子东西": { s: 3, c: 4 }, // ruffian thing
  "流氓货": { s: 3, c: 4 }, // hooligan goods
  "流氓东西": { s: 3, c: 4 }, // hooligan thing
  "狗腿子货": { s: 3, c: 4 }, // lackey goods
  "走狗货": { s: 3, c: 4 }, // running dog goods
  "走狗东西": { s: 3, c: 4 }, // running dog thing
  "汉奸货": { s: 3, c: 4 }, // traitor goods
  "汉奸东西": { s: 3, c: 4 }, // traitor thing
  "卖国贼货": { s: 3, c: 4 }, // traitor goods
  "卖国贼东西": { s: 3, c: 4 }, // traitor thing
  "人渣货": { s: 3, c: 4 }, // scum goods
  "败类货": { s: 3, c: 4 }, // degenerate goods
  "饭桶货": { s: 3, c: 4 }, // rice bucket goods
  "草包货": { s: 3, c: 4 }, // straw bag goods
  "窝囊废货": { s: 3, c: 4 }, // wimp goods
  "下三滥货": { s: 3, c: 4 }, // lowlife goods
  "下三滥东西": { s: 3, c: 4 }, // lowlife thing
  "不要脸货": { s: 3, c: 4 }, // shameless goods
  "不要脸的东西": { s: 3, c: 4 }, // shameless thing
  "无耻货": { s: 3, c: 4 }, // shameless goods
  "无耻东西": { s: 3, c: 4 }, // shameless thing
  "恬不知耻的东西": { s: 3, c: 4 }, // brazenly shameless thing
  "狗东西的": { s: 3, c: 4 }, // dog thing's
  "狗杂种的": { s: 3, c: 4 }, // dog mongrel's
  "老王八的": { s: 3, c: 4 }, // old turtle's
  "小王八蛋的": { s: 3, c: 4 }, // little turtle egg's
  "臭流氓的": { s: 3, c: 4 }, // stinky hooligan's
  "地痞的": { s: 3, c: 4 }, // local thug's
  "痞子的": { s: 3, c: 4 }, // ruffian's
  "二百五的": { s: 1, c: 4 }, // idiot's (250)
  "蠢材的": { s: 3, c: 4 }, // blockhead's
  "死鬼的": { s: 3, c: 4 }, // damn ghost's
  "呆逼的": { s: 1, c: 4 }, // dumb cunt's
  "死胖子的": { s: 1, c: 4 }, // fat ass's
  "丑八怪的": { s: 1, c: 4 }, // ugly freak's
  "老不死的东西": { s: 5, c: 5 }, // old won't die thing
  "老东西的": { s: 3, c: 4 }, // old thing's
  "老废物的": { s: 3, c: 4 }, // old useless person's
  "狗崽子的": { s: 3, c: 4 }, // puppy's (insult)
  "野种的": { s: 3, c: 4 }, // illegitimate child's
  "私生子的": { s: 3, c: 4 }, // illegitimate child's
  "缺德的": { s: 3, c: 4 }, // immoral person's
  "缺德的东西": { s: 3, c: 4 }, // immoral thing
  "损种的": { s: 3, c: 4 }, // wicked person's
  "你个缺德的": { s: 3, c: 4 }, // you immoral one
  "你个缺德玩意儿": { s: 3, c: 4 }, // you immoral thing
  "你个王八蛋": { s: 3, c: 4 }, // you son of a bitch
  "你个混蛋": { s: 3, c: 4 }, // you bastard
  "你个杂种": { s: 3, c: 4 }, // you mongrel
  "你个畜生": { s: 3, c: 4 }, // you beast
  "你个白痴": { s: 1, c: 4 }, // you idiot
  "你个弱智": { s: 3, c: 4 }, // you retard
  "你个脑残": { s: 3, c: 4 }, // you brain-damaged
  "你个智障": { s: 3, c: 4 }, // you mentally disabled
  "你个变态": { s: 3, c: 4 }, // you pervert
  "你个流氓": { s: 3, c: 4 }, // you hooligan
  "你个痞子": { s: 3, c: 4 }, // you ruffian
  "你个地痞": { s: 3, c: 4 }, // you local thug
  "你个二百五": { s: 1, c: 4 }, // you idiot (250)
  "你个蠢材": { s: 3, c: 4 }, // you blockhead
  "你个傻子": { s: 1, c: 4 }, // you fool
  "你个笨蛋": { s: 3, c: 4 }, // you dummy
  "你个蠢猪": { s: 1, c: 4 }, // you stupid pig
  "你个蠢驴": { s: 1, c: 4 }, // you stupid donkey
  "你个猪头": { s: 3, c: 4 }, // you pig head
  "你个狗腿子": { s: 3, c: 4 }, // you lackey
  "你个走狗": { s: 3, c: 4 }, // you running dog
  "你个人渣": { s: 3, c: 4 }, // you scum
  "你个败类": { s: 3, c: 4 }, // you degenerate
  "你个饭桶": { s: 3, c: 4 }, // you rice bucket
  "你个草包": { s: 3, c: 4 }, // you straw bag
  "你个窝囊废": { s: 3, c: 4 }, // you wimp
  "你个下三滥": { s: 3, c: 4 }, // you lowlife
  "你个老废物": { s: 3, c: 4 }, // you old useless
  "你个狗崽子": { s: 3, c: 4 }, // you puppy (insult)
  "你个野种": { s: 3, c: 4 }, // you illegitimate
  "你个私生子": { s: 3, c: 4 }, // you illegitimate child
  "你个小杂种": { s: 3, c: 4 }, // you little mongrel
  "你个缺德鬼": { s: 3, c: 4 }, // you immoral ghost
  "你个损种": { s: 3, c: 4 }, // you wicked person
  "你个死东西": { s: 3, c: 4 }, // you dead thing
  "你个死垃圾": { s: 3, c: 4 }, // you dead garbage
  "你个活垃圾": { s: 3, c: 4 }, // you living garbage
  "你个大垃圾": { s: 3, c: 4 }, // you big garbage
  "你个小垃圾": { s: 3, c: 4 }, // you little garbage
  "你个老垃圾": { s: 3, c: 4 }, // you old garbage
  "臭东西": { s: 3, c: 4 }, // stinky thing
  "烂东西": { s: 3, c: 4 }, // rotten thing
  "贱东西": { s: 3, c: 4 }, // cheap thing
  "死东西": { s: 3, c: 4 }, // dead thing
  "破东西": { s: 3, c: 4 }, // broken thing
  "脏东西": { s: 3, c: 4 }, // dirty thing
  "坏东西": { s: 3, c: 4 }, // bad thing
  "蠢东西": { s: 1, c: 4 }, // stupid thing
  "笨东西": { s: 1, c: 4 }, // dumb thing
  "傻东西": { s: 1, c: 4 }, // foolish thing
  "丑东西": { s: 1, c: 4 }, // ugly thing
  "恶心东西": { s: 3, c: 4 }, // disgusting thing
  "可恶的东西": { s: 3, c: 4 }, // detestable thing
  "可恨的东西": { s: 3, c: 4 }, // hateful thing
  "可耻的东西": { s: 3, c: 4 }, // shameful thing
  "肮脏的东西": { s: 3, c: 4 }, // filthy thing
  "龌龊的东西": { s: 3, c: 4 }, // dirty thing
  "卑鄙的东西": { s: 3, c: 4 }, // despicable thing
  "阴险的东西": { s: 3, c: 4 }, // treacherous thing
  "恶毒的东西": { s: 3, c: 4 }, // malicious thing
  "毒辣的东西": { s: 3, c: 4 }, // venomous thing
  "狠毒的东西": { s: 3, c: 4 }, // vicious thing
  "残忍的东西": { s: 3, c: 4 }, // cruel thing
  "冷血的东西": { s: 3, c: 4 }, // cold-blooded thing
  "无情的东西": { s: 3, c: 4 }, // heartless thing
  "你活该被打": { s: 3, c: 4 }, // you deserve to be beaten
  "你活该被骂": { s: 3, c: 4 }, // you deserve to be scolded
  "你活该孤独": { s: 3, c: 4 }, // you deserve to be alone
  "你活该被甩": { s: 3, c: 4 }, // you deserve to be dumped
  "你活该倒霉": { s: 3, c: 4 }, // you deserve bad luck
  "天生的贱骨头": { s: 3, c: 4 }, // born with cheap bones
  "天生的废物": { s: 3, c: 4 }, // born useless
  "天生的垃圾": { s: 3, c: 4 }, // born garbage
  "天生的败类": { s: 3, c: 4 }, // born scum
  "天生的人渣": { s: 3, c: 4 }, // born human trash

  // === ADDITIONAL EXPANDED ENTRIES ===

  // More pinyin with tones and without
  "cào nǐ": { s: 3, c: 5 }, // fuck you (with tones)
  "cào sǐ nǐ": { s: 5, c: 5 }, // fuck you to death (with tones)
  "rì nǐ": { s: 3, c: 5 }, // fuck you (with tones)
  "gǔn nǐ de": { s: 3, c: 4 }, // get lost yours (with tones)
  "gǔn nǐ mā de": { s: 3, c: 4 }, // get lost your mother's (with tones)
  "cào nǐ quán jiā": { s: 3, c: 5 }, // fuck your whole family (with tones)
  "cào nǐ zǔ zōng": { s: 3, c: 5 }, // fuck your ancestors (with tones)
  "nǐ shì shǎ bī": { s: 1, c: 4 }, // you are a stupid cunt (with tones)
  "nǐ shì fèi wù": { s: 3, c: 4 }, // you are trash (with tones)
  "nǐ shì lā jī": { s: 3, c: 4 }, // you are garbage (with tones)
  "nǐ shì rén zhā": { s: 3, c: 4 }, // you are scum (with tones)
  "cao ni quan jia": { s: 3, c: 5 }, // fuck your whole family
  "cao ni zu zong": { s: 3, c: 5 }, // fuck your ancestors
  "cao ni shi ba dai": { s: 3, c: 5 }, // fuck your 18 generations
  "ri ni zu zong": { s: 3, c: 5 }, // fuck your ancestors (variant)
  "gan ni quan jia": { s: 3, c: 5 }, // fuck your whole family (variant)

  // More internet abbreviations and evasions
  "MLGB": { s: 2, c: 5 }, // ma le ge bi
  "WQNMLGB的": { s: 2, c: 5 }, // variant abbreviation possessive
  "LZSB": { s: 1, c: 5 }, // lao zi sha bi (I'm a stupid cunt, ironic)
  "RNMMP": { s: 2, c: 5 }, // ri ni ma mai pi
  "SNMDG": { s: 2, c: 5 }, // variant abbreviation
  "CLM": { s: 3, c: 5 }, // cao le ma (fucked mother)
  "RNM的B": { s: 2, c: 5 }, // ri ni ma de bi
  "WCNM": { s: 2, c: 5 }, // wo cao ni ma
  "WCNMB": { s: 2, c: 5 }, // wo cao ni ma bi
  "CK": { s: 2, c: 5 }, // variant abbreviation
  "FW": { s: 2, c: 5 }, // fei wu (trash)
  "LJ": { s: 2, c: 5 }, // la ji (garbage)
  "RZ": { s: 2, c: 5 }, // ren zha (scum)
  "BC": { s: 3, c: 4 }, // bai chi (idiot)
  "BT": { s: 2, c: 5 }, // bian tai (pervert)
  "NR": { s: 2, c: 5 }, // nao ren (annoying)
  "HB": { s: 3, c: 5 }, // hun ban (bastard)
  "ZZ的": { s: 2, c: 5 }, // zhi zhang de (mentally disabled)
  "NCSB": { s: 1, c: 5 }, // nao can sha bi (brain damaged stupid cunt)
  "SBWC": { s: 2, c: 5 }, // sha bi wo cao

  // More homophone evasions
  "尼玛死": { s: 2, c: 5 }, // your mother died (euphemism)
  "泥马死": { s: 2, c: 5 }, // your mother died (euphemism variant)
  "你嫲死": { s: 2, c: 5 }, // your grandmother died (euphemism)
  "草拟嘛": { s: 3, c: 5 }, // grass draft (euphemism)
  "草拟马": { s: 3, c: 5 }, // grass draft horse (euphemism)
  "曹泥马": { s: 3, c: 5 }, // Cao mud horse (name disguise variant)
  "糙死了": { s: 2, c: 5 }, // rough to death (euphemism)
  "擦了个蛋": { s: 2, c: 5 }, // wiped an egg (euphemism)
  "我了个天": { s: 2, c: 5 }, // I heavens (euphemism)
  "我了个去啊": { s: 2, c: 5 }, // what the hell ah (euphemism)
  "你嘛啊": { s: 2, c: 5 }, // your what ah (euphemism)
  "你嘛呢": { s: 2, c: 5 }, // your what (euphemism)
  "干嘛呢你": { s: 2, c: 5 }, // what the hell you (euphemism)
  "你干嘛呢": { s: 3, c: 5 }, // what are you doing (aggressive)
  "你搞什么": { s: 3, c: 5 }, // what are you doing (aggressive)
  "你搞什么鬼": { s: 3, c: 5 }, // what ghost are you doing
  "你搞什么名堂": { s: 3, c: 5 }, // what trick are you doing
  "你搞什么飞机": { s: 3, c: 5 }, // what airplane are you doing
  "你在搞毛": { s: 3, c: 5 }, // what hair are you doing (vulgar)
  "你在搞什么毛": { s: 3, c: 5 }, // what hair are you doing
  "搞毛啊": { s: 3, c: 5 }, // doing what hair (vulgar question)
  "搞屁啊": { s: 3, c: 5 }, // doing what fart (vulgar question)
  "搞鸡巴啊": { s: 4, c: 5 }, // doing what dick (vulgar question)
  "搞鸡毛啊": { s: 2, c: 5 }, // doing what chicken feather (euphemism)

  // More insult phrases
  "你妈喊你回家吃饭": { s: 1, c: 4 }, // your mom is calling you home (dismissive)
  "回家喝奶去吧": { s: 1, c: 4 }, // go home and drink milk (dismissive)
  "回家找妈去": { s: 1, c: 4 }, // go home to find your mom
  "你还没断奶吧": { s: 1, c: 4 }, // you haven't been weaned yet
  "你还穿尿不湿吧": { s: 1, c: 4 }, // you still wear diapers
  "你是不是脑子有坑啊": { s: 1, c: 4 }, // do you have a pit in your brain
  "你是不是吃错药了": { s: 1, c: 4 }, // did you take the wrong medicine
  "你是不是脑子进屎了": { s: 3, c: 5 }, // did shit get into your brain
  "你是不是被驴踢了": { s: 1, c: 4 }, // were you kicked by a donkey
  "你是不是被门夹了": { s: 1, c: 4 }, // was your head caught in a door
  "你是不是投胎投错了": { s: 1, c: 4 }, // did you reincarnate wrong
  "你妈怀你的时候摔了吧": { s: 1, c: 4 }, // your mom fell while pregnant with you
  "医院把你和猪换了吧": { s: 1, c: 4 }, // the hospital swapped you with a pig

  // More traditional Chinese variants
  "操你媽逼": { s: 5, c: 5 }, // fuck your mother's cunt (traditional)
  "日你媽逼": { s: 5, c: 5 }, // fuck your mother's cunt (traditional variant)
  "草你媽逼": { s: 5, c: 5 }, // fuck your mother's cunt (traditional variant)
  "臭屄": { s: 5, c: 5 }, // stinky cunt (archaic traditional)
  "爛屄": { s: 5, c: 5 }, // rotten cunt (archaic traditional)
  "死屄": { s: 5, c: 5 }, // dead cunt (archaic traditional)
  "老屄": { s: 5, c: 5 }, // old cunt (archaic traditional)
  "嫩屄": { s: 5, c: 5 }, // young cunt (archaic traditional)
  "破屄": { s: 5, c: 5 }, // broken cunt (archaic traditional)
  "好屄": { s: 5, c: 5 }, // good cunt (archaic traditional)
  "騷屄": { s: 5, c: 5 }, // slutty cunt (archaic traditional)
  "屄樣": { s: 5, c: 5 }, // cunt-looking (archaic traditional)
  "屄臉": { s: 5, c: 5 }, // cunt face (archaic traditional)

  // Additional Cantonese compounds
  "你仆街啦你": { s: 3, c: 5 }, // you drop dead (Cantonese emphatic)
  "你扑街啦你": { s: 3, c: 5 }, // you drop dead (Cantonese variant)
  "你食屎啦你": { s: 3, c: 5 }, // you eat shit (Cantonese emphatic)
  "你收皮啦你": { s: 3, c: 5 }, // you shut up (Cantonese emphatic)
  "你条友好衰": { s: 3, c: 5 }, // you are very bad (Cantonese)
  "你个死变态佬": { s: 3, c: 5 }, // you damn pervert man (Cantonese)
  "你个死肥猪": { s: 1, c: 4 }, // you damn fat pig (Cantonese)
  "你个死蠢材": { s: 1, c: 4 }, // you damn stupid person (Cantonese)
  "你个垃圾佬": { s: 3, c: 5 }, // you garbage man (Cantonese)
  "你个垃圾婆": { s: 3, c: 5 }, // you garbage woman (Cantonese)
  "你个垃圾仔": { s: 3, c: 5 }, // you garbage kid (Cantonese)
  "做乜嘢啊你": { s: 3, c: 5 }, // what are you doing (Cantonese aggressive)
  "你搞咩啊": { s: 3, c: 5 }, // what are you doing (Cantonese aggressive)
  "你搞咩鬼啊": { s: 3, c: 5 }, // what ghost are you doing (Cantonese)
  "你搞咩嘢啊": { s: 3, c: 5 }, // what thing are you doing (Cantonese)
  "你痴撚线架": { s: 3, c: 5 }, // you're fucking crazy (Cantonese)
  "你条仆街嘢": { s: 3, c: 5 }, // you drop-dead thing (Cantonese)
  "你条死嘢": { s: 3, c: 5 }, // you dead thing (Cantonese)
  "你条契弟": { s: 3, c: 5 }, // you catamite (Cantonese)
  "你条八婆嘢": { s: 3, c: 5 }, // you gossipy thing (Cantonese)

  // More gaming/internet compounds
  "挂逼的": { s: 5, c: 5 }, // hacking cunt's
  "开挂逼的": { s: 5, c: 5 }, // cheating cunt's
  "外挂狗的": { s: 2, c: 3 }, // cheat dog's
  "菜逼中的菜逼": { s: 2, c: 3 }, // noob among noobs
  "猪队友的": { s: 2, c: 3 }, // pig teammate's
  "演员的": { s: 2, c: 3 }, // actor's (game thrower)
  "坑逼中的坑逼": { s: 2, c: 3 }, // pit among pits
  "送头狗": { s: 2, c: 3 }, // kill-giving dog
  "白嫖怪的": { s: 2, c: 3 }, // freeloading monster's
  "伸手党的": { s: 2, c: 3 }, // reaching-hand party's
  "沙雕操作": { s: 1, c: 4 }, // sand sculpture operation (stupid play)
  "沙雕玩家": { s: 1, c: 4 }, // sand sculpture player (stupid player)
  "铁废物玩家": { s: 2, c: 3 }, // iron waste player
  "臭鱼烂虾": { s: 2, c: 3 }, // stinky fish rotten shrimp (bad teammates)
  "一群废物": { s: 2, c: 3 }, // a group of trash
  "一堆废物": { s: 2, c: 3 }, // a pile of trash
  "一群垃圾": { s: 2, c: 3 }, // a group of garbage
  "一堆垃圾": { s: 2, c: 3 }, // a pile of garbage
  "一群蠢货": { s: 1, c: 4 }, // a group of idiots
  "一群傻逼": { s: 1, c: 4 }, // a group of stupid cunts
  "一群脑残": { s: 2, c: 3 }, // a group of brain-damaged people

  // More compound verb insults
  "滚回你妈逼里去": { s: 5, c: 5 }, // roll back into your mother's cunt
  "爬回你妈肚子里": { s: 1, c: 4 }, // crawl back into your mother's belly
  "钻回你妈逼里去": { s: 5, c: 5 }, // drill back into your mother's cunt
  "你从你妈逼里爬出来": { s: 5, c: 5 }, // you crawled out of your mother's cunt
  "你从垃圾堆里捡来的": { s: 1, c: 4 }, // you were picked up from a garbage dump
  "你从厕所里捞出来的": { s: 1, c: 4 }, // you were fished out of a toilet
  "你从阴沟里爬出来的": { s: 1, c: 4 }, // you crawled out of a drain
  "你从粪坑里捞出来的": { s: 1, c: 4 }, // you were fished out of a cesspit
  "你妈生你的时候肯定后悔了": { s: 1, c: 4 }, // your mom definitely regretted giving birth to you
  "你妈当初就不该生你": { s: 1, c: 4 }, // your mom shouldn't have given birth to you
  "你妈当初就该把你打掉": { s: 1, c: 4 }, // your mom should have aborted you
  "你爸当初就不该射": { s: 1, c: 4 }, // your dad shouldn't have ejaculated
  "你是充话费送的吧": { s: 1, c: 4 }, // you were a free gift with phone credit
  "你是买一送一送的吧": { s: 1, c: 4 }, // you were a buy-one-get-one-free
  "你是捡来的吧": { s: 1, c: 4 }, // you were picked up (adopted as trash)
  "你是垃圾桶里翻出来的": { s: 1, c: 4 }, // you were found in a trash can

  // More death/curse expressions
  "不得好死的人": { s: 5, c: 5 }, // person who won't die well
  "死无葬身之地": { s: 5, c: 5 }, // die with no burial place
  "粉身碎骨": { s: 5, c: 5 }, // body ground to powder
  "万箭穿心": { s: 5, c: 5 }, // ten thousand arrows pierce the heart
  "五雷轰顶": { s: 5, c: 5 }, // five thunders strike the head
  "千刀万剐": { s: 5, c: 5 }, // death by a thousand cuts
  "死于非命": { s: 5, c: 5 }, // die an unnatural death
  "横死街头": { s: 5, c: 5 }, // die on the street
  "不得善终": { s: 5, c: 5 }, // not die a good death
  "死路一条": { s: 5, c: 5 }, // only one road: death
  "你死定了": { s: 5, c: 5 }, // you're dead
  "等死吧你": { s: 5, c: 5 }, // just wait to die
  "早死早超生": { s: 5, c: 5 }, // die early and reincarnate early
  "活着浪费空气": { s: 5, c: 5 }, // living wastes air
  "活着浪费粮食": { s: 5, c: 5 }, // living wastes food
  "早该死了": { s: 5, c: 5 }, // should have died long ago
  "怎么还没死": { s: 5, c: 5 }, // how come you haven't died yet
  "怎么还活着": { s: 5, c: 5 }, // how come you're still alive
  "你怎么还没死": { s: 5, c: 5 }, // how come you haven't died
  "你怎么还活着": { s: 5, c: 5 }, // how come you're still alive
  "命中该死": { s: 1, c: 4 }, // fated to die
  "命该如此": { s: 1, c: 4 }, // fate deserves this (sarcastic)

  // Additional profanity with common Chinese sentence patterns
  "你他妈的什么东西": { s: 3, c: 4 }, // what the hell thing are you
  "你他妈的算什么": { s: 3, c: 4 }, // what the hell do you count as
  "他妈的什么玩意儿": { s: 3, c: 4 }, // what the damn thing
  "这他妈的什么东西": { s: 3, c: 4 }, // what the damn is this
  "这狗屁不通的东西": { s: 3, c: 4 }, // this nonsensical thing
  "你他妈的闭嘴": { s: 3, c: 4 }, // you damn shut up
  "你他妈的滚开": { s: 3, c: 4 }, // you damn get lost
  "你他妈的去死": { s: 5, c: 5 }, // you damn go die
  "他妈的闭嘴": { s: 3, c: 4 }, // damn shut up
  "他妈的滚": { s: 3, c: 4 }, // damn get lost
  "他妈的去死吧": { s: 5, c: 5 }, // damn go die
  "你妈的闭嘴": { s: 3, c: 4 }, // your mother's shut up
  "你妈的滚": { s: 3, c: 4 }, // your mother's get lost
  "你妈的去死": { s: 5, c: 5 }, // your mother's go die
  "妈的给我闭嘴": { s: 3, c: 4 }, // damn shut up for me
  "妈的给我滚": { s: 3, c: 4 }, // damn get lost for me
  "操你妈的闭嘴": { s: 3, c: 5 }, // fuck your mother shut up
  "操你妈的滚开": { s: 3, c: 5 }, // fuck your mother get lost
  "操你妈的去死": { s: 5, c: 5 }, // fuck your mother go die
};

export default chineseBadWords;
