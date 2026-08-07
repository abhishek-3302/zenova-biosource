import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RfqForm } from "@/components/contact/RfqForm";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zenova Biosource for quotations, service requests, dealer enquiries and distributor registration. RFQ response within 24 hours.",
};

const channels = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [site.phone],
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [site.address],
    href: undefined,
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [site.hours],
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build your <span className="text-gradient">laboratory</span>
          </>
        }
        description="Quotations, service requests, dealer enquiries and distributor registration — one form covers it all."
        accent="Response within 24 business hours"
      />

      {/* Channels */}
      <section className="pb-16">
        <div className="container-z">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <StaggerItem key={c.title}>
                  <Wrapper
                    {...(c.href
                      ? { href: c.href, className: "group block h-full" }
                      : { className: "group block h-full" })}
                  >
                    <div className="flex h-full flex-col rounded-2xl border border-line bg-panel/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-teal/25 to-teal/5 text-teal-bright ring-1 ring-teal/25">
                          <c.icon className="h-5 w-5" />
                        </span>
                        {c.href && (
                          <ArrowUpRight className="h-4 w-4 text-mut transition-colors group-hover:text-teal-bright" />
                        )}
                      </div>
                      <h2 className="font-display mt-4 font-semibold text-ink">
                        {c.title}
                      </h2>
                      {c.lines.map((line) => (
                        <p key={line} className="mt-1 text-sm leading-relaxed text-mut">
                          {line}
                        </p>
                      ))}
                    </div>
                  </Wrapper>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-base2/40 py-16 md:py-20">
        <div className="container-z grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <RfqForm />

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-line bg-panel/40">
              <iframe
                title="Zenova Biosource location map"
                src="https://www.google.com/maps?q=Hatigaon%20Chariali%2C%20Ajanta%20Path%2C%20Guwahati%2C%20Assam&output=embed"
                className="h-72 w-full border-0 grayscale-[0.2] contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="rounded-3xl border border-teal/25 bg-linear-to-br from-teal/15 to-teal/5 p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-teal-bright" />
                <h2 className="font-display text-lg font-semibold text-ink">
                  Dealer & Distributor Program
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Partner with Zenova Biosource to distribute premium diagnostic
                and laboratory brands in your territory. Select the “Distributor
                Enquiry” option in the form.
              </p>
              <p className="mt-4 text-xs text-mut">
                Minimum territory investment and performance commitments apply.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-panel/40 p-7">
              <h2 className="font-display text-lg font-semibold text-ink">
                Service Request
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Existing customer? Select “Service Enquiry” and share your
                instrument model and issue — our engineers will call you back.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-bright hover:text-ink"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
