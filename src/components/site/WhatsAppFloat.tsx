import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/products";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-3"
    >
      <span className="hidden sm:inline-flex rounded-full bg-ink/95 px-4 py-2 text-sm font-medium text-white shadow-ink backdrop-blur">
        Talk to us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-brand animate-pulse-ring group-hover:scale-105 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
