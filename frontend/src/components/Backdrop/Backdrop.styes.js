import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
 0%{
    opacity: 0;
   
  }
  100%{

    opacity: 1;
  }
`;

export const StyledDiv = styled.div`
  position: fixed;
  inset: 0;
  /* z-index: 1000; */
  background-color: ${({ isDark }) => (isDark ? 'rgba(0,0,0,0.4)' : 'unset')};
  backdrop-filter: ${({ isDark }) => (isDark ? 'blur(5px)' : 'unset')};
  animation: ${({ isAnimated }) => (isAnimated ? fadeIn : null)} 200ms
    ease-in-out;
`;
