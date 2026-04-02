import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  technologies,
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl">
      <>
        {image && (
          <div className="relative w-full sm:w-[90%] md:w-[70%] h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px] flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            <div className="w-full md:w-[80%] h-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        )}

        <div className="relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 bg-card p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%]">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-left">
            {title}
          </h3>
          <p className="text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 text-left leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mt-3 sm:mt-4 md:mt-6">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-foreground/10 text-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-3 sm:mt-4 md:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
            {!link || link === "#" ? (
              <span className="text-primary font-semibold flex items-center gap-2 bg-primary/10 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base">
                Private
              </span>
            ) : (
              <Link
                href={link}
                className="text-primary font-semibold flex items-center gap-2 bg-primary/10 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-primary/20 transition text-xs sm:text-sm md:text-base"
              >
                Live Demo <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </Link>
            )}
            {github && (
              <Link
                href={github}
                className="text-mutedText flex items-center hover:text-foreground"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Link>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectCard;
