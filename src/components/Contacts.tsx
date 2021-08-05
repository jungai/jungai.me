import { FC, ReactNode } from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { SiRiotgames, SiTwitch } from "react-icons/si";
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
	{
		msg: "linkedin",
		link: true,
		icon: <FaLinkedin />,
		href: "https://www.linkedin.com/in/woraphol-wananiyakul-7a6793168/",
	},
	{
		msg: "valorant",
		link: true,
		icon: <SiRiotgames />,
		href: "https://tracker.gg/valorant/profile/riot/i%20love%20korea%230004/overview?playlist=unrated",
	},
	{
		msg: "twitch",
		link: true,
		icon: <SiTwitch />,
		href: "https://www.twitch.tv/jungai",
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
