import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Check,
  ShieldCheck,
  Truck,
  Award,
  ZoomIn,
  Share2,
  ChevronRight,
} from "lucide-react";
import { products, whatsappLink, formatKsh, PHONE, PHONE_DISPLAY, type Product } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — Poa Tank" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Poa Tank` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — Poa Tank` },
        { property: "og:description", content: p.short },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ProductDetail,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-black">Product not found</h1>
      <p className="mt-3 text-muted-foreground">This product may have been retired or renamed.</p>
      <Link to="/products" className="mt-6 inline-flex rounded-full bg-brand px-5 py-2.5 font-bold text-brand-foreground">
        Back to products
      </Link>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [zoomed, setZoomed] = useState(false);
  const [activeSpec, setActiveSpec] = useState(0);
  const discount = product.wasPrice ? Math.round(((product.wasPrice - product.price) / product.wasPrice) * 100) : 0;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text: product.short, url });
      } catch {
        /* user cancelled */
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="pb-28 md:pb-0">
      {/* Top bar */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand transition">
            <ArrowLeft className="h-4 w-4" /> Back to catalog
          </Link>
          <nav className="hidden sm:flex items-center gap-1 text-xs text-white/50">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-white transition">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80 truncate max-w-[180px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--brand)_18%,transparent),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-start">
            {/* Image stage */}
            <div className="animate-detail-reveal sticky top-24">
              <div className="relative">
                <div className="absolute -inset-8 rounded-[3.5rem] bg-ink/20 blur-3xl animate-soft-glow" />
                <button
                  type="button"
                  onClick={() => setZoomed(true)}
                  className="group relative block w-full overflow-hidden rounded-[2.5rem] border border-border bg-ink shadow-ink cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label="Zoom product image"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />
                  {product.onSale && (
                    <span className="absolute top-5 left-5 rounded-full bg-brand px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand-foreground shadow-brand">
                      On Sale
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="absolute top-5 right-5 rounded-full bg-white px-4 py-1.5 text-xs font-black text-ink shadow-lg">
                      −{discount}%
                    </span>
                  )}
                  <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-ink opacity-0 translate-y-2 transition group-hover:opacity-100 group-hover:translate-y-0">
                    <ZoomIn className="h-3.5 w-3.5" /> Enlarge
                  </span>
                </button>
              </div>

              {/* Spec chips under image */}
              <div className="mt-5 flex flex-wrap gap-2">
                {product.specs.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setActiveSpec(i)}
                    className={`rounded-full border px-4 py-2 text-left text-xs transition ${
                      activeSpec === i
                        ? "border-ink bg-ink text-white shadow-ink"
                        : "border-border bg-card hover:border-ink/40"
                    }`}
                  >
                    <span className="block text-[10px] uppercase tracking-wider opacity-70">{s.label}</span>
                    <span className="font-bold">{s.value}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content panel */}
            <div className="animate-detail-reveal" style={{ animationDelay: "0.12s" }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
                {product.category}
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-black leading-[1.05] text-balance">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="mt-8 flex flex-wrap items-end gap-3">
                <span className="font-display text-4xl md:text-5xl font-black tracking-tight">{formatKsh(product.price)}</span>
                {product.wasPrice && (
                  <>
                    <span className="mb-1 text-lg text-muted-foreground line-through">{formatKsh(product.wasPrice)}</span>
                    {discount > 0 && (
                      <span className="mb-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">
                        Save {discount}%
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Order actions */}
              <div className="mt-8 space-y-3">
                <a
                  href={whatsappLink(product)}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-whatsapp px-6 py-4 font-bold text-white text-lg shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--whatsapp)_70%,transparent)] transition hover:brightness-110 hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-ink px-6 py-4 font-bold text-white text-lg shadow-ink transition hover:brightness-110 hover:-translate-y-0.5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">Call to Order</span>
                    <span className="font-display text-xl font-black tracking-wide">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={share}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 text-sm font-bold hover:border-ink/30 transition"
                >
                  <Share2 className="h-4 w-4" /> Share this product
                </button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: ShieldCheck, t: "Warranty", d: "Backed by Poa" },
                  { icon: Truck, t: "Delivered", d: "Nationwide" },
                  { icon: Award, t: "KEBS", d: "Certified" },
                ].map((f) => (
                  <div
                    key={f.t}
                    className="rounded-2xl border border-border bg-card/80 p-3 text-center transition hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-sm"
                  >
                    <f.icon className="h-5 w-5 mx-auto text-ink" />
                    <p className="mt-1.5 text-xs font-black">{f.t}</p>
                    <p className="text-[10px] text-muted-foreground">{f.d}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mt-10">
                <h3 className="font-display text-lg font-black">What you get</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 rounded-xl border border-transparent bg-secondary/60 px-3 py-2.5 text-sm transition hover:border-ink/15 hover:bg-white"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs table */}
              <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-sm">
                <div className="flex items-center justify-between bg-ink px-5 py-3.5 text-white">
                  <span className="font-display font-bold">Specifications</span>
                  <span className="text-xs text-white/60">{product.specs[activeSpec]?.label}</span>
                </div>
                <div className="divide-y divide-border bg-card">
                  {product.specs.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setActiveSpec(i)}
                      className={`flex w-full items-center justify-between px-5 py-3.5 text-sm text-left transition ${
                        activeSpec === i ? "bg-ink/5" : "hover:bg-secondary/50"
                      }`}
                    >
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-bold">{s.value}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-display text-2xl md:text-3xl font-black mb-8">You might also like</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile sticky order bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={whatsappLink(product)}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex flex-1 flex-col items-center justify-center rounded-xl bg-brand py-2.5 text-brand-foreground"
          >
            <span className="text-[9px] uppercase tracking-wider font-semibold opacity-80">Call</span>
            <span className="text-xs font-black leading-none">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      {/* Lightbox zoom */}
      {zoomed && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-fade-up"
          onClick={() => setZoomed(false)}
          aria-label="Close zoomed image"
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[90vh] max-w-full rounded-3xl object-contain shadow-2xl"
          />
        </button>
      )}
    </div>
  );
}
