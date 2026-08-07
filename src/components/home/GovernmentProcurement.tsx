import { Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import { procurementPoints } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function GovernmentProcurement() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-z">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-linear-to-br from-panel to-mist p-8 card-elevated md:p-14">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <Badge>Government Procurement</Badge>
                <h2 className="font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  Public-sector supply, done right
                </h2>
                <p className="mt-5 leading-relaxed text-body">
                  We are a GeM-registered supplier with deep experience in
                  tenders, BOQs and public-health programs. Compliance and
                  documentation are built into every step.
                </p>
                <div className="mt-8">
                  <Button href="/contact#rfq" size="lg">
                    Start an Enquiry
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {procurementPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-line bg-mist/40 p-4 transition-colors hover:border-teal/30"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" />
                    <span className="text-sm leading-relaxed text-body">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-7">
              {[
                { icon: Landmark, label: "GeM Registered" },
                { icon: CheckCircle2, label: "GST Compliant" },
                { icon: CheckCircle2, label: "NABL-Ready Documentation" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2.5 text-sm text-mut">
                  <c.icon className="h-4.5 w-4.5 text-teal-bright" />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
