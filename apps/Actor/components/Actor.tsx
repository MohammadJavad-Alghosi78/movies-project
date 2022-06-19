// node_modules
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// api
import { useGetCreditQuery } from "apps/Actor/core/redux/actorSlices";

const ActorView = (): JSX.Element => {
  const router = useRouter();
  // Question:
  // 1. Is there better way for preventing re-rendering?
  // 2. if let content; , we have type error in return of ActorView
  let content = <></>;
  if (router.query.actorId) {
    const { data, isLoading, isError } = useGetCreditQuery(
      String(router.query.actorId)
    );
    if (isLoading) content = <h1>Loading...</h1>;
    if (isError) content = <h1>An error has been occured</h1>;
    content = <h2>{data?.person.name}</h2>;
  }
  return content;
};

export default ActorView;
