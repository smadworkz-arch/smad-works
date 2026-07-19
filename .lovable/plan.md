## Goal
Replace the "Solutions" top-nav mega dropdown with a slide-in **side drawer** that lists all grouped solutions and links to their pages/sections.

## Changes (scoped to `src/components/SiteHeader.tsx` only)

1. **Remove the mega-menu dropdown** logic (hover state, close-delay timers, absolute-positioned panel) from the desktop header.
2. **Replace the "Solutions" nav item** with a button that opens a right-side drawer (using existing shadcn `Sheet` component — already in the project).
3. **Drawer contents** — same grouped structure already defined, just re-laid out vertically for a sidebar:
   - 🤖 AI & Business Automation → Business Automation, Operations Management, AI Content Generation
   - 📈 Business Growth → Lead Generation, Lead Conversion
   - 🎨 Creative & Media → Logo & Creative Design, Video Production & AI Studio
   - ✅ Quality & Research → QA Testing, Academic Research
   - 🎓 AI Learning → AI Automation Course, AI Video Generation Course, AI Course Content
   - Gold "Book a Free Consultation" CTA card pinned at the bottom.
4. **Behavior**
   - Opens from the right, ~380–420px wide (full-width on mobile).
   - Click any item → navigate + close drawer.
   - Close on outside click, Esc, or X button.
   - Page scroll stays enabled behind the overlay (Sheet handles focus trap without breaking scroll after close).
5. **Mobile menu** — replace the current inline Solutions accordion with a "Solutions" button that opens the same drawer, so mobile and desktop share one component.
6. **Preserve** all existing branding (black/white/gold), logo, other nav links (Home, Industries, Contact, WhatsApp CTA), and animations.

## Out of scope
- No changes to any page content, routes, footer, or homepage sections.
- No new dependencies (uses existing `@/components/ui/sheet`).

Please confirm and I'll implement.
