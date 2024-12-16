import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = "text-[#ea384c] hover:text-primary transition-colors font-medium block w-full px-4 py-2";

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
            <Link to="/ai-strategy" className={navLinkClass}>AI Strategy</Link>
            <Link to="/crm" className={navLinkClass}>AI-Powered CRM</Link>
            <Link to="/blog" className={navLinkClass}>Blog</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#ea384c] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary/95 backdrop-blur-sm">
            <Link 
              to="/ai-strategy" 
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              AI Strategy
            </Link>
            <Link 
              to="/crm" 
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              AI-Powered CRM
            </Link>
            <Link 
              to="/blog" 
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;