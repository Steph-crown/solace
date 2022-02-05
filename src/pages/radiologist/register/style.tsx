import styled from "styled-components";

export const RegisterRadiologistContainer = styled.div`
    form {
        margin: 3em 0;
        @media (max-width: 650px) {
            margin: 2em 0;
        }
        h5 {
            color: var(--text-body-dark);
            font-weight: 600;
            font-size: 21px;
            line-height: 136.02%;
            margin-bottom: 1em;

            @media (max-width: 650px) {
                font-size: 1.125em;
            }
        }
        h4 {
            font-weight: 500;
            font-size: 21px;
            line-height: 136.02%;
            margin-bottom: 1em;
            margin-top: 2.5em;
            /* identical to box height, or 29px */

            /* Text/Heading/Dark */

            color: #27272e;
        }
        div.button {
            margin: 1.5em 0;

            .continue {
                background-color: var(--soft-blue);
                color: var(--blue) !important;
                margin-top: 1.5em;
            }
        }
    }
`;
