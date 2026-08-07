"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Search, X } from "lucide-react";
import { categories, type Category } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductsBrowser() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");
  const [scrollTick, setScrollTick] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((c) => ({
        ...c,
        items: c.items.filter((item) =>
          item.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  // Scroll to the selected category once the (cleared) list has re-rendered.
  // A plain onClick scroll would miss sections that were filtered out by a
  // search query, because they don't exist in the DOM until the query clears.
  useEffect(() => {
    if (active === "all") return;
    const raf = requestAnimationFrame(() => {
      document
        .getElementById(active)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, [active, scrollTick]);

  const scrollToAll = () => {
    const el = topRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const pills: { key: string; label: string }[] = [
    { key: "all", label: "All Categories" },
    ...categories.map((c) => ({ key: c.slug, label: c.short })),
  ];

  return (
    <div ref={topRef}>
      {/* Sticky filter bar */}
      <div className="sticky top-[4.5rem] z-30 border-y border-line bg-base/85 backdrop-blur-xl">
        <div className="container-z flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:pb-0">
            {pills.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => {
                  if (p.key === "all") {
                    setQuery("");
                    setActive("all");
                    scrollToAll();
                  } else {
                    setQuery("");
                    setActive(p.key);
                    setScrollTick((t) => t + 1);
                  }
                }}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === p.key
                    ? "border-teal/50 bg-teal/15 text-teal-bright"
                    : "border-line bg-panel/40 text-body hover:border-teal/30 hover:text-ink",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="relative shrink-0 lg:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mut" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive("all");
              }}
              placeholder="Search products…"
              className="h-11 w-full rounded-full border border-line bg-panel/60 pl-10 pr-10 text-sm text-ink placeholder:text-mut focus:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal/20"
              aria-label="Search products"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-mut hover:text-ink"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category sections */}
      <div className="container-z py-14 md:py-20">
        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-display text-xl font-semibold text-ink">
              No products match “{query}”
            </p>
            <p className="mt-2 text-sm text-mut">
              Try a different term, or contact us for a custom sourcing enquiry.
            </p>
            <div className="mt-6 flex justify-center">
              <Button onClick={() => setQuery("")} variant="secondary">
                Clear search
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-16 md:space-y-20">
          {filtered.map((c) => (
            <CategorySection key={c.slug} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.slug} className="scroll-mt-40">
      <div className="grid items-start gap-8 rounded-3xl border border-line bg-panel/40 p-7 md:p-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-teal/25 to-teal/5 text-teal-bright ring-1 ring-teal/25">
              <category.icon className="h-5.5 w-5.5" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {category.name}
              </h2>
              <p className="text-sm text-mut">{category.items.length} product lines</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-body">
            {category.description}
          </p>
          <div className="mt-6">
            <Button href="/contact#rfq" size="sm" variant="secondary">
              Enquire about this category
            </Button>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {category.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-line bg-base/50 px-4 py-3 text-sm text-body transition-colors hover:border-teal/30 hover:text-ink"
            >
              <Check className="h-4 w-4 shrink-0 text-teal-bright" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
