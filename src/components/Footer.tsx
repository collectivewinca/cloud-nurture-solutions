import { Mail, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://raw.githubusercontent.com/myblackbeanca/minydj/refs/heads/main/cnine/c9fav.png" 
                alt="Cloud Nine Solutions Logo" 
                className="h-12 w-auto"
              />
            </div>
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
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <h3 className="text-lg font-semibold mb-4">Latest AI News</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary-light p-4 rounded-lg">
              <h4 className="font-medium mb-2">AI Confirms 50 New Planets</h4>
              <p className="text-sm text-gray-300 mb-2">AI makes groundbreaking discovery using old NASA data...</p>
              <a 
                href="https://www.cnet.com/science/ai-confirms-50-new-planets-from-old-nasa-data-in-a-groundbreaking-first/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light hover:text-primary text-sm"
              >
                Read more
              </a>
            </div>
            <div className="bg-secondary-light p-4 rounded-lg">
              <h4 className="font-medium mb-2">The Future of AI and Humanity</h4>
              <p className="text-sm text-gray-300 mb-2">How AI might reshape the future of human society...</p>
              <a 
                href="https://www.theguardian.com/business/2015/nov/07/artificial-intelligence-homo-sapiens-split-handful-gods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light hover:text-primary text-sm"
              >
                Read more
              </a>
            </div>
            <div className="bg-secondary-light p-4 rounded-lg">
              <h4 className="font-medium mb-2">AI Granny Innovation</h4>
              <p className="text-sm text-gray-300 mb-2">British telecom company develops AI companion...</p>
              <a 
                href="https://www.washingtontimes.com/news/2024/dec/10/british-telecom-company-creates-ai-granny-waste-ti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light hover:text-primary text-sm"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="text-white hover:text-primary border-white hover:border-primary"
              onClick={() => window.open('https://blog.cloudninesolutions.nyc/', '_blank')}
            >
              Read More on Blog
            </Button>
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