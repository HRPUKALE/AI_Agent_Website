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
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How It Works in <span className="text-primary">35 Seconds</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-muted rounded-2xl p-4 md:p-6 border border-border overflow-hidden">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
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
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Transform Your Business Today
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Watch how our AI-powered workflows can transform your business operations in just 35 seconds.
                </p>

                <button className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
                  <Download className="h-5 w-5" />
                  Download Brochure (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-6 items-start group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
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