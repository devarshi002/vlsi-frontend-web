import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Courses from '../components/Courses';
import WhyUs from '../components/WhyUs';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { useInView } from '../hooks/useInView';
import ScrollPopup from '../components/ScrollPopup';

const values = [
  { icon: '🎯', title: 'Excellence',        desc: 'Every course, mentor, and lab session held to the highest industry standard — no shortcuts, no filler.' },
  { icon: '🤝', title: 'Integrity',         desc: 'Transparent fees, honest placement stats, and mentors who tell you the truth about your progress.' },
  { icon: '🚀', title: 'Innovation',        desc: 'Curriculum updated every quarter to reflect the latest EDA tools, process nodes, and design methodologies.' },
  { icon: '🌍', title: 'Inclusivity',       desc: 'Scholarships, flexible batches, and online access ensure geography or budget never blocks great engineers.' },
  { icon: '🔬', title: 'Hands-on Learning', desc: 'Every concept immediately applied on licensed EDA tools — we believe in learning by doing.' },
  { icon: '💡', title: 'Industry Connect',  desc: 'Deep partnerships with 150+ semiconductor firms translate directly into referrals and job offers.' },
];

function VMCSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="vision" className="relative z-10 py-24 px-6 lg:px-16">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* Vision */}
          <div
            className={`relative overflow-hidden p-8 transition-all duration-150
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transitionDelay: '0ms',
              background: 'rgba(4,16,32,0.9)',
              border: '1px solid rgba(0,180,255,0.2)',
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, #00b4ff, rgba(0,180,255,0.1), transparent)' }} />
            {/* Corner mark */}
            <div className="absolute top-3 right-3 font-mono text-[0.55rem] tracking-widest"
              style={{ color: 'rgba(0,180,255,0.2)' }}>01</div>

            <div className="font-mono text-[0.62rem] tracking-[4px] uppercase mb-3"
              style={{ color: 'rgba(0,180,255,0.6)' }} id="vision">
              // OUR VISION
            </div>
            <h2 className="font-mono text-xl text-white mb-4 leading-snug">
              To Be India's Most<br />Trusted Chip School
            </h2>
            <p className="font-mono text-[0.75rem] leading-relaxed mb-4"
              style={{ color: 'rgba(168,200,224,0.65)' }}>
              We envision a future where every passionate engineer in India has access to world-class
              VLSI education — the kind that gets you hired at Intel, Qualcomm, or ARM, regardless
              of where you studied or grew up.
            </p>
            <p className="font-mono text-[0.72rem] leading-relaxed"
              style={{ color: 'rgba(168,200,224,0.45)' }}>
              By 2030, we aim to train{' '}
              <span style={{ color: '#00b4ff' }}>10,000+ VLSI engineers</span> and establish
              NanoCore as the de-facto standard for semiconductor talent in South Asia.
            </p>

            {/* Bottom stat */}
            <div className="mt-6 pt-5 flex items-center gap-6"
              style={{ borderTop: '1px solid rgba(0,180,255,0.1)' }}>
              {[['2030', 'TARGET YEAR'], ['10K+', 'ENGINEERS GOAL'], ['#1', 'IN SOUTH ASIA']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-mono text-lg" style={{ color: '#00b4ff' }}>{n}</div>
                  <div className="font-mono text-[0.55rem] tracking-widest mt-0.5"
                    style={{ color: 'rgba(0,180,255,0.4)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div
            id="mission"
            className={`relative overflow-hidden p-8 transition-all duration-150
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transitionDelay: '120ms',
              background: 'rgba(4,16,32,0.9)',
              border: '1px solid rgba(0,180,255,0.2)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.5), rgba(0,180,255,0.1))' }} />
            <div className="absolute top-3 right-3 font-mono text-[0.55rem] tracking-widest"
              style={{ color: 'rgba(0,180,255,0.2)' }}>02</div>

            <div className="font-mono text-[0.62rem] tracking-[4px] uppercase mb-3"
              style={{ color: 'rgba(0,180,255,0.6)' }}>
              // OUR MISSION
            </div>
            <h2 className="font-mono text-xl text-white mb-4 leading-snug">
              Bridge the Gap Between<br />Degree &amp; Industry
            </h2>
            <p className="font-mono text-[0.75rem] leading-relaxed mb-5"
              style={{ color: 'rgba(168,200,224,0.65)' }}>
              Our mission is to deliver job-ready VLSI training by combining rigorous curriculum,
              licensed EDA tools, and mentorship from engineers actively working in the semiconductor industry.
            </p>

            <div className="flex flex-col gap-3">
              {[
                'Teach with real tools, not just theory',
                'Connect every student to hiring partners',
                'Keep curriculum ahead of industry trends',
              ].map((m, i) => (
                <div key={m} className="flex items-center gap-3 py-2.5 px-4"
                  style={{ border: '1px solid rgba(0,180,255,0.1)', background: 'rgba(0,180,255,0.03)' }}>
                  <span className="font-mono text-xs flex-shrink-0" style={{ color: '#00b4ff' }}>
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[0.72rem]"
                    style={{ color: 'rgba(168,200,224,0.7)' }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div id="values">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="font-mono text-[0.62rem] tracking-[4px] uppercase"
              style={{ color: 'rgba(0,180,255,0.6)' }}>// CORE VALUES</div>
            <div className="flex-1 h-px" style={{ background: 'rgba(0,180,255,0.1)' }} />
            <div className="font-mono text-[0.55rem] tracking-widest"
              style={{ color: 'rgba(0,180,255,0.25)' }}>06 PRINCIPLES</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`relative p-6 group cursor-default transition-all duration-150`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${200 + i * 80}ms`,
                  background: 'rgba(4,16,32,0.85)',
                  border: '1px solid rgba(0,180,255,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,180,255,0.4)';
                  e.currentTarget.style.background = 'rgba(7,22,40,0.95)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,180,255,0.12)';
                  e.currentTarget.style.background = 'rgba(4,16,32,0.85)';
                }}
              >
                {/* Top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #00b4ff, transparent)',
                    opacity: 0, transition: 'opacity 0.3s' }}
                  ref={el => el && el.closest('.group') && el.closest('.group').addEventListener('mouseenter', () => el.style.opacity=1) && el.closest('.group').addEventListener('mouseleave', () => el.style.opacity=0)} />

                {/* Index number */}
                <div className="absolute top-4 right-4 font-mono text-[0.55rem] tracking-widest"
                  style={{ color: 'rgba(0,180,255,0.15)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="text-2xl mb-4">{v.icon}</div>

                {/* Title */}
                <h4 className="font-mono text-sm text-white mb-3 tracking-wide">{v.title}</h4>

                {/* Divider */}
                <div className="mb-3 w-8 h-px" style={{ background: 'rgba(0,180,255,0.3)' }} />

                {/* Desc */}
                <p className="font-mono text-[0.7rem] leading-relaxed"
                  style={{ color: 'rgba(168,200,224,0.55)' }}>{v.desc}</p>
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
      <ScrollPopup />
    </>
  );
}