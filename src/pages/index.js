import Hero from "../components/Hero";
import ProjectsPage from "./projects";
import ContactMe from "./contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="ml-4 space-y-6">
      <Hero />
      <ProjectsPage />
      <ContactMe />
      <Footer/>
    </div>
  );
}
