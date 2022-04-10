import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    0%{
        transform: translate(-50%, -100%);
    }

    100% {
        transform: translate(-50%, 25%);
    }
`;

export const Wrapper = styled.form`
  position: fixed;
  top: 0;
  left: 50%;
  padding: 40px 70px 30px;
  border: 1px solid ${({ theme }) => theme.color.grey500};
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.grey700};
  animation: ${slideIn} 500ms ease-out forwards;
  z-index: 1000;
  width: 80%;
  max-width: 600px;
  h2 {
    color: ${({ theme }) => theme.color.grey200};
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.grey100};
    text-transform: uppercase;
    margin: 0 0 26px;
  }

  span {
    color: ${({ theme }) => theme.color.red500};
    margin-left: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  button:first-of-type {
    margin-left: auto;
    margin-right: 15px;
  }
`;
