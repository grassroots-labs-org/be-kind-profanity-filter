/**
 * Rigorous test of isRomanized() against both romanized AND regular text.
 * Goal: zero false positives on real Latin-script text.
 */

// @ts-ignore
import { eld } from 'eld/large';

// ── Copy of isRomanized and dependencies from eld-trust-weight.ts ────────────

const LANGUAGE_FAMILIES: Record<string, string[]> = {
  romance:      ['fr', 'ca', 'it', 'pt', 'es', 'ro', 'gl', 'oc'],
  germanic:     ['de', 'nl', 'da', 'no', 'sv', 'af', 'is', 'lb', 'en'],
  slavic:       ['ru', 'uk', 'bg', 'pl', 'cs', 'sk', 'hr', 'sr', 'sl', 'bs', 'mk'],
  uralic:       ['fi', 'hu', 'et'],
  turkic:       ['tr', 'az', 'uz', 'kk', 'ky', 'tk'],
  celtic:       ['cy', 'ga', 'gd', 'br'],
  baltic:       ['lt', 'lv'],
  semitic:      ['ar', 'he', 'mt'],
  indic:        ['hi', 'bn', 'mr', 'gu', 'pa', 'ne', 'si', 'ur'],
  dravidian:    ['ta', 'te', 'kn', 'ml'],
  sinitic:      ['zh'],
  japonic:      ['ja'],
  koreanic:     ['ko'],
  austronesian: ['tl', 'ms', 'id', 'mg', 'ceb', 'jv', 'su'],
  tai:          ['th', 'lo'],
};

const LANG_TO_FAMILY: Record<string, string> = {};
for (const [family, langs] of Object.entries(LANGUAGE_FAMILIES)) {
  for (const lang of langs) LANG_TO_FAMILY[lang] = family;
}

function analyzeCluster(scores: Record<string, number>) {
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const top5families = sorted.slice(0, 5).map(([l]) => LANG_TO_FAMILY[l] || 'unknown');
  const familyCounts: Record<string, number> = {};
  for (const f of top5families) familyCounts[f] = (familyCounts[f] || 0) + 1;
  const uniqueFamilies = Object.keys(familyCounts).length;
  const dominantFamilyCount = Math.max(0, ...Object.values(familyCounts));
  return {
    uniqueFamilies,
    dominantFamilyCount,
    isCoherent: dominantFamilyCount >= 3,
    isScattered: uniqueFamilies >= 4,
  };
}

// ── Per-language romanization trigram sets ────────────────────────────────────
// Positive fingerprinting: each romanization system has characteristic trigrams
// that don't naturally appear in Latin-script languages.
//
// Detection logic:
//   1. Extract all trigrams from text
//   2. Count hits per romanization family
//   3. If any single family has ≥20% hit rate → strong romanization signal
//   4. Cross-family hits decay exponentially (best=1x, 2nd=0.5x, 3rd=0.25x, ...)
//      to prevent noise from inflating the score

