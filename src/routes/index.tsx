import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBg from "@/assets/hero-bg.png.asset.json";
import logo from "@/assets/logo.png.asset.json";
import reviewsImg from "@/assets/reviews.png.asset.json";
import n8n1 from "@/assets/n8n-1.png.asset.json";
import n8n2 from "@/assets/n8n-2.png.asset.json";
import whatsappAuto from "@/assets/whatsapp-auto.png.asset.json";
import qaTesting from "@/assets/qa-testing.png.asset.json";
import aiVideoShowcase from "@/assets/ai-video-showcase.png.asset.json";
import aiCallingAgent from "@/assets/ai-calling-agent.png.asset.json";
import academicResearch from "@/assets/academic-research.png.asset.json";
import automationThatWorks from "@/assets/automation-that-works.png.asset.json";
import operationsManagement from "@/assets/operations-management.png.asset.json";
import aiCourseContent from "@/assets/ai-course-content.png.asset.json";

const WHATSAPP_NUMBER = "917439668751";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi SMad Works, I'd like to know more about your services.")}`;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://smad-works.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://smad-works.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SMad Works",
          url: "https://smad-works.lovable.app",
          description:
            "SMad Works builds AI, automation and digital solutions that help modern businesses scale, simplify operations and grow.",
          areaServed: "Worldwide",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Video Creation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "QA Testing Services" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Content Generation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo & Creative Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Conversion" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Operations Management" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Academic Research" } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Automations", "#automations"],
  ["Process", "#process"],
  ["Industries", "#industries"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

const services = [
  {
    title: "AI Video Creation",
    desc: "Create professional AI-powered visual content that helps brands tell better stories.",
    items: ["AI Generated Videos", "Product Videos", "Social Media Content", "Brand Storytelling"],
    href: "/ai-video-generation-course" as const,
  },
  {
    title: "Business Automation",
    desc: "Reduce manual work and scale operations with intelligent automation systems.",
    items: ["WhatsApp Automation", "AI Calling Agents", "CRM Automation", "Appointment Systems", "HR Automation", "Review Automation"],
    href: "/business-automation" as const,
  },
  {
    title: "QA Testing & QA",
    desc: "We make sure your software works perfectly before your users experience it.",
    items: ["Functional Testing", "UI/UX Testing", "Bug Reporting", "Performance Testing", "Compatibility Testing"],
    href: "/qa-testing-services" as const,
  },
  {
    title: "Academic Research",
    desc: "Helping students and researchers build successful technology projects.",
    items: ["Research Guidance", "AI/ML Projects", "Data Analytics", "Implementation Support", "Documentation"],
    href: "/academic-research-services" as const,
  },
  {
    title: "Creative Design",
    desc: "Creating professional designs that communicate your business effectively.",
    items: ["Company Profiles", "Presentations", "Brochures", "Marketing Creatives", "Brand Materials"],
    href: "/logo-creative-design-services" as const,
  },
];

const allServicePages = [
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
] as const;

const automations = [
  { n: "01", t: "WhatsApp Automation", d: "Automate customer conversations, support, leads and follow-ups.", f: ["Auto Replies", "Chatbots", "Lead Capture", "Broadcast Messages"] },
  { n: "02", t: "AI Calling Agent", d: "AI employees that call, communicate and convert.", f: ["Lead Qualification", "Follow-up Calls", "Appointment Booking", "Customer Feedback"] },
  { n: "03", t: "CRM Automation", d: "Manage your customers without manual tracking.", f: ["Lead Management", "Sales Pipeline", "Reports", "Follow-ups"] },
  { n: "04", t: "Appointment Automation", d: "Smart booking systems for growing businesses.", f: ["Calendar Sync", "Reminders", "Customer Updates"] },
  { n: "05", t: "HR Recruitment", d: "Simplify hiring workflows.", f: ["Resume Screening", "Candidate Tracking", "Interview Scheduling"] },
  { n: "06", t: "Review Automation", d: "Build stronger online reputation.", f: ["Feedback Collection", "Google Reviews", "Customer Insights"] },
  { n: "07", t: "Real Estate Automation", d: "Convert property enquiries into customers.", f: ["Property Matching", "Lead Qualification", "Site Visit Scheduling"] },
];

const process = [
  ["01", "Discover", "We understand your requirements."],
  ["02", "Strategy", "We design the perfect solution."],
  ["03", "Build", "We develop your system."],
  ["04", "Test", "We ensure everything works."],
  ["05", "Launch", "Your solution goes live."],
  ["06", "Support", "We continuously improve."],
];

const industries = ["Healthcare", "Education", "Real Estate", "E-Commerce", "Startups", "Recruitment", "Service Businesses", "Agencies"];

const SERVICE_OPTIONS: string[] = [
  "Automation",
  "QA Testing",
  "Academic Research",
  "Operations Management Services",
  "AI Content Generation",
  "AI Course Content Material Generation",
  "Teaching AI Video Generation Courses",
  "Teaching AI Automation Courses",
  "Lead Generation Services",
  "Lead Conversion Services",
  "Logo and Creative Design",
];

const why = ["Customized Solutions", "Modern Technology", "Business Focused Approach", "Reliable Delivery", "Long Term Support"];

const serviceShowcase = [
  {
    src: aiVideoShowcase.url,
    title: "AI Video Generation & AI Content Creation",
    label: "AI Content",
    desc: "Premium AI-generated videos, reels and product visuals tailored for conversion-focused brands.",
  },
  {
    src: aiCallingAgent.url,
    title: "AI Calling Agent Automation",
    label: "Voice Automation",
    desc: "Automated voice agents for lead qualification, appointments and always-on customer communication.",
  },
  {
    src: academicResearch.url,
    title: "Academic Research & Dissertation Services",
    label: "Research Support",
    desc: "Research, analysis, writing and proofing workflows delivered with structure and quality assurance.",
  },
  {
    src: automationThatWorks.url,
    title: "Automation That Works",
    label: "Workflow Systems",
    desc: "Integrated business automations across WhatsApp, CRM, forms, webhooks and operations tools.",
  },
  {
    src: operationsManagement.url,
    title: "Operations Management Services",
    label: "Operations",
    desc: "Process design, KPI tracking and structured execution systems that keep teams aligned.",
  },
  {
    src: aiCourseContent.url,
    title: "AI Course Content Generation",
    label: "Education AI",
    desc: "Structured AI-assisted lesson material, assessments, presentations and learning assets.",
  },
  {
    src: qaTesting.url,
    title: "QA Testing & Quality Assurance",
    label: "Quality Assurance",
    desc: "Manual and automated testing support for reliable digital products, better performance and fewer bugs.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const container = showcaseRef.current;
    if (!container) return;

    const getStep = () => Math.min(container.clientWidth * 0.88, 520);

    const interval = window.setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const next = container.scrollLeft + getStep();

      container.scrollTo({
        left: next >= maxScrollLeft - 8 ? 0 : next,
        behavior: "smooth",
      });
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  const scrollShowcase = (direction: "prev" | "next") => {
    const container = showcaseRef.current;
    if (!container) return;

    const step = Math.min(container.clientWidth * 0.88, 520);
    container.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  const handleShowcasePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = showcaseRef.current;
    if (!container) return;

    dragStateRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: container.scrollLeft,
    };

    container.setPointerCapture(event.pointerId);
  };

  const handleShowcasePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = showcaseRef.current;
    const dragState = dragStateRef.current;
    if (!container || !dragState.isDown) return;

    const walk = event.clientX - dragState.startX;
    container.scrollLeft = dragState.scrollLeft - walk;
  };

  const handleShowcasePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = showcaseRef.current;
    if (!container) return;

    dragStateRef.current.isDown = false;
    if (container.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <SiteHeader />

      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden bg-black text-white">
        <img
          src={heroBg.url}
          alt="SMad Works — love work love"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Design • Develop • Deliver
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build Smarter. Automate Faster. Grow Without Limits.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              We build AI-powered software, automate business operations, and create digital solutions that help startups and enterprises scale with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90">
                Explore Services
              </a>
              <a href="#contact" className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
                Start Your Project
              </a>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {[
                ["100+", "Projects Delivered"],
                ["95%", "Client Satisfaction"],
                ["AI", "Smart Solutions"],
                ["Fast", "Delivery"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-white">{n}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">About</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">A technology partner built for modern businesses.</h2>
              <p className="mt-6 text-muted-foreground">
                SMad Works creates intelligent solutions for organizations that want to automate workflows, improve efficiency, enhance customer experience, and build scalable digital products.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our goal is simple: understand your challenge, design the right solution, and deliver measurable results.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">How we work</p>
              <ol className="mt-6 space-y-4">
                {["Understand", "Design", "Develop", "Test", "Deliver"].map((s, i) => (
                  <li key={s} className="flex items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-xs font-medium text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-medium">{s}</span>
                    {i < 4 && <span className="h-px w-6 bg-border" />}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">What we do</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl sm:text-5xl">Services crafted around outcomes, not features.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">From AI video to enterprise automation — one team, end-to-end.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="group flex flex-col rounded-3xl border border-border bg-background p-8 transition-all hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.href}
                  className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-gold transition group-hover:gap-2"
                >
                  Explore service <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-secondary/30 p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">All services</p>
                <h3 className="mt-2 font-display text-2xl">Dedicated pages for every service we offer.</h3>
              </div>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {allServicePages.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm transition hover:border-gold/50 hover:text-gold"
                >
                  <span>{p.title}</span>
                  <span aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SHOWCASE */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Service showcase</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">See what we build across automation, content, research and delivery.</h2>
              <p className="mt-5 text-muted-foreground">This section moves fast automatically, and your visitors can also swipe, drag or use the controls to slide through it.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollShowcase("prev")}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-lg text-foreground transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Previous showcase slide"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollShowcase("next")}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-lg text-foreground transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Next showcase slide"
              >
                →
              </button>
            </div>
          </div>

          <div className="relative mt-12">
            <div
              ref={showcaseRef}
              onPointerDown={handleShowcasePointerDown}
              onPointerMove={handleShowcasePointerMove}
              onPointerUp={handleShowcasePointerUp}
              onPointerCancel={handleShowcasePointerUp}
              onPointerLeave={handleShowcasePointerUp}
              className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 select-none"
            >
              {serviceShowcase.map((item) => (
                <article
                  key={item.title}
                  className="group min-w-[88%] snap-center overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-soft)] transition-all hover:border-gold/40 hover:shadow-[var(--shadow-card)] sm:min-w-[72%] lg:min-w-[58%] xl:min-w-[52%]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-wrap items-start justify-between gap-4 border-t border-border px-6 py-5 sm:px-7">
                    <div className="max-w-2xl">
                      <span className="inline-flex rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        {item.label}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.desc}</p>
                    </div>
                    <a
                      href="#contact"
                      className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-gold/40 hover:text-gold"
                    >
                      Discuss this
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-background via-background/85 to-transparent lg:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-gradient-to-l from-background via-background/85 to-transparent lg:block" />
          </div>
        </div>
      </section>
 
      {/* AUTOMATIONS */}
      <section id="automations" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Automations</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Automation that works for your business.</h2>
            <p className="mt-5 text-muted-foreground">Seven battle-tested systems that replace manual work with reliable, always-on workflows.</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {automations.map((a) => (
              <div key={a.n} className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-gold/40 hover:shadow-[var(--shadow-soft)]">
                <div className="font-display text-3xl text-gold">{a.n}</div>
                <h3 className="mt-3 text-base font-semibold">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {a.f.map((x) => (
                    <li key={x} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground">{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">How we work</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">A clear path from idea to launch.</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {process.map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-border bg-background p-6">
                <div className="font-display text-2xl text-gold">{n}</div>
                <div className="mt-2 text-base font-semibold">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION SHOWCASE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">In action</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Real automation flows we build.</h2>
            <p className="mt-5 text-muted-foreground">A look inside the n8n workflows, lead-scoring pipelines and WhatsApp conversation trees powering our clients.</p>
          </div>

          <div className="group/carousel mt-12 overflow-hidden rounded-3xl border border-border bg-[#0b0b0e] shadow-[var(--shadow-soft)]">
            <div className="relative">
              <div className="animate-marquee-x-slow pause-on-hover group-hover/carousel:[animation-play-state:paused] flex w-max gap-6 p-6">
                {[
                  { src: n8n1.url, title: "n8n Workflow", desc: "Form intake → AI enrichment → CRM record" },
                  { src: n8n2.url, title: "AI Lead Scoring", desc: "Auto-classified leads with intent & budget signals" },
                  { src: n8n1.url, title: "n8n Workflow", desc: "Form intake → AI enrichment → CRM record" },
                  { src: n8n2.url, title: "AI Lead Scoring", desc: "Auto-classified leads with intent & budget signals" },
                ].map((item, i) => (
                  <figure
                    key={i}
                    className="group/card relative w-[min(86vw,720px)] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-background transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.src}
                        alt={`${item.title} automation built by SMad Works`}
                        className="w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="flex items-center justify-between gap-4 border-t border-border px-6 py-4 text-sm">
                      <div>
                        <div className="font-semibold text-foreground">{item.title}</div>
                        <div className="text-muted-foreground">{item.desc}</div>
                      </div>
                      <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors group-hover/card:border-gold/40 group-hover/card:text-gold">n8n</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0b0e] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0b0e] to-transparent" />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-soft)]">
            <div className="relative h-[420px] overflow-hidden">
              <div className="animate-marquee-x flex h-full w-max">
                <img src={whatsappAuto.url} alt="WhatsApp chatbot automation flow built by SMad Works" className="h-full w-auto object-cover" />
                <img src={whatsappAuto.url} alt="" aria-hidden className="h-full w-auto object-cover" />
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
            </div>
            <div className="border-t border-border px-6 py-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">WhatsApp Automation</span> · Multi-language conversational flows for support, hiring and lead capture
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90">
              Automate on WhatsApp
            </a>
            <a href="#contact" className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-gold/40">
              Discuss your workflow
            </a>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section id="industries" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Industries</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Industries we serve.</h2>
              <p className="mt-5 text-muted-foreground">We adapt our methods to the rhythm of every industry we work with.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {industries.map((i) => (
                <div key={i} className="rounded-2xl border border-border bg-background px-5 py-6 text-sm font-medium transition-colors hover:border-gold/40">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Reviews</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">What clients are saying.</h2>
              <p className="mt-5 text-muted-foreground">Verified feedback from teams we've delivered for — across QA, automation, video and design.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-2xl text-gold">★★★★★</span>
              <span>Avg 4.9 / 5</span>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-soft)]">
            <div className="relative h-[460px] overflow-hidden">
              <div className="animate-marquee-y flex flex-col">
                <img src={reviewsImg.url} alt="Client reviews for SMad Works" className="w-full object-cover" />
                <img src={reviewsImg.url} alt="" aria-hidden className="w-full object-cover" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </div>
      </section>



      {/* WHY */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Why SMad Works</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Built to be a long-term partner.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {why.map((w) => (
              <div key={w} className="rounded-2xl border border-border bg-background p-6">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold">✓</span>
                <div className="mt-4 text-sm font-semibold">{w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Contact</p>
              <h2 className="mt-4 font-display text-5xl">Have an idea? <em className="text-gold not-italic">Let's build it.</em></h2>
              <p className="mt-5 max-w-md text-muted-foreground">Tell us about your project. We'll reply within one business day.</p>

              <div className="mt-10 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border">@</span>
                  <a href="mailto:smadworkz@gmail.com" className="hover:text-foreground">smadworkz@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border">✆</span>
                  Available Mon — Sat
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = (fd.get("name") as string) || "";
                const phone = (fd.get("phone") as string) || "";
                const email = (fd.get("email") as string) || "";
                const service = (fd.get("service") as string) || "";
                const message = (fd.get("message") as string) || "";
                const text =
                  `Hi SMad Works,\n\n` +
                  `Name: ${name}\n` +
                  `Phone: ${phone}\n` +
                  `Email: ${email}\n` +
                  `Service Interested In: ${service}\n\n` +
                  `Message:\n${message}`;
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
              }}
              className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" id="contact-name" />
                <Field label="Phone" name="phone" id="contact-phone" />
                <Field label="Email" name="email" id="contact-email" type="email" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label htmlFor="contact-service" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Service Interested In</label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                    className="mt-2 w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea id="contact-message" name="message" rows={4} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90">
                  Send Message
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-gold/40">
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, id, type = "text", className = "" }: { label: string; name: string; id: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={id} name={name} type={type} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
    </div>
  );
}

