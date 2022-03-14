import LoginWrapper from 'components/LoginWrapper/LoginWrapper';
import { StyledForm } from './Signup';
import { useForm } from 'react-hook-form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';
import SocialsBox from 'components/SocialsBox/SocialsBox';
import { LoginParapgraph } from './Signup';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = async (data) => {};

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
      </StyledForm>

      <SocialsBox />

      <LoginParapgraph>
        Don’t have an account yet? <Link to="/signup">Register</Link>
      </LoginParapgraph>
    </LoginWrapper>
  );
};

export default Login;
