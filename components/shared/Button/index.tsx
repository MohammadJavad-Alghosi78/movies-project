// node_modules
import React from "react";
// Types
import { ButtonPropsType } from "./types";
// Constants
import Variant from "./constants";
// Styles
import classes from "./styles.module.scss";

const Button = ({
  children,
  variant = "primary",
  onClick,
}: ButtonPropsType) => {
  const handleClassName = () => {
    switch (variant) {
      case Variant.PRIMARY:
        return classes["button_primary"];
      default:
        return "";
    }
  };
  // JSX
  return (
    <button className={handleClassName()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
