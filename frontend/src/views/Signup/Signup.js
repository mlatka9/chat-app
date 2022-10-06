import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import LoginWrapper from 'components/Login/LoginWrapper/LoginWrapper';
import { useForm } from 'react-hook-form';
import FormField from 'components/Login/FormField/FormField';
import Button from 'components/Common/Button/Button';
import SocialsBox from 'components/Login/SocialsBox/SocialsBox';
import { Link } from 'react-router-dom';

import {
  LoginErrorMessage,
  LoginParapgraph,
  StyledForm,
} from './Signup.styles';

const headers = {
  mainHeader: 'Join thousands of learners from around the world',
  subHeader:
    'Master web development by making real-life projects. There are multiple paths for you to choose',
};

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState();
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signup(email.trim(), password.trim());
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <LoginWrapper header={headers.mainHeader} subHeader={headers.subHeader}>
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
          options={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long ',
            },
          }}
          error={errors.password?.message}
          register={register}
          icon="lock"
        ></FormField>

        <FormField
          label="confirm password"
          type="password"
          options={{
            required: 'Password is required',
            validate: (val) => {
              if (watch('password') !== val)
                return 'Your passwords do no match';
            },
          }}
          error={errors['confirm password']?.message}
          register={register}
          icon="lock"
        ></FormField>

        <Button type="submit">Start coding now </Button>
        {errorMessage ? (
          <LoginErrorMessage>{errorMessage}</LoginErrorMessage>
        ) : null}
      </StyledForm>

      <SocialsBox />

      <LoginParapgraph>
        Already a member? <Link to="/login">Login</Link>
      </LoginParapgraph>
    </LoginWrapper>
  );
};

export default Signup;
