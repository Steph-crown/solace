import { FC } from "react";
import { ICheckboxProps } from "./interface";
import { CheckboxContainer } from "./style";

/**
 * @param {Boolean} selected
 * @param {any} setSelectedValue
 * @returns {JSX} Checkbox component
 * @description Checkbox component. selectedValue is the value selected from all the radio buttons
 * setSelectedValue is the function that sets the selected value of the group to the value of this radio .
 */
export const Checkbox: FC<ICheckboxProps> = ({
    selected,
    setSelected,
    name,
    label,
}) => {
    return (
        <CheckboxContainer>
            <input
                type="checkbox"
                name={name}
                id={name}
                checked={selected}
                // Sets the current selected value
                onChange={() => setSelected(!selected)}
            />
            <div className="checkbox"></div>
            <small>{label}</small>
        </CheckboxContainer>
    );
};
