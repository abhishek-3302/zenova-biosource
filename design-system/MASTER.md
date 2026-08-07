# Zenova Biosource — Design System (Master)

> Global source of truth. Page-specific overrides live in `design-system/pages/<page>.md`.

## Brand
- **Name:** Zenova Biosource
- **Tagline:** Laboratory • Diagnostic • Equipment
- **Personality:** Premium · Scientific · Precise · Reliable · Enterprise · Trustworthy · High-tech · Minimal
- **Benchmark:** Apple minimalism, Stripe polish, Siemens/Roche enterprise medical
- **Brand palette:** Primary Blue `#0B2A67` · Primary Teal `#0F9F9A` · White `#FFFFFF` · Dark Text `#404040` · Light Gray `#CFCFCF`

## Color Tokens (Tailwind v4, `@theme inline` in `src/app/globals.css`)
| Token | Hex | Usage |
|---|---|---|
| `base` | `#f6f7f9` | Page background (light) |
| `base2` | `#eef1f4` | Alternating section band |
| `panel` | `#ffffff` | Card surface (White) |
| `navy` | `#0b2a67` | Primary brand blue (Primary Blue) |
| `navy-deep` | `#071a42` | Footer / dark device screen accents (derived) |
| `navy-soft` | `#6b87c6` | Gradient highlight (derived) |
| `teal` | `#0f9f9a` | Primary accent — use sparingly (Primary Teal) |
| `teal-bright` | `#12c0ba` | Hover / glow accent (derived) |
| `teal-deep` | `#0c7f7b` | Deep teal for gradients (derived) |
| `ink` | `#404040` | Primary text (Dark Text) |
| `body` | `#5a5a5a` | Secondary text (derived) |
| `mut` | `#6f6f6f` | Muted text |
| `line` | `rgba(11,42,103,0.14)` | Borders/dividers (derived from navy) |
| `mist` | `#eef1f5` | Light neutral panels; Light Gray `#CFCFCF` used for scrollbar thumb |

## Typography
- **Headings:** Inter Tight (`--font-inter-tight`), weight 600–700, tracking -0.02em via `.font-display`
- **Body:** Inter (`--font-inter`)
- Sizes: H1 mobile 44px → desktop 72px; H2 30–48px; body 15–18px.
- Loaded via `next/font/google` (self-hosted, no external requests).

## Radius / Elevation
- Cards: 16px (`rounded-2xl`) / 20px (`rounded-3xl`); buttons & chips: full.
- `card-elevated`: deep soft shadow; `glow-teal`: teal glow for CTA elements.

## Visual Language
- Light backgrounds (`base`/`panel` white, `mist` panels), 56px molecular grid (`bg-grid` + `bg-grid-fade`), teal/blue radial glows.
- Glassmorphism only on floating chips / mega menu (`glass`).
- Icons: **Lucide** thin outline, consistent 20–24px in 44–48px containers.
- **No emoji, no clip-art, no stock-template styling.**

## Components (src/components)
- `ui/button` — cva variants (primary gradient, secondary glass, ghost, outline)
- `ui/badge` — teal pill with glow dot
- `ui/section` — `Section` + `SectionHeading`
- `motion/reveal` — `Reveal`, `Stagger`, `StaggerItem` (Framer Motion, respects `prefers-reduced-motion`)
- `motion/counter` — animated stats counter
- `Navbar` — sticky glass, products mega menu, mobile drawer
- `Footer`, `PageHeader`, `ScrollProgress`

## Motion
- Standard reveal: opacity 0→1, y 28→0, 0.6–0.7s, ease `[0.22,1,0.36,1]`, stagger 0.08s.
- Micro-interactions 150–300ms. Hero uses scroll-linked parallax (respects reduced motion).
- Marquee brand strip 42s linear, pauses on hover.

## Layout / Spacing
- 8px system; section padding `py-20 md:py-28`; container `max-w-80rem` (`container-z`).
- Readable measure: text blocks capped at ~65ch.

## Accessibility
- WCAG AA targets on `ink`/`body`/`mut` text; skip link present; keyboard focus rings on `teal-bright`; reduced-motion supported.

## Pages
- `/` — Hero, Trusted Brands, Company Overview, Product Categories, Industries, Why Choose, Featured Equipment, Installation & Support, Government Procurement, Stats, Certifications, Testimonials, CTA
- `/products` — PageHeader + `ProductsBrowser` (sticky pills, search filter, anchored category sections)
- `/services` — service cards, SLA strip, engagement steps
- `/about` — mission/vision/quality, timeline, leadership, infrastructure, stats
- `/contact` — channels, RFQ/Dealer/Distributor/Service form (`RfqForm`), map, service & distributor cards
- `/privacy` — Privacy Policy (legal, sticky in-page nav)
- `/terms` — Terms of Service (legal, sticky in-page nav)

## Notes
- Contact data uses placeholders: `info@zenovabiosource.com`, `+91 00000 00000`. Replace with real values in `src/lib/site.ts` + `src/app/layout.tsx` (schema) before launch.
- Logo: `public/logo.png` (512×512). Brand hexes derived from logo sampling.
- Map iframe points to Noida Sector 62 (placeholder location).
