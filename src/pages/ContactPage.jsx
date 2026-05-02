import { useState } from 'react';
import { submitContactEnquiry } from '../api/enquiry';
import PageHero from '../components/shared/PageHero';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const courses = [
  'RTL Design & Synthesis', 'Physical Design & STA', 'Functional Verification',
  'Analog Layout Design', 'DFT & Low Power Design', 'VLSI Full-Stack Bootcamp',
  'Corporate Training', 'Other',
];
const modes = ['Weekday Batch', 'Weekend Batch', 'Online Live', '1-on-1 Mentorship'];

const contactInfo = [
  { icon: <Phone size={15}/>, label: 'PHONE', value: '+91 80 1234 5678', sub: 'Mon–Sat, 9 AM – 7 PM' },
  { icon: <Mail size={15}/>, label: 'EMAIL', value: 'hello@nanocore.in', sub: 'We reply within 4 hours' },
  { icon: <MapPin size={15}/>, label: 'KORAMANGALA CENTER', value: '#42, 5th Block, Koramangala', sub: 'Bangalore – 560095' },
  { icon: <MapPin size={15}/>, label: 'HSR LAYOUT CENTER', value: '#18, Sector 1, HSR Layout', sub: 'Bangalore – 560102' },
  { icon: <Clock size={15}/>, label: 'LAB HOURS', value: 'Mon–Sat: 8 AM – 9 PM', sub: 'Sunday: 9 AM – 5 PM' },
];

const faqs = [
  { q: 'Do I need prior VLSI experience to enroll?', a: 'No. Our beginner tracks start from digital logic fundamentals. A basic understanding of electronics or computer engineering is helpful but not mandatory.' },
  { q: 'Are the EDA tools included in the fee?', a: 'Yes. All licensed EDA tools (Synopsys, Cadence, Mentor) are included at no extra cost for the duration of your course.' },
  { q: 'Is placement guaranteed?', a: 'Our Full-Stack Bootcamp comes with a job guarantee. All other courses include dedicated placement support with direct referrals to 150+ partner companies.' },
  { q: 'Can I attend the demo class before enrolling?', a: 'Absolutely. We run free demo classes every Saturday at both centers and online. You can register through this contact form.' },
  { q: 'Do you offer EMI or payment plans?', a: 'Yes. We offer 3, 6, and 12-month EMI options with 0% interest through our banking partners. Contact us for details.' },
];

const inputBase = {
  background: '#010812',
  border: '1px solid rgba(0,180,255,0.18)',
  color: '#e2e8f0',
  outline: 'none',
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: '0.8rem',
  width: '100%',
  padding: '10px 14px',
  transition: 'border-color 0.15s ease',
};
const inputFocus = { borderColor: 'rgba(0,180,255,0.55)' };
const inputBlur  = { borderColor: 'rgba(0,180,255,0.18)' };

const labelStyle = {
  display: 'block',
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: '0.6rem',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: 'rgba(0,180,255,0.5)',
  marginBottom: '6px',
};

