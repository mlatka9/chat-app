import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.grey700};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${spin} 1500ms linear infinite;
  }
  path {
    fill: ${({ theme }) => theme.color.grey200};
  }
`;
