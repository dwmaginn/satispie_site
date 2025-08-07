import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // SatisPie brand colors - Updated for Phase 5.1
        brand: {
          primary: '#2563EB', // Professional blue
          'primary-dark': '#1E40AF',
          'primary-light': '#3B82F6',
          secondary: '#8B4513', // Warm brown (pie crust)
          'secondary-dark': '#6B3410',
          'secondary-light': '#A0522D',
          accent: '#F59E0B', // Golden (baked goods)
          'accent-dark': '#D97706',
          'accent-light': '#FCD34D',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
        // Text colors
        text: {
          primary: '#111827',
          secondary: '#4B5563',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
        // Background colors
        background: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
          dark: '#111827',
        },
        // Legacy color mappings for compatibility
        'sp-primary': '#2563EB',
        'sp-secondary': '#8B4513',
        'sp-accent': '#F59E0B',
        'sp-text-primary': '#111827',
        'sp-text-secondary': '#4B5563',
        'sp-bg-light': '#F9FAFB',
        'sp-bg-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', ...defaultTheme.fontFamily.serif],
        heading: ['Playfair Display', 'Georgia', ...defaultTheme.fontFamily.serif],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
  // Dark mode disabled per Phase 5.1 requirements (out of scope)
};
