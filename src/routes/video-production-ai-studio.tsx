import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceHead } from "@/lib/service-head";
import studioLiveTimeline from "@/assets/studio-live-timeline.png.asset.json";


const WHATSAPP_NUMBER = "917439668751";
const waUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

type Client = "Mindset Matters" | "Medilancers";
type WorkType = "Video Editing" | "AI Generated";

type Video = {
  id: string;
  title: string;
  category: string;
  client: Client;
  workType: WorkType;
};

// Mindset Matters — video editing work (real client, listed first)
// Medilancers — AI-generated video content
const VIDEOS: Video[] = [
  // Mindset Matters — Video Editing
  { id: "FDvU_jLifqI", title: "The Psychology of Becoming Unstoppable", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "0byRd614Myk", title: "Decision Fatigue: Take Back Control", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "3IYQVch5rl8", title: "Breaking Out of the Comfort Zone", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "57TtBUheiMM", title: "How Meditation Changes Your Body & Mindset", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "8qTbVbD3LOg", title: "Mindset, Discipline & Journey of an Indian Hockey Player", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "CbOxmfrovuo", title: "How Small Daily Actions Rewire Your Brain", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "CfSaf5Z7RxE", title: "Sleep Smarter: Behtar Neend, Behtar Mindset", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "DrWKljWYoMY", title: "Beliefs: Aapki Zindagi Ka Background Software", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },
  { id: "BnEU8YbYfBQ", title: "Your Calendar Is Your Life", category: "Podcast / Long Form", client: "Mindset Matters", workType: "Video Editing" },

  // Medilancers — AI-Generated Video Content
  { id: "hyMIKPfsUPE", title: "Farewell party today. New job tomorrow.", category: "Social Media Reels", client: "Medilancers", workType: "AI Generated" },
  { id: "9MaIKK0qYTg", title: "Doctor/Nurse Job Hunt Problems?", category: "Advertisement Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "9AXqP-tA-Gw", title: "From Nursing Graduate to Dream Job", category: "Corporate Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "nL8g0WJAY9E", title: "One App. Unlimited Healthcare Opportunities", category: "Corporate Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "b8xef46F-vY", title: "Yaar… tu sabko job dilwa raha hai??", category: "Advertisement Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "wIfoKhlU8MM", title: "The Shortcut Guy — Comedy Series", category: "Advertisement Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "UCKDhOBNjUU", title: "The Real Heroes Behind Every Patient's Journey", category: "Corporate Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "TfdJ686scOA", title: "Doctor discovers hiring apps are harder than surgery", category: "Advertisement Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "BUuB_o6YRa0", title: "Medilancers Anthem", category: "Corporate Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "eLzpTlWJozk", title: "Introducing MIPP by Medilancers", category: "Corporate Videos", client: "Medilancers", workType: "AI Generated" },
  { id: "rqnf6LPhd6Y", title: "Beta Doctor Ban Gaya — #Shorts", category: "Social Media Reels", client: "Medilancers", workType: "AI Generated" },
  { id: "ysBVT_WM5jc", title: "One empty chair can impact hundreds", category: "Corporate Videos", client: "Medilancers", workType: "AI Generated" },
];

const CLIENT_FILTERS = ["All", "Mindset Matters", "Medilancers"] as const;
type ClientFilter = (typeof CLIENT_FILTERS)[number];

export const Route = createFileRoute("/video-production-ai-studio")({
  head: () =>
    serviceHead({
      path: "/video-production-ai-studio",
      title: "Video Production & AI Studio | Video Editing & AI Video Generation | SMad Works",
      description:
        "SMad Works Video Production & AI Studio — professional video editing for creators like Mindset Matters, and AI-generated video content for brands like Medilancers.",
      serviceType: "Video Production & AI Studio",
    }),
  component: VideoProductionPage,
});

function VideoProductionPage() {
  const [clientFilter, setClientFilter] = useState<ClientFilter>("All");
  const [featured, setFeatured] = useState<Video>(VIDEOS[0]);
  const [autoplay, setAutoplay] = useState(false);

  const filtered = useMemo(
    () => (clientFilter === "All" ? VIDEOS : VIDEOS.filter((v) => v.client === clientFilter)),
    [clientFilter],
  );

  const playVideo = (v: Video) => {
    setFeatured(v);
    setAutoplay(true);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        document.getElementById("featured-player")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  };

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
              Videos We <span className="text-gold">Edit</span> & Videos We <span className="text-gold">Create With AI</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 md:text-lg">
              From hand-crafted podcast edits for creators like <strong>Mindset Matters</strong> to
              full AI-generated video content for brands like <strong>Medilancers</strong> — SMad Works
              covers the entire spectrum of modern video.
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
                Enter The Gallery
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-black/55">
              <span className="inline-flex items-center gap-2"><Dot /> Podcast & Long-Form Editing</span>
              <span className="inline-flex items-center gap-2"><Dot /> AI Video Generation</span>
              <span className="inline-flex items-center gap-2"><Dot /> Reels, Ads & Corporate</span>
            </div>
          </div>

          {/* Studio mock */}
          <div className="relative">
            <button
              type="button"
              onClick={() => playVideo(VIDEOS[0])}
              aria-label="Play featured reel"
              className="block w-full overflow-hidden rounded-3xl transition hover:scale-[1.01]"
            >
              <img
                src={studioLiveTimeline.url}
                alt="SMad Works live timeline studio preview"
                className="h-auto w-full rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Featured player */}
      <section id="showcase" className="border-b border-black/5 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">See Our Work In Action</h2>
              <p className="mt-3 text-black/60">
                Videos edited by us and videos generated with AI — playing side by side.
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
                <div className="text-[11px] uppercase tracking-[0.18em] text-gold">
                  {featured.client} · {featured.workType}
                </div>
                <div className="mt-1 text-base font-medium">{featured.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Video Gallery */}
      <VideoGallery
        videos={filtered}
        activeClient={clientFilter}
        setClient={setClientFilter}
        onPlay={playVideo}
        currentId={featured.id}
      />

      {/* Services */}
      <section className="border-b border-black/5 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our Video Services</h2>
          <p className="mt-3 max-w-xl text-black/60">
            Two studios under one roof: a traditional editing suite and an AI generation lab.
          </p>
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
            {["Podcasters", "Startups", "Influencers", "Coaches", "Real Estate", "Healthcare", "Education", "E-commerce Brands", "Corporate Businesses"].map((i) => (
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

/* ============================================================
   3D Rotating Video Gallery (museum-style, no overlap)
   ============================================================ */
function VideoGallery({
  videos,
  activeClient,
  setClient,
  onPlay,
  currentId,
}: {
  videos: Video[];
  activeClient: ClientFilter;
  setClient: (c: ClientFilter) => void;
  onPlay: (v: Video) => void;
  currentId: string;
}) {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [speed, setSpeed] = useState(3.5); // seconds per card

  // Reset active on filter change
  useEffect(() => {
    setActive(0);
  }, [activeClient, videos.length]);

  const count = Math.max(videos.length, 1);
  const anglePer = 360 / count;
  const cardWidth = 320;
  const gap = 56;
  // r = (cardWidth/2 + gap) / tan(π/n) — guarantees no overlap on the cylinder
  const radius =
    count <= 1
      ? 0
      : Math.round((cardWidth / 2 + gap) / Math.tan(Math.PI / Math.max(count, 3)));

  const rotateY = -active * anglePer;

  const go = (dir: 1 | -1) =>
    setActive((a) => (a + dir + videos.length) % Math.max(videos.length, 1));

  useEffect(() => {
    if (!autoPlay || videos.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % videos.length);
    }, speed * 1000);
    return () => window.clearInterval(id);
  }, [autoPlay, speed, videos.length]);

  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-[#0b0b0d] via-[#111114] to-[#0b0b0d] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              The Video Gallery
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              A museum of moving pictures
            </h2>
            <p className="mt-3 text-white/60">
              Rotate the carousel. Podcast edits for <span className="text-gold">Mindset Matters</span>{" "}
              and AI-generated content for <span className="text-gold">Medilancers</span> live together
              on the same wall. Tap any card to play it above.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-semibold tracking-tight text-gold">{VIDEOS.length}+</div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">Pieces exhibited</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CLIENT_FILTERS.map((c) => (
            <button
              key={c}
              onClick={() => setClient(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeClient === c
                  ? "border-gold bg-gold text-black"
                  : "border-white/15 bg-white/5 text-white/70 hover:border-gold hover:text-white"
              }`}
            >
              {c}
              {c === "Mindset Matters" && (
                <span className="ml-2 text-[10px] uppercase tracking-[0.14em] opacity-70">Video Editing</span>
              )}
              {c === "Medilancers" && (
                <span className="ml-2 text-[10px] uppercase tracking-[0.14em] opacity-70">AI Generated</span>
              )}
            </button>
          ))}
        </div>

        {/* 3D Stage */}
        {videos.length === 0 ? (
          <p className="mt-16 text-center text-white/50">No videos match this filter.</p>
        ) : (
          <div className="mt-12">
            <div
              className="relative mx-auto h-[560px] w-full select-none"
              style={{ perspective: "1600px", perspectiveOrigin: "50% 45%" }}
            >
              {/* Floor reflection */}
              <div className="pointer-events-none absolute left-1/2 top-[78%] h-40 w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18),transparent_70%)] blur-2xl" />

              <div
                className="relative mx-auto h-full w-full transition-transform duration-700 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(-${radius}px) rotateY(${rotateY}deg)`,
                }}
              >
                {videos.map((v, i) => {
                  const isActive = i === active;
                  const isPlaying = v.id === currentId;
                  return (
                    <button
                      key={v.id}
                      onClick={() => {
                        if (isActive) onPlay(v);
                        else setActive(i);
                      }}
                      className="group absolute left-1/2 top-1/2 h-[420px] w-[320px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur transition-all duration-500"
                      style={{
                        transform: `rotateY(${i * anglePer}deg) translateZ(${radius}px)`,
                        opacity: isActive ? 1 : 0.5,
                        filter: isActive ? "none" : "brightness(0.65) saturate(0.85)",
                        borderColor: isActive
                          ? "var(--gold)"
                          : isPlaying
                            ? "rgba(212,175,55,0.5)"
                            : "rgba(255,255,255,0.08)",
                      }}
                      aria-label={`${v.client} — ${v.title}${isActive ? " (play)" : " (bring forward)"}`}
                    >
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                      <div className="relative h-[240px] w-full overflow-hidden bg-black">
                        <img
                          src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                          alt={v.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                          loading="lazy"
                          draggable={false}
                        />
                        <span className="absolute inset-0 grid place-items-center">
                          <span
                            className={`grid h-14 w-14 place-items-center rounded-full text-lg transition ${
                              isActive
                                ? "bg-gold text-black shadow-[0_10px_30px_rgba(212,175,55,0.5)]"
                                : "bg-black/70 text-gold"
                            }`}
                          >
                            ▶
                          </span>
                        </span>
                        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                          {v.workType}
                        </span>
                      </div>
                      {/* Plaque */}
                      <div className="flex h-[180px] flex-col justify-between border-t border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-4">
                        <div>
                          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                            {v.client}
                          </div>
                          <div className="mt-2 text-sm leading-snug text-white/90 line-clamp-3">
                            {v.title}
                          </div>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.14em] text-white/45">
                          {v.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:border-gold hover:text-gold"
                aria-label="Rotate left"
              >
                ← Prev
              </button>
              <div className="min-w-[80px] text-center text-xs uppercase tracking-[0.18em] text-white/50">
                {active + 1} / {videos.length}
              </div>
              <button
                onClick={() => go(1)}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:border-gold hover:text-gold"
                aria-label="Rotate right"
              >
                Next →
              </button>
              <button
                onClick={() => onPlay(videos[active])}
                className="ml-2 rounded-full border border-gold bg-gold px-5 py-2 text-sm font-medium text-black transition hover:bg-transparent hover:text-gold"
              >
                ▶ Play video
              </button>
            </div>

            {/* Auto-rotate */}
            <div className="mx-auto mt-5 flex max-w-md flex-wrap items-center justify-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur">
              <button
                onClick={() => setAutoPlay((p) => !p)}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80 transition hover:border-gold hover:text-gold"
                aria-label={autoPlay ? "Pause auto-rotate" : "Play auto-rotate"}
              >
                {autoPlay ? "❚❚ Pause" : "▶ Auto-rotate"}
              </button>
              <label className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-white/50">
                Speed
                <input
                  type="range"
                  min={1}
                  max={8}
                  step={0.5}
                  value={9 - speed}
                  onChange={(e) => setSpeed(9 - Number(e.target.value))}
                  className="h-1 w-32 cursor-pointer accent-[color:var(--gold)]"
                  aria-label="Rotation speed"
                />
                <span className="w-10 text-right text-white/70">{speed}s</span>
              </label>
            </div>

            <p className="mt-3 text-center text-xs text-white/40">
              Tip: click a side card to bring it forward. Tap the front card to play it above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: "✂",
    title: "Professional Video Editing",
    description:
      "Clean cuts, cinematic transitions, motion graphics, color grading, captions and storytelling edits — the same craft behind our Mindset Matters podcast work.",
    features: ["Podcast & Long-Form Editing", "Reels & Shorts Editing", "YouTube Videos", "Corporate Videos", "Promotional Content"],
  },
  {
    icon: "✦",
    title: "AI Video Generation",
    description:
      "End-to-end AI video pipelines — the workflow that powers the entire Medilancers campaign catalog on this page.",
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
    { q: "Do you only make AI videos, or do you also edit real footage?", a: "Both. We edit real footage for clients like Mindset Matters (podcasts, long-form YouTube), and we build fully AI-generated video content for brands like Medilancers. Same studio, two disciplines." },
    { q: "How long does a typical video project take?", a: "Most reels and short edits ship in 3–5 days. Full productions and AI-generated videos typically take 1–3 weeks depending on scope." },
    { q: "Can you edit footage I already have?", a: "Yes — share your raw footage and references, and we'll craft a story-driven edit with motion, color and sound." },
    { q: "Do you create AI videos without real footage?", a: "Absolutely. We generate AI avatars, text-to-video scenes, product visuals and explainers from just a script or idea." },
    { q: "What formats do you deliver?", a: "Vertical reels (9:16), horizontal YouTube/landing (16:9), square (1:1) and platform-optimized exports with captions." },
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
