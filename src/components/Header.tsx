import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-gradient text-gold-foreground font-display font-bold shadow-gold">
            S
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            {siteConfig.companyName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold font-semibold" }}
              inactiveProps={{ className: "text-muted-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button asChild variant="luxe" size="sm">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border bg-background transition-[max-height] duration-300",
          open ? "max-h-[480px]" : "max-h-0",
        )}
      >
        <nav className="container-luxe flex flex-col gap-1 py-4">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-gold font-semibold" }}
              inactiveProps={{ className: "text-muted-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Button asChild variant="luxe" className="mt-3">
            <Link to="/contact" onClick={() => setOpen(false)}>Enquire Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
