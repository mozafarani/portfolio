export default function StatGrid({ label = "By the numbers", stats, className = "" }) {
  return (
    <div className={className.trim()}>
      {label ? (
        <p className="text-xs font-medium uppercase tracking-widest text-mutedText">
          {label}
        </p>
      ) : null}
      <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-4 sm:gap-x-6 sm:gap-y-5">
        {stats.map((item, index) => (
          <li key={index}>
            <p className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-mutedText sm:text-base">{item.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
