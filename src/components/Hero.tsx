
import { motion } from "framer-motion";
import { Earth3D } from "./Earth3D";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <Earth3D />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-[1]" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm tracking-wider uppercase mb-4 text-blue-200 font-medium bg-blue-500/10 px-4 py-1 rounded-full backdrop-blur-sm"
        >
          AI WAREHOUSE
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight"
        >
          <h1 className="italic font-light bg-gradient-to-r from-white via-white to-blue-100 bg-clip-text text-transparent">
            Creating the
          </h1>
          <h1 className="font-normal bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            unexpected
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-8 mt-12"
        >
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            View our work
            <span className="inline-block transform -rotate-45 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>

        <div className="absolute bottom-8 right-8 text-sm text-white/70 tracking-wider">
          ©2025
        </div>
      </div>
    </section>
  );
};
