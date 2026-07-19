import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/logo-creative-design-services")({
  head: () =>
    serviceHead({
      path: "/logo-creative-design-services",
      title: "Logo & Creative Design Services | Branding & Marketing | SMad Works",
      description:
        "Premium logo, branding, posters, business profiles, presentations and social media creatives by SMad Works. Build a brand people remember.",
      serviceType: "Logo & Creative Design Services",
    }),
  component: () => (
    <ServicePage
      eyebrow="Creative Design"
      title="Logo & Creative Design Services"
      headline="Build A Brand People Remember"
      description="Memorable logos, brand systems and marketing creatives designed to make your business stand out."
      benefits={["Original concepts", "Brand-aligned system", "Print & digital ready", "Unlimited revisions*"]}
      ctaPrimary="Design Your Brand"
      whatsappMessage="Hi SMad Works, I need branding & creative design help."
      services={[
        { title: "Brand", items: ["Logo Design", "Branding", "Brand Guidelines"] },
        { title: "Collateral", items: ["Posters", "Business Profiles", "Presentations"] },
        { title: "Marketing", items: ["Marketing Designs", "Social Media Creatives", "Ad Visuals"] },
      ]}
      faqs={[
        { q: "How many logo concepts?", a: "Typically 3 initial directions with 2 rounds of revisions each." },
        { q: "Do you deliver source files?", a: "Yes — AI, SVG, PDF and PNG in all required sizes." },
        { q: "Can you redesign an existing brand?", a: "Yes — full rebrand and partial refresh both available." },
        { q: "Turnaround time?", a: "Logos in 5–7 days; full brand systems in 2–3 weeks." },
      ]}
      related={[
        { to: "/ai-content-generation", title: "AI Content Generation" },
        { to: "/business-automation", title: "Business Automation" },
        { to: "/lead-generation-services", title: "Lead Generation" },
      ]}
    />
  ),
});
