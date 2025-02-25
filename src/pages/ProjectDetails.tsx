
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = {
  "software-2-0": {
    title: "Software 2.0",
    category: "Neural Systems",
    description: `Our groundbreaking Software 2.0 initiative represents a paradigm shift in how we approach software development. By leveraging neural networks and machine learning, we're creating systems that can adapt and evolve beyond traditional programming constraints.

    This project showcases how neural networks can be used to solve complex problems that were previously difficult to address with conventional programming approaches.`,
    fullDescription: `The Software 2.0 paradigm represents a fundamental shift in software development, where instead of explicitly programming every rule and condition, we create systems that learn and adapt from data. This project demonstrates the practical applications of this approach across various domains.

    Our implementation focuses on three key areas:
    - Automated Code Generation
    - Self-Optimizing Systems
    - Neural Network Architecture Design`,
    heroVideo: "https://example.com/video.mp4", // Replace with actual video URL
    images: [
      "https://source.unsplash.com/random/800x600?neural",
      "https://source.unsplash.com/random/800x600?code",
      "https://source.unsplash.com/random/800x600?technology",
    ],
  },
  "brand-identity": {
    title: "Brand Identity",
    category: "Branding",
    description: "A comprehensive brand identity system that reflects modern design principles while maintaining timeless appeal.",
    fullDescription: `Our approach to brand identity combines strategic thinking with creative execution. We developed a complete visual language that speaks to both current trends and lasting design principles.

    The project encompassed:
    - Logo Design & Visual Identity
    - Brand Guidelines
    - Marketing Materials
    - Digital Asset Creation`,
    heroVideo: "https://example.com/video2.mp4", // Replace with actual video URL
    images: [
      "https://source.unsplash.com/random/800x600?design",
      "https://source.unsplash.com/random/800x600?branding",
      "https://source.unsplash.com/random/800x600?marketing",
    ],
  },
  "generative-ai": {
    title: "Generative AI",
    category: "AI Development",
    description: "Cutting-edge AI systems that push the boundaries of what's possible with generative models.",
    fullDescription: `Our generative AI project explores the frontiers of artificial intelligence, creating systems that can generate novel content while maintaining coherence and purpose.

    Key achievements include:
    - Advanced Language Models
    - Image Generation Systems
    - Interactive AI Interfaces
    - Real-time Content Generation`,
    heroVideo: "https://example.com/video3.mp4", // Replace with actual video URL
    images: [
      "https://source.unsplash.com/random/800x600?artificial",
      "https://source.unsplash.com/random/800x600?machine",
      "https://source.unsplash.com/random/800x600?future",
    ],
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-8">{project.category}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="aspect-video w-full bg-gray-100 mb-12 rounded-lg overflow-hidden"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={project.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose max-w-none mb-16"
        >
          <p className="text-xl mb-8">{project.description}</p>
          <p className="text-gray-600 whitespace-pre-line">{project.fullDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="aspect-video relative overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
