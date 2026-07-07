import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["education"]!;

export const Route = createFileRoute("/industries/education")({
  head: () =>
    serviceHead({
      path: "/industries/education",
      title: "Education Automation | Admissions, Student Communication & AI Learning | SMad Works",
      description:
        "Automate admissions, student communication and AI learning workflows for schools, coaching institutes and edtech brands with SMad Works.",
      serviceType: "Education Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
