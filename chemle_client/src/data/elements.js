// Periyodik tablo element verileri
const baseElements = [
  // Periyot 1
  { symbol: 'H', name: 'Hidrojen', group: 1, period: 1, type: 'ametal', atomicNumber: 1 },
  { symbol: 'He', name: 'Helyum', group: 18, period: 1, type: 'soygaz', atomicNumber: 2 },
  
  // Periyot 2
  { symbol: 'Li', name: 'Lityum', group: 1, period: 2, type: 'metal', atomicNumber: 3 },
  { symbol: 'Be', name: 'Berilyum', group: 2, period: 2, type: 'metal', atomicNumber: 4 },
  { symbol: 'B', name: 'Bor', group: 13, period: 2, type: 'yarı metal', atomicNumber: 5 },
  { symbol: 'C', name: 'Karbon', group: 14, period: 2, type: 'ametal', atomicNumber: 6 },
  { symbol: 'N', name: 'Azot', group: 15, period: 2, type: 'ametal', atomicNumber: 7 },
  { symbol: 'O', name: 'Oksijen', group: 16, period: 2, type: 'ametal', atomicNumber: 8 },
  { symbol: 'F', name: 'Flor', group: 17, period: 2, type: 'ametal', atomicNumber: 9 },
  { symbol: 'Ne', name: 'Neon', group: 18, period: 2, type: 'soygaz', atomicNumber: 10 },
  
  // Periyot 3
  { symbol: 'Na', name: 'Sodyum', group: 1, period: 3, type: 'metal', atomicNumber: 11 },
  { symbol: 'Mg', name: 'Magnezyum', group: 2, period: 3, type: 'metal', atomicNumber: 12 },
  { symbol: 'Al', name: 'Alüminyum', group: 13, period: 3, type: 'metal', atomicNumber: 13 },
  { symbol: 'Si', name: 'Silisyum', group: 14, period: 3, type: 'yarı metal', atomicNumber: 14 },
  { symbol: 'P', name: 'Fosfor', group: 15, period: 3, type: 'ametal', atomicNumber: 15 },
  { symbol: 'S', name: 'Kükürt', group: 16, period: 3, type: 'ametal', atomicNumber: 16 },
  { symbol: 'Cl', name: 'Klor', group: 17, period: 3, type: 'ametal', atomicNumber: 17 },
  { symbol: 'Ar', name: 'Argon', group: 18, period: 3, type: 'soygaz', atomicNumber: 18 },
  
  // Periyot 4
  { symbol: 'K', name: 'Potasyum', group: 1, period: 4, type: 'metal', atomicNumber: 19 },
  { symbol: 'Ca', name: 'Kalsiyum', group: 2, period: 4, type: 'metal', atomicNumber: 20 },
  { symbol: 'Sc', name: 'Skandiyum', group: 3, period: 4, type: 'metal', atomicNumber: 21 },
  { symbol: 'Ti', name: 'Titanyum', group: 4, period: 4, type: 'metal', atomicNumber: 22 },
  { symbol: 'V', name: 'Vanadyum', group: 5, period: 4, type: 'metal', atomicNumber: 23 },
  { symbol: 'Cr', name: 'Krom', group: 6, period: 4, type: 'metal', atomicNumber: 24 },
  { symbol: 'Mn', name: 'Mangan', group: 7, period: 4, type: 'metal', atomicNumber: 25 },
  { symbol: 'Fe', name: 'Demir', group: 8, period: 4, type: 'metal', atomicNumber: 26 },
  { symbol: 'Co', name: 'Kobalt', group: 9, period: 4, type: 'metal', atomicNumber: 27 },
  { symbol: 'Ni', name: 'Nikel', group: 10, period: 4, type: 'metal', atomicNumber: 28 },
  { symbol: 'Cu', name: 'Bakır', group: 11, period: 4, type: 'metal', atomicNumber: 29 },
  { symbol: 'Zn', name: 'Çinko', group: 12, period: 4, type: 'metal', atomicNumber: 30 },
  { symbol: 'Ga', name: 'Galyum', group: 13, period: 4, type: 'metal', atomicNumber: 31 },
  { symbol: 'Ge', name: 'Germanyum', group: 14, period: 4, type: 'yarı metal', atomicNumber: 32 },
  { symbol: 'As', name: 'Arsenik', group: 15, period: 4, type: 'yarı metal', atomicNumber: 33 },
  { symbol: 'Se', name: 'Selenyum', group: 16, period: 4, type: 'ametal', atomicNumber: 34 },
  { symbol: 'Br', name: 'Brom', group: 17, period: 4, type: 'ametal', atomicNumber: 35 },
  { symbol: 'Kr', name: 'Kripton', group: 18, period: 4, type: 'soygaz', atomicNumber: 36 },
  
  // Periyot 5
  { symbol: 'Rb', name: 'Rubidyum', group: 1, period: 5, type: 'metal', atomicNumber: 37 },
  { symbol: 'Sr', name: 'Stronsiyum', group: 2, period: 5, type: 'metal', atomicNumber: 38 },
  { symbol: 'Y', name: 'İtriyum', group: 3, period: 5, type: 'metal', atomicNumber: 39 },
  { symbol: 'Zr', name: 'Zirkonyum', group: 4, period: 5, type: 'metal', atomicNumber: 40 },
  { symbol: 'Nb', name: 'Niyobyum', group: 5, period: 5, type: 'metal', atomicNumber: 41 },
  { symbol: 'Mo', name: 'Molibden', group: 6, period: 5, type: 'metal', atomicNumber: 42 },
  { symbol: 'Tc', name: 'Teknesyum', group: 7, period: 5, type: 'metal', atomicNumber: 43 },
  { symbol: 'Ru', name: 'Rutenyum', group: 8, period: 5, type: 'metal', atomicNumber: 44 },
  { symbol: 'Rh', name: 'Rodyum', group: 9, period: 5, type: 'metal', atomicNumber: 45 },
  { symbol: 'Pd', name: 'Paladyum', group: 10, period: 5, type: 'metal', atomicNumber: 46 },
  { symbol: 'Ag', name: 'Gümüş', group: 11, period: 5, type: 'metal', atomicNumber: 47 },
  { symbol: 'Cd', name: 'Kadmiyum', group: 12, period: 5, type: 'metal', atomicNumber: 48 },
  { symbol: 'In', name: 'İndiyum', group: 13, period: 5, type: 'metal', atomicNumber: 49 },
  { symbol: 'Sn', name: 'Kalay', group: 14, period: 5, type: 'metal', atomicNumber: 50 },
  { symbol: 'Sb', name: 'Antimon', group: 15, period: 5, type: 'yarı metal', atomicNumber: 51 },
  { symbol: 'Te', name: 'Tellür', group: 16, period: 5, type: 'yarı metal', atomicNumber: 52 },
  { symbol: 'I', name: 'İyot', group: 17, period: 5, type: 'ametal', atomicNumber: 53 },
  { symbol: 'Xe', name: 'Ksenon', group: 18, period: 5, type: 'soygaz', atomicNumber: 54 },
  
  // Periyot 6
  { symbol: 'Cs', name: 'Sezyum', group: 1, period: 6, type: 'metal', atomicNumber: 55 },
  { symbol: 'Ba', name: 'Baryum', group: 2, period: 6, type: 'metal', atomicNumber: 56 },
  { symbol: 'La', name: 'Lantan', group: 3, period: 6, type: 'metal', atomicNumber: 57 },
  { symbol: 'Ce', name: 'Seryum', group: 3, period: 6, type: 'metal', atomicNumber: 58 },
  { symbol: 'Pr', name: 'Praseodim', group: 3, period: 6, type: 'metal', atomicNumber: 59 },
  { symbol: 'Nd', name: 'Neodim', group: 3, period: 6, type: 'metal', atomicNumber: 60 },
  { symbol: 'Pm', name: 'Prometyum', group: 3, period: 6, type: 'metal', atomicNumber: 61 },
  { symbol: 'Sm', name: 'Samaryum', group: 3, period: 6, type: 'metal', atomicNumber: 62 },
  { symbol: 'Eu', name: 'Europyum', group: 3, period: 6, type: 'metal', atomicNumber: 63 },
  { symbol: 'Gd', name: 'Gadolinyum', group: 3, period: 6, type: 'metal', atomicNumber: 64 },
  { symbol: 'Tb', name: 'Terbiyum', group: 3, period: 6, type: 'metal', atomicNumber: 65 },
  { symbol: 'Dy', name: 'Disprozyum', group: 3, period: 6, type: 'metal', atomicNumber: 66 },
  { symbol: 'Ho', name: 'Holmiyum', group: 3, period: 6, type: 'metal', atomicNumber: 67 },
  { symbol: 'Er', name: 'Erbiyum', group: 3, period: 6, type: 'metal', atomicNumber: 68 },
  { symbol: 'Tm', name: 'Tulyum', group: 3, period: 6, type: 'metal', atomicNumber: 69 },
  { symbol: 'Yb', name: 'İterbiyum', group: 3, period: 6, type: 'metal', atomicNumber: 70 },
  { symbol: 'Lu', name: 'Lutesyum', group: 3, period: 6, type: 'metal', atomicNumber: 71 },
  { symbol: 'Hf', name: 'Hafniyum', group: 4, period: 6, type: 'metal', atomicNumber: 72 },
  { symbol: 'Ta', name: 'Tantal', group: 5, period: 6, type: 'metal', atomicNumber: 73 },
  { symbol: 'W', name: 'Tungsten', group: 6, period: 6, type: 'metal', atomicNumber: 74 },
  { symbol: 'Re', name: 'Renyum', group: 7, period: 6, type: 'metal', atomicNumber: 75 },
  { symbol: 'Os', name: 'Osmiyum', group: 8, period: 6, type: 'metal', atomicNumber: 76 },
  { symbol: 'Ir', name: 'İridyum', group: 9, period: 6, type: 'metal', atomicNumber: 77 },
  { symbol: 'Pt', name: 'Platin', group: 10, period: 6, type: 'metal', atomicNumber: 78 },
  { symbol: 'Au', name: 'Altın', group: 11, period: 6, type: 'metal', atomicNumber: 79 },
  { symbol: 'Hg', name: 'Cıva', group: 12, period: 6, type: 'metal', atomicNumber: 80 },
  { symbol: 'Tl', name: 'Talyum', group: 13, period: 6, type: 'metal', atomicNumber: 81 },
  { symbol: 'Pb', name: 'Kurşun', group: 14, period: 6, type: 'metal', atomicNumber: 82 },
  { symbol: 'Bi', name: 'Bizmut', group: 15, period: 6, type: 'yarı metal', atomicNumber: 83 },
  { symbol: 'Po', name: 'Polonyum', group: 16, period: 6, type: 'yarı metal', atomicNumber: 84 },
  { symbol: 'At', name: 'Astatin', group: 17, period: 6, type: 'yarı metal', atomicNumber: 85 },
  { symbol: 'Rn', name: 'Radon', group: 18, period: 6, type: 'soygaz', atomicNumber: 86 },
  
  // Periyot 7
  { symbol: 'Fr', name: 'Fransiyum', group: 1, period: 7, type: 'metal', atomicNumber: 87 },
  { symbol: 'Ra', name: 'Radyum', group: 2, period: 7, type: 'metal', atomicNumber: 88 },
  { symbol: 'Ac', name: 'Aktinyum', group: 3, period: 7, type: 'metal', atomicNumber: 89 },
  { symbol: 'Th', name: 'Toryum', group: 3, period: 7, type: 'metal', atomicNumber: 90 },
  { symbol: 'Pa', name: 'Protaktinyum', group: 3, period: 7, type: 'metal', atomicNumber: 91 },
  { symbol: 'U', name: 'Uranyum', group: 3, period: 7, type: 'metal', atomicNumber: 92 },
  { symbol: 'Np', name: 'Neptünyum', group: 3, period: 7, type: 'metal', atomicNumber: 93 },
  { symbol: 'Pu', name: 'Plütonyum', group: 3, period: 7, type: 'metal', atomicNumber: 94 },
  { symbol: 'Am', name: 'Amerikyum', group: 3, period: 7, type: 'metal', atomicNumber: 95 },
  { symbol: 'Cm', name: 'Küriyum', group: 3, period: 7, type: 'metal', atomicNumber: 96 },
  { symbol: 'Bk', name: 'Berkelyum', group: 3, period: 7, type: 'metal', atomicNumber: 97 },
  { symbol: 'Cf', name: 'Kaliforniyum', group: 3, period: 7, type: 'metal', atomicNumber: 98 },
  { symbol: 'Es', name: 'Einsteinyum', group: 3, period: 7, type: 'metal', atomicNumber: 99 },
  { symbol: 'Fm', name: 'Fermiyum', group: 3, period: 7, type: 'metal', atomicNumber: 100 },
  { symbol: 'Md', name: 'Mendelevyum', group: 3, period: 7, type: 'metal', atomicNumber: 101 },
  { symbol: 'No', name: 'Nobelyum', group: 3, period: 7, type: 'metal', atomicNumber: 102 },
  { symbol: 'Lr', name: 'Lawrensiyum', group: 3, period: 7, type: 'metal', atomicNumber: 103 },
  { symbol: 'Rf', name: 'Rutherfordyum', group: 4, period: 7, type: 'metal', atomicNumber: 104 },
  { symbol: 'Db', name: 'Dubniyum', group: 5, period: 7, type: 'metal', atomicNumber: 105 },
  { symbol: 'Sg', name: 'Seaborgyum', group: 6, period: 7, type: 'metal', atomicNumber: 106 },
  { symbol: 'Bh', name: 'Bohriyum', group: 7, period: 7, type: 'metal', atomicNumber: 107 },
  { symbol: 'Hs', name: 'Hassiyum', group: 8, period: 7, type: 'metal', atomicNumber: 108 },
  { symbol: 'Mt', name: 'Meitneriyum', group: 9, period: 7, type: 'metal', atomicNumber: 109 },
  { symbol: 'Ds', name: 'Darmstadtiyum', group: 10, period: 7, type: 'metal', atomicNumber: 110 },
  { symbol: 'Rg', name: 'Röntgenyum', group: 11, period: 7, type: 'metal', atomicNumber: 111 },
  { symbol: 'Cn', name: 'Kopernikyum', group: 12, period: 7, type: 'metal', atomicNumber: 112 },
  { symbol: 'Nh', name: 'Nihonyum', group: 13, period: 7, type: 'metal', atomicNumber: 113 },
  { symbol: 'Fl', name: 'Flerovyum', group: 14, period: 7, type: 'metal', atomicNumber: 114 },
  { symbol: 'Mc', name: 'Moskovyum', group: 15, period: 7, type: 'metal', atomicNumber: 115 },
  { symbol: 'Lv', name: 'Livermoryum', group: 16, period: 7, type: 'metal', atomicNumber: 116 },
  { symbol: 'Ts', name: 'Tenesin', group: 17, period: 7, type: 'ametal', atomicNumber: 117 },
  { symbol: 'Og', name: 'Oganesson', group: 18, period: 7, type: 'soygaz', atomicNumber: 118 },
];

