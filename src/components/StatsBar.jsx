import { stats, partnerLogos } from '../data/siteData';

export default function StatsBar() {
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <>
      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-plasma-700/25
        border-y border-plasma-700/30 bg-space-800/80 backdrop-blur-sm">
        {stats.map((s) => (
          <div key={s.label}
            className="py-8 px-6 text-center hover:bg-plasma-700/8 transition-colors duration-300 group">
            <span className="block font-orbitron font-bold text-3xl text-gradient-green
              group-hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.7)] transition-all duration-300">
              {s.num}
            </span>
            <span className="font-mono text-[0.72rem] tracking-widest uppercase text-slate-500 mt-1 block">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Partner marquee */}
      <div className="relative z-10 py-5 border-b border-plasma-700/20 overflow-hidden
        bg-space-900/60 backdrop-blur-sm">
        <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
          {doubled.map((name, i) => (
            <span key={i}
              className="font-mono text-[0.7rem] tracking-[3px] uppercase text-slate-600
                hover:text-plasma-400 transition-colors duration-200 cursor-default inline-block">
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
