import { forwardRef } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-to-r from-teal-bright to-teal text-navy-deep shadow-[0_10px_30px_-10px_rgba(15,159,154,0.5)] hover:shadow-[0_14px_40px_-10px_rgba(15,159,154,0.65)] hover:brightness-110",
        secondary:
          "border border-line bg-panel/60 text-ink backdrop-blur hover:border-teal/50 hover:bg-panel",
        ghost:
          "text-body hover:text-ink hover:bg-base2/70",
        outline:
          "border border-teal/40 text-teal-bright hover:bg-teal/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      const external = href.startsWith("http");
      const anchorRef = ref as React.Ref<HTMLAnchorElement>;
      const cls = cn(buttonVariants({ variant, size, className }));
      if (external) {
        return (
          <a href={href} target="_blank" rel="noreferrer" ref={anchorRef} className={cls}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} ref={anchorRef} className={cls}>
          {children}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
