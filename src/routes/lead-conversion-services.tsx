import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I want to convert more of my leads.");

const services = [
  { t: "Sales Funnels", d: "Multi-step funnels that qualify, nurture and close.", icon: "◆" },
  { t: "WhatsApp Automation", d: "Instant replies, sequences and re-engagement at scale.", icon: "◈" },
  { t: "CRM Setup", d: "Pipelines, stages and follow-up cadences that actually run.", icon: "◉" },
  { t: "AI Sales Agents", d: "24/7 assistants that qualify, quote and book calls.", icon: "○" },
  { t: "Landing Pages", d: "Conversion-first pages with A/B testing built in.", icon: "●" },
  { t: "Follow-up Sequences", d: "Multi-channel drips that recover 30–40% of cold leads.", icon: "✦" },
];

const funnelSteps = [
  { s: "Lead in", w: "100%", n: "1,000" },
  { s: "Qualified", w: "70%", n: "700" },
  { s: "Booked", w: "40%", n: "400" },
  { s: "Proposal", w: "25%", n: "250" },
  { s: "Closed", w: "15%", n: "150" },
];

const faqs = [
  { q: "Guaranteed conversions?", a: "We optimize for conversion rate — most clients see 2–3× within 60 days." },
  { q: "Do you handle sales calls?", a: "AI agents qualify; your team closes. We can add human SDRs too." },
  { q: "Which CRMs?", a: "HubSpot, Zoho, Pipedrive, GoHighLevel, Salesforce and more." },
  { q: "Setup time?", a: "Funnel + WhatsApp + CRM live within 10 days." },
];

export const Route = createFileRoute("/lead-conversion-services")({
  head: () =>
    serviceHead({
      path: "/lead-conversion-services",
      title: "Lead Conversion Services | Sales Funnels & WhatsApp CRM | SMad Works",
      description:
        "Convert leads into paying customers — sales funnels, WhatsApp automation, CRM setup and AI sales agents.",
      serviceType: "Lead Conversion Services",
    }),
  component: ConversionPage,
});

function ConversionPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Lead Conversion"
        title={<>More clicks into<br /><span className="text-gold">closed customers.</span></>}
        subtitle="A conversion engine — funnels, WhatsApp automation, CRM and AI sales agents — that turns cold leads into paying customers on autopilot."
        primaryCta={{ label: "Convert more leads", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See the funnel", href: "#funnel" }}
        scene={<FunnelBurstScene />}
      />

      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Capabilities" title={<>Every touchpoint. <span className="text-gold">One conversion path.</span></>} />
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

      {/* Funnel visualisation */}
      <section id="funnel" className="border-t border-white/5 bg-[#0a0a0d] py-28">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading eyebrow="The funnel" title={<>1,000 leads → <span className="text-gold">150 customers.</span></>} subtitle="Every stage measured, every drop-off fixed." />
          <div className="mx-auto mt-14 max-w-2xl space-y-3">
            {funnelSteps.map((f, i) => (
              <Reveal key={f.s} delay={i * 0.1}>
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: f.w }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto flex items-center justify-between rounded-full border border-gold/40 bg-gradient-to-r from-gold/20 to-gold/5 px-6 py-4 backdrop-blur"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">{f.s}</span>
                  <span className="text-lg font-semibold text-gold">{f.n}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Stop losing leads. <span className="text-gold">Start closing.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function FunnelBurstScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_80%,rgba(212,175,55,0.2),transparent_70%)]" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <path d="M50 60 L350 60 L260 220 L260 340 L140 340 L140 220 Z" fill="none" stroke="#d4af37" strokeWidth="1.5" opacity="0.6" />
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={i} r="3" fill="#d4af37">
            <animateMotion dur={`${3 + Math.random() * 2}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" path="M200 60 L200 340" />
            <animate attributeName="opacity" values="0;1;0" dur={`${3 + Math.random() * 2}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      {/* Burst */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_40px_rgba(212,175,55,0.9)]"
      />
    </div>
  );
}
