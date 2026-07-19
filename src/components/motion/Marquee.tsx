import type { ReactNode } from "react";

export function Marquee({
  children,
  speed = "normal",
  className = "",
}: {
  children: ReactNode;
  speed?: "slow" | "normal";
  className?: string;
}) {
  const anim = speed === "slow" ? "animate-marquee-x-slow" : "animate-marquee-x";
  return (
    <div className={`hide-scrollbar overflow-hidden ${className}`}>
      <div className={`flex w-max gap-10 ${anim} pause-on-hover`}>
        {children}
        {children}
      </div>
    </div>
  );
}
