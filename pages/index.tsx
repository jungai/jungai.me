import { FC } from "react";
import Profile from "../components/Profile";
import Article from "../components/Article";
import { getAllPost, IKeyDataFromMatter } from "../utils/api";

interface IInitialProps {
	posts: IKeyDataFromMatter[];
}

const IndexPage: FC<IInitialProps> = ({ posts }) => (
	<div className="h-screen md:flex md:justify-center md:items-center">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Profile />
			<Article posts={posts} />
		</div>
	</div>
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
