/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#faf9f5',
          surface: '#ffffff',
          subtle: '#f4f3ee',
          muted: '#e6e5dd',
        },
        dark: {
          DEFAULT: '#090a0c',
          surface: '#0f1013',
          card: '#14161b',
          border: '#22252c',
          muted: '#858994',
        },
        ink: {
          DEFAULT: '#090a0c',
          secondary: '#4b4e57',
          muted: '#717580',
          faint: '#9da1ac',
        },
        line: {
          DEFAULT: '#e5e4dc',
          subtle: '#f1f0e9',
          strong: '#d2d1c6',
          dark: '#22252c',
        },
        accent: {
          DEFAULT: '#d2fc1e', // Electric lime / Cyber citron
          hover: '#c3ec14',
          subtle: 'rgba(210, 252, 30, 0.12)',
          border: 'rgba(210, 252, 30, 0.35)',
          glow: 'rgba(210, 252, 30, 0.25)',
          dark: '#0c0e02',
          text: '#090a0c',
        },
        brand: {
          DEFAULT: '#d2fc1e',
          hover: '#c3ec14',
          subtle: 'rgba(210, 252, 30, 0.12)',
          border: 'rgba(210, 252, 30, 0.35)',
          dark: '#090a0c',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Geist', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        elevated: '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        popover: '0 20px 32px -8px rgba(0, 0, 0, 0.14), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
        accent: '0 0 24px -2px rgba(210, 252, 30, 0.28)',
        focus: '0 0 0 3px rgba(210, 252, 30, 0.35)',
      },
    },
  },
  plugins: [],
};

