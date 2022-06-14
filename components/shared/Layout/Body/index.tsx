// node_modules
import React from "react";
// Styles
import classes from "./styles.module.scss";

const Body = ({ children }: { children: React.ReactElement }): JSX.Element => {
  return <div className={classes.body_wrapper}>{children}</div>;
};

export default Body;
