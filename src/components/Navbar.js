import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center px-12 py-6 bg-background text-foreground mb-10">
      {/* Left Side (Logo) */}

      <Link
        href="/"
        className="mx-10 text-2xl font-bold flex items-center space-x-2 hover:text-primary transition"
      >
        <span>mozafarani/portfolio</span>
      </Link>



      {/* Right Side (Social Icons) */}
      <div className="flex space-x-9 text-3xl">
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
