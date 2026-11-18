/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50:  '#fdf2f2',
          100: '#fce7e7',
          200: '#f9c8c8',
          300: '#f49898',
          400: '#ec5959',
          500: '#d93030',
          600: '#b22222',
          700: '#8b1a1a',
          800: '#6b1414',
          900: '#4a0e0e',
          950: '#3d0a0a',
        },
        turmeric: {
          50:  '#fffbeb',
          100: '#fff3c4',
          200: '#ffe480',
          300: '#ffd037',
          400: '#f5b800',
          500: '#d4a017',
          600: '#b8860b',
          700: '#956a0a',
          800: '#7a5208',
          900: '#5e3f07',
        },
        cream: {
          50:  '#fffef9',
          100: '#fefdf0',
          200: '#fdf8e0',
          300: '#faf0c8',
          400: '#f5e4a8',
          500: '#edd888',
        },
        forest: {
          500: '#2d6a4f',
          600: '#1b4332',
          700: '#14342a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Hind"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.7s ease-out forwards',
        'fade-in':    'fade-in 0.6s ease-out forwards',
        'slide-left': 'slide-left 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
