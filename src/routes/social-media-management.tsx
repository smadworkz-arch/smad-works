import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Sparkles, Clapperboard, Megaphone } from "lucide-react";
import { PageHero3D } from "@/components/three/PageHero3D";
import { ServicePageShell, FaqBlock, CtaBlock } from "@/components/motion/ServiceShell";
import {
  ServiceCardsSection,
  BenefitsSection,
  ProcessSection,
} from "@/components/motion/LandingSections";
import { serviceHead } from "@/lib/service-head";

const WHATSAPP =
  "https://wa.me/917439668751?text=" +
  encodeURIComponent("Hi SMad Works, I'd like help with social media management.");

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
            desc: "A clear monthly report on reach, engagement, followers and leads — with what to do next.",
            cta: { label: "Get a report", href: WHATSAPP },
          },
          {
            icon: <Sparkles size={18} />,
            title: "AI Content Generation",
            desc: "On-brand posts, carousels and captions made fast with AI. See our past client work.",
            cta: { label: "View our work", to: "/ai-content-generation" },
          },
          {
            icon: <Clapperboard size={18} />,
            title: "AI Video Generation",
            desc: "Scroll-stopping AI videos and reels for your brand, built quickly and at scale.",
            cta: { label: "Explore AI video", to: "/ai-video-generation-course" },
          },
          {
            icon: <Megaphone size={18} />,
            title: "Meta Ads for Leads",
            desc: "Facebook & Instagram ad campaigns built to bring in leads and new customers.",
            cta: { label: "Start ads", href: WHATSAPP },
          },
        ]}
      />
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
          { q: "Is ad spend included?", a: "No — ad budget is paid directly to Meta; we manage it." },
          { q: "How soon will I see results?", a: "Most clients see engagement lift within the first month." },
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
