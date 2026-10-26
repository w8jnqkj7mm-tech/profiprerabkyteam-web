# Prompt pre Claude Code – Web v1 profiprerabkyteam.sk

> Do prázdneho repozitára ulož: tento súbor, `PLAN-WEB-V1.md`, `OBSAH-WEBU.md`, `DIZAJN-TOKENY.md` a priečinok `reference/`. Potom skopíruj text pod čiarou do Claude Code.
> Verzia 4 (25. 10. 2026). Oproti verzii 2: opravené ceny výjazdu a obhliadky (Bratislava vs. mimo), doprava je v cene výjazdu, domény značiek zostávajú, intro video sa skracuje a prestriháva, návrh prešiel kontrolou na šírke 390 px.

---

Postav web v1 pre **Profi Prerábky Team** (doména profiprerabkyteam.sk), Bratislava a okolie. Je to spoločný web štyroch remesiel jednej firmy. Celý obsah a UI je **v slovenčine**.

Tri zdroje, v tomto poradí dôležitosti:
1. **`OBSAH-WEBU.md`** – fakty: ceny, záruky, sľuby, kontakty, oblasť. Zdroj pravdy, má prednosť pred textami v návrhu.
2. **`reference/design/`** – schválený dizajn všetkých deviatich stránok.
3. **`PLAN-WEB-V1.md`** – rozsah a poradie prác.

Hodnoty dizajnu (farby, gradienty, tiene, zaoblenie, typografia, pohyb) sú v **`DIZAJN-TOKENY.md`**.

## Schválený dizajn = `reference/design/`

Deväť súborov vo formáte Claude Design (HTML + `<sc-for>`/`<sc-if>` šablóny a trieda `Component` so stavom) plus `canvas.json` s rozložením a rozmermi:

| Súbor | Stránka |
|---|---|
| `Main.dc.html` | `/` |
| `MalePrace.dc.html` | `/male-prace` |
| `Rekonstrukcie.dc.html` | `/rekonstrukcie` |
| `Cennik.dc.html` | `/cennik` |
| `Remeslo.dc.html` | `/prerabky`, `/elektrikar`, `/vodar`, `/stolarstvo` – **jedna šablóna, štyri dátové sady** |
| `Realizacie.dc.html` | `/realizacie` |
| `Blog.dc.html` | `/blog` |
| `Kontakt.dc.html` | `/kontakt` |
| `Pravne.dc.html` | `/gdpr`, `/cookies` – jedna šablóna, dva dokumenty |

**Prepíš ich verne do Astro komponentov** – vizuál, texty, animácie aj interakcie. Nezačínaj od nuly a nemeň dizajnový smer.

Čo si pri prepise všimni:
- Odkazy v návrhu ukazujú na súbory (`MalePrace.dc.html`) – mapuj ich na URL (`/male-prace`). Je to prototyp, dá sa preklikať.
- `Remeslo.dc.html` a `Pravne.dc.html` majú hore **prepínač, ktorý v návrhu slúži len na náhľad**. V builde ho nerob – každá varianta je vlastná URL s vlastným `<title>` a meta popisom. Dáta z `data()` v tom súbore sú obsah tých štyroch (resp. dvoch) stránok.
- Interaktívne moduly (prepínač remesla, posuvník Pred/Po, časová os, filter realizácií, prepínač DPH, plávajúci asistent, hamburger) rob ako malé ostrovčeky (Astro island alebo čistý JS), nie celý framework.
- Texty označené `[DOPLNIŤ]`, `[OVERIŤ]`, `[FOTO…]`, `[MAPA…]`, `[WIDGET…]` nechaj ako viditeľné TODO a vypíš ich v súhrne.

### Typografia nadpisov — Playfair Display je zakázaný

Druhý riadok nadpisu bol do 25. 10. v **Playfair Display italic**. Majiteľ ho dal preč — vysokokontrastná pätková kurzíva je dnes poznávacie znamenie stránok generovaných AI. **Playfair Display sa na webe nesmie objaviť** — ani v CSS, ani v načítavaní písiem.

Pätkové písmo ako také však zostáva, len iné: **Spectral**, kurzíva, rez 300. Je navrhnuté pre obrazovku a má nízky kontrast ťahov, takže na tmavom podklade a na telefóne nemizne, ako to robili vlásočnice Playfairu.

V návrhu je to trieda `.dline`:
```css
.dline{font-family:Spectral,Georgia,serif;font-weight:300;font-style:italic;letter-spacing:-0.005em}
```
Dvanásť miest, kde sa `.dline` používa bez kurzívy (veľké číslice v časovej osi, tagliny v paneloch), má inline `font-style: normal` — zachovaj to.

