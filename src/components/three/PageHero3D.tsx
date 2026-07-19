import { Suspense, lazy, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClientOnly } from "@/components/ClientOnly";
import { MagneticButton } from "@/components/motion/MagneticButton";

const ThreeBackground = lazy(() => import("@/components/three/ThreeBackground"));

type CTA = { label: string; href: string; external?: boolean };

export function PageHero3D({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  scene,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  primaryCta: CTA;
  secondaryCta?: CTA;
  scene?: ReactNode;
  meta?: ReactNode;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 1]);

  return (
    <section className="relative isolate overflow-hidden bg-[#08080a] text-white">
      <ClientOnly>
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
      </ClientOnly>

      <div className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(212,175,55,0.12),transparent_65%)]" />

      <motion.div style={{ y }} className="mx-auto grid max-w-7xl gap-14 px-5 pt-32 pb-28 md:grid-cols-[1.1fr_0.9fr] md:pt-40 md:pb-36">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold"
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              rel={primaryCta.external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black shadow-[0_20px_60px_-15px_rgba(212,175,55,0.6)] transition hover:bg-white"
            >
              {primaryCta.label} <span aria-hidden>→</span>
            </MagneticButton>
            {secondaryCta && (
              <MagneticButton
                href={secondaryCta.href}
                target={secondaryCta.external ? "_blank" : undefined}
                rel={secondaryCta.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-gold hover:text-gold"
              >
                {secondaryCta.label}
              </MagneticButton>
            )}
          </motion.div>

          {meta && <div className="mt-10">{meta}</div>}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {scene}
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#08080a]" />
    </section>
  );
}
