import React from "react";

type Tvariant = "primary" | "danger";
type Ttype = "button" | "submit";

export type ButtonPropsType = {
    children: React.ReactElement | React.ReactNode;
    variant?: Tvariant;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: Ttype;
    styles?: object;
};
