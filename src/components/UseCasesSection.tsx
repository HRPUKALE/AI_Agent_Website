import { Phone, MessageCircle, Bot, Headphones, Share2, FileText } from "lucide-react";

interface UseCasesSectionProps {
  onWorkflowClick: (workflowId: string) => void;
}

const UseCasesSection = ({ onWorkflowClick }: UseCasesSectionProps) => {
  const workflows = [
    {
      id: "calling-agent",
      icon: Phone,
      title: "Calling Agent for Appointment Booking",
      description: "AI-powered calling agent that answers calls, books appointments automatically, and sends confirmations via SMS/WhatsApp."
    },
    {
      id: "whatsapp-bot",
      icon: MessageCircle,
      title: "WhatsApp Appointment/Personal Bot",
      description: "WhatsApp bot that handles appointment booking, personal assistant tasks, FAQs, and reminders with calendar integration."
    },
    {
      id: "interactive-ai-agent",
      icon: Bot,
      title: "AI Avatar Hub",
      description: "Bring human-like conversations to your business with AI-powered avatars that combine speech, facial expressions, and real-time intelligence."
    },
    {
      id: "customer-support-bot",
      icon: Headphones,
      title: "Customer Support Bot with Jira + Email",
      description: "AI-powered support bot that auto-replies to emails, creates tickets in Jira, and assigns issues to developers automatically."
    },
    {
      id: "social-media-bot",
      icon: Share2,
      title: "Social Media Content & Engagement Bot",
      description: "AI-powered bot that generates posts, schedules them across platforms, auto-replies to comments, and tracks performance."
    },
    {
      id: "ai-report-generator",
      icon: FileText,
      title: "AI Report & Summary Generator",
      description: "Upload documents and meeting transcripts. AI generates concise summaries, highlights key decisions, and extracts action items."
    }
  ];

  return (
    <section id="use-cases" className="section-padding gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pre-Built Workflows, <span className="text-primary">Proven Results.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a solution and see the magic. Click on a use case to explore it in detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => {
            const IconComponent = workflow.icon;
            return (
              <div
                key={workflow.id}
                className="card-interactive group"
                onClick={() => onWorkflowClick(workflow.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {workflow.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {workflow.description}
                </p>

                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;