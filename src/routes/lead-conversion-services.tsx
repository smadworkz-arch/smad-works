import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import heroImg from "@/assets/lead-conversion-service-hero.png.asset.json";

export const Route = createFileRoute("/lead-conversion-services")({
  head: () =>
    serviceHead({
      path: "/lead-conversion-services",
      title: "Lead Conversion Services | Sales Funnels & WhatsApp CRM | SMad Works",
      description:
        "Convert leads into paying customers with sales funnels, WhatsApp automation, CRM setup and AI sales assistants by SMad Works.",
      serviceType: "Lead Conversion Services",
    }),
  component: () => (
    <ServicePage
      illustration={
        <img
          src={heroImg.url}
          alt="SMad Works Lead Conversion Services poster showing funnels, follow-up automation, CRM setup and AI sales assistance"
          className="w-full rounded-3xl border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      }
      eyebrow="Lead Conversion"
      title="Lead Conversion Services"
      headline="Turn Leads Into Paying Customers"
      description="High-converting funnels, follow-ups and AI sales assistants built around your sales process."
      benefits={["Higher close rate", "Automated follow-ups", "Faster response", "Full pipeline visibility"]}
      ctaPrimary="Convert More Customers"
      whatsappMessage="Hi SMad Works, I want to improve my lead conversion."
      services={[
        { title: "Funnels", items: ["Sales Funnel Setup", "WhatsApp Funnels", "Landing Pages"] },
        { title: "Automation", items: ["Follow-up Automation", "CRM Setup", "AI Sales Assistant"] },
        { title: "Nurturing", items: ["Customer Nurturing", "Email Sequences", "Re-engagement"] },
      ]}
      faqs={[
        { q: "Which CRMs do you set up?", a: "HubSpot, Zoho, Pipedrive, GoHighLevel and custom CRMs." },
        { q: "Can you integrate WhatsApp?", a: "Yes — official WhatsApp Business API with automated flows." },
        { q: "Do you write the copy?", a: "Yes — conversion-focused copy is included." },
        { q: "How is conversion measured?", a: "Per-stage analytics dashboards delivered weekly." },
      ]}
      related={[
        { to: "/lead-generation-services", title: "Lead Generation" },
        { to: "/business-automation", title: "Business Automation" },
        { to: "/ai-content-generation", title: "AI Content Generation" },
      ]}
    />
  ),
});
