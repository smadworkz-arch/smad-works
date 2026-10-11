import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, Send, FolderKanban } from "lucide-react";
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
  encodeURIComponent("Hi SMad Works, I'm a creator and need help managing my content.");

export const Route = createFileRoute("/content-management-for-creators")({
  head: () =>
    serviceHead({
      path: "/content-management-for-creators",
      title: "Content Management for Creators | Planning & Publishing | SMad Works",
      description:
        "Content planning, scheduling, publishing and channel management for digital creators — so you can focus on creating.",
      serviceType: "Content Management for Creators",
    }),
  component: CreatorsPage,
});

function CreatorsPage() {
  return (
    <ServicePageShell>
      <PageHero3D
        eyebrow="Content Management for Creators"
        title={
          <>
            You create.
            <br />
            <span className="text-gold">We handle the rest.</span>
          </>
        }
        subtitle="We plan, schedule, publish and manage your content across every platform so you never miss a post — or a deal."
        primaryCta={{ label: "Book a consultation", href: WHATSAPP, external: true }}
        secondaryCta={{ label: "See services", href: "#services" }}
      />
      <ServiceCardsSection
        id="services"
        eyebrow="Services"
        title={
          <>
            Your content, <span className="text-gold">organised.</span>
          </>
        }
        cards={[
          {
            icon: <CalendarDays size={18} />,
            title: "Content Planning",
            desc: "Monthly content calendars, ideas and series built around your niche and trends.",
            cta: { label: "Plan with us", href: WHATSAPP },
          },
          {
            icon: <Clock size={18} />,
            title: "Scheduling",
            desc: "Posts queued at the best times for each platform, every week.",
            cta: { label: "Get started", href: WHATSAPP },
          },
          {
            icon: <Send size={18} />,
            title: "Publishing",
            desc: "Titles, captions, thumbnails, hashtags and uploads handled for you.",
            cta: { label: "Get started", href: WHATSAPP },
          },
          {
            icon: <FolderKanban size={18} />,
            title: "Channel Management",
            desc: "Comments, community replies, brand-deal inbox and monthly performance reviews.",
            cta: { label: "Get started", href: WHATSAPP },
          },
        ]}
      />
      <BenefitsSection
        title={
          <>
            More time to <span className="text-gold">create.</span>
          </>
        }
        items={[
          { k: "Never miss a post", v: "A consistent schedule that the algorithm rewards." },
          { k: "Save hours", v: "Hand off the admin and get your week back." },
          { k: "Grow faster", v: "Data-led planning based on what your audience loves." },
          { k: "Stay organised", v: "One shared calendar for every platform." },
        ]}
      />
      <ProcessSection
        steps={[
          { t: "Discovery call", d: "We learn your niche, goals and current workflow." },
          { t: "Content plan", d: "We build your monthly calendar together." },
          { t: "Schedule & publish", d: "We handle uploads, captions and timing." },
          { t: "Review", d: "Monthly results and ideas for the next month." },
        ]}
      />
      <FaqBlock
        faqs={[
          { q: "Do you also edit my videos?", a: "Yes — pair this with our Video Production service." },
          { q: "Which platforms?", a: "YouTube, Instagram, TikTok, LinkedIn and more." },
          { q: "Do I keep control?", a: "Always. You approve the calendar before anything goes live." },
        ]}
      />
      <CtaBlock
        title={
          <>
            Let's plan your <span className="text-gold">next month.</span>
          </>
        }
        subtitle="Book a free consultation and get a sample content calendar."
        whatsapp={WHATSAPP}
      />
    </ServicePageShell>
  );
}
