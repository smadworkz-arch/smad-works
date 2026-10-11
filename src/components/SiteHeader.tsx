import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import smadworksLogo from "@/assets/smadworks-logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const solutions = [
  {
    to: "/operations-management-services",
    heading: "Operations Management",
  },
  {
    to: "/social-media-management",
    heading: "Social Media Management",
  },
  {
    to: "/video-production-ai-studio",
    heading: "Video Production",
  },
  {
    to: "/content-management-for-creators",
    heading: "Content Management for Creators",
  },
] as const;

const nav = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Solutions", "__dropdown__"],
  ["Automations", "/#automations"],
  ["Process", "/#process"],
  ["Industries", "/#industries"],
  ["Reviews", "/#reviews"],
  ["Contact", "/#contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([l, h]) =>
            l === "Solutions" ? (
              <DropdownMenu key={l} open={solutionsOpen} onOpenChange={setSolutionsOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="group flex items-center gap-1.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground outline-none data-[state=open]:text-foreground"
                    aria-label="Open solutions menu"
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      size={14}
                      className="text-gold opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={12}
                  className="z-50 min-w-[280px] rounded-2xl border border-gold/30 bg-[#0a0a0d]/95 p-2 text-white shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.12)] backdrop-blur-xl animate-in fade-in-0 zoom-in-95"
                >
                  <div className="space-y-1">
                    {solutions.map((item) => (
                      <DropdownMenuItem key={item.to} asChild>
                        <Link
                          to={item.to}
                          onClick={() => setSolutionsOpen(false)}
                          className="group flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white/[0.08] hover:text-gold"
                        >
                          <span>{item.heading}</span>
                          <ArrowRight
                            size={14}
                            className="-translate-x-1 text-gold opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
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
        <div className="border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <a
              href="/#home"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Home
            </a>
            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              About
            </a>

            {/* Solutions Section in Mobile Nav: Displays ONLY the 4 clickable headings */}
            <div className="my-2 rounded-xl border border-gold/30 bg-gold/[0.04] p-2.5">
              <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Solutions
              </div>
              <div className="mt-1 space-y-1">
                {solutions.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5 hover:text-gold"
                  >
                    <span>{item.heading}</span>
                    <ArrowRight
                      size={14}
                      className="text-gold opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="/#automations"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Automations
            </a>
            <a
              href="/#process"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Process
            </a>
            <a
              href="/#industries"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Industries
            </a>
            <a
              href="/#reviews"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Reviews
            </a>
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
