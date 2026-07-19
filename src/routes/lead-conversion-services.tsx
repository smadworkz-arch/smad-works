import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { FunnelScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/lead-conversion-services")({
  head: () =>
    serviceHead({
      path: "/lead-conversion-services",
      title: "Lead Conversion Services | Sales Funnels & WhatsApp CRM | SMad Works",
      description: "Convert leads into paying customers with high-converting funnels, WhatsApp automation, CRM setup and AI sales assistants.",
      serviceType: "Lead Conversion Services",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="Lead Conversion"
      title={<>Turn leads into <span className="text-gold">paying customers.</span></>}
      subtitle="High-converting funnels, follow-up automation and AI sales assistants — engineered around your sales process."
      primaryCta={{ label: "Convert more customers", whatsappMessage: "Hi SMad Works, I want to improve my lead conversion." }}
      scene={<FunnelScene />}
      metrics={[
        { k: "2–4×", v: "Higher close rate" },
        { k: "<5min", v: "Response time" },
        { k: "24/7", v: "Follow-ups" },
        { k: "100%", v: "CRM visibility" },
      ]}
      capabilities={[
        { t: "Sales Funnels", d: "Landing pages, offers and conversion flows." },
        { t: "WhatsApp Funnels", d: "Chat-driven qualification and closing." },
        { t: "CRM Setup", d: "Pipelines, automations and dashboards." },
        { t: "Follow-up Automation", d: "Multi-touch sequences across channels." },
        { t: "AI Sales Assistant", d: "24/7 AI that qualifies and books calls." },
        { t: "Customer Nurturing", d: "Long-term email and messaging journeys." },
      ]}
      process={[
        { n: "01", t: "Audit", d: "Map current funnel and drop-off points." },
        { n: "02", t: "Design", d: "New offers, pages and messaging." },
        { n: "03", t: "Build", d: "Funnels, CRM, automations, AI agents." },
        { n: "04", t: "Launch", d: "A/B test and iterate weekly." },
        { n: "05", t: "Report", d: "Weekly conversion dashboards." },
      ]}
      tools={[
        { name: "HubSpot", domain: "hubspot.com" },
        { name: "GoHighLevel", domain: "gohighlevel.com" },
        { name: "Pipedrive", domain: "pipedrive.com" },
        { name: "Zoho CRM", domain: "zoho.com" },
        { name: "WhatsApp Cloud API", domain: "whatsapp.com" },
        { name: "Twilio", domain: "twilio.com" },
        { name: "OpenAI", domain: "openai.com" },
      ]}
      industries={["Coaching", "Real Estate", "Healthcare", "SaaS", "Agencies", "E-commerce"]}
      faqs={[
        { q: "Which CRMs do you set up?", a: "HubSpot, Zoho, Pipedrive, GoHighLevel and custom CRMs." },
        { q: "Can you integrate WhatsApp?", a: "Yes — official WhatsApp Business API with automated flows." },
        { q: "Do you write the copy?", a: "Yes — conversion-focused copy is included." },
        { q: "How is conversion measured?", a: "Per-stage analytics dashboards delivered weekly." },
      ]}
      finalCtaTitle={<>Close more. <span className="text-gold">Without hiring.</span></>}
      related={[
        { to: "/lead-generation-services", title: "Lead Generation" },
        { to: "/business-automation", title: "Business Automation" },
        { to: "/ai-content-generation", title: "AI Content Generation" },
      ]}
    />
  ),
});
