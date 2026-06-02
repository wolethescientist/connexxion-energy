# Connexxion Energy — Website

A premium, cinematic marketing site for **Connexxion Energy** — Africa's leading energy
service corporation, operating across the Upstream, Midstream and Downstream value chain.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What's inside

| Route | Page |
|-------|------|
| `/` | Cinematic Ken-Burns hero, live price ticker, about teaser, value-chain showcase, animated stats, services grid, CTA |
| `/about` | Company story, values, stats |
| `/services` | All nine capabilities grouped by Upstream / Midstream / Downstream |
| `/team` | Leadership grid (placeholder profiles) |
| `/contact` | Contact details, embedded Abuja map, contact form |
| `/api/energy-prices` | Live commodity prices (Brent, WTI, Natural Gas, Gasoline, Heating Oil) |

## Design system

- **Brand palette** (sampled from the Connexxion logo): leaf/emerald green `#34A24B`,
  lime `#8BC53F`, deep green `#1B7A41`, with a **gold/bronze** accent `#C9A24C` and a
  cinematic **petroleum-green-black** foundation. Defined in `src/app/globals.css` (`@theme`).
- **Type:** Fraunces (editorial display serif) + Inter (UI/body), loaded via `next/font`.
- **Motion:** scroll reveals, Ken Burns hero, animated counters, magnetic buttons, glass nav.
  All animation respects `prefers-reduced-motion`.

## Customising

- **Copy & data** — everything lives in `src/lib/content.ts` (company info, services,
  segments, stats, team). Edit there; pages update automatically.
- **Images** — swap files in `public/images/` (keep the same names) to use real Connexxion
  photography. Logos are in `public/brand/`.
- **Live prices** — `src/app/api/energy-prices/route.ts` fetches real futures and **gracefully
  falls back** to indicative values if the feed is unavailable, so the ticker never errors.
  Plug in a keyed provider here if you want guaranteed uptime.
- **Contact form** — `src/components/site/ContactForm.tsx` is a front-end demo; wire it to an
  email service or an API route to receive submissions.

## Notes

Imagery and leadership profiles are professional placeholders, clearly marked, ready to be
replaced with official Connexxion Energy assets.
