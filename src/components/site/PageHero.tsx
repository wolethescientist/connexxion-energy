import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  current,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
  imageAlt: string;
  current: string;
}) {
  return (
    <section className="relative overflow-hidden grain bg-ink">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
      </div>

      <div className="container-cnx relative z-10 pt-chrome">
        <div className="pb-16 pt-20 sm:pb-20 sm:pt-24">
          <Reveal>
            <nav className="mb-7 flex items-center gap-2 text-xs text-cream/55" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-gold-soft">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-cream/80">{current}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl mt-6 max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] text-cream">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-cream/80">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
