# Dizajnové tokeny – webová vrstva

> Verzia 2 (25. 10. 2026). Oproti verzii 1: typografia nadpisov (Playfair Display je preč) a potvrdená kontrola na mobile.

Hodnoty zo schváleného návrhu v `reference/design/`. Rovnaké tokeny sú uložené aj v dizajn systéme **Profi Prerábky** (sekcia „Webová vrstva“) – ak sa niekedy rozídu, platí dizajn systém.

Do `tailwind.config` ich daj ako pomenované hodnoty, nie ako natvrdo napísané hexy v komponentoch.

## Pozor na dizajn manuál

Tlačový manuál hovorí, že značka nepozná tiene ani gradienty a panely sú pravouhlé. **Na webe to neplatí** – je to vedomá odchýlka schválená majiteľom. Neopravuj dizajn späť na ostré hrany a ploché farby.

## Farby

| Token | Hodnota | Použitie |
|---|---|---|
| `web-green` | `#51ae4b` | akcent webu; na tmavom podklade smie niesť aj text (7,7:1), na bielej nie |
| `web-bg-top` | `#22343f` | horný koniec pozadia stránky |
| `web-bg` | `#0f1920` | dolný koniec pozadia, pätička |
| `web-panel-top` | `#1c2c36` | horný koniec panela |
| `web-panel-bottom` | `#131e26` | dolný koniec panela |
| `web-ink` | `#eef0f3` | hlavný text na tmavom; sekundárny text rieš priehľadnosťou 0,7, nie ďalšou farbou |
| `web-mist-top` | `#e7eef2` | horný koniec svetlej sekcie |
| `web-mist-bottom` | `#cbd7de` | dolný koniec svetlej sekcie |
| `web-hairline` | `rgba(228,237,241,0.12)` | svetelný obrys panela (ako `box-shadow`, nie `border`) |

Farby značiek zostávajú z manuálu: `elektrikar-red #e51e25`, `vodar-blue #4562ad`, `profi-slate #2f4858`, `stolarstvo-ink #231f20`.

**Na tmavom podklade pre text a ikony** použi zosvetlené varianty, nie plnú značkovú farbu:
Elektrikár `#ff6b70`, Vodár `#8fa6e6`, Stolárstvo `#e9e3d8`. Plná farba zostáva na výplne a tlačidlá.

## Gradienty

```css
--grad-page:   linear-gradient(180deg, #22343f 0%, #1a2a34 18%, #121d25 46%, #0f1920 100%);
--grad-panel:  linear-gradient(180deg, #1c2c36 0%, #131e26 100%);
--grad-mist:   linear-gradient(180deg, #e7eef2 0%, #d8e2e8 55%, #cbd7de 100%);
--grad-slate:  linear-gradient(180deg, #3a5768 0%, #2a4150 100%);
--grad-white:  linear-gradient(180deg, #ffffff 0%, #f3f7f9 100%);
--grad-hero-veil: linear-gradient(180deg, rgba(20,32,40,.72) 0%, rgba(20,32,40,.18) 40%, rgba(15,25,32,.94) 100%);
--glow-green:  radial-gradient(circle at 40% 40%, rgba(81,174,75,.30), rgba(81,174,75,0) 62%);
--glow-slate:  radial-gradient(circle at 50% 50%, rgba(91,127,146,.34), rgba(91,127,146,0) 64%);
```

`--grad-page` ide **raz na celú výšku stránky**, nie na každú sekciu zvlášť.

Svetelné kruhy (`--glow-*`) s `filter: blur(90px)` použi **len v hero úvodnej stránky**. Nikde inde – rozostrenie prepočítava prehliadač pri každom posunutí stránky a na slabších telefónoch to trhá. Ak sa to prejaví aj v hero, nahraď ich jedným predrenderovaným WebP.

## Tiene a obrysy

```css
--shadow-ring:         0 0 0 1px rgba(228,237,241,0.12);
--shadow-ring-strong:  0 0 0 1px rgba(228,237,241,0.26);
--shadow-panel:        0 24px 60px rgba(0,0,0,0.38);
--shadow-panel-hover:  0 32px 70px rgba(0,0,0,0.45);
--shadow-on-light:     0 18px 40px rgba(26,45,56,0.14);
--shadow-float:        0 8px 24px rgba(0,0,0,0.45);
```

Obrys panela sa robí tieňom, nie `border` – nezaberá miesto v layoute a sleduje zaoblenie. Panel vždy dostane dvojicu `--shadow-ring, --shadow-panel`. Pri prejdení myšou `--shadow-ring-strong, --shadow-panel-hover` a posun `translateY(-3px)`.

## Zaoblenie

