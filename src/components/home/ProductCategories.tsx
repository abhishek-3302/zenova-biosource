import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function ProductCategories() {
  return (
    <Section className="bg-base2/40">
      <div className="container-z">
        <SectionHeading
          eyebrow="Product Categories"
          title={
            <>
              Everything a modern laboratory needs,{" "}
              <span className="text-gradient">under one roof</span>
            </>
          }
          description="Eight specialized categories spanning diagnostics, medical devices, consumables and turnkey infrastructure."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <StaggerItem key={c.slug}>
              <Link
                href={`/products#${c.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:bg-panel hover:shadow-[0_20px_60px_-20px_rgba(15,159,154,0.35)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal/0 to-transparent transition-all duration-300 group-hover:via-teal/70" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal/25 bg-teal/10 text-teal-bright transition-colors duration-300 group-hover:bg-teal/20">
                  <c.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mut">
                  {c.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-mut">
                    {c.items.length} product lines
                  </span>
                  <ArrowUpRight className="h-4.5 w-4.5 text-teal-bright opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-bright hover:text-ink"
          >
            Explore the full product catalog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
