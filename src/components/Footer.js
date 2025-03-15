const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground py-4 mt-12 border-t border-gray-700 text-center text-sm">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} mozafarani
      </p>
    </footer>
  );
};

export default Footer;
