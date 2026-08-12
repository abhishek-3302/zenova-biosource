"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen && !megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileOpen) {
          setMobileOpen(false);
          mobileToggleRef.current?.focus();
        }
        if (megaOpen) setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, megaOpen]);

  const openMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    megaTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || megaOpen || mobileOpen
          ? "border-b border-line bg-base/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav aria-label="Main" className="container-z flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Zenova Biosource home">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white ring-1 ring-line">
            <Image
              src="/logo.png"
              alt="Zenova Biosource logo"
              fill
              sizes="44px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="font-display block text-[17px] font-bold tracking-tight text-ink">
              ZENOVA <span className="text-teal-bright">BIOSOURCE</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-mut">
              Laboratory · Diagnostic · Equipment
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === "Products" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={scheduleCloseMega}
                onFocus={openMega}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setMegaOpen(false);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    pathname.startsWith(item.href)
                      ? "text-teal-bright"
                      : "text-body hover:text-ink",
                  )}
                >
                  {item.label}
                  <ChevronRight
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      megaOpen && "rotate-90",
                    )}
                  />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
                    >
                      <div className="bg-panel card-elevated ring-line overflow-hidden rounded-2xl p-6">
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/products/${c.slug}`}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-base2/70"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal/25 bg-teal/10 text-teal-bright">
                                <c.icon className="h-4.5 w-4.5" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-ink transition-colors group-hover:text-teal-bright">
                                  {c.name}
                                </span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-mut line-clamp-2">
                                  {c.short}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between rounded-xl bg-linear-to-r from-navy/50 to-teal/15 px-5 py-4">
                          <div>
                            <p className="text-sm font-semibold text-ink">
                              15,000+ products across 8 categories
                            </p>
                            <p className="text-xs text-mut">
                              Browse the full catalog with specifications.
                            </p>
                          </div>
                          <Link
                            href="/products"
                            className="flex items-center gap-1.5 text-sm font-semibold text-teal-bright hover:text-ink"
                          >
                            View catalog <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-teal-bright"
                    : "text-body hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" size="md">
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </div>

        <button
          ref={mobileToggleRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel/60 text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            id="mobile-menu"
            className="overflow-hidden border-t border-line bg-base lg:hidden"
          >
            <div className="container-z flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto py-6">
              {nav.map((item) =>
                item.label === "Products" ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileProducts((v) => !v)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-ink hover:bg-base2/70"

                      aria-expanded={mobileProducts}
                    >
                      Products
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 text-mut transition-transform duration-300",
                          mobileProducts && "rotate-90",
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileProducts && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-2 border-l border-line pl-3">
                            {categories.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/products/${c.slug}`}
                                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-body hover:bg-base2/70 hover:text-teal-bright"
                              >
                                <c.icon className="h-4 w-4 text-teal-bright" />
                                {c.name}
                              </Link>
                            ))}
                            <Link
                              href="/products"
                              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-teal-bright"
                            >
                              View full catalog
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 font-semibold text-ink hover:bg-base2/70"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="mt-4 border-t border-line pt-4">
                <Button href="/contact" size="lg" className="w-full">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-center text-sm text-mut hover:text-teal-bright"
                >
                  {site.phone} · WhatsApp us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
