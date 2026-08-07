import { Hero } from "@/components/home/Hero";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { ProductCategories } from "@/components/home/ProductCategories";
import { Industries } from "@/components/home/Industries";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FeaturedEquipment } from "@/components/home/FeaturedEquipment";
import { Support } from "@/components/home/Support";
import { GovernmentProcurement } from "@/components/home/GovernmentProcurement";
import { Stats } from "@/components/home/Stats";
import { Certifications } from "@/components/home/Certifications";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <CompanyOverview />
      <ProductCategories />
      <Industries />
      <WhyChoose />
      <FeaturedEquipment />
      <Support />
      <GovernmentProcurement />
      <Stats />
      <Certifications />
      <Testimonials />
      <CTA />
    </>
  );
}
