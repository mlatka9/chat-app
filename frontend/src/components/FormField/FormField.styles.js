import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.color.red};
    margin-top: 5px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    border: none;
    outline: ${({ theme, error }) =>
      error
        ? `1px solid  ${theme.color.red}`
        : `1px solid ${theme.color.lightGrey}`};
    height: 48px;
    color: ${({ theme }) => theme.color.grey};
    border-radius: 8px;
    padding-left: 42px;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: ${({ theme }) => theme.color.white};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.color.veryDarkGrey};
      color: ${({ theme }) => theme.color.veryDarkGrey};
    }
  }
  svg {
    position: absolute;
    left: 12px;
    top: 24px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    path {
      fill: ${({ theme }) => theme.color.grey};
    }
  }
`;
