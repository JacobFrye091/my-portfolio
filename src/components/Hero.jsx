export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-12 px-6">
      {/* Tiny Profile Image */}
      <div className="w-24 h-24 mb-8">
        <div className="w-full h-full rounded-full overflow-hidden border border-gray-800 shadow-lg">
          <img 
            src="/profile.jpg" 
            alt="Andrei Vasilescu" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Centered Text Content */}
      <div className="max-w-2xl space-y-4">
        <div className="text-blue-500 font-mono text-xs tracking-[0.2em] uppercase">
          SAP ABAP & Backend Specialist
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Andrei Vasilescu
        </h1>
        
        <h2 className="text-xl text-gray-400 font-light">
          Mid-Level SAP ABAP Developer
        </h2>
        
        <p className="text-base text-gray-500 leading-relaxed pt-2">
          I build robust backend systems and complex integrations, transforming business logic into scalable SAP architecture.
        </p>
        
        <div className="pt-6">
          <a 
            href="#experience" 
            className="inline-block border border-gray-700 text-gray-300 hover:border-blue-600 hover:text-blue-500 px-6 py-2 rounded-sm font-medium transition-all duration-300 text-sm"
          >
            Check my Work
          </a>
        </div>
      </div>
    </section>
  );
}