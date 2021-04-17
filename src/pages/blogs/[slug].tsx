import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import LayoutBlog from "@/layouts/blog";
import Seo from "@/components/Seo";
import { isString } from "@/utils/is_string";
import {
	getPostBySlug,
	getPostsSlug,
	RenderMdxWithRemoteResult,
} from "@/utils/api";

interface InitialProps {
	post: RenderMdxWithRemoteResult;
}

export const PostPage: FC<InitialProps> = ({ post }) => {
	const content = hydrate(post.mdx);

	return (
		<>
			<Seo
				title={post.data.title}
				openGraph={{
					url: `https://wwww.jungai.me/blogs/${post.data.name}`,
					title: post.data.title,
					// TODO: add description, twitter card, image not have yet
					site_name: "jungai",
				}}
			/>
			<LayoutBlog meta={post.data}>{content}</LayoutBlog>
		</>
	);
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
