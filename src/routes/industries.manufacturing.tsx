import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["manufacturing"]!;

export const Route = createFileRoute("/industries/manufacturing")({
  head: () =>
    serviceHead({
      path: "/industries/manufacturing",
      title: "Manufacturing Automation | Workflow, Reporting & QA | SMad Works",
      description:
        "Digitize workflows, automate reporting and improve internal communication for manufacturers and industrial businesses with SMad Works.",
      serviceType: "Manufacturing Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
