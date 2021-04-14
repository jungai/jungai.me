import { FC } from "react";
import Image from "next/image";
import Contacts from "./Contacts";

const Profile: FC = () => (
	<div className="flex flex-col justify-center items-center py-8 md:py-0">
		<Image
			src="/jungai.jpeg"
			alt="jungai"
			className="rounded-full"
			width={250}
			height={250}
		/>
		<h1 className="text-2xl text-gray-900">안녕하세요 👋</h1>
		<p className="mb-4 text-gray-700">สวัสดีครับผมชื่อจูเนียร์</p>
		<Contacts />

		{/* TODO: i18n ? */}
		{/* <div className="absolute inset-x-0 bottom-0">kr</div> */}
	</div>
);

export default Profile;
