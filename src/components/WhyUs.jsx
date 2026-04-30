import { features, tools } from '../data/siteData';
import { useInView } from '../hooks/useInView';

const dotColor = {
  green: 'bg-neon-500 shadow-[0_0_8px_#4ade80]',
  purple: 'bg-plasma-400 shadow-[0_0_8px_#a78bfa]',
  cyan: 'bg-[#22d3ee] shadow-[0_0_8px_#22d3ee]',
};

export default function WhyUs() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="why" className="relative z-10 py-24 px-6 lg:px-16"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(92,33,182,0.04) 50%, transparent)' }}>
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left - Features */}
        <div>
          <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-3">
            // Why NanoCore
          </span>
          <h2 className="font-orbitron font-bold text-gradient-plasma mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.15 }}>
            Engineered for<br />Real Careers
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-md">
            We don't just teach theory. Every module is tied to a live EDA tool session
            and an industry-standard project.
          </p>

          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex gap-4 items-start p-5 rounded-lg border border-plasma-700/15
                  hover:border-neon-500/30 hover:bg-neon-500/3 transition-all duration-300 group
                  ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transition: `all 0.5s ease ${i * 100}ms` }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xl
                  bg-plasma-700/15 border border-plasma-600/25 group-hover:border-plasma-500/40
                  group-hover:bg-plasma-700/20 transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-orbitron font-semibold text-[0.88rem] text-slate-100 mb-1.5">
                    {f.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Tool Board */}
        <div
          className={`relative transition-all duration-700 delay-200
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative rounded-xl overflow-hidden border border-plasma-700/30 p-8
            bg-gradient-to-br from-space-700/90 to-space-900/95"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(92,33,182,0.07) 30px),
                repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(92,33,182,0.07) 30px)
              `,
            }}>

            {/* Scan line effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
              <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-500/20 to-transparent animate-scan-line"
                style={{ animation: 'scanLine 4s linear infinite' }} />
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-neon-500 blink-dot" />
              <span className="font-mono text-[0.68rem] tracking-[3px] uppercase text-neon-500/70">
                EDA Tool Suite — Licensed Access
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {tools.map((tool, i) => (
                <div key={tool.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-md
                    bg-space-900/80 border border-plasma-700/25
                    hover:border-neon-500/30 hover:bg-space-900 transition-all duration-200 group cursor-default">
                  <div className={`w-2 h-2 flex-shrink-0 rounded-full blink-dot ${dotColor[tool.color]}`}
                    style={{ animationDelay: `${i * 0.3}s` }} />
                  <div>
                    <div className="font-exo font-semibold text-[0.82rem] text-slate-200
                      group-hover:text-white transition-colors">
                      {tool.name}
                    </div>
                    <div className="font-mono text-[0.65rem] text-slate-600">{tool.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
