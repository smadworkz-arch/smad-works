import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bot,
  TrendingUp,
  Palette,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  PanelLeft,
  Menu,
  X,
} from "lucide-react";
import smadworksLogo from "@/assets/smadworks-logo.jpg";
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

type Solution = { icon: typeof Bot; to: string; heading: string; description: string };

const solutions: Solution[] = [
  {
    icon: Bot,
    to: "/operations-management-services",
    heading: "Operations Management",
    description: "Integrate AI into your daily operations.",
  },
  {
    icon: TrendingUp,
    to: "/social-media-management",
    heading: "Social Media Management",
    description: "Content, video, analytics and Meta Ads.",
  },
  {
    icon: Palette,
    to: "/video-production-ai-studio",
    heading: "Video Production",
    description: "Long-form, reels and pro editing.",
  },
  {
    icon: GraduationCap,
    to: "/content-management-for-creators",
    heading: "Content Management for Creators",
    description: "Planning, scheduling and publishing.",
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
          Choose a solution to explore its services.
        </SheetDescription>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto px-4 py-5">
        <div className="space-y-3">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.to}
                to={s.to}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-gold/50 hover:bg-white/[0.06]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Icon size={18} />
                </span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold tracking-tight group-hover:text-gold">
                    {s.heading}
                  </h4>
                  <p className="mt-0.5 text-xs text-white/50">{s.description}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-gold/60 transition-transform group-hover:translate-x-1 group-hover:text-gold"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10 p-4">
        <a
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate();
            window.location.href = "/#contact";
            setTimeout(() => {
              const firstField = document.getElementById("contact-name");
              if (firstField) {
                firstField.scrollIntoView({ behavior: "smooth", block: "center" });
                firstField.focus({ preventScroll: true });
              }
            }, 350);
          }}
          className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-gold/40 bg-gradient-to-br from-gold/25 via-gold/10 to-transparent px-4 py-3.5 transition-all hover:border-gold hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)]"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Get started</p>
            <h4 className="mt-0.5 text-sm font-semibold tracking-tight text-white">
              Book a Free Consultation
            </h4>
          </div>
          <ArrowRight
            size={16}
            className="text-gold transition-transform group-hover:translate-x-1"
          />
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
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-black border border-gold/30 p-1 sm:h-12 sm:w-12 shrink-0">
            <img
              src={smadworksLogo}
              alt="SMadWorks Logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
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
                    <PanelLeft size={14} className="opacity-60" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-full border-r border-gold/20 bg-black p-0 text-white sm:max-w-md"
                >
                  <SolutionsDrawerContent onNavigate={closeDrawer} />
                </SheetContent>
              </Sheet>
            ) : (
              <a
                key={l}
                href={h}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ),
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
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav
              .filter(([l]) => l !== "Solutions")
              .map(([l, h]) => (
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
                  <PanelLeft size={16} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full border-r border-gold/20 bg-black p-0 text-white sm:max-w-md"
              >
                <SolutionsDrawerContent onNavigate={closeDrawer} />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      )}
    </header>
  );
}
