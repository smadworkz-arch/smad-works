import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { FilmStripScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/ai-video-generation-course")({
  head: () =>
    serviceHead({
      path: "/ai-video-generation-course",
      title: "AI Video Generation Course | Learn AI Video Creation | SMad Works",
      description: "Learn to create professional videos with AI — tools, prompts, image-to-video, editing and monetization strategies.",
      serviceType: "AI Video Generation Course",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="AI Video Course"
      title={<>Create pro videos <span className="text-gold">using AI.</span></>}
      subtitle="A hands-on program on modern AI video creation — tools, prompting, image-to-video, editing and monetization."
      primaryCta={{ label: "Enroll in the course", whatsappMessage: "Hi SMad Works, I want to join the AI Video Generation course." }}
      scene={<FilmStripScene />}
      metrics={[
        { k: "8+", v: "AI tools" },
        { k: "40+", v: "Hours" },
        { k: "10+", v: "Projects" },
        { k: "Live", v: "Mentorship" },
      ]}
      capabilities={[
        { t: "AI Video Tools", d: "Runway, Pika, Kling, Sora, HeyGen and more." },
        { t: "Prompt Engineering", d: "Structured prompts for cinematic output." },
        { t: "Image-to-Video", d: "Turn stills into motion sequences." },
        { t: "Editing Workflow", d: "Cut, color, sound and pacing." },
        { t: "Reels & Shorts", d: "Verticals for IG, TikTok, YouTube Shorts." },
        { t: "Monetization", d: "Sell services, create courses, agency setup." },
      ]}
      process={[
        { n: "01", t: "Foundations", d: "AI video ecosystem, tools and use cases." },
        { n: "02", t: "Practice", d: "Guided projects across formats." },
        { n: "03", t: "Craft", d: "Editing, sound design and pacing." },
        { n: "04", t: "Distribute", d: "Publishing and platform strategy." },
        { n: "05", t: "Monetize", d: "Freelance, agency and course paths." },
      ]}
      tools={[
        { name: "Runway", domain: "runwayml.com" },
        { name: "Pika", domain: "pika.art" },
        { name: "Kling", domain: "klingai.com" },
        { name: "HeyGen", domain: "heygen.com" },
        { name: "ElevenLabs", domain: "elevenlabs.io" },
        { name: "CapCut", domain: "capcut.com" },
        { name: "Premiere Pro", domain: "adobe.com" },
      ]}
      industries={["Content Creators", "Marketers", "Agencies", "Educators", "Founders"]}
      faqs={[
        { q: "Is this beginner friendly?", a: "Yes — no editing experience needed. We start from fundamentals." },
        { q: "Live or recorded?", a: "Recorded modules + weekly live mentorship sessions." },
        { q: "Do I get certification?", a: "Yes — certificate on completion of projects." },
        { q: "Which platforms are covered?", a: "Instagram Reels, TikTok, YouTube Shorts, LinkedIn video." },
      ]}
      finalCtaTitle={<>Direct your first <span className="text-gold">AI film.</span></>}
      related={[
        { to: "/ai-course-content-generation", title: "AI Course Content" },
        { to: "/ai-automation-course", title: "AI Automation Course" },
        { to: "/video-production-ai-studio", title: "Video Production Studio" },
      ]}
    />
  ),
});
