import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import { useInView } from '../hooks/useInView';

const articles = [
  { id: 1, tag: 'Industry',  title: "India's Semiconductor Mission: What It Means for VLSI Engineers in 2025", date: 'Apr 18, 2025', read: '6 min',  excerpt: "The ₹76,000 crore India Semiconductor Mission is creating thousands of new VLSI jobs. Here's what skills are in demand and how to position yourself.", featured: true },
  { id: 2, tag: 'Technical', title: 'RTL to GDSII: The Complete Chip Design Flow Explained',                    date: 'Apr 10, 2025', read: '12 min', excerpt: 'A comprehensive walkthrough of every stage in the digital IC design flow, from RTL coding to tapeout — with tool names at each step.' },
  { id: 3, tag: 'Career',    title: 'How to Crack a VLSI Physical Design Interview at Qualcomm',               date: 'Mar 28, 2025', read: '8 min',  excerpt: 'Our placement team compiled the most common PD interview questions asked at top semiconductor companies, with detailed answers.' },
  { id: 4, tag: 'Technical', title: 'UVM vs Traditional Testbench: When to Use What',                          date: 'Mar 15, 2025', read: '9 min',  excerpt: 'A practical comparison of UVM-based and traditional directed testbenches — trade-offs, use cases, and when the overhead is worth it.' },
  { id: 5, tag: 'Industry',  title: 'Top 10 Semiconductor Companies Hiring in Bangalore Right Now',             date: 'Mar 5, 2025',  read: '4 min',  excerpt: "We analysed 200+ open VLSI roles in Bangalore. Here are the top hiring companies, salaries, and skills they're looking for." },
  { id: 6, tag: 'Career',    title: 'Switching from Software to VLSI: A Realistic Roadmap',                    date: 'Feb 20, 2025', read: '7 min',  excerpt: 'Three alumni who made the switch from software engineering to VLSI design share their exact preparation timeline and what worked.' },
  { id: 7, tag: 'Technical', title: 'Understanding Static Timing Analysis: Setup and Hold Explained',           date: 'Feb 8, 2025',  read: '10 min', excerpt: 'STA is the most critical signoff step in digital design. This guide breaks down setup time, hold time, slack, and timing violations clearly.' },
  { id: 8, tag: 'Technical', title: 'Low Power Design Techniques Every VLSI Engineer Should Know',              date: 'Jan 25, 2025', read: '11 min', excerpt: 'Clock gating, power gating, multi-Vt, and dynamic voltage scaling — practical techniques with real impact on silicon power consumption.' },
];

const tagStyle = {
  Industry:  { border: '1px solid rgba(0,180,255,0.35)',  color: '#00b4ff',  background: 'rgba(0,180,255,0.06)' },
  Technical: { border: '1px solid rgba(96,165,250,0.35)', color: '#60a5fa',  background: 'rgba(96,165,250,0.06)' },
  Career:    { border: '1px solid rgba(34,211,238,0.35)', color: '#22d3ee',  background: 'rgba(34,211,238,0.06)' },
};

const tagBarStyle = {
  Industry:  'linear-gradient(90deg, #00b4ff, transparent)',
  Technical: 'linear-gradient(90deg, #60a5fa, transparent)',
  Career:    'linear-gradient(90deg, #22d3ee, transparent)',
};

const topics = ['ALL', 'INDUSTRY', 'TECHNICAL', 'CAREER'];

