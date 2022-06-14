// node_modules
import React from "react";
// RTK Query
import { useGetMoviesQuery } from "@/redux/api/movies/moviesSlice";
// Components
import MovieCard from "../../MovieCard";
// Types
import { movieType } from "@/redux/api/movies/types";
// Styles
import classes from "./style.module.scss";

const HomeView = () => {
  const { isError, isLoading, data } = useGetMoviesQuery();
  if (isLoading) return <h1>Loading ...</h1>;
  else if (isError) return <h1>An error has been occured</h1>;
  return (
    <div className={classes.movies_wrapper}>
      {data?.results?.map((movie: movieType) => (
        <MovieCard {...movie} />
      ))}
    </div>
  );
};

export default HomeView;
