import { courses } from '../data/siteData';
import { useInView } from '../hooks/useInView';

function CourseCard({ course, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref}
      className={`card-blue rounded-none p-7 cursor-pointer relative overflow-hidden
        transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 70}ms` }}>

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: course.featured
          ? 'linear-gradient(90deg, transparent, #00b4ff, transparent)'
          : 'linear-gradient(90deg, transparent, rgba(0,180,255,0.3), transparent)' }} />

      <div className="flex items-start justify-between mb-4">
        <span className="text-xl">{course.icon}</span>
        {course.featured && (
          <span className="tag-blue px-2 py-0.5 text-[0.58rem]">POPULAR</span>
        )}
      </div>

      <div className="font-mono text-[0.6rem] tracking-[2px] uppercase text-electric/60 mb-2">
        // {course.level.replace('⭐ ', '')}
      </div>
      <h3 className="font-mono text-sm text-white mb-3 leading-snug">{course.name}</h3>
      <p className="font-mono text-[0.72rem] text-steel-400 leading-relaxed mb-6 line-clamp-3">
        {course.desc}
      </p>

      <div className="flex flex-wrap gap-3 pt-4"
        style={{ borderTop: '1px solid rgba(0,180,255,0.08)' }}>
        {[`${course.duration}`, `${course.badge}`, `${course.extra}`].map(m => (
          <span key={m} className="font-mono text-[0.6rem] tracking-wide text-steel-500">
            ▸ {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="relative z-10 py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="font-mono text-[0.65rem] tracking-[4px] uppercase text-electric/60 mb-3">
            // TRAINING MODULES
          </div>
          <h2 className="font-mono text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Industry-Ready VLSI Programs
          </h2>
          <p className="font-mono text-sm text-steel-400 max-w-xl leading-relaxed">
            Curriculum crafted with top semiconductor companies. Learn the exact tools and flows
            used at Intel, Qualcomm, and TSMC.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}