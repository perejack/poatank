import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Poa Tank" },
      { name: "description", content: "Explore Poa Tank's full range: water tanks, septic tanks, watchman huts, sprayers and more." },
      { property: "og:title", content: "Products — Poa Tank" },
      { property: "og:description", content: "Explore Poa Tank's full range of tanks and site solutions." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], []);
  const [cat, setCat] = useState<string>("All");
  const filtered = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-bold">Catalog</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-black leading-tight text-balance">
            Every Poa Tank. In one place.
          </h1>
          <p className="mt-4 max-w-xl text-white/70 text-lg">
            Water storage, sanitation, agriculture and site solutions — filter by category to find the tank you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                cat === c
                  ? "bg-ink text-white shadow-ink"
                  : "bg-secondary hover:bg-ink hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
