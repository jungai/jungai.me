import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		timestamp: z.number(),
	}),
});

export const collections = {
	posts: postCollection,
};