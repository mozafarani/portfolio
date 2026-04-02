import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Badge from "../ui/Badge";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  technologies,
}) => {
  return (
    <article className="group grid gap-5 py-7 sm:grid-cols-[260px_1fr] sm:gap-7 sm:py-8 md:grid-cols-[280px_1fr]">
      {image ? (
        <div className="relative w-full shrink-0 sm:w-[260px] md:w-[280px]">
          <div
            className="relative w-full overflow-hidden rounded-ui border border-borderSubtle bg-surface/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={image}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 640px) 100vw, 280px"
                className="object-cover transition duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid min-w-0 grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4">
        <div
          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mutedText sm:mt-2"
          aria-hidden
        />
        <div className="min-w-0">
          <h3 className="font-heading text-base font-bold text-foreground sm:text-lg md:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mutedText sm:text-base">
            {description}
          </p>

          {technologies?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {!link || link === "#" ? (
              <span className="rounded-ui border border-borderSubtle bg-surface/40 px-3 py-1.5 text-xs font-medium text-mutedText sm:text-sm">
                Private
              </span>
            ) : (
              <Link
                href={link}
                className="inline-flex items-center gap-2 rounded-ui border border-foreground/35 bg-surface/50 px-3 py-2 text-sm font-medium text-foreground transition hover:border-foreground/55 hover:bg-surface sm:px-4 sm:py-2.5"
              >
                Live demo
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            )}
            {github ? (
              <Link
                href={github}
                className="inline-flex items-center gap-2 rounded-ui border border-borderSubtle bg-surface/40 px-3 py-2 text-sm font-medium text-foreground transition hover:border-foreground/30 sm:px-4 sm:py-2.5"
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">Source</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