// N-gram sets: each family has trigrams AND quadgrams for higher specificity
// Quadgrams are much more specific (less cross-language collision)
const ROMANIZATION_NGRAMS: Record<string, { trigrams: Set<string>; quadgrams: Set<string> }> = {
  // Hindi/Urdu/Bengali/Nepali — aspirated clusters, retroflex, nasal combos
  indic: {
    trigrams: new Set([
      'bha', 'bhe', 'bhi', 'bho', 'bhu',  // aspirated b
      'dha', 'dhe', 'dhi', 'dho', 'dhu',  // aspirated d
      'gha', 'ghe', 'ghi', 'gho', 'ghu',  // aspirated g
      'kha', 'khe', 'khi', 'kho', 'khu',  // aspirated k
      'pha', 'phe', 'phi', 'pho', 'phu',  // aspirated p
      'chh', 'cch',                        // double aspirations
      'aal', 'aam', 'aan', 'aap', 'aar', 'aas', 'aat',  // long-a markers
      'jhe', 'jha', 'jhi',                // aspirated j
      'muj', 'tuj', 'yeh', 'hai', 'haa', 'nah', 'kya',  // Hindi function trigrams
      'waa', 'jaa',                        // more Hindi/Urdu
      'ekh', 'dek', 'akh',                // Indic word fragments
      'eek', 'aaj', 'aur',                // day-to-day Hindi
      'ush', 'shk', 'hki',                // mushkil, etc.
      // Bengali-specific
      'cho', 'ach', 'oth', 'pni', 'mar',  // acho, kothay, apni, amar
      'kem', 'oba', 'bad',                 // kemon, bhalo-bashi, dhonnobad
      'she', 'chi', 'hec',                 // eshechi
      // Telugu-specific
      'aru', 'nna', 'agu', 'elu',         // unnaru, baagunnanu, veltunnanu
      'dha', 'ava', 'ulu',                 // dhanyavadamulu
      'ast', 'sto',                         // vastaru, santosham
      // Nepali-specific
      'ast', 'hun', 'hha',                 // namaste, hunuhunchha
      // Gujarati-specific
      'avn', 'amy', 'gam',                 // malvanu, gamyu
    ]),
    quadgrams: new Set([
      'bhai', 'bhar', 'bhut', 'bhaa', 'bhen',  // bhai, bharat, bahut, bhenchod
      'dhar', 'dhak', 'dhoo', 'dhan',          // dharma, dhaka, dhoond, dhan
      'ghar', 'ghoo', 'ghum',                   // ghar, ghoom
      'khan', 'khaa', 'khub', 'khat', 'khar',  // khana, khaal, khub, khatam
      'thee', 'thod', 'thek',                   // theek, thoda
      'chho', 'chha', 'chhe',                   // chhor, chhota
      'haal', 'hain', 'hame', 'hama',          // haal, hain, hamara
      'kaam', 'jaan', 'yaar', 'raha', 'rahe',  // kaam, jaan, yaar
      'mush', 'shki', 'achh', 'achc', 'bahu',  // mushkil, achha, bahut
      'pahr', 'parh',                            // parh
      'sund', 'unda', 'ndar',                   // sundar
      'padh', 'dhai',                            // padhai
      'insh', 'nsha', 'shal',                   // inshallah
      'baar', 'aari', 'arish',                  // baarish
      'sadk', 'adk',                             // sadak
      'bana', 'anan',                            // banana (Hindi: to make)
      'seek', 'eekh',                            // seekho
      'zaro', 'aroo',                            // zaroor
      // Bengali quadgrams
      'bhal', 'halo', 'alobashi',               // bhalobashi
      'koth', 'otha', 'thay',                   // kothay
      'jacc', 'acch', 'cche', 'chen',           // jacchen
      'apni', 'toma', 'omar',                   // apni, tomar, amar
      'dhon', 'honn', 'nnob', 'noba',           // dhonnobad
      'kemo', 'emon',                            // kemon
      'eshe', 'shec', 'hech',                   // eshechi
      'boud', 'oudi',                            // boudi
      'dada',                                     // dada
      'gelo',                                     // gelo
      'bair', 'aire',                            // baire
      'ghur', 'hure',                            // ghure
      'lage', 'agch', 'gche',                   // lagche
      // Telugu quadgrams
      'unn', 'nnar', 'naru',                    // unnaru
      'baag', 'aagu', 'gunn', 'unna',           // baagunnanu
      'dhan', 'hany', 'anya', 'nyav', 'yava',   // dhanyavadamulu
      'vast', 'asta', 'star',                    // vastaru
      'velt', 'eltu', 'ltun', 'tunn',           // veltunnanu
      'sant', 'anto', 'ntos', 'tosh',           // santosham
      'eppu', 'ppud',                             // eppudu
      // Nepali quadgrams
      'nama', 'amas', 'mast',                   // namaste
      'hunu', 'unuh', 'nuhu', 'uhun',           // hunuhunchha
      'dhan', 'hany', 'nyab', 'yaba', 'abaa',   // dhanyabaad
      // Gujarati quadgrams
      'malv', 'alva', 'lvan', 'vanu',           // malvanu
      'gamy',                                     // gamyu
    ]),
  },

  // Mandarin Pinyin — unique consonant clusters and finals
  pinyin: {
    trigrams: new Set([
      'zho', 'zha', 'zhe', 'zhi', 'zhu',  // zh- initials (not in any Latin lang)
      'qia', 'qie', 'qin', 'qiu',         // q- initials (unique to Pinyin)
      'xia', 'xie', 'xin', 'xiu', 'xue',  // x- initials (rare in Latin langs)
      'iao', 'iou', 'uai', 'uei',          // diphthong finals
      'guo', 'duo', 'huo', 'suo', 'zuo',   // -uo finals
      'jin', 'jia', 'jie', 'jiu',          // j- initials
      'ngg', 'ngr', 'ngy',                  // zhongguo-type double-g
      'gao', 'hao', 'bao', 'dao', 'lao',   // -ao finals
    ]),
    quadgrams: new Set([
      'zhon', 'hong', 'nggu', 'gguo',      // zhongguo
      'zhen', 'zhao', 'zhua', 'zhan',      // various zh-
      'qian', 'qing', 'qixi',             // qian, qing
      'xian', 'xing', 'xiao', 'xiex',     // xian, xing, xiao, xiexie
      'jint', 'inti', 'ntia',              // jintian
      'tian', 'huan', 'yuan',             // common finals
      'gong', 'dong', 'peng',             // -ong syllables
      'ming', 'ting', 'bing', 'ling',     // -ing syllables
      'gaox', 'aoxi', 'oxin',             // gaoxing
      'bang', 'duos', 'uosh', 'shao',     // bangzhu, duoshao
      'guan', 'dian', 'nian',             // common syllables
      'pengy', 'ngyo',                     // pengyou
      'zaij', 'aiji', 'ijia',             // zaijian
      'piao', 'iaol', 'aoli', 'olia',     // piaoliang
      'xihu', 'ihuan',                     // xihuan
      'feng', 'engj', 'ngji', 'gjin',     // fengjing
      'difa', 'ifan', 'fang',             // difang
      'chif', 'ifan',                      // chifan
      'wans', 'ansh', 'nsha', 'shan',     // wanshang
      'shen', 'henm',                      // shenme
    ]),
  },

  // Japanese Romaji — verb endings, particles as trigrams, unique combos
  romaji: {
    trigrams: new Set([
      'asu', 'esu', 'osu',                  // -masu, -desu endings
      'mas', 'des',                          // masu, desu fragments
      'tsu',                                 // unique JP consonant combo
      'sho',                                 // sh combo
      'ata',                                 // watashi
      'ima',                                 // imasu fragments
      'tte', 'tta', 'kke',                  // geminated consonants
      'nky', 'nbe', 'nbu',                  // benkyou, ganbatte
      'kou', 'mou', 'tou', 'dou',          // -ou endings
      'iku', 'oku', 'uku',                  // verb stems
      'sai', 'goz', 'aim',                  // kudasai, gozaimasu
      'omo', 'iro',                          // omoshiroi
      'wat', 'nih',                          // watashi, nihon
      'mpo', 'amp',                          // sampo
    ]),
    quadgrams: new Set([
      'masu', 'desu', 'desh', 'imas',       // verb endings
      'shim', 'imas', 'mash', 'ashi',       // shimasu, mashita
      'kuda', 'udas', 'dasa',               // kudasai
      'goza', 'ozai', 'zaim',               // gozaimasu
      'wata', 'atas',                         // watashi
      'niho', 'ihon',                         // nihon
      'benk', 'enky', 'nkyo',               // benkyou
      'ganb', 'anba', 'nbat', 'batt',       // ganbatte
      'tomo', 'omod', 'moda', 'odac',       // tomodachi
      'omoi', 'moir', 'oiro',               // omoimasu, omoshiroi
      'tote', 'otem',                         // totemo
      'sumi', 'umim', 'mima', 'imas',       // sumimasen
      'tano', 'anos', 'nosh',               // tanoshimi
    ]),
  },

  // Korean Romanization — syllable patterns unique to Korean
  korean: {
    trigrams: new Set([
      'eyo', 'ayo',                          // polite endings
      'sey', 'eun', 'eul',                  // particles
      'hag', 'seo', 'geo',                  // hago, isseoyo
      'ham', 'gam', 'kam',                  // hamnida, gamsahamnida
      'nid', 'ida',                          // -nida ending
      'eos', 'iss', 'sse',                  // past tense, existence
      'nye', 'ngh', 'ngs',                  // annyeong-
      'yeo', 'ung',                          // common Korean vowel combos
      'hae', 'hoe', 'hwa',                  // compound vowels
      'jal', 'joh', 'gbu',                  // jal, joheun, gongbu
      'lkk', 'eok', 'eog',                  // halkka, meokgo
      'ase', 'oyo',                          // -haseyo, -oyo
      'sip', 'ipe',                          // sipeoyo
      'nge', 'ngb',                          // sentence fragments
    ]),
    quadgrams: new Set([
      'hase', 'aseyo', 'seyo',              // haseyo
      'isseo', 'sseo', 'seoyo',             // isseoyo
      'gamsa', 'amsa', 'msah',              // gamsahamnida
      'hamni', 'amni', 'mnid', 'nida',      // hamnida
      'annyeo', 'nnyeo', 'nyeon',           // annyeong
      'gongb', 'ongbu',                      // gongbu
      'hwai', 'wait', 'aiti',               // hwaiting
      'haeb', 'aebo', 'bose',               // haeboseyo
      'meok', 'eokgo',                       // meokgo
      'sipeo', 'ipeo', 'peoyo',             // sipeoyo
      'nalss', 'alss', 'lssi',              // nalssiga
    ]),
  },

  // Arabic romanization — characteristic patterns
  arabic: {
    trigrams: new Set([
      'hab', 'abi', 'bib',                  // habibi
      'all', 'lla', 'lah',                  // allah, inshallah
      'shk', 'shu', 'shm',                  // shukran, mashallah
      'akh', 'ukh', 'khr',                  // akh, shukr
      'eef', 'eek', 'eel',                  // keefak
      'ahm', 'hmd',                          // alhamdulillah
      'bik', 'bil',                          // bikum
      'jaz', 'aze', 'zee',                  // jazeelan
      'yaw', 'awm',                          // alyawm
      'ana', 'ant', 'nta',                   // ana, anta
      'ahl', 'hla', 'sah',                   // ahlan wa sahlan
      'kha', 'las', 'yal',                   // khalas, yalla
      'ukr', 'kra',                           // shukran
    ]),
    quadgrams: new Set([
      'habi', 'abib', 'bibi',               // habibi
      'alla', 'llah',                         // allah
      'insh', 'nsha', 'shal',               // inshallah
      'mash', 'asha',                         // mashallah
      'shuk', 'hukr', 'ukra', 'kran',       // shukran
      'jaze', 'azee', 'zeel',               // jazeelan
      'keef', 'eefa', 'efak',               // keefak
      'ahla', 'hlan',                         // ahlan
      'sahl', 'ahla',                         // sahlan
      'khal', 'halas',                        // khalas
      'yall', 'alla',                         // yalla
      'wall', 'alla',                         // wallah
      'alha', 'lham', 'hamd',               // alhamdulillah
    ]),
  },

  // Russian/Slavic transliteration
  russian: {
    trigrams: new Set([
      'kho', 'khr', 'kha',                  // khorosho
      'zho', 'zhe', 'zhi',                  // zhenshchina
      'shc', 'hch',                          // shchuka
      'tsy', 'tsa',                          // ptitsy
      'vst', 'dra',                          // zdravstvuyte
      'pri', 'iye',                          // privet
      'vsy',                                  // vsyo
      'ych', 'yat', 'oya',                  // specific Russian suffixes
      'oho', 'ros', 'osh',                  // khorosho
      'seg', 'ego', 'odn',                  // segodnya
      'its',                                  // nravitsya
      'poy', 'oyt', 'yti',                  // poyti
      'ozh',                                  // mozhno
      'gul', 'uly',                          // gulyat
      'khl', 'hle', 'leb',                  // khleb
      'mol', 'olo', 'lok',                  // moloko
    ]),
    quadgrams: new Set([
      'khor', 'horo', 'oros', 'rosh',       // khorosho
      'zhno', 'mozh', 'ozhno',              // mozhno
      'priv', 'rive', 'ivet',               // privet
      'sego', 'egod', 'godn', 'odny',       // segodnya
      'vsyo',                                 // vsyo
      'nrav', 'ravi', 'avit', 'vits',       // nravitsya
      'poyt', 'oyti',                         // poyti
      'guly', 'ulya', 'lyat',               // gulyat
      'khleb', 'hleb',                        // khleb
      'molo', 'olok', 'loko',               // moloko
      'spas', 'pasi', 'asib', 'sibo',       // spasibo
      'bols', 'olsh', 'lsho', 'shoy',       // bolshoye
      'pomo', 'omos', 'mosh', 'oshc',       // pomoshch
      'priy', 'riya', 'iyat',               // priyatno
      'inte', 'nter', 'tere', 'eres',       // interesnaya
      'zdra', 'drav',                         // zdravstvuyte
      // More common Russian words as quadgrams
      'drug', 'ruzy', 'uzya', 'zyam',       // druzyami
      'posh', 'oshli', 'shli',              // poshli
      'poto', 'otom', 'tomu',               // potomu
      'chto',                                 // chto
      'vzya', 'zyal', 'yali',               // vzyali
      'sobo', 'oboi',                         // soboi
      'igra', 'gral',                         // igrali
      'vrem', 'remy', 'emya',               // vremya
      'prov', 'rove', 'ovel',               // proveli
      'vech', 'eche', 'cher', 'hero',       // vecherom
      'domo', 'omoi',                         // domoi
      'usta', 'stav', 'tavs',               // ustavshiye
      'scha', 'chas', 'hast', 'astl',       // schastliviye
      'zame', 'amec', 'mech', 'chat',       // zamechatelnogo
      'piko', 'ikni',                         // piknik
      'futb', 'utbo',                         // futbol
      'napit', 'apit', 'pitk',              // napitki
    ]),
  },

  // Thai romanization
  thai: {
    trigrams: new Set([
      'kra', 'rap', 'kha',                  // krap, kha
      'sab', 'aba', 'bai',                  // sabai
      'saw', 'awa', 'wad', 'ade',           // sawadee
      'kho', 'hob', 'obu',                  // khob khun
      'khu', 'hun',                          // khun
      'pho', 'hom',                          // phom
      'rai', 'ara', 'nee',                  // arai, wan nee
      'pai', 'nai',                          // pai nai
      'dee', 'mai', 'cha',                  // dee mai, chai
      'anu', 'nuk', 'san',                  // sanuk
    ]),
    quadgrams: new Set([
      'krap', 'sawa', 'awad', 'wade', 'adee', // krap, sawadee
      'saba', 'abai',                          // sabai
      'khob', 'khun', 'phom',                 // khob, khun, phom
      'arai',                                   // arai
      'sanu', 'anuk',                           // sanuk
    ]),
  },

  // Tamil romanization
  tamil: {
    trigrams: new Set([
      'kka', 'kki',                          // vanakkam, irukkinga
      'nga', 'ngi',                          // irukkinga
      'ppa', 'adi',                          // eppadi
      'iru', 'ruk', 'ukk',                  // irukkinga, irukken
      'nak', 'akk',                          // vanakkam
      'ndr', 'dri',                          // nandri
      'enn', 'nna',                          // enna
      'inn', 'nni', 'nik',                  // innikku
      'ela', 'aik',                          // velaikku
      'ree', 'eng',                          // panreenga
    ]),
    quadgrams: new Set([
      'vana', 'anak', 'nakk', 'akka', 'kkam',  // vanakkam
      'iruk', 'rukk', 'ukki', 'kkin', 'king',  // irukkinga
      'eppa', 'ppad', 'padi',                   // eppadi
      'nand', 'andr', 'ndri',                   // nandri
      'inni', 'nnik', 'nikk', 'ikku',          // innikku
      'vela', 'elai', 'laik', 'aikk',          // velaikku
      'panr', 'anre', 'nree', 'reeng',         // panreenga
    ]),
  },

  // Persian/Farsi romanization
  persian: {
    trigrams: new Set([
      'sal', 'ala', 'lam',                  // salam
      'che', 'het', 'eto', 'tor',           // chetori
      'ale', 'let',                          // halet
      'khe', 'hei', 'eil',                  // kheili
      'khu', 'hub', 'ube',                  // khube
      'doo', 'oos', 'ost',                  // doost
      'iru', 'run',                          // birun
      'rim',                                 // berim
      'gha', 'haz', 'aza',                  // ghaza
      'bok', 'okh',                          // bokhorim
      'emr', 'mru', 'ruz',                  // emruz
    ]),
    quadgrams: new Set([
      'sala', 'alam',                         // salam
      'chet', 'heto', 'etor', 'tori',       // chetori
      'khei', 'heil', 'eili',               // kheili
      'khub', 'hube',                         // khube
      'doos', 'oost',                         // doost
      'biru', 'irun',                         // birun
      'beri', 'erim',                         // berim
      'ghaz', 'haza',                         // ghaza
      'bokh', 'okho', 'khor',               // bokhorim
      'emru', 'mruz',                         // emruz
      'mikha', 'ikha',                        // mikham
      'laze', 'azem',                         // lazem
    ]),
  },

  // Vietnamese without diacritics (Quốc ngữ stripped)
  vietnamese: {
    trigrams: new Set([
      'uoc', 'uoi', 'uon', 'uot',          // ước, ười, uống
      'ngu', 'ngh', 'nho', 'nha',          // ngươi, nghĩ, nhớ, nhà
      'tro', 'anh', 'inh',                  // trời, anh, tình
      'hom', 'nay', 'dep', 'qua',          // hôm nay, đẹp quá
      'vui', 'duc', 'gap', 'ban',          // vui được gặp bạn
      'rat', 'toi', 'hay', 'roi',          // rất, tôi, hay, rồi
      'xin', 'cam', 'gia', 'dia',          // xin, cảm, gia, địa
      'chu', 'dun', 'hoc',                  // chúng, đúng, học
      'lam', 'mot', 'cho',                  // làm, một, cho
      'phu',                                 // phú
      'uye', 'yen',                          // tuyệt, yên
    ]),
    quadgrams: new Set([
      'nguo', 'guoi',                         // nguoi
      'nghi', 'truo', 'ruon', 'uong',       // nghi, truong
      'duoc',                                  // duoc (được)
      'chun', 'hung',                         // chung
      'tron', 'rong',                         // trong
      'khon', 'hong',                         // khong
      'nhun', 'hung',                         // nhung
      'hoan', 'oanh',                         // hoanh
    ]),
  },
};

