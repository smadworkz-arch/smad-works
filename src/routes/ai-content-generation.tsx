import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";

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
