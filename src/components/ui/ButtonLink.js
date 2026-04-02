import Link from "next/link";

const base =
  "inline-flex items-center justify-center rounded-ui font-medium text-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary px-6 py-3 text-base text-white shadow-md hover:bg-primary/90 sm:px-8 sm:py-3.5 sm:text-lg",
  outline:
    "border border-mutedText bg-transparent px-6 py-3 text-base text-mutedText shadow-md hover:border-foreground hover:text-foreground sm:px-8 sm:py-3.5 sm:text-lg",
  outlineNeutral:
    "border border-foreground/35 bg-surface/50 px-6 py-3 text-base text-foreground hover:border-foreground/55 hover:bg-surface sm:px-8 sm:py-3.5 sm:text-lg",
  outlineNeutralMuted:
    "border border-borderSubtle bg-surface/50 px-6 py-3 text-base text-foreground hover:border-foreground/30 hover:bg-surface sm:px-8 sm:py-3.5 sm:text-lg",
};

export default function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
