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
        '2xl': '64rem', // 1024px
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      ring: 'hsl(var(--ring))',
      border: 'hsl(var(--border))',
      'border-hover': 'hsl(var(--border-hover))',
      muted: 'hsl(var(--muted))',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
