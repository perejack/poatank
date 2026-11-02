import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappLink } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-brand-foreground font-display font-black">
              P
            </span>
            <span className="font-display text-xl font-black tracking-tight text-white">POA TANK</span>
          </div>
          <p className="mt-4 max-w-md text-white/70">
            Kenya's tough polyethylene tanks — water storage, sanitation and site solutions engineered for African
            conditions. Family-owned. Delivered nationwide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 hover:bg-white/20 transition"
            >
              <Phone className="h-4 w-4 text-brand" /> {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp/90 px-4 py-2 text-white hover:bg-whatsapp transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><Link to="/products" className="hover:text-brand">Products</Link></li>
            <li><Link to="/pricing" className="hover:text-brand">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-brand">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-4">Reach us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" /> Nairobi · Nationwide delivery</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand shrink-0" /> sales@poatank.com</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand shrink-0" /> {PHONE_DISPLAY}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Poa Tank. All rights reserved.</p>
          <p>Built tough for Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
}
