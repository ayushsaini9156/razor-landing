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
        'razor-primary': '#4338CA', // A deep indigo for primary actions and elements
        'razor-secondary': '#6366F1', // A lighter indigo for secondary actions
        'razor-neutral-900': '#0F172A', // Darkest text/background
        'razor-neutral-800': '#1E293B', // Darker text/background
        'razor-neutral-700': '#334155', // Medium dark text/background
        'razor-neutral-300': '#CBD5E1', // Light gray for borders/dividers
        'razor-neutral-100': '#F1F5F9', // Very light gray for backgrounds
        'razor-accent': '#06B6D4', // Cyan for highlights/accents
        'razor-gradient-start': '#8B5CF6', // Purple for gradients
        'razor-gradient-end': '#EC4899', // Pink for gradients
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
