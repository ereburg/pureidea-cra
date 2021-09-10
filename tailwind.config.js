module.exports = {
	mode: "jit",
	purge: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/pages/**/*.{ts,tsx,js,jsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
}
