import { FC } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { MdUpdate } from "react-icons/md";
import { IKeyDataFromMatter } from "@/utils/api";

interface IPost {
	name: IKeyDataFromMatter["name"];
	title: IKeyDataFromMatter["title"];
	date: IKeyDataFromMatter["date"];
}

const Post: FC<IPost> = ({ title, date, name }) => {
	// computed
	const prettyDate = format(new Date(date), "dd MMM yyyy", { locale: th });

	return (
		<div className="flex flex-col border-b border-gray-300 mb-2 p-2">
			<h2 className="text-base md:text-xl font-semibold mb-4">{title}</h2>
			<div className="flex justify-between items-center">
				<p className="flex items-center text-sm">
					<MdUpdate />
					{prettyDate}
				</p>
				<Link href={`/blogs/${name}`}>
					<a href="#" className="self-end text-sm cursor-pointer underline">
						อ่าน..
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Post;
