import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(18,192,186,0.2),transparent)]" />
      <div className="container-z">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-linear-to-br from-panel to-mist p-10 text-center card-elevated md:p-16">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -top-24 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-teal/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                Ready to equip your laboratory with{" "}
                <span className="text-gradient">precision</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-body">
                Tell us about your requirements and our technical team will
                respond with a detailed, transparent quotation — usually within
                24 hours.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact#rfq" size="lg">
                  Request a Quote
                  <ArrowRight className="h-4.5 w-4.5" />
                </Button>
                <Button href={site.phoneHref} size="lg" variant="secondary">
                  <Phone className="h-4.5 w-4.5" />
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
