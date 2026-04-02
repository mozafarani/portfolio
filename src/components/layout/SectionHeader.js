export default function SectionHeader({
  eyebrow,
  title,
  description,
  aside,
  className = "",
}) {
  return (
    <div
      className={`mb-6 flex flex-col gap-3 sm:mb-7 lg:flex-row lg:items-end lg:justify-between lg:gap-4 ${className}`.trim()}
    >
      <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-widest text-mutedText">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2
            className={`font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl ${eyebrow ? "mt-2" : ""}`}
          >
            {title}
          </h2>
        ) : null}
        {description ? (
          <div
            className={`max-w-3xl text-sm text-foreground/70 sm:text-base md:text-lg lg:text-xl ${title || eyebrow ? "mt-2" : ""}`}
          >
            {description}
          </div>
        ) : null}
      </div>
      {aside ? <div className="shrink-0 lg:ml-6">{aside}</div> : null}
    </div>
  );
}
