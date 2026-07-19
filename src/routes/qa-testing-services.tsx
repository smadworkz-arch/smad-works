import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceHead } from "@/lib/service-head";
import {
  ShieldCheck, Bug, MousePointerClick, Workflow, CreditCard, MonitorSmartphone, Gauge,
  ClipboardList, RefreshCw, Palette, Plug, Globe, Smartphone, Building2, ClipboardCheck,
  Rocket, LayoutDashboard, Database, Users, KeyRound, Link2, Cog, Brain, FileText,
  Camera, AlertTriangle, FileCheck2, Sparkles, CheckCircle2, ArrowRight,
  GraduationCap, Home, ShoppingBag, Landmark, Factory, Hotel, HeartPulse,
  Target, Layers, HeartHandshake, Zap, TrendingDown, TrendingUp, Timer, Award,
} from "lucide-react";

const WHATSAPP_NUMBER = "917439668751";
const waUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const auditMsg = "Hi SMad Works, I'd like to request a QA audit for my product.";
const expertMsg = "Hi SMad Works, I'd like to talk to a QA expert.";

export const Route = createFileRoute("/qa-testing-services")({
  head: () =>
    serviceHead({
      path: "/qa-testing-services",
      title: "QA Testing Services | Manual, Functional, UI & API Testing | SMad Works",
      description:
        "Enterprise QA testing services: manual, functional, regression, UI/UX, API, cross-browser, mobile, ERP/CRM, UAT and pre-launch audits by SMad Works.",
      serviceType: "QA Testing Services",
    }),
  component: QaTestingPage,
});

function QaTestingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <Hero />
      <Challenges />
      <Services />
      <WhatWeTest />
      <Process />
      <Deliverables />
      <Industries />
      <WhyUs />
      <Tools />
      <Benefits />
      <CaseStudies />
      <AuditForm />
      <Faqs />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}

/* 1. HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-black text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_80%_10%,rgba(212,175,55,0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold">
            <ShieldCheck size={14} /> Quality Assurance
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Deliver Reliable Software with End-to-End QA Testing
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            We help businesses ensure their websites, applications, ERP systems, dashboards, and digital products are reliable, secure, user-friendly, and production-ready through comprehensive quality assurance services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waUrl(auditMsg)} target="_blank" rel="noreferrer"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
              Request a QA Audit
            </a>
            <a href={waUrl(expertMsg)} target="_blank" rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold">
              Talk to a QA Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2. CHALLENGES */
