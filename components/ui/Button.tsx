"use client";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";

const variants: Record<Variant, string> = {
  primary:
    "bg-amber text-black hover:bg-amber-light active:scale-[0.97] shadow-lg shadow-amber/20",
  secondary:
    "border border-border-light text-txt bg-surface-2 hover:border-amber/40 hover:bg-surface-3",
  ghost:
    "border border-border text-txt-2 hover:border-amber/40 hover:text-txt bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-5 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-3.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", href, children, ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
