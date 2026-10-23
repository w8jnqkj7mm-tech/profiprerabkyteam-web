# Setup Web v1 – Profi Prerábky Team

## ✅ Čo je hotové (KROK 1-2)

### Konfigurácia
- [x] Astro 5 + Tailwind CSS s tokenmi z návrhu
- [x] TypeScript + path aliases (@components, @config, atď.)
- [x] `src/config/company.ts` – Kontakty, značky, údaje prevádzkovateľa
- [x] `src/config/features.ts` – Prepínače na budúce funkcie

### Štruktúra
- [x] Projektová architektúra (src/components, src/pages, src/layouts, atď.)
- [x] BaseLayout s meta tagami, OG, fonts
- [x] CSS s animáciami z návrhu (rise, fade, Ken Burns, marquee, scroll-reveal)

### Komponenty
- [x] **Header** – Navigácia + mobil menu
- [x] **Hero** – Ken Burns effect, nadpis s line-reveal, CTA tlačidlá (Dopyt, WhatsApp, Telefón)
- [x] **TradeMarquee** – 4 remeslá, nekonečný horizontálny posun
- [x] **WhyTeam** – 3 piliere (scroll-reveal animácia)
- [x] **ProcessTimeline** – 4 kroky s connector linkami
- [x] **ContactForm** – Formulár s fotkami, GDPR súhlasom (bez Supabase zatiaľ)
- [x] **Footer** – Kontakty, linky, prevádzkový info
- [x] **SVG Logá** – Pán Elektrikár, Pán Vodár, Stolárstvo (placeholdery – čakajú na finálne SVG)

### Homepage (`/`)
- [x] Hero sekcia
- [x] Rozcestník – Malá práca / Rekonštrukcia (2 veľké karty)
- [x] Marquee so 4 remeslami
- [x] Prečo jeden tím – 3 piliere
- [x] Ako pracujeme – 4 kroky
- [x] Formulár na dopyt
- [x] Pätička

### Supabase
- [x] SQL migrácia – tabuľka `leads` s RLS políčkami
- [x] Tabuľka `pricing` – Cenník s VAT/bez VAT
- [x] Storage bucket `lead-photos` – Fotky z dopytu
- [x] Utility funkcie – submitLead(), uploadLeadPhotos(), getPricing()

---

## 📋 Čo ešte chýba (KROK 3+)

