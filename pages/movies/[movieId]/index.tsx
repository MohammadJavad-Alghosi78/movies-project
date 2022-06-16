// node_modules
import { ReactElement } from "react";
// Components
import Layout from "@/components/shared/Layout";
import MovieView from "@/components/Views/Movie";

const Component = (): JSX.Element => <MovieView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
