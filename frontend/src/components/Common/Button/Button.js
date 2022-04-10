import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme, isAccent }) =>
    isAccent ? theme.color.grey800 : theme.color.blue500};
  outline: ${({ theme, isAccent }) =>
    isAccent ? `2px solid ${theme.color.blue500}` : 'none'};
  font-size: ${({ theme }) => theme.fontSize.m};

  color: ${({ theme, isAccent }) =>
    isAccent ? `${theme.color.blue500}` : 'white'};

  padding: 8px 22px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
`;

const Button = ({ children, isAccent, ...props }) => {
  return (
    <StyledButton isAccent={isAccent} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
