module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: '1rem',
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
