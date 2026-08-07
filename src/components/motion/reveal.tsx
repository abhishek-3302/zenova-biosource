"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: custom ?? 0,
    },
  }),
};

function useRevealState() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  // Detect visibility with a plain scroll listener instead of an
  // IntersectionObserver so content is always revealed once it enters the
  // viewport — no dependency on observer support.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const check = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= vh - 40 && rect.bottom >= 40) {
          setInView(true);
        }
        ticking = false;
      });
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  // Content is always visible on the server and initial paint. Only after mount
  // (two frames, letting the position check settle) do we hide below-fold
  // content so it can animate in on scroll — this never leaves content stuck
  // invisible.
  useEffect(() => {
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  const hidden = ready && !reduce && !inView;

  return { ref, hidden };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "p" | "li" | "span" | "h2" | "h3";
}) {
  const { ref, hidden } = useRevealState();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      variants={variants}
      custom={delay}
    >
      {children}
    </Tag>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) {
  const { ref, hidden } = useRevealState();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
