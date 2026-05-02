import { stats, partnerLogos } from '../data/siteData';

export default function StatsBar() {
  const doubled = [...partnerLogos, ...partnerLogos];
  return (
    <>
      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: '1px solid rgba(0,180,255,0.1)', borderBottom: '1px solid rgba(0,180,255,0.1)',
          background: 'rgba(4,16,32,0.8)', backdropFilter: 'blur(10px)' }}>
        {stats.map((s, i) => (
          <div key={s.label}
            className="py-8 px-6 text-center group cursor-default transition-colors duration-200"
            style={{ borderRight: i < 3 ? '1px solid rgba(0,180,255,0.08)' : 'none' }}>
            <span className="block font-mono text-3xl text-electric mb-1"
              style={{ textShadow: '0 0 20px rgba(0,180,255,0.5)' }}>
              {s.num}
            </span>
            <span className="font-mono text-[0.6rem] tracking-[3px] uppercase text-steel-500">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="relative z-10 py-4 overflow-hidden"
        style={{ borderBottom: '1px solid rgba(0,180,255,0.08)', background: 'rgba(2,13,26,0.6)' }}>
        <div className="marquee-track flex gap-14 whitespace-nowrap w-max">
          {doubled.map((name, i) => (
            <span key={i} className="font-mono text-[0.65rem] tracking-[3px] uppercase text-steel-600
              hover:text-electric transition-colors duration-200 cursor-default">
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}