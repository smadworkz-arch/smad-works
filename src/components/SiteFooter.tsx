import { Link } from "@tanstack/react-router";
import smadworksLogo from "@/assets/smadworks-logo.jpg";

const footerLinks = [
  { to: "/#home", label: "Home" },
  { to: "/business-automation", label: "Automation" },
  { to: "/lead-generation-services", label: "Growth" },
  { to: "/qa-testing-services", label: "QA Testing" },
  { to: "/ai-automation-course", label: "AI Courses" },
  { to: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-black border border-gold/30 p-1 shrink-0">
              <img
                src={smadworksLogo}
                alt="SMadWorks Logo"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-base font-semibold text-foreground">
              SMad<span className="text-gold">Works</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            {footerLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SMad Works. Design • Develop • Deliver.</p>
          <div className="flex gap-4">
            <a href="tel:+917439668751" className="hover:text-foreground transition-colors">
              +91 74396 68751
            </a>
            <span>•</span>
            <a
              href="mailto:smadworkz@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              smadworkz@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