const alkaliMetals = new Set(['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']);
const alkalineEarthMetals = new Set(['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra']);
const transitionMetals = new Set([
  'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
  'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
  'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
  'Rf', 'Db', 'Sg', 'Bh', 'Hs'
]);
const postTransitionMetals = new Set(['Al', 'Ga', 'In', 'Sn', 'Tl', 'Pb', 'Bi', 'Po', 'Fl', 'Nh', 'Mc', 'Lv']);
const metalloids = new Set(['B', 'Si', 'Ge', 'As', 'Sb', 'Te', 'At']);
const nonMetals = new Set(['H', 'C', 'N', 'O', 'P', 'S', 'Se', 'F', 'Cl', 'Br', 'I']);
const nobleGases = new Set(['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og']);
const lanthanides = new Set(['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu']);
const actinides = new Set(['Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr']);
const unknownProps = new Set(['Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts']);

function determineFamily(element) {
  const symbol = element.symbol;

  if (unknownProps.has(symbol)) return 'belirsiz';
  if (lanthanides.has(symbol)) return 'lantanit';
  if (actinides.has(symbol)) return 'aktinit';
  if (alkaliMetals.has(symbol)) return 'alkali';
  if (alkalineEarthMetals.has(symbol)) return 'toprak-alkali';
  if (transitionMetals.has(symbol)) return 'gecis-metali';
  if (postTransitionMetals.has(symbol)) return 'yan-metal';
  if (metalloids.has(symbol)) return 'yari-metal';
  if (nobleGases.has(symbol)) return 'soy-gaz';
  if (nonMetals.has(symbol)) return 'ametal';

  return 'gecis-metali';
}

export const elements = baseElements.map((element) => ({
  ...element,
  family: determineFamily(element)
}));


// Günün elementini seç (tarih bazlı)
export function getTodayElement() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const index = dayOfYear % elements.length;
  return elements[index];
}

// Element karşılaştırma fonksiyonları
export function compareElements(guess, target) {
  return {
    group: compareGroup(guess.group, target.group),
    period: comparePeriod(guess.period, target.period),
    type: compareType(guess.type, target.type),
    isCorrect: guess.symbol === target.symbol
  };
}

function compareGroup(guessGroup, targetGroup) {
  if (guessGroup === targetGroup) {
    return 'correct';
  } else if (guessGroup < targetGroup) {
    return 'right';
  } else {
    return 'left';
  }
}

function comparePeriod(guessPeriod, targetPeriod) {
  if (guessPeriod === targetPeriod) {
    return 'correct';
  } else if (guessPeriod < targetPeriod) {
    return 'down';
  } else {
    return 'up';
  }
}

function compareType(guessType, targetType) {
  return guessType === targetType ? 'correct' : 'wrong';
}
