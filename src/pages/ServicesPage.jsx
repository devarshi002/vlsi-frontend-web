import PageHero from '../components/shared/PageHero';
import SectionCard from '../components/shared/SectionCard';
import CTASection from '../components/CTASection';
import { useInView } from '../hooks/useInView';
import { courses } from '../data/siteData';

const serviceCategories = [
  {
    tag: '// Academic Programs',
    title: 'Certification Courses',
    desc: 'Deep-dive, tool-intensive programs designed for freshers and engineers looking to pivot into VLSI.',
    items: courses,
  },
];

const extraServices = [
  {
    icon: '🏢',
    title: 'Corporate Training',
    desc: 'Custom VLSI upskilling programs for semiconductor teams. On-site or remote. Tailored curriculum, dedicated trainer, and progress tracking.',
    points: ['Custom curriculum design', 'On-site / remote delivery', 'Team-size batches (5–50)', 'Completion certificates'],
    tag: 'Enterprise',
  },
  {
    icon: '🎓',
    title: '1-on-1 Mentorship',
    desc: 'Personalised coaching sessions with a senior industry engineer. Ideal for targeted skill gaps or interview preparation.',
    points: ['Flexible scheduling', 'Domain-specific focus', 'Mock technical interviews', 'Resume & LinkedIn review'],
    tag: 'Premium',
  },
  {
    icon: '💼',
    title: 'Placement Services',
    desc: 'End-to-end placement assistance — from resume building to offer letter. Exclusive access to our 150+ partner company network.',
    points: ['Resume & portfolio review', 'Mock HR + technical rounds', 'Direct company referrals', 'Salary negotiation guidance'],
    tag: 'Career',
  },
  {
    icon: '🔧',
    title: 'EDA Tool Workshops',
    desc: 'Short intensive 2–5 day workshops focused on a single EDA tool. Perfect for working engineers needing quick upskilling.',
    points: ['Synopsys DC · Cadence Innovus', 'PrimeTime · Calibre · Virtuoso', 'VCS · Questasim · SpyGlass', 'Certificate of completion'],
    tag: 'Workshops',
  },
];

function CourseTable() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <div ref={ref} className="overflow-x-auto rounded-xl border border-plasma-700/25">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-plasma-700/30 bg-space-800/80">
            <th className="text-left px-5 py-3.5 font-mono text-[0.68rem] tracking-[2px] uppercase text-plasma-400">Course</th>
            <th className="text-left px-5 py-3.5 font-mono text-[0.68rem] tracking-[2px] uppercase text-plasma-400">Duration</th>
            <th className="text-left px-5 py-3.5 font-mono text-[0.68rem] tracking-[2px] uppercase text-plasma-400">Level</th>
            <th className="text-left px-5 py-3.5 font-mono text-[0.68rem] tracking-[2px] uppercase text-plasma-400">Credential</th>
            <th className="text-left px-5 py-3.5 font-mono text-[0.68rem] tracking-[2px] uppercase text-plasma-400"></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c, i) => (
            <tr key={c.id}
              className={`border-b border-plasma-700/15 hover:bg-plasma-700/8 transition-colors duration-150
                ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: `opacity 0.4s ease ${i * 60}ms` }}>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{c.icon}</span>
                  <div>
                    <div className="font-exo font-semibold text-slate-100 text-[0.88rem]">{c.name}</div>
                    <div className="font-mono text-[0.62rem] text-slate-600 mt-0.5">{c.extra}</div>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4 font-mono text-[0.75rem] text-neon-500">{c.duration}</td>
              <td className="px-5 py-4">
                <span className={`px-2.5 py-1 rounded-full font-mono text-[0.62rem] tracking-wide
                  ${c.featured
                    ? 'bg-neon-500/10 border border-neon-500/30 text-neon-500'
                    : 'bg-plasma-700/15 border border-plasma-600/25 text-plasma-400'}`}>
                  {c.level.replace('⭐ ', '')}
                </span>
              </td>
              <td className="px-5 py-4 font-mono text-[0.72rem] text-slate-400">{c.badge}</td>
              <td className="px-5 py-4">
                <a href="#contact"
                  className="px-3 py-1.5 font-mono text-[0.65rem] tracking-wide uppercase
                    border border-plasma-600/30 text-plasma-400 rounded hover:border-neon-500/50
                    hover:text-neon-500 transition-all duration-150 whitespace-nowrap">
                  Enroll →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExtraServiceCard({ s, i }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref}
      className={`glass-card rounded-xl p-7 card-hover transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${i * 80}ms` }}>
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl">{s.icon}</span>
        <span className="px-2.5 py-1 rounded-full font-mono text-[0.62rem] tracking-wide
          bg-neon-500/10 border border-neon-500/25 text-neon-500">
          {s.tag}
        </span>
      </div>
      <h3 className="font-orbitron font-semibold text-[0.95rem] text-slate-100 mb-2">{s.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.desc}</p>
      <ul className="flex flex-col gap-2">
        {s.points.map(pt => (
          <li key={pt} className="flex gap-2 items-center text-sm text-slate-400">
            <span className="text-neon-500 font-mono text-xs flex-shrink-0">✓</span>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="// What We Offer"
        title={<>Training Programs<br />Built for the Industry</>}
        subtitle="From foundational RTL to full tapeout flows — every program is crafted with active semiconductor engineers and updated quarterly."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-20">

        {/* Course table */}
        <div>
          <div className="mb-8">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">// Certification Courses</span>
            <h2 className="font-orbitron font-bold text-gradient-plasma" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)' }}>
              All Programs at a Glance
            </h2>
          </div>
          <CourseTable />
        </div>

        {/* Extra services */}
        <div>
          <div className="text-center mb-10">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">// Beyond Courses</span>
            <h2 className="font-orbitron font-bold text-gradient-plasma" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              More Ways We Help
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraServices.map((s, i) => <ExtraServiceCard key={s.title} s={s} i={i} />)}
          </div>
        </div>

        {/* Tool access banner */}
        <SectionCard className="text-center hover:border-neon-500/30">
          <div className="text-3xl mb-4">🖥</div>
          <h3 className="font-orbitron font-bold text-xl text-slate-100 mb-3">Licensed EDA Tool Access — Included</h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-6">
            Every enrolled student gets cloud + lab access to the full Synopsys, Cadence, and Mentor tool suite.
            No extra fees. Same tools used by engineers at Intel, Qualcomm, and TSMC.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Synopsys DC', 'Cadence Innovus', 'PrimeTime', 'Calibre', 'Virtuoso', 'VCS', 'Questasim', 'SpyGlass'].map(t => (
              <span key={t} className="px-3 py-1 rounded font-mono text-[0.68rem] tracking-wide
                bg-plasma-700/15 border border-plasma-600/25 text-plasma-400">
                {t}
              </span>
            ))}
          </div>
        </SectionCard>

      </div>

      <CTASection />
    </>
  );
}
