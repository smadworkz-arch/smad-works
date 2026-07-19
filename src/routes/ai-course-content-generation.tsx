import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { CourseModuleScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/ai-course-content-generation")({
  head: () =>
    serviceHead({
      path: "/ai-course-content-generation",
      title: "AI Course Content Generation | Modules, PPTs & Quizzes | SMad Works",
      description: "Build complete courses faster with AI — course planning, modules, lessons, PPTs, quizzes and study materials.",
      serviceType: "AI Course Content Generation",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="AI Course Content"
      title={<>Build complete courses <span className="text-gold">5× faster.</span></>}
      subtitle="Structured, engaging, ready-to-teach learning content — planning, modules, PPTs, quizzes and study materials, powered by AI."
      primaryCta={{ label: "Create your course", whatsappMessage: "Hi SMad Works, I want to build a course using AI content." }}
      scene={<CourseModuleScene />}
      metrics={[
        { k: "5×", v: "Faster shipping" },
        { k: "50+", v: "Courses built" },
        { k: "100%", v: "Custom to you" },
        { k: "LMS", v: "Ready format" },
      ]}
      capabilities={[
        { t: "Course Planning", d: "Outlines, learning objectives, module maps." },
        { t: "Module Creation", d: "Structured chapters with pedagogy in mind." },
        { t: "Lesson Writing", d: "Engaging, original lesson scripts and notes." },
        { t: "PPT Creation", d: "Ready-to-teach presentation decks." },
        { t: "Quizzes & Assessments", d: "MCQs, assignments and rubrics." },
        { t: "Study Materials", d: "Workbooks, cheatsheets and reference guides." },
      ]}
      process={[
        { n: "01", t: "Scope", d: "Audience, goals, level and format." },
        { n: "02", t: "Outline", d: "Modules, lessons and assessment blueprint." },
        { n: "03", t: "Generate", d: "Content, PPTs and assessments via AI." },
        { n: "04", t: "Review", d: "Editorial pass for accuracy and voice." },
        { n: "05", t: "Deliver", d: "LMS-ready package with source files." },
      ]}
      tools={[
        { name: "OpenAI", domain: "openai.com" },
        { name: "Claude", domain: "anthropic.com" },
        { name: "Canva", domain: "canva.com" },
        { name: "Notion", domain: "notion.so" },
        { name: "Teachable", domain: "teachable.com" },
        { name: "Thinkific", domain: "thinkific.com" },
        { name: "Kajabi", domain: "kajabi.com" },
      ]}
      industries={["Teachers", "Coaching Institutes", "Online Educators", "Corporate Training", "EdTech"]}
      faqs={[
        { q: "Will content be original?", a: "Yes — generated, reviewed and edited to meet originality standards." },
        { q: "Do you create video lessons?", a: "Yes, paired with our AI Content Generation service." },
        { q: "Which platforms do you publish to?", a: "Teachable, Thinkific, Kajabi, LMS systems and private portals." },
        { q: "Can you localize content?", a: "Yes — multi-language delivery available on request." },
      ]}
      finalCtaTitle={<>Launch your course <span className="text-gold">this month.</span></>}
      related={[
        { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
        { to: "/ai-automation-course", title: "AI Automation Course" },
        { to: "/ai-content-generation", title: "AI Content Generation" },
      ]}
    />
  ),
});
