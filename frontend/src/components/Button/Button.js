import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
