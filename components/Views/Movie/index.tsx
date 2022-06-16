// node_modules
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// Types
import { MovieGenreType } from "./type";
// Hooks
import {
  useGetCreditsQuery,
  useGetMovieQuery,
} from "@/redux/api/movies/moviesSlice";
// Components
import Genre from "./genre";
import Box from "@/components/shared/Box";
import Button from "@/components/shared/Button";
import ActorCard from "./ActorCard";
// Styles
import classes from "./style.module.scss";

const MovieView = () => {
  const router = useRouter();
  const {
    isLoading,
    isError,
    data: movie,
  } = useGetMovieQuery(Number(router.query.movieId));
  const { data: actors } = useGetCreditsQuery(Number(router.query.movieId));
  console.log(actors);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error has been occured</h1>;
  return (
    <>
      <Box>
        <h3>{movie?.original_title}</h3>
        <Button styles={{ width: "200px" }}>Add to my watchlist</Button>
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
        {actors?.cast.map((actor: any) => (
          // Why this link does not work when a tag is not exist?
          <Link href={`/movies/${router.query.movieId}/actor/${actor.id}`}>
            <a>
              <ActorCard character={actor.character} name={actor.name} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MovieView;
