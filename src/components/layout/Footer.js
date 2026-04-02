import Container from "./Container";

const Footer = () => {
  return (
    <footer className="w-full border-t border-borderSubtle bg-background/65 text-foreground backdrop-blur-md supports-[backdrop-filter]:bg-background/55">
      <Container className="py-5 text-center text-xs text-foreground/80 sm:py-6 sm:text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} mozafarani</p>
      </Container>
    </footer>
  );
};

export default Footer;
