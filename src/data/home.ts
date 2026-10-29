export const BRAND = '#51AE4B';

export const TRADES = [
  {
    name: 'Prerábky', brand: 'Profi Prerábky', accent: BRAND, ink: BRAND,
    logo: '/logos/profi-prerabky-negativ.svg', href: '/prerabky',
    tagline: 'Stavebná časť od búrania po finálne povrchy.',
    tasks: ['Búracie práce a odvoz sutiny', 'Murovanie a sadrokartón', 'Omietky, stierky a maľby', 'Obklady a dlažby', 'Podlahy a prechodové lišty'],
    guarantee: 'Za celý projekt zodpovedá jeden z dvojice Števo Fuzy alebo Jakub Kleberc — rieši poradie remesiel, materiál aj termíny.',
    caseLabel: 'Byt · kuchyňa a obývačka', place: 'Ružinov',
    before: '/foto/ruzinov-kuchyna-obyvacka/02.jpg', after: '/foto/ruzinov-kuchyna-obyvacka/01.jpg',
  },
  {
    name: 'Elektrikár', brand: 'Pán Elektrikár', accent: '#E51E25', ink: '#FF6B70',
    logo: '/logos/pan-elektrikar-lockup-negativ.svg', href: '/elektrikar',
    tagline: 'Nové rozvody, rozvádzače a svetlo, ktoré dáva zmysel.',
    tasks: ['Kompletné rozvody a výmena hliníka', 'Rozvádzače a istenie', 'Osvetlenie a ovládanie', 'Montáž a predaj klimatizácií', 'Odborná prehliadka a skúška'],
    guarantee: 'Rozvody fotografujeme pred zakrytím, aby ste vedeli, kde čo vedie. Na požiadanie dodáme odbornú prehliadku a skúšku (revíziu).',
    caseLabel: 'Kúpeľňa · nové rozvody a osvetlenie', place: 'Robotnícka',
    before: '/foto/robotnicka-elektro/02.jpg', after: '/foto/robotnicka-elektro/01.jpg',
  },
  {
    name: 'Vodár', brand: 'Pán Vodár', accent: '#4562AD', ink: '#8FA6E6',
    logo: '/logos/pan-vodar-lockup-negativ.svg', href: '/vodar',
    tagline: 'Voda, odpady a kúpeľňa bez prekvapení za obkladom.',
    tasks: ['Rozvody vody a kanalizácie', 'Kúpeľne a WC na kľúč', 'Prerábka jadra a stúpačiek', 'Podlahové kúrenie', 'Napojenie spotrebičov'],
    guarantee: 'Rozvody plánujeme spolu s elektrikárom a nábytkom, aby sa nič nekrížilo.',
    caseLabel: 'Kúpeľňa · nové rozvody a sprchový kút', place: 'Ružinov',
    before: '/foto/ruzinov-kupelna/02.jpg', after: '/foto/ruzinov-kupelna/01.jpg',
  },
  {
    name: 'Stolárstvo', brand: 'Stolárstvo Pressburg', accent: '#E9E3D8', ink: '#E9E3D8',
    logo: '/logos/stolarstvo-pressburg-lockup-negativ.svg', href: '/stolarstvo',
    tagline: 'Nábytok vyrobený na rozmery vašej hotovej stavby.',
    tasks: ['Kuchyne na mieru', 'Vstavané a šatníkové skrine', 'Obklady stien a niky', 'Kancelársky nábytok', 'Montáž a doladenie na mieste'],
    guarantee: 'Predbežnú cenu pripravíme aj podľa približných rozmerov. Finálne zameriavame až po dokončení podláh, stien a stropov — výška sa počas stavby mení o 1–2 cm.',
    caseLabel: 'Kuchyňa · nová linka na mieru', place: 'Robotnícka',
    before: '/foto/robotnicka-kuchyna/02.jpg', after: '/foto/robotnicka-kuchyna/01.jpg',
  },
];

export const CREW: Record<string, { name: string; bg: string }> = {
  pre: { name: 'Profi Prerábky', bg: '#2F4858' },
  ele: { name: 'Pán Elektrikár', bg: '#B5161C' },
  vod: { name: 'Pán Vodár', bg: '#4562AD' },
  sto: { name: 'Stolárstvo Pressburg', bg: '#1A1F22' },
};

