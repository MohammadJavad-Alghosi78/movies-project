import React from "react";
// api
import { useGetMoviesQuery } from "apps/Home/core/redux/moviesSlice";
// components
import MovieCard from "apps/shared/components/MovieCard";
// types
import { MovieType } from "apps/shared/types/SharedTypes";
// styles
import classes from "apps/Home/styles/home.module.scss";

function HomeView() {
    const { isError, isLoading, data } = useGetMoviesQuery();
    if (isLoading) return <h1>Loading ...</h1>;
    if (isError) return <h1>An error has been occured</h1>;
    return (
        <div className={classes.movies_wrapper}>
            {data?.results?.map((movie: MovieType) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    );
}

export default HomeView;
