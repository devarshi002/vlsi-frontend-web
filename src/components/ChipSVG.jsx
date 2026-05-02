export default function ChipSVG() {
  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <filter id="glow-b">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#041020"/>
          <stop offset="100%" stopColor="#020d1a"/>
        </linearGradient>
      </defs>

      {/* Outer traces */}
      <g stroke="rgba(0,180,255,0.2)" strokeWidth="1" fill="none">
        <line x1="60" y1="130" x2="20" y2="130"/><line x1="20" y1="130" x2="20" y2="80"/>
        <line x1="60" y1="160" x2="10" y2="160"/>
        <line x1="60" y1="190" x2="20" y2="190"/><line x1="20" y1="190" x2="20" y2="240"/>
        <line x1="60" y1="220" x2="10" y2="220"/>
        <line x1="60" y1="260" x2="20" y2="260"/>
        <line x1="360" y1="130" x2="400" y2="130"/><line x1="400" y1="130" x2="400" y2="80"/>
        <line x1="360" y1="160" x2="410" y2="160"/>
        <line x1="360" y1="220" x2="410" y2="220"/>
        <line x1="360" y1="260" x2="400" y2="260"/>
        <line x1="160" y1="60" x2="160" y2="10"/>
        <line x1="260" y1="60" x2="260" y2="10"/>
        <line x1="160" y1="360" x2="160" y2="410"/>
        <line x1="260" y1="360" x2="260" y2="410"/>
      </g>

      {/* Pin dots */}
      <g fill="rgba(0,180,255,0.7)" filter="url(#glow-b)">
        <circle cx="10" cy="160" r="3"/><circle cx="10" cy="220" r="3"/>
        <circle cx="410" cy="160" r="3"/><circle cx="410" cy="220" r="3"/>
        <circle cx="160" cy="10" r="3"/><circle cx="260" cy="10" r="3"/>
        <circle cx="160" cy="410" r="3"/><circle cx="260" cy="410" r="3"/>
      </g>

      {/* Chip body */}
      <rect x="60" y="60" width="300" height="300" rx="4"
        fill="url(#chipGrad)" stroke="rgba(0,180,255,0.3)" strokeWidth="1"/>

      {/* Internal grid */}
      <g stroke="rgba(0,180,255,0.06)" strokeWidth="0.5">
        {[120,180,240,300].map(x => <line key={`v${x}`} x1={x} y1="60" x2={x} y2="360"/>)}
        {[120,180,240,300].map(y => <line key={`h${y}`} x1="60" y1={y} x2="360" y2={y}/>)}
      </g>

      {/* Side blocks */}
      <rect x="80" y="80" width="75" height="45" rx="2" fill="rgba(0,180,255,0.05)" stroke="rgba(0,180,255,0.2)" strokeWidth="0.8"/>
      <rect x="80" y="140" width="75" height="45" rx="2" fill="rgba(0,180,255,0.05)" stroke="rgba(0,180,255,0.2)" strokeWidth="0.8"/>
      <rect x="80" y="210" width="75" height="75" rx="2" fill="rgba(0,180,255,0.04)" stroke="rgba(0,180,255,0.15)" strokeWidth="0.8"/>
      <rect x="80" y="305" width="75" height="25" rx="2" fill="rgba(0,180,255,0.05)" stroke="rgba(0,180,255,0.2)" strokeWidth="0.8"/>
      <rect x="265" y="80" width="75" height="75" rx="2" fill="rgba(0,180,255,0.05)" stroke="rgba(0,180,255,0.2)" strokeWidth="0.8"/>
      <rect x="265" y="170" width="75" height="45" rx="2" fill="rgba(0,180,255,0.05)" stroke="rgba(0,180,255,0.2)" strokeWidth="0.8"/>
      <rect x="265" y="230" width="75" height="45" rx="2" fill="rgba(0,180,255,0.04)" stroke="rgba(0,180,255,0.15)" strokeWidth="0.8"/>
      <rect x="265" y="305" width="75" height="25" rx="2" fill="rgba(0,180,255,0.05)" stroke="rgba(0,180,255,0.2)" strokeWidth="0.8"/>

      {/* CPU core */}
      <rect x="170" y="90" width="80" height="80" rx="3"
        fill="rgba(2,13,26,0.95)" stroke="rgba(0,180,255,0.5)" strokeWidth="1" filter="url(#glow-b)"/>
      <rect x="178" y="98" width="64" height="64" rx="2" fill="rgba(0,180,255,0.04)" stroke="rgba(0,180,255,0.15)" strokeWidth="0.5"/>
      <text x="210" y="132" textAnchor="middle" fill="rgba(0,180,255,0.9)"
        fontFamily="'Share Tech Mono', monospace" fontSize="9" filter="url(#glow-b)">CPU</text>
      <text x="210" y="146" textAnchor="middle" fill="rgba(0,180,255,0.5)"
        fontFamily="'Share Tech Mono', monospace" fontSize="7">CORE</text>

      {/* SRAM */}
      <rect x="170" y="188" width="80" height="50" rx="2"
        fill="rgba(2,13,26,0.9)" stroke="rgba(0,140,220,0.4)" strokeWidth="0.8"/>
      <text x="210" y="218" textAnchor="middle" fill="rgba(0,180,255,0.7)"
        fontFamily="'Share Tech Mono', monospace" fontSize="8">SRAM</text>

      {/* IO */}
      <rect x="170" y="255" width="80" height="70" rx="2"
        fill="rgba(2,13,26,0.9)" stroke="rgba(0,100,200,0.35)" strokeWidth="0.8"/>
      <text x="210" y="285" textAnchor="middle" fill="rgba(0,180,255,0.6)"
        fontFamily="'Share Tech Mono', monospace" fontSize="8">I/O</text>
      <text x="210" y="300" textAnchor="middle" fill="rgba(0,180,255,0.4)"
        fontFamily="'Share Tech Mono', monospace" fontSize="7">CTRL</text>

      {/* Data flow */}
      <g stroke="rgba(0,180,255,0.4)" strokeWidth="1" fill="none" filter="url(#glow-b)">
        <path d="M155,175 L170,175" className="data-line"/>
        <path d="M265,175 L250,175" className="data-line" style={{animationDelay:'0.5s'}}/>
        <path d="M210,240 L210,255" className="data-line" style={{animationDelay:'0.8s'}}/>
      </g>

      {/* Corner marks */}
      <g stroke="rgba(0,180,255,0.4)" strokeWidth="1" fill="none">
        <path d="M68,68 L68,78 M68,68 L78,68"/>
        <path d="M352,68 L352,78 M352,68 L342,68"/>
        <path d="M68,352 L68,342 M68,352 L78,352"/>
        <path d="M352,352 L352,342 M352,352 L342,352"/>
      </g>
    </svg>
  );
}