export const STEPS = [
  {
    title: 'Búranie & odpady', crew: ['pre'], ink: BRAND,
    text: 'Demontáž, búracie práce, ochrana spoločných priestorov a priebežný odvoz sutiny. Priestor pripravíme tak, aby ďalšie remeslá mohli nastúpiť hneď.',
    out: 'Čistý priestor a zameraný skutočný stav.',
  },
  {
    title: 'Rozvody vody & elektriny', crew: ['vod', 'ele'], ink: '#FF6B70',
    text: 'Vodár a elektrikár pracujú v jednom harmonograme. Trasy rozvodov dohodneme vopred, aby sa nekrížili a sedeli s budúcim nábytkom.',
    out: 'Hotové rozvody, nafotené pred zakrytím.',
  },
  {
    title: 'Omietky & obklady', crew: ['pre'], ink: BRAND,
    text: 'Omietky, stierky, sadrokartón, obklady a dlažby. Rozmery ník a stien pripravujeme rovno pre stolárov.',
    out: 'Hotové povrchy pripravené na montáž.',
  },
  {
    title: 'Nábytok na mieru', crew: ['sto'], ink: '#E9E3D8',
    text: 'Kuchyne, vstavané skrine a obklady vyrábame podľa zamerania hotovej stavby, nie podľa pôvodného výkresu.',
    out: 'Priestor pripravený na bývanie alebo prevádzku.',
  },
];

const SMALL_NOTE = '61,50 € s DPH · mimo Bratislavy od 80 € podľa vzdialenosti · zahŕňa konzultáciu a zistenie príčiny, nie samotnú opravu · ďalšia hodina 45 € alebo cena za úkon · nad 8 h 35 €/h · materiál zvlášť';

export const JOBS = [
  { label: 'Elektrikár', price: '50 €', priceLabel: 'výjazd / konzultácia v Bratislave', note: SMALL_NOTE, cta: 'POZRIEŤ MALÉ PRÁCE', href: '/male-prace' },
  { label: 'Vodár', price: '50 €', priceLabel: 'výjazd / konzultácia v Bratislave', note: SMALL_NOTE, cta: 'POZRIEŤ MALÉ PRÁCE', href: '/male-prace' },
  { label: 'Hodinový majster', price: '50 €', priceLabel: 'výjazd / konzultácia v Bratislave', note: SMALL_NOTE, cta: 'POZRIEŤ MALÉ PRÁCE', href: '/male-prace' },
  {
    label: 'Klimatizácia', price: '0 €', priceLabel: 'obhliadka a cenová ponuka v Bratislave',
    note: 'Mimo Bratislavy od 80 € — alebo zdarma, ak si montáž objednáte · montáž do 3,5 kW od 284,55 € (350 € s DPH) · každý ďalší meter rozvodu 34,15 € (42 € s DPH)',
    cta: 'POZRIEŤ KLIMATIZÁCIE', href: '/male-prace',
  },
];

export const PRICES = [
  { label: 'Výjazd / konzultácia pri malej práci v Bratislave (bez práce)', main: '50 €', sub: '61,50 € s DPH' },
  { label: 'Výjazd mimo Bratislavy — podľa vzdialenosti alebo dohody', main: 'od 80 €', sub: 'od 98,40 € s DPH' },
  { label: 'Každá ďalšia hodina (alebo cena za úkon)', main: '45 €', sub: '55,35 € s DPH' },
  { label: 'Práca dlhšia ako jeden deň (nad 8 h) — za hodinu', main: '35 €', sub: '43,05 € s DPH' },
  { label: 'Obhliadka veľkej zákazky v Bratislave — pri realizácii sa odpočíta', main: '50 €', sub: '61,50 € s DPH' },
  { label: 'Doprava po dohode — za kilometer (len pri väčších zákazkách)', main: '0,53 €/km', sub: '0,65 €/km s DPH' },
  { label: 'Montáž klimatizácie do 3,5 kW (do 3 m rozvodu)', main: 'od 284,55 €', sub: 'od 350 € s DPH' },
  { label: 'Každý ďalší meter rozvodu klimatizácie', main: '34,15 €', sub: '42 € s DPH' },
];

