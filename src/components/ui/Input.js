const inputClasses =
  "w-full rounded-ui border border-borderSubtle bg-surface/40 p-2.5 text-sm text-foreground placeholder:text-mutedText/80 focus:border-foreground/25 focus:bg-surface/60 focus:outline-none focus:ring-1 focus:ring-foreground/15 sm:p-3 sm:text-base";

export default function Input({ className = "", ...props }) {
  return (
    <input className={`${inputClasses} ${className}`.trim()} {...props} />
  );
}
