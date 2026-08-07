"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function PageHeader({
  eyebrow,
  title,
  description,
  accent,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  accent?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      <div className="absolute -top-32 left-1/2 h-80 w-[720px] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-navy/60 blur-3xl" />

      <div className="container-z max-w-3xl text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>{eyebrow}</Badge>
        </motion.div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl leading-relaxed text-body md:text-lg"
          >
            {description}
          </motion.p>
        )}
        {accent && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <span className="rounded-full border border-teal/25 bg-teal/10 px-4 py-2 text-xs font-medium tracking-wide text-teal-bright">
              {accent}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
