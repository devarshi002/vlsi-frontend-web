/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#010812',
          900: '#020d1a',
          800: '#041020',
          700: '#071628',
          600: '#0a1e35',
          500: '#0d2644',
        },
        blue: {
          950: '#0a1628',
          900: '#0f2040',
          800: '#163060',
          700: '#1a3a72',
          600: '#1e4080',
          500: '#2563eb',
          400: '#3b82f6',
          300: '#60a5fa',
          200: '#93c5fd',
          100: '#bfdbfe',
          glow: '#38bdf8',
          electric: '#00b4ff',
          bright: '#4db8ff',
        },
        steel: {
          700: '#1e3a5f',
          600: '#1e4d7a',
          500: '#2563a0',
          400: '#4a7fa8',
          300: '#7ba8c4',
          200: '#a8c8e0',
          100: '#d0e8f5',
        },
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'Courier New', 'monospace'],
        sans: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1.5s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'scan': 'scan 4s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'pulse-blue': 'pulseBlue 4s ease-in-out infinite',
        'flicker': 'flicker 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(500%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseBlue: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.6' },
          '99%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}