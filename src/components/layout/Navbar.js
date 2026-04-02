import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 bg-background text-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      {/* Left Side (Logo) */}

      <Link
        href="/"
        className="mx-1 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold flex items-center space-x-2 hover:text-primary transition"
      >
        <span>mozafarani/portfolio</span>
      </Link>



      {/* Right Side (Social Icons) */}
      <div className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-9 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <a
          href="https://github.com/mozafarani"
          className="hover:text-primary transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/mozafarani"
          className="hover:text-primary transition"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" className="hover:text-primary transition">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
