import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck, Wrench } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { categories, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};

  const fullDescription = `${cat.name} supplier in India — ${cat.description}`;
  const description =
    fullDescription.length <= 158
      ? fullDescription
      : `${fullDescription.slice(0, 155).replace(/\s+\S*$/, "")}…`;

  return {
    title: `${cat.name} Supplier in India`,
    description,
    alternates: {
      canonical: `/products/${cat.slug}`,
    },
    openGraph: {
      title: `${cat.name} Supplier in India | ${site.name}`,
      description,
      url: `${site.url}/products/${cat.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const related = categories.filter((c) => c.slug !== cat.slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
          { "@type": "ListItem", position: 3, name: cat.name },
        ],
      },
      {
        "@type": "ItemList",
        name: cat.name,
        numberOfItems: cat.items.length,
        itemListElement: cat.items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item,
        })),
      },
    ],
  };

  const Icon = cat.icon;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader
        eyebrow={cat.short}
        title={
          <>
            {cat.name} <span className="text-gradient">Supplier in India</span>
          </>
        }
        description={`${cat.description} Every product is sourced through ISO-aligned processes, verified before dispatch and supported for its full lifecycle.`}
        accent={`${cat.items.length} product lines · Authorized OEM network`}
      />

      {/* Category detail */}
      <Section className="pt-8">
        <div className="container-z">
          <Stagger className="grid items-start gap-8 rounded-3xl border border-line bg-panel/40 p-7 md:p-10 lg:grid-cols-[1fr_1.4fr]">
            <StaggerItem>
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-teal/25 to-teal/5 text-teal-bright ring-1 ring-teal/25">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-ink">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-mut">
                      {cat.items.length} product lines
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-body">
                  {cat.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Genuine equipment with full warranty",
                    "Installation, calibration & AMC support",
                    "Tender & institutional procurement documentation",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-body">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-teal-bright" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact#rfq" size="sm" variant="secondary">
                    Enquire about this category
                  </Button>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <ul className="grid gap-3 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-line bg-base/50 px-4 py-3 text-sm text-body transition-colors hover:border-teal/30 hover:text-ink"
                  >
                    <Check className="h-4 w-4 shrink-0 text-teal-bright" />
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </Stagger>
        </div>
      </Section>

      {/* Related categories */}
      <Section className="bg-base2/40">
        <div className="container-z">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              Explore more of the <span className="text-gradient">catalog</span>
            </h2>
            <p className="mt-5 leading-relaxed text-body md:text-lg">
              One partner for your entire laboratory — explore the related
              categories we supply alongside {cat.name.toLowerCase()}.
            </p>
          </div>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-panel/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-teal/25 to-teal/5 text-teal-bright ring-1 ring-teal/25">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-4 font-semibold text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mut">
                    {c.description}
                  </p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-teal-bright transition-colors group-hover:text-ink">
                    View category
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Service support */}
      <Section className="py-16 md:py-20">
        <div className="container-z">
          <div className="rounded-3xl border border-teal/25 bg-linear-to-br from-teal/15 to-teal/5 p-8 md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal-bright ring-1 ring-teal/25">
                    <Wrench className="h-5.5 w-5.5" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    Full lifecycle support
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-body">
                  From selection and installation to calibration, AMC and
                  training — our engineers support every {cat.short.toLowerCase()}{" "}
                  purchase for its entire working life.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/services" variant="secondary">
                  Our Services
                </Button>
                <Button href="/contact#rfq">
                  Request a Quote
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
