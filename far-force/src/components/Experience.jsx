import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2025",
    title: "Consumption Profiles - Release 2025",
    company: "Engie",
    description: "Developed and released crucial updates for consumption profiling modules, ensuring accurate data handling and system reliability."
  },
  {
    year: "2024",
    title: "Internalization of Support Functions DGSR Project",
    company: "Engie",
    description: "Key contributor in the technical transition and internalization of core support functions, managing complex ABAP system integrations."
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-3xl font-bold mb-12 text-white">Experience & Projects</h2>
      <div className="space-y-12 border-l border-gray-800 ml-3">
        {timelineData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8"
          >
            {/* The Timeline Dot */}
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <span className="text-blue-400 font-mono text-sm">{item.company} | {item.year}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}