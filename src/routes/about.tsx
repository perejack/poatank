import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Truck, Award, Sparkles, Droplets, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Poa Tank" },
      { name: "description", content: "Poa Tank is a family-owned Kenyan manufacturer of UV-stabilised polyethylene water tanks and site solutions." },
      { property: "og:title", content: "About — Poa Tank" },
      { property: "og:description", content: "Family-owned. Engineered in Kenya. Built to outlast the sun." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">About Us</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-black leading-tight text-balance max-w-3xl">
            The quiet muscle behind Kenya's water storage.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Poa Tank has spent over a decade quietly moulding the tanks that Kenyan households, farmers and
            institutions rely on daily. We're a family-owned manufacturer — every tank is spun in-house,
            pressure-tested and finished with our signature black shell.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-black">Our story</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We started with one simple observation: Kenya's sun is unforgiving, and most tanks weren't built for it.
            So we set out to make the toughest, most UV-resistant polyethylene tanks in the region — priced fairly,
            delivered nationwide.
          </p>
          <p className="mt-4 text-muted-foreground text-lg">
            Today, tens of thousands of Poa Tanks stand across Kenya — on rooftops in Nairobi, farms in Nakuru,
            estates in Mombasa and schools in Turkana. Same tank. Same promise.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10" alt="Poa Tank" className="aspect-square rounded-3xl object-cover shadow-ink" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10" alt="Poa Tank" className="aspect-square rounded-3xl object-cover mt-8 shadow-brand" />
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">What we stand for</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-black text-balance">
              Six commitments. Every tank.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Droplets, t: "Food-grade & UV-stabilised" },
              { icon: Wrench, t: "Built to install fast" },
              { icon: Award, t: "10-year warranty" },
              { icon: Truck, t: "Nationwide delivery" },
              { icon: ShieldCheck, t: "KEBS certified" },
              { icon: Sparkles, t: "Signature black finish" },
            ].map((f) => (
              <div key={f.t} className="rounded-3xl bg-card border border-border p-8 hover:bg-ink hover:text-white transition-all hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-brand-foreground shadow-brand">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-black">{f.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
