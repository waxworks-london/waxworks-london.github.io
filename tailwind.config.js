/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const background = 'hsl(48 100% 98%)';

const body = {
  primary: colors.cyan['950'],
  secondary: colors.cyan['900'],
};

const accent = {
  background: 'hsl(22.01 42% 88%)',
  primary: colors.cyan['950'],
  secondary: colors.cyan['950'],
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
    },
  },
  plugins: [],
}

