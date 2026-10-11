import { createFileRoute } from "@tanstack/react-router";
import { VideoProductionPage } from "./video-production-ai-studio";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/video-production")({
  head: () =>
    serviceHead({
      path: "/video-production",
      title: "Video Production Services | Long-Form, Reels & Pro Editors | SMad Works",
      description:
        "SMad Works Video Production — professional video editing, long-form YouTube editing, short-form reels, and dedicated skilled editors.",
      serviceType: "Video Production",
    }),
  component: VideoProductionPage,
});
