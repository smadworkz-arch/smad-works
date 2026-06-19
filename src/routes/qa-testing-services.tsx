import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/qa-testing-services")({
  head: () =>
    serviceHead({
      path: "/qa-testing-services",
      title: "QA Testing Services | Manual, Functional & UI Testing | SMad Works",
      description:
        "Professional QA testing services for websites, apps and software. Manual, functional, UI/UX, regression and compatibility testing by SMad Works.",
      serviceType: "QA Testing Services",
    }),
  component: () => (
    <ServicePage
      eyebrow="QA Testing"
      title="QA Testing Services"
      headline="Deliver Reliable Software With Professional QA Testing"
      description="We test digital products to identify issues, improve user experience and ensure smooth performance before launch."
      benefits={["Bug-free releases", "Better UX & retention", "Detailed reports", "Fast turnaround"]}
      ctaPrimary="Improve Your Product Quality"
      whatsappMessage="Hi SMad Works, I'd like to discuss QA testing for my product."
      services={[
        { title: "Functional QA", items: ["Manual Testing", "Functional Testing", "Regression Testing"] },
        { title: "Experience QA", items: ["Website Testing", "Application Testing", "UI/UX Testing"] },
        { title: "Coverage", items: ["Compatibility Testing", "Bug Reporting", "Test Documentation"] },
      ]}
      process={[
        { step: "01", title: "Requirement Understanding" },
        { step: "02", title: "Test Case Preparation" },
        { step: "03", title: "Testing Execution" },
        { step: "04", title: "Issue Reporting" },
        { step: "05", title: "Retesting" },
        { step: "06", title: "Quality Delivery" },
      ]}
      faqs={[
        { q: "Do you do automated testing?", a: "Our core offering is manual + exploratory QA. We can collaborate with your automation team or recommend tools." },
        { q: "How do you report bugs?", a: "Detailed reports with steps, screenshots, severity and reproduction notes — in your tool (Jira, Notion, Trello)." },
        { q: "Can you test mobile apps?", a: "Yes — iOS and Android, including device compatibility testing." },
        { q: "What's your turnaround?", a: "Small projects in 2–5 days; larger products in 1–3 weeks." },
      ]}
      related={[
        { to: "/business-automation", title: "Business Automation" },
        { to: "/operations-management-services", title: "Operations Management" },
        { to: "/academic-research-services", title: "Academic Research" },
      ]}
    />
  ),
});
