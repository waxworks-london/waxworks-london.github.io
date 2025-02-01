/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const background = 'hsl(48 100% 98%)';

const body = {
  primary: colors.cyan['950'],
  secondary: colors.cyan['900'],
  tertiary: colors.cyan['900'], // 80% opacity
};

const content = {
  background: 'hsl(22 42% 88%)',
  primary: colors.cyan['950'],
  secondary: colors.cyan['950'], // 80% opacity
};

const accent = {
  background: colors.amber['100'],
  primary: colors.cyan['950'],
  secondary: colors.cyan['950'], // 80% opacity
};

const inverted = {
  background: colors.cyan['950'],
  primary: background,
  secondary: colors.amber['50'], // 90% opacity
  tertiary: colors.amber['50'], // 80% opacity
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
  },
  cta: {
    background: accent.primary,
    text: background,
    hover: colors.cyan['900'],
  }
};

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        serif: ['The Seasons', 'Bona Nova', 'Nanum Myeongjo', 'Prata', ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      ...colors,
      white: background,
      body,
      content,
      accent,
      inverted,
      button,
    },
  },
  plugins: [],
}

