/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      emerald: colors.emerald,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      white: colors.white,
      yellow: colors.yellow,
      'primary': {
        100: '#d4a017',
        200: '#c26d1a'
      }
    },
    extend: {},
  },
  plugins: [],
}