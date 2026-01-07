/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          900: '#134e4a',
        },
        electricBlue: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        fieryOrange: {
          500: '#f97316',
          600: '#ea580c',
        }
      },
    },
  },
  plugins: [],
}