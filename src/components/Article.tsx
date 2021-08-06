import { FC } from "react";
import { IKeyDataFromMatter } from "@/utils/api";
import Posts from "@/components/Posts";

const Article: FC<{ posts: IKeyDataFromMatter[] }> = ({ posts }) => (
	<div className="p-4 md:p-0">
		<h1 className="text-2xl underline font-semibold text-light-head mb-2">
			Posts
		</h1>
		<div className="overflow-auto h-[700px]">
			<Posts posts={posts} />
		</div>
	</div>
);

export default Article;
