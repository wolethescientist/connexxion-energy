import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { CareersForm } from "@/components/site/CareersForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Stats } from "@/components/home/Stats";
import {
  careersIntro,
  careerBenefits,
  openings,
  hiringSteps,
  company,
} from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with Connexxion Energy — explore open roles across Upstream, Midstream and Downstream operations and apply to join Africa's leading energy service corporation.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        current="Careers"
        image="/images/construction.jpg"
        imageAlt="Engineers collaborating on an energy construction site"
        title={
          <>
            Build the future of <span className="italic text-gradient-gold">energy</span> with us
          </>
        }
        intro="Join a team shaping the Upstream, Midstream and Downstream of West Africa's energy sector — with discipline, safety and ambition at the core."
      />

      {/* Open positions */}
      <section className="section bg-ink">
        <div className="container-cnx">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Open positions</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-xl mt-6 text-[clamp(2rem,4.4vw,3.2rem)] text-cream">
                  Find your place on the team
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/[0.04] px-4 py-2 text-sm text-sage ring-1 ring-cream/10">
                <Icon.briefcase width={16} height={16} className="text-gold-soft" />
                {openings.length} roles open
              </span>
            </Reveal>
          </div>

          <RevealGroup stagger={0.06} className="mt-12 grid gap-4">
            {openings.map((o) => (
              <RevealItem key={o.id}>
                <a
                  href="#apply"
                  className="group card-dark flex flex-col gap-5 rounded-2xl p-6 transition-colors duration-300 hover:border-brand/40 sm:flex-row sm:items-center sm:justify-between sm:p-7"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand/12 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-brand-bright ring-1 ring-brand/25">
                        {o.stream}
                      </span>
                      <span className="text-xs text-sage">{o.department}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl text-cream transition-colors group-hover:text-gold-soft">
                      {o.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sage">{o.summary}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-sage/80">
                      <span className="inline-flex items-center gap-1.5">
                        <Icon.pin width={14} height={14} className="text-brand-bright" />
                        {o.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Icon.clock width={14} height={14} className="text-brand-bright" />
                        {o.type}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-cream/22 px-4 py-2.5 text-sm font-medium text-cream transition-colors duration-300 group-hover:border-gold group-hover:text-gold-soft sm:self-center">
                    Apply
                    <Icon.arrow width={16} height={16} />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why Connexxion — list */}
      <section className="section bg-ink-soft">
        <div className="container-cnx grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2rem)] lg:self-start">
            <Reveal>
              <Eyebrow tone="leaf">Why Connexxion</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(1.9rem,4vw,3rem)] text-cream">
                Energy is built by people
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-pretty text-[1.05rem] leading-relaxed text-sage">
                {careersIntro}
              </p>
            </Reveal>
          </div>

          <ul className="divide-y divide-cream/10 lg:mt-2">
            {careerBenefits.map((b, i) => {
              const IconCmp = Icon[b.icon as IconName];
              return (
                <Reveal
                  as="li"
                  key={b.title}
                  delay={0.05 * i}
                  className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand-bright ring-1 ring-brand/25">
                    <IconCmp width={20} height={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-cream">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sage">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Hiring process */}
      <section className="section bg-ink">
        <div className="container-cnx">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="leaf">How hiring works</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(2rem,4.4vw,3.2rem)] text-cream">
                A clear path from apply to offer
              </h2>
            </Reveal>
          </div>

          <RevealGroup stagger={0.08} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((s) => (
              <RevealItem key={s.step}>
                <div className="card-dark h-full rounded-2xl p-7">
                  <span className="font-display text-3xl text-gradient-gold">{s.step}</span>
                  <h3 className="mt-5 font-display text-lg text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sage">{s.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section scroll-mt-[var(--chrome-h)] bg-ink-soft">
        <div className="container-cnx grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2rem)] lg:self-start">
            <Reveal>
              <Eyebrow>Apply now</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(2rem,4.4vw,3rem)] text-cream">
                Tell us about yourself
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-sage">
                Submit your application below and our talent team will be in touch. Don&rsquo;t see the
                right role? Send an open application — we&rsquo;re always glad to meet exceptional people.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 overflow-hidden rounded-2xl ring-1 ring-cream/10">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/team-exec.jpg"
                    alt="A Connexxion Energy team member at work"
                    fill
                    sizes="(max-width:1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-col gap-3 text-sm text-sage">
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold-soft"
                >
                  <Icon.mail width={18} height={18} className="text-brand-bright" />
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold-soft"
                >
                  <Icon.phone width={18} height={18} className="text-brand-bright" />
                  {company.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <CareersForm />
          </Reveal>
        </div>
      </section>

      <Stats />
    </>
  );
}
