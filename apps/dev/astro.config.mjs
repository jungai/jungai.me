import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			// config: { applyBaseStyles: false },
		}),
	],
	markdown: {
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: "rose-pine",
			// Enable word wrap to prevent horizontal scrolling
			wrap: true,
		},
	},
});