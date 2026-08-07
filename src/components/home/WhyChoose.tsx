import { whyChoose } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function WhyChoose() {
  return (
    <Section className="bg-base2/40">
      <div className="container-z">
        <SectionHeading
          eyebrow="Why Choose Zenova"
          title={
            <>
              The standard behind every{" "}
              <span className="text-gradient">delivery</span>
            </>
          }
          description="Premium institutions don't compromise on suppliers. Neither do we — here's what you can expect."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group relative h-full rounded-2xl border border-line bg-panel/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-teal/20 to-teal/5 text-teal-bright ring-1 ring-teal/25">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-4xl font-bold text-navy/10 transition-colors duration-300 group-hover:text-teal/20">
                    0{whyChoose.indexOf(f) + 1}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mut">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
