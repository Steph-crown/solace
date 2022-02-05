import styled from "styled-components";

export const DashboardHeaderContainer = styled.div`
    padding: 2.5em 3.75em;
    display: flex;
    min-height: 2px;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-weight: 600;
        font-size: 28px;
        line-height: 136.02%;
    }

    div.second {
        display: flex;
        min-height: 2px;
        align-items: center;
    }

    button.upload {
        color: var(--body-muted);
        font-weight: 600;
        font-size: 1.125em;
        line-height: 18px;
        border: 2px solid #e5e5e5;
        border-radius: 8px;
        background: transparent;
        padding: 16px 24px;
        display: flex;
        min-height: 2px;
        align-items: center;
        margin-right: 30px;
        cursor: pointer;
        svg {
            height: 18px;
            width: 18px;
            margin-right: 10px;
        }

        &:hover {
            color: #667385;
            border-color: #667385;
        }

        @media (max-width: 1100px) {
            span {
                display: none;
            }
            svg {
                margin-right: 0;
            }
            padding: 16px;
        }
    }
    div.profile-image {
        margin-left: 12px;
        & > div {
            height: 56px;
            width: 56px;
        }
    }

    div.mobile-menu {
        display: none;
    }

    @media (max-width: 900px) {
        padding: 1.25em;

        div.flex {
            display: flex;
            min-height: 2px;
            align-items: center;
            div.mobile-menu {
                margin-right: 1.5em;
            }
        }

        div.mobile-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 18px;
            height: 14px;

            & > div {
                width: 100%;
                height: 2px;
                background-color: var(--body-muted);
            }
        }

        h1 {
            font-size: 1.2em;
        }

        button.upload {
            font-size: 0.875em;
            padding: 12px 16px;

            svg {
                margin-right: 8px;
                height: 14px;
            }
            span {
                display: block;
            }
        }

        svg.notification {
            height: 48px;
            width: 48px;
        }
        div.profile-image {
            margin-left: 12px;
            & > div {
                height: 48px;
                width: 48px;
            }
        }
    }

    @media (max-width: 650px) {
        svg.notification {
            height: 32px;
            width: 32px;
        }

        button.upload {
            font-size: 0.875em;
            padding: 12px 12px;
            margin-right: 16px;

            svg {
                margin-right: 8px;
                height: 14px;
            }
            span {
                display: block;
            }
        }
        div.profile-image {
            margin-left: 8px;
            & > div {
                height: 32px;
                width: 32px;
                font-size: 0.875em;
            }
        }
    }

    @media (max-width: 500px) {
        div.flex {
            margin-right: 1em;
        }
        button.upload {
            font-size: 0.875em;
            padding: 12px 12px;
            margin-right: 16px;

            svg {
                margin-right: 0px;
                height: 14px;
            }
            span {
                display: none;
            }
        }

        svg.notification {
            display: none;
        }
    }
`;
