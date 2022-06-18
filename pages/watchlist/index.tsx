// node_modules
import { ReactElement } from "react";
// Components
import Layout from "@/apps/shared/Layout";
import WatchListView from "@/components/Views/WatchList";

const Component = (): JSX.Element => <WatchListView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
