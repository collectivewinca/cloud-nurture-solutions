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
        </section>

        {/* AAA Advantage Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">The AAA Advantage: It's Not Just About AI, It's About Automation</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Let's be clear: simply slapping some AI onto a problem isn't enough. Many AI agencies make the fatal mistake of creating solutions that add to a client's workload. Imagine an AI chatbot that answers questions based on a knowledge base that needs manual updating. Talk about inefficient!
              </p>
              <p className="text-lg text-gray-700">
                The AAA model thrives on the synergy of cutting-edge Generative AI (like those fancy LLMs) and good old-fashioned programmatic automation (think Zapier, APIs, the works). It's about making things easier, not more complicated.
              </p>
            </div>
          </div>
        </section>

        {/* Blueprint Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">Building Your AAA Empire: A Blueprint for Success</h2>
            <ul className="list-none space-y-6">
              <li className="flex items-start">
                <span className="text-primary mr-4">•</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Niche Down</h3>
                  <p className="text-gray-700">Don't try to be everything to everyone. Focus on an industry you understand. Real estate? E-commerce? Law? Pick your battleground.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4">•</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Assemble Your Arsenal</h3>
                  <p className="text-gray-700">You have two options: a network of on-call developers (Cloud Nine is your friend) or a suite of no-code tools.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4">•</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Embrace the Cold Call</h3>
                  <p className="text-gray-700">Yes, it's 2025, but cold outreach still reigns supreme. Craft a compelling message that speaks to your niche's pain points. Remember, times are tough; emphasize ROI and man-hours saved.</p>
                </div>
              </li>
            </ul>
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

        {/* Tools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">No-Code Nirvana: Tools to Empower Your AAA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Chatbots</h3>
                <p className="text-gray-700 mb-4">
                  Weekend Tech is a standout for RAG-powered chatbots. Ingest entire websites via sitemaps, upload files in bulk, and deploy chat widgets with ease. Botpress and Voiceflow offer robust chatbot flow builders, even without heavy RAG integration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Internal Apps</h3>
                <p className="text-gray-700 mb-4">
                  Weekend Tech lets you build custom content generation panels, training LLMs with client data for hyper-specific text generation. Make.io connects disparate apps for seamless automations. Need complex LLM workflows? Flowise (open-source) offer Langchain/LlamaIndex functionality in a user-friendly GUI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8">Closing the Deal: From Consultation to Contract</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Call 1: Consultation</h3>
                <p className="text-gray-700">Listen. Understand. Present high-level solutions (Plus AI can generate slick slide decks).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Call 2: Demo</h3>
                <p className="text-gray-700">Showcase a pre-built demo or a quick no-code prototype.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Call 3+: Proposal</h3>
                <p className="text-gray-700">Clearly outline deliverables, timelines, and pricing (value-based, please!). Offer add-ons like maintenance packages and training.</p>
              </div>
            </div>
          </div>
        </section>

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