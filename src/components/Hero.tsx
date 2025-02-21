
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[#f8e8e4] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-72 h-96 bg-gradient-to-r from-[#f8e8e4] to-[#ffd6cc] rounded-r-full"></div>
        <div className="absolute right-20 top-1/3 w-32 h-96 bg-[#fff] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm tracking-wider uppercase mb-4 text-gray-600"
        >
          A BRAND, DIGITAL & MOTION STUDIO
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight"
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
            className="px-6 py-3 bg-white bg-opacity-90 rounded-full text-sm hover:bg-opacity-100 transition-all duration-300 flex items-center gap-2"
          >
            View our work
            <span className="inline-block transform -rotate-45">→</span>
          </button>
        </motion.div>

        {/* Bottom Elements */}
        <div className="absolute bottom-8 left-8">
          <button className="px-6 py-2 border border-black bg-transparent rounded-full text-sm hover:bg-white transition-all duration-300">
            Read about our rebrand
          </button>
        </div>

        <div className="absolute bottom-8 right-8 text-sm">
          ©2025
        </div>
      </div>
    </section>
  );
};
