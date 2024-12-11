import { Button } from "@/components/ui/button";
import { Database, User, BarChart, Bot, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CRM = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                AI-Powered CRM for the Future Ready Business
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your customer experience with our comprehensive, managed CRM solution that combines cutting-edge AI technology with intuitive design.
              </p>
              <Button size="lg" className="animate-fade-in">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features and Functionalities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Database className="h-8 w-8" />}
                title="CRM Core System"
                description="Centralized customer management with a scalable and secure platform designed for growth."
              />
              <FeatureCard
                icon={<Bot className="h-8 w-8" />}
                title="AI-Enabled Modules"
                description="Leverage predictive analytics and automated task management for enhanced efficiency."
              />
              <FeatureCard
                icon={<BarChart className="h-8 w-8" />}
                title="Analytics & Monitoring"
                description="Gain real-time insights and identify advanced trends in your customer data."
              />
              <FeatureCard
                icon={<MessageSquare className="h-8 w-8" />}
                title="Multi-Channel Communication"
                description="Seamlessly interact with customers across all platforms with integrated messaging."
              />
              <FeatureCard
                icon={<User className="h-8 w-8" />}
                title="Customer Segmentation"
                description="Advanced AI-powered segmentation to identify and target key customer groups."
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our AI-powered CRM solution can help you drive growth,
              improve efficiency, and deliver unparalleled customer experiences.
            </p>
            <Button variant="default" size="lg">
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CRM;