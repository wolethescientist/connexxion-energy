import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { mission, vision } from "@/lib/content";

export function MissionVision({ bg = "bg-ink" }: { bg?: string }) {
  return (
    <section className={`section relative overflow-hidden ${bg}`}>
      {/* Ambient brand field */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 glow-brand opacity-20"
        aria-hidden
      />

      <div className="container-cnx relative">
        {/* Mission */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="text-center">
            <Eyebrow>Our Mission</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="display-xl mt-8 text-balance text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.15] text-cream">
              {mission}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-16 flex justify-center">
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>

        {/* Vision — rendered as text, mirroring the Mission */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <Reveal className="text-center">
            <Eyebrow tone="leaf">Our Vision</Eyebrow>
          </Reveal>
          <div className="mt-9 space-y-7">
            {vision.map((v, i) => (
              <Reveal key={v.title} delay={0.05 * i}>
                <p className="display-xl text-balance text-[clamp(1.25rem,2.5vw,1.9rem)] leading-snug text-cream/90">
                  <span className="italic text-gradient-gold">{v.title}</span>
                  <span className="text-cream/50"> — </span>
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
