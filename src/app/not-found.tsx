import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
      <div className="container-z text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-teal/25 bg-teal/10 text-teal-bright">
          <FlaskConical className="h-8 w-8" />
        </div>
        <p className="font-display mt-8 text-7xl font-bold text-gradient md:text-8xl">
          404
        </p>
        <h1 className="font-display mt-4 text-2xl font-semibold text-ink md:text-3xl">
          This sample doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-body">
          The page you&apos;re looking for was moved or never existed. Let&apos;s get you
          back to the laboratory.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-teal-bright to-teal px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-[0_10px_30px_-10px_rgba(15,159,154,0.5)] transition-all hover:brightness-110"
          >
            Back to Home
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
