import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-teal-bright",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal-bright shadow-[0_0_8px_2px_rgba(24,208,201,0.7)]" />
      {children}
    </span>
  );
}
