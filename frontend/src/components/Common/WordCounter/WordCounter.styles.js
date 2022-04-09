import styled from 'styled-components';

export const StyledSpan = styled.span`
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: ${({ theme, isLimitExceeded }) =>
    isLimitExceeded ? theme.color.red500 : theme.color.grey500};
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
