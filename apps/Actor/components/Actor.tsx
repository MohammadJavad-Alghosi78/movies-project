// node_modules
import React from "react";
import { useRouter } from "next/router";
// api
import { useGetCreditQuery } from "apps/Actor/core/redux/actorSlice";

const ActorView = (): JSX.Element => {
    const router = useRouter();
    const { data, isLoading, isError } = useGetCreditQuery(String(router.query.actorId), {
        skip: !router.query.actorId,
    });
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>An error has been occured</h1>;
    return <h2>{data?.person.name}</h2>;
};

export default ActorView;
