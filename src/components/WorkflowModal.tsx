import { X, ArrowRight, CheckCircle } from "lucide-react";

interface WorkflowModalProps {
  workflow: {
    id: string;
    title: string;
    description: string;
    icon: string;
    problem: string;
    solution: string;
    apps: string[];
    benefits: string[];
    timeSaved: string;
  } | null;
  onClose: () => void;
  onBookDemo: () => void;
}

const WorkflowModal = ({ workflow, onClose, onBookDemo }: WorkflowModalProps) => {
  if (!workflow) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
        aria-label="Close workflow details"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
      </button>

      {/* Content */}
      <div className="h-full overflow-y-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">{workflow.icon}</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                {workflow.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                {workflow.description}
              </p>
            </div>

            {/* Tabs/Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
              {/* The Problem */}
              <div className="card-hover">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  The Problem
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {workflow.problem}
                </p>
              </div>

              {/* Our Solution */}
              <div className="card-hover">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  Our Solution
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {workflow.solution}
                </p>
              </div>
            </div>

            {/* Apps Used */}
            <div className="card-hover mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Apps Connected
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {workflow.apps.map((app, index) => (
                  <div
                    key={app}
                    className="bg-muted rounded-lg p-3 sm:p-4 text-center border border-border"
                  >
                    <span className="font-medium text-foreground text-xs sm:text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="card-hover mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Benefits & Time Saved
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {workflow.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-light rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                  {workflow.timeSaved}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Average time saved per week
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={onBookDemo}
                className="btn-demo inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                Want This Workflow? Book a Demo
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowModal;