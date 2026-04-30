export default function ChipSVG() {
  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <filter id="glow-green-r">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-purple-r">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="chipBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1f3c"/>
          <stop offset="100%" stopColor="#050a1a"/>
        </linearGradient>
      </defs>

      {/* Outer traces */}
      <g stroke="rgba(92,33,182,0.35)" strokeWidth="1" fill="none">
        <line x1="60" y1="130" x2="20" y2="130"/><line x1="20" y1="130" x2="20" y2="80"/>
        <line x1="60" y1="160" x2="10" y2="160"/>
        <line x1="60" y1="190" x2="20" y2="190"/><line x1="20" y1="190" x2="20" y2="240"/>
        <line x1="60" y1="220" x2="10" y2="220"/>
        <line x1="60" y1="260" x2="20" y2="260"/><line x1="20" y1="260" x2="20" y2="310"/>
        <line x1="360" y1="130" x2="400" y2="130"/><line x1="400" y1="130" x2="400" y2="80"/>
        <line x1="360" y1="160" x2="410" y2="160"/>
        <line x1="360" y1="220" x2="410" y2="220"/>
        <line x1="360" y1="260" x2="400" y2="260"/><line x1="400" y1="260" x2="400" y2="310"/>
        <line x1="130" y1="60" x2="130" y2="20"/><line x1="130" y1="20" x2="80" y2="20"/>
        <line x1="160" y1="60" x2="160" y2="10"/>
        <line x1="220" y1="60" x2="220" y2="20"/>
        <line x1="260" y1="60" x2="260" y2="10"/>
        <line x1="320" y1="60" x2="320" y2="20"/><line x1="320" y1="20" x2="370" y2="20"/>
        <line x1="130" y1="360" x2="130" y2="400"/>
        <line x1="160" y1="360" x2="160" y2="410"/>
        <line x1="220" y1="360" x2="220" y2="400"/>
        <line x1="260" y1="360" x2="260" y2="410"/>
        <line x1="320" y1="360" x2="320" y2="400"/>
      </g>

      {/* Pin dots */}
      <g fill="rgba(74,222,128,0.7)" filter="url(#glow-green-r)">
        <circle cx="10" cy="160" r="4"/><circle cx="10" cy="220" r="4"/>
        <circle cx="410" cy="160" r="4"/><circle cx="410" cy="220" r="4"/>
        <circle cx="160" cy="10" r="4"/><circle cx="260" cy="10" r="4"/>
        <circle cx="160" cy="410" r="4"/><circle cx="260" cy="410" r="4"/>
      </g>

      {/* Main chip body */}
      <rect x="60" y="60" width="300" height="300" rx="8"
        fill="url(#chipBodyGrad)" stroke="rgba(92,33,182,0.65)" strokeWidth="1.5"/>

      {/* Internal grid */}
      <g stroke="rgba(92,33,182,0.1)" strokeWidth="0.5">
        {[120,180,240,300].map(x => <line key={x} x1={x} y1="60" x2={x} y2="360"/>)}
        {[120,180,240,300].map(y => <line key={y} x1="60" y1={y} x2="360" y2={y}/>)}
      </g>

      {/* Side blocks left */}
      <rect x="80" y="80" width="80" height="50" rx="4" fill="rgba(92,33,182,0.2)" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
      <rect x="80" y="148" width="80" height="50" rx="4" fill="rgba(92,33,182,0.2)" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
      <rect x="80" y="216" width="80" height="80" rx="4" fill="rgba(92,33,182,0.15)" stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
      <rect x="80" y="314" width="80" height="26" rx="4" fill="rgba(92,33,182,0.2)" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>

      {/* Side blocks right */}
      <rect x="260" y="80" width="80" height="80" rx="4" fill="rgba(92,33,182,0.2)" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
      <rect x="260" y="178" width="80" height="50" rx="4" fill="rgba(92,33,182,0.2)" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
      <rect x="260" y="246" width="80" height="50" rx="4" fill="rgba(92,33,182,0.15)" stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
      <rect x="260" y="314" width="80" height="26" rx="4" fill="rgba(92,33,182,0.2)" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>

      {/* Center CPU */}
      <rect x="168" y="88" width="84" height="84" rx="6"
        fill="rgba(5,10,26,0.95)" stroke="rgba(74,222,128,0.65)" strokeWidth="1.5"
        filter="url(#glow-green-r)"/>
      <rect x="176" y="96" width="68" height="68" rx="4" fill="rgba(92,33,182,0.15)" stroke="rgba(92,33,182,0.4)" strokeWidth="1"/>
      <text x="210" y="133" textAnchor="middle" fill="rgba(74,222,128,0.95)"
        fontFamily="'Share Tech Mono', monospace" fontSize="9" filter="url(#glow-green-r)">CPU</text>
      <text x="210" y="148" textAnchor="middle" fill="rgba(167,139,250,0.75)"
        fontFamily="'Share Tech Mono', monospace" fontSize="7">CORE</text>

      {/* SRAM */}
      <rect x="168" y="192" width="84" height="55" rx="4"
        fill="rgba(5,10,26,0.85)" stroke="rgba(124,58,237,0.55)" strokeWidth="1"/>
      <text x="210" y="224" textAnchor="middle" fill="rgba(167,139,250,0.85)"
        fontFamily="'Share Tech Mono', monospace" fontSize="8">SRAM</text>

      {/* I/O */}
      <rect x="168" y="264" width="84" height="76" rx="4"
        fill="rgba(5,10,26,0.85)" stroke="rgba(34,211,238,0.45)" strokeWidth="1"/>
      <text x="210" y="296" textAnchor="middle" fill="rgba(34,211,238,0.75)"
        fontFamily="'Share Tech Mono', monospace" fontSize="8">I/O</text>
      <text x="210" y="310" textAnchor="middle" fill="rgba(34,211,238,0.5)"
        fontFamily="'Share Tech Mono', monospace" fontSize="7">CTRL</text>

      {/* Animated data flow lines */}
      <g stroke="rgba(74,222,128,0.55)" strokeWidth="1" fill="none" filter="url(#glow-green-r)">
        <path d="M160,173 L168,173" className="data-line"/>
        <path d="M252,173 L244,173" className="data-line" style={{animationDelay:'0.4s'}}/>
        <path d="M210,248 L210,256" className="data-line" style={{animationDelay:'0.8s'}}/>
        <path d="M210,88 L210,82" className="data-line" style={{animationDelay:'0.2s'}}/>
      </g>

      {/* Corner marks */}
      <g stroke="rgba(74,222,128,0.65)" strokeWidth="1.5" fill="none">
        <path d="M68,68 L68,80 M68,68 L80,68"/>
        <path d="M352,68 L352,80 M352,68 L340,68"/>
        <path d="M68,352 L68,340 M68,352 L80,352"/>
        <path d="M352,352 L352,340 M352,352 L340,352"/>
      </g>
    </svg>
  );
}
