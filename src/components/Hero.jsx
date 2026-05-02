import ChipSVG from './ChipSVG';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 overflow-hidden">

      {/* Blue glow orbs */}
      <div className="absolute pointer-events-none"
        style={{ width: 600, height: 600, top: -200, right: -100, filter: 'blur(100px)',
          background: 'radial-gradient(circle, rgba(0,100,200,0.15) 0%, transparent 70%)',
          animation: 'pulseBlue 6s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none"
        style={{ width: 400, height: 400, bottom: -100, left: -80, filter: 'blur(80px)',
          background: 'radial-gradient(circle, rgba(0,60,160,0.12) 0%, transparent 70%)',
          animation: 'pulseBlue 9s ease-in-out 2s infinite' }} />

      <div className="relative max-w-3xl">

        {/* Badge */}
        <div className="anim-1 inline-flex items-center gap-2 px-3 py-1.5 mb-8 tag-blue rounded-none">
          <span className="blink-dot w-1.5 h-1.5 rounded-full bg-electric"
            style={{ boxShadow: '0 0 6px #00b4ff' }} />
          BENGALURU CHIP VERIFICATION INSTITUTE
        </div>

        {/* Headline */}
        <h1 className="anim-2 font-mono leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
          <span className="block text-white">Train for the</span>
          <span className="block text-electric" style={{ textShadow: '0 0 30px rgba(0,180,255,0.4)' }}>
            Future of VLSI
          </span>
          <span className="block text-white">Design.</span>
        </h1>

        {/* Sub */}
        <p className="anim-3 text-steel-300 text-sm leading-relaxed mb-10 max-w-xl font-mono">
          Industry-aligned courses in RTL Design, Physical Design, UVM Verification,
          and DFT — built for engineers ready to lead in semiconductor design.
        </p>

        {/* Actions */}
        <div className="anim-4 flex flex-wrap gap-4">
          <a href="/services"
            className="px-6 py-3 btn-primary-blue text-xs">
            [ BROWSE COURSES ]
          </a>
          <a href="/contact"
            className="px-6 py-3 btn-secondary-blue text-xs">
            [ TALK TO US ]
          </a>
        </div>

        {/* Mini stats */}
        <div className="anim-4 flex gap-10 mt-14 pt-8"
          style={{ borderTop: '1px solid rgba(0,180,255,0.1)' }}>
          {[
            { n: '2500+', l: 'ENGINEERS TRAINED' },
            { n: '98%',   l: 'PLACEMENT RATE' },
            { n: '150+',  l: 'HIRING PARTNERS' },
          ].map(s => (
            <div key={s.l}>
              <div className="font-mono text-2xl text-electric mb-0.5"
                style={{ textShadow: '0 0 20px rgba(0,180,255,0.5)' }}>{s.n}</div>
              <div className="font-mono text-[0.6rem] tracking-[3px] text-steel-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chip visual */}
      <div className="chip-float hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] opacity-70">
        <ChipSVG />
      </div>
    </section>
  );
}