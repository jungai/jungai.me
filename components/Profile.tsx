import { FC } from "react";
import Image from "next/image";
import Contacts from "./Contacts";

const Profile: FC = () => (
	<div className="md:sticky top-0 md:h-screen flex flex-col justify-center items-center py-6 relative">
		<Image
			src="/jungai.jpeg"
			alt="jungai"
			className="rounded-full"
			width={300}
			height={300}
		/>
		<h1 className="text-2xl">안녕하세요 👋</h1>
		<p className="mb-4">สวัสดีครับผมชื่อจูเนียนร์</p>
		<Contacts />

		{/* TODO: i18n ? */}
		{/* <div className="absolute inset-x-0 bottom-0">kr</div> */}
	</div>
);

export default Profile;
