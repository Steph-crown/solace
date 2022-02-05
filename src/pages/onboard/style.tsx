import styled from "styled-components";

export const OnboardingContainer = styled.div`
    width: 100%;

    position: relative;

    div.flex {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 120px;
        flex-wrap: wrap;
        margin-bottom: 5em;
        & > div {
            width: 300px;

            max-width: 100%;
        }

        & > div:first-child {
            margin-right: 3em;
        }

        @media (max-width: 1360px) {
            flex-direction: row;
            align-items: flex-start;
            & > div {
                &:first-child {
                    margin-right: 0;
                    margin-right: 3em;
                }
            }
        }

        @media (max-width: 1290px) {
            flex-direction: row;
            align-items: flex-start;
            & > div {
                width: 45%;
                &:first-child {
                    margin-right: 0;
                    margin-right: 3em;
                }
            }
        }

        @media (max-width: 1200px) {
            flex-direction: row;
            align-items: center;
            & > div {
                width: 45%;
                &:first-child {
                    margin-right: 3em;
                    margin-bottom: 0em;
                }
            }
        }

        @media (max-width: 940px) {
            flex-direction: column;
            align-items: center;
            margin-top: 72px;
            & > div {
                width: 100%;
                &:first-child {
                    margin-right: 0em;
                    margin-bottom: 6em;
                }
            }
        }

        @media (max-width: 565px) {
            flex-direction: column;
            margin-top: 80px;
            align-items: center;
            & > div {
                width: 100%;
                &:first-child {
                    margin-right: 0;
                    margin-bottom: 5em;
                }
            }
        }
    }
`;
