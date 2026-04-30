/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020710',
          900: '#050a1a',
          800: '#0a1628',
          700: '#0d1f3c',
          600: '#112347',
        },
        plasma: {
          900: '#3b0764',
          800: '#4a1080',
          700: '#5b21b6',
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
        },
        neon: {
          900: '#14532d',
          800: '#166534',
          700: '#16a34a',
          600: '#22c55e',
          500: '#4ade80',
          400: '#86efac',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        exo: ['"Exo 2"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'pulse-orb': 'pulseOrb 6s ease-in-out infinite',
        'pulse-orb-slow': 'pulseOrb 8s ease-in-out 2s infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'data-flow': 'dataFlow 1.5s linear infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        pulseOrb: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.12)', opacity: '0.7' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.15' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        dataFlow: {
          from: { strokeDashoffset: '8' },
          to: { strokeDashoffset: '0' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
