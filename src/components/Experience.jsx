import { motion } from 'framer-motion';

const workExperience = [
  {
    role: "SAP ABAP Developer",
    company: "ENGIE Romania",
    period: "May 2026 - Present",
    type: "Full-time · Hybrid",
    description: "Promoted to handle complex, end-to-end software development, system integrations, and backend architecture redesigns. Transitioned from core maintenance tasks to driving advanced technical implementations and optimizing code performance across a broad landscape of SAP modules (SD, IDE, DM, EDM, WM, MM, BI, FI-CA, CS, FSM).",
    tags: ["Backend Architecture", "Code Optimization", "Cross-Module Integration"]
  },
  {
    role: "SAP ABAP Junior Developer",
    company: "ENGIE Romania",
    period: "Dec 2023 - May 2026",
    type: "Full-time · Hybrid",
    description: "Designed, developed, and maintained custom SAP solutions. Partnered with business stakeholders to deliver complex integration architectures across SAP and third-party systems (GIS, SCADA, WEB, IVR, GMC Inspire). Conducted code reviews, optimized legacy programs, and championed continuous learning and mentorship within the ABAP team.",
    tags: ["Full-Lifecycle ABAP", "Technical Consultancy", "System Optimization"]
  },
  {
    role: "Trainee SAP ABAP",
    company: "ENGIE Romania",
    period: "Jan 2023 - Dec 2023",
    type: "Trainee · On-site",
    description: "Contributed to department-specific projects, proposing solutions to improve efficiency. Ensured correctness of reported data, completed activity-specific databases, and managed weekly reporting to situation managers.",
    tags: ["Native SQL", "SAP Products"]
  },
  {
    role: "Electronic Game Machine Technician",
    company: "Pragmatic Play",
    period: "Aug 2022 - Nov 2022",
    type: "Full-time",
    description: "Maintained, verified, and repaired gaming equipment and related subassemblies. Read and interpreted data records, provided technical consultancy, and represented the company in relation to relevant gambling authorities.",
    tags: ["Hardware Troubleshooting", "Technical Operations", "Quality Assurance"]
  },
  {
    role: "Software Developer",
    company: "htss",
    period: "Jul 2022 - Aug 2022",
    type: "Internship",
    description: "Software development internship focusing on foundational programming principles, operating systems, and object-oriented development.",
    tags: ["C#", "Windows", "Software Engineering"]
  }
];

const education = [
  {
    degree: "Master's degree, Data Modeling/Warehousing and Database Administration",
    institution: "University of Bucharest",
    period: "Oct 2022 – Jul 2023",
    description: "I want my career to be oriented for BackEnd Development, so I chose this master's program because it allows me to further my skills in advanced database management and cloud architecture.",
    topics: [
      "Database Systems & Security",
      "Data Mining & Knowledge Discovery",
      "Big Data",
      "Software dev for mobile applications",
      "Data Warehousing & Business Intelligence",
      "Cloud Computing",
      "Methods of optimization and distribution in databases"
    ],
    skills: ["PL/SQL", "MySQL", "Database Administration"]
  },
  {
    degree: "Bachelor's degree, Computer Science for Business Management",
    institution: "Universitatea Româno-Americană din București",
    period: "2019 – Jul 2022",
    description: "Graduated with an 8.80. My journey through the Romanian-American way of teaching was a great experience, giving me the opportunity to learn from teachers across different countries.",
    topics: [
      "Algorithms and data structures",
      "Computer architecture & operating systems",
      "Object oriented programming (C#, Java)",
      "Oracle SQL Developer programming",
      "Analysis and design of computer systems",
      "Computer networks",
      "IT project management"
    ],
    skills: ["Transact-SQL (T-SQL)", "Microsoft SQL Server", "C#", "Java"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="pt-12">
      {/* Work Experience Section */}
      <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>
      <div className="space-y-12 border-l border-gray-800 ml-3 mb-20">
        {workExperience.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <span className="text-blue-400 font-mono text-sm">{item.period}</span>
            </div>
            <div className="text-gray-300 font-medium mb-3">
              {item.company} <span className="text-gray-500 font-normal ml-2">| {item.type}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full border border-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="text-3xl font-bold mb-12 text-white">Education</h2>
      <div className="space-y-8">
        {education.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-gray-900 border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{item.degree}</h3>
            <div className="text-blue-400 font-mono text-sm mb-4">
              {item.institution} <span className="text-gray-500 ml-2">| {item.period}</span>
            </div>
            <p className="text-gray-300 mb-6 italic">{item.description}</p>
            
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Coursework</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {item.topics.map((topic, i) => (
                <div key={i} className="flex items-start text-sm text-gray-400">
                  <span className="text-blue-500 mr-2 mt-0.5">▹</span>
                  {topic}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
              {item.skills.map((skill, s) => (
                <span key={s} className="px-3 py-1 bg-gray-950 text-blue-300 text-xs rounded border border-gray-800">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}