export const SLIDES = [
  { bg: 'url(/media/hero-poster.jpg) center / cover', tag: '' },
  { bg: 'url(/foto/hero/01.jpg) center / cover', tag: 'KÚPEĽŇA · BRATISLAVA' },
  { bg: 'url(/foto/hero/02.jpg) center / cover', tag: 'KUCHYŇA · PALISÁDY' },
  { bg: 'url(/foto/hero/03.jpg) center / cover', tag: 'SHOWROOM · COMFORA' },
];

export const CHIPS = ['Koľko stojí prerábka kúpeľne?', 'Potrebujem elektrikára', 'Montáž klimatizácie', 'Kedy máte voľný termín?'];

export function answer(q: string): string {
  const t = (q || '').toLowerCase();
  const has = (...words: string[]) => words.some((w) => t.includes(w));
  if (has('klimat', 'klima')) return 'Klimatizácie predávame aj montujeme. Montáž do 3,5 kW stojí od 284,55 € bez DPH (350 € s DPH). Obhliadka a cenová ponuka sú v Bratislave zdarma; mimo Bratislavy od 80 €, no ak si montáž objednáte, túto sumu vám odpočítame. Jednotku vieme dodať aj samostatne.';
  if (has('koľko', 'kolko', 'cena', 'cenu', 'ceny', 'stojí', 'stoji', 'rozpočet', 'rozpocet')) return 'Výjazd pri malej práci je v Bratislave 50 € bez DPH, mimo Bratislavy od 80 €. Ďalšia hodina 45 € alebo cena za úkon. Veľké zákazky naceňujeme po obhliadke — tá stojí 50 € a pri realizácii sa celá odpočíta z ceny.';
  if (has('kúpeľň', 'kupeln', 'jadro', 'sprch')) return 'Kúpeľňu robíme na kľúč — vodár, obkladač aj nábytok z jedného tímu. Zvyčajne to trvá 2 až 4 týždne. Presnú cenu viem povedať až po obhliadke, závisí od rozmerov a od toho, čo je za stenou.';
  if (has('elektr', 'zásuvk', 'zasuvk', 'istič', 'istic', 'hliník', 'hlinik', 'revíz', 'reviz', 'svetl')) return 'Elektrinu robíme celú — nové rozvody, výmenu hliníka, rozvádzače, svetlá aj odbornú prehliadku a skúšku. Rozvody fotíme pred zakrytím, takže o rok viete, kde nevŕtať.';
  if (has('voda', 'tečie', 'tecie', 'kvapk', 'odpad', 'vodár', 'vodar', 'batér', 'bater', 'stúpač', 'stupac')) return 'Havárie riešime prednostne — ak máme voľného človeka, prídeme ešte v ten deň. Batérie, sifóny a odpady zvládne majster pri jednom výjazde.';
  if (has('kuchyn', 'skriň', 'skrin', 'nábytok', 'nabytok', 'stolár', 'stolar')) return 'Nábytok robíme na mieru. Predbežnú cenu pripravíme zadarmo aj podľa približných rozmerov; finálne zameriavame až po dokončení podláh a stien, lebo výška sa počas stavby mení o jeden až dva centimetre.';
  if (has('kedy', 'termín', 'termin', 'rýchlo', 'rychlo', 'voľn', 'voln', 'dlho')) return 'Na dopyt odpovedáme do 4 hodín v pracovnom čase (Po–Pi 8:30–17:00). Malé práce zvyčajne stihneme do pár dní, veľké zákazky plánujeme podľa harmonogramu.';
  if (has('záruk', 'zaruk', 'reklamác', 'reklamac')) return 'Dva roky na všetky práce, desať rokov na obklady a dlažby pri splnení podmienok a doživotná garancia kvality remeselnej práce.';
  if (has('kde', 'okolie', 'pezinok', 'dochádz', 'dochadz', 'mimo')) return 'Pôsobíme v Bratislave a okolí — Pezinok, Devín, Devínska Nová Ves, Ivanka pri Dunaji, Zálesie. Mimo Bratislavy je výjazd od 80 € bez DPH.';
  return 'Toto si radšej overím u majstra, aby som vám nepovedal nepresnú cenu. Nechajte mi kontakt cez WhatsApp alebo formulár a ozveme sa do 4 hodín v pracovnom čase.';
}
