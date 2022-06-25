import React from "react";
// types
import { RateType } from "apps/shared/types/SharedTypes";
// constants
import { Place } from "apps/shared/core/constants";
// styles
import classes from "apps/shared/styles/rate/rate.module.scss";

function Rate({ rate, place = "top-right" }: RateType): JSX.Element {
    const handleClassName = () => {
        switch (place) {
            case Place.TOP_RIGHT:
                return classes.rating_top_right;
            case Place.TOP_LEFT:
                return classes.rating_top_left;
            case Place.BOTTOM_LEFT:
                return classes.rating_bottom_left;
            case Place.BOTTOM_RIGHT:
                return classes.rating_bottom_right;
            default:
        }
    };
    return <div className={handleClassName()}>{rate}</div>;
}

export default Rate;
