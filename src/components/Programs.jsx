import { programs } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function Programs() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <section id="programs" className="relative z-10 py-24 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="font-mono text-[0.65rem] tracking-[4px] uppercase text-electric/60 mb-3">
            // LEARNING PATHS
          </div>
          <h2 className="font-mono text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Choose Your Path
          </h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {programs.map((p, i) => (
            <div key={p.title}
              className={`flex items-center justify-between gap-4 px-6 py-5 cursor-pointer group
                transition-all duration-400
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${i * 60}ms`,
                border: '1px solid rgba(0,180,255,0.1)', background: 'rgba(4,16,32,0.6)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.35)'; e.currentTarget.style.background='rgba(7,22,40,0.8)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.1)'; e.currentTarget.style.background='rgba(4,16,32,0.6)'; }}>
              <div>
                <div className="font-mono text-[0.82rem] text-white mb-1">{p.title}</div>
                <div className="font-mono text-[0.65rem] text-steel-500">{p.desc}</div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="font-mono text-[0.6rem] tracking-wide px-2.5 py-1"
                  style={{ border: `1px solid ${p.tagColor === 'green' ? 'rgba(0,180,255,0.3)' : 'rgba(96,165,250,0.3)'}`,
                    color: p.tagColor === 'green' ? '#00b4ff' : '#60a5fa',
                    background: p.tagColor === 'green' ? 'rgba(0,180,255,0.05)' : 'rgba(96,165,250,0.05)' }}>
                  {p.tag}
                </span>
                <span className="font-mono text-steel-600 group-hover:text-electric transition-colors text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}