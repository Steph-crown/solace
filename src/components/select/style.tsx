import styled from "styled-components";

export const SelectContainer = styled.label<{ width?: string }>`
    display: block;
    width: ${(props) => props.width || "100%"};
    margin: 1em 0;
    @media (max-width: 500px) {
        width: 100%;
        margin: 0.8em 0;
    }
    small,
    div.dd-wrapper,
    button.dd-header {
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

    button.dd-header {
        font-size: 15px;
        cursor: pointer;
        line-height: 15px;
        background: white;
        margin-top: 8px;
        font-weight: 400;
        color: #222;
        padding: 16px;
        box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08),
            0px 0px 1px rgba(50, 50, 71, 0.2);
        border-radius: 6px;
        outline: none;
        border: 1px solid transparent;
        display: flex;
        justify-content: space-between;
        min-height: 2px;
        align-items: center;

        color: #7a828a;
        font-weight: 500;

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

    div.dd-list {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 7.5px 10px;
        border-radius: 10px;
        transition: transform 1s;
        max-height: 200px;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 0px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: transparent;
        }
    }

    button.dd-list-item {
        font-weight: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #425466;
        font-weight: 500;
        padding: 16px;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: background 1s;
        display: flex;
        justify-content: flex-start;
        margin: 2.5px 0;
        cursor: pointer;
        background: transparent;

        &:hover {
            background-color: #f6f6f6;
        }
    }

    button.dd-list-item[data-selected="true"] {
        background: #edf2f7;
    }
`;
