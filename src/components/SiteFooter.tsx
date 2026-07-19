import logo from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-black">
            <img src={logo.url} alt="" className="h-6 w-6 object-contain" />
          </span>
          <span className="text-sm font-semibold text-gold">SMadWorks</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SMad Works. Design • Develop • Deliver.</p>
      </div>
    </footer>
  );
}
