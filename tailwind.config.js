import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // SatisPie brand colors
        'sp-primary': '#D35400',
        'sp-secondary': '#8B4513',
        'sp-accent': '#C0392B',
        'sp-purple': '#4A148C', // Deep purple from logo
        'sp-purple-light': '#6A1B9A', // Lighter purple for hover states
        'sp-purple-dark': '#311B92', // Darker purple for active states
        'sp-text-primary': '#2C3E50',
        'sp-text-secondary': '#7F8C8D',
        'sp-bg-light': '#F8F9FA',
        'sp-bg-white': '#FFFFFF',

        // Legacy colors for backward compatibility
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', ...defaultTheme.fontFamily.serif],
        heading: ['Playfair Display', 'Georgia', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        // Enhanced mobile typography
        'mobile-base': ['18px', { lineHeight: '1.6' }],
        'mobile-lg': ['20px', { lineHeight: '1.5' }],
        'mobile-xl': ['24px', { lineHeight: '1.4' }],
        'mobile-2xl': ['30px', { lineHeight: '1.3' }],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
