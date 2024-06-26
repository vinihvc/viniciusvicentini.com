
const { fontFamily } = require("tailwindcss/defaultTheme");

const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "libs/**/*.{ts,tsx}",
    "constants/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem", // 16px
      screens: {
        "2xl": "48rem", // 1024px
      },
    },
    extend: {
      screens: {
        'xs': '450px',
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      colors: {
        background: '#0D0D0D',
        muted: "#B5B5B5",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
});
