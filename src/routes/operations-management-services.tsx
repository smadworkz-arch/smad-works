import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I need help streamlining my operations.");

const services = [
  { t: "Process Design", d: "Blueprint SOPs, workflows and RACI matrices that scale.", icon: "◆" },
  { t: "SOP & Playbooks", d: "Documented, versioned, searchable operating manuals.", icon: "◇" },
  { t: "Team Structuring", d: "Roles, cadences and accountability that fit your stage.", icon: "◈" },
  { t: "KPI Dashboards", d: "Live operational metrics — one screen, one truth.", icon: "◉" },
  { t: "Tooling & Stack", d: "Notion, ClickUp, Asana, Slack — configured end-to-end.", icon: "○" },
  { t: "Change Management", d: "Rollout, training and adoption without the chaos.", icon: "●" },
];

const stages = [
  { s: "Chaos", d: "Ad-hoc work, tribal knowledge, everything in DMs." },
  { s: "Aware", d: "Docs exist. Nobody reads them." },
  { s: "Managed", d: "SOPs live. Owners defined. Cadences run." },
  { s: "Predictable", d: "Dashboards drive decisions. Delivery is boring." },
  { s: "Optimising", d: "Continuous improvement, weekly." },
];

const faqs = [
  { q: "How fast do we see results?", a: "First SOP + dashboard live within 2 weeks. Meaningful KPI shift in 4–6 weeks." },
  { q: "Which tools do you set up?", a: "Notion, ClickUp, Asana, Monday, Slack, Google Workspace — your choice." },
  { q: "Do you train the team?", a: "Yes — live sessions, recordings and adoption tracking." },
  { q: "Ongoing support?", a: "Monthly retainers available for continuous ops improvement." },
];

export const Route = createFileRoute("/operations-management-services")({
  head: () =>
    serviceHead({
      path: "/operations-management-services",
      title: "Operations Management Services | SOPs, Dashboards & Systems | SMad Works",
      description:
        "Enterprise-grade operations consulting — SOPs, KPI dashboards, tooling and change management to make delivery predictable and scalable.",
      serviceType: "Operations Management",
    }),
  component: OpsPage,
});

function OpsPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Operations Management"
        title={<>Ship on time.<br /><span className="text-gold">Every time.</span></>}
        subtitle="We install the operating system your company is missing — SOPs, dashboards, ownership and cadences that turn heroic effort into predictable delivery."
        primaryCta={{ label: "Streamline my ops", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "How it works", href: "#pipeline" }}
        scene={<OpsPipelineScene />}
        meta={
          <div className="grid max-w-md grid-cols-3 gap-4">
            {[{k:"2 wks",v:"First win"},{k:"40%",v:"Faster delivery"},{k:"24/7",v:"Visibility"}].map(o => (
              <div key={o.v} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center backdrop-blur">
                <div className="text-lg font-semibold text-gold md:text-xl">{o.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/50">{o.v}</div>
              </div>
            ))}
          </div>
        }
      />

      {/* Kanban flow */}
      <section id="pipeline" className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="The flow" title={<>Work moves. <span className="text-gold">Nothing stalls.</span></>} subtitle="A live operations pipeline you can actually see." />
          <KanbanFlow />
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="What we install" title={<>Your <span className="text-gold">operating stack.</span></>} />
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

      {/* Maturity ladder */}
      <section className="border-t border-white/5 bg-[#0a0a0d] py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Maturity model" title={<>From chaos to <span className="text-gold">clockwork.</span></>} />
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {stages.map((st, i) => (
              <Reveal key={st.s} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Stage {i + 1}</div>
                  <div className="mt-2 text-lg font-semibold">{st.s}</div>
                  <p className="mt-2 text-xs text-white/55">{st.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Make delivery <span className="text-gold">predictable.</span></>} subtitle="We'll audit your ops and ship the first SOP + dashboard in two weeks." whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function OpsPipelineScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />
      <div className="relative grid h-full grid-cols-3 gap-3">
        {["Backlog", "Doing", "Done"].map((col, ci) => (
          <div key={col} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-gold/80">{col}</div>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (ci * 4 + i) * 0.15, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                  className="rounded-md border border-white/10 bg-black/40 p-2"
                >
                  <div className="h-1 w-8 rounded bg-gold/60" />
                  <div className="mt-1.5 h-1 w-full rounded bg-white/10" />
                  <div className="mt-1 h-1 w-2/3 rounded bg-white/10" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KanbanFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  return (
    <div ref={ref} className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0d] p-8">
      <motion.div style={{ x }} className="flex gap-4">
        {["Intake", "Triage", "Plan", "Build", "Review", "Ship", "Retro", "Improve"].map((step, i) => (
          <div key={step} className="min-w-[220px] rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Step {i + 1}</div>
            <div className="mt-2 text-lg font-semibold">{step}</div>
            <div className="mt-3 h-1 w-full overflow-hidden rounded bg-white/10">
              <div className="h-full w-3/4 rounded bg-gradient-to-r from-gold to-transparent" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
