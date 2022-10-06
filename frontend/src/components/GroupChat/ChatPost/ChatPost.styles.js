import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 70px 38px;
  @media (max-width: 800px) {
    margin: 0 20px 30px;
  }
  img {
    object-fit: cover;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    margin-right: 28px;
  }
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.grey500};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  margin-right: 20px;
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey500};
`;

export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.grey100};
  margin-top: 8px;
  line-height: 25px;
`;
