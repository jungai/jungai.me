import { FC } from "react";
import { IKeyDataFromMatter } from "../utils/api";
import Post from "./Post";

const Posts: FC<{ posts: IKeyDataFromMatter[] }> = ({ posts }) => (
	<>
		{posts.map((post) => (
			<Post key={post.title} {...post} />
		))}
	</>
);

export default Posts;
