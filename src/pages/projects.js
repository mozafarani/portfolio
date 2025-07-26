import { useState, useRef } from "react";

import ProjectCard from "../components/Projects/ProjectCard";
import studentResume from "../../public/images/studentresume.png";
import syllamate from "../../public/images/Syllamate.png";
import skryfall from "../../public/images/skryfallAPI.png";
import momentum from "../../public/images/momentum.png";

const projects = [
  {
    title: "Student Resume Generator",
    description:
      "An open-source project that streamlines resume creation for students, featuring an efficient JSON parsing algorithm that reduces data entry time by 50%.",
    image: studentResume,
    link: "https://www.youtube.com/watch?v=eZK-8_XqR90",
    github: "https://github.com/open-uofa/studentresume",
    technologies: [
      "ReactJS",
      "FastAPI",
      "MaterialUI",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    title: "Syllabuddy (1st Place - Hackathon)",
    description:
      "A tool that converts syllabus due dates into a calendar file, increasing efficiency by 17%. Won 1st place in the University of Alberta’s Back to School Hackathon.",
    image: syllamate,
    link: "#",
    github: "https://github.com/prestonling/due-date-finder",
    technologies: ["ReactJS", "Flask", "Python"],
  },
  {
    title: "Skryfall (Card Game) API",
    description:
      "Integrated Scryfall's API to enable seamless Magic: The Gathering card search. Optimized caching to reduce API calls by 40%, improving performance.",
    image: skryfall,
    link: "#",
    github: "https://github.com/mozafarani",
    technologies: ["Typescript", "ReactJS", "NodeJS", "Axois", "Jest"],
  },

  {
    title: "Momentum",
    description:
      "A habit-tracking app that lets users track, share, and visualize progress with a color-coded calendar and interactive stats. Built with a focus on user motivation, social accountability, and intuitive design.",
    image: momentum,
    link: "https://github.com/CMPUT301F21T37/Momentum/wiki",
    github: "https://github.com/CMPUT301F21T37/Momentum",
    technologies: [
      "Java",
      "JUnit",
      "Android Studio",
      "Figma",
      "Firebase",
      "Git",
    ],
  },
];

export default function ProjectsPage() {
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const scrollRef = useRef(null);

  const scrollByPercentage = (percentage) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * (percentage / 100);
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground p-8 mt-24 -mb-60">
      <div className="flex justify-between items-center mb-20 px-32 -mx-20">
        {/* Left: Title & Description */}
        <div>
          <h2 className="text-5xl font-bold text-left">Featured Projects</h2>
          <p className="text-xl text-left text-foreground/70 mt-2">
            A collection of my best projects showcasing backend, frontend, and
            AI development.
          </p>
        </div>

        {/* Right: Auto Scroll Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-foreground text-lg">Auto Scroll</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isAutoScroll}
              onChange={() => setIsAutoScroll(!isAutoScroll)}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-400 rounded-full peer-checked:bg-primary transition duration-300 relative">
              <div
                className={`absolute top-0.5 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isAutoScroll ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>

      <div className="relative overflow-hidden group">
        {/* Left Arrow */}
        <button
          onClick={() => scrollByPercentage(-50)}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md 
             hover:bg-primary transition duration-300 z-10 
             ${isAutoScroll ? "hidden" : "flex"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollByPercentage(50)}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md 
             hover:bg-primary transition duration-300 z-10 
             ${isAutoScroll ? "hidden" : "flex"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className={`flex space-x-6 ${
            isAutoScroll ? "animate-scroll" : "overflow-x-auto scrollbar-hide"
          }`}
        >
          {(isAutoScroll ? [...projects, ...projects] : projects).map(
            (project, index) => (
              <div key={index} className="flex-shrink-0 w-full max-w-4xl">
                <ProjectCard {...project} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
