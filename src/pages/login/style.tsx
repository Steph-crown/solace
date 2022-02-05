import styled from "styled-components";

export const LoginStyle = styled.div`
    .wave {
        margin-bottom: 2em;
    }

    @media (max-width: 650px) {
        header {
            display: flex;
            margin-top: 2em;
            justify-content: center;
            h1 {
                margin-top: 0 !important;
            }
            .wave {
                margin-bottom: 0;
                margin-right: 1em;
            }
        }
    }

    .forgot {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        a {
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;

            text-align: right;

            color: var(--blue);
        }
    }

    .select-role {
        width: 100%;
        margin: 1em 0;
        @media (max-width: 500px) {
            width: 100%;
            margin: 0.8em 0;
        }
        small.error {
            color: var(--error);
            display: inline-block;
            margin-top: 8px;
        }
    }

    small {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #425466;
    }

    .role-buttons {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        button {
            width: 48%;
            border-radius: 8px;
            padding: 1.5em;
            outline: none;
            border: none;
            color: var(--blue);
            background-color: var(--soft-blue);
            border: 1px solid var(--soft-blue);
            cursor: pointer;
            font-weight: 600;
            font-size: 1em;
            line-height: 14px;
            transition: 1s;

            @media (max-width: 800px) {
                width: 100%;

                &:first-child {
                    margin-bottom: 1em;
                }
            }

            &:hover {
                border-color: var(--blue);
                transform: scale(1.05);
            }

            &.active {
                background-color: var(--blue);
                color: var(--white);
            }
        }
    }
`;
