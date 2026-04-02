import Link from "next/link";
import { useRouter } from "next/router";
import { navigateHomeAndScroll } from "@/utils/sectionScroll";
import Container from "./Container";

const navLinkClass =
  "text-sm text-mutedText transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const Navbar = () => {
  const router = useRouter();

  const sectionClick =
    (sectionId) =>
    (e) => {
      e.preventDefault();
      navigateHomeAndScroll(router, sectionId);
    };

  return (
    <nav className="sticky top-0 z-50 border-b border-borderSubtle/90 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <Container className="flex items-center justify-between gap-6 py-3.5 sm:py-4">
        <Link
          href="/"
          className="shrink-0 font-mono text-xs text-foreground transition hover:text-foreground/85 sm:text-sm"
        >
          mozafarani/portfolio
        </Link>
        <ul className="flex items-center gap-5 sm:gap-8" role="list">
          <li>
            <Link
              href="/"
              onClick={sectionClick("experience")}
              className={navLinkClass}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={sectionClick("projects")}
              className={navLinkClass}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={sectionClick("contact")}
              className={navLinkClass}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
