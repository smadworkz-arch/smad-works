## Goal

Transform all 11 service pages from the shared informational `ServicePage` template into individually redesigned, immersive experiences — matching the homepage's dark theme + Three.js + Framer Motion language, but with a distinct **thematic motion concept** per page.

## Approach

- Keep `SiteHeader` / `SiteFooter` / gold+black+white brand tokens across all pages.
- Retire `ServicePage.tsx` usage for these routes (leave the file for now; delete once every page is migrated).
- Build a small **shared motion kit** and reuse it per page:
  - `src/components/three/PageHero3D.tsx` — dark hero shell with slot for a page-specific 3D scene, scroll-linked parallax, gold accents.
  - `src/components/motion/Reveal.tsx` — scroll-triggered fade/slide/scale reveals (Framer Motion `whileInView`).
  - `src/components/motion/Marquee.tsx`, `MagneticButton.tsx`, `SectionEyebrow.tsx` — small reusable primitives.
  - Reuse existing `TiltCard.tsx` and `ThreeBackground.tsx`.
- Each page is rebuilt from scratch (no shared `ServicePage`) with a **custom layout + custom 3D/motion set-piece** tied to its theme.
- Trim informational text: replace long lists with visual, interactive, or animated equivalents. Keep FAQ + contact CTA (condensed).
- Preserve SEO essentials on every route: unique `head()` title/description/OG, single H1, semantic sections, alt text, JSON-LD `Service` schema.

## Per-page motion concept

| Page | Signature 3D / motion concept |
|---|---|
| Business Automation | Orbiting node graph (n8n-style) — draggable nodes wiring themselves in on scroll |
| Operations Management | Animated Kanban / pipeline that flows tasks left→right as you scroll |
| QA Testing | "Bug hunt" — floating glitch cubes that get caught into a checklist grid |
| Academic Research | Layered paper stack + typewriter reveal + citation constellation |
| AI Content Generation | Keep the existing 3D museum carousel + add parallax hero and generative-grid intro |
| AI Course Content | Book/module unfolding in 3D, chapter cards flipping on scroll |
| AI Video Generation Course | Film-strip scroll — frames advance as you scroll, gold play-head |
| AI Automation Course | Circuit-board grid with pulses traveling along paths on scroll |
| Lead Generation | Magnet + particle stream — particles pulled toward a gold funnel |
| Lead Conversion | Funnel morph — wide → narrow → conversion burst on scroll |
| Logo & Creative Design | Rotating 3D logo mark showcase + brand-mark morph gallery |
| Video Production & AI Studio | Keep existing reels/gallery + add cinematic dark hero + timeline scrubber |

## Rollout (12 batches — one per page + kit)

1. **Motion kit** — build `PageHero3D`, `Reveal`, `Marquee`, `MagneticButton`, `SectionEyebrow`. No page changes yet.
2. **Business Automation** — rebuild as pilot; validate pattern and perf.
3. Operations Management
4. QA Testing (preserve existing case studies + audit form)
5. Academic Research
6. AI Content Generation (wrap existing carousel in new shell)
7. AI Course Content
8. AI Video Generation Course
9. AI Automation Course
10. Lead Generation
11. Lead Conversion
12. Logo & Creative Design + Video Production Studio polish pass; then delete `ServicePage.tsx`.

Each batch: dark themed hero → 2–3 scroll-driven set pieces → condensed services grid (TiltCards) → mini process/outcome section → FAQ (2–4 items) → gold CTA → WhatsApp handoff. Route head() metadata updated per page.

## Technical notes

- All Three.js scenes wrapped in `<ClientOnly>` (already established pattern) to keep SSR safe.
- Reuse installed deps: `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`. No new packages.
- Performance: lazy-load heavy `<Canvas>` scenes with `React.lazy` under `<ClientOnly>`; cap DPR; disable animations on `prefers-reduced-motion`.
- Keep existing WhatsApp CTA (`wa.me/917439668751`) as primary conversion action on every page.
- Routes, filenames, and URLs stay identical — only the component bodies change.

## Deliverable per batch

One page fully redesigned + working preview. I'll pause after each so you can approve before I move to the next.

## Out of scope

- Homepage (already done)
- Industry pages (already have their own layout)
- Navbar, footer, drawer, contact form logic
- Any backend / data changes
