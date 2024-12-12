import { ArrowRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-white pt-16">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Unlocking Growth Through
            <span className="text-primary-success block mt-2">Bespoke AI Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transform your New York business with custom AI solutions that drive growth,
            improve efficiency, and keep you ahead of the competition.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;