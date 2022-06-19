// node_modules
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Search = (): null => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return null;
};

export default Search;
