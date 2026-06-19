import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Automations", "/#automations"],
  ["Process", "/#process"],
  ["Industries", "/#industries"],
  ["Reviews", "/#reviews"],
  ["Contact", "/#contact"],
] as const;

const allServicePages = [
  { to: "/business-automation", title: "Business Automation" },
  { to: "/qa-testing-services", title: "QA Testing Services" },
  { to: "/academic-research-services", title: "Academic Research" },
  { to: "/operations-management-services", title: "Operations Management" },
  { to: "/ai-content-generation", title: "AI Content Generation" },
  { to: "/ai-course-content-generation", title: "AI Course Content" },
  { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
  { to: "/ai-automation-course", title: "AI Automation Course" },
  { to: "/lead-generation-services", title: "Lead Generation" },
  { to: "/lead-conversion-services", title: "Lead Conversion" },
  { to: "/logo-creative-design-services", title: "Logo & Creative Design" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-xl bg-black sm:h-16 sm:w-16">
            <img src={logo.url} alt="SMad Works" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
          </span>
          <span className="text-lg font-semibold tracking-tight sm:text-xl">
            SMad<span className="text-gold">Works</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([l, h]) =>
            l === "Services" ? (
              <button
                key={l}
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l} <span className="text-xs">▾</span>
              </button>
            ) : (
              <a key={l} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 sm:inline-flex">
            Let's Talk
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden" aria-label="Menu">
            <span className="block h-px w-4 bg-foreground" />
          </button>
        </div>
      </div>
      {servicesOpen && (
        <div className="hidden border-t border-border bg-background/95 lg:block">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-6 py-4 text-sm md:grid-cols-3">
            {allServicePages.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setServicesOpen(false)}
                className="rounded-lg px-3 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      {menuOpen && (
        <div className="border-t border-border lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.filter(([l]) => l !== "Services").map(([l, h]) => (
              <a key={l} href={h} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                {l}
              </a>
            ))}
            <div className="mt-2 border-t border-border pt-2 text-xs uppercase tracking-wider text-muted-foreground px-3">Services</div>
            {allServicePages.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                {s.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
