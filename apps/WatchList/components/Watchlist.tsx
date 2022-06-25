import React from "react";
// api
import { useGetWatchListQuery } from "apps/WatchList/core/redux/watchlistSlice";
// types
import { MovieType } from "apps/shared/types/MovieType";
// components
import WatchListMovieCard from "apps/WatchList/components/WatchListMovieCard";
// styles
import classes from "apps/WatchList/styles/watchlist.module.scss";

function WatchListView() {
    const { isLoading, isError, data: movies } = useGetWatchListQuery();

    if (isLoading) return <h3>Loading...</h3>;
    if (isError && !sessionStorage.getItem("token"))
        return <h1>You are not login</h1>;
    if (isError) return <h3>An error has been occured</h3>;
    return (
        <div className={classes.watchlist_wrapper}>
            {movies?.results?.map((movie: MovieType) => (
                <WatchListMovieCard
                    key={movie.id}
                    movieId={movie.id}
                    original_title={movie.original_title}
                    overview={movie.overview}
                />
            ))}
        </div>
    );
}

export default WatchListView;