interface TrigramFingerprintResult {
  bestFamily: string;
  bestHitRate: number;
  perFamilyRates: Record<string, number>;
  totalTrigrams: number;
  decayedScore: number;  // exponentially decayed cross-family sum
  triggered: boolean;
}

/**
 * Per-language romanization trigram fingerprinting.
 *
 * For each romanization family, count what % of text trigrams match that family's set.
 * If any single family hits ≥20% → strong signal.
 * Cross-family hits are exponentially decayed: best=1x, 2nd=0.5x, 3rd=0.25x, ...
 */
function trigramFingerprint(text: string): TrigramFingerprintResult {
  const words = text.toLowerCase().split(/\s+/).filter(w => w.length >= 3);

  // Extract all trigrams AND quadgrams from text
  const textTrigrams: string[] = [];
  const textQuadgrams: string[] = [];
  for (const word of words) {
    const clean = word.replace(/[^a-z]/g, '');
    for (let i = 0; i <= clean.length - 3; i++) {
      textTrigrams.push(clean.slice(i, i + 3));
    }
    for (let i = 0; i <= clean.length - 4; i++) {
      textQuadgrams.push(clean.slice(i, i + 4));
    }
  }

  const totalNgrams = textTrigrams.length + textQuadgrams.length;
  if (totalNgrams < 10) {
    // Too few n-grams — rates become unreliable
    return { bestFamily: '', bestHitRate: 0, perFamilyRates: {}, totalTrigrams: totalNgrams, decayedScore: 0, triggered: false };
  }

  // Detect if text has diacritics (for Vietnamese: only match stripped text)
  const diacriticChars = text.match(/[À-ÿĀ-žƠ-ơƯ-ưẠ-ỹ]/g);
  const latinChars = text.match(/[a-zA-ZÀ-ÿĀ-žƠ-ơƯ-ưẠ-ỹ]/g);
  const diacriticDensity = (diacriticChars?.length ?? 0) / (latinChars?.length ?? 1);

  // Count hits per family (trigrams + quadgrams combined)
  // Quadgrams count as 1.5x since they're more specific (less false positive risk)
  const perFamilyHits: Record<string, number> = {};
  for (const [family, { trigrams: trigramSet, quadgrams: quadgramSet }] of Object.entries(ROMANIZATION_NGRAMS)) {
    // Vietnamese n-grams only fire on diacritic-stripped text
    if (family === 'vietnamese' && diacriticDensity > 0.05) continue;

    let hits = 0;
    for (const tri of textTrigrams) {
      if (trigramSet.has(tri)) hits++;
    }
    for (const quad of textQuadgrams) {
      if (quadgramSet.has(quad)) hits += 1.5; // quadgrams worth more
    }
    if (hits > 0) perFamilyHits[family] = hits;
  }

  // Convert to rates (normalize by total n-grams), capped at 1.0
  // Cap needed because quadgram hits count 1.5x in numerator but 1x in denominator
  const perFamilyRates: Record<string, number> = {};
  for (const [family, hits] of Object.entries(perFamilyHits)) {
    perFamilyRates[family] = Math.min(1.0, hits / totalNgrams);
  }

  // Sort by rate descending
  const sorted = Object.entries(perFamilyRates).sort(([, a], [, b]) => b - a);
  const bestFamily = sorted[0]?.[0] ?? '';
  const bestHitRate = sorted[0]?.[1] ?? 0;

  // Graduated scoring:
  //   ≥20% in single family → 1.0 (strong romanization)
  //   ≥10% in single family → 0.5 base, then additional families add with decay
  //   Additional families: rate * 0.5^i (2nd=0.5x, 3rd=0.25x, 4th=0.125x, ...)
  //   Below 10% in best family → just decayed sum (probably noise)
  let decayedScore = 0;
  if (bestHitRate >= 0.18) {
    decayedScore = 1.0;
  } else if (bestHitRate >= 0.10) {
    decayedScore = 0.5;
    // Add decayed contributions from additional families
    for (let i = 1; i < sorted.length; i++) {
      const decayFactor = Math.pow(0.5, i);
      decayedScore += sorted[i]![1]! * decayFactor * 5; // scale up since rates are small (0.05-0.15)
    }
  } else {
    // Below 10% — just raw decayed sum, probably noise
    for (let i = 0; i < sorted.length; i++) {
      const decayFactor = Math.pow(0.5, i);
      decayedScore += sorted[i]![1]! * decayFactor;
    }
  }

  return {
    bestFamily,
    bestHitRate,
    perFamilyRates,
    totalTrigrams: textTrigrams.length,
    decayedScore,
    triggered: bestHitRate >= 0.18,
  };
}

