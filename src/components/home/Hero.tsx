"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { KenBurns } from "@/components/ui/KenBurns";
import { heroSlides, intro } from "@/lib/content";
import { Icon } from "@/lib/icons";

export function Hero() {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative min-h-hero w-full overflow-hidden grain bg-ink">
      <KenBurns slides={heroSlides} interval={6000} onIndexChange={setIndex} />

      {/* Cinematic overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent" />
      <div className="pointer-events-none absolute -bottom-px inset-x-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-cnx relative z-10 flex min-h-hero flex-col justify-end pt-chrome pb-16">
        <div className="max-w-3xl pb-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="h-px w-8 rule-gold" />
            <span className="eyebrow text-gold-soft">
              Upstream · Midstream · Downstream
            </span>
          </motion.div>

          <h1 className="display-xl text-[clamp(2.6rem,7.2vw,5.6rem)] text-cream">
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Africa&rsquo;s Leading
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              <span className="italic text-gradient-gold">Energy</span> Service
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Corporation
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-cream/80"
          >
            {intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="/services" className="btn btn-primary">
              Explore our capabilities
              <Icon.arrow width={17} height={17} />
            </Link>
            <Link href="/about" className="btn btn-ghost">
              About Connexxion
            </Link>
          </motion.div>
        </div>

        {/* Bottom row: slide indicator + scroll cue */}
        <div className="flex items-end justify-between border-t border-cream/10 pt-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index ? "w-9 bg-gold" : "w-4 bg-cream/25"
                  }`}
                />
              ))}
            </div>
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-sm font-medium uppercase tracking-[0.18em] text-cream/70"
                >
                  {heroSlides[index].kicker}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden items-center gap-3 text-cream/60 sm:flex"
          >
            <span className="eyebrow">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon.arrowDown width={18} height={18} />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
