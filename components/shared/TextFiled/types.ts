import React from "react";

export type TextFieldPropsTypes = {
  value: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder: string;
};
