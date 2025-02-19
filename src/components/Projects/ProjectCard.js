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
          <div className="relative w-full md:w-[70%] h-[300px] flex justify-center mb-16">
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

        <div className="relative -mt-12 bg-card p-6 md:p-8 rounded-xl shadow-xl w-[90%] md:w-[80%] lg:w-[70%]">
          <h3 className="text-3xl font-heading font-extrabold text-left">
            {title}
          </h3>
          <p className="text-foreground/80 text-lg mt-4 text-left leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-6">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex items-center gap-6">
            {link && (
              <Link
                href={link}
                className="text-primary font-semibold flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition"
              >
                Live Demo <ExternalLink className="w-5 h-5" />
              </Link>
            )}
            {github && (
              <Link
                href={github}
                className="text-mutedText flex items-center hover:text-foreground"
              >
                <Github className="w-6 h-6" />
              </Link>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectCard;
