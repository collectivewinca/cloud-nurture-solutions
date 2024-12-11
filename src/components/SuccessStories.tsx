import { Badge } from "@/components/ui/badge";

const stories = [
  {
    industry: "E-commerce",
    title: "25% Increase in Conversion Rates",
    description: "Implemented AI-powered product recommendations leading to significant growth in sales and customer satisfaction.",
    metrics: ["+25% conversion", "+15% order value"],
  },
  {
    industry: "Financial Services",
    title: "40% Faster Customer Onboarding",
    description: "Developed an AI-driven document processing system that streamlined the entire onboarding workflow.",
    metrics: ["-40% onboarding time", "+90% satisfaction"],
  },
  {
    industry: "Healthcare",
    title: "30% Reduction in No-shows",
    description: "Created predictive analytics system for appointment scheduling, optimizing resource allocation.",
    metrics: ["-30% no-shows", "+25% efficiency"],
  },
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Badge className="mb-4 bg-primary hover:bg-primary-dark">
                {story.industry}
              </Badge>
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="flex flex-wrap gap-2">
                {story.metrics.map((metric, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-primary-light text-primary-dark"
                  >
                    {metric}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;