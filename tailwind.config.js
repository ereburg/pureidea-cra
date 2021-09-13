// eslint-disable-next-line import/no-extraneous-dependencies
// const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
      margin: {
        12.5: "3.125rem",
        13: "3.25rem",
      },
      fontFamily: {
        body: ['"Fira Sans Condensed"', "sans-serif"],
      },
      fontSize: {
        inherit: "inherit",
        "4.5xl": "2.75rem",
      },
      colors: {
        grey: {
          DEFAULT: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#F2F2F2",
          7: "#969696",
        },
        text: {
          DEFAULT: "#141926",
        },
        accent: {
          red: "#FF3D00",
        },
      },
      gridTemplateColumns: {
        footer: "repeat(3, minmax(auto, 250px))",
      },
      boxShadow: {
        contacts: "0px 0.75rem 2rem rgba(92, 141, 255, 0.22)",
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
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/forms")],
}
