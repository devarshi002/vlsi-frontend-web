export default function PageHero({ tag, title, subtitle, children }) {
  return (
    <section className="relative z-10 pt-32 pb-16 px-6 lg:px-16 overflow-hidden">
      {/* Orb */}
      <div className="orb-pulse absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(92,33,182,0.18) 0%, transparent 70%)',
          top: -200, right: -100,
          filter: 'blur(80px)',
        }}
      />
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-3 hero-anim-1">
          {tag}
        </span>
        <h1
          className="font-orbitron font-black text-gradient-plasma hero-anim-2 mb-4"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.1 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="hero-anim-3 text-slate-400 text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-plasma-700/40 to-transparent" />
    </section>
  );
}
