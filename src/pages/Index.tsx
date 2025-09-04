import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ProblemSection from "@/components/ProblemSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import DemoBookingModal from "@/components/DemoBookingModal";
import WorkflowModal from "@/components/WorkflowModal";
import { workflowData } from "@/data/workflowData";

const Index = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleNavigate = (section: string) => {
    if (section === 'demo') {
      setIsDemoModalOpen(true);
      return;
    }
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWorkflowClick = (workflowId: string) => {
    setSelectedWorkflow(workflowId);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedWorkflow(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const handleBookDemo = () => {
    setSelectedWorkflow(null);
    document.body.style.overflow = 'unset';
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const currentWorkflow = selectedWorkflow ? workflowData[selectedWorkflow as keyof typeof workflowData] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />
      
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <SocialProof />
        <ProblemSection />
        <UseCasesSection onWorkflowClick={handleWorkflowClick} />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCTASection onNavigate={handleNavigate} />
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />

      {/* Workflow Modal */}
      <WorkflowModal
        workflow={currentWorkflow}
        onClose={handleCloseModal}
        onBookDemo={handleBookDemo}
      />
    </div>
  );
};

export default Index;
