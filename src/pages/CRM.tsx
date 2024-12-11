import { Button } from "@/components/ui/button";
import { Database, User, BarChart, Bot, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const CRM = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI-Powered CRM Solutions | Cloud Nine Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive, AI-powered CRM solution. Custom-built for New York businesses to drive growth and improve efficiency." />
        <meta name="keywords" content="CRM, AI CRM, Business Solutions, Cloud Nine Solutions, New York CRM" />
        <meta property="og:title" content="AI-Powered CRM Solutions | Cloud Nine Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive, AI-powered CRM solution. Custom-built for New York businesses to drive growth and improve efficiency." />
        <meta property="og:image" content="https://raw.githubusercontent.com/myblackbeanca/minydj/refs/heads/main/cnine/c9logo.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cloudninesolutions.com/crm" />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-light via-white to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src="https://raw.githubusercontent.com/myblackbeanca/minydj/refs/heads/main/cnine/c9logo.png" 
                  alt="Cloud Nine Solutions Logo" 
                  className="h-32 w-auto" // Increased from h-24 to h-32
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                AI-Powered CRM for the
                <span className="text-primary block mt-2">Future Ready Business</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your business with our comprehensive, managed CRM solution that combines 
                cutting-edge AI technology with intuitive design.
              </p>
              <Button 
                size="lg" 
                className="bg-primary-accent hover:bg-primary-accent/90 text-white animate-fade-in"
              >
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
                icon={<Database className="h-8 w-8 text-primary" />}
                title="CRM Core System"
                description="Centralized customer management with a scalable and secure platform designed for growth."
              />
              <FeatureCard
                icon={<Bot className="h-8 w-8 text-primary" />}
                title="AI-Enabled Modules"
                description="Leverage predictive analytics and automated task management for enhanced efficiency."
              />
              <FeatureCard
                icon={<BarChart className="h-8 w-8 text-primary" />}
                title="Analytics & Monitoring"
                description="Gain real-time insights and identify advanced trends in your customer data."
              />
              <FeatureCard
                icon={<MessageSquare className="h-8 w-8 text-primary" />}
                title="Multi-Channel Communication"
                description="Seamlessly interact with customers across all platforms with integrated messaging."
              />
              <FeatureCard
                icon={<User className="h-8 w-8 text-primary" />}
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
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary-accent hover:bg-primary-accent/90"
            >
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
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white group hover:border-primary-light">
      <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CRM;