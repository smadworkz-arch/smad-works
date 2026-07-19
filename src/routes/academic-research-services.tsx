import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { AcademicPapersScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/academic-research-services")({
  head: () =>
    serviceHead({
      path: "/academic-research-services",
      title: "Academic Research Services | AI & ML Project Help | SMad Works",
      description: "Academic research project services for students and researchers — AI, ML, data analytics, implementation and documentation support.",
      serviceType: "Academic Research Services",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="Academic Research"
      title={<>Turn research ideas into <span className="text-gold">successful projects.</span></>}
      subtitle="End-to-end support for AI, ML and data science academic projects — from problem framing to defense-ready documentation."
      primaryCta={{ label: "Start your research project", whatsappMessage: "Hi SMad Works, I need help with an academic research project." }}
      scene={<AcademicPapersScene />}
      metrics={[
        { k: "300+", v: "Projects shipped" },
        { k: "A+", v: "Avg. grade" },
        { k: "12+", v: "Domains" },
        { k: "24/7", v: "Mentorship" },
      ]}
      capabilities={[
        { t: "Research Assistance", d: "Problem framing, literature review, methodology." },
        { t: "Dissertation Guidance", d: "Structure, chapters, defense preparation." },
        { t: "AI/ML Projects", d: "Original implementations with modern frameworks." },
        { t: "Data Analytics", d: "Datasets, EDA, modeling and visualization." },
        { t: "Documentation Support", d: "Reports, papers, plagiarism-aware writing." },
        { t: "Publication Support", d: "Shape work into conference/journal papers." },
      ]}
      process={[
        { n: "01", t: "Scope", d: "Understand syllabus, guide expectations and rubric." },
        { n: "02", t: "Design", d: "Research questions, methodology and toolset." },
        { n: "03", t: "Implement", d: "Build code, models and experiments." },
        { n: "04", t: "Document", d: "Reports, presentations and code walkthroughs." },
        { n: "05", t: "Defend", d: "Mock viva, Q&A prep and delivery coaching." },
      ]}
      tools={[
        { name: "Python", domain: "python.org" },
        { name: "TensorFlow", domain: "tensorflow.org" },
        { name: "PyTorch", domain: "pytorch.org" },
        { name: "scikit-learn", domain: "scikit-learn.org" },
        { name: "Jupyter", domain: "jupyter.org" },
        { name: "Kaggle", domain: "kaggle.com" },
        { name: "LaTeX", domain: "latex-project.org" },
        { name: "Google Colab", domain: "colab.research.google.com" },
      ]}
      industries={["AI", "Machine Learning", "Data Science", "Web Technologies", "Cloud Computing", "IoT"]}
      faqs={[
        { q: "Do you write the dissertation?", a: "We guide, structure and review. Final writing remains yours to protect academic integrity." },
        { q: "Which domains do you cover?", a: "AI, ML, Data Science, Web, Cloud, IoT and adjacent areas." },
        { q: "Will I get the source code?", a: "Yes — with explanation sessions so you can defend and present confidently." },
        { q: "Do you support publication?", a: "Yes — we help shape research into conference/journal-ready papers." },
      ]}
      finalCtaTitle={<>Research that <span className="text-gold">actually ships.</span></>}
      related={[
        { to: "/ai-content-generation", title: "AI Content Generation" },
        { to: "/ai-course-content-generation", title: "AI Course Content" },
        { to: "/qa-testing-services", title: "QA Testing" },
      ]}
    />
  ),
});
