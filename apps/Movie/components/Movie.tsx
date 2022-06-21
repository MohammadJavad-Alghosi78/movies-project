// node_modules
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// api
import { useGetCreditsQuery, useGetMovieQuery } from "apps/Movie/core/redux/movieSlice";
import { useAddMovieToWatchListMutation } from "apps/WatchList/core/redux/watchlistSlice";
// components
import Genre from "apps/Movie/components/genre";
import ActorCard from "apps/Movie/components/ActorCard";
import Box from "apps/shared/components/Box";
import Button from "apps/shared/components/Button";
// types
import { MovieGenreType } from "apps/Movie/types/MovieGenreType";
import { CastAndCrewType } from "../types/CreditType";
// styles
import classes from "apps/Movie/styles/style.module.scss";

const MovieView = (): JSX.Element => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setIsLogin(true);
        else setIsLogin(false);
    }, []);

    let content = <></>;
    const {
        isLoading,
        isError,
        data: movie,
    } = useGetMovieQuery(Number(router.query.movieId), {
        skip: !router.query.movieId,
    });
    const { data: actors } = useGetCreditsQuery(Number(router.query.movieId), {
        skip: !router.query.movieId,
    });
    const [addMovieToWatchList] = useAddMovieToWatchListMutation();
    if (isLoading) content = <h1>Loading...</h1>;
    if (isError) content = <h1>An error has been occured</h1>;
    content = (
        <>
            <Box>
                <h3>{movie?.original_title}</h3>
                {isLogin && (
                    <Button
                        styles={{ width: "12.5rem" }}
                        onClick={() =>
                            addMovieToWatchList({
                                media_type: "movie",
                                media_id: String(movie?.id),
                                watchlist: true,
                            })
                        }
                    >
                        Add to my watchlist
                    </Button>
                )}
                <h4>{movie?.overview}</h4>
                <div className={classes.genre_wrapper}>
                    <span>Genres:</span>
                    <div>
                        {movie?.genres?.map((genre: MovieGenreType) => (
                            <Genre key={genre.id} label={genre.name} />
                        ))}
                    </div>
                </div>
            </Box>
            <h1>Actors:</h1>
            <div className={classes.actor_wrapper}>
                {actors?.cast.map((actor: CastAndCrewType) => (
                    <Link
                        key={actor.id}
                        href={`/movies/${router.query.movieId}/actor/${actor.credit_id}`}
                    >
                        <a>
                            <ActorCard character={actor.character} name={actor.name} />
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );

    return content;
};

export default MovieView;
