/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        serif: ['Prata', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

