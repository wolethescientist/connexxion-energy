import { Counter } from "@/components/ui/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      {/* Brand ambient field */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 glow-brand opacity-25" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 glow-gold opacity-20" aria-hidden />

      <div className="container-cnx relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow text-gold-soft">By the numbers</p>
          <h2 className="display-xl mt-5 text-[clamp(1.8rem,4vw,2.8rem)] text-cream">
            Momentum you can measure
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              className="bg-ink/60 px-6 py-12 text-center backdrop-blur-sm"
            >
              <p className="font-display text-[clamp(2.6rem,6vw,4rem)] leading-none text-gradient-leaf tnum">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mx-auto mt-4 max-w-[12rem] text-sm leading-relaxed text-sage">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
