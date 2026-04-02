export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-ui border border-borderSubtle bg-card p-4 shadow-card sm:p-6 md:p-8 lg:p-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
