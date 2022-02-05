import styled from "styled-components";

export const DateInputContainer = styled.label<{ width?: string }>`
    display: block;
    width: ${(props) => props.width || "100%"};
    margin: 1em 0;
    @media (max-width: 500px) {
        width: 100%;
        margin: 0.8em 0;
    }
    small,
    input {
        display: block;
        width: 100%;
    }

    small {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #425466;
    }

    .date-place {
        background: white;
        margin-top: 8px;
        box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08),
            0px 0px 1px rgba(50, 50, 71, 0.2);
        border-radius: 6px;
        padding-right: 16px;
    }

    input {
        font-size: 15px;
        line-height: 15px;
        background: transparent;
        font-weight: 400;
        color: #222;
        padding: 16px;

        outline: none;
        border: 1px solid transparent;

        ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #7a828a;
            opacity: 1; /* Firefox */
            font-weight: 500;
        }

        :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #7a828a;
            font-weight: 500;
        }

        ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: #7a828a;
            font-weight: 500;
        }

        &:focus {
            box-shadow: 0px 0px 0px 2px rgba(76, 111, 255, 0.3);
            border: 1px solid #7895ff;
        }
    }
`;
