import { Linkedin, Twitter, Mail, Facebook, Youtube, Instagram, Phone, MapPin } from "lucide-react";
import { memo } from "react";

interface FooterProps {
  onNavigate: (section: string) => void;
  onWorkflowClick: (workflowId: string) => void;
}

const Footer = memo(({ onNavigate, onWorkflowClick }: FooterProps) => {
  return (
    <footer className="footer-gradient animated-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/kanishka-software-logo.png" 
                alt="Kanishka Software" 
                className="h-16 sm:h-18 lg:h-20 w-auto filter drop-shadow-2xl brightness-110 contrast-125"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.1) contrast(1.25)'
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-700 mb-4 sm:mb-6 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed">
              We help you build great software with cutting-edge AI automation solutions. 
              n8n Workflow Specialists transforming businesses through intelligent automation.
            </p>
            <div className="flex items-center gap-3 lg:gap-4">
              <a
                href="https://www.linkedin.com/company/kanishkasoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 lg:h-7 lg:w-7" />
              </a>
              <a
                href="https://twitter.com/ksoftwareltd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:p-4 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 transition-all duration-300 hover:scale-105"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 lg:h-7 lg:w-7" />
              </a>
              <a
                href="mailto:contact@kanishkasoftware.com"
                className="p-3 lg:p-4 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 lg:h-7 lg:w-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-2">
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              <button
                onClick={() => onNavigate('home')}
                className="block text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base font-medium"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base font-medium"
              >
                Use Cases
              </button>
              <button
                onClick={() => onNavigate('demo')}
                className="block text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base font-medium"
              >
                Demo
              </button>
            </nav>
          </div>

          {/* AI Products Column 1 */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI Products</h4>
            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={() => onWorkflowClick('calling-agent')}
                className="block text-left text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm leading-relaxed"
              >
                Calling Agent for Appointment Booking
              </button>
              <button
                onClick={() => onWorkflowClick('whatsapp-bot')}
                className="block text-left text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm leading-relaxed"
              >
                WhatsApp Appointment/Personal Bot
              </button>
              <button
                onClick={() => onWorkflowClick('interactive-ai-agent')}
                className="block text-left text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm leading-relaxed"
              >
                AI Avatar Hub
              </button>
            </div>
          </div>

          {/* AI Products Column 2 */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">More Products</h4>
            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={() => onWorkflowClick('customer-support-bot')}
                className="block text-left text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm leading-relaxed"
              >
                Customer Support Bot with Jira + Email
              </button>
              <button
                onClick={() => onWorkflowClick('social-media-bot')}
                className="block text-left text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm leading-relaxed"
              >
                Social Media Content & Engagement Bot
              </button>
              <button
                onClick={() => onWorkflowClick('ai-report-generator')}
                className="block text-left text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm leading-relaxed"
              >
                AI Report & Summary Generator
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 lg:gap-3">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:sales@ksoftpl.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm leading-relaxed break-all"
                >
                  sales@ksoftpl.com
                </a>
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-xs sm:text-sm">Sales: +91-8652340409</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 text-xs sm:text-sm">HR: +91-8657547075</span>
              </div>
              <div className="flex items-start gap-2 lg:gap-3">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <div>Skyline Status, 703-704,</div>
                  <div>Mahatma Gandhi Rd,</div>
                  <div>Pant Nagar,</div>
                  <div>Ghatkopar East, Mumbai,</div>
                  <div>Maharashtra - 400077</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © 2025 Kanishka Software Limited. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Transforming businesses through intelligent automation
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;