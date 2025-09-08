import { Clock, AlertTriangle, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Wasted Hours",
      description: "Manually copying data between apps is slow and error-prone."
    },
    {
      icon: AlertTriangle,
      title: "Human Error",
      description: "One missed step can lead to failed orders and unhappy customers."
    },
    {
      icon: TrendingDown,
      title: "Scaling Struggles",
      description: "What worked for 10 customers crumbles under 100."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Is Your Team Buried in <span className="text-primary">Busywork?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Manual data entry, constant context switching, and chasing notifications 
            are silent productivity killers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={problem.title}
                className="card-interactive text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;