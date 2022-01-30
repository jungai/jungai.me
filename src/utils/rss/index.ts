import fs from 'fs';
import { Feed } from 'feed';
import { getAllPost } from '../api';

export async function generateRssFeed() {
	const posts = await getAllPost();

	const siteURL = 'https://jungai.me';
	const date = new Date();
	const author = {
		name: 'jungai',
		email: 'juworaphol125@gmail.com',
	};

	const feed = new Feed({
		title: 'Jungai Blog',
		id: siteURL,
		link: siteURL,
		image: `${siteURL}/logo.svg`,
		favicon: `${siteURL}/favicon.png`,
		copyright: `All rights reserved ${date.getFullYear()}, Jungai`,
		updated: date,
		generator: 'Feed for Node.js',
		feedLinks: {
			rss2: `${siteURL}/rss/feed.xml`,
			json: `${siteURL}/rss/feed.json`,
			atom: `${siteURL}/rss/atom.xml`,
		},
		author,
	});

	posts.forEach((post) => {
		const url = `${siteURL}/blogs/${post.data.name}`;

		feed.addItem({
			title: post.data.title,
			id: url,
			link: url,
			content: post.content.renderedOutput,
			author: [author],
			contributor: [author],
			date: new Date(post.data.date),
		});
	});

	fs.mkdirSync('./public/rss', { recursive: true });
	fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
	fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
	fs.writeFileSync('./public/rss/feed.json', feed.json1());
}
