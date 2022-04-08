import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`    
    *, *::after, *::before {
        margin: 0;
        box-sizing: border-box;
        transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease;
    }

    
    *:focus {
        outline: 3px dashed grey;
    }
    

    html, body, #root {
        height: 100%;  
    }

    body {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;
        background-color: ${({ theme }) => theme.color.grey900};     
    }   

    button, input, textarea {
        font-family: inherit;
    }
`;

export default GlobalStyles;
