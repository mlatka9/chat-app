import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  textarea {
    resize: none;
    height: 120px;
    padding-top: 13px;
  }
  input:not(:placeholder-shown) + label,
  textarea:not(:placeholder-shown) + label {
    background-color: red;
    transform: translate(10px, -26px);
    background-color: ${({ theme }) => theme.color.grey700};
    padding: 0 2px;
    opacity: 1;
  }
  label {
    text-transform: capitalize;
    opacity: 0;
    display: block;
    position: absolute;
    top: 13px;
    left: 12px;
    transform: ${({ hasIcon }) =>
      hasIcon ? 'translate(30px, 0px)' : 'translate(0px, 0px)'};
    transition: transform 150ms ease-in-out, opacity 150ms ease-in;
    color: ${({ theme }) => theme.color.grey200};

    pointer-events: none;
  }

  svg {
    position: absolute;
    left: 12px;
    top: 24px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    path {
      fill: ${({ theme }) => theme.color.grey400};
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  transition: transform 1s ease-in-out;
  outline: ${({ theme, error }) =>
    error
      ? `1px solid  ${theme.color.red500}`
      : `1px solid ${theme.color.grey500}`};
  height: 48px;
  color: ${({ theme }) => theme.color.grey200};
  border-radius: 8px;
  padding-left: ${({ hasIcon }) => (hasIcon ? '42px' : '12px')};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.color.grey700};
  &::placeholder {
    text-transform: capitalize;
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.grey200};
    color: ${({ theme }) => theme.color.grey200};
  }
`;
