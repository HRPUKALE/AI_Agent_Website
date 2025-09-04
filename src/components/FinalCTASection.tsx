import { ArrowRight, Calendar } from "lucide-react";

interface FinalCTASectionProps {
  onNavigate: (section: string) => void;
}

const FinalCTASection = ({ onNavigate }: FinalCTASectionProps) => {
  return (
    <section id="demo" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Operations?
          </h2>
          
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Let's find the perfect workflow for your business. Book a free, 30-minute demo 
            and we'll walk you through a live example.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <button 
              onClick={() => onNavigate('demo')}
              className="btn-demo inline-flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Schedule Your Demo Now
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <p className="text-primary-foreground/80 text-sm">
              ✓ Free consultation ✓ No obligations ✓ Live demo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">30 min</div>
              <div className="text-primary-foreground/80">Free consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Live demo</div>
              <div className="text-primary-foreground/80">See it in action</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Same day</div>
              <div className="text-primary-foreground/80">Setup available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;