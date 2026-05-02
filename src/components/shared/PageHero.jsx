export default function PageHero({ tag, title, subtitle, children }) {
  return (
    <section className="relative z-10 pt-32 pb-16 px-6 lg:px-16 overflow-hidden">
      <div className="absolute pointer-events-none"
        style={{ width: 500, height: 500, top: -200, right: -50, filter: 'blur(100px)',
          background: 'radial-gradient(circle, rgba(0,80,180,0.12) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-[0.65rem] tracking-[4px] uppercase text-electric/60 mb-3 anim-1">
          {tag}
        </div>
        <h1 className="font-mono text-white anim-2 mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)', lineHeight: 1.1 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="anim-3 font-mono text-sm text-steel-400 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.2), transparent)' }} />
    </section>
  );
}