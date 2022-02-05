import styled from "styled-components";

export const InputGroupContainer = styled.label<{
    width?: string;
    error: boolean;
    password?: boolean;
}>`
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

    input {
        font-size: 15px;
        line-height: 15px;
        background: white;
        margin-top: 8px;
        font-weight: 400;
        color: ${({ error }) => (error ? "var(--error)" : "#222")};
        padding: 16px;
        padding-right: ${(props) => (props.password ? "40px" : "16px")};

        box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08),
            0px 0px 1px rgba(50, 50, 71, 0.2);
        border-radius: 6px;
        outline: none;
        border: ${({ error }) =>
            error ? "1px solid var(--error)" : "1px solid transparent"};
        transition: 1s ease;

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
            box-shadow: ${({ error }) =>
                error
                    ? "0px 0px 0px 2px rgba(241, 96, 99, 0.3)"
                    : " 0px 0px 0px 2px rgba(76, 111, 255, 0.3)"};
            border: ${({ error }) =>
                error ? "1px solid var(--error)" : "1px solid #7895ff"};
        }
    }

    small.error {
        color: var(--error);
        display: inline-block;
        margin-top: 8px;
    }

    & > div {
        position: relative;

        svg {
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            right: 16px;
        }
    }
`;
