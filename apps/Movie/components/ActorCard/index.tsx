import React from "react";
// types
import { ActorType } from "apps/Movie/types/MovieTypes";
// styles
import classes from "apps/Movie/styles/actorCard/actorCard.module.scss";

function ActorCard({ character, name }: ActorType): JSX.Element {
    return (
        <div className={classes.actor_card_wrapper}>
            <h3>{character}</h3>
            <h5>{name}</h5>
        </div>
    );
}

export default ActorCard;
