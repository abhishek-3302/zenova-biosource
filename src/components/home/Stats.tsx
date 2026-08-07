import { stats } from "@/lib/site";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section className="border-y border-line bg-base2/60 py-16 md:py-20">
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
    </section>
  );
}
