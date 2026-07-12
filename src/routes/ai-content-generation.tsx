import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import heroImg from "@/assets/ai-content-generation-hero.png.asset.json";
import twSlide1 from "@/assets/thankwoo-Carousel_Slide_1.png.asset.json";
import twSlide2 from "@/assets/thankwoo-Carousel_Slide_2.png.asset.json";
import twSlide3 from "@/assets/thankwoo-Carousel_Slide_3.png.asset.json";
import twSlide4 from "@/assets/thankwoo-Carousel_Slide_4.png.asset.json";
import twSlide5 from "@/assets/thankwoo-Carousel_Slide_5.png.asset.json";
import twFacebook from "@/assets/thankwoo-Facebook.png.asset.json";
import twPost2 from "@/assets/thankwoo-Post_2.png.asset.json";
import twSlide1b from "@/assets/thankwoo-Carousel_Slide_1-2.png.asset.json";
import twSlide2b from "@/assets/thankwoo-Carousel_Slide_2-2.png.asset.json";
import appmax1 from "@/assets/appmax-01.jpeg.asset.json";
import appmax2 from "@/assets/appmax-02.png.asset.json";
import appmax3 from "@/assets/appmax-03.jpeg.asset.json";
import bxCloud1 from "@/assets/blixeon-cloud-01.png.asset.json";
import bxCloud2 from "@/assets/blixeon-cloud-02.jpeg.asset.json";
import bxCloud3 from "@/assets/blixeon-cloud-03.jpeg.asset.json";
import bxChain1 from "@/assets/blixeon-chain-01.jpeg.asset.json";
import bxChain2 from "@/assets/blixeon-chain-02.jpeg.asset.json";
import bxChain3 from "@/assets/blixeon-chain-03.png.asset.json";

type Work = {
  src: string;
  label: string;
  project: "Thankwoo" | "AppMax" | "Blixeon Cloud" | "Blixeon Blockchain";
  category: "Carousel" | "Image";
  aspect: "portrait" | "square";
};

const works: Work[] = [
  // AppMax — mobile app dev brand (red/black)
  { src: appmax1.url, label: "Apps That Drive Growth", project: "AppMax", category: "Carousel", aspect: "square" },
  { src: appmax2.url, label: "Build Beyond Ideas", project: "AppMax", category: "Image", aspect: "square" },
  { src: appmax3.url, label: "Explore Beyond Limits", project: "AppMax", category: "Carousel", aspect: "square" },
  // Blixeon Cloud
  { src: bxCloud1.url, label: "Power The Cloud", project: "Blixeon Cloud", category: "Image", aspect: "square" },
  { src: bxCloud2.url, label: "Cloud Solutions", project: "Blixeon Cloud", category: "Carousel", aspect: "square" },
  { src: bxCloud3.url, label: "Your Business. Everywhere.", project: "Blixeon Cloud", category: "Image", aspect: "square" },
  // Blixeon Blockchain
  { src: bxChain1.url, label: "Build On Blockchain", project: "Blixeon Blockchain", category: "Image", aspect: "square" },
  { src: bxChain2.url, label: "Blockchain Solutions", project: "Blixeon Blockchain", category: "Carousel", aspect: "square" },
  { src: bxChain3.url, label: "Your Idea. On-Chain.", project: "Blixeon Blockchain", category: "Carousel", aspect: "square" },
  // Thankwoo
  { src: twSlide1.url, label: "Human OS — Slide 1", project: "Thankwoo", category: "Carousel", aspect: "portrait" },
  { src: twSlide2.url, label: "Manages Your Apps — Slide 2", project: "Thankwoo", category: "Carousel", aspect: "portrait" },
  { src: twSlide3.url, label: "Calendar Schedule — Slide 3", project: "Thankwoo", category: "Carousel", aspect: "portrait" },
  { src: twSlide4.url, label: "Who Manages Relationships — Slide 4", project: "Thankwoo", category: "Carousel", aspect: "portrait" },
  { src: twSlide5.url, label: "Meet Thankwoo — Slide 5", project: "Thankwoo", category: "Carousel", aspect: "portrait" },
  { src: twSlide1b.url, label: "Last Spoke", project: "Thankwoo", category: "Carousel", aspect: "portrait" },
  { src: twSlide2b.url, label: "Still Care?", project: "Thankwoo", category: "Carousel", aspect: "portrait" },
  { src: twFacebook.url, label: "Friendships Don't End Overnight", project: "Thankwoo", category: "Image", aspect: "portrait" },
  { src: twPost2.url, label: "Reconnect Before It's Too Late", project: "Thankwoo", category: "Image", aspect: "portrait" },
];

const projectFilters = ["All", "Thankwoo", "AppMax", "Blixeon Cloud", "Blixeon Blockchain"] as const;
type ProjectFilter = (typeof projectFilters)[number];

