/* eslint-disable camelcase */
import React from "react";
import Link from "next/link";
// components
import Rate from "apps/shared/components/Rate";
// types
import { MovieType } from "apps/shared/types/SharedTypes";
// styles
import classes from "apps/shared/styles/movieCard/movieCard.module.scss";

function MovieCard({
    id,
    original_title,
    overview,
    vote_average,
}: MovieType): JSX.Element {
    return (
        <Link href={`/movies/${id}`} passHref>
            <div className={classes.card}>
                <Rate rate={vote_average ?? 0} place="top-right" />
                <span className={classes.card_title}>{original_title}</span>
                <span>{overview?.slice(0, 200)}</span>
            </div>
        </Link>
    );
}

export default MovieCard;
