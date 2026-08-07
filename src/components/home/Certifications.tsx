import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function Certifications() {
  return (
    <Section className="pt-0">
      <div className="container-z">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Compliance you can <span className="text-gradient">verify</span>
            </>
          }
          description="Quality systems, registrations and accreditations that back every product we deliver."
        />

        <Stagger className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-4">
          {certifications.map((c) => (
            <StaggerItem key={c}>
              <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-panel/60 px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40">
                {c.startsWith("ISO") || c === "CE Marked Products" ? (
                  <Award className="h-5 w-5 text-teal-bright" />
                ) : (
                  <BadgeCheck className="h-5 w-5 text-teal-bright" />
                )}
                <span className="text-sm font-medium text-ink">{c}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
