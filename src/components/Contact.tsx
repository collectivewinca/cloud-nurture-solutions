import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Get Started Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards transforming your business with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg animate-fade-in-up">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 text-center">(123) 456-7890</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 text-center">contact@cloudninesolutions.com</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 text-center">New York, NY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;