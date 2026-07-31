import { motion, useMotionValue, useMotionTemplate, useTransform, useSpring } from 'framer-motion';

const projectsData = [
  {
    titleEn: "e-VAT Reconciliation, ANAF Pre-filled Return",
    titleRo: "e-TVA Reconciliere, Decontul precompletat ANAF",
    company: "VML EXPERT ADVISOR SRL",
    period: "2026",
    tasks: [
      "Link: https://www.ereconciliere.ro/",
      "Invoice-to-invoice reconciliation",
      "Suggested values for D300",
      "Flexible ANAF import",
      "Jurnal de audit permanent",
      "AES-256 encryption per company, passwords protected with Argon2id, separate accounts, granular permissions"
    ],
    skills: []
  }
];

function LaunchedPlatformCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 25 });
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(59,130,246,0.14), transparent 60%)`;

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative flex flex-col h-full p-6 rounded-xl glass border border-gray-800/80 shadow-sm hover:border-blue-500/40 hover:shadow-glow-lg transition-[border-color,box-shadow] duration-300 overflow-hidden"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glowBackground }}
        />
        <div className="relative flex-grow" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-xl font-bold text-white leading-tight mb-1 font-display">{project.titleEn}</h3>
          <h4 className="text-sm font-medium text-gray-500 italic mb-4">{project.titleRo}</h4>

          <div className="text-blue-400 font-mono text-xs mb-4 pb-4 border-b border-gray-800">
            {project.company} <span className="text-gray-600 mx-2">|</span> {project.period}
          </div>

          {project.tasks.length > 0 && (
            <ul className="mb-6 space-y-2">
              {project.tasks.map((task, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-start leading-snug">
                  <span className="text-blue-500 mr-2 mt-0.5">▹</span>
                  {task}
                </li>
              ))}
            </ul>
          )}
        </div>

        {project.skills.length > 0 && (
          <div className="relative flex flex-wrap gap-2 mt-auto pt-4" style={{ transform: 'translateZ(20px)' }}>
            {project.skills.map((skill, s) => (
              <span key={s} className="px-3 py-1 bg-gray-950/60 text-blue-300 text-xs rounded border border-gray-800">
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Platform() {
  return (
    <section id="projects" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-white font-display">External Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <LaunchedPlatformCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}