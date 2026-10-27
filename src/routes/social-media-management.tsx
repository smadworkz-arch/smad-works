import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Sparkles, Clapperboard, Megaphone, ArrowRight, Play } from "lucide-react";
import { PageHero3D } from "@/components/three/PageHero3D";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import {
  ServiceCardsSection,
  BenefitsSection,
  ProcessSection,
} from "@/components/motion/LandingSections";
import { SectionHeading } from "@/components/motion/SectionEyebrow";
import { serviceHead } from "@/lib/service-head";

// Assets from existing AI Content Generation
import appmax1 from "@/assets/appmax-01.jpeg.asset.json";
import bxCloud1 from "@/assets/blixeon-cloud-01.png.asset.json";
import bxChain1 from "@/assets/blixeon-chain-01.jpeg.asset.json";
import twSlide1 from "@/assets/thankwoo-Carousel_Slide_1.png.asset.json";

const WHATSAPP =
  "https://wa.me/917439668751?text=" +
  encodeURIComponent("Hi SMad Works, I'd like help with social media management.");

const WHATSAPP_AUDIT =
  "https://wa.me/917439668751?text=" +
  encodeURIComponent(
    "Hi SMad Works, I would like to request a social media growth & analytics audit.",
  );

const featuredWorkExamples = [
  {
    title: "AppMax Brand Growth",
    category: "Mobile App Tech",
    image: appmax1.url,
    link: "/ai-content-generation",
  },
  {
    title: "Blixeon Cloud Architecture",
    category: "Cloud Infrastructure",
    image: bxCloud1.url,
    link: "/ai-content-generation",
  },
  {
    title: "Blixeon Blockchain Ecosystem",
    category: "Web3 & Fintech",
    image: bxChain1.url,
    link: "/ai-content-generation",
  },
  {
    title: "Thankwoo Customer Recognition",
    category: "HR Tech & Recognition",
    image: twSlide1.url,
    link: "/ai-content-generation",
  },
];

const videoHighlights = [
  {
    id: "hyMIKPfsUPE",
    title: "Farewell party today. New job tomorrow.",
    category: "Social Media Reels",
  },
  {
    id: "b8xef46F-vY",
    title: "Yaar… tu sabko job dilwa raha hai??",
    category: "Advertisement Videos",
  },
  {
    id: "rqnf6LPhd6Y",
    title: "Beta Doctor Ban Gaya — #Shorts",
    category: "Social Media Reels",
  },
];

export const Route = createFileRoute("/social-media-management")({
  head: () =>
    serviceHead({
      path: "/social-media-management",
      title: "Social Media Management | Content, Video & Meta Ads | SMad Works",
      description:
        "Grow your brand with monthly analytics, AI content, AI video and Meta Ads campaigns that bring in leads and customers.",
      serviceType: "Social Media Management",
    }),
  component: SocialPage,
});

function SocialPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Social Media Management"
        title={
          <>
            Show up daily.
            <br />
            <span className="text-gold">Grow monthly.</span>
          </>
        }
        subtitle="We plan, create and run your social channels — content, video and paid ads — and report on real growth every month."
        primaryCta={{ label: "Grow my socials", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See services", href: "#services" }}
      />
      <ServiceCardsSection
        id="services"
        eyebrow="What's included"
        title={
          <>
            Everything your feed <span className="text-gold">needs.</span>
          </>
        }
        cards={[
          {
            icon: <BarChart3 size={18} />,
            title: "Monthly Growth Analytics",
            desc: "A clear monthly report on reach, engagement, followers and leads — with data-backed insights on what to do next.",
            cta: { label: "Get a report", href: WHATSAPP_AUDIT },
          },
          {
            icon: <Sparkles size={18} />,
            title: "AI Content Generation",
            desc: "On-brand posts, multi-slide carousels and captions made fast with AI. Explore past client examples from Thankwoo, AppMax & Blixeon.",
            cta: { label: "View content work", to: "/ai-content-generation" },
          },
          {
            icon: <Clapperboard size={18} />,
            title: "AI Video Generation",
            desc: "Scroll-stopping AI videos and reels for your brand, built quickly and at scale. Explore our video showcase portfolio.",
            cta: { label: "Explore video work", to: "/video-production-ai-studio" },
          },
          {
            icon: <Megaphone size={18} />,
            title: "Meta Ads for Lead Generation and Customer Acquisition",
            desc: "Targeted Facebook & Instagram ad campaigns built to acquire qualified leads and paying customers consistently.",
            cta: { label: "Explore Meta Ads", to: "/lead-generation-services" },
          },
        ]}
      />

      {/* Previous Work Showcase from AI Content & Video Generation */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Client Work Examples"
            title={
              <>
                Proven examples from our <span className="text-gold">content & video library.</span>
              </>
            }
            subtitle="Explore high-performing visual carousels and video productions crafted for our partners."
          />

          {/* AI Content Carousels */}
          <div className="mt-12">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">AI Content & Graphic Portfolio</h4>
              <Link
                to="/ai-content-generation"
                className="group flex items-center gap-1.5 text-xs text-gold transition hover:text-white"
              >
                <span>Full AI Content Page</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredWorkExamples.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.06] transition hover:-translate-y-1 hover:border-gold/50"
                >
                  <div className="aspect-square w-full overflow-hidden bg-black/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] uppercase tracking-wider text-gold">
                      {item.category}
                    </span>
                    <h5 className="mt-1 text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI Video Generation Highlights */}
          <div className="mt-16 border-t border-white/5 pt-12">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">AI Video & Reel Highlights</h4>
              <Link
                to="/video-production-ai-studio"
                className="group flex items-center gap-1.5 text-xs text-gold transition hover:text-white"
              >
                <span>Full Video Studio & Player</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {videoHighlights.map((v) => (
                <Link
                  key={v.id}
                  to="/video-production-ai-studio"
                  className="group overflow-hidden rounded-2xl border border-white/20 bg-white/[0.06] transition hover:border-gold/50"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-black/40">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-black shadow-lg transition group-hover:scale-110">
                        <Play size={18} fill="currentColor" />
                      </span>
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] uppercase tracking-wider text-gold">
                      {v.category}
                    </span>
                    <h5 className="mt-1 text-sm font-semibold text-white">{v.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection
        title={
          <>
            Why brands <span className="text-gold">stay.</span>
          </>
        }
        items={[
          { k: "Consistency", v: "A steady posting calendar you never have to chase." },
          { k: "Speed", v: "AI-assisted creation means more content, faster." },
          { k: "Leads", v: "Ads tied to real enquiries, not just likes." },
          { k: "Clarity", v: "Monthly numbers that show what's working." },
        ]}
      />
      <ProcessSection
        steps={[
          { t: "Audit", d: "We review your channels, audience and competitors." },
          { t: "Plan", d: "A monthly content and ads plan built around your goals." },
          { t: "Create & Run", d: "We produce, post and manage campaigns." },
          { t: "Report", d: "Monthly analytics and next-month improvements." },
        ]}
      />
      <FaqBlock
        faqs={[
          { q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn and YouTube." },
          {
            q: "Is ad spend included?",
            a: "No — ad budget is paid directly to Meta; we manage it.",
          },
          {
            q: "How soon will I see results?",
            a: "Most clients see engagement lift within the first month.",
          },
        ]}
      />
      <CtaBlock
        title={
          <>
            Ready to <span className="text-gold">grow?</span>
          </>
        }
        subtitle="Book a free consultation and get a quick audit of your social channels."
        whatsapp={WHATSAPP}
      />
    </ServicePageShell>
  );
}
