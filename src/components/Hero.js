import StatusBadge from "./ui/StatusBadge";
import StatGrid from "./ui/StatGrid";
import Badge from "./ui/Badge";
import ButtonLink from "./ui/ButtonLink";

const stats = [
  { value: "200+", caption: "Test cases authored" },
  { value: "470+", caption: "Automated tests (UI, API, unit, Jest)" },
  { value: "17+", caption: "API endpoints per sprint" },
  { value: "7+", caption: "Product modules covered (E2E)" },
];

const tools = [
  "Selenium",
  "Cypress",
  "Jest",
  "Mocha/Chai",
  "REST APIs",
  "SQL",
  "React",
  "Agile",
];

const Hero = () => {
  return (
    <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
      <div className="flex min-w-0 flex-col">
        <StatusBadge />

        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Mohammed Alzafarani
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mutedText sm:text-base md:text-lg lg:max-w-none">
          QA Automation Engineer — UI, API &amp; E2E testing across Agile teams.
          Selenium, Cypress, Jest, and AI-assisted workflows.
        </p>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <ButtonLink href="/#projects" variant="outlineNeutral">
            View work
          </ButtonLink>
          <ButtonLink href="/#contact" variant="outlineNeutralMuted">
            Contact me
          </ButtonLink>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-6 sm:gap-7 lg:pt-1">
        <StatGrid stats={stats} />
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-mutedText">
            Skills
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
