import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 border-y border-plasma-700/20"
        style={{ background: 'linear-gradient(135deg, rgba(92,33,182,0.1), rgba(74,222,128,0.05))' }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="font-mono text-[0.72rem] tracking-[4px] uppercase text-neon-500 block mb-4">
          // Join the Next Batch
        </span>
        <h2 className="font-orbitron font-bold text-gradient-plasma mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Ready to Design Silicon?
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Join the next batch starting <span className="text-neon-500 font-semibold">June 2025</span>.
          Limited seats available. Free demo class every weekend.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#"
            className="px-10 py-3.5 font-exo font-bold text-sm tracking-wider uppercase
              bg-gradient-to-r from-plasma-600 to-plasma-700 text-white rounded
              border border-plasma-400/25
              hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:-translate-y-0.5
              transition-all duration-200">
            Apply for Free Demo Class
          </a>
          <a href="tel:+918012345678"
            className="flex items-center gap-2 px-8 py-3.5 font-exo font-semibold text-sm tracking-wider uppercase
              bg-transparent text-neon-500 rounded border border-neon-500/40
              hover:bg-neon-500/8 hover:border-neon-500 hover:-translate-y-0.5
              transition-all duration-200">
            <Phone size={15} />
            +91 80 1234 5678
          </a>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { icon: <MapPin size={16}/>, label: 'Koramangala & HSR', sub: 'Bangalore Centers' },
            { icon: <Mail size={16}/>, label: 'hello@nanocore.in', sub: 'Email Us Anytime' },
            { icon: <Phone size={16}/>, label: '+91 80 1234 5678', sub: 'Mon–Sat, 9AM–7PM' },
          ].map(c => (
            <div key={c.label}
              className="flex flex-col items-center gap-1.5 px-4 py-4 rounded-lg
                bg-space-800/50 border border-plasma-700/20 hover:border-plasma-600/40
                transition-colors duration-200 group">
              <div className="text-plasma-400 group-hover:text-neon-500 transition-colors">{c.icon}</div>
              <div className="font-exo font-medium text-sm text-slate-200">{c.label}</div>
              <div className="font-mono text-[0.65rem] text-slate-500">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
