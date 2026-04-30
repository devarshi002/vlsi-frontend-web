import { courses } from '../data/siteData';
import { useInView } from '../hooks/useInView';

function CourseCard({ course, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`card-hover relative rounded-lg overflow-hidden cursor-pointer
        ${course.featured
          ? 'border border-neon-500/30 bg-gradient-to-br from-neon-900/10 to-space-800/90'
          : 'glass-card'
        }
        transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar */}
      <div className={`card-top-bar h-0.5 w-full bg-gradient-to-r
        ${course.featured ? 'from-neon-500 to-cyan-glow' : 'from-plasma-600 to-neon-600'}`} />

      <div className="p-8">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-6
          ${course.featured
            ? 'bg-neon-500/10 border border-neon-500/30'
            : 'bg-plasma-700/15 border border-plasma-600/30'}`}>
          {course.icon}
        </div>

        {/* Level */}
        <div className={`font-mono text-[0.68rem] tracking-[2px] uppercase mb-2
          ${course.featured ? 'text-neon-500' : 'text-plasma-400'}`}>
          {course.level}
        </div>

        {/* Name */}
        <h3 className="font-orbitron font-semibold text-[1.02rem] text-slate-100 mb-3 leading-snug">
          {course.name}
        </h3>

        {/* Desc */}
        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
          {course.desc}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4">
          {[`⏱ ${course.duration}`, `🎓 ${course.badge}`, `💻 ${course.extra}`].map(m => (
            <span key={m} className="font-mono text-[0.72rem] text-plasma-400/80">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="relative z-10 py-24 px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-3">
          // Training Modules
        </span>
        <h2 className="font-orbitron font-bold text-gradient-plasma mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
          Industry-Ready VLSI Programs
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
          Curriculum crafted with top semiconductor companies. Learn the exact tools and flows
          used at Intel, Qualcomm, and TSMC.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {courses.map((c, i) => (
          <CourseCard key={c.id} course={c} index={i} />
        ))}
      </div>
    </section>
  );
}
