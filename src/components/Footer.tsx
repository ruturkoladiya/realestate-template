import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-gradient text-gold-foreground font-display font-bold">
              S
            </span>
            <span className="font-display text-xl font-semibold">{siteConfig.companyName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
              { Icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              { Icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
              { Icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 transition hover:bg-gold hover:text-gold-foreground hover:border-transparent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/projects" className="hover:text-gold">All Projects</Link></li>
            <li><Link to="/amenities" className="hover:text-gold">Amenities</Link></li>
            <li><Link to="/floor-plans" className="hover:text-gold">Floor Plans</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Locations</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/locations/$slug" params={{ slug: "sg-highway" }} className="hover:text-gold">SG Highway</Link></li>
            <li><Link to="/locations/$slug" params={{ slug: "prahlad-nagar" }} className="hover:text-gold">Prahlad Nagar</Link></li>
            <li><Link to="/locations/$slug" params={{ slug: "shilaj" }} className="hover:text-gold">Shilaj</Link></li>
            <li><Link to="/locations/$slug" params={{ slug: "bopal" }} className="hover:text-gold">Bopal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