function Field({ label, children }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', mode: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await submitContactEnquiry(form);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle size={40} style={{ color: '#00b4ff' }} />
        <h3 className="font-mono text-white tracking-widest text-lg">MESSAGE RECEIVED</h3>
        <p className="font-mono text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(168,200,224,0.7)' }}>
          Our counsellor will reach out within{' '}
          <span style={{ color: '#00b4ff' }}>4 business hours.</span>
        </p>
        <button onClick={() => setSubmitted(false)}
          className="font-mono text-xs mt-2 transition-colors"
          style={{ color: 'rgba(0,180,255,0.5)', letterSpacing: '2px' }}
          onMouseEnter={e => e.target.style.color='#00b4ff'}
          onMouseLeave={e => e.target.style.color='rgba(0,180,255,0.5)'}>
          ← SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Field label="Full Name *">
          <input required type="text" placeholder="Arjun Sharma"
            style={inputBase}
            onFocus={e => Object.assign(e.target.style, inputFocus)}
            onBlur={e => Object.assign(e.target.style, inputBlur)}
            value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        </Field>
        <Field label="Email *">
          <input required type="email" placeholder="arjun@email.com"
            style={inputBase}
            onFocus={e => Object.assign(e.target.style, inputFocus)}
            onBlur={e => Object.assign(e.target.style, inputBlur)}
            value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Field label="Phone Number">
          <input type="tel" placeholder="+91 98765 43210"
            style={inputBase}
            onFocus={e => Object.assign(e.target.style, inputFocus)}
            onBlur={e => Object.assign(e.target.style, inputBlur)}
            value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        </Field>
        <Field label="Interested Course">
          <select style={{ ...inputBase, cursor: 'pointer' }}
            onFocus={e => Object.assign(e.target.style, inputFocus)}
            onBlur={e => Object.assign(e.target.style, inputBlur)}
            value={form.course} onChange={e => setForm({...form, course: e.target.value})}>
            <option value="" style={{ background: '#010812', color: '#4a7fa8' }}>Select a course…</option>
            {courses.map(c => <option key={c} value={c} style={{ background: '#010812', color: '#e2e8f0' }}>{c}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Preferred Mode">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
          {modes.map(m => (
            <button type="button" key={m}
              onClick={() => setForm({...form, mode: m})}
              className="font-mono text-xs transition-all duration-150"
              style={{
                padding: '6px 14px',
                letterSpacing: '1px',
                border: form.mode === m ? '1px solid rgba(0,180,255,0.6)' : '1px solid rgba(0,180,255,0.18)',
                background: form.mode === m ? 'rgba(0,180,255,0.1)' : 'transparent',
                color: form.mode === m ? '#00b4ff' : 'rgba(168,200,224,0.4)',
              }}>
              {m}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Message">
        <textarea rows={4} placeholder="Tell us about your background, goals, or any questions..."
          style={{ ...inputBase, resize: 'none', lineHeight: '1.6' }}
          onFocus={e => Object.assign(e.target.style, inputFocus)}
          onBlur={e => Object.assign(e.target.style, inputBlur)}
          value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
      </Field>

      {error && (
        <div className="font-mono text-xs text-center py-2.5 px-4"
          style={{ border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.05)', color: '#f87171' }}>
          {error}
        </div>
      )}

      <button type="submit" disabled={loading}
        className="flex items-center justify-center gap-2 w-full py-3.5 font-mono text-xs tracking-widest uppercase
          transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ border: '1px solid rgba(0,180,255,0.5)', background: 'rgba(0,180,255,0.07)', color: '#00b4ff' }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'rgba(0,180,255,0.14)'; }}
        onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'rgba(0,180,255,0.07)'; }}>
        {loading
          ? <><span className="w-4 h-4 rounded-full border border-electric/30 border-t-electric animate-spin" style={{ borderTopColor: '#00b4ff', borderColor: 'rgba(0,180,255,0.2)' }} /> SENDING...</>
          : <><Send size={13} /> [ SEND ENQUIRY ]</>}
      </button>
    </form>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid rgba(0,180,255,0.12)', background: 'rgba(4,16,32,0.7)' }}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
        style={{ background: 'transparent' }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(0,180,255,0.04)'}
        onMouseLeave={e => e.currentTarget.style.background='transparent'}>
        <span className="font-mono text-xs text-white" style={{ letterSpacing: '0.5px' }}>{faq.q}</span>
        <span className="font-mono flex-shrink-0 transition-transform duration-200 text-electric text-lg"
          style={{ transform: open ? 'rotate(45deg)' : 'none', color: '#00b4ff' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p className="font-mono text-xs leading-relaxed px-5 pb-5 pt-3"
          style={{ color: 'rgba(168,200,224,0.6)', borderTop: '1px solid rgba(0,180,255,0.08)' }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="// GET IN TOUCH"
        title={<>Let's Find the Right<br />Program for You</>}
        subtitle="Our counsellors are VLSI engineers themselves — they'll give you honest advice on which course matches your background and goals."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}
          className="lg:grid-cols-5">
          <div className="lg:col-span-3" style={{ gridColumn: 'span 3' }}>
            <div style={{ border: '1px solid rgba(0,180,255,0.15)', background: 'rgba(4,16,32,0.85)', padding: '32px' }}>
              <div className="font-mono mb-6" style={{ fontSize: '0.62rem', letterSpacing: '4px', color: 'rgba(0,180,255,0.6)', textTransform: 'uppercase' }}>
                // SEND ENQUIRY
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2" style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contactInfo.map((c, i) => (
              <div key={c.label} className="flex gap-4 items-start p-4 group transition-all duration-200"
                style={{ border: '1px solid rgba(0,180,255,0.1)', background: 'rgba(4,16,32,0.7)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='rgba(0,180,255,0.1)'}>
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                  style={{ border: '1px solid rgba(0,180,255,0.2)', background: 'rgba(0,180,255,0.06)', color: '#00b4ff' }}>
                  {c.icon}
                </div>
                <div>
                  <div className="font-mono mb-0.5" style={{ fontSize: '0.58rem', letterSpacing: '2px', color: 'rgba(0,180,255,0.4)', textTransform: 'uppercase' }}>{c.label}</div>
                  <div className="font-mono text-sm text-white">{c.value}</div>
                  <div className="font-mono mt-0.5" style={{ fontSize: '0.65rem', color: 'rgba(168,200,224,0.4)' }}>{c.sub}</div>
                </div>
              </div>
            ))}

            <a href="https://wa.me/918012345678" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 font-mono text-xs tracking-widest uppercase transition-all duration-200"
              style={{ border: '1px solid rgba(37,211,102,0.4)', color: '#25d366', background: 'transparent' }}
onMouseEnter={e => e.currentTarget.style.background='rgba(37,211,102,0.08)'}
onMouseLeave={e => e.currentTarget.style.background='transparent'}>
              💬 [ CHAT ON WHATSAPP ]
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="text-center mb-10">
            <div className="font-mono mb-2" style={{ fontSize: '0.62rem', letterSpacing: '4px', color: 'rgba(0,180,255,0.6)', textTransform: 'uppercase' }}>// FAQS</div>
            <h2 className="font-mono text-white" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>Common Questions</h2>
          </div>
          <div style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {faqs.map((f, i) => <FAQItem key={i} faq={f} />)}
          </div>
        </div>

      </div>
    </>
  );
}