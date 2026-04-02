import ExperienceTimelineItem from "./ExperienceTimelineItem";
import SectionHeader from "../layout/SectionHeader";

const experiences = [
  {
    role: "Software Developer in Test (SDET)",
    company: "Future Career Canada",
    duration: "Jan 2025 – Present · Canada",
    description:
      "Own E2E strategy for a 7+ module product: Selenium POM, Cypress, and 50+ UI checks; per-sprint REST coverage on 17+ endpoints with SQL-backed assertions.",
  },
  {
    role: "QA Automation Engineer",
    company: "Dominarlo Publishing Canada",
    duration: "Feb 2024 – Jan 2025 · Canada",
    description:
      "Legacy migration quality: partnered in sprint planning, grew 150+ Mocha/Chai backend tests and 40+ React unit suites to catch regressions early.",
  },
  {
    role: "Software Test Developer",
    company: "eWorx Technology",
    duration: "Dec 2023 – Feb 2024 · Edmonton, AB",
    description:
      "Validated Amazon/eBay e‑commerce sync end to end; 230+ Jest tests across shared logic and Selenium on critical retail paths.",
  },
];

export default function ExperienceSection() {
  return (
    <>
      <SectionHeader
        eyebrow="Experience"
        title="Work history"
        description="UI, API, and E2E automation in Agile teams, from strategy to release-ready coverage."
      />

      <div className="mt-1 divide-y divide-borderSubtle">
        {experiences.map((exp) => (
          <ExperienceTimelineItem
            key={`${exp.company}-${exp.role}`}
            {...exp}
          />
        ))}
      </div>
    </>
  );
}
