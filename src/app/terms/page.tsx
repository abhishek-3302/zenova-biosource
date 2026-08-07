import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Zenova Biosource — terms governing quotations, orders, pricing, delivery, installation, warranties, service agreements and use of this website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing this website or engaging Zenova Biosource for products, services or quotations, you agree to these Terms of Service. If you are acting on behalf of an organization, you confirm that you are authorized to bind that organization to these terms.",
    ],
  },
  {
    title: "2. Website Use",
    body: [
      "This website is provided for information and business-enquiry purposes. You agree not to misuse the website, attempt to gain unauthorized access, or use its content for any unlawful purpose. Product listings and descriptions are indicative and are not an offer to sell; a binding contract arises only upon our written acceptance of a purchase order.",
    ],
  },
  {
    title: "3. Quotations & RFQs",
    body: [
      "Quotations provided by Zenova Biosource are valid for the period stated on the quotation and are subject to availability, manufacturer pricing and applicable taxes. Itemized quotations for tenders and institutional procurement reflect the specifications and quantities provided at the time of request.",
    ],
  },
  {
    title: "4. Orders, Payment & Taxes",
    body: [
      "Orders are confirmed only upon written acceptance and, where required, receipt of the agreed payment. Prices are exclusive of applicable GST, freight, insurance and installation charges unless stated otherwise. GST is charged in accordance with applicable Indian tax law. Payment terms are as set out in the order confirmation or contract.",
    ],
  },
  {
    title: "5. Delivery, Installation & Risk",
    body: [
      "Delivery timelines are estimates based on stock and logistics and are not binding unless expressly agreed in writing. Risk in equipment passes to the buyer upon delivery at the agreed destination. Installation and commissioning, where included, are performed by certified engineers in accordance with manufacturer protocol and require a ready site, appropriate power and a suitable environment.",
    ],
  },
  {
    title: "6. Warranties",
    body: [
      "Products carry the manufacturer's warranty as applicable at the time of supply. Warranty coverage begins from the date of installation or delivery, whichever is specified in the invoice. Warranty does not cover damage caused by misuse, unauthorized repair, neglect, improper environmental conditions or consumables. Any warranty claim is subject to verification by the manufacturer or Zenova Biosource.",
    ],
  },
  {
    title: "7. Returns & Cancellations",
    body: [
      "Returns are accepted only where the product is defective, incorrect or damaged in transit, and within the period specified on the invoice or contract. Customized orders, calibrated instruments and opened consumables are generally non-returnable. Order cancellations are subject to our acceptance and may incur charges for costs already incurred.",
    ],
  },
  {
    title: "8. Service Agreements (AMC/CMC)",
    body: [
      "Annual Maintenance Contracts (AMC) and Comprehensive Maintenance Contracts (CMC) are governed by the terms of the specific agreement. Service levels, response times, exclusions and pricing are as documented in the agreement. Continued service coverage requires timely payment of applicable service fees.",
    ],
  },
  {
    title: "9. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, design and branding — is the property of Zenova Biosource or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute or use it without prior written consent. All product and brand names referenced are trademarks of their respective owners.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Zenova Biosource shall not be liable for indirect, incidental, consequential or special damages, or for loss of profit, data or business opportunity, arising out of or in connection with the supply of products or services. Our total liability in respect of any claim shall not exceed the amount paid by you for the product or service giving rise to the claim.",
    ],
  },
  {
    title: "11. Governing Law & Jurisdiction",
    body: [
      "These terms are governed by the laws of India. Any dispute arising out of or relating to these terms or the supply of products and services shall be subject to the exclusive jurisdiction of the courts at Guwahati, Assam, India.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Terms of <span className="text-gradient">Service</span>
          </>
        }
        description="Terms governing quotations, orders, delivery, warranties and use of this website."
        accent={`Last updated · August 2026`}
      />

      <Section className="pt-8">
        <div className="container-z grid gap-10 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
          <Reveal>
            <div className="top-28 lg:sticky">
              <div className="rounded-2xl border border-line bg-panel/50 p-6">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
                  On this page
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {sections.map((s) => (
                    <li key={s.title}>
                      <a
                        href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-sm text-body transition-colors hover:text-teal-bright"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            {sections.map((s) => (
              <Reveal key={s.title}>
                <section
                  id={s.title.replace(/\s+/g, "-").toLowerCase()}
                  className="scroll-mt-28"
                >
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h2>
                  {s.body.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-3 text-[15px] leading-relaxed text-body"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}

            <Reveal>
              <section
                id="contact"
                className="scroll-mt-28 rounded-2xl border border-teal/25 bg-linear-to-br from-teal/15 to-teal/5 p-7"
              >
                <h2 className="font-display text-xl font-semibold text-ink">
                  12. Contact Us
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  Questions about these terms? Contact us at{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-teal-bright hover:underline"
                  >
                    {site.email}
                  </a>{" "}
                  or by phone at{" "}
                  <a
                    href={site.phoneHref}
                    className="font-medium text-teal-bright hover:underline"
                  >
                    {site.phone}
                  </a>
                  .
                </p>
              </section>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
