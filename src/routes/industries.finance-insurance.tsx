import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["finance-insurance"]!;

export const Route = createFileRoute("/industries/finance-insurance")({
  head: () =>
    serviceHead({
      path: "/industries/finance-insurance",
      title: "Finance & Insurance Automation | Onboarding, KYC & AI Support | SMad Works",
      description:
        "Automate onboarding, KYC, document collection and customer support for finance, banking, NBFCs and insurance businesses with SMad Works.",
      serviceType: "Finance & Insurance Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
