"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, FileText, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 220]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
    <div ref={ref} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-140 w-225 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(18,192,186,0.22),transparent)] blur-2xl" />
        <div className="absolute top-1/3 -left-40 h-105 w-105 rounded-full bg-[radial-gradient(closest-side,rgba(11,42,103,0.25),transparent)] blur-2xl" />
        <div className="absolute right-0 top-1/4 h-95 w-95 rounded-full bg-[radial-gradient(closest-side,rgba(18,192,186,0.16),transparent)] blur-2xl" />
      </motion.div>

      {/* Floating geometric accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute top-28 right-[12%] h-24 w-24 animate-[spin_26s_linear_infinite] rounded-3xl border border-teal/30 [mask:radial-gradient(circle,black_20%,transparent_70%)]" />
        <div className="absolute bottom-32 left-[6%] h-16 w-16 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-navy/30" />
        <div className="absolute top-1/2 right-[8%] h-2 w-2 rounded-full bg-teal-bright shadow-[0_0_12px_4px_rgba(18,192,186,0.5)]" />
        <div className="absolute bottom-1/4 left-[18%] h-1.5 w-1.5 rounded-full bg-navy/50" />
      </div>

      <div className="container-z grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>ISO 9001:2015 · ISO 13485 Certified Supplier</Badge>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 text-[2.75rem] font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Laboratory &amp; Diagnostic Equipment{" "}
            <span className="text-gradient">Supplier in India</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl leading-relaxed text-body md:text-lg"
          >
            Empowering healthcare with quality and innovation — supplying
            laboratory, diagnostic and medical equipment to hospitals, research
            institutions and government organizations across India.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/products" size="lg">
              Explore Products
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/contact#rfq" size="lg" variant="secondary">
              Request a Quote
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {[
              { icon: ShieldCheck, label: "Authorized OEM Network" },
              { icon: Wrench, label: "Installation & AMC" },
              { icon: FileText, label: "Tender Documentation" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <item.icon className="h-4.5 w-4.5 text-teal-bright" />
                <span className="text-sm text-mut">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual composition */}
        <motion.div
          style={{ y: visualY }}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative rounded-3xl border border-line bg-linear-to-b from-panel to-mist p-6 card-elevated backdrop-blur">
            <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-teal/60 to-transparent" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-mut">
                  Zenova Diagnostics
                </p>
                <p className="font-display mt-1 text-lg font-semibold text-ink">
                  Automated Analyzer
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal/30 bg-teal/10">
                <ShieldCheck className="h-5 w-5 text-teal-bright" />
              </div>
            </div>

            {/* Analyzer screen mock */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-navy/30 bg-navy-deep p-5">
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span>RUN 24 · Sample Batch</span>
                <span className="flex items-center gap-1.5 text-teal-bright">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-bright" />
                  LIVE
                </span>
              </div>
              <div className="mt-4 flex items-end gap-2.5">
                {[34, 52, 41, 66, 58, 78, 62, 88, 74, 96, 70, 84].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={reduce ? false : { height: 6 }}
                      animate={{ height: h * 1.6 }}
                      transition={{
                        duration: 1.2,
                        delay: 0.6 + i * 0.08,
                        ease: "easeOut",
                      }}
                      className="w-full rounded-t-sm bg-linear-to-t from-teal/40 to-teal-bright"
                    />
                  ),
                )}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { k: "Glucose", v: "92", u: "mg/dL" },
                  { k: "HbA1c", v: "5.4", u: "%" },
                  { k: "HDL", v: "48", u: "mg/dL" },
                ].map((r) => (
                  <div
                    key={r.k}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      {r.k}
                    </p>
                    <p className="font-display text-lg font-semibold text-white">
                      {r.v}
                      <span className="ml-1 text-[10px] font-normal text-slate-400">
                        {r.u}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-mut">
                <Wrench className="h-4 w-4 text-teal-bright" />
                IQ/OQ validated
              </div>
              <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal-bright">
                99.2% uptime
              </span>
            </div>
          </div>

          {/* Floating chip */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden rounded-2xl border border-line bg-panel/90 px-4 py-3 backdrop-blur md:block card-elevated"
          >
            <p className="text-[10px] uppercase tracking-wider text-mut">
              Instruments installed
            </p>
            <p className="font-display text-2xl font-bold text-ink">
              5,200<span className="text-teal-bright">+</span>
            </p>
          </motion.div>

          {/* <motion.div
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-5 bottom-16 hidden rounded-2xl border border-teal/30 bg-navy-deep px-4 py-3 backdrop-blur md:block card-elevated"
          >
            <p className="flex items-center gap-2 text-xs font-medium text-teal-bright">
              <span className="h-2 w-2 rounded-full bg-teal-bright shadow-[0_0_10px_2px_rgba(24,208,201,0.7)]" />
              Calibration due today
            </p>
            <p className="mt-1 text-[11px] text-slate-300">3 systems scheduled</p>
          </motion.div> */}
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-mut" />
      </motion.div>
    </div>
  );
}
