/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: 'rgb(var(--bg) / <alpha-value>)' },
        surface: { DEFAULT: 'rgb(var(--surface) / <alpha-value>)' },
        surface2: { DEFAULT: 'rgb(var(--surface2) / <alpha-value>)' },
        line: { DEFAULT: 'rgb(var(--line) / <alpha-value>)' },
        ink: { DEFAULT: 'rgb(var(--ink) / <alpha-value>)' },
        muted: { DEFAULT: 'rgb(var(--muted) / <alpha-value>)' },
        signal: { DEFAULT: 'rgb(var(--signal) / <alpha-value>)' },
        amber: { DEFAULT: 'rgb(var(--amber) / <alpha-value>)' },
        mint: { DEFAULT: 'rgb(var(--mint) / <alpha-value>)' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgb(var(--line) / 0.5) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.5) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
