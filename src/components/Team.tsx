import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leader behind Cloud Nine Solutions
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src="https://raw.githubusercontent.com/myblackbeanca/minydj/refs/heads/main/cloud9/vivekphoto.png"
              alt="Vivek Khanna - CEO of Cloud Nine Solutions"
              className="w-48 h-48 rounded-full object-cover shadow-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-secondary mb-2">Vivek Khanna</h3>
            <p className="text-xl text-gray-600 mb-4">Chief Executive Officer</p>
            <a
              href="https://www.linkedin.com/in/khanna-vivek/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;