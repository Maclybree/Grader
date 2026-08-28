/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        slate: {
          text: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
        },
        status: {
          success: '#16A34A',
          warning: '#D97706',
          danger: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        md: '10px',
        lg: '12px',
      },
    },
  },
  plugins: [],
};