| Token | Hodnota | Použitie |
|---|---|---|
| `radius-control` | `12px` | záložky, prepínače, menšie ovládacie prvky |
| `radius-card` | `14px` | panel, karta, box s cenou, galéria |
| `radius-card-lg` | `16px` | veľký panel – formulár, karta s fotkou (potrebuje `overflow: hidden`) |
| `radius-pill` | `9999px` | tlačidlá, štítky, plávajúce tlačidlá |

## Typografia

Dve písma, obe z Google Fonts:
- **Montserrat** 300/400/500/600/700 — všetko
- **Spectral** 300/400, kurzíva aj základný rez — druhý riadok nadpisu a tagliny

> **Zmena 25. 10.: Playfair Display je zakázaný.** Druhý riadok nadpisu bol predtým v Playfair Display italic. Vysokokontrastná pätková kurzíva je dnes poznávacie znamenie stránok generovaných AI a majiteľ si to všimol. **Playfair Display nevracaj** v žiadnej podobe.
>
> Pätkové písmo zostáva, len iné. **Spectral** je navrhnuté pre obrazovku a má nízky kontrast ťahov — na tmavom podklade a na telefóne nemizne, ako to robili vlásočnice Playfairu.

Druhý riadok nadpisu — trieda `.dline`, jeden riadok CSS platný na 34 miestach:

```css
.dline{font-family:Spectral,Georgia,serif;font-weight:300;font-style:italic;letter-spacing:-0.005em}
```

- prvý riadok nadpisu: Montserrat 600, farba `web-ink`
- druhý riadok: Spectral 300 italic, farba `web-green` (alebo `web-ink` na svetlej sekcii)
- 12 miest používa `.dline` **bez kurzívy** (veľké číslice v časovej osi, tagliny v paneloch) — majú inline `font-style: normal`

- Štítok nad nadpisom: 12 px, 600, verzálky, `letter-spacing: 0.28em`, farba `web-green`

| Štýl | Veľkosť / riadkovanie | Kde |
|---|---|---|
| `web-hero` | 96 / 98, 600 | H1 úvodnej stránky |
| `web-h1` | 66 / 69, 600 | H1 podstránky |
| `web-h2` | 48 / 53, 600 | nadpis sekcie |
| `web-h3` | 20 / 26, 600 | nadpis karty |
| `web-dline` | rovnaká veľkosť ako riadok nad ním, Spectral **300 italic** | druhý riadok nadpisu |
| body | 15–16 / 1,7 | text |

Všetky nadpisy cez `clamp()` smerom nadol (hero až na 40 px, h1 na 34 px, h2 na 28 px).
Keď bude licencia Ofelia Text, vymení sa jeden token – nie všetky komponenty.

## Medzery

| Token | Hodnota |
|---|---|
| `web-gutter` | `clamp(20px, 5vw, 64px)` – bočný okraj stránky (úvodná 72px) |
| `web-section` | `clamp(64px, 9vw, 160px)` – zvislý odstup sekcií |
| `web-panel-pad` | `clamp(28px, 3.4vw, 48px)` – vnútorný okraj panela |

## Pohyb

- Odhalenie pri scrollovaní: `animation-timeline: view()` s `@supports`, posun 40 px + fade
- Prepnutie obsahu v module (remeslo, krok, typ): trieda `swap`, 0,5 s
- Striedanie hero záberov: 6 s na záber, prelínanie 1,6 s, Ken Burns 22 s
- Marquee: 38 s lineárne
- **Všetko vypnuté pri `prefers-reduced-motion: reduce`**, vrátane intro videa a striedania hero záberov

## Prístupnosť

- Text na podklade min. 4,5:1 (od 24 px 3:1). Zelený text len na tmavom.
- Dotykové ciele min. 44 px.
- `:focus-visible` = 2 px `web-green`, odsadenie 3 px.
- Farby, ktoré treba rozlíšiť, sa líšia aj svetlosťou, nielen odtieňom.

## Mobil

Všetkých deväť stránok návrhu bolo 25. 10. skontrolovaných pri **390 px**. Žiadna nepreteká do vodorovného rolovania. Layout drží na `clamp()`, `flex-wrap` a `grid-template-columns: repeat(auto-fit, minmax(…, 1fr))` — **nepridávaj vlastné breakpointy**, nie sú potrebné.

Zámerné výnimky, ktoré treba zachovať:
- ukazovateľ SCROLL v hero sa pod 1100 px skrýva
- bežiaci pás značiek preteká mimo obrazovku (rodič má `overflow: hidden`, takže stránka nerolu je do strany)
- plávajúci asistent zostáva fixovaný aj na mobile
