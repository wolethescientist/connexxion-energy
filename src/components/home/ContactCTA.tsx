import Image from "next/image";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";
import { Icon } from "@/lib/icons";

const details = [
  {
    icon: "pin" as const,
    value: company.address,
    href: "https://www.google.com/maps?q=Maitama,Abuja,Nigeria",
    external: true,
  },
  { icon: "phone" as const, value: company.phone, href: `tel:${company.phone}`, external: false },
  { icon: "mail" as const, value: company.email, href: `mailto:${company.email}`, external: false },
];

export function ContactCTA() {
  return (
    <section id="contact" className="section bg-ink">
      <div className="container-cnx">
        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-cream/10">
          <Image
            src="/images/renewable.jpg"
            alt="Wind turbines and solar panels at sunrise"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/65" />
          <div className="absolute inset-0 grain" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
            {/* Left — hook + details */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-3">
                  <span className="h-px w-8 rule-gold" />
                  <span className="eyebrow text-gold-soft">Partner with us</span>
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-xl mt-6 text-[clamp(2.2rem,5vw,3.6rem)] text-cream">
                  Let&rsquo;s power what&rsquo;s next,{" "}
                  <span className="italic text-gradient-gold">together</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream/80">
                  Whether you&rsquo;re developing a field, moving product, or building toward a
                  cleaner future — tell us what you need and our Abuja team will be in touch.
                </p>
              </Reveal>

              <div className="mt-9 space-y-3">
                {details.map((d, i) => {
                  const IconCmp = Icon[d.icon];
                  return (
                    <Reveal key={d.value} delay={0.05 * i}>
                      <a
                        href={d.href}
                        target={d.external ? "_blank" : undefined}
                        rel={d.external ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-3 text-cream/90 transition-colors hover:text-gold-soft"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream/8 text-brand-bright ring-1 ring-cream/10 transition-colors group-hover:bg-brand group-hover:text-white">
                          <IconCmp width={18} height={18} />
                        </span>
                        <span className="text-[0.95rem]">{d.value}</span>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Right — form */}
            <Reveal direction="left">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
