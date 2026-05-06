import { Link } from 'react-router-dom';
import COMPANY from '../config/company';
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
    <footer className="relative z-10" style={{ borderTop: '1px solid rgba(0,180,255,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="mb-5">
            <div className="flex items-center gap-0 mb-1">
              <span className="font-mono text-white tracking-[3px]">{COMPANY.name}</span>
            </div>
            <div className="font-mono text-[0.48rem] tracking-[4px] text-steel-600 uppercase">
              {COMPANY.tagline}
            </div>
          </div>
          <p className="font-mono text-[0.7rem] text-steel-600 leading-relaxed mb-4">
            {COMPANY.tagline}. Empowering engineers since {COMPANY.founded}.
          </p>
          <p className="font-mono text-[0.65rem] text-electric/50">
            ▸ Koramangala · HSR Layout · Online
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h5 className="font-mono text-[0.65rem] tracking-[3px] uppercase text-steel-400 mb-5">
              {title}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {links.map(link => (
                <li key={link.label}>
                  <Link to={link.to}
                    className="font-mono text-[0.7rem] text-steel-600 hover:text-electric transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto"
        style={{ borderTop: '1px solid rgba(0,180,255,0.06)' }}>
        <p className="font-mono text-[0.62rem] text-steel-700">
          © {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved
        </p>
        <p className="font-mono text-[0.6rem] text-electric/25">
          // Designed for engineers · Built for Silicon Valley
        </p>
      </div>
    </footer>
  );
}