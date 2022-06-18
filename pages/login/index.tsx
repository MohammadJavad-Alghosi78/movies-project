// node_modules
import React, { ReactElement } from "react";
// Components
import Layout from "@/apps/shared/Layout";
import LoginView from "@/components/Views/Login";

const Component = () => <LoginView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
