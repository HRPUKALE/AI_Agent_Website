import { useState, memo, useCallback } from "react";
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

const Index = memo(() => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleNavigate = useCallback((section: string) => {
    if (section === 'demo') {
      setIsDemoModalOpen(true);
      return;
    }
    
    const element = document.getElementById(section);
    if (element) {
      // Enhanced smooth scrolling with offset for fixed header
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleWorkflowClick = useCallback((workflowId: string) => {
    setSelectedWorkflow(workflowId);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedWorkflow(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  const handleBookDemo = useCallback(() => {
    setSelectedWorkflow(null);
    document.body.style.overflow = 'unset';
    setIsDemoModalOpen(true);
  }, []);

  const handleCloseDemoModal = useCallback(() => {
    setIsDemoModalOpen(false);
  }, []);

  const currentWorkflow = selectedWorkflow ? workflowData[selectedWorkflow as keyof typeof workflowData] : null;

  return (
    <div className="min-h-screen bg-background enhanced-scroll">
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

      <Footer onNavigate={handleNavigate} onWorkflowClick={handleWorkflowClick} />

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
});

Index.displayName = 'Index';

export default Index;
