import { programs } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

export default function Programs() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="programs" className="relative z-10 py-24 px-6 lg:px-16">
      <div className="text-center mb-16">
        <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-3">
          // Learning Paths
        </span>
        <h2 className="font-orbitron font-bold text-gradient-plasma mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
          Choose Your Path
        </h2>
        <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
          Flexible formats for working professionals, fresh graduates, and career switchers.
        </p>
      </div>

      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {programs.map((p, i) => (
          <div
            key={p.title}
            className={`flex items-center justify-between gap-4 px-6 py-5 rounded-lg
              bg-space-800/50 border border-plasma-700/20 cursor-pointer group
              hover:border-plasma-600/45 hover:bg-plasma-700/6 hover:translate-x-1
              transition-all duration-300
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div>
              <h4 className="font-orbitron font-semibold text-[0.88rem] text-slate-100 mb-1">
                {p.title}
              </h4>
              <p className="font-mono text-[0.7rem] text-slate-500">{p.desc}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className={`px-3 py-1 rounded-full font-mono text-[0.68rem] tracking-wide
                ${p.tagColor === 'green'
                  ? 'bg-neon-500/10 border border-neon-500/30 text-neon-500'
                  : 'bg-plasma-600/10 border border-plasma-500/30 text-plasma-400'
                }`}>
                {p.tag}
              </span>
              <ArrowRight
                size={15}
                className="text-slate-600 group-hover:text-neon-500 group-hover:translate-x-1
                  transition-all duration-200"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
