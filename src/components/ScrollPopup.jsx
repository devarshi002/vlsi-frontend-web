import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Zap } from 'lucide-react';

const courses = [
  'RTL Design & Synthesis',
  'Physical Design & STA',
  'Functional Verification',
  'Analog Layout Design',
  'DFT & Low Power Design',
  'VLSI Full-Stack Bootcamp',
];

const STORAGE_KEY = 'nanocore_popup_dismissed';
const SCROLL_THRESHOLD = 10; // % of page scrolled before popup fires

export default function ScrollPopup() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '' });

  useEffect(() => {
    // Don't show again if user already dismissed this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrolled >= SCROLL_THRESHOLD) {
        setVisible(true);
        // Slight delay so CSS transition runs
        setTimeout(() => setAnimateIn(true), 20);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dismiss = () => {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 350);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(dismiss, 2800);
    }, 1200);
  };

  if (!visible) return null;

  const fieldClass = `w-full px-3.5 py-2.5 font-exo text-sm rounded-lg
    bg-space-900/80 border border-plasma-700/30 text-slate-200 placeholder-slate-600
    focus:outline-none focus:border-plasma-500/50 transition-all duration-200`;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-350"
        style={{ opacity: animateIn ? 1 : 0 }}
      />

      {/* Popup card */}
      <div
        className="fixed z-[91] bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2
          sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[480px] sm:max-w-[95vw]
          transition-all duration-350 ease-out"
        style={{
          opacity: animateIn ? 1 : 0,
          transform: animateIn
            ? 'translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) scale(1)'
            : 'translate(var(--tw-translate-x, 0), calc(var(--tw-translate-y, 0) + 40px)) scale(0.96)',
        }}
      >
        <div className="relative rounded-t-2xl sm:rounded-2xl overflow-hidden border border-plasma-700/40
          shadow-[0_0_80px_rgba(0,0,0,0.8),0_0_40px_rgba(92,33,182,0.2)]"
          style={{ background: '#080f1e' }}>

          {/* Top accent */}
          <div className="h-0.5 bg-gradient-to-r from-plasma-600 via-neon-500 to-plasma-400" />

          {/* Glow orb */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(92,33,182,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full flex items-center justify-center
              bg-space-800/80 border border-plasma-700/30 text-slate-500 hover:text-slate-200
              hover:border-plasma-500/50 transition-all duration-150 z-10"
          >
            <X size={13} />
          </button>

          <div className="px-6 pt-5 pb-6">
            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center text-center py-6 gap-3">
                <div className="w-14 h-14 rounded-full bg-neon-500/10 border border-neon-500/30
                  flex items-center justify-center">
                  <CheckCircle size={28} className="text-neon-500" />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white">You're on the list!</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Our counsellor will call you within <span className="text-neon-500 font-semibold">4 hours</span>.
                  Check your email for a confirmation.
                </p>
                <div className="mt-2 font-mono text-[0.65rem] text-slate-600 tracking-widest">
                  Closing in a moment…
                </div>
              </div>
            ) : (
              /* ── Form state ── */
              <>
                {/* Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                    bg-plasma-700/20 border border-plasma-600/30">
                    <Zap size={16} className="text-neon-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="blink-dot w-1.5 h-1.5 rounded-full bg-neon-500 shadow-[0_0_6px_#4ade80]" />
                      <span className="font-mono text-[0.62rem] tracking-[3px] uppercase text-neon-500/80">
                        Free Counselling
                      </span>
                    </div>
                    <h2 className="font-orbitron font-bold text-[1.1rem] text-white leading-snug">
                      Get a Free Demo Class
                    </h2>
                    <p className="text-slate-500 text-[0.78rem] mt-1">
                      Talk to an expert. No commitment needed.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[0.62rem] tracking-[2px] uppercase text-slate-500 mb-1">
                        Full Name *
                      </label>
                      <input
                        required type="text" placeholder="Arjun Sharma"
                        className={fieldClass}
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[0.62rem] tracking-[2px] uppercase text-slate-500 mb-1">
                        Phone *
                      </label>
                      <input
                        required type="tel" placeholder="+91 98765 43210"
                        className={fieldClass}
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[0.62rem] tracking-[2px] uppercase text-slate-500 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email" placeholder="arjun@email.com"
                      className={fieldClass}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[0.62rem] tracking-[2px] uppercase text-slate-500 mb-1">
                      Interested Course
                    </label>
                    <select
                      className={`${fieldClass} cursor-pointer`}
                      value={form.course}
                      onChange={e => setForm({ ...form, course: e.target.value })}
                    >
                      <option value="" style={{ background: '#080f1e' }}>Select a course…</option>
                      {courses.map(c => (
                        <option key={c} value={c} style={{ background: '#080f1e' }}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 flex items-center justify-center gap-2 w-full py-3 font-exo font-bold
                      text-sm tracking-wider uppercase rounded-lg text-white
                      bg-gradient-to-r from-plasma-600 to-neon-700
                      hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5
                      disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <><Send size={14} /> Book Free Demo Class</>
                    )}
                  </button>
                </form>

                {/* Trust line */}
                <p className="text-center font-mono text-[0.6rem] text-slate-600 mt-3 tracking-wide">
                  🔒 No spam · No sales pressure · Cancel anytime
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}