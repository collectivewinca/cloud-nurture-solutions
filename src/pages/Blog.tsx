import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import ParticlesBackground from "@/components/ParticlesBackground";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is transforming modern business operations...",
    slug: "future-of-ai-in-business",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Machine Learning Applications",
    excerpt: "Understanding practical applications of machine learning in today's world...",
    slug: "machine-learning-applications",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    title: "Data Analytics Trends",
    excerpt: "Latest trends in data analytics and their impact on decision making...",
    slug: "data-analytics-trends",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
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
    <div className="min-h-screen bg-gray-50 relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <BlogHero />
        <div className="pt-16 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-48"
                    />
                  </div>
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
    </div>
  );
};

export default Blog;
