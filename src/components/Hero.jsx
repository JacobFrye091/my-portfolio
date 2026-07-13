import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      variants={container} 
      initial="hidden" 
      animate="show" 
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12"
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <motion.div variants={item} className="text-blue-500 font-mono text-xs tracking-[0.2em] uppercase">
          SAP ABAP & Backend Specialist
        </motion.div>
        
        <motion.h1 variants={item} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Andrei Vasilescu
        </motion.h1>
        
        <motion.h2 variants={item} className="text-2xl text-gray-400 font-light">
          Mid-Level SAP ABAP Developer
        </motion.h2>
        
        <motion.p variants={item} className="text-lg text-gray-500 leading-relaxed max-w-lg">
          I build robust backend systems and complex integrations, transforming business logic into scalable SAP architecture. 
        </motion.p>
        
        <motion.div variants={item} className="pt-4">
          <a 
            href="#experience" 
            className="inline-block border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-sm font-medium transition-all duration-300"
          >
            Check my Work
          </a>
        </motion.div>
      </div>

      {/* Smaller, Elegant Profile Image */}
      <motion.div 
        variants={item} 
        className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0"
      >
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <img 
            src="/profile.jpg" 
            alt="Andrei Vasilescu" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}