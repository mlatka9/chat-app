import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`    
    *, *::after, *::before {
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;
    }   

    button, input, textarea {
        font-family: inherit;
    }
`;

export default GlobalStyles;
