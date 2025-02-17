import ProfileSlideshow from "./ProfileSlideshow";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-between min-h-screen mx-10 -my-10 text-foreground px-12">
      {/* Left Section - Personal Info */}
      <div className="max-w-5xl w-2/3">
        <p className="text-secondary text-xl font-mono">
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

        <h1 className="text-8xl font-bold mt-4">{`Mohammed Alzafarani`}</h1>
        <h2 className="text-4xl font-light text-mutedText mt-4">
          I code for the web. I craft for humans.
        </h2>
        <p className="text-2xl text-mutedText mt-6">
          I&apos;m a software developer specializing in building
          high-performance applications & scalable web solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex space-x-6">
          <a
            href="projects"
            className="px-8 py-4 bg-primary text-white text-xl font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            View Projects
          </a>
          <a
            href="contact"
            className="px-8 py-4 border border-mutedText text-xl text-mutedText font-medium rounded-lg hover:text-white hover:border-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section - Profile Picture */}
      <div className="w-1/3 flex justify-center">
          <ProfileSlideshow
          />
      </div>
    </section>
  );
};

export default Hero;
