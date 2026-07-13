import { motion } from 'framer-motion';

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

export default function Projects() {
  return (
    <section id="projects" className="pt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-white">Technical Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: (index % 4) * 0.1 }}
              className="flex flex-col p-6 rounded-xl bg-gray-900 border border-gray-800 shadow-sm"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white leading-tight mb-1">{project.titleEn}</h3>
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
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.skills.map((skill, s) => (
                    <span key={s} className="px-3 py-1 bg-gray-950 text-blue-300 text-xs rounded border border-gray-800">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}