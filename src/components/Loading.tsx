import { ReactElement } from "react";

export function Loading(): ReactElement {
	return (
		<div className="h-screen w-full grid place-items-center">
			<p className="text-light-head uppercase">loading ...</p>
		</div>
	);
}

export default Loading;
