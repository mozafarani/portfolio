export default function ExperienceTimelineItem({
  role,
  company,
  duration,
  description,
}) {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 py-7 sm:gap-x-4 sm:py-8">
      <div
        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mutedText"
        aria-hidden
      />
      <div className="min-w-0">
        <h3 className="font-heading text-base font-bold text-foreground sm:text-lg md:text-xl">
          {company}
        </h3>
        <p className="mt-1 text-sm font-medium text-foreground/85 sm:text-base">
          {role}
        </p>
        <p className="mt-1 text-sm text-mutedText sm:text-base">{duration}</p>
        <p className="mt-2 text-sm leading-relaxed text-mutedText sm:text-base md:text-[0.95rem]">
          {description}
        </p>
      </div>
    </article>
  );
}
