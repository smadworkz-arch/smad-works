import { motion, type Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const dirVariants = (dir: Direction, distance: number): Variants => {
  const off = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    scale: { scale: 0.9 },
    fade: {},
  }[dir];
  return {
    hidden: { opacity: 0, ...off },
    show: { opacity: 1, x: 0, y: 0, scale: 1 },
  };
};

export function Reveal({
  children,
  direction = "up",
  distance = 24,
  delay = 0,
  duration = 0.7,
  once = true,
  className,
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "header" | "footer" | "article" | "li" | "span";
}) {
  const Motion = motion[Tag] as typeof motion.div;
  return (
    <Motion
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={dirVariants(direction, distance)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={{ show: { transition: { staggerChildren: stagger } }, hidden: {} }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 20,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...(direction === "up" ? { y: distance } : direction === "left" ? { x: distance } : direction === "right" ? { x: -distance } : { y: distance }) },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
