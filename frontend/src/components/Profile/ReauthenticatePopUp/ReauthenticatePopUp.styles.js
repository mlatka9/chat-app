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
  padding: 30px 50px;
  border: 1px solid ${({ theme }) => theme.color.grey500};
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.grey700};
  animation: ${slideIn} 500ms ease-out forwards;
  h2 {
    color: ${({ theme }) => theme.color.grey200};
    margin-bottom: 50px;
  }
  input {
    width: 100%;
    border: none;
    outline: 1px solid ${({ theme }) => theme.color.grey400};
    height: 46px;
    color: ${({ theme }) => theme.color.grey300};
    border-radius: 8px;
    padding-left: 20px;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: ${({ theme }) => theme.color.grey700};
    margin-bottom: 20px;
    &:focus {
      outline: 2px solid ${({ theme }) => theme.color.grey200};
      color: ${({ theme }) => theme.color.grey200};
    }
  }
  span {
    color: ${({ theme }) => theme.color.red500};
    margin-left: 20px;
  }
`;
