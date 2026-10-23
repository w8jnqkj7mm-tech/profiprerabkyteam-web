# Web v1 – profiprerabkyteam.sk – plán

## Cieľ
Spustiť spoločný web 4 remesiel čo najskôr. Má zbierať dopyty na **malé práce** (rýchle peniaze v Nov–Dec) aj **veľké rekonštrukcie**.
Booking, AI agent a katalóg sa zapnú neskôr, keď bude hotová Profi Team App. Dovtedy majú **funkčnú náhradu**, nikde nie je nápis „pripravujeme“.

## Rozsah v1
| Stránka | Obsah |
|---|---|
| `/` Úvod | Video hero, rozcestník **Malá práca / Veľká rekonštrukcia**, 4 remeslá, referencie, CTA |
| `/male-prace` | Elektrikár, vodár, hodinový majster, klimatizácie + cenník + formulár |
| `/rekonstrukcie` | Byt, dom, kancelária, kúpeľňa, priebeh spolupráce, formulár na obhliadku |
| `/elektrikar`, `/vodar`, `/prerabky`, `/stolarstvo` | Stránky remesiel (SEO), farby značky |
| `/cennik` | Jednotný cenník malých prác |
| `/realizacie` | Galéria projektov (pred/po) |
| `/blog` | Články (Claude píše, Števo schvaľuje) |
| `/kontakt` | Formulár, telefón, WhatsApp, mapa pôsobnosti (Bratislava a okolie) |
| `/gdpr`, `/cookies` | Povinné |

## Dizajn
Základ je hotový návrh úvodnej stránky (`reference/homepage-navrh.dc.html`): tmavý cinematic štýl, Montserrat + Playfair Display, video hero, interaktívny modul 4 remesiel s posuvníkom Pred/Po, časová os „Ako pracujeme v tandeme“, dopyt.
**Doplniť oproti návrhu:** rozcestník malá práca / rekonštrukcia pod hero, WhatsApp tlačidlo, rozšírený formulár (email, klimatizácia, hodinový majster, termín, fotky, GDPR), mobilné menu, odkazy na podstránky remesiel.

## Budúce funkcie → náhrada vo v1
| Neskôr | Teraz |
|---|---|
| Online rezervácia termínu | Formulár s „preferovaným termínom“ (nezáväzný), odpoveď do 2–4 h |
| AI agent / chat | Plávajúce tlačidlo WhatsApp + telefón |
| Výber služby a cena | Statický cenník |
| Katalóg produktov | Vypnutý |

Všetky budúce funkcie sú za prepínačmi v configu (`bookingEnabled`, `agentEnabled`, `catalogEnabled` = `false`).

## Kľúčové rozhodnutie: dopyty rovno do databázy
Formulár zapisuje do **Supabase tabuľky `leads`** a súčasne pošle notifikáciu (email / WhatsApp). Profi Team App potom dopyty prevezme **bez migrácie** – „lead tracking“ v appke je hotový dopredu.

## Staré weby
Weby profiprerabky.sk, panelektrikar.sk a panvodar.sk **ostávajú bežať**, preto:
- texty na nový web **neprekopírovať doslova** (duplicitný obsah škodí SEO), ale prepísať a skrátiť
- zo starých webov dať výrazný odkaz na nový web
- 301 presmerovania len pre stránky, ktoré na starých weboch rušíš
- **Pozor:** na profiprerabkyteam.sk už teraz beží starší web – jeho URL treba presmerovať na nové stránky

## Podklady, ktoré musí dodať Števo (blokujú spustenie)
- [x] Návrh úvodnej stránky → `reference/homepage-navrh.dc.html` (hotový)
- [x] Brand manuály → `reference/brand/`
- [ ] **Logá ako SVG** (od grafika) – manuály sú len PNG
- [x] Video intro v8 → skomprimované do `reference/assets/` (MP4/WebM, mobil, poster)
- [ ] **Verzia videa bez textu** pre hero (s textom koliduje s nadpisom) – dovtedy ide video do samostatnej sekcie „Od pôdorysu po kľúč“
- [x] E-mail info@profiprerabkyteam.sk, hodiny Po–Pi 8:30–17:00
- [x] Odpovede k textom → `OBSAH-WEBU.md`
- [x] Prevádzkovateľ: Pressburg Team s.r.o.
- [ ] Sídlo a zápis v OR Pressburg Team (overiť IČO 55330703)
- [ ] Ďalšie obce v oblasti pôsobenia
- [ ] Prípadne landing page s 5-krokovým konfigurátorom a cenníky (ak ich chceš použiť)
- [ ] Video na hero (alebo 3–5 záberov z realizácií), fotky pred/po: min. 6 projektov
- [ ] 5–10 referencií (meno/iniciály, lokalita, typ práce)
- [ ] Ktorá s.r.o. prevádzkuje web (obchodné meno, IČO, sídlo do pätičky)
- [ ] Licencia webfontu Ofelia Text (inak nahradiť Robotom)
- [ ] Kam majú chodiť notifikácie z formulára (email, WhatsApp číslo)
- [ ] Prístupy: doména profiprerabkyteam.sk (DNS), Supabase projekt
- [ ] Google Business profil – vytvoriť/overiť

## Postup
1. **Deň 1–2:** Claude Code postaví kostru, dizajn, úvod + cenník + formulár → leads.
2. **Deň 3–5:** stránky remesiel, realizácie, právne stránky, SEO (meta, schema.org LocalBusiness, sitemap).
3. **Deň 6–7:** doplnenie fotiek a textov, test na mobile, rýchlosť (Lighthouse ≥ 90).
4. **Spustenie:** DNS, Google Search Console, Google Business, analytika.
5. **Po spustení:** Jakub – 2 príspevky/týždeň; blog – 2 články/mesiac; neskôr zapnutie bookingu a agenta.

## Meranie úspechu (prvé 4 týždne)
- počet dopytov z webu za týždeň (cieľ zvoliť po 1. týždni)
- podiel malých prác vs. rekonštrukcií
- čas od dopytu po odpoveď (cieľ < 4 h)
