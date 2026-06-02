import Image from "next/image";
import Link from "next/link";
import { company, nav, segments } from "@/lib/content";
import { Icon } from "@/lib/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-ink">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 glow-brand opacity-30" aria-hidden />
      <div className="container-cnx relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex" aria-label="Connexxion Energy — home">
              <Image
                src="/brand/wordmark.png"
                alt="Connexxion Energy"
                width={210}
                height={47}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-sage">
              {company.tagline}. A wholly-owned indigenous energy corporation, bridging West Africa
              across the full Oil &amp; Gas value chain.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-sage">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cream/80 transition-colors hover:text-gold-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-sage">Value chain</h3>
            <ul className="mt-5 space-y-3">
              {segments.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-cream/80 transition-colors hover:text-gold-soft"
                  >
                    {s.stream}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-sage">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <Icon.pin width={18} height={18} className="mt-0.5 shrink-0 text-brand-bright" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon.phone width={18} height={18} className="shrink-0 text-brand-bright" />
                <a href={`tel:${company.phone}`} className="transition-colors hover:text-gold-soft">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon.mail width={18} height={18} className="shrink-0 text-brand-bright" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold-soft">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-sage">
            © {year} {company.legal}. All rights reserved. A member of the {company.parent}.
          </p>
          <p className="text-xs text-sage">
            Established {company.established} · Maitama, Abuja · Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
