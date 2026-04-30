import BackgroundLayers from '../components/BackgroundLayers';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Courses from '../components/Courses';
import WhyUs from '../components/WhyUs';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import SectionCard from '../components/shared/SectionCard';
import { useInView } from '../hooks/useInView';

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We hold every course, mentor, and lab session to the highest industry standard — no shortcuts, no filler.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent fees, honest placement stats, and mentors who tell you the truth about your progress.' },
  { icon: '🚀', title: 'Innovation', desc: 'Curriculum updated every quarter to reflect the latest EDA tools, process nodes, and design methodologies.' },
  { icon: '🌍', title: 'Inclusivity', desc: 'Scholarships, flexible batches, and online access ensure geography or budget never blocks great engineers.' },
  { icon: '🔬', title: 'Hands-on Learning', desc: 'Every concept is immediately applied on licensed EDA tools — we believe in learning by doing.' },
  { icon: '💡', title: 'Industry Connect', desc: 'Deep partnerships with 150+ semiconductor firms translate directly into referrals and job offers.' },
];

function VMCSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="vision" className="relative z-10 py-24 px-6 lg:px-16">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Vision & Mission side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Vision */}
          <div
            className={`relative glass-card rounded-xl p-10 overflow-hidden transition-all duration-600
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-plasma-600 via-neon-500 to-transparent" />
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #4ade80, transparent)' }} />

            <span id="vision" className="font-mono text-[0.68rem] tracking-[4px] uppercase text-neon-500 block mb-4">
              // Our Vision
            </span>
            <h2 className="font-orbitron font-bold text-2xl text-white mb-5 leading-snug">
              To Be India's Most<br />Trusted Chip School
            </h2>
            <p className="text-slate-400 leading-relaxed text-[0.95rem]">
              We envision a future where every passionate engineer in India has access to world-class
              VLSI education — the kind that gets you hired at Intel, Qualcomm, or ARM, regardless
              of where you studied or grew up.
            </p>
            <p className="text-slate-500 leading-relaxed text-[0.88rem] mt-4">
              By 2030, we aim to train <span className="text-neon-500 font-semibold">10,000+ VLSI engineers</span> and
              establish NanoCore as the de-facto standard for semiconductor talent in South Asia.
            </p>
          </div>

          {/* Mission */}
          <div
            id="mission"
            className={`relative glass-card rounded-xl p-10 overflow-hidden transition-all duration-600
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '120ms' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-plasma-600 via-plasma-400 to-transparent" />
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

            <span className="font-mono text-[0.68rem] tracking-[4px] uppercase text-plasma-400 block mb-4">
              // Our Mission
            </span>
            <h2 className="font-orbitron font-bold text-2xl text-white mb-5 leading-snug">
              Bridge the Gap Between<br />Degree & Industry
            </h2>
            <p className="text-slate-400 leading-relaxed text-[0.95rem]">
              Our mission is to deliver job-ready VLSI training by combining rigorous curriculum,
              licensed EDA tools, and mentorship from engineers actively working in the semiconductor industry.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {['Teach with real tools, not just theory', 'Connect every student to hiring partners', 'Keep curriculum ahead of industry trends'].map(m => (
                <div key={m} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-plasma-400 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div id="values">
          <div className="text-center mb-10">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">
              // Core Values
            </span>
            <h2 className="font-orbitron font-bold text-gradient-plasma"
              style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              Principles We Stand By
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`glass-card rounded-xl p-6 hover:border-plasma-500/40 card-hover
                  transition-all duration-500
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="text-2xl mb-4">{v.icon}</div>
                <h4 className="font-orbitron font-semibold text-[0.9rem] text-slate-100 mb-2">{v.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <VMCSection />
      <Courses />
      <WhyUs />
      <Programs />
      <Testimonials />
      <CTASection />
    </>
  );
}
