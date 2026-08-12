import type { Metadata } from "next";
import { ArrowRight, Clock, Headset, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Installation, AMC & Calibration for Lab Equipment",
  description:
    "Zenova Biosource service programs — installation, calibration, AMC, CMC, IQ/OQ/PQ validation, training and technical support for lab equipment.",
  alternates: {
    canonical: "/services",
  },
};

const slas = [
  { icon: Clock, label: "4-hour response", note: "for critical-care equipment" },
  { icon: Headset, label: "Dedicated helpdesk", note: "remote diagnostics first" },
  { icon: ShieldCheck, label: "Documented SLAs", note: "in every AMC/CMC contract" },
];

const engagement = [
  { step: "01", title: "Requirement", text: "Share your needs, specs or tender BOQ." },
  { step: "02", title: "Quotation", text: "Itemized pricing within 24 hours." },
  { step: "03", title: "Delivery & Install", text: "Certified engineers commission the system." },
  { step: "04", title: "Lifecycle Support", text: "Calibration, AMC/CMC and training for the long run." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Support that keeps your laboratory <span className="text-gradient">running</span>
          </>
        }
        description="Equipment is only the beginning. Our service programs protect uptime, documentation and accreditation through the entire life of your instruments."
        accent="Service hubs in 12 locations · 45+ certified engineers"
      />

      {/* Service cards */}
      <Section className="pt-8">
        <div className="container-z">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal/5 blur-2xl transition-all duration-500 group-hover:bg-teal/15" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-teal/25 to-teal/5 text-teal-bright ring-1 ring-teal/25">
                    <s.icon className="h-5.5 w-5.5" />
                  </span>
                  <h2 className="font-display mt-5 text-lg font-semibold text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-mut">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-line pt-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-body">
                        <span className="h-1 w-1 rounded-full bg-teal-bright" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}

            {/* CTA card */}
            <StaggerItem>
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-teal/30 bg-linear-to-br from-teal/15 to-teal/5 p-7">
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink">
                    Need a custom service plan?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    Tell us your instrument list and we&apos;ll design a service
                    program around your uptime and budget.
                  </p>
                </div>
                <div className="mt-6">
                  <Button href="/contact#rfq" size="lg">
                    Discuss Service Needs
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Button>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </Section>

      {/* SLA strip */}
      <Section className="py-14 md:py-16">
        <div className="container-z">
          <div className="grid gap-4 rounded-3xl border border-line bg-panel/40 p-8 md:grid-cols-3 md:p-10">
            {slas.map((sla) => (
              <div key={sla.label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal/25 bg-teal/10 text-teal-bright">
                  <sla.icon className="h-5.5 w-5.5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink">
                    {sla.label}
                  </p>
                  <p className="text-sm text-mut">{sla.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Engagement */}
      <Section className="bg-base2/40">
        <div className="container-z">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <>
                A simple, transparent <span className="text-gradient">path</span>
              </>
            }
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engagement.map((e) => (
              <StaggerItem key={e.step}>
                <div className="relative h-full rounded-2xl border border-line bg-panel/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35">
                  <span className="font-display text-4xl font-bold text-navy/10">
                    {e.step}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-semibold text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mut">
                    {e.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>
    </>
  );
}
