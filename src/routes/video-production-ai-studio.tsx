import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP_NUMBER = "917439668751";
const waUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

type Video = { id: string; title: string; category: string };
const VIDEOS: Video[] = [
  { id: "hyMIKPfsUPE", title: "Farewell party today. New job tomorrow.", category: "Social Media Reels" },
  { id: "9MaIKK0qYTg", title: "Doctor/Nurse Job Hunt Problems?", category: "Advertisement Videos" },
  { id: "9AXqP-tA-Gw", title: "From Nursing Graduate to Dream Job", category: "Corporate Videos" },
  { id: "nL8g0WJAY9E", title: "One App. Unlimited Healthcare Opportunities", category: "Corporate Videos" },
  { id: "b8xef46F-vY", title: "Yaar… tu sabko job dilwa raha hai??", category: "Advertisement Videos" },
  { id: "wIfoKhlU8MM", title: "The Shortcut Guy — Comedy Series", category: "Advertisement Videos" },
  { id: "UCKDhOBNjUU", title: "The Real Heroes Behind Every Patient's Journey", category: "Corporate Videos" },
  { id: "TfdJ686scOA", title: "Doctor discovers hiring apps are harder than surgery", category: "Advertisement Videos" },
  { id: "BUuB_o6YRa0", title: "Medilancers Anthem", category: "Corporate Videos" },
  { id: "eLzpTlWJozk", title: "Introducing MIPP by Medilancers", category: "Corporate Videos" },
  { id: "rqnf6LPhd6Y", title: "Beta Doctor Ban Gaya — #Shorts", category: "Social Media Reels" },
  { id: "ysBVT_WM5jc", title: "One empty chair can impact hundreds", category: "Corporate Videos" },
];

const CATEGORIES = [
  "All",
  "Social Media Reels",
  "Advertisement Videos",
  "Corporate Videos",
] as const;

export const Route = createFileRoute("/video-production-ai-studio")({
  head: () =>
    serviceHead({
      path: "/video-production-ai-studio",
      title: "Video Production & AI Studio | Video Editing & AI Video Generation | SMad Works",
      description:
        "SMad Works Video Production & AI Studio — professional video editing, AI video generation, reels, ads, and corporate videos that capture attention and drive growth.",
      serviceType: "Video Production & AI Studio",
    }),
  component: VideoProductionPage,
});

function VideoProductionPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [featured, setFeatured] = useState<Video>(VIDEOS[0]);
  const [autoplay, setAutoplay] = useState(false);
  const playVideo = (v: Video) => {
    setFeatured(v);
    setAutoplay(true);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        document.getElementById("featured-player")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  };
  const filtered = active === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === active);

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(212,175,55,0.18),transparent_60%),radial-gradient(50%_50%_at_10%_100%,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="animate-fade-in">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/70">
              Video Production & AI Studio
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Create Videos That <span className="text-gold">Capture Attention</span> & Drive Growth
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 md:text-lg">
              From cinematic edits to AI-generated videos, SMad Works transforms your ideas into
              scroll-stopping content for every platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waUrl("Hi SMad Works, I want to start a video project.")}
                target="_blank" rel="noreferrer"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-black"
              >
                Start Your Video Project
              </a>
              <a
                href="#showcase"
                className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition hover:border-gold"
              >
                View Our Work
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-black/55">
              <span className="inline-flex items-center gap-2"><Dot /> Cinematic Editing</span>
              <span className="inline-flex items-center gap-2"><Dot /> AI Video Generation</span>
              <span className="inline-flex items-center gap-2"><Dot /> Reels & Ads</span>
            </div>
          </div>

          {/* Studio mock */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-black to-black/85 p-6 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(212,175,55,0.35),transparent_70%)]" />
              <div className="relative">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-gold">
                  <span>● Live Timeline</span>
                  <span>4K · 60fps</span>
                </div>
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/60">
                  <div className="flex h-full items-center justify-center">
                    <button
                      aria-label="Play"
                      onClick={() => playVideo(VIDEOS[0])}
                      className="grid h-16 w-16 place-items-center rounded-full bg-gold text-black transition hover:scale-105"
                    >
                      ▶
                    </button>
                  </div>
                </div>
                {/* Timeline tracks */}
                <div className="mt-4 space-y-2">
                  {["Video", "Audio", "FX", "AI"].map((label, idx) => (
                    <div key={label} className="flex items-center gap-3 text-[10px] text-white/70">
                      <span className="w-8 uppercase tracking-[0.18em]">{label}</span>
                      <div className="relative h-3 flex-1 overflow-hidden rounded bg-white/5">
                        <div
                          className="absolute inset-y-0 left-0 rounded bg-gradient-to-r from-gold/80 to-gold/30"
                          style={{ width: `${[80, 55, 40, 65][idx]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-[10px]">
                  {["Color", "Motion", "Captions"].map((t) => (
                    <div key={t} className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center text-white/80">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">See Our Work In Action</h2>
              <p className="mt-3 text-black/60">
                Explore our latest edits, AI-generated videos, reels, ads, and creative projects.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@MedilancersCare"
              target="_blank" rel="noreferrer"
              className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium transition hover:border-gold"
            >
              Visit YouTube Channel ↗
            </a>
          </div>

          {/* Featured */}
          <div id="featured-player" className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
            <div className="aspect-video w-full">
              <iframe
                key={featured.id}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${featured.id}?rel=0&autoplay=${autoplay ? 1 : 0}&playsinline=1`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-white">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gold">{featured.category}</div>
                <div className="mt-1 text-base font-medium">{featured.title}</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-xs transition ${
                  active === c
                    ? "border-gold bg-gold text-black"
                    : "border-black/15 text-black/70 hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v) => {
              const isActive = v.id === featured.id;
              return (
                <button
                  key={v.id}
                  onClick={() => playVideo(v)}
                  className={`group overflow-hidden rounded-2xl border bg-white text-left transition hover:-translate-y-0.5 ${
                    isActive ? "border-gold shadow-[0_20px_50px_-25px_rgba(212,175,55,0.5)]" : "border-black/10 hover:border-gold"
                  }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-black/70 text-gold transition group-hover:bg-gold group-hover:text-black">▶</span>
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-gold">{v.category}</div>
                    <div className="mt-1 text-sm font-medium">{v.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-black/5 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our Video Services</h2>
          <p className="mt-3 max-w-xl text-black/60">End-to-end production powered by creativity and AI.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black text-gold transition group-hover:bg-gold group-hover:text-black">{s.icon}</span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-black/65">{s.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-black/75">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantage */}
      <section className="relative overflow-hidden border-b border-black/5 bg-black py-20 text-white">
        <div className="absolute inset-0 -z-0 opacity-80 bg-[radial-gradient(50%_60%_at_20%_20%,rgba(212,175,55,0.25),transparent_60%),radial-gradient(40%_50%_at_80%_80%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gold">
              AI Advantage
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              Powered By Creativity <span className="text-gold">+</span> Artificial Intelligence
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              SMad Works combines human creativity with cutting-edge AI tools to deliver faster,
              more affordable and more innovative video content — without compromising on quality.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              {["10× faster turnaround", "Lower production cost", "Scalable variations", "On-brand consistency"].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gold" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "AI Avatars", d: "Hyper-real presenters." },
              { t: "Text-to-Video", d: "Scripts become scenes." },
              { t: "Neural FX", d: "Cinematic visual effects." },
              { t: "Auto Captions", d: "Multilingual, on-brand." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:border-gold/60">
                <div className="text-[11px] uppercase tracking-[0.18em] text-gold">{c.t}</div>
                <div className="mt-2 text-sm text-white/80">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our Process</h2>
          <p className="mt-3 max-w-xl text-black/60">From idea to final delivery — a smooth, transparent workflow.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {["Idea", "Script", "Creation", "Editing", "Delivery"].map((step, i) => (
              <div key={step} className="relative rounded-2xl border border-black/10 bg-white p-5">
                <div className="text-[11px] font-medium tracking-[0.18em] text-gold">STEP {i + 1}</div>
                <div className="mt-2 text-lg font-semibold">{step}</div>
                <div className="mt-2 text-xs text-black/55">{PROCESS_DESCS[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-black/5 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Industries We Serve</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Startups", "Influencers", "Coaches", "Real Estate", "Healthcare", "Education", "E-commerce Brands", "Corporate Businesses"].map((i) => (
              <span key={i} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/75 transition hover:border-gold">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* Related */}
      <section className="border-b border-black/5 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Related Services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
              { to: "/ai-content-generation", title: "AI Content Generation" },
              { to: "/logo-creative-design-services", title: "Logo & Creative Design" },
            ].map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-gold"
              >
                <span className="font-medium">{r.title}</span>
                <span className="text-black/50 transition group-hover:translate-x-1 group-hover:text-gold">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="relative overflow-hidden bg-black py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Ready To Turn Your Ideas Into <span className="text-gold">Stunning Videos?</span>
          </h2>
          <p className="mt-4 text-white/70">Let SMad Works create your next viral video experience.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={waUrl("Hi SMad Works, I want to get started with a video project.")}
              target="_blank" rel="noreferrer"
              className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Get Started Today
            </a>
            <a
              href="https://www.youtube.com/@MedilancersCare"
              target="_blank" rel="noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:border-gold"
            >
              Watch More On YouTube
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const SERVICES = [
  {
    icon: "✂",
    title: "Professional Video Editing",
    description: "Clean cuts, cinematic transitions, motion graphics, color grading, captions, effects, and storytelling edits.",
    features: ["Reels & Shorts Editing", "YouTube Videos", "Podcast Editing", "Corporate Videos", "Promotional Content"],
  },
  {
    icon: "✦",
    title: "AI Video Generation",
    description: "Create futuristic videos using advanced AI workflows from scripts, ideas, images, and concepts.",
    features: ["AI Avatar Videos", "Text-to-Video Creation", "AI Product Videos", "AI Explainer Videos", "AI Visual Effects"],
  },
  {
    icon: "◆",
    title: "Content Creation",
    description: "Complete video solutions from idea planning to final production.",
    features: ["Script Writing", "Storyboarding", "Creative Direction", "Branding Videos", "Social Media Campaign Videos"],
  },
];

const PROCESS_DESCS = [
  "We align on goals, audience and message.",
  "Crafted scripts that hook and convert.",
  "Shoot, source or AI-generate assets.",
  "Cinematic edits, color, sound, captions.",
  "Multi-format delivery for every platform.",
];

function Faq() {
  const faqs = [
    { q: "How long does a typical video project take?", a: "Most reels and short edits ship in 3–5 days. Full productions and AI-generated videos typically take 1–3 weeks depending on scope." },
    { q: "Can you edit footage I already have?", a: "Yes — share your raw footage and references, and we'll craft a story-driven edit with motion, color and sound." },
    { q: "Do you create AI videos without real footage?", a: "Absolutely. We generate AI avatars, text-to-video scenes, product visuals and explainers from just a script or idea." },
    { q: "What formats do you deliver?", a: "Vertical reels (9:16), horizontal YouTube/landing (16:9), square (1:1) and platform-optimized exports with captions." },
    { q: "Can I update the YouTube videos shown on this page?", a: "Yes — the showcase supports any YouTube video. Just share the links and we'll plug them into the gallery." },
  ];
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

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />;
}