interface RomanizationResult {
  isRomanized: boolean;
  confidence: number;
  signals: string[];
}

// Languages where ELD detection is unreliable AND they rarely appear in
// user-generated content in profanity-filter contexts.
// IMPORTANT: Do NOT include languages that natively use Latin script
// (Tagalog, Indonesian, Malay, Swahili, Turkish, etc.)
const UNLIKELY_LATIN_LANGS = new Set([
  'yo',  // Yoruba — common ELD garbage bin for romanized Asian text
  'hmn', // Hmong
]);

function isRomanized(
  text: string,
  eldLang: string,
  eldTopScore: number,
  eldReliable: boolean,
  cluster: { isScattered: boolean; isCoherent: boolean; uniqueFamilies: number },
): RomanizationResult {
  const signals: string[] = [];
  let score = 0;

  const words = text.split(/\s+/).filter(w => w.length > 0);
  const alphaText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F\u0370-\uFFFF]/g, '');
  const latinText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, '');
  const isLatinScript = alphaText.length > 0 ? latinText.length / alphaText.length > 0.85 : true;

  if (!isLatinScript) return { isRomanized: false, confidence: 0, signals: ['native-script'] };
  if (words.length <= 3) return { isRomanized: false, confidence: 0, signals: ['too-short'] };

  // Graduated family scatter: more unique families = more penalty
  // 1-2 families = coherent, no penalty
  // 3 families   = mildly scattered (+0.10)
  // 4 families   = scattered (+0.15)
  // 5 families   = maximally scattered (+0.20)
  // NOTE: reduced from 0.15/0.25/0.30 — these are supporting signals, not primary
  if (cluster.uniqueFamilies >= 5) {
    score += 0.20;
    signals.push('family-scatter-5');
  } else if (cluster.uniqueFamilies >= 4) {
    score += 0.15;
    signals.push('family-scatter-4');
  } else if (cluster.uniqueFamilies >= 3 && !cluster.isCoherent) {
    score += 0.10;
    signals.push('family-incoherent-3');
  }

  const ELD_GARBAGE_LANGS = new Set(['yo', 'hmn']);
  if (ELD_GARBAGE_LANGS.has(eldLang)) {
    score += 0.20;
    signals.push('eld-garbage-lang');
  }

  if (eldTopScore < 0.45) {
    score += 0.15;
    signals.push('very-low-eld');
  } else if (eldTopScore < 0.60) {
    score += 0.08;
    signals.push('low-eld');
  }

  if (!eldReliable) {
    score += 0.08;
    signals.push('eld-unreliable');
  }

  // Per-language romanization n-gram fingerprinting — highest signal
  // ≥18% single family → strong, ≥10% → moderate, <10% → noise
  const fp = trigramFingerprint(text);
  if (fp.triggered) {
    // Single family ≥18% — strong romanization signal
    score += 0.40;
    signals.push(`trigram-${fp.bestFamily}(${(fp.bestHitRate * 100).toFixed(0)}%)`);
  } else if (fp.bestHitRate >= 0.10) {
    // Single family 10-19% — moderate signal with cross-family decay
    score += 0.20;
    signals.push(`trigram-moderate-${fp.bestFamily}(${(fp.bestHitRate * 100).toFixed(0)}%,decay=${fp.decayedScore.toFixed(2)})`);
  } else if (fp.decayedScore >= 0.10) {
    // Below 10% in any family but scattered hits sum up — weak/noisy
    score += 0.05;
    signals.push(`trigram-noise(${(fp.decayedScore * 100).toFixed(0)}%)`);
  }

  const confidence = Math.min(1.0, score);
  return { isRomanized: confidence >= 0.40, confidence, signals };
}

// ── Test cases ───────────────────────────────────────────────────────────────

