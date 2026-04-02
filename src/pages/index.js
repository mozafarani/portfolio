import Hero from "../components/Hero";
import ProjectsPage from "./projects";
import ContactMe from "./contact";
import Footer from "@/components/layout/Footer";
import ExperienceSection from "../components/Experience/ExperienceSection";

export default function Home() {
  return (
    <div className="ml-2 sm:ml-4 lg:ml-6 xl:ml-8">
      <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16">
        <Hero />
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16">
        <ExperienceSection />
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16">
        <ProjectsPage />
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16">
        <ContactMe />
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16">
        <Footer/>
      </div>
    </div>
  );
}
