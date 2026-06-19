const BASE = "https://smad-works.lovable.app";

export function serviceHead(opts: {
  path: string;
  title: string;
  description: string;
  serviceType: string;
}) {
  const url = `${BASE}${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: opts.serviceType,
          provider: { "@type": "Organization", name: "SMad Works", url: BASE },
          areaServed: "Worldwide",
          description: opts.description,
          url,
        }),
      },
    ],
  };
}
