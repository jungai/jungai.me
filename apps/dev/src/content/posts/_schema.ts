import { z, defineCollection } from "astro:content";

export const postCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		timestamp: z.number(),
		tags: z.array(z.string()),
	}),
});