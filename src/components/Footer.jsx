import { Link } from 'react-router-dom';

const footerLinks = {
  Courses: [
    { label: 'RTL Design', to: '/services' },
    { label: 'Physical Design', to: '/services' },
    { label: 'Functional Verification', to: '/services' },
    { label: 'Analog Layout', to: '/services' },
    { label: 'DFT & Low Power', to: '/services' },
    { label: 'Full-Stack Bootcamp', to: '/services' },
  ],
  Institute: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Faculty', to: '/about' },
    { label: 'Placement Cell', to: '/careers' },
    { label: 'Hiring Partners', to: '/about' },
    { label: 'Success Stories', to: '/insights' },
    { label: 'Blog & Resources', to: '/insights' },
  ],
  Connect: [
    { label: 'LinkedIn', to: '/' },
    { label: 'YouTube', to: '/' },
    { label: 'Telegram Group', to: '/' },
    { label: 'WhatsApp', to: '/' },
    { label: 'Instagram', to: '/' },
    { label: 'Contact Us', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-plasma-700/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="mb-4">
            <div className="font-orbitron font-black text-lg tracking-widest text-gradient-logo">NanoCore</div>
            <div className="font-mono text-[0.5rem] tracking-[5px] text-plasma-400/60 uppercase mt-0.5">VLSI Training Institute</div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            India's most advanced VLSI training institute. Empowering engineers with silicon-level expertise since 2012.
          </p>
          <p className="font-mono text-[0.68rem] text-neon-500/60">📍 Koramangala · HSR Layout · Online</p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h5 className="font-orbitron font-semibold text-[0.72rem] tracking-[2px] uppercase text-slate-200 mb-5">{title}</h5>
            <ul className="flex flex-col gap-2.5">
              {links.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-slate-500 hover:text-neon-500 transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-plasma-700/15 px-6 lg:px-16 py-5 flex flex-col sm:flex-row
        items-center justify-between gap-3 max-w-7xl mx-auto">
        <p className="font-mono text-[0.7rem] text-slate-600">© 2025 NanoCore VLSI Institute. All rights reserved.</p>
        <p className="font-mono text-[0.68rem] text-neon-500/40">// Designed for engineers · Built for Silicon Valley</p>
      </div>
    </footer>
  );
}
