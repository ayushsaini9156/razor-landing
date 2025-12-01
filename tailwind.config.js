/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'razor-primary': '#0EA5E9', // Cool sky blue for primary actions
        'razor-secondary': '#06B6D4', // Cyan for secondary actions
        'razor-neutral-900': '#0F172A', // Darkest text/background
        'razor-neutral-800': '#1E293B', // Darker text/background
        'razor-neutral-700': '#334155', // Medium dark text/background
        'razor-neutral-300': '#CBD5E1', // Light gray for borders/dividers
        'razor-neutral-100': '#F1F5F9', // Very light gray for backgrounds
        'razor-accent': '#0EA5E9', // Sky blue for highlights/accents
        'razor-gradient-start': '#06B6D4', // Cyan for gradients
        'razor-gradient-end': '#3B82F6', // Blue for gradients
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Google Font Inter
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        marquee: 'marquee 60s linear infinite', // Adjust duration for speed
        marqueeReverse: 'marqueeReverse 60s linear infinite', // Adjust duration for speed
      },
    },
  },
  plugins: [],
};
