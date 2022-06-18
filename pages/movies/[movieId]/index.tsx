// node_modules
import { ReactElement } from "react";
// Components
import Layout from "apps/shared/components/Layout";
import MovieView from "@/apps/Actor/components/Actor";

const Component = (): JSX.Element => <MovieView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
