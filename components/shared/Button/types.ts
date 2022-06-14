import React from "react";

type Tvariant = "primary";

export type ButtonPropsType = {
  children: React.ReactElement | React.ReactNode;
  variant?: Tvariant;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
