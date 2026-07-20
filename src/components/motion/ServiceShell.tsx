import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionEyebrow";
import { MagneticButton } from "./MagneticButton";

export function ServicePageShell({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen bg-[#08080a] text-white">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export function FaqBlock({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="FAQ" title="Answers, before you ask." />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} f={f} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ f, defaultOpen = false }: { f: { q: string; a: string }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Reveal>
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-gold/40"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-white">{f.q}</span>
          <span className={`text-gold transition-transform ${open ? "rotate-45" : ""}`}>+</span>
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="pt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
        </motion.div>
      </button>
    </Reveal>
  );
}

export function CtaBlock({
  title,
  subtitle,
  whatsapp,
}: {
  title: ReactNode;
  subtitle?: string;
  whatsapp: string;
}) {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-white/60">{subtitle}</p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-black shadow-[0_20px_60px_-15px_rgba(212,175,55,0.6)] transition hover:bg-white"
            >
              Chat on WhatsApp <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton
              href="mailto:smadworkz@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/90 transition hover:border-gold hover:text-gold"
            >
              Email the team
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
