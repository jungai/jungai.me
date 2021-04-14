import { FC } from "react";
import Profile from "../components/Profile";
import Posts from "../components/Posts";

const IndexPage: FC = () => (
	<div className="grid grid-col-1 md:grid-cols-2 max-w-5xl mx-auto min-h-screen items-start box-border">
		<Profile />
		<div>
			<Posts />
		</div>
	</div>
);

export default IndexPage;
