/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"light-head": colors.pink[700],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
