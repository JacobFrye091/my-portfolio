export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-950">
      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-blue-600/20 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-violet-600/15 blur-[120px] animate-aurora"
        style={{ animationDelay: '-8s' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-[120px] animate-aurora"
        style={{ animationDelay: '-15s' }}
      />

      {/* Grid overlay, faded via mask */}
      <div
        className="absolute inset-0 bg-grid"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950" />
    </div>
  );
}
