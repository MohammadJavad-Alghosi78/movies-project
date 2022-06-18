// node_modules
import React from "react";
import { useSelector } from "react-redux";
// api
import { useGetMoviesBysearchQuery } from "apps/Search/core/redux/searchMoviesSlice";
// custom hooks
import useDebounce from "apps/shared/core/modules/hooks/useDebounce";
// components
import MovieCard from "apps/shared/components/MovieCard";
// types  Refactor: change directory of this type
import { MovieType } from "apps/Home/types/MovieType";
// styles
import classes from "apps/Search/styles/style.module.scss";

const SearchView = (): JSX.Element => {
  // Refactor: write a type for state
  const searchTerm = useSelector((state: any) => state.search.searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  console.log("***********", searchTerm, debouncedSearchTerm);
  const { data, isLoading, isFetching } =
    useGetMoviesBysearchQuery(debouncedSearchTerm);
  if (isLoading) return <h1>Loading ...</h1>;
  else if (isFetching) return <h1>Fetching ...</h1>;
  if (data?.results.length === 0) return <h1>No movie</h1>;
  return (
    <div className={classes.movies_wrapper}>
      {data?.results?.map((movie: MovieType) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default SearchView;
