import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`    
    *, *::after, *::before {
        margin: 0;
        box-sizing: border-box;
        transition: background-color ${({ theme }) =>
          theme.animationDuration} ease, color ${({ theme }) =>
  theme.animationDuration}, border-color ${({ theme }) =>
  theme.animationDuration} ease;
        scrollbar-color: ${({ theme }) => theme.color.grey500}  ${({ theme }) =>
  theme.color.grey600} ;
        scrollbar-width: thin;
    }

    path {
        transition: fill ${({ theme }) => theme.animationDuration} ease
    }

    input::placeholder {
        transition: color ${({ theme }) => theme.animationDuration} ease
    }

    
    *:focus-visible {
        outline: 3px dashed grey;
    }
    

    html, body, #root {
        height: 100%;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

     *::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.color.grey600};  
        border-radius: 10px;
        
    }
    *::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.color.grey500};  
        background-clip: content-box;
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
