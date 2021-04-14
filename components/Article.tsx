import { FC } from "react";
import { IKeyDataFromMatter } from "../utils/api";
import Posts from "./Posts";

const Article: FC<{ posts: IKeyDataFromMatter[] }> = ({ posts }) => (
	<div className="p-4 md:p-0">
		<h1 className="text-2xl underline font-semibold text-light-head mb-2">
			Blogs
		</h1>
		<div className="overflow-y-scroll max-h-80">
			<Posts posts={posts} />
		</div>
	</div>
);

export default Article;
