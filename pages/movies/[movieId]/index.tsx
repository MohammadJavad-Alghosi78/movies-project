// node_modules
import React, { ReactElement } from "react";
// Components
import Layout from "apps/shared/components/Layout";
import MovieView from "apps/Movie/components/Movie";

const Component = (): JSX.Element => <MovieView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
