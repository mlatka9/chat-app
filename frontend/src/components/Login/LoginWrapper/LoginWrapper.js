import { Wrapper } from './LoginWrapper.styles';

const LoginWrapper = ({ children, header, subHeader }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      {subHeader ? <h2>{subHeader}</h2> : null}
      {children}
    </Wrapper>
  );
};

export default LoginWrapper;
