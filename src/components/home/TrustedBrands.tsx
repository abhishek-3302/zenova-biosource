import { brands } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";

export function TrustedBrands() {
  const doubled = [...brands, ...brands];
  return (
    <section className="border-y border-line bg-base2/60 py-14 md:py-16">
      <div className="container-z">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-mut">
            Trusted by institutions · Supplying world-leading brands
          </p>
        </Reveal>
        <Reveal delay={0.1} className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-16 pr-16">
            {doubled.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="font-display select-none whitespace-nowrap text-xl font-bold tracking-tight text-mut/70 transition-colors hover:text-ink md:text-2xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
