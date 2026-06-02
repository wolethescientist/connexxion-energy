import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 24,
  height: 24,
  ...props,
});

export const Icon = {
  drill: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M14 4h6v4h-6z" />
      <path d="M14 8l-4 4" />
      <path d="M10 12l-6 6-1 3 3-1 6-6" />
      <path d="M12 10l2 2" />
    </svg>
  ),
  pipeline: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 9h11a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h1" />
      <path d="M3 9V6m0 3v3" />
      <circle cx="7" cy="9" r="0.6" fill="currentColor" />
      <circle cx="11" cy="9" r="0.6" fill="currentColor" />
      <path d="M21 15v-3m0 3v3" />
    </svg>
  ),
  ship: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 15l1.5 5h15L21 15" />
      <path d="M5 15V9h10l4 6" />
      <path d="M9 9V5h3v4" />
      <path d="M3 18c2 1 3 1 5 0s3-1 5 0 3 1 5 0" />
    </svg>
  ),
  wrench: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M14.5 5.5a3.5 3.5 0 0 0 4.6 4.6L21 12l-7 7-2-2-5.5 5.5a2.1 2.1 0 0 1-3-3L9 14l-2-2 7-7 .5.5z" />
    </svg>
  ),
  bolt: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  truck: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 7h10v8H3z" />
      <path d="M13 10h4l3 3v2h-7z" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
    </svg>
  ),
  exchange: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 8h13l-3-3" />
      <path d="M20 16H7l3 3" />
    </svg>
  ),
  leaf: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14" />
      <path d="M5 19c2-4 5-7 9-9" />
    </svg>
  ),
  compass: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </svg>
  ),
  layers: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  cpu: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v2m4-2v2m-4 14v2m4-2v2M3 10h2m-2 4h2m14-4h2m-2 4h2" />
    </svg>
  ),
  handshake: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M11 6l-3 3-4 1v5l3 3 5-3" />
      <path d="M13 6l3 3 4 1v5l-3 3-3-2" />
      <path d="M11 6h2" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 21c4-4 7-7 7-11a7 7 0 1 0-14 0c0 4 3 7 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  ),
  arrowDown: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  globe: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof Icon;
