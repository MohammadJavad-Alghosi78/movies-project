import React, { ReactElement } from "react";
// Components
import Layout from "apps/shared/components/Layout";
import WatchListView from "apps/WatchList/components/Watchlist";

const Component = (): JSX.Element => <WatchListView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
