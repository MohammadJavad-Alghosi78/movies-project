// node_modules
import React from "react";
// api
import { useDeleteMovieFromWatchListMutation } from "apps/WatchList/core/redux/watchlistSlice";
// components
import Button from "apps/shared/components/Button";
// Types Refactor: change the directory of MovieType
import { MovieType } from "@/apps/Home/types/MovieType";
// Styles
import classes from "apps/WatchList/styles/watchlistMovieCard/style.module.scss";

const WatchListMovieCard = ({
  movieId = "1",
  original_title,
  overview,
}: MovieType): JSX.Element => {
  const [removeMovieFromWatchList] = useDeleteMovieFromWatchListMutation();
  return (
    <div className={classes.watchlist_movie_card}>
      <h3>{original_title}</h3>
      <h5>{overview}</h5>
      <Button
        variant="danger"
        styles={{ width: "150px" }}
        onClick={() => {
          removeMovieFromWatchList({ movieId });
        }}
      >
        Remove from list
      </Button>
    </div>
  );
};

export default WatchListMovieCard;