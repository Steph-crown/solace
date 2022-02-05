import { FC } from "react";
import { IRadioProps } from "./interface";
import { RadioContainer } from "./style";

/**
 * @param {Boolean} selected
 * @param {any} setSelectedValue
 * @returns {JSX} Checkbox component
 * @description Checkbox component. selectedValue is the value selected from all the radio buttons
 * setSelectedValue is the function that sets the selected value of the group to the value of this radio .
 */
export const Radio: FC<IRadioProps> = ({
    selectedValue,
    setSelectedValue,
    name,
    label,
    value,
}) => {
    return (
        <RadioContainer>
            <input
                type="radio"
                name={name}
                id={name}
                checked={selectedValue === value}
                // Sets the current value
                onChange={() => setSelectedValue(value)}
            />
            <div className="radio"></div>
            <small>{label}</small>
        </RadioContainer>
    );
};
