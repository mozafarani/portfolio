import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "@/components/layout/Footer";
import ExperienceSection from "../components/Experience/ExperienceSection";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import ProjectsSection from "../components/Projects/ProjectsSection";
import ContactSection from "../components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammed Alzafarani | QA Automation Engineer</title>
        <meta
          name="description"
          content="Mohammed Alzafarani — QA Automation Engineer. UI, API, and E2E testing with Selenium, Cypress, Jest, and Mocha; Agile delivery and AI-assisted QA workflows."
        />
      </Head>
      <main className="text-foreground">
        <Section
          id="top"
          className="relative overflow-hidden pt-6 pb-5 sm:pt-8 sm:pb-6 md:pt-10 md:pb-8"
        >
          <Container className="relative">
            <Hero />
          </Container>
        </Section>

        <Section
          id="experience"
          className="pt-6 pb-7 sm:pt-7 sm:pb-9 md:pb-10"
        >
          <Container>
            <ExperienceSection />
          </Container>
        </Section>

        <Section
          id="projects"
          className="pt-6 pb-7 sm:pt-7 sm:pb-9 md:pb-10"
        >
          <Container>
            <ProjectsSection />
          </Container>
        </Section>

        <Section
          id="contact"
          className="pt-6 pb-10 sm:pt-7 sm:pb-12 md:pb-14"
        >
          <Container>
            <ContactSection />
          </Container>
        </Section>

        <Footer />
      </main>
    </>
  );
}
