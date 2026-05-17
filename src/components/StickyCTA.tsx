import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 gap-px border-t border-border bg-background shadow-luxe md:hidden">
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground"
      >
        <Phone className="h-4 w-4 text-gold" />
        Call
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-whatsapp py-3 text-xs font-medium text-white"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        to="/contact"
        className="flex flex-col items-center justify-center gap-1 bg-primary py-3 text-xs font-medium text-primary-foreground"
      >
        <span className="h-4 w-4 rounded-full bg-gold" />
        Enquire
      </Link>
    </div>
  );
}
