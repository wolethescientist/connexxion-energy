import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  className = "",
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "leaf" | "sage";
}) {
  const color =
    tone === "gold"
      ? "text-gold-soft"
      : tone === "leaf"
        ? "text-brand-bright"
        : "text-sage";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 rule-gold" aria-hidden />
      <span className={`eyebrow ${color}`}>{children}</span>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "gold",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "gold" | "leaf" | "sage";
  light?: boolean;
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment} gap-5 ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`display-xl text-[clamp(2rem,4.6vw,3.6rem)] ${
            light ? "text-ink" : "text-cream"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`text-pretty text-[1.05rem] leading-relaxed ${
              light ? "text-ink/70" : "text-sage"
            } max-w-xl`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
