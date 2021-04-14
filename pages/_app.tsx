import "../styles/tailwind.css";
import { FC } from "react";
import { AppProps } from "next/app";

export const App: FC<AppProps> = ({ Component, pageProps }) => (
	<Component {...pageProps} />
);

export default App;
