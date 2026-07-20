import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I want to join the AI Automation course.");

const modules = [
  { t: "AI Agents", d: "Design agents that reason, plan and use tools.", icon: "◆" },
  { t: "n8n Workflows", d: "Build production workflows visually — nodes, webhooks, error handling.", icon: "◈" },
  { t: "WhatsApp & CRM", d: "Business-grade automations customers actually feel.", icon: "◉" },
  { t: "APIs & Webhooks", d: "Connect anything to anything, securely.", icon: "○" },
  { t: "Prompt Engineering", d: "System prompts, function-calling and evals.", icon: "●" },
  { t: "Real Projects", d: "Ship 3 real client-grade automations by the end.", icon: "✦" },
];

const faqs = [
  { q: "For whom?", a: "Freelancers, founders and devs who want to sell automation." },
  { q: "Prerequisites?", a: "Basic tech comfort. No coding required — code helps, isn't required." },
  { q: "Live mentoring?", a: "Yes — weekly office hours + private community." },
  { q: "Tools cost?", a: "Free tiers cover most of the course; paid tools optional." },
];

export const Route = createFileRoute("/ai-automation-course")({
  head: () =>
    serviceHead({
      path: "/ai-automation-course",
      title: "AI Automation Course | n8n, AI Agents & WhatsApp | SMad Works",
      description:
        "Learn to build AI automation systems — n8n workflows, AI agents, WhatsApp & CRM automations, real business projects.",
      serviceType: "AI Automation Course",
    }),
  component: AutomationCoursePage,
});

function AutomationCoursePage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Course"
        title={<>Build the systems<br /><span className="text-gold">businesses buy.</span></>}
        subtitle="A hands-on path from zero to shipping AI automations — agents, n8n, WhatsApp and CRM — with real projects and mentoring."
        primaryCta={{ label: "Start learning", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See circuit", href: "#circuit" }}
        scene={<CircuitBoardScene />}
      />

      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Curriculum" title={<>Six modules. <span className="text-gold">One automation engineer.</span></>} />
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

      <section id="circuit" className="border-t border-white/5 bg-[#0a0a0d] py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="How signals flow" title={<>A live <span className="text-gold">circuit board.</span></>} />
          <CircuitGrid />
        </div>
      </section>

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Automations that <span className="text-gold">pay you back.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function CircuitBoardScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[80, 160, 240, 320].map((y) => (
          <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
        ))}
        {[80, 160, 240, 320].map((x) => (
          <line key={x} x1={x} y1="20" y2="380" x2={x} stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
        ))}
        {[[80,80],[240,80],[160,160],[80,240],[320,240],[240,320]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="#d4af37" opacity="0.9">
            <animate attributeName="r" values="6;10;6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {[0, 1, 2].map((i) => (
          <rect key={i} x="0" y={80 + i * 80} width="60" height="2" fill="url(#glow)">
            <animate attributeName="x" values="0;340;0" dur="4s" begin={`${i * 1}s`} repeatCount="indefinite" />
          </rect>
        ))}
      </svg>
    </div>
  );
}

function CircuitGrid() {
  const nodes = ["Trigger", "AI Agent", "CRM", "WhatsApp", "Sheet", "Notify"];
  return (
    <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {nodes.map((n, i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-xl border border-gold/40 bg-black/60 p-5 text-center backdrop-blur"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Node {i + 1}</div>
            <div className="mt-2 font-semibold">{n}</div>
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              className="mx-auto mt-3 h-1 w-8 rounded-full bg-gold"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
