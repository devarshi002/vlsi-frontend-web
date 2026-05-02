import PageHero from '../components/shared/PageHero';
import CTASection from '../components/CTASection';
import { useInView } from '../hooks/useInView';

const team = [
  { initials: 'DR', name: 'Dr. Rajesh Iyer',   role: 'Founder & Director',          exp: '22 yrs · Ex-Intel',             bio: 'Physical design lead at Intel Bangalore for 12 years. PhD from IISc. Has taped out 40+ chips across 7nm–180nm nodes.' },
  { initials: 'AM', name: 'Ananya Menon',       role: 'Head of Curriculum',           exp: '15 yrs · Ex-Qualcomm',          bio: 'RTL architect at Qualcomm. Designed baseband processors for Snapdragon SoCs. M.Tech IIT Madras.' },
  { initials: 'VK', name: 'Vikram Krishnan',    role: 'Lead Verification Trainer',    exp: '18 yrs · Ex-Synopsys',          bio: 'Verification methodology expert. Co-authored internal UVM guidelines at Synopsys. Mentor to 500+ engineers.' },
  { initials: 'SP', name: 'Shreya Patel',       role: 'Placement & Industry Head',    exp: '10 yrs · HR & Talent',          bio: 'Built VLSI talent pipelines for MediaTek, TI, and NXP. Manages all 150+ hiring partner relationships.' },
  { initials: 'KR', name: 'Karthik Rao',        role: 'Analog Design Trainer',        exp: '16 yrs · Ex-Texas Instruments', bio: 'Mixed-signal IC designer. Expert in Cadence Virtuoso, custom layout, and analog simulation methodologies.' },
  { initials: 'PN', name: 'Preethi Nair',       role: 'Operations & Student Success', exp: '8 yrs · EdTech',                bio: 'Ensures every student gets personalised support. Oversees batch scheduling, tool access, and grievance resolution.' },
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

const stats = [
  { n: '2500+', l: 'Engineers Trained' },
  { n: '12+',   l: 'Years of Excellence' },
  { n: '150+',  l: 'Hiring Partners' },
  { n: '98%',   l: 'Placement Rate' },
];

const storyPoints = [
  'Every trainer is a working or recently-retired industry engineer',
  'All exercises run on the same EDA tools used at Qualcomm & Intel',
  'Placement support starts from month one, not after completion',
  'Curriculum is reviewed every quarter with our industry partners',
];

function StatCards() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={s.l}
          className="relative p-6 text-center overflow-hidden transition-all duration-150 group"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
            background: 'rgba(4,16,32,0.9)',
            border: '1px solid rgba(0,180,255,0.15)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.45)'; e.currentTarget.style.background='rgba(7,22,40,0.95)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.15)'; e.currentTarget.style.background='rgba(4,16,32,0.9)'; }}>
          {/* top accent */}
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.5), transparent)' }} />
          <div className="font-mono text-3xl mb-1"
            style={{ color: '#00b4ff', textShadow: '0 0 20px rgba(0,180,255,0.4)' }}>{s.n}</div>
          <div className="font-mono text-[0.6rem] tracking-[3px] uppercase"
            style={{ color: 'rgba(0,180,255,0.45)' }}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}

