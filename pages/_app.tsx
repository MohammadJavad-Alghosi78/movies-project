// node_modules
import type { AppProps } from "next/app";
import { ComponentType, ReactElement, ReactNode } from "react";
// State managent(s)
import { Provider } from "react-redux";
import { store } from "../apps/shared/core/redux/api/store";
// Styles
import "../styles/globals.css";

import { NextPage } from "next";

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever y,sou don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

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
