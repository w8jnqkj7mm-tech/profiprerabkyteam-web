# Prompt pre Claude Code – Web v1 profiprerabkyteam.sk

> Do prázdneho repozitára ulož: tento súbor, `PLAN-WEB-V1.md`, `OBSAH-WEBU.md` a priečinok `reference/` (v ňom `homepage-navrh.dc.html` + exportované assety z návrhu). Potom skopíruj text pod čiarou do Claude Code.

---

Postav web v1 pre **Profi Prerábky Team** (doména profiprerabkyteam.sk), Bratislava a okolie. Je to spoločný web štyroch remesiel jednej firmy. Celý obsah a UI je **v slovenčine**. Rozsah, stránky a podklady sú v `PLAN-WEB-V1.md` – drž sa ho. **Všetky fakty pre texty (ceny, záruky, sľuby, kontakty, oblasť) sú v `OBSAH-WEBU.md` – je to zdroj pravdy a má prednosť pred textami v návrhu.**

## Schválený dizajn = `reference/homepage-navrh.dc.html`
Je to hotový návrh úvodnej stránky (formát Claude Design: HTML + `<sc-for>`/`<sc-if>` šablóny a trieda `Component` so stavom). **Prepíš ho verne do Astro komponentov** – vizuál, texty, animácie aj interakcie. Nezačínaj od nuly a nemeň dizajnový smer.

Čo z návrhu prevziať:
- **Farby:** podklad `#0D1215`, panely `#151B1F`, text `#EEF0F3` (sekundárny cez opacity), svetlá sekcia `#DBDCE5`, tmavá `#2F4858`, hlavný akcent zelená `#51AE4B`
- **Farby remesiel na tmavom podklade:** Elektrikár `#E51E25` (text `#FF6B70`), Vodár `#4562AD` (text `#8FA6E6`), Stolárstvo `#E9E3D8`
- **Písmo:** Montserrat 400–700 (všetko) + Playfair Display kurzíva (akcenty v nadpisoch). Neskôr možno Ofelia Text – drž písma v jednom tokene.
- **Sekcie a ich poradie:** hero s videom a postupným odhalením riadkov nadpisu → marquee 4 remesiel → „Prečo jeden tím“ (3 piliere) → interaktívny modul remesiel (záložky + detail + posuvník Pred/Po) → „Ako pracujeme v tandeme“ (4 kroky, automatické prehrávanie) → dopyt → pätička
- **Animácie:** CSS (`animation-timeline: view()` s fallbackom), všetko vypnuté pri `prefers-reduced-motion`. Interakcie (záložky, posuvník, kroky) ako malé ostrovčeky (Astro island alebo čistý JS), nie celý framework.
- **Assety:** v návrhu sú ako `/_blob/<id>`. Nahraď ich súbormi z `reference/assets/`. Ak niečo chýba, daj placeholder a pridaj to do zoznamu toho, čo potrebuješ.
- **Video (`reference/assets/`):** 20 s 3D animácia bytu – Navrhneme → Postavíme → Rozvedieme → Omietneme → Zariadime na mieru → Odovzdáme na kľúč → logo. Pripravené verzie: `hero-1080.webm`, `hero-1080.mp4`, `hero-720.mp4` (mobil), poster `hero-poster.webp/.jpg` (hotový byt bez textu).
  - Video má **text zapečený vľavo dole – presne tam, kde je H1 v hero**. Preto ho **nedávaj pod H1**. Kým nebude verzia bez textu (`hero-notext.*`), urob takto:
    - **Hero:** pozadie = `hero-poster` s pomalým Ken Burns efektom (trieda `.kb` z návrhu), H1 a tlačidlá podľa návrhu.
    - **Nová sekcia hneď za rozcestníkom: „Od pôdorysu po kľúč“** – video na celú šírku bez prekrytia textom, spustí sa, keď príde do zobrazenia (IntersectionObserver), stlmené, `playsinline`, raz prehrať a zastaviť na poslednom zábere, tlačidlo „Prehrať znova“. Pri `prefers-reduced-motion` len poster.
  - Keď pribudne `hero-notext.*`, prepni hero na video (prepínač `heroVideo` v `src/config/features.ts`).
  - Video načítaj s `preload="metadata"`, `<source>` WebM pred MP4, na šírke < 768 px `hero-720.mp4`.
