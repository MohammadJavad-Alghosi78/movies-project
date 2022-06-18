// node_modules
import React from "react";
// Types
import { actorType } from "./types";
// Styles
import classes from "./style.module.scss";

const ActorCard = ({ character, name }: actorType): JSX.Element => {
  return (
    <div className={classes.actor_card_wrapper}>
      <h3>{character}</h3>
      <h5>{name}</h5>
    </div>
  );
};

export default ActorCard;
