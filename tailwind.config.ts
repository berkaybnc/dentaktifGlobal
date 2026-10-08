import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#211164',
        'primary-container': '#372b7a',
        'primary-hover': '#2d1980',
        secondary: '#006972',
        'teal-cyan': '#2BA598',
        'mint-emerald': '#7BC17E',
        surface: '#f8f9ff',
        'surface-surgical': '#F0F4F7',
        'canvas-clean': '#FAFBFC',
        'border-subtle': 'rgba(55, 43, 122, 0.08)',
        'on-surface': '#141c27',
      },
      fontFamily: {
        headline: ['var(--font-plus-jakarta)', 'sans-serif'],
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
        display: ['var(--font-manrope)', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(33, 17, 100, 0.1)',
        'premium-hover': '0 20px 40px -15px rgba(33, 17, 100, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
