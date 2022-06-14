// node_modules
import type { AppProps } from "next/app";
import { ReactNode } from "react";
// State managent(s)
import { Provider } from "react-redux";
import { store } from "../redux/store";
// Config
import { Page } from "@/config/page";
// Styles
import "../styles/globals.css";

type Props = AppProps & {
  Component: Page;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props): JSX.Element {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default MyApp;
