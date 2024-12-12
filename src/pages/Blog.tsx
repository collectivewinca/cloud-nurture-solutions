import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is transforming modern business operations...",
    slug: "future-of-ai-in-business"
  },
  {
    id: 2,
    title: "Machine Learning Applications",
    excerpt: "Understanding practical applications of machine learning in today's world...",
    slug: "machine-learning-applications"
  },
  {
    id: 3,
    title: "Data Analytics Trends",
    excerpt: "Latest trends in data analytics and their impact on decision making...",
    slug: "data-analytics-trends"
  },
  {
    id: 4,
    title: "Cloud Computing Solutions",
    excerpt: "How cloud computing is revolutionizing business infrastructure...",
    slug: "cloud-computing-solutions"
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices",
    excerpt: "Essential cybersecurity measures for modern businesses...",
    slug: "cybersecurity-best-practices"
  },
  {
    id: 6,
    title: "Digital Transformation Strategies",
    excerpt: "Effective strategies for digital transformation in organizations...",
    slug: "digital-transformation-strategies"
  },
  {
    id: 7,
    title: "IoT Integration",
    excerpt: "Implementing IoT solutions in business environments...",
    slug: "iot-integration"
  },
  {
    id: 8,
    title: "Blockchain Technology",
    excerpt: "Understanding blockchain and its business applications...",
    slug: "blockchain-technology"
  },
  {
    id: 9,
    title: "AI Ethics",
    excerpt: "Exploring ethical considerations in AI development and implementation...",
    slug: "ai-ethics"
  },
  {
    id: 10,
    title: "Future Tech Trends",
    excerpt: "Upcoming technology trends that will shape the future...",
    slug: "future-tech-trends"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BlogHero />
      <div className="pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-secondary mb-3">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 text-primary hover:text-primary-light transition-colors">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;