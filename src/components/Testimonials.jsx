import { testimonials } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <section id="testimonials" className="relative z-10 py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="font-mono text-[0.65rem] tracking-[4px] uppercase text-electric/60 mb-3">
            // ALUMNI VOICE
          </div>
          <h2 className="font-mono text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Engineers Who Made It
          </h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className={`relative p-7 transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms`,
                border: '1px solid rgba(0,180,255,0.12)', background: 'rgba(4,16,32,0.8)' }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.3), transparent)' }} />

              <div className="absolute top-4 right-5 font-serif text-6xl leading-none"
                style={{ color: 'rgba(0,180,255,0.08)' }}>"</div>

              <p className="font-mono text-[0.72rem] text-steel-400 leading-relaxed italic mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                  font-mono text-xs text-white"
                  style={{ background: 'linear-gradient(135deg, rgba(0,100,200,0.5), rgba(0,60,160,0.8))',
                    border: '1px solid rgba(0,180,255,0.3)' }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-mono text-[0.78rem] text-white">{t.name}</div>
                  <div className="font-mono text-[0.62rem] text-electric/60 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}