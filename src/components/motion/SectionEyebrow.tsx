import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/70 backdrop-blur">
        <span className="h-1 w-1 rounded-full bg-gold" />
        {children}
      </span>
    </Reveal>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
