import ProfileSlideshow from "./Profile/ProfileSlideshow";


const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[80vh] lg:min-h-screen mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-12 text-foreground px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      {/* Profile Picture - Show at top on mobile */}
      <div className="w-full lg:w-1/3 flex justify-center mb-4 sm:mb-6 lg:mb-0 lg:order-2">
          <ProfileSlideshow />
      </div>

      {/* Left Section - Personal Info */}
      <div className="max-w-5xl w-full lg:w-2/3 lg:order-1">
        <p className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl font-mono">
          {"portfolio: {"}
          <br />
          &nbsp;&nbsp;&quot;creator&quot;: &quot;Mohammed Alzafarani&quot;,
          <br />
          &nbsp;&nbsp;&quot;role&quot;: &quot;Full-Stack Web Developer&quot;,
          <br />
          &nbsp;&nbsp;&quot;stack&quot;: [&quot;Next.js&quot;,
          &quot;TailwindCSS&quot;]
          <br />
          {"}"}
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mt-3 sm:mt-4">{`Mohammed Alzafarani`}</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-mutedText mt-3 sm:mt-4">
          I code for the web. I craft for humans.
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-mutedText mt-4 sm:mt-6">
          I&apos;m a software developer specializing in building
          high-performance applications & scalable web solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
          <a
            href="projects"
            className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-primary text-white text-base sm:text-lg md:text-xl font-medium rounded-lg shadow-md hover:bg-blue-600 transition text-center"
          >
            View Projects
          </a>
          <a
            href="contact"
            className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-mutedText text-base sm:text-lg md:text-xl text-mutedText font-medium rounded-lg hover:text-white hover:border-white transition text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
