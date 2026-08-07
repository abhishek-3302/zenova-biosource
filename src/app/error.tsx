"use client";

import { useEffect } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
      <div className="container-z text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-teal/25 bg-teal/10 text-teal-bright">
          <TriangleAlert className="h-8 w-8" />
        </div>
        <h1 className="font-display mt-8 text-3xl font-semibold text-ink md:text-4xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-body">
          We ran into an unexpected error while loading this page. Please try
          again — or head back to the home page while we sort it out.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={unstable_retry}
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-teal-bright to-teal px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-[0_10px_30px_-10px_rgba(15,159,154,0.5)] transition-all hover:brightness-110"
          >
            <RotateCcw className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-90" />
            Try again
          </button>
        </div>
        {error.digest && (
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-mut">
            Reference · {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
