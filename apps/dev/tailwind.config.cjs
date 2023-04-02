module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				bg: "#072448",
				primary: "#54D2D2",
				secondary: "#F8AA4B",
				warning: "#FFCB00",
				error: "#ff6150",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};