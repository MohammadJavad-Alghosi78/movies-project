// node_modules
import React, { useEffect } from "react";
// api
import { useGetMoviesQuery } from "apps/Home/core/redux/moviesSlice";
// components
import MovieCard from "apps/shared/components/MovieCard";
// types
import { MovieType } from "apps/shared/types/MovieType";
// styles
import classes from "apps/Home/styles/style.module.scss";

const HomeView = () => {
    const { isError, isLoading, data } = useGetMoviesQuery();
    if (isLoading) return <h1>Loading ...</h1>;
    else if (isError) return <h1>An error has been occured</h1>;
    return (
        <div className={classes.movies_wrapper}>
            {data?.results?.map((movie: MovieType) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default HomeView;
