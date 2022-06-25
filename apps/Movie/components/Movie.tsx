import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// api
import {
    useGetCreditsQuery,
    useGetMovieQuery,
} from "apps/Movie/core/redux/movieSlice";
import { useAddMovieToWatchListMutation } from "apps/WatchList/core/redux/watchlistSlice";
// components
import Genre from "apps/Movie/components/genre";
import ActorCard from "apps/Movie/components/ActorCard";
import Box from "apps/shared/components/Box";
import Button from "apps/shared/components/Button";
// types
import { MovieGenreType, CastAndCrewType } from "apps/Movie/types/MovieTypes";
// styles
import classes from "apps/Movie/styles/movie.module.scss";

function MovieView(): JSX.Element {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) setIsLoggedIn(true);
        else setIsLoggedIn(false);
    }, []);

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
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>An error has been occured</h1>;
    return (
        <>
            <Box>
                <h3>{movie?.original_title}</h3>
                {isLoggedIn && (
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
                            <ActorCard
                                character={actor.character}
                                name={actor.name}
                            />
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default MovieView;
