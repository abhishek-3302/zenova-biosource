import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function Testimonials() {
  return (
    <Section className="bg-base2/40">
      <div className="container-z">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by the people who{" "}
              <span className="text-gradient">run the laboratories</span>
            </>
          }
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-panel/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35">
                <Quote className="h-8 w-8 text-teal-bright/60" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-body md:text-[15px]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="font-display text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-mut">{t.role}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
