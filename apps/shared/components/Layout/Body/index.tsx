// node_modules
import React from "react";
// styles
import classes from "apps/shared/styles/layout/body/style.module.scss";

function Body({ children }: { children: React.ReactElement }): JSX.Element {
    return <div className={classes.body_wrapper}>{children}</div>;
}

export default Body;
