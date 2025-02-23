
import { motion } from "framer-motion";
import { Earth3D } from "./Earth3D";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black relative overflow-hidden">
      <Earth3D />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm tracking-wider uppercase mb-4 text-gray-300"
        >
          AI WAREHOUSE
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight text-white"
        >
          <h1 className="italic font-light">Creating the</h1>
          <h1 className="font-normal">unexpected</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-8 mt-12"
        >
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-white bg-opacity-10 rounded-full text-sm text-white hover:bg-opacity-20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            View our work
            <span className="inline-block transform -rotate-45">→</span>
          </button>
        </motion.div>

        <div className="absolute bottom-8 right-8 text-sm text-white">
          ©2025
        </div>
      </div>
    </section>
  );
};
