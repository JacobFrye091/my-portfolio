import { motion, useMotionValue, useMotionTemplate, useTransform, useSpring } from 'framer-motion';

const projectsData = [
  {
    titleEn: "Implementation Project of SAP FSM",
    titleRo: "Proiect Implementare SAP FSM",
    period: "Dec 2025 – Present",
    company: "ENGIE Romania",
    tasks: [],
    skills: []
  },
  {
    titleEn: "ANRE Consumers's Category Extension",
    titleRo: "Extindere categorii de consumatori ANRE",
    period: "Apr 2026 – Jun 2026",
    company: "ENGIE Romania",
    tasks: [],
    skills: []
  },
  {
    titleEn: "Products with dynamic prices",
    titleRo: "Produse cu pret dinamic",
    period: "Jan 2026 – Jun 2026",
    company: "ENGIE Romania",
    tasks: [],
    skills: []
  },
  {
    titleEn: "Modifications of PS-IM Projects",
    titleRo: "Modificare proiecte PS-IM",
    period: "Dec 2025 – Mar 2026",
    company: "ENGIE Romania",
    tasks: [
      "Business Objects Repositories (BOR)",
      "Copy routines modifications",
      "SPROXY Interfaces",
      "Workflows",
      "Migrating existing reservations MB23"
    ],
    skills: []
  },
  {
    titleEn: "Gas year redesign Engie Romania SA",
    titleRo: "Reproiectare an gazier Engie Romania SA",
    period: "Aug 2025 – Sep 2025",
    company: "ENGIE Romania",
    tasks: [
      "Annual reference consumption",
      "Winter consumption",
      "Consumer profile assignment"
    ],
    skills: ["Object-oriented Software", "SAP S/4HANA"]
  },
  {
    titleEn: "Prosumer data contracting automation",
    titleRo: "Automatizare contractare date prosumatori",
    period: "May 2025 – May 2025",
    company: "ENGIE Romania",
    tasks: ["Migration of prosumer attributes"],
    skills: ["Object-oriented Software", "SAP S/4HANA"]
  },
  {
    titleEn: "Consumption Profiles - Release 2025",
    titleRo: "Profile de consum - Release 2025",
    period: "May 2025 – May 2025",
    company: "ENGIE Romania",
    tasks: [
      "Update gas consumption profiles",
      "Revision of gas consumption forecast recording programs",
      "Application of new rules for forecast values in forecast recording programs"
    ],
    skills: ["Object-oriented Software", "SAP S/4HANA"]
  },
  {
    titleEn: "SAP-GIS Interface Redesign",
    titleRo: "Reproiectare Interfete SAP-GIS",
    period: "Apr 2025 – May 2025",
    company: "ENGIE Romania",
    tasks: [],
    skills: ["Object-oriented Software", "SAP S/4HANA"]
  },
  {
    titleEn: "Internalization of support functions DGSR_Project (2024)",
    titleRo: "Internalizare functii suport DGSR_Proiec (2024)",
    period: "Mar 2025 – Apr 2025",
    company: "ENGIE Romania",
    tasks: [
      "Phoenix Engie Romania SA Project - Distrigaz Sud Retele",
      "SD Changes",
      "ISU Invoice Cancellation",
      "Modification of Smartforms and SAPScript Forms",
      "Change Order in Reservations - MM",
      "Redetermination of Internal Order in Invoices",
      "Redetermination of Internal Order",
      "Redetermination of Material Account Allocation Group in Orders"
    ],
    skills: ["SAP Smart Forms", "Object-oriented Software"]
  },
  {
    titleEn: "RDR process optimization – transactions, reports",
    titleRo: "Optimizare proces RDR – tranzactii, rapoarte",
    period: "Jun 2024 – Jul 2024",
    company: "ENGIE Romania",
    tasks: ["RDR process optimization within Engie Romania SA"],
    skills: ["SAP Materials Management (SAP MM)", "SAP Smart Forms"]
  }
];

function ProjectCard({ project, index }) {
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

export default function Projects() {
  return (
    <section id="projects" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-white font-display">Technical Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
