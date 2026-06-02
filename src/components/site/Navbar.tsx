"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Icon } from "@/lib/icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`relative z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <div className="container-cnx">
          <nav
            className={`flex items-center justify-between rounded-full px-3 pl-5 transition-all duration-500 ${
              scrolled
                ? "glass py-2 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.7)]"
                : "border border-transparent py-2.5"
            }`}
          >
            <Link href="/" className="flex items-center" aria-label="Connexxion Energy — home">
              <Image
                src="/brand/wordmark.png"
                alt="Connexxion Energy"
                width={180}
                height={40}
                className="h-7 w-auto object-contain sm:h-8"
                priority
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active ? "text-cream" : "text-sage hover:text-cream"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-cream/8 ring-1 ring-cream/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Link
                  href="/contact"
                  className="btn btn-primary !px-5 !py-2.5 text-sm"
                >
                  Talk to us
                  <Icon.arrow width={16} height={16} />
                </Link>
              </div>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="grid h-11 w-11 place-items-center rounded-full text-cream ring-1 ring-cream/15 transition-colors hover:bg-cream/8 lg:hidden"
              >
                {open ? <Icon.close /> : <Icon.menu />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center rounded-full text-cream ring-1 ring-cream/15 transition-colors hover:bg-cream/8"
            >
              <Icon.close />
            </button>
            <motion.nav
              className="absolute inset-x-0 top-0 flex min-h-[100dvh] flex-col justify-center gap-1 px-8 pt-24"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className={`block border-b border-cream/10 py-5 font-display text-4xl tracking-tight transition-colors ${
                      pathname === item.href ? "text-gold-soft" : "text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="btn btn-primary mt-8 justify-center">
                Talk to us
                <Icon.arrow width={16} height={16} />
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
