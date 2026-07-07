import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/IndustryPage";
import { serviceHead } from "@/lib/service-head";
import { industryBySlug } from "@/lib/industries-data";

const data = industryBySlug["hospitality"]!;

export const Route = createFileRoute("/industries/hospitality")({
  head: () =>
    serviceHead({
      path: "/industries/hospitality",
      title: "Hospitality Automation | Bookings, Guest Support & Reviews | SMad Works",
      description:
        "Automate bookings, guest communication, follow-ups and reviews for hotels, restaurants and travel businesses with SMad Works.",
      serviceType: "Hospitality Automation Services",
    }),
  component: () => <IndustryPage data={data} />,
});
