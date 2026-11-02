import { Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingCart, ArrowUpRight } from "lucide-react";
import { formatKsh, whatsappLink, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const discount =
    product.wasPrice && product.wasPrice > product.price
      ? Math.round(((product.wasPrice - product.price) / product.wasPrice) * 100)
      : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-ink">
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="relative block aspect-[4/5] overflow-hidden bg-ink"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.onSale && (
          <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-foreground shadow-brand">
            On Sale
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-ink">
            Save {discount}%
          </span>
        )}
        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {product.category}
        </span>
        <Link
          to="/products/$id"
          params={{ id: product.id }}
          className="mt-1 font-display text-lg font-bold leading-tight hover:text-brand transition"
        >
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.short}</p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-xl font-black">{formatKsh(product.price)}</span>
          {product.wasPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatKsh(product.wasPrice)}</span>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={whatsappLink(product)}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-whatsapp px-3 py-2 text-xs font-bold text-white hover:brightness-110 transition"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Order
          </a>
          <Link
            to="/products/$id"
            params={{ id: product.id }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-3 py-2 text-xs font-bold text-white hover:bg-brand hover:text-brand-foreground transition"
          >
            <ShoppingCart className="h-3.5 w-3.5" /> Details
          </Link>
        </div>
      </div>
    </div>
  );
}
