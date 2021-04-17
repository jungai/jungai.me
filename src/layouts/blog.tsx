import { FC } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { MdUpdate } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { th } from "date-fns/locale";

const LayoutBlog: FC<{ meta: { [key: string]: string } }> = ({
	children,
	meta,
}) => {
	// computed
	const prettyDate = format(new Date(meta.date), "dd MMM yyyy", { locale: th });

	return (
		<div className="p-4 mx-auto max-w-3xl prose prose-pink lg:prose-lg">
			<Link href="/">
				<a className="underline text-light-head cursor-pointer flex items-center">
					<AiOutlineArrowLeft />
					หน้าหลัก
				</a>
			</Link>
			<p className="flex items-center text-sm">
				<MdUpdate />
				{prettyDate}
			</p>
			<h1>{meta.title}</h1>
			<article>{children}</article>
		</div>
	);
};

export default LayoutBlog;
