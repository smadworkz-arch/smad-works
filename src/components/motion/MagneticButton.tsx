import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  target?: string;
  rel?: string;
};

export function MagneticButton({ children, href, onClick, className = "", strength = 20, target, rel }: Props) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * strength);
    y.set(((e.clientY - r.top) / r.height - 0.5) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Content = (
    <motion.span
      style={{ x: sx, y: sy, display: "inline-block" }}
      className="pointer-events-none"
    >
      {children}
    </motion.span>
  );

  const common = {
    onMouseMove: handleMove,
    onMouseLeave: reset,
    className,
  };

  if (href) {
    return (
      <a
        {...common}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
      >
        {Content}
      </a>
    );
  }
  return (
    <button
      {...common}
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      type="button"
    >
      {Content}
    </button>
  );
}
