
import { motion } from "framer-motion";

const projects = [
  {
    title: "Software 2.0",
    category: "Neural Systems",
    image: "https://source.unsplash.com/random/800x600?neural",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "https://source.unsplash.com/random/800x600?design",
  },
  {
    title: "Large Language Models",
    category: "AI Development",
    image: "https://source.unsplash.com/random/800x600?artificial",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Selected Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
