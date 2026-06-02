"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Item = {
  symbol: string;
  name: string;
  unit: string;
  price: number;
  change: number;
  changePct: number;
};

type Feed = { asOf: string; live: boolean; source: string; items: Item[] };

const FALLBACK: Item[] = [
  { symbol: "BZ=F", name: "Brent Crude", unit: "USD/bbl", price: 82.4, change: 0.42, changePct: 0.51 },
  { symbol: "CL=F", name: "WTI Crude", unit: "USD/bbl", price: 78.1, change: 0.31, changePct: 0.4 },
  { symbol: "NG=F", name: "Natural Gas", unit: "USD/MMBtu", price: 2.94, change: -0.03, changePct: -1.01 },
  { symbol: "RB=F", name: "Gasoline", unit: "USD/gal", price: 2.46, change: 0.01, changePct: 0.41 },
  { symbol: "HO=F", name: "Heating Oil", unit: "USD/gal", price: 2.55, change: -0.02, changePct: -0.78 },
];

function Pill({ item }: { item: Item }) {
  const up = item.change >= 0;
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap px-6 tnum">
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sage">
        {item.name}
      </span>
      <span className="text-sm font-medium text-cream">${item.price.toFixed(2)}</span>
      <span
        className={`inline-flex items-center gap-1 text-[0.78rem] font-semibold ${
          up ? "text-brand-bright" : "text-[#e8836b]"
        }`}
      >
        <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden className={up ? "" : "rotate-180"}>
          <path d="M5 1l4 7H1z" fill="currentColor" />
        </svg>
        {up ? "+" : ""}
        {item.changePct.toFixed(2)}%
      </span>
      <span className="ml-1 h-3 w-px bg-cream/15" aria-hidden />
    </span>
  );
}

export function PriceTicker() {
  const [items, setItems] = useState<Item[]>(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const res = await fetch("/api/energy-prices", { cache: "no-store" });
        if (!res.ok) return;
        const data: Feed = await res.json();
        if (active && data.items?.length) {
          setItems(data.items);
          setLive(data.live);
        }
      } catch {
        /* keep last good / fallback — never breaks */
      }
    }
    load();
    const id = setInterval(load, 60000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  // Duplicate the list so the marquee loops seamlessly (-50% translate).
  const loop = [...items, ...items];

  return (
    <div className="relative flex h-10 items-center border-y border-cream/10 bg-ink/70 backdrop-blur-md">
      <div className="z-10 flex h-full shrink-0 items-center gap-2 border-r border-cream/10 bg-ink-soft/80 px-4">
        <span className="relative flex h-2 w-2">
          {live && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-70" />
          )}
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              live ? "bg-brand-bright" : "bg-gold"
            }`}
          />
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-sage">
          {live ? "Live Markets" : "Markets"}
        </span>
      </div>

      <div className="marquee-mask relative flex-1 overflow-hidden">
        <div
          className="flex w-max animate-marquee items-center"
          style={{ "--marquee-duration": "46s" } as CSSProperties}
        >
          {loop.map((it, i) => (
            <Pill key={`${it.symbol}-${i}`} item={it} />
          ))}
        </div>
      </div>
    </div>
  );
}