Načítavajú sa dve písma: Montserrat 300–700 a Spectral 300/400 v oboch rezoch. Nepridávaj tretie.

### Pätička a zápis v obchodnom registri

Riadok „Zapísaná v OR [SÚD, ODDIEL, VLOŽKA]" bol z pätičky odstránený na želanie majiteľa. **Nevracaj ho do pätičky**, ale ani ho nevymaž z webu úplne: § 3a Obchodného zákonníka vyžaduje, aby na webe podnikateľa bolo obchodné meno, sídlo, IČO a označenie registra s číslom zápisu. Zostáva preto na dvoch miestach a tie musia prežiť build:
- `/kontakt`, blok „Fakturačné údaje"
- `/gdpr`, odsek o prevádzkovateľovi

### Mobil

Všetkých deväť stránok návrhu bolo 25. 10. skontrolovaných na šírke **390 px**. Žiadna nepreteká do vodorovného rolovania a nič sa neorezáva — layout je postavený na `clamp()`, `flex-wrap` a `minmax()`, takže sa skladá sám. **Nepridávaj k tomu vlastné mobilné varianty ani breakpointy navyše**; ak niečo na mobile nesedí, najprv over, či to nerozbil tvoj prepis.

Tri veci, ktoré sa na mobile správajú zámerne inak a treba ich zachovať:
- **Ukazovateľ SCROLL v hero** sa pod 1100 px skrýva úplne.
- **Bežiaci pás značiek** (marquee) preteká mimo obrazovku zámerne — to je ten efekt. Nesmie však vyrobiť vodorovné rolovanie stránky: rodič má `overflow: hidden`.
- **Plávajúci asistent** zostáva fixovaný vpravo dole aj na mobile. Over, že neprekrýva tlačidlo odoslania formulára.

Na mobile **nespúšťaj intro video** (už to je nižšie) a **nepoužívaj `blur(90px)` svetelné kruhy** mimo hero úvodnej stránky — na slabších telefónoch to zráža plynulosť rolovania.

## Video a hero

V `reference/assets/`: `hero-1080.webm`, `hero-1080.mp4`, `hero-720.mp4` (mobil), poster `hero-poster.webp/.jpg`. 20 s 3D animácia bytu: Navrhneme → Postavíme → Rozvedieme → Omietneme → Zariadime na mieru → Odovzdáme na kľúč → logo.

- **Intro:** pri prvej návšteve sa video prehrá cez celú obrazovku, s tlačidlom „Preskočiť intro“, a po dobehnutí odkryje web.
  - Príznak ulož do prehliadača – **druhýkrát sa už nespustí**.
  - **Nikdy na mobile**, nikdy pri príchode z reklamy (`utm_*` v URL) a nikdy na podstránke. Len úvodná stránka, len prvá návšteva.
  - Preskočiť musí ísť aj klikom kdekoľvek, nielen na tlačidlo.
  - Pri `prefers-reduced-motion` sa nespustí vôbec.
  - **ROZHODNUTÉ 25. 10.: intro sa skracuje na 6–8 s.** Terajší zostrih je navyše **rozsekaný** — veľa krátkych záberov za sebou pôsobí nepokojne. Nový zostrih dodá Števo: menej strihov, dlhšie a pokojnejšie zábery. Kým nepríde, použi existujúci súbor orezaný na prvých 8 s a zapíš to medzi chýbajúce podklady. **Neskracuj to zrýchlením prehrávania.**
- **Hero:** video má text zapečený vľavo dole, presne tam, kde je H1. Preto hero beží na striedajúcich sa fotkách (4 zábery, prelínanie, Ken Burns), nie na videu. Keď pribudne `hero-notext.*`, prepni hero na video prepínačom `heroVideo` v `src/config/features.ts`.
- **Sekcia „Od pôdorysu po kľúč“** hneď za rozcestníkom: video na celú šírku bez prekrytia textom, spustí sa pri scrollnutí do zobrazenia (IntersectionObserver), stlmené, `playsinline`, raz prehrať a zastaviť, tlačidlo „Prehrať znova“. Pri `prefers-reduced-motion` len poster.
- `preload="metadata"`, `<source>` WebM pred MP4, na šírke < 768 px `hero-720.mp4`.

## Logá

Brand manuály sú v `reference/brand/` (PNG). Vektory sú v dizajn systéme Profi Prerábky.

