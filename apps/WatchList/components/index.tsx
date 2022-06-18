// node_modules
import React from "react";
// Hooks
import { useGetWatchListQuery } from "@/apps/WatchList/core/redux/watchlistSlice";
// types
import { movieType } from "@/redux/api/movies/types";
// components
import WatchListMovieCard from "./WatchListMovieCard";
// Styles
import classes from "./style.module.scss";

// Import lowwercase
// Create MovielIst component and use it in wathclist and home page router ***
const WatchListView = () => {
  const { isLoading, isError, data: movies } = useGetWatchListQuery();
  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>An error has been occured</h3>;
  return (
    <div className={classes.watchlist_wrapper}>
      {movies.results.map((movie: movieType) => (
        <WatchListMovieCard
          key={movie.id}
          movieId={movie.id}
          original_title={movie.original_title}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default WatchListView;
