import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Sparkles, Award, Droplets, Wrench, Phone, MessageCircle, Sun, Handshake, Flag } from "lucide-react";
import { products, priceList, PHONE, PHONE_DISPLAY, whatsappLink, formatKsh } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poa Tank — Kenya's Tough Water Tanks, Delivered" },
      { name: "description", content: "UV-stabilised polyethylene tanks, septic tanks, watchman huts and more. Nationwide delivery from Poa Tank." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const hero = products.find((p) => p.id === "outdoor-farm")!;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-32 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Trusted across Kenya · 10-year warranty
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Kenya's <span className="text-brand">toughest</span> tanks.
              <br />Built for every drop.
            </h1>
            <p className="mt-5 max-w-lg text-white/70 text-lg">
              UV-stabilised polyethylene tanks, septic solutions and watchman huts — engineered for African sun,
              delivered to your gate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-brand-foreground shadow-brand hover:brightness-110 transition"
              >
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur hover:bg-white/10 transition"
              >
                <MessageCircle className="h-4 w-4 text-whatsapp" /> Order on WhatsApp
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "20k+", v: "Tanks delivered" },
                { k: "47", v: "Counties served" },
                { k: "10 yr", v: "Warranty" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl md:text-3xl font-black text-brand">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-white/60">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 rounded-[3rem] bg-brand/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/30 shadow-ink animate-float">
              <img src={hero.image} alt={hero.name} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase text-brand-foreground">Bestseller</span>
                <h3 className="mt-3 font-display text-xl font-black">{hero.name}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-2xl font-black text-brand">{formatKsh(hero.price)}</span>
                  <span className="text-sm text-white/50 line-through">{formatKsh(hero.wasPrice!)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-white/10 bg-black/20 py-4 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-display font-bold tracking-widest text-white/40 uppercase text-sm">
            {[...Array(2)].flatMap((_, i) => [
              <span key={`a${i}`}>Water Storage</span>,
              <span key={`b${i}`} className="text-brand">•</span>,
              <span key={`c${i}`}>Septic Tanks</span>,
              <span key={`d${i}`} className="text-brand">•</span>,
              <span key={`e${i}`}>Watchman Huts</span>,
              <span key={`f${i}`} className="text-brand">•</span>,
              <span key={`g${i}`}>Rainwater Harvesting</span>,
              <span key={`h${i}`} className="text-brand">•</span>,
              <span key={`i${i}`}>Nationwide Delivery</span>,
              <span key={`j${i}`} className="text-brand">•</span>,
            ])}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">Featured</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-black">On Sale This Week</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-1 text-sm font-bold hover:text-brand">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS — all catalog items */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">Catalog</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-black">Our Products</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              From slim urban tanks to industrial watchman huts — every product built with the same Poa toughness.
            </p>
          </div>
          <Link to="/products" className="inline-flex items-center gap-1 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-bold hover:bg-brand hover:text-brand-foreground transition">
            Browse all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ABOUT POA — after products */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">About Poa Tank</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-black leading-tight text-balance">
                Family-owned. Engineered in Kenya. Built to outlast the sun.
              </h2>
              <p className="mt-5 text-lg text-white/75">
                For over a decade, Poa Tank has moulded UV-stabilised polyethylene tanks that Kenyan homes, farms
                and institutions rely on daily. Every tank is spun in-house, pressure-tested and finished with our
                signature shell — because the harshest African sun deserves the toughest tank.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, t: "10-year warranty", d: "On every Standard Series tank" },
                  { icon: Truck, t: "Nationwide delivery", d: "All 47 counties" },
                  { icon: Award, t: "KEBS certified", d: "Meets Kenyan standards" },
                  { icon: Sparkles, t: "Food-grade", d: "Safe drinking water storage" },
                ].map((f) => (
                  <div key={f.t} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                    <f.icon className="h-5 w-5 text-brand" />
                    <p className="mt-2 font-bold">{f.t}</p>
                    <p className="text-sm text-white/60">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-ink border border-white/10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10" alt="Poa Tank farm" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden mt-8 shadow-brand border border-white/10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10" alt="Rooftop tank" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden -mt-8 shadow-brand border border-white/10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10" alt="Slim tank" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-ink border border-white/10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10" alt="Rainwater harvester" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip matching Poa site */}
        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Truck, t: "Country-wide Delivery", d: "Our convenient door to door delivery service takes the stress out of last minute deadlines" },
              { icon: Handshake, t: "Our Promise", d: "Our above ground water storage Cylindrical and Loft Tanks come with a 10 Year Limited warranty." },
              { icon: Sun, t: "UV Protection", d: "Built with UV protection for enhanced durability under the sun." },
              { icon: Flag, t: "Kenyan Owned", d: "We're proud to say we are a 100% Kenyan owned company. Kenya – Buy Kenya" },
            ].map((f) => (
              <div key={f.t} className="text-center sm:text-left">
                <div className="mx-auto sm:mx-0 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1.5 bg-cyan" />
      </section>

      {/* PRICING */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">Transparent Pricing</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-black text-balance">
              Full retail price list — no surprises.
            </h2>
            <p className="mt-4 text-muted-foreground">
              All prices in Kenyan Shillings (KSh). Contact us for bulk / wholesale pricing and delivery quotes.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {priceList.map((row) => (
              <div key={row.capacity} className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 hover:border-ink hover:shadow-ink transition">
                <span className="font-display font-bold">{row.capacity}</span>
                <span className="font-display text-ink font-black text-lg">{row.price}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            * Prices subject to change. Delivery charges apply depending on location. Wholesale discounts available for large orders.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-brand-foreground">
              <MessageCircle className="h-4 w-4" /> Get bulk quote
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-white">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">Why Poa Tank</span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-black text-balance">
            Not just tanks — a promise of quality.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Droplets, t: "Food-grade & UV-stabilised", d: "Every tank is safe for drinking water and engineered to resist Kenya's harshest sun for years." },
            { icon: Wrench, t: "Built to install fast", d: "Threaded inlets/outlets, wide-mouth lids and reinforced ribs make installation quick and clean." },
            { icon: Award, t: "10-year warranty", d: "We stand behind every Standard Series tank with an industry-leading 10-year warranty." },
            { icon: Truck, t: "Nationwide delivery", d: "From Nairobi to Turkana — our logistics team gets your tank to site, on time." },
            { icon: ShieldCheck, t: "KEBS certified", d: "All products meet or exceed Kenya Bureau of Standards specifications." },
            { icon: Sparkles, t: "Signature finish", d: "The Poa Tank silhouette — instantly recognisable, engineered to last." },
          ].map((f, i) => (
            <div key={f.t} className="group relative rounded-3xl border border-border bg-card p-8 hover:bg-ink hover:text-white transition-all hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-brand-foreground shadow-brand">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-black">{f.t}</h3>
              <p className="mt-2 text-muted-foreground group-hover:text-white/70">{f.d}</p>
              <span className="absolute top-6 right-6 font-display text-4xl font-black text-muted/50 group-hover:text-brand/40">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white p-10 md:p-16 shadow-ink">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black leading-tight text-balance">
                Ready to order? Talk to a Poa Tank specialist today.
              </h2>
              <p className="mt-4 text-white/70 max-w-xl">
                WhatsApp us for instant quotes, delivery times and bulk pricing. Or give us a call — we pick up.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 font-bold text-white text-lg">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-bold text-brand-foreground text-lg">
                <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