- Texty označené `[OVERIŤ]` nahraď podľa `OBSAH-WEBU.md` (sekcia Sľuby pri remeslách). `[FOTO]` a `[DOPLNIŤ]` nechaj ako viditeľné TODO a vypíš ich v súhrne.

## Úpravy oproti návrhu (povinné)
1. **Rozcestník malá práca / rekonštrukcia** hneď pod hero (pred marquee): dve veľké karty v štýle návrhu.
   - „Potrebujem malú prácu“ – elektrikár, vodár, hodinový majster, klimatizácia; cena od 50 € + DPH → `/male-prace`
   - „Plánujem rekonštrukciu“ – byt, dom, kancelária, kúpeľňa → `/rekonstrukcie`
   Návrh je dnes zameraný len na rekonštrukcie – malé práce sú v najbližších mesiacoch hlavný zdroj dopytov.
2. **V hero** pridaj vedľa „Nezáväzný dopyt“ aj tlačidlo WhatsApp.
3. **Formulár** rozšír podľa sekcie „Formulár dopytu“ nižšie (email, typ, remeslo s možnosťami *Hodinový majster* a *Klimatizácia*, termín, fotky, GDPR súhlas). Zachovaj vizuál polí z návrhu.
4. **Odkazy „Podrobne o remesle“** veď na `/prerabky`, `/elektrikar`, `/vodar`, `/stolarstvo`.
5. **Navigácia:** doplň Malé práce, Rekonštrukcie, Cenník; na mobile hamburger menu.
6. **Pätička:** doplň Facebook odkaz, odkazy na `/gdpr` a `/cookies`, weby značiek (profiprerabky.sk, panelektrikar.sk, panvodar.sk). Namiesto zoznamu všetkých 4 s.r.o. uveď **len prevádzkovateľa webu** (povinné podľa Obchodného zákonníka): obchodné meno, právna forma, sídlo, IČO, zápis v OR (súd, oddiel, vložka). Údaje drž v `src/config/company.ts`, kým nie sú potvrdené, sú to placeholdery.
8. **Kontakt:** e-mail `info@profiprerabkyteam.sk`, pracovné hodiny **Po–Pi 8:30–17:00**, telefón +421 948 536 398. Nahraď nimi `[E-MAIL]` a `[PRACOVNÉ HODINY]` v návrhu.

## Logá
Brand manuály sú v `reference/brand/` (PNG). Na web treba **samostatné vektorové SVG** každého loga – kým ich nemáš, vystrihni dočasné PNG z manuálov a zapíš ich do zoznamu toho, čo potrebuješ.
- Na tmavom podklade webu použi **inverzné varianty**: Profi Prerábky s „.team“ (biele písmo, zelené budovy a .team) – to je logo tohto webu; Pán Elektrikár a Pán Vodár bielou obrysovou verziou so spodnou farebnou čiapkou; Stolárstvo Pressburg bielou verziou.
- Zelená je `#51AE4B` (v jednom manuáli je preklep 50AE4D – ignoruj).
7. Ostatné podstránky postav v rovnakom vizuálnom jazyku (tmavý podklad, typografia, akcenty, svetlá sekcia ako kontrast).

## Technológie
- **Astro** (statický výstup) + **Tailwind CSS** (tokeny z návrhu v `tailwind.config`), TypeScript
- Hosting: Cloudflare Pages alebo Vercel (priprav konfiguráciu pre oboje)
- **Supabase** na dopyty (tabuľka `leads`), notifikácia cez serverless funkciu (email; pripravené rozhranie na WhatsApp)
- JS len tam, kde je nutný (interaktívne moduly, formulár)
- Video hero: komprimované MP4 + WebM, poster obrázok, na mobile a pri `prefers-reduced-motion` iba poster

## Cenník malých prác (jednotný pre všetky značky)
Kompletný cenník (malé práce, obhliadka, doprava 0,65 €/km, klimatizácie) je v `OBSAH-WEBU.md`. Všetky ceny s DPH, materiál zvlášť.
**Ceny musia byť upraviteľné bez programátora** – ulož ich do Supabase tabuľky `pricing` (id, kategória, názov, cena, `vat_included` bool, jednotka, poradie, aktívne, updated_at). Web ich načíta pri builde a po zmene sa web automaticky prebuilduje (Supabase webhook → deploy hook). Stĺpec `vat_included` nechaj (default `true`) pre budúce B2B ceny. Dočasný „admin panel“ = Supabase Table Editor; neskôr sa úprava cien presunie do Profi Team App.
- Každá cena: **hlavná (veľká) = s DPH**, pod ňou **malým písmom „bez DPH“** (dopočítaná ÷ 1,23, sadzba DPH v jednom nastavení). Hodnoty v `OBSAH-WEBU.md`. Na `/cennik` aj vysvetlenie, prečo je obhliadka platená a že sa pri realizácii odpočíta.

