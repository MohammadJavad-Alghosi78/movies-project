import React from "react";
// types
import { BoxType } from "apps/shared/types/BoxType";
// styles
import classes from "apps/shared/styles/box/style.module.scss";

function Box({ children }: BoxType): JSX.Element {
    return <div className={classes.box_wrapper}>{children}</div>;
}

export default Box;
