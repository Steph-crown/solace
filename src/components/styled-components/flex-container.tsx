import styled from "styled-components";

export const FlexContainer = styled.section`
    display: flex;
    width: 100%;
    align-items: flex-start;

    @media (max-width: 600px) {
        flex-direction: column;
    }

    div.left {
        position: sticky;
        top: 0;
        left: 0;
        background-color: var(--blue);
        padding: 2.8em 3.5em;
        width: 530px;
        max-width: 100%;
        color: white;
        min-height: 100vh;
        img.logo {
            height: 42px;
        }
        h1 {
            font-size: 40px;
            margin-top: 100px;
        }
        h6 {
            font-size: 18px;
            margin-top: 1.5em;
            font-weight: 400;
            line-height: 34px;
        }

        svg.abs-el {
            position: absolute;
            bottom: 0;
            right: 80px;
        }

        svg.abs-com {
            position: absolute;
            left: 35px;
            bottom: 28px;
        }

        @media (max-width: 1200px) {
            width: 400px;
        }

        @media (max-width: 940px) {
            width: 45%;
        }

        @media (max-width: 800px) {
            width: 300px;
        }
        @media (max-width: 650px) {
            width: 100%;
            display: none;
        }
    }

    div.right {
        flex: 1;
        width: 100%;
        background: #f7fafc;
        padding: 5.8em 3.5em;
        min-height: 100vh;

        div.sm {
            display: none;
        }

        img.logo {
            height: 42px;
            @media (max-width: 900px) {
                height: 32px;
            }
        }
        h1 {
            color: #27272e;
            margin-bottom: 12px;
            font-weight: 600;
            font-size: 1.75em;
        }

        p {
            color: var(--heading-dark);
            line-height: 162.02%;
        }

        @media (max-width: 650px) {
            padding: 1.6em calc(0.05 * 100vw);
            h1 {
                margin-top: 2em;
                text-align: center;
            }

            p {
                text-align: center;
                margin-bottom: 0;
            }

            div.sm {
                display: block;

                a.mobile-logo {
                    margin-bottom: 1em;
                    display: block;
                }

                h6 {
                    margin-top: 1em;
                    font-weight: 300;
                    line-height: 24px;
                    font-size: 1em;
                }
            }
        }
    }
    footer {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 1em 3.5em;
        @media (max-width: 650px) {
            padding: 1.6em calc(0.05 * 100vw);
        }
        a {
            display: flex;
            font-weight: 600;
            font-size: 1em;
            @media (max-width: 650px) {
                font-size: 0.85em;
            }
            line-height: 25px;
            align-items: center;

            /* min-height: 2px; */

            color: var(--blue);

            svg {
                margin-left: 14px;
            }
        }
    }

    .invite {
        width: 100%;
        background-color: #3453d1;
        display: block;
        border-radius: 8px;
        padding: 10px 0;
        outline: none;
        border: none;
        transition: all 0.3s linear;
        text-align: center;
        font-weight: 600;
        font-size: 14px !important;
        color: #ffffff;

        &:hover {
            opacity: 0.7;
        }
    }
`;
