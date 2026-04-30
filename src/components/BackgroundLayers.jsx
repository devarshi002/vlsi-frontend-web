import { useEffect, useRef } from 'react';

export default function BackgroundLayers() {
  const particleRef = useRef(null);

  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    const colors = ['#4ade80', '#a78bfa', '#22d3ee', '#86efac'];
    const particles = [];
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = 'particle absolute rounded-full';
      const size = 1 + Math.random() * 2;
      p.style.cssText = `
        left: ${Math.random() * 100}vw;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration: ${9 + Math.random() * 16}s;
        animation-delay: ${Math.random() * 18}s;
        opacity: 0;
        box-shadow: 0 0 6px currentColor;
      `;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach(p => p.remove());
  }, []);

  return (
    <>
      {/* Starfield */}
      <div className="starfield-layer" />

      {/* Circuit grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(92,33,182,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(92,33,182,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <div ref={particleRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
    </>
  );
}
