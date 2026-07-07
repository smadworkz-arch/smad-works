import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const WHATSAPP_NUMBER = "917439668751";
const waUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export type RelatedLink = { to: string; title: string };

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  benefits?: string[];
  ctaPrimary: string;
  ctaSecondary?: string;
  whatsappMessage: string;
  services: { title: string; items: string[] }[];
  process?: { step: string; title: string; desc?: string }[];
  industries?: string[];
  faqs: { q: string; a: string }[];
  related: RelatedLink[];
  illustration?: ReactNode;
  portfolio?: ReactNode;
  beforeFaq?: ReactNode;
};

export function ServicePage(props: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <Hero {...props} />
      <ServicesGrid services={props.services} />
      {props.portfolio}
      {props.process && props.process.length > 0 && (
        <Process process={props.process} />
      )}
      {props.industries && props.industries.length > 0 && (
        <Industries industries={props.industries} />
      )}
      <Faq faqs={props.faqs} />
      <Related related={props.related} />
      <Contact ctaPrimary={props.ctaPrimary} whatsappMessage={props.whatsappMessage} title={props.title} />
      <SiteFooter />
    </div>
  );
}

const allServices: RelatedLink[] = [
  { to: "/business-automation", title: "Business Automation" },
  { to: "/qa-testing-services", title: "QA Testing Services" },
  { to: "/academic-research-services", title: "Academic Research" },
  { to: "/operations-management-services", title: "Operations Management" },
  { to: "/ai-content-generation", title: "AI Content Generation" },
  { to: "/ai-course-content-generation", title: "AI Course Content" },
  { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
  { to: "/ai-automation-course", title: "AI Automation Course" },
  { to: "/lead-generation-services", title: "Lead Generation" },
  { to: "/lead-conversion-services", title: "Lead Conversion" },
  { to: "/logo-creative-design-services", title: "Logo & Creative Design" },
];


function Hero(p: ServicePageProps) {
  return (
    <section className="relative overflow-hidden border-b border-black/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(212,175,55,0.12),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/70">
            {p.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {p.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 md:text-lg">
            {p.description}
          </p>
          {p.benefits && p.benefits.length > 0 && (
            <ul className="mt-7 grid max-w-xl gap-2 text-sm text-black/75 sm:grid-cols-2">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waUrl(p.whatsappMessage)}
              target="_blank" rel="noreferrer"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-black"
            >
              {p.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition hover:border-gold hover:text-black"
            >
              {p.ctaSecondary ?? "Book Consultation"}
            </a>
          </div>
        </div>
        <div className="relative">
          {p.illustration ? (
            <div className="relative">{p.illustration}</div>
          ) : (
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-black to-black/85 p-8 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(212,175,55,0.35),transparent_70%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold">SMad Works</div>
                <div className="mt-2 text-xl font-medium">{p.title}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-white/80">
                {(p.benefits ?? p.services[0]?.items ?? []).slice(0, 4).map((b) => (
                  <div key={b} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    {b}
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-gold/40 bg-gold/10 p-4 text-xs">
                Trusted by modern teams across Healthcare, E-commerce, Education & Real Estate.
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ services }: { services: ServicePageProps["services"] }) {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What we provide</h2>
          <p className="mt-3 text-black/60">Outcome-driven services designed to deliver measurable results.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-gold transition group-hover:bg-gold group-hover:text-black">✦</span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-gold" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ process }: { process: NonNullable<ServicePageProps["process"]> }) {
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How we work</h2>
        <p className="mt-3 max-w-xl text-black/60">A clear, transparent process from discovery to delivery.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="text-xs font-medium tracking-[0.18em] text-gold">{p.step}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              {p.desc && <p className="mt-2 text-sm text-black/60">{p.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries({ industries }: { industries: string[] }) {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Who we serve</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/75 transition hover:border-gold hover:text-black">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ faqs }: { faqs: ServicePageProps["faqs"] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Frequently asked questions</h2>
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
      </div>
    </section>
  );
}

function Related({ related }: { related: RelatedLink[] }) {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Related services</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
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
  );
}

function Contact({ ctaPrimary, whatsappMessage, title }: { ctaPrimary: string; whatsappMessage: string; title: string }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");
    const text = `Hi SMad Works,\n\nI'm interested in: ${title}\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`;
    window.open(waUrl(text), "_blank");
    setSent(true);
  }
  return (
    <section id="contact" className="border-b border-black/5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{ctaPrimary}</h2>
          <p className="mt-3 max-w-md text-black/60">
            Tell us about your goals and we'll get back to you on WhatsApp within hours.
          </p>
          <div className="mt-6 space-y-2 text-sm text-black/70">
            <div>📞 <a className="hover:text-black" href="tel:+917439668751">+91 74396 68751</a></div>
            <div>✉️ <a className="hover:text-black" href="mailto:smadworkz@gmail.com">smadworkz@gmail.com</a></div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]">
          <div className="grid gap-4">
            <Field name="name" label="Name" required />
            <Field name="phone" label="Phone" required />
            <Field name="email" label="Email" type="email" />
            <div>
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.14em] text-black/60">Message</label>
              <textarea
                id="message" name="message" rows={4}
                className="mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm outline-none transition focus:border-gold"
                placeholder={`Tell us about your ${title.toLowerCase()} requirements...`}
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-black"
            >
              {sent ? "Opening WhatsApp..." : "Send via WhatsApp"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-[0.14em] text-black/60">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm outline-none transition focus:border-gold"
      />
    </div>
  );
}
