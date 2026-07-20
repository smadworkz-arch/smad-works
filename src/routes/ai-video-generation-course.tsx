import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I want to join the AI Video Generation course.");

const modules = [
  { t: "AI Video Tools", d: "Runway, Pika, Sora, Kling — pick the right tool for the shot.", icon: "▶" },
  { t: "Prompt Writing", d: "Cinematic prompts that actually render what you imagine.", icon: "❍" },
  { t: "Image → Video", d: "Turn stills into motion with control and consistency.", icon: "↻" },
  { t: "Editing Workflow", d: "Cut, colour, sound — end-to-end delivery pipeline.", icon: "✂" },
  { t: "Voice & Music", d: "AI voiceovers, dubs and licensed score.", icon: "♪" },
  { t: "Monetization", d: "Client packaging, pricing and delivery playbook.", icon: "$" },
];

const faqs = [
  { q: "Prior experience needed?", a: "No — starts from basics and progresses to advanced workflows." },
  { q: "Live or recorded?", a: "Hybrid — recorded lessons plus live mentoring sessions." },
  { q: "Certificate?", a: "Yes, on successful completion of projects." },
  { q: "What tools?", a: "A laptop and free / freemium AI tools we recommend." },
];

export const Route = createFileRoute("/ai-video-generation-course")({
  head: () =>
    serviceHead({
      path: "/ai-video-generation-course",
      title: "AI Video Generation Course | Learn AI Video Creation | SMad Works",
      description:
        "Learn to create professional videos with AI — tools, prompts, image-to-video, editing and monetization.",
      serviceType: "AI Video Generation Course",
    }),
  component: VideoCoursePage,
});

function VideoCoursePage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Course"
        title={<>Direct films<br /><span className="text-gold">with prompts.</span></>}
        subtitle="Master modern AI video — Runway, Pika, Sora, Kling — and the editing craft to ship client-ready cinematic reels."
        primaryCta={{ label: "Join the course", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See modules", href: "#modules" }}
        scene={<FilmStripHeroScene />}
      />

      <section id="modules" className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Curriculum" title={<>Six modules. <span className="text-gold">One filmmaker.</span></>} />
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {modules.map(m => (
              <StaggerItem key={m.t}>
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-gold/40">
                  <div className="text-3xl text-gold">{m.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{m.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{m.d}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <FilmStripScroll />

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Your name in the <span className="text-gold">end credits.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function FilmStripHeroScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />
      <div className="absolute inset-y-0 left-0 w-6 border-r border-white/10 bg-black/60">
        {Array.from({ length: 12 }).map((_, i) => <div key={i} className="mx-1 my-2 h-4 rounded-sm border border-white/20" />)}
      </div>
      <div className="absolute inset-y-0 right-0 w-6 border-l border-white/10 bg-black/60">
        {Array.from({ length: 12 }).map((_, i) => <div key={i} className="mx-1 my-2 h-4 rounded-sm border border-white/20" />)}
      </div>
      <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 8, repeat: Infinity }} className="absolute inset-x-8 top-4 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="aspect-video rounded-md border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
            <div className="flex h-full items-center justify-center">
              <div className="h-8 w-8 rounded-full border border-gold bg-gold/20" />
            </div>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-x-0 top-1/2 h-px bg-gold shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
    </div>
  );
}

function FilmStripScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);
  return (
    <section ref={ref} className="border-t border-white/5 bg-[#0a0a0d] py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Frame by frame" title={<>Scroll <span className="text-gold">the reel.</span></>} />
      </div>
      <div className="mt-14 overflow-hidden py-4">
        <motion.div style={{ x }} className="flex gap-3">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="relative flex min-w-[220px] flex-col overflow-hidden rounded-lg border border-white/10 bg-black/40">
              <div className="aspect-video bg-gradient-to-br from-gold/20 via-white/5 to-black/60" />
              <div className="flex items-center justify-between border-t border-white/10 px-2 py-1 font-mono text-[10px] text-white/50">
                <span>FRAME {String(i + 1).padStart(3, "0")}</span>
                <span className="text-gold">24fps</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
