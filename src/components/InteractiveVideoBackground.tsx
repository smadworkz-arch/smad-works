import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const BACKGROUND_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260723_145606_ab143199-b593-4941-bb1b-9afca215416b.mp4";

interface InteractiveVideoBackgroundProps {
  className?: string;
  overlayOpacity?: number;
  fixed?: boolean;
}

export function InteractiveVideoBackground({
  className = "",
  fixed = true,
}: InteractiveVideoBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Mouse position state for smooth lerp
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized offset from center: -1 to +1
      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      targetPos.current = {
        x: normX,
        y: normY,
      };

      // Update spotlight position following cursor
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    const updateTransform = () => {
      // Smooth lerp for fluid motion
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.06;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.06;

      const { x, y } = currentPos.current;

      if (videoWrapperRef.current) {
        // Translation + subtle 3D tilt perspective
        const moveX = x * 14;
        const moveY = y * 10;
        const rotateX = -y * 1.5;
        const rotateY = x * 1.5;

        videoWrapperRef.current.style.transform = `perspective(1000px) translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
      }

      animationFrameId.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId.current = requestAnimationFrame(updateTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [reduceMotion]);

  return (
    <div
      className={`pointer-events-none ${fixed ? "fixed inset-0" : "absolute inset-0"} z-0 overflow-hidden ${className}`}
    >
      {/* Video element container with tilt/shift transform */}
      <div
        ref={videoWrapperRef}
        className="relative h-full w-full will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: "scale(1.06)" }}
      >
        <video
          ref={videoRef}
          src={BACKGROUND_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center saturate-[0.88] contrast-[1.02] brightness-[0.62]"
        />
      </div>

      {/* Cursor Spotlight Glow Effect */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--gold,rgba(212,175,55,0.3)),transparent_70%)] opacity-25 blur-3xl transition-opacity duration-300"
      />

      {/* Color Theme Blend & Gradient Overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-gold/5 mix-blend-color transition-colors duration-500"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,13,0.7)_80%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/85"
        aria-hidden="true"
      />
    </div>
  );
}

export default InteractiveVideoBackground;
