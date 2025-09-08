import { useState, memo } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = memo(({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo with modern styling */}
          <div 
            className="flex items-center cursor-pointer group relative"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative p-1 sm:p-1.5 md:p-2 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
              <div 
                className="absolute inset-0 rounded-xl animate-pulse"
                style={{
                  background: 'linear-gradient(-45deg, #3b82f6, #8b5cf6, #f97316, #3b82f6)',
                  backgroundSize: '400% 400%',
                  animation: 'gradient-shift 3s ease infinite'
                }}
              ></div>
               <img 
                 src="/kanishka-software-logo.png" 
                 alt="Kanishka Software" 
                 className="relative h-7 sm:h-8 md:h-10 w-auto z-10 transition-all duration-300 group-hover:scale-110"
                 style={{
                   filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2)) brightness(1.3) contrast(1.2) saturate(1.1)',
                   imageRendering: 'crisp-edges'
                 }}
                 loading="eager"
                 decoding="async"
                 fetchPriority="high"
               />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className="px-2 xl:px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300 font-medium text-sm xl:text-base"
              style={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('use-cases')}
              className="px-2 xl:px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300 font-medium text-sm xl:text-base"
              style={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              Use Cases
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="px-2 xl:px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300 font-medium text-sm xl:text-base"
              style={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="px-2 xl:px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300 font-medium text-sm xl:text-base"
              style={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick('demo')}
              className="px-4 xl:px-8 py-2 xl:py-3 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-sm xl:text-base"
              style={{
                background: 'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)',
                boxShadow: '0 8px 25px rgba(255, 81, 47, 0.4), 0 4px 12px rgba(221, 36, 118, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 81, 47, 0.6), 0 6px 16px rgba(221, 36, 118, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 81, 47, 0.4), 0 4px 12px rgba(221, 36, 118, 0.3)';
              }}
            >
              Book Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-white/20 bg-white/5 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-white hover:text-yellow-300 px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('use-cases')}
                className="text-left text-white hover:text-yellow-300 px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
              >
                Use Cases
              </button>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="text-left text-white hover:text-yellow-300 px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="text-left text-white hover:text-yellow-300 px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick('demo')}
                className="px-6 sm:px-8 py-2 sm:py-3 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-left mt-2 sm:mt-4 text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)',
                  boxShadow: '0 8px 25px rgba(255, 81, 47, 0.4), 0 4px 12px rgba(221, 36, 118, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 81, 47, 0.6), 0 6px 16px rgba(221, 36, 118, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 81, 47, 0.4), 0 4px 12px rgba(221, 36, 118, 0.3)';
                }}
              >
                Book Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;