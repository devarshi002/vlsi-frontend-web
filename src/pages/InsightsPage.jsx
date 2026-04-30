import PageHero from '../components/shared/PageHero';
import SectionCard from '../components/shared/SectionCard';
import { useInView } from '../hooks/useInView';

const articles = [
  { id: 1, tag: 'Industry', title: 'India\'s Semiconductor Mission: What It Means for VLSI Engineers in 2025', date: 'Apr 18, 2025', read: '6 min read', excerpt: 'The ₹76,000 crore India Semiconductor Mission is creating thousands of new VLSI jobs. Here\'s what skills are in demand and how to position yourself.', featured: true },
  { id: 2, tag: 'Technical', title: 'RTL to GDSII: The Complete Chip Design Flow Explained', date: 'Apr 10, 2025', read: '12 min read', excerpt: 'A comprehensive walkthrough of every stage in the digital IC design flow, from RTL coding to tapeout — with tool names at each step.' },
  { id: 3, tag: 'Career', title: 'How to Crack a VLSI Physical Design Interview at Qualcomm', date: 'Mar 28, 2025', read: '8 min read', excerpt: 'Our placement team compiled the most common PD interview questions asked at top semiconductor companies, with detailed answers.' },
  { id: 4, tag: 'Technical', title: 'UVM vs Traditional Testbench: When to Use What', date: 'Mar 15, 2025', read: '9 min read', excerpt: 'A practical comparison of UVM-based and traditional directed testbenches — trade-offs, use cases, and when the overhead is worth it.' },
  { id: 5, tag: 'Industry', title: 'Top 10 Semiconductor Companies Hiring in Bangalore Right Now', date: 'Mar 5, 2025', read: '4 min read', excerpt: 'We analysed 200+ open VLSI roles in Bangalore. Here are the top hiring companies, salaries, and skills they\'re looking for.' },
  { id: 6, tag: 'Career', title: 'Switching from Software to VLSI: A Realistic Roadmap', date: 'Feb 20, 2025', read: '7 min read', excerpt: 'Three alumni who made the switch from software engineering to VLSI design share their exact preparation timeline and what worked.' },
  { id: 7, tag: 'Technical', title: 'Understanding Static Timing Analysis: Setup and Hold Explained', date: 'Feb 8, 2025', read: '10 min read', excerpt: 'STA is the most critical signoff step in digital design. This guide breaks down setup time, hold time, slack, and timing violations clearly.' },
  { id: 8, tag: 'Technical', title: 'Low Power Design Techniques Every VLSI Engineer Should Know', date: 'Jan 25, 2025', read: '11 min read', excerpt: 'Clock gating, power gating, multi-Vt, and dynamic voltage scaling — practical techniques with real impact on silicon power consumption.' },
];

const tagColors = {
  Industry: 'bg-neon-500/10 border-neon-500/30 text-neon-500',
  Technical: 'bg-plasma-700/15 border-plasma-600/30 text-plasma-400',
  Career: 'bg-[#22d3ee]/10 border-[#22d3ee]/30 text-[#22d3ee]',
};

const topics = ['All', 'Industry', 'Technical', 'Career'];

function ArticleCard({ article, i, featured = false }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref}
      className={`glass-card rounded-xl overflow-hidden card-hover cursor-pointer transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        ${featured ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${i * 80}ms` }}>
      {/* Color bar */}
      <div className={`h-0.5 ${article.tag === 'Technical' ? 'bg-gradient-to-r from-plasma-600 to-plasma-400' : article.tag === 'Career' ? 'bg-gradient-to-r from-[#22d3ee] to-plasma-400' : 'bg-gradient-to-r from-neon-500 to-[#22d3ee]'}`} />
      <div className={`p-7 ${featured ? 'lg:flex lg:gap-8 lg:items-center' : ''}`}>
        <div className={featured ? 'lg:flex-1' : ''}>
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-2.5 py-1 rounded-full font-mono text-[0.62rem] tracking-wide border ${tagColors[article.tag]}`}>
              {article.tag}
            </span>
            <span className="font-mono text-[0.65rem] text-slate-600">{article.date}</span>
            <span className="font-mono text-[0.65rem] text-slate-600">· {article.read}</span>
          </div>
          <h3 className={`font-orbitron font-bold text-slate-100 leading-snug mb-3
            ${featured ? 'text-xl' : 'text-[0.9rem]'}`}>
            {article.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">{article.excerpt}</p>
          <span className="font-mono text-[0.72rem] text-neon-500 hover:text-neon-400 transition-colors">
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        tag="// Knowledge Hub"
        title={<>VLSI Insights &<br />Industry Pulse</>}
        subtitle="Technical deep-dives, career guides, and semiconductor industry analysis — written by working engineers, for engineers."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto">

        {/* Filter tabs */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {topics.map((t, i) => (
            <button key={t}
              className={`px-4 py-2 font-mono text-[0.72rem] tracking-widest uppercase rounded-lg
                border transition-all duration-200
                ${i === 0
                  ? 'bg-plasma-700/20 border-plasma-500/40 text-plasma-400'
                  : 'border-plasma-700/20 text-slate-500 hover:border-plasma-600/30 hover:text-plasma-400'}`}>
              {t}
            </button>
          ))}
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="px-4 py-2 font-mono text-[0.72rem] rounded-lg bg-space-800/60
                border border-plasma-700/25 text-slate-400 placeholder-slate-600
                focus:outline-none focus:border-plasma-500/50 w-48"
            />
          </div>
        </div>

        {/* Featured article */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ArticleCard article={articles[0]} i={0} featured />
        </div>

        {/* Rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {articles.slice(1).map((a, i) => (
            <ArticleCard key={a.id} article={a} i={i + 1} />
          ))}
        </div>

        {/* Newsletter */}
        <SectionCard className="text-center hover:border-neon-500/25">
          <div className="text-3xl mb-4">📡</div>
          <h3 className="font-orbitron font-bold text-xl text-slate-100 mb-2">Stay Ahead of the Curve</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Weekly VLSI insights, industry news, and job alerts — straight to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2.5 font-mono text-sm rounded-lg bg-space-800/80
                border border-plasma-700/30 text-slate-300 placeholder-slate-600
                focus:outline-none focus:border-plasma-500/50 w-64"
            />
            <button className="px-5 py-2.5 font-exo font-semibold text-sm tracking-wide
              bg-gradient-to-r from-plasma-600 to-neon-700 text-white rounded
              hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-200">
              Subscribe
            </button>
          </div>
        </SectionCard>

      </div>
    </>
  );
}
