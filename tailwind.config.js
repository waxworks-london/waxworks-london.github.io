/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const background = 'hsl(48 100% 98%)';

const body = {
  primary: colors.cyan['950'],
  secondary: colors.cyan['900'],
};

const accent = {
  background: 'hsl(181 -43% 81%)',
  primary: colors.blue['950'],
  secondary: colors.blue['950'],
};

const button = {
  primary: {
    text: body.primary,
    background,
    hover: colors.amber['400'],
    border: colors.amber['400'],
  },
  accent: {
    text: accent.primary,
    background,
    hover: accent.primary,
    border: accent.primary,
  }
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
      white: background,
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

