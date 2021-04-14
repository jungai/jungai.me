/* eslint-disable no-use-before-define */
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import {
	getPostBySlug,
	getPostsSlug,
	RenderMdxWithRemoteResult,
} from "../../utils/api";
import { isString } from "../../utils/is_string";
import LayoutBlogs from "../../layouts/blogs";

interface InitialProps {
	post: RenderMdxWithRemoteResult;
}

export const PostPage: React.FC<InitialProps> = ({ post }) => {
	const content = hydrate(post.mdx);

	return <LayoutBlogs>{content}</LayoutBlogs>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug;

	// not found case
	if (!isString(slug)) {
		return {
			notFound: true,
		};
	}

	const post = await getPostBySlug(slug);

	return {
		props: { post },
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const postSlug = getPostsSlug();

	const paths = postSlug.map((post) => ({
		params: { slug: post.replace(/\.mdx$/, "") },
	}));

	return {
		paths,
		fallback: false,
	};
};

export default PostPage;
