import { Mail, MapPin } from "lucide-react";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Get Started Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards transforming your business with AI
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;