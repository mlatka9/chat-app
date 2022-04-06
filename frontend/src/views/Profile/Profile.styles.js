import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
`;

export const ProfileWrapper = styled.div`
  margin: 0 30px 50px;
  @media (max-width: 650px) {
    margin: 0 15px;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 50px;
  @media (max-width: 650px) {
    justify-content: space-between;
    padding: 20px 30px;
  }
`;

export const DetailsTable = styled.div`
  background-color: ${({ theme }) => theme.color.grey700};
  border-radius: 12px;
  > div:first-of-type {
    border-radius: 12px 12px 0 0;
  }
  > div:last-of-type {
    border-radius: 0 0 12px 12px;
  }

  > div {
    border: 1px solid ${({ theme }) => theme.color.grey500};
  }
  > div:not(:last-child) {
    border-bottom: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.grey300};
  border: 1px solid ${({ theme }) => theme.color.grey300};
  border-radius: 12px;
  padding: 8px 35px;
  text-decoration: none;
  @media (max-width: 650px) {
    padding: 6px 30px;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.grey200};
`;

export const SubTitle = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-bottom: 45px;
  color: ${({ theme }) => theme.color.grey200};
`;
