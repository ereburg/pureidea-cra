// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['"Fira Sans Condensed"', "sans-serif"],
      },
      colors: {
        grey: {
          DEFAULT: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#F2F2F2",
        },
        text: {
          DEFAULT: "#141926",
        },
      },
    },
    container: {
      padding: "1rem",
      center: true,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1332px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [],
}
