import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["real-estate"]!;

export const Route = createFileRoute("/industries/real-estate")({
  head: () =>
    serviceHead({
      path: "/industries/real-estate",
      title: "Real Estate Automation | AI Calling, WhatsApp Follow-ups & CRM | SMad Works",
      description:
        "Convert property enquiries into site visits with AI calling agents, WhatsApp follow-ups, lead qualification and CRM automation by SMad Works.",
      serviceType: "Real Estate Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
