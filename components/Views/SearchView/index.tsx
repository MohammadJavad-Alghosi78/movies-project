// node_modules
import React from "react";
import { useSelector } from "react-redux";

const SearchView = (): JSX.Element => {
  const searchTerm = useSelector((state: any) => state.search.searchTerm);
  console.log(searchTerm);
  return <h1>test</h1>;
};

export default SearchView;
