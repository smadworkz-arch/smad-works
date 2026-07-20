import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I need branding & creative design help.");

const services = [
  { t: "Logo Design", d: "Distinctive marks that stand up at any size, on any surface.", icon: "◆" },
  { t: "Brand Systems", d: "Colour, type, voice and guidelines — a brand book you'll use.", icon: "◈" },
  { t: "Business Profiles", d: "Investor-grade decks and company profiles.", icon: "◉" },
  { t: "Marketing Creatives", d: "Ad visuals, banners and campaigns that convert.", icon: "○" },
  { t: "Social Media Kits", d: "Templates, carousels and reels for consistent presence.", icon: "●" },
  { t: "Print & Packaging", d: "Posters, cards, packaging — press-ready.", icon: "✦" },
];

const marks = ["S", "M", "◆", "▲", "●", "★", "◈", "❋"];

const faqs = [
  { q: "How many logo concepts?", a: "Typically 3 initial directions with 2 rounds of revisions each." },
  { q: "Source files?", a: "Yes — AI, SVG, PDF and PNG in every required size." },
  { q: "Rebrand support?", a: "Full rebrand or partial refresh — both available." },
  { q: "Turnaround?", a: "Logos in 5–7 days. Full brand systems in 2–3 weeks." },
];

export const Route = createFileRoute("/logo-creative-design-services")({
  head: () =>
    serviceHead({
      path: "/logo-creative-design-services",
      title: "Logo & Creative Design Services | Branding & Marketing | SMad Works",
      description:
        "Premium logos, brand systems, business profiles and marketing creatives designed to build a brand people remember.",
      serviceType: "Logo & Creative Design Services",
    }),
  component: LogoPage,
});

function LogoPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Creative Design"
        title={<>Marks people<br /><span className="text-gold">actually remember.</span></>}
        subtitle="Distinctive logos, brand systems and marketing creatives — built to make your business unmistakable across every touchpoint."
        primaryCta={{ label: "Design my brand", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See marks", href: "#marks" }}
        scene={<LogoMorphScene />}
      />

      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="What we design" title={<>Everything with <span className="text-gold">your name on it.</span></>} />
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

      {/* Mark gallery */}
      <section id="marks" className="border-t border-white/5 bg-[#0a0a0d] py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Mark gallery" title={<>Every mark, <span className="text-gold">a signature.</span></>} />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {marks.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                whileHover={{ rotateY: 180, transition: { duration: 0.6 } }}
                className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-4xl text-gold backdrop-blur"
                style={{ transformStyle: "preserve-3d" }}
              >
                {m}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Give your business <span className="text-gold">a face.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function LogoMorphScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)]" />
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        {marks.slice(0, 6).map((m, i) => {
          const a = (i / 6) * 360;
          return (
            <div
              key={i}
              className="absolute flex h-24 w-24 items-center justify-center rounded-2xl border border-gold/50 bg-black/60 text-3xl font-bold text-gold backdrop-blur"
              style={{ transform: `rotateY(${a}deg) translateZ(140px)`, transformStyle: "preserve-3d" }}
            >
              {m}
            </div>
          );
        })}
      </motion.div>
      <div className="absolute inset-x-0 bottom-6 text-center text-[10px] uppercase tracking-[0.22em] text-white/50">
        Rotating showcase
      </div>
    </div>
  );
}
