/* eslint-disable camelcase */
import React from "react";
// api
import { useDeleteMovieFromWatchListMutation } from "apps/WatchList/core/redux/watchlistSlice";
// components
import Button from "apps/shared/components/Button";
// types
import { MovieType } from "apps/shared/types/SharedTypes";
// Styles
import classes from "apps/WatchList/styles/watchlistMovieCard/watchlistMovieCard.module.scss";

function WatchListMovieCard({
    movieId,
    originalTitle,
    overview,
}: MovieType): JSX.Element {
    const [removeMovieFromWatchList] = useDeleteMovieFromWatchListMutation();
    return (
        <div className={classes.watchlist_movie_card}>
            <h3>{originalTitle}</h3>
            <h5>{overview}</h5>
            <Button
                variant="danger-full-width"
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
