const base =
  "inline-flex items-center justify-center rounded-ui font-medium shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-primary px-6 py-3 text-base text-white hover:bg-primary/90 sm:px-8 sm:py-3.5 sm:text-lg",
  outline:
    "border border-mutedText bg-transparent px-6 py-3 text-base text-mutedText hover:border-foreground hover:text-foreground sm:px-8 sm:py-3.5 sm:text-lg",
  outlineNeutral:
    "border border-foreground/35 bg-surface/50 px-6 py-3 text-base text-foreground shadow-none hover:border-foreground/55 hover:bg-surface sm:px-8 sm:py-3.5 sm:text-lg",
};

export function Button({ variant = "primary", type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`.trim()}
      {...props}
    />
  );
}
