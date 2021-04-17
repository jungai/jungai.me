import { FC } from "react";
import { NextSeo, NextSeoProps } from "next-seo";

const Seo: FC<NextSeoProps> = ({
	title = "Jungai Blog 🐖",
	openGraph = {
		url: "https://www.jungai.me",
		title: "Jungai Blog 🐖",
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
		]}
		openGraph={openGraph}
	/>
);

export default Seo;
