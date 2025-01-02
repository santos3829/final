import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary animate-fade-in">
          REA DIGITAL
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/Services"
            className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="/Contacts"
            className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md py-4 md:hidden">
            <nav className="flex flex-col items-center space-y-4">
              <a
                href="/"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/Services"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/Contacts"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
