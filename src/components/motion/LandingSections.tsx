import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionEyebrow";

export type ServiceCard = {
  icon: ReactNode;
  title: string;
  desc: string;
  bullets?: string[];
  cta: { label: string; to?: string; href?: string };
};

export function ServiceCardsSection({
  id,
  eyebrow,
  title,
  subtitle,
  cards,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  cards: ServiceCard[];
}) {
  return (
    <section id={id} className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <StaggerGroup
          className={`mt-12 grid gap-5 md:grid-cols-2 ${cards.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
          stagger={0.07}
        >
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold/50">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  {c.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{c.desc}</p>
                {c.bullets && (
                  <ul className="mt-4 space-y-1.5 text-sm text-white/70">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-gold">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-6">
                  {c.cta.to ? (
                    <Link
                      to={c.cta.to}
                      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-black"
                    >
                      {c.cta.label} <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <a
                      href={c.cta.href}
                      target={c.cta.href?.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-black"
                    >
                      {c.cta.label} <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function BenefitsSection({
  title,
  items,
}: {
  title: ReactNode;
  items: { k: string; v: string }[];
}) {
  return (
    <section className="border-t border-white/5 bg-[#0a0a0d] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Benefits" title={title} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <Reveal key={b.k} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/20 bg-white/[0.06] p-6">
                <div className="text-lg font-semibold text-gold">{b.k}</div>
                <p className="mt-2 text-sm text-white/60">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ steps }: { steps: { t: string; d: string }[] }) {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              How we <span className="text-gold">work.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/20 bg-white/[0.06] p-6">
                <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-lg font-semibold text-white">{s.t}</div>
                <p className="mt-2 text-sm text-white/60">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
