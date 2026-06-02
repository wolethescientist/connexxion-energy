"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { company, intro } from "@/lib/content";
import { Icon } from "@/lib/icons";

export function AboutTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="section relative overflow-hidden bg-ink">
      <div className="container-cnx grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-xl mt-6 text-[clamp(2rem,4.6vw,3.4rem)] text-cream">
              An indigenous corporation,{" "}
              <span className="italic text-gradient-leaf">built on Africa&rsquo;s energy</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-pretty leading-relaxed text-sage">
              Registered in Nigeria in {company.established}, Connexxion Energy is wholly
              indigenous with a single aim — to be the preferred player in the energy sector,
              committed to stakeholder value through integrated business solutions.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-sage">
              {intro}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 text-cream"
            >
              <span className="link-underline font-medium">Read our story</span>
              <span className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-cream/20 transition-all duration-300 group-hover:bg-brand group-hover:ring-brand">
                <Icon.arrow width={17} height={17} />
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal direction="left" className="relative">
          <div ref={ref} className="relative">
            <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 glow-brand opacity-40" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] ring-1 ring-cream/10">
              <motion.div style={{ y }} className="absolute inset-[-6%]">
                <Image
                  src="/images/construction.jpg"
                  alt="Connexxion Energy engineers on a construction site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="card-dark absolute -bottom-7 -left-5 max-w-[16rem] rounded-2xl p-6 backdrop-blur-xl sm:-left-8"
            >
              <p className="font-display text-4xl text-gold-soft">HSE</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                International health &amp; safety standards upheld across every operation — without
                compromise.
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
