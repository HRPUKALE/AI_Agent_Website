import { ArrowRight, Calendar } from "lucide-react";

interface FinalCTASectionProps {
  onNavigate: (section: string) => void;
}

const FinalCTASection = ({ onNavigate }: FinalCTASectionProps) => {
  return (
    <section id="demo" className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Automate Your Operations?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-foreground/90 leading-relaxed">
            Let's find the perfect workflow for your business. Book a free, 30-minute demo 
            and we'll walk you through a live example.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-6 sm:mb-8">
            <button 
              onClick={() => onNavigate('demo')}
              className="btn-demo inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              Schedule Your Demo Now
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              ✓ Free consultation ✓ No obligations ✓ Live demo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">30 min</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">Free consultation</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Live demo</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">See it in action</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Same day</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">Setup available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;