## Formulár dopytu
Polia: meno, telefón, email, lokalita, typ (malá práca / rekonštrukcia), remeslo (Kompletná rekonštrukcia, Kúpeľňa/WC, Elektroinštalácia, Vodoinštalácia, Klimatizácia, Hodinový majster, Nábytok na mieru, Komerčný priestor), popis, fotky (voliteľné, max 5), **preferovaný termín (nezáväzný)**, súhlas so spracovaním osobných údajov (povinný checkbox).
- Zápis do Supabase `leads` (stĺpce: id, created_at, source='web', type, trade, name, phone, email, address, description, preferred_date, photos[], status='new', consent_at)
- Fotky do Supabase Storage bucketu `lead-photos`
- RLS: anonymný používateľ môže **len vkladať**, nič nečíta
- Po odoslaní: potvrdenie „Ďakujeme. Ozveme sa vám do 4 hodín v pracovnom čase (Po–Pi 8:30–17:00).“ + notifikácia firme
- Ochrana proti spamu (honeypot + Cloudflare Turnstile)
- Priprav SQL migráciu do `supabase/migrations/`

## Budúce funkcie – prepínače
V `src/config/features.ts`: `bookingEnabled`, `agentEnabled`, `catalogEnabled` – všetko `false`.
Keď je funkcia vypnutá, **nesmie sa zobraziť nič nefunkčné** ani text „pripravujeme“. Namiesto toho:
- booking → formulár s preferovaným termínom
- agent → plávajúce tlačidlo WhatsApp + telefón (+421 948 536 398)
- katalóg → sekcia sa nevykreslí

Sociálne siete: Instagram `profi_prerabky`, Facebook „Profi Prerábky“.

## Ďalší obsah
- Sekcia **Záruka** (2 roky; 10 rokov na obklady a dlažby **vždy s podmienkami** z `OBSAH-WEBU.md`)
- **Google recenzie** všetkých 4 firiem (widget alebo Places API), nie ručne prepisované
- Stránka klimatizácií: montáž od 350 €, predaj jednotiek aj B2B

## SEO
- Unikátne title/description pre každú stránku, Open Graph obrázky
- schema.org: `LocalBusiness` / `HomeAndConstructionBusiness`, služby, oblasť pôsobnosti Bratislava a okolie
- sitemap.xml, robots.txt, čisté slovenské URL
- Blog v Markdown (Astro content collections), články majú stav `draft` / `published` – zverejňujú sa len `published`
- Na doméne profiprerabkyteam.sk už beží starší web. Pred spustením vypíš jeho URL (sitemap alebo crawl) a priprav 301 presmerovania na nové stránky (`_redirects` / `vercel.json`)
- Texty z návrhu sú v HTML (nie generované JS), aby ich Google videl

## Právne
- Stránky `/gdpr` a `/cookies`
- Analytika bez cookies (Plausible alebo Cloudflare Web Analytics); ak sa použije GA4, tak s cookie lištou a súhlasom

## Postup práce
1. Najprv si prečítaj `reference/homepage-navrh.dc.html` a `PLAN-WEB-V1.md`. Ukáž mi štruktúru projektu, zoznam komponentov a ako mapuješ sekcie návrhu na komponenty. Počkaj na schválenie.
2. Potom po krokoch: kostra + tokeny → **úvodná stránka podľa návrhu + úpravy** → formulár + Supabase → stránky remesiel → malé práce, rekonštrukcie, cenník, realizácie, kontakt → blog → SEO a právne → optimalizácia (Lighthouse ≥ 90).
3. Po každom kroku krátke zhrnutie: čo je hotové a čo potrebuješ odo mňa (texty, fotky, prístupy, `[OVERIŤ]` miesta).
4. Nové texty píš v slovenčine v tóne návrhu – stručne, vecne, bez fráz. Označ ich `<!-- TODO: schváliť -->`.
5. Nič nenasadzuj na produkciu bez môjho súhlasu.
