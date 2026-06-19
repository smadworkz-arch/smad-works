import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/operations-management-services")({
  head: () =>
    serviceHead({
      path: "/operations-management-services",
      title: "Operations Management Services | Workflow & Process Optimization | SMad Works",
      description:
        "Optimize business operations with smart workflows, team coordination, process design and performance tracking by SMad Works.",
      serviceType: "Operations Management Services",
    }),
  component: () => (
    <ServicePage
      eyebrow="Operations Management"
      title="Operations Management Services"
      headline="Optimize Your Business Operations With Smart Systems"
      description="We help companies improve productivity by designing efficient workflows and management processes."
      benefits={["Higher team output", "Clear accountability", "Faster reporting", "Reduced operational cost"]}
      ctaPrimary="Improve Your Operations"
      whatsappMessage="Hi SMad Works, I'd like help optimizing my business operations."
      services={[
        { title: "Workflow", items: ["Workflow Management", "Process Optimization", "Documentation Management"] },
        { title: "People", items: ["Team Coordination", "Performance Tracking", "Reporting Systems"] },
        { title: "Growth", items: ["Business Improvement", "SOP Design", "KPI Dashboards"] },
      ]}
      process={[
        { step: "01", title: "Analyze" },
        { step: "02", title: "Plan" },
        { step: "03", title: "Implement" },
        { step: "04", title: "Track" },
        { step: "05", title: "Improve" },
      ]}
      faqs={[
        { q: "Do you work with small teams?", a: "Yes — from 5-person studios to mid-size enterprises." },
        { q: "What tools do you use?", a: "Notion, ClickUp, Asana, Google Workspace, Slack and custom dashboards." },
        { q: "Can you train our team?", a: "Yes, we include onboarding and SOPs for sustainable adoption." },
        { q: "How is success measured?", a: "Clear KPIs defined upfront — turnaround time, throughput, cost saved." },
      ]}
      related={[
        { to: "/business-automation", title: "Business Automation" },
        { to: "/lead-conversion-services", title: "Lead Conversion" },
        { to: "/qa-testing-services", title: "QA Testing Services" },
      ]}
    />
  ),
});
