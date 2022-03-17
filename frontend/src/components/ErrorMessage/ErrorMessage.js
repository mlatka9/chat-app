import styled from 'styled-components';

const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.red};
  margin-top: 5px;
  display: block;
`;

export default ErrorMessage;