const CHALLENGES = [
  { icon: Bug, title: "Bugs Reaching Production", desc: "Prevent costly issues before your users discover them." },
  { icon: MousePointerClick, title: "Poor User Experience", desc: "Identify UI, usability and workflow problems." },
  { icon: Workflow, title: "Broken Business Workflows", desc: "Validate complete business processes from start to finish." },
  { icon: CreditCard, title: "Payment & Form Errors", desc: "Ensure transactions and forms work flawlessly." },
  { icon: MonitorSmartphone, title: "Cross Browser & Device Issues", desc: "Deliver consistent experiences across browsers and devices." },
  { icon: Gauge, title: "Performance & Stability Problems", desc: "Improve software reliability before launch." },
];
function Challenges() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Challenges" title="Business challenges we solve" subtitle="The reliability gaps that quietly cost you revenue and trust." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((c) => (
            <div key={c.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                <c.icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-sm text-black/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. SERVICES */
const SERVICES = [
  { icon: ClipboardList, title: "Manual Testing", desc: "Human-led exploratory and scripted testing across critical flows." },
  { icon: CheckCircle2, title: "Functional Testing", desc: "Verify every feature works as intended, end-to-end." },
  { icon: RefreshCw, title: "Regression Testing", desc: "Ensure new releases don't break existing functionality." },
  { icon: Palette, title: "UI & UX Testing", desc: "Uncover usability, layout and interaction issues." },
  { icon: Plug, title: "API Testing", desc: "Validate REST endpoints, payloads and integration reliability." },
  { icon: Globe, title: "Cross Browser Testing", desc: "Consistent experiences across Chrome, Safari, Firefox and Edge." },
  { icon: Smartphone, title: "Mobile Application Testing", desc: "Android and iOS testing across screen sizes and OS versions." },
  { icon: MonitorSmartphone, title: "Website Testing", desc: "Full site validation — content, forms, performance and links." },
  { icon: Building2, title: "ERP & CRM Testing", desc: "Test business modules, approvals and role-based workflows." },
  { icon: ClipboardCheck, title: "User Acceptance Testing (UAT)", desc: "Real-world validation before sign-off and go-live." },
  { icon: Rocket, title: "Pre-Launch QA Audit", desc: "A rigorous final sweep to catch issues before release day." },
];
function Services() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-black py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(212,175,55,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Services" title="Our QA testing services" subtitle="Comprehensive QA coverage — from exploratory sessions to release readiness." dark />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.06]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-black">
                <s.icon size={18} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. WHAT WE TEST */
const WHAT_WE_TEST = [
  { icon: Globe, title: "Web Applications", desc: "Business websites and web platforms." },
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Reports, workflows, permissions and admin panels." },
  { icon: Building2, title: "ERP Systems", desc: "Business processes, approvals and operational modules." },
  { icon: Users, title: "CRM Platforms", desc: "Lead management, customer journeys and reporting." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Android and iOS testing." },
  { icon: CreditCard, title: "Payment Workflows", desc: "Checkout, invoices and payment gateway validation." },
  { icon: KeyRound, title: "Authentication & User Management", desc: "Login, registration, OTP, roles and permissions." },
  { icon: Link2, title: "API Integrations", desc: "REST APIs, third-party integrations and data synchronization." },
  { icon: Cog, title: "Business Workflow Automation", desc: "Automated approvals, notifications and internal workflows." },
  { icon: Brain, title: "AI & Automation Systems", desc: "AI agents, chatbots and automation workflows." },
];
function WhatWeTest() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Coverage" title="What we test" subtitle="Every layer of your digital product — validated with intent." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {WHAT_WE_TEST.map((t) => (
            <div key={t.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                <t.icon size={17} />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{t.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-black/60">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. PROCESS */
const PROCESS = [
  "Requirement Analysis", "Test Planning", "Test Case Design", "Test Execution",
  "Bug Reporting", "Regression Testing", "Release Validation", "Post-Release Verification",
];
function Process() {
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Process" title="Our QA process" subtitle="A structured, repeatable workflow for confident releases." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <div key={p} className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold">
              <div className="text-xs font-medium tracking-[0.18em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-base font-semibold">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. DELIVERABLES */
const DELIVERABLES = [
  { icon: FileText, title: "Test Strategy Document" },
  { icon: ClipboardList, title: "Test Cases" },
  { icon: Bug, title: "Detailed Bug Reports" },
  { icon: Camera, title: "Screenshots & Evidence" },
  { icon: AlertTriangle, title: "Severity & Priority Analysis" },
  { icon: FileCheck2, title: "Test Summary Report" },
  { icon: Rocket, title: "Release Readiness Report" },
  { icon: Sparkles, title: "QA Recommendations" },
];
function Deliverables() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Deliverables" title="What you receive" subtitle="Clear documentation that keeps your team aligned and accountable." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.map((d) => (
            <div key={d.title}
              className="group flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                <d.icon size={17} />
              </span>
              <span className="mt-1.5 text-sm font-medium">{d.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7. INDUSTRIES */
const INDUSTRIES = [
  { icon: HeartPulse, title: "Healthcare", desc: "HIPAA-aware QA for clinical and patient systems.", to: "/industries/healthcare" },
  { icon: GraduationCap, title: "Education", desc: "LMS, admissions and student portal testing.", to: "/industries/education" },
  { icon: Landmark, title: "Finance", desc: "Payments, KYC and transactional accuracy.", to: "/industries/finance-insurance" },
  { icon: ShoppingBag, title: "Retail", desc: "Storefronts, checkout and order flows.", to: "/industries/retail-ecommerce" },
  { icon: Home, title: "Real Estate", desc: "CRM, listings and enquiry pipelines.", to: "/industries/real-estate" },
  { icon: Factory, title: "Manufacturing", desc: "ERP, inventory and workflow reliability.", to: "/industries/manufacturing" },
  { icon: Hotel, title: "Hospitality", desc: "Bookings, PMS and guest journey testing.", to: "/industries/hospitality" },
  { icon: Rocket, title: "Startups & SaaS", desc: "Fast-moving product QA before every release.", to: "/industries/startups-smes" },
] as const;
function Industries() {
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Industries" title="Industries we serve" subtitle="Domain-aware QA for regulated, transactional and customer-facing products." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((i) => (
            <Link key={i.title} to={i.to}
              className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                <i.icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{i.title}</h3>
              <p className="mt-1.5 text-sm text-black/60">{i.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-black/50 transition group-hover:text-gold">
                Explore <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. WHY US */
const WHY_US = [
  { icon: Target, title: "Business-Focused QA", desc: "We test the workflows that drive revenue — not just clicks." },
  { icon: Layers, title: "Thorough Testing Methodology", desc: "Structured strategy, coverage and traceability." },
  { icon: FileText, title: "Detailed Documentation", desc: "Test cases, evidence and reports you can rely on." },
  { icon: Bug, title: "Transparent Bug Reporting", desc: "Clear severity, steps and reproduction — no guesswork." },
  { icon: Zap, title: "Faster Release Cycles", desc: "Confident sign-offs and shorter regression loops." },
  { icon: HeartHandshake, title: "Long-Term Quality Partnership", desc: "We stay embedded across releases, not just projects." },
];
function WhyUs() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Why us" title="Why choose SMad Works" subtitle="A QA partner that thinks like your business — and tests like your users." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w) => (
            <div key={w.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                <w.icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{w.title}</h3>
              <p className="mt-1.5 text-sm text-black/60">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9. TOOLS */
const TOOLS = [
  "Postman", "Jira", "ClickUp", "Trello", "GitHub",
  "Google Workspace", "Chrome DevTools", "Browser Developer Tools",
  "Firebase", "Google Sheets",
];
function Tools() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-black py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_80%_80%,rgba(212,175,55,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Toolkit" title="Tools we use" subtitle="Battle-tested platforms for tracking, reporting and validating quality." dark />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {TOOLS.map((t) => (
            <div key={t}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 text-center text-sm font-medium text-white/80 transition hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10. BENEFITS */
const BENEFITS = [
  "Increase Software Quality",
  "Reduce Production Bugs",
  "Improve User Experience",
  "Reduce Maintenance Costs",
  "Ensure Faster Releases",
  "Launch With Confidence",
];
function Benefits() {
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Benefits" title="Benefits of professional QA" subtitle="The business outcomes of shipping software that just works." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b}
              className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold" />
              <span className="text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11. FAQ */
const FAQS = [
  { q: "What is QA Testing?", a: "QA (Quality Assurance) Testing is a structured process of evaluating software to identify defects, verify functionality and confirm it meets business and user requirements before release." },
  { q: "Why is QA important?", a: "It protects your users, your revenue and your brand. Catching issues before production is dramatically cheaper than fixing them after — and reliable software builds long-term trust." },
  { q: "Do you test existing software?", a: "Yes. We audit and test live products, legacy systems and in-progress builds. We start with a QA audit to understand risk areas, then design a targeted test plan." },
  { q: "Do you test ERP systems?", a: "Yes — we specialize in ERP and CRM testing, including modules, approvals, roles, permissions and integrations." },
  { q: "Do you provide API testing?", a: "Yes. We validate REST endpoints, request/response payloads, error handling, authentication and third-party integrations using tools like Postman." },
  { q: "What reports will I receive?", a: "You'll receive test strategy documents, test cases, detailed bug reports with screenshots, severity/priority analysis, a test summary report and a release readiness report." },
  { q: "How long does testing take?", a: "Small projects: 2–5 days. Mid-sized products: 1–3 weeks. Complex ERP/CRM or ongoing release cycles are scoped based on modules and release cadence." },
  { q: "Can you work with our development team?", a: "Absolutely. We collaborate inside your workflows — Jira, ClickUp, GitHub, Trello — and report bugs directly to your developers with reproduction steps and evidence." },
];
function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={f.q} onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-5 py-4 text-left transition hover:bg-black/[0.02]" aria-expanded={isOpen}>
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

/* 12. FINAL CTA */
function FinalCta() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-black to-black/90 p-10 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] md:p-14">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(212,175,55,0.25),transparent_60%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold">Ready to ship</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to Launch with Confidence?
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Ensure your software is thoroughly tested before every release. Our QA specialists help you identify issues early, improve software quality, and deliver exceptional user experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={waUrl(auditMsg)} target="_blank" rel="noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
                Request a QA Audit
              </a>
              <a href={waUrl(expertMsg)} target="_blank" rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold">
                Contact Our QA Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Shared section head */
function SectionHead({ eyebrow, title, subtitle, dark = false }: {
  eyebrow: string; title: string; subtitle?: string; dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-[11px] uppercase tracking-[0.18em] text-gold">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-3 ${dark ? "text-white/65" : "text-black/60"}`}>{subtitle}</p>
      )}
    </div>
  );
}

/* CASE STUDIES */
const CASE_STUDIES = [
  {
    industry: "FinTech SaaS",
    title: "Payments Platform Pre-Launch Hardening",
    scope: "End-to-end functional, API, security & load testing across web + mobile before public launch.",
    metrics: [
      { icon: Bug, label: "Critical bugs found", value: "142" },
      { icon: TrendingUp, label: "Release confidence", value: "+92%" },
      { icon: TrendingDown, label: "Production incidents", value: "-78%" },
    ],
  },
  {
    industry: "Healthcare",
    title: "Patient Portal Regression Suite",
    scope: "Built automated regression suite + HIPAA-focused UAT for a multi-clinic patient portal.",
    metrics: [
      { icon: Timer, label: "Release cycle time", value: "-64%" },
      { icon: Bug, label: "Escaped defects", value: "-88%" },
      { icon: TrendingDown, label: "Downtime / month", value: "-91%" },
    ],
  },
  {
    industry: "E-commerce",
    title: "Peak-Season Load & Checkout QA",
    scope: "Load, payment gateway and cross-browser testing before Black Friday sale.",
    metrics: [
      { icon: Gauge, label: "Peak throughput", value: "12x" },
      { icon: TrendingDown, label: "Checkout failure rate", value: "-73%" },
      { icon: Award, label: "Uptime during sale", value: "99.98%" },
    ],
  },
  {
    industry: "EdTech",
    title: "Learning Platform Mobile QA",
    scope: "Manual + automated QA across 40+ device/OS combinations for a live-class platform.",
    metrics: [
      { icon: Bug, label: "Device-specific bugs", value: "96" },
      { icon: TrendingUp, label: "App store rating", value: "4.2 → 4.8" },
      { icon: TrendingDown, label: "Crash rate", value: "-82%" },
    ],
  },
  {
    industry: "Enterprise SaaS",
    title: "ERP Rollout UAT & Integration Testing",
    scope: "UAT coordination and API integration QA across CRM, billing and inventory modules.",
    metrics: [
      { icon: Timer, label: "Go-live delay avoided", value: "6 weeks" },
      { icon: Bug, label: "Integration defects", value: "58 fixed" },
      { icon: TrendingUp, label: "User acceptance", value: "97%" },
    ],
  },
];

function CaseStudies() {
  return (
    <section className="border-b border-black/5 bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          eyebrow="Case Studies"
          title="QA engagements with measurable outcomes"
          subtitle="A snapshot of recent testing engagements — the bugs we caught, the confidence we shipped, and the downtime we prevented."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.title}
              className="group relative flex flex-col rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gold">
                {cs.industry}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{cs.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">{cs.scope}</p>
              <div className="mt-5 grid gap-3 border-t border-black/5 pt-5">
                {cs.metrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-black/70">
                        <Icon className="h-4 w-4 text-gold" />
                        {m.label}
                      </div>
                      <span className="text-base font-semibold tracking-tight text-black">
                        {m.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* QA AUDIT REQUEST FORM */
function AuditForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productType: "",
    stage: "",
    timeline: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hi SMad Works, I'd like to request a QA audit.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      `Product type: ${form.productType}`,
      `Current stage: ${form.stage}`,
      `Timeline: ${form.timeline}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean).join("\n");
    window.open(waUrl(msg), "_blank", "noreferrer");
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";
  const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-black/60";

  return (
    <section id="qa-audit" className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <SectionHead
              eyebrow="Request an Audit"
              title="Get a free QA audit for your product"
              subtitle="Share a few details and our QA lead will get back within one business day with a tailored testing plan."
            />
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              {[
                "Independent audit of your current QA maturity",
                "Risk-based test plan aligned with your release timeline",
                "Recommendations across manual, automation & performance",
                "No obligation — free 30 minute consultation",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="rounded-full bg-gold/10 p-4 text-gold">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Request sent</h3>
                <p className="mt-2 max-w-sm text-sm text-black/60">
                  We've opened WhatsApp with your details. Our QA lead will respond within one business day.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className={labelCls}>Full name</label>
                  <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Jane Doe" />
                </div>
                <div className="sm:col-span-1">
                  <label className={labelCls}>Work email</label>
                  <input required type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="jane@company.com" />
                </div>
                <div className="sm:col-span-1">
                  <label className={labelCls}>Company</label>
                  <input value={form.company} onChange={update("company")} className={inputCls} placeholder="Company name" />
                </div>
                <div className="sm:col-span-1">
                  <label className={labelCls}>Phone / WhatsApp</label>
                  <input value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+91 ..." />
                </div>
                <div className="sm:col-span-1">
                  <label className={labelCls}>Product type</label>
                  <select required value={form.productType} onChange={update("productType")} className={inputCls}>
                    <option value="">Select</option>
                    <option>Web App / SaaS</option>
                    <option>Mobile App (iOS / Android)</option>
                    <option>E-commerce Store</option>
                    <option>ERP / CRM / Internal Tool</option>
                    <option>API / Backend Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className={labelCls}>Current stage</label>
                  <select required value={form.stage} onChange={update("stage")} className={inputCls}>
                    <option value="">Select</option>
                    <option>Idea / Design</option>
                    <option>MVP in development</option>
                    <option>Beta / Pre-launch</option>
                    <option>Live in production</option>
                    <option>Scaling / Post-launch</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Timeline</label>
                  <select required value={form.timeline} onChange={update("timeline")} className={inputCls}>
                    <option value="">Select</option>
                    <option>Urgent — within 1 week</option>
                    <option>Within 2–4 weeks</option>
                    <option>1–3 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Anything else we should know?</label>
                  <textarea rows={4} value={form.notes} onChange={update("notes")} className={inputCls} placeholder="Tech stack, known issues, focus areas..." />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-black/50">By submitting, you agree to be contacted about your QA audit.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-black"
                  >
                    Request QA Audit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
