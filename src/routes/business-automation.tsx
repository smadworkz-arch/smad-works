import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import heroImg from "@/assets/business-automation-hero.png.asset.json";

export const Route = createFileRoute("/business-automation")({
  head: () =>
    serviceHead({
      path: "/business-automation",
      title: "Business Automation Services | WhatsApp, AI Agents & CRM | SMad Works",
      description:
        "Automate WhatsApp, calls, CRM and workflows with SMad Works. Intelligent business automation systems to save time, reduce cost and scale faster.",
      serviceType: "Business Automation",
    }),
  component: () => (
    <ServicePage
      illustration={
        <img
          src={heroImg.url}
          alt="SMad Works Business Automation Solutions — WhatsApp, AI chatbots, CRM and workflow automation"
          className="w-full rounded-3xl border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      }
      eyebrow="Business Automation"
      title="Business Automation Solutions"
      headline="Automate Your Business. Save Time. Scale Faster."
      description="SMad Works helps businesses replace repetitive manual tasks with intelligent automation systems designed to improve productivity and customer experience."
      benefits={[
        "Cut manual work by 60–80%",
        "24/7 customer engagement",
        "Higher lead conversion",
        "Unified CRM & workflows",
      ]}
      ctaPrimary="Automate Your Business Today"
      whatsappMessage="Hi SMad Works, I want to automate my business workflows."
      services={[
        { title: "Conversational AI", items: ["WhatsApp Automation", "AI Chatbots", "AI Calling Agents"] },
        { title: "CRM & Workflows", items: ["CRM Automation", "Workflow Automation", "Appointment Automation"] },
        { title: "Operations", items: ["Customer Support Automation", "Business Process Automation", "Reporting & Analytics"] },
      ]}
      process={[
        { step: "01", title: "Analyze Workflow", desc: "We map your current processes to find automation opportunities." },
        { step: "02", title: "Design Automation Strategy", desc: "Tailored blueprint aligned to your business goals." },
        { step: "03", title: "Build AI Powered System", desc: "End-to-end build using best-in-class AI tools." },
        { step: "04", title: "Integrate Tools", desc: "Connect WhatsApp, CRM, calendars, sheets and more." },
        { step: "05", title: "Test & Optimize", desc: "Rigorous testing across real workflows and edge cases." },
        { step: "06", title: "Launch Automation", desc: "Go live with training, monitoring and support." },
      ]}
      industries={["Healthcare", "Real Estate", "Education", "E-commerce", "Small Businesses"]}
      faqs={[
        { q: "How long does it take to set up automation?", a: "Most projects go live in 1–3 weeks depending on scope and integrations." },
        { q: "Will it work with my existing CRM?", a: "Yes. We integrate with HubSpot, Zoho, Salesforce, Google Sheets, Notion and most major tools." },
        { q: "Do you handle WhatsApp Business API?", a: "Yes — we set up official Cloud API, templates and approvals end-to-end." },
        { q: "What is the typical ROI?", a: "Clients see 3–10× ROI from reduced manual work and improved conversion." },
      ]}
      related={[
        { to: "/lead-generation-services", title: "Lead Generation" },
        { to: "/lead-conversion-services", title: "Lead Conversion" },
        { to: "/ai-automation-course", title: "AI Automation Course" },
      ]}
    />
  ),
});
