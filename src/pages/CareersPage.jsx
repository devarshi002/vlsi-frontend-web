import PageHero from '../components/shared/PageHero';
import CTASection from '../components/CTASection';
import { useInView } from '../hooks/useInView';

const openings = [
  { id: 1, title: 'Senior RTL Design Trainer',    type: 'Full-time', mode: 'Hybrid',   location: 'Bangalore', exp: '8+ years',  skills: ['Verilog', 'SystemVerilog', 'Synopsys DC', 'Cadence Genus'], urgent: true },
  { id: 2, title: 'Physical Design Trainer',      type: 'Full-time', mode: 'On-site',  location: 'Bangalore', exp: '10+ years', skills: ['Cadence Innovus', 'PrimeTime', 'Floorplanning', 'CTS'], urgent: true },
  { id: 3, title: 'UVM Verification Trainer',     type: 'Full-time', mode: 'Remote',   location: 'Any India', exp: '6+ years',  skills: ['UVM', 'SystemVerilog', 'VCS', 'Questasim'], urgent: false },
  { id: 4, title: 'Curriculum Designer',          type: 'Full-time', mode: 'Hybrid',   location: 'Bangalore', exp: '5+ years',  skills: ['VLSI domain', 'Content writing', 'EdTech', 'LMS tools'], urgent: false },
  { id: 5, title: 'Placement Coordinator',        type: 'Full-time', mode: 'On-site',  location: 'Bangalore', exp: '3+ years',  skills: ['Talent acquisition', 'Semiconductor network', 'MS Office', 'Communication'], urgent: false },
  { id: 6, title: 'Digital Marketing Executive',  type: 'Full-time', mode: 'Hybrid',   location: 'Bangalore', exp: '2+ years',  skills: ['SEO/SEM', 'Meta Ads', 'LinkedIn Ads', 'Analytics'], urgent: false },
];

const perks = [
  { icon: '💰', title: 'Competitive Pay',   desc: 'Market-leading salaries benchmarked against top EdTech and semiconductor firms.' },
  { icon: '📚', title: 'Learning Budget',   desc: '₹50,000/year personal L&D budget for courses, conferences, and certifications.' },
  { icon: '🏠', title: 'Flexible Work',     desc: 'Hybrid and remote options for most roles. We trust you to manage your time.' },
  { icon: '🏥', title: 'Health Coverage',   desc: 'Comprehensive health insurance for you and your immediate family.' },
  { icon: '🌴', title: 'Generous Leave',    desc: '24 days paid leave + 10 national holidays + your birthday off.' },
  { icon: '🎓', title: 'Free Courses',      desc: 'All NanoCore courses and workshops are free for employees and one family member.' },
];

const internRoles = [
  'VLSI Content Writing Intern',
  'Graphic Design Intern',
  'Business Development Intern',
  'Social Media Intern',
  'React / Frontend Intern',
];

const cultureStats = [
  { n: '35',   l: 'Team Members' },
  { n: '4.8★', l: 'Glassdoor Rating' },
  { n: '92%',  l: 'Retention Rate' },
  { n: '0',    l: 'Dress Code Rules' },
];

const cardStyle = {
  background: 'rgba(4,16,32,0.9)',
  border: '1px solid rgba(0,180,255,0.12)',
};

function SectionHeader({ tag, title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="font-mono text-[0.62rem] tracking-[4px] uppercase whitespace-nowrap"
        style={{ color: 'rgba(0,180,255,0.6)' }}>{tag}</div>
      <div className="flex-1 h-px" style={{ background: 'rgba(0,180,255,0.1)' }} />
      <div className="font-mono text-xl text-white whitespace-nowrap">{title}</div>
    </div>
  );
}

function JobCard({ job, i }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref}
      className="relative p-6 overflow-hidden transition-all duration-150"
      style={{
        ...cardStyle,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms, border-color 0.15s, background 0.15s`,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.4)'; e.currentTarget.style.background='rgba(7,22,40,0.95)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.12)'; e.currentTarget.style.background='rgba(4,16,32,0.9)'; }}>

      {/* top accent */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: job.urgent ? 'linear-gradient(90deg, #ef4444, transparent)' : 'linear-gradient(90deg, rgba(0,180,255,0.4), transparent)' }} />

      {/* index */}
      <div className="absolute top-4 right-4 font-mono text-[0.55rem] tracking-widest"
        style={{ color: 'rgba(0,180,255,0.2)' }}>{String(i + 1).padStart(2, '0')}</div>

      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <h3 className="font-mono text-sm text-white">{job.title}</h3>
          {job.urgent && (
            <span className="font-mono text-[0.55rem] tracking-widest px-2 py-0.5 uppercase"
              style={{ border: '1px solid rgba(239,68,68,0.5)', color: '#ef4444', background: 'rgba(239,68,68,0.08)' }}>
              URGENT
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {[job.type, job.mode, job.location, job.exp].map(t => (
            <span key={t} className="font-mono text-[0.62rem]"
              style={{ color: 'rgba(0,180,255,0.45)' }}>▸ {t}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {job.skills.map(s => (
          <span key={s} className="px-2.5 py-1 font-mono text-[0.6rem]"
            style={{ border: '1px solid rgba(0,180,255,0.18)', color: 'rgba(0,180,255,0.6)', background: 'rgba(0,180,255,0.04)' }}>
            {s}
          </span>
        ))}
      </div>

      <a href="/contact"
        className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-150"
        style={{ border: '1px solid rgba(0,180,255,0.4)', color: '#00b4ff', background: 'transparent' }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(0,180,255,0.1)'}
        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
        [ APPLY NOW ] →
      </a>
    </div>
  );
}

function PerkCard({ p, i }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref}
      className="relative p-6 transition-all duration-150"
      style={{
        ...cardStyle,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms, border-color 0.15s, background 0.15s`,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.35)'; e.currentTarget.style.background='rgba(7,22,40,0.95)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.12)'; e.currentTarget.style.background='rgba(4,16,32,0.9)'; }}>
      <div className="absolute top-3 right-3 font-mono text-[0.55rem] tracking-widest"
        style={{ color: 'rgba(0,180,255,0.15)' }}>{String(i + 1).padStart(2, '0')}</div>
      <div className="text-2xl mb-4">{p.icon}</div>
      <div className="w-6 h-px mb-3" style={{ background: 'rgba(0,180,255,0.3)' }} />
      <h4 className="font-mono text-sm text-white mb-2">{p.title}</h4>
      <p className="font-mono text-[0.7rem] leading-relaxed"
        style={{ color: 'rgba(168,200,224,0.55)' }}>{p.desc}</p>
    </div>
  );
}

