// node_modules
import { ReactElement } from "react";
// Components
import Layout from "@/apps/shared/Layout";
import ActorView from "@/components/Views/Actor";

const Component = (): JSX.Element => <ActorView />;

Component.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Component;
