import { FC } from "react";
import { IContacts } from "@/components/Contacts";

const Contact: FC<IContacts> = ({ link, href, icon, msg }) => (
	<li
		className={`mr-2 border p-2 rounded-lg hover:border-2 hover:border-light-head  hover:text-light-head ${
			link ? "cursor-pointer" : ""
		}`}
	>
		{link ? (
			<a
				href={href}
				target="_blank"
				className="grid place-items-center"
				rel="noreferrer"
			>
				<span>{icon}</span>
				{msg}
			</a>
		) : (
			<p className="grid place-items-center">
				{" "}
				<span>{icon}</span>
				{msg}
			</p>
		)}
	</li>
);

export default Contact;