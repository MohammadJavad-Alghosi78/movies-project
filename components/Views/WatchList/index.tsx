// node_modules
import React from "react";
// Hooks
import { useGetWatchListQuery } from "@/redux/api/watchlist/watchlistSlice";
// Styles
import classes from "./style.module.scss";
import { movieType } from "@/redux/api/movies/types";
import WatchListMovieCard from "./WatchListMovieCard";

const WatchListView = () => {
  const { isLoading, isError, data: movies } = useGetWatchListQuery();
  console.log(movies);
  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>An error has been occured</h3>;
  return (
    <div className={classes.watchlist_wrapper}>
      {movies.results.map((movie: movieType) => (
        <WatchListMovieCard
          key={movie.id}
          original_title={movie.original_title}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default WatchListView;
