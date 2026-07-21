import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center text-center py-16 px-6 min-h-[80vh] justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        {/* Avatar with rotating gradient ring */}
        <motion.div variants={item} className="relative w-28 h-28 mb-8 group">
          <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#3b82f6,#a78bfa,#22d3ee,#3b82f6)] opacity-70 blur-sm animate-spin-slow" />
          <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#3b82f6,#a78bfa,#22d3ee,#3b82f6)] animate-spin-slow" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-950 shadow-xl">
            <img
              src="/profile.jpg"
              alt="Andrei Vasilescu"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="text-blue-400 font-mono text-xs tracking-[0.25em] uppercase mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5">
          SAP ABAP &amp; Backend Specialist
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-extrabold font-display tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
        >
          Andrei Vasilescu
        </motion.h1>

        <motion.h2 variants={item} className="text-xl md:text-2xl text-gray-400 font-light mt-3 font-display">
          Mid-Level SAP ABAP Developer
        </motion.h2>

        <motion.p variants={item} className="max-w-xl text-base text-gray-500 leading-relaxed pt-4">
          I build robust backend systems and complex integrations, transforming business logic into scalable SAP architecture.
        </motion.p>

        <motion.div variants={item} className="pt-8 flex items-center gap-4">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-7 py-2.5 rounded-full font-medium transition-colors duration-300 text-sm shadow-glow"
          >
            Check my Work
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block border border-gray-700 text-gray-300 hover:border-blue-500/60 hover:text-blue-400 px-7 py-2.5 rounded-full font-medium transition-colors duration-300 text-sm"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
