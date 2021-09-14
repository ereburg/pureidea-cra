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
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        19: "4.75rem",
      },
      margin: {
        7.5: "1.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        19: "4.75rem",
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
        lang: {
          react: "#53C1DE",
          next: "#141926",
          ts: "#3178C6",
          svelte: "#FF3E00",
          ng: "#B52E31",
          vue: "#41B883",
          go: "#5DC9E1",
          py: "#417EB0",
          node: "#539E43",
          docker: "#1B81A5",
          kub: "#326DE6",
          grafana: "#F4891B",
          mongo: "#12924F",
          db: "#00618A",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      gridTemplateColumns: {
        footer: "repeat(3, minmax(auto, 250px))",
      },
      boxShadow: {
        base: "0px 0.75rem 2rem rgba(92, 141, 255, 0.22)",
      },
      backgroundImage: {
        "tile-gradient": "linear-gradient(99.7deg, #009FFF 0%, #EC2F4B 100%)",
        "home-about":
          "url(\"data:image/svg+xml,%3Csvg width='1920' height='1396' viewBox='0 0 1920 1396' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 611.5L1920 0V1395.5H0V611.5Z' fill='%231CC8EE' fill-opacity='0.05'/%3E%3C/svg%3E%0A\")",
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
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
