import styled from "styled-components";

export const SideNavContainer = styled.section.attrs({
    className: "side-nav",
})`
    width: 15.8em;
    background-color: white;
    min-height: 100vh;

    img.logo {
        height: 40px;
        margin: 24px;
    }

    nav {
        margin: 24px 0;
        border-bottom: 1px solid #edf2f7;
        padding-bottom: 1.5em;
        padding-right: 1.5em;
    }

    div.contacts {
        margin: 24px 0;
        padding-bottom: 1.5em;
        padding-right: 1.5em;
        padding-left: 1.5em;

        & > section {
            margin-top: 1.2em;
        }

        small.header {
            font-weight: 600;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #718096;
            display: flex;
            min-height: 2px;
            align-items: center;

            span.unread {
                font-weight: bold;
                font-size: 12px;
                line-height: 15px;
                color: var(--blue);
                background: #e1e8ff;
                display: block;
                height: 19px;
                margin-left: 1.5em;
                width: 28px;
                border-radius: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;
