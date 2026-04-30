import PageHero from '../components/shared/PageHero';
import SectionCard from '../components/shared/SectionCard';
import CTASection from '../components/CTASection';
import { useInView } from '../hooks/useInView';

const openings = [
  { id: 1, title: 'Senior RTL Design Trainer', type: 'Full-time', mode: 'Hybrid', location: 'Bangalore', exp: '8+ years', skills: ['Verilog', 'SystemVerilog', 'Synopsys DC', 'Cadence Genus'], urgent: true },
  { id: 2, title: 'Physical Design Trainer', type: 'Full-time', mode: 'On-site', location: 'Bangalore', exp: '10+ years', skills: ['Cadence Innovus', 'PrimeTime', 'Floorplanning', 'CTS'], urgent: true },
  { id: 3, title: 'UVM Verification Trainer', type: 'Full-time', mode: 'Remote', location: 'Any India', exp: '6+ years', skills: ['UVM', 'SystemVerilog', 'VCS', 'Questasim'], urgent: false },
  { id: 4, title: 'Curriculum Designer', type: 'Full-time', mode: 'Hybrid', location: 'Bangalore', exp: '5+ years', skills: ['VLSI domain', 'Content writing', 'EdTech', 'LMS tools'], urgent: false },
  { id: 5, title: 'Placement Coordinator', type: 'Full-time', mode: 'On-site', location: 'Bangalore', exp: '3+ years', skills: ['Talent acquisition', 'Semiconductor network', 'MS Office', 'Communication'], urgent: false },
  { id: 6, title: 'Digital Marketing Executive', type: 'Full-time', mode: 'Hybrid', location: 'Bangalore', exp: '2+ years', skills: ['SEO/SEM', 'Meta Ads', 'LinkedIn Ads', 'Analytics'], urgent: false },
];

const perks = [
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-leading salaries benchmarked against top EdTech and semiconductor firms.' },
  { icon: '📚', title: 'Learning Budget', desc: '₹50,000/year personal L&D budget for courses, conferences, and certifications.' },
  { icon: '🏠', title: 'Flexible Work', desc: 'Hybrid and remote options for most roles. We trust you to manage your time.' },
  { icon: '🏥', title: 'Health Coverage', desc: 'Comprehensive health insurance for you and your immediate family.' },
  { icon: '🌴', title: 'Generous Leave', desc: '24 days paid leave + 10 national holidays + your birthday off.' },
  { icon: '🎓', title: 'Free Courses', desc: 'All NanoCore courses and workshops are free for employees and one family member.' },
];

const internRoles = [
  'VLSI Content Writing Intern',
  'Graphic Design Intern',
  'Business Development Intern',
  'Social Media Intern',
  'React / Frontend Intern',
];

function JobCard({ job, i }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref}
      className={`glass-card rounded-xl p-6 card-hover transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${i * 70}ms` }}>
      <div className="flex items-start justify-between mb-3 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-orbitron font-semibold text-[0.9rem] text-slate-100">{job.title}</h3>
            {job.urgent && (
              <span className="px-2 py-0.5 rounded font-mono text-[0.58rem] tracking-wide uppercase
                bg-neon-500/10 border border-neon-500/30 text-neon-500">Urgent</span>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {[job.type, job.mode, job.location, job.exp].map(t => (
              <span key={t} className="font-mono text-[0.65rem] text-slate-500">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-5">
        {job.skills.map(s => (
          <span key={s} className="px-2.5 py-1 rounded font-mono text-[0.62rem]
            bg-plasma-700/15 border border-plasma-600/20 text-plasma-400">{s}</span>
        ))}
      </div>
      <a href="#contact"
        className="inline-flex items-center gap-2 px-4 py-2 font-exo font-semibold text-[0.8rem]
          tracking-wide bg-gradient-to-r from-plasma-600 to-plasma-700 text-white rounded
          hover:shadow-[0_0_16px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200">
        Apply Now →
      </a>
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        tag="// Join the Team"
        title={<>Shape the Next<br />Generation of Chip Designers</>}
        subtitle="We're looking for passionate engineers and educators who want to make a real difference in India's semiconductor ecosystem."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-20">

        {/* Culture */}
        <SectionCard className="hover:border-neon-500/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-[0.68rem] tracking-[3px] uppercase text-neon-500 block mb-3">// Why Work With Us</span>
              <h2 className="font-orbitron font-bold text-xl text-slate-100 mb-4">
                A Team That Believes in What It Teaches
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                At NanoCore, every team member is a domain expert who genuinely cares about student outcomes.
                We don't hire people to fill seats — we hire people who want to build something meaningful
                for India's semiconductor future.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                You'll work alongside ex-Intel, ex-Qualcomm, and ex-Synopsys engineers in an environment
                that values technical depth, autonomy, and honest feedback.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: '35', l: 'Team Members' },
                { n: '4.8★', l: 'Glassdoor Rating' },
                { n: '92%', l: 'Retention Rate' },
                { n: '0', l: 'Dress Code Rules' },
              ].map(s => (
                <div key={s.l} className="text-center p-5 rounded-lg bg-space-800/60 border border-plasma-700/20">
                  <div className="font-orbitron font-bold text-2xl text-gradient-green mb-1">{s.n}</div>
                  <div className="font-mono text-[0.65rem] tracking-widest uppercase text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* Perks */}
        <div>
          <div className="text-center mb-10">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">// Benefits</span>
            <h2 className="font-orbitron font-bold text-gradient-plasma" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              What You Get
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p, i) => (
              <SectionCard key={p.title} delay={i * 70} className="hover:border-neon-500/25">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h4 className="font-orbitron font-semibold text-[0.88rem] text-slate-100 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </SectionCard>
            ))}
          </div>
        </div>

        {/* Openings */}
        <div>
          <div className="mb-8">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">// Open Positions</span>
            <h2 className="font-orbitron font-bold text-gradient-plasma" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              Current Openings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {openings.map((job, i) => <JobCard key={job.id} job={job} i={i} />)}
          </div>
        </div>

        {/* Internships */}
        <SectionCard className="hover:border-plasma-500/30">
          <span className="font-mono text-[0.68rem] tracking-[3px] uppercase text-plasma-400 block mb-3">// Internships</span>
          <h3 className="font-orbitron font-bold text-xl text-slate-100 mb-2">Student Internship Program</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xl">
            We offer 3-month paid internships for engineering students interested in EdTech, content, design,
            and business development. Strong performers get a pre-placement offer.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {internRoles.map(r => (
              <span key={r} className="px-3 py-1.5 rounded-lg font-mono text-[0.68rem]
                bg-plasma-700/10 border border-plasma-600/20 text-plasma-400">{r}</span>
            ))}
          </div>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-exo font-semibold text-sm
              tracking-wide border border-neon-500/40 text-neon-500 rounded
              hover:bg-neon-500/8 hover:border-neon-500 transition-all duration-200">
            Apply for Internship →
          </a>
        </SectionCard>

      </div>

      <CTASection />
    </>
  );
}
