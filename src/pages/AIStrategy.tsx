import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Cpu, LineChart, Target } from "lucide-react";
import ClosingDealSection from "@/components/ai-strategy/ClosingDealSection";

const AIStrategy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Custom AI Strategy Development | Cloud Nine Solutions New York</title>
        <meta name="description" content="Transform your business with our comprehensive AI strategy development services. Expert AI consulting and implementation for New York businesses." />
        <meta name="keywords" content="AI Strategy, AI Consulting, Digital Transformation, Cloud Nine Solutions, New York AI Services" />
        <meta property="og:title" content="Custom AI Strategy Development | Cloud Nine Solutions New York" />
        <meta property="og:description" content="Transform your business with our comprehensive AI strategy development services. Expert AI consulting and implementation for New York businesses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cloudninesolutions.com/ai-strategy" />
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
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with a comprehensive AI strategy tailored to your unique needs and objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="AI Technology" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-700 mb-6">
                    Here's the reality, laid bare and unfiltered: businesses crave the transformative power of AI, but most lack the in-house expertise to wield it effectively.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Enter the AI Automation Agency (AAA)—a new breed of agency crafting bespoke AI solutions for businesses drowning in data and desperate for efficiency.
                  </p>
                  <p className="text-lg text-gray-700 mb-8">
                    Think of it as the WordPress agency model, but supercharged with algorithms and automation. And guess what? You don't need to be a coding wizard to pull this off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AAA Advantage Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">The AAA Advantage: It's Not Just About AI, It's About Automation</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    Let's be clear: simply slapping some AI onto a problem isn't enough. Many AI agencies make the fatal mistake of creating solutions that add to a client's workload. Imagine an AI chatbot that answers questions based on a knowledge base that needs manual updating. Talk about inefficient!
                  </p>
                  <p className="text-lg text-gray-700">
                    The AAA model thrives on the synergy of cutting-edge Generative AI (like those fancy LLMs) and good old-fashioned programmatic automation (think Zapier, APIs, the works). It's about making things easier, not more complicated.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Programming Interface" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">Building Your AAA Empire: A Blueprint for Success</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Niche Down</h3>
                <p className="text-gray-700">Don't try to be everything to everyone. Focus on an industry you understand. Real estate? E-commerce? Law? Pick your battleground.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Assemble Your Arsenal</h3>
                <p className="text-gray-700">You have two options: a network of on-call developers (Cloud Nine is your friend) or a suite of no-code tools.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Embrace the Cold Call</h3>
                <p className="text-gray-700">Yes, it's 2025, but cold outreach still reigns supreme. Craft a compelling message that speaks to your niche's pain points.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">The Tech Behind the Magic: RAG and Output Parsing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">RAG (Retrieval Augmented Generation)</h3>
                <p className="text-gray-700">
                  Ever wonder how those tools seem to "train" GPT on your data? It's RAG. User queries hit a vector database, performing a semantic search (searching by meaning). The most relevant text snippets get appended to your GPT prompt, providing context and minimizing hallucinations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Autonomous Agents via Output Parsing</h3>
                <p className="text-gray-700">
                  Clients want AI that does things, not just says things. Output parsing makes this happen. The LLM's response triggers specific API calls, allowing your chatbot to check shipping status, generate reports, or even draft emails.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Deal Section */}
        <ClosingDealSection />

        {/* Marketing and Legal Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8">Marketing Your AAA: Beyond the Cold Call</h2>
                <p className="text-gray-700 mb-6">
                  Build a funnel for warm leads. A dedicated website, a strong social media presence, a professional virtual address, a Google Business Profile (optimized with ProfilePro), and Trustpilot reviews all contribute to a credible brand.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8">Navigating the Legal Landscape</h2>
                <p className="text-gray-700 mb-6">
                  Transparency is paramount. Clearly define hosting providers and third-party tools in your contracts. Implement data redaction best practices. Address client concerns head-on. Open communication builds trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">The Beauty of the AAA Model: Democratizing AI</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                The AAA model empowers you to deliver transformative AI solutions without needing a PhD in computer science. Leverage no-code tools, focus on client needs, and embrace automation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The future of business is intelligent, and you can be the architect. Plan. Plant. Prepare.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIStrategy;