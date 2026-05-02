import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Target, Eye, Star } from 'lucide-react';

const homeDropItems = [
  { href: '/#vision',  icon: <Eye size={13} />,   label: 'VISION',      desc: 'Where we are headed' },
  { href: '/#mission', icon: <Target size={13} />, label: 'MISSION',     desc: 'Our purpose & commitment' },
  { href: '/#values',  icon: <Star size={13} />,   label: 'CORE VALUES', desc: 'Principles we stand by' },
];

const navLinks = [
  { to: '/about',    label: 'ABOUT US' },
  { to: '/careers',  label: 'CAREERS' },
  { to: '/services', label: 'SERVICES' },
  { to: '/contact',  label: 'CONTACT US' },
  { to: '/insights', label: 'INSIGHTS' },
];

function HomeDropdown({ isMobile = false, onClose }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const enter = () => { clearTimeout(timerRef.current); setOpen(true); };
  const leave = () => { timerRef.current = setTimeout(() => setOpen(false), 100); };
  useEffect(() => () => clearTimeout(timerRef.current), []);

  if (isMobile) {
    return (
      <li>
        <button onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 text-xs tracking-widest text-steel-300 hover:text-electric transition-colors w-full">
          HOME <ChevronDown size={11} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="mt-3 ml-3 flex flex-col gap-3 border-l border-blue-electric/20 pl-4">
            {homeDropItems.map(item => (
              <li key={item.label}>
                <a href={item.href} onClick={onClose}
                  className="flex items-center gap-2 text-xs text-steel-400 hover:text-electric transition-colors">
                  <span className="text-electric/60">{item.icon}</span>{item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className="relative z-50" onMouseEnter={enter} onMouseLeave={leave}>
      <Link to="/"
        className={`flex items-center gap-1 text-xs tracking-widest transition-colors duration-200 relative group pb-1
          ${isHome ? 'text-electric' : 'text-steel-300 hover:text-electric'}`}>
        HOME <ChevronDown size={11} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        <span className={`absolute bottom-0 left-0 h-px bg-electric transition-all duration-300
          ${isHome ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </Link>

      <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 pt-4
        transition-all duration-200 origin-top
        ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>

        <div className="relative rounded border overflow-hidden"
          style={{ background: '#020d1a', borderColor: 'rgba(0,180,255,0.25)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(0,180,255,0.08)' }}>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-electric/60 to-transparent" />

          <div className="px-4 pt-3 pb-2">
            <span className="text-[0.58rem] tracking-[4px] uppercase text-electric/40">// NAVIGATE</span>
          </div>

          {homeDropItems.map(item => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 group hover:bg-blue-electric/5 transition-colors duration-150">
              <span className="text-electric/40 group-hover:text-electric transition-colors">{item.icon}</span>
              <div>
                <div className="text-xs tracking-widest text-steel-200 group-hover:text-white transition-colors">{item.label}</div>
                <div className="text-[0.6rem] text-steel-500 mt-0.5">{item.desc}</div>
              </div>
              <span className="ml-auto text-steel-600 group-hover:text-electric transition-colors text-xs">→</span>
            </a>
          ))}

          <div className="px-4 py-3 border-t" style={{ borderColor: 'rgba(0,180,255,0.1)' }}>
            <div className="flex items-center gap-2">
              <span className="blink-dot w-1.5 h-1.5 rounded-full bg-electric" style={{ boxShadow: '0 0 6px #00b4ff' }} />
              <span className="text-[0.58rem] tracking-widest text-electric/50 uppercase">Admissions Open 2025</span>
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
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-glass
      ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.6)]' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none flex-shrink-0">
          <div className="flex items-center gap-0">
            <span className="text-white text-sm tracking-[3px] font-mono">NANO</span>
            <span className="text-electric text-sm tracking-[3px] font-mono">CORE</span>
          </div>
          <span className="text-[0.48rem] tracking-[4px] text-steel-500 uppercase mt-0.5">
            VLSI Training Institute
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          <HomeDropdown />
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link to={link.to}
                  className={`text-xs tracking-widest transition-colors duration-200 relative group
                    ${active ? 'text-electric' : 'text-steel-300 hover:text-electric'}`}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-electric transition-all duration-300
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2 btn-primary-blue text-xs rounded-none flex-shrink-0">
          [ ENROLL NOW ]
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-steel-400 hover:text-electric transition-colors">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden border-t overflow-hidden transition-all duration-300
        ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ borderColor: 'rgba(0,180,255,0.1)', background: '#020d1a' }}>
        <div className="px-6 py-5">
          <ul className="flex flex-col gap-5 mb-5">
            <HomeDropdown isMobile onClose={() => setMobileOpen(false)} />
            {navLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to}
                  className={`text-xs tracking-widest transition-colors
                    ${location.pathname === link.to ? 'text-electric' : 'text-steel-300 hover:text-electric'}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="block w-full text-center px-5 py-3 btn-primary-blue text-xs">
            [ ENROLL NOW ]
          </Link>
        </div>
      </div>
    </nav>
  );
}