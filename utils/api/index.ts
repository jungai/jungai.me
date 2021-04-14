/* eslint-disable import/prefer-default-export */
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";

export function getPostsDirPath(): string {
	return join(process.cwd(), "_posts");
}

export function getPostsSlug(dir = getPostsDirPath()): string[] {
	return fs.readdirSync(dir);
}

export function getContent(filePath: string): string {
	return fs.readFileSync(filePath, "utf-8");
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

export function isFrontMatterCorrectKey<T extends UseMatterResult>(
	result: UseMatterResult
): result is RenderMdxWithRemoteResult | T {
	return (
		Reflect.has(result.data, "title") ||
		Reflect.has(result.data, "date") ||
		Reflect.has(result.data, "name")
	);
}

export function getAllPost(): { [key: string]: string }[] {
	const posts = getPostsSlug();
	const postsWithPath = posts.map((post) => join(getPostsDirPath(), `${post}`));
	const fileContentList = postsWithPath.map((content) => getContent(content));
	const matterData = fileContentList.map((content) => matter(content));
	const result = matterData.map((content) => content.data);

	return result;
}

// slug with out extension name
export async function getPostBySlug(
	slug: string
): Promise<RenderMdxWithRemoteResult> {
	const fullPath = join(getPostsDirPath(), `${slug}.mdx`);
	const fileContent = getContent(fullPath);
	getAllPost();

	const result = matter(fileContent);
	const source = await renderToString(result.content);

	if (isFrontMatterCorrectKey(result)) {
		return { mdx: source, data: result.data, content: result.content };
	}

	throw new Error("type error: front-matter key is not valid");
}
