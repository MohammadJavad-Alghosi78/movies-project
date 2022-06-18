// node_modules
import React from "react";
// Types
import { GenreType } from "./type";
// Styles
import classes from "./style.module.scss";

const Genre = ({ label }: GenreType): JSX.Element => {
  return <span className={classes.genre_wrapper}>{label}</span>;
};

export default Genre;
