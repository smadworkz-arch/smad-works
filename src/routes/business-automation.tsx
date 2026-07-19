import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ClientOnly } from "@/components/ClientOnly";
import { PageHero3D } from "@/components/three/PageHero3D";
import { TiltCard } from "@/components/three/TiltCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { serviceHead } from "@/lib/service-head";

const AutomationNodesScene = lazy(() =>
  import("@/components/three/AutomationNodesScene").then((m) => ({ default: m.AutomationNodesScene })),
);

const WHATSAPP = "https://wa.me/917439668751?text=" + encodeURIComponent("Hi SMad Works, I want to automate my business workflows.");

const capabilities = [
  { t: "WhatsApp Automation", d: "Auto-replies, chatbots, broadcasts, lead capture on the official Cloud API.", icon: "◐" },
  { t: "AI Calling Agents", d: "AI voice agents that qualify leads, book calls and follow up 24/7.", icon: "◑" },
  { t: "CRM Automation", d: "Pipelines, follow-ups and reports that update themselves.", icon: "◒" },
  { t: "Appointment Systems", d: "Smart booking synced to calendars with reminders and confirmations.", icon: "◓" },
  { t: "Workflow Automation", d: "Zapier / n8n / Make flows connecting every tool you use.", icon: "◔" },
  { t: "Support Automation", d: "AI handles tier-1 queries and hands off complex cases seamlessly.", icon: "◕" },
];

const processSteps = [
  { n: "01", t: "Discover", d: "Map current workflows and find automation wins." },
  { n: "02", t: "Design", d: "Blueprint the AI + tool stack for your goals." },
  { n: "03", t: "Build", d: "Ship end-to-end automations with best-in-class tools." },
  { n: "04", t: "Integrate", d: "Connect WhatsApp, CRM, calendars, sheets, ads." },
  { n: "05", t: "Test", d: "Rigorously validate real workflows and edge cases." },
  { n: "06", t: "Launch", d: "Go live with training, monitoring and support." },
];

const outcomes = [
  { k: "60–80%", v: "Less manual work" },
  { k: "24/7", v: "Customer engagement" },
  { k: "3–10×", v: "ROI for clients" },
  { k: "1–3 wks", v: "Typical go-live" },
];

const industries = ["Healthcare", "Real Estate", "Education", "E-commerce", "Hospitality", "Finance", "SMBs", "Startups"];

const tools = ["WhatsApp Cloud API", "OpenAI", "n8n", "Make", "Zapier", "HubSpot", "Zoho", "Salesforce", "Google Sheets", "Notion", "Twilio", "ElevenLabs"];

const faqs = [
  { q: "How long does setup take?", a: "Most projects go live in 1–3 weeks depending on scope and integrations." },
  { q: "Will it work with my existing CRM?", a: "Yes — we integrate with HubSpot, Zoho, Salesforce, Google Sheets, Notion and more." },
  { q: "Do you handle WhatsApp Business API?", a: "Yes — Cloud API setup, templates, approvals end-to-end." },
  { q: "What is typical ROI?", a: "Clients see 3–10× ROI from reduced manual work and improved conversion." },
];

export const Route = createFileRoute("/business-automation")({
  head: () =>
    serviceHead({
      path: "/business-automation",
      title: "Business Automation Services | WhatsApp, AI Agents & CRM | SMad Works",
      description:
        "Automate WhatsApp, calls, CRM and workflows with SMad Works. Intelligent business automation to save time, cut cost and scale faster.",
      serviceType: "Business Automation",
    }),
  component: BusinessAutomationPage,
});

function BusinessAutomationPage() {
  return (
    <div className="dark min-h-screen bg-[#08080a] text-white">
      <SiteHeader />

      <PageHero3D
        eyebrow="Business Automation"
        title={
          <>
            Automate the work.<br />
            <span className="text-gold">Amplify the business.</span>
          </>
        }
        subtitle="We build intelligent automation systems — WhatsApp, AI agents, CRM and workflow — that replace repetitive work and unlock 24/7 growth."
        primaryCta={{ label: "Automate my business", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See how it works", href: "#process" }}
        scene={
          <ClientOnly
            fallback={<div className="aspect-square w-full rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]" />}
          >
            <Suspense fallback={<div className="aspect-square w-full rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]" />}>
              <AutomationNodesScene />
            </Suspense>
          </ClientOnly>
        }
        meta={
          <div className="grid max-w-md grid-cols-4 gap-4">
            {outcomes.map((o) => (
              <div key={o.v} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center backdrop-blur">
                <div className="text-lg font-semibold text-gold md:text-xl">{o.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/50">{o.v}</div>
              </div>
            ))}
          </div>
        }
      />

      {/* Capabilities grid */}
      <section className="relative border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="What we automate"
            title={<>Six systems. <span className="text-gold">One connected engine.</span></>}
            subtitle="Pick any capability — or stack them into an always-on operations layer."
          />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {capabilities.map((c) => (
              <StaggerItem key={c.t}>
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-gold/40">
                  <div className="text-3xl text-gold">{c.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{c.d}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process — scroll-linked spine */}
      <ProcessSpine />

      {/* Tools marquee */}
      <section className="border-y border-white/5 py-14">
        <Reveal>
          <div className="mb-6 px-5 text-center text-[11px] uppercase tracking-[0.28em] text-white/40">
            Tools & platforms we orchestrate
          </div>
        </Reveal>
        <Marquee>
          {tools.map((t) => (
            <span key={t} className="inline-flex items-center whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 text-sm text-white/70">
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Industries */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Who we serve"
            title={<>Automations tuned to <span className="text-gold">your industry.</span></>}
          />
          <StaggerGroup className="mt-10 flex flex-wrap gap-3" stagger={0.04}>
            {industries.map((i) => (
              <StaggerItem key={i}>
                <span className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-white/80 transition hover:border-gold hover:text-gold">
                  {i}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Ready to make your operations <span className="text-gold">run themselves?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Book a free consultation. We'll map the workflow, quote the build and ship your first automation this month.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                href={WHATSAPP}
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

      <SiteFooter />
    </div>
  );
}

function ProcessSpine() {
  const { scrollYProgress } = useScroll();
  const line = useTransform(scrollYProgress, [0.25, 0.55], ["0%", "100%"]);
  return (
    <section id="process" className="relative border-t border-white/5 bg-[#0a0a0d] py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Our process"
          title={<>From audit to <span className="text-gold">always-on.</span></>}
          subtitle="A transparent six-step build — you always know what's next."
        />
        <div className="relative mt-16 pl-6 md:pl-0">
          <div className="absolute left-2 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <motion.div style={{ height: line }} className="absolute left-2 top-0 w-px bg-gradient-to-b from-gold to-transparent md:left-1/2" />
          <div className="space-y-10">
            {processSteps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={s.n} direction={isLeft ? "right" : "left"}>
                  <div className={`relative flex md:items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
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
