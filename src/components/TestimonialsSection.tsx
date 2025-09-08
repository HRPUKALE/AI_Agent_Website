import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "This workflow saved my team 15 hours a week on customer onboarding! The automation handles everything from initial contact to sending welcome packages.",
      name: "Sarah Chen",
      title: "Operations Manager",
      company: "GrowthTech Solutions",
      avatar: "SC"
    },
    {
      quote: "We went from manually processing 50 orders a day to automatically handling 500+. The ROI was immediate and the setup was surprisingly simple.",
      name: "Marcus Rodriguez",
      title: "E-commerce Director", 
      company: "RetailFlow Inc",
      avatar: "MR"
    },
    {
      quote: "The CRM sync automation eliminated data entry errors completely. Our sales team can now focus on selling instead of updating spreadsheets.",
      name: "Emily Watson",
      title: "Sales Director",
      company: "CloudScale Ventures",
      avatar: "EW"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="card-hover text-center min-h-[250px] sm:min-h-[300px] flex flex-col justify-center p-4 sm:p-6">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-6 sm:mb-8 italic leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm sm:text-base">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground text-sm sm:text-base">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="text-primary font-medium text-xs sm:text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 sm:p-3 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 sm:p-3 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;