import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const sapModules = [
  { id: "SD", title: "Sales and Distribution", desc: "Customer billing, order management, and invoicing" },
  { id: "IDE", title: "Intercompany Data Exchange", desc: "Integration with market operators and external systems" },
  { id: "DM", title: "Device Management", desc: "Meter installation, replacement, and lifecycle management" },
  { id: "EDM", title: "Energy Data Management", desc: "Measurement, allocation, and consumption profile management" },
  { id: "WM", title: "Warehouse Management", desc: "Goods movement, stock control, and logistics operations" },
  { id: "MM", title: "Materials Management", desc: "Procurement, inventory, and vendor management" },
  { id: "BI", title: "Business Intelligence", desc: "Operational and financial reporting, performance analytics" },
  { id: "FI-CA", title: "Contract Accounts", desc: "Invoicing, payments, and account reconciliation" },
  { id: "CS", title: "Customer Service", desc: "Service orders, notifications, and field activity coordination" },
  { id: "FSM", title: "Field Service Management", desc: "Uses AI/rules to assign techs, optimizing routes and capacity" }
];

const careerStart = new Date(2023, 0, 1);
const yearsExperience = Math.round(((Date.now() - careerStart.getTime()) / (1000 * 60 * 60 * 24 * 365)) * 10) / 10;

const stats = [
  { value: yearsExperience, decimals: 1, suffix: '+', label: 'Years of Experience' },
  { value: sapModules.length, decimals: 0, suffix: '+', label: 'SAP Modules Covered' },
  { value: 10, decimals: 0, suffix: '+', label: 'Projects Delivered' },
  { value: 3, decimals: 0, suffix: '', label: 'Companies' },
];

function StatCounter({ value, suffix, decimals, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="text-center px-4 py-6 rounded-2xl glass border border-gray-800/80">
      <div className="text-3xl sm:text-4xl font-bold font-display text-gradient animate-gradient-x">
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 mt-2 tracking-wide">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-white font-display">About Me</h2>

        {/* Professional Summary */}
        <div className="space-y-4 text-gray-400 leading-relaxed mb-10 text-lg">
          <p>
            Results-driven SAP ABAP Developer with hands-on experience in software development and technical consulting across multiple SAP modules. Skilled in ABAP and SQL, with a strong foundation in designing, maintaining, and optimizing programs that enhance business processes and operational efficiency.
          </p>
          <p>
            Proven track record of effective collaboration with cross-functional teams, ensuring timely project delivery and adherence to best practices in enterprise software development. Dedicated to continuous learning, problem-solving, and technical excellence.
          </p>
          <p>
            Eager to contribute to challenging and innovative SAP projects that drive digital transformation and business performance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Core SAP Expertise Grid */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-200 font-display">Core SAP Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sapModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative p-5 rounded-xl glass border border-gray-800/80 shadow-sm hover:border-blue-500/40 hover:shadow-glow transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 transition-all duration-500" />
              <div className="relative flex items-center gap-3 mb-2">
                <span className="text-blue-400 font-bold font-mono text-lg group-hover:text-blue-300 transition-colors">{module.id}</span>
                <h4 className="text-white font-medium">{module.title}</h4>
              </div>
              <p className="relative text-sm text-gray-400">{module.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
