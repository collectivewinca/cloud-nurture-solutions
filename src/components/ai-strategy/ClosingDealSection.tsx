import { Calendar, Contact, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

const ClosingDealSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-secondary mb-8">Closing the Deal: From Consultation to Contract</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Business consultation"
                className="object-cover w-full h-full"
              />
            </div>
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Call 1: Consultation</h3>
            <p className="text-gray-700">Listen. Understand. Present high-level solutions (Plus AI can generate slick slide decks).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Demo presentation"
                className="object-cover w-full h-full"
              />
            </div>
            <FileText className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Call 2: Demo</h3>
            <p className="text-gray-700">Showcase a pre-built demo or a quick no-code prototype.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Contract signing"
                className="object-cover w-full h-full"
              />
            </div>
            <Contact className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Call 3+: Proposal</h3>
            <p className="text-gray-700">Clearly outline deliverables, timelines, and pricing (value-based, please!). Offer add-ons like maintenance packages and training.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-lg font-semibold">
              Ready to get started
              <span className="ml-2">→</span>
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default ClosingDealSection;