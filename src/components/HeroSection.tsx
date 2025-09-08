import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-subtle pt-14 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Automate Your Work,{" "}
              <span className="text-primary">Focus on Growth.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Stop wasting time on repetitive tasks. Our powerful, pre-built n8n workflows 
              connect your apps and automate complex processes in minutes, not days.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('demo')}
                className="btn-demo inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                🚀 Book a Free Demo
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <button
                onClick={() => onNavigate('how-it-works')}
                className="btn-secondary inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src={heroImage}
                alt="Workflow automation illustration showing interconnected apps"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl"></div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-primary/20 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;