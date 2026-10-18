/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #312E81)',
          dark: 'var(--color-primary-dark, #1E1B4B)',
        },
        secondary: 'var(--color-secondary, #7C3AED)',
        accent: 'var(--color-accent, #F59E0B)',
        background: 'var(--color-background, #F8FAFC)',
        surface: 'var(--color-surface, #FFFFFF)',
        text: 'var(--color-text, #0F172A)',
        muted: 'var(--color-muted, #64748B)',
        success: 'var(--color-success, #16A34A)',
        warning: 'var(--color-warning, #D97706)',
        error: 'var(--color-error, #DC2626)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      borderRadius: {
        card: '12px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