function ArticleCard({ article, i, featured = false }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  return (
    <div ref={ref}
      className={`relative overflow-hidden transition-all duration-150 cursor-pointer ${featured ? 'md:col-span-2' : ''}`}
      style={{
        background: 'rgba(4,16,32,0.9)',
        border: '1px solid rgba(0,180,255,0.12)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, border-color 0.15s, background 0.15s`,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.4)'; e.currentTarget.style.background='rgba(7,22,40,0.95)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,180,255,0.12)'; e.currentTarget.style.background='rgba(4,16,32,0.9)'; }}>

      {/* color bar */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: tagBarStyle[article.tag] }} />

      <div className={`p-6 ${featured ? 'lg:flex lg:gap-10 lg:items-start' : ''}`}>
        <div className={featured ? 'lg:flex-1' : ''}>
          {/* meta */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="font-mono text-[0.58rem] tracking-[2px] px-2 py-0.5"
              style={tagStyle[article.tag]}>{article.tag.toUpperCase()}</span>
            <span className="font-mono text-[0.6rem]"
              style={{ color: 'rgba(0,180,255,0.35)' }}>{article.date}</span>
            <span className="font-mono text-[0.6rem]"
              style={{ color: 'rgba(0,180,255,0.25)' }}>· {article.read} read</span>
          </div>

          <h3 className={`font-mono text-white leading-snug mb-3 ${featured ? 'text-lg' : 'text-[0.85rem]'}`}>
            {article.title}
          </h3>
          <p className="font-mono text-[0.7rem] leading-relaxed mb-5"
            style={{ color: 'rgba(168,200,224,0.5)' }}>{article.excerpt}</p>

          <span className="font-mono text-[0.65rem] tracking-widest uppercase transition-colors duration-150"
            style={{ color: 'rgba(0,180,255,0.6)' }}
            onMouseEnter={e => e.target.style.color='#00b4ff'}
            onMouseLeave={e => e.target.style.color='rgba(0,180,255,0.6)'}>
            READ MORE →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [active, setActive] = useState('ALL');
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);
  const [nRef, nInView] = useInView({ threshold: 0.1 });

  const filtered = active === 'ALL'
    ? articles
    : articles.filter(a => a.tag.toUpperCase() === active);

  const inputStyle = {
    background: '#010812',
    border: '1px solid rgba(0,180,255,0.2)',
    color: '#e2e8f0',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: '0.75rem',
    padding: '10px 16px',
    outline: 'none',
    width: '260px',
  };

  return (
    <>
      <PageHero
        tag="// KNOWLEDGE HUB"
        title={<>VLSI Insights &<br />Industry Pulse</>}
        subtitle="Technical deep-dives, career guides, and semiconductor industry analysis — written by working engineers, for engineers."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto"
        style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

        {/* Filter + search */}
        <div className="flex items-center gap-3 flex-wrap"
          style={{ borderBottom: '1px solid rgba(0,180,255,0.08)', paddingBottom: '20px' }}>
          {topics.map(t => (
            <button key={t} onClick={() => setActive(t)}
              className="font-mono text-[0.65rem] tracking-[3px] px-4 py-2 transition-all duration-150"
              style={{
                border: active === t ? '1px solid rgba(0,180,255,0.6)' : '1px solid rgba(0,180,255,0.15)',
                color: active === t ? '#00b4ff' : 'rgba(0,180,255,0.4)',
                background: active === t ? 'rgba(0,180,255,0.08)' : 'transparent',
              }}>
              {t}
            </button>
          ))}
          <div className="ml-auto">
            <input type="text" placeholder="Search articles..."
              style={inputStyle}
              onFocus={e => e.target.style.borderColor='rgba(0,180,255,0.5)'}
              onBlur={e => e.target.style.borderColor='rgba(0,180,255,0.2)'} />
          </div>
        </div>

        {/* Featured */}
        {active === 'ALL' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ArticleCard article={articles[0]} i={0} featured />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(active === 'ALL' ? filtered.slice(1) : filtered).map((a, i) => (
            <ArticleCard key={a.id} article={a} i={i + 1} />
          ))}
        </div>

        {/* Newsletter */}
        <div ref={nRef} className="relative p-8 text-center overflow-hidden"
          style={{
            background: 'rgba(4,16,32,0.9)',
            border: '1px solid rgba(0,180,255,0.15)',
            opacity: nInView ? 1 : 0,
            transform: nInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #00b4ff, transparent)' }} />
          <div className="text-3xl mb-3">📡</div>
          <h3 className="font-mono text-lg text-white mb-2">Stay Ahead of the Curve</h3>
          <div className="w-10 h-px mx-auto mb-4" style={{ background: 'rgba(0,180,255,0.4)' }} />
          <p className="font-mono text-[0.72rem] max-w-md mx-auto leading-relaxed mb-6"
            style={{ color: 'rgba(168,200,224,0.55)' }}>
            Weekly VLSI insights, industry news, and job alerts — straight to your inbox. No spam, unsubscribe anytime.
          </p>
          {subbed ? (
            <div className="font-mono text-sm" style={{ color: '#00b4ff' }}>
              ✓ YOU'RE SUBSCRIBED
            </div>
          ) : (
            <div className="flex gap-3 justify-center flex-wrap">
              <input type="email" placeholder="your@email.com"
                style={inputStyle}
                value={email} onChange={e => setEmail(e.target.value)}
                onFocus={e => e.target.style.borderColor='rgba(0,180,255,0.5)'}
                onBlur={e => e.target.style.borderColor='rgba(0,180,255,0.2)'} />
              <button onClick={() => email && setSubbed(true)}
                className="font-mono text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-150"
                style={{ border: '1px solid rgba(0,180,255,0.5)', color: '#00b4ff', background: 'rgba(0,180,255,0.06)' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(0,180,255,0.14)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(0,180,255,0.06)'}>
                [ SUBSCRIBE ]
              </button>
            </div>
          )}
        </div>

      </div>
    </>
  );
}