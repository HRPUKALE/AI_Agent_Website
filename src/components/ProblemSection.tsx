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
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Is Your Team Buried in <span className="text-primary">Busywork?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manual data entry, constant context switching, and chasing notifications 
            are silent productivity killers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={problem.title}
                className="card-interactive text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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