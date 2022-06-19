// node_modules
import React from "react";
// types
import { ButtonPropsType } from "apps/shared/types/ButtonType";
// constants
import { Variant } from "apps/shared/core/constants";
// styles
import classes from "apps/shared/styles/button/style.module.scss";

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
    return (
        <button className={handleClassName()} type={type} onClick={onClick} style={styles}>
            {children}
        </button>
    );
};

export default Button;
