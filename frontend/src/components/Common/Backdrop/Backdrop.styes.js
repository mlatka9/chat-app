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
  z-index: 100;
  inset: 0;
  background-color: ${({ isDark }) => (isDark ? 'rgba(0,0,0,0.4)' : 'unset')};
  backdrop-filter: ${({ isDark }) => (isDark ? 'blur(5px)' : 'unset')};
  animation: ${({ isAnimated }) => (isAnimated ? fadeIn : null)} 200ms
    ease-in-out;
`;
