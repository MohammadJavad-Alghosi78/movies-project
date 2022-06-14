// node_modules
import { ReactElement } from "react";
// Components
import HomeView from "@/components/Views/Home";
import Layout from "@/components/shared/Layout";

const Component = (): JSX.Element => <HomeView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
