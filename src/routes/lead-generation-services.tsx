import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { MagnetParticlesScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/lead-generation-services")({
  head: () =>
    serviceHead({
      path: "/lead-generation-services",
      title: "Lead Generation Services | B2B & LinkedIn Leads | SMad Works",
      description: "Targeted lead generation — B2B databases, LinkedIn leads, industry research and verified contacts, built around your ICP.",
      serviceType: "Lead Generation Services",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="Lead Generation"
      title={<>Find your next <span className="text-gold">customers faster.</span></>}
      subtitle="Verified, ICP-aligned leads ready for outreach — B2B databases, LinkedIn intelligence and multi-channel enrichment."
      primaryCta={{ label: "Generate more leads", whatsappMessage: "Hi SMad Works, I need lead generation for my business." }}
      scene={<MagnetParticlesScene />}
      metrics={[
        { k: "10K+", v: "Verified leads/mo" },
        { k: "95%", v: "Deliverability" },
        { k: "24h", v: "Turnaround" },
        { k: "ICP", v: "Precision" },
      ]}
      capabilities={[
        { t: "Target Research", d: "Nail down ICP, personas and buying triggers." },
        { t: "Industry Research", d: "Market segmentation and account mapping." },
        { t: "B2B Databases", d: "Curated lists with role, company and intent." },
        { t: "LinkedIn Leads", d: "Sales Nav + enrichment for outbound." },
        { t: "Email Verification", d: "Multi-step validation for high delivery." },
        { t: "Enrichment", d: "Phone, LinkedIn, tech stack and notes." },
      ]}
      process={[
        { n: "01", t: "ICP", d: "Define ideal customer profile and criteria." },
        { n: "02", t: "Collect", d: "Multi-source data gathering." },
        { n: "03", t: "Verify", d: "Email, phone and role validation." },
        { n: "04", t: "Enrich", d: "Add context for personalized outreach." },
        { n: "05", t: "Deliver", d: "Clean CSV / Sheets / CRM import." },
      ]}
      tools={[
        { name: "LinkedIn Sales Nav", domain: "linkedin.com" },
        { name: "Apollo", domain: "apollo.io" },
        { name: "ZoomInfo", domain: "zoominfo.com" },
        { name: "Hunter", domain: "hunter.io" },
        { name: "NeverBounce", domain: "neverbounce.com" },
        { name: "HubSpot", domain: "hubspot.com" },
      ]}
      industries={["SaaS", "Agencies", "Consulting", "FinTech", "E-commerce", "B2B Services"]}
      faqs={[
        { q: "What format do you deliver?", a: "Clean CSV/Sheets with name, role, company, email, LinkedIn and notes." },
        { q: "Is the data verified?", a: "Yes — multi-step verification before delivery." },
        { q: "Can you handle outreach too?", a: "Yes, paired with our Lead Conversion service." },
        { q: "Which regions do you cover?", a: "Global — US, UK, EU, APAC and India." },
      ]}
      finalCtaTitle={<>Fill the pipeline. <span className="text-gold">Weekly.</span></>}
      related={[
        { to: "/lead-conversion-services", title: "Lead Conversion" },
        { to: "/business-automation", title: "Business Automation" },
        { to: "/operations-management-services", title: "Operations Management" },
      ]}
    />
  ),
});
