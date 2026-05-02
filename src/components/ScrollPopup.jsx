import { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { submitPopupEnquiry } from '../api/enquiry';

const courses = [
  'RTL Design & Synthesis','Physical Design & STA','Functional Verification',
  'Analog Layout Design','DFT & Low Power Design','VLSI Full-Stack Bootcamp',
];

const STORAGE_KEY = 'nanocore_popup_dismissed';
const SCROLL_THRESHOLD = 10;

export default function ScrollPopup() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '' });

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrolled >= SCROLL_THRESHOLD) {
        setVisible(true);
        setTimeout(() => setAnimateIn(true), 20);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dismiss = () => {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitPopupEnquiry(form);
      setSubmitted(true);
      setTimeout(dismiss, 2800);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  const fieldClass = `w-full px-3.5 py-2.5 font-mono text-xs rounded-none
    border text-steel-200 placeholder-steel-600 outline-none transition-all duration-150`
  const fieldStyle = { background: '#010812', borderColor: 'rgba(0,180,255,0.2)' };
  const fieldFocusStyle = { borderColor: 'rgba(0,180,255,0.5)' };

  return (
    <>
      {/* Backdrop */}
      <div onClick={dismiss} className="fixed inset-0 z-[90] transition-opacity duration-300"
        style={{ background: 'rgba(0,5,15,0.75)', backdropFilter: 'blur(4px)',
          opacity: animateIn ? 1 : 0 }} />

      {/* Popup */}
      <div className="fixed z-[91] bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2
        sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[460px] sm:max-w-[95vw]
        transition-all duration-300 ease-out"
        style={{ opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'translate(var(--tw-translate-x,0), var(--tw-translate-y,0)) scale(1)'
            : 'translate(var(--tw-translate-x,0), calc(var(--tw-translate-y,0) + 32px)) scale(0.97)' }}>

        <div className="relative overflow-hidden"
          style={{ background: '#020d1a', border: '1px solid rgba(0,180,255,0.25)',
            boxShadow: '0 0 80px rgba(0,0,0,0.9), 0 0 40px rgba(0,100,200,0.1)' }}>

          {/* Top accent */}
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, #00b4ff, transparent)' }} />

          {/* Close */}
          <button onClick={dismiss}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center
              font-mono text-steel-500 hover:text-electric transition-colors z-10"
            style={{ border: '1px solid rgba(0,180,255,0.15)', background: 'rgba(0,0,0,0.4)' }}>
            <X size={13} />
          </button>

          <div className="px-6 pt-5 pb-6">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8 gap-3">
                <CheckCircle size={36} className="text-electric" />
                <h3 className="font-mono text-white tracking-widest">YOU'RE ON THE LIST</h3>
                <p className="font-mono text-[0.72rem] text-steel-400 leading-relaxed max-w-xs">
                  Our counsellor will contact you within{' '}
                  <span className="text-electric">4 hours.</span>
                </p>
                <div className="font-mono text-[0.6rem] text-steel-600 tracking-widest mt-2">
                  CLOSING SHORTLY...
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="blink-dot w-1.5 h-1.5 rounded-full"
                      style={{ background: '#ef4444', boxShadow: '0 0 6px #ef4444' }} />
                    <span className="font-mono text-[0.6rem] tracking-[3px] uppercase" style={{ color: '#ef4444' }}>
                      FREE COUNSELLING
                    </span>
                  </div>
                  <h2 className="font-mono text-lg text-white tracking-wide">Get a Free Demo Class</h2>
                  <p className="font-mono text-[0.68rem] text-steel-500 mt-1">
                    Talk to an expert. No commitment needed.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[0.58rem] tracking-[2px] uppercase mb-1" style={{ color: '#ffffff' }}>
                        Full Name *
                      </label>
                      <input required type="text" placeholder="Arjun Sharma"
                        className={fieldClass} style={fieldStyle}
                        onFocus={e => Object.assign(e.target.style, fieldFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, fieldStyle)}
                        value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="block font-mono text-[0.58rem] tracking-[2px] uppercase mb-1" style={{ color: '#ffffff' }}>
                        Phone *
                      </label>
                      <input required type="tel" placeholder="+91 98765 43210"
                        className={fieldClass} style={fieldStyle}
                        onFocus={e => Object.assign(e.target.style, fieldFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, fieldStyle)}
                        value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[0.58rem] tracking-[2px] uppercase mb-1" style={{ color: '#ffffff' }}>
                      Email Address
                    </label>
                    <input type="email" placeholder="arjun@email.com"
                      className={fieldClass} style={fieldStyle}
                      onFocus={e => Object.assign(e.target.style, fieldFocusStyle)}
                      onBlur={e => Object.assign(e.target.style, fieldStyle)}
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>

                  <div>
                    <label className="block font-mono text-[0.58rem] tracking-[2px] uppercase mb-1" style={{ color: '#ffffff' }}>
                      Interested Course
                    </label>
                    <select className={fieldClass} style={{ ...fieldStyle, cursor: 'pointer' }}
                      onFocus={e => Object.assign(e.target.style, fieldFocusStyle)}
                      onBlur={e => Object.assign(e.target.style, fieldStyle)}
                      value={form.course} onChange={e => setForm({...form, course: e.target.value})}>
                      <option value="" style={{ background: '#010812' }}>Select a course…</option>
                      {courses.map(c => <option key={c} value={c} style={{ background: '#010812' }}>{c}</option>)}
                    </select>
                  </div>

                  {error && (
                    <div className="px-3 py-2 font-mono text-[0.65rem] text-red-400 text-center"
                      style={{ border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.05)' }}>
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={loading}
                    className="mt-1 flex items-center justify-center gap-2 w-full py-3
                      font-mono text-xs tracking-[2px] uppercase text-electric
                      disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    style={{ border: '1px solid rgba(0,180,255,0.5)', background: 'rgba(0,180,255,0.06)' }}
                    onMouseEnter={e => !loading && (e.target.style.background='rgba(0,180,255,0.12)')}
                    onMouseLeave={e => !loading && (e.target.style.background='rgba(0,180,255,0.06)')}>
                    {loading ? (
                      <><span className="w-4 h-4 border border-electric/30 border-t-electric rounded-full animate-spin" /> SUBMITTING...</>
                    ) : (
                      <><Send size={13} /> [ BOOK FREE DEMO CLASS ]</>
                    )}
                  </button>
                </form>

                <p className="text-center font-mono text-[0.58rem] text-steel-700 mt-3 tracking-widest">
                  NO SPAM · NO SALES PRESSURE · CANCEL ANYTIME
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}