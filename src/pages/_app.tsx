import { type AppType } from "next/app";

import "../globals.css";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
