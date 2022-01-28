import { FC } from 'react';
import Seo from '@/components/Seo';
import LayoutDefault from '@/layouts/default';
import { getAllPost, IKeyDataFromMatter } from '@/utils/api';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

interface IInitialProps {
	posts: IKeyDataFromMatter[];
}

const Profile = dynamic(() => import('@/components/Profile'), {
	loading: () => <Loading />,
});

const Article = dynamic(() => import('@/components/Article'), {
	loading: () => <Loading />,
});

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
	const rawPosts = getAllPost();
	const posts = rawPosts.sort(
		(i, u) => new Date(u.date).getTime() - new Date(i.date).getTime(), // i with u mean iu ❤️
	);

	return {
		props: {
			posts,
		},
	};
}

export default IndexPage;
