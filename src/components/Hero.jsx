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
      className="max-w-3xl"
    >
      <motion.div variants={item} className="mb-4 text-blue-400 font-mono text-sm tracking-wider">
        HELLO, MY NAME IS
      </motion.div>
      <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
        Andrei Vasilescu.
      </motion.h1>
      <motion.h2 variants={item} className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
        Mid-Level SAP ABAP Developer at Engie.
      </motion.h2>
      <motion.p variants={item} className="text-xl text-gray-400 leading-relaxed mb-8">
        I specialize in full-lifecycle ABAP development, technical consultancy, and complex system integrations with third-party software like GIS, SCADA, and WEB. My expertise spans across SD, IDE, DM, EDM, WM, MM, BI, FI-CA, CS, and FSM modules.
      </motion.p>
      <motion.div variants={item} className="flex gap-4">
        <a href="#experience" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors">
          View Experience
        </a>
      </motion.div>
    </motion.section>
  );
}