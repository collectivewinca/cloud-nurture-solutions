import { ArrowRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles container limited to hero section */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Unlocking Growth Through
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary-success bg-clip-text text-transparent block mt-2">
              Bespoke AI Solutions
            </span>
          </h1>
          <h2 className="text-xl sm:text-3xl text-gray-300 mb-4">
            Revolutionize Your Business with Tailored AI Services
          </h2>
          <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your New York business with custom AI solutions that drive growth,
            improve efficiency, and keep you ahead of the competition. Serving businesses in Manhattan, Brooklyn, and beyond.
          </p>
          <h3 className="text-lg sm:text-xl text-gray-400 mb-8">
            AI Strategy Development | Predictive Analytics | Automation
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg hover:shadow-primary/50"
            aria-label="Get Started with AI Solutions"
          >
            Get Started
            <ArrowRight className="ml-2 animate-pulse" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;