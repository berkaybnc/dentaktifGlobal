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
        headline: ['var(--font-headline)', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['var(--font-sans)', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
