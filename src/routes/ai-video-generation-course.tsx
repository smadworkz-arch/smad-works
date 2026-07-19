import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import heroImg from "@/assets/ai-video-generation-hero.png.asset.json";

export const Route = createFileRoute("/ai-video-generation-course")({
  head: () =>
    serviceHead({
      path: "/ai-video-generation-course",
      title: "AI Video Generation Course | Learn AI Video Creation | SMad Works",
      description:
        "Learn to create professional videos with AI — tools, prompts, image-to-video, editing and monetization. Join SMad Works AI Video course.",
      serviceType: "AI Video Generation Course",
    }),
  component: () => (
    <ServicePage
      illustration={
        <img
          src={heroImg.url}
          alt="SMad Works AI Video Generation Course poster showing AI video tools, image-to-video, editing and monetization"
          className="w-full rounded-3xl border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      }
      eyebrow="Course"
      title="AI Video Generation Course"
      headline="Learn To Create Professional Videos Using AI"
      description="Master AI video tools, prompts and workflows used by modern creators and agencies."
      benefits={["Hands-on projects", "Lifetime updates", "Community access", "Monetization playbook"]}
      ctaPrimary="Join The Course"
      whatsappMessage="Hi SMad Works, I want to join the AI Video Generation course."
      services={[
        { title: "Foundations", items: ["AI Video Tools", "Prompt Writing", "AI Story Creation"] },
        { title: "Production", items: ["Image To Video", "Editing Workflow", "Voice & Music"] },
        { title: "Business", items: ["Content Creation", "Monetization Ideas", "Client Delivery"] },
      ]}
      industries={["Students", "Creators", "Business Owners", "Freelancers"]}
      faqs={[
        { q: "Do I need prior experience?", a: "No — the course starts from the basics and progresses to advanced workflows." },
        { q: "Is it live or recorded?", a: "Hybrid — recorded lessons plus live mentoring sessions." },
        { q: "Will I get certificate?", a: "Yes, on successful completion of projects." },
        { q: "What tools do I need?", a: "A laptop and free/freemium AI tools we recommend." },
      ]}
      related={[
        { to: "/ai-automation-course", title: "AI Automation Course" },
        { to: "/ai-content-generation", title: "AI Content Generation" },
        { to: "/ai-course-content-generation", title: "AI Course Content" },
      ]}
    />
  ),
});
