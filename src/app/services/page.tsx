import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { segments, services, type Stream } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nine integrated capabilities across Upstream, Midstream and Downstream — exploration, pipelines, marine, transmission, trading, renewables and consultancy.",
};

const streamOrder: Stream[] = ["Upstream", "Midstream", "Downstream"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        current="Services"
        image="/images/midstream-pipeline.jpg"
        imageAlt="Oil and gas pipeline infrastructure"
        title={
          <>
            Nine capabilities, <span className="italic text-gradient-gold">one value chain</span>
          </>
        }
        intro="From the wellhead to the finished product and beyond — a complete suite of integrated energy services."
      />

      {streamOrder.map((stream, sIdx) => {
        const list = services.filter((s) => s.stream === stream);
        const seg = segments.find((g) => g.stream === stream);
        return (
          <section
            key={stream}
            className={`section ${sIdx % 2 === 0 ? "bg-ink" : "bg-ink-soft"}`}
          >
            <div className="container-cnx">
              <div className="flex flex-col items-start justify-between gap-6 border-b border-cream/10 pb-10 md:flex-row md:items-end">
                <div>
                  <Reveal>
                    <Eyebrow tone={sIdx === 1 ? "leaf" : "gold"}>
                      {`0${sIdx + 1} — ${stream}`}
                    </Eyebrow>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className="display-xl mt-5 text-[clamp(1.8rem,4vw,2.8rem)] text-cream">
                      {seg?.title ?? stream}
                    </h2>
                  </Reveal>
                </div>
                <Reveal delay={0.1}>
                  <p className="max-w-sm text-pretty leading-relaxed text-sage">{seg?.blurb}</p>
                </Reveal>
              </div>

              <RevealGroup stagger={0.08} className="mt-12 grid gap-5 md:grid-cols-3">
                {list.map((svc) => {
                  const IconCmp = Icon[svc.icon as IconName];
                  return (
                    <RevealItem key={svc.title}>
                      <article className="group h-full overflow-hidden rounded-2xl card-dark transition-colors duration-300 hover:border-brand/40">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={svc.image}
                            alt={svc.alt}
                            fill
                            sizes="(max-width:768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                          <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-ink/60 text-brand-bright backdrop-blur-md ring-1 ring-cream/10">
                            <IconCmp width={20} height={20} />
                          </span>
                        </div>
                        <div className="p-7">
                          <h3 className="font-display text-xl text-cream">{svc.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-sage">
                            {svc.description}
                          </p>
                        </div>
                      </article>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          </section>
        );
      })}

      <CTA />
    </>
  );
}
