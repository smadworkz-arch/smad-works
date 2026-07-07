import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["retail-ecommerce"]!;

export const Route = createFileRoute("/industries/retail-ecommerce")({
  head: () =>
    serviceHead({
      path: "/industries/retail-ecommerce",
      title: "Retail & E-commerce Automation | WhatsApp Marketing & Order Automation | SMad Works",
      description:
        "Automate customer support, order notifications, WhatsApp marketing and inventory workflows for retail and e-commerce brands with SMad Works.",
      serviceType: "Retail & E-commerce Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
