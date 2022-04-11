import styled from 'styled-components';
import ErrorMessage from 'components/Profile/ErrorMessage/ErrorMessage';

export const LoginErrorMessage = styled(ErrorMessage)`
  text-align: center;
`;

export const StyledForm = styled.form`
  margin: 28px 0 32px;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    margin-top: 22px;
  }
`;

export const LoginParapgraph = styled.p`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey300};
  text-align: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.blue500};
  }
`;

export const DefaultCredential = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.grey500};
  text-align: center;
`;
