import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceFinder } from "@/components/ServiceFinder";
import { ClientOnly } from "@/components/ClientOnly";
import { TiltCard } from "@/components/three/TiltCard";
import { InteractiveVideoBackground } from "@/components/InteractiveVideoBackground";
import heroVideo from "@/assets/smad-home-hero.mp4.asset.json";
import heroVideoWebm from "@/assets/smad-home-hero.webm.asset.json";
import heroVideoPoster from "@/assets/smad-home-hero-poster.jpg.asset.json";
import reviewsImg from "@/assets/reviews.png.asset.json";
import qaTesting from "@/assets/qa-testing.png.asset.json";
import aiVideoShowcase from "@/assets/ai-video-showcase.png.asset.json";
import aiCallingAgent from "@/assets/ai-calling-agent.png.asset.json";
import academicResearch from "@/assets/academic-research.png.asset.json";
import automationThatWorks from "@/assets/automation-that-works.png.asset.json";
import operationsManagement from "@/assets/operations-management.png.asset.json";
import aiCourseContent from "@/assets/ai-course-content.png.asset.json";
import n8n1 from "@/assets/n8n-1.png.asset.json";
import n8n2 from "@/assets/n8n-2.png.asset.json";
import whatsappAuto from "@/assets/whatsapp-auto.png.asset.json";

const ThreeBackground = lazy(() => import("@/components/three/ThreeBackground"));

const WHATSAPP_NUMBER = "917439668751";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi SMad Works, I'd like to know more about your services.")}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMad Works — AI, Automation & Digital Solutions" },
      {
        name: "description",
        content:
          "SMad Works builds AI-powered software, automates business operations, and creates digital solutions for confident growth.",
      },
      { property: "og:title", content: "SMad Works — AI, Automation & Digital Solutions" },
      {
        property: "og:description",
        content: "Build smarter, automate faster, and grow without limits with SMad Works.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://smad-works.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
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
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "AI Content Generation" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Logo & Creative Design" },
            },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Conversion" } },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Operations Management" },
            },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Academic Research" } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Operations Management",
    desc: "Build smoother, more efficient business operations.",
    href: "/operations-management-services" as const,
  },
  {
    title: "Social Media Management",
    desc: "Create a consistent presence and grow your audience.",
    href: "/social-media-management" as const,
  },
  {
    title: "Video Production",
    desc: "Professional editing and video creation for your brand.",
    href: "/video-production-ai-studio" as const,
  },
  {
    title: "Content Management",
    desc: "Plan, publish, and manage content with confidence.",
    href: "/content-management-for-creators" as const,
  },
];

const automations = [
  {
    n: "01",
    t: "WhatsApp Automation",
    d: "Automate customer conversations, support, leads and follow-ups.",
    f: ["Auto Replies", "Chatbots", "Lead Capture", "Broadcast Messages"],
  },
  {
    n: "02",
    t: "AI Calling Agent",
    d: "AI employees that call, communicate and convert.",
    f: ["Lead Qualification", "Follow-up Calls", "Appointment Booking", "Customer Feedback"],
  },
  {
    n: "03",
    t: "CRM Automation",
    d: "Manage your customers without manual tracking.",
    f: ["Lead Management", "Sales Pipeline", "Reports", "Follow-ups"],
  },
  {
    n: "04",
    t: "Appointment Automation",
    d: "Smart booking systems for growing businesses.",
    f: ["Calendar Sync", "Reminders", "Customer Updates"],
  },
  {
    n: "05",
    t: "HR Recruitment",
    d: "Simplify hiring workflows.",
    f: ["Resume Screening", "Candidate Tracking", "Interview Scheduling"],
  },
  {
    n: "06",
    t: "Review Automation",
    d: "Build stronger online reputation.",
    f: ["Feedback Collection", "Google Reviews", "Customer Insights"],
  },
  {
    n: "07",
    t: "Real Estate Automation",
    d: "Convert property enquiries into customers.",
    f: ["Property Matching", "Lead Qualification", "Site Visit Scheduling"],
  },
];

const processSteps = [
  ["01", "Discover", "We understand your requirements."],
  ["02", "Strategy", "We design the perfect solution."],
  ["03", "Build", "We develop your system."],
  ["04", "Test", "We ensure everything works."],
  ["05", "Launch", "Your solution goes live."],
  ["06", "Support", "We continuously improve."],
] as const;

