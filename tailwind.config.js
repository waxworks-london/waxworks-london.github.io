/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const body = {
  primary: 'hsl(235, 66.67%, 30%)',
  secondary: 'hsl(235, 30%, 30%)',
};

const accent = {
  background: 'hsl(181, 45%, 81%)',
  primary: body.primary,
  secondary: colors.cyan['700'],
};

const button = {
  primary: colors.red['500'],
};

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        serif: ['Prata', ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      ...colors,
      white:  'hsl(42 42% 96%);',
      body,
      accent,
      button,
      // gray: {
      //   ...colors.gray,
      //   '600': 'hsl(235, 30%, 30%)',
      //   '900': 'hsl(235, 66.67%, 30%)',
      // },
      // indigo: {
      //   ...colors.indigo,
      //   '100': 'hsl(181, 45%, 81%)'
      // },
      // intro: {
      //   'primary': body.primary,
      //   'secondary': colors.cyan['700'],
      // },
    },
  },
  plugins: [],
}

