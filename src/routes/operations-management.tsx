import { createFileRoute } from "@tanstack/react-router";
import { OpsPage } from "./operations-management-services";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/operations-management")({
  head: () =>
    serviceHead({
      path: "/operations-management",
      title: "Operations Management Services | SOPs, Dashboards & Systems | SMad Works",
      description:
        "Enterprise-grade operations consulting — SOPs, KPI dashboards, tooling and change management to make delivery predictable and scalable.",
      serviceType: "Operations Management",
    }),
  component: OpsPage,
});
