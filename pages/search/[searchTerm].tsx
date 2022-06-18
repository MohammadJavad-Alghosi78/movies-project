// node_modules
import { ReactElement } from "react";
// Components
import Layout from "apps/shared/components/Layout";
import SearchView from "apps/Search/components";

const Component = (): JSX.Element => <SearchView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
