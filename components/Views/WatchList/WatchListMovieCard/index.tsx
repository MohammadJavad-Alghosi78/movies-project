// node_modules
import React from "react";
// Types
import { movieType } from "@/redux/api/movies/types";
// Styles
import classes from "./style.module.scss";
import Button from "@/components/shared/Button";

const WatchListMovieCard = ({
  original_title,
  overview,
}: movieType): JSX.Element => {
  return (
    <div className={classes.watchlist_movie_card}>
      <h3>{original_title}</h3>
      <h5>{overview}</h5>
      <Button variant="danger" styles={{ width: "150px" }}>
        Remove from list
      </Button>
    </div>
  );
};

export default WatchListMovieCard;
