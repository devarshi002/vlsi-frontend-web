import { testimonials } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="testimonials" className="relative z-10 py-24 px-6 lg:px-16"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(92,33,182,0.04) 50%, transparent)' }}>
      <div className="text-center mb-16">
        <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-3">
          // Alumni Voice
        </span>
        <h2 className="font-orbitron font-bold text-gradient-plasma mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
          Engineers Who Made It
        </h2>
        <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
          Hear from our alumni now working at top semiconductor companies worldwide.
        </p>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`relative glass-card rounded-xl p-8 hover:border-plasma-500/40
              hover:-translate-y-1 transition-all duration-350 cursor-default
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Quote mark */}
            <div className="absolute top-4 right-6 font-serif text-7xl leading-none
              text-plasma-700/25 select-none pointer-events-none">
              "
            </div>

            <p className="text-sm text-slate-400 leading-relaxed italic mb-7 relative">
              {t.text}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0
                bg-gradient-to-br from-plasma-600 to-neon-700 font-orbitron font-bold text-sm text-white">
                {t.initials}
              </div>
              <div>
                <div className="font-exo font-semibold text-sm text-slate-100">{t.name}</div>
                <div className="font-mono text-[0.66rem] text-neon-500/80 mt-0.5 tracking-wide">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
