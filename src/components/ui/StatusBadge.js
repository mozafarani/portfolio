export default function StatusBadge({
  children = "Open to work",
  className = "",
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-borderSubtle bg-surface/80 px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm ${className}`.trim()}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      <span>{children}</span>
    </div>
  );
}
