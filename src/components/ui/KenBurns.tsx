"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export type Slide = { src: string; alt: string; kicker?: string; blurDataURL?: string };

export function KenBurns({
  slides,
  interval = 6000,
  onIndexChange,
  className = "",
}: {
  slides: Slide[];
  interval?: number;
  onIndexChange?: (i: number) => void;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % slides.length;
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 animate-kenburns">
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              priority={index === 0}
              placeholder={slides[index].blurDataURL ? "blur" : "empty"}
              blurDataURL={slides[index].blurDataURL}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