function StorySection() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <div ref={ref} className="relative p-8 overflow-hidden"
      style={{ background: 'rgba(4,16,32,0.9)', border: '1px solid rgba(0,180,255,0.15)' }}>
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, #00b4ff, rgba(0,180,255,0.1), transparent)' }} />

      <div className="font-mono text-[0.62rem] tracking-[4px] uppercase mb-6"
        style={{ color: 'rgba(0,180,255,0.6)' }}>// OUR STORY</div>

      <div className="grid lg:grid-cols-2 gap-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
        <div>
          <h3 className="font-mono text-lg text-white mb-4 leading-snug">
            From a Small Room<br />to a Movement
          </h3>
          <p className="font-mono text-[0.73rem] leading-relaxed mb-4"
            style={{ color: 'rgba(168,200,224,0.65)' }}>
            In 2012, Dr. Rajesh Iyer left a comfortable senior engineer role at Intel to address something
            he'd seen for years — brilliant engineering graduates unable to get VLSI jobs because universities
            taught theory while companies wanted tool experience.
          </p>
          <p className="font-mono text-[0.73rem] leading-relaxed"
            style={{ color: 'rgba(168,200,224,0.5)' }}>
            With 8 students, a projector, and borrowed EDA licenses, NanoCore was born. Today we operate
            two physical labs in Bangalore, a full online platform, and a network of 150+ semiconductor
            companies who trust us to source their talent.
          </p>
        </div>
        <div>
          <h3 className="font-mono text-lg text-white mb-4 leading-snug">Why We're Different</h3>
          <div className="flex flex-col gap-3">
            {storyPoints.map((pt, i) => (
              <div key={pt} className="flex gap-4 items-start py-3 px-4"
                style={{ border: '1px solid rgba(0,180,255,0.1)', background: 'rgba(0,180,255,0.03)' }}>
                <span className="font-mono text-xs flex-shrink-0 mt-0.5"
                  style={{ color: '#00b4ff' }}>0{i + 1}</span>
                <span className="font-mono text-[0.72rem] leading-relaxed"
                  style={{ color: 'rgba(168,200,224,0.7)' }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamGrid() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {team.map((m, i) => (
        <div key={m.name}
          className="relative p-6 overflow-hidden transition-all duration-150 group"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
            background: 'rgba(4,16,32,0.9)',
            border: '1px solid rgba(0,180,255,0.12)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.4)'; e.currentTarget.style.background='rgba(7,22,40,0.95)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.12)'; e.currentTarget.style.background='rgba(4,16,32,0.9)'; }}>

          {/* top line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, #00b4ff, transparent)' }} />

          {/* index */}
          <div className="absolute top-4 right-4 font-mono text-[0.55rem] tracking-widest"
            style={{ color: 'rgba(0,180,255,0.2)' }}>{String(i + 1).padStart(2, '0')}</div>

          <div className="flex items-center gap-4 mb-5">
            {/* Avatar */}
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center font-mono text-sm text-white"
              style={{
                background: 'linear-gradient(135deg, rgba(0,80,180,0.5), rgba(0,40,120,0.8))',
                border: '1px solid rgba(0,180,255,0.35)',
                boxShadow: '0 0 16px rgba(0,180,255,0.1)',
              }}>
              {m.initials}
            </div>
            <div>
              <div className="font-mono text-sm text-white mb-0.5">{m.name}</div>
              <div className="font-mono text-[0.62rem] mb-0.5" style={{ color: '#00b4ff' }}>{m.role}</div>
              <div className="font-mono text-[0.58rem]" style={{ color: 'rgba(0,180,255,0.4)' }}>{m.exp}</div>
            </div>
          </div>

          {/* divider */}
          <div className="mb-4 h-px" style={{ background: 'rgba(0,180,255,0.1)' }} />

          <p className="font-mono text-[0.7rem] leading-relaxed"
            style={{ color: 'rgba(168,200,224,0.55)' }}>{m.bio}</p>
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
      <div className="absolute left-[23px] top-2 bottom-2 w-px"
        style={{ background: 'linear-gradient(180deg, rgba(0,180,255,0.6), rgba(0,180,255,0.1))' }} />

      <div className="flex flex-col gap-6">
        {milestones.map((m, i) => (
          <div key={m.year}
            className="flex gap-6 items-start"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms`,
            }}>
            {/* dot */}
            <div className="relative flex-shrink-0 w-12 flex justify-center pt-1">
              <div className="w-3 h-3 rounded-full z-10"
                style={{ background: '#00b4ff', boxShadow: '0 0 10px rgba(0,180,255,0.7)' }} />
            </div>

            {/* content */}
            <div className="flex-1 pb-2 px-5 py-3 transition-all duration-150"
              style={{ border: '1px solid rgba(0,180,255,0.1)', background: 'rgba(4,16,32,0.7)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.3)'; e.currentTarget.style.background='rgba(7,22,40,0.9)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.1)'; e.currentTarget.style.background='rgba(4,16,32,0.7)'; }}>
              <div className="font-mono text-sm mb-1"
                style={{ color: '#00b4ff', textShadow: '0 0 10px rgba(0,180,255,0.4)' }}>{m.year}</div>
              <div className="font-mono text-[0.72rem] leading-relaxed"
                style={{ color: 'rgba(168,200,224,0.65)' }}>{m.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ tag, title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="font-mono text-[0.62rem] tracking-[4px] uppercase whitespace-nowrap"
        style={{ color: 'rgba(0,180,255,0.6)' }}>{tag}</div>
      <div className="flex-1 h-px" style={{ background: 'rgba(0,180,255,0.1)' }} />
      <div className="font-mono text-lg text-white whitespace-nowrap">{title}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="// WHO WE ARE"
        title={<>Built by Engineers,<br />For Engineers</>}
        subtitle="NanoCore started in 2012 with a simple belief — that India's VLSI talent gap could be closed with the right training, the right tools, and the right mentors."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto"
        style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

        <StatCards />
        <StorySection />

        <div>
          <SectionHeader tag="// THE TEAM" title="Meet Your Mentors" />
          <TeamGrid />
        </div>

        <div>
          <SectionHeader tag="// OUR JOURNEY" title="12 Years of Milestones" />
          <Timeline />
        </div>

      </div>

      <CTASection />
    </>
  );
}