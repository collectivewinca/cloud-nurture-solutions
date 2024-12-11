import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://raw.githubusercontent.com/myblackbeanca/minydj/refs/heads/main/cnine/c9logo.png" 
              alt="Cloud Nine Solutions Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
            <a href="#success-stories" className="text-gray-700 hover:text-primary">Success Stories</a>
            <a href="#contact" className="bg-primary-accent text-white px-4 py-2 rounded-md hover:bg-primary-accent/90 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</a>
            <a href="#success-stories" className="block px-3 py-2 text-gray-700 hover:text-primary">Success Stories</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;