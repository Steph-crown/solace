import styled from "styled-components";

export const UserTypeContainer = styled.div`
    div.avatar-container {
        margin: 6em auto;
        max-width: 300px;
    }

    form {
        margin: 5em 0;
        @media (max-width: 650px) {
            margin: 3em 0;
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
        div.button {
            margin: 3.125em 0;
        }
    }
`;
