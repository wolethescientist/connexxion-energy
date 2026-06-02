"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import { Icon } from "@/lib/icons";

export function ServicesIndex() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // A 0px-tall band at the vertical centre of the viewport. Because the rows
    // are contiguous, exactly one row straddles the line at any time — that row
    // becomes "active", so it opens as you scroll while the previous one closes.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        }
      },
      { rootMargin: "-38% 0px -62% 0px", threshold: 0 },
    );
    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section bg-ink-soft">
      <div className="container-cnx">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="leaf">What we do</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl mt-6 text-[clamp(2rem,4.6vw,3.5rem)] text-cream">
                Integrated solutions across the energy spectrum
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/services" className="group inline-flex items-center gap-3 text-cream">
              <span className="link-underline font-medium">Service details</span>
              <span className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-cream/20 transition-all duration-300 group-hover:bg-brand group-hover:ring-brand">
                <Icon.arrow width={17} height={17} />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left — scroll-activated editorial index */}
          <ul className="border-t border-cream/12">
            {services.map((svc, i) => {
              const isActive = active === i;
              return (
                <li
                  key={svc.title}
                  data-index={i}
                  ref={(el) => {
                    rowRefs.current[i] = el;
                  }}
                  className="border-b border-cream/12"
                >
                  <Link
                    href="/services"
                    className="flex items-start gap-5 py-6 sm:gap-8 sm:py-7"
                  >
                    {/* Left accent + number */}
                    <span className="flex items-center gap-4">
                      <span
                        className={`hidden w-0.5 self-stretch rounded-full bg-brand-bright transition-all duration-200 sm:block ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <span
                        className={`mt-1 font-display text-sm tabular-nums transition-colors duration-200 ${
                          isActive ? "text-gold-soft" : "text-cream/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <span className="flex-1">
                      <span className="flex items-center justify-between gap-4">
                        <span
                          className={`font-display text-[clamp(1.4rem,3vw,2.1rem)] leading-tight transition-colors duration-200 ${
                            isActive ? "text-cream" : "text-cream/60"
                          }`}
                        >
                          {svc.title}
                        </span>
                        <span
                          className={`shrink-0 transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 text-brand-bright opacity-100"
                              : "-translate-x-2 text-cream/30 opacity-0"
                          }`}
                        >
                          <Icon.arrow width={20} height={20} />
                        </span>
                      </span>

                      {/* Detail — opens on scroll-in, closes as it leaves centre */}
                      <span
                        className={`grid transition-all duration-300 ease-out ${
                          isActive
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="flex items-center gap-3">
                            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-brand-bright">
                              {svc.stream}
                            </span>
                            <span className="h-px flex-1 bg-cream/10" />
                          </span>
                          <span className="mt-3 block max-w-xl text-pretty text-[0.95rem] leading-relaxed text-sage">
                            {svc.detail}
                          </span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right — sticky image preview (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-cream/10">
                <AnimatePresence>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={services[active].image}
                      alt={services[active].alt}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

                {/* progress rail */}
                <div className="absolute right-5 top-5 flex flex-col gap-1.5">
                  {services.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        i === active ? "bg-gold" : "bg-cream/30"
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="eyebrow text-gold-soft">{services[active].stream}</span>
                      <p className="mt-2 font-display text-2xl text-cream">
                        {services[active].title}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
