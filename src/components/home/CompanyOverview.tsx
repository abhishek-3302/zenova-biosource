import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const points = [
  "End-to-end laboratory solutions — equipment, consumables and infrastructure",
  "Authorized distribution of 30+ global diagnostic and lab brands",
  "ISO-certified processes and NABL-ready validation support",
  "Service network that covers installation through annual maintenance",
];

export function CompanyOverview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-z grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <Badge>Who We Are</Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              A single partner for your entire laboratory
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 leading-relaxed text-body md:text-lg">
              Zenova Biosource supplies the complete spectrum of laboratory,
              diagnostic and medical equipment — from high-throughput analyzers
              to everyday consumables. We pair world-class products with
              engineering-grade service so hospitals, research institutes and
              government departments can run with confidence.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li
                  key={p}
                  style={{ color: "var(--color-body)" }}
                  className="flex items-start gap-3 text-sm text-body md:text-[1rem]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9">
              <Button href="/about" variant="secondary" size="lg">
                More About Zenova
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-linear-to-br from-panel to-mist p-8 card-elevated md:p-10">
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-mut">
                  Supply Coverage
                </span>
                <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal-bright">
                  PAN-INDIA
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "States Served", value: "28+" },
                  { label: "OEM Partners", value: "30+" },
                  { label: "Products", value: "15K+" },
                  { label: "Service Hubs", value: "12" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-line bg-mist/40 p-5"
                  >
                    <p className="font-display text-3xl font-bold text-ink md:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-mut">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-teal/20 bg-linear-to-r from-teal/15 to-teal/5 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display font-semibold text-ink">
                      End-to-end laboratory setup
                    </p>
                    <p className="mt-1 text-sm text-body">
                      Design → Equipment → Consumables → Maintenance
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-bright">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