import { industries as industryList } from "@/lib/industries-data";

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

const why = [
  "Customized Solutions",
  "Modern Technology",
  "Business Focused Approach",
  "Reliable Delivery",
  "Long Term Support",
];

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

/* ---------------- SECTION HELPERS ---------------- */

function SectionShell({
  id,
  children,
  tone = "dark",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "dark" | "darker";
}) {
  return (
    <section
      id={id}
      className={`relative border-t border-white/5 ${tone === "darker" ? "bg-black/40" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">{children}</div>
    </section>
  );
}

function RevealOnScroll({
  children,
  delay = 0,
  y = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: Math.min(y, 18) }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- SECTIONS ---------------- */

function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">About</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">
            A technology partner built for modern businesses.
          </h2>
          <p className="mt-6 text-white/70">
            SMad Works creates intelligent solutions for organizations that want to automate
            workflows, improve efficiency, enhance customer experience, and build scalable digital
            products.
          </p>
          <p className="mt-4 text-white/70">
            Our goal is simple: understand your challenge, design the right solution, and deliver
            measurable results.
          </p>
        </RevealOnScroll>
      </div>
    </SectionShell>
  );
}

function ServicesSection() {
  return (
    <SectionShell id="services">
      <RevealOnScroll>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Solutions</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl text-white sm:text-5xl">
          The right support to move your business forward.
        </h2>
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={s.href}
              className="group block h-full rounded-xl border border-white/20 bg-white/[0.06] transition-colors hover:border-gold/50"
            >
              <TiltCard className="h-full p-5" intensity={5} glow={false}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </div>
                <h3 className="mt-6 font-display text-xl text-white">{s.title}</h3>
                <p className="mt-2 min-h-10 text-sm leading-relaxed text-white/65">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold transition group-hover:gap-3">
                  Explore <span aria-hidden>→</span>
                </span>
              </TiltCard>
            </Link>
          </motion.div>
        ))}
      </div>

    </SectionShell>
  );
}

function ShowcaseSection() {
  return (
    <SectionShell id="work" tone="darker">
      <RevealOnScroll>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Selected work</p>
        <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">A look at what we do.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {serviceShowcase.slice(0, 4).map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.06}>
            <article className="h-full overflow-hidden rounded-2xl border border-white/20 bg-white/[0.06] transition hover:border-gold/50">
              <img src={item.src} alt={item.title} className="aspect-[4/3] w-full object-cover" />
              <div className="px-4 py-4">
                <p className="text-[11px] font-medium uppercase text-gold">{item.label}</p>
                <h3 className="mt-2 font-display text-lg leading-snug text-white">{item.title}</h3>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </SectionShell>
  );
}

function AutomationOrbit() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const baseRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rot = useSpring(useTransform(scrollYProgress, [0, 1], [0, 55]), {
    stiffness: 40,
    damping: 24,
  });
  const negRot = useTransform(rot, (v) => -v);

  const activeItem = automations[active];

  return (
    <SectionShell id="automations">
      <div className="max-w-2xl">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Automations</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">
            Practical business automation.
          </h2>
          <p className="mt-5 text-white/60">
            Everyday workflows, handled with less manual effort.
          </p>
        </RevealOnScroll>
      </div>

      <div ref={ref} className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
        <div className="relative mx-auto h-[360px] w-[360px] max-w-full [perspective:1200px]">
          <motion.div style={{ rotate: rot }} className="absolute inset-0">
            {automations.map((a, i) => {
              const angle = (i / automations.length) * Math.PI * 2;
              const r = 142;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              const isActive = i === active;
              return (
                <motion.button
                  key={a.n}
                  onClick={() => setActive(i)}
                  className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border text-center backdrop-blur transition"
                  style={{ x, y }}
                  animate={{
                    scale: isActive ? 1.04 : 1,
                    borderColor: isActive ? "rgba(212,175,55,0.62)" : "rgba(255,255,255,0.18)",
                    backgroundColor: isActive ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.04)",
                    boxShadow: isActive ? "0 0 18px rgba(212,175,55,0.16)" : "0 0 0 rgba(0,0,0,0)",
                  }}
                >
                  <motion.div style={{ rotate: negRot }} className="flex flex-col items-center">
                    <div className="font-display text-xl text-gold">{a.n}</div>
                    <div className="mt-1 px-1 text-[10px] font-medium leading-tight text-white/85">
                      {a.t.split(" ")[0]}
                    </div>
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>
          {/* Core */}
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50 bg-gold/10 shadow-[0_0_24px_rgba(212,175,55,0.18)]">
            <div className="absolute inset-2 rounded-full border border-gold/20" />
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-gold/40 bg-white/[0.06] p-8 backdrop-blur"
        >
          <div className="font-display text-4xl text-gold">{activeItem.n}</div>
          <h3 className="mt-3 text-2xl font-semibold text-white">{activeItem.t}</h3>
          <p className="mt-3 text-white/70">{activeItem.d}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {activeItem.f.map((x) => (
              <li
                key={x}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {x}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionShell>
  );
}

function ProcessTimeline() {
  return (
    <SectionShell id="process" tone="darker">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Our approach</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Clear from day one.</h2>
        </RevealOnScroll>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
          {["01  Discover", "02  Design", "03  Deliver"].map((step) => (
            <span key={step} className="whitespace-nowrap">
              <span className="text-gold">{step.slice(0, 2)}</span>{step.slice(2)}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function AutomationRealSection() {
  return (
    <SectionShell tone="darker">
      <div className="max-w-2xl">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">In action</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">
            Real automation flows we build.
          </h2>
          <p className="mt-5 text-white/60">
            A look inside the n8n workflows, lead-scoring pipelines and WhatsApp conversation trees
            powering our clients.
          </p>
        </RevealOnScroll>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          {
            src: n8n1.url,
            title: "n8n Workflow",
            desc: "Form intake → AI enrichment → CRM record",
          },
          {
            src: n8n2.url,
            title: "AI Lead Scoring",
            desc: "Auto-classified leads with intent & budget signals",
          },
        ].map((item, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <TiltCard className="overflow-hidden rounded-3xl border border-white/20 bg-white/[0.06]">
              <img src={item.src} alt={item.title} className="w-full object-cover" />
              <div className="border-t border-white/20 px-6 py-4">
                <div className="font-semibold text-white">{item.title}</div>
                <div className="text-sm text-white/60">{item.desc}</div>
              </div>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2}>
        <TiltCard
          className="mt-6 overflow-hidden rounded-3xl border border-white/20 bg-white/[0.06]"
          intensity={5}
        >
          <div className="relative h-[380px] overflow-hidden">
            <div className="animate-marquee-x flex h-full w-max">
              <img
                src={whatsappAuto.url}
                alt="WhatsApp automation flow"
                className="h-full w-auto object-cover"
              />
              <img
                src={whatsappAuto.url}
                alt=""
                aria-hidden
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
          <div className="border-t border-white/20 px-6 py-4 text-sm text-white/70">
            <span className="font-semibold text-white">WhatsApp Automation</span> · Multi-language
            conversational flows
          </div>
        </TiltCard>
      </RevealOnScroll>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          Automate on WhatsApp
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold/60"
        >
          Discuss your workflow
        </a>
      </div>
    </SectionShell>
  );
}

function IndustriesSection() {
  return (
    <SectionShell id="industries">
      <RevealOnScroll>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Industries</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">Industries we serve.</h2>
        <p className="mt-5 max-w-2xl text-white/60">
          Automation tailored to the workflows of every sector we work with.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 [perspective:1400px]">
        {industryList.map((i, idx) => {
          const Icon = i.icon;
          return (
            <motion.div
              key={i.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard
                className="h-full rounded-3xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur transition hover:border-gold/50"
                intensity={5}
              >
                <Link
                  to={`/industries/${i.slug}` as string as "/industries/healthcare"}
                  className="flex h-full flex-col"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-white">{i.name}</h3>
                  <p className="mt-2 text-sm text-white/60">{i.description.split(".")[0]}.</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    Explore <span aria-hidden>→</span>
                  </span>
                </Link>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}

function ReviewsSection() {
  return (
    <SectionShell id="reviews" tone="darker">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Reviews</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">
            What clients are saying.
          </h2>
          <p className="mt-5 text-white/60">Verified feedback from teams we've delivered for.</p>
        </RevealOnScroll>
        <div className="flex items-center gap-2 text-sm text-white/70">
          <span className="text-2xl text-gold">★★★★★</span>
          <span>Avg 4.9 / 5</span>
        </div>
      </div>

      <RevealOnScroll delay={0.1}>
        <TiltCard
          className="mt-12 overflow-hidden rounded-3xl border border-white/20 bg-white/[0.06]"
          intensity={4}
        >
          <div className="relative h-[460px] overflow-hidden">
            <div className="animate-marquee-y flex flex-col">
              <img
                src={reviewsImg.url}
                alt="Client reviews for SMad Works"
                className="w-full object-cover"
              />
              <img src={reviewsImg.url} alt="" aria-hidden className="w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </TiltCard>
      </RevealOnScroll>
    </SectionShell>
  );
}

function WhySection() {
  return (
    <SectionShell>
      <RevealOnScroll>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Why SMad Works</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">
          Built to be a long-term partner.
        </h2>
      </RevealOnScroll>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 [perspective:1200px]">
        {why.map((w, i) => (
          <motion.div
            key={w}
            initial={{ opacity: 0, y: 40, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, rotateY: 8 }}
            className="rounded-2xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/20 text-gold">
              ✓
            </span>
            <div className="mt-4 text-sm font-semibold text-white">{w}</div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <SectionShell id="contact" tone="darker">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Contact</p>
          <h2 className="mt-4 font-display text-5xl text-white">
            Have an idea? <em className="text-gold not-italic">Let's build it.</em>
          </h2>
          <p className="mt-5 max-w-md text-white/60">
            Tell us about your project. We'll reply within one business day.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-white/70">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15">
                @
              </span>
              <a href="mailto:smadworkz@gmail.com" className="hover:text-white">
                smadworkz@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15">
                ✆
              </span>
              Available Mon — Sat
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <TiltCard
            className="rounded-3xl border border-white/20 bg-white/[0.06] p-8 backdrop-blur"
            intensity={4}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = (fd.get("name") as string) || "";
                const phone = (fd.get("phone") as string) || "";
                const email = (fd.get("email") as string) || "";
                const service = (fd.get("service") as string) || "";
                const message = (fd.get("message") as string) || "";
                const text = `Hi SMad Works,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Interested In: ${service}\n\nMessage:\n${message}`;
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
                  "_blank",
                );
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" id="contact-name" />
                <Field label="Phone" name="phone" id="contact-phone" />
                <Field
                  label="Email"
                  name="email"
                  id="contact-email"
                  type="email"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-service"
                    className="text-xs font-medium uppercase tracking-wider text-white/60"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                    className="mt-2 w-full appearance-none rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-gold"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-wider text-white/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-gold"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Send Message
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-gold/60"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </TiltCard>
        </RevealOnScroll>
      </div>
    </SectionShell>
  );
}

function Field({
  label,
  name,
  id,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  id: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-white/60">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-gold"
      />
    </div>
  );
}

function VideoHero() {
  return (
    <section
      id="home"
      className="relative z-20 isolate min-h-[640px] overflow-hidden bg-transparent text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-transparent" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            Design • Develop • Deliver
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl text-white drop-shadow-md">
            Build Smarter. Automate Faster. Grow Without Limits.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg drop-shadow-sm">
            We build AI-powered software, automate business operations, and create digital solutions
            that help startups and enterprises scale with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold hover:text-black shadow-md"
            >
              View Solutions
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/10"
            >
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
  );
}

/* ---------------- MAIN ---------------- */

function Index() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0d] text-white font-sans">
      {/* Global Interactive Video Background */}
      <InteractiveVideoBackground fixed={true} />

      <SiteHeader />

      <VideoHero />

      {/* EVERYTHING BELOW HERO — 3D + motion */}
      <div className="relative z-10 isolate overflow-hidden bg-transparent">
        <ClientOnly>
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
        </ClientOnly>

        <AboutSection />
        <ServicesSection />
        <ShowcaseSection />
        <AutomationOrbit />
        <ProcessTimeline />
        <IndustriesSection />
        <ReviewsSection />
        <WhySection />
        <ContactSection />
      </div>

      <SiteFooter />
      <ServiceFinder />
    </div>
  );
}