const categoryFilters = ["All types", "Carousel", "Image"] as const;
type CategoryFilter = (typeof categoryFilters)[number];

function Showcase() {
  const [project, setProject] = useState<ProjectFilter>("All");
  const [category, setCategory] = useState<CategoryFilter>("All types");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = works.filter(
    (w) =>
      (project === "All" || w.project === project) &&
      (category === "All types" || w.category === category),
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filtered.length]);

  const current = lightbox !== null ? filtered[lightbox] : null;

  return (
    <section className="border-b border-black/5 bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/70">
              Client Work
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Content we've shipped for brands
            </h2>
            <p className="mt-3 text-black/60">
              A living gallery of AI-assisted creatives — social carousels, launch posts and brand
              visuals — produced end-to-end for our clients.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-semibold tracking-tight">{works.length}+</div>
            <div className="text-xs uppercase tracking-[0.16em] text-black/50">Pieces shipped</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((p) => (
              <button
                key={p}
                onClick={() => setProject(p)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  project === p
                    ? "border-black bg-black text-white"
                    : "border-black/15 bg-white text-black/70 hover:border-gold hover:text-black"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] transition ${
                  category === c
                    ? "border-gold bg-gold/10 text-black"
                    : "border-black/10 bg-white text-black/60 hover:border-gold/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-black/50">No pieces match this filter yet.</p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((w, i) => (
              <button
                key={w.src}
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white text-left shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={w.src}
                    alt={`${w.project} — ${w.label}`}
                    className={`w-full object-cover transition duration-500 group-hover:scale-[1.04] ${
                      w.aspect === "portrait" ? "aspect-[4/5]" : "aspect-square"
                    }`}
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
                    {w.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 px-4 py-3">
                  <span className="truncate text-sm text-black/75">{w.label}</span>
                  <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-gold">
                    {w.project}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {current && lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) =>
                i === null ? null : (i - 1 + filtered.length) % filtered.length,
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:border-gold hover:text-gold"
            aria-label="Previous"
          >
            ←
          </button>
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={`${current.project} — ${current.label}`}
              className="max-h-[90vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-3 flex items-center justify-between gap-4 text-sm text-white/80">
              <span>
                <span className="text-gold">{current.project}</span> — {current.label}
              </span>
              <span className="text-white/50">
                {lightbox + 1} / {filtered.length}
              </span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:border-gold hover:text-gold"
            aria-label="Next"
          >
            →
          </button>
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white transition hover:border-gold hover:text-gold"
          >
            Close ✕
          </button>
        </div>
      )}
    </section>
  );
}

export const Route = createFileRoute("/ai-content-generation")({
  head: () =>
    serviceHead({
      path: "/ai-content-generation",
      title: "AI Content Generation Services | AI Videos, Images & Reels | SMad Works",
      description:
        "Create high quality AI videos, images, reels and marketing creatives with SMad Works. AI content generation for brands, creators and businesses.",
      serviceType: "AI Content Generation",
    }),
  component: () => (
    <ServicePage
      illustration={
        <img
          src={heroImg.url}
          alt="SMad Works AI Content Generation poster featuring AI videos, AI images, social media content and marketing content"
          className="w-full rounded-3xl border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      }
      eyebrow="AI Content"
      title="AI Content Generation"
      headline="Create High Quality Content Faster With AI"
      description="Generate creative digital content powered by advanced AI tools."
      benefits={["Faster production", "Lower cost than shoots", "Consistent brand visuals", "Multi-platform ready"]}
      ctaPrimary="Create AI Content"
      whatsappMessage="Hi SMad Works, I want to create AI content for my brand."
      services={[
        { title: "Visual Content", items: ["AI Videos", "AI Images", "Product Promotions"] },
        { title: "Brand Storytelling", items: ["Brand Storytelling", "Marketing Content", "Ad Creatives"] },
        { title: "Short Form", items: ["Social Media Creatives", "Reels & Shorts", "Thumbnails"] },
      ]}
      portfolio={<Showcase />}
      industries={["Brands", "Creators", "Businesses", "Marketing Teams"]}
      faqs={[
        { q: "Which AI tools do you use?", a: "Best-in-class video, image and voice models combined with custom workflows." },
        { q: "Can it match my brand?", a: "Yes — we craft style references, palettes and tone for consistent output." },
        { q: "Do you handle posting?", a: "Optional — we can plug into your social media calendar and scheduler." },
        { q: "What formats are delivered?", a: "9:16, 1:1, 16:9 in MP4, PNG/JPG and editable source where possible." },
      ]}
      related={[
        { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
        { to: "/logo-creative-design-services", title: "Logo & Creative Design" },
        { to: "/business-automation", title: "Business Automation" },
      ]}
    />
  ),
});
