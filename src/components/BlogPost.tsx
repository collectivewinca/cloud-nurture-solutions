import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogContent = {
  "future-of-ai-in-business": {
    title: "The Future of AI in Business",
    content: "Artificial Intelligence is revolutionizing how businesses operate..."
  },
  "machine-learning-applications": {
    title: "Machine Learning Applications",
    content: "Machine learning is transforming various industries..."
  },
  "data-analytics-trends": {
    title: "Data Analytics Trends",
    content: "The field of data analytics continues to evolve..."
  },
  "cloud-computing-solutions": {
    title: "Cloud Computing Solutions",
    content: "Cloud computing has become essential for modern businesses..."
  },
  "cybersecurity-best-practices": {
    title: "Cybersecurity Best Practices",
    content: "In today's digital age, cybersecurity is more important than ever..."
  },
  "digital-transformation-strategies": {
    title: "Digital Transformation Strategies",
    content: "Digital transformation is reshaping how organizations operate..."
  },
  "iot-integration": {
    title: "IoT Integration",
    content: "The Internet of Things is creating new opportunities..."
  },
  "blockchain-technology": {
    title: "Blockchain Technology",
    content: "Blockchain is revolutionizing various industries..."
  },
  "ai-ethics": {
    title: "AI Ethics",
    content: "Ethical considerations in AI development are crucial..."
  },
  "future-tech-trends": {
    title: "Future Tech Trends",
    content: "Technology continues to evolve at a rapid pace..."
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogContent[slug as keyof typeof blogContent];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-secondary mb-6">{post.title}</h1>
            <div className="prose max-w-none">
              <p className="text-gray-600">{post.content}</p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;