// node_modules
import React from "react";
// Hooks
import useDebounce from "@/apps/shared/core/modules/hooks/useDebounce";
import { useSelector } from "react-redux";
import { useGetMoviesBysearchQuery } from "@/apps/Search/core/redux/searchMoviesSlice";
// Components
import MovieCard from "@/apps/shared/MovieCard";
// Types
import { MovieType } from "@/apps/Home/types/MovieType";
// Styles
import classes from "./style.module.scss";

const SearchView = (): JSX.Element => {
  const searchTerm = useSelector((state: any) => state.search.searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  console.log("***********", searchTerm, debouncedSearchTerm);
  const { data, isLoading, isFetching } =
    useGetMoviesBysearchQuery(debouncedSearchTerm);
  if (isLoading) return <h1>Loading ...</h1>;
  else if (isFetching) return <h1>Fetching ...</h1>;
  if (data?.results.length === 0) return <h1>No movie</h1>;
  //   else if (isError) return <h1>An error has been occured</h1>;
  return (
    <div className={classes.movies_wrapper}>
      {data?.results?.map((movie: MovieType) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default SearchView;
