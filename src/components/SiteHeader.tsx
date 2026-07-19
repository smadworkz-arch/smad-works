import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bot, TrendingUp, Palette, ShieldCheck, GraduationCap, ArrowRight, PanelRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Solutions", "__drawer__"],
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

function SolutionsDrawerContent({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex h-full flex-col bg-black text-white">
      <SheetHeader className="border-b border-white/10 px-6 py-5 text-left">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Our Solutions</p>
        <SheetTitle className="text-white text-xl font-semibold tracking-tight">
          Everything you need to build, automate and grow
        </SheetTitle>
        <SheetDescription className="text-white/55 text-sm">
          Explore our services across AI, automation, growth, creative and learning.
        </SheetDescription>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto px-4 py-5">
        <div className="space-y-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.heading}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-gold/40"
              >
                <div className="mb-3 flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                    <Icon size={16} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold tracking-tight">{cat.heading}</h4>
                    <p className="mt-0.5 text-xs text-white/50">{cat.description}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {cat.items.map((s) => (
                    <li key={s.to}>
                      <Link
                        to={s.to}
                        onClick={onNavigate}
                        className="group flex items-center justify-between rounded-md px-2.5 py-2 text-sm text-white/75 transition-all hover:bg-white/5 hover:text-gold"
                      >
                        <span>{s.title}</span>
                        <ArrowRight
                          size={14}
                          className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10 p-4">
        <a
          href="/#contact"
          onClick={onNavigate}
          className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-gold/40 bg-gradient-to-br from-gold/25 via-gold/10 to-transparent px-4 py-3.5 transition-all hover:border-gold hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)]"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Get started</p>
            <h4 className="mt-0.5 text-sm font-semibold tracking-tight text-white">
              Book a Free Consultation
            </h4>
          </div>
          <ArrowRight size={16} className="text-gold transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

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
              <Sheet key={l} open={drawerOpen} onOpenChange={setDrawerOpen}>
                <SheetTrigger asChild>
                  <button
                    className="flex items-center gap-1.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Open solutions"
                  >
                    {l}
                    <PanelRight size={14} className="opacity-60" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full border-l border-gold/20 bg-black p-0 text-white sm:max-w-md">
                  <SolutionsDrawerContent onNavigate={closeDrawer} />
                </SheetContent>
              </Sheet>
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
            <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
              <SheetTrigger asChild>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-lg border border-gold/40 bg-gold/10 px-3 py-2.5 text-sm font-medium text-gold"
                >
                  Solutions
                  <PanelRight size={16} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full border-l border-gold/20 bg-black p-0 text-white sm:max-w-md">
                <SolutionsDrawerContent onNavigate={closeDrawer} />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      )}
    </header>
  );
}
