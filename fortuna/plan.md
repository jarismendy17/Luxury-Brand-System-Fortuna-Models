FORTUNA MODELS — Digital Brand System

A single-page dashboard app with a fixed left sidebar and a dynamic main content area that renders one of 20 brand documentation sections. Dark luxury aesthetic, editorial typography, Swiss grid.

## Architecture

- **Single route** at `/` (rewrite `src/routes/index.tsx`) — this is one app surface, not multi-route. Section switching is client state (`activeSection`), no URL routing needed (keeps it dashboard-feeling and fast).
- **Layout shell**: 280px fixed sidebar (#121212) + main canvas (#050505). Mobile: sidebar becomes a Sheet drawer triggered by a top-bar hamburger.
- **Component split**:
  - `src/components/brand/BrandSidebar.tsx` — logo header, search filter, 20-item nav list
  - `src/components/brand/BrandShell.tsx` — layout + mobile drawer
  - `src/components/brand/sections/` — one file per section (Section01Cover … Section20Closing), 20 files
  - `src/components/brand/sections/index.ts` — registry mapping id → { title, icon, component }
- Uploaded brand images (logo, model photos, banner) uploaded as Lovable Assets and imported where relevant (cover hero, photography section, mockups).

## Design tokens (src/styles.css)

Add brand tokens alongside existing shadcn tokens (do not remove shadcn — sidebar/sheet/input/button components use them). New tokens:

- `--fortuna-canvas: #050505`
- `--fortuna-surface: #121212`
- `--fortuna-gold: #C8A050`
- `--fortuna-champagne: #E8D8B0`
- `--fortuna-text: #F5F5F5`

Register in `@theme inline` as `--color-fortuna-*` so utilities like `bg-fortuna-surface`, `text-fortuna-gold`, `border-fortuna-champagne/20` work.

## Fonts

Load via `<link>` in `src/routes/__root.tsx` head (never `@import` remote URLs in styles.css):

- Bodoni Moda (display/headlines)
- Montserrat (body/UI)
- EB Garamond (quotes)

Register in `@theme`:

- `--font-display: "Bodoni Moda", serif`
- `--font-body: "Montserrat", sans-serif`
- `--font-quote: "EB Garamond", serif`

Set body default to Montserrat.

## Sidebar

- Header: gold-bordered square badge with crown/F icon (Lucide `Crown`), "FORTUNA MODELS" in Bodoni Moda, "Brand System v1.0" caption in Montserrat uppercase tracking-wider.
- Search: shadcn Input with Lucide `Search` icon, filters the 20 items by title.
- Nav: scrollable list. Each item = 2-digit number + Lucide icon + title. Active state = `bg-fortuna-surface` fill + 2px left border in `--fortuna-gold`. Hover = subtle gold text.
- Section-to-icon mapping uses Lucide: BookOpen, List, Sparkles, Target, Crown, Palette, Type, Grid3x3, Shapes, Camera, Share2, Instagram, Facebook, Music2 (TikTok proxy), Megaphone, Component, Layers, CheckCircle2, XCircle, Flag.

## 20 sections — build notes

Each section is self-contained, renders inside a `<section className="max-w-6xl mx-auto px-8 py-12 space-y-8">` wrapper with a consistent header (kicker "SECTION 0X", H1 in Bodoni Moda, thin gold divider).

1. **Cover** — full-bleed editorial hero using `Banner_de_facebook.jpg`, gold "LUXURY BRAND SYSTEM" badge, large Bodoni title.
2. **Index** — 2-col numbered grid, gold hairline dividers, clicking a row jumps to that section.
3. **Essence** — 4 dark cards (Purpose / Mission / Vision / Values) with gold top-border accent.
4. **Positioning** — 3-column matrix: Attributes | Emotional hooks | Differentiators.
5. **Logo System** — logo displayed on dark tile, safe-area diagram (CSS box with "X" spacing labels), minimum-size specs, do/don't background swatches.
6. **Color Palette** — 5 large swatches. Click swatch → copies HEX to clipboard, toast confirmation. Shows HEX/RGB/CMYK.
7. **Typography** — hierarchy samples (H1/H2/H3/Body/Caption/Quote) in the three fonts. Letter-spacing toggle (tight/normal/wide) via state.
8. **Graphic System** — visual demos: 1px gold hairlines, framed container, metallic gradient bar, negative-space ratio diagram.
9. **Iconography** — grid of ~16 Lucide icons rendered with `stroke-[1.5]` in gold on surface tiles.
10. **Photography** — moodboard using `modelo.png`, `Maquillaje.jpg`, `modelo_producción.png`, `Acompañamiento_psicologico.png`, `Entrevista.png` in a masonry-style grid with caption overlays (lighting, framing, grading notes).
11. **Social Strategy** — 3 platform cards (Facebook Corporate / Instagram Luxury / TikTok BTS) with tone + KPIs.
12. **Instagram** — 4:5 feed post mockup, 9:16 story frame, 3-slide carousel row, reel cover — CSS-only device frames.
13. **Facebook** — cover banner 1640×924 proportion using `Banner_de_facebook.jpg`, feed post card, ad card.
14. **TikTok** — 9:16 mobile frame with dashed overlays marking top/right/bottom safe areas.
15. **Meta Ads** — annotated ad layout with 70/20/10 zones labeled (Visual / Headline / Gold CTA).
16. **Components** — live shadcn components restyled to brand: gold Button, dark Input, gold Badge, brand Card. All interactive.
17. **Mockups** — business card front/back with foil-stamped logo, PVC badge, laptop + phone frames.
18. **Correct Uses** — 4-tile grid of on-brand comms with subtle green check.
19. **Incorrect Uses** — 4-tile grid: stretched logo, low-contrast, wrong color, cluttered — each with red ❌ badge.
20. **Closing** — minimal centered card with logo, copyright, version, approval contact.

## SEO / head

Update `src/routes/index.tsx` head:

- title: "FORTUNA MODELS — Digital Brand System"
- description: "Interactive brand guidelines and design system for FORTUNA MODELS luxury agency."
- og:title, og:description, og:type=website, twitter:card=summary_large_image
- og:image + twitter:image = uploaded banner asset URL

## Technical details

- Use existing shadcn `Input`, `Button`, `Sheet` (for mobile drawer), `Badge`, `Card`, `ScrollArea`. No new packages needed beyond what's installed. If `Sheet` isn't present, add via existing shadcn pattern.
- Clipboard: `navigator.clipboard.writeText` + shadcn `toast` (sonner is already available via shadcn).
- All colors via tokens — no hardcoded hex in components except within `styles.css` and asset-relative decorative elements.
- Uploaded images: create asset JSON pointers via `lovable-assets create` for the 8 uploaded files → import from `src/assets/*.asset.json`.
- No backend, no auth, no Lovable Cloud — pure frontend documentation app.

## Out of scope

- Multi-route URLs per section (deep-linking) — can add later with hash sync if requested.
- Real print-mockup 3D rendering — using CSS-only representations.
- CMS editing of section content — content is hardcoded.