import LoginWrapper from 'components/LoginWrapper/LoginWrapper';
import { StyledForm } from './Signup';
import { useForm } from 'react-hook-form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';
import SocialsBox from 'components/SocialsBox/SocialsBox';
import { LoginParapgraph } from './Signup';
import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import styled from 'styled-components';

const LoginErrorMessage = styled(ErrorMessage)`
  text-align: center;
`;

const Login = () => {
  const { loginUser, currentUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await loginUser(email.trim(), password.trim());
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/profile');
    }
  }, [currentUser, navigate]);

  return (
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
    </LoginWrapper>
  );
};

export default Login;
