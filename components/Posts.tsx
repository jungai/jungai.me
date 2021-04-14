import { FC } from "react";
import Post from "./Post";

const arr = [1, 2];

const Posts: FC = () => (
	<>
		{arr.map((a) => (
			<Post key={a} />
		))}
	</>
);

export default Posts;
