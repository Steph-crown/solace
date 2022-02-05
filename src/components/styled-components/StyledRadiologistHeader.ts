import styled from "styled-components";

export const StyledRadiologistHeader = styled.header`
    width: 100%;
    margin-bottom: 4rem;

    @media (max-width: 650px) {
        margin-bottom: 2rem;
    }

    div.progress {
        width: 100%;
        max-width: 700px;
    }

    label {
        margin-bottom: 8px;
        display: block;
        font-weight: 600;
        font-size: 1em;
        line-height: 25px;
        color: #425466;
    }
    progress {
        display: block;
        width: 100%;
        background-color: #dddcf7;
        border-radius: 1rem;
        color: green;
        border: none;
        max-width: 45rem;
        height: 0.8rem;

        &::-moz-progress-bar {
            border-radius: 1rem;
            background-color: var(--secondary);
        }

        &::-webkit-progress-value {
            border-radius: 1rem;
            background-color: var(--secondary);
        }

        &::-webkit-progress-bar {
            border-radius: 1rem;
            background-color: #dddcf7;
        }
    }

    button {
        margin-top: 1.5rem;
        background-color: transparent;
        border: none;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 14px;
        cursor: pointer;
        /* identical to box height, or 100% */

        /* Theme/Primary/Default */

        color: var(--blue);

        &:hover {
            opacity: 0.7;
        }
    }
`;
