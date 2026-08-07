import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProductsBrowser } from "@/components/products/ProductsBrowser";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Zenova Biosource product catalog — diagnostic equipment, laboratory equipment, medical equipment, consumables, diagnostic kits, chemicals, surgical supplies and laboratory infrastructure.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Catalog"
        title={
          <>
            15,000+ products across{" "}
            <span className="text-gradient">eight categories</span>
          </>
        }
        description="From automated analyzers to everyday consumables — filter, explore and request a quotation for anything in the catalog."
        accent="Authorized OEM network · Genuine equipment · Full warranty"
      />
      <ProductsBrowser />
      <CTA />
    </>
  );
}
