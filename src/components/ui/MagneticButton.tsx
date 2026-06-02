"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";

export function MagneticButton({
  href,
  children,
  className = "",
  strength = 0.4,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        href={href}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {children}
      </Link>
    </motion.div>
  );
}
