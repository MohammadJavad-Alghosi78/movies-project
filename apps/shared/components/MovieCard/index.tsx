// node_modules
import React from "react";
import Link from "next/link";
// Types
import { movieType } from "@/redux/api/movies/types";
// Styles
import classes from "./style.module.scss";
import Rate from "../Rate";

const MovieCard = ({
  id,
  original_title,
  overview,
  vote_average,
}: movieType): JSX.Element => {
  // JSX
  return (
    <Link href={`/movies/${id}`} passHref>
      <div className={classes.card}>
        <Rate rate={vote_average ?? 0} place="top-right" />
        <span className={classes.card_title}>{original_title}</span>
        <span>{overview?.slice(0, 200)}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
