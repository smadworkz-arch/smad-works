import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { CircuitScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/ai-automation-course")({
  head: () =>
    serviceHead({
      path: "/ai-automation-course",
      title: "AI Automation Course | Build Automations With No-Code + AI | SMad Works",
      description: "Learn to build real business automations with n8n, Make, Zapier and AI — WhatsApp bots, agents, CRM flows and more.",
      serviceType: "AI Automation Course",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="AI Automation Course"
      title={<>Build automations that <span className="text-gold">pay you back.</span></>}
      subtitle="A practical program on no-code + AI automation — WhatsApp bots, agents, CRM flows, and productized service delivery."
      primaryCta={{ label: "Enroll in the course", whatsappMessage: "Hi SMad Works, I want to join the AI Automation course." }}
      scene={<CircuitScene />}
      metrics={[
        { k: "12+", v: "Real projects" },
        { k: "6", v: "Tool stacks" },
        { k: "Live", v: "Mentorship" },
        { k: "Job", v: "Ready outcomes" },
      ]}
      capabilities={[
        { t: "n8n & Make", d: "Visual flows connecting any tool." },
        { t: "Zapier + AI", d: "Trigger AI actions from everyday tools." },
        { t: "WhatsApp Bots", d: "Official Cloud API + AI-driven flows." },
        { t: "AI Agents", d: "Autonomous agents that complete tasks." },
        { t: "CRM Automations", d: "Follow-ups, lead scoring, reporting." },
        { t: "Productize", d: "Package flows as sellable services." },
      ]}
      process={[
        { n: "01", t: "Foundations", d: "Automation thinking, APIs, webhooks." },
        { n: "02", t: "No-code", d: "Master n8n, Make, Zapier flows." },
        { n: "03", t: "AI Layer", d: "Add LLMs, prompts and agents." },
        { n: "04", t: "Build", d: "Ship 5+ real client-grade projects." },
        { n: "05", t: "Sell", d: "Packaging, pricing and delivery." },
      ]}
      tools={[
        { name: "n8n", domain: "n8n.io" },
        { name: "Make", domain: "make.com" },
        { name: "Zapier", domain: "zapier.com" },
        { name: "OpenAI", domain: "openai.com" },
        { name: "WhatsApp Cloud API", domain: "whatsapp.com" },
        { name: "Airtable", domain: "airtable.com" },
        { name: "Notion", domain: "notion.so" },
      ]}
      industries={["Freelancers", "Consultants", "Agencies", "SMB Owners", "Career Switchers"]}
      faqs={[
        { q: "Do I need to code?", a: "No — the course is no-code first, with light JS where useful." },
        { q: "Do I get real projects?", a: "Yes — 5+ portfolio-ready builds you can sell." },
        { q: "How long is the course?", a: "8–10 weeks with live weekly mentorship." },
        { q: "Do you help me get clients?", a: "Yes — outreach, positioning and pricing modules included." },
      ]}
      finalCtaTitle={<>Automate anything. <span className="text-gold">Everywhere.</span></>}
      related={[
        { to: "/ai-video-generation-course", title: "AI Video Course" },
        { to: "/ai-course-content-generation", title: "AI Course Content" },
        { to: "/business-automation", title: "Business Automation" },
      ]}
    />
  ),
});
