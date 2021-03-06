import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {}

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        font-size: 1.8rem;
        line-height: 1.5;
    }
`;
