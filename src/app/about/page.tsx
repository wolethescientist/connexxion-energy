import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { MissionVision } from "@/components/site/MissionVision";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";
import { aboutParagraphs, company, values } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Registered in Nigeria in 2012, Connexxion Energy is a wholly-owned indigenous corporation operating across the Upstream, Midstream and Downstream value chain.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Connexxion"
        current="About"
        image="/images/marine-tanker.jpg"
        imageAlt="Aerial view of an oil tanker at sea"
        title={
          <>
            A bridge across <span className="italic text-gradient-gold">West Africa&rsquo;s</span>{" "}
            energy
          </>
        }
        intro={`${company.tagline}. A wholly-owned indigenous company, in operation since ${company.established}.`}
      />

      {/* Story */}
      <section className="section bg-ink">
        <div className="container-cnx grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow tone="leaf">Our story</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(1.9rem,4vw,3rem)] text-cream">
                Committed to stakeholder value through integrated solutions
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5">
              {aboutParagraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-pretty leading-relaxed text-sage">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left" className="relative">
            <div className="grid gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-cream/10">
                <Image
                  src="/images/downstream-refinery.jpg"
                  alt="Refinery at dusk"
                  fill
                  sizes="(max-width:1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-cream/10">
                  <Image
                    src="/images/pipe-welding.jpg"
                    alt="Pipeline welding on site"
                    fill
                    sizes="22vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-cream/10">
                  <Image
                    src="/images/power-lineman.jpg"
                    alt="Power transmission maintenance"
                    fill
                    sizes="22vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision bg="bg-ink-soft" />

      {/* Core Values */}
      <section className="section bg-ink">
        <div className="container-cnx">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Our core values</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(2rem,4.4vw,3.2rem)] text-cream">
                Principles that hold under pressure
              </h2>
            </Reveal>
          </div>

          <RevealGroup stagger={0.08} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const IconCmp = Icon[v.icon as IconName];
              return (
                <RevealItem key={v.title}>
                  <div className="card-dark h-full rounded-2xl p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/12 text-gold-soft ring-1 ring-gold/25">
                      <IconCmp width={22} height={22} />
                    </span>
                    <h3 className="mt-6 font-display text-lg text-cream">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-sage">{v.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <Stats />
      <CTA />
    </>
  );
}
