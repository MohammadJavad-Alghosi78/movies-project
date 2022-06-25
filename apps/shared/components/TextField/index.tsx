import React from "react";
// types
import { TextFieldPropsTypes } from "apps/shared/types/TextFieldType";
// styles
import classes from "apps/shared/styles/textField/textField.module.scss";

function TextField({
    value,
    handleChange,
    placeholder,
    id,
    type = "text",
    hasBorder = false,
}: TextFieldPropsTypes): JSX.Element {
    const handleClassName = () => {
        if (hasBorder) return classes.text_field_bordered;
        return classes.text_field;
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
}

export default TextField;
