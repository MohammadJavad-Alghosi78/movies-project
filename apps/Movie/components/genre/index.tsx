import React from "react";
// types
import { GenreType } from "apps/Movie/types/GenreType";
// styles
import classes from "apps/Movie/styles/genre/genre.module.scss";

function Genre({ label }: GenreType): JSX.Element {
    return <span className={classes.genre_wrapper}>{label}</span>;
}

export default Genre;
