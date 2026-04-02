export default function IconLink({ href, label, children, className = "" }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`text-2xl text-mutedText transition hover:text-foreground sm:text-3xl md:text-4xl ${className}`.trim()}
    >
      {children}
    </a>
  );
}
