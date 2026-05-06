import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import { useInView } from '../hooks/useInView';

const articles = [
  { id: 1, tag: 'Industry', title: "India's Semiconductor Mission: What It Means for VLSI Engineers in 2025", date: 'Apr 18, 2025', read: '6 min read', excerpt: "The ₹76,000 crore India Semiconductor Mission is creating thousands of new VLSI jobs. Here's what skills are in demand and how to position yourself.", featured: true },
  { id: 2, tag: 'Technical', title: 'RTL to GDSII: The Complete Chip Design Flow Explained', date: 'Apr 10, 2025', read: '12 min read', excerpt: 'A comprehensive walkthrough of every stage in the digital IC design flow, from RTL coding to tapeout — with tool names at each step.' },
  { id: 3, tag: 'Career', title: 'How to Crack a VLSI Physical Design Interview at Qualcomm', date: 'Mar 28, 2025', read: '8 min read', excerpt: 'Our placement team compiled the most common PD interview questions asked at top semiconductor companies, with detailed answers.' },
  { id: 4, tag: 'Technical', title: 'UVM vs Traditional Testbench: When to Use What', date: 'Mar 15, 2025', read: '9 min read', excerpt: 'A practical comparison of UVM-based and traditional directed testbenches — trade-offs, use cases, and when the overhead is worth it.' },
  { id: 5, tag: 'Industry', title: 'Top 10 Semiconductor Companies Hiring in Bangalore Right Now', date: 'Mar 5, 2025', read: '4 min read', excerpt: 'We analysed 200+ open VLSI roles in Bangalore. Here are the top hiring companies, salaries, and skills they\'re looking for.' },
  { id: 6, tag: 'Career', title: 'Switching from Software to VLSI: A Realistic Roadmap', date: 'Feb 20, 2025', read: '7 min read', excerpt: 'Three alumni who made the switch from software engineering to VLSI design share their exact preparation timeline and what worked.' },
  { id: 7, tag: 'Technical', title: 'Understanding Static Timing Analysis: Setup and Hold Explained', date: 'Feb 8, 2025', read: '10 min read', excerpt: 'STA is the most critical signoff step in digital design. This guide breaks down setup time, hold time, slack, and timing violations clearly.' },
  { id: 8, tag: 'Technical', title: 'Low Power Design Techniques Every VLSI Engineer Should Know', date: 'Jan 25, 2025', read: '11 min read', excerpt: 'Clock gating, power gating, multi-Vt, and dynamic voltage scaling — practical techniques with real impact on silicon power consumption.' },
];

const tagConfig = {
  Industry: { color: '#22d3ee', bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.25)', label: 'INDUSTRY' },
  Technical: { color: '#818cf8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.25)', label: 'TECHNICAL' },
  Career:    { color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)', label: 'CAREER' },
};

const topics = ['All', 'Industry', 'Technical', 'Career'];

function Tag({ tag }) {
  const cfg = tagConfig[tag];
  return (
    <span style={{
      color: cfg.color,
      background: cfg.bg,
      border: `1px solid ${cfg.border}`,
      padding: '2px 10px',
      borderRadius: '4px',
      fontSize: '0.6rem',
      fontFamily: 'Share Tech Mono, monospace',
      letterSpacing: '0.12em',
      fontWeight: 600,
    }}>
      {cfg.label}
    </span>
  );
}

function FeaturedCard({ article }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const cfg = tagConfig[article.tag];
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: 'all 0.6s ease',
      background: 'linear-gradient(135deg, rgba(10,22,50,0.95) 0%, rgba(6,14,35,0.98) 100%)',
      border: `1px solid rgba(56,100,200,0.2)`,
      borderLeft: `3px solid ${cfg.color}`,
      borderRadius: '12px',
      padding: '2rem 2.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '2rem',
      alignItems: 'center',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(56,100,200,0.45)`}
    onMouseLeave={e => e.currentTarget.style.borderColor = `rgba(56,100,200,0.2)`}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: `linear-gradient(90deg, transparent, ${cfg.color}40, transparent)`,
      }} />

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <span style={{
            background: `${cfg.color}15`, border: `1px solid ${cfg.color}40`,
            color: cfg.color, padding: '3px 10px', borderRadius: '4px',
            fontSize: '0.6rem', fontFamily: 'Share Tech Mono, monospace',
            letterSpacing: '0.12em',
          }}>★ FEATURED</span>
          <Tag tag={article.tag} />
          <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.65rem', color: '#475569' }}>
            {article.date} · {article.read}
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 700,
          fontSize: '1.3rem', color: '#e2e8f0', lineHeight: 1.4,
          marginBottom: '12px', maxWidth: '600px',
        }}>{article.title}</h2>
        <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '580px' }}>
          {article.excerpt}
        </p>
        <div style={{
          marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontFamily: 'Share Tech Mono, monospace', fontSize: '0.72rem', color: cfg.color,
        }}>
          READ ARTICLE <span>→</span>
        </div>
      </div>

      <div style={{
        width: '80px', height: '80px', borderRadius: '50%',
        border: `2px solid ${cfg.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        background: `radial-gradient(circle, ${cfg.color}10, transparent)`,
      }}>
        <span style={{ fontSize: '2rem' }}>🇮🇳</span>
      </div>
    </div>
  );
}

