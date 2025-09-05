import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="/kanishka-software-logo.png" 
              alt="Kanishka Software" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('use-cases')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Use Cases
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick('demo')}
              className="btn-accent"
            >
              Book Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('use-cases')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Use Cases
              </button>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick('demo')}
                className="btn-accent text-left mt-4"
              >
                Book Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;