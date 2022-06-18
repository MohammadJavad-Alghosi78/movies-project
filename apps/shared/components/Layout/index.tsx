// node_modules
import React from "react";
// Components
import Header from "@/apps/shared/Layout/Header";
import Body from "@/apps/shared/Layout/Body";
// Styles
import classes from "./styles.module.scss";

const Layout = ({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element => {
  return (
    <div className={classes.full_page}>
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;
