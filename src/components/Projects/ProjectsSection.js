import ProjectCard from "./ProjectCard";
import SectionHeader from "../layout/SectionHeader";

const projects = [
  {
    title: "Student Resume Generator",
    description:
      "An open-source project that streamlines resume creation for students, featuring an efficient JSON parsing algorithm that reduces data entry time by 50%.",
    image: "/images/studentresume.png",
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
    image: "/images/Syllamate.png",
    link: "#",
    github: "https://github.com/prestonling/due-date-finder",
    technologies: ["ReactJS", "Flask", "Python"],
  },
  {
    title: "Skryfall (Card Game) API",
    description:
      "Integrated Scryfall's API to enable seamless Magic: The Gathering card search. Optimized caching to reduce API calls by 40%, improving performance.",
    image: "/images/skryfallAPI.png",
    link: "#",
    github: "https://github.com/mozafarani",
    technologies: ["Typescript", "ReactJS", "NodeJS", "Axois", "Jest"],
  },
  {
    title: "Momentum",
    description:
      "A habit-tracking app that lets users track, share, and visualize progress with a color-coded calendar and interactive stats. Built with a focus on user motivation, social accountability, and intuitive design.",
    image: "/images/momentum.png",
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

export default function ProjectsSection() {
  return (
    <>
      <SectionHeader
        eyebrow="Selected work"
        title="Projects"
        description="Side projects and academic work—web, APIs, and test-driven quality."
      />

      <div className="mt-1 divide-y divide-borderSubtle">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
