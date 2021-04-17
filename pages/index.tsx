import { FC } from "react";
import Profile from "../components/Profile";
import Article from "../components/Article";
import { getAllPost, IKeyDataFromMatter } from "../utils/api";
import Seo from "../components/Seo";
import LayoutDefault from "../layouts/default";

interface IInitialProps {
	posts: IKeyDataFromMatter[];
}

const IndexPage: FC<IInitialProps> = ({ posts }) => (
	<>
		<Seo />
		<LayoutDefault>
			<Profile />
			<Article posts={posts} />
		</LayoutDefault>
	</>
);

export async function getStaticProps(): Promise<{
	props: {
		posts: { [key: string]: string }[];
	};
}> {
	const posts = getAllPost();

	return {
		props: {
			posts,
		},
	};
}

export default IndexPage;
