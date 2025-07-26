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
    <div className="min-h-[60vh] bg-background text-foreground p-8 mt-24">
      <div className="flex justify-between items-center mb-20 px-32 -mx-20">
        <div>
          <h2 className="text-5xl font-bold text-left">
            Work Experience
          </h2>
          <p className="text-xl text-left text-foreground/70 mt-2">
            A snapshot of my recent roles, impact, and the technologies I used.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden group">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
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
