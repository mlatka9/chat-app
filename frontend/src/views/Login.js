import LoginWrapper from 'components/Login/LoginWrapper/LoginWrapper';
import {
  StyledForm,
  LoginParapgraph,
  DefaultCredential,
} from './Signup/Signup.styles';
import { useForm } from 'react-hook-form';
import FormField from 'components/Login/FormField/FormField';
import Button from 'components/Common/Button/Button';
import SocialsBox from 'components/Login/SocialsBox/SocialsBox';
import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useState } from 'react';
import ErrorMessage from 'components/Profile/ErrorMessage/ErrorMessage';
import styled from 'styled-components';

const LoginErrorMessage = styled(ErrorMessage)`
  text-align: center;
`;

const Login = () => {
  const { loginUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await loginUser(email.trim(), password.trim());
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <LoginWrapper header="Login">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="email"
            options={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }}
            error={errors.email?.message}
            register={register}
            icon="envelope"
          ></FormField>

          <FormField
            label="password"
            type="password"
            options={{ required: 'Password is required' }}
            error={errors.password?.message}
            register={register}
            icon="lock"
          ></FormField>

          <Button type="submit">Login</Button>
          {errorMessage ? (
            <LoginErrorMessage>{errorMessage}</LoginErrorMessage>
          ) : null}
        </StyledForm>

        <SocialsBox />

        <LoginParapgraph>
          Don’t have an account yet? <Link to="/signup">Register</Link>
        </LoginParapgraph>
        <DefaultCredential>
          <span>
            email: guest@gmail.com
            <br />
            password: guest123
          </span>
        </DefaultCredential>
      </LoginWrapper>
    </>
  );
};

export default Login;
