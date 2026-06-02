import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { team } from "@/lib/content";

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

          <RevealGroup stagger={0.07} className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.name}>
                <article className="group card-dark h-full rounded-2xl p-7 transition-colors duration-300 hover:border-gold/40">
                  <div className="flex items-center gap-4">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-bright to-brand-deep font-display text-lg font-semibold text-white ring-1 ring-cream/10">
                      {member.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-lg leading-tight text-cream">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-gold-soft">{member.role}</p>
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
