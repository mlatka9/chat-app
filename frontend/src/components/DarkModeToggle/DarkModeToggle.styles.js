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
    width: 70px;
    height: 40px;
    display: block;
    border-radius: 50px;
    transition: background-color 200ms ease-in-out;
    background-color: ${({ theme, isLight }) =>
      isLight ? theme.color.veryDarkGrey : theme.color.veryDarkGrey};
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
      isLight ? theme.color.yellow : theme.color.white};
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in-out;
    transform: ${({ isLight }) =>
      isLight ? 'translateX(0)' : 'translateX(30px)'};
  }
`;
