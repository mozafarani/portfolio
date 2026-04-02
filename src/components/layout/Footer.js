const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground py-3 sm:py-4 md:py-5 lg:py-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 border-t border-gray-700 text-center text-xs sm:text-sm">
      <p className="text-xs sm:text-sm">
        Copyright &copy; {new Date().getFullYear()} mozafarani
      </p>
    </footer>
  );
};

export default Footer;
