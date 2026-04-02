import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Dominarlo Publishing Corp.",
    duration: "Feb. 2024 – Jan. 2025 | Remote, Alberta",
    description:
      "Led development of a no-code Case Editor, rebuilt a legacy Python backend for real-time filtering, and migrated Meteor v2 to v3. Improved system stability to 99.9% uptime and introduced a modern testing pipeline for CI/CD.",
    techStack: ["ReactJS", "Meteor.js", "Python", "MongoDB", "Mocha"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "eWorx Technology Ltd.",
    duration: "Dec. 2023 – Feb. 2024 | Edmonton, AB",
    description:
      "Stabilized multi-marketplace sync tool using Amazon MWS and eBay APIs, achieved 90%+ test coverage, and debugged complex API/UI issues in real-time inventory syncing. Added Jest and Selenium tests to prevent regressions in inventory and webhook flows.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "WebSockets"],
  },
];

export default function ExperienceSection() {
  const scrollRef = useRef(null);

  const scrollByPercentage = (percentage) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * (percentage / 100);
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="min-h-[60vh] bg-background text-foreground p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12">
      <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-32 -mx-2 sm:-mx-4 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-left text-foreground/70 mt-1 sm:mt-2">
            A snapshot of my recent roles, impact, and the technologies I used.
          </p>
        </div>
      </div>
      
      {/* Mobile: Stacked Cards */}
      <div className="lg:hidden space-y-6 sm:space-y-8 md:space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="w-full">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>

      {/* Desktop: Scrollable Content */}
      <div className="hidden lg:block relative overflow-hidden group">
        <div
          ref={scrollRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide"
        >
          {experiences.map((exp, index) => (
            <div key={index} className="flex-shrink-0 w-full max-w-4xl">
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
