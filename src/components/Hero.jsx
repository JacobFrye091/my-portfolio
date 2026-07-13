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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } }
  };

  return (
    <motion.section 
      variants={container} 
      initial="hidden" 
      animate="show" 
      className="max-w-2xl"
    >
      <motion.div variants={item} className="mb-4 text-blue-400 font-mono text-sm tracking-wider">
        HELLO, WORLD.
      </motion.div>
      <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
        I build robust backend systems.
      </motion.h1>
      <motion.p variants={item} className="text-xl text-gray-400 leading-relaxed mb-8">
        Mid-Level SAP ABAP Developer specializing in database structures, BAPIs, and optimizing complex enterprise workflows. 
      </motion.p>
      <motion.div variants={item}>
        <a href="#experience" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors">
          View My Work
        </a>
      </motion.div>
    </motion.section>
  );
}