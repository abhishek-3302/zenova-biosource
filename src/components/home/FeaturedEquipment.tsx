import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";
import { featuredProducts } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function FeaturedEquipment() {
  return (
    <Section>
      <div className="container-z">
        <SectionHeading
          eyebrow="Featured Equipment"
          title={
            <>
              Precision instruments, <span className="text-gradient">ready for the lab</span>
            </>
          }
          description="A snapshot of the equipment we install most — each verified, commissioned and backed by full lifecycle support."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <StaggerItem key={p.name}>
              <Link
                href={`/products#${p.categorySlug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40"
              >
                <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-line bg-linear-to-br from-mist/70 to-base2">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,192,186,0.18),transparent_60%)]" />
                  <Gauge className="relative h-12 w-12 text-teal-bright/80 transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full border border-line bg-base/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-mut">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-teal-bright">{p.spec}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mut">
                    {p.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-teal-bright transition-colors group-hover:text-ink">
                    View category
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Button href="/products" variant="secondary" size="lg">
            Browse All Products
            <ArrowRight className="h-4.5 w-4.5" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
