import Hero from "../components/Hero";
import ProjectsPage from "./projects";
import ContactMe from "./contact";
import Footer from "@/components/layout/Footer";
import ExperienceSection from "../components/Experience/ExperienceSection";

export default function Home() {
  return (
    <div className="ml-4">
      <Hero />
      <ExperienceSection />
      <ProjectsPage />
      <ContactMe />
      <Footer/>
    </div>
  );
}
