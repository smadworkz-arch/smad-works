import { createFileRoute } from "@tanstack/react-router";
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

const thankwooWorks = [
  { src: twSlide1.url, label: "Human OS — Slide 1" },
  { src: twSlide2.url, label: "Manages Your Apps — Slide 2" },
  { src: twSlide3.url, label: "Calendar Schedule — Slide 3" },
  { src: twSlide4.url, label: "Who Manages Relationships — Slide 4" },
  { src: twSlide5.url, label: "Meet Thankwoo — Slide 5" },
  { src: twSlide1b.url, label: "Last Spoke — Carousel" },
  { src: twSlide2b.url, label: "Still Care? — Carousel" },
  { src: twFacebook.url, label: "Friendships Don't End Overnight" },
  { src: twPost2.url, label: "Reconnect Before It's Too Late" },
];

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
      portfolio={
        <section className="border-b border-black/5 bg-[#fafafa] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/70">
                  Client Work
                </span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Featured project — Thankwoo
                </h2>
                <p className="mt-3 text-black/60">
                  A full social content system for Thankwoo — carousels, launch posts and brand creatives
                  built end-to-end with AI-assisted workflows.
                </p>
              </div>
              <a
                href="https://thankwoo.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium transition hover:border-gold"
              >
                Visit thankwoo.com →
              </a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {thankwooWorks.map((w) => (
                <figure
                  key={w.src}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-gold"
                >
                  <img
                    src={w.src}
                    alt={`Thankwoo — ${w.label}`}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 text-sm text-black/70">{w.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      }
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
