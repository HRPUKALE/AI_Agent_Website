import { Linkedin, Twitter, Mail, Facebook, Youtube, Instagram, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/kanishka-software-logo.png" 
                alt="Kanishka Software" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              We help you build great software. n8n Workflow Specialists.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/kanishkasoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ksoftwareltd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@kanishkasoftware.com"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => onNavigate('home')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Use Cases
              </button>
              <button
                onClick={() => onNavigate('demo')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Demo
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:contact@kanishkasoftware.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                contact@kanishkasoftware.com
              </a>
            </div>
          </div>
        </div>

        {/* AI Products Grid */}
        <div className="border-t border-border mt-8 pt-8">
          <h4 className="font-semibold text-foreground mb-6 text-lg">Our AI Automation Products</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Calling Agent for Appointment Booking
              </button>
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                WhatsApp Appointment/Personal Bot
              </button>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                AI Avatar Hub
              </button>
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Customer Support Bot with Jira + Email
              </button>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Social Media Content & Engagement Bot
              </button>
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                AI Report & Summary Generator
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Kanishka Software Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;