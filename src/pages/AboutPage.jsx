import PageHero from '../components/shared/PageHero';
import SectionCard from '../components/shared/SectionCard';
import CTASection from '../components/CTASection';
import { useInView } from '../hooks/useInView';

const team = [
  { initials: 'DR', name: 'Dr. Rajesh Iyer', role: 'Founder & Director', exp: '22 yrs · Ex-Intel', bio: 'Physical design lead at Intel Bangalore for 12 years. PhD from IISc. Has taped out 40+ chips across 7nm–180nm nodes.' },
  { initials: 'AM', name: 'Ananya Menon', role: 'Head of Curriculum', exp: '15 yrs · Ex-Qualcomm', bio: 'RTL architect at Qualcomm. Designed baseband processors for Snapdragon SoCs. M.Tech IIT Madras.' },
  { initials: 'VK', name: 'Vikram Krishnan', role: 'Lead Verification Trainer', exp: '18 yrs · Ex-Synopsys', bio: 'Verification methodology expert. Co-authored internal UVM guidelines at Synopsys. Mentor to 500+ engineers.' },
  { initials: 'SP', name: 'Shreya Patel', role: 'Placement & Industry Head', exp: '10 yrs · HR & Talent', bio: 'Built VLSI talent pipelines for MediaTek, TI, and NXP. Manages all 150+ hiring partner relationships.' },
  { initials: 'KR', name: 'Karthik Rao', role: 'Analog Design Trainer', exp: '16 yrs · Ex-Texas Instruments', bio: 'Mixed-signal IC designer. Expert in Cadence Virtuoso, custom layout, and analog simulation methodologies.' },
  { initials: 'PN', name: 'Preethi Nair', role: 'Operations & Student Success', exp: '8 yrs · EdTech', bio: 'Ensures every student gets personalised support. Oversees batch scheduling, tool access, and grievance resolution.' },
];

const milestones = [
  { year: '2012', event: 'NanoCore founded in a 200 sqft room in Koramangala with 8 students' },
  { year: '2014', event: 'First corporate training contract with a Bangalore fabless startup' },
  { year: '2016', event: 'Moved to dedicated 3000 sqft lab with licensed Synopsys & Cadence tools' },
  { year: '2018', event: 'Crossed 500 trained engineers; opened HSR Layout center' },
  { year: '2020', event: 'Launched fully online program during COVID — reached students across India' },
  { year: '2022', event: '1000+ alumni milestone; signed MoU with 3 semiconductor companies' },
  { year: '2024', event: '2500 engineers trained; 98% placement rate; expanded to 6 courses' },
  { year: '2025', event: 'Launching VLSI Full-Stack Bootcamp with job guarantee program' },
];

function TeamGrid() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {team.map((m, i) => (
        <div key={m.name}
          className={`glass-card rounded-xl p-7 hover:border-plasma-500/40 transition-all duration-500 card-hover
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: `${i * 80}ms` }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-plasma-600 to-neon-700
              flex items-center justify-center font-orbitron font-bold text-sm text-white flex-shrink-0">
              {m.initials}
            </div>
            <div>
              <div className="font-exo font-semibold text-slate-100 text-sm">{m.name}</div>
              <div className="font-mono text-[0.65rem] text-neon-500/80 mt-0.5">{m.role}</div>
              <div className="font-mono text-[0.62rem] text-plasma-400/60 mt-0.5">{m.exp}</div>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{m.bio}</p>
        </div>
      ))}
    </div>
  );
}

function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">
      {/* vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-plasma-600/60 via-neon-500/30 to-transparent" />
      <div className="flex flex-col gap-8">
        {milestones.map((m, i) => (
          <div key={m.year}
            className={`flex gap-6 items-start transition-all duration-500
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
            style={{ transitionDelay: `${i * 70}ms` }}>
            {/* dot */}
            <div className="relative flex-shrink-0 w-12 flex justify-center">
              <div className="w-3 h-3 rounded-full bg-neon-500 shadow-[0_0_10px_#4ade80] mt-1 z-10" />
            </div>
            <div className="pb-2">
              <div className="font-orbitron font-bold text-neon-500 text-sm mb-1">{m.year}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{m.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="// Who We Are"
        title={<>Built by Engineers,<br />For Engineers</>}
        subtitle="NanoCore started in 2012 with a simple belief — that India's VLSI talent gap could be closed with the right training, the right tools, and the right mentors."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-20">

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: '2500+', l: 'Engineers Trained' },
            { n: '12+', l: 'Years of Excellence' },
            { n: '150+', l: 'Hiring Partners' },
            { n: '98%', l: 'Placement Rate' },
          ].map((s, i) => (
            <SectionCard key={s.l} delay={i * 80} className="text-center hover:border-neon-500/30">
              <div className="font-orbitron font-bold text-3xl text-gradient-green mb-1">{s.n}</div>
              <div className="font-mono text-[0.7rem] tracking-widest uppercase text-slate-500">{s.l}</div>
            </SectionCard>
          ))}
        </div>

        {/* Story */}
        <SectionCard>
          <span className="font-mono text-[0.68rem] tracking-[3px] uppercase text-neon-500 block mb-3">// Our Story</span>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-orbitron font-bold text-xl text-slate-100 mb-4">From a Small Room to a Movement</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-4">
                In 2012, Dr. Rajesh Iyer left a comfortable senior engineer role at Intel to address something
                he'd seen for years — brilliant engineering graduates unable to get VLSI jobs because universities
                taught theory while companies wanted tool experience.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                With 8 students, a projector, and borrowed EDA licenses, NanoCore was born. Today we operate
                two physical labs in Bangalore, a full online platform, and a network of 150+ semiconductor
                companies who trust us to source their talent.
              </p>
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-xl text-slate-100 mb-4">Why We're Different</h3>
              <div className="flex flex-col gap-3">
                {[
                  'Every trainer is a working or recently-retired industry engineer',
                  'All exercises run on the same EDA tools used at Qualcomm & Intel',
                  'Placement support starts from month one, not after completion',
                  'Curriculum is reviewed every quarter with our industry partners',
                ].map(pt => (
                  <div key={pt} className="flex gap-3 items-start">
                    <span className="text-neon-500 mt-1 flex-shrink-0 font-mono text-xs">→</span>
                    <span className="text-slate-400 text-sm">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Team */}
        <div>
          <div className="text-center mb-10">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">// The Team</span>
            <h2 className="font-orbitron font-bold text-gradient-plasma" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              Meet Your Mentors
            </h2>
          </div>
          <TeamGrid />
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-10">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">// Our Journey</span>
            <h2 className="font-orbitron font-bold text-gradient-plasma" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              12 Years of Milestones
            </h2>
          </div>
          <Timeline />
        </div>

      </div>

      <CTASection />
    </>
  );
}
