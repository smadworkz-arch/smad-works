import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Bot, TrendingUp, Palette, ShieldCheck, GraduationCap, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Solutions", "/#services"],
  ["Automations", "/#automations"],
  ["Process", "/#process"],
  ["Industries", "/#industries"],
  ["Reviews", "/#reviews"],
  ["Contact", "/#contact"],
] as const;

type ServiceLink = { to: string; title: string };
type Category = {
  icon: typeof Bot;
  heading: string;
  description: string;
  items: ServiceLink[];
};

const categories: Category[] = [
  {
    icon: Bot,
    heading: "AI & Business Automation",
    description: "Streamline operations with intelligent workflows.",
    items: [
      { to: "/business-automation", title: "Business Automation" },
      { to: "/operations-management-services", title: "Operations Management" },
      { to: "/ai-content-generation", title: "AI Content Generation" },
    ],
  },
  {
    icon: TrendingUp,
    heading: "Business Growth",
    description: "Fill your pipeline and close more deals.",
    items: [
      { to: "/lead-generation-services", title: "Lead Generation" },
      { to: "/lead-conversion-services", title: "Lead Conversion" },
    ],
  },
  {
    icon: Palette,
    heading: "Creative & Media",
    description: "Brand, visuals and video that stand out.",
    items: [
      { to: "/logo-creative-design-services", title: "Logo & Creative Design" },
      { to: "/video-production-ai-studio", title: "Video Production & AI Studio" },
    ],
  },
  {
    icon: ShieldCheck,
    heading: "Quality & Research",
    description: "Ship reliable products backed by rigorous research.",
    items: [
      { to: "/qa-testing-services", title: "QA Testing Services" },
      { to: "/academic-research-services", title: "Academic Research" },
    ],
  },
  {
    icon: GraduationCap,
    heading: "AI Learning",
    description: "Practical AI courses for teams and creators.",
    items: [
      { to: "/ai-automation-course", title: "AI Automation Course" },
      { to: "/ai-video-generation-course", title: "AI Video Generation Course" },
      { to: "/ai-course-content-generation", title: "AI Course Content" },
    ],
  },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const closeServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(false);
  };


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
            l === "Solutions" ? (
              <div
                key={l}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  className="flex items-center gap-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l}
                  <span className={`text-xs transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
                </button>
              </div>
            ) : (
              <a key={l} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 sm:inline-flex"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
            aria-label="Menu"
          >
            <span className="block h-px w-4 bg-foreground" />
          </button>
        </div>
      </div>

      {/* Desktop floating mega menu */}
      {servicesOpen && (
        <div
          className="absolute left-1/2 top-full z-50 hidden w-[min(1180px,calc(100vw-2rem))] -translate-x-1/2 pt-2 lg:block"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-gold/25 bg-black text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
            <div className="px-8 py-8">
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Our Solutions</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">
                  Everything you need to build, automate and grow
                </h3>
              </div>
              <p className="hidden max-w-sm text-sm text-white/60 md:block">
                Explore our full suite of services across AI, automation, growth, creative and learning.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.heading}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-gold/40 hover:bg-white/[0.04]"
                  >
                    <div className="mb-4 flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-transform group-hover:scale-105">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold tracking-tight text-white">{cat.heading}</h4>
                        <p className="mt-0.5 text-xs text-white/50">{cat.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {cat.items.map((s) => (
                        <li key={s.to}>
                          <Link
                            to={s.to}
                            onClick={() => setServicesOpen(false)}
                            className="group/link flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-white/75 transition-all hover:bg-white/5 hover:text-gold"
                          >
                            <span>{s.title}</span>
                            <ArrowRight
                              size={14}
                              className="-translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {/* CTA card */}
              <a
                href="/#contact"
                onClick={() => setServicesOpen(false)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent p-5 transition-all hover:border-gold hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Get started</p>
                  <h4 className="mt-2 text-lg font-semibold tracking-tight text-white">
                    Book a Free Consultation
                  </h4>
                  <p className="mt-1 text-xs text-white/60">
                    Talk to our team about your goals — no commitment, just clarity.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Schedule a call
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.filter(([l]) => l !== "Solutions").map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l}
              </a>
            ))}
            <div className="mt-3 border-t border-border pt-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.heading} className="mb-3">
                    <div className="flex items-center gap-2 px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gold">
                      <Icon size={14} />
                      {cat.heading}
                    </div>
                    {cat.items.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                );
              })}
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-lg border border-gold/50 bg-gold/10 px-3 py-2.5 text-center text-sm font-medium text-gold"
              >
                Book a Free Consultation →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
