// node_modules
import { ReactElement } from "react";
// Components
import Main from "@/apps/Home/components/Home";
import Layout from "@/apps/shared/Layout";

const Component = (): JSX.Element => <Main />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