function ArticleCard({ article, i }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [hovered, setHovered] = useState(false);
  const cfg = tagConfig[article.tag];

  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `all 0.5s ease ${i * 80}ms`,
      background: hovered
        ? 'linear-gradient(135deg, rgba(12,26,58,0.98), rgba(8,18,42,0.98))'
        : 'linear-gradient(135deg, rgba(8,18,42,0.95), rgba(5,10,26,0.98))',
      border: `1px solid ${hovered ? 'rgba(56,100,200,0.35)' : 'rgba(56,100,200,0.12)'}`,
      borderTop: `2px solid ${hovered ? cfg.color : cfg.color + '40'}`,
      borderRadius: '10px',
      padding: '1.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <Tag tag={article.tag} />
        <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.62rem', color: '#475569' }}>
          {article.date}
        </span>
        <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.62rem', color: '#334155' }}>
          · {article.read}
        </span>
      </div>

      <h3 style={{
        fontFamily: 'Orbitron, monospace', fontWeight: 700,
        fontSize: '0.82rem', color: hovered ? '#f1f5f9' : '#cbd5e1',
        lineHeight: 1.5, transition: 'color 0.3s',
      }}>{article.title}</h3>

      <p style={{
        color: '#475569', fontSize: '0.8rem', lineHeight: 1.65,
        flex: 1,
      }}>{article.excerpt}</p>

      <div style={{
        fontFamily: 'Share Tech Mono, monospace', fontSize: '0.68rem',
        color: hovered ? cfg.color : '#334155',
        transition: 'color 0.3s',
        display: 'flex', alignItems: 'center', gap: '4px',
      }}>
        READ MORE →
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = articles.slice(1).filter(a => {
    const matchFilter = activeFilter === 'All' || a.tag === activeFilter;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
                        a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <>
      <PageHero
        tag="// Knowledge Hub"
        title={<>VLSI Insights &<br />Industry Pulse</>}
        subtitle="Technical deep-dives, career guides, and semiconductor industry analysis — written by working engineers, for engineers."
      />

      <div style={{ position: 'relative', zIndex: 10, padding: '3rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Filter + Search bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {topics.map(t => {
            const active = activeFilter === t;
            const cfg = t !== 'All' ? tagConfig[t] : null;
            return (
              <button key={t} onClick={() => setActiveFilter(t)} style={{
                padding: '6px 16px',
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '6px',
                border: active
                  ? `1px solid ${cfg ? cfg.color : '#3b82f6'}60`
                  : '1px solid rgba(56,100,200,0.15)',
                background: active
                  ? `${cfg ? cfg.color : '#3b82f6'}15`
                  : 'transparent',
                color: active
                  ? (cfg ? cfg.color : '#60a5fa')
                  : '#475569',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                {t}
              </button>
            );
          })}

          <div style={{ marginLeft: 'auto' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                padding: '7px 16px',
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.72rem',
                borderRadius: '8px',
                background: 'rgba(8,18,42,0.8)',
                border: '1px solid rgba(56,100,200,0.2)',
                color: '#94a3b8',
                outline: 'none',
                width: '200px',
              }}
            />
          </div>
        </div>

        {/* Featured */}
        <div style={{ marginBottom: '1.5rem' }}>
          <FeaturedCard article={articles[0]} />
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1rem',
          marginBottom: '4rem',
        }}>
          {filtered.length > 0 ? filtered.map((a, i) => (
            <ArticleCard key={a.id} article={a} i={i} />
          )) : (
            <div style={{
              gridColumn: '1 / -1', textAlign: 'center', padding: '3rem',
              fontFamily: 'Share Tech Mono, monospace', color: '#334155', fontSize: '0.8rem',
            }}>
              // No articles found
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(10,22,50,0.95), rgba(6,14,35,0.98))',
          border: '1px solid rgba(56,100,200,0.2)',
          borderRadius: '14px',
          padding: '2.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, #3b82f680, transparent)',
          }} />

          <div style={{
            fontFamily: 'Share Tech Mono, monospace', fontSize: '0.65rem',
            letterSpacing: '0.2em', color: '#3b82f6', marginBottom: '12px',
          }}>// STAY UPDATED</div>

          <h3 style={{
            fontFamily: 'Orbitron, monospace', fontWeight: 700,
            fontSize: '1.3rem', color: '#e2e8f0', marginBottom: '10px',
          }}>Stay Ahead of the Curve</h3>

          <p style={{
            color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7,
            maxWidth: '420px', margin: '0 auto 1.5rem',
          }}>
            Weekly VLSI insights, industry news, and job alerts — straight to your inbox. No spam, unsubscribe anytime.
          </p>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                padding: '10px 18px',
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.78rem',
                borderRadius: '8px',
                background: 'rgba(5,10,26,0.8)',
                border: '1px solid rgba(56,100,200,0.25)',
                color: '#94a3b8',
                outline: 'none',
                width: '240px',
              }}
            />
            <button style={{
              padding: '10px 24px',
              fontFamily: 'Share Tech Mono, monospace',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.4)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              SUBSCRIBE →
            </button>
          </div>
        </div>

      </div>
    </>
  );
}