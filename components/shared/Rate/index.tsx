// node_modules
import React from "react";
// Types
import { RateType } from "./types";
// Constants(Enum)
import Place from "./constants";
// Styles
import classes from "./style.module.scss";

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
