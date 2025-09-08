import { Download, Play } from "lucide-react";
import { useEffect, useRef } from "react";

const HowItWorksSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is in view - allow it to play if user wants
          // Don't auto-play, let user control it
        } else {
          // Video is out of view - pause it
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of video is visible
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);
  const steps = [
    {
      number: "1",
      title: "Choose Your Workflow",
      description: "Browse our library and pick the automation you need."
    },
    {
      number: "2", 
      title: "We Configure Everything",
      description: "We set it up with your API keys and apps. Zero code required from you."
    },
    {
      number: "3",
      title: "You're Live!",
      description: "Review the process and start saving time immediately."
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            How It Works in <span className="text-primary">35 Seconds</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-muted rounded-xl p-2 sm:p-3 md:p-4 border border-border overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  poster="/kanishka-software-logo.png"
                  preload="metadata"
                >
                  <source src="/transform-your-business-today.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-3 sm:mt-4 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Transform Your Business Today
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4">
                  Watch how our AI-powered workflows can transform your business operations in just 35 seconds.
                </p>

                <button className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-primary hover:text-primary-dark transition-colors">
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  Download Brochure (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="order-1 lg:order-2 flex items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-3 sm:gap-4 lg:gap-6 items-start group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base lg:text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;