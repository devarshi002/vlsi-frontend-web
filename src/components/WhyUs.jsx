import { features, tools } from '../data/siteData';
import { useInView } from '../hooks/useInView';

const dotColor = {
  green:  { bg: '#00b4ff', shadow: '0 0 8px #00b4ff' },
  purple: { bg: '#60a5fa', shadow: '0 0 8px #60a5fa' },
  cyan:   { bg: '#93c5fd', shadow: '0 0 8px #93c5fd' },
};

export default function WhyUs() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <section id="why" className="relative z-10 py-24 px-6 lg:px-16"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(0,60,160,0.04) 50%, transparent)' }}>
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="font-mono text-[0.65rem] tracking-[4px] uppercase text-electric/60 mb-3">
            // WHY NANOCORE
          </div>
          <h2 className="font-mono text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Engineered for<br />Real Careers
          </h2>
          <p className="font-mono text-sm text-steel-400 leading-relaxed mb-10 max-w-md">
            Every module is tied to a live EDA tool session and an industry-standard project.
          </p>
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <div key={f.title}
                className={`flex gap-4 items-start p-5 transition-all duration-500 group
                  ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${i * 100}ms`,
                  border: '1px solid rgba(0,180,255,0.1)',
                  background: 'rgba(4,16,32,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.1)'}>
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-lg"
                  style={{ border: '1px solid rgba(0,180,255,0.2)', background: 'rgba(0,180,255,0.05)' }}>
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-mono text-[0.82rem] tracking-wide text-white mb-1">{f.title}</h4>
                  <p className="font-mono text-[0.72rem] text-steel-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — tool board */}
        <div className={`transition-all duration-700 delay-200
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-7"
            style={{ border: '1px solid rgba(0,180,255,0.15)', background: 'rgba(4,16,32,0.9)',
              backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 29px,rgba(0,180,255,0.04) 30px),repeating-linear-gradient(90deg,transparent,transparent 29px,rgba(0,180,255,0.04) 30px)' }}>
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.4), transparent)' }} />
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-electric blink-dot"
                style={{ boxShadow: '0 0 6px #00b4ff' }} />
              <span className="font-mono text-[0.6rem] tracking-[3px] uppercase text-electric/50">
                EDA TOOL SUITE — LICENSED ACCESS
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              {tools.map((tool, i) => {
                const d = dotColor[tool.color];
                return (
                  <div key={tool.name}
                    className="flex items-center gap-3 px-4 py-3 group cursor-default transition-all duration-200"
                    style={{ border: '1px solid rgba(0,180,255,0.1)', background: 'rgba(2,13,26,0.8)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.1)'}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 blink-dot"
                      style={{ background: d.bg, boxShadow: d.shadow, animationDelay: `${i * 0.3}s` }} />
                    <div>
                      <div className="font-mono text-[0.78rem] text-steel-200 group-hover:text-white transition-colors">
                        {tool.name}
                      </div>
                      <div className="font-mono text-[0.6rem] text-steel-600">{tool.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}