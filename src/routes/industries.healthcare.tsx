import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["healthcare"]!;

export const Route = createFileRoute("/industries/healthcare")({
  head: () =>
    serviceHead({
      path: "/industries/healthcare",
      title: "Healthcare Automation | WhatsApp, AI Calling & Appointment Automation | SMad Works",
      description:
        "AI and automation for clinics, hospitals and healthcare providers — WhatsApp automation, AI calling agents, appointment automation and CRM by SMad Works.",
      serviceType: "Healthcare Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
