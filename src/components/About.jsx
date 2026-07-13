import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <section id="about" className="pt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
        
        {/* Professional Summary */}
        <div className="space-y-4 text-gray-400 leading-relaxed mb-16 text-lg">
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

        {/* Core SAP Expertise Grid */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-200">Core SAP Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sapModules.map((module, index) => (
            <motion.div 
              key={module.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 rounded-xl bg-gray-900 border border-gray-800 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-500 font-bold font-mono text-lg">{module.id}</span>
                <h4 className="text-white font-medium">{module.title}</h4>
              </div>
              <p className="text-sm text-gray-400">{module.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}