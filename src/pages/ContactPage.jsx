import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import SectionCard from '../components/shared/SectionCard';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const courses = ['RTL Design & Synthesis', 'Physical Design & STA', 'Functional Verification', 'Analog Layout Design', 'DFT & Low Power Design', 'VLSI Full-Stack Bootcamp', 'Corporate Training', 'Other'];
const modes = ['Weekday Batch', 'Weekend Batch', 'Online Live', '1-on-1 Mentorship'];

const contactInfo = [
  { icon: <Phone size={16}/>, label: 'Phone', value: '+91 80 1234 5678', sub: 'Mon–Sat, 9 AM – 7 PM' },
  { icon: <Mail size={16}/>, label: 'Email', value: 'hello@nanocore.in', sub: 'We reply within 4 hours' },
  { icon: <MapPin size={16}/>, label: 'Koramangala Center', value: '#42, 5th Block, Koramangala', sub: 'Bangalore – 560095' },
  { icon: <MapPin size={16}/>, label: 'HSR Layout Center', value: '#18, Sector 1, HSR Layout', sub: 'Bangalore – 560102' },
  { icon: <Clock size={16}/>, label: 'Lab Hours', value: 'Mon–Sat: 8 AM – 9 PM', sub: 'Sunday: 9 AM – 5 PM' },
];

const faqs = [
  { q: 'Do I need prior VLSI experience to enroll?', a: 'No. Our beginner tracks start from digital logic fundamentals. A basic understanding of electronics or computer engineering is helpful but not mandatory.' },
  { q: 'Are the EDA tools included in the fee?', a: 'Yes. All licensed EDA tools (Synopsys, Cadence, Mentor) are included at no extra cost for the duration of your course.' },
  { q: 'Is placement guaranteed?', a: 'Our Full-Stack Bootcamp comes with a job guarantee. All other courses include dedicated placement support with direct referrals to 150+ partner companies.' },
  { q: 'Can I attend the demo class before enrolling?', a: 'Absolutely. We run free demo classes every Saturday at both centers and online. You can register through this contact form.' },
  { q: 'Do you offer EMI or payment plans?', a: 'Yes. We offer 3, 6, and 12-month EMI options with 0% interest through our banking partners. Contact us for details.' },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', mode: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle size={48} className="text-neon-500" />
        <h3 className="font-orbitron font-bold text-xl text-slate-100">Message Received!</h3>
        <p className="text-slate-400 text-sm max-w-xs">
          Our counsellor will reach out within 4 business hours. Check your email for a confirmation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 font-mono text-xs text-plasma-400 hover:text-neon-500 transition-colors underline">
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass = `w-full px-4 py-3 font-exo text-sm rounded-lg bg-space-800/60
    border border-plasma-700/25 text-slate-200 placeholder-slate-600
    focus:outline-none focus:border-plasma-500/50 focus:bg-space-800/90 transition-all duration-200`;

  const labelClass = 'block font-mono text-[0.68rem] tracking-[2px] uppercase text-slate-500 mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input required type="text" placeholder="Arjun Sharma" className={fieldClass}
            value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input required type="email" placeholder="arjun@email.com" className={fieldClass}
            value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="tel" placeholder="+91 98765 43210" className={fieldClass}
            value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        </div>
        <div>
          <label className={labelClass}>Interested Course</label>
          <select className={`${fieldClass} cursor-pointer`}
            value={form.course} onChange={e => setForm({...form, course: e.target.value})}>
            <option value="" className="bg-space-800">Select a course…</option>
            {courses.map(c => <option key={c} value={c} className="bg-space-800">{c}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Preferred Mode</label>
        <div className="flex flex-wrap gap-3">
          {modes.map(m => (
            <button type="button" key={m}
              onClick={() => setForm({...form, mode: m})}
              className={`px-3 py-1.5 font-mono text-[0.68rem] tracking-wide rounded-lg border transition-all duration-150
                ${form.mode === m
                  ? 'bg-plasma-700/25 border-plasma-500/50 text-plasma-300'
                  : 'border-plasma-700/20 text-slate-500 hover:border-plasma-600/35 hover:text-plasma-400'}`}>
              {m}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea rows={4} placeholder="Tell us about your background, goals, or any questions..."
          className={`${fieldClass} resize-none`}
          value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
      </div>
      <button type="submit" disabled={loading}
        className="flex items-center justify-center gap-2 px-6 py-3.5 font-exo font-bold
          text-sm tracking-wider uppercase bg-gradient-to-r from-plasma-600 to-neon-700
          text-white rounded hover:shadow-[0_0_30px_rgba(124,58,237,0.55)]
          hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-200">
        {loading ? (
          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
        ) : (
          <><Send size={15} /> Send Enquiry</>
        )}
      </button>
    </form>
  );
}

function FAQItem({ faq, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-plasma-700/20 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left
          hover:bg-plasma-700/8 transition-colors duration-200">
        <span className="font-exo font-semibold text-[0.88rem] text-slate-200">{faq.q}</span>
        <span className={`font-mono text-plasma-400 text-lg flex-shrink-0 transition-transform duration-200
          ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-plasma-700/15 pt-4">{faq.a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="// Get in Touch"
        title={<>Let's Find the Right<br />Program for You</>}
        subtitle="Our counsellors are VLSI engineers themselves — they'll give you honest advice on which course matches your background and goals."
      />

      <div className="relative z-10 py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-20">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <div className="lg:col-span-3">
            <SectionCard className="hover:border-plasma-500/30">
              <span className="font-mono text-[0.68rem] tracking-[3px] uppercase text-neon-500 block mb-5">// Send Enquiry</span>
              <ContactForm />
            </SectionCard>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((c, i) => (
              <SectionCard key={c.label} delay={i * 60} className="hover:border-neon-500/25 !p-5">
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                    bg-plasma-700/15 border border-plasma-600/25 text-plasma-400">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[0.62rem] tracking-[2px] uppercase text-slate-600 mb-0.5">{c.label}</div>
                    <div className="font-exo font-medium text-sm text-slate-200">{c.value}</div>
                    <div className="font-mono text-[0.65rem] text-slate-500 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              </SectionCard>
            ))}

            {/* WhatsApp CTA */}
            <a href="https://wa.me/918012345678" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-exo font-semibold text-sm
                tracking-wide border border-neon-500/40 text-neon-500
                hover:bg-neon-500/8 hover:border-neon-500 transition-all duration-200 text-center">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="text-center mb-10">
            <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-2">// FAQs</span>
            <h2 className="font-orbitron font-bold text-gradient-plasma" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((f, i) => <FAQItem key={i} faq={f} i={i} />)}
          </div>
        </div>

      </div>
    </>
  );
}
