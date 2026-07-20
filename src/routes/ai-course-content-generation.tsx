import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I want to build a course with AI content.");

const services = [
  { t: "Course Planning", d: "Outcomes, modules, learner personas — mapped in a day.", icon: "◐" },
  { t: "Lesson Writing", d: "Structured, engaging lessons in your voice.", icon: "◑" },
  { t: "PPT Creation", d: "Ready-to-teach decks with visuals and speaker notes.", icon: "◒" },
  { t: "Study Materials", d: "Worksheets, cheatsheets and reference guides.", icon: "◓" },
  { t: "Quiz Generation", d: "MCQs, scenarios and rubrics that actually assess.", icon: "◔" },
  { t: "Multi-language", d: "Localised delivery across languages on demand.", icon: "◕" },
];

const chapters = ["Intro", "Module 1", "Module 2", "Assessments", "Case Study", "Wrap-up"];

const faqs = [
  { q: "Will content be original?", a: "Yes — generated, reviewed and edited to meet originality standards." },
  { q: "Video lessons?", a: "Yes, paired with our AI Content Generation service." },
  { q: "Which platforms?", a: "Teachable, Thinkific, Kajabi, LMS systems and private portals." },
  { q: "Localization?", a: "Yes — multi-language delivery on request." },
];

export const Route = createFileRoute("/ai-course-content-generation")({
  head: () =>
    serviceHead({
      path: "/ai-course-content-generation",
      title: "AI Course Content Generation | Modules, PPTs & Quizzes | SMad Works",
      description:
        "Build complete courses faster with AI — planning, modules, lessons, PPTs, quizzes and study materials.",
      serviceType: "AI Course Content Generation",
    }),
  component: CoursePage,
});

function CoursePage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="AI Course Content"
        title={<>Ship a course<br /><span className="text-gold">in a week.</span></>}
        subtitle="A production pipeline for educators — planning, lessons, decks, quizzes and materials generated with AI and reviewed by humans."
        primaryCta={{ label: "Build my course", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See what's inside", href: "#chapters" }}
        scene={<BookUnfoldScene />}
      />

      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="What we generate" title={<>Everything a learner <span className="text-gold">actually needs.</span></>} />
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {services.map(s => (
              <StaggerItem key={s.t}>
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-gold/40">
                  <div className="text-3xl text-gold">{s.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.d}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Flipping chapters */}
      <section id="chapters" className="border-t border-white/5 bg-[#0a0a0d] py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Course structure" title={<>Chapters that <span className="text-gold">unfold.</span></>} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c, i) => (
              <motion.div
                key={c}
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Chapter {i + 1}</div>
                <div className="mt-2 text-2xl font-semibold">{c}</div>
                <div className="mt-4 space-y-1.5">
                  {Array.from({ length: 4 }).map((_, k) => (
                    <div key={k} className="h-1 rounded bg-white/10" style={{ width: `${60 + Math.random() * 30}%` }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Your course, <span className="text-gold">ready to teach.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function BookUnfoldScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12] p-8" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />
      <div className="relative flex h-full items-center justify-center">
        {[-1, 0, 1].map((i) => (
          <motion.div
            key={i}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: i === 0 ? 0 : i * 25 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.3 }}
            className="mx-1 h-64 w-40 rounded-md border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
            style={{ transformOrigin: i < 0 ? "right center" : i > 0 ? "left center" : "center", transformStyle: "preserve-3d" }}
          >
            <div className="h-1 w-16 rounded bg-gold" />
            <div className="mt-3 space-y-1.5">
              {Array.from({ length: 10 }).map((_, k) => (
                <div key={k} className="h-1 rounded bg-white/15" style={{ width: `${50 + Math.random() * 40}%` }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
