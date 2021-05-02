import { FC, ReactNode } from "react";
import { FaGithubAlt } from "react-icons/fa";
// import { AiTwotoneMail } from "react-icons/ai";
import Contact from "@/components/Contact";

export interface IContacts {
	msg: string;
	link: boolean;
	icon: ReactNode;
	href?: string;
}

const contacts: IContacts[] = [
	{
		msg: "github",
		link: true,
		icon: <FaGithubAlt />,
		href: "https://github.com/jungai",
	},
	// {
	// 	msg: "juworaphol125@gmail.com",
	// 	link: false,
	// 	icon: <AiTwotoneMail />,
	// },
];

const Contacts: FC = () => (
	<ul className="flex">
		{contacts.map(({ link, href, msg, icon }) => (
			<Contact key={msg} link={link} icon={icon} msg={msg} href={href} />
		))}
	</ul>
);

export default Contacts;
