import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  input {
    position: absolute;
    opacity: 0;
  }
  label {
    cursor: pointer;
    user-select: none;
    width: 60px;
    height: 30px;
    display: block;
    border-radius: 30px;
    transition: background-color 200ms ease-in-out;
    /* background-color: ${({ theme, isLight }) =>
      isLight ? theme.color.veryDarkGrey : theme.color.veryDarkGrey}; */
    background-color: ${({ theme }) => theme.color.grey300};
    display: flex;
    align-items: center;
    padding: 5px;
  }
  input:focus {
    outline: none;
  }
  input:focus + label {
    outline: 3px dashed grey;
  }
  span {
    background-color: ${({ theme, isLight }) =>
      isLight ? theme.color.yellow500 : theme.color.grey700};
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in-out;
    transform: ${({ isLight }) =>
      isLight ? 'translateX(0)' : 'translateX(30px)'};
  }
`;
