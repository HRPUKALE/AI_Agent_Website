import { X, ArrowRight, CheckCircle, Star, Clock, Users } from "lucide-react";

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
      <div className="h-full overflow-y-auto relative">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-purple-100 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-green-100 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 animate-bounce">{workflow.icon}</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {workflow.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {workflow.description}
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Tabs/Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
              {/* The Problem */}
              <div className="card-hover bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <span className="text-red-600 text-lg">⚠️</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-800 group-hover:text-red-900 transition-colors duration-300">
                    The Problem
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-red-700 leading-relaxed group-hover:text-red-800 transition-colors duration-300">
                  {workflow.problem}
                </p>
              </div>

              {/* Our Solution */}
              <div className="card-hover bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <span className="text-green-600 text-lg">✅</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-800 group-hover:text-green-900 transition-colors duration-300">
                    Our Solution
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-green-700 leading-relaxed group-hover:text-green-800 transition-colors duration-300">
                  {workflow.solution}
                </p>
              </div>
            </div>

            {/* Apps Used */}
            <div className="card-hover mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🔗</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                  Apps Connected
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {workflow.apps.map((app, index) => (
                  <div
                    key={app}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 text-center border border-blue-200 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors duration-300">
                      <span className="text-blue-600 text-sm">📱</span>
                    </div>
                    <span className="font-medium text-blue-800 text-xs sm:text-sm group-hover:text-blue-900 transition-colors duration-300">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="card-hover mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">⚡</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                  Benefits & Time Saved
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {workflow.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-300 group">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <span className="text-xs sm:text-sm text-green-800 group-hover:text-green-900 transition-colors duration-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 sm:p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {workflow.timeSaved}
                </div>
                <div className="text-sm sm:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Average time saved per week
                </div>
                <div className="mt-3 text-xs sm:text-sm opacity-75">
                  ⏰ Time is money - save both with automation
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={onBookDemo}
                className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 text-base sm:text-lg group"
              >
                <span>Want This Workflow? Book a Demo</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <div className="mt-4 text-sm text-muted-foreground">
                🚀 Get started in minutes • No setup required • Free consultation
              </div>
              
              {/* Interactive Stats */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center border border-blue-200 hover:shadow-md transition-all duration-300 group">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-bold text-blue-800">500+</div>
                  <div className="text-xs text-blue-600">Happy Clients</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center border border-green-200 hover:shadow-md transition-all duration-300 group">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-bold text-green-800">24/7</div>
                  <div className="text-xs text-green-600">Always Available</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center border border-purple-200 hover:shadow-md transition-all duration-300 group">
                  <Star className="h-6 w-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-bold text-purple-800">4.9/5</div>
                  <div className="text-xs text-purple-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowModal;