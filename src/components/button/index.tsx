import { FC } from "react";
import { ThemeButtonContainer } from "./style";
import { IThemeButtonProps } from "./interface";
/**
 * @param {JSX} children
 * @param {Event} onClick
 * @param {Boolean} disabled
 * @returns {JSX} solid blue Button component
 * @description Themed button component.
 */
export const ThemeButton: FC<IThemeButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
    type,
}) => {
    return (
        <ThemeButtonContainer
            onClick={onClick}
            type={type || "button"}
            disabled={disabled}
            className={className}
        >
            {children}
        </ThemeButtonContainer>
    );
};
