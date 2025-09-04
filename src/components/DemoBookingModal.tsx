import { useState } from "react";
import { X, Calendar, Clock, CheckCircle, User, Mail, Building, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoBookingModal = ({ isOpen, onClose }: DemoBookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    useCase: "",
    preferredTime: "",
    message: ""
  });
  const { toast } = useToast();

  const useCases = [
    "E-Commerce Automation",
    "CRM Integration", 
    "Lead Generation",
    "Data Processing",
    "Slack Notifications",
    "Custom Workflow"
  ];

  const timeSlots = [
    "Morning (9 AM - 12 PM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (4 PM - 7 PM)",
    "Flexible"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate booking submission
    toast({
      title: "Demo Booked Successfully! 🎉",
      description: "We'll send you a calendar invite within 15 minutes.",
    });
    
    // Reset form and close modal
    setFormData({
      name: "", email: "", company: "", phone: "",
      useCase: "", preferredTime: "", message: ""
    });
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
          {/* Header */}
            <div className="gradient-hero text-primary-foreground p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Book Your Free Demo</h2>
              <p className="text-primary-foreground/90">
                30-minute personalized workflow demonstration
              </p>
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i <= step ? "bg-accent" : "bg-primary-dark"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Tell us about yourself
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="interactive-form-field"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="interactive-form-field"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Building className="h-4 w-4 inline mr-2" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="interactive-form-field"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="interactive-form-field"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What interests you most?
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Primary Use Case *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {useCases.map((useCase) => (
                      <button
                        key={useCase}
                        onClick={() => handleInputChange("useCase", useCase)}
                        className={`card-interactive ${
                          formData.useCase === useCase
                            ? "border-primary bg-primary-light text-primary pulse-glow"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        <CheckCircle className={`h-5 w-5 mb-2 ${
                          formData.useCase === useCase ? "text-primary" : "text-muted-foreground"
                        }`} />
                        <div className="font-medium">{useCase}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleInputChange("preferredTime", slot)}
                        className={`card-interactive ${
                          formData.preferredTime === slot
                            ? "border-primary bg-primary-light text-primary pulse-glow"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Almost done! Any specific requirements?
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="interactive-form-field resize-none"
                    placeholder="Tell us about your current workflow challenges or specific requirements..."
                  />
                </div>

                {/* Summary */}
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Demo Summary:</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Contact:</strong> {formData.name} ({formData.email})</div>
                    <div><strong>Company:</strong> {formData.company}</div>
                    <div><strong>Focus:</strong> {formData.useCase}</div>
                    <div><strong>Timing:</strong> {formData.preferredTime}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  step === 1
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-background border border-border hover:bg-muted"
                }`}
              >
                Back
              </button>

              {step < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && (!formData.name || !formData.email || !formData.company)) ||
                    (step === 2 && (!formData.useCase || !formData.preferredTime))
                  }
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="btn-demo"
                >
                  Book Demo Now 🚀
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBookingModal;