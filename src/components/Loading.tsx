import { ReactElement } from "react";

export function Loading(): ReactElement {
	return (
		<div className="h-screen w-full grid place-items-center">
			<p className="text-3xl md:text-6xl text-light-head uppercase">
				loading ...
			</p>
		</div>
	);
}

export default Loading;
