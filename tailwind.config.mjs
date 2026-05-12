/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#52B788',
          600: '#2D6A4F',
          700: '#1f5038',
          800: '#16372a',
          900: '#0d2119',
        },
        earth: {
          100: '#f5e6d3',
          200: '#e8c99a',
          300: '#D4A373',
          400: '#b8834a',
          500: '#9c6b35',
        },
        accent: '#B7E4C7',
        dark: '#1B1B1B',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-rise': 'fadeRise 0.8s ease-out forwards',
        'fade-rise-delay': 'fadeRise 0.8s ease-out 0.2s forwards',
        'fade-rise-delay-2': 'fadeRise 0.8s ease-out 0.4s forwards',
        'fade-rise-delay-3': 'fadeRise 0.8s ease-out 0.6s forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'counter': 'counterUp 2s ease-out forwards',
      },
      keyframes: {
        fadeRise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
