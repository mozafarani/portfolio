export default function Section({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 text-foreground ${className}`.trim()}
    >
      {children}
    </section>
  );
}
