import { Mail, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Cloud Nine Solutions</h3>
            <p className="text-gray-300">Unlocking Growth Through Bespoke AI Solutions</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (415) 936-7377</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@cloudninesolutions.com" className="hover:text-primary transition-colors">
                  contact@cloudninesolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/crm" className="hover:text-primary transition-colors">
                  AI-Powered CRM
                </Link>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  AI Strategy Development
                </a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cloud Nine Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;