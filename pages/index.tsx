import Layout from "@/components/shared/Layout";
import type { NextPage } from "next";
import { ReactElement } from "react";

const Home = (): JSX.Element => {
  return <div>NextJS</div>;
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