export default function CareersPage() {
  const [cRef, cInView] = useInView({ threshold: 0.05 });
  return (
    <>
      <PageHero
        tag="// JOIN THE TEAM"
        title={<>Shape the Next<br />Generation of Chip Designers</>}
        subtitle="We're looking for passionate engineers and educators who want to make a real difference in India's semiconductor ecosystem."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto"
        style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

        {/* Culture */}
        <div ref={cRef} className="relative p-8 overflow-hidden"
          style={{ ...cardStyle, opacity: cInView ? 1 : 0, transform: cInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: 'linear-gradient(90deg, #00b4ff, rgba(0,180,255,0.1), transparent)' }} />
          <div className="font-mono text-[0.62rem] tracking-[4px] uppercase mb-6"
            style={{ color: 'rgba(0,180,255,0.6)' }}>// WHY WORK WITH US</div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-mono text-xl text-white mb-4 leading-snug">
                A Team That Believes<br />in What It Teaches
              </h2>
              <p className="font-mono text-[0.73rem] leading-relaxed mb-4"
                style={{ color: 'rgba(168,200,224,0.65)' }}>
                At NanoCore, every team member is a domain expert who genuinely cares about student outcomes.
                We don't hire people to fill seats — we hire people who want to build something meaningful
                for India's semiconductor future.
              </p>
              <p className="font-mono text-[0.72rem] leading-relaxed"
                style={{ color: 'rgba(168,200,224,0.45)' }}>
                You'll work alongside ex-Intel, ex-Qualcomm, and ex-Synopsys engineers in an environment
                that values technical depth, autonomy, and honest feedback.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cultureStats.map(s => (
                <div key={s.l} className="text-center p-5 transition-all duration-150"
                  style={{ border: '1px solid rgba(0,180,255,0.12)', background: 'rgba(2,13,26,0.7)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.35)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.12)'}>
                  <div className="font-mono text-2xl mb-1"
                    style={{ color: '#00b4ff', textShadow: '0 0 16px rgba(0,180,255,0.4)' }}>{s.n}</div>
                  <div className="font-mono text-[0.58rem] tracking-[2px] uppercase"
                    style={{ color: 'rgba(0,180,255,0.4)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Perks */}
        <div>
          <SectionHeader tag="// BENEFITS" title="What You Get" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((p, i) => <PerkCard key={p.title} p={p} i={i} />)}
          </div>
        </div>

        {/* Openings */}
        <div>
          <SectionHeader tag="// OPEN POSITIONS" title="Current Openings" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openings.map((job, i) => <JobCard key={job.id} job={job} i={i} />)}
          </div>
        </div>

        {/* Internships */}
        <div className="relative p-8 overflow-hidden"
          style={cardStyle}>
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.4), transparent)' }} />
          <div className="font-mono text-[0.62rem] tracking-[4px] uppercase mb-4"
            style={{ color: 'rgba(0,180,255,0.6)' }}>// INTERNSHIPS</div>
          <h3 className="font-mono text-xl text-white mb-2">Student Internship Program</h3>
          <p className="font-mono text-[0.73rem] leading-relaxed mb-6 max-w-xl"
            style={{ color: 'rgba(168,200,224,0.6)' }}>
            We offer 3-month paid internships for engineering students interested in EdTech, content, design,
            and business development. Strong performers get a pre-placement offer.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {internRoles.map(r => (
              <span key={r} className="px-3 py-1.5 font-mono text-[0.65rem]"
                style={{ border: '1px solid rgba(0,180,255,0.18)', color: 'rgba(0,180,255,0.6)', background: 'rgba(0,180,255,0.04)' }}>
                {r}
              </span>
            ))}
          </div>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-150"
            style={{ border: '1px solid rgba(0,180,255,0.4)', color: '#00b4ff' }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(0,180,255,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background='transparent'}>
            [ APPLY FOR INTERNSHIP ] →
          </a>
        </div>

      </div>
      <CTASection />
    </>
  );
}