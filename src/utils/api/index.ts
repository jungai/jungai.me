/* eslint-disable import/prefer-default-export */
import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';
import rehypePrism from '@mapbox/rehype-prism';

export function getPostsDirPath(): string {
	return join(process.cwd(), '_posts');
}

export function getPostsSlug(dir = getPostsDirPath()): string[] {
	return fs.readdirSync(dir);
}

export function getContent(filePath: string): string {
	return fs.readFileSync(filePath, 'utf-8');
}

export interface IKeyDataFromMatter {
	name: string;
	title: string;
	date: string;
}

export interface UseMatterResult {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: { [key: string]: any };
	content: string;
}

export interface RenderMdxWithRemoteResult extends UseMatterResult {
	mdx: MdxRemote.Source;
}

export function isFrontMatterCorrectKey(result: UseMatterResult): result is RenderMdxWithRemoteResult {
	return Reflect.has(result.data, 'title') || Reflect.has(result.data, 'date') || Reflect.has(result.data, 'name');
}

// TODO: Fix Type
export async function getAllPost(): Promise<{ [key: string]: any }[]> {
	const posts = getPostsSlug();
	const postsWithPath = posts.map((post) => join(getPostsDirPath(), `${post}`));
	const fileContentList = postsWithPath.map((content) => getContent(content));
	const matterData = fileContentList.map((content) => matter(content));
	const result = await Promise.all(
		matterData.map(async (content) => ({
			data: content.data,
			content: await renderToString(content.content, {
				mdxOptions: { rehypePlugins: [rehypePrism] },
			}),
		})),
	);

	return result;
}

// slug with out extension name
export async function getPostBySlug(slug: string): Promise<RenderMdxWithRemoteResult> {
	const fullPath = join(getPostsDirPath(), `${slug}.mdx`);
	const fileContent = getContent(fullPath);

	const result = matter(fileContent);

	const source = await renderToString(result.content, {
		mdxOptions: { rehypePlugins: [rehypePrism] },
	});

	if (isFrontMatterCorrectKey(result)) {
		return {
			mdx: source,
			data: result.data,
			content: result.content,
		};
	}

	throw new Error('type error: front-matter key is not valid');
}