const cases: { label: string; text: string; expectRomanized: boolean }[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // TRUE ROMANIZED — should ALL return isRomanized: true
  // ═══════════════════════════════════════════════════════════════════════

  // Hindi (Devanagari → Latin)
  { label: 'HI roman 1', text: "mujhe bahut accha laga yeh dekhkar ki tum aa gaye", expectRomanized: true },
  { label: 'HI roman 2', text: "kya haal hai bhai sab theek hai na aaj", expectRomanized: true },
  { label: 'HI roman 3', text: "aaj mausam bahut achha hai bahar chalte hain", expectRomanized: true },
  { label: 'HI roman 4', text: "mujhe lagta hai ki yeh bahut mushkil kaam hai lekin", expectRomanized: true },
  { label: 'HI roman 5', text: "tum kahan jaa rahe ho aaj shaam ko milte hain", expectRomanized: true },
  { label: 'HI roman 6', text: "hamara desh bahut sundar hai aur log bahut achhe hain", expectRomanized: true },
  { label: 'HI roman 7', text: "ghar pe khana khao phir bahar chalo thoda ghoomte hain", expectRomanized: true },
  { label: 'HI roman 8', text: "padhai khatam karke dost se milne ja raha hoon abhi", expectRomanized: true },

  // Urdu (Arabic script → Latin)
  { label: 'UR roman 1', text: "mera naam ali hai aur main karachi se hoon bhai", expectRomanized: true },
  { label: 'UR roman 2', text: "aap kaise hain sab kuch theek hai inshallah", expectRomanized: true },
  { label: 'UR roman 3', text: "yeh kitab bahut achi hai maine parh li hai puri", expectRomanized: true },
  { label: 'UR roman 4', text: "khuda hafiz bhai apna khayal rakhna hamesha yaad rakhna", expectRomanized: true },

  // Arabic (Arabic script → Latin)
  { label: 'AR roman 1', text: "ana bahebak ya habibi keefak el yom mashallah", expectRomanized: true },
  { label: 'AR roman 2', text: "shukran jazeelan ya sadeeqi kayf halak alyawm", expectRomanized: true },
  { label: 'AR roman 3', text: "ana min masr wa ahlan wa sahlan bikum jamian", expectRomanized: true },
  { label: 'AR roman 4', text: "al hamdu lillah ana bikhair wa inta kayf halak", expectRomanized: true },
  { label: 'AR roman 5', text: "yalla khalas ana mashi min hina la habibi wallah", expectRomanized: true },

  // Russian (Cyrillic → Latin)
  { label: 'RU roman 1', text: "privet kak dela u tebya segodnya vsyo horosho", expectRomanized: true },
  { label: 'RU roman 2', text: "ya khochu poyti v magazin kupit khleb i moloko", expectRomanized: true },
  { label: 'RU roman 3', text: "mne nravitsya eta kniga ona ochen interesnaya chitayu", expectRomanized: true },
  { label: 'RU roman 4', text: "zavtra budet khoroshaya pogoda mozhno poyti gulyat v park", expectRomanized: true },
  { label: 'RU roman 5', text: "spasibo bolshoye za pomoshch mne ochen priyatno bylo", expectRomanized: true },

  // Japanese (Romaji)
  { label: 'JA roman 1', text: "watashi wa nihongo o benkyou shite imasu ganbatte", expectRomanized: true },
  { label: 'JA roman 2', text: "kyou wa totemo ii tenki desu ne sampo shimashou", expectRomanized: true },
  { label: 'JA roman 3', text: "sumimasen kono hon wa ikura desu ka oshiete kudasai", expectRomanized: true },
  { label: 'JA roman 4', text: "nihon no bunka wa totemo omoshiroi to omoimasu watashi", expectRomanized: true },
  { label: 'JA roman 5', text: "ashita tomodachi to issho ni eiga o mimasu tanoshimi", expectRomanized: true },

  // Korean (Hangul → Latin)
  { label: 'KO roman 1', text: "annyeonghaseyo hangugeo reul gongbu hago isseoyo jal", expectRomanized: true },
  { label: 'KO roman 2', text: "oneul nalssiga joeyo sancheck halkka yo gamsahamnida", expectRomanized: true },
  { label: 'KO roman 3', text: "igeon eolmayeyo yeogi eseo meokgo sipeoyo juseyo", expectRomanized: true },
  { label: 'KO roman 4', text: "hangugeo gongbu hago isseoyo hwaiting jal haeboseyo", expectRomanized: true },

  // Chinese (Pinyin)
  { label: 'ZH pinyin 1', text: "wo shi zhongguo ren wo ai zhongguo hen duo", expectRomanized: true },
  { label: 'ZH pinyin 2', text: "jintian tianqi hen hao women yiqi qu gongyuan ba", expectRomanized: true },
  { label: 'ZH pinyin 3', text: "ni hao ma wo hen gaoxing renshi ni pengyou", expectRomanized: true },
  { label: 'ZH pinyin 4', text: "zhege dongxi duoshao qian wo xiang mai yige", expectRomanized: true },
  { label: 'ZH pinyin 5', text: "xiexie ni de bangzhu women mingtian jian ba zaijian", expectRomanized: true },

  // Thai (Thai script → Latin)
  { label: 'TH roman 1', text: "sawadee krap sabai dee mai wan nee arai dee", expectRomanized: true },
  { label: 'TH roman 2', text: "khob khun krap phom cheu arai pai nai dee krap", expectRomanized: true },
  { label: 'TH roman 3', text: "arai na krap mai khao jai phom sabai dee krap", expectRomanized: true },

  // Bengali (Bengali script → Latin)
  { label: 'BN roman 1', text: "amar naam rahim ami dhaka theke eshechi apnar ki", expectRomanized: true },
  { label: 'BN roman 2', text: "tumi kemon acho aaj ke ami bhalo achi dhonnobad", expectRomanized: true },
  { label: 'BN roman 3', text: "apni kothay jacchen aaj ke bhalobashi tomar shathe", expectRomanized: true },

  // Tamil (Tamil script → Latin)
  { label: 'TA roman 1', text: "vanakkam eppadi irukkinga naan nalla irukken nandri", expectRomanized: true },
  { label: 'TA roman 2', text: "enna panreenga innikku naan velaikku poren nandri", expectRomanized: true },
  { label: 'TA roman 3', text: "naan romba nalla irukkinga ungalukku nandri solren", expectRomanized: true },

  // Vietnamese without diacritics (heavily romanized feel)
  { label: 'VI no-acc 1', text: "toi rat vui duoc gap ban hom nay troi dep qua", expectRomanized: true },
  { label: 'VI no-acc 2', text: "chung toi di hoc moi ngay truong hoc rat tot lam", expectRomanized: true },

  // Persian/Farsi (Arabic script → Latin)
  { label: 'FA roman 1', text: "salam chetori halet khube man khubam merci doost", expectRomanized: true },
  { label: 'FA roman 2', text: "emruz hava kheili khube birun berim ghaza bokhorim", expectRomanized: true },
  { label: 'FA roman 3', text: "man mikham beram bazaar kheili chizha lazem daram", expectRomanized: true },

  // ═══════════════════════════════════════════════════════════════════════
  // REGULAR LATIN-SCRIPT TEXT — should ALL return isRomanized: false
  // ═══════════════════════════════════════════════════════════════════════

  // English — various registers (~40+ words each)
  { label: 'EN normal', text: "The quick brown fox jumps over the lazy dog near the riverbank while the birds sing in the tall oak trees above", expectRomanized: false },
  { label: 'EN long', text: "We are pleased to announce that the annual conference will be held in downtown Chicago this September with keynote speakers from around the world and workshops for all skill levels registration opens next week", expectRomanized: false },
  { label: 'EN casual', text: "hey guys just wanted to let you know the meeting is moved to three pm tomorrow so make sure you update your calendars and let the team know", expectRomanized: false },
  { label: 'EN tech', text: "the server crashed because the database connection pool was exhausted during peak traffic and the load balancer failed to redirect requests to the backup cluster in time", expectRomanized: false },
  { label: 'EN academic', text: "the results of the study indicate a significant correlation between diet and cognitive performance suggesting that nutritional interventions could improve academic outcomes for young students", expectRomanized: false },
  { label: 'EN sports', text: "the team scored three goals in the second half to win the championship game after trailing by two goals at halftime and the crowd went absolutely wild", expectRomanized: false },
  { label: 'EN cooking', text: "preheat the oven to three hundred fifty degrees and mix the flour with butter then add the eggs and vanilla extract before folding in the chocolate chips gently", expectRomanized: false },
  { label: 'EN legal', text: "the defendant was found not guilty on all counts after the jury deliberated for three days considering all the evidence presented during the two week trial", expectRomanized: false },
  { label: 'EN medical', text: "the patient presented with acute abdominal pain and was referred for imaging studies to rule out appendicitis or other serious conditions requiring surgical intervention", expectRomanized: false },
  { label: 'EN names', text: "Muhammad and Raj went to the park with their friend Chen and his sister Yuki and they played basketball until the sun went down behind the hills", expectRomanized: false },
  { label: 'EN profanity', text: "what the fuck are you doing you stupid piece of shit asshole get the hell out of here before I lose my damn mind you worthless jerk", expectRomanized: false },
  { label: 'EN event 1', text: "join us for a community barbecue this saturday at the park everyone is welcome bring your family and friends and enjoy free food and live music all afternoon", expectRomanized: false },
  { label: 'EN event 2', text: "the annual fundraiser gala will feature live music and a silent auction with proceeds going to local charities that support education and youth development programs", expectRomanized: false },
  { label: 'EN short', text: "have a great day see you tomorrow morning at work and dont forget to bring the report we were working on together last week", expectRomanized: false },
  { label: 'EN question', text: "does anyone know where the nearest pharmacy is around here because I need to pick up a prescription before they close for the evening tonight", expectRomanized: false },

  // French
  { label: 'FR normal', text: "Nous avons passé une excellente soirée avec nos amis au restaurant hier.", expectRomanized: false },
  { label: 'FR no-acc', text: "Nous avons passe une excellente soiree avec nos amis au restaurant hier soir.", expectRomanized: false },
  { label: 'FR casual', text: "je suis vraiment content de te voir ca fait longtemps mon ami comment", expectRomanized: false },
  { label: 'FR profanity', text: "putain de merde va te faire foutre espece de connard imbecile", expectRomanized: false },
  { label: 'FR event', text: "Rejoignez-nous pour une soiree exceptionnelle de musique francaise au theatre municipal.", expectRomanized: false },
  { label: 'FR news', text: "le president a annonce de nouvelles mesures pour lutter contre le changement climatique", expectRomanized: false },
  { label: 'FR short', text: "bonjour comment allez vous je suis tres heureux de vous voir", expectRomanized: false },
  { label: 'FR food', text: "ce soir on mange du poulet roti avec des pommes de terre", expectRomanized: false },

  // German
  { label: 'DE normal', text: "Die Universität München bietet ausgezeichnete Studiengänge für internationale Studenten.", expectRomanized: false },
  { label: 'DE no-uml', text: "Die Universitat Munchen bietet ausgezeichnete Studiengange fur internationale Studenten an.", expectRomanized: false },
  { label: 'DE casual', text: "ich bin heute echt mude und will einfach nur nach hause gehen schlafen", expectRomanized: false },
  { label: 'DE profanity', text: "Scheisse du Arschloch halt die Fresse du Hurensohn Wichser Idiot", expectRomanized: false },
  { label: 'DE event', text: "Kommen Sie zu unserem jahrlichen Strassenfest mit Bratwursten und Bier am Samstag.", expectRomanized: false },
  { label: 'DE news', text: "die Regierung hat neue Massnahmen gegen den Klimawandel angekuendigt heute Morgen", expectRomanized: false },
  { label: 'DE short', text: "guten morgen wie geht es Ihnen heute bin froh Sie zu sehen", expectRomanized: false },
  { label: 'DE food', text: "heute abend essen wir schnitzel mit kartoffelsalat und ein bier", expectRomanized: false },

  // Spanish
  { label: 'ES normal', text: "La universidad ofrece programas de ingeniería excelentes para estudiantes internacionales.", expectRomanized: false },
  { label: 'ES no-acc', text: "La universidad ofrece programas de ingenieria excelentes para estudiantes internacionales hoy.", expectRomanized: false },
  { label: 'ES casual', text: "oye que tal como estas hace mucho tiempo que no te veo amigo mio", expectRomanized: false },
  { label: 'ES profanity', text: "hijo de puta que mierda es esta pendejo cabron idiota estupido", expectRomanized: false },
  { label: 'ES event', text: "los invitamos a nuestra fiesta de verano con musica en vivo y comida tipica", expectRomanized: false },
  { label: 'ES short', text: "buenos dias como estas espero que todo ande bien por alla", expectRomanized: false },
  { label: 'ES food', text: "vamos a comer tacos y burritos en el restaurante mexicano", expectRomanized: false },

  // Italian
  { label: 'IT normal', text: "L'università offre eccellenti programmi di ingegneria per studenti provenienti da tutto il mondo.", expectRomanized: false },
  { label: 'IT casual', text: "ciao come stai oggi fa un tempo bellissimo andiamo al parco insieme", expectRomanized: false },
  { label: 'IT food', text: "stasera mangiamo la pizza margherita con mozzarella fresca e basilico buonissimo", expectRomanized: false },
  { label: 'IT short', text: "buongiorno come stai spero che tu stia bene ci vediamo dopo", expectRomanized: false },
  { label: 'IT event', text: "vi invitiamo alla nostra festa di compleanno sabato sera al ristorante", expectRomanized: false },

  // Portuguese
  { label: 'PT normal', text: "A universidade oferece excelentes programas de engenharia para estudantes internacionais hoje.", expectRomanized: false },
  { label: 'PT casual', text: "ola como voce esta faz muito tempo que nao nos vemos amigo meu", expectRomanized: false },
  { label: 'PT short', text: "bom dia como voce esta tudo bem por aqui espero que sim", expectRomanized: false },
  { label: 'PT BR', text: "cara vamos la no churrasco no fim de semana vai ser demais", expectRomanized: false },

  // Dutch
  { label: 'NL normal', text: "De universiteit biedt uitstekende ingenieursprogramma's voor internationale studenten aan vandaag.", expectRomanized: false },
  { label: 'NL casual', text: "hallo hoe gaat het met jou ik heb je lang niet gezien vriend", expectRomanized: false },
  { label: 'NL short', text: "goedemorgen hoe gaat het vandaag met jou alles goed hier", expectRomanized: false },

  // Swedish
  { label: 'SV normal', text: "Universitetet erbjuder utmärkta ingenjörsprogram för internationella studenter från hela världen.", expectRomanized: false },
  { label: 'SV casual', text: "hej hur mar du idag jag maste handla mat efter jobbet", expectRomanized: false },

  // Norwegian
  { label: 'NO normal', text: "Universitetet tilbyr utmerkede ingeniørprogrammer for internasjonale studenter fra hele verden.", expectRomanized: false },
  { label: 'NO casual', text: "hei hvordan har du det i dag alt bra her hjemme hos oss", expectRomanized: false },

  // Danish
  { label: 'DA normal', text: "Universitetet tilbyder fremragende ingeniørprogrammer for internationale studerende fra hele verden.", expectRomanized: false },
  { label: 'DA casual', text: "hej hvordan gar det med dig vi ses i morgen til festen", expectRomanized: false },

  // Polish
  { label: 'PL normal', text: "Uniwersytet oferuje doskonale programy inzynierskie dla studentow miedzynarodowych z calego swiata.", expectRomanized: false },
  { label: 'PL casual', text: "czesc jak sie masz dawno cie nie widzialem co slychac u ciebie", expectRomanized: false },
  { label: 'PL short', text: "dzien dobry jak sie pan miewa dzisiaj pogoda jest ladna", expectRomanized: false },

  // Czech
  { label: 'CS normal', text: "Univerzita nabizi vynikajici inzenyrske programy pro mezinarodni studenty z celeho sveta.", expectRomanized: false },
  { label: 'CS casual', text: "ahoj jak se mas dneska je hezky pocasi pojdme ven na pivo", expectRomanized: false },

  // Romanian
  { label: 'RO normal', text: "Universitatea ofera programe excelente de inginerie pentru studenti internationali din lumea intreaga.", expectRomanized: false },
  { label: 'RO casual', text: "buna ziua cum te simti azi vremea este frumoasa afara hai la plimbare", expectRomanized: false },

  // Turkish
  { label: 'TR normal', text: "Üniversite uluslararası öğrenciler için mükemmel mühendislik programları sunmaktadır bugün.", expectRomanized: false },
  { label: 'TR no-acc', text: "Universite uluslararasi ogrenciler icin mukemmel muhendislik programlari sunmaktadir bugun.", expectRomanized: false },
  { label: 'TR casual', text: "merhaba nasilsin bugun hava cok guzel disari cikalim mi birlikte gezelim", expectRomanized: false },
  { label: 'TR short', text: "gunaydin bugun isler nasil gidiyor her sey yolunda mi acaba", expectRomanized: false },
  { label: 'TR food', text: "aksam yemeginde kebap ve lahmacun yiyelim cok guzel olur", expectRomanized: false },

  // Indonesian / Malay
  { label: 'ID normal', text: "Universitas ini menawarkan program teknik yang sangat baik untuk mahasiswa internasional.", expectRomanized: false },
  { label: 'ID casual', text: "halo apa kabar sudah lama tidak bertemu teman aku senang sekali hari ini", expectRomanized: false },
  { label: 'ID short', text: "selamat pagi bagaimana kabar anda hari ini semoga baik baik saja", expectRomanized: false },
  { label: 'MS normal', text: "Universiti ini menawarkan program kejuruteraan yang sangat baik untuk pelajar antarabangsa.", expectRomanized: false },

  // Tagalog
  { label: 'TL normal', text: "Ang unibersidad ay nag-aalok ng mahusay na mga programa sa engineering para sa mga estudyante.", expectRomanized: false },
  { label: 'TL casual', text: "kumusta ka na matagal na tayong hindi nagkita kamusta ang pamilya mo kaibigan", expectRomanized: false },
  { label: 'TL short', text: "magandang umaga kumusta ka na sana ayos lang ang lahat sa inyo", expectRomanized: false },

  // Swahili
  { label: 'SW normal', text: "Chuo kikuu kinatoa programu bora za uhandisi kwa wanafunzi wa kimataifa kutoka ulimwenguni.", expectRomanized: false },
  { label: 'SW casual', text: "habari yako rafiki yangu tumekuwa muda mrefu hatujaoana vipi hali yako leo", expectRomanized: false },
  { label: 'SW short', text: "habari za asubuhi leo hali ya hewa ni nzuri sana twende nje", expectRomanized: false },

  // Finnish
  { label: 'FI normal', text: "Yliopisto tarjoaa erinomaisia insinooriohjelmia kansainvalisille opiskelijoille ympari maailman tana vuonna.", expectRomanized: false },
  { label: 'FI casual', text: "moi mita kuuluu mina olen hyvin kiitos kysymasta tervetuloa meille", expectRomanized: false },

  // Hungarian
  { label: 'HU normal', text: "Az egyetem kiváló mérnöki programokat kínál a nemzetközi hallgatók számára a világ minden tájáról.", expectRomanized: false },
  { label: 'HU casual', text: "szia hogy vagy ma nagyon szep ido van menjunk setalni a parkba", expectRomanized: false },

  // Croatian
  { label: 'HR normal', text: "Sveuciliste nudi izvrsne inzenjerske programe za medjunarodne studente iz cijelog svijeta danas.", expectRomanized: false },
  { label: 'HR casual', text: "bok kako si davno se nismo vidjeli hajde na kavu sutra popodne", expectRomanized: false },

  // Vietnamese WITH diacritics (should NOT be romanized — this is native orthography)
  { label: 'VI w/ acc 1', text: "Tôi rất vui được gặp bạn hôm nay trời đẹp quá chúng ta đi chơi", expectRomanized: false },
  { label: 'VI w/ acc 2', text: "Xin chào bạn khỏe không hôm nay thời tiết rất đẹp chúng ta đi dạo", expectRomanized: false },

  // Afrikaans
  { label: 'AF normal', text: "Die universiteit bied uitstekende ingenieursprogramme vir internasionale studente van regoor die wêreld.", expectRomanized: false },
  { label: 'AF casual', text: "hallo hoe gaan dit met jou vandag die weer is pragtig buite", expectRomanized: false },

  // SMS / abbreviated (should NOT be romanized, just scrappy)
  { label: 'EN sms', text: "omg u r so funny lol cant believe it tbh rofl", expectRomanized: false },
  { label: 'FR sms', text: "jsui alle a la bibli pr etudier c tro dur mdr lol", expectRomanized: false },
  { label: 'DE sms', text: "bin grad an der uni pruefung war krass alter echt mies", expectRomanized: false },
  { label: 'ES sms', text: "tio k pasa hace tpo k no te veo kdd manan vale bro", expectRomanized: false },

  // English with loanwords (should NOT trigger)
  { label: 'EN + names', text: "Priya and Takeshi are coming to the hackathon with Alejandro and Bjorn this weekend", expectRomanized: false },
  { label: 'EN food', text: "lets get some tikka masala and naan bread with chutney and raita tonight", expectRomanized: false },
  { label: 'EN yoga', text: "today we practiced pranayama and asana followed by shavasana and meditation namaste", expectRomanized: false },
  { label: 'EN martial', text: "the sensei taught us kata and kumite techniques during karate class today very good", expectRomanized: false },
  { label: 'EN music', text: "we listened to some amazing bossa nova and samba at the brazilian festival last night", expectRomanized: false },
  { label: 'EN travel', text: "we visited the souk in marrakech and bought some tagine and couscous for dinner", expectRomanized: false },
  { label: 'EN tech 2', text: "the kubernetes cluster failed to deploy the nginx reverse proxy config", expectRomanized: false },
  { label: 'EN mixed', text: "she ordered pho and banh mi from the vietnamese restaurant downtown", expectRomanized: false },

  // ═══════════════════════════════════════════════════════════════════════
  // ADDITIONAL ROMANIZED — more varied examples
  // ═══════════════════════════════════════════════════════════════════════

  // Hindi - more variety
  { label: 'HI roman 9', text: "chai peene chalo yaar bahut thandi hai aaj bahar", expectRomanized: true },
  { label: 'HI roman 10', text: "kal raat ko bahut baarish hui thi sadak pe paani tha", expectRomanized: true },
  { label: 'HI roman 11', text: "dost ne bola ki kal party hai ghar pe aana zaroor", expectRomanized: true },
  { label: 'HI roman 12', text: "khana banana seekho apne haath se bahut maza aata hai", expectRomanized: true },

  // Urdu - more variety
  { label: 'UR roman 5', text: "ramzan mubarak sab ko khushi mein rehna hamesha allah hafiz", expectRomanized: true },
  { label: 'UR roman 6', text: "dua karo sab ke liye allah sab ki madad kare hamesha", expectRomanized: true },

  // Arabic - more variety
  { label: 'AR roman 6', text: "mashi ya akhi ana rayeh lal beit halla yalla bye", expectRomanized: true },
  { label: 'AR roman 7', text: "wallah ana mish fahim shu bidak tihki ya zalameh", expectRomanized: true },

  // Russian - more variety
  { label: 'RU roman 6', text: "davai poydem v kino segodnya vecherom budet interesno", expectRomanized: true },
  { label: 'RU roman 7', text: "mne ochen nravitsya russkaya kuhnya borshch i pelmeni", expectRomanized: true },

  // Japanese - more variety
  { label: 'JA roman 6', text: "kinou tomodachi to issho ni sushi o tabemashita oishikatta", expectRomanized: true },
  { label: 'JA roman 7', text: "nihongo no benkyou wa muzukashii desu ga tanoshii desu", expectRomanized: true },

  // Korean - more variety
  { label: 'KO roman 5', text: "oneul mwo haeyo uri gachi bap meokgo sipeoyo jeonyeoge", expectRomanized: true },
  { label: 'KO roman 6', text: "hangugeo gongbu haneun geot joeyo hwaiting haja uri gachi", expectRomanized: true },

  // Chinese - more variety
  { label: 'ZH pinyin 6', text: "women qu chifan ba jintian wanshang chi shenme hao ne", expectRomanized: true },
  { label: 'ZH pinyin 7', text: "zhege difang hen piaoliang wo xihuan zher de fengjing", expectRomanized: true },

  // Bengali - more variety
  { label: 'BN roman 4', text: "ami bhalo achi tumi kemon acho dada boudi kothay gelo", expectRomanized: true },
  { label: 'BN roman 5', text: "khub bhalo lagche aaj thanda hawa dichhe baire ghure ashi", expectRomanized: true },

  // Tamil - more variety
  { label: 'TA roman 4', text: "neenga eppadi irukkinga naan romba nalla irukkinga nandri", expectRomanized: true },

  // Telugu (Telugu script → Latin)
  { label: 'TE roman 1', text: "meeru ela unnaru nenu baagunnanu dhanyavadamulu meeku", expectRomanized: true },
  { label: 'TE roman 2', text: "eppudu vastaru nenu intiki veltunnanu chala santosham", expectRomanized: true },

  // Nepali (Devanagari → Latin)
  { label: 'NE roman 1', text: "namaste tapai kasto hunuhunchha ma thik chhu dhanyabaad", expectRomanized: true },

  // Gujarati (Gujarati → Latin)
  { label: 'GU roman 1', text: "kem cho tamne malvanu gamyu mane bahut maja aavi aaj", expectRomanized: true },

  // ═══════════════════════════════════════════════════════════════════════
  // ADDITIONAL NON-ROMANIZED — more Latin-script languages
  // ═══════════════════════════════════════════════════════════════════════

  // English - event descriptions (our primary use case)
  { label: 'EN event 3', text: "free yoga class in the park every sunday morning bring a mat", expectRomanized: false },
  { label: 'EN event 4', text: "volunteer cleanup day at the beach this saturday at nine am", expectRomanized: false },
  { label: 'EN event 5', text: "open mic night at the coffee shop sign up starts at seven", expectRomanized: false },
  { label: 'EN event 6', text: "basketball tournament this weekend registration is now open for teams", expectRomanized: false },
  { label: 'EN weather', text: "its gonna rain all week better bring an umbrella to work", expectRomanized: false },
  { label: 'EN review', text: "this restaurant has amazing pasta but the service was slow", expectRomanized: false },

  // French - more variety
  { label: 'FR event 2', text: "venez decouvrir notre marche artisanal ce dimanche matin au centre ville", expectRomanized: false },
  { label: 'FR weather', text: "il fait tres beau aujourd hui on devrait aller se promener au parc", expectRomanized: false },
  { label: 'FR review', text: "ce restaurant propose une cuisine delicieuse mais le service est lent", expectRomanized: false },

  // German - more variety
  { label: 'DE event 2', text: "wir laden Sie herzlich ein zum Sommerfest mit Livemusik und Grillbuffet", expectRomanized: false },
  { label: 'DE weather', text: "morgen wird es regnen vergiss den Regenschirm nicht mitzunehmen", expectRomanized: false },

  // Spanish - more variety
  { label: 'ES event 2', text: "fiesta de cumpleanos este sabado en mi casa todos estan invitados", expectRomanized: false },
  { label: 'ES weather', text: "manana va a llover todo el dia mejor lleva paraguas al trabajo", expectRomanized: false },
  { label: 'ES review', text: "este cafe tiene un ambiente muy agradable y el personal es amable", expectRomanized: false },

  // Italian - more variety
  { label: 'IT event 2', text: "festa di quartiere con musica dal vivo e cibo tradizionale sabato sera", expectRomanized: false },
  { label: 'IT weather', text: "domani piove tutto il giorno meglio portare ombrello e giacca pesante", expectRomanized: false },

  // Portuguese - more variety
  { label: 'PT event', text: "festa junina no proximo sabado com musica ao vivo e comida tipica", expectRomanized: false },
  { label: 'PT weather', text: "amanha vai chover o dia inteiro melhor levar guarda chuva para trabalho", expectRomanized: false },

  // Dutch - more variety
  { label: 'NL event', text: "buurtfeest aanstaande zaterdag met live muziek en barbecue voor iedereen", expectRomanized: false },
  { label: 'NL weather', text: "morgen gaat het regenen de hele dag neem een paraplu mee naar kantoor", expectRomanized: false },

  // Catalan
  { label: 'CA normal', text: "la universitat ofereix programes excel lents per a estudiants internacionals", expectRomanized: false },
  { label: 'CA casual', text: "hola com estas fa molt de temps que no ens veiem amic meu", expectRomanized: false },

  // Galician
  { label: 'GL normal', text: "a universidade ofrece excelentes programas para estudantes internacionais hoxe", expectRomanized: false },

  // Basque
  { label: 'EU normal', text: "unibertsitateak ikasle internazionalentzako programa bikainak eskaintzen ditu gaur", expectRomanized: false },

  // Slovak
  { label: 'SK normal', text: "univerzita ponuka vynikajuce inzinierske programy pre medzinarodnych studentov", expectRomanized: false },

  // Lithuanian
  { label: 'LT normal', text: "universitetas siulo puikias inzinerijos programas tarptautiniams studentams is viso pasaulio", expectRomanized: false },

  // Latvian
  { label: 'LV normal', text: "universitate piedava lieliskas inzenierijas programmas starptautiskajiem studentiem no visas pasaules", expectRomanized: false },

  // Estonian
  { label: 'ET normal', text: "ulikool pakub rahvusvahelistele tudengitele suurepäraseid inseneriprogramme kogu maailmast", expectRomanized: false },

  // Maltese (Latin script, Semitic language)
  { label: 'MT normal', text: "l-universita toffri programmi eccellenti ghal istudenti internazzjonali minn madwar id-dinja", expectRomanized: false },

  // Welsh
  { label: 'CY normal', text: "mae'r brifysgol yn cynnig rhaglenni peirianneg ardderchog ar gyfer myfyrwyr rhyngwladol", expectRomanized: false },

  // Albanian
  { label: 'SQ normal', text: "universiteti ofron programe te shkëlqyera inxhinierike per studentet nderkombetare", expectRomanized: false },

  // Slovenian
  { label: 'SL normal', text: "univerza ponuja odlicne inzenirske programe za mednarodne studente iz celega sveta", expectRomanized: false },

  // ═══════════════════════════════════════════════════════════════════════
  // LONG TEXTS — test that detection thresholds hold at scale
  // ═══════════════════════════════════════════════════════════════════════

  // Long English (80+ words)
  { label: 'EN long 1', text: "We are hosting a community garden cleanup event this Saturday morning starting at nine am and going until noon. Please bring your own gloves and tools if you have them. We will provide water and snacks for all volunteers. There will also be a plant swap table where you can bring your extra seedlings and take home something new for your garden. Kids are welcome and there will be activities for them as well.", expectRomanized: false },
  { label: 'EN long 2', text: "The technology conference will feature over fifty speakers from leading companies in artificial intelligence machine learning and cloud computing. Attendees will have the opportunity to participate in hands on workshops covering topics like natural language processing computer vision and distributed systems. Early bird registration is now open with discounted rates available until the end of the month. Group discounts are also available for teams of five or more.", expectRomanized: false },
  { label: 'EN long 3', text: "I went to the grocery store yesterday to buy ingredients for dinner and ended up spending way more than I planned because everything looked so good. I got fresh salmon some asparagus a bag of rice and a bunch of herbs. Then I stopped by the bakery section and grabbed a loaf of sourdough bread and some croissants for breakfast tomorrow morning. The total came out to about sixty dollars which is more than I usually spend.", expectRomanized: false },

  // Long French (60+ words)
  { label: 'FR long 1', text: "Nous organisons une journee portes ouvertes a notre centre communautaire ce samedi. Il y aura des activites pour les enfants des demonstrations culinaires et un concert de musique locale en fin de journee. L entree est gratuite et tout le monde est le bienvenu. Venez avec votre famille et vos amis pour profiter de cette belle journee ensemble dans notre quartier.", expectRomanized: false },
  { label: 'FR long 2', text: "Le marche du dimanche propose des produits frais et locaux de nos agriculteurs de la region. Vous trouverez des fruits des legumes du fromage du pain artisanal et des fleurs fraichement coupees. Les prix sont tres raisonnables et la qualite est toujours excellente. C est un endroit parfait pour faire ses courses du weekend.", expectRomanized: false },

  // Long German (60+ words)
  { label: 'DE long 1', text: "Wir laden Sie herzlich ein zu unserem jahrlichen Nachbarschaftsfest am Samstag im Stadtpark. Es wird Live-Musik geben Grillstationen mit verschiedenen Speisen und Getranken und ein Kinderprogramm mit Hupfburg und Schminken. Der Eintritt ist frei und alle Nachbarn sind willkommen. Bringen Sie Ihre Familie und Freunde mit und geniessen Sie einen schonen Tag im Freien zusammen.", expectRomanized: false },

  // Long Spanish (60+ words)
  { label: 'ES long 1', text: "Estamos organizando una fiesta de barrio el proximo sabado con musica en vivo comida tipica y actividades para toda la familia. Habra juegos para los ninos un torneo de futbol para los adultos y un area de descanso con sombra y bebidas frescas. La entrada es gratuita y todos los vecinos estan invitados a participar en esta celebracion comunitaria.", expectRomanized: false },

  // Long Italian (60+ words)
  { label: 'IT long 1', text: "Siamo lieti di invitarvi alla nostra festa di quartiere che si terra sabato prossimo nel parco centrale. Ci saranno stand gastronomici con piatti della tradizione locale musica dal vivo e giochi per bambini. L ingresso e gratuito e tutti i residenti sono benvenuti. Portate la vostra famiglia e i vostri amici per una giornata di divertimento e convivialita.", expectRomanized: false },

  // Long Hindi romanized (60+ words)
  { label: 'HI long 1', text: "aaj hamare mohalle mein ek bahut bada mela laga hua hai jahan bahut saare log aaye hain apne parivaar ke saath. bachchon ke liye jhule hain aur khane pine ke bahut saare stall lage hain. mausam bhi bahut achha hai aaj toh sabko bahut maza aa raha hai. shaam ko ek sangeet karyakram bhi hoga jismein bahut achhe gaayak gaana gaayenge.", expectRomanized: true },
  { label: 'HI long 2', text: "mere dost ne mujhe bataya ki kal uske ghar pe ek party hai jismein bahut saare log aayenge. usne kaha ki khana bahut achha banega aur sangeet bhi hoga. maine bola theek hai main zaroor aaunga apne bhai ke saath. phir hum dono bazaar gaye aur party ke liye kuch saamaan kharida jo zaroorat ka tha.", expectRomanized: true },

  // Long Arabic romanized (50+ words)
  { label: 'AR long 1', text: "ana rayeh lal souk al youm ashteri khudra wa fakha la ummi. al jaw helw ktir al youm wa ana mashallah bikhair. ba3dein baddi rouh la beit sadeeqi la nitsalla sawa wa nitkallam shway. inshallah bukra mnitruk la al bahr ma3 al shabab killon mwafeqin.", expectRomanized: true },

  // Long Russian romanized (50+ words)
  { label: 'RU long 1', text: "segodnya my s druzyami poshli v park gulyat potomu chto pogoda byla ochen khoroshaya. my vziali s soboi edu i napitki i ustroili piknik na trave. potom my igrali v futbol i khorosho proveli vremya. vecherom my poshli domoi ustavshiye no schastliviye ot zamechatelnogo dnya.", expectRomanized: true },

  // Long Japanese romanized (50+ words)
  { label: 'JA long 1', text: "kyou watashi wa tomodachi to issho ni kouen ni ikimashita. tenki ga totemo yokatta desu kara sampo shite bento o tabemashita. sorekara kouen no naka de shashin o torimashita. yoru ni natte kara resutoran de bangohan o tabemashita. totemo tanoshii ichinichi deshita mata raishu mo ikitai desu.", expectRomanized: true },

  // Long Korean romanized (50+ words)
  { label: 'KO long 1', text: "oneul chingudeul gwa gachi gongwon e gasseoyo. nalssiga joeoseo sancheck hago dosirak eul meogeo sseoyo. geurigo gongwon eseo sajin eul jjigeosseoyo. jeonyeoge reseuteorang eseo jeonyeog eul meogeosseoyo. jeongmal jaemiissneun haru yeosseoyo. daeume tto gago sipeoyo. gamsahamnida.", expectRomanized: true },

  // Long Chinese Pinyin (50+ words)
  { label: 'ZH long 1', text: "jintian wo he pengyoumen yiqi qu le gongyuan. tianqi hen hao suoyi women sanbu le hen chang shijian. ranhou women zai caodi shang chi le wufan. xiawu women pai le hen duo zhaopian. wanshang women qu le yijia canting chi wanfan. jintian zhen shi kuaile de yitian wo xiwang xiaci hai keyi qu.", expectRomanized: true },

  // Long Vietnamese without diacritics (50+ words)
  { label: 'VI long noac', text: "hom nay toi di cho voi me toi de mua do an cho bua toi nay. troi rat dep va mat troi chieu sang khap noi. chung toi mua nhieu rau cu qua va thit ca tuoi. sau do chung toi ve nha nau an cho ca gia dinh. moi nguoi deu vui va an ngon mieng.", expectRomanized: true },

  // Long Turkish (shouldn't trigger)
  { label: 'TR long 1', text: "bugun arkadaslarimla birlikte parka gittik cunku hava cok guzeldi. yanımızda yiyecek ve icecek goturdum ve cimenler uzerinde piknik yaptik. sonra futbol oynadik ve cok guzel vakit gecirdik. aksam eve dondugumuzde yorgun ama mutluyduk. harika bir gun gecirdik haftaya yine gidelim.", expectRomanized: false },

  // Long Indonesian (shouldn't trigger)
  { label: 'ID long 1', text: "hari ini saya pergi ke taman bersama teman teman saya karena cuaca sangat bagus. kami membawa makanan dan minuman lalu piknik di atas rumput. setelah itu kami bermain sepak bola dan menghabiskan waktu dengan sangat menyenangkan. malam harinya kami pulang ke rumah dengan lelah tapi bahagia.", expectRomanized: false },

  // Long Swahili (shouldn't trigger)
  { label: 'SW long 1', text: "leo tulienda bustanini na marafiki zangu kwa sababu hali ya hewa ilikuwa nzuri sana. tulibeba chakula na vinywaji na kufanya pikniki kwenye nyasi. baadaye tulicheza mpira wa miguu na kupitisha wakati mzuri sana pamoja. jioni tulirudi nyumbani tukiwa wamechoka lakini wenye furaha kubwa sana.", expectRomanized: false },
];

