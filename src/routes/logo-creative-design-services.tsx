import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { LogoMarkScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/logo-creative-design-services")({
  head: () =>
    serviceHead({
      path: "/logo-creative-design-services",
      title: "Logo & Creative Design Services | Branding & Marketing | SMad Works",
      description: "Premium logo, branding, posters, business profiles, presentations and social media creatives — a brand people remember.",
      serviceType: "Logo & Creative Design Services",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="Creative Design"
      title={<>Build a brand <span className="text-gold">people remember.</span></>}
      subtitle="Memorable logos, cohesive brand systems and marketing creatives — engineered to make your business unmistakable."
      primaryCta={{ label: "Design my brand", whatsappMessage: "Hi SMad Works, I need branding & creative design help." }}
      scene={<LogoMarkScene />}
      metrics={[
        { k: "200+", v: "Brands built" },
        { k: "5–7d", v: "Logo delivery" },
        { k: "∞", v: "Revisions*" },
        { k: "Print + Web", v: "Ready" },
      ]}
      capabilities={[
        { t: "Logo Design", d: "Original marks in 3 directions + refinement." },
        { t: "Brand Systems", d: "Colors, typography, voice and guidelines." },
        { t: "Posters & Print", d: "Event, product and campaign posters." },
        { t: "Business Profiles", d: "Investor and company deck design." },
        { t: "Presentations", d: "Sales, pitch and training decks." },
        { t: "Social Creatives", d: "Feed posts, reels covers and ads." },
      ]}
      process={[
        { n: "01", t: "Discover", d: "Brand story, audience, aspirations." },
        { n: "02", t: "Explore", d: "3 concept directions." },
        { n: "03", t: "Refine", d: "Iterate on chosen direction." },
        { n: "04", t: "System", d: "Extend logo into full brand system." },
        { n: "05", t: "Deliver", d: "All source files + guidelines." },
      ]}
      tools={[
        { name: "Adobe Illustrator", domain: "adobe.com" },
        { name: "Figma", domain: "figma.com" },
        { name: "Photoshop", domain: "adobe.com" },
        { name: "Canva Pro", domain: "canva.com" },
        { name: "After Effects", domain: "adobe.com" },
      ]}
      industries={["Startups", "SMBs", "Healthcare", "Real Estate", "Hospitality", "E-commerce"]}
      faqs={[
        { q: "How many logo concepts?", a: "Typically 3 initial directions with 2 rounds of revisions each." },
        { q: "Do you deliver source files?", a: "Yes — AI, SVG, PDF and PNG in all required sizes." },
        { q: "Can you redesign an existing brand?", a: "Yes — full rebrand and partial refresh both available." },
        { q: "Turnaround time?", a: "Logos in 5–7 days; full brand systems in 2–3 weeks." },
      ]}
      finalCtaTitle={<>A brand that <span className="text-gold">outlasts trends.</span></>}
      related={[
        { to: "/ai-content-generation", title: "AI Content Generation" },
        { to: "/business-automation", title: "Business Automation" },
        { to: "/lead-generation-services", title: "Lead Generation" },
      ]}
    />
  ),
});
