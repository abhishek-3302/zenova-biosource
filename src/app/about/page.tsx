import type { Metadata } from "next";
import { Compass, Eye, Gem, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { leadership, stats, timeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zenova Biosource is a premium supplier of laboratory, diagnostic and medical equipment serving hospitals, research institutes and government organizations across India.",
};

const values = [
  {
    icon: Compass,
    title: "Mission",
    text: "To make world-class diagnostic and laboratory technology accessible, dependable and fully supported for every institution that relies on it.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To be the most trusted single-source laboratory partner in India — measured by uptime, accuracy and long-term client relationships.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    text: "Every product is sourced through ISO-aligned processes, verified before dispatch, installed to protocol and supported for its full lifecycle.",
  },
];

const commitments = [
  "Product verification before dispatch",
  "Factory-traceable calibration certificates",
  "Installation & commissioning to protocol",
  "Scheduled preventive maintenance",
  "Guaranteed spares & service SLAs",
  "NABL/GLP-ready documentation",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Zenova Biosource"
        title={
          <>
            Two decades of <span className="text-gradient">laboratory</span>{" "}
            excellence
          </>
        }
        description="From a single service van in 2006 to a pan-India partner for hospitals, research institutes and government programs — our story is built on reliability."
        accent="Est. 2006 · PAN-India service network"
      />

      {/* Mission / Vision / Quality */}
      <Section className="pt-8">
        <div className="container-z">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-panel/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal/5 blur-2xl" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-teal/25 to-teal/5 text-teal-bright ring-1 ring-teal/25">
                    <v.icon className="h-5.5 w-5.5" />
                  </span>
                  <h2 className="font-display mt-5 text-xl font-semibold text-ink">
                    {v.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {v.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-base2/40">
        <div className="container-z">
          <SectionHeading
            eyebrow="Our Journey"
            title={
              <>
                Milestones that built <span className="text-gradient">trust</span>
              </>
            }
          />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative border-l border-line pl-10">
              <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-teal-bright via-teal/40 to-transparent" />
              <Stagger gap={0.1} className="space-y-10">
                {timeline.map((t) => (
                  <StaggerItem key={t.year} className="relative">
                    <span className="absolute left-[-3.05rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-teal/40 bg-base">
                      <span className="h-2 w-2 rounded-full bg-teal-bright shadow-[0_0_8px_2px_rgba(24,208,201,0.6)]" />
                    </span>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                      <span className="font-display text-lg font-bold text-teal-bright">
                        {t.year}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink">
                          {t.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-body">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section>
        <div className="container-z">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                The team behind <span className="text-gradient">every delivery</span>
              </>
            }
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {leadership.map((l) => (
              <StaggerItem key={l.name}>
                <div className="group rounded-2xl border border-line bg-panel/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35">
                  <div className="flex items-center gap-4">
                    <span className="font-display flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-teal/25 to-navy/40 text-lg font-bold text-teal-bright ring-1 ring-teal/25">
                      {l.initials}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-ink">
                        {l.name}
                      </h3>
                      <p className="text-xs font-medium text-teal-bright">
                        {l.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-mut">
                    {l.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Infrastructure & quality */}
      <Section className="bg-base2/40">
        <div className="container-z grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Infrastructure built for <span className="text-gradient">scale</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-body">
                Warehouses, demonstration centers and service hubs across India
                keep stock ready and engineers close to you. Our infrastructure
                is designed around one goal — minimal downtime for your
                laboratory.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-7 space-y-3">
                {commitments.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 text-sm text-body"
                  >
                    <Gem className="h-4 w-4 shrink-0 text-teal-bright" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Service Hubs", value: "12", note: "covering all regions" },
                { label: "Warehouses", value: "6", note: "strategically located" },
                { label: "Demo Centers", value: "4", note: "live equipment showcase" },
                { label: "Engineers", value: "45+", note: "certified & trained" },
              ].map((tile) => (
                <div
                  key={tile.label}
                  className="rounded-2xl border border-line bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35"
                >
                  <p className="font-display text-3xl font-bold text-ink">
                    {tile.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-teal-bright">
                    {tile.label}
                  </p>
                  <p className="mt-0.5 text-xs text-mut">{tile.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 md:py-20">
        <div className="container-z">
          <Reveal>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-mut">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
