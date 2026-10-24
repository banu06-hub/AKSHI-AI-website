import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#05070B',
        midnight: '#0A1020',
        electric: '#287BFF',
        cyan: '#51D8FF',
        silver: '#C8D1DF',
        mist: '#F5F7FB',
        ink: {
          900: '#05070B',
          850: '#070A11',
          800: '#0A0F1A',
          700: '#111827',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"SFMono-Regular"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        'ultra': '0.28em',
        'wide-2': '0.18em',
      },
      opacity: {
        6: '0.06',
        7: '0.07',
        8: '0.08',
        9: '0.09',
        12: '0.12',
        14: '0.14',
        16: '0.16',
        18: '0.18',
        22: '0.22',
        28: '0.28',
        32: '0.32',
        38: '0.38',
        42: '0.42',
        48: '0.48',
        52: '0.52',
        58: '0.58',
        62: '0.62',
        68: '0.68',
        72: '0.72',
        78: '0.78',
        82: '0.82',
        88: '0.88',
        92: '0.92',
        96: '0.96',
      },
      boxShadow: {
        'glow-blue': '0 0 40px -8px rgba(40, 123, 255, 0.55)',
        'glow-soft': '0 20px 80px -30px rgba(40, 123, 255, 0.45)',
        'panel': '0 30px 120px -40px rgba(0, 0, 0, 0.9)',
        'inset-hairline': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'grid-fine': 'linear-gradient(to right, rgba(200,209,223,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,209,223,0.05) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(40,123,255,0.14), transparent 65%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'scan-line': 'scanLine 5s linear infinite',
        'spin-slow': 'spin 28s linear infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-120%)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(120%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