**Dôležité:** dnešné inverzné logá (`*-on-black`) majú **zapečený čierny panel**, ktorý na petrolejovom pozadí webu vidno ako obdĺžnik. Na web treba **negatívne SVG s priehľadným pozadím** od grafika. Kým ich nemáš: použi `*-on-black` a zapíš to do zoznamu toho, čo potrebuješ. Logá neprekresľuj ani nefarbi.

Na tmavom podklade: Profi Prerábky s „.team“ (biele písmo, zelené budovy), Pán Elektrikár a Pán Vodár bielou obrysovou verziou s farebnou čiapkou, Stolárstvo Pressburg bielou verziou.

## Technológie
- **Astro** (statický výstup) + **Tailwind CSS** (tokeny z `DIZAJN-TOKENY.md` v `tailwind.config`), TypeScript
- Hosting: Cloudflare Pages alebo Vercel (priprav konfiguráciu pre oboje)
- **Supabase** na dopyty (tabuľka `leads`) a ceny (tabuľka `pricing`), notifikácia cez serverless funkciu (email; pripravené rozhranie na WhatsApp)
- JS len tam, kde je nutný
- Fonty: Montserrat + Playfair Display z Google Fonts, `display=swap`, predzavedené. Ofelia Text zatiaľ nie – rieši sa licencia.

## Cenník
Hodnoty v `OBSAH-WEBU.md`. **Hlavná (veľká) cena je bez DPH, pod ňou malým písmom cena s DPH (23 %).** Na `/cennik` je prepínač Bez DPH / S DPH.

Ceny musia byť upraviteľné bez programátora → tabuľka `pricing` v Supabase (id, kategória, názov, cena, `vat_included` bool, jednotka, poradie, aktívne, updated_at). Web ich načíta pri builde, zmena spustí rebuild cez webhook.

**Pridaj poistku:** ak build zlyhá alebo sa ceny nenačítajú, použi posledné známe hodnoty z repozitára a pošli upozornenie. Bez toho môže na webe visieť stará cena a nikto sa to nedozvie.

**Tri veci okolo výjazdu, ktoré sa nesmú stratiť (rozhodnuté 25. 10.):**

1. **Bratislava a mimo Bratislavy sú dva rôzne riadky, nie jedno číslo.** V Bratislave 50 €, mimo Bratislavy od 80 € — a to „od" tam patrí, lebo je to základ a podľa vzdialenosti alebo dohody to môže byť viac. Platí rovnako pre výjazd aj pre obhliadku. Ak niekde nájdeš „50 € + doprava", je to stará hodnota.

2. **Doprava sa mimo Bratislavy nepripočítava** — je zarátaná v tých 80 €. Samostatný kilometrový riadok (0,53 €/km) zostáva len pre väčšie zákazky po dohode a musí byť takto označený. Formulácia „mimo Bratislavy sa pripočítava doprava" sa nesmie objaviť nikde.

3. **Čo výjazd zahŕňa, je predajný argument, nie drobné písmo.** Presné znenie je v `OBSAH-WEBU.md` a na webe má byť viditeľné, nie schované: výjazd nezahŕňa opravu ako výkon, ale zahŕňa konzultáciu a zistenie príčiny; ak ide o drobnosť (treba len zdvihnúť vypadnutú poistku), nič navyše sa neúčtuje. Toto rieši presne tú obavu, pre ktorú ľudia neklikajú.

## Formulár dopytu
Je na troch miestach: úvodná stránka, `/kontakt` a každá stránka značky. Rovnaká tabuľka, líšia sa predvyplneným remeslom a stĺpcom `source`.

Polia: meno, telefón, email, lokalita, typ (malá práca / rekonštrukcia), remeslo (Kompletná rekonštrukcia, Kúpeľňa/WC, Elektroinštalácia, Vodoinštalácia, Klimatizácia, Hodinový majster, Nábytok na mieru, Komerčný priestor), popis, fotky (voliteľné, max 5), preferovaný termín (nezáväzný), súhlas so spracovaním osobných údajov (povinný checkbox).

- Zápis do Supabase `leads` (id, created_at, source, type, trade, name, phone, email, address, description, preferred_date, photos[], status='new', consent_at)
- Fotky do Storage bucketu `lead-photos`
- RLS: anonymný používateľ môže **len vkladať**, nič nečíta
- Po odoslaní: „Ďakujeme. Ozveme sa vám do 4 hodín v pracovnom čase (Po–Pi 8:30–17:00).“ + notifikácia firme
- Ochrana proti spamu (honeypot + Cloudflare Turnstile)
- SQL migrácia do `supabase/migrations/`

## Plávajúci asistent
Vpravo dole dvojica: biele kolečko s telefónom (vždy, jeden klik = hovor) a zelené tlačidlo „S čím pomôžeme?“, ktoré otvorí panel.

