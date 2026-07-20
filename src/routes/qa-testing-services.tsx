import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I need a QA audit for my product.");

const services = [
  { t: "Manual Testing", d: "Exploratory, regression and acceptance runs across critical flows.", icon: "◆" },
  { t: "Automated Testing", d: "Playwright / Cypress / Selenium suites with CI integration.", icon: "◇" },
  { t: "API Testing", d: "Postman + REST/GraphQL contract, load and security checks.", icon: "◈" },
  { t: "Mobile Testing", d: "iOS + Android on real devices and cloud farms.", icon: "◉" },
  { t: "Performance Testing", d: "Load, stress and soak with k6 / JMeter — before users complain.", icon: "○" },
  { t: "Security Testing", d: "OWASP Top 10 review, auth hardening and penetration probes.", icon: "●" },
];

const bugs = ["null undefined", "off-by-one", "race", "N+1", "CORS", "memory leak", "flake", "regression", "XSS", "500", "timeout", "typo"];

const caseStudies = [
  { c: "Fintech SaaS", r: "Found 128 issues pre-launch. 0 P1s in 90 days post-launch.", m: "128 / 0" },
  { c: "E-commerce", r: "Cut checkout drop-off 34% by fixing 12 UX bugs.", m: "-34%" },
  { c: "Healthcare app", r: "HIPAA-critical flows tested; 99.98% uptime SLA achieved.", m: "99.98%" },
  { c: "EdTech LMS", r: "Automated 340 regression cases; release cycle 3× faster.", m: "3× faster" },
  { c: "B2B platform", r: "Load-tested to 25k concurrent users with zero P0 defects.", m: "25k users" },
];

const faqs = [
  { q: "How fast can you start?", a: "Discovery call within 24h. First test cycle live in 3–5 days." },
  { q: "Do you write automated tests?", a: "Yes — Playwright / Cypress / Selenium with CI integration." },
  { q: "Do you sign NDAs?", a: "Absolutely. Standard NDA before any product access." },
  { q: "Retainer or per-project?", a: "Both. Sprints, per-release or monthly retainers." },
];

export const Route = createFileRoute("/qa-testing-services")({
  head: () =>
    serviceHead({
      path: "/qa-testing-services",
      title: "QA Testing Services | Manual, Automation & Performance | SMad Works",
      description:
        "Enterprise QA testing — manual, automation, API, mobile, performance and security. Ship confident releases with SMad Works QA engineers.",
      serviceType: "QA Testing Services",
    }),
  component: QAPage,
});

function QAPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="QA & Software Testing"
        title={<>Find bugs<br /><span className="text-gold">before your users do.</span></>}
        subtitle="Enterprise-grade quality engineering — manual, automation, performance and security testing that make every release boring."
        primaryCta={{ label: "Request QA audit", href: "#audit" }}
        secondaryCta={{ label: "Chat on WhatsApp", href: WHATSAPP, external: true }}
        scene={<BugHuntScene />}
        meta={
          <div className="grid max-w-md grid-cols-3 gap-4">
            {[{k:"5+ yrs",v:"QA experience"},{k:"99.9%",v:"Release confidence"},{k:"3–5 d",v:"To first cycle"}].map(o => (
              <div key={o.v} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center backdrop-blur">
                <div className="text-lg font-semibold text-gold md:text-xl">{o.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/50">{o.v}</div>
              </div>
            ))}
          </div>
        }
      />

      {/* Services */}
      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="What we test" title={<>Every layer. <span className="text-gold">Every edge.</span></>} />
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

      {/* Case studies */}
      <section className="border-t border-white/5 bg-[#0a0a0d] py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Case studies" title={<>Numbers that <span className="text-gold">shipped.</span></>} />
          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {caseStudies.map(cs => (
              <StaggerItem key={cs.c}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <div className="text-3xl font-semibold text-gold">{cs.m}</div>
                  <div className="mt-3 text-sm uppercase tracking-[0.16em] text-white/50">{cs.c}</div>
                  <p className="mt-2 text-sm text-white/75">{cs.r}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Audit form */}
      <AuditForm />

      <FaqBlock faqs={faqs} />
      <CtaBlock title={<>Confident releases, <span className="text-gold">on demand.</span></>} whatsapp={WHATSAPP} />
    </ServicePageShell>
  );
}

function BugHuntScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />
      {bugs.map((b, i) => (
        <motion.span
          key={b}
          initial={{ x: 0, y: 0, opacity: 0.6 }}
          animate={{
            x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
            y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border border-red-400/40 bg-red-500/10 px-2 py-1 font-mono text-[10px] text-red-300"
          style={{ transform: `translate(${(i % 4 - 1.5) * 60}px, ${(Math.floor(i / 4) - 1) * 60}px)` }}
        >
          {b}
        </motion.span>
      ))}
      <div className="absolute inset-x-6 bottom-6 rounded-xl border border-gold/40 bg-black/60 p-3 backdrop-blur">
        <div className="text-[10px] uppercase tracking-[0.18em] text-gold">Checklist</div>
        <div className="mt-2 grid grid-cols-2 gap-1 text-[10px] text-white/70">
          {["✓ regression", "✓ perf", "✓ a11y", "✓ security"].map(x => <div key={x}>{x}</div>)}
        </div>
      </div>
    </div>
  );
}

function AuditForm() {
  const [ok, setOk] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Hi SMad Works, I need a QA audit.\nProduct: ${fd.get("product")}\nType: ${fd.get("type")}\nStage: ${fd.get("stage")}\nTimeline: ${fd.get("timeline")}\nContact: ${fd.get("contact")}`;
    window.open(`https://wa.me/917439668751?text=${encodeURIComponent(msg)}`, "_blank");
    setOk(true);
  };
  return (
    <section id="audit" className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="Free audit" title={<>Request a <span className="text-gold">QA audit.</span></>} subtitle="Tell us about your product. We'll respond within 24 hours." />
        <form onSubmit={submit} className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.16em] text-white/50">Product name / URL</span>
            <input name="product" required className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-gold" />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">Product type</span>
              <select name="type" required className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-gold">
                <option>Web app</option><option>Mobile app</option><option>API / Backend</option><option>Desktop</option><option>Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">Current stage</span>
              <select name="stage" required className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-gold">
                <option>Pre-launch</option><option>Beta</option><option>Live in production</option><option>Refactor / v2</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">Timeline</span>
              <select name="timeline" required className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-gold">
                <option>ASAP</option><option>1–2 weeks</option><option>This month</option><option>Next quarter</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">Contact (email or WhatsApp)</span>
              <input name="contact" required className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-gold" />
            </label>
          </div>
          <button type="submit" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
            Send audit request →
          </button>
          {ok && <p className="text-xs text-gold">Opened WhatsApp with your details — we'll reply within 24h.</p>}
        </form>
      </div>
    </section>
  );
}
