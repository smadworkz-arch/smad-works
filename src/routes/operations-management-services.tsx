import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/service-head";
import { ImmersiveServicePage } from "@/components/ImmersiveServicePage";
import { OperationsPipelineScene } from "@/components/three/PageScenes";

export const Route = createFileRoute("/operations-management-services")({
  head: () =>
    serviceHead({
      path: "/operations-management-services",
      title: "Operations Management & Consulting | Process, Systems, SOPs | SMad Works",
      description: "Enterprise operations consulting — process design, automation, SOPs, KPI dashboards and business systems that scale.",
      serviceType: "Operations Management",
    }),
  component: () => (
    <ImmersiveServicePage
      eyebrow="Operations Consulting"
      title={<>Operate at <span className="text-gold">enterprise speed.</span></>}
      subtitle="We redesign how your business runs — from process and SOPs to systems, dashboards and cross-team accountability."
      primaryCta={{ label: "Streamline my operations", whatsappMessage: "Hi SMad Works, I need help with operations & process management." }}
      scene={<OperationsPipelineScene />}
      metrics={[
        { k: "40%+", v: "Cycle time cut" },
        { k: "3×", v: "Team output" },
        { k: "24/7", v: "Live KPIs" },
        { k: "2 wks", v: "First win" },
      ]}
      capabilities={[
        { t: "Process Design", d: "Map, redesign and document workflows end-to-end." },
        { t: "SOPs & Playbooks", d: "Turn tribal knowledge into repeatable playbooks." },
        { t: "Systems Setup", d: "CRM, project mgmt, ticketing, ops dashboards." },
        { t: "KPI Dashboards", d: "Live metrics for teams and leadership." },
        { t: "Vendor & Supply Ops", d: "Streamline procurement and delivery." },
        { t: "Team Enablement", d: "Onboarding, RACI, accountability structures." },
      ]}
      process={[
        { n: "01", t: "Audit", d: "Deep-dive current ops, bottlenecks and metrics." },
        { n: "02", t: "Blueprint", d: "Redesign processes with owners and SLAs." },
        { n: "03", t: "Implement", d: "Roll out systems, SOPs and dashboards." },
        { n: "04", t: "Train", d: "Enable teams with playbooks and coaching." },
        { n: "05", t: "Optimize", d: "Iterate weekly on live metrics." },
      ]}
      tools={[
        { name: "Notion", domain: "notion.so" },
        { name: "ClickUp", domain: "clickup.com" },
        { name: "Asana", domain: "asana.com" },
        { name: "Monday", domain: "monday.com" },
        { name: "HubSpot", domain: "hubspot.com" },
        { name: "Zoho", domain: "zoho.com" },
        { name: "Slack", domain: "slack.com" },
        { name: "Google Workspace", domain: "workspace.google.com" },
        { name: "Airtable", domain: "airtable.com" },
      ]}
      industries={["Healthcare", "Real Estate", "E-commerce", "Manufacturing", "Startups", "SMEs", "Hospitality"]}
      faqs={[
        { q: "How fast do we see impact?", a: "Quick wins in 2 weeks, structural shifts within 60–90 days." },
        { q: "Do you replace existing tools?", a: "Only when needed. We optimize what works before adding new stack." },
        { q: "Will teams resist change?", a: "We involve owners early and phase rollouts to minimize friction." },
        { q: "Do you support us after launch?", a: "Yes — monthly retainer for iteration and optimization." },
      ]}
      finalCtaTitle={<>Run tighter. <span className="text-gold">Scale calmer.</span></>}
      related={[
        { to: "/business-automation", title: "Business Automation" },
        { to: "/qa-testing-services", title: "QA Testing" },
        { to: "/lead-conversion-services", title: "Lead Conversion" },
      ]}
    />
  ),
});
