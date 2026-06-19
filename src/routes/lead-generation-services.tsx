import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import heroImg from "@/assets/lead-generation-service-hero.png.asset.json";

export const Route = createFileRoute("/lead-generation-services")({
  head: () =>
    serviceHead({
      path: "/lead-generation-services",
      title: "Lead Generation Services | B2B & LinkedIn Leads | SMad Works",
      description:
        "Targeted lead generation services — B2B databases, LinkedIn leads, industry research and verified contacts by SMad Works.",
      serviceType: "Lead Generation Services",
    }),
  component: () => (
    <ServicePage
      illustration={
        <img
          src={heroImg.url}
          alt="SMad Works Lead Generation Services poster showing target audience research, outreach, landing pages and automation tools"
          className="w-full rounded-3xl border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      }
      eyebrow="Lead Generation"
      title="Lead Generation Services"
      headline="Find Your Next Customers Faster"
      description="Verified, targeted leads ready for outreach — built specifically around your ideal customer profile."
      benefits={["Verified emails & numbers", "ICP-aligned targeting", "Fast turnaround", "Multi-channel ready"]}
      ctaPrimary="Generate More Leads"
      whatsappMessage="Hi SMad Works, I need lead generation for my business."
      services={[
        { title: "Research", items: ["Target Research", "Industry Research", "Competitor Mapping"] },
        { title: "Data", items: ["Customer Database Creation", "B2B Leads", "LinkedIn Leads"] },
        { title: "Quality", items: ["Lead Qualification", "Email Verification", "Enrichment"] },
      ]}
      process={[
        { step: "01", title: "Research" },
        { step: "02", title: "Collect" },
        { step: "03", title: "Verify" },
        { step: "04", title: "Deliver" },
      ]}
      faqs={[
        { q: "What format do you deliver?", a: "Clean CSV/Sheets with name, role, company, email, LinkedIn and notes." },
        { q: "Is the data verified?", a: "Yes — multi-step verification before delivery." },
        { q: "Can you handle outreach too?", a: "Yes, paired with our Lead Conversion service." },
        { q: "Which regions do you cover?", a: "Global — US, UK, EU, APAC and India." },
      ]}
      related={[
        { to: "/lead-conversion-services", title: "Lead Conversion" },
        { to: "/business-automation", title: "Business Automation" },
        { to: "/operations-management-services", title: "Operations Management" },
      ]}
    />
  ),
});
