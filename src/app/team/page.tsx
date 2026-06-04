import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { chairman, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The leadership steering Connexxion Energy across the Upstream, Midstream and Downstream value chain.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        current="Team"
        image="/images/team-exec.jpg"
        imageAlt="Connexxion Energy executive in a meeting"
        title={
          <>
            The people behind the <span className="italic text-gradient-gold">enterprise</span>
          </>
        }
        intro="Experienced leadership combining deep technical expertise with disciplined, value-driven management."
      />

      <section className="section bg-ink">
        <div className="container-cnx">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="leaf">Leadership</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(2rem,4.4vw,3.2rem)] text-cream">
                Stewards of stakeholder value
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty leading-relaxed text-sage">
                Our team brings together decades of experience across exploration, engineering,
                trading and finance — united by a commitment to safety, integrity and growth.
              </p>
            </Reveal>
          </div>

          {/* Chairman — featured, centered */}
          <Reveal delay={0.1} className="mt-16 flex justify-center">
            <article className="group card-dark w-full max-w-md rounded-2xl p-8 text-center transition-colors duration-300 hover:border-gold/40">
              {chairman.image ? (
                <span className="relative mx-auto block h-24 w-24 overflow-hidden rounded-full ring-1 ring-gold/30">
                  <Image
                    src={chairman.image}
                    alt={`${chairman.name}, ${chairman.title}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </span>
              ) : (
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-soft to-gold font-display text-xl font-semibold text-ink ring-1 ring-gold/30">
                  {chairman.initials}
                </span>
              )}
              <h3 className="mt-5 font-display text-xl leading-tight text-cream">{chairman.name}</h3>
              <p className="mt-1.5 text-sm text-gold-soft">{chairman.title}</p>
              <div className="mx-auto mt-6 h-px w-16 bg-cream/10" />
              <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-sage">
                Providing strategic stewardship and governance — guiding Connexxion Energy&rsquo;s
                long-term vision with integrity and an absolute commitment to stakeholder value.
              </p>
            </article>
          </Reveal>

          <RevealGroup stagger={0.07} className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.name}>
                <article className="group card-dark h-full rounded-2xl p-7 transition-colors duration-300 hover:border-gold/40">
                  <div className="flex items-center gap-4">
                    {member.image ? (
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-cream/15">
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.title}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </span>
                    ) : (
                      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-bright to-brand-deep font-display text-lg font-semibold text-white ring-1 ring-cream/10">
                        {member.initials}
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-lg leading-tight text-cream">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-gold-soft">{member.title}</p>
                    </div>
                  </div>
                  <div className="mt-6 h-px w-full bg-cream/10" />
                  <p className="mt-5 text-sm leading-relaxed text-sage">
                    Driving Connexxion Energy&rsquo;s mission with technical rigour and an absolute
                    commitment to international standards.
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="mt-10 text-sm text-sage/70">
              Leadership profiles are illustrative placeholders — real names, photographs and
              biographies can be added on request.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
