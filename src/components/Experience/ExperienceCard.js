import React from "react";

const ExperienceCard = ({ role, company, duration, description, techStack }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl">
      <div className="relative bg-card p-6 md:p-8 rounded-xl shadow-xl w-[90%] md:w-[80%] lg:w-[70%]">
        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-left">
          {role} <span className="text-primary font-semibold">@ {company}</span>
        </h3>
        <p className="text-foreground/60 text-md md:text-lg mt-1 text-left font-mono">{duration}</p>
        <p className="text-foreground/80 text-lg mt-4 text-left leading-relaxed">
          {description}
        </p>
        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm font-medium"
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