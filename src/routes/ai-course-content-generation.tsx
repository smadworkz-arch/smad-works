import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import heroImg from "@/assets/ai-course-content-generation-hero.png.asset.json";

export const Route = createFileRoute("/ai-course-content-generation")({
  head: () =>
    serviceHead({
      path: "/ai-course-content-generation",
      title: "AI Course Content Generation | Modules, PPTs & Quizzes | SMad Works",
      description:
        "Build complete courses faster with AI — course planning, modules, lessons, PPTs, quizzes and study materials by SMad Works.",
      serviceType: "AI Course Content Generation",
    }),
  component: () => (
    <ServicePage
      illustration={
        <img
          src={heroImg.url}
          alt="SMad Works AI Course Content Generation poster showing course outlines, lesson content, quizzes and presentations"
          className="w-full rounded-3xl border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      }
      eyebrow="AI Course Content"
      title="AI Course Content Generation"
      headline="Build Complete Courses Faster Using AI"
      description="Helping educators and businesses create structured learning content using AI."
      benefits={["Ship courses 5× faster", "Consistent structure", "Engaging assessments", "Ready-to-teach decks"]}
      ctaPrimary="Create Your Course"
      whatsappMessage="Hi SMad Works, I want to build a course using AI content."
      services={[
        { title: "Planning", items: ["Course Planning", "Module Creation", "Learning Objectives"] },
        { title: "Content", items: ["Lesson Writing", "PPT Creation", "Study Materials"] },
        { title: "Assessment", items: ["Quiz Generation", "Assignments", "Rubrics"] },
      ]}
      industries={["Teachers", "Coaching Institutes", "Online Educators", "Corporate Training"]}
      faqs={[
        { q: "Will content be original?", a: "Yes — generated, reviewed and edited to meet originality standards." },
        { q: "Do you create video lessons?", a: "Yes, paired with our AI Content Generation service." },
        { q: "Which platforms do you publish to?", a: "Teachable, Thinkific, Kajabi, LMS systems and private portals." },
        { q: "Can you localize content?", a: "Yes — multi-language delivery available on request." },
      ]}
      related={[
        { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
        { to: "/ai-automation-course", title: "AI Automation Course" },
        { to: "/ai-content-generation", title: "AI Content Generation" },
      ]}
    />
  ),
});
