import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/lib/products";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top phone bar — visible on all sizes */}
      <div className="bg-ink text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <a
            href={`tel:${PHONE}`}
            className="flex min-w-0 items-center gap-2 font-medium hover:text-brand transition-colors"
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
              <Phone className="h-3 w-3" />
            </span>
            <span className="truncate">{PHONE_DISPLAY}</span>
          </a>
          <span className="hidden sm:inline text-white/60">Nationwide delivery · Kenya</span>
          <a
            href={`tel:${PHONE}`}
            className="rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-foreground hover:brightness-110 transition"
          >
            Call now
          </a>
        </div>
      </div>

      <div
        className={`border-b border-border/60 transition-all ${
          scrolled ? "bg-background/90 backdrop-blur-xl" : "bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-ink text-white shadow-brand">
              <span className="absolute inset-1 rounded-lg border border-brand/50" />
              <span className="font-display text-brand font-black text-lg leading-none">P</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-black tracking-tight">POA TANK</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Built tough · Kenya
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition"
                activeProps={{ className: "bg-ink text-white hover:bg-ink hover:text-white" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/products"
              className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground shadow-brand hover:brightness-110 transition"
            >
              Shop Tanks →
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-border"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="mx-auto flex max-w-7xl flex-col p-4 gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium hover:bg-secondary"
                  activeProps={{ className: "bg-ink text-white" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-brand px-5 py-3 font-bold text-brand-foreground"
              >
                Shop Tanks
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
