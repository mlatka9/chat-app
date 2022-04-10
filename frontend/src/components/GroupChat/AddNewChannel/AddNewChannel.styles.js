import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0%{
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  100%{
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const Wrapper = styled.form`
  width: 80%;
  max-width: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.grey800};
  padding: 40px 70px 30px;
  z-index: 1000000;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 200ms ease-in-out;
  @media (max-width: 650px) {
    width: calc(100% - 30px);
    padding: 40px 30px 30px;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.grey100};
    text-transform: uppercase;
    margin: 0 0 26px;
  }
  > div {
    margin-bottom: 10px;
  }
  button {
    margin-top: 20px;
    align-self: flex-end;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  button:first-of-type {
    margin-right: 15px;
  }
`;
