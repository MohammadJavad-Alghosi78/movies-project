// node_modules
import React from "react";
// Types
import { BoxType } from "./type";
// Styles
import classes from "./style.module.scss";

const Box = ({ children }: BoxType): JSX.Element => {
  return <div className={classes.box_wrapper}>{children}</div>;
};

export default Box;
