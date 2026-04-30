import ChipSVG from './ChipSVG';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 overflow-hidden">
      {/* Plasma orbs */}
      <div className="orb-pulse absolute rounded-full pointer-events-none"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(92,33,182,0.22) 0%, transparent 70%)',
          top: -200, right: -100,
          filter: 'blur(80px)',
        }}
      />
      <div className="orb-pulse-slow absolute rounded-full pointer-events-none"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(74,222,128,0.1) 0%, transparent 70%)',
          bottom: -100, left: -80,
          filter: 'blur(80px)',
        }}
      />
      <div className="orb-pulse absolute rounded-full pointer-events-none"
        style={{
          width: 320, height: 320,
          background: 'radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 70%)',
          top: '40%', right: '35%',
          filter: 'blur(60px)',
          animationDelay: '1s',
        }}
      />

      {/* Content */}
      <div className="relative max-w-2xl">
        {/* Badge */}
        <div className="hero-anim-1 inline-flex items-center gap-2 px-4 py-1.5 mb-8
          border border-neon-500/40 rounded-full bg-neon-500/5">
          <span className="blink-dot w-1.5 h-1.5 rounded-full bg-neon-500 shadow-[0_0_8px_#4ade80]" />
          <span className="font-mono text-[0.7rem] tracking-[2px] uppercase text-neon-500">
            Admissions Open — Batch 2025
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-anim-2 font-orbitron font-black leading-[1.08] mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
          <span className="block text-gradient-plasma">Design the Future</span>
          <span className="block text-gradient-green">Chip by Chip.</span>
        </h1>

        {/* Sub */}
        <p className="hero-anim-3 font-exo font-light text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
          India's premier VLSI design training institute. Master RTL design, physical design,
          verification, and analog layout with industry-grade tools and expert mentorship.
        </p>

        {/* Actions */}
        <div className="hero-anim-4 flex flex-wrap gap-4">
          <a href="#courses"
            className="px-8 py-3.5 font-exo font-semibold text-sm tracking-wider uppercase
              bg-gradient-to-r from-plasma-600 to-plasma-700 text-white rounded
              border border-plasma-400/20 hover:shadow-[0_0_32px_rgba(124,58,237,0.55)]
              hover:-translate-y-0.5 transition-all duration-200">
            Explore Courses
          </a>
          <a href="#contact"
            className="px-8 py-3.5 font-exo font-semibold text-sm tracking-wider uppercase
              bg-transparent text-neon-500 rounded border border-neon-500/40
              hover:bg-neon-500/8 hover:border-neon-500 hover:shadow-[0_0_22px_rgba(74,222,128,0.2)]
              hover:-translate-y-0.5 transition-all duration-200">
            Free Counselling
          </a>
        </div>

        {/* Mini stats */}
        <div className="hero-anim-4 flex gap-8 mt-12 pt-8 border-t border-plasma-700/20">
          {[
            { n: '2500+', l: 'Trained' },
            { n: '98%', l: 'Placement' },
            { n: '150+', l: 'Partners' },
          ].map(s => (
            <div key={s.l}>
              <div className="font-orbitron font-bold text-xl text-gradient-green">{s.n}</div>
              <div className="font-mono text-[0.68rem] tracking-widest uppercase text-slate-500 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chip visual */}
      <div className="chip-float hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        <ChipSVG />
      </div>
    </section>
  );
}
