import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AlertCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import type { IndustryData } from "@/lib/industries-data";

const WHATSAPP_NUMBER = "917439668751";
const waUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export function IndustryPage({ data }: { data: IndustryData }) {
  const Icon = data.icon;
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 bg-black text-white">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_80%_10%,rgba(212,175,55,0.22),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold">
              <Icon size={14} /> {data.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {data.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {data.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waUrl(data.whatsappMessage)}
                target="_blank" rel="noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
              >
                Book a Free Consultation
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Challenges</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Challenges in {data.name}
            </h2>
            <p className="mt-3 text-black/60">
              The everyday bottlenecks holding {data.name.toLowerCase()} businesses back.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.challenges.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                  <AlertCircle size={18} />
                </span>
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm text-black/60">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we solve */}
      <section className="relative overflow-hidden border-b border-black/5 bg-black py-20 text-white">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">How We Solve</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              How SMad Works transforms {data.name.toLowerCase()}
            </h2>
            <p className="mt-3 text-white/65">
              Purpose-built AI and automation designed around your workflows.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.howWeSolve.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-black">
                  <Sparkles size={18} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant solutions */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Solutions</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Relevant automation solutions
            </h2>
            <p className="mt-3 text-black/60">
              Handpicked services from our stack, tailored for {data.name.toLowerCase()}.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.solutions.map((s) => {
              const inner = (
                <>
                  <span className="text-sm font-medium">{s.title}</span>
                  <span className="text-black/50 transition group-hover:translate-x-1 group-hover:text-gold">
                    <ArrowRight size={16} />
                  </span>
                </>
              );
              return s.to ? (
                <Link
                  key={s.title}
                  to={s.to}
                  className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={s.title}
                  className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-black/5 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Benefits</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Benefits of automation
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Process</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              How we work with you
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {data.process.map((p) => (
              <div key={p.title} className="rounded-2xl border border-black/10 bg-white p-6">
                <div className="text-xs font-medium tracking-[0.18em] text-gold">{p.step}</div>
                <div className="mt-2 text-lg font-semibold">{p.title}</div>
                {p.desc && <p className="mt-2 text-sm text-black/60">{p.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related solutions */}
      <section className="border-b border-black/5 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Related</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Explore related solutions
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]"
              >
                <span className="font-medium">{r.title}</span>
                <span className="text-black/50 transition group-hover:translate-x-1 group-hover:text-gold">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
          <IndustryFaq faqs={data.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-black to-black/90 p-10 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] md:p-14">
            <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(212,175,55,0.25),transparent_60%)]" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold">Get started</span>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                  Ready to transform your {data.name.toLowerCase()} business?
                </h2>
                <p className="mt-4 max-w-xl text-white/70">
                  Book a free consultation and discover how AI & automation can help you save time, reduce costs and grow faster.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={waUrl(data.whatsappMessage)}
                  target="_blank" rel="noreferrer"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
                >
                  Book Free Consultation
                </a>
                <a
                  href={waUrl(data.whatsappMessage)}
                  target="_blank" rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function IndustryFaq({ faqs }: { faqs: IndustryData["faqs"] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <button
            key={f.q}
            onClick={() => setOpen(isOpen ? null : i)}
            className="w-full px-5 py-4 text-left transition hover:bg-black/[0.02]"
            aria-expanded={isOpen}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium">{f.q}</span>
              <span className="text-gold">{isOpen ? "–" : "+"}</span>
            </div>
            {isOpen && <p className="mt-2 text-sm leading-relaxed text-black/65">{f.a}</p>}
          </button>
        );
      })}
    </div>
  );
}
