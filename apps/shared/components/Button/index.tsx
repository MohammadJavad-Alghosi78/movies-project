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
  type = "button",
  styles = {},
}: ButtonPropsType) => {
  const handleClassName = () => {
    switch (variant) {
      case Variant.PRIMARY:
        return classes["button_primary"];
      case Variant.DANGER:
        return classes["button_danger"];
      default:
        return "";
    }
  };
  // JSX
  return (
    <button className={handleClassName()} onClick={onClick} style={styles}>
      {children}
    </button>
  );
};

export default Button;
