import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Cpu, LineChart, Target } from "lucide-react";

const AIStrategy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Strategy Development | Cloud Nine Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI strategy development services. Custom-built solutions to drive innovation and growth." />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-light via-white to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                AI Strategy
                <span className="text-primary block mt-2">Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your business with a comprehensive AI strategy tailored to your unique needs and objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                <p className="text-gray-600">Develop a comprehensive roadmap for AI integration that aligns with your business goals.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Cpu className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Technology Assessment</h3>
                <p className="text-gray-600">Evaluate your current infrastructure and identify opportunities for AI implementation.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
                <p className="text-gray-600">Define and track key performance indicators to measure AI implementation success.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Implementation Support</h3>
                <p className="text-gray-600">Ongoing guidance and support throughout your AI transformation journey.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIStrategy;