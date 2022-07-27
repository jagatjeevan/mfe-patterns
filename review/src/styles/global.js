import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: inherit;
    }
`;