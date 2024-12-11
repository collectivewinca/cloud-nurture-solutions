import { Button } from "./ui/button";

const AINews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Latest AI News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-medium mb-2">AI Confirms 50 New Planets</h4>
            <p className="text-sm text-gray-600 mb-2">AI makes groundbreaking discovery using old NASA data...</p>
            <a 
              href="https://www.cnet.com/science/ai-confirms-50-new-planets-from-old-nasa-data-in-a-groundbreaking-first/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark text-sm"
            >
              Read more
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-medium mb-2">The Future of AI and Humanity</h4>
            <p className="text-sm text-gray-600 mb-2">How AI might reshape the future of human society...</p>
            <a 
              href="https://www.theguardian.com/business/2015/nov/07/artificial-intelligence-homo-sapiens-split-handful-gods" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark text-sm"
            >
              Read more
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-medium mb-2">AI Granny Innovation</h4>
            <p className="text-sm text-gray-600 mb-2">British telecom company develops AI companion...</p>
            <a 
              href="https://www.washingtontimes.com/news/2024/dec/10/british-telecom-company-creates-ai-granny-waste-ti/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark text-sm"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open('https://blog.cloudninesolutions.nyc/', '_blank')}
          >
            Read More on Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AINews;