import Button from 'components/Button/Button';
import useAuth from 'hooks/useAuth';
import { createPortal } from 'react-dom';

import { useState } from 'react';
import { Wrapper } from './ReauthenticatePopUp.styles';

const modalRoot = document.querySelector('#modal-root');

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
