# Web v1 – profiprerabkyteam.sk – plán

> Aktualizované 24. 10. 2026. Oproti verzii z 22. 10. pribudol kompletný dizajn všetkých stránok a zmenil sa prístup k webom značiek.

## Cieľ
Spustiť spoločný web 4 remesiel čo najskôr. Má zbierať dopyty na **malé práce** (rýchle peniaze v Nov–Dec) aj **veľké rekonštrukcie**.
Booking, AI agent a katalóg sa zapnú neskôr, keď bude hotová Profi Team App. Dovtedy majú **funkčnú náhradu**, nikde nie je nápis „pripravujeme“.

## Rozsah v1
| Stránka | Artboard v návrhu | Obsah |
|---|---|---|
| `/` Úvod | `Main.dc.html` | Intro video, hero, rozcestník Malá práca / Rekonštrukcia, video „Od pôdorysu po kľúč“, marquee, 4 remeslá s posuvníkom Pred/Po, ceny a záruka, časová os, dopyt, plávajúci asistent |
| `/male-prace` | `MalePrace.dc.html` | Elektrikár, vodár, hodinový majster, klimatizácie – prepínač so živou cenou, postup, cenník, oblasť pôsobenia |
| `/rekonstrukcie` | `Rekonstrukcie.dc.html` | Byt, dom, kancelária, kúpeľňa, priebeh v 6 krokoch, záruka, čo je a nie je v cene |
| `/prerabky`, `/elektrikar`, `/vodar`, `/stolarstvo` | `Remeslo.dc.html` (jedna šablóna, 4 dátové sady) | Plnohodnotná náhrada webov značiek: služby, sľub, ceny, galéria, FAQ, recenzie, **vlastný formulár**, SEO text |
| `/cennik` | `Cennik.dc.html` | Jednotný cenník + prepínač Bez DPH / S DPH + vysvetlenie platenej obhliadky |
| `/klimatizacie` | (zatiaľ súčasť `/male-prace`) | Montáž, predaj jednotiek, B2B. `[DOPLNIŤ – vlastná stránka alebo sekcia?]` |
| `/realizacie` | `Realizacie.dc.html` | Galéria pred/po s filtrom, Google recenzie |
| `/blog` | `Blog.dc.html` | Články (Claude píše, Števo schvaľuje) |
| `/kontakt` | `Kontakt.dc.html` | Plný formulár, telefón, WhatsApp, mapa pôsobnosti, fakturačné údaje |
| `/gdpr`, `/cookies` | `Pravne.dc.html` (jedna šablóna) | Povinné |

## Dizajn
Schválený návrh je **celé plátno v `reference/design/`** – deväť `.dc.html` súborov plus `canvas.json`. Nahrádza pôvodný `homepage-navrh.dc.html`, ktorý už neplatí.

Vizuálny jazyk: tmavý cinematic štýl s petrolejovou paletou a mäkkou vrstvou (gradienty, svetelné obrysy, zaoblenie). Montserrat + Playfair Display italic. Presné hodnoty sú v `DIZAJN-TOKENY.md` a v dizajn systéme Profi Prerábky (sekcia „Webová vrstva“).

Stránky sú prelinkované ako prototyp – v návrhu sa dá preklikať z úvodnej stránky na každú podstránku a späť. Odkazy ako `MalePrace.dc.html` sa v builde mapujú na `/male-prace`.

## Budúce funkcie → náhrada vo v1
| Neskôr | Teraz |
|---|---|
| Online rezervácia termínu | Formulár s „preferovaným termínom“ (nezáväzný), odpoveď do 2–4 h |
| AI agent / chat | Plávajúci asistent: 2 otázky → WhatsApp alebo formulár; telefón vždy na jeden klik |
| Výber služby a cena | Statický cenník s prepínačom DPH |
| Katalóg produktov | Vypnutý |

Všetky budúce funkcie sú za prepínačmi v configu (`bookingEnabled`, `agentEnabled`, `catalogEnabled` = `false`).

## Kľúčové rozhodnutie: dopyty rovno do databázy
Formulár zapisuje do **Supabase tabuľky `leads`** a súčasne pošle notifikáciu (email / WhatsApp). Profi Team App potom dopyty prevezme **bez migrácie**.

Formuláre sú na troch miestach: úvodná stránka, `/kontakt` a každá stránka značky. Všetky píšu do rovnakej tabuľky, líšia sa len predvyplneným remeslom a stĺpcom `source`.

