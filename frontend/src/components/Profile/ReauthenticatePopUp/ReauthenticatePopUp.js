import Button from 'components/Common/Button/Button';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';

import { useState } from 'react';
import { Wrapper, ButtonsWrapper } from './ReauthenticatePopUp.styles';
import Backdrop from 'components/Common/Backdrop/Backdrop';
import FormField from 'components/Login/FormField/FormField';

const modalRoot = document.querySelector('#modal-root');

const ReauthenticatePopUp = ({ onSubmit, onCancel, headerText }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password');

  const handleOnClick = async () => {
    try {
      await onSubmit(password);
    } catch (err) {
      setErrorMessage('Wrong password! Try again');
    }
  };

  return createPortal(
    <>
      <Wrapper onSubmit={handleSubmit(handleOnClick)}>
        <h2>{headerText}</h2>
        <FormField
          type="password"
          label="password"
          options={{
            required: 'Password is required',
          }}
          error={errors.password?.message}
          register={register}
        />
        <ButtonsWrapper>
          <Button type="button" isAccent onClick={onCancel}>
            Cancel
          </Button>
          <Button>Submit</Button>
        </ButtonsWrapper>
        {errorMessage ? <span>{errorMessage}</span> : null}
      </Wrapper>
      <Backdrop isAnimated isDark></Backdrop>
    </>,
    modalRoot
  );
};

export default ReauthenticatePopUp;
