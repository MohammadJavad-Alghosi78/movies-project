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
  id,
  type = "text",
  hasBorder = false,
  onClick,
}: TextFieldPropsTypes): JSX.Element => {
  const handleClassName = () => {
    if (hasBorder) return classes["text_field_bordered"];
    return classes["text_field"];
  };
  return (
    <input
      className={handleClassName()}
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextField;
