import React, { ReactElement } from "react";
// Components
import Layout from "apps/shared/components/Layout";
import LoginView from "apps/Login/components/Login";

const Component = () => <LoginView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
