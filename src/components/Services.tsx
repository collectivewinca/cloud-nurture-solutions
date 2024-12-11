import { Brain, Cpu, LineChart, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy Development",
    description: "Build a roadmap to seamlessly integrate AI into your operations.",
  },
  {
    icon: Cpu,
    title: "Machine Learning Models",
    description: "Leverage smarter systems for adaptive learning and informed decision-making.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Uncover actionable insights for proactive business strategies.",
  },
  {
    icon: Zap,
    title: "Automation & Optimization",
    description: "Streamline workflows to maximize productivity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Revolutionize your business with our tailored AI services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;