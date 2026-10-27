import { BRAND } from './home';

export type Category = 'byt' | 'kupelna' | 'kuchyna' | 'nabytok' | 'technika' | 'komercne';

export interface Project {
  slug: string;
  cat: Category;
  tag: string;
  ink: string;
  title: string;
  text: string;
  crew: string[];
  place: string;
  before?: string;
  after: string;
}

const f = (slug: string, n: number) => `/foto/${slug}/${String(n).padStart(2, '0')}.jpg`;
const VOD = '#8FA6E6';
const ELE = '#FF6B70';
const STO = '#E9E3D8';

export const PROJECTS: Project[] = [
  {
    slug: 'ruzinov-kuchyna-obyvacka', cat: 'byt', tag: 'BYT · KUCHYŇA A OBÝVAČKA', ink: BRAND,
    title: 'Z tmavého bytu moderný domov',
    text: 'Búranie, nové rozvody vody a elektriny, povrchy a kuchyňa na mieru. Všetky štyri remeslá z jedného tímu.',
    crew: ['pre', 'ele', 'vod', 'sto'], place: 'Ružinov', before: f('ruzinov-kuchyna-obyvacka', 2), after: f('ruzinov-kuchyna-obyvacka', 1),
  },
  {
    slug: 'palisady-kuchyna', cat: 'kuchyna', tag: 'KUCHYŇA', ink: STO,
    title: 'Rekonštrukcia kuchyne v starom meste',
    text: 'Od holých stien po hotovú kuchyňu. Rozvody, omietky, obklad a nábytok na mieru.',
    crew: ['pre', 'ele', 'vod', 'sto'], place: 'Palisády', before: f('palisady-kuchyna', 2), after: f('palisady-kuchyna', 1),
  },
  {
    slug: 'palisady-obyvacka', cat: 'byt', tag: 'BYT · OBÝVAČKA', ink: BRAND,
    title: 'Obývačka s drevenými obkladmi',
    text: 'Nové povrchy, podlaha, drevené obklady stien a skryté osvetlenie.',
    crew: ['pre'], place: 'Palisády', before: f('palisady-obyvacka', 2), after: f('palisady-obyvacka', 1),
  },
  {
    slug: 'ruzinov-kupelna', cat: 'kupelna', tag: 'KÚPEĽŇA', ink: VOD,
    title: 'Kúpeľňa na kľúč namiesto červeného obkladu',
    text: 'Staré obklady a vaňa von, nové rozvody, hydroizolácia, veľkoformátový obklad a sprchový kút.',
    crew: ['pre', 'ele', 'vod'], place: 'Ružinov', before: f('ruzinov-kupelna', 2), after: f('ruzinov-kupelna', 1),
  },
  {
    slug: 'kupelne', cat: 'kupelna', tag: 'KÚPEĽŇA', ink: VOD,
    title: 'Kúpeľňa so svieteným zrkadlom',
    text: 'Kompletné búranie jadra, rozvody, obklady, čierne batérie a podsvietené zrkadlo.',
    crew: ['pre', 'ele', 'vod'], place: 'Bratislava', before: f('kupelne', 6), after: f('kupelne', 1),
  },
  {
    slug: 'robotnicka-elektro', cat: 'kupelna', tag: 'KÚPEĽŇA · ELEKTRO', ink: ELE,
    title: 'Nové rozvody a osvetlenie kúpeľne',
    text: 'Drážkovanie, kompletne nové rozvody a rozvádzač, podsvietené zrkadlo a svetlá v nikách.',
    crew: ['ele'], place: 'Robotnícka', before: f('robotnicka-elektro', 2), after: f('robotnicka-elektro', 1),
  },
  {
    slug: 'robotnicka-kuchyna', cat: 'kuchyna', tag: 'KUCHYŇA', ink: STO,
    title: 'Nová kuchyňa namiesto pôvodnej',
    text: 'Demontáž starej kuchyne, nové obklady, pracovná doska a skrinky.',
    crew: ['pre'], place: 'Robotnícka', before: f('robotnicka-kuchyna', 2), after: f('robotnicka-kuchyna', 1),
  },
  {
    slug: 'kuchyna-stolarstvo', cat: 'kuchyna', tag: 'KUCHYŇA NA MIERU', ink: STO,
    title: 'Výroba a montáž kuchyne',
    text: 'Kuchyňa vyrobená podľa zamerania hotovej stavby, vrátane montáže spotrebičov.',
    crew: ['sto'], place: 'Bratislava', after: f('kuchyna-stolarstvo', 1),
  },
  {
    slug: 'skrina-na-mieru', cat: 'nabytok', tag: 'NÁBYTOK NA MIERU', ink: STO,
    title: 'Vstavaná skriňa na celú stenu',
    text: 'Výroba v dielni a montáž skrine od podlahy po strop.',
    crew: ['pre'], place: 'Nové Mesto', before: f('skrina-na-mieru', 2), after: f('skrina-na-mieru', 1),
  },
  {
    slug: 'sdk-skrina', cat: 'nabytok', tag: 'SADROKARTÓN', ink: BRAND,
    title: 'Dizajnová sadrokartónová knižnica',
    text: 'Police zo sadrokartónu s integrovaným LED osvetlením.',
    crew: ['pre'], place: 'Slnečnice', before: f('sdk-skrina', 2), after: f('sdk-skrina', 1),
  },
  {
    slug: 'radiatory', cat: 'technika', tag: 'KÚRENIE', ink: VOD,
    title: 'Nové radiátory a podlahy pod oknami',
    text: 'Demontáž starých telies, nové rozvody kúrenia a dizajnové radiátory.',
    crew: ['vod'], place: 'Bratislava', before: f('radiatory', 2), after: f('radiatory', 1),
  },
  {
    slug: 'podlahove-kurenie', cat: 'technika', tag: 'PODLAHOVÉ KÚRENIE', ink: ELE,
    title: 'Elektrické podlahové kúrenie',
    text: 'Pokládka vykurovacích rohoží a napojenie na termostat.',
    crew: ['ele'], place: 'Bratislava', after: f('podlahove-kurenie', 1),
  },
  {
    slug: 'samorin-osvetlenie', cat: 'technika', tag: 'OSVETLENIE', ink: ELE,
    title: 'Lištové osvetlenie obývačky',
    text: 'Koľajnicové svetlá a závesné svietidlá nad jedálenským stolom.',
    crew: ['ele'], place: 'Šamorín', after: f('samorin-osvetlenie', 1),
  },
  {
    slug: 'klimatizacia-ruzinov', cat: 'technika', tag: 'KLIMATIZÁCIA', ink: ELE,
    title: 'Montáž klimatizácie',
    text: 'Montáž vnútornej jednotky, vedenie rozvodov a uvedenie do prevádzky.',
    crew: ['ele'], place: 'Ružinov', after: f('klimatizacia-ruzinov', 1),
  },
  {
    slug: 'comfora', cat: 'komercne', tag: 'SHOWROOM', ink: ELE,
    title: 'Osvetlenie showroomu Comfora',
    text: 'Elektroinštalácia a osvetlenie predajne masážnych kresiel.',
    crew: ['ele'], place: 'Bratislava', after: '/foto/hero/03.jpg',
  },
];

export const FILTERS: { label: string; cat: Category | null }[] = [
  { label: 'Všetko', cat: null },
  { label: 'Byty', cat: 'byt' },
  { label: 'Kúpeľne', cat: 'kupelna' },
  { label: 'Kuchyne', cat: 'kuchyna' },
  { label: 'Nábytok', cat: 'nabytok' },
  { label: 'Elektro a kúrenie', cat: 'technika' },
  { label: 'Komerčné', cat: 'komercne' },
];
