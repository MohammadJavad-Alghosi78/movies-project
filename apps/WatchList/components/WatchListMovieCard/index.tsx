/* eslint-disable camelcase */
import React from "react";
// api
import { useDeleteMovieFromWatchListMutation } from "apps/WatchList/core/redux/watchlistSlice";
// components
import Button from "apps/shared/components/Button";
// Types Refactor: change the directory of MovieType
import { MovieType } from "apps/shared/types/SharedTypes";
// Styles
import classes from "apps/WatchList/styles/watchlistMovieCard/watchlistMovieCard.module.scss";

function WatchListMovieCard({
    movieId = "1",
    original_title,
    overview,
}: MovieType): JSX.Element {
    const [removeMovieFromWatchList] = useDeleteMovieFromWatchListMutation();
    return (
        <div className={classes.watchlist_movie_card}>
            <h3>{original_title}</h3>
            <h5>{overview}</h5>
            <Button
                variant="danger"
                styles={{ width: "9.375rem" }}
                onClick={() => {
                    removeMovieFromWatchList({ movieId });
                }}
            >
                Remove from list
            </Button>
        </div>
    );
}

export default WatchListMovieCard;
