import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import heroImg from "@/assets/ai-automation-service-hero.png.asset.json";

export const Route = createFileRoute("/ai-automation-course")({
  head: () =>
    serviceHead({
      path: "/ai-automation-course",
      title: "AI Automation Course | n8n, AI Agents & WhatsApp | SMad Works",
      description:
        "Learn to build AI automation systems — n8n workflows, AI agents, WhatsApp & CRM automations and real business projects. By SMad Works.",
      serviceType: "AI Automation Course",
    }),
  component: () => (
    <ServicePage
      illustration={
        <img
          src={heroImg.url}
          alt="SMad Works AI Automation Solutions poster showing WhatsApp automation, AI chatbots, CRM automation and workflow automation"
          className="w-full rounded-3xl border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      }
      eyebrow="Course"
      title="AI Automation Course"
      headline="Learn How To Build AI Automation Systems"
      description="A practical course covering AI agents, n8n, APIs and real business automation projects."
      benefits={["Real client projects", "Live mentoring", "n8n + AI agents", "Job-ready portfolio"]}
      ctaPrimary="Start Learning Automation"
      whatsappMessage="Hi SMad Works, I want to join the AI Automation course."
      services={[
        { title: "AI Agents", items: ["AI Agents", "Prompt Engineering", "Tool Use"] },
        { title: "Workflows", items: ["n8n Automation", "Workflow Building", "API Integration"] },
        { title: "Business", items: ["WhatsApp Automation", "CRM Automation", "Real Business Projects"] },
      ]}
      industries={["Freelancers", "Developers", "Agencies", "Solopreneurs"]}
      faqs={[
        { q: "Do I need to code?", a: "Basic logic is enough. n8n is mostly no-code/low-code." },
        { q: "Will I build live projects?", a: "Yes — multiple end-to-end automations are part of the course." },
        { q: "Is it self-paced?", a: "Hybrid — recorded modules with weekly live sessions." },
        { q: "Do you help with freelancing?", a: "Yes, we cover client acquisition and pricing." },
      ]}
      related={[
        { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
        { to: "/business-automation", title: "Business Automation" },
        { to: "/lead-generation-services", title: "Lead Generation" },
      ]}
    />
  ),
});
