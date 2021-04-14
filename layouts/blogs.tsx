import { FC } from "react";
import Link from "next/link";

const LayoutBlogs: FC = ({ children }) => (
	<div className="p-8 mx-auto max-w-3xl">
		<Link href="/">
			<a className="underline text-light-head cursor-pointer">หน้าหลัก</a>
		</Link>
		<hr className="mb-4" />
		<article className="prose prose-pink lg:prose-lg">{children}</article>
	</div>
);

export default LayoutBlogs;
