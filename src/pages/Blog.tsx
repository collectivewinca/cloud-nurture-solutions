import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is transforming modern business operations...",
    slug: "future-of-ai-in-business",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "AI & Technology"
  },
  {
    id: 2,
    title: "Machine Learning Applications",
    excerpt: "Understanding practical applications of machine learning in today's world...",
    slug: "machine-learning-applications",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Data Analytics Trends",
    excerpt: "Latest trends in data analytics and their impact on decision making...",
    slug: "data-analytics-trends",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    category: "Data Analytics"
  },
  {
    id: 4,
    title: "Cloud Computing Solutions",
    excerpt: "How cloud computing is revolutionizing business infrastructure...",
    slug: "cloud-computing-solutions",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices",
    excerpt: "Essential cybersecurity measures for modern businesses...",
    slug: "cybersecurity-best-practices",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 6,
    title: "Digital Transformation Strategies",
    excerpt: "Effective strategies for digital transformation in organizations...",
    slug: "digital-transformation-strategies",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 7,
    title: "IoT Integration",
    excerpt: "Implementing IoT solutions in business environments...",
    slug: "iot-integration",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 8,
    title: "Blockchain Technology",
    excerpt: "Understanding blockchain and its business applications...",
    slug: "blockchain-technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 9,
    title: "AI Ethics",
    excerpt: "Exploring ethical considerations in AI development and implementation...",
    slug: "ai-ethics",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 10,
    title: "Future Tech Trends",
    excerpt: "Upcoming technology trends that will shape the future...",
    slug: "future-tech-trends",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95">
      <Helmet>
        <title>AI Technology Insights & News | Cloud Nine Solutions Blog</title>
        <meta name="description" content="Stay updated with the latest in AI technology, machine learning, and digital transformation. Expert insights from Cloud Nine Solutions' team of AI specialists." />
        <meta name="keywords" content="AI Blog, Technology News, Cloud Nine Solutions, AI Insights, Machine Learning Updates" />
        <meta property="og:title" content="AI Technology Insights & News | Cloud Nine Solutions Blog" />
        <meta property="og:description" content="Stay updated with the latest in AI technology, machine learning, and digital transformation. Expert insights from Cloud Nine Solutions' team of AI specialists." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cloudninesolutions.com/blog" />
      </Helmet>

      <div className="relative z-10">
        <Navbar />
        <BlogHero />
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-48 transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-primary text-sm font-medium mb-2">{post.category}</div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400">{post.excerpt}</p>
                    <div className="mt-4 text-primary group-hover:text-primary-light transition-colors flex items-center">
                      Read more 
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
