import Button from 'components/Button/Button';
import useAuth from 'hooks/useAuth';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const slideIn = keyframes`
    0%{
        transform: translate(-50%, -100%);
    }

    100% {
        transform: translate(-50%, 25%);
    }
`;

const modalRoot = document.querySelector('#modal-root');

const Wrapper = styled.form`
  position: fixed;
  top: 0;
  left: 50%;
  padding: 30px 50px;
  border: 1px solid ${({ theme }) => theme.color.veryLightGrey};
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
  animation: ${slideIn} 500ms ease-out forwards;
  h2 {
    color: ${({ theme }) => theme.color.darkGrey};
    margin-bottom: 50px;
  }
  input {
    width: 100%;
    border: none;
    outline: 1px solid ${({ theme }) => theme.color.lightGrey};
    height: 46px;
    color: ${({ theme }) => theme.color.grey};
    border-radius: 8px;
    padding-left: 20px;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: ${({ theme }) => theme.color.white};
    margin-bottom: 20px;
    &:focus {
      outline: 2px solid ${({ theme }) => theme.color.veryDarkGrey};
      color: ${({ theme }) => theme.color.veryDarkGrey};
    }
  }
  span {
    color: ${({ theme }) => theme.color.red};
    margin-left: 20px;
  }
`;

const ReauthenticatePopUp = ({ handleSubmit }) => {
  const { reAuthUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [formValue, setFormValue] = useState('');

  const handleReAuth = async (e) => {
    e.preventDefault();
    try {
      await reAuthUser(formValue);
      handleSubmit();
    } catch (err) {
      console.log({ err });
      setErrorMessage('Invalid password');
      return;
    }
  };

  return createPortal(
    <Wrapper onSubmit={handleReAuth}>
      <h2>Reauthenticate yourselft</h2>
      <input
        type="password"
        value={formValue}
        onChange={({ target }) => setFormValue(target.value)}
      />
      <Button type="submit">Submit</Button>
      {errorMessage ? <span>{errorMessage}</span> : null}
    </Wrapper>,
    modalRoot
  );
};

export default ReauthenticatePopUp;