## Staré weby značiek
**ROZHODNUTÉ 25. 10.: vlastné adresy značiek zostávajú.** `panelektrikar.sk`, `panvodar.sk` a `profiprerabky.sk` ďalej bežia a ukazujú na nový obsah; neruší sa ani neodkláňa 301 z koreňa týchto domén. Detaily a povinný canonical: `OBSAH-WEBU.md`, sekcia „Weby značiek“.
Platí naďalej: nekopírovať texty zo starých webov, vypísať ich URL, pripraviť 301 zo **starých podstránok**, domény nenechať vypršať.
**Pozor:** na profiprerabkyteam.sk už beží starší web – jeho URL tiež treba presmerovať.

## Podklady, ktoré musí dodať Števo (blokujú spustenie)
- [x] Dizajn všetkých stránok → `reference/design/` (hotové)
- [x] Brand manuály → `reference/brand/`
- [x] Dizajn systém s webovými tokenmi (artefakt „Profi Prerábky“)
- [x] Video intro → `reference/assets/` (MP4/WebM, mobil, poster) — **ale treba ho prestrihať, pozri nižšie**
- [x] E-mail info@profiprerabkyteam.sk, hodiny Po–Pi 8:30–17:00
- [x] Prevádzkovateľ: Pressburg Team s.r.o., IČO 55330703, Žltá 2A
- [ ] **Logá ako SVG od grafika – negatívne, s priehľadným pozadím.** Terajšie `*-on-black` majú zapečený čierny panel, ktorý na petrolejovom pozadí webu vidno ako obdĺžnik. Týka sa to každej stránky.
- [ ] **Prestrihnuté intro video (rozhodnuté 25. 10.).** Terajší zostrih je príliš dlhý a zábery sú rozsekané — rýchle strihy pôsobia nepokojne. Treba: **skrátiť na max. 6–8 sekúnd** a nechať dlhšie, pokojnejšie zábery namiesto množstva krátkych. Intro vidí človek pri prvej návšteve a každá sekunda navyše je sekunda, počas ktorej môže odísť.
- [ ] **Verzia videa bez textu** pre hero (dovtedy hero beží na posteri a video má vlastnú sekciu)
- [ ] Zápis v OR (súd, oddiel, vložka), DIČ, IČ DPH
- [ ] Ďalšie obce v oblasti pôsobenia
- [ ] Fotky pred/po: min. 6 projektov + 4 zábery do hero + fotky do galérií značiek
- [ ] 5–10 referencií (meno/iniciály, lokalita, typ práce)
- [ ] Zostávajúce rozhodnutia z `OBSAH-WEBU.md`: podmienka bezplatnej obhliadky klimatizácie, znenie doživotnej garancie od právnika
      *(vyriešené 25. 10.: ceny výjazdu a obhliadky, čo výjazd zahŕňa, doprava, osud domén značiek)*
- [ ] Licencia webfontu Ofelia Text (inak zostáva Montserrat)
- [ ] Kam majú chodiť notifikácie z formulára (email, WhatsApp číslo)
- [ ] Prístupy: doména profiprerabkyteam.sk (DNS), Supabase projekt
- [ ] Google Business profil – vytvoriť/overiť

## Postup
1. **Deň 1–2:** Claude Code postaví kostru, tokeny, úvodnú stránku + formulár → leads.
2. **Deň 3–5:** malé práce, rekonštrukcie, cenník, stránky značiek, realizácie, kontakt, právne stránky, SEO.
3. **Deň 6–7:** doplnenie fotiek a textov, blog, test na mobile, rýchlosť (Lighthouse ≥ 90).
4. **Spustenie:** DNS, 301 presmerovania, Google Search Console, Google Business, analytika.
5. **Po spustení:** Jakub – 2 príspevky/týždeň; blog – 2 články/mesiac; neskôr booking a agent.

## Riziko termínu
Dnes je 24. 10. Fotky, SVG logá, zápis v OR a referencie sú dodávky od tretích strán. Ak nebudú včas, **reálnejší je dvojfázový štart**: najprv `/male-prace`, `/cennik`, `/kontakt` a stránky značiek (tie fotky nepotrebujú tak nutne), rekonštrukčná a realizačná časť až s fotkami.

## Meranie úspechu (prvé 4 týždne)
- počet dopytov z webu za týždeň (cieľ zvoliť po 1. týždni)
- podiel malých prác vs. rekonštrukcií
- čas od dopytu po odpoveď (cieľ < 4 h)
- koľko dopytov príde cez plávajúceho asistenta vs. formulár (rozhoduje o tom, či sa oplatí AI agent)
