// node_modules
import type { AppProps } from "next/app";
import { ComponentType, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
// State managent(s)
import { Provider } from "react-redux";
import { store } from "../apps/shared/core/redux/api/store";
// Styles
import "apps/shared/styles/globals.css";
import Head from "next/head";

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
    <>
      <Head>
        <title>MOVIES PROJECT</title>
      </Head>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}

export default MyApp;
