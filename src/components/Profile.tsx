/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { FC } from "react";
import Contacts from "@/components/Contacts";

const multipleSizes = require("../../public/jungai.jpeg?resize&sizes[]=300&sizes[]=600&sizes[]=1000");

const Profile: FC = () => (
	<div className="flex flex-col justify-center items-center py-8 md:py-0">
		<img
			srcSet={multipleSizes.srcSet}
			src={multipleSizes.src}
			alt="jungai"
			className="rounded-full w-60 h-60 mb-4"
		/>
		<h1 className="text-2xl text-gray-900">안녕하세요 👋</h1>
		<p className="mb-4 text-gray-700">สวัสดีครับผมชื่อจูเนียร์</p>
		<Contacts />
	</div>
);

export default Profile;
