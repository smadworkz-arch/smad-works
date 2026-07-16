
## Goal

Keep the current hero exactly as it is. Everything below it becomes a cinematic, 3D, motion-graphics experience — dark stage, gold particle accents, all reactive to mouse and scroll. Less text-heavy blocks, more visual storytelling.

## Tech

- Add `@react-three/fiber`, `@react-three/drei`, `three`, and `framer-motion` (framer-motion may already be present; will check).
- All 3D scenes wrapped in a `<ClientOnly>` boundary and dynamically imported so SSR/prerender is safe (Three.js is browser-only).
- Single shared `<CanvasStage>` component with a fixed background canvas containing:
  - Gold particle field (`Points`) that drifts, parallaxes to mouse, and accelerates on scroll.
  - Subtle volumetric fog + bloom (postprocessing) for the "premium dark + gold" mood.
- Scroll progress driven via Framer Motion's `useScroll` / `useTransform`, piped into the Three scene through a small context.

## Sections being redesigned (hero untouched)

1. **About** — replace the two-column card with a scroll-pinned scene: a rotating 3D wireframe globe/orb made of gold lines; text fades in beside it as the orb tilts with cursor.
2. **Services** — replace the 3-column card grid with a **3D floating service constellation**: each service is a glass/gold card floating in 3D space on a curved arc. Mouse moves the camera; hovering a card pulls it forward with a spring; click routes to the service page. Uses `<Html>` from drei so cards stay real, accessible React nodes.
3. **Service Showcase strip** — replace the horizontal drag scroller with a **3D coverflow** (curved cards on a cylinder) similar to the museum gallery, auto-drifting and reacting to scroll velocity.
4. **Automations (01–07)** — replace numbered grid with a **3D orbit**: seven nodes orbiting a central gold core; scroll rotates the orbit, the "active" node (nearest camera) surfaces its details in a side panel with Framer Motion transitions.
5. **Process (Discover → Support)** — replace with a **scroll-scrubbed 3D path**: a gold ribbon/spline in 3D that a small camera travels along as the user scrolls; step labels reveal at each waypoint.
6. **Industries** — 3D tag cloud sphere (drei `<Text>` on sphere), gently rotating, cursor-tilted; clicking a tag routes to the industry page.
7. **Reviews** — floating 3D cards in a slow parallax drift; scroll speed changes the drift direction.
8. **Contact / CTA** — keep the form functional; add a background shader plane (gold gradient noise) that reacts to cursor.

Footer stays as-is.

## Motion & interaction rules

- Global reduced-motion check: if `prefers-reduced-motion`, canvases render a static frame and Framer transitions collapse to fades.
- Mouse parallax is dampened (lerp 0.08) so it feels premium, not jittery.
- Scroll drives: particle speed, service constellation rotation, process camera travel, orbit angle.
- All 3D scenes cap DPR at 1.5 and pause rendering when off-screen (`useFrame` gated by `IntersectionObserver`) to keep it fast on mid-range devices.

## Accessibility & SEO

- All service/industry/automation names remain real HTML (via drei `<Html>` or parallel hidden lists) so crawlers and screen readers still see them.
- Existing route links (Explore service, industry pages) preserved.
- No changes to head/meta or schema.org JSON-LD.

## File plan

- `src/components/three/CanvasStage.tsx` — background particle canvas + scroll/mouse context.
- `src/components/three/ServiceConstellation.tsx` — section 2.
- `src/components/three/ShowcaseCoverflow.tsx` — section 3.
- `src/components/three/AutomationOrbit.tsx` — section 4.
- `src/components/three/ProcessRibbon.tsx` — section 5.
- `src/components/three/IndustrySphere.tsx` — section 6.
- `src/components/three/ReviewDrift.tsx` — section 7.
- `src/components/ClientOnly.tsx` (if not present) — hydration gate.
- `src/routes/index.tsx` — swap section internals only; hero + nav + footer + head untouched.

## Out of scope

- Hero section (per your instruction).
- Copy/content changes beyond trimming redundant paragraphs where the 3D visual now carries the message.
- Other routes (service/industry pages stay as-is).

## Risk notes

- Three.js adds ~150KB gz; mitigated by dynamic import so it only loads after hydration and never blocks the hero.
- On very old GPUs the particle bloom may drag; the reduced-motion + IntersectionObserver gating handles this.
