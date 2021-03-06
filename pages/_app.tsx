import React, { ComponentType, ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";
// State managent(s)
import { Provider } from "react-redux";
import { store } from "../apps/shared/core/redux/api/store";
// Styles
import "apps/shared/styles/globals.css";

export type Page<P = Record<string, unknown>> = NextPage<P> & {
    // You can disable whichever y,sou don't need
    getLayout?: (page: ReactElement) => ReactNode;
    layout?: ComponentType;
};

type Props = AppProps & {
    Component: Page;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
