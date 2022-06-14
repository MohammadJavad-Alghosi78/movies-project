// node_modules
import React from "react";
// Components
import Header from "components/shared/Layout/Header";
import Body from "components/shared/Layout/Body";

const Layout = ({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};

export default Layout;
