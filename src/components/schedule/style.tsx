import styled from "styled-components";

export const ScheduleContainer = styled.div`
    margin: 2.5em 0;

    > div.button {
        margin: 0 !important;
    }

    .display {
        width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        border-radius: 8px;
        padding: 16px 0;
        outline: none;
        border: none;
        transition: all 0.3s linear;
        background-color: var(--soft-blue);
        align-items: center;

        font-weight: 600;
        font-size: 14px !important;
        line-height: 14px !important;
        /* identical to box height, or 100% */

        /* Theme/White/Default */
        color: var(--blue) !important;
        margin-top: 1em;

        svg {
            margin-left: 1em;
            cursor: pointer;
            transition: 1s;

            &:hover {
                transform: scale(1.3);
            }
        }
    }
`;
