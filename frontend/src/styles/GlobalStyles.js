import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`    
    *, *::after, *::before {
        margin: 0;
        box-sizing: border-box;
        /* transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease; */
    }

    html, body, #root {
        height: 100%;  
    }

    body {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;
        background-color: ${({ theme }) => theme.color.background};     
    }   

    button, input, textarea {
        font-family: inherit;
    }
`;

export default GlobalStyles;
