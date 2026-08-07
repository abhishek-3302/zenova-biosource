import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { categories, site } from "@/lib/site";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/contact#rfq" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-navy-deep">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal/60 to-transparent" />
      <div className="container-z py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white ring-1 ring-line">
                <Image
                  src="/logo.png"
                  alt="Zenova Biosource logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="leading-tight">
                <span className="font-display block text-lg font-bold tracking-tight text-white">
                  ZENOVA <span className="text-teal-bright">BIOSOURCE</span>
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
                  Laboratory · Diagnostic · Equipment
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              Delivering world-class laboratory, diagnostic and medical
              equipment trusted by hospitals, research institutions and
              government organizations across India.
            </p>
            <div className="mt-6 flex gap-3">
              {["ISO 9001:2015", "ISO 13485", "GeM"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-medium tracking-wide text-slate-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h3>
            <ul className="mt-5 space-y-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products#${c.slug}`}
                    className="text-sm text-slate-300 transition-colors hover:text-teal-bright"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-300 transition-colors hover:text-teal-bright"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-teal-bright"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-teal-bright"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                {site.address}
              </li>
            </ul>
            <Link
              href="/contact#rfq"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-5 py-2.5 text-sm font-semibold text-teal-bright transition-colors hover:bg-teal hover:text-navy-deep"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
          <p className="text-xs text-slate-400">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-teal-bright">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-bright">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
