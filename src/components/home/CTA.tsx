import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";
import { Icon } from "@/lib/icons";

export function CTA() {
  return (
    <section className="section bg-ink">
      <div className="container-cnx">
        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-cream/10">
          <Image
            src="/images/renewable.jpg"
            alt="Wind turbines and solar panels at sunrise"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
          <div className="absolute inset-0 grain" />

          <div className="relative px-8 py-20 sm:px-14 lg:px-20 lg:py-28">
            <div className="max-w-2xl">
              <Reveal>
                <span className="eyebrow text-gold-soft">Partner with us</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-xl mt-6 text-[clamp(2.2rem,5vw,3.8rem)] text-cream">
                  Let&rsquo;s power what&rsquo;s next, <span className="italic text-gradient-gold">together</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-lg text-pretty leading-relaxed text-cream/80">
                  Whether you&rsquo;re developing a field, moving product, or building toward a
                  cleaner future — Connexxion Energy is your bridge across West Africa&rsquo;s energy
                  landscape.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="btn btn-primary">
                    Start a conversation
                    <Icon.arrow width={17} height={17} />
                  </Link>
                  <a href={`tel:${company.phone}`} className="btn btn-ghost">
                    <Icon.phone width={17} height={17} />
                    {company.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
