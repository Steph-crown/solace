import styled from "styled-components";

export const CheckboxContainer = styled.label`
    cursor: pointer;
    display: block;
    display: flex;
    min-height: 2px;
    align-items: center;
    margin: 0.5em 0;

    small {
        font-weight: 500;
        font-size: 0.875em;
        line-height: 24px;
        /* identical to box height, or 171% */

        color: #727987;
    }

    /* custom button */
    div.checkbox {
        width: 20px;
        height: 20px;
        border: 2px solid #c9ced6;
        border-radius: 4px;
        position: relative;
        margin-right: 12px;
        padding: 5px;
    }

    /* On hover */
    &:hover {
        div.checkbox {
            border-color: #7895ff;
        }
    }

    input[type="checkbox"] {
        /* Remove default buton */
        display: none;
        &:checked ~ div.checkbox {
            border-color: var(--blue);
            &:after {
                content: "";
                width: 10px;
                height: 10px;
                background: var(--blue);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 2px;
            }
        }
    }
`;
