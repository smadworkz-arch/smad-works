import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I need qualified leads for my business.");

const services = [
  { t: "B2B Databases", d: "Verified prospect lists tailored to your ICP.", icon: "◆" },
  { t: "LinkedIn Leads", d: "Sales Nav + outbound sequences that book meetings.", icon: "◈" },
  { t: "Industry Research", d: "Market maps, decision-maker intel, buying triggers.", icon: "◉" },
  { t: "Email Outreach", d: "Cold sequences with warm-up, deliverability and reply-tracking.", icon: "○" },
  { t: "Landing Pages", d: "High-converting pages wired to your CRM.", icon: "●" },
  { t: "Lead Automation", d: "Enrichment, routing and scoring in your stack.", icon: "✦" },
];

const faqs = [
  { q: "How targeted are the leads?", a: "Filtered by industry, size, geography, seniority and buying signals." },
  { q: "Do you run outreach?", a: "Yes — email, LinkedIn and WhatsApp campaigns end-to-end." },
  { q: "Data freshness?", a: "Verified within the last 30 days at delivery." },
  { q: "Volume?", a: "From 100 to 10,000+ per month depending on ICP tightness." },
];

export const Route = createFileRoute("/lead-generation-services")({
  head: () =>
    serviceHead({
      path: "/lead-generation-services",
      title: "Lead Generation Services | B2B & LinkedIn Leads | SMad Works",
      description:
        "Targeted B2B lead generation — verified databases, LinkedIn leads, outreach and landing pages that turn strangers into pipeline.",
      serviceType: "Lead Generation Services",
    }),
  component: LeadGenPage,
});

function LeadGenPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Lead Generation"
        title={<>Pull the buyers<br /><span className="text-gold">that pull the trigger.</span></>}
        subtitle="A targeted lead engine — verified databases, LinkedIn outbound and landing pages, built to feed your sales team qualified pipeline."
        primaryCta={{ label: "Fill my pipeline", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See the funnel", href: "#funnel" }}
        scene={<MagnetScene />}
      />

      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Capabilities" title={<>Every channel. <span className="text-gold">One pipeline.</span></>} />
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

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Turn your ICP into <span className="text-gold">a queue of buyers.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function MagnetScene() {
  const particles = Array.from({ length: 24 });
  return (
    <div id="funnel" className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_75%_50%,rgba(212,175,55,0.18),transparent_65%)]" />
      {particles.map((_, i) => {
        const startX = -50 + Math.random() * 40;
        const startY = 10 + Math.random() * 80;
        return (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/80"
            initial={{ left: `${startX}%`, top: `${startY}%`, opacity: 0 }}
            animate={{ left: ["-5%", "70%"], top: [`${startY}%`, "50%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + Math.random() * 2, delay: i * 0.15, repeat: Infinity }}
          />
        );
      })}
      {/* Magnet / funnel */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <svg width="120" height="200" viewBox="0 0 120 200">
          <path d="M20 20 L100 20 L70 100 L70 180 L50 180 L50 100 Z" fill="none" stroke="#d4af37" strokeWidth="2" />
          <circle cx="60" cy="60" r="30" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.4">
            <animate attributeName="r" values="30;50;30" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="absolute inset-x-6 bottom-4 flex justify-between text-[10px] uppercase tracking-[0.16em] text-white/50">
        <span>Cold audience</span><span className="text-gold">Qualified lead →</span>
      </div>
    </div>
  );
}
