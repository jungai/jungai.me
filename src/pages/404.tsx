import { FC } from 'react';
import Link from 'next/link';

const NotFoundPage: FC = () => (
	<div className="h-screen grid place-content-center">
		<h1 className="text-2xl">ไม่พบหน้านี้ ❤️</h1>
		<Link href="/">
			<a className="underline cursor-pointer mb-4">กลับหน้าหลัก 🏠</a>
		</Link>
		<img className="w-52 h-52" alt="iu" src="https://media.giphy.com/media/RfAn1YnISmJW04TBV9/giphy.gif" />
	</div>
);

export default NotFoundPage;
