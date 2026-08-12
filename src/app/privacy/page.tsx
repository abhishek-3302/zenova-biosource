import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Zenova Biosource — how we collect, use, store and protect personal information for quotations, service requests and business enquiries.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect only the information you choose to share with us when you contact Zenova Biosource. This includes your name, organization, work email, phone number, product category of interest and the details of your enquiry submitted through our quotation or service forms.",
      "When you browse our website, we may collect limited, non-identifying technical data such as browser type, device type and pages visited. This helps us understand how the site is used and keep it secure.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you provide to respond to quotations, RFQs, service requests, dealer and distributor enquiries, and to keep you informed about products or services relevant to your enquiry.",
      "Where you contact us directly by phone or email, we may use the information in those communications to deliver the requested products, services and support.",
      "We do not use your information for marketing purposes without your consent, and we never sell personal data to third parties.",
    ],
  },
  {
    title: "3. Legal Basis & Consent",
    body: [
      "By submitting an enquiry form or contacting us, you consent to Zenova Biosource processing the information you provide for the purpose of responding to your request. Where required by law — including the Indian Digital Personal Data Protection Act, 2023 — we rely on this consent or on our legitimate business interest in responding to customer enquiries.",
    ],
  },
  {
    title: "4. Sharing & Disclosure",
    body: [
      "We do not sell, rent or trade your personal information. We may share limited information with trusted service providers — such as email and hosting providers — strictly to the extent required to operate the website and respond to your enquiries.",
      "We may disclose information where required to do so by law, regulation or a valid legal request, or to protect the rights, property and safety of Zenova Biosource, our customers or the public.",
    ],
  },
  {
    title: "5. Cookies & Third-Party Services",
    body: [
      "Our website does not use advertising cookies. We may use non-essential cookies or local storage for core site functionality and to remember preferences.",
      "Our contact page embeds a Google Maps iframe to display our location. Google may process limited data in accordance with Google's own privacy policy when the map is loaded. Please review Google's Privacy Policy for details.",
      "Fonts used on this website are self-hosted and are not loaded from external services.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We apply appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure or destruction. Access to enquiry data is restricted to personnel who need it to respond to your request.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain enquiry and correspondence records for as long as needed to respond to your request and to meet legitimate business and legal obligations, after which they are securely deleted or anonymized.",
    ],
  },
  {
    title: "8. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you, or withdraw consent for specific processing, at any time. To exercise these rights, contact us using the details below and we will respond within a reasonable period as required by applicable law.",
    ],
  },
  {
    title: "9. Children's Privacy",
    body: [
      "Our website and services are intended for business and institutional customers and are not directed at children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The current version will always be published on this page with a revised date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="text-gradient">Policy</span>
          </>
        }
        description="How Zenova Biosource collects, uses and protects your personal information."
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
                  11. Contact Us
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  For any privacy-related questions or to exercise your rights,
                  reach us at{" "}
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
