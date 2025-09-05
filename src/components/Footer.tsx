import { Linkedin, Twitter, Mail, Facebook, Youtube, Instagram, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-blue-900 relative">
      {/* Wave pattern at top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-blue-800 to-blue-900">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        {/* Upper Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/kanishka-software-logo.png" 
                alt="Kanishka Software" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white mb-6 max-w-md leading-relaxed">
              We are a team of technology and business professionals dedicated to maximizing your ROI and achieving your transformation goals through innovative AI-powered solutions.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/kanishkasoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/kanishkasoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kanishkasoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/kanishkasoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => onNavigate('home')}
                className="block text-white hover:text-blue-300 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('use-cases')}
                className="block text-white hover:text-blue-300 transition-colors text-left"
              >
                Use Cases
              </button>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="block text-white hover:text-blue-300 transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => onNavigate('testimonials')}
                className="block text-white hover:text-blue-300 transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => onNavigate('demo')}
                className="block text-white hover:text-blue-300 transition-colors text-left"
              >
                Demo
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <p className="text-white text-sm">
                  Skyline Status, 703-704, Mahatma Gandhi Rd, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra Mumbai - 400077
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <a
                  href="mailto:sales@ksoftpl.com"
                  className="text-white hover:text-blue-300 transition-colors text-sm"
                >
                  sales@ksoftpl.com
                </a>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white flex-shrink-0" />
                  <a href="tel:+918652340409" className="text-white hover:text-blue-300 transition-colors text-sm">
                    Sales: +91-8652340409
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white flex-shrink-0" />
                  <a href="tel:+918652286420" className="text-white hover:text-blue-300 transition-colors text-sm">
                    Sales: +91-8652286420
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white flex-shrink-0" />
                  <a href="tel:+919167833457" className="text-white hover:text-blue-300 transition-colors text-sm">
                    Sales: +91-9167833457
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white flex-shrink-0" />
                  <a href="tel:+918657547075" className="text-white hover:text-blue-300 transition-colors text-sm">
                    HR: +91-8657547075
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Management Systems Grid */}
        <div className="border-t border-blue-700 pt-8">
          <h4 className="font-bold text-white mb-6 text-lg">Management Systems</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <p className="text-white text-sm">Asset Management System</p>
              <p className="text-white text-sm">Helpdesk Management System</p>
              <p className="text-white text-sm">Cafeteria Management System</p>
              <p className="text-white text-sm">QR code based Food Ordering System</p>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm">School Management System Software</p>
              <p className="text-white text-sm">Multi Store eCommerce Shopping Cart Solution</p>
              <p className="text-white text-sm">Mobile App based Food Ordering for Cafeteria</p>
              <p className="text-white text-sm">Self-Ordering Kiosk in Cafeteria</p>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm">Audit Checklist Management System</p>
              <p className="text-white text-sm">Maintenance Management System</p>
              <p className="text-white text-sm">Inventory Management System with POS</p>
              <p className="text-white text-sm">Lawyer Office Management System</p>
              <p className="text-white text-sm">Android Based POS for Retailer</p>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm">Hospital Management System</p>
              <p className="text-white text-sm">Attendance Management System</p>
              <p className="text-white text-sm">Fleet Management System</p>
              <p className="text-white text-sm">Learning Management System</p>
              <p className="text-white text-sm">Equipment Maintenance System</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-white">
            © 2024 Kanishka Software Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;