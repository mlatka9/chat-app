import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 20px;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    margin-bottom: 5px;
    color: ${({ theme }) => theme.color.grey200};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.color.grey300};
  }
`;
