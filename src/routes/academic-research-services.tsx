import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I need help with an academic research project.");

const services = [
  { t: "Research Assistance", d: "Literature review, problem framing, methodology design.", icon: "❋" },
  { t: "Dissertation Guidance", d: "Structure, chapter reviews and defense preparation.", icon: "❊" },
  { t: "AI / ML Projects", d: "Novel implementations with reproducible experiments.", icon: "❉" },
  { t: "Data Analytics", d: "EDA, feature engineering, publishable visualisations.", icon: "❈" },
  { t: "Implementation", d: "Full code + documentation you can defend confidently.", icon: "❇" },
  { t: "Publication Support", d: "Shape work into conference / journal-ready papers.", icon: "❆" },
];

const domains = ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Science", "Web Tech", "IoT", "Cloud"];

const faqs = [
  { q: "Do you write the dissertation?", a: "We guide, structure and review. Final writing remains yours to preserve academic integrity." },
  { q: "Which domains?", a: "AI, ML, Data Science, Web, Cloud, IoT and adjacent areas." },
  { q: "Will I get source code?", a: "Yes — clean, documented code with walkthrough sessions." },
  { q: "Publication support?", a: "Yes — conference and journal formatting, review responses." },
];

export const Route = createFileRoute("/academic-research-services")({
  head: () =>
    serviceHead({
      path: "/academic-research-services",
      title: "Academic Research Services | AI & ML Project Help | SMad Works",
      description:
        "Academic research support for students and researchers — AI/ML projects, dissertation guidance, implementation and publication help.",
      serviceType: "Academic Research Services",
    }),
  component: AcademicPage,
});

function AcademicPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Academic Research"
        title={<>From citation<br /><span className="text-gold">to publication.</span></>}
        subtitle="End-to-end research mentorship — problem framing, novel implementation, documentation and defense preparation for AI, ML and data-driven projects."
        primaryCta={{ label: "Start my project", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See domains", href: "#domains" }}
        scene={<PaperStackScene />}
        meta={
          <div className="grid max-w-md grid-cols-3 gap-4">
            {[{k:"200+",v:"Projects mentored"},{k:"98%",v:"On-time defense"},{k:"12+",v:"Domains"}].map(o => (
              <div key={o.v} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center backdrop-blur">
                <div className="text-lg font-semibold text-gold md:text-xl">{o.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/50">{o.v}</div>
              </div>
            ))}
          </div>
        }
      />

      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="What we support" title={<>Research, <span className="text-gold">end-to-end.</span></>} />
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

      {/* Citation constellation */}
      <section id="domains" className="relative border-t border-white/5 bg-[#0a0a0d] py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Domains" title={<>Ideas that <span className="text-gold">connect.</span></>} />
          <div className="relative mx-auto mt-14 h-[420px] max-w-3xl">
            {domains.map((d, i) => {
              const a = (i / domains.length) * Math.PI * 2;
              const r = 160;
              return (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-black/60 px-3 py-1.5 text-xs text-white/85 backdrop-blur"
                  style={{ transform: `translate(calc(-50% + ${Math.cos(a) * r}px), calc(-50% + ${Math.sin(a) * r}px))` }}
                >
                  {d}
                </motion.div>
              );
            })}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="h-16 w-16 rounded-full border border-gold bg-gold/10 shadow-[0_0_50px_rgba(212,175,55,0.6)]" />
            </motion.div>
          </div>
        </div>
      </section>

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Turn your idea into <span className="text-gold">defensible research.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function PaperStackScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12] p-8">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(212,175,55,0.15),transparent_70%)]" />
      <div className="relative flex h-full items-center justify-center" style={{ perspective: "1200px" }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            className="absolute h-64 w-48 rounded-md border border-white/10 bg-white/[0.04] p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur"
            style={{ transform: `rotateX(55deg) translateY(${i * -18}px) translateZ(${i * 12}px) rotateZ(${(i - 2) * 4}deg)` }}
          >
            <div className="h-1 w-16 rounded bg-gold" />
            <div className="mt-2 space-y-1">
              {Array.from({ length: 8 }).map((_, k) => (
                <div key={k} className="h-1 rounded bg-white/15" style={{ width: `${60 + Math.random() * 30}%` }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
