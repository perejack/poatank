import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { priceList, whatsappLink, PHONE } from "@/lib/products";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Poa Tank" },
      { name: "description", content: "Full retail price list for Poa Tank water tanks. Bulk & wholesale pricing available." },
      { property: "og:title", content: "Pricing — Poa Tank" },
      { property: "og:description", content: "Transparent retail pricing for every Poa Tank capacity." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <div>
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">Transparent Pricing</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-black leading-tight text-balance">
            Full Retail Price List
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 text-lg">
            All prices in Kenyan Shillings (KSh). Contact us for bulk / wholesale pricing or delivery quotes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-border overflow-hidden shadow-brand">
          <div className="bg-ink text-white grid grid-cols-2 px-6 py-4 font-display font-bold">
            <span>Capacity (Litres)</span>
            <span className="text-right">Retail Price (KSh)</span>
          </div>
          <div className="divide-y divide-border bg-card">
            {priceList.map((row, i) => (
              <div
                key={row.capacity}
                className={`grid grid-cols-2 px-6 py-4 items-center hover:bg-brand/5 transition ${
                  i % 2 === 1 ? "bg-secondary/40" : ""
                }`}
              >
                <span className="font-bold">{row.capacity}</span>
                <span className="text-right font-display text-lg font-black text-brand">{row.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          * Prices subject to change. Delivery charges apply depending on location. Wholesale discounts available for large orders.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white">
            <MessageCircle className="h-4 w-4" /> Get bulk quote
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-white">
            <Phone className="h-4 w-4 text-brand" /> Call sales
          </a>
        </div>
      </section>
    </div>
  );
}
