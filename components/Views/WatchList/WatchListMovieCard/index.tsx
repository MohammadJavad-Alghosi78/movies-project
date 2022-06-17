// node_modules
import React from "react";
// Hooks
import { useDeleteMovieFromWatchListMutation } from "@/redux/api/watchlist/watchlistSlice";
// Types
import { movieType } from "@/redux/api/movies/types";
// Styles
import classes from "./style.module.scss";
import Button from "@/components/shared/Button";

const WatchListMovieCard = ({
  movieId = "1",
  original_title,
  overview,
}: movieType): JSX.Element => {
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
