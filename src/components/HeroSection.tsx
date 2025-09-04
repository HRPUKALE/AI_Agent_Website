import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-subtle pt-16">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automate Your Work,{" "}
              <span className="text-primary">Focus on Growth.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Stop wasting time on repetitive tasks. Our powerful, pre-built n8n workflows 
              connect your apps and automate complex processes in minutes, not days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('demo')}
                className="btn-demo inline-flex items-center gap-2"
              >
                🚀 Book a Free Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => onNavigate('how-it-works')}
                className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Play className="h-5 w-5" />
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Workflow automation illustration showing interconnected apps"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl"></div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;