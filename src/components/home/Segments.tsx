import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { segments } from "@/lib/content";
import { Icon } from "@/lib/icons";

export function Segments() {
  return (
    <section id="value-chain" className="section relative bg-ink-soft">
      <div className="container-cnx">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The full value chain</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(2rem,4.6vw,3.5rem)] text-cream">
                One partner, from{" "}
                <span className="italic text-gradient-gold">well to market</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty leading-relaxed text-sage">
              We operate seamlessly across three integrated streams — removing the seams between
              exploration, transport and the finished product.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-24">
          {segments.map((seg, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={seg.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  direction={flip ? "left" : "right"}
                  className={`group relative ${flip ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] ring-1 ring-cream/10">
                    <Image
                      src={seg.image}
                      alt={seg.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                    <span className="absolute left-6 top-6 rounded-full bg-ink/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft backdrop-blur-md ring-1 ring-cream/10">
                      {seg.stream}
                    </span>
                  </div>
                </Reveal>

                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal>
                    <span className="font-display text-6xl text-cream/15">{seg.index}</span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-cream">
                      {seg.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-4 max-w-md text-pretty leading-relaxed text-sage">
                      {seg.blurb}
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <ul className="mt-6 space-y-3">
                      {seg.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-3 text-cream/85">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-bright ring-1 ring-brand/30">
                            <Icon.check width={13} height={13} />
                          </span>
                          <span className="text-[0.95rem]">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-20">
          <div className="flex justify-center">
            <Link href="/services" className="btn btn-ghost">
              See all capabilities
              <Icon.arrow width={17} height={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
