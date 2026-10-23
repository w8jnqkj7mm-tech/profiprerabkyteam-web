# Profi Prerábky Team – Web v1

Web pre profiprerabkyteam.sk - spoločný web štyroch remesiel.

## 🎯 Cieľ

Spustiť web, ktorý zbiera dopyty na malé práce a rekonštrukcie. Booking a AI agent sú vypnuté (budúce funkcie).

## 📦 Technológie

- **Astro** (statický build)
- **Tailwind CSS** (tokeny z návrhu)
- **TypeScript**
- **Supabase** (dopyty do tabuľky `leads`)

## 🚀 Spustenie

```bash
# Inštalácia závislostí
npm install

# Vývoj
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## 📁 Štruktúra projektu

```
src/
├── components/       # Astro komponenty (Header, Hero, Footer, atď.)
├── layouts/         # BaseLayout pre meta tagy a fonts
├── pages/           # Astro route-based stranky (index, /male-prace, atď.)
├── config/          # company.ts, features.ts (prepínače na budúce funkcie)
├── styles/          # globals.css (Tailwind + animácie z návrhu)
└── lib/            # Utility (Supabase klient, helpers)

reference/          # Návrh, assety, brand manuály
supabase/          # Migrácie SQL
```

## 🎨 Design

Všetko je podľa schváleného návrhu (`reference/homepage-navrh.dc.html`):
- Farby: tmavý podklad `#0D1215`, zelená akčent `#51AE4B`
- Typografia: Montserrat 400–700, Playfair Display kurzíva
- Animácie: CSS (animation-timeline: view()) + fallback pre staršie prehliadače

## 📝 Sekcie homepage

1. **Hero** – Video/poster, nadpis, CTA tlačidlá
2. **Rozcestník** – Malá práca / Rekonštrukcia
3. **Marquee** – 4 remeslá (TODO)
4. **Prečo jeden tím** – 3 piliere (TODO)
5. **Interaktívny modul** – Tabs + Pred/Po posuvník (TODO)
6. **Ako pracujeme** – 4 kroky (TODO)
7. **Formulár** – Dopyt (TODO)
8. **Pätička** – Kontakty, linky

## ⚙️ Konfigurácia

- **`src/config/company.ts`** – Kontakty, názvy firiem, značky
- **`src/config/features.ts`** – Prepínače: `bookingEnabled`, `agentEnabled`, `catalogEnabled`

## 🗄️ Supabase

- Tabuľka `leads` (web v1 má vlastnú, nie je napojená na appku)
- Web vkladá dopyty s `source='web'`, `status='new'`
- RLS: anonymný INSERT, GDPR súhlas povinný

## 🔗 Budúce stránky (v1)

- `/male-prace` – Elektrikár, vodár, hodinový majster, klimatizácie
- `/rekonstrukcie` – Typy projektov, postup, CTA
- `/elektrikar`, `/vodar`, `/prerabky`, `/stolarstvo` – SEO stránky
- `/cennik` – Jednotný cenník (z Supabase tabuľky `pricing`)
- `/realizacie` – Galéria (pred/po)
- `/blog` – Články v Markdown
- `/kontakt` – Formulár + mapa
- `/gdpr`, `/cookies` – Právne

## 📊 SEO a analytika

- Meta tagy a Open Graph pre každú stránku
- schema.org LocalBusiness
- sitemap.xml a robots.txt
- Analytika bez cookies (Plausible alebo Cloudflare Web Analytics)

## 📌 Zoznam TODO

- [ ] Marquee s 4 remeslami
- [ ] "Prečo jeden tím" – 3 piliere
- [ ] Interaktívny modul s posuvníkom
- [ ] Timeline 4 krokov
- [ ] Kontaktný formulár (Supabase + RLS + Turnstile)
- [ ] Logá ako SVG (zatiaľ placeholdery)
- [ ] Videá z `reference/assets/` (hero-1080, hero-720, poster)
- [ ] Podstránky remesiel
- [ ] Cenník (z Supabase)
- [ ] Realizácie (galéria)
- [ ] Blog (content collection)
- [ ] GDPR a Cookies stránky
- [ ] SEO a schéma
- [ ] Lighthouse optimizácia (≥90)
