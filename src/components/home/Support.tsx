import { supportSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ArrowRight } from "lucide-react";

export function Support() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-base2/60" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute -top-32 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />

      <div className="container-z">
        <SectionHeading
          eyebrow="Installation & Support"
          title={
            <>
              From delivery to long-term uptime —{" "}
              <span className="text-gradient">we stay with you</span>
            </>
          }
          description="Every system is installed by certified engineers and supported for the life of the equipment."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {supportSteps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="group relative h-full rounded-2xl border border-line bg-panel/70 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-teal/40">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-navy/15 transition-colors duration-300 group-hover:text-teal/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-teal-bright shadow-[0_0_10px_2px_rgba(24,208,201,0.6)]" />
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Button href="/services" size="lg">
            Explore Service Programs
            <ArrowRight className="h-4.5 w-4.5" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
