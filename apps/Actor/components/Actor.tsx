// node_modules
import React from "react";
import { useRouter } from "next/router";
// api
import { useGetCreditQuery } from "apps/Actor/core/redux/actorSlice";

const ActorView = (): JSX.Element => {
    const router = useRouter();
    let content = <></>;
    if (router.query.actorId) {
        const { data, isLoading, isError } = useGetCreditQuery(String(router.query.actorId));
        if (isLoading) content = <h1>Loading...</h1>;
        if (isError) content = <h1>An error has been occured</h1>;
        content = <h2>{data?.person.name}</h2>;
    }
    return content;
};

export default ActorView;
