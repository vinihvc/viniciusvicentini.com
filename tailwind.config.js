const { fontFamily } = require('tailwindcss/defaultTheme')

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        '2xl': '80rem', // 1280px
      },
    },
    colors: {
      background: colors.neutral[950],
      foreground: colors.neutral[900],
      primary: colors.rose[500],
      primaryHover: colors.rose[600],
      ring: colors.rose[700],
      white: colors.white,
      purple: colors.purple[500],
      blue: colors.blue[500],
      muted: colors.gray[400],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
