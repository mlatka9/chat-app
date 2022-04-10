import styled from 'styled-components';

const Wrapper = styled.label`
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;
  margin: 14px 0 10px;
  user-select: none;
  cursor: pointer;
  transition: transform 150ms ease-in-out, opacity 150ms ease-in;
  color: ${({ theme }) => theme.color.grey200};
  span {
    display: block;
  }
  span:first-of-type {
    width: 18px;
    height: 18px;
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.color.blue500 : theme.color.grey500};
    position: relative;
    border-radius: 50%;
    &::after {
      transition: transform 100ms ease-in;
      position: absolute;
      content: '';
      background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.grey800 : theme.color.grey800};
      border-radius: 50%;
      width: 15px;
      height: 15px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%)
        ${({ isSelected }) => (isSelected ? `scale(0.3)` : `scale(1)`)};
    }
  }
  span:nth-of-type(2) {
    margin-left: 10px;
  }
  input {
    opacity: 0;
    position: absolute;
  }
  input:focus-visible + span {
    outline: 2px solid ${({ theme }) => theme.color.grey200};
  }
`;

const FormCheckbox = ({ label, register, isSelected }) => {
  return (
    <Wrapper isSelected={isSelected} htmlFor="form-checkbox">
      <input type="checkbox" id="form-checkbox" {...register(label)} />
      <span />
      <span>{label}</span>
    </Wrapper>
  );
};

export default FormCheckbox;
