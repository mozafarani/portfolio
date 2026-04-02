import React from "react";

const ExperienceCard = ({ role, company, duration, description, techStack }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl">
      <div className="relative bg-card p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%]">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-extrabold text-left">
          {role} <span className="text-primary font-semibold">@ {company}</span>
        </h3>
        <p className="text-foreground/60 text-xs sm:text-sm md:text-base lg:text-lg mt-1 text-left font-mono">{duration}</p>
        <p className="text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 text-left leading-relaxed">
          {description}
        </p>
        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mt-3 sm:mt-4 md:mt-6">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-foreground/10 text-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard; 