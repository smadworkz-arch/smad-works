import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceHead } from "@/lib/service-head";
import {
  AlertTriangle, RefreshCw, Users, FileText, BarChart3, TrendingUp,
  Map, Workflow, ClipboardList, UsersRound, Gauge, ShieldCheck,
  LineChart, Cog, FileStack, Sparkles, CheckCircle2, ArrowRight,
  Building2, GraduationCap, Home, ShoppingBag, Landmark, Factory,
  Hotel, Rocket, Target, Brain, Layers, HeartHandshake,
} from "lucide-react";

const WHATSAPP_NUMBER = "917439668751";
const waUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const consultMsg = "Hi SMad Works, I'd like to book a free operations consultation.";
const expertMsg = "Hi SMad Works, I'd like to talk to an operations expert.";

export const Route = createFileRoute("/operations-management-services")({
  head: () =>
    serviceHead({
      path: "/operations-management-services",
      title: "Operations Consulting | SOPs, Workflow & Process Optimization | SMad Works",
      description:
        "Premium operations consulting: SOPs, workflow optimization, KPI dashboards, audits and automation integration to help your business scale.",
      serviceType: "Operations Consulting Services",
    }),
  component: OperationsManagementPage,
});

function OperationsManagementPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <Hero />
      <Challenges />
      <Services />
      <Process />
      <Deliverables />
      <Industries />
      <WhyUs />
      <Tools />
      <Outcomes />
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
            <Cog size={14} /> Operations Consulting
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Build Smarter Operations That Scale With Your Business
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            We help businesses streamline operations, optimize workflows, implement SOPs, improve team coordination, and automate repetitive processes to increase productivity and support sustainable growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waUrl(consultMsg)} target="_blank" rel="noreferrer"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
              Book Free Consultation
            </a>
            <a href={waUrl(expertMsg)} target="_blank" rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold">
              Talk to an Operations Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2. CHALLENGES */
