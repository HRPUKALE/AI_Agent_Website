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
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
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
              className="text-white hover:text-blue-300 transition-colors font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('use-cases')}
              className="text-white hover:text-blue-300 transition-colors font-semibold"
            >
              Use Cases
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-white hover:text-blue-300 transition-colors font-semibold"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-white hover:text-blue-300 transition-colors font-semibold"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick('demo')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors border-2 border-blue-400"
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
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-white hover:text-blue-300 transition-colors py-2 font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('use-cases')}
                className="text-left text-white hover:text-blue-300 transition-colors py-2 font-semibold"
              >
                Use Cases
              </button>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="text-left text-white hover:text-blue-300 transition-colors py-2 font-semibold"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="text-left text-white hover:text-blue-300 transition-colors py-2 font-semibold"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick('demo')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-left mt-4"
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