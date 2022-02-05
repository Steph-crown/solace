import { FC } from "react";
import { IProgressProps } from "./interface";
import { ProgressContainer } from "./style";

/**
 * @param {number} value
 * @param {number} max
 * @description Component that specifies the step progress Logic (100% * (value / max)
 */
export const Progress: FC<IProgressProps> = ({ value, max }) => {
    return <ProgressContainer {...{ value, max }}></ProgressContainer>;
};
