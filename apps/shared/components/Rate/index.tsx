// node_modules
import React from "react";
// types
import { RateType } from "apps/shared/types/RateType";
// constants
import { Place } from "apps/shared/core/constants";
// styles
import classes from "apps/shared/styles/rate/style.module.scss";

const Rate = ({ rate, place = "top-right" }: RateType): JSX.Element => {
    const handleClassName = () => {
        switch (place) {
            case Place.TOP_RIGHT:
                return classes["rating_top_right"];
            case Place.TOP_LEFT:
                return classes["rating_top_left"];
            case Place.BOTTOM_LEFT:
                return classes["rating_bottom_left"];
            case Place.BOTTOM_RIGHT:
                return classes["rating_bottom_right"];
            default:
                return;
        }
    };
    return <div className={handleClassName()}>{rate}</div>;
};

export default Rate;
