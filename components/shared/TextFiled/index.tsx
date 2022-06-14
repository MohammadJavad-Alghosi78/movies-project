// node_modules
import React from "react";
// Types
import { TextFieldPropsTypes } from "./types";
// Styles
import classes from "./styles.module.scss";

const TextField = ({
  value,
  handleChange,
  placeholder,
}: TextFieldPropsTypes): JSX.Element => {
  return (
    <input
      className={classes.text_field}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextField;
