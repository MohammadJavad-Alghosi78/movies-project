import React, { ReactElement } from "react";
// Components
import HomeView from "apps/Home/components/Home";
import Layout from "apps/shared/components/Layout";

const Component = (): JSX.Element => <HomeView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
