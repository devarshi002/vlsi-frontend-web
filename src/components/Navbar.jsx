import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Target, Eye, Star } from 'lucide-react';

const homeDropItems = [
  { href: '#vision',  icon: <Eye size={15} />,   label: 'Vision',      desc: 'Where we are headed' },
  { href: '#mission', icon: <Target size={15} />, label: 'Mission',     desc: 'Our purpose & commitment' },
  { href: '#values',  icon: <Star size={15} />,   label: 'Core Values', desc: 'Principles we stand by' },
];

const navLinks = [
  { to: '/about',    label: 'About Us' },
  { to: '/careers',  label: 'Careers' },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact Us' },
  { to: '/insights', label: 'Insights' },
];

function HomeDropdown({ isMobile = false, onClose }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleMouseEnter = () => { clearTimeout(timerRef.current); setOpen(true); };
  const handleMouseLeave = () => { timerRef.current = setTimeout(() => setOpen(false), 80); };
  useEffect(() => () => clearTimeout(timerRef.current), []);

  /* ── Mobile ── */
  if (isMobile) {
    return (
      <li>
        <button onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase
            text-slate-400 hover:text-neon-500 transition-colors w-full">
          Home
          <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="mt-3 ml-3 flex flex-col gap-3 border-l border-plasma-700/40 pl-4">
            {homeDropItems.map(item => (
              <li key={item.label}>
                <Link to={`/${item.href}`} onClick={onClose}
                  className="flex items-center gap-2 text-xs text-slate-500 hover:text-neon-500 transition-colors">
                  <span className="text-plasma-400">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  /* ── Desktop ── */
  return (
    <li className="relative z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to="/"
        className={`flex items-center gap-1 font-mono text-xs tracking-widest uppercase
          transition-colors duration-200 relative group pb-1
          ${isHome ? 'text-neon-500' : 'text-slate-400 hover:text-neon-500'}`}>
        Home
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180 text-neon-500' : ''}`} />
        <span className={`absolute bottom-0 left-0 h-px bg-neon-500 transition-all duration-300
          ${isHome ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </Link>

      <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-3
        transition-all duration-200 origin-top
        ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>

        <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-3 h-3
          rotate-45 bg-space-800 border-l border-t border-plasma-700/40 z-10" />

        <div className="relative rounded-xl overflow-hidden border border-plasma-700/40
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-1.5" style={{ background: "#0a1628" }}>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-500/50 to-transparent" />

          <div className="px-2 pt-2.5 pb-1.5">
            <span className="font-mono text-[0.6rem] tracking-[3px] uppercase text-plasma-400/60">// Navigate</span>
          </div>

          {homeDropItems.map(item => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg group hover:bg-plasma-700/15 transition-all duration-150">
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0
                bg-plasma-700/20 border border-plasma-600/25 text-plasma-400
                group-hover:bg-neon-500/10 group-hover:border-neon-500/30 group-hover:text-neon-500 transition-all duration-150">
                {item.icon}
              </div>
              <div>
                <div className="font-exo font-semibold text-[0.82rem] text-slate-200 group-hover:text-white transition-colors">
                  {item.label}
                </div>
                <div className="font-mono text-[0.62rem] text-slate-600 mt-0.5">{item.desc}</div>
              </div>
              <span className="ml-auto text-slate-700 group-hover:text-neon-500 group-hover:translate-x-0.5 transition-all duration-150 text-xs">→</span>
            </a>
          ))}

          <div className="px-3 pb-2.5 pt-1">
            <div className="flex items-center gap-1.5 border-t border-plasma-700/20 pt-2.5">
              <span className="blink-dot w-1.5 h-1.5 rounded-full bg-neon-500 shadow-[0_0_6px_#4ade80]" />
              <span className="font-mono text-[0.6rem] text-neon-500/60 tracking-wide">Admissions Open — Batch 2025</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav
      ${scrolled ? 'shadow-lg shadow-black/60' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none flex-shrink-0">
          <span className="font-orbitron font-black text-lg tracking-widest text-gradient-logo">NanoCore</span>
          <span className="font-mono text-[0.5rem] tracking-[4px] text-plasma-400/70 uppercase mt-0.5">
            VLSI Training Institute
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          <HomeDropdown />
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link to={link.to}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 relative group
                    ${active ? 'text-neon-500' : 'text-slate-400 hover:text-neon-500'}`}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-neon-500 transition-all duration-300
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2 font-exo font-semibold text-sm
            tracking-wider uppercase bg-gradient-to-r from-plasma-600 to-neon-700 text-white rounded
            hover:shadow-[0_0_24px_rgba(124,58,237,0.6)] hover:-translate-y-0.5
            transition-all duration-200 flex-shrink-0">
          Enroll Now
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-slate-400 hover:text-neon-500 transition-colors p-1">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden border-t border-plasma-700/30 bg-space-900/98 backdrop-blur-xl
        overflow-hidden transition-all duration-300
        ${mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-5">
          <ul className="flex flex-col gap-5 mb-5">
            <HomeDropdown isMobile onClose={() => setMobileOpen(false)} />
            {navLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors
                    ${location.pathname === link.to ? 'text-neon-500' : 'text-slate-400 hover:text-neon-500'}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact"
            className="block w-full text-center px-5 py-3 font-exo font-semibold text-sm
              tracking-wider uppercase bg-gradient-to-r from-plasma-600 to-neon-700 text-white rounded">
            Enroll Now
          </Link>
        </div>
      </div>
    </nav>
  );
}