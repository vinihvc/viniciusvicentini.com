const { fontFamily } = require('tailwindcss/defaultTheme')

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['pages/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        '2xl': '80rem', // 1280px
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
