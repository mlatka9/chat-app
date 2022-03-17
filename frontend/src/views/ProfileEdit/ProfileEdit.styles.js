import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
`;

export const EditWrapper = styled.div`
  padding: 30px 50px;
  border: 1px solid ${({ theme }) => theme.color.veryLightGrey};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
  > div {
    margin-bottom: 24px;
  }
`;

export const StyledBackLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;
  margin-bottom: 24px;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const ChangePhoto = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 72px;
    width: 72px;
    border-radius: 8px;
  }
  button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.grey};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-transform: uppercase;
    margin-left: 28px;
    cursor: pointer;
  }
`;
