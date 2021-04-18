/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")({
	extension: /\.mdx$/,
});

module.exports = {
	...withMDX({
		pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	}),
	...withOptimizedImages({
		optimizeImagesInDev: true,
	}),
};
