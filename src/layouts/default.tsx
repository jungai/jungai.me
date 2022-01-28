import { FC } from 'react';

const LayoutDefault: FC = ({ children }) => (
	<div className="h-screen md:flex md:justify-center md:items-center">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4">{children}</div>
	</div>
);

export default LayoutDefault;