const challenges = [
  { icon: Layers, title: "Disorganized Business Processes", desc: "Ad-hoc systems and scattered tools slow teams down and hide bottlenecks." },
  { icon: RefreshCw, title: "Manual & Repetitive Workflows", desc: "Hours lost every week on tasks that should run themselves." },
  { icon: Users, title: "Poor Team Coordination", desc: "Unclear ownership and siloed communication cause delays and rework." },
  { icon: FileText, title: "Lack of SOPs", desc: "Without documented processes, quality is inconsistent and onboarding is slow." },
  { icon: BarChart3, title: "Inefficient Reporting", desc: "Fragmented data makes it hard to see what's working and what isn't." },
  { icon: TrendingUp, title: "Scaling Operational Challenges", desc: "Systems that worked at 5 people break at 50 without the right foundation." },
];
function Challenges() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Challenges</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Business challenges we solve</h2>
          <p className="mt-3 text-black/60">The operational friction that quietly caps growth — we untangle it.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
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
const services = [
  { icon: Map, title: "Business Process Mapping", desc: "Visualize every workflow end-to-end to expose gaps and opportunities." },
  { icon: Workflow, title: "Workflow Optimization", desc: "Redesign processes for speed, clarity and lower operating cost." },
  { icon: ClipboardList, title: "Standard Operating Procedures (SOPs)", desc: "Documented playbooks that standardize quality and speed onboarding." },
  { icon: UsersRound, title: "Team Coordination & Process Management", desc: "Clear ownership, handoffs and rituals so nothing falls through the cracks." },
  { icon: Gauge, title: "KPI & Performance Tracking", desc: "Define the metrics that matter and track them in one place." },
  { icon: ShieldCheck, title: "Operations Audits", desc: "Deep review of systems, tools and workflows with a prioritized action plan." },
  { icon: LineChart, title: "Reporting Systems", desc: "Live dashboards that give leadership real-time operational visibility." },
  { icon: Cog, title: "Automation Integration", desc: "Layer AI and automation on top of clean processes for compounding gains." },
  { icon: FileStack, title: "Process Documentation", desc: "Living documentation your team actually uses and maintains." },
  { icon: Sparkles, title: "Continuous Improvement Planning", desc: "Quarterly reviews and iteration cycles that keep operations sharp." },
];
function Services() {
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Services</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Our operations services</h2>
          <p className="mt-3 text-black/60">A full-stack consulting offer built around measurable business outcomes.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                <s.icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-black/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. PROCESS */
const steps = [
  "Business Discovery", "Operations Audit", "Workflow Analysis", "Gap Identification",
  "Solution Design", "Implementation", "Monitoring & Optimization", "Continuous Improvement",
];
function Process() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-black py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(212,175,55,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Process</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Our process</h2>
          <p className="mt-3 text-white/65">A transparent, milestone-driven engagement from audit to continuous improvement.</p>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((label, i) => (
            <li key={label} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.06]">
              <div className="text-xs font-medium tracking-[0.2em] text-gold">STEP {String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 text-lg font-semibold">{label}</div>
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute right-4 top-6 hidden text-gold/60 lg:block">
                  <ArrowRight size={18} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 5. DELIVERABLES */
const deliverables = [
  "Operations Audit Report", "Workflow Diagrams", "SOP Documentation",
  "KPI Dashboard Recommendations", "Process Improvement Roadmap",
  "Team Responsibility Matrix", "Automation Recommendations", "Performance Reports",
];
function Deliverables() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Deliverables</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">What you receive</h2>
          <p className="mt-3 text-black/60">Tangible assets your team owns long after the engagement ends.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((d) => (
            <div key={d} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold" />
              <span className="text-sm font-medium">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. INDUSTRIES */
const industries = [
  { name: "Healthcare", slug: "healthcare", icon: Building2 },
  { name: "Education", slug: "education", icon: GraduationCap },
  { name: "Real Estate", slug: "real-estate", icon: Home },
  { name: "Retail", slug: "retail-ecommerce", icon: ShoppingBag },
  { name: "Finance", slug: "finance-insurance", icon: Landmark },
  { name: "Manufacturing", slug: "manufacturing", icon: Factory },
  { name: "Hospitality", slug: "hospitality", icon: Hotel },
  { name: "Startups & SMEs", slug: "startups-smes", icon: Rocket },
];
function Industries() {
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Industries</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Industries we serve</h2>
          <p className="mt-3 text-black/60">Operational playbooks tailored to the realities of your sector.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <Link key={i.slug} to={`/industries/${i.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <span className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
                  <i.icon size={18} />
                </span>
                <span className="font-medium">{i.name}</span>
              </span>
              <ArrowRight size={16} className="text-black/40 transition group-hover:translate-x-1 group-hover:text-gold" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7. WHY US */
const whyUs = [
  { icon: Target, title: "Customized Operational Solutions", desc: "Every engagement is shaped around your business model — no templates." },
  { icon: HeartHandshake, title: "Business-Focused Consulting", desc: "We optimize for business outcomes, not vanity process changes." },
  { icon: ClipboardList, title: "Process Standardization", desc: "Repeatable playbooks that hold up as your team grows." },
  { icon: BarChart3, title: "Data-Driven Decision Making", desc: "KPIs and dashboards that turn operations into a decision engine." },
  { icon: Brain, title: "AI & Automation Integration", desc: "Modern automation layered on top of clean, well-designed processes." },
  { icon: RefreshCw, title: "Ongoing Support & Optimization", desc: "Long-term partnership with quarterly reviews and iteration cycles." },
];
function WhyUs() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Why SMad Works</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Built for operational excellence</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-gold transition group-hover:bg-gold group-hover:text-black">
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

/* 8. TOOLS */
const tools = [
  "Google Workspace", "Notion", "ClickUp", "Slack", "Trello", "Asana",
  "Airtable", "n8n", "Google Sheets", "Microsoft Excel", "Microsoft Teams",
];
function Tools() {
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Stack</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Tools & platforms</h2>
          <p className="mt-3 text-black/60">Best-in-class platforms we implement, integrate and train your team on.</p>
        </div>
        <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((t) => (
            <div key={t} className="flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-5 text-center text-sm font-medium text-black/80 transition hover:-translate-y-0.5 hover:border-gold hover:text-black">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9. OUTCOMES */
const outcomes = [
  "Improve Team Productivity", "Reduce Operational Bottlenecks",
  "Standardize Business Processes", "Increase Process Visibility",
  "Support Business Growth", "Enable Better Decision Making",
];
function Outcomes() {
  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">Outcomes</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Business outcomes you can measure</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
              <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-gold" />
              <span className="text-base font-medium">{o}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10. FAQ */
const faqs = [
  { q: "What is operations consulting and how does it help my business?", a: "Operations consulting is a structured review and redesign of how your business runs day-to-day — workflows, tools, roles, reporting and automation — so you can grow without adding proportional headcount or cost." },
  { q: "How do you build SOPs for my business?", a: "We shadow your team, map current workflows, identify best practices and document each process as a living SOP with clear owners, triggers and checkpoints — stored where your team actually works." },
  { q: "How long does workflow optimization take?", a: "A focused workflow project typically takes 2–4 weeks. Full operations transformation with SOPs, dashboards and automation usually runs 6–12 weeks depending on scope." },
  { q: "Do you help with implementation or only strategy?", a: "Both. We deliver the audit, roadmap and SOPs, then work alongside your team to implement changes, train staff and integrate the tools." },
  { q: "How is pricing structured?", a: "Engagements are scoped per project (audit, SOP build, dashboard setup) or as a monthly retainer for ongoing optimization. You get a fixed quote before we start." },
  { q: "Do you provide ongoing support after implementation?", a: "Yes. Most clients continue on a monthly retainer for quarterly reviews, KPI tracking, SOP updates and continuous improvement." },
  { q: "Can you integrate AI and automation into our operations?", a: "Absolutely — automation is core to what we do. We layer WhatsApp automation, AI agents, workflow tools like n8n and CRM automations on top of clean, well-defined processes." },
  { q: "Which tools do you work with?", a: "Google Workspace, Notion, ClickUp, Slack, Trello, Asana, Airtable, n8n, Google Sheets, Microsoft Excel and Teams — plus most CRMs and communication platforms." },
  { q: "Is operations consulting worth it for small businesses and startups?", a: "Yes — the earlier you standardize, the cheaper it is to scale. We work with startups and SMEs to build foundations that support 10× growth without operational chaos." },
];
function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {faqs.map((f, i) => {
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

/* 11. FINAL CTA */
function FinalCta() {
  return (
    <section id="contact" className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-black to-black/90 p-10 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] md:p-14">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(212,175,55,0.25),transparent_60%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold">Get started</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to Transform Your Business Operations?
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Let's build efficient systems, optimize your workflows, and create scalable operations that support long-term business growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={waUrl(consultMsg)} target="_blank" rel="noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
                Book Free Consultation
              </a>
              <a href={waUrl(expertMsg)} target="_blank" rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
