import React, { ReactElement } from "react";
// Components
import Layout from "apps/shared/components/Layout";
import ActorView from "apps/Actor/components/Actor";

const Component = (): JSX.Element => <ActorView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