// ── Run ──────────────────────────────────────────────────────────────────────

console.log('='.repeat(120));
console.log('isRomanized() Comprehensive Test');
console.log('='.repeat(120));

let passed = 0;
let failed = 0;
const failures: string[] = [];

console.log(
  'Result'.padEnd(8),
  'Label'.padEnd(20),
  'Expect'.padEnd(8),
  'Got'.padEnd(8),
  'Conf'.padStart(6),
  'ELD'.padEnd(4),
  'Signals',
);
console.log('-'.repeat(120));

for (const { label, text, expectRomanized } of cases) {
  const result = eld.detect(text);
  const scores = result.getScores();
  const cluster = analyzeCluster(scores);
  const r = isRomanized(text, result.language, (Object.values(scores).sort((a, b) => b - a)[0] ?? 0) as number, result.isReliable(), cluster);

  const match = r.isRomanized === expectRomanized;
  if (match) passed++; else failed++;

  const fp = trigramFingerprint(text);
  const marker = match ? '  ✓' : '  ✗ FAIL';
  if (!match) failures.push(`${label}: expected ${expectRomanized}, got ${r.isRomanized} (conf=${r.confidence.toFixed(2)}, signals=${r.signals.join(',')})`);

  const fpSummary = Object.entries(fp.perFamilyRates)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([f, r]) => `${f}=${(r * 100).toFixed(0)}%`)
    .join(',');

  console.log(
    marker.padEnd(8),
    label.padEnd(20),
    String(expectRomanized).padEnd(8),
    String(r.isRomanized).padEnd(8),
    r.confidence.toFixed(2).padStart(6),
    result.language.padEnd(4),
    `[${fpSummary || 'none'}]`.padEnd(35),
    r.signals.join(', ') || '—',
  );
}

console.log('');
console.log('='.repeat(120));
console.log(`RESULTS: ${passed} passed, ${failed} failed out of ${cases.length}`);
console.log('='.repeat(120));

if (failures.length > 0) {
  console.log('\nFAILURES:');
  for (const f of failures) {
    console.log(`  ✗ ${f}`);
  }
}
