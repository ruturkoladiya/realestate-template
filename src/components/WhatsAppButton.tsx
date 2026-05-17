import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppButton({ message }: { message?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-luxe transition hover:scale-105 md:bottom-6"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
    </a>
  );
}
