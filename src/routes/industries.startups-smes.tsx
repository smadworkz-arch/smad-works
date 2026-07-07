import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["startups-smes"]!;

export const Route = createFileRoute("/industries/startups-smes")({
  head: () =>
    serviceHead({
      path: "/industries/startups-smes",
      title: "Startups & SMEs Automation | Lead Gen, CRM & AI Calling | SMad Works",
      description:
        "AI and automation built for startups and SMEs — lead generation, CRM, AI calling, email automation and workflow optimization by SMad Works.",
      serviceType: "Startup & SME Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
