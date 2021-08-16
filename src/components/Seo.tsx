import { FC } from "react";
import { NextSeo, NextSeoProps } from "next-seo";

const Seo: FC<NextSeoProps> = ({
	title = "Jungai",
	openGraph = {
		url: "https://www.jungai.me",
		title: "Jungai",
		description: "บล็อกของ จูเนียร์(junior)",
		site_name: "jungai",
	},
}) => (
	<NextSeo
		title={title}
		description="บล็อกของ จูเนียร์(junior)"
		canonical="https://www.jungai.me"
		additionalMetaTags={[
			{
				property: "author",
				content: "jungai",
			},
		]}
		additionalLinkTags={[
			{
				rel: "icon",
				type: "image/png",
				href: "/j.png",
			},
			{
				rel: "stylesheet",
				href: "https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css",
			},
		]}
		openGraph={openGraph}
		// TODO: add description, twitter card, image not have yet
	/>
);

export default Seo;
