import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/academic-research-services")({
  head: () =>
    serviceHead({
      path: "/academic-research-services",
      title: "Academic Research Services | AI & ML Project Help | SMad Works",
      description:
        "Academic research project services for students and researchers — AI, ML, data analytics, implementation and documentation support by SMad Works.",
      serviceType: "Academic Research Services",
    }),
  component: () => (
    <ServicePage
      eyebrow="Academic Research"
      title="Academic Research Services"
      headline="Turning Research Ideas Into Successful Projects"
      description="We support students and researchers in building technology based academic projects with proper implementation and documentation."
      benefits={["Original implementations", "Plagiarism-aware docs", "End-to-end mentorship", "Latest tools & datasets"]}
      ctaPrimary="Start Your Research Project"
      whatsappMessage="Hi SMad Works, I need help with an academic research project."
      services={[
        { title: "Research Support", items: ["Research Assistance", "Dissertation Guidance", "Documentation Support"] },
        { title: "Implementation", items: ["AI Projects", "Machine Learning Projects", "Data Analytics Projects"] },
        { title: "Delivery", items: ["Software Implementation", "Code Walkthroughs", "Presentation Prep"] },
      ]}
      industries={["Artificial Intelligence", "Machine Learning", "Data Science", "Web Technologies", "Cloud Computing"]}
      faqs={[
        { q: "Do you write the dissertation?", a: "We guide, structure and review. Final writing remains yours to ensure academic integrity." },
        { q: "Which domains do you cover?", a: "AI, ML, Data Science, Web, Cloud, IoT and related areas." },
        { q: "Will I get the source code?", a: "Yes, with explanation sessions to help you defend and present." },
        { q: "Do you support publication?", a: "Yes — we help shape research into conference/journal-ready papers." },
      ]}
      related={[
        { to: "/ai-content-generation", title: "AI Content Generation" },
        { to: "/ai-course-content-generation", title: "AI Course Content" },
        { to: "/qa-testing-services", title: "QA Testing Services" },
      ]}
    />
  ),
});
