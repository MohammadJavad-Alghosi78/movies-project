// node_modules
import React from "react";
// types
import { GenreType } from "apps/Movie/types/GenreType";
// styles
import classes from "apps/Movie/styles/genre/style.module.scss";

const Genre = ({ label }: GenreType): JSX.Element => {
  return <span className={classes.genre_wrapper}>{label}</span>;
};

export default Genre;
