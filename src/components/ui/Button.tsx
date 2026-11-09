import Link from "next/link";
import { ComponentProps } from "react";

export type Variant = "primary" | "secondary" | "ghost" | "light" | "outlineLight";
export type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-chalk shadow-soft hover:bg-brand-700",
  secondary: "border border-ink/15 bg-paper/60 text-ink hover:border-ink/30 hover:bg-paper",
  ghost: "text-ink hover:bg-ink/5",
  light: "bg-chalk text-ink hover:bg-brand-50",
  /** Outlined button for dark backgrounds. */
  outlineLight: "border border-chalk/30 text-chalk hover:border-chalk/60 hover:bg-chalk/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export const buttonClasses = ({
  variant = "primary",
  size = "md",
  className = "",
}: { variant?: Variant; size?: Size; className?: string } = {}) =>
  `${base} ${variants[variant]} ${sizes[size]} ${className}`;

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

export const ButtonLink = ({ variant, size, className, ...props }: ButtonLinkProps) => (
  <Link className={buttonClasses({ variant, size, className })} {...props} />
);

/** Arrow that nudges right when its parent button is hovered. */
export const Arrow = () => (
  <svg
    aria-hidden
    viewBox="0 0 16 16"
    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/link:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
  </svg>
);
