import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { company } from "@/lib/content";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Connexxion Energy — 2A Iller Crescent, Maitama, Abuja. Phone 09161240000 · info@connexxionenergy.com",
};

const details = [
  {
    icon: "pin" as const,
    label: "Head office",
    value: company.address,
    href: "https://www.google.com/maps?q=Maitama,Abuja,Nigeria",
  },
  { icon: "phone" as const, label: "Telephone", value: company.phone, href: `tel:${company.phone}` },
  { icon: "mail" as const, label: "Email", value: company.email, href: `mailto:${company.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        current="Contact"
        image="/images/construction.jpg"
        imageAlt="Connexxion Energy team on site"
        title={
          <>
            Let&rsquo;s start a <span className="italic text-gradient-gold">conversation</span>
          </>
        }
        intro="Reach our team in Abuja for partnerships, projects, trading enquiries and consultancy."
      />

      <section className="section bg-ink">
        <div className="container-cnx grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — details + map */}
          <div>
            <Reveal>
              <Eyebrow tone="leaf">Get in touch</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(1.8rem,3.6vw,2.6rem)] text-cream">
                We&rsquo;d love to hear from you
              </h2>
            </Reveal>

            <div className="mt-10 space-y-3">
              {details.map((d, i) => {
                const IconCmp = Icon[d.icon];
                return (
                  <Reveal key={d.label} delay={0.05 * i}>
                    <a
                      href={d.href}
                      target={d.icon === "pin" ? "_blank" : undefined}
                      rel={d.icon === "pin" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-cream/10 p-5 transition-colors duration-300 hover:border-brand/40 hover:bg-cream/[0.03]"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand-bright ring-1 ring-brand/25 transition-colors group-hover:bg-brand group-hover:text-white">
                        <IconCmp width={21} height={21} />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-sage">
                          {d.label}
                        </span>
                        <span className="mt-1 block text-cream">{d.value}</span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-cream/10">
                <iframe
                  title="Connexxion Energy — Maitama, Abuja"
                  src="https://www.google.com/maps?q=Maitama,Abuja,Nigeria&z=14&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block grayscale-[0.2] [filter:invert(0.9)_hue-rotate(160deg)]"
                />
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
