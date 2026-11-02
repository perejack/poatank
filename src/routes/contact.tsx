import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Poa Tank" },
      { name: "description", content: "Reach Poa Tank sales — WhatsApp, phone, email. Nationwide delivery across Kenya." },
      { property: "og:title", content: "Contact — Poa Tank" },
      { property: "og:description", content: "Chat with a Poa Tank specialist today. WhatsApp, phone or email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">Contact</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-black leading-tight text-balance">
            Talk to a Poa Tank specialist.
          </h1>
          <p className="mt-4 max-w-xl text-white/70 text-lg">
            We pick up. We reply. And we deliver — anywhere in Kenya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2">
        <a href={`tel:${PHONE}`} className="group rounded-3xl border border-border bg-card p-8 hover:bg-ink hover:text-white transition-all hover:-translate-y-1">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-brand-foreground shadow-brand">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-black">Call sales</h3>
          <p className="mt-2 text-muted-foreground group-hover:text-white/70">Speak to a specialist now.</p>
          <p className="mt-4 font-display text-2xl font-black text-brand">{PHONE_DISPLAY}</p>
        </a>

        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="group rounded-3xl border border-border bg-card p-8 hover:bg-whatsapp hover:text-white transition-all hover:-translate-y-1">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-whatsapp text-white shadow-brand">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-black">WhatsApp chat</h3>
          <p className="mt-2 text-muted-foreground group-hover:text-white/90">Instant quotes, delivery times & bulk pricing.</p>
          <p className="mt-4 font-display text-lg font-black">Message us now →</p>
        </a>

        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-black">Email</h3>
          <p className="mt-2 text-muted-foreground">For proposals, procurement & partnerships.</p>
          <p className="mt-4 font-display text-lg font-black">sales@poatank.com</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-black">Where we deliver</h3>
          <p className="mt-2 text-muted-foreground">Nairobi HQ · All 47 counties. Delivery quotes on request.</p>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium">
            <Clock className="h-4 w-4 text-brand" /> Mon – Sat · 8:00 – 18:00
          </p>
        </div>
      </section>
    </div>
  );
}
