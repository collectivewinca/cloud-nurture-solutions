import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = "text-[#ea384c] hover:text-primary transition-colors font-medium";

  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="https://raw.githubusercontent.com/myblackbeanca/minydj/refs/heads/main/cnine/c9logo.png" 
                alt="Cloud Nine Solutions Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={navLinkClass}>Services</a>
            <Link to="/crm" className={navLinkClass}>AI-Powered CRM</Link>
            <Link to="/blog" className={navLinkClass}>Blog</Link>
            <a 
              href="#contact" 
              className="bg-[#ea384c] text-white px-6 py-2 rounded-md hover:bg-[#ea384c]/90 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#ea384c]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary/95 backdrop-blur-sm">
            <a href="#services" className={navLinkClass}>Services</a>
            <Link to="/crm" className={navLinkClass}>AI-Powered CRM</Link>
            <Link to="/blog" className={navLinkClass}>Blog</Link>
            <a href="#contact" className={navLinkClass}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;