import type { Metadata } from "next";
import Image from "next/image";
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

function TeamCard({ member }: { member: any }) {
  return (
    <article className="group card-dark w-72 overflow-hidden rounded-2xl border border-cream/10 transition-all duration-300 hover:border-gold/40 hover:-translate-y-0.5 shadow-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft">
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name}, ${member.title}`}
            fill
            sizes="288px"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center bg-gradient-to-br from-gold-soft to-gold font-display text-2xl font-semibold text-ink">
            {member.initials}
          </span>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-sm font-semibold leading-snug text-cream group-hover:text-gold-soft transition-colors min-h-[2.5rem] flex items-center justify-center">
          {member.name}
        </h3>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-brand-bright min-h-[1.5rem] flex items-center justify-center">
          {member.title}
        </p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  const gceo = team[0];
  const coo = team[1];
  const cfo = team[2];
  const cbo = team[3];
  const engineering = team[4];
  const legal = team[5];
  const it = team[6];

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
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Reveal>
              <Eyebrow tone="leaf">Structure</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(2rem,4.4vw,3.2rem)] text-cream">
                Organizational Hierarchy
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty leading-relaxed text-sage">
                Our leadership is structured to drive operational excellence, strategic commercial growth,
                and strict regulatory compliance across our upstream, midstream, and downstream operations.
              </p>
            </Reveal>
          </div>

          {/* Organogram Tree for Desktop (lg and up) */}
          <div className="hidden lg:flex flex-col items-center w-full">
            {/* Level 1: GCEO */}
            <div className="relative flex flex-col items-center">
              <Reveal>
                <TeamCard member={gceo} />
              </Reveal>
              {/* Connector line down */}
              <div className="h-12 w-px bg-gold/30" />
            </div>

            {/* Level 2: CBO, COO, CFO */}
            <div className="relative w-full max-w-5xl flex justify-center">
              {/* Horizontal connecting bridge */}
              <div className="absolute top-0 left-[16.6%] right-[16.6%] h-px bg-gold/30" />
              
              <div className="grid grid-cols-3 gap-8 w-full pt-12">
                {/* CBO */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical line up to bridge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold/30" />
                  <Reveal delay={0.05}>
                    <TeamCard member={cbo} />
                  </Reveal>
                </div>

                {/* COO */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical line up to bridge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold/30" />
                  <Reveal delay={0.1}>
                    <TeamCard member={coo} />
                  </Reveal>
                  {/* Vertical line down to connect Level 3 */}
                  <div className="h-12 w-px bg-gold/30" />
                </div>

                {/* CFO */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical line up to bridge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold/30" />
                  <Reveal delay={0.15}>
                    <TeamCard member={cfo} />
                  </Reveal>
                </div>
              </div>
            </div>

            {/* Level 3: Legal, Engineering, IT */}
            <div className="relative w-full max-w-5xl flex justify-center">
              {/* Horizontal connecting bridge */}
              <div className="absolute top-0 left-[16.6%] right-[16.6%] h-px bg-gold/30" />

              <div className="grid grid-cols-3 gap-8 w-full pt-12">
                {/* Legal / Company Secretary */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical line up to bridge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold/30" />
                  <Reveal delay={0.2}>
                    <TeamCard member={legal} />
                  </Reveal>
                </div>

                {/* Infrastructure Engineer */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical line up to bridge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold/30" />
                  <Reveal delay={0.25}>
                    <TeamCard member={engineering} />
                  </Reveal>
                </div>

                {/* IT Manager */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical line up to bridge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold/30" />
                  <Reveal delay={0.35}>
                    <TeamCard member={it} />
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          {/* Stacking Layout for Mobile / Tablet (< lg) */}
          <div className="flex lg:hidden flex-col items-center w-full space-y-6">
            {/* GCEO */}
            <Reveal>
              <TeamCard member={gceo} />
            </Reveal>
            
            {/* Divider line */}
            <div className="h-8 w-px bg-gold/30" />
            
            {/* Row 2: CBO, COO, CFO */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <Reveal delay={0.05}>
                <TeamCard member={cbo} />
              </Reveal>
              <Reveal delay={0.1}>
                <TeamCard member={coo} />
              </Reveal>
              <Reveal delay={0.15}>
                <TeamCard member={cfo} />
              </Reveal>
            </div>

            {/* Divider line */}
            <div className="h-8 w-px bg-gold/30" />

            {/* Row 3: Legal, Engineering, IT */}
            <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center">
              <Reveal delay={0.2}>
                <TeamCard member={legal} />
              </Reveal>
              <Reveal delay={0.25}>
                <TeamCard member={engineering} />
              </Reveal>
              <Reveal delay={0.35}>
                <TeamCard member={it} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