Panel: „S čím vám vieme pomôcť?“ (5 možností) → „Ako rýchlo to potrebujete?“ (3 možnosti) → zhrnutie + WhatsApp s predvyplnenou správou + odkaz na formulár + „Zmeniť odpovede“. V pätičke panela je po celý čas telefónne číslo a pracovné hodiny.

- Je to **pevný rozhodovací strom, nie AI.** Nenasľubuj rozhovor.
- `[ROZHODNÚŤ]` Predvyplnený WhatsApp text sa na desktope bez WhatsApp Web stratí. Alternatíva: odpovede predvyplniť do formulára a odscrollovať naň. Opýtaj sa pred implementáciou.
- Keď sa zapne AI agent, **musí byť označený ako AI** (nariadenie EÚ). Vetu priprav už teraz, pozri `OBSAH-WEBU.md`.

## Budúce funkcie – prepínače
V `src/config/features.ts`: `bookingEnabled`, `agentEnabled`, `catalogEnabled`, `heroVideo` – všetko `false`.
Keď je funkcia vypnutá, **nesmie sa zobraziť nič nefunkčné** ani text „pripravujeme“.

## SEO
- Unikátne title/description pre každú stránku vrátane štyroch variantov `Remeslo` a dvoch `Pravne`. Open Graph obrázky.
- schema.org: `LocalBusiness` / `HomeAndConstructionBusiness`, služby, oblasť pôsobnosti. Na stránkach značiek `FAQPage` z FAQ blokov.
- sitemap.xml, robots.txt, čisté slovenské URL
- Blog v Markdown (Astro content collections), stav `draft` / `published`
- Texty v HTML, nie generované JS
- **301 presmerovania:** zo starého webu na profiprerabkyteam.sk a zo **starých podstránok** značkových webov na nové zodpovedajúce stránky. Pred spustením vypíš URL starých webov (Search Console).
- **Domény značiek zostávajú (rozhodnuté 25. 10.).** `panelektrikar.sk`, `panvodar.sk` a `profiprerabky.sk` ďalej bežia a ukazujú na ten istý obsah ako `/elektrikar`, `/vodar`, `/prerabky`. Z koreňa týchto domén sa **nepresmerováva**.
- **Preto je `<link rel="canonical">` na stránkach značiek povinný.** Ten istý obsah na dvoch adresách bez canonicalu Google oslabí. Canonical ukazuje na vlastnú doménu značky (`https://panelektrikar.sk/`), stránka `/elektrikar` na hlavnom webe odkazuje na ňu. Ak sa to rozhodne opačne, musí sa zmeniť na oboch miestach naraz — nikdy nie na jednom.

## Právne
- `/gdpr` a `/cookies` podľa `Pravne.dc.html`. **Je to kostra, nie hotový text** – žlté miesta musí doplniť človek, nie ty: zápis v OR, doby uchovávania, kam presne idú dáta (Supabase má servery mimo SR, to sa musí uviesť), či bude cookie lišta.
- Analytika bez cookies (Plausible alebo Cloudflare Web Analytics). Ak GA4, tak s cookie lištou a súhlasom – a prepísať `/cookies`.

## Prístupnosť a výkon
- Kontrast 4,5:1, dotykové ciele 44 px, `:focus-visible`, skutočné `<button>`, `<a href>`, `<label>` – v návrhu to tak je, nezhoršuj to.
- Lighthouse ≥ 90 na mobile. Fotky vo WebP do ~200 kB, hero prvá fotka normálne, ostatné lazy.
- Svetelné kruhy s `blur(90px)` len v hero úvodnej stránky (pozri `DIZAJN-TOKENY.md`).

## Postup práce
1. Najprv si prečítaj `OBSAH-WEBU.md`, `DIZAJN-TOKENY.md`, `PLAN-WEB-V1.md` a všetkých deväť súborov v `reference/design/`. Ukáž mi štruktúru projektu, zoznam komponentov a ako mapuješ stránky návrhu na URL. **Počkaj na schválenie.**
2. Potom po krokoch: kostra + tokeny → úvodná stránka → formulár + Supabase → malé práce, rekonštrukcie, cenník → stránky značiek → realizácie, kontakt, blog → právne stránky → SEO → optimalizácia.
3. Po každom kroku krátke zhrnutie: čo je hotové a čo potrebuješ odo mňa.
4. Nové texty píš v slovenčine v tóne návrhu – stručne, vecne, bez fráz. Označ ich `<!-- TODO: schváliť -->`.
5. Nič nenasadzuj na produkciu bez môjho súhlasu.
