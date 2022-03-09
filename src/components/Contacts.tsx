import { FC, ReactNode } from 'react';
import { FaGithubAlt, FaLinkedin, FaDev, FaRssSquare } from 'react-icons/fa';
import { SiRiotgames, SiTwitch } from 'react-icons/si';
import Contact from '@/components/Contact';

export interface IContacts {
	msg: string;
	link: boolean;
	icon: ReactNode;
	href?: string;
}

const contacts: IContacts[] = [
	{
		msg: 'github',
		link: true,
		icon: <FaGithubAlt />,
		href: 'https://github.com/jungai',
	},
	{
		msg: 'linkedin',
		link: true,
		icon: <FaLinkedin />,
		href: 'https://www.linkedin.com/in/woraphol-wananiyakul/',
	},
	{
		msg: 'valorant',
		link: true,
		icon: <SiRiotgames />,
		href: 'https://tracker.gg/valorant/profile/riot/%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%A1%23004/overview',
	},
	{
		msg: 'twitch',
		link: true,
		icon: <SiTwitch />,
		href: 'https://www.twitch.tv/jungai',
	},
	{
		msg: 'dev.to',
		link: true,
		icon: <FaDev />,
		href: 'https://dev.to/jungai',
	},
	{
		msg: 'rss',
		link: true,
		icon: <FaRssSquare />,
		href: 'https://jungai.me/rss/feed.xml',
	},
];

const Contacts: FC = () => (
	<ul className="flex">
		{contacts.map(({ link, href, msg, icon }) => (
			<Contact key={msg} link={link} icon={icon} msg={msg} href={href} />
		))}
	</ul>
);

export default Contacts;
