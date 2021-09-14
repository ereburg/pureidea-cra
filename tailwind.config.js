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
      inset: {
        7.5: "1.875rem",
        "-7.5": "-1.875rem",
      },
      padding: {
        7.5: "1.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
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
        "4.25xl": "2.5rem",
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
          500: "#FF3D00",
          600: "#f33a00",
        },
        primary: {
          DEFAULT: "#1CC8EE",
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
    underlineThickness: {
      thin: "2px",
      thick: "4px",
    },
    underlineOffset: {
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.625rem",
    },
  },
  variants: {},
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  plugins: [require("@tailwindcss/forms"), require("tailwind-underline-utils")],
}
