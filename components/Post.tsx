import { FC } from "react";
import Link from "next/link";
import { IKeyDataFromMatter } from "../utils/api";

interface IPost {
	name: IKeyDataFromMatter["name"];
	title: IKeyDataFromMatter["title"];
	date: IKeyDataFromMatter["date"];
}

const Post: FC<IPost> = ({ title, date, name }) => (
	<div className="flex flex-col border-b border-gray-300 mb-2 p-2">
		<h2 className="text-base md:text-xl font-semibold">{title}</h2>
		<p>{new Date(date).toLocaleDateString()}</p>
		<p className="text-sm md:text-base leading-relaxed mb-2">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
			consectetur non ullam ducimus eum officia a magni repellat soluta? Quaerat
			ducimus esse iusto dolore dolor saepe accusamus in ea laborum.
		</p>

		<Link href={`/blogs/${name}`}>
			<a href="#" className="self-end text-sm cursor-pointer underline">
				อ่าน..
			</a>
		</Link>
	</div>
);

export default Post;
