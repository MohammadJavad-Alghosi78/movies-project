// node_modules
import { ReactElement } from "react";
// Components
import SearchView from "@/components/Views/SearchView";
import Layout from "@/components/shared/Layout";

const Component = (): JSX.Element => <SearchView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
