import { industries } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function Industries() {
  return (
    <Section>
      <div className="container-z">
        <SectionHeading
          eyebrow="Industries Served"
          title={
            <>
              Built for the institutions that{" "}
              <span className="text-gradient">save lives</span> and advance
              science
            </>
          }
          description="From busy hospital laboratories to precision research facilities, we tailor supply and support to the demands of your environment."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-panel/40 p-7 transition-all duration-300 hover:border-teal/35 hover:bg-panel/80">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal/5 blur-2xl transition-all duration-500 group-hover:bg-teal/15" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-mist/50 text-teal-bright transition-transform duration-300 group-hover:scale-110">
                  <industry.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mut">
                  {industry.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10 text-center text-sm text-mut">
          Also serving dental labs, veterinary facilities, food testing and
          academic institutions.
        </Reveal>
      </div>
    </Section>
  );
}
