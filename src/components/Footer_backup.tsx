import { Linkedin, Twitter, Mail, Facebook, Youtube, Instagram, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
  onWorkflowClick: (workflowId: string) => void;
}

const Footer = ({ onNavigate, onWorkflowClick }: FooterProps) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/kanishka-software-logo.png" 
                alt="Kanishka Software" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              The leading cafeteria management system designed for corporate offices, educational institutions, hospitals, and multi-tenant facilities.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/kanishkasoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/kanishkasoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/kanishkasoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/kanishkasoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Asset Management System
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                QR code based Food Ordering System
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                School Management System Software
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Mobile App based Food Ordering for Cafeteria
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Self-Ordering Kiosk in Cafeteria
              </a>
            </nav>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Audit Checklist Management System
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Inventory Management System with POS
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Hospital Management System
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Attendance Management System
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Fleet Management System Payment
              </a>
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:sales@ksoftpl.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  sales@ksoftpl.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <div>Sales: +91-8652340409</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <div>HR: +91-8657547075</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <div>Skyline Status, 703-704, Mahatma Gandhi Rd,</div>
                  <div>Pant Nagar, Ghatkopar East,</div>
                  <div>Mumbai, Maharashtra - 400077</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center sm:text-left">
              © 2025 Kanishka Software Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-center">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;