### Assety
- [ ] **Logá ako finálne SVG** – Teraz sú placeholdery (text-based SVG)
  - Pán Elektrikár (červené #E51E25 + biely obrys)
  - Pán Vodár (modrá #4562AD + biely obrys)
  - Profi Prerábky (zelená #51AE4B + budovy + ".team")
  - Stolárstvo Pressburg (čierno-biele nástrojmi)

- [ ] **Videá** z `reference/assets/`
  - `hero-1080.webm` (WebM)
  - `hero-1080.mp4` (MP4)
  - `hero-720.mp4` (Mobil)
  - `hero-poster.webp` (Statický obrázok)
  - Later: `hero-notext.*` (bez textu, na hero sekciu)

- [ ] **Fotky z realizácií** – Na `/realizacie` (Pred/Po galéria)

### Texty (zo `OBSAH-WEBU.md`)
- [ ] Sľuby pri remeslách:
  - Prerábky: „Za celý projekt zodpovedá jeden z dvojice Števo Fuzy alebo Jakub Kleberc..."
  - Elektrikár: „Rozvody fotografujeme pred zakrytím..."
  - Vodár: „Rozvody plánujeme spolu s elektrickárom..."
  - Stolárstvo: „Predbežnú cenu pripravíme aj podľa aproximných rozmerov..."

### Komponenty (TODO)
- [ ] **TradeInteractive** – Tabs + Pred/Po posuvník (Astro island)
- [ ] **VideoSection** – „Od pôdorysu po kľúč" (dočasné umiestnenie videa s play tlačidlom)

### Stránky
- [ ] `/male-prace` – Elektrikár, vodár, hodinový majster, klimatizácie + cenník
- [ ] `/rekonstrukcie` – Typy projektov (byt, dom, kancelária, kúpeľňa)
- [ ] `/elektrikar`, `/vodar`, `/prerabky`, `/stolarstvo` – SEO stránky remesiel
- [ ] `/cennik` – Jednotný cenník (zo Supabase `pricing` tabuľky)
- [ ] `/realizacie` – Galéria projektov (Pred/Po)
- [ ] `/blog` – Články v Markdown (Astro content collections)
- [ ] `/kontakt` – Fullpage formulár + mapa Bratislavy
- [ ] `/gdpr`, `/cookies` – Právne stránky

### Integrácia
- [ ] **Supabase** – Nastaviť env. premenné
- [ ] **Formulár** – Prepojenie s Supabase (submitLead, uploadLeadPhotos)
- [ ] **Cloudflare Turnstile** – Spam protection (env key)
- [ ] **Notifikácie** – E-mail na `info@profiprerabkyteam.sk` (Supabase Edge Function alebo Resend)

### SEO a optimizácia
- [ ] **Meta tagy** – Unique title/description pre každú stránku
- [ ] **Open Graph** – ogImage pre sociálne siete
- [ ] **schema.org** – LocalBusiness, Services (JSON-LD)
- [ ] **Sitemap.xml** a **robots.txt**
- [ ] **Lighthouse optimizácia** – Cieľ ≥ 90 bodov
- [ ] **Google Search Console** – Kľúč (keď bude doména)

---

## 🚀 Ako spustiť projekt

### 1. Nainštaluj Node.js
Na macOS:
```bash
curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

Alebo z https://nodejs.org/ (LTS verzia).

### 2. Klonuj/Skopíruj projekt
```bash
cd web-v1
```

### 3. Nainštaluj závislosti
```bash
npm install
```

### 4. Nastav env. premenné
Skopíruj `.env.example` na `.env.local`:
```bash
cp .env.example .env.local
```

Vyplň Supabase klúče (neskôr, keď budeš mať projekt).

### 5. Spusť dev server
```bash
npm run dev
```

Server beží na `http://localhost:3000`

### 6. Build pre produkciu
```bash
npm run build
```

Výstup v `dist/` – hotový na Cloudflare Pages / Vercel.

---

## 📂 Projektová štruktúra (finálna)

```
web-v1/
├── src/
│   ├── components/
│   │   ├── Header.astro               ✅
│   │   ├── Hero.astro                 ✅
│   │   ├── TradeMarquee.astro         ✅
│   │   ├── WhyTeam.astro              ✅
│   │   ├── ProcessTimeline.astro      ✅
│   │   ├── ContactForm.astro          ✅
│   │   ├── TradeInteractive.astro     ❌ TODO
│   │   ├── VideoSection.astro         ❌ TODO
│   │   ├── Footer.astro               ✅
│   │   ├── LogoElektrician.astro      ✅ (placeholder)
│   │   ├── LogoPlumber.astro          ✅ (placeholder)
│   │   └── LogoCarpentry.astro        ✅ (placeholder)
│   ├── layouts/
│   │   └── BaseLayout.astro           ✅
│   ├── pages/
│   │   ├── index.astro                ✅
│   │   ├── male-prace.astro           ❌ TODO
│   │   ├── rekonstrukcie.astro        ❌ TODO
│   │   ├── [remeslo].astro            ❌ TODO
│   │   ├── cennik.astro               ❌ TODO
│   │   ├── realizacie.astro           ❌ TODO
│   │   ├── kontakt.astro              ❌ TODO
│   │   ├── gdpr.astro                 ❌ TODO
│   │   ├── cookies.astro              ❌ TODO
│   │   └── blog/
│   ├── config/
│   │   ├── company.ts                 ✅
│   │   └── features.ts                ✅
│   ├── lib/
│   │   └── supabase.ts                ✅
│   └── styles/
│       └── globals.css                ✅
├── supabase/
│   └── migrations/
│       └── 0001_init_leads.sql        ✅
├── public/
│   ├── favicon.svg                    ❌ TODO
│   ├── hero-poster.webp               ❌ TODO (z reference/assets/)
│   └── ...
├── .env.example                       ✅
├── astro.config.mjs                   ✅
├── tailwind.config.mjs                ✅
├── tsconfig.json                      ✅
├── package.json                       ✅
├── README.md                          ✅
└── SETUP.md                           ✅ (tu sme)
```

---

## 🔗 Nasledujúce kroky

1. **Nainštaluj Node.js** a spusť `npm install && npm run dev`
2. **Prezeraj si homepage** v prehliadači (http://localhost:3000)
3. **Pošli mi PNG logá** (alebo vektory) – vymeňom ich za finálne SVG
4. **Skopíruj videa** z `reference/assets/` do `public/`
5. Pokračujem s:
   - TradeInteractive komponent
   - Ostatné stránky
   - Supabase integrácia v formulári
   - SEO a optimizácia

---

## ❓ Otázky?

Všetko sa dá zmeniť. Farby, layout, texty – všetko je v kóde. Len hovor.

Sú nějaké zmeny, ktoré by si chcel pred build na produkciu?
