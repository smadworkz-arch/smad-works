import { Suspense, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ClientOnly } from "@/components/ClientOnly";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Link } from "@tanstack/react-router";

type Metric = { k: string; v: string };
type Capability = { t: string; d: string; icon?: string };
type Step = { n: string; t: string; d: string };
type Faq = { q: string; a: string };
type Tool = { name: string; domain?: string };
type Related = { to: string; title: string };

export type ImmersiveServiceProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  primaryCta: { label: string; whatsappMessage?: string; href?: string };
  scene: ReactNode;
  metrics?: Metric[];
  capabilities: Capability[];
  capabilitiesTitle?: ReactNode;
  capabilitiesEyebrow?: string;
  capabilitiesSubtitle?: string;
  process?: Step[];
  processEyebrow?: string;
  processTitle?: ReactNode;
  tools?: Tool[];
  toolsLabel?: string;
  industries?: string[];
  faqs: Faq[];
  finalCtaTitle?: ReactNode;
  finalCtaSubtitle?: string;
  related?: Related[];
  extraSections?: ReactNode;
  beforeFaq?: ReactNode;
};

const ICONS = ["◐", "◑", "◒", "◓", "◔", "◕", "◖", "◗"];

export function ImmersiveServicePage(p: ImmersiveServiceProps) {
  const waHref = p.primaryCta.href
    ? p.primaryCta.href
    : `https://wa.me/917439668751?text=${encodeURIComponent(p.primaryCta.whatsappMessage || "Hi SMad Works, I'd like to know more.")}`;

  return (
    <div className="dark min-h-screen bg-[#08080a] text-white">
      <SiteHeader />

      <PageHero3D
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.subtitle}
        primaryCta={{ label: p.primaryCta.label, href: waHref, external: !p.primaryCta.href }}
        secondaryCta={{ label: "Explore below", href: "#capabilities" }}
        scene={
          <ClientOnly fallback={<div className="aspect-square w-full rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]" />}>
            <Suspense fallback={<div className="aspect-square w-full rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]" />}>
              {p.scene}
            </Suspense>
          </ClientOnly>
        }
        meta={
          p.metrics && (
            <div className={`grid max-w-md gap-4 grid-cols-${Math.min(p.metrics.length, 4)}`} style={{ gridTemplateColumns: `repeat(${Math.min(p.metrics.length, 4)}, minmax(0, 1fr))` }}>
              {p.metrics.map((o) => (
                <div key={o.v} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center backdrop-blur">
                  <div className="text-lg font-semibold text-gold md:text-xl">{o.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/50">{o.v}</div>
                </div>
              ))}
            </div>
          )
        }
      />

      <section id="capabilities" className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow={p.capabilitiesEyebrow || "What we do"}
            title={p.capabilitiesTitle || <>Complete <span className="text-gold">service stack.</span></>}
            subtitle={p.capabilitiesSubtitle}
          />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {p.capabilities.map((c, i) => (
              <StaggerItem key={c.t}>
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-gold/40">
                  <div className="text-3xl text-gold">{c.icon || ICONS[i % ICONS.length]}</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{c.d}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {p.process && p.process.length > 0 && (
        <section className="border-t border-white/5 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              eyebrow={p.processEyebrow || "How we work"}
              title={p.processTitle || <>A rigorous <span className="text-gold">delivery process.</span></>}
            />
            <div className="relative mt-14">
              <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:left-1/2" />
              {p.process.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={s.n} delay={i * 0.05}>
                    <div className={`relative mb-8 flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                      <div className="absolute left-2 -translate-x-1/2 md:left-1/2">
                        <div className="h-4 w-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
                      </div>
                      <div className={`ml-10 max-w-md md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Step {s.n}</div>
                          <div className="mt-2 text-2xl font-semibold">{s.t}</div>
                          <p className="mt-2 text-sm text-white/60">{s.d}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {p.tools && p.tools.length > 0 && (
        <section className="border-y border-white/5 py-14">
          <Reveal>
            <div className="mb-6 px-5 text-center text-[11px] uppercase tracking-[0.28em] text-white/40">
              {p.toolsLabel || "Tools & platforms we use"}
            </div>
          </Reveal>
          <Marquee>
            {p.tools.map((t) => (
              <span key={t.name} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/80">
                {t.domain && (
                  <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=64`} alt="" aria-hidden width={16} height={16} loading="lazy" className="h-4 w-4" />
                )}
                {t.name}
              </span>
            ))}
          </Marquee>
        </section>
      )}

      {p.industries && p.industries.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading eyebrow="Who we serve" title={<>Tuned to <span className="text-gold">your industry.</span></>} />
            <StaggerGroup className="mt-10 flex flex-wrap gap-3" stagger={0.04}>
              {p.industries.map((i) => (
                <StaggerItem key={i}>
                  <span className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-white/80 transition hover:border-gold hover:text-gold">
                    {i}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {p.extraSections}

      {p.beforeFaq}

      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeading eyebrow="FAQ" title="Answers, before you ask." />
          <div className="mt-10 space-y-3">
            {p.faqs.map((f, i) => (
              <FaqItem key={f.q} f={f} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              {p.finalCtaTitle || <>Let's build <span className="text-gold">what's next.</span></>}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-white/60">{p.finalCtaSubtitle || "Book a free consultation. We'll scope the work and quote in 24 hours."}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href={waHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-black shadow-[0_20px_60px_-15px_rgba(212,175,55,0.6)] transition hover:bg-white">
                {p.primaryCta.label} <span aria-hidden>→</span>
              </MagneticButton>
              <MagneticButton href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm text-white/90 transition hover:border-gold hover:text-gold">
                Book a call
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {p.related && p.related.length > 0 && (
        <section className="border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading eyebrow="Related solutions" title={<>Continue <span className="text-gold">exploring.</span></>} />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {p.related.map((r) => (
                <Link key={r.to} to={r.to} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-gold/40">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Solution</div>
                  <div className="mt-2 text-xl font-semibold text-white transition group-hover:text-gold">{r.title}</div>
                  <div className="mt-4 text-sm text-white/40">Explore →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function FaqItem({ f, defaultOpen = false }: { f: Faq; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Reveal>
      <button onClick={() => setOpen(!open)} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-gold/40" aria-expanded={open}>
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-white">{f.q}</span>
          <span className={`text-gold transition-transform ${open ? "rotate-45" : ""}`}>+</span>
        </div>
        <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
        </motion.div>
      </button>
    </Reveal>
  );
}
