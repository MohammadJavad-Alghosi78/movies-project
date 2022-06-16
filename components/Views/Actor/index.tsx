// node_modules
import React, { useEffect } from "react";
import { useRouter } from "next/router";
// Hooks
import { useGetCreditQuery } from "@/redux/api/movies/moviesSlice";

const ActorView = (): JSX.Element => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetCreditQuery(router.query.actorId);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error has been occured</h1>;
  return <h2>{data?.person.name}</h2>;
};

export default ActorView;
