import styled from "styled-components";

export const ThemeButtonContainer = styled.button.attrs<{ disabled: any }>(
    (props) => ({ disabled: props.disabled })
)`
    width: 100%;
    background: ${(props) => (props.disabled ? "#C9CED6" : "var(--blue)")};
    display: flex;
    justify-content: center;
    border-radius: 8px;
    padding: 16px 0;
    outline: none;
    border: none;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: all 0.3s linear;

    font-weight: 600;
    font-size: 14px !important;
    line-height: 14px !important;
    /* identical to box height, or 100% */

    /* Theme/White/Default */
    color: #ffffff !important;

    &:hover {
        background: ${(props) => (props.disabled ? "#b1b4ba" : "#3453d1")};
    }
`;
