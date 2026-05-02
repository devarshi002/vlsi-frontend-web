import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0"
        style={{ borderTop: '1px solid rgba(0,180,255,0.1)', borderBottom: '1px solid rgba(0,180,255,0.1)',
          background: 'linear-gradient(135deg, rgba(0,60,160,0.06), rgba(0,20,80,0.04))' }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="font-mono text-[0.65rem] tracking-[4px] uppercase text-electric/60 mb-4">
          // JOIN THE NEXT BATCH
        </div>
        <h2 className="font-mono text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          Ready to Design Silicon?
        </h2>
        <p className="font-mono text-sm text-steel-400 mb-10 leading-relaxed">
          Next batch starting <span className="text-electric">June 2025.</span> Limited seats. Free demo every weekend.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#"
            className="px-8 py-3 btn-primary-blue text-xs">
            [ APPLY FOR FREE DEMO ]
          </a>
          <a href="tel:+918012345678"
            className="flex items-center gap-2 px-8 py-3 btn-secondary-blue text-xs">
            <Phone size={13} /> +91 80 1234 5678
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[
            { icon: <MapPin size={14}/>, label: 'Koramangala & HSR', sub: 'Bangalore Centers' },
            { icon: <Mail size={14}/>, label: 'hello@nanocore.in', sub: 'Email Us Anytime' },
            { icon: <Phone size={14}/>, label: '+91 80 1234 5678', sub: 'Mon–Sat, 9AM–7PM' },
          ].map(c => (
            <div key={c.label} className="flex flex-col items-center gap-1.5 px-4 py-4 group"
              style={{ border: '1px solid rgba(0,180,255,0.1)', background: 'rgba(4,16,32,0.6)' }}>
              <div className="text-electric/50 group-hover:text-electric transition-colors">{c.icon}</div>
              <div className="font-mono text-xs text-steel-200">{c.label}</div>
              <div className="font-mono text-[0.62rem] text-steel-600">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}