const variants = {
  default:
    "rounded-full bg-foreground/10 px-2 py-1 text-xs font-medium text-foreground sm:px-3 sm:text-sm",
  outline:
    "rounded-full border border-borderSubtle bg-surface/60 px-2.5 py-1 text-xs font-medium text-foreground sm:px-3 sm:text-sm",
};

export default function Badge({ children, variant = "default", className = "" }) {
  const base = variants[variant] ?? variants.default;
  return (
    <span className={`${base} ${className}`.trim()}>{children}</span>
  );
}
