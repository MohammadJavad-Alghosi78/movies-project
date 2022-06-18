// node_modules
import React from "react";
// components
import Header from "apps/shared/components/Layout/Header";
import Body from "apps/shared/components/Layout/Body";
// styles
import classes from "apps/shared/styles/layout/style.module.scss";

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
